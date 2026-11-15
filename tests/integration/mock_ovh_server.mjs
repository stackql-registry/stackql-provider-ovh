#!/usr/bin/env node

// Mock OVHcloud API for integration-testing the generated provider without
// an account. Serves canned JSON in the exact wire shapes the real API
// produces (shapes captured from a dev account with values replaced): bare
// arrays of identifiers, bare arrays of objects, bare objects, bare scalars,
// empty 200s and the vendor's {class, message} error body. Mutable in-memory
// stores make the write lifecycles round-trip. Every request is appended to
// `log` (method, path, query, headers, body) so the runner can assert wire
// calls.
//
// Authentication is the real flow: POST /oauth2/token with the client
// credentials grant returns a bearer token, and every API request must carry
// it or is rejected 401 with the real error body (GET /v1/auth/time is
// public, as on the live API). This proves the auth wiring end to end.
//
// The v1 identifier lists behave as the live API does: a plain GET returns
// the identifiers; with X-Pagination-Mode: CachedObjectList-Pages it returns
// the full objects. The provider sends that header by default, so a test
// that receives objects has proved the header reached the wire.
//
// Exports startMockServer() for the test runner; also runnable standalone:
//   node tests/integration/mock_ovh_server.mjs [port]

import http from 'http';
import { URL } from 'url';

export const CLIENT_ID = 'mock-client-id';
export const CLIENT_SECRET = 'mock-client-secret';
export const ACCESS_TOKEN = 'mock-access-token';
// Scoping ids: PROJECT_ID is what OVH_CLOUD_PROJECT_SERVICE resolves to in
// the tests, OTHER_PROJECT_ID proves a WHERE value beats the environment.
export const PROJECT_ID = '11111111111141118111111111111111';
export const OTHER_PROJECT_ID = '22222222222242228222222222222222';
export const INSTANCE_ID = 'aaaaaaaa-aaaa-4aaa-8aaa-aaaaaaaaaaaa';
export const SERVER_NAME = 'ns0000001.ip-192-0-2.eu';
export const POLICY_ID = 'bbbbbbbb-bbbb-4bbb-8bbb-bbbbbbbbbbbb';
export const MYSQL_ID = 'cccccccc-cccc-4ccc-8ccc-cccccccccccc';
export const EXPAND_MODE = 'CachedObjectList-Pages';

let idCounter = 0;
export function newId(prefix = 'id') {
  idCounter++;
  return `${prefix}-${String(idCounter).padStart(6, '0')}`;
}

// ---------------------------------------------------------------------------
// Fixtures - the wire shapes of the live API (values are placeholders)
// ---------------------------------------------------------------------------

function project(id, name) {
  return {
    project_id: id, projectName: name, description: `${name} description`, planCode: 'project.2018', unleash: true,
    expiration: null, creationDate: '2026-01-01T00:00:00+00:00', orderId: 123456, access: 'full', status: 'ok', manualQuota: false,
    iam: { id: `iam-${id}`, urn: `urn:v1:eu:resource:publicCloudProject:${id}`, state: 'OK' }
  };
}
function region(name) {
  return {
    name, continentCode: 'EU', datacenterLocation: name.replace(/\d+$/, ''), status: 'UP', type: 'region',
    services: [{ name: 'instance', status: 'UP', endpoint: `https://compute.${name.toLowerCase()}.example` }], ipCountries: [], countryCode: 'fr', availabilityZones: []
  };
}
function instance(id, name) {
  return {
    id, name, ipAddresses: [{ ip: '192.0.2.10', type: 'public', version: 4, networkId: 'net-1', gatewayIp: '192.0.2.1' }],
    flavorId: 'flavor-b2-7', imageId: 'image-debian', sshKeyId: null, created: '2026-01-02T00:00:00Z', region: 'GRA11',
    monthlyBilling: null, status: 'ACTIVE', planCode: 'b2-7.consumption', operationIds: [], currentMonthOutgoingTraffic: null
  };
}
function sshKey(id, name, publicKey) {
  return { id, name, publicKey, regions: ['GRA11', 'BHS5'], fingerPrint: 'aa:bb:cc:dd' };
}
function server(name) {
  return {
    name, serverId: 1000001, ip: '192.0.2.20', datacenter: 'gra2', professionalUse: false, supportLevel: 'pro', commercialRange: 'ADVANCE',
    os: 'debian12_64', state: 'ok', reverse: name, monitoring: true, rack: 'G201A01', rootDevice: null, linkSpeed: 1000, bootId: 1, rescueMail: null,
    newUpgradeSystem: true, noIntervention: false, powerState: 'poweron', region: 'eu-west-gra', availabilityZone: 'eu-west-gra-a',
    iam: { id: `iam-${name}`, urn: `urn:v1:eu:resource:dedicatedServer:${name}` }
  };
}
function policy(id, name, extra = {}) {
  return {
    id, owner: 'xx00000-ovh', name, description: `${name} policy`, readOnly: false,
    identities: ['urn:v1:eu:identity:account:xx00000-ovh'], resources: [{ urn: 'urn:v1:eu:resource:publicCloudProject:*' }],
    permissions: { allow: [{ action: 'publicCloudProject:apiovh:get' }], except: [], deny: [] }, permissionsGroups: [],
    createdAt: '2026-01-03T00:00:00Z', updatedAt: null, ...extra
  };
}
function mysql(id) {
  return {
    id, resourceStatus: 'READY', createdAt: '2026-01-04T00:00:00Z', updatedAt: '2026-01-04T00:00:00Z', checksum: 'abc123',
    targetSpec: { description: 'mock mysql', plan: 'essential', flavor: 'db1-4', version: '8', nodesNumber: 1, region: 'GRA' },
    currentState: { description: 'mock mysql', plan: 'essential', flavor: 'db1-4', version: '8', nodesNumber: 1, region: 'GRA' },
    currentTasks: [], iam: { id: `iam-${id}`, urn: `urn:v1:eu:resource:publicCloudProject:${id}` }
  };
}

function makeState() {
  return {
    projects: new Map([[PROJECT_ID, project(PROJECT_ID, 'mock-project')], [OTHER_PROJECT_ID, project(OTHER_PROJECT_ID, 'other-project')]]),
    regions: ['BHS5', 'GRA11', 'SBG5'],
    instances: new Map([[INSTANCE_ID, instance(INSTANCE_ID, 'mock-instance')]]),
    sshKeys: new Map([['a2V5LW9uZQ==', sshKey('a2V5LW9uZQ==', 'key-one', 'ssh-ed25519 AAAAC3NzaC1lZDI1NTE5AAAAImock key-one')]]),
    servers: new Map([[SERVER_NAME, server(SERVER_NAME)]]),
    policies: new Map([[POLICY_ID, policy(POLICY_ID, 'seed-policy')], ['dddddddd-dddd-4ddd-8ddd-dddddddddddd', policy('dddddddd-dddd-4ddd-8ddd-dddddddddddd', 'second-policy')]]),
    mysql: new Map([[MYSQL_ID, mysql(MYSQL_ID)]]),
    me: { nichandle: 'xx00000-ovh', firstname: 'Mock', name: 'Account', email: 'mock@example.com', country: 'FR', currency: { code: 'EUR', symbol: 'EUR' }, ovhSubsidiary: 'FR', state: 'complete', kycValidated: true },
    applications: new Map([[101, { applicationId: 101, name: 'stackql', description: 'mock application', status: 'active', applicationKey: 'mockappkey0000001' }]]),
    reboots: [],
    tokenRequests: 0,
    authFailures: 0
  };
}

// ---------------------------------------------------------------------------
// HTTP plumbing
// ---------------------------------------------------------------------------

function send(res, code, body, headers = {}) {
  res.writeHead(code, { 'Content-Type': 'application/json; charset=utf-8', 'X-Ovh-Queryid': 'mock-query-id', ...headers });
  res.end(body === undefined ? '' : JSON.stringify(body));
}
function ok(res, body, headers) { send(res, 200, body, headers); }
// the live API answers a successful void operation with 200 and the body `null`
function okVoid(res) { send(res, 200, null); }
function fail(res, code, klass, message) { send(res, code, { class: klass, message }); }
const notFound = (res, what) => fail(res, 404, 'Client::NotFound', `${what} does not exist`);

function readBody(req) {
  return new Promise((resolve) => {
    let data = '';
    req.on('data', (c) => { data += c; });
    req.on('end', () => {
      if (!data) return resolve(null);
      const type = req.headers['content-type'] || '';
      if (type.includes('x-www-form-urlencoded')) return resolve(Object.fromEntries(new URLSearchParams(data)));
      try { resolve(JSON.parse(data)); } catch { resolve({ _raw: data }); }
    });
  });
}

export function startMockServer(port = 0) {
  const state = makeState();
  const log = [];
  const bearerOk = (h) => {
    const m = /^bearer\s+(\S+)$/i.exec(h || '');
    return !!m && m[1] === ACCESS_TOKEN;
  };
  // a v1 identifier list: identifiers by default, objects in expand mode
  const identifierList = (req, res, ids, objects) => {
    if (req.headers['x-pagination-mode'] === EXPAND_MODE) return ok(res, objects);
    return ok(res, ids, { 'X-Pagination-Elements': String(ids.length) });
  };

  const srv = http.createServer(async (req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const body = await readBody(req);
    const entry = {
      method: req.method, path: url.pathname, query: Object.fromEntries(url.searchParams), host: req.headers.host,
      authorization: req.headers['authorization'] || '', contentType: req.headers['content-type'] || '',
      headers: req.headers, body
    };
    log.push(entry);

    const p = url.pathname;
    const m = req.method;

    // --- OAuth2 client credentials grant (the regional token endpoint)
    if (p === '/oauth2/token' && m === 'POST') {
      state.tokenRequests++;
      let { client_id: id, client_secret: secret } = body || {};
      const basic = /^basic\s+(\S+)$/i.exec(req.headers['authorization'] || '');
      if (basic) [id, secret] = Buffer.from(basic[1], 'base64').toString('utf8').split(':').map(decodeURIComponent);
      if (body?.grant_type !== 'client_credentials') return send(res, 400, { error: 'unsupported_grant_type' });
      if (id !== CLIENT_ID || secret !== CLIENT_SECRET) return send(res, 401, { error: 'invalid_client', error_description: 'Client authentication failed' });
      return ok(res, { access_token: ACCESS_TOKEN, token_type: 'Bearer', expires_in: 3599, scope: body.scope || 'all' });
    }

    // --- public route: API server time, a bare integer
    if (p === '/v1/auth/time' && m === 'GET') return ok(res, 1767225600);

    if (!bearerOk(req.headers['authorization'])) {
      state.authFailures++;
      return fail(res, 401, 'Client::Unauthorized', req.headers['authorization'] ? 'Invalid or expired access token' : 'You must login first');
    }

    // --- /v1/me: a singleton object, an update, an action
    if (p === '/v1/me') {
      if (m === 'GET') return ok(res, state.me);
      if (m === 'PUT') { Object.assign(state.me, body || {}); return okVoid(res); }
    }
    // identifier list of integers with a keyed read
    if (p === '/v1/me/api/application' && m === 'GET') return identifierList(req, res, [...state.applications.keys()], [...state.applications.values()]);
    let mm = p.match(/^\/v1\/me\/api\/application\/(\d+)$/);
    if (mm) {
      const app = state.applications.get(Number(mm[1]));
      if (!app) return notFound(res, 'This application');
      if (m === 'GET') return ok(res, app);
      if (m === 'DELETE') { state.applications.delete(Number(mm[1])); return okVoid(res); }
    }

    // --- /v1/cloud/project: root paths of the project-scoped service
    if (p === '/v1/cloud/project' && m === 'GET') return identifierList(req, res, [...state.projects.keys()], [...state.projects.values()]);
    const projMatch = p.match(/^\/v1\/cloud\/project\/([^/]+)(\/.*)?$/);
    if (projMatch) {
      const proj = state.projects.get(projMatch[1]);
      if (!proj) return notFound(res, 'This service');
      const rest = projMatch[2] || '';
      if (rest === '') {
        if (m === 'GET') return ok(res, proj);
        if (m === 'PUT') { Object.assign(proj, body || {}); return okVoid(res); }
      }
      // identifier list of strings with a keyed read
      if (rest === '/region' && m === 'GET') return identifierList(req, res, state.regions, state.regions.map(region));
      mm = rest.match(/^\/region\/([^/]+)$/);
      if (mm && m === 'GET') return state.regions.includes(mm[1]) ? ok(res, region(mm[1])) : notFound(res, 'This region');
      // a scalar list with no keyed read below it
      if (rest === '/capabilities/kube/regions' && m === 'GET') return ok(res, ['BHS5', 'GRA11']);
      // a bare array of objects (the other project is empty)
      if (rest === '/instance' && m === 'GET') return ok(res, projMatch[1] === PROJECT_ID ? [...state.instances.values()] : []);
      mm = rest.match(/^\/instance\/([^/]+)$/);
      if (mm) {
        const inst = state.instances.get(mm[1]);
        if (!inst) return notFound(res, 'This instance');
        if (m === 'GET') return ok(res, inst);
        if (m === 'PUT') { inst.name = body?.instanceName ?? inst.name; return okVoid(res); }
        if (m === 'DELETE') { state.instances.delete(mm[1]); return okVoid(res); }
      }
      mm = rest.match(/^\/instance\/([^/]+)\/reboot$/);
      if (mm && m === 'POST') {
        if (!state.instances.has(mm[1])) return notFound(res, 'This instance');
        state.reboots.push({ instanceId: mm[1], type: body?.type });
        return okVoid(res);
      }
      // a full lifecycle on a bare-array collection
      if (rest === '/sshkey') {
        if (m === 'GET') return ok(res, [...state.sshKeys.values()]);
        if (m === 'POST') {
          if (!body?.name || !body?.publicKey) return fail(res, 400, 'Client::BadRequest', 'Missing name or publicKey');
          const id = newId('key');
          const key = sshKey(id, body.name, body.publicKey);
          state.sshKeys.set(id, key);
          return ok(res, key);
        }
      }
      mm = rest.match(/^\/sshkey\/([^/]+)$/);
      if (mm) {
        const key = state.sshKeys.get(mm[1]);
        if (!key) return notFound(res, 'This SSH key');
        if (m === 'GET') return ok(res, key);
        if (m === 'DELETE') { state.sshKeys.delete(mm[1]); return okVoid(res); }
      }
    }

    // --- /v1/dedicated/server: an identifier list, a keyed read, a hoisted action
    if (p === '/v1/dedicated/server' && m === 'GET') return identifierList(req, res, [...state.servers.keys()], [...state.servers.values()]);
    mm = p.match(/^\/v1\/dedicated\/server\/([^/]+)$/);
    if (mm) {
      const s = state.servers.get(decodeURIComponent(mm[1]));
      if (!s) return notFound(res, 'This service');
      if (m === 'GET') return ok(res, s);
      if (m === 'PUT') { Object.assign(s, body || {}); return okVoid(res); }
    }
    mm = p.match(/^\/v1\/dedicated\/server\/([^/]+)\/reboot$/);
    if (mm && m === 'POST') {
      if (!state.servers.has(decodeURIComponent(mm[1]))) return notFound(res, 'This service');
      return ok(res, { taskId: 9001, function: 'hardReboot', status: 'init', comment: 'Reboot asked', startDate: '2026-01-05T00:00:00+00:00', doneDate: null, lastUpdate: null });
    }

    // --- an object that carries an `items` property (stackql's default row key)
    mm = p.match(/^\/v1\/order\/cart\/([^/]+)$/);
    if (mm && m === 'GET') return ok(res, { cartId: mm[1], description: 'mock cart', expire: '2026-02-01T00:00:00+00:00', items: [11, 12], readOnly: false });

    // --- a scalar read: a bare JSON string
    mm = p.match(/^\/v1\/domain\/([^/]+)\/authInfo$/);
    if (mm && m === 'GET') return ok(res, 'mock-auth-info-code');

    // --- /v2/iam/policy: API v2 (bare array of objects, header paging, full lifecycle)
    if (p === '/v2/iam/policy') {
      if (m === 'GET') {
        const all = [...state.policies.values()];
        const size = Number(req.headers['x-pagination-size'] || 0);
        if (size > 0 && size < all.length) return ok(res, all.slice(0, size), { 'X-Pagination-Cursor-Next': 'mock-cursor' });
        return ok(res, all);
      }
      if (m === 'POST') {
        if (!body?.name) return fail(res, 400, 'Client::BadRequest', 'Missing name');
        const id = newId('policy');
        const pol = policy(id, body.name, { description: body.description || '', identities: body.identities || [], resources: body.resources || [], permissions: body.permissions || { allow: [] } });
        state.policies.set(id, pol);
        return ok(res, pol);
      }
    }
    mm = p.match(/^\/v2\/iam\/policy\/([^/]+)$/);
    if (mm) {
      const pol = state.policies.get(mm[1]);
      if (!pol) return notFound(res, 'This policy');
      if (m === 'GET') return ok(res, pol);
      if (m === 'PUT') { Object.assign(pol, body || {}, { updatedAt: '2026-01-06T00:00:00Z' }); return ok(res, pol); }
      if (m === 'DELETE') { state.policies.delete(mm[1]); return okVoid(res); }
    }

    // --- /v2/publicCloud/project/{projectId}/managedDatabase/mysql: v2 project scope, PATCH and PUT
    const pcMatch = p.match(/^\/v2\/publicCloud\/project\/([^/]+)(\/.*)?$/);
    if (pcMatch) {
      if (!state.projects.has(pcMatch[1])) return notFound(res, 'This project');
      const rest = pcMatch[2] || '';
      if (rest === '/managedDatabase/mysql' && m === 'GET') return ok(res, pcMatch[1] === PROJECT_ID ? [...state.mysql.values()] : []);
      mm = rest.match(/^\/managedDatabase\/mysql\/([^/]+)$/);
      if (mm) {
        const db = state.mysql.get(mm[1]);
        if (!db) return notFound(res, 'This service');
        if (m === 'GET') return ok(res, db);
        if (m === 'PATCH') { db.targetSpec = { ...db.targetSpec, ...(body?.targetSpec || {}) }; return ok(res, db); }
        if (m === 'PUT') { db.targetSpec = body?.targetSpec || {}; return ok(res, db); }
      }
    }

    return fail(res, 404, 'Client::NotFound', `Got an invalid (or empty) URL: ${m} ${p}`);
  });

  return new Promise((resolve) => {
    srv.listen(port, '127.0.0.1', () => {
      resolve({ server: srv, port: srv.address().port, log, state });
    });
  });
}

if (process.argv[1] && /mock_[a-z0-9_]+_server\.mjs$/.test(process.argv[1])) {
  const p = Number(process.argv[2] || 0);
  const { port } = await startMockServer(p);
  console.log(`mock API listening on http://127.0.0.1:${port}`);
  console.log(`expects the client credentials grant (${CLIENT_ID} / ${CLIENT_SECRET}) at /oauth2/token, then Authorization: Bearer ${ACCESS_TOKEN}`);
}
