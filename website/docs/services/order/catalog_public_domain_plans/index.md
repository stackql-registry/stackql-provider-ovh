--- 
title: catalog_public_domain_plans
hide_title: false
hide_table_of_contents: false
keywords:
  - catalog_public_domain_plans
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

Creates, updates, deletes, gets or lists a <code>catalog_public_domain_plans</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="catalog_public_domain_plans" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.order.catalog_public_domain_plans" /></td></tr>
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

A commercial plan from the catalog

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
    <td><CopyableCode code="plan_id" /></td>
    <td><code>integer</code></td>
    <td>Internal numeric plan identifier (wire: planId)</td>
</tr>
<tr>
    <td><CopyableCode code="family_name" /></td>
    <td><code>string</code></td>
    <td>Name of the product family this plan belongs to (wire: familyName)</td>
</tr>
<tr>
    <td><CopyableCode code="invoice_name" /></td>
    <td><code>string</code></td>
    <td>Name displayed on invoices for this plan (wire: invoiceName)</td>
</tr>
<tr>
    <td><CopyableCode code="plan_code" /></td>
    <td><code>string</code></td>
    <td>Commercial offer identifier (wire: planCode)</td>
</tr>
<tr>
    <td><CopyableCode code="pricing_type" /></td>
    <td><code>string</code></td>
    <td>Pricing type of the plan (consumption, purchase, rental) (wire: pricingType)</td>
</tr>
<tr>
    <td><CopyableCode code="pricings" /></td>
    <td><code>array</code></td>
    <td>Pricings of the plan</td>
</tr>
<tr>
    <td><CopyableCode code="promotions" /></td>
    <td><code>array</code></td>
    <td>Promotions applicable to the plan</td>
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
    <td><a href="#parameter-ovh_subsidiary"><code>ovh_subsidiary</code></a></td>
    <td><a href="#parameter-x_pagination_cursor"><code>x_pagination_cursor</code></a>, <a href="#parameter-x_pagination_size"><code>x_pagination_size</code></a>, <a href="#parameter-plan_code"><code>plan_code</code></a></td>
    <td>Returns the main plans paginated, or the plans matching the `planCode` query parameter when provided. When `planCode` is set, pagination is ignored.</td>
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
<tr id="parameter-ovh_subsidiary">
    <td><CopyableCode code="ovh_subsidiary" /></td>
    <td><code>string</code></td>
    <td>Subsidiary of the country you want to consult plans for (wire: ovhSubsidiary)</td>
</tr>
<tr id="parameter-plan_code">
    <td><CopyableCode code="plan_code" /></td>
    <td><code>array</code></td>
    <td>Optional list of plan codes to fetch (wire: planCode)</td>
</tr>
<tr id="parameter-x_pagination_cursor">
    <td><CopyableCode code="x_pagination_cursor" /></td>
    <td><code>string</code></td>
    <td>Pagination cursor (wire: X-Pagination-Cursor)</td>
</tr>
<tr id="parameter-x_pagination_size">
    <td><CopyableCode code="x_pagination_size" /></td>
    <td><code>integer</code></td>
    <td>Pagination size (wire: X-Pagination-Size)</td>
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

Returns the main plans paginated, or the plans matching the `planCode` query parameter when provided. When `planCode` is set, pagination is ignored.

```sql
SELECT
plan_id,
family_name,
invoice_name,
plan_code,
pricing_type,
pricings,
promotions
FROM ovh.order.catalog_public_domain_plans
WHERE ovh_subsidiary = '{{ ovh_subsidiary }}' -- required
AND x_pagination_cursor = '{{ x_pagination_cursor }}'
AND x_pagination_size = '{{ x_pagination_size }}'
AND plan_code = '{{ plan_code }}'
;
```
</TabItem>
</Tabs>
