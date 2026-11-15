--- 
title: modem_comfort_exchanges
hide_title: false
hide_table_of_contents: false
keywords:
  - modem_comfort_exchanges
  - xdsl
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

Creates, updates, deletes, gets or lists a <code>modem_comfort_exchanges</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="modem_comfort_exchanges" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.xdsl.modem_comfort_exchanges" /></td></tr>
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
    <td><CopyableCode code="can_exchange" /></td>
    <td><code>boolean</code></td>
    <td>To know if you can exchange your modem (wire: canExchange)</td>
</tr>
<tr>
    <td><CopyableCode code="new_model" /></td>
    <td><code>string</code></td>
    <td>Model of the new modem (wire: newModel)</td>
</tr>
<tr>
    <td><CopyableCode code="price" /></td>
    <td><code>object</code></td>
    <td>Price with it's currency and textual representation</td>
</tr>
<tr>
    <td><CopyableCode code="price_with_tax" /></td>
    <td><code>object</code></td>
    <td>Price with it's currency and textual representation (wire: priceWithTax)</td>
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
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Returns whether the modem of the access can be exchanged for the latest model, the new model and the price with and without tax.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Orders the replacement of the modem of the access by the latest model. Fees apply. Returns the order.</td>
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
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>Service name (wire: serviceName)</td>
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

Returns whether the modem of the access can be exchanged for the latest model, the new model and the price with and without tax.

```sql
SELECT
can_exchange,
new_model,
price,
price_with_tax
FROM ovh.xdsl.modem_comfort_exchanges
WHERE service_name = '{{ service_name }}' -- required
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

Orders the replacement of the modem of the access by the latest model. Fees apply. Returns the order.

```sql
INSERT INTO ovh.xdsl.modem_comfort_exchanges (
contact_shipping,
service_name
)
SELECT 
'{{ contact_shipping }}',
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
- name: modem_comfort_exchanges
  props:
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the modem_comfort_exchanges resource.
    - name: contact_shipping
      value: "{{ contact_shipping }}"
      description: |
        Customer identifier for shipping address. By default Internet access address will be used. Allowed values are nichandle or «/me/contact/xyz»
`}</CodeBlock>

</TabItem>
</Tabs>
