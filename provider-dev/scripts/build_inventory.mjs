#!/usr/bin/env node

// Builds the endpoint inventory (provider-dev/config/endpoint_inventory.csv)
// from the pinned family documents: one row per operation with the columns
// that decide everything downstream - API version and family, scope, path
// params, pagination-looking parameters (a per-endpoint confirmation, not an
// assumption; OVHcloud pages with X-Pagination-* request headers), request
// body presence / media types / kind, the update-semantics presumption,
// vendor labels, the response shape, whether an identifier list can be
// expanded into full objects, the proposed service (from the rules in
// service_names.json), a draft resource and verb, and a skip reason code
// where the operation will not be mapped.
//
// The proposed columns are drafts - map_operations.mjs produces the
// authoritative mapping (it also hoists action segments onto the resource
// they act on, which needs the whole path tree of a service).
// Fails without writing if any path lacks a service rule.
//
// Usage: npm run build-inventory

import fs from 'fs';
import path from 'path';
import pluralize from 'pluralize';
import {
  CONFIG_DIR, HTTP_VERBS, pathParams, makeResolver, makeServiceResolver, loadPinnedDocs, qualify, csvField,
  classifyResponse, classifyBody, updateSemantics, vendorLabels, paginationParams,
  scopeOf, skipReason, staticsAfterPrefix, resourceNameFromStatics
} from './lib/spec_helpers.mjs';

const outPath = path.join(CONFIG_DIR, 'endpoint_inventory.csv');

let pinned;
try {
  pinned = loadPinnedDocs();
} catch (err) {
  console.error(`Error: ${err.message}`);
  process.exit(1);
}
const { resolveRule, excludedServices } = makeServiceResolver();

const DRAFT_VERB = { get: 'select', post: 'insert', put: 'update', patch: 'update', delete: 'delete' };

const rows = [];
const errors = [];
const stats = { byService: {}, byVerb: {}, byShape: {}, byLabel: {}, byDisposition: {}, byVersion: {} };
const paginationSchemes = {};
const bump = (obj, key) => { obj[key] = (obj[key] || 0) + 1; };
let expandable = 0;

for (const { version, family, doc } of pinned) {
  const resolve = makeResolver(doc);
  for (const [pathKey, pathItem] of Object.entries(doc.paths || {})) {
    for (const verb of [...HTTP_VERBS, 'head']) {
      const op = pathItem[verb];
      if (!op) continue;
      const qualifiedPath = qualify(version, pathKey);
      const rule = resolveRule(qualifiedPath);
      if (!rule) {
        errors.push(`no service rule matches ${verb.toUpperCase()} ${qualifiedPath}`);
        continue;
      }
      const service = rule.service;
      const resp = classifyResponse(op, resolve);
      const body = classifyBody(op, resolve);
      const labels = vendorLabels(op);
      const pageParams = paginationParams(op, pathItem, resolve);
      const skip = excludedServices.has(service) ? `excluded_service_${service}` : skipReason(qualifiedPath, op, resolve, verb);

      // an identifier list (array of scalars) with a keyed read below it is
      // expandable: the vendor names the expanded type in x-expanded-response
      const keyedRead = Object.keys(doc.paths).find((q) => q.startsWith(`${pathKey}/{`) && /^\{[^}]+\}$/.test(q.slice(pathKey.length + 1)) && doc.paths[q].get);
      const expands = verb === 'get' && resp.shape === 'array-scalar' && !!op['x-expanded-response'] && !!keyedRead;
      if (expands && !skip) expandable++;

      // draft resource: the node (path minus trailing parameters) named from
      // its static segments under the rule's prefix
      let draftResource = '';
      if (!skip) {
        const segs = qualifiedPath.split('/').filter(Boolean);
        while (segs.length && segs[segs.length - 1].startsWith('{')) segs.pop();
        try {
          draftResource = resourceNameFromStatics(staticsAfterPrefix('/' + segs.join('/'), rule), rule, pluralize);
        } catch (err) {
          errors.push(`${verb.toUpperCase()} ${qualifiedPath}: ${err.message}`);
        }
      }

      const scheme = pageParams.filter((p) => p.startsWith('header:')).sort().join('+') || (pageParams.length ? `query:${pageParams.join('+')}` : '');
      if (scheme && verb === 'get') bump(paginationSchemes, `${version} ${scheme}`);

      rows.push({
        api_version: version,
        family,
        method: verb,
        path: qualifiedPath,
        operation_id: op.operationId || '',
        scope: scopeOf(qualifiedPath),
        path_params: pathParams(qualifiedPath).join(';'),
        pagination_params: pageParams.join(';'),
        has_request_body: body.present ? 'y' : 'n',
        body_media_types: body.mediaTypes.join(';'),
        body_kind: body.kind,
        update_semantics: updateSemantics(verb),
        labels: labels.join(';'),
        response_shape: resp.shape,
        response_item_type: resp.itemType || '',
        expanded_response: op['x-expanded-response'] || '',
        expandable_list: expands ? 'y' : '',
        response_media_types: resp.mediaTypes.join(';'),
        replacement_route: op['x-replacement-route'] || '',
        proposed_service: service,
        proposed_resource: draftResource,
        proposed_verb: skip ? '' : DRAFT_VERB[verb] || '',
        skip_reason: skip
      });

      bump(stats.byShape, `${verb} ${resp.shape}`);
      bump(stats.byVersion, version);
      for (const l of labels) bump(stats.byLabel, l);
      bump(stats.byDisposition, skip ? `skipped: ${skip}` : 'mapped');
      if (!skip) {
        bump(stats.byService, service);
        bump(stats.byVerb, DRAFT_VERB[verb] || verb);
      }
    }
  }
}

if (errors.length > 0) {
  console.error(`FAILED with ${errors.length} error(s), nothing written:`);
  for (const e of errors.slice(0, 100)) console.error(`  ${e}`);
  console.error('Add ordered rules to provider-dev/config/service_names.json (first match wins).');
  process.exit(1);
}
if (rows.length === 0) {
  console.error('FAILED: the pinned documents have no operations');
  process.exit(1);
}

const columns = Object.keys(rows[0]);
const csv = [columns.join(',')]
  .concat(rows.map((r) => columns.map((c) => csvField(r[c] ?? '')).join(',')))
  .join('\n') + '\n';
fs.writeFileSync(outPath, csv);

console.log(`Endpoint inventory written to ${path.relative(process.cwd(), outPath)} (${rows.length} operations from ${pinned.length} pinned documents)\n`);
const printStats = (title, obj, limit = 0) => {
  console.log(title);
  const entries = Object.entries(obj).sort((a, b) => b[1] - a[1]);
  for (const [k, v] of (limit ? entries.slice(0, limit) : entries)) console.log(`  ${String(v).padStart(5)}  ${k}`);
  if (limit && entries.length > limit) console.log(`         ... and ${entries.length - limit} more`);
};
printStats('By API version:', stats.byVersion);
printStats('\nBy disposition:', stats.byDisposition);
printStats('\nMapped operations by proposed service (top 25):', stats.byService, 25);
printStats('\nMapped operations by draft StackQL verb (actions are hoisted to EXEC by map_operations):', stats.byVerb);
printStats('\nBy response shape:', stats.byShape);
printStats('\nBy vendor label:', stats.byLabel);
console.log(`\nIdentifier lists expandable into full objects (${'X-Pagination-Mode'} header): ${expandable}`);

console.log('\nPagination check (declared paging parameters on reads - confirm the scheme per endpoint, see pagination-and-pushdown.md):');
if (Object.keys(paginationSchemes).length === 0) console.log('  none - no list endpoint declares a paging parameter');
else for (const [k, v] of Object.entries(paginationSchemes).sort((a, b) => b[1] - a[1])) console.log(`  ${String(v).padStart(5)}  ${k}`);
