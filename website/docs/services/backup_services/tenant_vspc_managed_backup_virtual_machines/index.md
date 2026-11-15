--- 
title: tenant_vspc_managed_backup_virtual_machines
hide_title: false
hide_table_of_contents: false
keywords:
  - tenant_vspc_managed_backup_virtual_machines
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

Creates, updates, deletes, gets or lists a <code>tenant_vspc_managed_backup_virtual_machines</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="tenant_vspc_managed_backup_virtual_machines" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.backup_services.tenant_vspc_managed_backup_virtual_machines" /></td></tr>
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
    <td><code>string</code></td>
    <td>vSphere managed object reference of the virtual machine, vm- prefix included, for example vm-4021. A restored virtual machine is a new vSphere object with a new identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the virtual machine in vSphere at the last refresh</td>
</tr>
<tr>
    <td><CopyableCode code="last_backup_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time of the last backup cycle that included the virtual machine. Null when it has never been backed up. (wire: lastBackupAt)</td>
</tr>
<tr>
    <td><CopyableCode code="protection_status" /></td>
    <td><code>string</code></td>
    <td>Indicates whether the virtual machine carries a valid vault tag. Independent of the result of its backups. (PROTECTED, UNPROTECTED) (wire: protectionStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="refreshed_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time when this entry was last refreshed from the backup platform (wire: refreshedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="restore_point_count" /></td>
    <td><code>integer</code></td>
    <td>Number of restore points currently held for the virtual machine. 0 when it has never been backed up. (wire: restorePointCount)</td>
</tr>
<tr>
    <td><CopyableCode code="size_band" /></td>
    <td><code>string</code></td>
    <td>Billing size band validated at the last backup of the virtual machine. Null when no backup has been validated yet. (MAX_1TB, MAX_250GB, MAX_2TB, MAX_4TB, MAX_6TB, MAX_8TB) (wire: sizeBand)</td>
</tr>
<tr>
    <td><CopyableCode code="vault_level" /></td>
    <td><code>string</code></td>
    <td>Vault level resolved from the vSphere tag of the virtual machine at the last backup cycle. The tag category allows a single vault tag per virtual machine. Null when the virtual machine is unprotected. (ADVANCED, PREMIUM, STANDARD) (wire: vaultLevel)</td>
</tr>
<tr>
    <td><CopyableCode code="vm_size_gb" /></td>
    <td><code>integer</code></td>
    <td>Used size of the virtual machine in GB, measured at the last backup and used to compute its sizeBand. Null when no measurement is available yet. (wire: vmSizeGb)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Protection state of a virtual machine of the Hosted Private Cloud covered by the Managed Backup service

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
    <td><code>string</code></td>
    <td>vSphere managed object reference of the virtual machine, vm- prefix included, for example vm-4021. A restored virtual machine is a new vSphere object with a new identifier.</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the virtual machine in vSphere at the last refresh</td>
</tr>
<tr>
    <td><CopyableCode code="last_backup_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time of the last backup cycle that included the virtual machine. Null when it has never been backed up. (wire: lastBackupAt)</td>
</tr>
<tr>
    <td><CopyableCode code="protection_status" /></td>
    <td><code>string</code></td>
    <td>Indicates whether the virtual machine carries a valid vault tag. Independent of the result of its backups. (PROTECTED, UNPROTECTED) (wire: protectionStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="refreshed_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time when this entry was last refreshed from the backup platform (wire: refreshedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="restore_point_count" /></td>
    <td><code>integer</code></td>
    <td>Number of restore points currently held for the virtual machine. 0 when it has never been backed up. (wire: restorePointCount)</td>
</tr>
<tr>
    <td><CopyableCode code="size_band" /></td>
    <td><code>string</code></td>
    <td>Billing size band validated at the last backup of the virtual machine. Null when no backup has been validated yet. (MAX_1TB, MAX_250GB, MAX_2TB, MAX_4TB, MAX_6TB, MAX_8TB) (wire: sizeBand)</td>
</tr>
<tr>
    <td><CopyableCode code="vault_level" /></td>
    <td><code>string</code></td>
    <td>Vault level resolved from the vSphere tag of the virtual machine at the last backup cycle. The tag category allows a single vault tag per virtual machine. Null when the virtual machine is unprotected. (ADVANCED, PREMIUM, STANDARD) (wire: vaultLevel)</td>
</tr>
<tr>
    <td><CopyableCode code="vm_size_gb" /></td>
    <td><code>integer</code></td>
    <td>Used size of the virtual machine in GB, measured at the last backup and used to compute its sizeBand. Null when no measurement is available yet. (wire: vmSizeGb)</td>
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
    <td><a href="#parameter-backup_services_id"><code>backup_services_id</code></a>, <a href="#parameter-managed_backup_id"><code>managed_backup_id</code></a>, <a href="#parameter-virtual_machine_id"><code>virtual_machine_id</code></a>, <a href="#parameter-vspc_tenant_id"><code>vspc_tenant_id</code></a></td>
    <td></td>
    <td>Retrieves the protection state, billing dimensions and last backup information of a virtual machine</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-backup_services_id"><code>backup_services_id</code></a>, <a href="#parameter-managed_backup_id"><code>managed_backup_id</code></a>, <a href="#parameter-vspc_tenant_id"><code>vspc_tenant_id</code></a></td>
    <td><a href="#parameter-x_pagination_cursor"><code>x_pagination_cursor</code></a>, <a href="#parameter-x_pagination_size"><code>x_pagination_size</code></a></td>
    <td>Lists the virtual machines known to the Managed Backup service with their protection state, billing dimensions and last backup information</td>
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
<tr id="parameter-virtual_machine_id">
    <td><CopyableCode code="virtual_machine_id" /></td>
    <td><code>string</code></td>
    <td>Virtual machine ID (wire: virtualMachineId)</td>
</tr>
<tr id="parameter-vspc_tenant_id">
    <td><CopyableCode code="vspc_tenant_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Vspc tenant ID (wire: vspcTenantId)</td>
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

Retrieves the protection state, billing dimensions and last backup information of a virtual machine

```sql
SELECT
id,
name,
last_backup_at,
protection_status,
refreshed_at,
restore_point_count,
size_band,
vault_level,
vm_size_gb
FROM ovh.backup_services.tenant_vspc_managed_backup_virtual_machines
WHERE backup_services_id = '{{ backup_services_id }}' -- required
AND managed_backup_id = '{{ managed_backup_id }}' -- required
AND virtual_machine_id = '{{ virtual_machine_id }}' -- required
AND vspc_tenant_id = '{{ vspc_tenant_id }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists the virtual machines known to the Managed Backup service with their protection state, billing dimensions and last backup information

```sql
SELECT
id,
name,
last_backup_at,
protection_status,
refreshed_at,
restore_point_count,
size_band,
vault_level,
vm_size_gb
FROM ovh.backup_services.tenant_vspc_managed_backup_virtual_machines
WHERE backup_services_id = '{{ backup_services_id }}' -- required
AND managed_backup_id = '{{ managed_backup_id }}' -- required
AND vspc_tenant_id = '{{ vspc_tenant_id }}' -- required
AND x_pagination_cursor = '{{ x_pagination_cursor }}'
AND x_pagination_size = '{{ x_pagination_size }}'
;
```
</TabItem>
</Tabs>
