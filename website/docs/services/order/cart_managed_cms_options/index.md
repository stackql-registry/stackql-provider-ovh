--- 
title: cart_managed_cms_options
hide_title: false
hide_table_of_contents: false
keywords:
  - cart_managed_cms_options
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

Creates, updates, deletes, gets or lists a <code>cart_managed_cms_options</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cart_managed_cms_options" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.order.cart_managed_cms_options" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

Representation of a generic product option

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
    <td><CopyableCode code="product_name" /></td>
    <td><code>string</code></td>
    <td>Name of the product (wire: productName)</td>
</tr>
<tr>
    <td><CopyableCode code="exclusive" /></td>
    <td><code>boolean</code></td>
    <td>Define if options of this family are exclusive with each other</td>
</tr>
<tr>
    <td><CopyableCode code="family" /></td>
    <td><code>string</code></td>
    <td>Option family</td>
</tr>
<tr>
    <td><CopyableCode code="mandatory" /></td>
    <td><code>boolean</code></td>
    <td>Define if an option of this family is mandatory</td>
</tr>
<tr>
    <td><CopyableCode code="plan_code" /></td>
    <td><code>string</code></td>
    <td>Product offer identifier (wire: planCode)</td>
</tr>
<tr>
    <td><CopyableCode code="prices" /></td>
    <td><code>array</code></td>
    <td>Prices of the product offer</td>
</tr>
<tr>
    <td><CopyableCode code="product_type" /></td>
    <td><code>string</code></td>
    <td>Product type (cloud_service, delivery, deposit, domain, implementation_services, saas_license, shipping, storage) (wire: productType)</td>
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
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-cart_id"><code>cart_id</code></a>, <a href="#parameter-plan_code"><code>plan_code</code></a></td>
    <td></td>
    <td>Get information about Managed CMS options</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-cart_id"><code>cart_id</code></a>, <a href="#parameter-duration"><code>duration</code></a>, <a href="#parameter-item_id"><code>item_id</code></a>, <a href="#parameter-plan_code"><code>plan_code</code></a>, <a href="#parameter-pricing_mode"><code>pricing_mode</code></a>, <a href="#parameter-quantity"><code>quantity</code></a></td>
    <td></td>
    <td>Post a new Managed CMS option in your cart</td>
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
<tr id="parameter-plan_code">
    <td><CopyableCode code="plan_code" /></td>
    <td><code>string</code></td>
    <td>Identifier of the Managed CMS you want to consult options (wire: planCode)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

Get information about Managed CMS options

```sql
SELECT
product_name,
exclusive,
family,
mandatory,
plan_code,
prices,
product_type
FROM ovh.order.cart_managed_cms_options
WHERE cart_id = '{{ cart_id }}' -- required
AND plan_code = '{{ plan_code }}' -- required
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

Post a new Managed CMS option in your cart

```sql
INSERT INTO ovh.order.cart_managed_cms_options (
duration,
item_id,
plan_code,
pricing_mode,
quantity,
cart_id
)
SELECT 
'{{ duration }}' /* required */,
{{ item_id }} /* required */,
'{{ plan_code }}' /* required */,
'{{ pricing_mode }}' /* required */,
{{ quantity }} /* required */,
'{{ cart_id }}'
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
settings
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: cart_managed_cms_options
  props:
    - name: cart_id
      value: "{{ cart_id }}"
      description: Required parameter for the cart_managed_cms_options resource.
    - name: duration
      value: "{{ duration }}"
      description: |
        Duration selected for the purchase of the product
    - name: item_id
      value: {{ item_id }}
      description: |
        Cart item to be linked
    - name: plan_code
      value: "{{ plan_code }}"
      description: |
        Identifier of the option offer
    - name: pricing_mode
      value: "{{ pricing_mode }}"
      description: |
        Pricing mode selected for the purchase of the product
    - name: quantity
      value: {{ quantity }}
      description: |
        Quantity of product desired
`}</CodeBlock>

</TabItem>
</Tabs>
