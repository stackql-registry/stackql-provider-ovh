--- 
title: service_public_folders
hide_title: false
hide_table_of_contents: false
keywords:
  - service_public_folders
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

Creates, updates, deletes, gets or lists a <code>service_public_folders</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="service_public_folders" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.email_exchange.service_public_folders" /></td></tr>
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
    <td><CopyableCode code="task_pending_id" /></td>
    <td><code>integer</code></td>
    <td>task pending id (wire: taskPendingId)</td>
</tr>
<tr>
    <td><CopyableCode code="anonymous_permission" /></td>
    <td><code>string</code></td>
    <td>Access right for the guest users (editor, none, reviewer) (wire: anonymousPermission)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date (wire: creationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="default_permission" /></td>
    <td><code>string</code></td>
    <td>Default access right (editor, none, reviewer) (wire: defaultPermission)</td>
</tr>
<tr>
    <td><CopyableCode code="has_sub_folders" /></td>
    <td><code>boolean</code></td>
    <td>If true, this public folder has subfolders (wire: hasSubFolders)</td>
</tr>
<tr>
    <td><CopyableCode code="item_count" /></td>
    <td><code>integer</code></td>
    <td>Number of items in public folder (wire: itemCount)</td>
</tr>
<tr>
    <td><CopyableCode code="last_access_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Time for which public folder was accessed for the last time (wire: lastAccessTime)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modification_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Time for which public folder was modified for the last time  (wire: lastModificationTime)</td>
</tr>
<tr>
    <td><CopyableCode code="last_user_access_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Time for which public folder was accessed for the last time by the user (wire: lastUserAccessTime)</td>
</tr>
<tr>
    <td><CopyableCode code="last_user_modification_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Time for which public folder was modified for the last time by the user (wire: lastUserModificationTime)</td>
</tr>
<tr>
    <td><CopyableCode code="path" /></td>
    <td><code>string</code></td>
    <td>Path for public folder</td>
</tr>
<tr>
    <td><CopyableCode code="quota" /></td>
    <td><code>integer</code></td>
    <td>Quota for public folder in MB</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Current object state (creating, deleting, internalMigration, ok, reopening, suspended, suspending)</td>
</tr>
<tr>
    <td><CopyableCode code="total_item_size" /></td>
    <td><code>integer</code></td>
    <td>Sum of all items in public folder in MB (wire: totalItemSize)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type for public folder (calendar, contacts, plain, tasks)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Exchange organization public folder

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
    <td><CopyableCode code="task_pending_id" /></td>
    <td><code>integer</code></td>
    <td>task pending id (wire: taskPendingId)</td>
</tr>
<tr>
    <td><CopyableCode code="anonymous_permission" /></td>
    <td><code>string</code></td>
    <td>Access right for the guest users (editor, none, reviewer) (wire: anonymousPermission)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date (wire: creationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="default_permission" /></td>
    <td><code>string</code></td>
    <td>Default access right (editor, none, reviewer) (wire: defaultPermission)</td>
</tr>
<tr>
    <td><CopyableCode code="has_sub_folders" /></td>
    <td><code>boolean</code></td>
    <td>If true, this public folder has subfolders (wire: hasSubFolders)</td>
</tr>
<tr>
    <td><CopyableCode code="item_count" /></td>
    <td><code>integer</code></td>
    <td>Number of items in public folder (wire: itemCount)</td>
</tr>
<tr>
    <td><CopyableCode code="last_access_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Time for which public folder was accessed for the last time (wire: lastAccessTime)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modification_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Time for which public folder was modified for the last time  (wire: lastModificationTime)</td>
</tr>
<tr>
    <td><CopyableCode code="last_user_access_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Time for which public folder was accessed for the last time by the user (wire: lastUserAccessTime)</td>
</tr>
<tr>
    <td><CopyableCode code="last_user_modification_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Time for which public folder was modified for the last time by the user (wire: lastUserModificationTime)</td>
</tr>
<tr>
    <td><CopyableCode code="path" /></td>
    <td><code>string</code></td>
    <td>Path for public folder</td>
</tr>
<tr>
    <td><CopyableCode code="quota" /></td>
    <td><code>integer</code></td>
    <td>Quota for public folder in MB</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Current object state (creating, deleting, internalMigration, ok, reopening, suspended, suspending)</td>
</tr>
<tr>
    <td><CopyableCode code="total_item_size" /></td>
    <td><code>integer</code></td>
    <td>Sum of all items in public folder in MB (wire: totalItemSize)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type for public folder (calendar, contacts, plain, tasks)</td>
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
    <td><a href="#parameter-exchange_service"><code>exchange_service</code></a>, <a href="#parameter-organization_name"><code>organization_name</code></a>, <a href="#parameter-path"><code>path</code></a></td>
    <td></td>
    <td>Get a public folder. Returns the type, quota, size, item count, default and anonymous permissions and access dates of the public folder.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-exchange_service"><code>exchange_service</code></a>, <a href="#parameter-organization_name"><code>organization_name</code></a></td>
    <td><a href="#parameter-path"><code>path</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List public folders. Returns the paths of the public folders of the service. Filter them by `path` to look for a given folder.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-exchange_service"><code>exchange_service</code></a>, <a href="#parameter-organization_name"><code>organization_name</code></a>, <a href="#parameter-path"><code>path</code></a>, <a href="#parameter-quota"><code>quota</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td></td>
    <td>Create a public folder. Creates a calendar, contacts, plain or tasks public folder from its `path` and its `quota` in MB, and returns the task.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-exchange_service"><code>exchange_service</code></a>, <a href="#parameter-organization_name"><code>organization_name</code></a>, <a href="#parameter-path"><code>path</code></a></td>
    <td></td>
    <td>Update a public folder. Updates the quota of the public folder, in MB, and its default and anonymous permissions.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-exchange_service"><code>exchange_service</code></a>, <a href="#parameter-organization_name"><code>organization_name</code></a>, <a href="#parameter-path"><code>path</code></a></td>
    <td></td>
    <td>Delete a public folder. Deletes the public folder with its content and permissions, and returns the task.</td>
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
<tr id="parameter-path">
    <td><CopyableCode code="path" /></td>
    <td><code>string</code></td>
    <td>Filter the value of path property (like)</td>
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

Get a public folder. Returns the type, quota, size, item count, default and anonymous permissions and access dates of the public folder.

```sql
SELECT
task_pending_id,
anonymous_permission,
creation_date,
default_permission,
has_sub_folders,
item_count,
last_access_time,
last_modification_time,
last_user_access_time,
last_user_modification_time,
path,
quota,
state,
total_item_size,
type
FROM ovh.email_exchange.service_public_folders
WHERE exchange_service = '{{ exchange_service }}' -- required
AND organization_name = '{{ organization_name }}' -- required
AND path = '{{ path }}' -- required
;
```
</TabItem>
<TabItem value="list">

List public folders. Returns the paths of the public folders of the service. Filter them by `path` to look for a given folder.

```sql
SELECT
task_pending_id,
anonymous_permission,
creation_date,
default_permission,
has_sub_folders,
item_count,
last_access_time,
last_modification_time,
last_user_access_time,
last_user_modification_time,
path,
quota,
state,
total_item_size,
type
FROM ovh.email_exchange.service_public_folders
WHERE exchange_service = '{{ exchange_service }}' -- required
AND organization_name = '{{ organization_name }}' -- required
AND path = '{{ path }}'
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

Create a public folder. Creates a calendar, contacts, plain or tasks public folder from its `path` and its `quota` in MB, and returns the task.

```sql
INSERT INTO ovh.email_exchange.service_public_folders (
anonymous_permission,
default_permission,
path,
quota,
type,
exchange_service,
organization_name
)
SELECT 
'{{ anonymous_permission }}',
'{{ default_permission }}',
'{{ path }}' /* required */,
{{ quota }} /* required */,
'{{ type }}' /* required */,
'{{ exchange_service }}',
'{{ organization_name }}'
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
- name: service_public_folders
  props:
    - name: exchange_service
      value: "{{ exchange_service }}"
      description: Required parameter for the service_public_folders resource.
    - name: organization_name
      value: "{{ organization_name }}"
      description: Required parameter for the service_public_folders resource.
    - name: anonymous_permission
      value: "{{ anonymous_permission }}"
      description: |
        Access right for the guest users
      valid_values: ['editor', 'none', 'reviewer']
    - name: default_permission
      value: "{{ default_permission }}"
      description: |
        Default access right
      valid_values: ['editor', 'none', 'reviewer']
    - name: path
      value: "{{ path }}"
      description: |
        Path for public folder
    - name: quota
      value: {{ quota }}
      description: |
        Quota for public folder in MB
    - name: type
      value: "{{ type }}"
      description: |
        Type for public folder
      valid_values: ['calendar', 'contacts', 'plain', 'tasks']
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

Update a public folder. Updates the quota of the public folder, in MB, and its default and anonymous permissions.

```sql
UPDATE ovh.email_exchange.service_public_folders
SET 
anonymous_permission = '{{ anonymous_permission }}',
default_permission = '{{ default_permission }}',
quota = {{ quota }}
WHERE 
exchange_service = '{{ exchange_service }}' --required
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

Delete a public folder. Deletes the public folder with its content and permissions, and returns the task.

```sql
DELETE FROM ovh.email_exchange.service_public_folders
WHERE exchange_service = '{{ exchange_service }}' --required
AND organization_name = '{{ organization_name }}' --required
AND path = '{{ path }}' --required
;
```
</TabItem>
</Tabs>
