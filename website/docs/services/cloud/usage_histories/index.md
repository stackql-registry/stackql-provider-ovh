--- 
title: usage_histories
hide_title: false
hide_table_of_contents: false
keywords:
  - usage_histories
  - cloud
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

Creates, updates, deletes, gets or lists a <code>usage_histories</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="usage_histories" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.cloud.usage_histories" /></td></tr>
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
    <td><code>string</code></td>
    <td>Usage id</td>
</tr>
<tr>
    <td><CopyableCode code="hourly_usage" /></td>
    <td><code>object</code></td>
    <td>Hourly usage (wire: hourlyUsage)</td>
</tr>
<tr>
    <td><CopyableCode code="last_update" /></td>
    <td><code>string (date-time)</code></td>
    <td>Entry last update (wire: lastUpdate)</td>
</tr>
<tr>
    <td><CopyableCode code="monthly_usage" /></td>
    <td><code>object</code></td>
    <td>Monthly usage (wire: monthlyUsage)</td>
</tr>
<tr>
    <td><CopyableCode code="period" /></td>
    <td><code>object</code></td>
    <td>Usage dates (from/to)</td>
</tr>
<tr>
    <td><CopyableCode code="resources_usage" /></td>
    <td><code>array</code></td>
    <td>Resource usage (billed per hour/minute/second/unit) (wire: resourcesUsage)</td>
</tr>
<tr>
    <td><CopyableCode code="total_price" /></td>
    <td><code>object</code></td>
    <td>Total price (wire: totalPrice)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

UsageHistory

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
    <td><code>string</code></td>
    <td>Usage id</td>
</tr>
<tr>
    <td><CopyableCode code="last_update" /></td>
    <td><code>string (date-time)</code></td>
    <td>Entry last update (wire: lastUpdate)</td>
</tr>
<tr>
    <td><CopyableCode code="period" /></td>
    <td><code>object</code></td>
    <td>Usage dates (from/to)</td>
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
    <td><a href="#parameter-usage_id"><code>usage_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Returns the usage and price of the project for one past period, by resource type.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-from"><code>from</code></a>, <a href="#parameter-to"><code>to</code></a></td>
    <td>Returns the past usage periods of the project. Filter them with the `from` and `to` dates, then get the details of one period with its ID.</td>
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
    <td>The Public Cloud project ID. Resolved from OVH_CLOUD_PROJECT_SERVICE when set.</td>
</tr>
<tr id="parameter-usage_id">
    <td><CopyableCode code="usage_id" /></td>
    <td><code>string</code></td>
    <td>Usage ID (wire: usageId)</td>
</tr>
<tr id="parameter-from">
    <td><CopyableCode code="from" /></td>
    <td><code>string (date-time)</code></td>
    <td>Filter results having date superior to from</td>
</tr>
<tr id="parameter-to">
    <td><CopyableCode code="to" /></td>
    <td><code>string (date-time)</code></td>
    <td>Filter results having date inferior to</td>
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

Returns the usage and price of the project for one past period, by resource type.

```sql
SELECT
id,
hourly_usage,
last_update,
monthly_usage,
period,
resources_usage,
total_price
FROM ovh.cloud.usage_histories
WHERE usage_id = '{{ usage_id }}' -- required
AND service_name = '{{ service_name }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
<TabItem value="list">

Returns the past usage periods of the project. Filter them with the `from` and `to` dates, then get the details of one period with its ID.

```sql
SELECT
id,
last_update,
period
FROM ovh.cloud.usage_histories
WHERE service_name = '{{ service_name }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
AND from = '{{ from }}'
AND to = '{{ to }}'
;
```
</TabItem>
</Tabs>
