#!/usr/bin/env python3
"""pystackql smoke test for the ovh stackql provider.

Exercises the salient resources against a real OVHcloud dev account: read
smokes across the surface (API v1 and v2, expanded identifier lists, scalar
reads, the Public Cloud project scope), then free self-cleaning write
lifecycles (a Public Cloud SSH key, a project description toggle-and-restore,
an IAM resource group through API v2), and - only behind
--with-instance-lifecycle - a billable instance create / rename / reboot /
delete. The resources and mutations are the ones the OVHcloud Terraform
provider documents first (ovh_cloud_project, ovh_cloud_project_ssh_key,
ovh_cloud_project_instance, ovh_iam_resource_group).

Budget: the default run creates nothing billable (0.00). The gated instance
lifecycle runs the smallest hourly flavor for a few minutes (a few cents).

Everything created is named `stackql-smoke-<stamp>`; before running, the
script sweeps every stackql-smoke-* breadcrumb so each run starts clean and a
failed run cannot leave billable objects behind past the next run. Anything
toggled is restored.

Credentials come from the environment, exactly as the provider reads them
(`make smoke*` sources .env):

    export OVH_ENDPOINT=ovh-eu                  # or ovh-ca, ovh-us (default ovh-eu)
    export OVH_CLIENT_ID=...                    # service account (OAuth2 client credentials)
    export OVH_CLIENT_SECRET=...
    export OVH_CLOUD_PROJECT_SERVICE=...        # the Public Cloud project the suite runs in

With no client credentials but OVH_ACCESS_TOKEN set, the suite authenticates
with that pre-issued bearer token instead (the --auth override the docs show).
The service account needs an IAM policy that allows the calls below; a 403
names the IAM action that is missing.

Pacing: OVHcloud publishes no single request quota; every statement is paced
by INTER_REQUEST_DELAY_S and a 429 is a harness bug that fails the run.

Never run this against a production account.

Usage:
    python tests/smoke_test.py                             # local provider-dev/openapi registry (default)
    python tests/smoke_test.py --live                      # the published provider in the stackql registry
    python tests/smoke_test.py --read-only                 # read smokes only, no writes
    python tests/smoke_test.py --with-instance-lifecycle   # also the billable instance lifecycle
    python tests/smoke_test.py --cleanup-only              # just sweep breadcrumbs
"""

from __future__ import annotations

import argparse
import base64
import json
import os
import re
import struct
import sys
import time
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parents[1]
PROVIDER = "ovh"
SMOKE_PREFIX = "stackql-smoke-"
# No documented API-wide limit; one statement a second is well inside what the
# console itself issues.
INTER_REQUEST_DELAY_S = 1.0
PROJECT_ENV = "OVH_CLOUD_PROJECT_SERVICE"
# pystackql manages its own stackql binary; the harness upgrades it when
# older than the release the provider was verified on (the endpoint selector
# x-stackQL-envVarSelector and the token URL variables need it).
MIN_STACKQL_VERSION = (1, 0, 888)
# The gated lifecycle: the smallest general purpose flavor and a stock image.
INSTANCE_FLAVOR = os.environ.get("OVH_SMOKE_FLAVOR", "d2-2")
# The image is matched by its exact name: "Debian 12 - Plesk" and other
# variants of a stock image carry a licence fee.
INSTANCE_IMAGE = os.environ.get("OVH_SMOKE_IMAGE", "Debian 12")

ERROR_RE = re.compile(
    r"http response status code: [45]|over HTTP error|error assembling|"
    r"cannot find matching operation|FindRoute|no matching operation|"
    r"cannot find any viable servers|parser error|panic|"
    r"no request body for operation|schema unsuitable|UNAUTHORIZED|FORBIDDEN|"
    r"is not in values|requires an input|cannot be used|could not locate symbol",
    re.I,
)
RATE_LIMIT_RE = re.compile(r"status code: 429|TooManyRequests|rate limit", re.I)


def sql_str(value: str) -> str:
    """A single-quoted SQL literal."""
    return "'" + str(value).replace("'", "''") + "'"


def throwaway_public_key(comment: str) -> str:
    """A well-formed ssh-ed25519 public key with no private half kept."""
    key_type = b"ssh-ed25519"
    blob = struct.pack(">I", len(key_type)) + key_type + struct.pack(">I", 32) + os.urandom(32)
    return f"ssh-ed25519 {base64.b64encode(blob).decode()} {comment}"


class Smoke:
    def __init__(self, args: argparse.Namespace) -> None:
        self.args = args
        self.stamp = str(int(time.time()))[-6:]
        self.name = f"{SMOKE_PREFIX}{self.stamp}"
        self.results: list[tuple[str, str, str]] = []
        self.requests = 0

        has_client = bool(os.environ.get("OVH_CLIENT_ID") and os.environ.get("OVH_CLIENT_SECRET"))
        has_token = bool(os.environ.get("OVH_ACCESS_TOKEN"))
        if not has_client and not has_token:
            sys.exit("set OVH_CLIENT_ID and OVH_CLIENT_SECRET (or OVH_ACCESS_TOKEN) - see the module docstring and .env.example")
        if bool(os.environ.get("OVH_CLIENT_ID")) != bool(os.environ.get("OVH_CLIENT_SECRET")):
            sys.exit("OVH_CLIENT_ID and OVH_CLIENT_SECRET must be set together")
        self.project = os.environ.get(PROJECT_ENV, "")
        if not self.project:
            sys.exit(f"{PROJECT_ENV} is not set - the suite runs inside one Public Cloud project")
        # the provider's default is the client credentials grant; a pre-issued
        # token needs the bearer override
        custom_auth = None if has_client else {PROVIDER: {"type": "bearer", "credentialsenvvar": "OVH_ACCESS_TOKEN"}}
        self.auth_mode = "oauth2 client credentials" if has_client else "bearer (OVH_ACCESS_TOKEN)"

        from pystackql import StackQL

        kwargs = {"output": "dict"}
        if custom_auth:
            kwargs["custom_auth"] = custom_auth
        if not args.live:
            reg_path = (BASE_DIR / "provider-dev" / "openapi").resolve()
            reg_url = "file://" + reg_path.as_posix()
            self.sq = StackQL(custom_registry=reg_url, **kwargs)
            # pystackql only serialises {"url": ...}; a local file registry
            # additionally needs localDocRoot + nopVerify - patch the exec
            # params in place (compact JSON, shell-quoted).
            full = json.dumps(
                {"url": reg_url, "localDocRoot": reg_path.as_posix(), "verifyConfig": {"nopVerify": True}},
                separators=(",", ":"),
            )
            if sys.platform.startswith("win"):
                quoted = '"' + full.replace('"', '\\"') + '"'
            else:
                import shlex
                quoted = shlex.quote(full)
            params = self.sq.local_query_executor.params
            for i, p in enumerate(params):
                if p == "--registry":
                    params[i + 1] = quoted
                    break
        else:
            self.sq = StackQL(**kwargs)
        self.ensure_stackql_version()
        if args.live:
            self.sq.executeStmt(f"REGISTRY PULL {PROVIDER}")

    def ensure_stackql_version(self) -> None:
        def parse(v: str) -> tuple[int, ...]:
            return tuple(int(x) for x in re.findall(r"\d+", str(v))[:3])

        current = parse(getattr(self.sq, "version", "") or "")
        if current and current >= MIN_STACKQL_VERSION:
            return
        print(f"stackql {self.sq.version} at {self.sq.bin_path} is older than "
              f"v{'.'.join(map(str, MIN_STACKQL_VERSION))} - upgrading pystackql's binary")
        self.sq.upgrade(showprogress=False)
        if parse(self.sq.version) < MIN_STACKQL_VERSION:
            sys.exit(f"stackql {self.sq.version} is still too old after upgrade")

    # ------------------------------------------------------------------ core
    def q(self, sql: str):
        # serial pacing
        if self.requests:
            time.sleep(INTER_REQUEST_DELAY_S)
        self.requests += 1
        try:
            if sql.lstrip().upper().startswith(("SELECT", "SHOW", "DESCRIBE")) or "RETURNING" in sql.upper():
                out = self.sq.execute(sql)
            else:
                out = self.sq.executeStmt(sql)
        except Exception as exc:  # noqa: BLE001
            return [], str(exc)
        text = json.dumps(out, default=str)
        if RATE_LIMIT_RE.search(text):
            return out if isinstance(out, list) else [out], "RATE LIMITED (429) - harness pacing bug: " + text
        if ERROR_RE.search(text):
            return out if isinstance(out, list) else [out], text
        if isinstance(out, list) and out and isinstance(out[0], dict) and "error" in out[0]:
            return out, text
        return out if isinstance(out, list) else [out], None

    def record(self, name: str, ok: bool, note: str = ""):
        self.results.append((name, "PASS" if ok else "FAIL", note))
        print(f"  {'PASS' if ok else 'FAIL'}  {name}" + ("" if ok else f"  [{note[:160]}]"))
        return ok

    def step(self, name: str, sql: str, expect_rows: bool = False, contains: str | None = None, max_rows: int | None = None):
        rows, err = self.q(sql)
        if err:
            self.record(name, False, err[:220])
            return None
        blob = json.dumps(rows, default=str)
        if expect_rows and not rows:
            self.record(name, False, "expected rows, got none")
            return None
        if contains and contains not in blob:
            self.record(name, False, f"'{contains}' not in result")
            return None
        if max_rows is not None and len(rows) > max_rows:
            self.record(name, False, f"expected at most {max_rows} rows, got {len(rows)}")
            return None
        self.record(name, True)
        return rows

    def wait_for(self, name: str, sql: str, pred, timeout: int = 600, interval: int = 10):
        """Poll until pred(rows) holds - for asynchronous lifecycles."""
        start = time.time()
        last = None
        while time.time() - start < timeout:
            rows, err = self.q(sql)
            last = err or json.dumps(rows, default=str)[:160]
            if not err and pred(rows):
                self.results.append((name, "PASS", f"{int(time.time() - start)}s"))
                print(f"  PASS  {name}  ({int(time.time() - start)}s)")
                return True
            time.sleep(interval)
        self.record(name, False, f"timeout: {last}")
        return False

    # ------------------------------------------------------- breadcrumb sweep
    def cleanup_breadcrumbs(self) -> None:
        print("== breadcrumb sweep ==")
        swept = 0
        # billable first: instances left by an interrupted gated lifecycle
        rows, err = self.q(f"SELECT id, name FROM {PROVIDER}.cloud.instances")
        if err:
            print(f"  WARN instance sweep list failed: {err[:160]}")
        else:
            for r in rows:
                if str(r.get("name", "")).startswith(SMOKE_PREFIX):
                    print(f"  sweeping instance {r['name']}")
                    self.q(f"DELETE FROM {PROVIDER}.cloud.instances WHERE instance_id = {sql_str(r['id'])}")
                    swept += 1
        rows, err = self.q(f"SELECT id, name FROM {PROVIDER}.cloud.sshkeys")
        if err:
            print(f"  WARN ssh key sweep list failed: {err[:160]}")
        else:
            for r in rows:
                if str(r.get("name", "")).startswith(SMOKE_PREFIX):
                    print(f"  sweeping ssh key {r['name']}")
                    self.q(f"DELETE FROM {PROVIDER}.cloud.sshkeys WHERE key_id = {sql_str(r['id'])}")
                    swept += 1
        rows, err = self.q(f"SELECT id, name FROM {PROVIDER}.iam.resource_groups")
        if err:
            print(f"  WARN resource group sweep list failed: {err[:160]}")
        else:
            for r in rows:
                if str(r.get("name", "")).startswith(SMOKE_PREFIX):
                    print(f"  sweeping IAM resource group {r['name']}")
                    self.q(f"DELETE FROM {PROVIDER}.iam.resource_groups WHERE group_id = {sql_str(r['id'])}")
                    swept += 1
        # a description left toggled by an interrupted run: the original is
        # gone, so fall back to the project name
        rows, err = self.q(f"SELECT project_name, description FROM {PROVIDER}.cloud.projects WHERE service_name = {sql_str(self.project)}")
        if not err and rows and str(rows[0].get("description", "")).startswith(SMOKE_PREFIX):
            print("  restoring the project description left by an interrupted run")
            self.q(f"UPDATE {PROVIDER}.cloud.projects SET description = {sql_str(rows[0].get('project_name') or '')} WHERE service_name = {sql_str(self.project)}")
            swept += 1
        print(f"  swept {swept} breadcrumb(s)")

    # -------------------------------------------------------------- read path
    def read_smokes(self) -> None:
        P = PROVIDER
        print("== read smokes ==")
        self.step("show services", f"SHOW SERVICES IN {P}", expect_rows=True)
        # account and auth (API v1, unscoped)
        self.step("account singleton (me.accounts)", f"SELECT nichandle, country, ovh_subsidiary FROM {P}.me.accounts", expect_rows=True)
        self.step("scalar read: API server time (auth.times.value)", f"SELECT value FROM {P}.auth.times", expect_rows=True)
        self.step("service accounts: expanded identifier list (me.api_oauth2_clients)",
                  f"SELECT client_id, name, flow FROM {P}.me.api_oauth2_clients", expect_rows=True)
        self.step("billing services: expanded integer identifiers (services.services)",
                  f"SELECT service_id, JSON_EXTRACT(resource, '$.name') AS resource_name FROM {P}.services.services", expect_rows=True)
        # the flagship: the estate inventory (root path, expanded list)
        self.step("estate inventory: projects list returns full objects",
                  f"SELECT project_id, project_name, status, plan_code, creation_date FROM {P}.cloud.projects",
                  expect_rows=True, contains=self.project)
        self.step("project get by service_name",
                  f"SELECT project_id, project_name, status FROM {P}.cloud.projects WHERE service_name = {sql_str(self.project)}",
                  expect_rows=True, contains=self.project)
        # project-scoped reads: the project comes from OVH_CLOUD_PROJECT_SERVICE
        regions = self.step("regions: expanded list under the project scope",
                            f"SELECT name, status, continent_code, datacenter_location FROM {P}.cloud.regions", expect_rows=True)
        self.step("quota headroom (nested instance column)",
                  f"SELECT region, JSON_EXTRACT(instance, '$.usedInstances') AS used_instances, "
                  f"JSON_EXTRACT(instance, '$.maxInstances') AS max_instances FROM {P}.cloud.quotas", expect_rows=True)
        # the compute region the rest of the suite uses: OVH_SMOKE_REGION, else
        # the first listed region that offers flavors (not every region does)
        by_region = self.step("flavors of every region in one call (GROUP BY region)",
                              f"SELECT region, COUNT(*) AS flavors FROM {P}.cloud.flavors GROUP BY region", expect_rows=True)
        with_flavors = {r.get("region") for r in (by_region or [])}
        self.region = os.environ.get("OVH_SMOKE_REGION") or next(
            (r.get("name") for r in (regions or []) if r.get("name") in with_flavors), "")
        if self.record("a compute region is known", bool(self.region), "no listed region offers flavors"):
            # one flavor by name: `exec --output json` splits a result of more
            # than 100 rows into several arrays (stackql/stackql#925), so the
            # suite keeps every result under that
            self.step(f"flavors: WHERE region pushed down as a query parameter ({self.region})",
                      f"SELECT id, name, vcpus, ram, disk FROM {P}.cloud.flavors "
                      f"WHERE region = {sql_str(self.region)} AND name = {sql_str(INSTANCE_FLAVOR)}",
                      expect_rows=True, contains=INSTANCE_FLAVOR)
        self.step("instances list (may be empty)", f"SELECT id, name, region, status, flavor_id FROM {P}.cloud.instances")
        self.step("ssh keys list (may be empty)", f"SELECT id, name, finger_print FROM {P}.cloud.sshkeys")
        self.step("project service information (scoped singleton)",
                  f"SELECT status, creation, renewal_type FROM {P}.cloud.service_infos", expect_rows=True)
        self.step("scalar list: Kubernetes regions (value column)",
                  f"SELECT value FROM {P}.cloud_kube.capabilities_kube_regions", expect_rows=True)
        self.step("Kubernetes clusters list (may be empty)", f"SELECT id, name, region, status, version FROM {P}.cloud_kube.clusters")
        # other families
        self.step("vracks: expanded list (may be empty)", f"SELECT name, description FROM {P}.vrack.vracks")
        self.step("ip blocks: expanded list (may be empty)", f"SELECT ip, type, version, country FROM {P}.ip.ips")
        # API v2
        self.step("v2 locations", f"SELECT name, code, type, status FROM {P}.location.locations", expect_rows=True)
        self.step("v2 IAM policies (page size as a WHERE key)",
                  f"SELECT id, name, read_only, JSON_EXTRACT(permissions, '$.allow') AS allowed FROM {P}.iam.policies "
                  f"WHERE x_pagination_size = 100", expect_rows=True)
        self.step("v2 IAM resources: x_pagination_size = 2 returns at most 2 rows",
                  f"SELECT id, urn, type FROM {P}.iam.resources WHERE x_pagination_size = 2", expect_rows=True, max_rows=2)
        self.step("v2 project list (root path of the v2 scoped service)",
                  f"SELECT id, name, resource_status FROM {P}.public_cloud.projects", expect_rows=True, contains=self.project)
        self.step("v2 project get by project_id",
                  f"SELECT id, name, resource_status FROM {P}.public_cloud.projects WHERE project_id = {sql_str(self.project)}",
                  expect_rows=True, contains=self.project)

    # ------------------------------------------------------------- write path
    def write_lifecycles(self) -> None:
        P = PROVIDER
        name = self.name
        print(f"== write lifecycles ({name}) ==")

        # 1. Public Cloud SSH key: INSERT ... RETURNING / SELECT / DELETE (free)
        key_id = None
        try:
            rows = self.step("ssh key INSERT ... RETURNING",
                             f"INSERT INTO {P}.cloud.sshkeys (name, public_key) SELECT {sql_str(name)}, {sql_str(throwaway_public_key(name))} "
                             f"RETURNING id, name, finger_print", expect_rows=True, contains=name)
            if rows:
                key_id = rows[0].get("id")
            if not key_id:
                listed, _ = self.q(f"SELECT id, name FROM {P}.cloud.sshkeys")
                key_id = next((r["id"] for r in listed if r.get("name") == name), None)
            if key_id:
                self.step("ssh key get by key_id", f"SELECT id, name, public_key FROM {P}.cloud.sshkeys WHERE key_id = {sql_str(key_id)}",
                          expect_rows=True, contains=name)
        finally:
            if key_id:
                self.step("ssh key DELETE", f"DELETE FROM {P}.cloud.sshkeys WHERE key_id = {sql_str(key_id)}")
                listed, err = self.q(f"SELECT id, name FROM {P}.cloud.sshkeys")
                self.record("ssh key is gone after DELETE", not err and all(r.get("name") != name for r in listed), err or "still listed")

        # 2. Project description: toggle and restore (UPDATE on the root path)
        rows, err = self.q(f"SELECT description FROM {P}.cloud.projects WHERE service_name = {sql_str(self.project)}")
        if err or not rows:
            self.record("project description read", False, err or "no row")
        else:
            original = rows[0].get("description") or ""
            try:
                self.step("project description UPDATE",
                          f"UPDATE {P}.cloud.projects SET description = {sql_str(name)} WHERE service_name = {sql_str(self.project)}")
                self.step("project description reads back", f"SELECT description FROM {P}.cloud.projects WHERE service_name = {sql_str(self.project)}",
                          expect_rows=True, contains=name)
            finally:
                self.step("project description restored",
                          f"UPDATE {P}.cloud.projects SET description = {sql_str(original)} WHERE service_name = {sql_str(self.project)}")
                back, err = self.q(f"SELECT description FROM {P}.cloud.projects WHERE service_name = {sql_str(self.project)}")
                self.record("project description is the original again", not err and bool(back) and (back[0].get("description") or "") == original, err or str(back))

        # 3. IAM resource group through API v2: INSERT / SELECT / UPDATE / DELETE (free)
        group_id = None
        try:
            rows = self.step("v2 IAM resource group INSERT ... RETURNING (typed JSON: empty array)",
                             f"INSERT INTO {P}.iam.resource_groups (name, resources) SELECT {sql_str(name)}, '[]' RETURNING id, name",
                             expect_rows=True, contains=name)
            if rows:
                group_id = rows[0].get("id")
            if not group_id:
                listed, _ = self.q(f"SELECT id, name FROM {P}.iam.resource_groups")
                group_id = next((r["id"] for r in listed if r.get("name") == name), None)
            if group_id:
                self.step("v2 IAM resource group get", f"SELECT id, name, read_only FROM {P}.iam.resource_groups WHERE group_id = {sql_str(group_id)}",
                          expect_rows=True, contains=name)
                self.step("v2 IAM resource group UPDATE (PUT)",
                          f"UPDATE {P}.iam.resource_groups SET name = {sql_str(name + '-b')}, resources = '[]' WHERE group_id = {sql_str(group_id)}")
                self.step("v2 IAM resource group reads back renamed",
                          f"SELECT id, name FROM {P}.iam.resource_groups WHERE group_id = {sql_str(group_id)}", expect_rows=True, contains=name + "-b")
        finally:
            if group_id:
                self.step("v2 IAM resource group DELETE", f"DELETE FROM {P}.iam.resource_groups WHERE group_id = {sql_str(group_id)}")
                listed, err = self.q(f"SELECT id, name FROM {P}.iam.resource_groups")
                self.record("v2 IAM resource group is gone after DELETE", not err and all(r.get("id") != group_id for r in listed), err or "still listed")

    def instance_lifecycle(self) -> None:
        P = PROVIDER
        name = self.name
        print(f"== gated instance lifecycle ({name}) - billable, keep the window short ==")
        region = os.environ.get("OVH_SMOKE_REGION") or getattr(self, "region", "")
        if not region:
            self.record("instance lifecycle: a region is known", False, "set OVH_SMOKE_REGION or run the read smokes first")
            return
        flavors, err = self.q(f"SELECT id, name FROM {P}.cloud.flavors WHERE region = {sql_str(region)} AND name = {sql_str(INSTANCE_FLAVOR)}")
        flavor_id = next((r["id"] for r in flavors if r.get("name") == INSTANCE_FLAVOR), None) if not err else None
        images, err2 = self.q(f"SELECT id, name FROM {P}.cloud.images WHERE region = {sql_str(region)} AND os_type = 'linux' "
                              f"AND name = {sql_str(INSTANCE_IMAGE)}")
        image_id = next((r["id"] for r in images if r.get("name") == INSTANCE_IMAGE), None) if not err2 else None
        if not self.record(f"instance lifecycle: flavor {INSTANCE_FLAVOR} and the {INSTANCE_IMAGE} image exist in {region}",
                           bool(flavor_id and image_id), (err or err2 or f"flavor={flavor_id} image={image_id}")):
            return
        instance_id = None
        get_sql = None
        try:
            rows = self.step("instance INSERT ... RETURNING (typed JSON: monthly_billing false)",
                             f"INSERT INTO {P}.cloud.instances (name, flavor_id, image_id, region, monthly_billing) "
                             f"SELECT {sql_str(name)}, {sql_str(flavor_id)}, {sql_str(image_id)}, {sql_str(region)}, false RETURNING id, name, status",
                             expect_rows=True, contains=name)
            if rows:
                instance_id = rows[0].get("id")
            if not instance_id:
                listed, _ = self.q(f"SELECT id, name FROM {P}.cloud.instances")
                instance_id = next((r["id"] for r in listed if r.get("name") == name), None)
            if not instance_id:
                self.record("instance id known", False, "the created instance was not found")
                return
            get_sql = f"SELECT id, name, status FROM {P}.cloud.instances WHERE instance_id = {sql_str(instance_id)}"
            if self.wait_for("instance reaches ACTIVE", get_sql, lambda r: bool(r) and r[0].get("status") == "ACTIVE", timeout=900, interval=15):
                self.step("instance UPDATE (rename)",
                          f"UPDATE {P}.cloud.instances SET instance_name = {sql_str(name + '-b')} WHERE instance_id = {sql_str(instance_id)}")
                self.wait_for("instance reads back renamed", get_sql, lambda r: bool(r) and r[0].get("name") == name + "-b", timeout=120, interval=10)
                self.step("instance EXEC reboot (soft)", f"EXEC {P}.cloud.instances.reboot @instance_id = {sql_str(instance_id)}, @type = 'soft'")
                self.wait_for("instance is ACTIVE again after the reboot", get_sql, lambda r: bool(r) and r[0].get("status") == "ACTIVE", timeout=600, interval=15)
        finally:
            if instance_id:
                self.step("instance DELETE", f"DELETE FROM {P}.cloud.instances WHERE instance_id = {sql_str(instance_id)}")
                self.wait_for("instance is gone after DELETE", f"SELECT id, name, status FROM {P}.cloud.instances",
                              lambda r: all(x.get("id") != instance_id or x.get("status") == "DELETED" for x in r), timeout=600, interval=15)

    # ---------------------------------------------------------------- summary
    def summary(self) -> int:
        print("\n== summary ==")
        counts = {"PASS": 0, "FAIL": 0}
        for name, status, note in self.results:
            counts[status] = counts.get(status, 0) + 1
            if status != "PASS":
                print(f"  {status:5s} {name}  [{note[:160]}]")
        registry = "public" if self.args.live else "local"
        print(f"  {counts['PASS']} passed, {counts['FAIL']} failed; {self.requests} statements, "
              f"paced at {INTER_REQUEST_DELAY_S}s (registry: {registry}, auth: {self.auth_mode})")
        return 1 if counts["FAIL"] else 0


def main() -> int:
    ap = argparse.ArgumentParser(description=f"{PROVIDER} provider smoke test")
    ap.add_argument("--live", action="store_true",
                    help="run against the published provider in the stackql registry (default: the local provider-dev/openapi file registry)")
    ap.add_argument("--cleanup-only", action="store_true", help="sweep stackql-smoke-* breadcrumbs and exit")
    ap.add_argument("--read-only", action="store_true", help="read smokes only")
    ap.add_argument("--with-instance-lifecycle", action="store_true",
                    help="also run the billable instance create / rename / reboot / delete lifecycle (off by default)")
    args = ap.parse_args()

    smoke = Smoke(args)
    print(f"{PROVIDER} smoke test  registry={'public' if args.live else 'local'}  name={smoke.name}  "
          f"stackql={smoke.sq.version}  endpoint={os.environ.get('OVH_ENDPOINT', 'ovh-eu (default)')}  auth={smoke.auth_mode}")
    smoke.cleanup_breadcrumbs()
    if args.cleanup_only:
        return 0
    smoke.read_smokes()
    if not args.read_only:
        smoke.write_lifecycles()
        if args.with_instance_lifecycle:
            smoke.instance_lifecycle()
    return smoke.summary()


if __name__ == "__main__":
    sys.exit(main())
