--- 
title: debt_account_debts
hide_title: false
hide_table_of_contents: false
keywords:
  - debt_account_debts
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

Creates, updates, deletes, gets or lists a <code>debt_account_debts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="debt_account_debts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.me.debt_account_debts" /></td></tr>
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
    <td><CopyableCode code="debt_id" /></td>
    <td><code>integer</code></td>
    <td> (wire: debtId)</td>
</tr>
<tr>
    <td><CopyableCode code="order_id" /></td>
    <td><code>integer</code></td>
    <td>The order the debt relates to (wire: orderId)</td>
</tr>
<tr>
    <td><CopyableCode code="amount" /></td>
    <td><code>object</code></td>
    <td>Original amount of the debt</td>
</tr>
<tr>
    <td><CopyableCode code="date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date the debt was created on</td>
</tr>
<tr>
    <td><CopyableCode code="due_amount" /></td>
    <td><code>object</code></td>
    <td>Amount you still owe for that debt (wire: dueAmount)</td>
</tr>
<tr>
    <td><CopyableCode code="due_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>If specified, the debt will not be recovered before that date (wire: dueDate)</td>
</tr>
<tr>
    <td><CopyableCode code="pending_amount" /></td>
    <td><code>object</code></td>
    <td>Amount currently being processed (wire: pendingAmount)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of a debt (PAID, REFUNDED, TO_BE_PAID, UNMATURED, UNPAID, WRITE_OFF)</td>
</tr>
<tr>
    <td><CopyableCode code="todo_amount" /></td>
    <td><code>object</code></td>
    <td>Reserved amount awaiting payment (wire: todoAmount)</td>
</tr>
<tr>
    <td><CopyableCode code="unmatured_amount" /></td>
    <td><code>object</code></td>
    <td>Unmatured amount for deferred payment term (wire: unmaturedAmount)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

State of a debt

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
    <td><CopyableCode code="debt_id" /></td>
    <td><code>integer</code></td>
    <td> (wire: debtId)</td>
</tr>
<tr>
    <td><CopyableCode code="order_id" /></td>
    <td><code>integer</code></td>
    <td>The order the debt relates to (wire: orderId)</td>
</tr>
<tr>
    <td><CopyableCode code="amount" /></td>
    <td><code>object</code></td>
    <td>Original amount of the debt</td>
</tr>
<tr>
    <td><CopyableCode code="date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date the debt was created on</td>
</tr>
<tr>
    <td><CopyableCode code="due_amount" /></td>
    <td><code>object</code></td>
    <td>Amount you still owe for that debt (wire: dueAmount)</td>
</tr>
<tr>
    <td><CopyableCode code="due_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>If specified, the debt will not be recovered before that date (wire: dueDate)</td>
</tr>
<tr>
    <td><CopyableCode code="pending_amount" /></td>
    <td><code>object</code></td>
    <td>Amount currently being processed (wire: pendingAmount)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of a debt (PAID, REFUNDED, TO_BE_PAID, UNMATURED, UNPAID, WRITE_OFF)</td>
</tr>
<tr>
    <td><CopyableCode code="todo_amount" /></td>
    <td><code>object</code></td>
    <td>Reserved amount awaiting payment (wire: todoAmount)</td>
</tr>
<tr>
    <td><CopyableCode code="unmatured_amount" /></td>
    <td><code>object</code></td>
    <td>Unmatured amount for deferred payment term (wire: unmaturedAmount)</td>
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
    <td><a href="#parameter-debt_id"><code>debt_id</code></a></td>
    <td></td>
    <td>Get this object properties</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>All debts related to your account</td>
</tr>
<tr>
    <td><a href="#pay"><CopyableCode code="pay" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-debtId"><code>debtId</code></a></td>
    <td></td>
    <td>Create an order in order to pay this order's debt</td>
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
<tr id="parameter-debtId">
    <td><CopyableCode code="debtId" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr id="parameter-debt_id">
    <td><CopyableCode code="debt_id" /></td>
    <td><code>integer</code></td>
    <td> (wire: debtId)</td>
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
debt_id,
order_id,
amount,
date,
due_amount,
due_date,
pending_amount,
status,
todo_amount,
unmatured_amount
FROM ovh.me.debt_account_debts
WHERE debt_id = '{{ debt_id }}' -- required
;
```
</TabItem>
<TabItem value="list">

All debts related to your account

```sql
SELECT
debt_id,
order_id,
amount,
date,
due_amount,
due_date,
pending_amount,
status,
todo_amount,
unmatured_amount
FROM ovh.me.debt_account_debts
WHERE x_pagination_mode = '{{ x_pagination_mode }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="pay"
    values={[
        { label: 'pay', value: 'pay' }
    ]}
>
<TabItem value="pay">

Create an order in order to pay this order's debt

```sql
EXEC ovh.me.debt_account_debts.pay 
@debtId='{{ debtId }}' --required
;
```
</TabItem>
</Tabs>
