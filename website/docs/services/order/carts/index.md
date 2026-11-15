--- 
title: carts
hide_title: false
hide_table_of_contents: false
keywords:
  - carts
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

Creates, updates, deletes, gets or lists a <code>carts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="carts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.order.carts" /></td></tr>
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
</tbody>
</table>
</TabItem>
<TabItem value="list">

A shopping cart

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
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of your cart</td>
</tr>
<tr>
    <td><CopyableCode code="expire" /></td>
    <td><code>string (date-time)</code></td>
    <td>Expiration time</td>
</tr>
<tr>
    <td><CopyableCode code="items" /></td>
    <td><code>array</code></td>
    <td>Items of your cart</td>
</tr>
<tr>
    <td><CopyableCode code="read_only" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if the cart has already been validated (wire: readOnly)</td>
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
    <td><a href="#parameter-cart_id"><code>cart_id</code></a></td>
    <td></td>
    <td>Retrieve information about a specific cart</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-description"><code>description</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List of your OVH order carts</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-ovh_subsidiary"><code>ovh_subsidiary</code></a></td>
    <td></td>
    <td>Create a new OVH order cart</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-cart_id"><code>cart_id</code></a></td>
    <td></td>
    <td>Modify information about a specific cart</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-cart_id"><code>cart_id</code></a></td>
    <td></td>
    <td>Delete a cart</td>
</tr>
<tr>
    <td><a href="#assign"><CopyableCode code="assign" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-cartId"><code>cartId</code></a></td>
    <td></td>
    <td>Assign an order cart to your account</td>
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
<tr id="parameter-cartId">
    <td><CopyableCode code="cartId" /></td>
    <td><code>string</code></td>
    <td>Cart ID</td>
</tr>
<tr id="parameter-cart_id">
    <td><CopyableCode code="cart_id" /></td>
    <td><code>string</code></td>
    <td>Cart ID (wire: cartId)</td>
</tr>
<tr id="parameter-description">
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Filter the value of description property (=)</td>
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

Retrieve information about a specific cart

```sql
SELECT
*
FROM ovh.order.carts
WHERE cart_id = '{{ cart_id }}' -- required
;
```
</TabItem>
<TabItem value="list">

List of your OVH order carts

```sql
SELECT
cart_id,
description,
expire,
items,
read_only
FROM ovh.order.carts
WHERE description = '{{ description }}'
AND x_pagination_mode = '{{ x_pagination_mode }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create"
    values={[
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create">

Create a new OVH order cart

```sql
INSERT INTO ovh.order.carts (
description,
expire,
ovh_subsidiary
)
SELECT 
'{{ description }}',
'{{ expire }}',
'{{ ovh_subsidiary }}' /* required */
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: carts
  props:
    - name: description
      value: "{{ description }}"
      description: |
        Description of your cart
    - name: expire
      value: "{{ expire }}"
      description: |
        Time of expiration of the cart
    - name: ovh_subsidiary
      value: "{{ ovh_subsidiary }}"
      description: |
        OVH Subsidiary where you want to order
      valid_values: ['CZ', 'DE', 'ES', 'EU', 'FI', 'FR', 'GB', 'IE', 'IT', 'LT', 'MA', 'NL', 'PL', 'PT', 'SN', 'TN']
`}</CodeBlock>

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

Modify information about a specific cart

```sql
UPDATE ovh.order.carts
SET 
description = '{{ description }}',
expire = '{{ expire }}'
WHERE 
cart_id = '{{ cart_id }}' --required;
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

Delete a cart

```sql
DELETE FROM ovh.order.carts
WHERE cart_id = '{{ cart_id }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="assign"
    values={[
        { label: 'assign', value: 'assign' }
    ]}
>
<TabItem value="assign">

Assign an order cart to your account

```sql
EXEC ovh.order.carts.assign 
@cartId='{{ cartId }}' --required
;
```
</TabItem>
</Tabs>
