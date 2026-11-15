--- 
title: postgresql_connection_pools
hide_title: false
hide_table_of_contents: false
keywords:
  - postgresql_connection_pools
  - public_cloud_database
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

Creates, updates, deletes, gets or lists a <code>postgresql_connection_pools</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="postgresql_connection_pools" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.public_cloud_database.postgresql_connection_pools" /></td></tr>
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
    <td>Unique identifier of the connection pool</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the connection pool</td>
</tr>
<tr>
    <td><CopyableCode code="database_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Identifier of the target database schema (wire: databaseId)</td>
</tr>
<tr>
    <td><CopyableCode code="user_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Unique identifier of the database user used to establish server connections. Null when no user is assigned. (wire: userId)</td>
</tr>
<tr>
    <td><CopyableCode code="checksum" /></td>
    <td><code>string</code></td>
    <td>Hash of the resource used for concurrency control</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date at which the resource was created (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="mode" /></td>
    <td><code>string</code></td>
    <td>PgBouncer pooling mode (SESSION, STATEMENT, TRANSACTION)</td>
</tr>
<tr>
    <td><CopyableCode code="port" /></td>
    <td><code>integer</code></td>
    <td>TCP port on which the connection pool listens</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>integer</code></td>
    <td>Maximum number of server connections in the pool</td>
</tr>
<tr>
    <td><CopyableCode code="ssl_mode" /></td>
    <td><code>string</code></td>
    <td>SSL connection mode for the pool (REQUIRE) (wire: sslMode)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date of the last update to the resource (wire: updatedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="uri" /></td>
    <td><code>string</code></td>
    <td>Connection URI to the pool</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A PgBouncer connection pool on a managed PostgreSQL service

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
    <td>Unique identifier of the connection pool</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the connection pool</td>
</tr>
<tr>
    <td><CopyableCode code="database_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Identifier of the target database schema (wire: databaseId)</td>
</tr>
<tr>
    <td><CopyableCode code="user_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Unique identifier of the database user used to establish server connections. Null when no user is assigned. (wire: userId)</td>
</tr>
<tr>
    <td><CopyableCode code="checksum" /></td>
    <td><code>string</code></td>
    <td>Hash of the resource used for concurrency control</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date at which the resource was created (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="mode" /></td>
    <td><code>string</code></td>
    <td>PgBouncer pooling mode (SESSION, STATEMENT, TRANSACTION)</td>
</tr>
<tr>
    <td><CopyableCode code="port" /></td>
    <td><code>integer</code></td>
    <td>TCP port on which the connection pool listens</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>integer</code></td>
    <td>Maximum number of server connections in the pool</td>
</tr>
<tr>
    <td><CopyableCode code="ssl_mode" /></td>
    <td><code>string</code></td>
    <td>SSL connection mode for the pool (REQUIRE) (wire: sslMode)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date of the last update to the resource (wire: updatedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="uri" /></td>
    <td><code>string</code></td>
    <td>Connection URI to the pool</td>
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
    <td><a href="#parameter-connection_pool_id"><code>connection_pool_id</code></a>, <a href="#parameter-service_id"><code>service_id</code></a>, <a href="#parameter-project_id"><code>project_id</code></a></td>
    <td></td>
    <td>Returns the connection pool settings and its connection URI. (Beta version)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_id"><code>service_id</code></a>, <a href="#parameter-project_id"><code>project_id</code></a></td>
    <td><a href="#parameter-x_pagination_cursor"><code>x_pagination_cursor</code></a>, <a href="#parameter-x_pagination_size"><code>x_pagination_size</code></a></td>
    <td>Returns the connection pools of the service. (Beta version)</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_id"><code>service_id</code></a>, <a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-database_id"><code>database_id</code></a>, <a href="#parameter-mode"><code>mode</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-size"><code>size</code></a></td>
    <td></td>
    <td>Creates a connection pool on a database, with a pooling mode and a maximum number of server connections. Without userId, a system user opens the server connections. (Beta version)</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-connection_pool_id"><code>connection_pool_id</code></a>, <a href="#parameter-service_id"><code>service_id</code></a>, <a href="#parameter-project_id"><code>project_id</code></a></td>
    <td></td>
    <td>Partially updates the database, pooling mode, size or user of the connection pool. Setting userId to null removes the user assignment. (Beta version)</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-connection_pool_id"><code>connection_pool_id</code></a>, <a href="#parameter-service_id"><code>service_id</code></a>, <a href="#parameter-project_id"><code>project_id</code></a></td>
    <td></td>
    <td>Deletes the connection pool. (Beta version)</td>
</tr>
<tr>
    <td><a href="#replace"><CopyableCode code="replace" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-connectionPoolId"><code>connectionPoolId</code></a>, <a href="#parameter-serviceId"><code>serviceId</code></a>, <a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-databaseId"><code>databaseId</code></a>, <a href="#parameter-mode"><code>mode</code></a>, <a href="#parameter-size"><code>size</code></a>, <a href="#parameter-userId"><code>userId</code></a></td>
    <td></td>
    <td>Updates the database, pooling mode, size and user of the connection pool. Every field is required. Setting userId to null removes the user assignment. (Beta version)</td>
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
<tr id="parameter-connectionPoolId">
    <td><CopyableCode code="connectionPoolId" /></td>
    <td><code>string (uuid)</code></td>
    <td>Connection pool ID</td>
</tr>
<tr id="parameter-connection_pool_id">
    <td><CopyableCode code="connection_pool_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Connection pool ID (wire: connectionPoolId)</td>
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

Returns the connection pool settings and its connection URI. (Beta version)

```sql
SELECT
id,
name,
database_id,
user_id,
checksum,
created_at,
mode,
port,
size,
ssl_mode,
updated_at,
uri
FROM ovh.public_cloud_database.postgresql_connection_pools
WHERE connection_pool_id = '{{ connection_pool_id }}' -- required
AND service_id = '{{ service_id }}' -- required
AND project_id = '{{ project_id }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
<TabItem value="list">

Returns the connection pools of the service. (Beta version)

```sql
SELECT
id,
name,
database_id,
user_id,
checksum,
created_at,
mode,
port,
size,
ssl_mode,
updated_at,
uri
FROM ovh.public_cloud_database.postgresql_connection_pools
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

Creates a connection pool on a database, with a pooling mode and a maximum number of server connections. Without userId, a system user opens the server connections. (Beta version)

```sql
INSERT INTO ovh.public_cloud_database.postgresql_connection_pools (
database_id,
mode,
name,
size,
user_id,
service_id,
project_id
)
SELECT 
'{{ database_id }}' /* required */,
'{{ mode }}' /* required */,
'{{ name }}' /* required */,
{{ size }} /* required */,
'{{ user_id }}',
'{{ service_id }}',
'{{ project_id }}'
RETURNING
id,
name,
database_id,
user_id,
checksum,
created_at,
mode,
port,
size,
ssl_mode,
updated_at,
uri
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: postgresql_connection_pools
  props:
    - name: service_id
      value: "{{ service_id }}"
      description: Required parameter for the postgresql_connection_pools resource.
    - name: project_id
      value: "{{ project_id }}"
      description: Required parameter for the postgresql_connection_pools resource.
    - name: database_id
      value: "{{ database_id }}"
      description: |
        Identifier of the target database schema
    - name: mode
      value: "{{ mode }}"
      description: |
        PgBouncer pooling mode
      valid_values: ['SESSION', 'STATEMENT', 'TRANSACTION']
    - name: name
      value: "{{ name }}"
      description: |
        Name of the connection pool
    - name: size
      value: {{ size }}
      description: |
        Maximum number of server connections in the pool
    - name: user_id
      value: "{{ user_id }}"
      description: |
        Unique identifier of the database user for server connections. Null to use a system user.
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

Partially updates the database, pooling mode, size or user of the connection pool. Setting userId to null removes the user assignment. (Beta version)

```sql
UPDATE ovh.public_cloud_database.postgresql_connection_pools
SET 
database_id = '{{ database_id }}',
mode = '{{ mode }}',
size = {{ size }},
user_id = '{{ user_id }}'
WHERE 
connection_pool_id = '{{ connection_pool_id }}' --required
AND service_id = '{{ service_id }}' --required
AND project_id = '{{ project_id }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
RETURNING
id,
name,
database_id,
user_id,
checksum,
created_at,
mode,
port,
size,
ssl_mode,
updated_at,
uri;
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

Deletes the connection pool. (Beta version)

```sql
DELETE FROM ovh.public_cloud_database.postgresql_connection_pools
WHERE connection_pool_id = '{{ connection_pool_id }}' --required
AND service_id = '{{ service_id }}' --required
AND project_id = '{{ project_id }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="replace"
    values={[
        { label: 'replace', value: 'replace' }
    ]}
>
<TabItem value="replace">

Updates the database, pooling mode, size and user of the connection pool. Every field is required. Setting userId to null removes the user assignment. (Beta version)

```sql
EXEC ovh.public_cloud_database.postgresql_connection_pools.replace 
@connectionPoolId='{{ connectionPoolId }}' --required, 
@serviceId='{{ serviceId }}' --required, 
@project_id='{{ project_id }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set 
@@json=
'{
"databaseId": "{{ databaseId }}", 
"mode": "{{ mode }}", 
"size": {{ size }}, 
"userId": "{{ userId }}"
}'
;
```
</TabItem>
</Tabs>
