--- 
title: credit_balances
hide_title: false
hide_table_of_contents: false
keywords:
  - credit_balances
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

Creates, updates, deletes, gets or lists a <code>credit_balances</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="credit_balances" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.me.credit_balances" /></td></tr>
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
    <td><CopyableCode code="balance_name" /></td>
    <td><code>string</code></td>
    <td>Balance name (wire: balanceName)</td>
</tr>
<tr>
    <td><CopyableCode code="amount" /></td>
    <td><code>object</code></td>
    <td>Balance amount</td>
</tr>
<tr>
    <td><CopyableCode code="balance_details" /></td>
    <td><code>array</code></td>
    <td>Balance details, amounts by serviceID (wire: balanceDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="booked" /></td>
    <td><code>array</code></td>
    <td>Movement already booked on orders</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Balance creation date (wire: creationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="expiring" /></td>
    <td><code>array</code></td>
    <td>Movement expiring soon</td>
</tr>
<tr>
    <td><CopyableCode code="last_update" /></td>
    <td><code>string (date-time)</code></td>
    <td>Balance last update (wire: lastUpdate)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Balance type (BONUS, DEPOSIT, PREPAID_ACCOUNT, VOUCHER)</td>
</tr>
<tr>
    <td><CopyableCode code="usable" /></td>
    <td><code>boolean</code></td>
    <td>Balance usable</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Missing description

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
    <td><CopyableCode code="balance_name" /></td>
    <td><code>string</code></td>
    <td>Balance name (wire: balanceName)</td>
</tr>
<tr>
    <td><CopyableCode code="amount" /></td>
    <td><code>object</code></td>
    <td>Balance amount</td>
</tr>
<tr>
    <td><CopyableCode code="balance_details" /></td>
    <td><code>array</code></td>
    <td>Balance details, amounts by serviceID (wire: balanceDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="booked" /></td>
    <td><code>array</code></td>
    <td>Movement already booked on orders</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Balance creation date (wire: creationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="expiring" /></td>
    <td><code>array</code></td>
    <td>Movement expiring soon</td>
</tr>
<tr>
    <td><CopyableCode code="last_update" /></td>
    <td><code>string (date-time)</code></td>
    <td>Balance last update (wire: lastUpdate)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Balance type (BONUS, DEPOSIT, PREPAID_ACCOUNT, VOUCHER)</td>
</tr>
<tr>
    <td><CopyableCode code="usable" /></td>
    <td><code>boolean</code></td>
    <td>Balance usable</td>
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
    <td><a href="#parameter-balance_name"><code>balance_name</code></a></td>
    <td></td>
    <td>Retrieve a credit balance</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-type"><code>type</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>Retrieve all credit balances</td>
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
<tr id="parameter-balance_name">
    <td><CopyableCode code="balance_name" /></td>
    <td><code>string</code></td>
    <td>Balance name (wire: balanceName)</td>
</tr>
<tr id="parameter-type">
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Filter by balance type</td>
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

Retrieve a credit balance

```sql
SELECT
balance_name,
amount,
balance_details,
booked,
creation_date,
expiring,
last_update,
type,
usable
FROM ovh.me.credit_balances
WHERE balance_name = '{{ balance_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

Retrieve all credit balances

```sql
SELECT
balance_name,
amount,
balance_details,
booked,
creation_date,
expiring,
last_update,
type,
usable
FROM ovh.me.credit_balances
WHERE type = '{{ type }}'
AND x_pagination_mode = '{{ x_pagination_mode }}'
;
```
</TabItem>
</Tabs>
