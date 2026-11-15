--- 
title: permissions_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - permissions_groups
  - iam
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

Creates, updates, deletes, gets or lists a <code>permissions_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="permissions_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.iam.permissions_groups" /></td></tr>
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
    <td>Identifier of the permissions group</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the permissions group</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation time (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the permissions group</td>
</tr>
<tr>
    <td><CopyableCode code="owner" /></td>
    <td><code>string</code></td>
    <td>Owner of the permissions group</td>
</tr>
<tr>
    <td><CopyableCode code="permissions" /></td>
    <td><code>object</code></td>
    <td>Permissions granted when using this permissions group</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last update time (wire: updatedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="urn" /></td>
    <td><code>string</code></td>
    <td>Unique resource name used in policies to include this permissions group</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Permissions group defines a re-usable set of permissions

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
    <td>Identifier of the permissions group</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the permissions group</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation time (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the permissions group</td>
</tr>
<tr>
    <td><CopyableCode code="owner" /></td>
    <td><code>string</code></td>
    <td>Owner of the permissions group</td>
</tr>
<tr>
    <td><CopyableCode code="permissions" /></td>
    <td><code>object</code></td>
    <td>Permissions granted when using this permissions group</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last update time (wire: updatedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="urn" /></td>
    <td><code>string</code></td>
    <td>Unique resource name used in policies to include this permissions group</td>
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
    <td><a href="#parameter-permissions_group_urn"><code>permissions_group_urn</code></a></td>
    <td></td>
    <td>Returns the name, description and permissions of the group.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-x_pagination_cursor"><code>x_pagination_cursor</code></a>, <a href="#parameter-x_pagination_size"><code>x_pagination_size</code></a></td>
    <td>Returns the permissions groups of the account, and the platform (`ovh`) groups reusable in policies.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-description"><code>description</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-permissions"><code>permissions</code></a></td>
    <td></td>
    <td>Creates a reusable allow/deny action set to attach to policies via `permissionsGroups`.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-permissions_group_urn"><code>permissions_group_urn</code></a>, <a href="#parameter-description"><code>description</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-permissions"><code>permissions</code></a></td>
    <td></td>
    <td>Replaces the group's name, description and permissions.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-permissions_group_urn"><code>permissions_group_urn</code></a></td>
    <td></td>
    <td>Deletes the permissions group. Resources and policies linked to it are not affected.</td>
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
<tr id="parameter-permissions_group_urn">
    <td><CopyableCode code="permissions_group_urn" /></td>
    <td><code>string</code></td>
    <td>Permissions groupurn (wire: permissionsGroupURN)</td>
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

Returns the name, description and permissions of the group.

```sql
SELECT
id,
name,
created_at,
description,
owner,
permissions,
updated_at,
urn
FROM ovh.iam.permissions_groups
WHERE permissions_group_urn = '{{ permissions_group_urn }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns the permissions groups of the account, and the platform (`ovh`) groups reusable in policies.

```sql
SELECT
id,
name,
created_at,
description,
owner,
permissions,
updated_at,
urn
FROM ovh.iam.permissions_groups
WHERE x_pagination_cursor = '{{ x_pagination_cursor }}'
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

Creates a reusable allow/deny action set to attach to policies via `permissionsGroups`.

```sql
INSERT INTO ovh.iam.permissions_groups (
description,
name,
permissions
)
SELECT 
'{{ description }}' /* required */,
'{{ name }}' /* required */,
'{{ permissions }}' /* required */
RETURNING
id,
name,
created_at,
description,
owner,
permissions,
updated_at,
urn
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: permissions_groups
  props:
    - name: description
      value: "{{ description }}"
      description: |
        Description of the permissions group
    - name: name
      value: "{{ name }}"
      description: |
        Name of the permissions group
    - name: permissions
      description: |
        Permissions granted when using this permissions group
      value:
        allow:
          - action: "{{ action }}"
        deny:
          - action: "{{ action }}"
        except:
          - action: "{{ action }}"
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

Replaces the group's name, description and permissions.

```sql
UPDATE ovh.iam.permissions_groups
SET 
description = '{{ description }}',
name = '{{ name }}',
permissions = '{{ permissions }}'
WHERE 
permissions_group_urn = '{{ permissions_group_urn }}' --required
AND description = '{{ description }}' --required
AND name = '{{ name }}' --required
AND permissions = '{{ permissions }}' --required
RETURNING
id,
name,
created_at,
description,
owner,
permissions,
updated_at,
urn;
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

Deletes the permissions group. Resources and policies linked to it are not affected.

```sql
DELETE FROM ovh.iam.permissions_groups
WHERE permissions_group_urn = '{{ permissions_group_urn }}' --required
;
```
</TabItem>
</Tabs>
