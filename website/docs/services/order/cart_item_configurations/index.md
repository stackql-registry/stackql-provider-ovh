--- 
title: cart_item_configurations
hide_title: false
hide_table_of_contents: false
keywords:
  - cart_item_configurations
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

Creates, updates, deletes, gets or lists a <code>cart_item_configurations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cart_item_configurations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.order.cart_item_configurations" /></td></tr>
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
    <td><CopyableCode code="id" /></td>
    <td><code>integer</code></td>
    <td>Configuration ID</td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>Identifier of the resource</td>
</tr>
<tr>
    <td><CopyableCode code="value" /></td>
    <td><code>string</code></td>
    <td>Path to the resource in API.OVH.COM</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Representation of a configuration item for personalizing product

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
    <td><code>integer</code></td>
    <td>Configuration ID</td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>Identifier of the resource</td>
</tr>
<tr>
    <td><CopyableCode code="value" /></td>
    <td><code>string</code></td>
    <td>Path to the resource in API.OVH.COM</td>
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
    <td><a href="#parameter-cart_id"><code>cart_id</code></a>, <a href="#parameter-configuration_id"><code>configuration_id</code></a>, <a href="#parameter-item_id"><code>item_id</code></a></td>
    <td></td>
    <td>Retrieve configuration item</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-cart_id"><code>cart_id</code></a>, <a href="#parameter-item_id"><code>item_id</code></a></td>
    <td><a href="#parameter-label"><code>label</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>Retrieve all configuration item of the cart item</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-cart_id"><code>cart_id</code></a>, <a href="#parameter-item_id"><code>item_id</code></a>, <a href="#parameter-label"><code>label</code></a>, <a href="#parameter-value"><code>value</code></a></td>
    <td></td>
    <td>Setup configuration item for the product</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-cart_id"><code>cart_id</code></a>, <a href="#parameter-configuration_id"><code>configuration_id</code></a>, <a href="#parameter-item_id"><code>item_id</code></a></td>
    <td></td>
    <td>Delete configuration item</td>
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
<tr id="parameter-configuration_id">
    <td><CopyableCode code="configuration_id" /></td>
    <td><code>integer</code></td>
    <td>Configuration ID (wire: configurationId)</td>
</tr>
<tr id="parameter-item_id">
    <td><CopyableCode code="item_id" /></td>
    <td><code>integer</code></td>
    <td>Item ID (wire: itemId)</td>
</tr>
<tr id="parameter-label">
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>Filter the value of label property (=)</td>
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

Retrieve configuration item

```sql
SELECT
id,
label,
value
FROM ovh.order.cart_item_configurations
WHERE cart_id = '{{ cart_id }}' -- required
AND configuration_id = '{{ configuration_id }}' -- required
AND item_id = '{{ item_id }}' -- required
;
```
</TabItem>
<TabItem value="list">

Retrieve all configuration item of the cart item

```sql
SELECT
id,
label,
value
FROM ovh.order.cart_item_configurations
WHERE cart_id = '{{ cart_id }}' -- required
AND item_id = '{{ item_id }}' -- required
AND label = '{{ label }}'
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

Setup configuration item for the product

```sql
INSERT INTO ovh.order.cart_item_configurations (
label,
value,
cart_id,
item_id
)
SELECT 
'{{ label }}' /* required */,
'{{ value }}' /* required */,
'{{ cart_id }}',
'{{ item_id }}'
RETURNING
id,
label,
value
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: cart_item_configurations
  props:
    - name: cart_id
      value: "{{ cart_id }}"
      description: Required parameter for the cart_item_configurations resource.
    - name: item_id
      value: {{ item_id }}
      description: Required parameter for the cart_item_configurations resource.
    - name: label
      value: "{{ label }}"
      description: |
        Label for your configuration item
    - name: value
      value: "{{ value }}"
      description: |
        Value or resource URL on API.OVH.COM of your configuration item
`}</CodeBlock>

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

Delete configuration item

```sql
DELETE FROM ovh.order.cart_item_configurations
WHERE cart_id = '{{ cart_id }}' --required
AND configuration_id = '{{ configuration_id }}' --required
AND item_id = '{{ item_id }}' --required
;
```
</TabItem>
</Tabs>
