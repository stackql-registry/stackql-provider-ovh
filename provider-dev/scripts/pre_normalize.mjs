#!/usr/bin/env node

// Provider-specific spec surgery applied to provider-dev/source before the
// generic provider-utils normalize pass. Each pass is numbered, counted,
// idempotent, and validates its own preconditions; the run fails without
// writing on any error.
//
// The OVHcloud passes:
//   1. expand identifier lists - a v1 collection read returns the bare
//      identifiers (["id1", "id2"]); with the X-Pagination-Mode header set to
//      CachedObjectList-Pages the same call returns the full objects. Every
//      identifier list that has a keyed read below it (the vendor marks
//      these with x-expanded-response) gets the header as a defaulted
//      parameter (stackql sends a defaulted header on every call) and the
//      keyed read's schema as its row type, so list and get project one
//      shape.
//   2. scalar lists - an array of strings / numbers with no keyed read to
//      expand through is marked for the bare-array wrap with one `value`
//      column (normalize would derive the column name from the operationId).
//   3. scalar reads - a read whose body is a bare string / number / boolean
//      is typed as a one-column object {value}; post_process attaches the
//      response transform that wraps the payload.
//   4. vendor labels - the vendor states each operation's status in
//      x-badges, which no docs renderer reads; the badge label (Beta
//      version, Alpha version, Deprecated, will be removed) is appended to
//      the operation description so it reaches the docs. The description is
//      defaulted from the summary when the vendor wrote only a summary.
//
// Usage: npm run pre-normalize [-- --dry-run]

import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';
import {
  SOURCE_DIR, HTTP_VERBS, EXPAND_HEADER, EXPAND_HEADER_VALUE, SCALAR_COLUMN,
  makeResolver, makeServiceResolver, classifyResponse, skipReason
} from './lib/spec_helpers.mjs';
import { qualifiedPathOf } from './lib/mapping.mjs';

const dryRun = process.argv.includes('--dry-run');
const { scopeOfService } = makeServiceResolver();

function forEachOperation(doc, fn) {
  for (const [pathKey, pathItem] of Object.entries(doc.paths || {})) {
    for (const verb of HTTP_VERBS) if (pathItem[verb]) fn(pathItem[verb], pathKey, verb, pathItem);
  }
}

const jsonContent = (op) => {
  const codes = Object.keys(op.responses || {}).filter((c) => /^2/.test(c)).sort();
  for (const code of codes) {
    const content = op.responses[code].content || {};
    const type = Object.keys(content).find((m) => m.includes('json'));
    if (type && content[type].schema) return { code, type, media: content[type] };
  }
  return null;
};
const pascal = (s) => s.charAt(0).toUpperCase() + s.slice(1);

// 1. Expand identifier lists into full objects.
function expandIdentifierLists(doc, filename, errors) {
  const service = filename.replace(/\.yaml$/, '');
  const resolve = makeResolver(doc);
  let n = 0;
  forEachOperation(doc, (op, pathKey, verb) => {
    if (verb !== 'get') return;
    if ((op.parameters || []).some((p) => p.in === 'header' && p.name === EXPAND_HEADER)) return; // already applied
    if (!op['x-expanded-response']) return;
    if (classifyResponse(op, resolve).shape !== 'array-scalar') return;
    const keyedKey = Object.keys(doc.paths).find((q) => q.startsWith(`${pathKey}/{`) && /^\{[^}]+\}$/.test(q.slice(pathKey.length + 1)) && doc.paths[q].get);
    if (!keyedKey) return;
    const keyed = doc.paths[keyedKey].get;
    // a keyed read that is itself not mapped (skip-coded) or is not an
    // object gives no row type: the list stays a list of identifiers
    if (skipReason(qualifiedPathOf(doc, service, keyedKey, scopeOfService), keyed, resolve, 'get')) return;
    if (classifyResponse(keyed, resolve).shape !== 'object') return;
    const keyedContent = jsonContent(keyed);
    const listContent = jsonContent(op);
    if (!keyedContent || !listContent) { errors.push(`${filename}: GET ${pathKey} cannot be expanded (no JSON response content)`); return; }
    listContent.media.schema = { type: 'array', items: JSON.parse(JSON.stringify(keyedContent.media.schema)) };
    op.parameters = op.parameters || [];
    op.parameters.push({
      in: 'header',
      name: EXPAND_HEADER,
      description: `Sent as ${EXPAND_HEADER_VALUE} by default so the list returns the full objects rather than their identifiers.`,
      required: false,
      schema: { type: 'string', default: EXPAND_HEADER_VALUE }
    });
    n++;
  });
  return n;
}

// 2. Scalar lists: mark for the bare-array wrap with a `value` column.
// The marker, wrapper schema and response $ref are exactly what the
// provider-utils normalize pass writes; normalize treats a marked operation
// as already wrapped and generate emits the objectKey and transform from it.
function markScalarLists(doc, filename, errors) {
  const resolve = makeResolver(doc);
  let n = 0;
  forEachOperation(doc, (op, pathKey, verb) => {
    if (verb !== 'get') return;
    if (op['x-stackql-bare-array-wrap']) return;
    const cls = classifyResponse(op, resolve);
    if (cls.shape !== 'array-scalar') return;
    const content = jsonContent(op);
    const wrapperName = `${pascal(op.operationId)}Response`;
    doc.components = doc.components || {};
    doc.components.schemas = doc.components.schemas || {};
    if (doc.components.schemas[wrapperName]) { errors.push(`${filename}: wrapper schema name ${wrapperName} is already in use (GET ${pathKey})`); return; }
    doc.components.schemas[wrapperName] = {
      type: 'object',
      properties: { items: { type: 'array', items: { type: 'object', properties: { [SCALAR_COLUMN]: { type: cls.itemType } } } } }
    };
    content.media.schema = { $ref: `#/components/schemas/${wrapperName}` };
    op['x-stackql-bare-array-wrap'] = { wrapperKey: 'items', wrapperName, mediaType: content.type, scalar: true, columnName: SCALAR_COLUMN };
    n++;
  });
  return n;
}

// 3. Scalar reads: a one-column object; post_process attaches the transform.
function typeScalarReads(doc) {
  const resolve = makeResolver(doc);
  let n = 0;
  forEachOperation(doc, (op, pathKey, verb) => {
    if (verb !== 'get') return;
    if (op['x-stackQL-scalarWrap']) return;
    const cls = classifyResponse(op, resolve);
    if (cls.shape !== 'scalar') return;
    const content = jsonContent(op);
    const original = resolve(content.media.schema) || {};
    const column = { type: cls.itemType };
    if (original.format) column.format = original.format;
    if (original.description) column.description = original.description;
    if (original.enum) column.enum = original.enum;
    content.media.schema = { type: 'object', properties: { [SCALAR_COLUMN]: column } };
    op['x-stackQL-scalarWrap'] = { column: SCALAR_COLUMN, type: cls.itemType };
    n++;
  });
  return n;
}

// 4. Vendor labels into the operation description.
const STABLE_BADGE = /^stable/i;
function carryVendorLabels(doc) {
  let n = 0;
  forEachOperation(doc, (op) => {
    if (!op.description && op.summary) op.description = op.summary;
    const labels = (op['x-badges'] || []).map((b) => String(b.label || '')).filter((l) => l && !STABLE_BADGE.test(l));
    for (const label of labels) {
      const note = `(${label})`;
      if ((op.description || '').includes(note)) continue;
      op.description = op.description ? `${op.description} ${note}` : note;
      n++;
    }
  });
  return n;
}

// ---------------------------------------------------------------------------
// The pass list. Every entry: { name, run: (doc, filename, errors) => count }
// ---------------------------------------------------------------------------

const PASSES = [
  { name: '1. identifier lists expanded into full objects (X-Pagination-Mode default)', run: expandIdentifierLists },
  { name: '2. scalar lists marked for a `value` column', run: markScalarLists },
  { name: '3. scalar reads typed as a `value` object', run: typeScalarReads },
  { name: '4. vendor status labels carried into descriptions', run: carryVendorLabels }
];

const files = fs.existsSync(SOURCE_DIR) ? fs.readdirSync(SOURCE_DIR).filter((f) => f.endsWith('.yaml')).sort() : [];
if (files.length === 0) {
  console.error(`Error: no service specs in ${SOURCE_DIR} - run make split first`);
  process.exit(1);
}

const pending = [];
const errors = [];
const totals = {};
for (const f of files) {
  const fp = path.join(SOURCE_DIR, f);
  const doc = yaml.load(fs.readFileSync(fp, 'utf8'));
  for (const pass of PASSES) {
    const n = pass.run(doc, f, errors) || 0;
    totals[pass.name] = (totals[pass.name] || 0) + n;
  }
  pending.push({ fp, doc });
}
if (errors.length > 0) {
  console.error(`FAILED with ${errors.length} error(s), nothing written:`);
  for (const e of errors) console.error(`  ${e}`);
  process.exit(1);
}
if (!dryRun) {
  for (const { fp, doc } of pending) fs.writeFileSync(fp, yaml.dump(doc, { lineWidth: -1, noRefs: true }));
}
console.log(`pre_normalize: ${PASSES.length} pass(es) over ${files.length} service specs${dryRun ? ' (dry run)' : ''}`);
for (const [k, v] of Object.entries(totals)) console.log(`  ${k}: ${v}`);
