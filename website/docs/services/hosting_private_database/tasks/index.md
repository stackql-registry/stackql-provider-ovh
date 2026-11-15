--- 
title: tasks
hide_title: false
hide_table_of_contents: false
keywords:
  - tasks
  - hosting_private_database
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

Creates, updates, deletes, gets or lists a <code>tasks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="tasks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.hosting_private_database.tasks" /></td></tr>
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
    <td><code>integer</code></td>
    <td>The id of the task</td>
</tr>
<tr>
    <td><CopyableCode code="dump_id" /></td>
    <td><code>integer</code></td>
    <td>DumpId on which the task is working (wire: dumpId)</td>
</tr>
<tr>
    <td><CopyableCode code="database_name" /></td>
    <td><code>string</code></td>
    <td>Database name on which the task is working (wire: databaseName)</td>
</tr>
<tr>
    <td><CopyableCode code="user_name" /></td>
    <td><code>string</code></td>
    <td>User name on which the task is working (wire: userName)</td>
</tr>
<tr>
    <td><CopyableCode code="done_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Completion date (wire: doneDate)</td>
</tr>
<tr>
    <td><CopyableCode code="function" /></td>
    <td><code>string</code></td>
    <td>Function name (abuse, changeFtpPassword, changeRam, changeVersion, configuration/update, create, database/copy, database/copyRestore, database/create, database/delete, database/dump, database/dump/delete, database/extension/create, database/extension/delete, database/import, database/restore, database/wizard, delete, grant/create, grant/delete, grant/update, install, overquota/in, overquota/out, quotaRefresh, refresh, reopen, restart, start, stop, suspend, user/changePassword, user/create, user/delete, webhostingNetwork/disable, webhostingNetwork/enable, whitelist/create, whitelist/delete, whitelist/update)</td>
</tr>
<tr>
    <td><CopyableCode code="last_update" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last update (wire: lastUpdate)</td>
</tr>
<tr>
    <td><CopyableCode code="start_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Task creation date (wire: startDate)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Task status (cancelled, doing, done, error, todo)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Web Cloud Database task

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
    <td><code>integer</code></td>
    <td>The id of the task</td>
</tr>
<tr>
    <td><CopyableCode code="dump_id" /></td>
    <td><code>integer</code></td>
    <td>DumpId on which the task is working (wire: dumpId)</td>
</tr>
<tr>
    <td><CopyableCode code="database_name" /></td>
    <td><code>string</code></td>
    <td>Database name on which the task is working (wire: databaseName)</td>
</tr>
<tr>
    <td><CopyableCode code="user_name" /></td>
    <td><code>string</code></td>
    <td>User name on which the task is working (wire: userName)</td>
</tr>
<tr>
    <td><CopyableCode code="done_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Completion date (wire: doneDate)</td>
</tr>
<tr>
    <td><CopyableCode code="function" /></td>
    <td><code>string</code></td>
    <td>Function name (abuse, changeFtpPassword, changeRam, changeVersion, configuration/update, create, database/copy, database/copyRestore, database/create, database/delete, database/dump, database/dump/delete, database/extension/create, database/extension/delete, database/import, database/restore, database/wizard, delete, grant/create, grant/delete, grant/update, install, overquota/in, overquota/out, quotaRefresh, refresh, reopen, restart, start, stop, suspend, user/changePassword, user/create, user/delete, webhostingNetwork/disable, webhostingNetwork/enable, whitelist/create, whitelist/delete, whitelist/update)</td>
</tr>
<tr>
    <td><CopyableCode code="last_update" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last update (wire: lastUpdate)</td>
</tr>
<tr>
    <td><CopyableCode code="start_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Task creation date (wire: startDate)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Task status (cancelled, doing, done, error, todo)</td>
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
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Returns the function, status and dates of the task, and the database, user or dump it works on.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-function"><code>function</code></a>, <a href="#parameter-status"><code>status</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>Returns the IDs of the tasks of the service.</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>integer</code></td>
    <td>Id</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>Service name (wire: serviceName)</td>
</tr>
<tr id="parameter-function">
    <td><CopyableCode code="function" /></td>
    <td><code>string</code></td>
    <td>Filter the value of function property</td>
</tr>
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Filter the value of status property</td>
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

Returns the function, status and dates of the task, and the database, user or dump it works on.

```sql
SELECT
id,
dump_id,
database_name,
user_name,
done_date,
function,
last_update,
start_date,
status
FROM ovh.hosting_private_database.tasks
WHERE id = '{{ id }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns the IDs of the tasks of the service.

```sql
SELECT
id,
dump_id,
database_name,
user_name,
done_date,
function,
last_update,
start_date,
status
FROM ovh.hosting_private_database.tasks
WHERE service_name = '{{ service_name }}' -- required
AND function = '{{ function }}'
AND status = '{{ status }}'
AND x_pagination_mode = '{{ x_pagination_mode }}'
;
```
</TabItem>
</Tabs>
