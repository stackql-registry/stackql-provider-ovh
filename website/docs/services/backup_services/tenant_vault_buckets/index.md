--- 
title: tenant_vault_buckets
hide_title: false
hide_table_of_contents: false
keywords:
  - tenant_vault_buckets
  - backup_services
  - ovh
  - infrastructure-as-code
  - configuration-as-data
  - cloud inventory
description: Query, deploy and manage ovh resources using SQL
custom_edit_url: null
image: /img/stackql-ovh-provider-featured-image.png
---

import CopyableCode from '@site/src/components/CopyableCode/CopyableCode';
import CodeBlock from '@theme/CodeBlock';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Creates, updates, deletes, gets or lists a <code>tenant_vault_buckets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="tenant_vault_buckets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.backup_services.tenant_vault_buckets" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

successful operation

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Specifies the unique identifier of the bucket</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Specifies the name of the bucket</td>
</tr>
<tr>
    <td><CopyableCode code="encrypted" /></td>
    <td><code>boolean</code></td>
    <td>Whether the backup data stored in the bucket is encrypted. Always true for Managed Backup buckets. Null when not reported by the platform.</td>
</tr>
<tr>
    <td><CopyableCode code="immutability" /></td>
    <td><code>object</code></td>
    <td>Immutability settings of the bucket, enabled on the buckets of a PREMIUM Managed Backup vault. Null when not reported by the platform.</td>
</tr>
<tr>
    <td><CopyableCode code="performance" /></td>
    <td><code>string</code></td>
    <td>Specifies the performance tier of the bucket (HIGH_PERF, STANDARD)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Specifies the geographic region where the bucket is located (af-north-lz-rba, ap-south-mum, ap-southeast-sgp, ap-southeast-syd, ca-east-bhs, ca-east-tor, eu-central-lz-buh, eu-central-lz-prg, eu-central-lz-sof, eu-central-waw, eu-north-lz-cph, eu-north-lz-hel, eu-north-lz-osl, eu-north-lz-sto, eu-south-lz-lis, eu-south-lz-mad, eu-south-lz-mil, eu-south-mil, eu-west-eri, eu-west-gra, eu-west-gra-snc, eu-west-lim, eu-west-lz-ams, eu-west-lz-bru, eu-west-lz-dln, eu-west-lz-lux, eu-west-lz-mnc, eu-west-lz-mrs, eu-west-lz-vie, eu-west-lz-zrh, eu-west-par, eu-west-rbx, eu-west-rbx-snc, eu-west-sbg, eu-west-sbg-snc, us-central-lz-slc, us-central-lz-stl, us-east-lz-atl, us-east-lz-bos, us-east-lz-chi, us-east-lz-dal, us-east-lz-mia, us-east-lz-nyc, us-east-vin, us-west-hil, us-west-lz-den, us-west-lz-lax, us-west-lz-pao, us-west-lz-phx, us-west-lz-sea)</td>
</tr>
<tr>
    <td><CopyableCode code="role" /></td>
    <td><code>string</code></td>
    <td>Specifies the role assigned to the bucket (PRIMARY, REPLICA)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Specifies the current status of the bucket (CREATING, CREATION_PLANNED, DELETING, ERROR, OUT_OF_SYNC, READY, SUSPENDED, UNKNOWN, UPDATING)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Represents a bucket resource for a vault

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><CopyableCode code="id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Specifies the unique identifier of the bucket</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Specifies the name of the bucket</td>
</tr>
<tr>
    <td><CopyableCode code="encrypted" /></td>
    <td><code>boolean</code></td>
    <td>Whether the backup data stored in the bucket is encrypted. Always true for Managed Backup buckets. Null when not reported by the platform.</td>
</tr>
<tr>
    <td><CopyableCode code="immutability" /></td>
    <td><code>object</code></td>
    <td>Immutability settings of the bucket, enabled on the buckets of a PREMIUM Managed Backup vault. Null when not reported by the platform.</td>
</tr>
<tr>
    <td><CopyableCode code="performance" /></td>
    <td><code>string</code></td>
    <td>Specifies the performance tier of the bucket (HIGH_PERF, STANDARD)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Specifies the geographic region where the bucket is located (af-north-lz-rba, ap-south-mum, ap-southeast-sgp, ap-southeast-syd, ca-east-bhs, ca-east-tor, eu-central-lz-buh, eu-central-lz-prg, eu-central-lz-sof, eu-central-waw, eu-north-lz-cph, eu-north-lz-hel, eu-north-lz-osl, eu-north-lz-sto, eu-south-lz-lis, eu-south-lz-mad, eu-south-lz-mil, eu-south-mil, eu-west-eri, eu-west-gra, eu-west-gra-snc, eu-west-lim, eu-west-lz-ams, eu-west-lz-bru, eu-west-lz-dln, eu-west-lz-lux, eu-west-lz-mnc, eu-west-lz-mrs, eu-west-lz-vie, eu-west-lz-zrh, eu-west-par, eu-west-rbx, eu-west-rbx-snc, eu-west-sbg, eu-west-sbg-snc, us-central-lz-slc, us-central-lz-stl, us-east-lz-atl, us-east-lz-bos, us-east-lz-chi, us-east-lz-dal, us-east-lz-mia, us-east-lz-nyc, us-east-vin, us-west-hil, us-west-lz-den, us-west-lz-lax, us-west-lz-pao, us-west-lz-phx, us-west-lz-sea)</td>
</tr>
<tr>
    <td><CopyableCode code="role" /></td>
    <td><code>string</code></td>
    <td>Specifies the role assigned to the bucket (PRIMARY, REPLICA)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Specifies the current status of the bucket (CREATING, CREATION_PLANNED, DELETING, ERROR, OUT_OF_SYNC, READY, SUSPENDED, UNKNOWN, UPDATING)</td>
</tr>
</tbody>
</table>
</TabItem>
</Tabs>

## Methods

The following methods are available for this resource:

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Accessible by</th>
    <th>Required Params</th>
    <th>Optional Params</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr>
    <td><a href="#get"><CopyableCode code="get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-backup_services_id"><code>backup_services_id</code></a>, <a href="#parameter-bucket_id"><code>bucket_id</code></a>, <a href="#parameter-vault_id"><code>vault_id</code></a></td>
    <td></td>
    <td>Gets specific vault bucket details</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-backup_services_id"><code>backup_services_id</code></a>, <a href="#parameter-vault_id"><code>vault_id</code></a></td>
    <td><a href="#parameter-x_pagination_cursor"><code>x_pagination_cursor</code></a>, <a href="#parameter-x_pagination_size"><code>x_pagination_size</code></a></td>
    <td>Lists buckets of the vault</td>
</tr>
</tbody>
</table>

## Parameters

Parameters can be passed in the `WHERE` clause of a query. Check the [Methods](#methods) section to see which parameters are required or optional for each operation.

<table>
<thead>
    <tr>
    <th>Name</th>
    <th>Datatype</th>
    <th>Description</th>
    </tr>
</thead>
<tbody>
<tr id="parameter-api_host">
    <td><CopyableCode code="api_host" /></td>
    <td><code>string</code></td>
    <td>The OVHcloud API host. Selected by OVH_ENDPOINT (ovh-eu, ovh-ca or ovh-us; default ovh-eu). (default: api.eu.ovhcloud.com, x-stackQL-envVarSelector: &#123;"envVar":"OVH_ENDPOINT","default":"ovh-eu","values":&#123;"ovh-eu":"api.eu.ovhcloud.com","ovh-ca":"api.ca.ovhcloud.com","ovh-us":"api.us.ovhcloud.com"&#125;&#125;)</td>
</tr>
<tr id="parameter-backup_services_id">
    <td><CopyableCode code="backup_services_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Backup services ID (wire: backupServicesId)</td>
</tr>
<tr id="parameter-bucket_id">
    <td><CopyableCode code="bucket_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Bucket ID (wire: bucketId)</td>
</tr>
<tr id="parameter-vault_id">
    <td><CopyableCode code="vault_id" /></td>
    <td><code>string</code></td>
    <td>Vault ID (wire: vaultId)</td>
</tr>
<tr id="parameter-x_pagination_cursor">
    <td><CopyableCode code="x_pagination_cursor" /></td>
    <td><code>string</code></td>
    <td>Pagination cursor (wire: X-Pagination-Cursor)</td>
</tr>
<tr id="parameter-x_pagination_size">
    <td><CopyableCode code="x_pagination_size" /></td>
    <td><code>integer</code></td>
    <td>Pagination size (wire: X-Pagination-Size)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Gets specific vault bucket details

```sql
SELECT
id,
name,
encrypted,
immutability,
performance,
region,
role,
status
FROM ovh.backup_services.tenant_vault_buckets
WHERE backup_services_id = '{{ backup_services_id }}' -- required
AND bucket_id = '{{ bucket_id }}' -- required
AND vault_id = '{{ vault_id }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists buckets of the vault

```sql
SELECT
id,
name,
encrypted,
immutability,
performance,
region,
role,
status
FROM ovh.backup_services.tenant_vault_buckets
WHERE backup_services_id = '{{ backup_services_id }}' -- required
AND vault_id = '{{ vault_id }}' -- required
AND x_pagination_cursor = '{{ x_pagination_cursor }}'
AND x_pagination_size = '{{ x_pagination_size }}'
;
```
</TabItem>
</Tabs>
