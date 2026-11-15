--- 
title: tasks
hide_title: false
hide_table_of_contents: false
keywords:
  - tasks
  - dedicated_server
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
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.dedicated_server.tasks" /></td></tr>
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
    <td><CopyableCode code="planned_intervention_id" /></td>
    <td><code>integer</code></td>
    <td>ID of the planned intervention for this task (wire: plannedInterventionId)</td>
</tr>
<tr>
    <td><CopyableCode code="task_id" /></td>
    <td><code>integer</code></td>
    <td>the id of the task (wire: taskId)</td>
</tr>
<tr>
    <td><CopyableCode code="change_uuid" /></td>
    <td><code>string</code></td>
    <td>UUID of the change linked to this task (wire: changeUuid)</td>
</tr>
<tr>
    <td><CopyableCode code="comment" /></td>
    <td><code>string</code></td>
    <td>Details of this task</td>
</tr>
<tr>
    <td><CopyableCode code="done_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Completion date (wire: doneDate)</td>
</tr>
<tr>
    <td><CopyableCode code="function" /></td>
    <td><code>string</code></td>
    <td>Function name (INFRA_002_VirtualNetworkInterface, INFRA_002_VirtualNetworkInterface_group, INFRA_002_VirtualNetworkInterface_ungroup, INFRA_ONE_NETWORK_ONEAPI_VirtualNetworkInterface_group, INFRA_ONE_NETWORK_ONEAPI_VirtualNetworkInterface_ungroup, INFRA_ONE_NETWORK_VirtualNetworkInterface_group, INFRA_ONE_NETWORK_VirtualNetworkInterface_ungroup, addVirtualMac, addWindowSplaFromExistingSerial, applyBackupFtpAcls, applyBackupFtpQuota, bypassAntiDDosGame, changePasswordBackupFTP, changeRipeOrg, checkAndReleaseIp, createBackupFTP, createOrUpdateRipeOrg, createPrivateNetwork, disableFirewall, enableFirewall, genericMoveFloatingIp, hardReboot, hardware_update, ipmi/configureSGX, migrateBackupFTP, moveFloatingIp, moveVirtualMac, reagregateBlock, rebootPower8To, reinstallServer, releaseIp, removeBackupFTP, removeVirtualMac, requestAccessIPMI, resetIPMI, resetIPMISession, testIPMIhttp, testIPMIpassword, testIPMIping, virtualMacAdd, virtualMacDelete)</td>
</tr>
<tr>
    <td><CopyableCode code="last_update" /></td>
    <td><code>string (date-time)</code></td>
    <td>last update (wire: lastUpdate)</td>
</tr>
<tr>
    <td><CopyableCode code="need_schedule" /></td>
    <td><code>boolean</code></td>
    <td>Whether this task need to be scheduled or not (wire: needSchedule)</td>
</tr>
<tr>
    <td><CopyableCode code="note" /></td>
    <td><code>string</code></td>
    <td>Extra information about this task</td>
</tr>
<tr>
    <td><CopyableCode code="start_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Task Creation date (wire: startDate)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Task status (cancelled, customerError, doing, done, init, ovhError, todo)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>Task result tags output</td>
</tr>
<tr>
    <td><CopyableCode code="ticket_reference" /></td>
    <td><code>string</code></td>
    <td>Reference of the thread on the support tool (wire: ticketReference)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Server tasks

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
    <td><CopyableCode code="planned_intervention_id" /></td>
    <td><code>integer</code></td>
    <td>ID of the planned intervention for this task (wire: plannedInterventionId)</td>
</tr>
<tr>
    <td><CopyableCode code="task_id" /></td>
    <td><code>integer</code></td>
    <td>the id of the task (wire: taskId)</td>
</tr>
<tr>
    <td><CopyableCode code="change_uuid" /></td>
    <td><code>string</code></td>
    <td>UUID of the change linked to this task (wire: changeUuid)</td>
</tr>
<tr>
    <td><CopyableCode code="comment" /></td>
    <td><code>string</code></td>
    <td>Details of this task</td>
</tr>
<tr>
    <td><CopyableCode code="done_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Completion date (wire: doneDate)</td>
</tr>
<tr>
    <td><CopyableCode code="function" /></td>
    <td><code>string</code></td>
    <td>Function name (INFRA_002_VirtualNetworkInterface, INFRA_002_VirtualNetworkInterface_group, INFRA_002_VirtualNetworkInterface_ungroup, INFRA_ONE_NETWORK_ONEAPI_VirtualNetworkInterface_group, INFRA_ONE_NETWORK_ONEAPI_VirtualNetworkInterface_ungroup, INFRA_ONE_NETWORK_VirtualNetworkInterface_group, INFRA_ONE_NETWORK_VirtualNetworkInterface_ungroup, addVirtualMac, addWindowSplaFromExistingSerial, applyBackupFtpAcls, applyBackupFtpQuota, bypassAntiDDosGame, changePasswordBackupFTP, changeRipeOrg, checkAndReleaseIp, createBackupFTP, createOrUpdateRipeOrg, createPrivateNetwork, disableFirewall, enableFirewall, genericMoveFloatingIp, hardReboot, hardware_update, ipmi/configureSGX, migrateBackupFTP, moveFloatingIp, moveVirtualMac, reagregateBlock, rebootPower8To, reinstallServer, releaseIp, removeBackupFTP, removeVirtualMac, requestAccessIPMI, resetIPMI, resetIPMISession, testIPMIhttp, testIPMIpassword, testIPMIping, virtualMacAdd, virtualMacDelete)</td>
</tr>
<tr>
    <td><CopyableCode code="last_update" /></td>
    <td><code>string (date-time)</code></td>
    <td>last update (wire: lastUpdate)</td>
</tr>
<tr>
    <td><CopyableCode code="need_schedule" /></td>
    <td><code>boolean</code></td>
    <td>Whether this task need to be scheduled or not (wire: needSchedule)</td>
</tr>
<tr>
    <td><CopyableCode code="note" /></td>
    <td><code>string</code></td>
    <td>Extra information about this task</td>
</tr>
<tr>
    <td><CopyableCode code="start_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Task Creation date (wire: startDate)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Task status (cancelled, customerError, doing, done, init, ovhError, todo)</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>Task result tags output</td>
</tr>
<tr>
    <td><CopyableCode code="ticket_reference" /></td>
    <td><code>string</code></td>
    <td>Reference of the thread on the support tool (wire: ticketReference)</td>
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
    <td>Get a task. Returns the function, status and dates of a task of the server. needSchedule tells whether the task must be scheduled, and plannedInterventionId links it to a planned intervention.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-function"><code>function</code></a>, <a href="#parameter-status"><code>status</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List tasks. Returns the IDs of the tasks of the server, such as reboots, reinstallations and IP moves. Filter them by function or status.</td>
</tr>
<tr>
    <td><a href="#cancel"><CopyableCode code="cancel" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-taskId"><code>taskId</code></a></td>
    <td></td>
    <td>Cancel a task. Stops the progression of a task of the server, if possible. Not every task can be canceled: a task that is already done returns an error.</td>
</tr>
<tr>
    <td><a href="#schedule"><CopyableCode code="schedule" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-taskId"><code>taskId</code></a>, <a href="#parameter-hasPerformedBackup"><code>hasPerformedBackup</code></a>, <a href="#parameter-wantedBeginingDate"><code>wantedBeginingDate</code></a></td>
    <td></td>
    <td>Schedule an intervention. Schedules the intervention linked to a task at the wanted start date. The body must also state whether a backup of the data has been made. A task whose needSchedule is false cannot be scheduled. (Beta version)</td>
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
<tr id="parameter-serviceName">
    <td><CopyableCode code="serviceName" /></td>
    <td><code>string</code></td>
    <td>The internal name of your dedicated server</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The internal name of your dedicated server (wire: serviceName)</td>
</tr>
<tr id="parameter-taskId">
    <td><CopyableCode code="taskId" /></td>
    <td><code>integer</code></td>
    <td>the id of the task</td>
</tr>
<tr id="parameter-task_id">
    <td><CopyableCode code="task_id" /></td>
    <td><code>integer</code></td>
    <td>the id of the task (wire: taskId)</td>
</tr>
<tr id="parameter-function">
    <td><CopyableCode code="function" /></td>
    <td><code>string</code></td>
    <td>Filter the value of function property (=)</td>
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

Get a task. Returns the function, status and dates of a task of the server. needSchedule tells whether the task must be scheduled, and plannedInterventionId links it to a planned intervention.

```sql
SELECT
planned_intervention_id,
task_id,
change_uuid,
comment,
done_date,
function,
last_update,
need_schedule,
note,
start_date,
status,
tags,
ticket_reference
FROM ovh.dedicated_server.tasks
WHERE service_name = '{{ service_name }}' -- required
AND task_id = '{{ task_id }}' -- required
;
```
</TabItem>
<TabItem value="list">

List tasks. Returns the IDs of the tasks of the server, such as reboots, reinstallations and IP moves. Filter them by function or status.

```sql
SELECT
planned_intervention_id,
task_id,
change_uuid,
comment,
done_date,
function,
last_update,
need_schedule,
note,
start_date,
status,
tags,
ticket_reference
FROM ovh.dedicated_server.tasks
WHERE service_name = '{{ service_name }}' -- required
AND function = '{{ function }}'
AND status = '{{ status }}'
AND x_pagination_mode = '{{ x_pagination_mode }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="cancel"
    values={[
        { label: 'cancel', value: 'cancel' },
        { label: 'schedule', value: 'schedule' }
    ]}
>
<TabItem value="cancel">

Cancel a task. Stops the progression of a task of the server, if possible. Not every task can be canceled: a task that is already done returns an error.

```sql
EXEC ovh.dedicated_server.tasks.cancel 
@serviceName='{{ serviceName }}' --required, 
@taskId='{{ taskId }}' --required
;
```
</TabItem>
<TabItem value="schedule">

Schedule an intervention. Schedules the intervention linked to a task at the wanted start date. The body must also state whether a backup of the data has been made. A task whose needSchedule is false cannot be scheduled. (Beta version)

```sql
EXEC ovh.dedicated_server.tasks.schedule 
@serviceName='{{ serviceName }}' --required, 
@taskId='{{ taskId }}' --required 
@@json=
'{
"hasPerformedBackup": {{ hasPerformedBackup }}, 
"wantedBeginingDate": "{{ wantedBeginingDate }}"
}'
;
```
</TabItem>
</Tabs>
