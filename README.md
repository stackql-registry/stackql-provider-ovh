# StackQL OVHcloud provider

The `ovh` provider for [StackQL](https://github.com/stackql/stackql): query, provision and manage OVHcloud resources using SQL. It maps the OVHcloud API (v1 and v2) - 88 API families, 7,313 operations - to 98 services and 2,470 resources: Public Cloud projects and their products, bare metal servers, VPS, Hosted Private Cloud, domains and DNS, IP addresses, vRack, load balancers, web hosting, email, telephony, ordering, the account and IAM.

This repository is the build: a deterministic `make` pipeline from the pinned upstream specs to the generated provider, three credential-free test layers, a live smoke suite, the Docusaurus microsite ([ovh-provider.stackql.io](https://ovh-provider.stackql.io)) and CI. It was created from [stackql-provider-TEMPLATE](https://github.com/stackql-registry/stackql-provider-TEMPLATE); the procedure is the bundled skill, [`.claude/skills/stackql-provider-development`](.claude/skills/stackql-provider-development/SKILL.md), the settled decisions are in [AGENTS.md](AGENTS.md) and the findings behind them in [NOTES.md](NOTES.md).

```sql
REGISTRY PULL ovh;

SELECT project_id, project_name, status, plan_code, creation_date
FROM ovh.cloud.projects
ORDER BY project_name;
```

## What is StackQL

[StackQL](https://github.com/stackql/stackql) is an open-source SQL interface for cloud and SaaS APIs. A provider is a versioned set of OpenAPI documents plus `x-stackQL-resources` extensions that the engine turns into SQL tables: `SELECT` for reads, `INSERT` / `UPDATE` / `DELETE` for lifecycle, `EXEC` for actions, with `json_extract` over nested fields and joins across providers.

## Authentication and configuration

The provider reads the same environment variables as the OVHcloud Terraform provider.

| Variable | Purpose |
|---|---|
| `OVH_ENDPOINT` | The API region: `ovh-eu` (default), `ovh-ca` or `ovh-us`. Selects the API host (`api.<region>.ovhcloud.com`) and the OAuth2 token host (`auth.<region>.ovhcloud.com`). |
| `OVH_CLIENT_ID`, `OVH_CLIENT_SECRET` | A service account, used with the OAuth2 client credentials grant. The default authentication. |
| `OVH_ACCESS_TOKEN` | A pre-issued access token, used with `--auth='{"ovh": {"type": "bearer", "credentialsenvvar": "OVH_ACCESS_TOKEN"}}'`. |
| `OVH_CLOUD_PROJECT_SERVICE` | The Public Cloud project ID. Resolves the project variable (`service_name`, `project_id`) of the Public Cloud services so queries need no `WHERE` clause for it. |

A service account has no rights until an IAM policy names it. Application key signing (`OVH_APPLICATION_KEY`, `OVH_APPLICATION_SECRET`, `OVH_CONSUMER_KEY`) is not available yet: it needs a request signing method StackQL does not have ([stackql-labs/omnisdk#56](https://github.com/stackql-labs/omnisdk/issues/56)).

## Prerequisites

- Node.js >= 22.19
- A `stackql` binary, v1.0.888 or later (`$STACKQL`, `./stackql`, or on `PATH`; `bin/start-server.sh` downloads one if none is found)
- GNU make and bash (Linux, macOS or WSL); Python 3 for the smoke suite; yarn for the website
- For live smoke tests: a dedicated OVHcloud dev account (never a production account), a service account with an IAM policy on it, and its credentials in `.env` (see `.env.example`)

## Makefile

Every step is a `make` target (`make help` lists them). The composites:

```bash
make all      # deps, full pipeline (fetch/pin verify, inventory, split, mappings, pre-normalize,
              # normalize, generate, post-process), offline + integration + meta-route tests,
              # docs generation, website build - no credentials needed
make build    # the spec -> provider pipeline only
make test     # the three credential-free test layers
make smoke    # live smoke suite against the dev account (sources .env if present)
```

`make all` never touches a real account. It takes about 25 minutes on a warm checkout (23 measured; the meta-route walk, the docs generation and the site build are the long steps). The live suites are `smoke`, `smoke-live` (the published provider, post-publish verification), `smoke-read-only`, `smoke-instance-lifecycle` (the billable instance create / delete, gated) and `smoke-cleanup` (sweep `stackql-smoke-*` breadcrumbs).

## 0. Download and pin the specs

```bash
make fetch-spec      # verify against the recorded pin (fails on drift)
make refresh-spec    # accept an upstream change (rewrites the pin - review the diff)
```

OVHcloud publishes one OpenAPI 3.0.0 document per API family and version: `https://api.eu.ovhcloud.com/<v1|v2>/` lists the families and `<version><family>.json?format=openapi3` is a family's document. `provider-dev/scripts/record_spec_pin.mjs` fetches the family lists and every document, applies the deterministic fix classes (counted in the pin), validates each with `@apidevtools/swagger-parser`, verifies the upstream hashes against `provider-dev/config/spec_pin.json` and only then writes the snapshots into `provider-dev/downloaded/<version>/<family>.json` (committed, so every refresh is a reviewable diff). The EU endpoint is pinned because it serves the superset of families.

Pinned 2026-11-15: 88 documents (70 API v1, 18 API v2), 5,289 paths, 7,313 operations, 28.7 MB upstream. Fix classes applied: `vendor_scalar_type_lowered` 6 (`type: long`, `type: duration`), `code_samples_removed` 7,313 (the console's client snippets). The pinned hash is taken over the parsed document with its `tags` sorted, because upstream serialises that array in an unstable order.

Before accepting a refresh: `node .claude/skills/stackql-provider-development/scripts/spec_diff.mjs <pinned> <fetched>` for each changed family, and record the summary in `NOTES.md`.

## 1. Endpoint inventory and service split

```bash
make inventory
```

Writes `provider-dev/config/endpoint_inventory.csv`: one row per operation with the API version and family, scope, path params, pagination-looking parameters (OVHcloud pages with `X-Pagination-*` request headers), request body presence / media types / kind, the update-semantics presumption, vendor labels, response shape, whether an identifier list is expandable, the proposed service, a draft resource and verb, and a skip reason code.

| | Operations |
|---|---|
| Total | 7,313 (API v1 6,369, API v2 944) |
| Mapped | 6,590 |
| Skipped: `deprecated_superseded` (deprecated, with a vendor-named replacement route) | 703 |
| Skipped: `untyped_map_response` / `untyped_map_body` (free-form maps, no columns) | 8 / 7 |
| Skipped: `no_response_schema` | 3 |
| Skipped: `bare_array_body` | 2 |
| Mapped and labelled beta / alpha / deprecated | 1,024 / 133 / 123 |
| Identifier lists expanded into full objects | 817 |

The service split is the ordered rules in `provider-dev/config/service_names.json`, matched against the qualified path (the vendor path prefixed with the API version, `/v1/cloud/project/{serviceName}/instance`); first match wins and an unmatched path fails the build. One service per API family; the two Public Cloud families are sub-split by product. Then:

```bash
make split
```

writes `provider-dev/source/<service>.yaml` (98 committed build artifacts), each with the server template of its kind from `provider-dev/config/servers.json`. Operations the vendor left without an `operationId` (6,097) get a deterministic one. The Public Cloud services are rebased onto the project-scoped server template.

| Services | |
|---|---|
| Public Cloud (API v1) | `cloud`, `cloud_ai`, `cloud_container_registry`, `cloud_database`, `cloud_kube`, `cloud_network`, `cloud_storage` |
| Public Cloud (API v2) | `public_cloud`, `public_cloud_analytics`, `public_cloud_database`, `public_cloud_kubernetes`, `public_cloud_network`, `public_cloud_storage` |
| Bare metal and private cloud | `dedicated_server`, `dedicated_server_v2`, `dedicated_cloud`, `dedicated_ceph`, `dedicated_cluster`, `dedicated_housing`, `dedicated_installation_template`, `dedicated_nasha`, `nutanix`, `vps`, `vmware_cloud_director`, `horizon_view`, `cluster_hadoop` |
| Network | `ip`, `ip_loadbalancing`, `vrack`, `vrack_services`, `ovh_cloud_connect`, `cdn_dedicated`, `ssl`, `ssl_gateway`, `network_defense` |
| Storage and backup | `storage`, `backup_services`, `veeam_cloud_connect`, `veeam_enterprise` |
| Domains, web and email | `domain`, `domain_v2`, `all_dom`, `hosting_web`, `hosting_private_database`, `webhosting`, `managed_cms`, `email_domain`, `email_exchange`, `email_mxplan`, `email_pro`, `zimbra`, `ms_services`, `saas_csp2` |
| Account, IAM and billing | `me`, `account`, `auth`, `iam`, `okms`, `services`, `service`, `order`, `price`, `finops`, `commercial_catalog`, `notification`, `location`, `new_account`, `partner`, `startup`, `support`, `contact`, `secret`, `vip` |
| Observability and data | `dbaas_logs`, `metrics`, `videocenter` |
| Licenses | `license_cloud_linux`, `license_cpanel`, `license_directadmin`, `license_hycu`, `license_office`, `license_office_prepaid`, `license_plesk`, `license_redhat`, `license_sqlserver`, `license_virtuozzo`, `license_windows`, `license_worklight` |
| Telecom | `telephony`, `sms`, `xdsl`, `pack_xdsl`, `pack_siptrunk`, `over_the_box`, `connectivity`, `freefax`, `stack_mis`, `supply_mondial_relay` |

## 2. Mappings

```bash
make mappings-report   # print every derived mapping without writing
make mappings          # regenerate all_services.csv from scratch and apply the rules
```

`provider-dev/scripts/map_operations.mjs` fills `stackql_resource_name`, `stackql_method_name` and `stackql_verb` from the derivation in `provider-dev/scripts/lib/mapping.mjs` plus `RESOURCE_RULES` / `METHOD_RULES`, and validates: every row mapped or skipped with a reason, every spec operation present, `(service, resource, method)` unique, unique required-parameter signatures per `(resource, sqlVerb)`. Fails without writing on any violation. `--notes` lists the overloads the derivation resolved on its own.

`provider-dev/config/all_services.csv` is the committed contract of every operation -> resource.method mapping; a diff on regeneration is a breaking-change review.

| Operation pattern | StackQL verb | Resource / method |
|---|---|---|
| GET returning an array | `SELECT` | `<resource>.list` |
| GET returning anything else | `SELECT` | `<resource>.get` |
| POST on a readable path | `INSERT` | `<resource>.create` |
| PUT / PATCH | `UPDATE` | `<resource>.update` (where a path has both, PUT is `EXEC` `<resource>.replace`) |
| DELETE | `DELETE` | `<resource>.delete` |
| any verb on a path with no read (an action segment) | `EXEC` | `<nearest readable ancestor>.<segments>` (`servers.reboot`, `storages.delete_cors`) |

A resource is every static path segment under its family, snake_cased, the last one pluralized (`/ip/{ip}/firewall/{ipOnFirewall}/rule` -> `ovh.ip.firewall_rules`). Result: 3,665 `SELECT`, 895 `INSERT`, 495 `UPDATE`, 586 `DELETE` and 949 `EXEC` methods on 2,470 resources, 2,451 of them selectable.

## 3. Normalize

```bash
make pre-normalize   # provider-specific passes in provider-dev/scripts/pre_normalize.mjs
make normalize       # provider-utils: allOf flatten, oneOf/anyOf lowering, bare-array wrap
```

The pre-normalize passes: (1) identifier lists expanded into full objects - 817 lists get the `X-Pagination-Mode: CachedObjectList-Pages` header as a defaulted parameter and the keyed read's schema as their row type; (2) 255 scalar lists marked for a single `value` column; (3) 63 scalar reads typed as a `value` object; (4) the vendor's status label appended to 1,983 operation descriptions. Normalize wraps 1,681 bare-array responses.

## 4. Generate

```bash
make generate        # rm output, generate (auth, naive bodies), post-process, GraphQL merge (no-op)
```

Output: `provider-dev/openapi/src/ovh/v00.00.00000/provider.yaml` + 98 `services/*.yaml` (committed). `provider-dev/scripts/post_process.mjs` re-applies what the generator cannot express, as numbered rules: path-level `servers` on the 10 root paths of the project-scoped services, `request.nativeCasing: camel` on all 6,590 methods, the response transforms for scalar reads and scalar lists, and `objectKey: $` on the 3 single-object responses that carry an `items` property. OVHcloud has no GraphQL API, so `provider-dev/source-graphql/manifest.yaml` lists no operations.

## 5. Test

```bash
make test-offline        # SHOW / DESCRIBE against the local file registry (28 checks)
make test-integration    # mock API, row-level and wire-level assertions (57 checks)
make test-meta           # meta-route walk over a local stackql server (2,470 resources, about 10 minutes)
make smoke               # live (needs .env)
```

`npm run probe -- "SELECT ..."` runs ad-hoc SQL against the mock and prints the wire calls.

The offline layer checks, for every service, that the resources stackql shows are exactly the ones `all_services.csv` maps. The integration layer runs against `tests/integration/mock_ovh_server.mjs`, which serves the real wire shapes, implements the OAuth2 token endpoint and enforces the bearer token; the endpoint selector is exercised for real by reaching the one mock under two host names.

The smoke suite (`tests/smoke_test.py`, pystackql) mirrors the resources the OVHcloud Terraform provider documents first: read smokes across API v1 and v2 (the project inventory, regions, quotas, flavors, instances, SSH keys, Kubernetes, vRack, IP blocks, IAM policies and resources, locations), then free self-cleaning write lifecycles - a Public Cloud SSH key (`INSERT ... RETURNING`, `SELECT`, `DELETE`), a project description toggle-and-restore (`UPDATE`) and an IAM resource group through API v2 (`INSERT`, `UPDATE`, `DELETE`). The default run creates nothing billable. `make smoke-instance-lifecycle` adds an instance create / rename / reboot / delete on the smallest hourly flavor (a few cents). Everything created is named `stackql-smoke-<stamp>` and swept at the start of the next run.

## 6. Docs

```bash
make docs        # generate website/docs (snake_case surface) and sanitize
make website     # yarn install && yarn build (vendors the shared stackql/docusaurus-config)
make website-start
```

`provider-dev/docgen/provider-data/headerContent1.txt` is the landing-page front matter and pitch; `headerContent2.txt` is the getting-started page (installation, scope, authentication, the regional endpoint, the project scope, lists and pagination, labelling, example queries). `website/scripts/sanitize-docs.mjs` escapes MDX-hostile vendor text and corrects what docgen cannot know about the server variables: `api_host` is removed from required parameters and examples, the project variable is annotated "required unless OVH_CLOUD_PROJECT_SERVICE is set". `website/provider.js` carries the site identity, `website/static/CNAME` the hostname and `website/static/img/stackql-ovh-provider-featured-image.png` the social image. Commit `website/docs` (2,569 pages) after every regeneration.

To publish the site: rename `.github/workflows/prod-web-deploy.yml.disabled` and `test-web-deploy.yml.disabled`, enable GitHub Pages (source: GitHub Actions) and add the DNS record:

| Source domain | Record type | Target |
|---|---|---|
| `ovh-provider.stackql.io` | CNAME | `stackql.github.io.` |

## 7. Publish

Push the generated `provider-dev/openapi/src/ovh` directory to `providers/src` in a feature branch of [stackql-provider-registry](https://github.com/stackql/stackql-provider-registry) and follow the [registry release flow](https://github.com/stackql/stackql-provider-registry/blob/dev/docs/build-and-deployment.md). Verify from the dev registry, then `make smoke-live`:

```bash
export DEV_REG='{ "url": "https://registry-dev.stackql.app/providers" }'
stackql --registry="${DEV_REG}" shell
```

```sql
REGISTRY PULL ovh;
```

## 8. CI

`.github/workflows/build-and-test.yml`: on push / PR - `npm ci`, `stackql/setup-stackql`, pin verification (warns on drift), the build steps, a hard failure on uncommitted generation drift, the three credential-free test layers, docs generation; a live smoke job that is skipped at the job level on pull requests and until the secrets are configured (`OVH_CLIENT_ID`, `OVH_CLIENT_SECRET`, `OVH_ENDPOINT`, `OVH_CLOUD_PROJECT_SERVICE`; never the instance lifecycle); a weekly `spec-drift` job that fetches, compares with the pin and opens a labelled issue. The web deploy workflows build the site from `main` once enabled.

## Contributing

Contributions are welcome - rules in scripts, `make build && make test`, then a pull request.

## Security

Report vulnerabilities privately through the repository's advisory form, never in a public issue - see [SECURITY.md](SECURITY.md).

## License

MIT - see [LICENSE](LICENSE).
