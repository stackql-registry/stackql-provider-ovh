---
title: ovh
hide_title: false
hide_table_of_contents: false
keywords:
  - ovh
  - ovhcloud
  - stackql
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, provision and manage OVHcloud resources using SQL
custom_edit_url: null
image: /img/stackql-ovh-provider-featured-image.png
id: 'provider-intro'
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';

The `ovh` provider maps the OVHcloud API (v1 and v2) to SQL: Public Cloud projects and everything in them (instances, Managed Kubernetes, managed databases, object and block storage, networks and load balancers), bare metal servers, VPS, Hosted Private Cloud, domains and DNS zones, IP addresses, vRack, load balancers, web hosting and email, the account itself (`me`) and IAM. Use it to inventory an estate across projects and regions, read quotas, policies and configuration as rows, and create, change and remove resources with `INSERT`, `UPDATE`, `DELETE` and `EXEC`.


:::info[Provider Summary] 

total services: __98__  
total resources: __2470__  
source project: __[stackql-provider-ovh](https://github.com/stackql-registry/stackql-provider-ovh)__  

:::

See also:
[[` SHOW `]](https://stackql.io/docs/language-spec/show) [[` DESCRIBE `]](https://stackql.io/docs/language-spec/describe)  [[` REGISTRY `]](https://stackql.io/docs/language-spec/registry)
* * *

## Installation

To pull the latest version of the `ovh` provider, run the following command:

```bash
REGISTRY PULL ovh;
```
> To view previous provider versions or to pull a specific provider version, see [here](https://stackql.io/docs/language-spec/registry).

## Scope

The provider covers the OVHcloud control plane API as OVHcloud publishes it: API v1 (`/v1`, also served as `/1.0`) and API v2 (`/v2`), one service per API family. The two Public Cloud families are split by product (`cloud`, `cloud_kube`, `cloud_database`, `cloud_network`, `cloud_storage`, `cloud_ai`, `cloud_container_registry` for v1; `public_cloud` and its siblings for v2). API v2 families that share a name with a v1 family carry a `_v2` suffix (`domain_v2`, `dedicated_server_v2`).

Not mapped: operations OVHcloud has deprecated and replaced (the replacement is mapped), and a small number of operations whose request or response is a free-form map or a bare array with no columns to project. Data plane endpoints (the S3 and Swift object APIs, Kubernetes API servers, database connections) are not part of the OVHcloud API and are out of scope.

## Authentication

The provider authenticates as an OVHcloud [service account](https://github.com/ovh/docs/blob/develop/pages/manage_and_operate/api/manage-service-account/guide.en-gb.md) using the OAuth2 client credentials grant, and reads the same environment variables as the OVHcloud Terraform provider:

- <CopyableCode code="OVH_CLIENT_ID" /> - the service account client ID
- <CopyableCode code="OVH_CLIENT_SECRET" /> - the service account client secret
- <CopyableCode code="OVH_ENDPOINT" /> - the API region: `ovh-eu` (the default), `ovh-ca` or `ovh-us`

Create the service account with `POST /me/api/oauth2/client` (flow `CLIENT_CREDENTIALS`) or in the OVHcloud Control Panel, then grant it rights with an IAM policy that names its identity URN. A service account has no rights until a policy grants them: an authenticated call with no matching policy is answered with `403` and the IAM action it lacked.

```bash
export OVH_ENDPOINT='ovh-eu'
export OVH_CLIENT_ID='...'
export OVH_CLIENT_SECRET='...'
```

or using PowerShell:

```powershell
$env:OVH_ENDPOINT = 'ovh-eu'
$env:OVH_CLIENT_ID = '...'
$env:OVH_CLIENT_SECRET = '...'
```

<details>

<summary>Using a pre-issued access token or different environment variables</summary>

To authenticate with a short-lived OAuth2 access token you already hold (<CopyableCode code="OVH_ACCESS_TOKEN" />, as the Terraform provider names it), or to read the credentials from other variables, use the `--auth` flag of the `stackql` program. For example:

```bash
AUTH='{ "ovh": { "type": "bearer", "credentialsenvvar": "OVH_ACCESS_TOKEN" }}'
stackql shell --auth="${AUTH}"
```

or using PowerShell:

```powershell
$Auth = "{ 'ovh': { 'type': 'bearer', 'credentialsenvvar': 'OVH_ACCESS_TOKEN' }}"
stackql.exe shell --auth=$Auth
```

The token is sent as it is and is not refreshed; requests are rejected once it expires.

</details>

Application key signing (`OVH_APPLICATION_KEY`, `OVH_APPLICATION_SECRET`, `OVH_CONSUMER_KEY`) is not available in this version: it needs a request signing method that StackQL does not have yet ([stackql-labs/omnisdk#56](https://github.com/stackql-labs/omnisdk/issues/56)).

## Regional endpoint

OVHcloud runs separate API regions with separate accounts. <CopyableCode code="OVH_ENDPOINT" /> selects both the API host and the OAuth2 token host, with the values the Terraform provider accepts:

| `OVH_ENDPOINT` | API host | Token host |
|---|---|---|
| `ovh-eu` (default) | `api.eu.ovhcloud.com` | `auth.eu.ovhcloud.com` |
| `ovh-ca` | `api.ca.ovhcloud.com` | `auth.ca.ovhcloud.com` |
| `ovh-us` | `api.us.ovhcloud.com` | `auth.us.ovhcloud.com` |

Any other value is refused with the list of accepted values. The API host is the server variable `api_host`, so a single statement can name it (`WHERE api_host = 'api.ca.ovhcloud.com'`); the credentials still belong to one region. Not every API family exists in every region: the provider is built from the EU documents, which are the superset, and a family a region does not serve answers `404` there.

## Public Cloud project scope

Every resource of the Public Cloud services is scoped to a project. The project ID is a server variable (`service_name` in the API v1 services, `project_id` in the API v2 services) resolved from <CopyableCode code="OVH_CLOUD_PROJECT_SERVICE" /> when it is set, the variable the Terraform provider uses for the same purpose, so queries need no `WHERE service_name` clause:

```bash
export OVH_CLOUD_PROJECT_SERVICE='<project id>'
```

A `WHERE service_name = '...'` value always takes precedence, which is how one session queries several projects. With the variable unset the parameter is required on every method of those services (visible in `SHOW METHODS`). `ovh.cloud.projects` itself is not scoped: it lists every project of the account. A JOIN cannot fan out across projects on the variable; compose per-project reads with `UNION ALL`.

## Lists and pagination

Most API v1 collections return only the identifiers of their items. The provider asks for the full objects instead (it sends the `X-Pagination-Mode: CachedObjectList-Pages` header by default on those reads), so `SELECT * FROM ovh.cloud.projects` returns one complete row per project and a list and its keyed read project the same columns. A collection of plain values with nothing to expand (a list of region names, of option names) is returned as rows with a single `value` column, as is a read whose response is one bare string, number or boolean.

API v2 collections page with a cursor carried in response headers. StackQL does not follow that cursor yet ([stackql-labs/omnisdk#57](https://github.com/stackql-labs/omnisdk/issues/57)), so an API v2 list returns its first page; raise the page size with `WHERE x_pagination_size = 500` when a collection is larger than the default page.

## Beta, alpha and deprecated endpoints

OVHcloud labels every operation as stable, beta, alpha or deprecated. The label is carried into the method description on each resource page as OVHcloud words it: `(Beta version)`, `(Alpha version)`, `(Deprecated, will be removed)`. Deprecated operations that OVHcloud has replaced are not mapped; deprecated operations with no replacement remain available and labelled.

## Rate limit

OVHcloud does not publish a single request quota for the API. A list read is one request (the full objects arrive in the same response), so the request count of a query is the number of resources and projects it names.

## Example Queries

Try the following queries using `stackql shell`, or run them from a script or CI pipeline with `stackql exec`.

### Estate inventory

Every Public Cloud project in the account with the fields an operator scans first:

```sql
SELECT project_id, project_name, status, plan_code, creation_date
FROM ovh.cloud.projects
ORDER BY project_name;
```

### Instances in a project

The compute instances of the project named by `OVH_CLOUD_PROJECT_SERVICE`, with their region, flavor and state:

```sql
SELECT id, name, region, status, flavor_id, created
FROM ovh.cloud.instances
ORDER BY region, name;
```

### Bare metal servers

The dedicated servers of the account with their datacenter, operating system and power state:

```sql
SELECT name, datacenter, os, state, power_state, commercial_range
FROM ovh.dedicated_server.servers
ORDER BY datacenter, name;
```

### Quota headroom

Instance and core usage against quota for each region of a project, read out of the nested `instance` column:

```sql
SELECT region,
       JSON_EXTRACT(instance, '$.usedInstances') AS used_instances,
       JSON_EXTRACT(instance, '$.maxInstances') AS max_instances,
       JSON_EXTRACT(instance, '$.usedCores') AS used_cores,
       JSON_EXTRACT(instance, '$.maxCores') AS max_cores
FROM ovh.cloud.quotas
ORDER BY region;
```

### IAM policies

The IAM policies of the account, the identities they apply to and the actions they allow:

```sql
SELECT name, read_only, identities,
       JSON_EXTRACT(permissions, '$.allow') AS allowed_actions
FROM ovh.iam.policies
WHERE x_pagination_size = 500;
```

### Provisioning

Create, change and remove resources with the corresponding SQL verbs, then run a lifecycle action with `EXEC`:

```sql
INSERT INTO ovh.cloud.sshkeys (name, public_key)
SELECT 'stackql-demo', 'ssh-ed25519 AAAA... user@host'
RETURNING id, name, finger_print;

UPDATE ovh.cloud.projects
SET description = 'analytics sandbox'
WHERE service_name = '<project_id>';

EXEC ovh.cloud.instances.reboot
  @instance_id = '<instance_id>',
  @type = 'soft';

DELETE FROM ovh.cloud.sshkeys
WHERE key_id = '<key_id>';
```

> `INSERT` and `UPDATE` send typed JSON: numbers and booleans as written, and JSON-shaped strings as arrays and objects. In `EXEC`, quote a boolean (`@rescue = 'true'`); it is still sent as a JSON boolean.

### Several projects

The same read across two projects in one result set, each naming its project:

```sql
SELECT 'project-a' AS project, name, region, status
FROM ovh.cloud.instances
WHERE service_name = '<project_a_id>'
UNION ALL
SELECT 'project-b' AS project, name, region, status
FROM ovh.cloud.instances
WHERE service_name = '<project_b_id>';
```

### Cross-provider

OVHcloud instances alongside DigitalOcean droplets in one result set:

```sql
SELECT 'ovh' AS cloud, name, region, status
FROM ovh.cloud.instances
UNION ALL
SELECT 'digitalocean' AS cloud, name, JSON_EXTRACT(region, '$.slug') AS region, status
FROM digitalocean.compute.droplets;
```


## Services
<div class="row">
<div class="providerDocColumn">
<a href="/services/account/">account</a><br />
<a href="/services/all_dom/">all_dom</a><br />
<a href="/services/auth/">auth</a><br />
<a href="/services/backup_services/">backup_services</a><br />
<a href="/services/cdn_dedicated/">cdn_dedicated</a><br />
<a href="/services/cloud/">cloud</a><br />
<a href="/services/cloud_ai/">cloud_ai</a><br />
<a href="/services/cloud_container_registry/">cloud_container_registry</a><br />
<a href="/services/cloud_database/">cloud_database</a><br />
<a href="/services/cloud_kube/">cloud_kube</a><br />
<a href="/services/cloud_network/">cloud_network</a><br />
<a href="/services/cloud_storage/">cloud_storage</a><br />
<a href="/services/cluster_hadoop/">cluster_hadoop</a><br />
<a href="/services/commercial_catalog/">commercial_catalog</a><br />
<a href="/services/connectivity/">connectivity</a><br />
<a href="/services/contact/">contact</a><br />
<a href="/services/dbaas_logs/">dbaas_logs</a><br />
<a href="/services/dedicated_ceph/">dedicated_ceph</a><br />
<a href="/services/dedicated_cloud/">dedicated_cloud</a><br />
<a href="/services/dedicated_cluster/">dedicated_cluster</a><br />
<a href="/services/dedicated_housing/">dedicated_housing</a><br />
<a href="/services/dedicated_installation_template/">dedicated_installation_template</a><br />
<a href="/services/dedicated_nasha/">dedicated_nasha</a><br />
<a href="/services/dedicated_server/">dedicated_server</a><br />
<a href="/services/dedicated_server_v2/">dedicated_server_v2</a><br />
<a href="/services/domain/">domain</a><br />
<a href="/services/domain_v2/">domain_v2</a><br />
<a href="/services/email_domain/">email_domain</a><br />
<a href="/services/email_exchange/">email_exchange</a><br />
<a href="/services/email_mxplan/">email_mxplan</a><br />
<a href="/services/email_pro/">email_pro</a><br />
<a href="/services/finops/">finops</a><br />
<a href="/services/freefax/">freefax</a><br />
<a href="/services/horizon_view/">horizon_view</a><br />
<a href="/services/hosting_private_database/">hosting_private_database</a><br />
<a href="/services/hosting_web/">hosting_web</a><br />
<a href="/services/iam/">iam</a><br />
<a href="/services/ip/">ip</a><br />
<a href="/services/ip_loadbalancing/">ip_loadbalancing</a><br />
<a href="/services/license_cloud_linux/">license_cloud_linux</a><br />
<a href="/services/license_cpanel/">license_cpanel</a><br />
<a href="/services/license_directadmin/">license_directadmin</a><br />
<a href="/services/license_hycu/">license_hycu</a><br />
<a href="/services/license_office/">license_office</a><br />
<a href="/services/license_office_prepaid/">license_office_prepaid</a><br />
<a href="/services/license_plesk/">license_plesk</a><br />
<a href="/services/license_redhat/">license_redhat</a><br />
<a href="/services/license_sqlserver/">license_sqlserver</a><br />
<a href="/services/license_virtuozzo/">license_virtuozzo</a><br />
</div>
<div class="providerDocColumn">
<a href="/services/license_windows/">license_windows</a><br />
<a href="/services/license_worklight/">license_worklight</a><br />
<a href="/services/location/">location</a><br />
<a href="/services/managed_cms/">managed_cms</a><br />
<a href="/services/me/">me</a><br />
<a href="/services/metrics/">metrics</a><br />
<a href="/services/ms_services/">ms_services</a><br />
<a href="/services/network_defense/">network_defense</a><br />
<a href="/services/new_account/">new_account</a><br />
<a href="/services/notification/">notification</a><br />
<a href="/services/nutanix/">nutanix</a><br />
<a href="/services/okms/">okms</a><br />
<a href="/services/order/">order</a><br />
<a href="/services/over_the_box/">over_the_box</a><br />
<a href="/services/ovh_cloud_connect/">ovh_cloud_connect</a><br />
<a href="/services/pack_siptrunk/">pack_siptrunk</a><br />
<a href="/services/pack_xdsl/">pack_xdsl</a><br />
<a href="/services/partner/">partner</a><br />
<a href="/services/price/">price</a><br />
<a href="/services/public_cloud/">public_cloud</a><br />
<a href="/services/public_cloud_analytics/">public_cloud_analytics</a><br />
<a href="/services/public_cloud_database/">public_cloud_database</a><br />
<a href="/services/public_cloud_kubernetes/">public_cloud_kubernetes</a><br />
<a href="/services/public_cloud_network/">public_cloud_network</a><br />
<a href="/services/public_cloud_storage/">public_cloud_storage</a><br />
<a href="/services/saas_csp2/">saas_csp2</a><br />
<a href="/services/secret/">secret</a><br />
<a href="/services/service/">service</a><br />
<a href="/services/services/">services</a><br />
<a href="/services/sms/">sms</a><br />
<a href="/services/ssl/">ssl</a><br />
<a href="/services/ssl_gateway/">ssl_gateway</a><br />
<a href="/services/stack_mis/">stack_mis</a><br />
<a href="/services/startup/">startup</a><br />
<a href="/services/storage/">storage</a><br />
<a href="/services/supply_mondial_relay/">supply_mondial_relay</a><br />
<a href="/services/support/">support</a><br />
<a href="/services/telephony/">telephony</a><br />
<a href="/services/veeam_cloud_connect/">veeam_cloud_connect</a><br />
<a href="/services/veeam_enterprise/">veeam_enterprise</a><br />
<a href="/services/videocenter/">videocenter</a><br />
<a href="/services/vip/">vip</a><br />
<a href="/services/vmware_cloud_director/">vmware_cloud_director</a><br />
<a href="/services/vps/">vps</a><br />
<a href="/services/vrack/">vrack</a><br />
<a href="/services/vrack_services/">vrack_services</a><br />
<a href="/services/webhosting/">webhosting</a><br />
<a href="/services/xdsl/">xdsl</a><br />
<a href="/services/zimbra/">zimbra</a><br />
</div>
</div>
