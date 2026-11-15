--- 
title: service_repayment_consumptions
hide_title: false
hide_table_of_contents: false
keywords:
  - service_repayment_consumptions
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

Creates, updates, deletes, gets or lists a <code>service_repayment_consumptions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="service_repayment_consumptions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.telephony.service_repayment_consumptions" /></td></tr>
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
    <td><CopyableCode code="consumption_id" /></td>
    <td><code>integer</code></td>
    <td> (wire: consumptionId)</td>
</tr>
<tr>
    <td><CopyableCode code="called" /></td>
    <td><code>string (phone-number)</code></td>
    <td>Called number of the call</td>
</tr>
<tr>
    <td><CopyableCode code="calling" /></td>
    <td><code>string (phone-number)</code></td>
    <td>Calling number of the call</td>
</tr>
<tr>
    <td><CopyableCode code="creation_datetime" /></td>
    <td><code>string (date-time)</code></td>
    <td>the Datetime of the start of the call (wire: creationDatetime)</td>
</tr>
<tr>
    <td><CopyableCode code="dialed" /></td>
    <td><code>string (phone-number)</code></td>
    <td>Phone number</td>
</tr>
<tr>
    <td><CopyableCode code="duration" /></td>
    <td><code>integer</code></td>
    <td>Duration of the call</td>
</tr>
<tr>
    <td><CopyableCode code="operator" /></td>
    <td><code>string</code></td>
    <td>Calling number's operator</td>
</tr>
<tr>
    <td><CopyableCode code="price" /></td>
    <td><code>number</code></td>
    <td>Price repayed with the call</td>
</tr>
<tr>
    <td><CopyableCode code="repayable" /></td>
    <td><code>boolean</code></td>
    <td>Is the call repayable right now</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Call which are repayable

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
    <td><CopyableCode code="consumption_id" /></td>
    <td><code>integer</code></td>
    <td> (wire: consumptionId)</td>
</tr>
<tr>
    <td><CopyableCode code="called" /></td>
    <td><code>string (phone-number)</code></td>
    <td>Called number of the call</td>
</tr>
<tr>
    <td><CopyableCode code="calling" /></td>
    <td><code>string (phone-number)</code></td>
    <td>Calling number of the call</td>
</tr>
<tr>
    <td><CopyableCode code="creation_datetime" /></td>
    <td><code>string (date-time)</code></td>
    <td>the Datetime of the start of the call (wire: creationDatetime)</td>
</tr>
<tr>
    <td><CopyableCode code="dialed" /></td>
    <td><code>string (phone-number)</code></td>
    <td>Phone number</td>
</tr>
<tr>
    <td><CopyableCode code="duration" /></td>
    <td><code>integer</code></td>
    <td>Duration of the call</td>
</tr>
<tr>
    <td><CopyableCode code="operator" /></td>
    <td><code>string</code></td>
    <td>Calling number's operator</td>
</tr>
<tr>
    <td><CopyableCode code="price" /></td>
    <td><code>number</code></td>
    <td>Price repayed with the call</td>
</tr>
<tr>
    <td><CopyableCode code="repayable" /></td>
    <td><code>boolean</code></td>
    <td>Is the call repayable right now</td>
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
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-consumption_id"><code>consumption_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get a repayable call</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-creation_datetime.from"><code>creation_datetime.from</code></a>, <a href="#parameter-creation_datetime.to"><code>creation_datetime.to</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List repayable calls</td>
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
<tr id="parameter-consumption_id">
    <td><CopyableCode code="consumption_id" /></td>
    <td><code>integer</code></td>
    <td> (wire: consumptionId)</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td> (wire: serviceName)</td>
</tr>
<tr id="parameter-creation_datetime.from">
    <td><CopyableCode code="creation_datetime.from" /></td>
    <td><code>string (date-time)</code></td>
    <td>Filter the value of creationDatetime property (&gt;=) (wire: creationDatetime.from)</td>
</tr>
<tr id="parameter-creation_datetime.to">
    <td><CopyableCode code="creation_datetime.to" /></td>
    <td><code>string (date-time)</code></td>
    <td>Filter the value of creationDatetime property (&lt;=) (wire: creationDatetime.to)</td>
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

Get a repayable call

```sql
SELECT
consumption_id,
called,
calling,
creation_datetime,
dialed,
duration,
operator,
price,
repayable
FROM ovh.telephony.service_repayment_consumptions
WHERE billing_account = '{{ billing_account }}' -- required
AND consumption_id = '{{ consumption_id }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List repayable calls

```sql
SELECT
consumption_id,
called,
calling,
creation_datetime,
dialed,
duration,
operator,
price,
repayable
FROM ovh.telephony.service_repayment_consumptions
WHERE billing_account = '{{ billing_account }}' -- required
AND service_name = '{{ service_name }}' -- required
AND creation_datetime.from = '{{ creation_datetime.from }}'
AND creation_datetime.to = '{{ creation_datetime.to }}'
AND x_pagination_mode = '{{ x_pagination_mode }}'
;
```
</TabItem>
</Tabs>
