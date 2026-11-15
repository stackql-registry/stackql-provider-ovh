--- 
title: cart_items
hide_title: false
hide_table_of_contents: false
keywords:
  - cart_items
  - order
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

Creates, updates, deletes, gets or lists a <code>cart_items</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cart_items" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.order.cart_items" /></td></tr>
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
    <td><CopyableCode code="cart_id" /></td>
    <td><code>string</code></td>
    <td>Cart identifier (wire: cartId)</td>
</tr>
<tr>
    <td><CopyableCode code="item_id" /></td>
    <td><code>integer</code></td>
    <td>Current product identifier (wire: itemId)</td>
</tr>
<tr>
    <td><CopyableCode code="offer_id" /></td>
    <td><code>string</code></td>
    <td>Offer unique identifier of the product added (wire: offerId)</td>
</tr>
<tr>
    <td><CopyableCode code="parent_item_id" /></td>
    <td><code>integer</code></td>
    <td>Id of parent item (if item is an option) (wire: parentItemId)</td>
</tr>
<tr>
    <td><CopyableCode code="product_id" /></td>
    <td><code>string</code></td>
    <td>Type of the product added (wire: productId)</td>
</tr>
<tr>
    <td><CopyableCode code="configurations" /></td>
    <td><code>array</code></td>
    <td>Configuration set for this product</td>
</tr>
<tr>
    <td><CopyableCode code="duration" /></td>
    <td><code>string (duration)</code></td>
    <td>Duration for the service</td>
</tr>
<tr>
    <td><CopyableCode code="options" /></td>
    <td><code>array</code></td>
    <td>Options item ID attached to this item</td>
</tr>
<tr>
    <td><CopyableCode code="prices" /></td>
    <td><code>array</code></td>
    <td>Price of the item</td>
</tr>
<tr>
    <td><CopyableCode code="settings" /></td>
    <td><code>object</code></td>
    <td>Item settings</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Representation of a cart item

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
    <td><CopyableCode code="cart_id" /></td>
    <td><code>string</code></td>
    <td>Cart identifier (wire: cartId)</td>
</tr>
<tr>
    <td><CopyableCode code="item_id" /></td>
    <td><code>integer</code></td>
    <td>Current product identifier (wire: itemId)</td>
</tr>
<tr>
    <td><CopyableCode code="offer_id" /></td>
    <td><code>string</code></td>
    <td>Offer unique identifier of the product added (wire: offerId)</td>
</tr>
<tr>
    <td><CopyableCode code="parent_item_id" /></td>
    <td><code>integer</code></td>
    <td>Id of parent item (if item is an option) (wire: parentItemId)</td>
</tr>
<tr>
    <td><CopyableCode code="product_id" /></td>
    <td><code>string</code></td>
    <td>Type of the product added (wire: productId)</td>
</tr>
<tr>
    <td><CopyableCode code="configurations" /></td>
    <td><code>array</code></td>
    <td>Configuration set for this product</td>
</tr>
<tr>
    <td><CopyableCode code="duration" /></td>
    <td><code>string (duration)</code></td>
    <td>Duration for the service</td>
</tr>
<tr>
    <td><CopyableCode code="options" /></td>
    <td><code>array</code></td>
    <td>Options item ID attached to this item</td>
</tr>
<tr>
    <td><CopyableCode code="prices" /></td>
    <td><code>array</code></td>
    <td>Price of the item</td>
</tr>
<tr>
    <td><CopyableCode code="settings" /></td>
    <td><code>object</code></td>
    <td>Item settings</td>
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
    <td><a href="#parameter-cart_id"><code>cart_id</code></a>, <a href="#parameter-item_id"><code>item_id</code></a></td>
    <td></td>
    <td>Retrieve information about a specific item of a cart</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-cart_id"><code>cart_id</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List all the items of a cart</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-cart_id"><code>cart_id</code></a>, <a href="#parameter-item_id"><code>item_id</code></a></td>
    <td></td>
    <td>Update some values on a cart item</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-cart_id"><code>cart_id</code></a>, <a href="#parameter-item_id"><code>item_id</code></a></td>
    <td></td>
    <td>Delete an item from a cart</td>
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
<tr id="parameter-cart_id">
    <td><CopyableCode code="cart_id" /></td>
    <td><code>string</code></td>
    <td>Cart ID (wire: cartId)</td>
</tr>
<tr id="parameter-item_id">
    <td><CopyableCode code="item_id" /></td>
    <td><code>integer</code></td>
    <td>Item ID (wire: itemId)</td>
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

Retrieve information about a specific item of a cart

```sql
SELECT
cart_id,
item_id,
offer_id,
parent_item_id,
product_id,
configurations,
duration,
options,
prices,
settings
FROM ovh.order.cart_items
WHERE cart_id = '{{ cart_id }}' -- required
AND item_id = '{{ item_id }}' -- required
;
```
</TabItem>
<TabItem value="list">

List all the items of a cart

```sql
SELECT
cart_id,
item_id,
offer_id,
parent_item_id,
product_id,
configurations,
duration,
options,
prices,
settings
FROM ovh.order.cart_items
WHERE cart_id = '{{ cart_id }}' -- required
AND x_pagination_mode = '{{ x_pagination_mode }}'
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

Update some values on a cart item

```sql
UPDATE ovh.order.cart_items
SET 
duration = '{{ duration }}',
quantity = {{ quantity }}
WHERE 
cart_id = '{{ cart_id }}' --required
AND item_id = '{{ item_id }}' --required
RETURNING
cart_id,
item_id,
offer_id,
parent_item_id,
product_id,
configurations,
duration,
options,
prices,
settings;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete"
    values={[
        { label: 'delete', value: 'delete' }
    ]}
>
<TabItem value="delete">

Delete an item from a cart

```sql
DELETE FROM ovh.order.cart_items
WHERE cart_id = '{{ cart_id }}' --required
AND item_id = '{{ item_id }}' --required
;
```
</TabItem>
</Tabs>
