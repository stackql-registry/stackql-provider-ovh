--- 
title: tenant_vspc_managed_backup_consumptions
hide_title: false
hide_table_of_contents: false
keywords:
  - tenant_vspc_managed_backup_consumptions
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

Creates, updates, deletes, gets or lists a <code>tenant_vspc_managed_backup_consumptions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="tenant_vspc_managed_backup_consumptions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.backup_services.tenant_vspc_managed_backup_consumptions" /></td></tr>
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
    <td><CopyableCode code="billed_vm_count" /></td>
    <td><code>integer</code></td>
    <td>Number of virtual machines generating a billing line, the sum of the vmCount of all lines (wire: billedVmCount)</td>
</tr>
<tr>
    <td><CopyableCode code="lines" /></td>
    <td><code>array</code></td>
    <td>One line per non-empty combination of vault level and size band. Empty while the service is suspended.</td>
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
    <td><a href="#parameter-backup_services_id"><code>backup_services_id</code></a>, <a href="#parameter-managed_backup_id"><code>managed_backup_id</code></a>, <a href="#parameter-vspc_tenant_id"><code>vspc_tenant_id</code></a></td>
    <td></td>
    <td>Retrieves the current billable consumption of the Managed Backup service: number of backed up virtual machines per vault level and size band with the matching plan code; no price is returned</td>
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
<tr id="parameter-managed_backup_id">
    <td><CopyableCode code="managed_backup_id" /></td>
    <td><code>string</code></td>
    <td>Managed backup ID (wire: managedBackupId)</td>
</tr>
<tr id="parameter-vspc_tenant_id">
    <td><CopyableCode code="vspc_tenant_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Vspc tenant ID (wire: vspcTenantId)</td>
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

Retrieves the current billable consumption of the Managed Backup service: number of backed up virtual machines per vault level and size band with the matching plan code; no price is returned

```sql
SELECT
billed_vm_count,
lines
FROM ovh.backup_services.tenant_vspc_managed_backup_consumptions
WHERE backup_services_id = '{{ backup_services_id }}' -- required
AND managed_backup_id = '{{ managed_backup_id }}' -- required
AND vspc_tenant_id = '{{ vspc_tenant_id }}' -- required
;
```
</TabItem>
</Tabs>
