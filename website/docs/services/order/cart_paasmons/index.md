--- 
title: cart_paasmons
hide_title: false
hide_table_of_contents: false
keywords:
  - cart_paasmons
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

Creates, updates, deletes, gets or lists a <code>cart_paasmons</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cart_paasmons" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.order.cart_paasmons" /></td></tr>
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

Representation of a generic product

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
    <td><a href="#parameter-cart_id"><code>cart_id</code></a></td>
    <td></td>
    <td>Get information about PaaS Monitoring offers</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-cart_id"><code>cart_id</code></a>, <a href="#parameter-duration"><code>duration</code></a>, <a href="#parameter-plan_code"><code>plan_code</code></a>, <a href="#parameter-pricing_mode"><code>pricing_mode</code></a>, <a href="#parameter-quantity"><code>quantity</code></a></td>
    <td></td>
    <td>Post a new PaaS Monitoring item in your cart</td>
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

Get information about PaaS Monitoring offers

```sql
SELECT
product_name,
plan_code,
prices,
product_type
FROM ovh.order.cart_paasmons
WHERE cart_id = '{{ cart_id }}' -- required
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

Post a new PaaS Monitoring item in your cart

```sql
INSERT INTO ovh.order.cart_paasmons (
duration,
plan_code,
pricing_mode,
quantity,
cart_id
)
SELECT 
'{{ duration }}' /* required */,
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
- name: cart_paasmons
  props:
    - name: cart_id
      value: "{{ cart_id }}"
      description: Required parameter for the cart_paasmons resource.
    - name: duration
      value: "{{ duration }}"
      description: |
        Duration selected for the purchase of the product
    - name: plan_code
      value: "{{ plan_code }}"
      description: |
        Identifier of the offer
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
