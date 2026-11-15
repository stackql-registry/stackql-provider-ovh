# AGENTS.md

The project guidance for every coding agent and contributor working in this repository, and the only place project rules are maintained. Codex reads this file directly; `CLAUDE.md` (Claude Code) and `.github/copilot-instructions.md` (GitHub Copilot) are short entry points that load or point to it and carry nothing else unless it applies to that tool alone.

## Project

This repository builds and documents the `ovh` provider for [StackQL](https://github.com/stackql/stackql), enabling SQL-based query and provisioning operations against the OVHcloud API.

The provider covers the OVHcloud control plane as OVHcloud publishes it: API v1 (`/v1`, also served as `/1.0`) and API v2 (`/v2`), 88 API families, 7,313 operations, mapped to 98 services and 2,470 resources. That is Public Cloud projects and their products (instances, Managed Kubernetes, managed databases, storage, networks and load balancers, AI), bare metal servers, VPS, Hosted Private Cloud, domains and DNS, IP addresses, vRack, load balancers, web hosting, email, telephony and xDSL, ordering, the account (`me`) and IAM.

Scope notes, so they are not relitigated:

- One service per API family, named for the family path in snake_case (`dedicated_server`, `ip_loadbalancing`, `me`). The two Public Cloud families are sub-split by product (`cloud`, `cloud_ai`, `cloud_container_registry`, `cloud_database`, `cloud_kube`, `cloud_network`, `cloud_storage`; `public_cloud` and five siblings for v2). An API v2 family that shares its name with a v1 family carries `_v2` (`domain_v2`, `dedicated_server_v2`). 98 services is more than the 8-20 the skill aims for; the API is of that size and the family is the unit OVHcloud, its console and its Terraform provider all use.
- Data plane APIs (S3 and Swift object endpoints, Kubernetes API servers, database connections) are not part of the OVHcloud API and are out of scope.
- No GraphQL: OVHcloud publishes no GraphQL API, so `provider-dev/source-graphql/manifest.yaml` lists no operations. No provider views yet.
- Application key signing (AK / AS / CK) is not offered: StackQL has no request signing method for it (stackql-labs/omnisdk#56). The provider authenticates with the OAuth2 client credentials grant.

## How to work in this repository

The build procedure is the `stackql-provider-development` skill in `.claude/skills/stackql-provider-development/` (`SKILL.md` is the map; `references/*.md` are the procedures; `scripts/` holds `spec_diff.mjs` and `find_extension_examples.sh`). Read the reference file for a step before executing it. A tool that does not load skills from `.claude/skills/` opens `SKILL.md` and the reference files as plain files; the procedure is the same. Work the steps in order: archetype -> spec pin -> inventory and split -> mappings -> pre-normalize / normalize / generate / post-process -> GraphQL and views -> Makefile -> the three credential-free test layers -> smoke suite -> docs and CI -> hand-over.

The provider constants are single-sourced in `provider-dev/scripts/lib/spec_helpers.mjs` (`SPEC_BASE_URL`, `API_VERSIONS`, `API_HOSTS`, `AUTH_HOSTS`, `SCOPES`, `WIRE_CASING`, `EXPAND_HEADER`, `SKIP_RULES`); the operation mapping derivation is `provider-dev/scripts/lib/mapping.mjs`. The skill's engine facts were verified against an older engine; the facts that hold for this build (stackql v1.0.888 on omnisdk) are in NOTES.md and were each proved with `npm run probe`.

## Archetype

Direct. OVHcloud serves one OpenAPI 3.0.0 document per API family and version: `https://api.eu.ovhcloud.com/<v1|v2>/` lists the families and `https://api.eu.ovhcloud.com/<version><family>.json?format=openapi3` is a family's document. They are unauthenticated and unversioned (every document states version `1.0`). The EU endpoint is pinned because it serves the superset of families (CA and US serve subsets). Each document is pinned under `specs.<version>_<family>` in `provider-dev/config/spec_pin.json` and the family list is part of the pin. OVHcloud changes these documents often; refresh when the weekly spec-drift job reports it (`make refresh-spec`, then `make build && make test`, then review the `all_services.csv` diff).

## Design decisions (settled - see NOTES.md for the evidence)

- **Authentication** - `auth.type: oauth2`, client credentials grant, `OVH_CLIENT_ID` / `OVH_CLIENT_SECRET`, scope `all`, token URL `https://{auth_host}/oauth2/token` (the variable names are the Terraform provider's). A pre-issued token (`OVH_ACCESS_TOKEN`) is a `--auth` bearer override. Application key signing waits on the engine (omnisdk#56); a document offering all three waits on ordered auth alternatives (omnisdk#59).
- **Regional endpoint** - the server variable `api_host` and the token URL variable `auth_host` both resolve through an `x-stackQL-envVarSelector` on `OVH_ENDPOINT` (`ovh-eu` default, `ovh-ca`, `ovh-us`) to `api.<region>.ovhcloud.com` and `auth.<region>.ovhcloud.com`. `api_host` is never a required parameter. An unknown `OVH_ENDPOINT` value is an error, not a fallback.
- **Scoping** - the Public Cloud project. Paths under `/v1/cloud/project/{serviceName}` and `/v2/publicCloud/project/{projectId}` are rebased onto a server template whose project variable (`service_name`, `project_id`) carries `x-stackQL-envVar: OVH_CLOUD_PROJECT_SERVICE` (the Terraform provider's variable). The root paths of those families (`/cloud/project`, `/cloud/project/{serviceName}`, `/cloud/order`, ...) keep their key and are pinned to the unscoped server with a path-level `servers` override. A JOIN cannot fan out on the project variable; the docs teach per-project reads composed with `UNION ALL`. No other family has a Terraform scoping variable, so no other family is scoped.
- **The flagship mapping** - expanded identifier lists. An API v1 collection read returns bare identifiers; with `X-Pagination-Mode: CachedObjectList-Pages` it returns the full objects. Every identifier list with a keyed read below it (817 operations; OVHcloud marks them `x-expanded-response`) declares that header with a default, which stackql sends on every call, and takes the keyed read's schema as its row type. So `SELECT * FROM ovh.cloud.projects` returns complete rows and list and get project one shape.
- **Scalars** - a list of plain values with no keyed read (255 operations) and a read whose body is one bare string, number or boolean (63) surface as rows with a single `value` column.
- **Resource and method naming** - mechanical, in `lib/mapping.mjs`: a resource is a static-segment path under its family (`/ip/{ip}/firewall/{x}/rule` -> `ip.firewall_rules`); GET array -> `list`, GET other -> `get`, POST -> `create`, PUT / PATCH -> `update`, DELETE -> `delete`; an action segment with no read (`POST .../reboot`) is hoisted as EXEC onto the nearest readable ancestor (`servers.reboot`). Exceptions are `RESOURCE_RULES` / `METHOD_RULES` in `map_operations.mjs` (5 today). Names are a contract: `all_services.csv` is committed and a diff is a breaking-change review.
- **Casing** - `snake_case_aliases: true` plus `request.nativeCasing: camel` on every method (6,590). Header parameters resolve by their snake form too (`x_pagination_size`). A parameter whose wire name contains a dot has no alias yet and must be quoted (`"date.from"`, omnisdk#58).
- **Pagination** - API v1 expanded lists arrive whole in one response (measured). API v2 pages with a cursor in response headers (`X-Pagination-Cursor-Next` -> `X-Pagination-Cursor`), which the engine cannot follow (omnisdk#57); no pagination block is declared and `x_pagination_size` / `x_pagination_cursor` are WHERE keys (parameter-driven windowing). The handful of v1 reads with `limit` / `offset` / `page` query parameters are parameter-driven too.
- **Update semantics** - PUT maps to UPDATE (`update`) and is presumed partial, as OVHcloud's v1 PUTs are documented ("Alter this object properties"); not proven per endpoint. Where a path has both PATCH and PUT (20 paths, 19 of them API v2), PATCH is the UPDATE and PUT is EXEC `replace`. Nothing is mapped to the REPLACE verb.
- **Skip codes** - `deprecated_superseded` 703 (deprecated with a vendor-named replacement route), `untyped_map_response` 8, `untyped_map_body` 7, `no_response_schema` 3, `bare_array_body` 2; 723 of 7,313 operations. Every skipped operation stays in `all_services.csv` and the inventory.
- **Rate limit** - OVHcloud documents no API-wide limit. The smoke suite paces at one statement a second; a 429 in CI is a harness bug.
- **Labels** - OVHcloud states each operation's status in `x-badges`. `pre_normalize.mjs` appends the vendor's own label to the operation description (`(Beta version)`, `(Alpha version)`, `(Deprecated, will be removed)`): 1,024 beta, 133 alpha and 123 deprecated operations are mapped and labelled.
- **Engine typing** - INSERT and UPDATE send typed JSON (numbers, booleans, JSON-shaped strings as arrays and objects; UPDATE coerces a quoted value to the schema type). EXEC accepts a quoted boolean (`@rescue = 'true'`, sent as `true`); a bare boolean literal in EXEC is a parser error (stackql/stackql#924). Documented, not worked around.
- **JSON output over 100 rows** - `stackql exec --output json` writes a provider result of more than 100 rows as several arrays (stackql/stackql#925). The smoke suite keeps its reads under that; nothing in the provider works around it.
- **Default object key** - stackql takes `$.items` as the row list when a method declares no objectKey. A single-object response that has an `items` property gets `objectKey: $` in post-process (3 methods).

## Toolchain rules

- Latest `@stackql/provider-utils`, `@stackql/pgwire-lite` and `@apidevtools/swagger-parser` (check npm before starting: `npm view @stackql/provider-utils version`); Docusaurus `^3.10.x`. Node >= 22.19 (Node 20 reached end of life in April 2026; swagger-parser 13 needs 22.19), `type: module`. `js-yaml` stays on 4.x: provider-utils emits with js-yaml 4, and v5 drops the default export, removes the `quotingType` dump option and changes scalar quoting, so that bump is a coordinated change with provider-utils. `package-lock.json` pins what CI installs; a toolchain bump is an explicit commit that regenerates the artifacts.
- Linux, macOS or WSL: GNU make + bash, a `stackql` binary (`$STACKQL`, `./stackql`, then PATH; `bin/start-server.sh` downloads one if none is found), Python 3 and yarn. stackql >= v1.0.888 (the endpoint selector and the token URL variables). The Makefile is the operator surface (`make help`).
- The two provider-utils CLI entry points are npm scripts invoked through `node` (never `.bin` shims); flags go after `--`.

## Repository layout

```
Makefile               # make help / build / test / smoke* / docs / website / all
bin/                   # fetch-spec.sh, split.mjs, init-provider.sh, server lifecycle, test-meta-routes.cjs
provider-dev/
  downloaded/          # pinned spec snapshots, one per API family: v1/<family>.json, v2/<family>.json (committed)
  config/              # spec_pin.json, service_names.json (split rules + service titles), servers.json (server
                       # templates by kind), provider_config.json (auth), endpoint_inventory.csv,
                       # all_services.csv (the mapping contract)
  scripts/             # record_spec_pin, build_inventory, map_operations, pre_normalize, post_process,
                       # graphql_merge, lib/spec_helpers (the single source of provider constants),
                       # lib/mapping (the operation -> resource.method derivation)
  source/              # split + normalized service specs (committed build artifacts)
  source-graphql/      # manifest.yaml (no operations - OVHcloud has no GraphQL API)
  openapi/src/ovh/     # generated provider (committed)
  docgen/provider-data # headerContent1.txt / headerContent2.txt (landing + getting-started page;
                       # examples close the page under "## Example Queries" - intro sentence, then
                       # H3 + lead-in + sql block per example, see docs-and-ci.md)
views/<service>/views.yaml   # optional provider views (none yet)
tests/
  offline_validation.mjs
  integration/         # mock_ovh_server.mjs, run_integration_tests.mjs, probe.mjs, harness.mjs
  smoke_test.py        # pystackql live suite (--live, --read-only, --with-instance-lifecycle, --cleanup-only)
website/               # Docusaurus microsite (shared stackql/docusaurus-config vendored at build)
.github/workflows/     # build-and-test.yml (pin check, build, drift check, 3 test layers, gated smoke,
                       # weekly spec-drift); test-web-deploy.yml (site build on every PR to main);
                       # prod-web-deploy.yml (build + GitHub Pages deploy on every push to main)
.github/copilot-instructions.md   # GitHub Copilot entry point to this file
AGENTS.md  CLAUDE.md   # this file (the shared guidance) and the Claude Code entry point that imports it
NOTES.md  README.md  SECURITY.md  LICENSE  .env.example
```

## Build pipeline

`make all` = `deps build test docs website`: fetch-spec (pin verify) -> inventory -> split -> mappings -> pre-normalize -> normalize -> generate (+ post-process, views, GraphQL merge) -> test-offline -> test-integration -> test-meta -> docs -> website. It never needs credentials and never bills. Every step is deterministic and re-runnable; manual decisions are rules in scripts (`RESOURCE_RULES` / `METHOD_RULES` in `map_operations.mjs`, the derivation in `lib/mapping.mjs`, `SKIP_RULES` in `lib/spec_helpers.mjs`, split rules in `service_names.json`, fix classes in `record_spec_pin.mjs`, passes in `pre_normalize.mjs`, numbered rules in `post_process.mjs`), never hand-edits to CSVs or specs. Validate-and-fail-without-writing is the standard for every script. A regeneration reproduces the committed artifacts byte-for-byte (CI checks this).

`provider-dev/config/all_services.csv` is committed as the durable record of every operation -> resource.method mapping; a diff there on a regeneration is a breaking-change review (a method moving resource, a resource renamed), not noise.

The provider is large: the full chain takes about half an hour, most of it the meta-route walk (about 10 minutes at concurrency 8), the docs generation and the site build.

## Tests

1. `make test-offline` - `SHOW` / `DESCRIBE` against the local file registry: the service list, every service's resources against `all_services.csv`, verbs, env-var behaviour, snake aliases, expanded lists, the `value` column.
2. `make test-integration` - the mock API (`tests/integration/mock_ovh_server.mjs`: real wire shapes, the OAuth2 token endpoint, bearer enforced, request log) with row-level and wire-level assertions per archetype. `npm run probe -- "<sql>"` prints stackql output and the wire calls for ad-hoc binding checks.
3. `make test-meta` - the meta-route walk over a local server. A resource with no columns or a service with no resources fails it - fix the mapping, never the test.
4. `make smoke` / `make smoke-live` / `make smoke-read-only` / `make smoke-instance-lifecycle` / `make smoke-cleanup` - live, from `.env` (see `.env.example`), against a dedicated dev account. The default run creates nothing billable; the instance lifecycle (a few cents) only in its gated target. The service account needs an IAM policy that names the account resource as well as the project (NOTES.md finding 6). First full run: 47 of 47, 2026-11-15.

Never run tests against a production account.

## Docs and publish

`make docs` (generate with `--snake-case-aliases` and `--source-project $(SOURCE_PROJECT)`, then `sanitize-docs`) and `make website`; `website/docs` is committed after every regeneration so pages stamp with their regeneration date. `sanitize-docs` also corrects what docgen cannot know about the server variables: `api_host` is removed from required parameters and examples, the project variable is annotated "required unless OVH_CLOUD_PROJECT_SERVICE is set". Publishing to the registry is a separate, human-in-the-loop step (push the generated provider dir to `providers/src` in a feature branch of `stackql-provider-registry`, follow the release flow, verify with `make smoke-live`).

## Writing conventions

These apply to every piece of text the build generates, whoever or whatever reads it: README, docs headers and examples, NOTES, this file, code comments, commit messages, console output, inventory and CSV columns, mock fixtures, hand-over notes. Text the vendor owns (operation summaries, schema and parameter descriptions, examples carried from the upstream spec into the snapshot, `provider-dev/source`, the generated provider and `website/docs`) is passed through as the vendor wrote it; the only alterations are the MDX escaping `sanitize-docs` applies so the docs site builds and the vendor's own status label appended to a description.

- Measured, precise copy, no hyperbole. Comparisons with the vendor's Terraform provider are capability statements and runnable examples, never editorializing.
- No em dashes and no `--` as a dash; use `-`. No characters that are not on a QWERTY keyboard: no emoji, no typographic quotes, `->` for arrows. No stacked headings.
- Sample queries are realistic and runnable against the generated surface: snake_case names, `json_extract` for nested fields, parser keywords such as `"database"` quoted.

## Non-negotiables

1. Latest `@stackql/provider-utils`, always
2. The skill is the procedure; sibling-build NOTES.md findings (the repos in the skill's reference-repos.md) are reused, not re-derived - deviate only with a documented reason in NOTES.md
3. Deterministic scripts, never hand-edits to derived artifacts
4. Every regeneration is followed by `make test` before commit
5. Test harnesses pace under the rate limit - a 429 in CI is a harness bug
6. Smoke tests clean up everything they create and restore anything they toggle
