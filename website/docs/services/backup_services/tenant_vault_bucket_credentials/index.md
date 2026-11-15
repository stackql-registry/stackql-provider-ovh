--- 
title: tenant_vault_bucket_credentials
hide_title: false
hide_table_of_contents: false
keywords:
  - tenant_vault_bucket_credentials
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

Creates, updates, deletes, gets or lists a <code>tenant_vault_bucket_credentials</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="tenant_vault_bucket_credentials" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.backup_services.tenant_vault_bucket_credentials" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
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
    <td><CopyableCode code="bucket_name" /></td>
    <td><code>string</code></td>
    <td>Name of the bucket these credentials belong to (wire: bucketName)</td>
</tr>
<tr>
    <td><CopyableCode code="access_key" /></td>
    <td><code>string</code></td>
    <td>S3 access key (wire: accessKey)</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint" /></td>
    <td><code>string</code></td>
    <td>S3 endpoint URL to configure in your environment</td>
</tr>
<tr>
    <td><CopyableCode code="region_code" /></td>
    <td><code>string</code></td>
    <td>Short region code of the bucket (ap-south-mum, ap-southeast-syd, bhs, ca-east-tor, de, eu-south-mil, eu-west-par, gra, rbx, sbg, sgp, uk, waw) (wire: regionCode)</td>
</tr>
<tr>
    <td><CopyableCode code="secret_key" /></td>
    <td><code>string (password)</code></td>
    <td>S3 secret key, sensitive value (wire: secretKey)</td>
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
    <td>&lt;sup&gt;*&lt;/sup&gt; S3 is a trademark filed by Amazon Technologies,Inc. OVHcloud's service is not sponsored by, endorsed by, or otherwise affiliated with Amazon Technologies,Inc.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

&lt;sup&gt;*&lt;/sup&gt; S3 is a trademark filed by Amazon Technologies,Inc. OVHcloud's service is not sponsored by, endorsed by, or otherwise affiliated with Amazon Technologies,Inc.

```sql
SELECT
bucket_name,
access_key,
endpoint,
region_code,
secret_key
FROM ovh.backup_services.tenant_vault_bucket_credentials
WHERE backup_services_id = '{{ backup_services_id }}' -- required
AND bucket_id = '{{ bucket_id }}' -- required
AND vault_id = '{{ vault_id }}' -- required
;
```
</TabItem>
</Tabs>
