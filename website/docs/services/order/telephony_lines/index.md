--- 
title: telephony_lines
hide_title: false
hide_table_of_contents: false
keywords:
  - telephony_lines
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

Creates, updates, deletes, gets or lists a <code>telephony_lines</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="telephony_lines" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.order.telephony_lines" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list_by_service_name"
    values={[
        { label: 'list_by_service_name', value: 'list_by_service_name' },
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list_by_service_name">

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
    <td><CopyableCode code="value" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
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
<TabItem value="list">

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
    <td><CopyableCode code="value" /></td>
    <td><code>string</code></td>
    <td></td>
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
    <td><a href="#list_by_service_name"><CopyableCode code="list_by_service_name" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get allowed options</td>
</tr>
<tr>
    <td><a href="#get"><CopyableCode code="get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-display_universal_directories"><code>display_universal_directories</code></a>, <a href="#parameter-extra_simultaneous_lines"><code>extra_simultaneous_lines</code></a>, <a href="#parameter-offers"><code>offers</code></a>, <a href="#parameter-owner_contact_ids"><code>owner_contact_ids</code></a>, <a href="#parameter-quantity"><code>quantity</code></a>, <a href="#parameter-retractation"><code>retractation</code></a>, <a href="#parameter-shipping_contact_id"><code>shipping_contact_id</code></a>, <a href="#parameter-types"><code>types</code></a></td>
    <td><a href="#parameter-brand"><code>brand</code></a>, <a href="#parameter-mondial_relay_id"><code>mondial_relay_id</code></a>, <a href="#parameter-zones"><code>zones</code></a></td>
    <td>Get prices and contracts information (Deprecated, will be removed)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>List lines</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-display_universal_directories"><code>display_universal_directories</code></a>, <a href="#parameter-extra_simultaneous_lines"><code>extra_simultaneous_lines</code></a>, <a href="#parameter-offers"><code>offers</code></a>, <a href="#parameter-owner_contact_ids"><code>owner_contact_ids</code></a>, <a href="#parameter-quantity"><code>quantity</code></a>, <a href="#parameter-retractation"><code>retractation</code></a>, <a href="#parameter-shipping_contact_id"><code>shipping_contact_id</code></a>, <a href="#parameter-types"><code>types</code></a></td>
    <td></td>
    <td>Create order (Deprecated, will be removed)</td>
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
<tr id="parameter-billing_account">
    <td><CopyableCode code="billing_account" /></td>
    <td><code>string</code></td>
    <td>The name of your billingAccount (wire: billingAccount)</td>
</tr>
<tr id="parameter-display_universal_directories">
    <td><CopyableCode code="display_universal_directories" /></td>
    <td><code>array</code></td>
    <td>Publish owner contact informations on universal directories or not (wire: displayUniversalDirectories)</td>
</tr>
<tr id="parameter-extra_simultaneous_lines">
    <td><CopyableCode code="extra_simultaneous_lines" /></td>
    <td><code>array</code></td>
    <td>Additional simultaneous numbers. Set several simultaneous lines for each line per phone (wire: extraSimultaneousLines)</td>
</tr>
<tr id="parameter-offers">
    <td><CopyableCode code="offers" /></td>
    <td><code>array</code></td>
    <td>The line offers. Set several offers for each line per phone (Deprecated, use offer method instead)</td>
</tr>
<tr id="parameter-owner_contact_ids">
    <td><CopyableCode code="owner_contact_ids" /></td>
    <td><code>array</code></td>
    <td>Owner contact information id from /me entry point for each line (wire: ownerContactIds)</td>
</tr>
<tr id="parameter-quantity">
    <td><CopyableCode code="quantity" /></td>
    <td><code>integer</code></td>
    <td>Quantity of request repetition in this configuration</td>
</tr>
<tr id="parameter-retractation">
    <td><CopyableCode code="retractation" /></td>
    <td><code>boolean</code></td>
    <td>Retractation rights if set</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>Your line number (wire: serviceName)</td>
</tr>
<tr id="parameter-shipping_contact_id">
    <td><CopyableCode code="shipping_contact_id" /></td>
    <td><code>integer</code></td>
    <td>Shipping contact information id from /me entry point (wire: shippingContactId)</td>
</tr>
<tr id="parameter-types">
    <td><CopyableCode code="types" /></td>
    <td><code>array</code></td>
    <td>Number type. Set several types for each line per phone</td>
</tr>
<tr id="parameter-brand">
    <td><CopyableCode code="brand" /></td>
    <td><code>string</code></td>
    <td>Phone brands wanted with the offer. Set null for NO phone</td>
</tr>
<tr id="parameter-mondial_relay_id">
    <td><CopyableCode code="mondial_relay_id" /></td>
    <td><code>string</code></td>
    <td>Use /supply/mondialRelay entry point to specify a relay point and ignore shipping address information entry. (wire: mondialRelayId)</td>
</tr>
<tr id="parameter-zones">
    <td><CopyableCode code="zones" /></td>
    <td><code>array</code></td>
    <td>Geographic zones. Let empty for nogeographic type. Set several zones for each line per phone</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list_by_service_name"
    values={[
        { label: 'list_by_service_name', value: 'list_by_service_name' },
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list_by_service_name">

Get allowed options

```sql
SELECT
value
FROM ovh.order.telephony_lines
WHERE service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="get">

Get prices and contracts information (Deprecated, will be removed)

```sql
SELECT
order_id,
contracts,
details,
prices,
url
FROM ovh.order.telephony_lines
WHERE billing_account = '{{ billing_account }}' -- required
AND display_universal_directories = '{{ display_universal_directories }}' -- required
AND extra_simultaneous_lines = '{{ extra_simultaneous_lines }}' -- required
AND offers = '{{ offers }}' -- required
AND owner_contact_ids = '{{ owner_contact_ids }}' -- required
AND quantity = '{{ quantity }}' -- required
AND retractation = '{{ retractation }}' -- required
AND shipping_contact_id = '{{ shipping_contact_id }}' -- required
AND types = '{{ types }}' -- required
AND brand = '{{ brand }}'
AND mondial_relay_id = '{{ mondial_relay_id }}'
AND zones = '{{ zones }}'
;
```
</TabItem>
<TabItem value="list">

List lines

```sql
SELECT
value
FROM ovh.order.telephony_lines
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

Create order (Deprecated, will be removed)

```sql
INSERT INTO ovh.order.telephony_lines (
brand,
display_universal_directories,
extra_simultaneous_lines,
mondial_relay_id,
offers,
owner_contact_ids,
quantity,
retractation,
shipping_contact_id,
types,
zones,
billing_account
)
SELECT 
'{{ brand }}',
'{{ display_universal_directories }}' /* required */,
'{{ extra_simultaneous_lines }}' /* required */,
'{{ mondial_relay_id }}',
'{{ offers }}' /* required */,
'{{ owner_contact_ids }}' /* required */,
{{ quantity }} /* required */,
{{ retractation }} /* required */,
{{ shipping_contact_id }} /* required */,
'{{ types }}' /* required */,
'{{ zones }}',
'{{ billing_account }}'
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
- name: telephony_lines
  props:
    - name: billing_account
      value: "{{ billing_account }}"
      description: Required parameter for the telephony_lines resource.
    - name: brand
      value: "{{ brand }}"
      description: |
        Phone brands wanted with the offer. Set null for NO phone
    - name: display_universal_directories
      value:
        - {{ display_universal_directories }}
      description: |
        Publish owner contact informations on universal directories or not
    - name: extra_simultaneous_lines
      value:
        - {{ extra_simultaneous_lines }}
      description: |
        Additional simultaneous numbers. Set several simultaneous lines for each line per phone
    - name: mondial_relay_id
      value: "{{ mondial_relay_id }}"
      description: |
        Use /supply/mondialRelay entry point to specify a relay point and ignore shipping address information entry.
    - name: offers
      value:
        - "{{ offers }}"
      description: |
        The line offers. Set several offers for each line per phone (Deprecated, use offer method instead)
    - name: owner_contact_ids
      value:
        - {{ owner_contact_ids }}
      description: |
        Owner contact information id from /me entry point for each line
    - name: quantity
      value: {{ quantity }}
      description: |
        Quantity of request repetition in this configuration
    - name: retractation
      value: {{ retractation }}
      description: |
        Retractation rights if set
    - name: shipping_contact_id
      value: {{ shipping_contact_id }}
      description: |
        Shipping contact information id from /me entry point
    - name: types
      value:
        - "{{ types }}"
      description: |
        Number type. Set several types for each line per phone
    - name: zones
      value:
        - "{{ zones }}"
      description: |
        Geographic zones. Let empty for nogeographic type. Set several zones for each line per phone
`}</CodeBlock>

</TabItem>
</Tabs>
