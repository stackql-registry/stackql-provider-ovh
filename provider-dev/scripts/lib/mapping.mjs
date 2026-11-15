// The operation -> resource.method mapping, shared by map_operations.mjs (the
// authoritative all_services.csv), build_inventory.mjs (the draft columns)
// and pre_normalize.mjs (which needs to know what each list read became).
//
// OVHcloud paths are a regular tree: /family/{service}/thing/{id}/sub/{subId}
// with collection reads on the static segment, keyed reads on the parameter
// after it, and actions as POSTs on a trailing verb segment. The derivation
// below turns that tree into resources mechanically; RESOURCE_RULES and
// METHOD_RULES in map_operations.mjs are the exceptions.
//
//   resource   every distinct static-segment path under the rule's naming
//              prefix is a "node"; its resource name is those segments in
//              snake_case with the last one pluralized
//              (/dedicated/server/{serviceName}/task/{taskId} -> tasks,
//              /ip/{ip}/firewall/{ipOnFirewall}/rule -> firewall_rules).
//              The prefix itself is the rule's root resource (servers).
//   GET        array response -> SELECT list; anything else -> SELECT get
//   POST       on a node that can be read -> INSERT create
//   PUT/PATCH  on a node that can be read -> UPDATE update (where a path has
//              both, PATCH is update and PUT is EXEC replace - PUT is not a
//              proven full replacement)
//   DELETE     on a node that can be read or created -> DELETE delete
//   actions    a node with no read (POST .../reboot, PUT .../changeContact,
//              DELETE .../cors) is not a resource: its operations are hoisted
//              to the nearest ancestor node that has a read, as EXEC methods
//              named for the skipped segments (servers.reboot,
//              storages.delete_cors). With no such ancestor the node stays a
//              (non-selectable) resource with create / update / delete.
//   overloads  two operations of one resource that derive the same method
//              name: the one deeper in the path gets _by_<last parameter>.
//              Two methods of one SQL verb with the same required-parameter
//              signature cannot be routed: the later one becomes EXEC.

import pluralize from 'pluralize';
import {
  HTTP_VERBS, SCOPES, camelToSnake, pathParams, makeResolver, classifyResponse, skipReason,
  staticsAfterPrefix, resourceNameFromStatics
} from './spec_helpers.mjs';

// First words that make a PUT / PATCH action segment read as a command
// (start, updatePolicy, setAsAdmin, allowDeletion); such a segment is hoisted
// under its own name, any other gets an update_ prefix (update_quota).
const ACTION_VERBS = new Set([
  'activate', 'allow', 'apply', 'attach', 'cancel', 'change', 'configure', 'confirm', 'deactivate', 'deploy', 'detach', 'disable',
  'edit', 'enable', 'kill', 'lock', 'migrate', 'modify', 'move', 'rename', 'renew', 'reset', 'restart', 'restore', 'resume', 'set',
  'start', 'stop', 'suspend', 'switch', 'terminate', 'toggle', 'unlock', 'update', 'upgrade', 'validate'
]);

// The qualified path (/v1/..., /v2/...) of a path key in a split service doc.
export function qualifiedPathOf(doc, service, pathKey, scopeOfService) {
  const version = doc.info?.['x-stackQL-apiVersion'];
  if (!version) throw new Error(`${service}: service document has no info.x-stackQL-apiVersion (re-run make split)`);
  const scopeName = scopeOfService[service] || null;
  const isRoot = !!doc.paths[pathKey]['x-stackQL-serverKind'];
  if (scopeName && !isRoot) return SCOPES[scopeName].prefix + pathKey;
  return `/${version}${pathKey}`;
}

// The node of a qualified path: the path with its trailing parameters
// removed. depth = how many trailing parameters were removed.
function nodeOf(qualifiedPath) {
  const segs = qualifiedPath.split('/').filter(Boolean);
  let depth = 0;
  while (segs.length && segs[segs.length - 1].startsWith('{')) { segs.pop(); depth++; }
  return { node: '/' + segs.join('/'), depth };
}

// The parent node: drop the last static segment, then trailing parameters.
function parentNode(node) {
  const segs = node.split('/').filter(Boolean);
  if (segs.length === 0) return null;
  segs.pop();
  while (segs.length && segs[segs.length - 1].startsWith('{')) segs.pop();
  return segs.length ? '/' + segs.join('/') : null;
}

// Maps every operation of one split service document.
// Returns { rows: Map(`${pathKey}::${verb}` -> mapping), notes: [] } where a
// mapping is { resource, method, sqlVerb, objectKey, skip, qualifiedPath, shape }.
export function mapService(doc, service, resolver, { resourceRules = [], methodRules = [] } = {}) {
  const { resolveRule, scopeOfService } = resolver;
  const resolve = makeResolver(doc);
  const notes = [];
  const rows = new Map();

  // ---- index the operations ------------------------------------------------
  const ops = [];
  for (const [pathKey, pathItem] of Object.entries(doc.paths || {})) {
    for (const verb of HTTP_VERBS) {
      const op = pathItem[verb];
      if (!op) continue;
      const qualifiedPath = qualifiedPathOf(doc, service, pathKey, scopeOfService);
      const rule = resolveRule(qualifiedPath);
      if (!rule || rule.service !== service) throw new Error(`${service}: ${qualifiedPath} resolves to service ${rule?.service} (stale split - re-run make split)`);
      const resp = classifyResponse(op, resolve);
      const skip = skipReason(qualifiedPath, op, resolve, verb);
      const { node, depth } = nodeOf(qualifiedPath);
      ops.push({ pathKey, verb, op, qualifiedPath, rule, resp, skip, node, depth, params: pathParams(qualifiedPath) });
    }
  }

  // ---- nodes: which have a (mapped) read, which exist at all ------------------
  const nodes = new Map(); // node -> { rule, ops: [], hasRead }
  for (const o of ops) {
    if (o.skip) continue;
    if (!nodes.has(o.node)) nodes.set(o.node, { rule: o.rule, ops: [], hasRead: false });
    const n = nodes.get(o.node);
    n.ops.push(o);
    if (o.verb === 'get') n.hasRead = true;
  }

  const norm = (p) => p.replace(/\{[^}]+\}/g, '{}');
  const nodeResource = (node, rule) => {
    const normalized = norm(node);
    for (const r of resourceRules) {
      if (r.service && r.service !== service) continue;
      if (r.re.test(normalized)) return r.resource;
    }
    return resourceNameFromStatics(staticsAfterPrefix(node, rule), rule, pluralize);
  };

  // nearest ancestor node (same service) that has a read
  const readableAncestor = (node) => {
    let cur = parentNode(node);
    while (cur) {
      const n = nodes.get(cur);
      if (n && n.hasRead) return cur;
      // an ancestor path with no operations of its own is walked through,
      // but never past the service boundary
      const rule = resolveRule(cur);
      if (!rule || rule.service !== service) return null;
      cur = parentNode(cur);
    }
    return null;
  };

  // ---- derive -----------------------------------------------------------------
  const derived = []; // { o, resource, method, sqlVerb }
  for (const [node, n] of nodes) {
    const verbsAt = (pathKey) => new Set(n.ops.filter((x) => x.pathKey === pathKey).map((x) => x.verb));
    const ancestor = n.hasRead ? null : readableAncestor(node);
    if (!n.hasRead && ancestor) {
      // an action node: hoist onto the readable ancestor
      const an = nodes.get(ancestor);
      const resource = nodeResource(ancestor, an.rule);
      const extra = node.slice(ancestor.length).split('/').filter(Boolean).filter((s) => !s.startsWith('{')).map(camelToSnake).join('_');
      for (const o of n.ops) {
        // POST .../reboot -> reboot; DELETE .../cors -> delete_cors;
        // PUT .../quota -> update_quota, but PUT .../start, .../updatePolicy,
        // .../setAsAdmin already read as commands and keep their name
        const commandLike = ACTION_VERBS.has(extra.split('_')[0]);
        const prefix = o.verb === 'post' ? '' : o.verb === 'delete' ? 'delete_' : commandLike ? '' : 'update_';
        derived.push({ o, resource, method: `${prefix}${extra}`, sqlVerb: 'exec', hoisted: true });
      }
      continue;
    }
    const resource = nodeResource(node, n.rule);
    for (const o of n.ops) {
      if (o.verb === 'get') {
        const isArray = o.resp.shape === 'array-object' || o.resp.shape === 'array-scalar';
        derived.push({ o, resource, method: isArray ? 'list' : 'get', sqlVerb: 'select' });
      } else if (o.verb === 'post') {
        derived.push({ o, resource, method: 'create', sqlVerb: 'insert' });
      } else if (o.verb === 'put') {
        if (verbsAt(o.pathKey).has('patch')) derived.push({ o, resource, method: 'replace', sqlVerb: 'exec' });
        else derived.push({ o, resource, method: 'update', sqlVerb: 'update' });
      } else if (o.verb === 'patch') {
        derived.push({ o, resource, method: 'update', sqlVerb: 'update' });
      } else if (o.verb === 'delete') {
        derived.push({ o, resource, method: 'delete', sqlVerb: 'delete' });
      }
    }
  }

  // ---- nodes that share a resource name (reported, resolved as overloads) -------
  const nodesByResource = new Map();
  for (const [node, n] of nodes) {
    if (!n.hasRead && readableAncestor(node)) continue;
    const resource = nodeResource(node, n.rule);
    if (!nodesByResource.has(resource)) nodesByResource.set(resource, []);
    nodesByResource.get(resource).push(norm(node));
  }
  for (const [resource, list] of nodesByResource) {
    if (list.length > 1) notes.push(`shared name: ${service}.${resource} <- ${list.sort().join('  +  ')}`);
  }

  // ---- explicit method rules ----------------------------------------------------
  for (const d of derived) {
    const normalized = norm(d.o.qualifiedPath);
    const r = methodRules.find((x) => x.verb === d.o.verb && (!x.service || x.service === service) && x.re.test(normalized));
    if (r) {
      if (r.resource) d.resource = r.resource;
      if (r.method) d.method = r.method;
      if (r.sqlVerb) d.sqlVerb = r.sqlVerb;
      d.ruled = true;
    }
  }

  // ---- overloads: same (resource, method) from different operations ---------------
  const byName = new Map();
  for (const d of derived) {
    const k = `${d.resource}.${d.method}`;
    if (!byName.has(k)) byName.set(k, []);
    byName.get(k).push(d);
  }
  for (const [k, list] of byName) {
    if (list.length < 2) continue;
    // shallowest path keeps the name; ties broken by path, then verb
    list.sort((a, b) => a.o.params.length - b.o.params.length || (a.o.qualifiedPath < b.o.qualifiedPath ? -1 : a.o.qualifiedPath > b.o.qualifiedPath ? 1 : 0) || (a.o.verb < b.o.verb ? -1 : 1));
    for (const d of list.slice(1)) {
      const last = d.o.params[d.o.params.length - 1];
      const suffix = last ? `_by_${camelToSnake(last)}` : `_${d.o.verb}`;
      d.method = `${d.method}${suffix}`;
      notes.push(`overload: ${service}.${k} also at ${d.o.verb.toUpperCase()} ${d.o.qualifiedPath} -> ${d.method}`);
    }
  }
  // a second pass catches the (rare) case where the suffixed name is itself taken
  const seen = new Map();
  for (const d of derived) {
    let name = d.method;
    let i = 2;
    while (seen.has(`${d.resource}.${name}`)) { name = `${d.method}_${i++}`; }
    if (name !== d.method) { notes.push(`overload: ${service}.${d.resource}.${d.method} renamed ${name}`); d.method = name; }
    seen.set(`${d.resource}.${name}`, d);
  }

  // ---- signature clashes: one SQL verb, one required-parameter signature ----------
  const sigSeen = new Map();
  const signature = (o) => {
    const requiredQuery = (o.op.parameters || []).map((p) => resolve(p)).filter((p) => p && p.in === 'query' && p.required).map((p) => p.name);
    const serviceParams = pathParams(o.pathKey); // what stackql sees: the rebased key
    return [...serviceParams, ...requiredQuery].sort().join(',');
  };
  const ordered = [...derived].sort((a, b) => a.o.params.length - b.o.params.length || (a.o.qualifiedPath < b.o.qualifiedPath ? -1 : a.o.qualifiedPath > b.o.qualifiedPath ? 1 : 0));
  for (const d of ordered) {
    if (d.sqlVerb === 'exec') continue;
    const sigKey = `${d.resource}.${d.sqlVerb}::${signature(d.o)}`;
    if (sigSeen.has(sigKey)) {
      notes.push(`signature clash: ${service}.${d.resource} ${d.sqlVerb} [${signature(d.o)}] ${sigSeen.get(sigKey)} vs ${d.method} -> ${d.method} is EXEC`);
      d.sqlVerb = 'exec';
      continue;
    }
    sigSeen.set(sigKey, d.method);
  }

  for (const o of ops) {
    if (o.skip) rows.set(`${o.pathKey}::${o.verb}`, { resource: 'skip_this_resource', method: '', sqlVerb: '', objectKey: '', skip: o.skip, qualifiedPath: o.qualifiedPath, shape: o.resp.shape });
  }
  for (const d of derived) {
    rows.set(`${d.o.pathKey}::${d.o.verb}`, { resource: d.resource, method: d.method, sqlVerb: d.sqlVerb, objectKey: '', skip: '', qualifiedPath: d.o.qualifiedPath, shape: d.o.resp.shape, hoisted: !!d.hoisted });
  }
  return { rows, notes };
}
