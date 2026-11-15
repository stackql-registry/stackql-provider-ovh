--- 
title: global_tasks
hide_title: false
hide_table_of_contents: false
keywords:
  - global_tasks
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

Creates, updates, deletes, gets or lists a <code>global_tasks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="global_tasks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.dedicated_cloud.global_tasks" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

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
    <td><CopyableCode code="value" /></td>
    <td><code>integer</code></td>
    <td></td>
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
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-datacenter_id"><code>datacenter_id</code></a>, <a href="#parameter-end_date.from"><code>end_date.from</code></a>, <a href="#parameter-end_date.to"><code>end_date.to</code></a>, <a href="#parameter-execution_date.from"><code>execution_date.from</code></a>, <a href="#parameter-execution_date.to"><code>execution_date.to</code></a>, <a href="#parameter-filer_id"><code>filer_id</code></a>, <a href="#parameter-host_id"><code>host_id</code></a>, <a href="#parameter-last_modification_date.from"><code>last_modification_date.from</code></a>, <a href="#parameter-last_modification_date.to"><code>last_modification_date.to</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-network_access_id"><code>network_access_id</code></a>, <a href="#parameter-order_id"><code>order_id</code></a>, <a href="#parameter-parent_task_id"><code>parent_task_id</code></a>, <a href="#parameter-state"><code>state</code></a>, <a href="#parameter-user_id"><code>user_id</code></a>, <a href="#parameter-vlan_id"><code>vlan_id</code></a></td>
    <td>List all tasks. Returns the IDs of the tasks of the service and its resources. Filter by datacenter, host, datastore, user, VLAN, state, name or date.</td>
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
    <td>Domain of the service (wire: serviceName)</td>
</tr>
<tr id="parameter-datacenter_id">
    <td><CopyableCode code="datacenter_id" /></td>
    <td><code>integer</code></td>
    <td>Filter the tasks by datacenter Id (wire: datacenterId)</td>
</tr>
<tr id="parameter-end_date.from">
    <td><CopyableCode code="end_date.from" /></td>
    <td><code>string (date)</code></td>
    <td>Filter the tasks by end date (&gt;=) (wire: endDate.from)</td>
</tr>
<tr id="parameter-end_date.to">
    <td><CopyableCode code="end_date.to" /></td>
    <td><code>string (date)</code></td>
    <td>Filter the tasks by end date (&lt;=) (wire: endDate.to)</td>
</tr>
<tr id="parameter-execution_date.from">
    <td><CopyableCode code="execution_date.from" /></td>
    <td><code>string (date-time)</code></td>
    <td>Filter the tasks by execution date (&gt;=) (wire: executionDate.from)</td>
</tr>
<tr id="parameter-execution_date.to">
    <td><CopyableCode code="execution_date.to" /></td>
    <td><code>string (date-time)</code></td>
    <td>Filter the tasks by execution date (&lt;=) (wire: executionDate.to)</td>
</tr>
<tr id="parameter-filer_id">
    <td><CopyableCode code="filer_id" /></td>
    <td><code>integer</code></td>
    <td>Filter the tasks by filer Id (wire: filerId)</td>
</tr>
<tr id="parameter-host_id">
    <td><CopyableCode code="host_id" /></td>
    <td><code>integer</code></td>
    <td>Filter the tasks by host Id (wire: hostId)</td>
</tr>
<tr id="parameter-last_modification_date.from">
    <td><CopyableCode code="last_modification_date.from" /></td>
    <td><code>string (date-time)</code></td>
    <td>Filter the tasks by last modification date (&gt;=) (wire: lastModificationDate.from)</td>
</tr>
<tr id="parameter-last_modification_date.to">
    <td><CopyableCode code="last_modification_date.to" /></td>
    <td><code>string (date-time)</code></td>
    <td>Filter the tasks by last modification date (&lt;=) (wire: lastModificationDate.to)</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Filter the tasks by name</td>
</tr>
<tr id="parameter-network_access_id">
    <td><CopyableCode code="network_access_id" /></td>
    <td><code>integer</code></td>
    <td>Filter the tasks by network access Id (wire: networkAccessId)</td>
</tr>
<tr id="parameter-order_id">
    <td><CopyableCode code="order_id" /></td>
    <td><code>integer</code></td>
    <td>Filter the tasks by order Id (wire: orderId)</td>
</tr>
<tr id="parameter-parent_task_id">
    <td><CopyableCode code="parent_task_id" /></td>
    <td><code>integer</code></td>
    <td>Filter the tasks by parent task Id (wire: parentTaskId)</td>
</tr>
<tr id="parameter-state">
    <td><CopyableCode code="state" /></td>
    <td><code>array</code></td>
    <td>Filter the tasks by state</td>
</tr>
<tr id="parameter-user_id">
    <td><CopyableCode code="user_id" /></td>
    <td><code>integer</code></td>
    <td>Filter the tasks by user Id (wire: userId)</td>
</tr>
<tr id="parameter-vlan_id">
    <td><CopyableCode code="vlan_id" /></td>
    <td><code>integer</code></td>
    <td>Filter the tasks by vlan Id (wire: vlanId)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

List all tasks. Returns the IDs of the tasks of the service and its resources. Filter by datacenter, host, datastore, user, VLAN, state, name or date.

```sql
SELECT
value
FROM ovh.dedicated_cloud.global_tasks
WHERE service_name = '{{ service_name }}' -- required
AND datacenter_id = '{{ datacenter_id }}'
AND end_date.from = '{{ end_date.from }}'
AND end_date.to = '{{ end_date.to }}'
AND execution_date.from = '{{ execution_date.from }}'
AND execution_date.to = '{{ execution_date.to }}'
AND filer_id = '{{ filer_id }}'
AND host_id = '{{ host_id }}'
AND last_modification_date.from = '{{ last_modification_date.from }}'
AND last_modification_date.to = '{{ last_modification_date.to }}'
AND name = '{{ name }}'
AND network_access_id = '{{ network_access_id }}'
AND order_id = '{{ order_id }}'
AND parent_task_id = '{{ parent_task_id }}'
AND state = '{{ state }}'
AND user_id = '{{ user_id }}'
AND vlan_id = '{{ vlan_id }}'
;
```
</TabItem>
</Tabs>
