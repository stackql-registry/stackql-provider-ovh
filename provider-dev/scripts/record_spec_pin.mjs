#!/usr/bin/env node

// Fetches every OVHcloud API family document, applies the deterministic fix
// classes, validates each with @apidevtools/swagger-parser, redacts
// credential-shaped example values, verifies the upstream hashes against
// provider-dev/config/spec_pin.json and only then writes the snapshots into
// provider-dev/downloaded/<version>/<family>.json.
//
// OVHcloud is a multi-document vendor: <base>/<version>/ lists the API
// families and each family is its own OpenAPI 3.0 document, so every
// document is pinned under specs.<version>_<family> and the family list
// itself is part of the pin (a family appearing or disappearing is drift).
//
// - Any fetch, parse, fix or validation failure: fail without writing.
// - No pin recorded: record it (first fetch).
// - Pin matches: refresh the fetched dates only.
// - Pin mismatch (a document changed, a family added or removed): fail
//   without writing, unless --update (a reviewed refresh) in which case the
//   new hashes are recorded.
//
// The pin records the upstream sha256 (drift is always compared against
// upstream; taken over the parsed document with its top-level tags sorted,
// because the vendor serialises that array in an unstable order) plus the
// sanitized sha256 of the file on disk, the per-class fix counts and the
// redaction counts. A fix class absent from a snapshot counts
// 0; add a class when a refresh introduces a new construct (never hand-edit
// a snapshot).
//
// Usage: node provider-dev/scripts/record_spec_pin.mjs [--update]

import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
import SwaggerParser from '@apidevtools/swagger-parser';
import {
  SPEC_BASE_URL, API_VERSIONS, SPEC_FORMAT_QUERY, DOWNLOAD_DIR, PIN_FILE,
  docKey, docFile
} from './lib/spec_helpers.mjs';

const update = process.argv.includes('--update');
const CONCURRENCY = 6;
const ATTEMPTS = 4;

async function fetchBytes(url) {
  let lastErr;
  for (let attempt = 1; attempt <= ATTEMPTS; attempt++) {
    try {
      const res = await fetch(url, { headers: { accept: 'application/json' } });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return Buffer.from(await res.arrayBuffer());
    } catch (err) {
      lastErr = err;
      await new Promise((r) => setTimeout(r, 500 * attempt));
    }
  }
  throw new Error(`fetch ${url} failed after ${ATTEMPTS} attempts: ${lastErr.message}`);
}

// ---------------------------------------------------------------------------
// Deterministic fix classes. Each walks the document, rewrites in place and
// returns a count. The generic classes cover the JSON Schema 2019-09/2020-12
// and OpenAPI 3.1 leaks that swagger-parser (3.0 validation) and stackql's
// loader reject; the OVHcloud classes follow.
// ---------------------------------------------------------------------------

const SCALAR_PREFERENCE = ['string', 'integer', 'number', 'boolean', 'object', 'array'];
const OPERATION_KEYS = ['get', 'post', 'put', 'patch', 'delete', 'head', 'options'];

function walk(node, visit) {
  if (Array.isArray(node)) { node.forEach((v) => walk(v, visit)); return; }
  if (!node || typeof node !== 'object') return;
  visit(node);
  for (const v of Object.values(node)) walk(v, visit);
}

function forEachOperation(doc, fn) {
  for (const [pathKey, pathItem] of Object.entries(doc.paths || {})) {
    for (const verb of OPERATION_KEYS) if (pathItem && pathItem[verb]) fn(pathItem[verb], pathKey, verb);
  }
}

const FIX_CLASSES = [
  {
    name: 'type_null_to_nullable',
    apply: (doc) => { let n = 0; walk(doc, (o) => { if (o.type === 'null') { delete o.type; o.nullable = true; n++; } }); return n; }
  },
  {
    name: 'type_array_lowered',
    apply: (doc) => {
      let n = 0;
      walk(doc, (o) => {
        if (!Array.isArray(o.type)) return;
        const members = o.type.filter((t) => t !== 'null');
        const pick = SCALAR_PREFERENCE.find((t) => members.includes(t));
        if (!pick) throw new Error(`type array ${JSON.stringify(o.type)} has no usable member`);
        if (o.type.includes('null')) o.nullable = true;
        o.type = pick;
        n++;
      });
      return n;
    }
  },
  {
    name: 'numeric_exclusive_bounds',
    apply: (doc) => {
      let n = 0;
      walk(doc, (o) => {
        for (const [excl, bound] of [['exclusiveMinimum', 'minimum'], ['exclusiveMaximum', 'maximum']]) {
          if (typeof o[excl] === 'number') { o[bound] = o[excl]; o[excl] = true; n++; }
        }
      });
      return n;
    }
  },
  { name: 'schema_dialect_key_removed', apply: (doc) => { let n = 0; walk(doc, (o) => { if (typeof o.$schema === 'string') { delete o.$schema; n++; } }); return n; } },
  {
    // OVHcloud leaks its internal scalar type names into a few schemas
    // (type: long on pagination headers, type: duration on a renewal
    // period). Lowered to the OpenAPI type they serialise as; a name not in
    // the table fails the fetch so a new one is reviewed, never guessed.
    name: 'vendor_scalar_type_lowered',
    apply: (doc) => {
      const LOWERED = { long: { type: 'integer', format: 'int64' }, duration: { type: 'string', format: 'duration' } };
      const STANDARD = new Set(['string', 'number', 'integer', 'boolean', 'object', 'array']);
      let n = 0;
      const visit = (node, inProperties) => {
        if (Array.isArray(node)) { node.forEach((v) => visit(v, false)); return; }
        if (!node || typeof node !== 'object') return;
        if (!inProperties && typeof node.type === 'string' && !STANDARD.has(node.type)) {
          const lowered = LOWERED[node.type];
          if (!lowered) throw new Error(`non-standard schema type "${node.type}" has no lowering - add it to vendor_scalar_type_lowered`);
          node.type = lowered.type;
          if (!node.format) node.format = lowered.format;
          n++;
        }
        for (const [k, v] of Object.entries(node)) {
          // values, not schemas: examples, defaults, enums, vendor extensions
          if (k === 'example' || k === 'examples' || k === 'default' || k === 'enum' || k.startsWith('x-')) continue;
          visit(v, k === 'properties');
        }
      };
      visit(doc.paths, false);
      visit(doc.components?.schemas, true);
      return n;
    }
  },
  {
    // The console's per-operation client snippets (curl, Go, Python, ...).
    // A vendor documentation artifact, nearly half of every document by
    // size, that neither stackql nor the docs read.
    name: 'code_samples_removed',
    apply: (doc) => { let n = 0; forEachOperation(doc, (op) => { if ('x-code-samples' in op) { delete op['x-code-samples']; n++; } }); return n; }
  }
];

// ---------------------------------------------------------------------------
// Deterministic redaction of credential-shaped example values (they trip
// GitHub push protection on every artifact that embeds them).
// ---------------------------------------------------------------------------

const REDACTIONS = [
  { name: 'slack_webhook_url_example', re: /https:\/\/hooks\.slack\.com\/services\/[A-Za-z0-9\/]+/g, replacement: 'https://hooks.slack.com/services/EXAMPLE' },
  { name: 'github_token_example', re: /\bgh[pousr]_[A-Za-z0-9]{20,}\b/g, replacement: 'ghp_EXAMPLE' },
  { name: 'aws_access_key_example', re: /\bAKIA[0-9A-Z]{16}\b/g, replacement: 'AKIAEXAMPLEEXAMPLE00' },
  { name: 'bearer_jwt_example', re: /\beyJ[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\.[A-Za-z0-9_-]{10,}\b/g, replacement: 'eyJEXAMPLE.EXAMPLE.EXAMPLE' }
];

// ---------------------------------------------------------------------------
// 1. The family lists
// ---------------------------------------------------------------------------

const families = {};
const targets = [];
for (const version of API_VERSIONS) {
  const indexUrl = `${SPEC_BASE_URL}/${version}/`;
  let index;
  try {
    index = JSON.parse((await fetchBytes(indexUrl)).toString('utf8'));
  } catch (err) {
    console.error(`Family list ${indexUrl} could not be read, nothing written: ${err.message}`);
    process.exit(1);
  }
  families[version] = (index.apis || []).map((a) => a.path).sort();
  if (families[version].length === 0) {
    console.error(`Family list ${indexUrl} is empty, nothing written`);
    process.exit(1);
  }
  for (const family of families[version]) {
    targets.push({ version, family, key: docKey(version, family), filename: docFile(version, family), url: `${SPEC_BASE_URL}/${version}${family}.json${SPEC_FORMAT_QUERY}` });
  }
}
console.log(`Fetching ${targets.length} family documents from ${SPEC_BASE_URL} (${API_VERSIONS.map((v) => `${v}: ${families[v].length}`).join(', ')})`);

// ---------------------------------------------------------------------------
// 2. Download (bounded concurrency); nothing touches disk yet
// ---------------------------------------------------------------------------

let cursor = 0;
const failures = [];
async function worker() {
  while (cursor < targets.length) {
    const t = targets[cursor++];
    try { t.content = await fetchBytes(t.url); } catch (err) { failures.push(err.message); }
  }
}
await Promise.all(Array.from({ length: CONCURRENCY }, worker));
if (failures.length > 0) {
  console.error('Download FAILED, nothing written:');
  for (const f of failures) console.error(`  ${f}`);
  process.exit(1);
}

// ---------------------------------------------------------------------------
// 3. Fix, validate, redact
// ---------------------------------------------------------------------------

const errors = [];
for (const t of targets) {
  let spec;
  try {
    spec = JSON.parse(t.content.toString('utf8'));
  } catch (err) {
    errors.push(`${t.key}: could not be parsed: ${err.message}`);
    continue;
  }
  // The upstream hash is taken over a canonical form, not the raw bytes: the
  // vendor serialises the top-level `tags` array in a different order from
  // one request to the next (measured: 4 of 88 documents changed raw hash
  // across four consecutive fetches, none once tags are sorted by name), so
  // a raw-byte pin would report drift that is not there.
  if (Array.isArray(spec.tags)) spec.tags.sort((a, b) => (a.name < b.name ? -1 : a.name > b.name ? 1 : 0));
  t.sha256 = crypto.createHash('sha256').update(JSON.stringify(spec)).digest('hex');
  t.fixes = {};
  try {
    for (const cls of FIX_CLASSES) t.fixes[cls.name] = cls.apply(spec);
  } catch (err) {
    errors.push(`${t.key}: fix class failed: ${err.message}`);
    continue;
  }
  try {
    await SwaggerParser.validate(structuredClone(spec));
  } catch (err) {
    errors.push(`${t.key}: validation failed: ${String(err.message).split('\n').slice(0, 4).join(' | ')}`);
    continue;
  }
  let opCount = 0;
  forEachOperation(spec, () => { opCount++; });
  t.paths = Object.keys(spec.paths || {}).length;
  t.operations = opCount;
  t.specVersion = spec.info?.version;
  t.openapi = spec.openapi || spec.swagger;

  let sanitized = JSON.stringify(spec, null, 2) + '\n';
  t.redactions = {};
  for (const r of REDACTIONS) {
    const matches = sanitized.match(r.re);
    if (matches) {
      t.redactions[r.name] = matches.length;
      sanitized = sanitized.replace(r.re, r.replacement);
    }
  }
  t.sanitized = sanitized;
  t.sanitizedSha256 = crypto.createHash('sha256').update(sanitized).digest('hex');
}
if (errors.length > 0) {
  console.error(`FAILED with ${errors.length} error(s), nothing written:`);
  for (const e of errors) console.error(`  ${e}`);
  process.exit(1);
}
console.log(`All ${targets.length} documents validated OK (@apidevtools/swagger-parser)`);

// ---------------------------------------------------------------------------
// 4. Pin verification
// ---------------------------------------------------------------------------

let pin = { source: SPEC_BASE_URL, families: {}, specs: {} };
const firstPin = !fs.existsSync(PIN_FILE);
if (!firstPin) pin = JSON.parse(fs.readFileSync(PIN_FILE, 'utf8'));

const drift = [];
const fetchedKeys = new Set(targets.map((t) => t.key));
for (const t of targets) {
  const existing = pin.specs?.[t.key];
  t.status = !existing ? 'pinned' : existing.sha256 === t.sha256 ? 'unchanged' : 'updated';
  if (!firstPin && t.status === 'pinned') drift.push(`family added upstream: ${t.version}${t.family}`);
  if (t.status === 'updated') drift.push(`${t.key}: upstream content changed (pinned ${existing.sha256.slice(0, 12)}..., fetched ${t.sha256.slice(0, 12)}...)`);
}
for (const key of Object.keys(pin.specs || {})) {
  if (!fetchedKeys.has(key)) drift.push(`family removed upstream: ${key}`);
}
if (drift.length > 0 && !update) {
  console.error(`Spec pin verification FAILED, nothing written (${drift.length} difference(s)):`);
  for (const d of drift) console.error(`  ${d}`);
  console.error('Re-run with --update (make refresh-spec) to accept the refresh, then diff the snapshots and record the summary in NOTES.md.');
  process.exit(1);
}

// ---------------------------------------------------------------------------
// 5. Write the snapshots and the pin
// ---------------------------------------------------------------------------

const today = new Date().toISOString().slice(0, 10);
const specs = {};
for (const t of [...targets].sort((a, b) => (a.key < b.key ? -1 : a.key > b.key ? 1 : 0))) {
  const file = path.join(DOWNLOAD_DIR, t.filename);
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, t.sanitized);
  specs[t.key] = {
    url: t.url,
    version: t.version,
    family: t.family,
    filename: t.filename,
    spec_version: t.specVersion,
    openapi: t.openapi,
    paths: t.paths,
    operations: t.operations,
    sha256: t.sha256,
    sanitized_sha256: t.sanitizedSha256,
    fixes: t.fixes,
    redactions: t.redactions,
    bytes: t.content.length,
    fetched: today
  };
}
// snapshots of families that no longer exist upstream (accepted with --update)
for (const key of Object.keys(pin.specs || {})) {
  if (!fetchedKeys.has(key)) {
    const stale = path.join(DOWNLOAD_DIR, pin.specs[key].filename);
    if (fs.existsSync(stale)) fs.rmSync(stale);
  }
}
fs.mkdirSync(path.dirname(PIN_FILE), { recursive: true });
fs.writeFileSync(PIN_FILE, JSON.stringify({ source: SPEC_BASE_URL, families, specs }, null, 2) + '\n');

const totals = { paths: 0, operations: 0, bytes: 0 };
const fixTotals = {};
const redactionTotals = {};
const byStatus = {};
for (const t of targets) {
  totals.paths += t.paths; totals.operations += t.operations; totals.bytes += t.content.length;
  byStatus[t.status] = (byStatus[t.status] || 0) + 1;
  for (const [k, n] of Object.entries(t.fixes)) fixTotals[k] = (fixTotals[k] || 0) + n;
  for (const [k, n] of Object.entries(t.redactions)) redactionTotals[k] = (redactionTotals[k] || 0) + n;
}
console.log(`Spec: ${targets.length} documents, ${totals.paths} paths, ${totals.operations} operations, ${totals.bytes} upstream bytes (${Object.entries(byStatus).map(([k, n]) => `${k}: ${n}`).join(', ')})`);
console.log(`  fix classes: ${Object.entries(fixTotals).map(([k, n]) => `${k}=${n}`).join(', ')}`);
if (Object.keys(redactionTotals).length) console.log(`  redactions: ${Object.entries(redactionTotals).map(([k, n]) => `${k}=${n}`).join(', ')}`);
for (const d of drift) console.log(`  accepted: ${d}`);
console.log(`Snapshots under ${path.relative(process.cwd(), DOWNLOAD_DIR)}, pin recorded in ${path.relative(process.cwd(), PIN_FILE)}`);
