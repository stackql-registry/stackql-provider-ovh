--- 
title: over_the_box_migrates
hide_title: false
hide_table_of_contents: false
keywords:
  - over_the_box_migrates
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

Creates, updates, deletes, gets or lists an <code>over_the_box_migrates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="over_the_box_migrates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.order.over_the_box_migrates" /></td></tr>
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
    <td><a href="#parameter-hardware"><code>hardware</code></a>, <a href="#parameter-offer"><code>offer</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-shipping_contact_id"><code>shipping_contact_id</code></a>, <a href="#parameter-shipping_method"><code>shipping_method</code></a>, <a href="#parameter-shipping_relay_id"><code>shipping_relay_id</code></a></td>
    <td>Get prices and contracts information</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-hardware"><code>hardware</code></a>, <a href="#parameter-offer"><code>offer</code></a></td>
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
<tr id="parameter-hardware">
    <td><CopyableCode code="hardware" /></td>
    <td><code>boolean</code></td>
    <td>If you want to migrate with a new hardware</td>
</tr>
<tr id="parameter-offer">
    <td><CopyableCode code="offer" /></td>
    <td><code>string</code></td>
    <td>Offer name to migrate to</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The internal name of your overTheBox offer (wire: serviceName)</td>
</tr>
<tr id="parameter-shipping_contact_id">
    <td><CopyableCode code="shipping_contact_id" /></td>
    <td><code>string</code></td>
    <td>Contact ID to deliver to (wire: shippingContactID)</td>
</tr>
<tr id="parameter-shipping_method">
    <td><CopyableCode code="shipping_method" /></td>
    <td><code>string</code></td>
    <td>How do you want your shipment shipped (wire: shippingMethod)</td>
</tr>
<tr id="parameter-shipping_relay_id">
    <td><CopyableCode code="shipping_relay_id" /></td>
    <td><code>integer</code></td>
    <td>Relay ID to deliver to. Needed if shipping is mondialRelay (wire: shippingRelayID)</td>
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
FROM ovh.order.over_the_box_migrates
WHERE hardware = '{{ hardware }}' -- required
AND offer = '{{ offer }}' -- required
AND service_name = '{{ service_name }}' -- required
AND shipping_contact_id = '{{ shipping_contact_id }}'
AND shipping_method = '{{ shipping_method }}'
AND shipping_relay_id = '{{ shipping_relay_id }}'
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
INSERT INTO ovh.order.over_the_box_migrates (
hardware,
offer,
shipping_contact_id,
shipping_method,
shipping_relay_id,
service_name
)
SELECT 
{{ hardware }} /* required */,
'{{ offer }}' /* required */,
'{{ shipping_contact_id }}',
'{{ shipping_method }}',
{{ shipping_relay_id }},
'{{ service_name }}'
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
- name: over_the_box_migrates
  props:
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the over_the_box_migrates resource.
    - name: hardware
      value: {{ hardware }}
      description: |
        If you want to migrate with a new hardware
    - name: offer
      value: "{{ offer }}"
      description: |
        Offer name to migrate to
    - name: shipping_contact_id
      value: "{{ shipping_contact_id }}"
      description: |
        Contact ID to deliver to
    - name: shipping_method
      value: "{{ shipping_method }}"
      description: |
        How do you want your shipment shipped
      valid_values: ['dhl', 'mondialRelay']
    - name: shipping_relay_id
      value: {{ shipping_relay_id }}
      description: |
        Relay ID to deliver to. Needed if shipping is mondialRelay
`}</CodeBlock>

</TabItem>
</Tabs>
