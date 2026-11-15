--- 
title: easy_hunting_hunting_queue_live_statistics
hide_title: false
hide_table_of_contents: false
keywords:
  - easy_hunting_hunting_queue_live_statistics
  - telephony
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

Creates, updates, deletes, gets or lists an <code>easy_hunting_hunting_queue_live_statistics</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="easy_hunting_hunting_queue_live_statistics" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.telephony.easy_hunting_hunting_queue_live_statistics" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
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
    <td><CopyableCode code="calls_answered" /></td>
    <td><code>integer</code></td>
    <td>Total of calls answered (wire: callsAnswered)</td>
</tr>
<tr>
    <td><CopyableCode code="calls_lost" /></td>
    <td><code>integer</code></td>
    <td>Total of calls lost (wire: callsLost)</td>
</tr>
<tr>
    <td><CopyableCode code="calls_total" /></td>
    <td><code>integer</code></td>
    <td>Total of calls (wire: callsTotal)</td>
</tr>
<tr>
    <td><CopyableCode code="last_reset" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last reset datetime of queue's statistics (wire: lastReset)</td>
</tr>
<tr>
    <td><CopyableCode code="total_call_duration" /></td>
    <td><code>integer</code></td>
    <td>Total call duration in seconds (wire: totalCallDuration)</td>
</tr>
<tr>
    <td><CopyableCode code="total_waiting_duration" /></td>
    <td><code>integer</code></td>
    <td>Total waiting duration in seconds (wire: totalWaitingDuration)</td>
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
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-queue_id"><code>queue_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get queue live statistics</td>
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
<tr id="parameter-billing_account">
    <td><CopyableCode code="billing_account" /></td>
    <td><code>string</code></td>
    <td>The name of your billingAccount (wire: billingAccount)</td>
</tr>
<tr id="parameter-queue_id">
    <td><CopyableCode code="queue_id" /></td>
    <td><code>integer</code></td>
    <td> (wire: queueId)</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td> (wire: serviceName)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

Get queue live statistics

```sql
SELECT
calls_answered,
calls_lost,
calls_total,
last_reset,
total_call_duration,
total_waiting_duration
FROM ovh.telephony.easy_hunting_hunting_queue_live_statistics
WHERE billing_account = '{{ billing_account }}' -- required
AND queue_id = '{{ queue_id }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
</Tabs>
