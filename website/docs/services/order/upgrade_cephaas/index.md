--- 
title: upgrade_cephaas
hide_title: false
hide_table_of_contents: false
keywords:
  - upgrade_cephaas
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

Creates, updates, deletes, gets or lists a <code>upgrade_cephaas</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="upgrade_cephaas" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.order.upgrade_cephaas" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list_by_service_name', value: 'list_by_service_name' },
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
    <td><CopyableCode code="operation" /></td>
    <td><code>object</code></td>
    <td>Upgrade operation</td>
</tr>
<tr>
    <td><CopyableCode code="order" /></td>
    <td><code>object</code></td>
    <td>Order placed</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_by_service_name">

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
    <td><a href="#get"><CopyableCode code="get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-plan_code"><code>plan_code</code></a>, <a href="#parameter-quantity"><code>quantity</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get a provisional order for the selected upgrade of your service (Beta version)</td>
</tr>
<tr>
    <td><a href="#list_by_service_name"><CopyableCode code="list_by_service_name" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Retrieve available offers to upgrade your service to (Beta version)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>List available services (Beta version)</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-plan_code"><code>plan_code</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-quantity"><code>quantity</code></a></td>
    <td></td>
    <td>Perform the requested upgrade of your service (Beta version)</td>
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
<tr id="parameter-plan_code">
    <td><CopyableCode code="plan_code" /></td>
    <td><code>string</code></td>
    <td>Plan code of the offer you want to upgrade to (wire: planCode)</td>
</tr>
<tr id="parameter-quantity">
    <td><CopyableCode code="quantity" /></td>
    <td><code>integer</code></td>
    <td>Quantity you want to upgrade to</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The internal ID of Ceph service (wire: serviceName)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list_by_service_name', value: 'list_by_service_name' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Get a provisional order for the selected upgrade of your service (Beta version)

```sql
SELECT
operation,
order
FROM ovh.order.upgrade_cephaas
WHERE plan_code = '{{ plan_code }}' -- required
AND quantity = '{{ quantity }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list_by_service_name">

Retrieve available offers to upgrade your service to (Beta version)

```sql
SELECT
product_name,
plan_code,
prices,
product_type
FROM ovh.order.upgrade_cephaas
WHERE service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List available services (Beta version)

```sql
SELECT
value
FROM ovh.order.upgrade_cephaas
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

Perform the requested upgrade of your service (Beta version)

```sql
INSERT INTO ovh.order.upgrade_cephaas (
auto_pay_with_preferred_payment_method,
quantity,
plan_code,
service_name
)
SELECT 
{{ auto_pay_with_preferred_payment_method }},
{{ quantity }} /* required */,
'{{ plan_code }}',
'{{ service_name }}'
RETURNING
operation,
order
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: upgrade_cephaas
  props:
    - name: plan_code
      value: "{{ plan_code }}"
      description: Required parameter for the upgrade_cephaas resource.
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the upgrade_cephaas resource.
    - name: auto_pay_with_preferred_payment_method
      value: {{ auto_pay_with_preferred_payment_method }}
      description: |
        Indicates that order will be automatically paid with preferred payment method
    - name: quantity
      value: {{ quantity }}
      description: |
        Quantity you want to upgrade to
`}</CodeBlock>

</TabItem>
</Tabs>
