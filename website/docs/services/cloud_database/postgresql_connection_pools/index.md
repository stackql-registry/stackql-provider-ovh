--- 
title: postgresql_connection_pools
hide_title: false
hide_table_of_contents: false
keywords:
  - postgresql_connection_pools
  - cloud_database
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
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.cloud_database.postgresql_connection_pools" /></td></tr>
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
    <td>ID of the connection pool</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the connection pool</td>
</tr>
<tr>
    <td><CopyableCode code="database_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Database used for the connection pool (wire: databaseId)</td>
</tr>
<tr>
    <td><CopyableCode code="user_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>User authorized to connect to the pool, if none all the users are allowed (wire: userId)</td>
</tr>
<tr>
    <td><CopyableCode code="mode" /></td>
    <td><code>string</code></td>
    <td>Connection mode to the connection pool (session, statement, transaction)</td>
</tr>
<tr>
    <td><CopyableCode code="port" /></td>
    <td><code>integer</code></td>
    <td>Port of the connection pool</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>integer</code></td>
    <td>Size of the connection pool</td>
</tr>
<tr>
    <td><CopyableCode code="ssl_mode" /></td>
    <td><code>string</code></td>
    <td>Ssl connection mode for the pool (require) (wire: sslMode)</td>
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

Cloud database postgresql connection pool response body definition

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
    <td>ID of the connection pool</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the connection pool</td>
</tr>
<tr>
    <td><CopyableCode code="database_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Database used for the connection pool (wire: databaseId)</td>
</tr>
<tr>
    <td><CopyableCode code="user_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>User authorized to connect to the pool, if none all the users are allowed (wire: userId)</td>
</tr>
<tr>
    <td><CopyableCode code="mode" /></td>
    <td><code>string</code></td>
    <td>Connection mode to the connection pool (session, statement, transaction)</td>
</tr>
<tr>
    <td><CopyableCode code="port" /></td>
    <td><code>integer</code></td>
    <td>Port of the connection pool</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>integer</code></td>
    <td>Size of the connection pool</td>
</tr>
<tr>
    <td><CopyableCode code="ssl_mode" /></td>
    <td><code>string</code></td>
    <td>Ssl connection mode for the pool (require) (wire: sslMode)</td>
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
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a>, <a href="#parameter-connection_pool_id"><code>connection_pool_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get the connectionPool for the postgresql cluster</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td></td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-database_id"><code>database_id</code></a>, <a href="#parameter-mode"><code>mode</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-size"><code>size</code></a></td>
    <td></td>
    <td>Create a new connectionPool on the postgresql cluster</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a>, <a href="#parameter-connection_pool_id"><code>connection_pool_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Update a connectionPool on the postgresql cluster</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a>, <a href="#parameter-connection_pool_id"><code>connection_pool_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Delete a postgresql connectionPool</td>
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
<tr id="parameter-cluster_id">
    <td><CopyableCode code="cluster_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Cluster ID (wire: clusterId)</td>
</tr>
<tr id="parameter-connection_pool_id">
    <td><CopyableCode code="connection_pool_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Connection pool ID (wire: connectionPoolId)</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The Public Cloud project ID. Resolved from OVH_CLOUD_PROJECT_SERVICE when set.</td>
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

Get the connectionPool for the postgresql cluster

```sql
SELECT
id,
name,
database_id,
user_id,
mode,
port,
size,
ssl_mode,
uri
FROM ovh.cloud_database.postgresql_connection_pools
WHERE cluster_id = '{{ cluster_id }}' -- required
AND connection_pool_id = '{{ connection_pool_id }}' -- required
AND service_name = '{{ service_name }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
<TabItem value="list">

Cloud database postgresql connection pool response body definition

```sql
SELECT
id,
name,
database_id,
user_id,
mode,
port,
size,
ssl_mode,
uri
FROM ovh.cloud_database.postgresql_connection_pools
WHERE cluster_id = '{{ cluster_id }}' -- required
AND service_name = '{{ service_name }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
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

Create a new connectionPool on the postgresql cluster

```sql
INSERT INTO ovh.cloud_database.postgresql_connection_pools (
database_id,
mode,
name,
size,
user_id,
cluster_id,
service_name
)
SELECT 
'{{ database_id }}' /* required */,
'{{ mode }}' /* required */,
'{{ name }}' /* required */,
{{ size }} /* required */,
'{{ user_id }}',
'{{ cluster_id }}',
'{{ service_name }}'
RETURNING
id,
name,
database_id,
user_id,
mode,
port,
size,
ssl_mode,
uri
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: postgresql_connection_pools
  props:
    - name: cluster_id
      value: "{{ cluster_id }}"
      description: Required parameter for the postgresql_connection_pools resource.
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the postgresql_connection_pools resource.
    - name: database_id
      value: "{{ database_id }}"
      description: |
        Database used for the connection pool
    - name: mode
      value: "{{ mode }}"
      description: |
        Connection mode to the connection pool
      valid_values: ['session', 'statement', 'transaction']
    - name: name
      value: "{{ name }}"
      description: |
        Name of the connection pool
    - name: size
      value: {{ size }}
      description: |
        Size of the connection pool
    - name: user_id
      value: "{{ user_id }}"
      description: |
        User authorized to connect to the pool, if none all the users are allowed
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

Update a connectionPool on the postgresql cluster

```sql
UPDATE ovh.cloud_database.postgresql_connection_pools
SET 
database_id = '{{ database_id }}',
mode = '{{ mode }}',
size = {{ size }},
user_id = '{{ user_id }}'
WHERE 
cluster_id = '{{ cluster_id }}' --required
AND connection_pool_id = '{{ connection_pool_id }}' --required
AND service_name = '{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
RETURNING
id,
name,
database_id,
user_id,
mode,
port,
size,
ssl_mode,
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

Delete a postgresql connectionPool

```sql
DELETE FROM ovh.cloud_database.postgresql_connection_pools
WHERE cluster_id = '{{ cluster_id }}' --required
AND connection_pool_id = '{{ connection_pool_id }}' --required
AND service_name = '{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
</Tabs>
