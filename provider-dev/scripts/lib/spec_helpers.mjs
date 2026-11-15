// Shared helpers and the single source of provider constants for every
// pipeline script (bin/fetch-spec.sh, bin/split.mjs, build_inventory.mjs,
// map_operations.mjs, pre_normalize.mjs, post_process.mjs, graphql_merge.mjs)
// and the test harnesses. Single-sourced so the inventory and the
// authoritative mapping can never disagree on a classification.
//
// OVHcloud publishes one OpenAPI 3.0 document per API family (cloud, me,
// dedicated/server, ...) for each API version (v1, v2). The pin, the
// inventory and the split all work on "qualified paths": the path as the
// vendor writes it, prefixed with the API version (/v1/cloud/project,
// /v2/iam/policy), so a rule can never confuse /v1/domain with /v2/domain.

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import yaml from 'js-yaml';

// ---------------------------------------------------------------------------
// Provider constants
// ---------------------------------------------------------------------------

export const PROVIDER_NAME = 'ovh';
export const PROVIDER_TITLE = 'OVHcloud';

// Where the vendor publishes the specs. The EU endpoint serves the superset
// of API families (CA and US serve subsets of the same documents), so it is
// the one pinned. <base>/<version>/ lists the families; each family document
// is <base>/<version><family>.json?format=openapi3.
export const SPEC_BASE_URL = 'https://api.eu.ovhcloud.com';
export const API_VERSIONS = ['v1', 'v2'];
export const SPEC_FORMAT_QUERY = '?format=openapi3';

// Regional API hosts and OAuth2 token hosts, keyed by the OVH_ENDPOINT values
// the vendor's Terraform provider and go-ovh client accept. The server
// variable `api_host` resolves through an x-stackQL-envVarSelector on
// OVH_ENDPOINT (provider-dev/config/servers.json); the token URL variable
// `auth_host` does the same (provider-dev/config/provider_config.json).
export const ENDPOINT_ENV_VAR = 'OVH_ENDPOINT';
export const DEFAULT_ENDPOINT = 'ovh-eu';
export const API_HOSTS = {
  'ovh-eu': 'api.eu.ovhcloud.com',
  'ovh-ca': 'api.ca.ovhcloud.com',
  'ovh-us': 'api.us.ovhcloud.com'
};
export const AUTH_HOSTS = {
  'ovh-eu': 'auth.eu.ovhcloud.com',
  'ovh-ca': 'auth.ca.ovhcloud.com',
  'ovh-us': 'auth.us.ovhcloud.com'
};
export const API_HOST_VARIABLE = 'api_host';

// Scoping: the Public Cloud project. Paths under these prefixes are rebased
// onto a server template whose project variable carries x-stackQL-envVar
// OVH_CLOUD_PROJECT_SERVICE (the Terraform provider's variable). Each scope
// names the qualified path prefix it strips, the vendor path parameter it
// replaces and the server variable users write in WHERE; its key is also the
// server kind in provider-dev/config/servers.json.
export const PROJECT_ENV_VAR = 'OVH_CLOUD_PROJECT_SERVICE';
export const SCOPES = {
  cloud_project: { version: 'v1', prefix: '/v1/cloud/project/{serviceName}', param: 'serviceName', variable: 'service_name' },
  public_cloud_project: { version: 'v2', prefix: '/v2/publicCloud/project/{projectId}', param: 'projectId', variable: 'project_id' }
};

// Wire casing of parameters and body properties. post_process sets
// request.nativeCasing on every method and the provider config carries
// snake_case_aliases: true so the user surface is snake_case.
export const WIRE_CASING = 'camel';

// The header that turns a v1 list of identifiers into a list of the full
// objects (the vendor's console and Terraform provider use the same mode).
// pre_normalize declares it, with this default, on every identifier list
// that has a keyed read; stackql sends a defaulted header parameter on every
// call.
export const EXPAND_HEADER = 'X-Pagination-Mode';
export const EXPAND_HEADER_VALUE = 'CachedObjectList-Pages';

// The single column a scalar response (a bare string / number / boolean, or
// an array of them with no keyed read to expand through) surfaces as.
export const SCALAR_COLUMN = 'value';

export const HTTP_VERBS = ['get', 'post', 'put', 'patch', 'delete'];

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..', '..');
export const REPO_ROOT = repoRoot;
export const DOWNLOAD_DIR = path.join(repoRoot, 'provider-dev', 'downloaded');
export const CONFIG_DIR = path.join(repoRoot, 'provider-dev', 'config');
export const SOURCE_DIR = path.join(repoRoot, 'provider-dev', 'source');
export const PIN_FILE = path.join(CONFIG_DIR, 'spec_pin.json');
export const PROVIDER_DIR = path.join(repoRoot, 'provider-dev', 'openapi', 'src', PROVIDER_NAME, 'v00.00.00000');
export const SERVICES_DIR = path.join(PROVIDER_DIR, 'services');
const serviceNamesPath = path.join(CONFIG_DIR, 'service_names.json');
const serversPath = path.join(CONFIG_DIR, 'servers.json');

// ---------------------------------------------------------------------------
// Generic utilities
// ---------------------------------------------------------------------------

export function camelToSnake(s) {
  return String(s)
    .replace(/([a-z0-9])([A-Z])/g, '$1_$2')
    .replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2')
    .replace(/[-. ]/g, '_')
    .toLowerCase();
}

export function pathParams(pathKey) {
  return (pathKey.match(/\{[^}]+\}/g) || []).map((s) => s.slice(1, -1));
}

export function normalizePath(pathKey) {
  return pathKey.replace(/\{[^}]+\}/g, '{}');
}

export function loadSpec(file) {
  const text = fs.readFileSync(file, 'utf8');
  return /\.ya?ml$/i.test(file) ? yaml.load(text) : JSON.parse(text);
}

export function dumpYaml(doc) {
  return yaml.dump(doc, { lineWidth: -1, noRefs: true });
}

// Resolves local $refs against the containing spec document
export function makeResolver(spec) {
  return function resolve(schema, depth = 0) {
    if (!schema || depth > 10) return schema;
    if (schema.$ref) {
      const parts = schema.$ref.replace(/^#\//, '').split('/').map((p) => p.replace(/~1/g, '/').replace(/~0/g, '~'));
      let node = spec;
      for (const p of parts) node = node?.[p];
      return resolve(node, depth + 1);
    }
    return schema;
  };
}

// ---------------------------------------------------------------------------
// Pinned documents
// ---------------------------------------------------------------------------

// '/dedicated/server' -> 'dedicated_server' (the vendor's casing is kept)
export function familySlug(familyPath) {
  return familyPath.replace(/^\//, '').replace(/\//g, '_');
}
export function docKey(version, familyPath) {
  return `${version}_${familySlug(familyPath)}`;
}
export function docFile(version, familyPath) {
  return `${version}/${familySlug(familyPath)}.json`;
}
export function qualify(version, pathKey) {
  return `/${version}${pathKey}`;
}

// Every pinned family document, in pin order (sorted by key):
// [{ key, version, family, file, doc }]
export function loadPinnedDocs({ parse = true } = {}) {
  if (!fs.existsSync(PIN_FILE)) throw new Error(`no spec pin at ${PIN_FILE} - run make fetch-spec first`);
  const pin = JSON.parse(fs.readFileSync(PIN_FILE, 'utf8'));
  const out = [];
  for (const key of Object.keys(pin.specs).sort()) {
    const entry = pin.specs[key];
    const file = path.join(DOWNLOAD_DIR, entry.filename);
    if (!fs.existsSync(file)) throw new Error(`pinned document ${entry.filename} is missing from provider-dev/downloaded - run make fetch-spec`);
    out.push({ key, version: entry.version, family: entry.family, file, doc: parse ? JSON.parse(fs.readFileSync(file, 'utf8')) : null });
  }
  return out;
}

// A deterministic operationId for the operations the vendor leaves without
// one (most of v1): the verb plus the qualified path, snake_cased.
//   get /v1/cloud/project/{serviceName}/instance -> get_v1_cloud_project_service_name_instance
export function synthesizeOperationId(verb, qualifiedPath) {
  const segs = qualifiedPath.split('/').filter(Boolean).map((s) => camelToSnake(s.replace(/[{}]/g, '')));
  return [verb, ...segs].join('_');
}

// ---------------------------------------------------------------------------
// Service rules (provider-dev/config/service_names.json)
// ---------------------------------------------------------------------------

// Ordered rules against the qualified path; first match wins; a path that
// matches no rule is an error the caller surfaces. A rule carries:
//   service  the stackql service the path belongs to
//   prefix   the qualified-path prefix that is the naming root (stripped
//            before resource names are derived)
//   root     the resource name of the prefix itself (when nothing remains)
//   scope    a key of SCOPES when the service is rebased onto a scoped server
//   excluded classify for the inventory but never emit the service
export function makeServiceResolver() {
  const config = JSON.parse(fs.readFileSync(serviceNamesPath, 'utf8'));
  const rules = (config.rules || []).map((r) => ({ ...r, re: new RegExp(r.pathRegex), excluded: !!r.excluded }));
  const services = config.services || {};
  const excludedServices = new Set(rules.filter((r) => r.excluded).map((r) => r.service));
  const resolveRule = (qualifiedPath) => {
    for (const rule of rules) if (rule.re.test(qualifiedPath)) return rule;
    return null;
  };
  const resolveService = (qualifiedPath) => resolveRule(qualifiedPath)?.service || null;
  // one scope per service (a service document has one document-level server)
  const scopeOfService = {};
  for (const r of rules) {
    const scope = r.scope || null;
    const seen = scopeOfService[r.service];
    if (seen !== undefined && seen !== null && scope !== null && seen !== scope) {
      throw new Error(`service ${r.service} mixes scopes ${seen} and ${scope}`);
    }
    if (seen === undefined || scope) scopeOfService[r.service] = scope;
  }
  return { resolveRule, resolveService, excludedServices, rules, services, scopeOfService };
}

export function loadServers() {
  return JSON.parse(fs.readFileSync(serversPath, 'utf8'));
}

// The path key a qualified path takes inside its service document, relative
// to the server it is served from: the version is always dropped (it is part
// of every server URL); inside a scoped service the scope prefix is dropped
// too, and a path outside the prefix is a "root path" that keeps its key and
// is pinned to the unscoped server of its version.
export function servicePathKey(qualifiedPath, scopeName) {
  const version = qualifiedPath.split('/')[1];
  if (scopeName) {
    const scope = SCOPES[scopeName];
    if (qualifiedPath.startsWith(scope.prefix + '/')) return { key: qualifiedPath.slice(scope.prefix.length), root: false };
    return { key: qualifiedPath.slice(version.length + 1), root: true };
  }
  return { key: qualifiedPath.slice(version.length + 1), root: false };
}

// ---------------------------------------------------------------------------
// Response and request classification
// ---------------------------------------------------------------------------

export function success2xx(op) {
  const codes = Object.keys(op.responses || {}).filter((c) => /^2/.test(c)).sort();
  for (const code of codes) {
    const content = op.responses[code].content || {};
    const jsonType = Object.keys(content).find((m) => m.includes('json'));
    if (jsonType && content[jsonType].schema) return { code, schema: content[jsonType].schema, mediaTypes: Object.keys(content) };
    if (Object.keys(content).length > 0) return { code, schema: null, mediaTypes: Object.keys(content) };
  }
  return { code: codes[0] || null, schema: null, mediaTypes: [] };
}

export const SCALAR_TYPES = ['string', 'number', 'integer', 'boolean'];

// Response shape per the inventory contract:
//   array-object  - a JSON array of objects (a row per item)
//   array-scalar  - a JSON array of strings / numbers (identifiers, values)
//   object        - a JSON object with declared properties
//   map           - a JSON object with additionalProperties only (no columns)
//   scalar        - a JSON string / number / boolean
//   none          - no 2xx content
export function classifyResponse(op, resolve) {
  const { code, schema, mediaTypes } = success2xx(op);
  if (!schema) return { shape: 'none', mediaTypes, code };
  // an operation already wrapped (pre_normalize / normalize ran) keeps the
  // shape it had on the wire, so a re-run classifies it the same way
  const wrap = op['x-stackql-bare-array-wrap'];
  if (wrap) return { shape: wrap.scalar ? 'array-scalar' : 'array-object', itemType: wrap.scalar ? 'string' : 'object', mediaTypes, code };
  if (op['x-stackQL-scalarWrap']) return { shape: 'scalar', itemType: op['x-stackQL-scalarWrap'].type, mediaTypes, code };
  const s = resolve(schema) || {};
  if (s.type === 'array' || (s.items && !s.properties)) {
    const items = resolve(s.items) || {};
    const scalar = SCALAR_TYPES.includes(items.type) && !items.properties;
    return { shape: scalar ? 'array-scalar' : 'array-object', itemType: scalar ? items.type : 'object', mediaTypes, code };
  }
  if (SCALAR_TYPES.includes(s.type)) return { shape: 'scalar', itemType: s.type, mediaTypes, code };
  const props = s.properties || (s.allOf || []).reduce((acc, part) => ({ ...acc, ...((resolve(part) || {}).properties || {}) }), {});
  if (Object.keys(props).length === 0) return { shape: 'map', mediaTypes, code };
  return { shape: 'object', mediaTypes, code };
}

// Request body kind: object (named properties - naive translation gives
// columns), array (a bare array - not addressable), map (free-form keys).
export function classifyBody(op, resolve) {
  if (!op.requestBody) return { present: false, mediaTypes: [], kind: '' };
  const content = (resolve(op.requestBody) || {}).content || {};
  const mediaTypes = Object.keys(content);
  const jsonType = mediaTypes.find((m) => m.includes('json'));
  const schema = jsonType ? resolve(content[jsonType].schema) : null;
  let kind = 'other';
  if (schema) {
    if (schema.type === 'array' || (schema.items && !schema.properties)) kind = 'array';
    else if (schema.properties || schema.allOf) kind = 'object';
    else if (schema.additionalProperties) kind = 'map';
    else kind = schema.type || 'other';
  }
  return { present: true, mediaTypes, kind };
}

// PUT is not REPLACE until proven live; PATCH is presumed partial.
export function updateSemantics(verb) {
  if (verb === 'patch') return 'patch-partial-presumed';
  if (verb === 'put') return 'put-replace-unverified';
  return '';
}

// Vendor labels carried into the docs, never hidden. OVHcloud states the
// status of every operation in x-badges and flags deprecation explicitly.
export function vendorLabels(op) {
  const labels = [];
  for (const badge of op['x-badges'] || []) {
    const label = String(badge.label || '');
    if (/^beta/i.test(label)) labels.push('beta');
    else if (/^alpha/i.test(label)) labels.push('alpha');
  }
  if (op.deprecated) labels.push('deprecated');
  return labels;
}

// Pagination-looking parameters present on the operation: a per-endpoint
// confirmation for the inventory, never an assumption. OVHcloud pages with
// request headers (X-Pagination-*), so header parameters are reported too.
const PAGINATION_PARAM_NAMES = ['limit', 'offset', 'page', 'pageSize', 'page_size', 'per_page', 'perPage', 'cursor', 'next', 'nextToken', 'next_token', 'nextPageToken', 'page_token', 'pageToken', 'maxResults', 'max_results', 'startAt', 'start', 'marker', 'after', 'before', 'skip', 'top', 'size'];
export function paginationParams(op, pathItem, resolve) {
  return [...(pathItem?.parameters || []), ...(op.parameters || [])]
    .map((p) => resolve(p))
    .filter((p) => p && ((p.in === 'query' && PAGINATION_PARAM_NAMES.includes(p.name)) || (p.in === 'header' && /^X-Pagination-/i.test(p.name))))
    .map((p) => (p.in === 'header' ? `header:${p.name}` : p.name));
}

// Which parameter addresses the operation: the project variable inside a
// scoped service, else the first path parameter, else none.
export function scopeOf(qualifiedPath) {
  for (const scope of Object.values(SCOPES)) {
    if (qualifiedPath === scope.prefix || qualifiedPath.startsWith(scope.prefix + '/')) return scope.param;
  }
  const params = pathParams(qualifiedPath);
  return params.length ? params[0] : 'none';
}

// ---------------------------------------------------------------------------
// Skip rules - operations that stay visible in the CSV artifacts but are not
// mapped to StackQL methods. Each rule: (ctx) => boolean, where ctx carries
// { qualifiedPath, verb, op, body, resp }.
// ---------------------------------------------------------------------------

export const SKIP_RULES = [
  // the vendor marks the operation deprecated AND names the route that
  // replaces it (x-replacement-route): the replacement is mapped instead.
  // Deprecated operations with no replacement stay mapped and labelled.
  { code: 'deprecated_superseded', test: ({ op }) => !!op.deprecated && !!op['x-replacement-route'] },
  // a read that declares no response content has no columns to project
  { code: 'no_response_schema', test: ({ verb, resp }) => verb === 'get' && resp.shape === 'none' },
  // a read whose response is a free-form map (additionalProperties only) has
  // no declared columns
  { code: 'untyped_map_response', test: ({ verb, resp }) => verb === 'get' && resp.shape === 'map' },
  // a bare-array or free-form-map request body is not addressable by naive
  // body translation and has no single-item form on these endpoints
  { code: 'bare_array_body', test: ({ body }) => body.present && body.kind === 'array' },
  { code: 'untyped_map_body', test: ({ body }) => body.present && body.kind === 'map' }
];

export function skipReason(qualifiedPath, op, resolve, verb) {
  const ctx = { qualifiedPath, verb, op, body: classifyBody(op, resolve), resp: classifyResponse(op, resolve) };
  for (const rule of SKIP_RULES) if (rule.test(ctx)) return rule.code;
  return '';
}

// ---------------------------------------------------------------------------
// Resource naming, shared by build_inventory.mjs (draft columns) and
// map_operations.mjs (authoritative mapping)
// ---------------------------------------------------------------------------

// The static segments of a qualified path after the rule's naming prefix.
export function staticsAfterPrefix(qualifiedPath, rule) {
  const prefix = rule.prefix || '';
  // a prefix that ends in a parameter (/v1/cloud/project/{serviceName}) is
  // also the root when the parameter is absent: the keyed read's node
  if (qualifiedPath === prefix.replace(/(\/\{[^}]+\})+$/, '')) return [];
  if (prefix && !(qualifiedPath === prefix || qualifiedPath.startsWith(prefix + '/'))) {
    throw new Error(`path ${qualifiedPath} matched rule ${rule.pathRegex} but is not under its prefix ${prefix}`);
  }
  return qualifiedPath.slice(prefix.length).split('/').filter(Boolean).filter((s) => !s.startsWith('{'));
}

// pluralize() turns "me" into "us" and mangles a few vendor words; these are
// kept or pluralized as written.
const PLURAL_OVERRIDES = { me: 'me', vps: 'vps', dns: 'dns', nas: 'nas', sms: 'sms', cdn: 'cdn', xdsl: 'xdsl', dnssec: 'dnssec', ceph: 'ceph', ipv4: 'ipv4', ipv6: 'ipv6', smtp: 'smtp', data: 'data', metadata: 'metadata', quota: 'quotas', info: 'infos' };
export function pluralizeSegment(snake, pluralizeFn) {
  const parts = snake.split('_');
  const last = parts[parts.length - 1];
  const plural = last in PLURAL_OVERRIDES ? PLURAL_OVERRIDES[last] : pluralizeFn(last);
  return [...parts.slice(0, -1), plural].join('_');
}

// Resource name from static segments: snake_case each, pluralize the last.
// An empty list is the rule's root resource.
export function resourceNameFromStatics(statics, rule, pluralizeFn) {
  if (statics.length === 0) {
    if (!rule.root) throw new Error(`rule ${rule.pathRegex} needs a "root" resource name (a path equals its prefix)`);
    return rule.root;
  }
  const snake = statics.map(camelToSnake);
  return [...snake.slice(0, -1), pluralizeSegment(snake[snake.length - 1], pluralizeFn)].join('_');
}

// ---------------------------------------------------------------------------
// Generated-provider helpers (post_process.mjs, tests)
// ---------------------------------------------------------------------------

export function listServiceFiles(dir = SERVICES_DIR) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir).filter((f) => f.endsWith('.yaml')).sort();
}

// Iterate every method of every resource in a generated service document:
// fn(method, {resource, resourceName, methodName, verb, pathKey, operation})
export function forEachMethod(doc, fn) {
  const resources = doc.components?.['x-stackQL-resources'] || {};
  for (const [resourceName, resource] of Object.entries(resources)) {
    for (const [methodName, method] of Object.entries(resource.methods || {})) {
      const ref = method.operation?.$ref || '';
      const m = ref.match(/^#\/paths\/(.+)\/(get|post|put|patch|delete)$/);
      const pathKey = m ? m[1].replace(/~1/g, '/').replace(/~0/g, '~') : null;
      const verb = m ? m[2] : null;
      const operation = pathKey ? doc.paths?.[pathKey]?.[verb] : null;
      fn(method, { resource, resourceName, methodName, verb, pathKey, operation });
    }
  }
}

// The SQL verb a method is bound to (EXEC when absent from every sqlVerbs list)
export function sqlVerbOf(resource, resourceName, methodName) {
  const ref = `#/components/x-stackQL-resources/${resourceName}/methods/${methodName}`;
  for (const [verb, list] of Object.entries(resource.sqlVerbs || {})) {
    if ((list || []).some((x) => x.$ref === ref)) return verb;
  }
  return 'exec';
}

// RFC 4180 CSV helpers shared by the inventory and the mapping scripts.
export function parseCsv(text) {
  const rows = [];
  let row = [], field = '', inQuotes = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (inQuotes) {
      if (c === '"') {
        if (text[i + 1] === '"') { field += '"'; i++; } else { inQuotes = false; }
      } else { field += c; }
    } else if (c === '"') {
      inQuotes = true;
    } else if (c === ',') {
      row.push(field); field = '';
    } else if (c === '\n' || c === '\r') {
      if (c === '\r' && text[i + 1] === '\n') i++;
      row.push(field); field = '';
      if (row.length > 1 || row[0] !== '') rows.push(row);
      row = [];
    } else { field += c; }
  }
  if (field !== '' || row.length > 0) { row.push(field); rows.push(row); }
  return rows;
}

export function csvField(v) {
  const s = String(v ?? '');
  return /[",\n\r]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
}
