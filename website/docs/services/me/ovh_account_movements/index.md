--- 
title: ovh_account_movements
hide_title: false
hide_table_of_contents: false
keywords:
  - ovh_account_movements
  - me
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

Creates, updates, deletes, gets or lists an <code>ovh_account_movements</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ovh_account_movements" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.me.ovh_account_movements" /></td></tr>
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
    <td><CopyableCode code="movement_id" /></td>
    <td><code>integer</code></td>
    <td> (wire: movementId)</td>
</tr>
<tr>
    <td><CopyableCode code="amount" /></td>
    <td><code>object</code></td>
    <td>Price with its currency and textual representation</td>
</tr>
<tr>
    <td><CopyableCode code="balance" /></td>
    <td><code>object</code></td>
    <td>Price with its currency and textual representation</td>
</tr>
<tr>
    <td><CopyableCode code="date" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="operation" /></td>
    <td><code>string</code></td>
    <td>Operations an OVH account movement can represent (cancel-credit, cancel-debit, cancel-pre-debit, credit, debit, pre-credit, pre-debit)</td>
</tr>
<tr>
    <td><CopyableCode code="order" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="previous_balance" /></td>
    <td><code>object</code></td>
    <td>Price with its currency and textual representation (wire: previousBalance)</td>
</tr>
<tr>
    <td><CopyableCode code="retrievable_amount" /></td>
    <td><code>object</code></td>
    <td>Price with its currency and textual representation (wire: retrievableAmount)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Details about an OVH account

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
    <td><CopyableCode code="movement_id" /></td>
    <td><code>integer</code></td>
    <td> (wire: movementId)</td>
</tr>
<tr>
    <td><CopyableCode code="amount" /></td>
    <td><code>object</code></td>
    <td>Price with its currency and textual representation</td>
</tr>
<tr>
    <td><CopyableCode code="balance" /></td>
    <td><code>object</code></td>
    <td>Price with its currency and textual representation</td>
</tr>
<tr>
    <td><CopyableCode code="date" /></td>
    <td><code>string (date-time)</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="operation" /></td>
    <td><code>string</code></td>
    <td>Operations an OVH account movement can represent (cancel-credit, cancel-debit, cancel-pre-debit, credit, debit, pre-credit, pre-debit)</td>
</tr>
<tr>
    <td><CopyableCode code="order" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="previous_balance" /></td>
    <td><code>object</code></td>
    <td>Price with its currency and textual representation (wire: previousBalance)</td>
</tr>
<tr>
    <td><CopyableCode code="retrievable_amount" /></td>
    <td><code>object</code></td>
    <td>Price with its currency and textual representation (wire: retrievableAmount)</td>
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
    <td><a href="#parameter-movement_id"><code>movement_id</code></a>, <a href="#parameter-ovh_account_id"><code>ovh_account_id</code></a></td>
    <td></td>
    <td>Get this object properties</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-ovh_account_id"><code>ovh_account_id</code></a></td>
    <td><a href="#parameter-date.from"><code>date.from</code></a>, <a href="#parameter-date.to"><code>date.to</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>Details about an entry of the OVH account</td>
</tr>
<tr>
    <td><a href="#request_refund"><CopyableCode code="request_refund" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-movementId"><code>movementId</code></a>, <a href="#parameter-ovhAccountId"><code>ovhAccountId</code></a>, <a href="#parameter-amount"><code>amount</code></a></td>
    <td></td>
    <td>request a refund of this credit note to your original payment method</td>
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
<tr id="parameter-movementId">
    <td><CopyableCode code="movementId" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr id="parameter-movement_id">
    <td><CopyableCode code="movement_id" /></td>
    <td><code>integer</code></td>
    <td> (wire: movementId)</td>
</tr>
<tr id="parameter-ovhAccountId">
    <td><CopyableCode code="ovhAccountId" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-ovh_account_id">
    <td><CopyableCode code="ovh_account_id" /></td>
    <td><code>string</code></td>
    <td> (wire: ovhAccountId)</td>
</tr>
<tr id="parameter-date.from">
    <td><CopyableCode code="date.from" /></td>
    <td><code>string (date-time)</code></td>
    <td>Filter the value of date property (&gt;=)</td>
</tr>
<tr id="parameter-date.to">
    <td><CopyableCode code="date.to" /></td>
    <td><code>string (date-time)</code></td>
    <td>Filter the value of date property (&lt;=)</td>
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

Get this object properties

```sql
SELECT
movement_id,
amount,
balance,
date,
description,
operation,
order,
previous_balance,
retrievable_amount
FROM ovh.me.ovh_account_movements
WHERE movement_id = '{{ movement_id }}' -- required
AND ovh_account_id = '{{ ovh_account_id }}' -- required
;
```
</TabItem>
<TabItem value="list">

Details about an entry of the OVH account

```sql
SELECT
movement_id,
amount,
balance,
date,
description,
operation,
order,
previous_balance,
retrievable_amount
FROM ovh.me.ovh_account_movements
WHERE ovh_account_id = '{{ ovh_account_id }}' -- required
AND date.from = '{{ date.from }}'
AND date.to = '{{ date.to }}'
AND x_pagination_mode = '{{ x_pagination_mode }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="request_refund"
    values={[
        { label: 'request_refund', value: 'request_refund' }
    ]}
>
<TabItem value="request_refund">

request a refund of this credit note to your original payment method

```sql
EXEC ovh.me.ovh_account_movements.request_refund 
@movementId='{{ movementId }}' --required, 
@ovhAccountId='{{ ovhAccountId }}' --required 
@@json=
'{
"amount": {{ amount }}
}'
;
```
</TabItem>
</Tabs>
