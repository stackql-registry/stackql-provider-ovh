--- 
title: savings_plans_subscribeds
hide_title: false
hide_table_of_contents: false
keywords:
  - savings_plans_subscribeds
  - services
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

Creates, updates, deletes, gets or lists a <code>savings_plans_subscribeds</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="savings_plans_subscribeds" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.services.savings_plans_subscribeds" /></td></tr>
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
    <td>Unique identifier of the Savings Plan</td>
</tr>
<tr>
    <td><CopyableCode code="offer_id" /></td>
    <td><code>string</code></td>
    <td>Savings Plan commercial offer identifier (wire: offerId)</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>Custom display name, used in invoices (wire: displayName)</td>
</tr>
<tr>
    <td><CopyableCode code="end_date" /></td>
    <td><code>string (date)</code></td>
    <td>End date of the Savings Plan (wire: endDate)</td>
</tr>
<tr>
    <td><CopyableCode code="flavor" /></td>
    <td><code>string</code></td>
    <td>Savings Plan flavor</td>
</tr>
<tr>
    <td><CopyableCode code="period" /></td>
    <td><code>string (duration)</code></td>
    <td>Periodicity of the Savings Plan</td>
</tr>
<tr>
    <td><CopyableCode code="period_end_action" /></td>
    <td><code>string</code></td>
    <td>Action performed when reaching the end of the period (REACTIVATE, TERMINATE) (wire: periodEndAction)</td>
</tr>
<tr>
    <td><CopyableCode code="period_end_date" /></td>
    <td><code>string (date)</code></td>
    <td>End date of the current period (wire: periodEndDate)</td>
</tr>
<tr>
    <td><CopyableCode code="period_start_date" /></td>
    <td><code>string (date)</code></td>
    <td>Start date of the current period (wire: periodStartDate)</td>
</tr>
<tr>
    <td><CopyableCode code="planned_changes" /></td>
    <td><code>array</code></td>
    <td>Changes planned on the Savings Plan (wire: plannedChanges)</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>integer</code></td>
    <td>Size of the Savings Plan</td>
</tr>
<tr>
    <td><CopyableCode code="start_date" /></td>
    <td><code>string (date)</code></td>
    <td>Start date of the Savings Plan (wire: startDate)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of the Savings Plan (ACTIVE, PENDING, TERMINATED)</td>
</tr>
<tr>
    <td><CopyableCode code="termination_date" /></td>
    <td><code>string (date)</code></td>
    <td>Date at which the Savings Plan is scheduled to be terminated. A null value means the Savings Plan is not scheduled for termination (wire: terminationDate)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Savings Plan subscribed

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
    <td>Unique identifier of the Savings Plan</td>
</tr>
<tr>
    <td><CopyableCode code="offer_id" /></td>
    <td><code>string</code></td>
    <td>Savings Plan commercial offer identifier (wire: offerId)</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>Custom display name, used in invoices (wire: displayName)</td>
</tr>
<tr>
    <td><CopyableCode code="end_date" /></td>
    <td><code>string (date)</code></td>
    <td>End date of the Savings Plan (wire: endDate)</td>
</tr>
<tr>
    <td><CopyableCode code="flavor" /></td>
    <td><code>string</code></td>
    <td>Savings Plan flavor</td>
</tr>
<tr>
    <td><CopyableCode code="period" /></td>
    <td><code>string (duration)</code></td>
    <td>Periodicity of the Savings Plan</td>
</tr>
<tr>
    <td><CopyableCode code="period_end_action" /></td>
    <td><code>string</code></td>
    <td>Action performed when reaching the end of the period (REACTIVATE, TERMINATE) (wire: periodEndAction)</td>
</tr>
<tr>
    <td><CopyableCode code="period_end_date" /></td>
    <td><code>string (date)</code></td>
    <td>End date of the current period (wire: periodEndDate)</td>
</tr>
<tr>
    <td><CopyableCode code="period_start_date" /></td>
    <td><code>string (date)</code></td>
    <td>Start date of the current period (wire: periodStartDate)</td>
</tr>
<tr>
    <td><CopyableCode code="planned_changes" /></td>
    <td><code>array</code></td>
    <td>Changes planned on the Savings Plan (wire: plannedChanges)</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>integer</code></td>
    <td>Size of the Savings Plan</td>
</tr>
<tr>
    <td><CopyableCode code="start_date" /></td>
    <td><code>string (date)</code></td>
    <td>Start date of the Savings Plan (wire: startDate)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of the Savings Plan (ACTIVE, PENDING, TERMINATED)</td>
</tr>
<tr>
    <td><CopyableCode code="termination_date" /></td>
    <td><code>string (date)</code></td>
    <td>Date at which the Savings Plan is scheduled to be terminated. A null value means the Savings Plan is not scheduled for termination (wire: terminationDate)</td>
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
    <td><a href="#parameter-savings_plan_id"><code>savings_plan_id</code></a>, <a href="#parameter-service_id"><code>service_id</code></a></td>
    <td></td>
    <td>Fetch a subscribed Savings Plan</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_id"><code>service_id</code></a></td>
    <td></td>
    <td>List subscribed Savings Plans</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-savings_plan_id"><code>savings_plan_id</code></a>, <a href="#parameter-service_id"><code>service_id</code></a>, <a href="#parameter-display_name"><code>display_name</code></a></td>
    <td></td>
    <td>Update a subscribed Savings Plan</td>
</tr>
<tr>
    <td><a href="#change_period_end_action"><CopyableCode code="change_period_end_action" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-savingsPlanId"><code>savingsPlanId</code></a>, <a href="#parameter-serviceId"><code>serviceId</code></a>, <a href="#parameter-periodEndAction"><code>periodEndAction</code></a></td>
    <td></td>
    <td>Change the action occurring at the end of the Savings Plan period</td>
</tr>
<tr>
    <td><a href="#change_size"><CopyableCode code="change_size" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-savingsPlanId"><code>savingsPlanId</code></a>, <a href="#parameter-serviceId"><code>serviceId</code></a>, <a href="#parameter-size"><code>size</code></a></td>
    <td></td>
    <td>Resize the Savings Plan</td>
</tr>
<tr>
    <td><a href="#terminate"><CopyableCode code="terminate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-savingsPlanId"><code>savingsPlanId</code></a>, <a href="#parameter-serviceId"><code>serviceId</code></a></td>
    <td></td>
    <td>Terminate the Savings Plan</td>
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
<tr id="parameter-savingsPlanId">
    <td><CopyableCode code="savingsPlanId" /></td>
    <td><code>string (uuid)</code></td>
    <td>Savings plan ID</td>
</tr>
<tr id="parameter-savings_plan_id">
    <td><CopyableCode code="savings_plan_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Savings plan ID (wire: savingsPlanId)</td>
</tr>
<tr id="parameter-serviceId">
    <td><CopyableCode code="serviceId" /></td>
    <td><code>integer</code></td>
    <td>Service ID</td>
</tr>
<tr id="parameter-service_id">
    <td><CopyableCode code="service_id" /></td>
    <td><code>integer</code></td>
    <td>Service ID (wire: serviceId)</td>
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

Fetch a subscribed Savings Plan

```sql
SELECT
id,
offer_id,
display_name,
end_date,
flavor,
period,
period_end_action,
period_end_date,
period_start_date,
planned_changes,
size,
start_date,
status,
termination_date
FROM ovh.services.savings_plans_subscribeds
WHERE savings_plan_id = '{{ savings_plan_id }}' -- required
AND service_id = '{{ service_id }}' -- required
;
```
</TabItem>
<TabItem value="list">

List subscribed Savings Plans

```sql
SELECT
id,
offer_id,
display_name,
end_date,
flavor,
period,
period_end_action,
period_end_date,
period_start_date,
planned_changes,
size,
start_date,
status,
termination_date
FROM ovh.services.savings_plans_subscribeds
WHERE service_id = '{{ service_id }}' -- required
;
```
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

Update a subscribed Savings Plan

```sql
UPDATE ovh.services.savings_plans_subscribeds
SET 
display_name = '{{ display_name }}'
WHERE 
savings_plan_id = '{{ savings_plan_id }}' --required
AND service_id = '{{ service_id }}' --required
AND display_name = '{{ display_name }}' --required
RETURNING
id,
offer_id,
display_name,
end_date,
flavor,
period,
period_end_action,
period_end_date,
period_start_date,
planned_changes,
size,
start_date,
status,
termination_date;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="change_period_end_action"
    values={[
        { label: 'change_period_end_action', value: 'change_period_end_action' },
        { label: 'change_size', value: 'change_size' },
        { label: 'terminate', value: 'terminate' }
    ]}
>
<TabItem value="change_period_end_action">

Change the action occurring at the end of the Savings Plan period

```sql
EXEC ovh.services.savings_plans_subscribeds.change_period_end_action 
@savingsPlanId='{{ savingsPlanId }}' --required, 
@serviceId='{{ serviceId }}' --required 
@@json=
'{
"periodEndAction": "{{ periodEndAction }}"
}'
;
```
</TabItem>
<TabItem value="change_size">

Resize the Savings Plan

```sql
EXEC ovh.services.savings_plans_subscribeds.change_size 
@savingsPlanId='{{ savingsPlanId }}' --required, 
@serviceId='{{ serviceId }}' --required 
@@json=
'{
"size": {{ size }}
}'
;
```
</TabItem>
<TabItem value="terminate">

Terminate the Savings Plan

```sql
EXEC ovh.services.savings_plans_subscribeds.terminate 
@savingsPlanId='{{ savingsPlanId }}' --required, 
@serviceId='{{ serviceId }}' --required 
@@json=
'{
"terminationDate": "{{ terminationDate }}"
}'
;
```
</TabItem>
</Tabs>
