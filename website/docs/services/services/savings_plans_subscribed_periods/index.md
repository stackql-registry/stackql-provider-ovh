--- 
title: savings_plans_subscribed_periods
hide_title: false
hide_table_of_contents: false
keywords:
  - savings_plans_subscribed_periods
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

Creates, updates, deletes, gets or lists a <code>savings_plans_subscribed_periods</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="savings_plans_subscribed_periods" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.services.savings_plans_subscribed_periods" /></td></tr>
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

Savings Plan Period history

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
    <td>Unique identifier of the Period</td>
</tr>
<tr>
    <td><CopyableCode code="offer_id" /></td>
    <td><code>string</code></td>
    <td>Savings Plan commercial offer identifier (wire: offerId)</td>
</tr>
<tr>
    <td><CopyableCode code="savings_plan_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Unique identifier of the Savings Plan (wire: savingsPlanId)</td>
</tr>
<tr>
    <td><CopyableCode code="period_end_date" /></td>
    <td><code>string (date)</code></td>
    <td>End date of the Period (wire: periodEndDate)</td>
</tr>
<tr>
    <td><CopyableCode code="period_start_date" /></td>
    <td><code>string (date)</code></td>
    <td>Start date of the Period (wire: periodStartDate)</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>integer</code></td>
    <td>Size of the Savings Plan during the period</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of the Period (ACTIVE, PENDING, TERMINATED)</td>
</tr>
<tr>
    <td><CopyableCode code="unit_price" /></td>
    <td><code>number</code></td>
    <td>Savings Plan commercial offer unit price (wire: unitPrice)</td>
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
    <td><a href="#parameter-savings_plan_id"><code>savings_plan_id</code></a>, <a href="#parameter-service_id"><code>service_id</code></a></td>
    <td></td>
    <td>List the period history of a given Savings Plan</td>
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
<tr id="parameter-savings_plan_id">
    <td><CopyableCode code="savings_plan_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Savings plan ID (wire: savingsPlanId)</td>
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
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

List the period history of a given Savings Plan

```sql
SELECT
id,
offer_id,
savings_plan_id,
period_end_date,
period_start_date,
size,
status,
unit_price
FROM ovh.services.savings_plans_subscribed_periods
WHERE savings_plan_id = '{{ savings_plan_id }}' -- required
AND service_id = '{{ service_id }}' -- required
;
```
</TabItem>
</Tabs>
