--- 
title: tenant_vspc_backup_licenses_backup_servers
hide_title: false
hide_table_of_contents: false
keywords:
  - tenant_vspc_backup_licenses_backup_servers
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

Creates, updates, deletes, gets or lists a <code>tenant_vspc_backup_licenses_backup_servers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="tenant_vspc_backup_licenses_backup_servers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.backup_services.tenant_vspc_backup_licenses_backup_servers" /></td></tr>
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
    <td>Unique identifier of the backup server</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time when you register the backup server (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="current_state" /></td>
    <td><code>object</code></td>
    <td>Current state of the backup server (wire: currentState)</td>
</tr>
<tr>
    <td><CopyableCode code="current_tasks" /></td>
    <td><code>array</code></td>
    <td>Current tasks running on the backup server (wire: currentTasks)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Shows whether the backup server is ready (CREATING, DELETING, DISABLED, ENABLED, ERROR, NOT_CONFIGURED, NOT_INSTALLED, UPDATING)</td>
</tr>
<tr>
    <td><CopyableCode code="target_spec" /></td>
    <td><code>object</code></td>
    <td>Target specification for the backup server (wire: targetSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time when you update the backup server (wire: updatedAt)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Represents a backup server, member of the Backup Licenses subscription

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
    <td>Unique identifier of the backup server</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time when you register the backup server (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="current_state" /></td>
    <td><code>object</code></td>
    <td>Current state of the backup server (wire: currentState)</td>
</tr>
<tr>
    <td><CopyableCode code="current_tasks" /></td>
    <td><code>array</code></td>
    <td>Current tasks running on the backup server (wire: currentTasks)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Shows whether the backup server is ready (CREATING, DELETING, DISABLED, ENABLED, ERROR, NOT_CONFIGURED, NOT_INSTALLED, UPDATING)</td>
</tr>
<tr>
    <td><CopyableCode code="target_spec" /></td>
    <td><code>object</code></td>
    <td>Target specification for the backup server (wire: targetSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time when you update the backup server (wire: updatedAt)</td>
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
    <td><a href="#parameter-backup_licenses_id"><code>backup_licenses_id</code></a>, <a href="#parameter-backup_server_id"><code>backup_server_id</code></a>, <a href="#parameter-backup_services_id"><code>backup_services_id</code></a>, <a href="#parameter-vspc_tenant_id"><code>vspc_tenant_id</code></a></td>
    <td></td>
    <td>Gets specific backup server details</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-backup_licenses_id"><code>backup_licenses_id</code></a>, <a href="#parameter-backup_services_id"><code>backup_services_id</code></a>, <a href="#parameter-vspc_tenant_id"><code>vspc_tenant_id</code></a></td>
    <td><a href="#parameter-x_pagination_cursor"><code>x_pagination_cursor</code></a>, <a href="#parameter-x_pagination_size"><code>x_pagination_size</code></a></td>
    <td>Lists backup servers of the Backup Licenses subscription</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-backup_licenses_id"><code>backup_licenses_id</code></a>, <a href="#parameter-backup_services_id"><code>backup_services_id</code></a>, <a href="#parameter-vspc_tenant_id"><code>vspc_tenant_id</code></a>, <a href="#parameter-external_ips"><code>external_ips</code></a>, <a href="#parameter-license_type"><code>license_type</code></a></td>
    <td></td>
    <td>Registers an additional backup server under the Backup Licenses subscription</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-backup_licenses_id"><code>backup_licenses_id</code></a>, <a href="#parameter-backup_server_id"><code>backup_server_id</code></a>, <a href="#parameter-backup_services_id"><code>backup_services_id</code></a>, <a href="#parameter-vspc_tenant_id"><code>vspc_tenant_id</code></a>, <a href="#parameter-external_ips"><code>external_ips</code></a>, <a href="#parameter-license_type"><code>license_type</code></a></td>
    <td></td>
    <td>Updates a backup server; IP and display name changes apply immediately, a license type change is applied on the 1st of the next month</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-backup_licenses_id"><code>backup_licenses_id</code></a>, <a href="#parameter-backup_server_id"><code>backup_server_id</code></a>, <a href="#parameter-backup_services_id"><code>backup_services_id</code></a>, <a href="#parameter-vspc_tenant_id"><code>vspc_tenant_id</code></a></td>
    <td></td>
    <td>Deregisters a backup server from the Backup Licenses subscription; the subscription and license types are retained</td>
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
<tr id="parameter-backup_licenses_id">
    <td><CopyableCode code="backup_licenses_id" /></td>
    <td><code>string</code></td>
    <td>Backup licenses ID (wire: backupLicensesId)</td>
</tr>
<tr id="parameter-backup_server_id">
    <td><CopyableCode code="backup_server_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Backup server ID (wire: backupServerId)</td>
</tr>
<tr id="parameter-backup_services_id">
    <td><CopyableCode code="backup_services_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Backup services ID (wire: backupServicesId)</td>
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

Gets specific backup server details

```sql
SELECT
id,
created_at,
current_state,
current_tasks,
status,
target_spec,
updated_at
FROM ovh.backup_services.tenant_vspc_backup_licenses_backup_servers
WHERE backup_licenses_id = '{{ backup_licenses_id }}' -- required
AND backup_server_id = '{{ backup_server_id }}' -- required
AND backup_services_id = '{{ backup_services_id }}' -- required
AND vspc_tenant_id = '{{ vspc_tenant_id }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists backup servers of the Backup Licenses subscription

```sql
SELECT
id,
created_at,
current_state,
current_tasks,
status,
target_spec,
updated_at
FROM ovh.backup_services.tenant_vspc_backup_licenses_backup_servers
WHERE backup_licenses_id = '{{ backup_licenses_id }}' -- required
AND backup_services_id = '{{ backup_services_id }}' -- required
AND vspc_tenant_id = '{{ vspc_tenant_id }}' -- required
AND x_pagination_cursor = '{{ x_pagination_cursor }}'
AND x_pagination_size = '{{ x_pagination_size }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create"
    values={[
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create">

Registers an additional backup server under the Backup Licenses subscription

```sql
INSERT INTO ovh.backup_services.tenant_vspc_backup_licenses_backup_servers (
display_name,
external_ips,
license_type,
private_ips,
backup_licenses_id,
backup_services_id,
vspc_tenant_id
)
SELECT 
'{{ display_name }}',
'{{ external_ips }}' /* required */,
'{{ license_type }}' /* required */,
'{{ private_ips }}',
'{{ backup_licenses_id }}',
'{{ backup_services_id }}',
'{{ vspc_tenant_id }}'
RETURNING
id,
created_at,
current_state,
current_tasks,
status,
target_spec,
updated_at
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: tenant_vspc_backup_licenses_backup_servers
  props:
    - name: backup_licenses_id
      value: "{{ backup_licenses_id }}"
      description: Required parameter for the tenant_vspc_backup_licenses_backup_servers resource.
    - name: backup_services_id
      value: "{{ backup_services_id }}"
      description: Required parameter for the tenant_vspc_backup_licenses_backup_servers resource.
    - name: vspc_tenant_id
      value: "{{ vspc_tenant_id }}"
      description: Required parameter for the tenant_vspc_backup_licenses_backup_servers resource.
    - name: display_name
      value: "{{ display_name }}"
      description: |
        Name of the backup server
    - name: external_ips
      value:
        - "{{ external_ips }}"
      description: |
        External IP addresses of the backup server
    - name: license_type
      value: "{{ license_type }}"
      description: |
        Requested license type
      valid_values: ['VEEAM_BACKUP_REPLICATION_ENTERPRISE_PLUS', 'VEEAM_DATA_PLATFORM_ADVANCED', 'VEEAM_DATA_PLATFORM_FOUNDATION', 'VEEAM_DATA_PLATFORM_PREMIUM']
    - name: private_ips
      value:
        - "{{ private_ips }}"
      description: |
        Private IP addresses used for discovery
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update"
    values={[
        { label: 'update', value: 'update' }
    ]}
>
<TabItem value="update">

Updates a backup server; IP and display name changes apply immediately, a license type change is applied on the 1st of the next month

```sql
UPDATE ovh.backup_services.tenant_vspc_backup_licenses_backup_servers
SET 
display_name = '{{ display_name }}',
external_ips = '{{ external_ips }}',
license_type = '{{ license_type }}',
private_ips = '{{ private_ips }}'
WHERE 
backup_licenses_id = '{{ backup_licenses_id }}' --required
AND backup_server_id = '{{ backup_server_id }}' --required
AND backup_services_id = '{{ backup_services_id }}' --required
AND vspc_tenant_id = '{{ vspc_tenant_id }}' --required
AND external_ips = '{{ external_ips }}' --required
AND license_type = '{{ license_type }}' --required
RETURNING
id,
created_at,
current_state,
current_tasks,
status,
target_spec,
updated_at;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete"
    values={[
        { label: 'delete', value: 'delete' }
    ]}
>
<TabItem value="delete">

Deregisters a backup server from the Backup Licenses subscription; the subscription and license types are retained

```sql
DELETE FROM ovh.backup_services.tenant_vspc_backup_licenses_backup_servers
WHERE backup_licenses_id = '{{ backup_licenses_id }}' --required
AND backup_server_id = '{{ backup_server_id }}' --required
AND backup_services_id = '{{ backup_services_id }}' --required
AND vspc_tenant_id = '{{ vspc_tenant_id }}' --required
;
```
</TabItem>
</Tabs>
