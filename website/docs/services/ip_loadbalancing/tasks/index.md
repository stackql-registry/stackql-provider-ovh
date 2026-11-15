--- 
title: tasks
hide_title: false
hide_table_of_contents: false
keywords:
  - tasks
  - ip_loadbalancing
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
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.ip_loadbalancing.tasks" /></td></tr>
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
    <td>Id of the operation</td>
</tr>
<tr>
    <td><CopyableCode code="action" /></td>
    <td><code>string</code></td>
    <td>Operation type (deleteIplb, deployIplb, install, installIplb, installZone, orderFreeCertificate, orderPaidCertificate, orderSsl, refreshIplb, releaseIplb, releaseIplbZone, reopenIplb, suspendIplb, suspendZone, switchToIplbNextGenerationApi, vrackAttach, vrackDetach)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date of your operation (wire: creationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="done_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Done date of your operation (wire: doneDate)</td>
</tr>
<tr>
    <td><CopyableCode code="progress" /></td>
    <td><code>integer</code></td>
    <td>Operation progress percentage</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Current status of your operation (blocked, cancelled, doing, done, error, todo)</td>
</tr>
<tr>
    <td><CopyableCode code="zones" /></td>
    <td><code>array</code></td>
    <td>Zone of your Load Balancer which are updated by current Task</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

IP Load Balancing Operations

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
    <td>Id of the operation</td>
</tr>
<tr>
    <td><CopyableCode code="action" /></td>
    <td><code>string</code></td>
    <td>Operation type (deleteIplb, deployIplb, install, installIplb, installZone, orderFreeCertificate, orderPaidCertificate, orderSsl, refreshIplb, releaseIplb, releaseIplbZone, reopenIplb, suspendIplb, suspendZone, switchToIplbNextGenerationApi, vrackAttach, vrackDetach)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date of your operation (wire: creationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="done_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Done date of your operation (wire: doneDate)</td>
</tr>
<tr>
    <td><CopyableCode code="progress" /></td>
    <td><code>integer</code></td>
    <td>Operation progress percentage</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Current status of your operation (blocked, cancelled, doing, done, error, todo)</td>
</tr>
<tr>
    <td><CopyableCode code="zones" /></td>
    <td><code>array</code></td>
    <td>Zone of your Load Balancer which are updated by current Task</td>
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
    <td>Get a task</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-action"><code>action</code></a>, <a href="#parameter-creation_date.from"><code>creation_date.from</code></a>, <a href="#parameter-creation_date.to"><code>creation_date.to</code></a>, <a href="#parameter-done_date.from"><code>done_date.from</code></a>, <a href="#parameter-done_date.to"><code>done_date.to</code></a>, <a href="#parameter-status"><code>status</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List tasks</td>
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
    <td>Id of the operation</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The internal name of your IP load balancing (wire: serviceName)</td>
</tr>
<tr id="parameter-action">
    <td><CopyableCode code="action" /></td>
    <td><code>string</code></td>
    <td>Filter the value of action property (=)</td>
</tr>
<tr id="parameter-creation_date.from">
    <td><CopyableCode code="creation_date.from" /></td>
    <td><code>string (date-time)</code></td>
    <td>Filter the value of creationDate property (&gt;=) (wire: creationDate.from)</td>
</tr>
<tr id="parameter-creation_date.to">
    <td><CopyableCode code="creation_date.to" /></td>
    <td><code>string (date-time)</code></td>
    <td>Filter the value of creationDate property (&lt;=) (wire: creationDate.to)</td>
</tr>
<tr id="parameter-done_date.from">
    <td><CopyableCode code="done_date.from" /></td>
    <td><code>string (date-time)</code></td>
    <td>Filter the value of doneDate property (&gt;=) (wire: doneDate.from)</td>
</tr>
<tr id="parameter-done_date.to">
    <td><CopyableCode code="done_date.to" /></td>
    <td><code>string (date-time)</code></td>
    <td>Filter the value of doneDate property (&lt;=) (wire: doneDate.to)</td>
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

Get a task

```sql
SELECT
id,
action,
creation_date,
done_date,
progress,
status,
zones
FROM ovh.ip_loadbalancing.tasks
WHERE id = '{{ id }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List tasks

```sql
SELECT
id,
action,
creation_date,
done_date,
progress,
status,
zones
FROM ovh.ip_loadbalancing.tasks
WHERE service_name = '{{ service_name }}' -- required
AND action = '{{ action }}'
AND creation_date.from = '{{ creation_date.from }}'
AND creation_date.to = '{{ creation_date.to }}'
AND done_date.from = '{{ done_date.from }}'
AND done_date.to = '{{ done_date.to }}'
AND status = '{{ status }}'
AND x_pagination_mode = '{{ x_pagination_mode }}'
;
```
</TabItem>
</Tabs>
