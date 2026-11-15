--- 
title: xdsl_spare_news
hide_title: false
hide_table_of_contents: false
keywords:
  - xdsl_spare_news
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

Creates, updates, deletes, gets or lists a <code>xdsl_spare_news</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="xdsl_spare_news" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.order.xdsl_spare_news" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
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
    <td><CopyableCode code="order_id" /></td>
    <td><code>integer</code></td>
    <td>Identifier of the order (wire: orderId)</td>
</tr>
<tr>
    <td><CopyableCode code="contracts" /></td>
    <td><code>array</code></td>
    <td>List of contracts related to the order</td>
</tr>
<tr>
    <td><CopyableCode code="details" /></td>
    <td><code>array</code></td>
    <td>Details of the order</td>
</tr>
<tr>
    <td><CopyableCode code="prices" /></td>
    <td><code>object</code></td>
    <td>Prices of the order including with and without taxes</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td>URL to download the order</td>
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
    <td><a href="#parameter-brand"><code>brand</code></a>, <a href="#parameter-quantity"><code>quantity</code></a>, <a href="#parameter-shipping_contact_id"><code>shipping_contact_id</code></a></td>
    <td><a href="#parameter-mondial_relay_id"><code>mondial_relay_id</code></a></td>
    <td>Get prices and contracts information</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-brand"><code>brand</code></a>, <a href="#parameter-quantity"><code>quantity</code></a>, <a href="#parameter-shipping_contact_id"><code>shipping_contact_id</code></a></td>
    <td></td>
    <td>Create order</td>
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
<tr id="parameter-brand">
    <td><CopyableCode code="brand" /></td>
    <td><code>string</code></td>
    <td>Spare modem brand model</td>
</tr>
<tr id="parameter-quantity">
    <td><CopyableCode code="quantity" /></td>
    <td><code>integer</code></td>
    <td>Number of modem quantity</td>
</tr>
<tr id="parameter-shipping_contact_id">
    <td><CopyableCode code="shipping_contact_id" /></td>
    <td><code>integer</code></td>
    <td>Shipping contact information id from /me entry point (wire: shippingContactId)</td>
</tr>
<tr id="parameter-mondial_relay_id">
    <td><CopyableCode code="mondial_relay_id" /></td>
    <td><code>string</code></td>
    <td>Use /supply/mondialRelay entry point to specify a relay point and ignore shipping contact address information entry. (wire: mondialRelayId)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

Get prices and contracts information

```sql
SELECT
order_id,
contracts,
details,
prices,
url
FROM ovh.order.xdsl_spare_news
WHERE brand = '{{ brand }}' -- required
AND quantity = '{{ quantity }}' -- required
AND shipping_contact_id = '{{ shipping_contact_id }}' -- required
AND mondial_relay_id = '{{ mondial_relay_id }}'
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

Create order

```sql
INSERT INTO ovh.order.xdsl_spare_news (
brand,
mondial_relay_id,
quantity,
shipping_contact_id
)
SELECT 
'{{ brand }}' /* required */,
'{{ mondial_relay_id }}',
{{ quantity }} /* required */,
{{ shipping_contact_id }} /* required */
RETURNING
order_id,
contracts,
details,
prices,
url
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: xdsl_spare_news
  props:
    - name: brand
      value: "{{ brand }}"
      description: |
        Spare modem brand model
    - name: mondial_relay_id
      value: "{{ mondial_relay_id }}"
      description: |
        Use /supply/mondialRelay entry point to specify a relay point and ignore shipping contact address information entry.
    - name: quantity
      value: {{ quantity }}
      description: |
        Number of modem quantity
    - name: shipping_contact_id
      value: {{ shipping_contact_id }}
      description: |
        Shipping contact information id from /me entry point
`}</CodeBlock>

</TabItem>
</Tabs>
