--- 
title: clickhouse_users
hide_title: false
hide_table_of_contents: false
keywords:
  - clickhouse_users
  - public_cloud_analytics
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

Creates, updates, deletes, gets or lists a <code>clickhouse_users</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="clickhouse_users" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.public_cloud_analytics.clickhouse_users" /></td></tr>
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
    <td>Unique identifier of the user</td>
</tr>
<tr>
    <td><CopyableCode code="admin" /></td>
    <td><code>boolean</code></td>
    <td>Whether this is the service administrator, the user created automatically at provisioning time, which cannot be deleted</td>
</tr>
<tr>
    <td><CopyableCode code="checksum" /></td>
    <td><code>string</code></td>
    <td>Hash of the resource used for concurrency control</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date at which the user was created (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="credentials_last_updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date at which the user credentials were last updated (wire: credentialsLastUpdatedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="password" /></td>
    <td><code>string (password)</code></td>
    <td>Password of the user. Returned only on creation or password reset.</td>
</tr>
<tr>
    <td><CopyableCode code="roles" /></td>
    <td><code>array</code></td>
    <td>List of roles assigned to the user. Available roles depend on the engine.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Current readiness status of the user (CREATING, DELETING, ERROR, READY, UPDATING)</td>
</tr>
<tr>
    <td><CopyableCode code="username" /></td>
    <td><code>string</code></td>
    <td>Login name of the user</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A user account on a managed service whose users are assigned roles

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
    <td>Unique identifier of the user</td>
</tr>
<tr>
    <td><CopyableCode code="admin" /></td>
    <td><code>boolean</code></td>
    <td>Whether this is the service administrator, the user created automatically at provisioning time, which cannot be deleted</td>
</tr>
<tr>
    <td><CopyableCode code="checksum" /></td>
    <td><code>string</code></td>
    <td>Hash of the resource used for concurrency control</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date at which the user was created (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="credentials_last_updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date at which the user credentials were last updated (wire: credentialsLastUpdatedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="password" /></td>
    <td><code>string (password)</code></td>
    <td>Password of the user. Returned only on creation or password reset.</td>
</tr>
<tr>
    <td><CopyableCode code="roles" /></td>
    <td><code>array</code></td>
    <td>List of roles assigned to the user. Available roles depend on the engine.</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Current readiness status of the user (CREATING, DELETING, ERROR, READY, UPDATING)</td>
</tr>
<tr>
    <td><CopyableCode code="username" /></td>
    <td><code>string</code></td>
    <td>Login name of the user</td>
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
    <td><a href="#parameter-service_id"><code>service_id</code></a>, <a href="#parameter-user_id"><code>user_id</code></a>, <a href="#parameter-project_id"><code>project_id</code></a></td>
    <td></td>
    <td>Returns the user, its roles and its status. The password is not returned. (Beta version)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_id"><code>service_id</code></a>, <a href="#parameter-project_id"><code>project_id</code></a></td>
    <td><a href="#parameter-x_pagination_cursor"><code>x_pagination_cursor</code></a>, <a href="#parameter-x_pagination_size"><code>x_pagination_size</code></a></td>
    <td>Returns the users of the service with their roles and status. Passwords are not returned. (Beta version)</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_id"><code>service_id</code></a>, <a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Creates a user and generates its password. The password is returned only on creation and on password reset. Roles are assigned in the cluster and cannot be set through this API. (Beta version)</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-service_id"><code>service_id</code></a>, <a href="#parameter-user_id"><code>user_id</code></a>, <a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-credentials_last_updated_at"><code>credentials_last_updated_at</code></a></td>
    <td></td>
    <td>Resets the password of the user when credentialsLastUpdatedAt is set. The new password is returned in the response. Roles are assigned in the cluster and cannot be changed through this API. (Beta version)</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-service_id"><code>service_id</code></a>, <a href="#parameter-user_id"><code>user_id</code></a>, <a href="#parameter-project_id"><code>project_id</code></a></td>
    <td></td>
    <td>Permanently deletes the user. (Beta version)</td>
</tr>
<tr>
    <td><a href="#reset_password"><CopyableCode code="reset_password" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceId"><code>serviceId</code></a>, <a href="#parameter-userId"><code>userId</code></a>, <a href="#parameter-project_id"><code>project_id</code></a></td>
    <td></td>
    <td>Generates a new password for the user and returns it in the response. Reading the user never returns it. The previous password stops working once the new one is applied, and credentialsLastUpdatedAt becomes the date of this reset. This is the same reset as a partial update of the user that sets credentialsLastUpdatedAt. (Beta version)</td>
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
<tr id="parameter-project_id">
    <td><CopyableCode code="project_id" /></td>
    <td><code>string</code></td>
    <td>The Public Cloud project ID. Resolved from OVH_CLOUD_PROJECT_SERVICE when set.</td>
</tr>
<tr id="parameter-serviceId">
    <td><CopyableCode code="serviceId" /></td>
    <td><code>string (uuid)</code></td>
    <td>Service ID</td>
</tr>
<tr id="parameter-service_id">
    <td><CopyableCode code="service_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Service ID (wire: serviceId)</td>
</tr>
<tr id="parameter-userId">
    <td><CopyableCode code="userId" /></td>
    <td><code>string (uuid)</code></td>
    <td>User ID</td>
</tr>
<tr id="parameter-user_id">
    <td><CopyableCode code="user_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>User ID (wire: userId)</td>
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

Returns the user, its roles and its status. The password is not returned. (Beta version)

```sql
SELECT
id,
admin,
checksum,
created_at,
credentials_last_updated_at,
password,
roles,
status,
username
FROM ovh.public_cloud_analytics.clickhouse_users
WHERE service_id = '{{ service_id }}' -- required
AND user_id = '{{ user_id }}' -- required
AND project_id = '{{ project_id }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
<TabItem value="list">

Returns the users of the service with their roles and status. Passwords are not returned. (Beta version)

```sql
SELECT
id,
admin,
checksum,
created_at,
credentials_last_updated_at,
password,
roles,
status,
username
FROM ovh.public_cloud_analytics.clickhouse_users
WHERE service_id = '{{ service_id }}' -- required
AND project_id = '{{ project_id }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
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

Creates a user and generates its password. The password is returned only on creation and on password reset. Roles are assigned in the cluster and cannot be set through this API. (Beta version)

```sql
INSERT INTO ovh.public_cloud_analytics.clickhouse_users (
name,
service_id,
project_id
)
SELECT 
'{{ name }}' /* required */,
'{{ service_id }}',
'{{ project_id }}'
RETURNING
id,
admin,
checksum,
created_at,
credentials_last_updated_at,
password,
roles,
status,
username
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: clickhouse_users
  props:
    - name: service_id
      value: "{{ service_id }}"
      description: Required parameter for the clickhouse_users resource.
    - name: project_id
      value: "{{ project_id }}"
      description: Required parameter for the clickhouse_users resource.
    - name: name
      value: "{{ name }}"
      description: |
        Login name of the new user
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

Resets the password of the user when credentialsLastUpdatedAt is set. The new password is returned in the response. Roles are assigned in the cluster and cannot be changed through this API. (Beta version)

```sql
UPDATE ovh.public_cloud_analytics.clickhouse_users
SET 
credentials_last_updated_at = '{{ credentials_last_updated_at }}'
WHERE 
service_id = '{{ service_id }}' --required
AND user_id = '{{ user_id }}' --required
AND project_id = '{{ project_id }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
AND credentials_last_updated_at = '{{ credentials_last_updated_at }}' --required
RETURNING
id,
admin,
checksum,
created_at,
credentials_last_updated_at,
password,
roles,
status,
username;
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

Permanently deletes the user. (Beta version)

```sql
DELETE FROM ovh.public_cloud_analytics.clickhouse_users
WHERE service_id = '{{ service_id }}' --required
AND user_id = '{{ user_id }}' --required
AND project_id = '{{ project_id }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
;
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

Generates a new password for the user and returns it in the response. Reading the user never returns it. The previous password stops working once the new one is applied, and credentialsLastUpdatedAt becomes the date of this reset. This is the same reset as a partial update of the user that sets credentialsLastUpdatedAt. (Beta version)

```sql
EXEC ovh.public_cloud_analytics.clickhouse_users.reset_password 
@serviceId='{{ serviceId }}' --required, 
@userId='{{ userId }}' --required, 
@project_id='{{ project_id }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
</Tabs>
