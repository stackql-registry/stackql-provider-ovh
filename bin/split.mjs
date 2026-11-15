#!/usr/bin/env node

// Splits the pinned OVHcloud family documents into per-service StackQL
// service specs under provider-dev/source.
//
// OVHcloud publishes one OpenAPI document per API family and version; each
// pinned document (provider-dev/downloaded/<version>/<family>.json) is split
// on its own with provider-utils split(), so components are pruned to what a
// service references and two families never share (or collide on) a schema
// name. Most families become one service; the two Public Cloud families are
// sub-split by product.
//
// The service for each path comes from the ordered rules in
// provider-dev/config/service_names.json, matched against the qualified path
// (/v1/... or /v2/...); first match wins; a path that matches no rule FAILS
// the run without writing - add a rule. A rule with "excluded": true
// classifies the path for the inventory but does not emit the service.
//
// What the split does to each service document:
//   - operationIds: the vendor leaves most v1 operations without one;
//     a deterministic id is synthesised from the verb and qualified path
//     (provider-utils generate and the bare-array wrap both key on it).
//   - servers: the server template of the service's kind from
//     provider-dev/config/servers.json. Every template carries the api_host
//     variable (x-stackQL-envVarSelector on OVH_ENDPOINT).
//   - Public Cloud project scoping: paths under the scope prefix
//     (/v1/cloud/project/{serviceName}, /v2/publicCloud/project/{projectId})
//     lose the prefix and its path parameter; the project is the server
//     variable (x-stackQL-envVar OVH_CLOUD_PROJECT_SERVICE). Paths of a
//     scoped service outside the prefix ("root paths") keep their key and
//     are marked x-stackQL-serverKind, which post_process.mjs turns into a
//     path-level servers override (normalize strips path-level servers).
//
// Usage:
//   node bin/split.mjs [--output-dir provider-dev/source] [--services a,b,c]
//                      [--overwrite] [--verbose]

import fs from 'fs';
import os from 'os';
import path from 'path';
import yaml from 'js-yaml';
import { providerdev } from '@stackql/provider-utils';
import {
  PROVIDER_NAME, PROVIDER_TITLE, SOURCE_DIR, HTTP_VERBS, SCOPES,
  makeServiceResolver, loadServers, loadPinnedDocs, qualify, synthesizeOperationId, servicePathKey
} from '../provider-dev/scripts/lib/spec_helpers.mjs';

const args = process.argv.slice(2);
const getArg = (flag) => {
  const index = args.indexOf(flag);
  return index !== -1 ? args[index + 1] : null;
};

const providerName = getArg('--provider-name') || PROVIDER_NAME;
const outputDir = getArg('--output-dir') ? path.resolve(getArg('--output-dir')) : SOURCE_DIR;
const servicesFilter = getArg('--services') ? getArg('--services').split(',').map((s) => s.trim()) : null;
const overwrite = args.includes('--overwrite');
const verbose = args.includes('--verbose');

let pinned;
try {
  pinned = loadPinnedDocs();
} catch (err) {
  console.error(`Error: ${err.message}`);
  process.exit(1);
}
const { resolveRule, excludedServices, services: serviceMeta, scopeOfService } = makeServiceResolver();
const servers = loadServers();

// Prepare the output directory, preserving non-spec files (e.g. .gitkeep)
fs.mkdirSync(outputDir, { recursive: true });
const existing = fs.readdirSync(outputDir).filter((f) => /\.(yaml|yml|json)$/.test(f));
if (existing.length > 0 && !overwrite) {
  console.error(`Error: output directory ${outputDir} is not empty. Use --overwrite to replace existing service specs.`);
  process.exit(1);
}

// provider-utils split() logs every hundred operations; keep the run readable
const quiet = (fn) => async (...a) => {
  if (verbose) return fn(...a);
  const { log, info } = console;
  console.log = () => {}; console.info = () => {};
  const write = process.stdout.write.bind(process.stdout);
  process.stdout.write = () => true;
  try { return await fn(...a); } finally { console.log = log; console.info = info; process.stdout.write = write; }
};
const splitQuiet = quiet(providerdev.split);

const errors = [];
const unmapped = new Set();
const outputs = new Map(); // service -> { doc, source, counts }
const tmpRoot = fs.mkdtempSync(path.join(os.tmpdir(), 'stackql-split-'));

try {
  for (const { key, version, family, doc } of pinned) {
    const pathKeys = Object.keys(doc.paths || {});
    if (pathKeys.length === 0) continue; // a family that declares schemas only (v1 /products)

    // operationIds, before the split copies operations into services
    let synthesized = 0;
    const seenIds = new Set();
    for (const pathKey of pathKeys) {
      for (const verb of HTTP_VERBS) {
        const op = doc.paths[pathKey][verb];
        if (!op) continue;
        if (!op.operationId) { op.operationId = synthesizeOperationId(verb, qualify(version, pathKey)); synthesized++; }
        if (seenIds.has(op.operationId)) errors.push(`${key}: duplicate operationId ${op.operationId}`);
        seenIds.add(op.operationId);
      }
    }

    const tmpDoc = path.join(tmpRoot, `${key}.json`);
    const tmpOut = path.join(tmpRoot, `${key}.out`);
    fs.writeFileSync(tmpDoc, JSON.stringify(doc));
    const svcDiscriminatorFn = (pathKey) => {
      const rule = resolveRule(qualify(version, pathKey));
      if (!rule) {
        unmapped.add(qualify(version, pathKey));
        return 'unmapped_service';
      }
      return rule.service;
    };
    const ok = await splitQuiet({
      apiDoc: tmpDoc,
      providerName,
      outputDir: tmpOut,
      svcDiscriminator: 'function',
      svcDiscriminatorFn,
      overwrite: true,
      verbose: false,
      svcNameOverrides: {}
    });
    if (!ok) { errors.push(`${key}: provider-utils split failed`); continue; }

    for (const outFile of fs.readdirSync(tmpOut).sort()) {
      const service = outFile.replace(/\.(yaml|yml|json)$/, '');
      if (service === 'unmapped_service') continue;
      if (outputs.has(service)) {
        errors.push(`service ${service} is produced by two family documents (${outputs.get(service).source} and ${key}) - a service draws from one document`);
        continue;
      }
      const svcDoc = yaml.load(fs.readFileSync(path.join(tmpOut, outFile), 'utf8'));
      const scopeName = scopeOfService[service] || null;
      const scope = scopeName ? SCOPES[scopeName] : null;
      const kind = scopeName || version;
      if (!servers[kind]) { errors.push(`service ${service}: no server kind "${kind}" in provider-dev/config/servers.json`); continue; }

      // rebase the path keys onto the service's server
      const newPaths = {};
      let rebased = 0, roots = 0;
      for (const [pathKey, pathItem] of Object.entries(svcDoc.paths || {})) {
        const { key: newKey, root } = servicePathKey(qualify(version, pathKey), scopeName);
        if (newKey in newPaths) { errors.push(`service ${service}: rebase collision on ${newKey}`); continue; }
        if (scope && !root) {
          const dropScopeParam = (params) => (params || []).filter((p) => !(p && p.in === 'path' && p.name === scope.param));
          if (pathItem.parameters) pathItem.parameters = dropScopeParam(pathItem.parameters);
          for (const verb of HTTP_VERBS) {
            if (pathItem[verb] && pathItem[verb].parameters) pathItem[verb].parameters = dropScopeParam(pathItem[verb].parameters);
          }
          rebased++;
        } else if (scope && root) {
          // a root path of a scoped service: pinned to the unscoped server of
          // its version by post_process.mjs
          pathItem['x-stackQL-serverKind'] = version;
          roots++;
        }
        newPaths[newKey] = pathItem;
      }
      svcDoc.paths = newPaths;
      svcDoc.servers = JSON.parse(JSON.stringify(servers[kind]));
      const meta = serviceMeta[service];
      if (!meta) { errors.push(`service ${service}: no title/description in provider-dev/config/service_names.json "services"`); continue; }
      svcDoc.info = {
        title: `${PROVIDER_TITLE} ${meta.title} API`,
        description: meta.description,
        version: doc.info?.version || '1.0',
        'x-stackQL-apiVersion': version,
        'x-stackQL-specFamily': `${version}${family}`
      };
      delete svcDoc.tags;
      delete svcDoc.security;
      outputs.set(service, { doc: svcDoc, source: key, paths: Object.keys(newPaths).length, rebased, roots, synthesized, kind });
    }
  }
} finally {
  fs.rmSync(tmpRoot, { recursive: true, force: true });
}

if (unmapped.size > 0) {
  errors.push('paths with no service rule in provider-dev/config/service_names.json:');
  for (const t of [...unmapped].sort()) errors.push(`  ${t}`);
}
if (errors.length > 0) {
  console.error(`FAILED with ${errors.length} error(s), nothing written:`);
  for (const e of errors) console.error(`  ${e}`);
  process.exit(1);
}

// Clear previous service specs only after every document split and validated
for (const f of existing) fs.rmSync(path.join(outputDir, f));
const written = [];
const skipped = [];
for (const service of [...outputs.keys()].sort()) {
  if (excludedServices.has(service)) { skipped.push(service); continue; }
  if (servicesFilter && !servicesFilter.includes(service)) continue;
  const o = outputs.get(service);
  fs.writeFileSync(path.join(outputDir, `${service}.yaml`), yaml.dump(o.doc, { lineWidth: -1, noRefs: true }));
  written.push(`${service}.yaml  <- ${o.source}  (${o.paths} paths, server ${o.kind}${o.rebased ? `, ${o.rebased} rebased` : ''}${o.roots ? `, ${o.roots} root paths` : ''})`);
}

console.log(`Split completed: ${written.length} service specs written to ${path.relative(process.cwd(), outputDir)} from ${pinned.length} pinned documents`);
for (const f of written) console.log(`  ${f}`);
if (skipped.length) console.log(`Excluded services (every operation skip-coded, not emitted): ${skipped.sort().join(', ')}`);
