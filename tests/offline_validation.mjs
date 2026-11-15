#!/usr/bin/env node

// Offline validation of the generated provider against the local file
// registry - no network, no server. Runs SHOW SERVICES / SHOW RESOURCES /
// SHOW METHODS and DESCRIBE EXTENDED and asserts the expected surface:
//   - the exact service list
//   - for EVERY service, that the resources stackql shows are exactly the
//     resources provider-dev/config/all_services.csv maps (the generated
//     provider and the committed mapping contract cannot drift apart)
//   - exact resource lists for the flagship services
//   - verbs and required params on representative resources
//   - the x-stackQL-envVar behaviour of the project variable and the
//     endpoint selector (api_host is never a required parameter)
//   - snake_case aliases, expanded identifier lists, the scalar value column
// Exit 1 on any failure.
//
// Usage: node tests/offline_validation.mjs
// Binary resolution: $STACKQL, ./stackql(.exe), then PATH.
// Note: `--output json` renders scalars as strings.

import { spawn } from 'child_process';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { PROVIDER_NAME, PROJECT_ENV_VAR, ENDPOINT_ENV_VAR, parseCsv } from '../provider-dev/scripts/lib/spec_helpers.mjs';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const regPath = path.join(repoRoot, 'provider-dev', 'openapi').replace(/\\/g, '/');
const registry = JSON.stringify({ url: `file://${regPath}`, localDocRoot: regPath, verifyConfig: { nopVerify: true } });
const CONCURRENCY = 8;

// ---------------------------------------------------------------------------
// Expectations. Exact sorted lists - a regeneration that adds or renames a
// service or a flagship resource must update these deliberately.
// ---------------------------------------------------------------------------

const EXPECTED_SERVICES = [
  'account', 'all_dom', 'auth', 'backup_services', 'cdn_dedicated', 'cloud', 'cloud_ai', 'cloud_container_registry', 'cloud_database',
  'cloud_kube', 'cloud_network', 'cloud_storage', 'cluster_hadoop', 'commercial_catalog', 'connectivity', 'contact', 'dbaas_logs',
  'dedicated_ceph', 'dedicated_cloud', 'dedicated_cluster', 'dedicated_housing', 'dedicated_installation_template', 'dedicated_nasha',
  'dedicated_server', 'dedicated_server_v2', 'domain', 'domain_v2', 'email_domain', 'email_exchange', 'email_mxplan', 'email_pro', 'finops',
  'freefax', 'horizon_view', 'hosting_private_database', 'hosting_web', 'iam', 'ip', 'ip_loadbalancing', 'license_cloud_linux',
  'license_cpanel', 'license_directadmin', 'license_hycu', 'license_office', 'license_office_prepaid', 'license_plesk', 'license_redhat',
  'license_sqlserver', 'license_virtuozzo', 'license_windows', 'license_worklight', 'location', 'managed_cms', 'me', 'metrics',
  'ms_services', 'network_defense', 'new_account', 'notification', 'nutanix', 'okms', 'order', 'over_the_box', 'ovh_cloud_connect',
  'pack_siptrunk', 'pack_xdsl', 'partner', 'price', 'public_cloud', 'public_cloud_analytics', 'public_cloud_database',
  'public_cloud_kubernetes', 'public_cloud_network', 'public_cloud_storage', 'saas_csp2', 'secret', 'service', 'services', 'sms', 'ssl',
  'ssl_gateway', 'stack_mis', 'startup', 'storage', 'supply_mondial_relay', 'support', 'telephony', 'veeam_cloud_connect',
  'veeam_enterprise', 'videocenter', 'vip', 'vmware_cloud_director', 'vps', 'vrack', 'vrack_services', 'webhosting', 'xdsl', 'zimbra'
];

// Flagship services, listed in full.
const EXPECTED_RESOURCES = {
  cloud: [
    'acls', 'agreements', 'alerting_alerts', 'alertings', 'bills', 'capabilities_product_availabilities', 'credits', 'eligibilities',
    'flavors', 'images', 'instance_groups', 'instance_interfaces', 'instances', 'lab_agreements', 'labs', 'operations',
    'order_rule_availabilities', 'orders', 'projects', 'quantum_capabilities_region_qpus', 'quantum_capabilities_regions', 'quotas',
    'region_availables', 'region_instances', 'region_keymanager_certificates', 'region_keymanager_secrets', 'region_log_kinds',
    'region_log_subscriptions', 'region_quota_alloweds', 'region_quota_storages', 'region_quotas', 'region_workflow_backups', 'regions',
    'roles', 'service_infos', 'snapshots', 'sshkeys', 'usage_currents', 'usage_forecasts', 'usage_histories', 'usage_plans',
    'user_configurations', 'user_openrcs', 'user_policies', 'user_rclones', 'user_roles', 'user_s3_credentials', 'users', 'vracks'
  ],
  iam: [
    'authorization_checks', 'log_kinds', 'log_subscriptions', 'log_urls', 'permissions_groups', 'policies', 'reference_actions',
    'reference_resource_types', 'resource_groups', 'resources'
  ],
  vrack: null // filled from the mapping contract below; listed here so the count is reported
};

// ---------------------------------------------------------------------------

function findBinary() {
  if (process.env.STACKQL && fs.existsSync(process.env.STACKQL)) return process.env.STACKQL;
  for (const name of ['stackql', 'stackql.exe']) {
    const local = path.join(repoRoot, name);
    if (fs.existsSync(local)) return local;
  }
  return 'stackql'; // PATH
}
const bin = findBinary();

// the developer's own OVH_* variables must not leak into the assertions
const CLEAN_ENV = { [PROJECT_ENV_VAR]: undefined, [ENDPOINT_ENV_VAR]: undefined };

function runSql(sql, envOverrides = {}) {
  return new Promise((resolve) => {
    const env = { ...process.env };
    for (const [k, v] of Object.entries({ ...CLEAN_ENV, ...envOverrides })) { if (v === undefined) delete env[k]; else env[k] = v; }
    const child = spawn(bin, [`--registry=${registry}`, 'exec', sql, '--output', 'json'], { cwd: repoRoot, env });
    let stdout = '', stderr = '';
    child.stdout.on('data', (d) => (stdout += d));
    child.stderr.on('data', (d) => (stderr += d));
    child.on('close', (code) => {
      let rows = [];
      try { rows = JSON.parse(stdout) ?? []; } catch { rows = []; }
      resolve({ code, rows, stdout, stderr });
    });
    child.on('error', (err) => resolve({ code: -1, rows: [], stdout: '', stderr: String(err) }));
  });
}

const results = [];
function check(name, cond, note = '') {
  results.push({ name, pass: !!cond, note });
  console.log(`  ${cond ? 'PASS' : 'FAIL'}  ${name}${cond ? '' : `  [${String(note).slice(0, 240)}]`}`);
}
const names = (rows, key = 'name') => rows.map((x) => x[key]).sort();
const methodsByName = (rows) => Object.fromEntries(rows.map((m) => [m.MethodName, m]));
const required = (m) => String(m?.RequiredParams || '').split(',').map((s) => s.trim()).filter(Boolean);

console.log(`stackql: ${bin}`);
console.log(`registry: ${regPath}`);

// --- the mapping contract: service -> resources with at least one mapped method
const csvRows = parseCsv(fs.readFileSync(path.join(repoRoot, 'provider-dev', 'config', 'all_services.csv'), 'utf8'));
const col = Object.fromEntries(csvRows[0].map((h, i) => [h, i]));
const contract = new Map();
for (const row of csvRows.slice(1)) {
  const resource = row[col.stackql_resource_name];
  if (!resource || resource === 'skip_this_resource') continue;
  const service = row[col.filename].replace(/\.yaml$/, '');
  if (!contract.has(service)) contract.set(service, new Set());
  contract.get(service).add(resource);
}

// --- services
let r = await runSql(`SHOW SERVICES IN ${PROVIDER_NAME}`);
check(`SHOW SERVICES (${EXPECTED_SERVICES.length})`, JSON.stringify(names(r.rows)) === JSON.stringify([...EXPECTED_SERVICES].sort()), r.stderr || JSON.stringify(names(r.rows)));
check('the mapping contract covers the same services', JSON.stringify([...contract.keys()].sort()) === JSON.stringify([...EXPECTED_SERVICES].sort()), JSON.stringify([...contract.keys()].sort()));

// --- resources of every service against the mapping contract
const shown = new Map();
const queue = [...EXPECTED_SERVICES];
await Promise.all(Array.from({ length: CONCURRENCY }, async () => {
  while (queue.length > 0) {
    const svc = queue.shift();
    const res = await runSql(`SHOW RESOURCES IN ${PROVIDER_NAME}.${svc}`);
    shown.set(svc, { names: names(res.rows), stderr: res.stderr });
  }
}));
const drifted = [];
let resourceTotal = 0;
for (const svc of EXPECTED_SERVICES) {
  const expected = [...(contract.get(svc) || [])].sort();
  const got = shown.get(svc)?.names || [];
  resourceTotal += got.length;
  if (JSON.stringify(expected) !== JSON.stringify(got)) drifted.push(`${svc}: expected ${expected.length}, shown ${got.length} ${shown.get(svc)?.stderr || ''}`);
}
check(`SHOW RESOURCES matches all_services.csv for all ${EXPECTED_SERVICES.length} services (${resourceTotal} resources)`, drifted.length === 0, drifted.join('; '));
for (const [svc, expected] of Object.entries(EXPECTED_RESOURCES)) {
  const got = shown.get(svc)?.names || [];
  if (expected === null) { check(`${PROVIDER_NAME}.${svc} has resources (${got.length})`, got.length > 0); continue; }
  check(`SHOW RESOURCES IN ${PROVIDER_NAME}.${svc} (${expected.length})`, JSON.stringify(got) === JSON.stringify([...expected].sort()), JSON.stringify(got));
}

// --- the project variable (x-stackQL-envVar) and the endpoint selector
r = await runSql(`SHOW METHODS IN ${PROVIDER_NAME}.cloud.instances`);
const unset = methodsByName(r.rows);
check(`service_name is required when ${PROJECT_ENV_VAR} is unset`, r.rows.length > 0 && Object.values(unset).every((m) => required(m).includes('service_name')), r.stderr || JSON.stringify(unset));
check('api_host is never a required parameter (the selector default resolves it)', r.rows.length > 0 && !Object.values(unset).some((m) => required(m).includes('api_host')), JSON.stringify(unset));
r = await runSql(`SHOW METHODS IN ${PROVIDER_NAME}.cloud.instances`, { [PROJECT_ENV_VAR]: 'offline-validation' });
const set = methodsByName(r.rows);
check(`service_name is optional when ${PROJECT_ENV_VAR} is set (x-stackQL-envVar)`, r.rows.length > 0 && !Object.values(set).some((m) => required(m).includes('service_name')), r.stderr || JSON.stringify(set));
r = await runSql(`SHOW METHODS IN ${PROVIDER_NAME}.public_cloud_database.mysqls`, { [PROJECT_ENV_VAR]: 'offline-validation' });
check(`v2 project_id is optional when ${PROJECT_ENV_VAR} is set`, r.rows.length > 0 && !r.rows.some((m) => required(m).includes('project_id')), r.stderr || JSON.stringify(r.rows));
r = await runSql(`SHOW METHODS IN ${PROVIDER_NAME}.public_cloud_database.mysqls`);
const my = methodsByName(r.rows);
check('v2 project_id is required when the variable is unset', required(my.list).includes('project_id'), JSON.stringify(my));
check('v2: PATCH is the UPDATE, PUT is EXEC replace', my.update?.SQLVerb === 'UPDATE' && my.replace?.SQLVerb === 'EXEC', JSON.stringify(my));

// --- verbs and required params on a full-lifecycle resource with hoisted actions
check('cloud.instances verbs', unset.list?.SQLVerb === 'SELECT' && unset.get?.SQLVerb === 'SELECT' && unset.create?.SQLVerb === 'INSERT' && unset.update?.SQLVerb === 'UPDATE' && unset.delete?.SQLVerb === 'DELETE', JSON.stringify(unset));
check('cloud.instances actions are EXEC on the resource they act on', ['reboot', 'start', 'stop', 'resize', 'snapshot', 'rescue_mode'].every((m) => unset[m]?.SQLVerb === 'EXEC'), JSON.stringify(Object.keys(unset)));
check('cloud.instances.get requires instance_id', required(unset.get).includes('instance_id') && !required(unset.list).includes('instance_id'), JSON.stringify(unset));

// --- the flagship: projects (root paths of the scoped service, expanded list)
r = await runSql(`SHOW METHODS IN ${PROVIDER_NAME}.cloud.projects`);
const pm = methodsByName(r.rows);
check('cloud.projects.list needs no parameter; get and update need service_name', pm.list?.SQLVerb === 'SELECT' && required(pm.list).length === 0 && required(pm.get).includes('service_name') && pm.update?.SQLVerb === 'UPDATE', JSON.stringify(pm));
check('cloud.projects lifecycle actions are EXEC', ['terminate', 'confirm_termination', 'change_contact', 'unleash'].every((m) => pm[m]?.SQLVerb === 'EXEC'), JSON.stringify(Object.keys(pm)));
r = await runSql(`DESCRIBE EXTENDED ${PROVIDER_NAME}.cloud.projects`);
let cols = names(r.rows);
check('cloud.projects: the expanded list projects the full object, snake_case', ['project_id', 'project_name', 'plan_code', 'creation_date', 'status', 'iam'].every((c) => cols.includes(c)) && !cols.includes('projectName') && !cols.includes('value'), JSON.stringify(cols));

// --- expanded identifier lists elsewhere
r = await runSql(`DESCRIBE EXTENDED ${PROVIDER_NAME}.dedicated_server.servers`);
cols = names(r.rows);
check('dedicated_server.servers: expanded list columns', ['name', 'datacenter', 'state', 'os', 'server_id', 'power_state'].every((c) => cols.includes(c)) && !cols.includes('serverId'), JSON.stringify(cols));
r = await runSql(`SHOW METHODS IN ${PROVIDER_NAME}.dedicated_server.servers`);
const sm = methodsByName(r.rows);
check('dedicated_server.servers: reboot and terminate hoisted as EXEC', sm.reboot?.SQLVerb === 'EXEC' && sm.terminate?.SQLVerb === 'EXEC' && sm.list?.SQLVerb === 'SELECT' && sm.update?.SQLVerb === 'UPDATE', JSON.stringify(Object.keys(sm)));
r = await runSql(`DESCRIBE EXTENDED ${PROVIDER_NAME}.vrack.vracks`);
cols = names(r.rows);
check('vrack.vracks: expanded list columns', ['name', 'description'].every((c) => cols.includes(c)), JSON.stringify(cols));

// --- scalar lists and scalar reads: one `value` column
r = await runSql(`DESCRIBE EXTENDED ${PROVIDER_NAME}.cloud_kube.capabilities_kube_regions`);
check('scalar list: a single value column', JSON.stringify(names(r.rows)) === JSON.stringify(['value']), r.stderr || JSON.stringify(names(r.rows)));
r = await runSql(`DESCRIBE EXTENDED ${PROVIDER_NAME}.auth.times`);
check('scalar read: a single value column', JSON.stringify(names(r.rows)) === JSON.stringify(['value']), r.stderr || JSON.stringify(names(r.rows)));

// --- API v2 and rule-named resources
r = await runSql(`DESCRIBE EXTENDED ${PROVIDER_NAME}.iam.policies`);
cols = names(r.rows);
check('iam.policies columns (v2, snake_case)', ['id', 'name', 'identities', 'resources', 'permissions', 'read_only', 'created_at'].every((c) => cols.includes(c)) && !cols.includes('readOnly'), JSON.stringify(cols));
r = await runSql(`SHOW METHODS IN ${PROVIDER_NAME}.iam.policies`);
const im = methodsByName(r.rows);
check('iam.policies full lifecycle', im.list?.SQLVerb === 'SELECT' && im.get?.SQLVerb === 'SELECT' && im.create?.SQLVerb === 'INSERT' && im.update?.SQLVerb === 'UPDATE' && im.delete?.SQLVerb === 'DELETE', JSON.stringify(im));
r = await runSql(`SHOW METHODS IN ${PROVIDER_NAME}.cloud_kube.clusters`);
const km = methodsByName(r.rows);
check('cloud_kube.clusters: update is the PUT, force_update the hoisted POST', km.update?.SQLVerb === 'UPDATE' && km.force_update?.SQLVerb === 'EXEC' && km.restart?.SQLVerb === 'EXEC', JSON.stringify(Object.keys(km)));
r = await runSql(`SHOW METHODS IN ${PROVIDER_NAME}.me.accounts`);
const am = methodsByName(r.rows);
check('me.accounts: singleton get and update with no required parameter', am.get?.SQLVerb === 'SELECT' && required(am.get).length === 0 && am.update?.SQLVerb === 'UPDATE', JSON.stringify(am));
r = await runSql(`DESCRIBE EXTENDED ${PROVIDER_NAME}.me.accounts`);
cols = names(r.rows);
check('me.accounts columns', ['nichandle', 'email', 'ovh_subsidiary', 'country'].every((c) => cols.includes(c)), JSON.stringify(cols));

const failed = results.filter((x) => !x.pass);
console.log(`\n${results.length - failed.length}/${results.length} passed`);
if (failed.length) process.exit(1);
