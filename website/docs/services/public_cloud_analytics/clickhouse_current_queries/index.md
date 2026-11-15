--- 
title: clickhouse_current_queries
hide_title: false
hide_table_of_contents: false
keywords:
  - clickhouse_current_queries
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

Creates, updates, deletes, gets or lists a <code>clickhouse_current_queries</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="clickhouse_current_queries" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.public_cloud_analytics.clickhouse_current_queries" /></td></tr>
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
    <td><CopyableCode code="application_name" /></td>
    <td><code>string</code></td>
    <td>Name of the application that initiated the query (wire: applicationName)</td>
</tr>
<tr>
    <td><CopyableCode code="database_name" /></td>
    <td><code>string</code></td>
    <td>Name of the database the query is running on (wire: databaseName)</td>
</tr>
<tr>
    <td><CopyableCode code="user_name" /></td>
    <td><code>string</code></td>
    <td>Name of the user running the query (wire: userName)</td>
</tr>
<tr>
    <td><CopyableCode code="backend_started_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp when the backend process started (wire: backendStartedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="client_ip" /></td>
    <td><code>string (ipv4)</code></td>
    <td>IP address of the client (example: 192.0.2.0) (wire: clientIp)</td>
</tr>
<tr>
    <td><CopyableCode code="client_port" /></td>
    <td><code>integer</code></td>
    <td>Port of the client connection (wire: clientPort)</td>
</tr>
<tr>
    <td><CopyableCode code="pid" /></td>
    <td><code>integer</code></td>
    <td>Process ID of the connection</td>
</tr>
<tr>
    <td><CopyableCode code="query" /></td>
    <td><code>string</code></td>
    <td>SQL text of the currently running query</td>
</tr>
<tr>
    <td><CopyableCode code="query_duration" /></td>
    <td><code>number</code></td>
    <td>Duration of the query in seconds (wire: queryDuration)</td>
</tr>
<tr>
    <td><CopyableCode code="query_started_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp when the query started (wire: queryStartedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Current state of the connection (ACTIVE, DISABLED, FASTPATH_FUNCTION_CALL, IDLE, IDLE_IN_TRANSACTION, IDLE_IN_TRANSACTION_ABORTED)</td>
</tr>
<tr>
    <td><CopyableCode code="wait_event" /></td>
    <td><code>string</code></td>
    <td>Name of the wait event the connection is waiting on, if any (wire: waitEvent)</td>
</tr>
<tr>
    <td><CopyableCode code="wait_event_type" /></td>
    <td><code>string</code></td>
    <td>Type of wait event the connection is waiting on, if any (ACTIVITY, BUFFER_PIN, CLIENT, EXTENSION, IO, IPC, LOCK, LWLOCK, TIMEOUT) (wire: waitEventType)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A currently running query on a managed database service

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
    <td><CopyableCode code="application_name" /></td>
    <td><code>string</code></td>
    <td>Name of the application that initiated the query (wire: applicationName)</td>
</tr>
<tr>
    <td><CopyableCode code="database_name" /></td>
    <td><code>string</code></td>
    <td>Name of the database the query is running on (wire: databaseName)</td>
</tr>
<tr>
    <td><CopyableCode code="user_name" /></td>
    <td><code>string</code></td>
    <td>Name of the user running the query (wire: userName)</td>
</tr>
<tr>
    <td><CopyableCode code="backend_started_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp when the backend process started (wire: backendStartedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="client_ip" /></td>
    <td><code>string (ipv4)</code></td>
    <td>IP address of the client (example: 192.0.2.0) (wire: clientIp)</td>
</tr>
<tr>
    <td><CopyableCode code="client_port" /></td>
    <td><code>integer</code></td>
    <td>Port of the client connection (wire: clientPort)</td>
</tr>
<tr>
    <td><CopyableCode code="pid" /></td>
    <td><code>integer</code></td>
    <td>Process ID of the connection</td>
</tr>
<tr>
    <td><CopyableCode code="query" /></td>
    <td><code>string</code></td>
    <td>SQL text of the currently running query</td>
</tr>
<tr>
    <td><CopyableCode code="query_duration" /></td>
    <td><code>number</code></td>
    <td>Duration of the query in seconds (wire: queryDuration)</td>
</tr>
<tr>
    <td><CopyableCode code="query_started_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Timestamp when the query started (wire: queryStartedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Current state of the connection (ACTIVE, DISABLED, FASTPATH_FUNCTION_CALL, IDLE, IDLE_IN_TRANSACTION, IDLE_IN_TRANSACTION_ABORTED)</td>
</tr>
<tr>
    <td><CopyableCode code="wait_event" /></td>
    <td><code>string</code></td>
    <td>Name of the wait event the connection is waiting on, if any (wire: waitEvent)</td>
</tr>
<tr>
    <td><CopyableCode code="wait_event_type" /></td>
    <td><code>string</code></td>
    <td>Type of wait event the connection is waiting on, if any (ACTIVITY, BUFFER_PIN, CLIENT, EXTENSION, IO, IPC, LOCK, LWLOCK, TIMEOUT) (wire: waitEventType)</td>
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
    <td><a href="#parameter-query_pid"><code>query_pid</code></a>, <a href="#parameter-service_id"><code>service_id</code></a>, <a href="#parameter-project_id"><code>project_id</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-offset"><code>offset</code></a></td>
    <td>Returns the SQL text, state and duration of a running query, identified by its process ID. (Beta version)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_id"><code>service_id</code></a>, <a href="#parameter-project_id"><code>project_id</code></a></td>
    <td><a href="#parameter-x_pagination_cursor"><code>x_pagination_cursor</code></a>, <a href="#parameter-x_pagination_size"><code>x_pagination_size</code></a></td>
    <td>Returns the queries running on the service, with their client, user, state and duration. (Beta version)</td>
</tr>
<tr>
    <td><a href="#cancel"><CopyableCode code="cancel" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-queryPid"><code>queryPid</code></a>, <a href="#parameter-serviceId"><code>serviceId</code></a>, <a href="#parameter-project_id"><code>project_id</code></a></td>
    <td></td>
    <td>Cancels a running query gracefully. Set terminate to true to force its termination instead. (Beta version)</td>
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
<tr id="parameter-queryPid">
    <td><CopyableCode code="queryPid" /></td>
    <td><code>integer</code></td>
    <td>Query pid</td>
</tr>
<tr id="parameter-query_pid">
    <td><CopyableCode code="query_pid" /></td>
    <td><code>integer</code></td>
    <td>Query pid (wire: queryPid)</td>
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
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>Maximum number of queries to return</td>
</tr>
<tr id="parameter-offset">
    <td><CopyableCode code="offset" /></td>
    <td><code>integer</code></td>
    <td>Number of queries to skip before returning results</td>
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

Returns the SQL text, state and duration of a running query, identified by its process ID. (Beta version)

```sql
SELECT
application_name,
database_name,
user_name,
backend_started_at,
client_ip,
client_port,
pid,
query,
query_duration,
query_started_at,
state,
wait_event,
wait_event_type
FROM ovh.public_cloud_analytics.clickhouse_current_queries
WHERE query_pid = '{{ query_pid }}' -- required
AND service_id = '{{ service_id }}' -- required
AND project_id = '{{ project_id }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
AND limit = '{{ limit }}'
AND offset = '{{ offset }}'
;
```
</TabItem>
<TabItem value="list">

Returns the queries running on the service, with their client, user, state and duration. (Beta version)

```sql
SELECT
application_name,
database_name,
user_name,
backend_started_at,
client_ip,
client_port,
pid,
query,
query_duration,
query_started_at,
state,
wait_event,
wait_event_type
FROM ovh.public_cloud_analytics.clickhouse_current_queries
WHERE service_id = '{{ service_id }}' -- required
AND project_id = '{{ project_id }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
AND x_pagination_cursor = '{{ x_pagination_cursor }}'
AND x_pagination_size = '{{ x_pagination_size }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="cancel"
    values={[
        { label: 'cancel', value: 'cancel' }
    ]}
>
<TabItem value="cancel">

Cancels a running query gracefully. Set terminate to true to force its termination instead. (Beta version)

```sql
EXEC ovh.public_cloud_analytics.clickhouse_current_queries.cancel 
@queryPid='{{ queryPid }}' --required, 
@serviceId='{{ serviceId }}' --required, 
@project_id='{{ project_id }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set 
@@json=
'{
"terminate": {{ terminate }}
}'
;
```
</TabItem>
</Tabs>
