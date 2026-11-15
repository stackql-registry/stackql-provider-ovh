#!/usr/bin/env node

// Integration tests: run the generated provider (local file registry)
// against the mock API and assert row-level results and wire calls for each
// operation archetype present in the provider:
//   - OAuth2 client credentials: the token request and the bearer header;
//     a wrong secret is surfaced
//   - the endpoint selector: OVH_ENDPOINT picks the API host and the token
//     host; an unknown value is an error; WHERE api_host overrides
//   - identifier lists expanded into objects (the defaulted X-Pagination-Mode
//     header on the wire) and the keyed read beside them
//   - Public Cloud project scoping: env var resolved, WHERE override beats
//     it, unset fails; root paths served from the unscoped server
//   - bare arrays of objects, scalar lists and scalar reads (the value column)
//   - INSERT / UPDATE / DELETE lifecycles with their exact wire bodies,
//     snake_case keys resolving to camelCase wire names, INSERT ... RETURNING
//   - hoisted EXEC actions with and without a body
//   - API v2: header page-size pushdown, PATCH as UPDATE, PUT as EXEC replace
//   - the vendor's 404 error body surfaced
//
// The vendor server template is https-only and cannot address the mock, so
// harness.mjs materialises a TEST COPY of provider-dev/openapi in
// tests/integration/.registry-tmp (gitignored, recreated each run) with the
// scheme and the endpoint selector's hosts rewritten to the mock (server
// variables, the selector and x-stackQL-envVar preserved), and spawns
// stackql asynchronously (the mock runs on this process's event loop, so a
// synchronous wait deadlocks).
//
// Requires a stackql binary: $STACKQL, ./stackql, or `stackql` on PATH.
// Usage: node tests/integration/run_integration_tests.mjs [--verbose]

import {
  startMockServer, CLIENT_ID, CLIENT_SECRET, ACCESS_TOKEN, PROJECT_ID, OTHER_PROJECT_ID, INSTANCE_ID, SERVER_NAME,
  POLICY_ID, MYSQL_ID, EXPAND_MODE
} from './mock_ovh_server.mjs';
import { buildTestRegistry, registryArg, makeRunSql, findStackql, mockHosts } from './harness.mjs';
import { PROVIDER_NAME } from '../../provider-dev/scripts/lib/spec_helpers.mjs';

const verbose = process.argv.includes('--verbose');
const t0 = Date.now();

// The environment the provider reads: the OAuth2 client credentials from
// provider_config.json and the project scoping variable. OVH_ENDPOINT is
// unset so the selector default (ovh-eu) applies unless a test sets it.
const PROVIDER_ENV = { OVH_CLIENT_ID: CLIENT_ID, OVH_CLIENT_SECRET: CLIENT_SECRET, OVH_CLOUD_PROJECT_SERVICE: PROJECT_ID, OVH_ENDPOINT: undefined };

const results = [];
function check(name, cond, note = '') {
  results.push({ name, pass: !!cond, note });
  console.log(`  ${cond ? 'PASS' : 'FAIL'}  ${name}${!cond && note ? `  [${String(note).slice(0, 220)}]` : ''}`);
}

const { server, port, log, state } = await startMockServer();
const registry = registryArg(buildTestRegistry(port));
const runSql = makeRunSql(registry, PROVIDER_ENV, { verbose });
const hosts = mockHosts(port);
console.log(`mock API on localhost:${port}, stackql: ${findStackql()}`);

// wire calls since `mark` matching method + path
const calls = (mark, method, p) => log.slice(mark).filter((e) => e.method === method && e.path === p);
const paths = (mark) => JSON.stringify(log.slice(mark).map((e) => `${e.method} ${e.path}`));
const P = PROVIDER_NAME;
const scoped = `/v1/cloud/project/${PROJECT_ID}`;

try {
  // --- meta sanity
  let r = await runSql(`SHOW SERVICES IN ${P}`);
  check('show services returns the services', r.rows && r.rows.length > 90, r.err || `got ${r.rows?.length}`);

  // --- OAuth2 client credentials + the expanded root-path list
  let mark = log.length;
  r = await runSql(`SELECT project_id, project_name, status FROM ${P}.cloud.projects`);
  check('projects list: 2 rows of full objects', r.rows && r.rows.length === 2 && r.rows.every((x) => x.project_name && x.status === 'ok'), r.err || JSON.stringify(r.rows));
  const tokenCalls = calls(mark, 'POST', '/oauth2/token');
  check('token request: client credentials grant, scope all', tokenCalls.length === 1 && tokenCalls[0].body?.grant_type === 'client_credentials' && tokenCalls[0].body?.client_id === CLIENT_ID && tokenCalls[0].body?.client_secret === CLIENT_SECRET && tokenCalls[0].body?.scope === 'all', JSON.stringify(tokenCalls.map((c) => ({ ...c.body, client_secret: '***' }))));
  const listCalls = calls(mark, 'GET', '/v1/cloud/project');
  check('bearer token sent on the API call', listCalls.length === 1 && listCalls[0].authorization === `Bearer ${ACCESS_TOKEN}`, paths(mark));
  check('root path served from the unscoped v1 server', listCalls.length === 1, paths(mark));
  check(`identifier list expanded: X-Pagination-Mode ${EXPAND_MODE} sent by default`, listCalls[0]?.headers['x-pagination-mode'] === EXPAND_MODE, JSON.stringify(listCalls[0]?.headers));
  check('default endpoint (OVH_ENDPOINT unset) is ovh-eu', listCalls[0]?.host === hosts['ovh-eu'] && tokenCalls[0]?.host === hosts['ovh-eu'], `${listCalls[0]?.host} / ${tokenCalls[0]?.host}`);

  r = await runSql(`SELECT project_id FROM ${P}.cloud.projects`, { OVH_CLIENT_SECRET: 'wrong' });
  check('wrong client secret -> token request rejected and surfaced', !!r.err && /401|invalid_client|unauthor/i.test(r.err), r.err || 'no error');
  r = await runSql(`SELECT project_id FROM ${P}.cloud.projects`, { OVH_CLIENT_ID: undefined });
  check('missing OVH_CLIENT_ID -> refused before any request, naming the credential', !!r.err && /client id not provided/i.test(r.err), r.err || 'no error');

  // --- a pre-issued access token instead of the client credentials grant
  mark = log.length;
  r = await runSql(`SELECT project_id FROM ${P}.cloud.projects`, { OVH_CLIENT_ID: undefined, OVH_CLIENT_SECRET: undefined, OVH_ACCESS_TOKEN: ACCESS_TOKEN },
    [`--auth=${JSON.stringify({ [P]: { type: 'bearer', credentialsenvvar: 'OVH_ACCESS_TOKEN' } })}`]);
  check('--auth bearer override: OVH_ACCESS_TOKEN sent, no token request made', !r.err && r.rows.length === 2 && calls(mark, 'POST', '/oauth2/token').length === 0 && calls(mark, 'GET', '/v1/cloud/project')[0]?.authorization === `Bearer ${ACCESS_TOKEN}`, r.err || paths(mark));

  // --- the endpoint selector
  mark = log.length;
  r = await runSql(`SELECT project_id FROM ${P}.cloud.projects`, { OVH_ENDPOINT: 'ovh-ca' });
  const caApi = calls(mark, 'GET', '/v1/cloud/project');
  const caToken = calls(mark, 'POST', '/oauth2/token');
  check('OVH_ENDPOINT=ovh-ca selects the CA API host', !r.err && caApi.length === 1 && caApi[0].host === hosts['ovh-ca'], r.err || caApi.map((c) => c.host).join(','));
  check('OVH_ENDPOINT=ovh-ca selects the CA token host', caToken.length === 1 && caToken[0].host === hosts['ovh-ca'], caToken.map((c) => c.host).join(','));
  r = await runSql(`SELECT project_id FROM ${P}.cloud.projects`, { OVH_ENDPOINT: 'ovh-mars' });
  check('unknown OVH_ENDPOINT value is refused with the accepted keys, not a fallback', !!r.err && /ovh-mars/.test(r.err) && /ovh-ca ovh-eu ovh-us/.test(r.err), r.err || 'no error');
  mark = log.length;
  r = await runSql(`SELECT project_id FROM ${P}.cloud.projects WHERE api_host = '${hosts['ovh-ca']}'`);
  check('WHERE api_host overrides the selector', !r.err && calls(mark, 'GET', '/v1/cloud/project')[0]?.host === hosts['ovh-ca'], r.err || paths(mark));

  // --- keyed read beside the expanded list; snake_case surface
  mark = log.length;
  r = await runSql(`SELECT project_id, project_name, plan_code, creation_date FROM ${P}.cloud.projects WHERE service_name = '${PROJECT_ID}'`);
  check('project get (WHERE service_name routes to the keyed read)', r.rows && r.rows.length === 1 && r.rows[0].project_name === 'mock-project' && calls(mark, 'GET', scoped).length === 1, r.err || paths(mark));
  check('snake_case columns over camelCase wire keys', r.rows?.[0]?.plan_code === 'project.2018' && r.rows?.[0]?.creation_date, JSON.stringify(r.rows));
  r = await runSql(`DESCRIBE EXTENDED ${P}.cloud.projects`);
  const cols = (r.rows || []).map((x) => x.name);
  check('describe: snake aliases present, camel names absent', cols.includes('project_name') && cols.includes('manual_quota') && !cols.includes('projectName'), cols.join(','));

  // --- project scoping
  mark = log.length;
  r = await runSql(`SELECT id, name, status FROM ${P}.cloud.instances`);
  check('instances list: scope from OVH_CLOUD_PROJECT_SERVICE, bare array of objects', r.rows && r.rows.length === 1 && r.rows[0].id === INSTANCE_ID && calls(mark, 'GET', `${scoped}/instance`).length === 1, r.err || paths(mark));
  check('no expand header on a list that is already objects', calls(mark, 'GET', `${scoped}/instance`)[0]?.headers['x-pagination-mode'] === undefined);
  mark = log.length;
  r = await runSql(`SELECT id FROM ${P}.cloud.instances WHERE service_name = '${OTHER_PROJECT_ID}'`);
  check('WHERE service_name beats OVH_CLOUD_PROJECT_SERVICE (empty list -> zero rows)', !r.err && r.rows.length === 0 && calls(mark, 'GET', `/v1/cloud/project/${OTHER_PROJECT_ID}/instance`).length === 1, r.err || paths(mark));
  r = await runSql(`SELECT id FROM ${P}.cloud.instances`, { OVH_CLOUD_PROJECT_SERVICE: undefined });
  check('unset scope env and no WHERE -> service_name is required', !!r.err && /service_name/.test(r.err) && /requires an input/.test(r.err), r.err || 'no error');
  mark = log.length;
  r = await runSql(`SELECT id, status FROM ${P}.cloud.instances WHERE instance_id = '${INSTANCE_ID}'`);
  check('instance get under the scoped server', r.rows && r.rows.length === 1 && calls(mark, 'GET', `${scoped}/instance/${INSTANCE_ID}`).length === 1, r.err || paths(mark));

  // --- expanded identifier lists under the scope, of strings and of integers
  mark = log.length;
  r = await runSql(`SELECT name, status, continent_code FROM ${P}.cloud.regions`);
  check('regions list expanded (string identifiers -> objects)', r.rows && r.rows.length === 3 && r.rows.every((x) => x.status === 'UP') && calls(mark, 'GET', `${scoped}/region`)[0]?.headers['x-pagination-mode'] === EXPAND_MODE, r.err || JSON.stringify(r.rows));
  r = await runSql(`SELECT name, status FROM ${P}.cloud.regions WHERE region_name = 'GRA11'`);
  check('region get', r.rows && r.rows.length === 1 && r.rows[0].name === 'GRA11', r.err || JSON.stringify(r.rows));
  mark = log.length;
  r = await runSql(`SELECT application_id, name, status FROM ${P}.me.api_applications`);
  check('applications list expanded (integer identifiers -> objects)', r.rows && r.rows.length === 1 && r.rows[0].name === 'stackql' && calls(mark, 'GET', '/v1/me/api/application')[0]?.headers['x-pagination-mode'] === EXPAND_MODE, r.err || JSON.stringify(r.rows));

  // --- scalar lists and scalar reads surface as one `value` column
  r = await runSql(`SELECT value FROM ${P}.cloud_kube.capabilities_kube_regions`);
  check('scalar list -> value rows', r.rows && r.rows.length === 2 && r.rows[0].value === 'BHS5', r.err || JSON.stringify(r.rows));
  r = await runSql(`SELECT value FROM ${P}.auth.times`);
  check('scalar read (integer) -> one value row', r.rows && r.rows.length === 1 && String(r.rows[0].value) === '1767225600', r.err || JSON.stringify(r.rows));
  r = await runSql(`SELECT value FROM ${P}.domain.auth_infos WHERE service_name = 'example.com'`);
  check('scalar read (string) -> one value row', r.rows && r.rows.length === 1 && r.rows[0].value === 'mock-auth-info-code', r.err || JSON.stringify(r.rows));

  // --- an object with an `items` property stays one row
  r = await runSql(`SELECT cart_id, description, items FROM ${P}.order.carts WHERE cart_id = 'cart-1'`);
  check('object with an items property is one row (root objectKey), not its items', r.rows && r.rows.length === 1 && r.rows[0].cart_id === 'cart-1' && /11/.test(String(r.rows[0].items)), r.err || JSON.stringify(r.rows));

  // --- singleton object and its update
  r = await runSql(`SELECT nichandle, email, ovh_subsidiary FROM ${P}.me.accounts`);
  check('account singleton read', r.rows && r.rows.length === 1 && r.rows[0].nichandle === 'xx00000-ovh' && r.rows[0].ovh_subsidiary === 'FR', r.err || JSON.stringify(r.rows));

  // --- lifecycle with exact wire bodies (naive body, snake -> camel)
  mark = log.length;
  r = await runSql(`INSERT INTO ${P}.cloud.sshkeys (name, public_key) SELECT 'stackql-smoke-key', 'ssh-ed25519 AAAA smoke'`);
  const post = calls(mark, 'POST', `${scoped}/sshkey`);
  check('sshkey INSERT', !r.err && post.length === 1, r.err || paths(mark));
  check('INSERT wire body {name, publicKey} (snake key -> camel wire name)', post[0]?.body?.name === 'stackql-smoke-key' && post[0]?.body?.publicKey === 'ssh-ed25519 AAAA smoke' && Object.keys(post[0]?.body || {}).length === 2, JSON.stringify(post.map((c) => c.body)));
  r = await runSql(`INSERT INTO ${P}.cloud.sshkeys (name, public_key) SELECT 'stackql-smoke-key-2', 'ssh-ed25519 AAAA smoke2' RETURNING id, name`);
  check('INSERT ... RETURNING projects the created row', r.rows && r.rows.length === 1 && r.rows[0].name === 'stackql-smoke-key-2' && r.rows[0].id, r.err || JSON.stringify(r.rows));
  const key = [...state.sshKeys.values()].find((k) => k.name === 'stackql-smoke-key');
  r = await runSql(`SELECT id, name, finger_print FROM ${P}.cloud.sshkeys WHERE key_id = '${key?.id}'`);
  check('sshkey get by key_id', r.rows && r.rows.length === 1 && r.rows[0].name === 'stackql-smoke-key', r.err || JSON.stringify(r.rows));
  r = await runSql(`SELECT id FROM ${P}.cloud.sshkeys`);
  check('sshkey list sees the created keys', r.rows && r.rows.length === 3, r.err || `got ${r.rows?.length}`);
  r = await runSql(`DELETE FROM ${P}.cloud.sshkeys WHERE key_id = '${key?.id}'`);
  check('sshkey DELETE', !r.err && !state.sshKeys.has(key?.id), r.err);

  // --- UPDATE (PUT): scoped resource and root-path resource
  mark = log.length;
  r = await runSql(`UPDATE ${P}.cloud.instances SET instance_name = 'renamed' WHERE instance_id = '${INSTANCE_ID}'`);
  const put = calls(mark, 'PUT', `${scoped}/instance/${INSTANCE_ID}`);
  check('instance UPDATE (PUT, snake key -> instanceName)', !r.err && put.length === 1 && put[0].body?.instanceName === 'renamed' && state.instances.get(INSTANCE_ID).name === 'renamed', r.err || JSON.stringify(put.map((c) => c.body)));
  mark = log.length;
  r = await runSql(`UPDATE ${P}.cloud.projects SET description = 'new description' WHERE service_name = '${PROJECT_ID}'`);
  check('project UPDATE on the root path', !r.err && calls(mark, 'PUT', scoped)[0]?.body?.description === 'new description', r.err || paths(mark));
  mark = log.length;
  r = await runSql(`UPDATE ${P}.me.accounts SET city = 'Roubaix' WHERE 1 = 1`);
  check('account UPDATE (singleton PUT /me)', !r.err && calls(mark, 'PUT', '/v1/me')[0]?.body?.city === 'Roubaix', r.err || paths(mark));

  // --- hoisted EXEC actions
  mark = log.length;
  r = await runSql(`EXEC ${P}.cloud.instances.reboot @instance_id = '${INSTANCE_ID}', @type = 'soft'`);
  const reboot = calls(mark, 'POST', `${scoped}/instance/${INSTANCE_ID}/reboot`);
  check('EXEC instances.reboot (action hoisted onto instances, body {type})', !r.err && reboot.length === 1 && reboot[0].body?.type === 'soft' && state.reboots.length === 1, r.err || paths(mark));
  mark = log.length;
  r = await runSql(`UPDATE ${P}.dedicated_server.servers SET monitoring = false, boot_id = 22 WHERE service_name = '${SERVER_NAME}'`);
  const typed = calls(mark, 'PUT', `/v1/dedicated/server/${SERVER_NAME}`);
  check('UPDATE sends typed JSON (boolean and number, not strings)', !r.err && typed[0]?.body?.monitoring === false && typed[0]?.body?.bootId === 22, r.err || JSON.stringify(typed.map((c) => c.body)));
  mark = log.length;
  r = await runSql(`EXEC ${P}.dedicated_server.servers.reboot @service_name = '${SERVER_NAME}'`);
  check('EXEC servers.reboot (no body)', !r.err && calls(mark, 'POST', `/v1/dedicated/server/${SERVER_NAME}/reboot`).length === 1, r.err || paths(mark));
  mark = log.length;
  r = await runSql(`SELECT name, state, datacenter FROM ${P}.dedicated_server.servers`);
  check('servers list expanded', r.rows && r.rows.length === 1 && r.rows[0].name === SERVER_NAME && calls(mark, 'GET', '/v1/dedicated/server')[0]?.headers['x-pagination-mode'] === EXPAND_MODE, r.err || JSON.stringify(r.rows));

  // --- API v2
  mark = log.length;
  r = await runSql(`SELECT id, name, read_only FROM ${P}.iam.policies`);
  check('v2 policies list (bare array of objects, v2 server)', r.rows && r.rows.length === 2 && calls(mark, 'GET', '/v2/iam/policy').length === 1, r.err || paths(mark));
  mark = log.length;
  r = await runSql(`SELECT id FROM ${P}.iam.policies WHERE "X-Pagination-Size" = 1`);
  check('v2 page size pushed down as the X-Pagination-Size header', r.rows && r.rows.length === 1 && calls(mark, 'GET', '/v2/iam/policy')[0]?.headers['x-pagination-size'] === '1', r.err || JSON.stringify(calls(mark, 'GET', '/v2/iam/policy').map((c) => c.headers)));
  r = await runSql(`SELECT id, name FROM ${P}.iam.policies WHERE policy_id = '${POLICY_ID}'`);
  check('v2 policy get', r.rows && r.rows.length === 1 && r.rows[0].name === 'seed-policy', r.err || JSON.stringify(r.rows));
  mark = log.length;
  r = await runSql(`INSERT INTO ${P}.iam.policies (name, description, identities, resources, permissions) SELECT 'stackql-smoke-policy', 'smoke', '["urn:v1:eu:identity:account:xx00000-ovh"]', '[{"urn": "urn:v1:eu:resource:publicCloudProject:*"}]', '{"allow": [{"action": "publicCloudProject:apiovh:get"}]}'`);
  const polPost = calls(mark, 'POST', '/v2/iam/policy');
  check('v2 policy INSERT', !r.err && polPost.length === 1, r.err || paths(mark));
  check('INSERT sends typed JSON (arrays and objects, not strings)', Array.isArray(polPost[0]?.body?.identities) && Array.isArray(polPost[0]?.body?.resources) && typeof polPost[0]?.body?.permissions === 'object' && polPost[0]?.body?.permissions?.allow?.[0]?.action === 'publicCloudProject:apiovh:get', JSON.stringify(polPost.map((c) => c.body)));
  const pol = [...state.policies.values()].find((x) => x.name === 'stackql-smoke-policy');
  mark = log.length;
  r = await runSql(`UPDATE ${P}.iam.policies SET name = 'stackql-smoke-policy', description = 'updated', identities = '["urn:v1:eu:identity:account:xx00000-ovh"]', resources = '[{"urn": "urn:v1:eu:resource:publicCloudProject:*"}]', permissions = '{"allow": [{"action": "publicCloudProject:apiovh:get"}]}' WHERE policy_id = '${pol?.id}'`);
  const polPut = calls(mark, 'PUT', `/v2/iam/policy/${pol?.id}`);
  check('v2 policy UPDATE (PUT)', !r.err && polPut.length === 1 && polPut[0].body?.description === 'updated', r.err || paths(mark));
  check('UPDATE sends JSON-shaped values as arrays and objects', Array.isArray(polPut[0]?.body?.identities) && typeof polPut[0]?.body?.permissions === 'object', JSON.stringify(polPut.map((c) => c.body)));
  r = await runSql(`DELETE FROM ${P}.iam.policies WHERE policy_id = '${pol?.id}'`);
  check('v2 policy DELETE', !r.err && !state.policies.has(pol?.id), r.err);
  r = await runSql(`SELECT id FROM ${P}.iam.policies WHERE policy_id = 'does-not-exist'`);
  check('404: the vendor error body is surfaced and no row is returned', (r.rows === null || r.rows.length === 0) && /404/.test(r.stderr) && /Client::NotFound/.test(r.stderr), r.stderr || 'no diagnostic');

  // --- API v2 project scope; PATCH is UPDATE, PUT is EXEC replace
  mark = log.length;
  r = await runSql(`SELECT id, resource_status FROM ${P}.public_cloud_database.mysqls`);
  check('v2 scoped list (project_id from OVH_CLOUD_PROJECT_SERVICE)', r.rows && r.rows.length === 1 && r.rows[0].id === MYSQL_ID && calls(mark, 'GET', `/v2/publicCloud/project/${PROJECT_ID}/managedDatabase/mysql`).length === 1, r.err || paths(mark));
  mark = log.length;
  r = await runSql(`SELECT id FROM ${P}.public_cloud_database.mysqls WHERE project_id = '${OTHER_PROJECT_ID}'`);
  check('v2 WHERE project_id beats the environment', !r.err && calls(mark, 'GET', `/v2/publicCloud/project/${OTHER_PROJECT_ID}/managedDatabase/mysql`).length === 1, r.err || paths(mark));
  mark = log.length;
  r = await runSql(`UPDATE ${P}.public_cloud_database.mysqls SET target_spec = '{"description": "patched"}' WHERE service_id = '${MYSQL_ID}'`);
  const patch = calls(mark, 'PATCH', `/v2/publicCloud/project/${PROJECT_ID}/managedDatabase/mysql/${MYSQL_ID}`);
  check('v2 UPDATE is the PATCH (partial) with a nested object body', !r.err && patch.length === 1 && patch[0].body?.targetSpec?.description === 'patched' && state.mysql.get(MYSQL_ID).targetSpec.plan === 'essential', r.err || paths(mark));
  mark = log.length;
  r = await runSql(`EXEC ${P}.public_cloud_database.mysqls.replace @service_id = '${MYSQL_ID}', @target_spec = '{"description": "replaced", "plan": "essential", "flavor": "db1-4", "version": "8", "nodesNumber": 1, "region": "GRA"}'`);
  const replace = calls(mark, 'PUT', `/v2/publicCloud/project/${PROJECT_ID}/managedDatabase/mysql/${MYSQL_ID}`);
  check('v2 EXEC replace is the PUT (full) with the whole object', !r.err && replace.length === 1 && replace[0].body?.targetSpec?.description === 'replaced' && replace[0].body?.targetSpec?.nodesNumber === 1, r.err || JSON.stringify(replace.map((c) => c.body)));

  check('no request reached the API without a bearer token', state.authFailures === 0, `${state.authFailures} unauthenticated request(s)`);
} finally {
  server.close();
}

const failed = results.filter((x) => !x.pass);
console.log(`\n${results.length - failed.length}/${results.length} passed in ${((Date.now() - t0) / 1000).toFixed(1)}s`);
if (failed.length) {
  console.log('failed:');
  for (const f of failed) console.log(`  - ${f.name}${f.note ? `: ${String(f.note).slice(0, 300)}` : ''}`);
  process.exit(1);
}
