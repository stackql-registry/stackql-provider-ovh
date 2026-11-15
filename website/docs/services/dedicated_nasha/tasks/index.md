--- 
title: tasks
hide_title: false
hide_table_of_contents: false
keywords:
  - tasks
  - dedicated_nasha
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
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.dedicated_nasha.tasks" /></td></tr>
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
    <td><CopyableCode code="task_id" /></td>
    <td><code>integer</code></td>
    <td>id of the task (wire: taskId)</td>
</tr>
<tr>
    <td><CopyableCode code="partition_name" /></td>
    <td><code>string</code></td>
    <td>name of the partition (wire: partitionName)</td>
</tr>
<tr>
    <td><CopyableCode code="storage_name" /></td>
    <td><code>string</code></td>
    <td>the name of your service (wire: storageName)</td>
</tr>
<tr>
    <td><CopyableCode code="details" /></td>
    <td><code>string</code></td>
    <td>information about operation</td>
</tr>
<tr>
    <td><CopyableCode code="done_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>the date when the task finished (wire: doneDate)</td>
</tr>
<tr>
    <td><CopyableCode code="last_update" /></td>
    <td><code>string (date-time)</code></td>
    <td>last modification of task (wire: lastUpdate)</td>
</tr>
<tr>
    <td><CopyableCode code="operation" /></td>
    <td><code>string</code></td>
    <td>Task type of operation (backupRecursiveDestroy, clusterLeclercAclUpdate, clusterLeclercChangeServiceIp, clusterLeclercCustomSnapCreate, clusterLeclercCustomSnapDelete, clusterLeclercDeleteSnapshotDirectory, clusterLeclercDestroyNasContainer, clusterLeclercPartitionAdd, clusterLeclercPartitionDelete, clusterLeclercPartitionUpdate, clusterLeclercQuotaUpdate, clusterLeclercSetupNasContainer, clusterLeclercSnapshotUpdate, clusterLeclercZfsOptions, nasAclUpdate, nasDeleteSnapshotDirectory, nasPartitionAdd, nasPartitionDelete, nasPartitionUpdate, nasQuotaUpdate, remoteBackupRecursiveDestroy)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The actual state of the task (cancelled, customerError, doing, done, init, ovhError, todo)</td>
</tr>
<tr>
    <td><CopyableCode code="todo_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Insertion of task in the todo (wire: todoDate)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Storage task

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
    <td><CopyableCode code="task_id" /></td>
    <td><code>integer</code></td>
    <td>id of the task (wire: taskId)</td>
</tr>
<tr>
    <td><CopyableCode code="partition_name" /></td>
    <td><code>string</code></td>
    <td>name of the partition (wire: partitionName)</td>
</tr>
<tr>
    <td><CopyableCode code="storage_name" /></td>
    <td><code>string</code></td>
    <td>the name of your service (wire: storageName)</td>
</tr>
<tr>
    <td><CopyableCode code="details" /></td>
    <td><code>string</code></td>
    <td>information about operation</td>
</tr>
<tr>
    <td><CopyableCode code="done_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>the date when the task finished (wire: doneDate)</td>
</tr>
<tr>
    <td><CopyableCode code="last_update" /></td>
    <td><code>string (date-time)</code></td>
    <td>last modification of task (wire: lastUpdate)</td>
</tr>
<tr>
    <td><CopyableCode code="operation" /></td>
    <td><code>string</code></td>
    <td>Task type of operation (backupRecursiveDestroy, clusterLeclercAclUpdate, clusterLeclercChangeServiceIp, clusterLeclercCustomSnapCreate, clusterLeclercCustomSnapDelete, clusterLeclercDeleteSnapshotDirectory, clusterLeclercDestroyNasContainer, clusterLeclercPartitionAdd, clusterLeclercPartitionDelete, clusterLeclercPartitionUpdate, clusterLeclercQuotaUpdate, clusterLeclercSetupNasContainer, clusterLeclercSnapshotUpdate, clusterLeclercZfsOptions, nasAclUpdate, nasDeleteSnapshotDirectory, nasPartitionAdd, nasPartitionDelete, nasPartitionUpdate, nasQuotaUpdate, remoteBackupRecursiveDestroy)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The actual state of the task (cancelled, customerError, doing, done, init, ovhError, todo)</td>
</tr>
<tr>
    <td><CopyableCode code="todo_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Insertion of task in the todo (wire: todoDate)</td>
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
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-task_id"><code>task_id</code></a></td>
    <td></td>
    <td>Get this object properties</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-operation"><code>operation</code></a>, <a href="#parameter-status"><code>status</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>View task list</td>
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
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The internal name of your storage (wire: serviceName)</td>
</tr>
<tr id="parameter-task_id">
    <td><CopyableCode code="task_id" /></td>
    <td><code>integer</code></td>
    <td>id of the task (wire: taskId)</td>
</tr>
<tr id="parameter-operation">
    <td><CopyableCode code="operation" /></td>
    <td><code>string</code></td>
    <td>Filter the value of operation property (=)</td>
</tr>
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Filter the value of status property (=)</td>
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

Get this object properties

```sql
SELECT
task_id,
partition_name,
storage_name,
details,
done_date,
last_update,
operation,
status,
todo_date
FROM ovh.dedicated_nasha.tasks
WHERE service_name = '{{ service_name }}' -- required
AND task_id = '{{ task_id }}' -- required
;
```
</TabItem>
<TabItem value="list">

View task list

```sql
SELECT
task_id,
partition_name,
storage_name,
details,
done_date,
last_update,
operation,
status,
todo_date
FROM ovh.dedicated_nasha.tasks
WHERE service_name = '{{ service_name }}' -- required
AND operation = '{{ operation }}'
AND status = '{{ status }}'
AND x_pagination_mode = '{{ x_pagination_mode }}'
;
```
</TabItem>
</Tabs>
