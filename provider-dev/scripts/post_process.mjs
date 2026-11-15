#!/usr/bin/env node

// Post-generation fixes for everything the generator cannot express.
// Idempotent; re-run after every generate. Every rule is numbered and
// commented; the run validates and fails without writing.
//
// The OVHcloud rules:
//   1. path-level `servers` on the root paths of the project-scoped services
//      (bin/split.mjs marks them x-stackQL-serverKind; normalize strips
//      path-level servers, so the override is written here). /cloud/project
//      and /cloud/project/{serviceName} are served from the unscoped v1
//      server, not from .../cloud/project/{service_name}.
//   2. request.nativeCasing: camel on every method (the wire is camelCase;
//      paired with snake_case_aliases: true in provider_config.json).
//   3. scalar reads: the response transform that wraps a bare string /
//      number / boolean payload into the {value} object pre_normalize typed.
//   4. scalar lists: the generator's per-item template writes each value as
//      an unescaped quoted string; replaced with a JSON-safe one that keeps
//      numbers as numbers.
//   5. objectKey: $ on single-object responses that have an `items`
//      property, so stackql's default $.items row key does not take the
//      property for the row list.
//   6. every service has resources and every resource has a method.
//
// Usage: npm run post-process

import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import {
  SERVICES_DIR, WIRE_CASING, SCALAR_COLUMN, SCOPES,
  listServiceFiles, forEachMethod, sqlVerbOf, dumpYaml, loadServers, makeServiceResolver
} from './lib/spec_helpers.mjs';

if (!fs.existsSync(SERVICES_DIR)) {
  console.error(`Error: ${SERVICES_DIR} not found - run the generate step first`);
  process.exit(1);
}

const docs = new Map();
for (const f of listServiceFiles()) docs.set(f, yaml.load(fs.readFileSync(path.join(SERVICES_DIR, f), 'utf8')));
if (docs.size === 0) {
  console.error('Error: no generated service specs found');
  process.exit(1);
}

const servers = loadServers();
const { scopeOfService } = makeServiceResolver();
const errors = [];
const counts = {};
const bump = (k, n = 1) => { counts[k] = (counts[k] || 0) + n; };
const clone = (v) => JSON.parse(JSON.stringify(v));

// 1. Root paths of a scoped service are pinned to the unscoped server of
// their API version.
function pinRootPaths() {
  for (const [f, doc] of docs) {
    const service = f.replace(/\.yaml$/, '');
    const scopeName = scopeOfService[service] || null;
    for (const [pathKey, pathItem] of Object.entries(doc.paths || {})) {
      const kind = pathItem['x-stackQL-serverKind'];
      if (!kind) continue;
      if (!servers[kind]) { errors.push(`${f}: ${pathKey} names server kind "${kind}" which is not in servers.json`); continue; }
      pathItem.servers = clone(servers[kind]);
      delete pathItem['x-stackQL-serverKind'];
      bump('root paths pinned to the unscoped server');
    }
    const top = doc.servers?.[0];
    if (!top?.variables?.api_host?.['x-stackQL-envVarSelector']) errors.push(`${f}: document-level server lacks the api_host selector`);
    if (scopeName) {
      const variable = SCOPES[scopeName].variable;
      if (!top?.variables?.[variable]?.['x-stackQL-envVar']) errors.push(`${f}: scoped server lacks the ${variable} x-stackQL-envVar variable`);
      for (const [pathKey, pathItem] of Object.entries(doc.paths || {})) {
        if (!pathItem.servers && pathKey.includes(`{${SCOPES[scopeName].param}}`)) errors.push(`${f}: ${pathKey} still carries the scope path parameter`);
      }
    }
  }
}

// 2. request.nativeCasing on every method.
function setNativeCasing(casing) {
  if (!casing) return;
  for (const doc of docs.values()) {
    forEachMethod(doc, (method) => {
      method.request = { ...(method.request || {}), nativeCasing: casing };
      bump(`nativeCasing: ${casing}`);
    });
  }
}

// 3. Scalar reads: wrap the bare payload into {value}.
function wrapScalarReads() {
  for (const [f, doc] of docs) {
    forEachMethod(doc, (method, { operation, resourceName, methodName }) => {
      const marker = operation?.['x-stackQL-scalarWrap'];
      if (!marker) return;
      const mediaType = method.response?.mediaType || 'application/json';
      const schema = operation.responses?.[method.response?.openAPIDocKey || '200']?.content?.[mediaType]?.schema;
      if (!schema?.properties?.[SCALAR_COLUMN]) { errors.push(`${f}: ${resourceName}.${methodName} is marked as a scalar read but its response schema has no ${SCALAR_COLUMN} property`); return; }
      method.response = {
        ...(method.response || {}),
        overrideMediaType: mediaType,
        schema_override: clone(schema),
        transform: { type: 'golang_template_text_v0.3.0', body: `{"${SCALAR_COLUMN}": {{ . }}}` }
      };
      bump('scalar read transforms');
    });
  }
}

// 4. Scalar lists: a JSON-safe per-item template.
function fixScalarListTransforms() {
  for (const doc of docs.values()) {
    forEachMethod(doc, (method) => {
      const body = method.response?.transform?.body;
      if (typeof body !== 'string' || !body.includes('jsonMapFromString')) return;
      const m = body.match(/\{"([A-Za-z0-9_]+)":\[\{\{- range \$i, \$v := \$items -\}\}\{\{- if \$i -\}\},\{\{- end -\}\}\{"([A-Za-z0-9_]+)":"\{\{- \$v -\}\}"\}\{\{- end -\}\}\]\}/);
      if (!m) return;
      const [, wrapperKey, column] = m;
      method.response.transform.body = [
        '{{- $wrapped := printf "{\\"items\\":%s}" . -}}',
        '{{- $parsed := jsonMapFromString $wrapped -}}',
        '{{- $items := index $parsed "items" -}}',
        `{"${wrapperKey}":[{{- range $i, $v := $items -}}{{- if $i -}},{{- end -}}{"${column}":{{ toJson $v }}}{{- end -}}]}`
      ].join('\n');
      bump('scalar list transforms made JSON-safe');
    });
  }
}

// 5. Objects that carry an `items` property. With no objectKey declared
// stackql looks for the row list at $.items (its default object key), so a
// single-object response that happens to have an `items` array property
// (a cart and its item ids, a page of results inside a report) would be
// projected as those items rather than as the object. An explicit root
// objectKey keeps the object as the row.
function pinRootObjectKey() {
  for (const doc of docs.values()) {
    const resolve = (schema, depth = 0) => {
      let node = schema;
      while (node && node.$ref && depth++ < 10) {
        node = node.$ref.replace(/^#\//, '').split('/').reduce((acc, part) => acc?.[part.replace(/~1/g, '/').replace(/~0/g, '~')], doc);
      }
      return node;
    };
    forEachMethod(doc, (method, { operation }) => {
      if (!operation || method.response?.objectKey) return;
      const mediaType = method.response?.mediaType || 'application/json';
      const schema = resolve(operation.responses?.[method.response?.openAPIDocKey || '200']?.content?.[mediaType]?.schema);
      const items = resolve(schema?.properties?.items);
      if (!items || !(items.type === 'array' || items.items)) return;
      method.response = { ...(method.response || {}), objectKey: '$' };
      bump('root objectKey on objects with an items property');
    });
  }
}

// 6. Sanity: every service has resources; every resource has at least one method.
function validateResources() {
  for (const [f, doc] of docs) {
    const resources = doc.components?.['x-stackQL-resources'] || {};
    if (Object.keys(resources).length === 0) errors.push(`${f}: no x-stackQL-resources (an empty service fails the meta-route walk - exclude it in service_names.json or fix the mapping)`);
    for (const [name, res] of Object.entries(resources)) {
      if (Object.keys(res.methods || {}).length === 0) errors.push(`${f}: resource ${name} has no methods`);
    }
  }
}

pinRootPaths();
setNativeCasing(WIRE_CASING);
wrapScalarReads();
fixScalarListTransforms();
pinRootObjectKey();
validateResources();

if (errors.length > 0) {
  console.error(`FAILED with ${errors.length} error(s), nothing written:`);
  for (const e of errors.slice(0, 100)) console.error(`  ${e}`);
  process.exit(1);
}
for (const [f, doc] of docs) fs.writeFileSync(path.join(SERVICES_DIR, f), dumpYaml(doc));
console.log(`post_process: ${docs.size} service(s) written`);
for (const [k, v] of Object.entries(counts)) console.log(`  ${k}: ${v}`);
if (Object.keys(counts).length === 0) console.log('  (no rules applied)');

// The sqlVerbOf helper is exported for tests that need to know the verb a
// method landed in; referenced here so linters see it used.
void sqlVerbOf;
