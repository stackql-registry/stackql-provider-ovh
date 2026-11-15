#!/usr/bin/env node

// Developer probe: start the mock API, materialise the test registry (as
// run_integration_tests.mjs does) and run the SQL statements given on the
// command line, printing stackql's stdout/stderr and the wire calls the mock
// saw for each. This is how bindings get debugged.
//
// Usage: npm run probe -- "SELECT ..." "EXEC ..." [--env KEY=VALUE ...] [--unset KEY]

import { startMockServer, CLIENT_ID, CLIENT_SECRET, PROJECT_ID } from './mock_ovh_server.mjs';
import { buildTestRegistry, registryArg, makeRunSql, findStackql } from './harness.mjs';

// The environment the provider reads (as in run_integration_tests.mjs).
// OVH_ENDPOINT is unset so the selector default (ovh-eu) applies.
const PROVIDER_ENV = { OVH_CLIENT_ID: CLIENT_ID, OVH_CLIENT_SECRET: CLIENT_SECRET, OVH_CLOUD_PROJECT_SERVICE: PROJECT_ID, OVH_ENDPOINT: undefined };

const args = process.argv.slice(2);
const sqls = [];
const envOverrides = {};
for (let i = 0; i < args.length; i++) {
  if (args[i] === '--env') { const [k, ...v] = args[++i].split('='); envOverrides[k] = v.join('='); }
  else if (args[i] === '--unset') { envOverrides[args[++i]] = undefined; }
  else sqls.push(args[i]);
}
if (sqls.length === 0) {
  console.error('usage: npm run probe -- "SELECT ..." ["EXEC ..."] [--env KEY=VALUE] [--unset KEY]');
  process.exit(2);
}

const { server, port, log } = await startMockServer();
const registry = registryArg(buildTestRegistry(port));
const runSql = makeRunSql(registry, PROVIDER_ENV);
console.log(`mock API on localhost:${port}, stackql: ${findStackql()}`);

try {
  for (const sql of sqls) {
    const mark = log.length;
    const { stdout, stderr } = await runSql(sql, envOverrides);
    console.log(`\n=== ${sql}`);
    console.log(`stdout: ${stdout.slice(0, 1500)}`);
    if (stderr) console.log(`stderr: ${stderr.slice(0, 1000)}`);
    for (const e of log.slice(mark)) {
      const paging = Object.entries(e.headers).filter(([k]) => k.startsWith('x-pagination')).map(([k, v]) => `${k}=${v}`).join(' ');
      console.log(`wire: ${e.method} ${e.host}${e.path} query=${JSON.stringify(e.query)}${paging ? ` ${paging}` : ''} auth=${e.authorization ? e.authorization.split(' ')[0] : '-'} ct=${e.contentType} body=${JSON.stringify(e.body)}`);
    }
  }
} finally {
  server.close();
}
