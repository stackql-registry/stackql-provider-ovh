--- 
title: payment_transactions
hide_title: false
hide_table_of_contents: false
keywords:
  - payment_transactions
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

Creates, updates, deletes, gets or lists a <code>payment_transactions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="payment_transactions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.me.payment_transactions" /></td></tr>
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
    <td><CopyableCode code="payment_method_id" /></td>
    <td><code>integer</code></td>
    <td>Associated payment method ID (wire: paymentMethodId)</td>
</tr>
<tr>
    <td><CopyableCode code="transaction_id" /></td>
    <td><code>integer</code></td>
    <td>Transaction ID (wire: transactionId)</td>
</tr>
<tr>
    <td><CopyableCode code="amount" /></td>
    <td><code>object</code></td>
    <td>Transaction amount</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date (wire: creationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="last_update" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last update date (wire: lastUpdate)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Transaction status (CANCELED, CANCELING, CONFIRMING, ERROR, EXPIRED, FAILED, READY, SUCCESS)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Transaction type (CREDIT, DEBIT)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Transaction object

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
    <td><CopyableCode code="payment_method_id" /></td>
    <td><code>integer</code></td>
    <td>Associated payment method ID (wire: paymentMethodId)</td>
</tr>
<tr>
    <td><CopyableCode code="transaction_id" /></td>
    <td><code>integer</code></td>
    <td>Transaction ID (wire: transactionId)</td>
</tr>
<tr>
    <td><CopyableCode code="amount" /></td>
    <td><code>object</code></td>
    <td>Transaction amount</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date (wire: creationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="last_update" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last update date (wire: lastUpdate)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Transaction status (CANCELED, CANCELING, CONFIRMING, ERROR, EXPIRED, FAILED, READY, SUCCESS)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Transaction type (CREDIT, DEBIT)</td>
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
    <td><a href="#parameter-transaction_id"><code>transaction_id</code></a></td>
    <td></td>
    <td>Retrieve a transaction</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-payment_method_id"><code>payment_method_id</code></a>, <a href="#parameter-status"><code>status</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>Retrieve payment transaction list</td>
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
<tr id="parameter-transaction_id">
    <td><CopyableCode code="transaction_id" /></td>
    <td><code>integer</code></td>
    <td>Transaction ID (wire: transactionId)</td>
</tr>
<tr id="parameter-payment_method_id">
    <td><CopyableCode code="payment_method_id" /></td>
    <td><code>integer</code></td>
    <td>Payment method ID (wire: paymentMethodId)</td>
</tr>
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status</td>
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

Retrieve a transaction

```sql
SELECT
payment_method_id,
transaction_id,
amount,
creation_date,
last_update,
status,
type
FROM ovh.me.payment_transactions
WHERE transaction_id = '{{ transaction_id }}' -- required
;
```
</TabItem>
<TabItem value="list">

Retrieve payment transaction list

```sql
SELECT
payment_method_id,
transaction_id,
amount,
creation_date,
last_update,
status,
type
FROM ovh.me.payment_transactions
WHERE payment_method_id = '{{ payment_method_id }}'
AND status = '{{ status }}'
AND x_pagination_mode = '{{ x_pagination_mode }}'
;
```
</TabItem>
</Tabs>
