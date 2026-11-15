// Shared plumbing for the integration runner and the probe: locate the
// stackql binary, materialise the test registry pointed at the mock, and run
// SQL asynchronously against it. No side effects on import.

import { spawn } from 'child_process';
import { existsSync, rmSync, mkdirSync, readdirSync, readFileSync, writeFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { PROVIDER_NAME, API_HOSTS, AUTH_HOSTS, API_HOST_VARIABLE } from '../../provider-dev/scripts/lib/spec_helpers.mjs';

export const here = path.dirname(fileURLToPath(import.meta.url));
export const repoRoot = path.resolve(here, '..', '..');

export function findStackql() {
  if (process.env.STACKQL) return process.env.STACKQL;
  const local = path.join(repoRoot, process.platform === 'win32' ? 'stackql.exe' : 'stackql');
  if (existsSync(local)) return local;
  return 'stackql'; // PATH
}

// The mock is one listener reached under two host names, so the endpoint
// selector is exercised for real: OVH_ENDPOINT unset or ovh-eu resolves to
// localhost:<port>, ovh-ca to 127.0.0.1:<port> (the mock records the Host
// header of every request).
export function mockHosts(port) {
  return { 'ovh-eu': `localhost:${port}`, 'ovh-ca': `127.0.0.1:${port}`, 'ovh-us': `127.0.0.1:${port}` };
}

// Copy the generated provider docs into tests/integration/.registry-tmp
// (gitignored, recreated each run) and point every server - document-level
// and path-level - and the OAuth2 token URL at the mock. The server
// variables, the x-stackQL-envVarSelector on OVH_ENDPOINT and the
// x-stackQL-envVar project variable are preserved: only the scheme and the
// selector's host values change. provider-dev/** is never modified.
export function buildTestRegistry(port) {
  const srcDir = path.join(repoRoot, 'provider-dev', 'openapi', 'src', PROVIDER_NAME, 'v00.00.00000');
  const tmpDir = path.join(here, '.registry-tmp');
  const outDir = path.join(tmpDir, 'src', PROVIDER_NAME, 'v00.00.00000');
  rmSync(tmpDir, { recursive: true, force: true });
  mkdirSync(path.join(outDir, 'services'), { recursive: true });
  const hosts = mockHosts(port);
  const retarget = (text, realHosts, variable) => {
    let out = text.split(`https://{${variable}}`).join(`http://{${variable}}`);
    for (const [key, host] of Object.entries(realHosts)) out = out.split(host).join(hosts[key]);
    return out;
  };

  const providerText = readFileSync(path.join(srcDir, 'provider.yaml'), 'utf8');
  if (!providerText.includes('https://{auth_host}/oauth2/token')) throw new Error('provider.yaml does not carry the https://{auth_host}/oauth2/token token URL');
  writeFileSync(path.join(outDir, 'provider.yaml'), retarget(providerText, AUTH_HOSTS, 'auth_host'));

  for (const f of readdirSync(path.join(srcDir, 'services'))) {
    if (!f.endsWith('.yaml')) continue;
    const text = readFileSync(path.join(srcDir, 'services', f), 'utf8');
    if (!text.includes(`https://{${API_HOST_VARIABLE}}/`)) throw new Error(`no https://{${API_HOST_VARIABLE}} server found in ${f}`);
    writeFileSync(path.join(outDir, 'services', f), retarget(text, API_HOSTS, API_HOST_VARIABLE));
  }
  return tmpDir;
}

export function registryArg(tmpDir) {
  const regPath = tmpDir.split(path.sep).join('/');
  return JSON.stringify({ url: `file://${regPath}`, localDocRoot: regPath, verifyConfig: { nopVerify: true } });
}

// IMPORTANT: async (spawn, not spawnSync) - the mock server runs on this
// process's event loop, so a synchronous wait for stackql deadlocks.
// Returns { rows, err }: rows is the parsed JSON (an empty array for zero
// rows, [{ _text }] for DML status text), err the stderr when it looks like
// an error.
export function makeRunSql(registry, baseEnv, { verbose = false, bin = findStackql() } = {}) {
  // extraArgs are extra stackql flags for one statement (e.g. --auth=...)
  return function runSql(sql, envOverrides = {}, extraArgs = []) {
    return new Promise((resolve) => {
      const env = { ...process.env, ...baseEnv, ...envOverrides };
      for (const [k, v] of Object.entries({ ...baseEnv, ...envOverrides })) if (v === undefined) delete env[k];
      const child = spawn(bin, [`--registry=${registry}`, ...extraArgs, 'exec', sql, '--output', 'json'], { cwd: repoRoot, env });
      let stdout = '', stderr = '';
      child.stdout.on('data', (d) => { stdout += d; });
      child.stderr.on('data', (d) => { stderr += d; });
      const timer = setTimeout(() => child.kill(), 120000);
      child.on('error', (e) => { clearTimeout(timer); resolve({ rows: null, err: String(e), stdout: '', stderr: String(e) }); });
      child.on('close', () => {
        clearTimeout(timer);
        stdout = stdout.trim();
        stderr = stderr.trim();
        if (verbose) console.log(`    sql: ${sql}\n    out: ${stdout.slice(0, 400)}${stderr ? `\n    err: ${stderr.slice(0, 400)}` : ''}`);
        // stackql's refusals do not all say "error": an endpoint selector value
        // outside its table, an unresolved server variable and a missing
        // credential are each reported in their own words
        const errish = /http response status code: [45]|error|panic|FindRoute|no matching operation|cannot find matching operation|disallowed|cannot find any viable servers|is not in values|requires an input|cannot be used|not provided/i;
        if (errish.test(stderr)) return resolve({ rows: null, err: stderr, stdout, stderr });
        if (!stdout) return resolve({ rows: [], err: null, stdout, stderr });
        try {
          resolve({ rows: JSON.parse(stdout) ?? [], err: null, stdout, stderr }); // literal null for zero rows
        } catch {
          resolve({ rows: [{ _text: stdout }], err: errish.test(stdout) ? stdout : null, stdout, stderr }); // DML status text
        }
      });
    });
  };
}
