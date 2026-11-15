--- 
title: order_details
hide_title: false
hide_table_of_contents: false
keywords:
  - order_details
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

Creates, updates, deletes, gets or lists an <code>order_details</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="order_details" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.me.order_details" /></td></tr>
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
    <td><CopyableCode code="order_detail_id" /></td>
    <td><code>integer</code></td>
    <td> (wire: orderDetailId)</td>
</tr>
<tr>
    <td><CopyableCode code="cancelled" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="detail_type" /></td>
    <td><code>string</code></td>
    <td>Product type of item in order (ACCESSORY, CAUTION, CHOOSED, CONSUMPTION, CREATION, DELIVERY, DURATION, GIFT, INSTALLATION, LICENSE, MUTE, OTHER, OUTPLAN, QUANTITY, REFUND, RENEW, SPECIAL, SWITCH, TRANSFER, VOUCHER) (wire: detailType)</td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="quantity" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="total_price" /></td>
    <td><code>object</code></td>
    <td>Price with its currency and textual representation (wire: totalPrice)</td>
</tr>
<tr>
    <td><CopyableCode code="unit_price" /></td>
    <td><code>object</code></td>
    <td>Price with its currency and textual representation (wire: unitPrice)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Information about a Bill entry

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
    <td><CopyableCode code="order_detail_id" /></td>
    <td><code>integer</code></td>
    <td> (wire: orderDetailId)</td>
</tr>
<tr>
    <td><CopyableCode code="cancelled" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="detail_type" /></td>
    <td><code>string</code></td>
    <td>Product type of item in order (ACCESSORY, CAUTION, CHOOSED, CONSUMPTION, CREATION, DELIVERY, DURATION, GIFT, INSTALLATION, LICENSE, MUTE, OTHER, OUTPLAN, QUANTITY, REFUND, RENEW, SPECIAL, SWITCH, TRANSFER, VOUCHER) (wire: detailType)</td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="quantity" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="total_price" /></td>
    <td><code>object</code></td>
    <td>Price with its currency and textual representation (wire: totalPrice)</td>
</tr>
<tr>
    <td><CopyableCode code="unit_price" /></td>
    <td><code>object</code></td>
    <td>Price with its currency and textual representation (wire: unitPrice)</td>
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
    <td><a href="#parameter-order_detail_id"><code>order_detail_id</code></a>, <a href="#parameter-order_id"><code>order_id</code></a></td>
    <td></td>
    <td>Get this object properties</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-order_id"><code>order_id</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>Give access to all entries of the order</td>
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
<tr id="parameter-order_detail_id">
    <td><CopyableCode code="order_detail_id" /></td>
    <td><code>integer</code></td>
    <td> (wire: orderDetailId)</td>
</tr>
<tr id="parameter-order_id">
    <td><CopyableCode code="order_id" /></td>
    <td><code>integer</code></td>
    <td> (wire: orderId)</td>
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
order_detail_id,
cancelled,
description,
detail_type,
domain,
quantity,
total_price,
unit_price
FROM ovh.me.order_details
WHERE order_detail_id = '{{ order_detail_id }}' -- required
AND order_id = '{{ order_id }}' -- required
;
```
</TabItem>
<TabItem value="list">

Give access to all entries of the order

```sql
SELECT
order_detail_id,
cancelled,
description,
detail_type,
domain,
quantity,
total_price,
unit_price
FROM ovh.me.order_details
WHERE order_id = '{{ order_id }}' -- required
AND x_pagination_mode = '{{ x_pagination_mode }}'
;
```
</TabItem>
</Tabs>
