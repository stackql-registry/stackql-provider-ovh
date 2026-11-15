--- 
title: roles
hide_title: false
hide_table_of_contents: false
keywords:
  - roles
  - dbaas_logs
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

Creates, updates, deletes, gets or lists a <code>roles</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="roles" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.dbaas_logs.roles" /></td></tr>
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Role name</td>
</tr>
<tr>
    <td><CopyableCode code="role_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Role ID (wire: roleId)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Role creation (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Role description</td>
</tr>
<tr>
    <td><CopyableCode code="nb_member" /></td>
    <td><code>integer</code></td>
    <td>Number of members (wire: nbMember)</td>
</tr>
<tr>
    <td><CopyableCode code="nb_permission" /></td>
    <td><code>integer</code></td>
    <td>Number of permissions (wire: nbPermission)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Role last update (wire: updatedAt)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Role

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Role name</td>
</tr>
<tr>
    <td><CopyableCode code="role_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Role ID (wire: roleId)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Role creation (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Role description</td>
</tr>
<tr>
    <td><CopyableCode code="nb_member" /></td>
    <td><code>integer</code></td>
    <td>Number of members (wire: nbMember)</td>
</tr>
<tr>
    <td><CopyableCode code="nb_permission" /></td>
    <td><code>integer</code></td>
    <td>Number of permissions (wire: nbPermission)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Role last update (wire: updatedAt)</td>
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
    <td><a href="#parameter-role_id"><code>role_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Returns the role. (Deprecated, will be removed)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-name_pattern"><code>name_pattern</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>Returns the roles of the Logs Data Platform service. (Deprecated, will be removed)</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-description"><code>description</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Creates a role on the Logs Data Platform service. (Deprecated, will be removed)</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-role_id"><code>role_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-description"><code>description</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Updates the role. (Deprecated, will be removed)</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-role_id"><code>role_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Deletes the role. (Deprecated, will be removed)</td>
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
<tr id="parameter-role_id">
    <td><CopyableCode code="role_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Role ID (wire: roleId)</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>Service name (wire: serviceName)</td>
</tr>
<tr id="parameter-name_pattern">
    <td><CopyableCode code="name_pattern" /></td>
    <td><code>string</code></td>
    <td>Filter by name (like) (wire: namePattern)</td>
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

Returns the role. (Deprecated, will be removed)

```sql
SELECT
name,
role_id,
created_at,
description,
nb_member,
nb_permission,
updated_at
FROM ovh.dbaas_logs.roles
WHERE role_id = '{{ role_id }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns the roles of the Logs Data Platform service. (Deprecated, will be removed)

```sql
SELECT
name,
role_id,
created_at,
description,
nb_member,
nb_permission,
updated_at
FROM ovh.dbaas_logs.roles
WHERE service_name = '{{ service_name }}' -- required
AND name_pattern = '{{ name_pattern }}'
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

Creates a role on the Logs Data Platform service. (Deprecated, will be removed)

```sql
INSERT INTO ovh.dbaas_logs.roles (
description,
name,
service_name
)
SELECT 
'{{ description }}' /* required */,
'{{ name }}' /* required */,
'{{ service_name }}'
RETURNING
alias_id,
dashboard_id,
encryption_key_id,
index_id,
input_id,
operation_id,
osd_id,
role_id,
stream_id,
subscription_id,
tenant_id,
token_id,
service_name,
created_at,
state,
updated_at
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: roles
  props:
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the roles resource.
    - name: description
      value: "{{ description }}"
      description: |
        Description
    - name: name
      value: "{{ name }}"
      description: |
        Name
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

Updates the role. (Deprecated, will be removed)

```sql
UPDATE ovh.dbaas_logs.roles
SET 
description = '{{ description }}',
name = '{{ name }}'
WHERE 
role_id = '{{ role_id }}' --required
AND service_name = '{{ service_name }}' --required
AND description = '{{ description }}' --required
AND name = '{{ name }}' --required
RETURNING
alias_id,
dashboard_id,
encryption_key_id,
index_id,
input_id,
operation_id,
osd_id,
role_id,
stream_id,
subscription_id,
tenant_id,
token_id,
service_name,
created_at,
state,
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

Deletes the role. (Deprecated, will be removed)

```sql
DELETE FROM ovh.dbaas_logs.roles
WHERE role_id = '{{ role_id }}' --required
AND service_name = '{{ service_name }}' --required
;
```
</TabItem>
</Tabs>
