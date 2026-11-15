# Engineering Notes

The memory of the build: numbered findings with evidence (what was measured, against what, what was decided and why), the blockers only a live run can resolve, and the testing requirements. A future refresh reads this before touching a rule. Cross-build findings from the sibling providers (see the skill's reference-repos.md) are reused, not re-derived - cite them by repo and finding number rather than restating them.

Sources: the pinned spec snapshots (`provider-dev/downloaded/`, hashes and date in `provider-dev/config/spec_pin.json`, fetched 2026-11-15), live probes against an OVHcloud CA account (read-only unless stated), the mock API through `npm run probe`, and the engine source (stackql v1.0.888, omnisdk v0.1.11-beta1).

## Findings

### 1. The spec is one OpenAPI document per API family, and the EU endpoint is the superset

**Question.** Direct or derived archetype, and which document to pin.

**Evidence.** `GET https://api.eu.ovhcloud.com/v1/` and `/v2/` list the API families; `GET /<version><family>.json?format=openapi3` returns OpenAPI 3.0.0 for one family (without the query string the same URL returns OVHcloud's older proprietary schema). No authentication. Families per region on 2026-11-15: EU 70 v1 + 18 v2, CA 52 + 15, US 41 + 11; every CA and US family exists in EU. Every document states `info.version: 1.0`.

**Decision.** Direct archetype, multi-document. The EU documents are pinned, one file per family under `provider-dev/downloaded/<version>/`, each under `specs.<version>_<family>` in the pin; the family list is part of the pin, so a family appearing or disappearing is drift. 88 documents, 5,289 paths, 7,313 operations. A family a region does not serve answers 404 there.

### 2. Upstream serialises `tags` in an unstable order

**Question.** Can drift be detected on the raw bytes.

**Evidence.** Four consecutive fetches of all 88 documents: 4 documents changed raw sha256 between fetches with identical content; the first difference is always the order of the top-level `tags` array (`/tags/0/name: "snapshots"` vs `"service management"` on `v1/storage`). With `tags` sorted by name, 0 of 88 documents differ across the four rounds.

**Decision.** The pinned `sha256` is taken over the parsed document with `tags` sorted (`record_spec_pin.mjs`), not over the raw bytes. `bytes` still records the upstream length.

### 3. Spec defects and the fix classes that cover them

**Evidence.** `swagger-parser` rejected two documents: `type: duration` on `service.renew.RenewDescription.renewPeriod` (v1 `/service`) and `type: long` on five `X-Pagination-Elements` response header schemas (v2 `/publicCloud`). Every operation carries `x-code-samples` (the console's client snippets): 13.9 MB of the 28.7 MB upstream.

**Decision.** Fix classes `vendor_scalar_type_lowered` (6: `long` -> integer int64, `duration` -> string; an unknown vendor type name fails the fetch) and `code_samples_removed` (7,313). The generic 3.1 classes count 0. No redactions were needed.

### 4. Most operations have no operationId

**Evidence.** 1,216 of 7,313 operations declare an `operationId` (API v2 and a few v1 families). provider-utils `generate` skips an operation without one and the bare-array wrap keys on it.

**Decision.** `bin/split.mjs` synthesises a deterministic id for the rest from the verb and the qualified path (`get_v1_cloud_project_service_name_instance`). The mapping never depends on operation ids (it is path-derived), so a vendor adding ids later moves no resource. `SHOW EXTENDED METHODS` reports the operation id as its description, so the synthesised ids are visible there.

### 5. Authentication: what the engine can and cannot do

**Question.** Which of OVHcloud's three credential kinds the provider can offer, with Terraform's variable names.

**Evidence.** The Terraform provider and `go-ovh` accept application key signing (`OVH_APPLICATION_KEY`, `OVH_APPLICATION_SECRET`, `OVH_CONSUMER_KEY`), the OAuth2 client credentials grant (`OVH_CLIENT_ID`, `OVH_CLIENT_SECRET`) and a pre-issued token (`OVH_ACCESS_TOKEN`). Application key signing is a per-request SHA-1 signature over the method, URL, body and a server-time timestamp; omnisdk has no auth kind for it (`internal/system_g/auth/auth.go`). Live: the client credentials grant against `https://auth.ca.ovhcloud.com/oauth2/token` returned a bearer token (scope `all`, 3599 s) and the mock proves the whole flow through stackql. `--auth='{"ovh": {"type": "bearer", "credentialsenvvar": "OVH_ACCESS_TOKEN"}}'` sends the token and makes no token request (integration test).

**Decision.** `auth.type: oauth2` with the client credentials grant is the document default; the token is a documented `--auth` override. Application key signing is filed as stackql-labs/omnisdk#56 and a document that offers all three kinds as omnisdk#59; the host side is stackql/stackql#923.

### 6. A service account has no rights until an IAM policy names it

**Evidence.** Live, same account: `GET /v1/me` answered 200 with a signed application key request and 403 with the service account token (`unauthorizedActionsByIAM: account:apiovh:me/get`); `GET /v1/cloud/project` answered 200 with an empty list for the service account. `GET /v2/location` and `GET /v1/auth/time` need no grant.

A policy on the account's default resource group (`ovh-default`, which lists the account, the project and the vRack) with `allow *` opened the project and vRack calls but left every `account:apiovh:*` action denied (`/me`, `/me/api/oauth2/client`, `/v2/iam/policy`); naming the account resource (`urn:v1:<region>:resource:account:<nic>`) on the same policy opened them.

**Decision.** The docs and `.env.example` say so. The dev account carries a policy `stackql-smoke-dev` for the smoke suite: the `stackql` service account, the default resource group plus the account resource, `allow *` (created 2026-11-15 with a signed call, kept in place).

### 7. The regional endpoint: the new uniform hosts, selected by OVH_ENDPOINT

**Evidence.** Current `go-ovh` lists `https://api.<eu|ca|us>.ovhcloud.com/1.0` and token URLs `https://auth.<eu|ca|us>.ovhcloud.com/oauth2/token`. Live: `/v1/auth/time` answers 200 on all three API hosts, `/1.0` and `/v1` are the same API, and a bearer token works on `api.ca.ovhcloud.com` for v1 and v2. omnisdk's `x-stackQL-envVarSelector` maps an environment variable's value to a server variable value with a declared default (shipped precedent: `databricks_account`), and `config.auth.variables` does the same for the token URL.

**Decision.** `servers.json`: `https://{api_host}/v1` (and `/v2`), `api_host` selected by `OVH_ENDPOINT` (`ovh-eu` default, `ovh-ca`, `ovh-us`). `provider_config.json`: `token_url: https://{auth_host}/oauth2/token` with the same selector. The variable is named `api_host` because `endpoint` and `region` are body properties and parameters in the API (collision). The `kimsufi-*` and `soyoustart-*` endpoints `go-ovh` also lists have no token URL and are not offered. Mock-proved: default, `ovh-ca` (API and token host), unknown value refused with the accepted keys, `WHERE api_host` override.

One wrinkle for a future signing method: a signed call to API v2 on the new host is refused (`400 Invalid host for signature`) while the legacy host (`ca.api.ovh.com`) accepts it; v1 accepts both. Recorded on omnisdk#56.

### 8. Scoping: the Public Cloud project is the only scoped family

**Evidence.** 972 of the 976 `/cloud` operations sit under `/cloud/project/{serviceName}` and 637 of the 639 v2 `/publicCloud` operations under `/publicCloud/project/{projectId}`. The Terraform provider defaults `service_name` on its `ovh_cloud_project_*` resources from `OVH_CLOUD_PROJECT_SERVICE`; it has no such variable for any other family. `serviceName` is a path parameter in 3,769 operations across families and means a different thing in each.

**Decision.** Two scopes in `lib/spec_helpers.mjs` (`SCOPES`): the prefix is stripped at split time and the project becomes a server variable (`service_name` for v1, `project_id` for v2) with `x-stackQL-envVar: OVH_CLOUD_PROJECT_SERVICE`. Root paths of those families (10 path items: `/cloud/project`, `/cloud/project/{serviceName}`, `/cloud/order`, `/cloud/agreements`, `/cloud/eligibility`, `/publicCloud/project`, ...) keep their key, are marked at split time and pinned to the unscoped server in post-process. Mock-proved: env var resolved, `WHERE` beats it, unset is refused naming the variable, the root list is served unscoped. `ovh.cloud.projects.get` and `.update` take `service_name` as a true path parameter, required even when the variable is set.

### 9. Identifier lists expand into full objects with one header (the flagship)

**Question.** API v1 collection reads return bare identifiers (`["id1", "id2"]`); 1,072 GET operations return an array of scalars. How does `SELECT *` return rows.

**Evidence.** Live (signed, read-only): `GET /v1/cloud/project` returns `[string]`; with `X-Pagination-Mode: CachedObjectList-Pages` it returns the array of full project objects, the same shape as the keyed read. Confirmed on `/v1/cloud/project/{id}/region` (22 strings -> 22 objects), `/v1/vrack`, `/v1/services` and `/v1/me/api/application` (integer ids), `/v1/me/api/credential`, `/v1/me/api/oauth2/client`. Every scalar-array GET that has a keyed read directly below it carries the vendor extension `x-expanded-response` (0 exceptions in the pinned spec). omnisdk sends a header parameter's `schema.default` when the statement does not supply it (`docx.go`).

**Decision.** `pre_normalize.mjs` pass 1: on each such list (817 mapped operations) declare `X-Pagination-Mode` as a header parameter with default `CachedObjectList-Pages` and set the response schema to an array of the keyed read's schema. The list and the keyed read then share one resource and one shape. Mock-proved: the mock returns identifiers unless the header is present.

### 10. Scalar lists and scalar reads get one `value` column

**Evidence.** 255 mapped scalar-array reads have no keyed read to expand through (lists of region names, option names, IP blocks); 63 reads return one bare string, number or boolean (`GET /auth/time`, `GET /domain/{serviceName}/authInfo`). provider-utils would name a scalar list's column from the operation id.

**Decision.** `pre_normalize.mjs` passes 2 and 3 mark and type them; post-process attaches the transforms (`{"value": {{ . }}}` for a scalar read; a per-item template using `toJson` for lists, which keeps numbers as numbers and escapes strings). Both surface as rows with a single `value` column. Live through stackql: `SELECT value FROM ovh.auth.times` returns the server time.

### 11. Pagination

**Evidence.** API v2: 277 list operations (and 5 in v1) declare `X-Pagination-Cursor` / `X-Pagination-Size` request headers; the next cursor is the `X-Pagination-Cursor-Next` response header (vendor docs, and live on `/v2/iam/resource` with size 2). omnisdk treats a response token in a header as an RFC 8288 Link header and places a request token only in the query or body (`continuation()` in `docx.go`), so the scheme is not expressible. API v1 in `CachedObjectList-Pages` mode: `X-Pagination-Size` and `X-Pagination-Number` were ignored on the CA endpoint (22 of 22 regions with size 2; 2 of 2 services with size 1) and no pagination header came back, so the expanded list arrives whole. Page sizes 2 to 1000 were accepted on `/v2/iam/resource`.

**Decision.** No pagination block. `x_pagination_size` and `x_pagination_cursor` are WHERE keys (header parameters resolve by their snake form). An API v2 list returns its first page; the docs say so. Filed as omnisdk#57.

A vendor defect to know about: `GET /v2/location` and `GET /v2/iam/reference/action` declare `X-Pagination-Size` and answer 500 when it is sent.

### 12. Resource and method naming is path-derived

**Evidence.** OVHcloud paths are a regular tree (`/family/{service}/thing/{id}/sub/{subId}`), collection reads on the static segment, keyed reads on the parameter after it, actions as POSTs on a trailing verb segment. The template's "strip scoping pairs" derivation collides inside a family (`/ip/{ip}/firewall/{x}/rule` and `/ip/{ip}/game/{x}/rule` are both `rules`).

**Decision.** `lib/mapping.mjs`: the resource is every static segment under the rule's prefix, snake_cased, the last pluralized (`firewall_rules`, `game_rules`); the prefix itself is the rule's `root` resource (`servers`, `projects`). An operation on a node with no read is hoisted as EXEC onto the nearest readable ancestor (`POST .../instance/{id}/reboot` -> `instances.reboot`; `DELETE .../storage/{id}/cors` -> `storages.delete_cors`; `PUT .../kube/{id}/updatePolicy` -> `clusters.update_policy`). Result: 2,470 resources, 2,451 selectable; the 19 that are not have no read anywhere above them (`auth.credentials`, `connectivity.eligibility_search_*`, `new_account.accounts`, ...).

Resolved by rule, deterministically (`make mappings` prints the count, `--notes` lists them): 108 cases. Two nodes that share static segments (a global collection and its per-service twin, `/sms/virtualNumbers` and `/sms/{serviceName}/virtualNumbers`) are one resource whose deeper read is `list_by_<parameter>`; two methods of one SQL verb with the same required-parameter signature (4 cases) leave the later one as EXEC. Explicit rules (`map_operations.mjs`): four singular / plural sibling segments that are different things (`servicePack` / `servicePacks`, `option` / `options`, `offerChange` / `offerChanges`, `/license/hycu/{x}` / `.../license`) and `POST .../kube/{id}/update` -> `force_update` (it would take the PUT's name).

### 13. PATCH and PUT

**Evidence.** 532 PUT and 24 PATCH operations. 20 paths declare both (19 in v2 `/publicCloud`, 1 in `/email/exchange`). The v1 PUTs are described "Alter this object properties". Mock-proved wire shapes for both verbs.

**Decision.** PUT -> UPDATE (`update`), presumed partial, not proven per endpoint. On a path with both, PATCH is the UPDATE and PUT is EXEC `replace`. Nothing maps to REPLACE (the template's rule: PUT is not REPLACE until proven live).

### 14. Skip codes

**Evidence and decision.** 723 of 7,313 operations: `deprecated_superseded` 703 (the vendor marks it deprecated and names an `x-replacement-route`; 528 of them are the legacy `/price` family, whose stated deletion date is 2025-02); `untyped_map_response` 8 and `untyped_map_body` 7 (the managed database `advancedConfiguration` maps: `additionalProperties` only, no columns); `no_response_schema` 3 (a GET declaring no content); `bare_array_body` 2. 123 deprecated operations with no replacement stay mapped and labelled.

### 15. Engine facts for this build (stackql v1.0.888, omnisdk)

Each proved with `npm run probe` against the mock; they differ from the any-sdk era facts in the skill.

- INSERT and UPDATE send typed JSON. `SET monitoring = true, boot_id = 22` -> `{"bootId":22,"monitoring":true}`; quoted `'false'` and `'23'` are coerced to the schema type; a JSON-shaped string is sent as an array or object in both verbs.
- EXEC: a bare `true` is a parser error; `@rescue = 'true'` is sent as `true` (stackql/stackql#924).
- A naive-body method accepts both `name` and `data__name`; `SHOW METHODS` and `SHOW INSERT` list the `data__` form.
- A header parameter resolves by its snake form (`x_pagination_size` -> `X-Pagination-Size`); a parameter whose name contains a dot does not (`"date.from"` must be quoted; 25 names on 30 operations; omnisdk#58).
- A method with no objectKey takes `$.items` as its row list when the response object has an `items` array property (`DefaultObjectKey`). `order.carts.get` returned its item ids instead of the cart and failed the meta-route walk; post-process sets `objectKey: $` on such methods (3).
- A SELECT whose keyed read answers 404 returns no rows and keeps the vendor error body as a diagnostic.
- `WHERE` keys that match a declared query parameter are pushed down (`WHERE region = 'GRA11'` -> `?region=GRA11`); one that is also a response column (`read_only` on `iam.policies`) is filtered client side.
- The sqlVerbs order the generator writes (most path parameters first) routes `WHERE <key>` to `get` and no key to `list`.
- stackql's refusals do not all contain "error": an unknown selector value, an unresolved server variable and a missing credential each have their own wording (the test harness matches all three).

### 16. Docs corrections docgen cannot make

**Evidence.** docgen merges every server variable into each method's required parameters and examples, so `api_host` appeared as required on all 6,590 methods; on the root-path methods of the scoped services it listed both the camelCase path parameter and the server variable; it renders `X-Pagination-Size` as `x-_pagination-_size`.

**Decision.** `website/scripts/sanitize-docs.mjs`: `api_host` is removed from required parameters and examples (14,958 occurrences) and documented as optional; the project variable is annotated "required unless OVH_CLOUD_PROJECT_SERVICE is set" on the scoped methods (1,368) and left as a plain required parameter on `projects.get` / `.update`; header names are written as stackql resolves them.

### 17. The meta-route walk needs concurrency at this size

**Evidence.** One resource at a time the walk covered about 28 resources a minute (about 90 minutes for 2,470).

**Decision.** `bin/test-meta-routes.cjs` walks services with a bounded worker pool (`--concurrency`, default 8): 2,470 resources and 6,590 methods in about 9 minutes.

### 18. `exec --output json` splits a result of more than 100 rows into several arrays

**Evidence.** Live: `SELECT id, name, vcpus, ram, disk FROM ovh.cloud.flavors WHERE region = 'BHS5'` (182 rows) wrote two JSON arrays back to back (100 and 82 rows, `...}][{...`), exit 0, nothing on stderr; pystackql returns `Invalid JSON format: Extra data`. `SHOW RESOURCES` (157 rows) and an aggregate over the same rows are one array.

**Decision.** An engine defect, filed as stackql/stackql#925. The smoke suite keeps every `exec` result under 100 rows (it reads one flavor and one image by name, and counts with `GROUP BY`). Users of `stackql exec --output json` or pystackql on a large OVHcloud collection hit this until it is fixed; the pgwire server mode is not affected.

### 19. The first live run

**Evidence.** 2026-11-15, CA region, stackql v1.0.888, the locally generated provider, OAuth2 client credentials: `make smoke-instance-lifecycle` passed 47 of 47 checks in 56 statements. Reads: the account, the expanded lists (`me.api_oauth2_clients`, `services.services`, `cloud.projects`, `cloud.regions`, `vrack.vracks`, `ip.ips`), the project scope from `OVH_CLOUD_PROJECT_SERVICE`, quotas, the `region` query-parameter pushdown, scalar lists and reads, API v2 lists, keyed reads and the `x_pagination_size` header. Writes: an SSH key (`INSERT ... RETURNING`, keyed read, `DELETE`), the project description (`UPDATE`, restored), an IAM resource group through API v2 (`INSERT` with a typed empty array, `UPDATE`, `DELETE`). Instance: `INSERT ... RETURNING` on `d2-2` with the `Debian 12` image in `BHS5`, `ACTIVE` after 46 s, `UPDATE` rename read back after 9 s, `EXEC reboot` soft and `ACTIVE` again after 27 s, `DELETE` and gone from the list after 31 s. Afterwards the account held no instance, SSH key, volume or smoke resource group and the description was the original.

**Decision.** The suite stands as written. Two things the run corrected: not every listed region offers flavors (the suite now takes the first region that does), and a stock image is matched by its exact name (`Debian 12 - Plesk` and other variants carry a licence fee).

## Spec refreshes

None yet. The first pin is 2026-11-15. On a refresh: `make refresh-spec`, run `spec_diff.mjs` on the old and new snapshot of each family the fetch reports as changed, record the summary here (operations added / removed / renamed, schemas changed, new fix classes), then `make build && make test` and review the `all_services.csv` diff.

## Open questions - what a live run has not yet established

1. **Expansion coverage.** The expand header is verified live on the collections the smoke suite reads and on seven collections probed by hand, across the `cloud`, `me`, `services` and `vrack` families. If a family ignores it, the list returns identifiers where objects are typed; the symptom is rows of NULL columns. The fix is a rule excluding that path from pass 1 of `pre_normalize.mjs`.
2. **Partial PUT.** The project description and the IAM resource group updates behaved as partial and full updates respectively (the resource group PUT needs `name` and `resources`). Whether each of the other v1 PUTs is partial (presumed) is not proven per endpoint.
3. **API v2 default page size.** Unknown; the docs tell users to set `x_pagination_size` (2 to 1000 accepted on `/v2/iam/resource`).
4. **Regions other than CA.** The token and API hosts answer for EU and US; no authenticated call was made there.
5. **Families the dev account does not hold.** Bare metal, VPS, domains, web hosting, email and telephony were read only as empty collections or not at all; their mappings are proved against the spec and the meta-route walk, not against live data.

## Testing requirements

- `make test` green after every regeneration (offline 28 checks, integration 57 checks, meta-route 2,470 resources).
- `make smoke` against the dedicated dev account before a publish; `make smoke-live` after.
- Budget: the default smoke run creates an SSH key, an IAM resource group and toggles the project description - nothing billable (0.00). The gated instance lifecycle runs one `d2-2` instance for about two minutes (a few cents at the hourly rate).
- The dev account's service account needs the `stackql-smoke-dev` policy (finding 6) or an equivalent.
