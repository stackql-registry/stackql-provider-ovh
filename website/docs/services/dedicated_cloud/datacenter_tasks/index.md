--- 
title: datacenter_tasks
hide_title: false
hide_table_of_contents: false
keywords:
  - datacenter_tasks
  - dedicated_cloud
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

Creates, updates, deletes, gets or lists a <code>datacenter_tasks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="datacenter_tasks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.dedicated_cloud.datacenter_tasks" /></td></tr>
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
    <td>Task name</td>
</tr>
<tr>
    <td><CopyableCode code="datacenter_id" /></td>
    <td><code>integer</code></td>
    <td>datacenterId of the associated dedicatedCloud.Datacenter object (wire: datacenterId)</td>
</tr>
<tr>
    <td><CopyableCode code="filer_id" /></td>
    <td><code>integer</code></td>
    <td>filerId of the associated dedicatedCloud.Filer object (wire: filerId)</td>
</tr>
<tr>
    <td><CopyableCode code="host_id" /></td>
    <td><code>integer</code></td>
    <td>hostId of the associated dedicatedCloud.Host object (wire: hostId)</td>
</tr>
<tr>
    <td><CopyableCode code="network_access_id" /></td>
    <td><code>integer</code></td>
    <td>networkAccessId of the associated dedicatedCloud.AllowedNetwork object (wire: networkAccessId)</td>
</tr>
<tr>
    <td><CopyableCode code="order_id" /></td>
    <td><code>integer</code></td>
    <td>orderId of the associated billing.Order object (wire: orderId)</td>
</tr>
<tr>
    <td><CopyableCode code="parent_task_id" /></td>
    <td><code>integer</code></td>
    <td>taskId of the parent dedicatedCloud.Task object (wire: parentTaskId)</td>
</tr>
<tr>
    <td><CopyableCode code="task_id" /></td>
    <td><code>integer</code></td>
    <td>Task id (wire: taskId)</td>
</tr>
<tr>
    <td><CopyableCode code="user_id" /></td>
    <td><code>integer</code></td>
    <td>userId of the associated dedicatedCloud.User object (wire: userId)</td>
</tr>
<tr>
    <td><CopyableCode code="vlan_id" /></td>
    <td><code>integer</code></td>
    <td>vlanId of the parent dedicatedCloud.Vlan object (wire: vlanId)</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>Creator of the task (wire: createdBy)</td>
</tr>
<tr>
    <td><CopyableCode code="created_from" /></td>
    <td><code>string</code></td>
    <td>Origin of the task (wire: createdFrom)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Current progress description</td>
</tr>
<tr>
    <td><CopyableCode code="end_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Task end date (wire: endDate)</td>
</tr>
<tr>
    <td><CopyableCode code="execution_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Task execution date (wire: executionDate)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modification_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Task last modification date (wire: lastModificationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="maintenance_date_from" /></td>
    <td><code>string (date-time)</code></td>
    <td>Maintenance task min allowed execution date (wire: maintenanceDateFrom)</td>
</tr>
<tr>
    <td><CopyableCode code="maintenance_date_to" /></td>
    <td><code>string (date-time)</code></td>
    <td>Maintenance task max allowed execution date (wire: maintenanceDateTo)</td>
</tr>
<tr>
    <td><CopyableCode code="network" /></td>
    <td><code>string</code></td>
    <td>network of the associated dedicatedCloud.Ip object</td>
</tr>
<tr>
    <td><CopyableCode code="progress" /></td>
    <td><code>integer</code></td>
    <td>Current progress</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Current Task state (canceled, doing, done, error, fixing, toCancel, toCreate, todo, unknown, waitingForChilds, waitingTodo)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Task type</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Operation

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
    <td>Task name</td>
</tr>
<tr>
    <td><CopyableCode code="datacenter_id" /></td>
    <td><code>integer</code></td>
    <td>datacenterId of the associated dedicatedCloud.Datacenter object (wire: datacenterId)</td>
</tr>
<tr>
    <td><CopyableCode code="filer_id" /></td>
    <td><code>integer</code></td>
    <td>filerId of the associated dedicatedCloud.Filer object (wire: filerId)</td>
</tr>
<tr>
    <td><CopyableCode code="host_id" /></td>
    <td><code>integer</code></td>
    <td>hostId of the associated dedicatedCloud.Host object (wire: hostId)</td>
</tr>
<tr>
    <td><CopyableCode code="network_access_id" /></td>
    <td><code>integer</code></td>
    <td>networkAccessId of the associated dedicatedCloud.AllowedNetwork object (wire: networkAccessId)</td>
</tr>
<tr>
    <td><CopyableCode code="order_id" /></td>
    <td><code>integer</code></td>
    <td>orderId of the associated billing.Order object (wire: orderId)</td>
</tr>
<tr>
    <td><CopyableCode code="parent_task_id" /></td>
    <td><code>integer</code></td>
    <td>taskId of the parent dedicatedCloud.Task object (wire: parentTaskId)</td>
</tr>
<tr>
    <td><CopyableCode code="task_id" /></td>
    <td><code>integer</code></td>
    <td>Task id (wire: taskId)</td>
</tr>
<tr>
    <td><CopyableCode code="user_id" /></td>
    <td><code>integer</code></td>
    <td>userId of the associated dedicatedCloud.User object (wire: userId)</td>
</tr>
<tr>
    <td><CopyableCode code="vlan_id" /></td>
    <td><code>integer</code></td>
    <td>vlanId of the parent dedicatedCloud.Vlan object (wire: vlanId)</td>
</tr>
<tr>
    <td><CopyableCode code="created_by" /></td>
    <td><code>string</code></td>
    <td>Creator of the task (wire: createdBy)</td>
</tr>
<tr>
    <td><CopyableCode code="created_from" /></td>
    <td><code>string</code></td>
    <td>Origin of the task (wire: createdFrom)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Current progress description</td>
</tr>
<tr>
    <td><CopyableCode code="end_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Task end date (wire: endDate)</td>
</tr>
<tr>
    <td><CopyableCode code="execution_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Task execution date (wire: executionDate)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modification_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Task last modification date (wire: lastModificationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="maintenance_date_from" /></td>
    <td><code>string (date-time)</code></td>
    <td>Maintenance task min allowed execution date (wire: maintenanceDateFrom)</td>
</tr>
<tr>
    <td><CopyableCode code="maintenance_date_to" /></td>
    <td><code>string (date-time)</code></td>
    <td>Maintenance task max allowed execution date (wire: maintenanceDateTo)</td>
</tr>
<tr>
    <td><CopyableCode code="network" /></td>
    <td><code>string</code></td>
    <td>network of the associated dedicatedCloud.Ip object</td>
</tr>
<tr>
    <td><CopyableCode code="progress" /></td>
    <td><code>integer</code></td>
    <td>Current progress</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Current Task state (canceled, doing, done, error, fixing, toCancel, toCreate, todo, unknown, waitingForChilds, waitingTodo)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Task type</td>
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
    <td><a href="#parameter-datacenter_id"><code>datacenter_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-task_id"><code>task_id</code></a></td>
    <td></td>
    <td>Get a task</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-datacenter_id"><code>datacenter_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-state"><code>state</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List datacenter tasks</td>
</tr>
<tr>
    <td><a href="#change_maintenance_execution_date"><CopyableCode code="change_maintenance_execution_date" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-datacenterId"><code>datacenterId</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-taskId"><code>taskId</code></a>, <a href="#parameter-executionDate"><code>executionDate</code></a></td>
    <td></td>
    <td>Reschedule a maintenance task. Changes the execution date of a maintenance task. Choose a date between the `maintenanceDateFrom` and `maintenanceDateTo` of the task.</td>
</tr>
<tr>
    <td><a href="#reset_task_state"><CopyableCode code="reset_task_state" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-datacenterId"><code>datacenterId</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-taskId"><code>taskId</code></a>, <a href="#parameter-reason"><code>reason</code></a></td>
    <td></td>
    <td>Retry a failed task</td>
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
<tr id="parameter-datacenterId">
    <td><CopyableCode code="datacenterId" /></td>
    <td><code>integer</code></td>
    <td>Id of the Datacenter</td>
</tr>
<tr id="parameter-datacenter_id">
    <td><CopyableCode code="datacenter_id" /></td>
    <td><code>integer</code></td>
    <td>Id of the Datacenter (wire: datacenterId)</td>
</tr>
<tr id="parameter-serviceName">
    <td><CopyableCode code="serviceName" /></td>
    <td><code>string</code></td>
    <td>Domain of the service</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>Domain of the service (wire: serviceName)</td>
</tr>
<tr id="parameter-taskId">
    <td><CopyableCode code="taskId" /></td>
    <td><code>integer</code></td>
    <td>Task id</td>
</tr>
<tr id="parameter-task_id">
    <td><CopyableCode code="task_id" /></td>
    <td><code>integer</code></td>
    <td>Task id (wire: taskId)</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Filter the value of name property (like)</td>
</tr>
<tr id="parameter-state">
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Filter the value of state property (=)</td>
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

Get a task

```sql
SELECT
name,
datacenter_id,
filer_id,
host_id,
network_access_id,
order_id,
parent_task_id,
task_id,
user_id,
vlan_id,
created_by,
created_from,
description,
end_date,
execution_date,
last_modification_date,
maintenance_date_from,
maintenance_date_to,
network,
progress,
state,
type
FROM ovh.dedicated_cloud.datacenter_tasks
WHERE datacenter_id = '{{ datacenter_id }}' -- required
AND service_name = '{{ service_name }}' -- required
AND task_id = '{{ task_id }}' -- required
;
```
</TabItem>
<TabItem value="list">

List datacenter tasks

```sql
SELECT
name,
datacenter_id,
filer_id,
host_id,
network_access_id,
order_id,
parent_task_id,
task_id,
user_id,
vlan_id,
created_by,
created_from,
description,
end_date,
execution_date,
last_modification_date,
maintenance_date_from,
maintenance_date_to,
network,
progress,
state,
type
FROM ovh.dedicated_cloud.datacenter_tasks
WHERE datacenter_id = '{{ datacenter_id }}' -- required
AND service_name = '{{ service_name }}' -- required
AND name = '{{ name }}'
AND state = '{{ state }}'
AND x_pagination_mode = '{{ x_pagination_mode }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="change_maintenance_execution_date"
    values={[
        { label: 'change_maintenance_execution_date', value: 'change_maintenance_execution_date' },
        { label: 'reset_task_state', value: 'reset_task_state' }
    ]}
>
<TabItem value="change_maintenance_execution_date">

Reschedule a maintenance task. Changes the execution date of a maintenance task. Choose a date between the `maintenanceDateFrom` and `maintenanceDateTo` of the task.

```sql
EXEC ovh.dedicated_cloud.datacenter_tasks.change_maintenance_execution_date 
@datacenterId='{{ datacenterId }}' --required, 
@serviceName='{{ serviceName }}' --required, 
@taskId='{{ taskId }}' --required 
@@json=
'{
"executionDate": "{{ executionDate }}"
}'
;
```
</TabItem>
<TabItem value="reset_task_state">

Retry a failed task

```sql
EXEC ovh.dedicated_cloud.datacenter_tasks.reset_task_state 
@datacenterId='{{ datacenterId }}' --required, 
@serviceName='{{ serviceName }}' --required, 
@taskId='{{ taskId }}' --required 
@@json=
'{
"reason": "{{ reason }}"
}'
;
```
</TabItem>
</Tabs>
