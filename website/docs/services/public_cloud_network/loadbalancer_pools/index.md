--- 
title: loadbalancer_pools
hide_title: false
hide_table_of_contents: false
keywords:
  - loadbalancer_pools
  - public_cloud_network
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

Creates, updates, deletes, gets or lists a <code>loadbalancer_pools</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="loadbalancer_pools" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.public_cloud_network.loadbalancer_pools" /></td></tr>
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
    <td>Unique identifier of the pool</td>
</tr>
<tr>
    <td><CopyableCode code="checksum" /></td>
    <td><code>string</code></td>
    <td>Computed hash representing the current target specification value</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date of the pool (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="current_state" /></td>
    <td><code>object</code></td>
    <td>Current state of the pool (wire: currentState)</td>
</tr>
<tr>
    <td><CopyableCode code="current_tasks" /></td>
    <td><code>array</code></td>
    <td>Ongoing asynchronous tasks related to the pool (wire: currentTasks)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_status" /></td>
    <td><code>string</code></td>
    <td>Pool readiness in the system (CREATING, CREATION_PLANNED, DELETING, ERROR, OUT_OF_SYNC, READY, SUSPENDED, UNKNOWN, UPDATING) (wire: resourceStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="target_spec" /></td>
    <td><code>object</code></td>
    <td>Last target specification of the pool (wire: targetSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last update date of the pool (wire: updatedAt)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A Public Cloud load balancer pool

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
    <td>Unique identifier of the pool</td>
</tr>
<tr>
    <td><CopyableCode code="checksum" /></td>
    <td><code>string</code></td>
    <td>Computed hash representing the current target specification value</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date of the pool (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="current_state" /></td>
    <td><code>object</code></td>
    <td>Current state of the pool (wire: currentState)</td>
</tr>
<tr>
    <td><CopyableCode code="current_tasks" /></td>
    <td><code>array</code></td>
    <td>Ongoing asynchronous tasks related to the pool (wire: currentTasks)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_status" /></td>
    <td><code>string</code></td>
    <td>Pool readiness in the system (CREATING, CREATION_PLANNED, DELETING, ERROR, OUT_OF_SYNC, READY, SUSPENDED, UNKNOWN, UPDATING) (wire: resourceStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="target_spec" /></td>
    <td><code>object</code></td>
    <td>Last target specification of the pool (wire: targetSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last update date of the pool (wire: updatedAt)</td>
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
    <td><a href="#parameter-loadbalancer_id"><code>loadbalancer_id</code></a>, <a href="#parameter-pool_id"><code>pool_id</code></a>, <a href="#parameter-project_id"><code>project_id</code></a></td>
    <td></td>
    <td>Returns the pool, including its load-balancing algorithm and health monitor.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-loadbalancer_id"><code>loadbalancer_id</code></a>, <a href="#parameter-project_id"><code>project_id</code></a></td>
    <td><a href="#parameter-x_pagination_cursor"><code>x_pagination_cursor</code></a>, <a href="#parameter-x_pagination_size"><code>x_pagination_size</code></a>, <a href="#parameter-algorithm"><code>algorithm</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-protocol"><code>protocol</code></a></td>
    <td>Returns the pools of the load balancer.&lt;br /&gt;&lt;br /&gt;### Filters&lt;br /&gt;The optional `name`, `protocol` and `algorithm` query parameters narrow the list. Each one can be repeated (for example `?protocol=HTTP&protocol=TCP`): repeated values of the same parameter are combined with OR, and different parameters are combined with AND. An unknown `protocol` or `algorithm` value is rejected with a `400 InvalidParameter`. The `resourceStatus` is computed from the live state of each resource, so it is not a filter: a `status` query parameter is rejected with a `400 InvalidParameter`.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-loadbalancer_id"><code>loadbalancer_id</code></a>, <a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-target_spec"><code>target_spec</code></a></td>
    <td></td>
    <td>Creates a pool with a load-balancing algorithm and protocol, optionally with a health monitor and session persistence.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-loadbalancer_id"><code>loadbalancer_id</code></a>, <a href="#parameter-pool_id"><code>pool_id</code></a>, <a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-target_spec"><code>target_spec</code></a></td>
    <td></td>
    <td>Replaces the pool's target specification as a whole. The body carries the complete desired state of every field `publicCloud.loadbalancer.PoolUpdateTargetSpec` exposes — `algorithm`, `description`, `healthMonitor`, `name` and `persistence` — so read the pool first and restate every value you want to keep: a field left out of `targetSpec` is cleared, not carried over from the stored specification. Leaving `healthMonitor` out deletes the pool's health monitor, and leaving `persistence` out disables session persistence.&lt;br /&gt;&lt;br /&gt;The create-only field `protocol` cannot be changed once the pool exists. It is deliberately absent from the update model, and sending it is rejected with a 400.&lt;br /&gt;&lt;br /&gt;`algorithm` is required. When a `healthMonitor` is sent, it is itself a complete specification: `type`, `delay`, `timeout` and `maxRetries` are all required — mirroring the create route — and every optional monitor field left out is cleared. The monitor `type` is immutable once the monitor exists, so restate the current type.&lt;br /&gt;&lt;br /&gt;The optional `checksum` guards against a lost update: when supplied it must match the pool's current checksum or the request is rejected with a 409 checksum mismatch. Omitting it skips the check and forces the write (last-write-wins).</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-loadbalancer_id"><code>loadbalancer_id</code></a>, <a href="#parameter-pool_id"><code>pool_id</code></a>, <a href="#parameter-project_id"><code>project_id</code></a></td>
    <td></td>
    <td>Deletes the pool.</td>
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
<tr id="parameter-loadbalancer_id">
    <td><CopyableCode code="loadbalancer_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Loadbalancer ID (wire: loadbalancerId)</td>
</tr>
<tr id="parameter-pool_id">
    <td><CopyableCode code="pool_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Pool ID (wire: poolId)</td>
</tr>
<tr id="parameter-project_id">
    <td><CopyableCode code="project_id" /></td>
    <td><code>string</code></td>
    <td>The Public Cloud project ID. Resolved from OVH_CLOUD_PROJECT_SERVICE when set.</td>
</tr>
<tr id="parameter-algorithm">
    <td><CopyableCode code="algorithm" /></td>
    <td><code>array</code></td>
    <td>Filter by pool load balancing algorithm. Repeatable.</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>array</code></td>
    <td>Filter by pool name (case-insensitive substring match). Repeatable.</td>
</tr>
<tr id="parameter-protocol">
    <td><CopyableCode code="protocol" /></td>
    <td><code>array</code></td>
    <td>Filter by pool protocol. Repeatable.</td>
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

Returns the pool, including its load-balancing algorithm and health monitor.

```sql
SELECT
id,
checksum,
created_at,
current_state,
current_tasks,
resource_status,
target_spec,
updated_at
FROM ovh.public_cloud_network.loadbalancer_pools
WHERE loadbalancer_id = '{{ loadbalancer_id }}' -- required
AND pool_id = '{{ pool_id }}' -- required
AND project_id = '{{ project_id }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
<TabItem value="list">

Returns the pools of the load balancer.&lt;br /&gt;&lt;br /&gt;### Filters&lt;br /&gt;The optional `name`, `protocol` and `algorithm` query parameters narrow the list. Each one can be repeated (for example `?protocol=HTTP&protocol=TCP`): repeated values of the same parameter are combined with OR, and different parameters are combined with AND. An unknown `protocol` or `algorithm` value is rejected with a `400 InvalidParameter`. The `resourceStatus` is computed from the live state of each resource, so it is not a filter: a `status` query parameter is rejected with a `400 InvalidParameter`.

```sql
SELECT
id,
checksum,
created_at,
current_state,
current_tasks,
resource_status,
target_spec,
updated_at
FROM ovh.public_cloud_network.loadbalancer_pools
WHERE loadbalancer_id = '{{ loadbalancer_id }}' -- required
AND project_id = '{{ project_id }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
AND x_pagination_cursor = '{{ x_pagination_cursor }}'
AND x_pagination_size = '{{ x_pagination_size }}'
AND algorithm = '{{ algorithm }}'
AND name = '{{ name }}'
AND protocol = '{{ protocol }}'
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

Creates a pool with a load-balancing algorithm and protocol, optionally with a health monitor and session persistence.

```sql
INSERT INTO ovh.public_cloud_network.loadbalancer_pools (
target_spec,
loadbalancer_id,
project_id
)
SELECT 
'{{ target_spec }}' /* required */,
'{{ loadbalancer_id }}',
'{{ project_id }}'
RETURNING
id,
checksum,
created_at,
current_state,
current_tasks,
resource_status,
target_spec,
updated_at
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: loadbalancer_pools
  props:
    - name: loadbalancer_id
      value: "{{ loadbalancer_id }}"
      description: Required parameter for the loadbalancer_pools resource.
    - name: project_id
      value: "{{ project_id }}"
      description: Required parameter for the loadbalancer_pools resource.
    - name: target_spec
      description: |
        Desired target specification for the pool to create
      value:
        algorithm: "{{ algorithm }}"
        description: "{{ description }}"
        healthMonitor:
          delay: {{ delay }}
          domainName: "{{ domainName }}"
          expectedCodes: "{{ expectedCodes }}"
          httpMethod: "{{ httpMethod }}"
          httpVersion: "{{ httpVersion }}"
          maxRetries: {{ maxRetries }}
          maxRetriesDown: {{ maxRetriesDown }}
          name: "{{ name }}"
          timeout: {{ timeout }}
          type: "{{ type }}"
          urlPath: "{{ urlPath }}"
        name: "{{ name }}"
        persistence:
          cookieName: "{{ cookieName }}"
          type: "{{ type }}"
        protocol: "{{ protocol }}"
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

Replaces the pool's target specification as a whole. The body carries the complete desired state of every field `publicCloud.loadbalancer.PoolUpdateTargetSpec` exposes — `algorithm`, `description`, `healthMonitor`, `name` and `persistence` — so read the pool first and restate every value you want to keep: a field left out of `targetSpec` is cleared, not carried over from the stored specification. Leaving `healthMonitor` out deletes the pool's health monitor, and leaving `persistence` out disables session persistence.&lt;br /&gt;&lt;br /&gt;The create-only field `protocol` cannot be changed once the pool exists. It is deliberately absent from the update model, and sending it is rejected with a 400.&lt;br /&gt;&lt;br /&gt;`algorithm` is required. When a `healthMonitor` is sent, it is itself a complete specification: `type`, `delay`, `timeout` and `maxRetries` are all required — mirroring the create route — and every optional monitor field left out is cleared. The monitor `type` is immutable once the monitor exists, so restate the current type.&lt;br /&gt;&lt;br /&gt;The optional `checksum` guards against a lost update: when supplied it must match the pool's current checksum or the request is rejected with a 409 checksum mismatch. Omitting it skips the check and forces the write (last-write-wins).

```sql
UPDATE ovh.public_cloud_network.loadbalancer_pools
SET 
checksum = '{{ checksum }}',
target_spec = '{{ target_spec }}'
WHERE 
loadbalancer_id = '{{ loadbalancer_id }}' --required
AND pool_id = '{{ pool_id }}' --required
AND project_id = '{{ project_id }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
AND target_spec = '{{ target_spec }}' --required
RETURNING
id,
checksum,
created_at,
current_state,
current_tasks,
resource_status,
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

Deletes the pool.

```sql
DELETE FROM ovh.public_cloud_network.loadbalancer_pools
WHERE loadbalancer_id = '{{ loadbalancer_id }}' --required
AND pool_id = '{{ pool_id }}' --required
AND project_id = '{{ project_id }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
</Tabs>
