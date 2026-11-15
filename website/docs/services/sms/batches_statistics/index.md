--- 
title: batches_statistics
hide_title: false
hide_table_of_contents: false
keywords:
  - batches_statistics
  - sms
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

Creates, updates, deletes, gets or lists a <code>batches_statistics</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="batches_statistics" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.sms.batches_statistics" /></td></tr>
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
    <td><CopyableCode code="id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Batch ID</td>
</tr>
<tr>
    <td><CopyableCode code="credits" /></td>
    <td><code>number</code></td>
    <td>The cost of the batch in credits, computed during batch processing</td>
</tr>
<tr>
    <td><CopyableCode code="delivered" /></td>
    <td><code>integer</code></td>
    <td>Number of SMS that are delivered</td>
</tr>
<tr>
    <td><CopyableCode code="estimated_credits" /></td>
    <td><code>number</code></td>
    <td>The estimated cost of the batch in credits, computed before batch processing (wire: estimatedCredits)</td>
</tr>
<tr>
    <td><CopyableCode code="failed" /></td>
    <td><code>integer</code></td>
    <td>Number of SMS in error</td>
</tr>
<tr>
    <td><CopyableCode code="pending" /></td>
    <td><code>integer</code></td>
    <td>Number of SMS that are in pending status</td>
</tr>
<tr>
    <td><CopyableCode code="sent" /></td>
    <td><code>integer</code></td>
    <td>Number of SMS that are sent to the broker</td>
</tr>
<tr>
    <td><CopyableCode code="stoplisted" /></td>
    <td><code>integer</code></td>
    <td>Number of SMS that received a STOP by the receiver</td>
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
    <td>Returns the batch statistics: delivered, sent, pending, failed and stoplisted SMS, and the credits used.</td>
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
    <td><code>string (uuid)</code></td>
    <td>Id</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The internal name of your SMS offer (wire: serviceName)</td>
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

Returns the batch statistics: delivered, sent, pending, failed and stoplisted SMS, and the credits used.

```sql
SELECT
id,
credits,
delivered,
estimated_credits,
failed,
pending,
sent,
stoplisted
FROM ovh.sms.batches_statistics
WHERE id = '{{ id }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
</Tabs>
