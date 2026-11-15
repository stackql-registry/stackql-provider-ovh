--- 
title: tenant_vspc_managed_backups
hide_title: false
hide_table_of_contents: false
keywords:
  - tenant_vspc_managed_backups
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

Creates, updates, deletes, gets or lists a <code>tenant_vspc_managed_backups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="tenant_vspc_managed_backups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.backup_services.tenant_vspc_managed_backups" /></td></tr>
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
    <td>Unique identifier of the Managed Backup service, formatted managed-backup- followed by the service name of the protected Hosted Private Cloud</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time when the service is created (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="current_state" /></td>
    <td><code>object</code></td>
    <td>Current state of the service (wire: currentState)</td>
</tr>
<tr>
    <td><CopyableCode code="current_tasks" /></td>
    <td><code>array</code></td>
    <td>Current tasks running on the service (wire: currentTasks)</td>
</tr>
<tr>
    <td><CopyableCode code="iam" /></td>
    <td><code>object</code></td>
    <td>IAM resource metadata</td>
</tr>
<tr>
    <td><CopyableCode code="resource_status" /></td>
    <td><code>string</code></td>
    <td>Indicates the readiness of the service. SUSPENDED while backup schedules are stopped. (CREATING, CREATION_PLANNED, DELETING, ERROR, OUT_OF_SYNC, READY, SUSPENDED, UNKNOWN, UPDATING) (wire: resourceStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="target_spec" /></td>
    <td><code>object</code></td>
    <td>Target specification for the service (wire: targetSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time when the service is last updated (wire: updatedAt)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Represents a Managed Backup service protecting one Hosted Private Cloud. Ordered and terminated through the OVHcloud Control Panel.

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
    <td>Unique identifier of the Managed Backup service, formatted managed-backup- followed by the service name of the protected Hosted Private Cloud</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time when the service is created (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="current_state" /></td>
    <td><code>object</code></td>
    <td>Current state of the service (wire: currentState)</td>
</tr>
<tr>
    <td><CopyableCode code="current_tasks" /></td>
    <td><code>array</code></td>
    <td>Current tasks running on the service (wire: currentTasks)</td>
</tr>
<tr>
    <td><CopyableCode code="iam" /></td>
    <td><code>object</code></td>
    <td>IAM resource metadata</td>
</tr>
<tr>
    <td><CopyableCode code="resource_status" /></td>
    <td><code>string</code></td>
    <td>Indicates the readiness of the service. SUSPENDED while backup schedules are stopped. (CREATING, CREATION_PLANNED, DELETING, ERROR, OUT_OF_SYNC, READY, SUSPENDED, UNKNOWN, UPDATING) (wire: resourceStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="target_spec" /></td>
    <td><code>object</code></td>
    <td>Target specification for the service (wire: targetSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time when the service is last updated (wire: updatedAt)</td>
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
    <td>Retrieves a Managed Backup service of the VSPC tenant</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-backup_services_id"><code>backup_services_id</code></a>, <a href="#parameter-vspc_tenant_id"><code>vspc_tenant_id</code></a></td>
    <td><a href="#parameter-x_pagination_cursor"><code>x_pagination_cursor</code></a>, <a href="#parameter-x_pagination_size"><code>x_pagination_size</code></a>, <a href="#parameter-iam_tags"><code>iam_tags</code></a></td>
    <td>Retrieves the Managed Backup services of the VSPC tenant, one per protected Hosted Private Cloud; empty when the Managed Backup add-on is not enabled</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-backup_services_id"><code>backup_services_id</code></a>, <a href="#parameter-managed_backup_id"><code>managed_backup_id</code></a>, <a href="#parameter-vspc_tenant_id"><code>vspc_tenant_id</code></a>, <a href="#parameter-display_name"><code>display_name</code></a></td>
    <td></td>
    <td>Updates the display name of a Managed Backup service</td>
</tr>
<tr>
    <td><a href="#reset_password"><CopyableCode code="reset_password" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-backupServicesId"><code>backupServicesId</code></a>, <a href="#parameter-managedBackupId"><code>managedBackupId</code></a>, <a href="#parameter-vspcTenantId"><code>vspcTenantId</code></a></td>
    <td></td>
    <td>The account is the one reported in currentState.vbrLogin. The new password is generated by the platform and delivered to the contacts of your account. It is never returned by the API. Accepted on a READY or SUSPENDED service without a password reset already in progress.</td>
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
<tr id="parameter-backupServicesId">
    <td><CopyableCode code="backupServicesId" /></td>
    <td><code>string (uuid)</code></td>
    <td>Backup services ID</td>
</tr>
<tr id="parameter-backup_services_id">
    <td><CopyableCode code="backup_services_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Backup services ID (wire: backupServicesId)</td>
</tr>
<tr id="parameter-managedBackupId">
    <td><CopyableCode code="managedBackupId" /></td>
    <td><code>string</code></td>
    <td>Managed backup ID</td>
</tr>
<tr id="parameter-managed_backup_id">
    <td><CopyableCode code="managed_backup_id" /></td>
    <td><code>string</code></td>
    <td>Managed backup ID (wire: managedBackupId)</td>
</tr>
<tr id="parameter-vspcTenantId">
    <td><CopyableCode code="vspcTenantId" /></td>
    <td><code>string (uuid)</code></td>
    <td>Vspc tenant ID</td>
</tr>
<tr id="parameter-vspc_tenant_id">
    <td><CopyableCode code="vspc_tenant_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Vspc tenant ID (wire: vspcTenantId)</td>
</tr>
<tr id="parameter-iam_tags">
    <td><CopyableCode code="iam_tags" /></td>
    <td><code>object</code></td>
    <td>Filter resources on IAM tags (wire: iamTags)</td>
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

Retrieves a Managed Backup service of the VSPC tenant

```sql
SELECT
id,
created_at,
current_state,
current_tasks,
iam,
resource_status,
target_spec,
updated_at
FROM ovh.backup_services.tenant_vspc_managed_backups
WHERE backup_services_id = '{{ backup_services_id }}' -- required
AND managed_backup_id = '{{ managed_backup_id }}' -- required
AND vspc_tenant_id = '{{ vspc_tenant_id }}' -- required
;
```
</TabItem>
<TabItem value="list">

Retrieves the Managed Backup services of the VSPC tenant, one per protected Hosted Private Cloud; empty when the Managed Backup add-on is not enabled

```sql
SELECT
id,
created_at,
current_state,
current_tasks,
iam,
resource_status,
target_spec,
updated_at
FROM ovh.backup_services.tenant_vspc_managed_backups
WHERE backup_services_id = '{{ backup_services_id }}' -- required
AND vspc_tenant_id = '{{ vspc_tenant_id }}' -- required
AND x_pagination_cursor = '{{ x_pagination_cursor }}'
AND x_pagination_size = '{{ x_pagination_size }}'
AND iam_tags = '{{ iam_tags }}'
;
```
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

Updates the display name of a Managed Backup service

```sql
UPDATE ovh.backup_services.tenant_vspc_managed_backups
SET 
display_name = '{{ display_name }}'
WHERE 
backup_services_id = '{{ backup_services_id }}' --required
AND managed_backup_id = '{{ managed_backup_id }}' --required
AND vspc_tenant_id = '{{ vspc_tenant_id }}' --required
AND display_name = '{{ display_name }}' --required
RETURNING
id,
created_at,
current_state,
current_tasks,
resource_status,
target_spec,
updated_at;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="reset_password"
    values={[
        { label: 'reset_password', value: 'reset_password' }
    ]}
>
<TabItem value="reset_password">

The account is the one reported in currentState.vbrLogin. The new password is generated by the platform and delivered to the contacts of your account. It is never returned by the API. Accepted on a READY or SUSPENDED service without a password reset already in progress.

```sql
EXEC ovh.backup_services.tenant_vspc_managed_backups.reset_password 
@backupServicesId='{{ backupServicesId }}' --required, 
@managedBackupId='{{ managedBackupId }}' --required, 
@vspcTenantId='{{ vspcTenantId }}' --required
;
```
</TabItem>
</Tabs>
