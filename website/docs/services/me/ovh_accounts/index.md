--- 
title: ovh_accounts
hide_title: false
hide_table_of_contents: false
keywords:
  - ovh_accounts
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

Creates, updates, deletes, gets or lists an <code>ovh_accounts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ovh_accounts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.me.ovh_accounts" /></td></tr>
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
    <td><CopyableCode code="ovh_account_id" /></td>
    <td><code>string</code></td>
    <td> (wire: ovhAccountId)</td>
</tr>
<tr>
    <td><CopyableCode code="alert_threshold" /></td>
    <td><code>integer</code></td>
    <td> (wire: alertThreshold)</td>
</tr>
<tr>
    <td><CopyableCode code="available_after_credit" /></td>
    <td><code>object</code></td>
    <td>Price with its currency and textual representation (wire: availableAfterCredit)</td>
</tr>
<tr>
    <td><CopyableCode code="balance" /></td>
    <td><code>object</code></td>
    <td>Price with its currency and textual representation</td>
</tr>
<tr>
    <td><CopyableCode code="can_be_credited" /></td>
    <td><code>boolean</code></td>
    <td> (wire: canBeCredited)</td>
</tr>
<tr>
    <td><CopyableCode code="is_active" /></td>
    <td><code>boolean</code></td>
    <td> (wire: isActive)</td>
</tr>
<tr>
    <td><CopyableCode code="last_update" /></td>
    <td><code>string (date-time)</code></td>
    <td> (wire: lastUpdate)</td>
</tr>
<tr>
    <td><CopyableCode code="open_date" /></td>
    <td><code>string (date-time)</code></td>
    <td> (wire: openDate)</td>
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
    <td><CopyableCode code="ovh_account_id" /></td>
    <td><code>string</code></td>
    <td> (wire: ovhAccountId)</td>
</tr>
<tr>
    <td><CopyableCode code="alert_threshold" /></td>
    <td><code>integer</code></td>
    <td> (wire: alertThreshold)</td>
</tr>
<tr>
    <td><CopyableCode code="available_after_credit" /></td>
    <td><code>object</code></td>
    <td>Price with its currency and textual representation (wire: availableAfterCredit)</td>
</tr>
<tr>
    <td><CopyableCode code="balance" /></td>
    <td><code>object</code></td>
    <td>Price with its currency and textual representation</td>
</tr>
<tr>
    <td><CopyableCode code="can_be_credited" /></td>
    <td><code>boolean</code></td>
    <td> (wire: canBeCredited)</td>
</tr>
<tr>
    <td><CopyableCode code="is_active" /></td>
    <td><code>boolean</code></td>
    <td> (wire: isActive)</td>
</tr>
<tr>
    <td><CopyableCode code="last_update" /></td>
    <td><code>string (date-time)</code></td>
    <td> (wire: lastUpdate)</td>
</tr>
<tr>
    <td><CopyableCode code="open_date" /></td>
    <td><code>string (date-time)</code></td>
    <td> (wire: openDate)</td>
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
    <td><a href="#parameter-ovh_account_id"><code>ovh_account_id</code></a></td>
    <td></td>
    <td>Get this object properties</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List of OVH accounts the logged account has</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-ovh_account_id"><code>ovh_account_id</code></a></td>
    <td></td>
    <td>Alter this object properties</td>
</tr>
<tr>
    <td><a href="#credit_order"><CopyableCode code="credit_order" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-ovhAccountId"><code>ovhAccountId</code></a>, <a href="#parameter-amount"><code>amount</code></a></td>
    <td></td>
    <td>Generate an order that can be paid in order to credit the OVH account</td>
</tr>
<tr>
    <td><a href="#retrieve_money"><CopyableCode code="retrieve_money" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-ovhAccountId"><code>ovhAccountId</code></a>, <a href="#parameter-amount"><code>amount</code></a>, <a href="#parameter-bankAccountId"><code>bankAccountId</code></a></td>
    <td></td>
    <td>Transfer money from ovhAccount to your bank account</td>
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
ovh_account_id,
alert_threshold,
available_after_credit,
balance,
can_be_credited,
is_active,
last_update,
open_date,
retrievable_amount
FROM ovh.me.ovh_accounts
WHERE ovh_account_id = '{{ ovh_account_id }}' -- required
;
```
</TabItem>
<TabItem value="list">

List of OVH accounts the logged account has

```sql
SELECT
ovh_account_id,
alert_threshold,
available_after_credit,
balance,
can_be_credited,
is_active,
last_update,
open_date,
retrievable_amount
FROM ovh.me.ovh_accounts
WHERE x_pagination_mode = '{{ x_pagination_mode }}'
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

Alter this object properties

```sql
UPDATE ovh.me.ovh_accounts
SET 
alert_threshold = {{ alert_threshold }}
WHERE 
ovh_account_id = '{{ ovh_account_id }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="credit_order"
    values={[
        { label: 'credit_order', value: 'credit_order' },
        { label: 'retrieve_money', value: 'retrieve_money' }
    ]}
>
<TabItem value="credit_order">

Generate an order that can be paid in order to credit the OVH account

```sql
EXEC ovh.me.ovh_accounts.credit_order 
@ovhAccountId='{{ ovhAccountId }}' --required 
@@json=
'{
"amount": {{ amount }}
}'
;
```
</TabItem>
<TabItem value="retrieve_money">

Transfer money from ovhAccount to your bank account

```sql
EXEC ovh.me.ovh_accounts.retrieve_money 
@ovhAccountId='{{ ovhAccountId }}' --required 
@@json=
'{
"amount": {{ amount }}, 
"bankAccountId": {{ bankAccountId }}
}'
;
```
</TabItem>
</Tabs>
