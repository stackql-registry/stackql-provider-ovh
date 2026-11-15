--- 
title: telephony_lines_hardware
hide_title: false
hide_table_of_contents: false
keywords:
  - telephony_lines_hardware
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

Creates, updates, deletes, gets or lists a <code>telephony_lines_hardware</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="telephony_lines_hardware" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.order.telephony_lines_hardware" /></td></tr>
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
    <td><a href="#parameter-hardware"><code>hardware</code></a>, <a href="#parameter-retractation"><code>retractation</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-mondial_relay_id"><code>mondial_relay_id</code></a>, <a href="#parameter-shipping_contact_id"><code>shipping_contact_id</code></a></td>
    <td>Get prices and contracts information</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-hardware"><code>hardware</code></a>, <a href="#parameter-retractation"><code>retractation</code></a></td>
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
    <td><code>string</code></td>
    <td>The hardware you want to order for this specific line</td>
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
<tr id="parameter-mondial_relay_id">
    <td><CopyableCode code="mondial_relay_id" /></td>
    <td><code>string</code></td>
    <td>Use /supply/mondialRelay entry point to specify a relay point and ignore shipping contact address information entry. (wire: mondialRelayId)</td>
</tr>
<tr id="parameter-shipping_contact_id">
    <td><CopyableCode code="shipping_contact_id" /></td>
    <td><code>string</code></td>
    <td>Shipping contact information id from /me entry point (wire: shippingContactId)</td>
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
FROM ovh.order.telephony_lines_hardware
WHERE hardware = '{{ hardware }}' -- required
AND retractation = '{{ retractation }}' -- required
AND service_name = '{{ service_name }}' -- required
AND mondial_relay_id = '{{ mondial_relay_id }}'
AND shipping_contact_id = '{{ shipping_contact_id }}'
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
INSERT INTO ovh.order.telephony_lines_hardware (
hardware,
mondial_relay_id,
retractation,
shipping_contact_id,
service_name
)
SELECT 
'{{ hardware }}' /* required */,
'{{ mondial_relay_id }}',
{{ retractation }} /* required */,
'{{ shipping_contact_id }}',
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
- name: telephony_lines_hardware
  props:
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the telephony_lines_hardware resource.
    - name: hardware
      value: "{{ hardware }}"
      description: |
        The hardware you want to order for this specific line
    - name: mondial_relay_id
      value: "{{ mondial_relay_id }}"
      description: |
        Use /supply/mondialRelay entry point to specify a relay point and ignore shipping contact address information entry.
    - name: retractation
      value: {{ retractation }}
      description: |
        Retractation rights if set
    - name: shipping_contact_id
      value: "{{ shipping_contact_id }}"
      description: |
        Shipping contact information id from /me entry point
`}</CodeBlock>

</TabItem>
</Tabs>
