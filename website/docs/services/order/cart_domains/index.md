--- 
title: cart_domains
hide_title: false
hide_table_of_contents: false
keywords:
  - cart_domains
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

Creates, updates, deletes, gets or lists a <code>cart_domains</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cart_domains" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.order.cart_domains" /></td></tr>
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

Information about a product for Order/Cart

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
    <td><CopyableCode code="offer_id" /></td>
    <td><code>string</code></td>
    <td>ID of the related offer (wire: offerId)</td>
</tr>
<tr>
    <td><CopyableCode code="product_id" /></td>
    <td><code>string</code></td>
    <td>Product identifier (wire: productId)</td>
</tr>
<tr>
    <td><CopyableCode code="action" /></td>
    <td><code>string</code></td>
    <td>Action kind (create, trade, transfer, update)</td>
</tr>
<tr>
    <td><CopyableCode code="configurations" /></td>
    <td><code>array</code></td>
    <td>Information about the configurations required</td>
</tr>
<tr>
    <td><CopyableCode code="current_nameservers" /></td>
    <td><code>array</code></td>
    <td>Current nameservers of the domain (from RDAP) (wire: currentNameservers)</td>
</tr>
<tr>
    <td><CopyableCode code="delivery_time" /></td>
    <td><code>string</code></td>
    <td>Information about the estimated delivery time for the product (wire: deliveryTime)</td>
</tr>
<tr>
    <td><CopyableCode code="duration" /></td>
    <td><code>array</code></td>
    <td>List all the duration allowed for the product</td>
</tr>
<tr>
    <td><CopyableCode code="is_auth_info_required" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if an authInfo has to be provided to order this product, only set on transfer products: the incoming transfer process of some extensions does not rely on an authInfo at all. Mirrors lifecycle.transfer.isAuthInfoRequired of the extension registry configurations (wire: isAuthInfoRequired)</td>
</tr>
<tr>
    <td><CopyableCode code="is_transfer_locked" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if the domain has a transfer lock status (client or server transfer prohibited) (wire: isTransferLocked)</td>
</tr>
<tr>
    <td><CopyableCode code="offer" /></td>
    <td><code>string</code></td>
    <td>Information about the domain's offer (gold|diamond|platinium)</td>
</tr>
<tr>
    <td><CopyableCode code="orderable" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if the product is orderable or not</td>
</tr>
<tr>
    <td><CopyableCode code="phase" /></td>
    <td><code>string</code></td>
    <td>Information about the domain phase</td>
</tr>
<tr>
    <td><CopyableCode code="prices" /></td>
    <td><code>array</code></td>
    <td>Price details of the product</td>
</tr>
<tr>
    <td><CopyableCode code="pricing_mode" /></td>
    <td><code>string</code></td>
    <td>Pricing model identifier for this product (wire: pricingMode)</td>
</tr>
<tr>
    <td><CopyableCode code="quantity_max" /></td>
    <td><code>integer</code></td>
    <td>Maximum quantity purchasable for this product (wire: quantityMax)</td>
</tr>
<tr>
    <td><CopyableCode code="recommended_duration" /></td>
    <td><code>string (duration)</code></td>
    <td>Recommended duration for this product (wire: recommendedDuration)</td>
</tr>
<tr>
    <td><CopyableCode code="transfer" /></td>
    <td><code>object</code></td>
    <td>Conditions affecting the transfer of this domain, only set on transfer products. Supersedes isTransferLocked, which is kept during deprecation</td>
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
    <td><a href="#parameter-cart_id"><code>cart_id</code></a>, <a href="#parameter-domain"><code>domain</code></a></td>
    <td></td>
    <td>Get information about a domain name</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-cart_id"><code>cart_id</code></a>, <a href="#parameter-domain"><code>domain</code></a></td>
    <td></td>
    <td>Post a new domain name in your cart</td>
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
<tr id="parameter-domain">
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>Domain name requested</td>
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

Get information about a domain name

```sql
SELECT
offer_id,
product_id,
action,
configurations,
current_nameservers,
delivery_time,
duration,
is_auth_info_required,
is_transfer_locked,
offer,
orderable,
phase,
prices,
pricing_mode,
quantity_max,
recommended_duration,
transfer
FROM ovh.order.cart_domains
WHERE cart_id = '{{ cart_id }}' -- required
AND domain = '{{ domain }}' -- required
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

Post a new domain name in your cart

```sql
INSERT INTO ovh.order.cart_domains (
domain,
duration,
offer_id,
plan_code,
pricing_mode,
quantity,
cart_id
)
SELECT 
'{{ domain }}' /* required */,
'{{ duration }}',
'{{ offer_id }}',
'{{ plan_code }}',
'{{ pricing_mode }}',
{{ quantity }},
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
- name: cart_domains
  props:
    - name: cart_id
      value: "{{ cart_id }}"
      description: Required parameter for the cart_domains resource.
    - name: domain
      value: "{{ domain }}"
      description: |
        Domain name to order
    - name: duration
      value: "{{ duration }}"
      description: |
        Duration for the product
    - name: offer_id
      value: "{{ offer_id }}"
      description: |
        Offer unique identifier
    - name: plan_code
      value: "{{ plan_code }}"
      description: |
        Identifier of the commercial offer
    - name: pricing_mode
      value: "{{ pricing_mode }}"
      description: |
        Pricing mode selected for the purchase of the product
    - name: quantity
      value: {{ quantity }}
      description: |
        Quantity to order
`}</CodeBlock>

</TabItem>
</Tabs>
