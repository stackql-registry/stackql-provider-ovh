#!/usr/bin/env node

// Populates stackql_resource_name, stackql_method_name, stackql_verb and
// stackql_object_key in provider-dev/config/all_services.csv from the split
// service specs in provider-dev/source. Deterministic and re-runnable on
// spec refreshes; review the CSV diff after running - a method moving
// resource or a resource renamed is a breaking change to review, not noise.
// Manual mapping decisions are applied as rules here, never as hand-edits
// to the CSV.
//
// The derivation is lib/mapping.mjs (read its header for the rules):
//   GET  array response        -> SELECT <resource>.list
//   GET  anything else         -> SELECT <resource>.get
//   POST on a readable node    -> INSERT <resource>.create
//   PUT / PATCH                -> UPDATE <resource>.update
//   DELETE                     -> DELETE <resource>.delete
//   any verb on a node with no read (an action segment)
//                              -> EXEC   <nearest readable ancestor>.<segments>
//   skip rules                 -> skip_this_resource (reason-coded in the inventory)
//
// stackql_object_key stays blank on every row: the v1 and v2 APIs return
// bare arrays and bare objects, never an envelope; bare arrays are wrapped
// by normalize + generate and carry no objectKey of their own.
//
// Validates before writing: every CSV row mapped or skipped with a reason,
// every spec operation present in the CSV, (service, resource, method)
// unique, and unique required-parameter signatures per (resource, sqlVerb).
// Fails without writing on violations.
//
// Usage: npm run map-operations [-- --report] [-- --notes] [-- --out other.csv]
//   --report prints every derived mapping without writing - the fastest way
//   to design RESOURCE_RULES / METHOD_RULES for a new service.
//   --notes prints the overloads and signature clashes the derivation
//   resolved on its own.

import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import {
  CONFIG_DIR, SOURCE_DIR, HTTP_VERBS, pathParams, makeResolver, makeServiceResolver, parseCsv, csvField
} from './lib/spec_helpers.mjs';
import { mapService } from './lib/mapping.mjs';

const csvPath = path.join(CONFIG_DIR, 'all_services.csv');
const report = process.argv.includes('--report');
const showNotes = process.argv.includes('--notes');

// ---------------------------------------------------------------------------
// Override tables. Matched on the qualified path with parameters collapsed
// to {} (/v1/cloud/project/{}/kube/{}/nodepool). First match wins.
// ---------------------------------------------------------------------------

// Explicit resource names for a node (the path without trailing parameters).
// Used where the mechanical name would collide or mislead.
//
// The cases here are singular / plural sibling segments that are different
// things but pluralize to one name. A global collection and its per-service
// twin (/sms/virtualNumbers and /sms/{serviceName}/virtualNumbers) are left
// to the overload rule: one resource, list and list_by_<parameter>.
const RESOURCE_RULES = [
  // servicePack is the pack in force (a status object); servicePacks lists the packs on offer
  { service: 'dedicated_cloud', re: /^\/v1\/dedicatedCloud\/\{\}\/servicePack$/, resource: 'service_pack_statuses' },
  // option lists / reads / removes one option; options is one summary object for the domain
  { service: 'domain', re: /^\/v1\/domain\/\{\}\/options$/, resource: 'service_options' },
  // /license/hycu/{serviceName} is the license; .../license is its downloadable file
  { service: 'license_hycu', re: /^\/v1\/license\/hycu\/\{\}\/license$/, resource: 'license_files' },
  // offerChange is the one scheduled change (read, schedule, cancel); offerChanges lists the offers available
  { service: 'telephony', re: /^\/v1\/telephony\/\{\}\/service\/\{\}\/offerChange$/, resource: 'service_scheduled_offer_changes' }
];

// Method name / SQL verb overrides: { verb, re, method?, sqlVerb?, resource?, service? }
const METHOD_RULES = [
  // POST .../kube/{kubeId}/update forces a version update; hoisted onto
  // clusters it would take the name of the PUT that edits the cluster
  { service: 'cloud_kube', verb: 'post', re: /^\/v1\/cloud\/project\/\{\}\/kube\/\{\}\/update$/, method: 'force_update' }
];

// ---------------------------------------------------------------------------
// Map every split service specification
// ---------------------------------------------------------------------------

const resolver = makeServiceResolver();
const specFiles = fs.existsSync(SOURCE_DIR) ? fs.readdirSync(SOURCE_DIR).filter((f) => f.endsWith('.yaml')).sort() : [];
if (specFiles.length === 0) {
  console.error(`Error: no service specs in ${SOURCE_DIR} - run make split first`);
  process.exit(1);
}

const errors = [];
const mappings = new Map(); // `${filename}::${path}::${verb}` -> mapping
const signatures = new Map(); // same key -> required-parameter signature
const allNotes = [];
for (const filename of specFiles) {
  const service = filename.replace(/\.yaml$/, '');
  const doc = yaml.load(fs.readFileSync(path.join(SOURCE_DIR, filename), 'utf8'));
  let result;
  try {
    result = mapService(doc, service, resolver, { resourceRules: RESOURCE_RULES, methodRules: METHOD_RULES });
  } catch (err) {
    errors.push(`${filename}: ${err.message}`);
    continue;
  }
  const resolve = makeResolver(doc);
  for (const [k, m] of result.rows) {
    const [pathKey, verb] = k.split('::');
    mappings.set(`${filename}::${pathKey}::${verb}`, m);
    const op = doc.paths[pathKey][verb];
    const requiredQuery = (op.parameters || []).map((p) => resolve(p)).filter((p) => p && p.in === 'query' && p.required).map((p) => p.name);
    signatures.set(`${filename}::${pathKey}::${verb}`, [...pathParams(pathKey), ...requiredQuery].sort().join(','));
  }
  for (const [pathKey, pathItem] of Object.entries(doc.paths || {})) {
    for (const verb of HTTP_VERBS) {
      if (pathItem[verb] && !result.rows.has(`${pathKey}::${verb}`)) errors.push(`${filename} ${verb} ${pathKey}: not mapped and not skipped`);
    }
  }
  allNotes.push(...result.notes);
}

// ---------------------------------------------------------------------------
// CSV read / transform
// ---------------------------------------------------------------------------

if (!fs.existsSync(csvPath)) {
  console.error(`Error: ${csvPath} not found - run the generate-mappings (analyze) step first (make mappings)`);
  process.exit(1);
}
const rows = parseCsv(fs.readFileSync(csvPath, 'utf8'));
const header = rows[0];
const col = Object.fromEntries(header.map((h, i) => [h, i]));
for (const required of ['filename', 'path', 'verb', 'operationId', 'stackql_resource_name', 'stackql_method_name', 'stackql_verb', 'stackql_object_key']) {
  if (!(required in col)) {
    console.error(`Missing expected CSV column: ${required}`);
    process.exit(1);
  }
}

const seenKeys = new Set();
const stats = { select: 0, insert: 0, update: 0, delete: 0, exec: 0, skipped: 0 };
const skipsByReason = {};
for (const row of rows.slice(1)) {
  const key = `${row[col.filename]}::${row[col.path]}::${row[col.verb]}`;
  seenKeys.add(key);
  const m = mappings.get(key);
  if (!m) {
    errors.push(`in CSV but not in the split specs: ${key}`);
    continue;
  }
  row[col.stackql_resource_name] = m.resource;
  if (m.resource === 'skip_this_resource') {
    stats.skipped++;
    skipsByReason[m.skip] = (skipsByReason[m.skip] || 0) + 1;
    row[col.stackql_method_name] = '';
    row[col.stackql_verb] = '';
    row[col.stackql_object_key] = '';
    continue;
  }
  row[col.stackql_method_name] = m.method;
  row[col.stackql_verb] = m.sqlVerb;
  row[col.stackql_object_key] = m.objectKey;
  stats[m.sqlVerb]++;
}
// every spec operation must have a CSV row (else generate-provider misses it)
for (const key of mappings.keys()) {
  if (!seenKeys.has(key)) errors.push(`in spec but not in CSV: ${key}`);
}

// ---------------------------------------------------------------------------
// Consistency checks
// ---------------------------------------------------------------------------

const methodSeen = new Map();
const sigSeen = new Map();
for (const row of rows.slice(1)) {
  const resource = row[col.stackql_resource_name];
  if (!resource || resource === 'skip_this_resource') continue;
  const service = row[col.filename].replace(/\.yaml$/, '');
  if (!/^[a-z][a-z0-9_]*$/.test(resource)) errors.push(`${service}: resource name "${resource}" is not snake_case (${row[col.path]})`);
  if (!/^[a-z][a-z0-9_]*$/.test(row[col.stackql_method_name])) errors.push(`${service}.${resource}: method name "${row[col.stackql_method_name]}" is not snake_case (${row[col.path]})`);
  const methodKey = `${service}.${resource}.${row[col.stackql_method_name]}`;
  if (methodSeen.has(methodKey)) {
    errors.push(`duplicate method ${methodKey} (${methodSeen.get(methodKey)} and ${row[col.path]}:${row[col.verb]}) - add a RESOURCE_RULES or METHOD_RULES entry`);
  }
  methodSeen.set(methodKey, `${row[col.path]}:${row[col.verb]}`);

  const sqlVerb = row[col.stackql_verb];
  if (sqlVerb === 'exec') continue;
  const sig = signatures.get(`${row[col.filename]}::${row[col.path]}::${row[col.verb]}`);
  const sigKey = `${service}.${resource}.${sqlVerb}::${sig}`;
  if (sigSeen.has(sigKey)) {
    errors.push(`signature clash on ${service}.${resource} ${sqlVerb} [${sig}] (${sigSeen.get(sigKey)} and ${row[col.stackql_method_name]}) - split the resource or make one EXEC`);
  }
  sigSeen.set(sigKey, row[col.stackql_method_name]);
}

if (report) {
  console.log('service,resource,method,verb,objectKey,path,httpVerb');
  for (const row of rows.slice(1)) {
    console.log([row[col.filename].replace(/\.yaml$/, ''), row[col.stackql_resource_name], row[col.stackql_method_name], row[col.stackql_verb], row[col.stackql_object_key], row[col.path], row[col.verb]].join(','));
  }
}
if (showNotes) {
  console.log(`\n${allNotes.length} overload / signature note(s):`);
  for (const n of allNotes) console.log(`  ${n}`);
}
if (errors.length > 0) {
  console.error(`FAILED with ${errors.length} error(s), nothing written:`);
  for (const e of errors.slice(0, 200)) console.error(`  ${e}`);
  if (errors.length > 200) console.error(`  ... and ${errors.length - 200} more`);
  process.exit(1);
}
if (report) {
  console.log('\n(report only - nothing written)');
  process.exit(0);
}

const outArgIdx = process.argv.indexOf('--out');
const outPath = outArgIdx !== -1 ? path.resolve(process.argv[outArgIdx + 1]) : csvPath;
const out = rows.map((r) => r.map(csvField).join(',')).join('\n') + '\n';
fs.writeFileSync(outPath, out);

// summary
const resourcesByService = new Map();
const selectable = new Set();
for (const row of rows.slice(1)) {
  const resource = row[col.stackql_resource_name];
  if (!resource || resource === 'skip_this_resource') continue;
  const service = row[col.filename].replace(/\.yaml$/, '');
  if (!resourcesByService.has(service)) resourcesByService.set(service, new Set());
  resourcesByService.get(service).add(resource);
  if (row[col.stackql_verb] === 'select') selectable.add(`${service}.${resource}`);
}
let resourceCount = 0;
for (const set of resourcesByService.values()) resourceCount += set.size;
console.log(`Mapped ${rows.length - 1} operations: select ${stats.select}, insert ${stats.insert}, update ${stats.update}, delete ${stats.delete}, exec ${stats.exec}; skipped ${stats.skipped}${stats.skipped ? ` (${Object.entries(skipsByReason).sort().map(([k, v]) => `${k}: ${v}`).join(', ')})` : ''}`);
console.log(`${resourcesByService.size} services, ${resourceCount} resources (${selectable.size} selectable, ${resourceCount - selectable.size} not selectable); ${allNotes.length} overload / signature note(s) resolved by rule (--notes lists them)`);
console.log('Resources per service:');
for (const [service, resources] of [...resourcesByService.entries()].sort()) {
  console.log(`  ${service}: ${resources.size}`);
}
