--- 
title: service_public_folder_permissions
hide_title: false
hide_table_of_contents: false
keywords:
  - service_public_folder_permissions
  - email_exchange
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

Creates, updates, deletes, gets or lists a <code>service_public_folder_permissions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="service_public_folder_permissions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.email_exchange.service_public_folder_permissions" /></td></tr>
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
    <td><CopyableCode code="allowed_account_id" /></td>
    <td><code>integer</code></td>
    <td>Account id (wire: allowedAccountId)</td>
</tr>
<tr>
    <td><CopyableCode code="task_pending_id" /></td>
    <td><code>integer</code></td>
    <td>task pending id (wire: taskPendingId)</td>
</tr>
<tr>
    <td><CopyableCode code="access_rights" /></td>
    <td><code>string</code></td>
    <td>Access right set for the account (editor, none, reviewer) (wire: accessRights)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date (wire: creationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Current object state (creating, deleting, internalMigration, ok, reopening, suspended, suspending)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Exchange organization public folder permission

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
    <td><CopyableCode code="allowed_account_id" /></td>
    <td><code>integer</code></td>
    <td>Account id (wire: allowedAccountId)</td>
</tr>
<tr>
    <td><CopyableCode code="task_pending_id" /></td>
    <td><code>integer</code></td>
    <td>task pending id (wire: taskPendingId)</td>
</tr>
<tr>
    <td><CopyableCode code="access_rights" /></td>
    <td><code>string</code></td>
    <td>Access right set for the account (editor, none, reviewer) (wire: accessRights)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date (wire: creationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Current object state (creating, deleting, internalMigration, ok, reopening, suspended, suspending)</td>
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
    <td><a href="#parameter-allowed_account_id"><code>allowed_account_id</code></a>, <a href="#parameter-exchange_service"><code>exchange_service</code></a>, <a href="#parameter-organization_name"><code>organization_name</code></a>, <a href="#parameter-path"><code>path</code></a></td>
    <td></td>
    <td>Get a public folder permission. Returns the ID of the account given access to the public folder, its access rights and its state.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-exchange_service"><code>exchange_service</code></a>, <a href="#parameter-organization_name"><code>organization_name</code></a>, <a href="#parameter-path"><code>path</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List public folder permissions. Returns the IDs of the accounts that have a permission on the public folder.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-exchange_service"><code>exchange_service</code></a>, <a href="#parameter-organization_name"><code>organization_name</code></a>, <a href="#parameter-path"><code>path</code></a>, <a href="#parameter-access_rights"><code>access_rights</code></a>, <a href="#parameter-allowed_account_id"><code>allowed_account_id</code></a></td>
    <td></td>
    <td>Add a public folder permission. Gives the account given by `allowedAccountId` the editor, reviewer or none access right on the public folder, and returns the task.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-allowed_account_id"><code>allowed_account_id</code></a>, <a href="#parameter-exchange_service"><code>exchange_service</code></a>, <a href="#parameter-organization_name"><code>organization_name</code></a>, <a href="#parameter-path"><code>path</code></a></td>
    <td></td>
    <td>Update a public folder permission. Sets the access right of the account on the public folder: editor, reviewer or none.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-allowed_account_id"><code>allowed_account_id</code></a>, <a href="#parameter-exchange_service"><code>exchange_service</code></a>, <a href="#parameter-organization_name"><code>organization_name</code></a>, <a href="#parameter-path"><code>path</code></a></td>
    <td></td>
    <td>Remove a public folder permission. Withdraws the access of the account to the public folder, and returns the task.</td>
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
<tr id="parameter-allowed_account_id">
    <td><CopyableCode code="allowed_account_id" /></td>
    <td><code>integer</code></td>
    <td>Account id (wire: allowedAccountId)</td>
</tr>
<tr id="parameter-api_host">
    <td><CopyableCode code="api_host" /></td>
    <td><code>string</code></td>
    <td>The OVHcloud API host. Selected by OVH_ENDPOINT (ovh-eu, ovh-ca or ovh-us; default ovh-eu). (default: api.eu.ovhcloud.com, x-stackQL-envVarSelector: &#123;"envVar":"OVH_ENDPOINT","default":"ovh-eu","values":&#123;"ovh-eu":"api.eu.ovhcloud.com","ovh-ca":"api.ca.ovhcloud.com","ovh-us":"api.us.ovhcloud.com"&#125;&#125;)</td>
</tr>
<tr id="parameter-exchange_service">
    <td><CopyableCode code="exchange_service" /></td>
    <td><code>string</code></td>
    <td>The internal name of your exchange service (wire: exchangeService)</td>
</tr>
<tr id="parameter-organization_name">
    <td><CopyableCode code="organization_name" /></td>
    <td><code>string</code></td>
    <td>The internal name of your exchange organization (wire: organizationName)</td>
</tr>
<tr id="parameter-path">
    <td><CopyableCode code="path" /></td>
    <td><code>string</code></td>
    <td>Path for public folder</td>
</tr>
<tr id="parameter-x_pagination_mode">
    <td><CopyableCode code="x_pagination_mode" /></td>
    <td><code>string</code></td>
    <td>Sent as CachedObjectList-Pages by default so the list returns the full objects rather than their identifiers. (wire: X-Pagination-Mode)</td>
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

Get a public folder permission. Returns the ID of the account given access to the public folder, its access rights and its state.

```sql
SELECT
allowed_account_id,
task_pending_id,
access_rights,
creation_date,
state
FROM ovh.email_exchange.service_public_folder_permissions
WHERE allowed_account_id = '{{ allowed_account_id }}' -- required
AND exchange_service = '{{ exchange_service }}' -- required
AND organization_name = '{{ organization_name }}' -- required
AND path = '{{ path }}' -- required
;
```
</TabItem>
<TabItem value="list">

List public folder permissions. Returns the IDs of the accounts that have a permission on the public folder.

```sql
SELECT
allowed_account_id,
task_pending_id,
access_rights,
creation_date,
state
FROM ovh.email_exchange.service_public_folder_permissions
WHERE exchange_service = '{{ exchange_service }}' -- required
AND organization_name = '{{ organization_name }}' -- required
AND path = '{{ path }}' -- required
AND x_pagination_mode = '{{ x_pagination_mode }}'
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

Add a public folder permission. Gives the account given by `allowedAccountId` the editor, reviewer or none access right on the public folder, and returns the task.

```sql
INSERT INTO ovh.email_exchange.service_public_folder_permissions (
access_rights,
allowed_account_id,
exchange_service,
organization_name,
path
)
SELECT 
'{{ access_rights }}' /* required */,
{{ allowed_account_id }} /* required */,
'{{ exchange_service }}',
'{{ organization_name }}',
'{{ path }}'
RETURNING
id,
finish_date,
function,
status,
todo_date
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: service_public_folder_permissions
  props:
    - name: exchange_service
      value: "{{ exchange_service }}"
      description: Required parameter for the service_public_folder_permissions resource.
    - name: organization_name
      value: "{{ organization_name }}"
      description: Required parameter for the service_public_folder_permissions resource.
    - name: path
      value: "{{ path }}"
      description: Required parameter for the service_public_folder_permissions resource.
    - name: access_rights
      value: "{{ access_rights }}"
      description: |
        Access rights to be set for the account
      valid_values: ['editor', 'none', 'reviewer']
    - name: allowed_account_id
      value: {{ allowed_account_id }}
      description: |
        Account id to have access to public folder
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

Update a public folder permission. Sets the access right of the account on the public folder: editor, reviewer or none.

```sql
UPDATE ovh.email_exchange.service_public_folder_permissions
SET 
access_rights = '{{ access_rights }}'
WHERE 
allowed_account_id = '{{ allowed_account_id }}' --required
AND exchange_service = '{{ exchange_service }}' --required
AND organization_name = '{{ organization_name }}' --required
AND path = '{{ path }}' --required;
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

Remove a public folder permission. Withdraws the access of the account to the public folder, and returns the task.

```sql
DELETE FROM ovh.email_exchange.service_public_folder_permissions
WHERE allowed_account_id = '{{ allowed_account_id }}' --required
AND exchange_service = '{{ exchange_service }}' --required
AND organization_name = '{{ organization_name }}' --required
AND path = '{{ path }}' --required
;
```
</TabItem>
</Tabs>
