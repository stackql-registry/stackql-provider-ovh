--- 
title: detaches
hide_title: false
hide_table_of_contents: false
keywords:
  - detaches
  - services
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

Creates, updates, deletes, gets or lists a <code>detaches</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="detaches" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.services.detaches" /></td></tr>
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
    <td><CopyableCode code="invoice_name" /></td>
    <td><code>string</code></td>
    <td>Name displayed in the invoice (wire: invoiceName)</td>
</tr>
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
    <td><CopyableCode code="invoice_name" /></td>
    <td><code>string</code></td>
    <td>Name displayed in the invoice (wire: invoiceName)</td>
</tr>
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
    <td><a href="#get"><CopyableCode code="get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-plan_code"><code>plan_code</code></a>, <a href="#parameter-service_id"><code>service_id</code></a></td>
    <td></td>
    <td>View an offer this option can be converted to (Beta version)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_id"><code>service_id</code></a></td>
    <td></td>
    <td>List offers this option can be converted to (Beta version)</td>
</tr>
<tr>
    <td><a href="#execute"><CopyableCode code="execute" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-planCode"><code>planCode</code></a>, <a href="#parameter-serviceId"><code>serviceId</code></a>, <a href="#parameter-duration"><code>duration</code></a>, <a href="#parameter-pricingMode"><code>pricingMode</code></a>, <a href="#parameter-quantity"><code>quantity</code></a></td>
    <td></td>
    <td>Perform the migration to a standalone offer. May require you to pay an Order (Beta version)</td>
</tr>
<tr>
    <td><a href="#simulate"><CopyableCode code="simulate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-planCode"><code>planCode</code></a>, <a href="#parameter-serviceId"><code>serviceId</code></a>, <a href="#parameter-duration"><code>duration</code></a>, <a href="#parameter-pricingMode"><code>pricingMode</code></a>, <a href="#parameter-quantity"><code>quantity</code></a></td>
    <td></td>
    <td>Simulate the migration to a standalone offer. It won't generate any Order or issue any changes to your Service. (Beta version)</td>
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
<tr id="parameter-planCode">
    <td><CopyableCode code="planCode" /></td>
    <td><code>string</code></td>
    <td>Plan code</td>
</tr>
<tr id="parameter-plan_code">
    <td><CopyableCode code="plan_code" /></td>
    <td><code>string</code></td>
    <td>Plan code (wire: planCode)</td>
</tr>
<tr id="parameter-serviceId">
    <td><CopyableCode code="serviceId" /></td>
    <td><code>integer</code></td>
    <td>Service ID</td>
</tr>
<tr id="parameter-service_id">
    <td><CopyableCode code="service_id" /></td>
    <td><code>integer</code></td>
    <td>Service ID (wire: serviceId)</td>
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

View an offer this option can be converted to (Beta version)

```sql
SELECT
invoice_name,
product_name,
plan_code,
prices,
product_type
FROM ovh.services.detaches
WHERE plan_code = '{{ plan_code }}' -- required
AND service_id = '{{ service_id }}' -- required
;
```
</TabItem>
<TabItem value="list">

List offers this option can be converted to (Beta version)

```sql
SELECT
invoice_name,
product_name,
plan_code,
prices,
product_type
FROM ovh.services.detaches
WHERE service_id = '{{ service_id }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="execute"
    values={[
        { label: 'execute', value: 'execute' },
        { label: 'simulate', value: 'simulate' }
    ]}
>
<TabItem value="execute">

Perform the migration to a standalone offer. May require you to pay an Order (Beta version)

```sql
EXEC ovh.services.detaches.execute 
@planCode='{{ planCode }}' --required, 
@serviceId='{{ serviceId }}' --required 
@@json=
'{
"addons": "{{ addons }}", 
"autoPayWithPreferredPaymentMethod": {{ autoPayWithPreferredPaymentMethod }}, 
"duration": "{{ duration }}", 
"pricingMode": "{{ pricingMode }}", 
"quantity": {{ quantity }}
}'
;
```
</TabItem>
<TabItem value="simulate">

Simulate the migration to a standalone offer. It won't generate any Order or issue any changes to your Service. (Beta version)

```sql
EXEC ovh.services.detaches.simulate 
@planCode='{{ planCode }}' --required, 
@serviceId='{{ serviceId }}' --required 
@@json=
'{
"addons": "{{ addons }}", 
"autoPayWithPreferredPaymentMethod": {{ autoPayWithPreferredPaymentMethod }}, 
"duration": "{{ duration }}", 
"pricingMode": "{{ pricingMode }}", 
"quantity": {{ quantity }}
}'
;
```
</TabItem>
</Tabs>
