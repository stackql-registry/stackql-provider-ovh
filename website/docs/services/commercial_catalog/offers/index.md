--- 
title: offers
hide_title: false
hide_table_of_contents: false
keywords:
  - offers
  - commercial_catalog
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

Creates, updates, deletes, gets or lists an <code>offers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="offers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.commercial_catalog.offers" /></td></tr>
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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>Unique identifier of the offer</td>
</tr>
<tr>
    <td><CopyableCode code="code" /></td>
    <td><code>string</code></td>
    <td>Unique code for the offer</td>
</tr>
<tr>
    <td><CopyableCode code="commercial_rating_values" /></td>
    <td><code>array</code></td>
    <td>Applicable commercial rating values (wire: commercialRatingValues)</td>
</tr>
<tr>
    <td><CopyableCode code="descriptions" /></td>
    <td><code>array</code></td>
    <td>Offer description</td>
</tr>
<tr>
    <td><CopyableCode code="engagements" /></td>
    <td><code>array</code></td>
    <td>List of engagements available to subscribe the offer to</td>
</tr>
<tr>
    <td><CopyableCode code="legacy" /></td>
    <td><code>object</code></td>
    <td>Offer information based on previous model used for migration to the new model</td>
</tr>
<tr>
    <td><CopyableCode code="nature" /></td>
    <td><code>string</code></td>
    <td>Offer nature (BILLING_PLAN, PACK, REGULAR, STRUCTURAL)</td>
</tr>
<tr>
    <td><CopyableCode code="offers" /></td>
    <td><code>array</code></td>
    <td>Sub offers when type is composite</td>
</tr>
<tr>
    <td><CopyableCode code="product" /></td>
    <td><code>object</code></td>
    <td>Product linked to the offer</td>
</tr>
<tr>
    <td><CopyableCode code="technical_requirements" /></td>
    <td><code>array</code></td>
    <td>List of technical requirements of the product linked to the offer (wire: technicalRequirements)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Offer type (ATOMIC, COMPOSITE)</td>
</tr>
<tr>
    <td><CopyableCode code="validity" /></td>
    <td><code>object</code></td>
    <td>Offer validity information</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>integer</code></td>
    <td>Offer version, increase on update</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Defines a commercial catalog offer

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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>Unique identifier of the offer</td>
</tr>
<tr>
    <td><CopyableCode code="code" /></td>
    <td><code>string</code></td>
    <td>Unique code for the offer</td>
</tr>
<tr>
    <td><CopyableCode code="commercial_rating_values" /></td>
    <td><code>array</code></td>
    <td>Applicable commercial rating values (wire: commercialRatingValues)</td>
</tr>
<tr>
    <td><CopyableCode code="descriptions" /></td>
    <td><code>array</code></td>
    <td>Offer description</td>
</tr>
<tr>
    <td><CopyableCode code="engagements" /></td>
    <td><code>array</code></td>
    <td>List of engagements available to subscribe the offer to</td>
</tr>
<tr>
    <td><CopyableCode code="legacy" /></td>
    <td><code>object</code></td>
    <td>Offer information based on previous model used for migration to the new model</td>
</tr>
<tr>
    <td><CopyableCode code="nature" /></td>
    <td><code>string</code></td>
    <td>Offer nature (BILLING_PLAN, PACK, REGULAR, STRUCTURAL)</td>
</tr>
<tr>
    <td><CopyableCode code="offers" /></td>
    <td><code>array</code></td>
    <td>Sub offers when type is composite</td>
</tr>
<tr>
    <td><CopyableCode code="product" /></td>
    <td><code>object</code></td>
    <td>Product linked to the offer</td>
</tr>
<tr>
    <td><CopyableCode code="technical_requirements" /></td>
    <td><code>array</code></td>
    <td>List of technical requirements of the product linked to the offer (wire: technicalRequirements)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Offer type (ATOMIC, COMPOSITE)</td>
</tr>
<tr>
    <td><CopyableCode code="validity" /></td>
    <td><code>object</code></td>
    <td>Offer validity information</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>integer</code></td>
    <td>Offer version, increase on update</td>
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
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Get details of an offer</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-x_pagination_cursor"><code>x_pagination_cursor</code></a>, <a href="#parameter-x_pagination_size"><code>x_pagination_size</code></a>, <a href="#parameter-merchants"><code>merchants</code></a>, <a href="#parameter-nature"><code>nature</code></a>, <a href="#parameter-product_code"><code>product_code</code></a>, <a href="#parameter-state"><code>state</code></a>, <a href="#parameter-technical_requirements"><code>technical_requirements</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td>List all offers</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>Id</td>
</tr>
<tr id="parameter-merchants">
    <td><CopyableCode code="merchants" /></td>
    <td><code>array</code></td>
    <td>Offer merchant</td>
</tr>
<tr id="parameter-nature">
    <td><CopyableCode code="nature" /></td>
    <td><code>string</code></td>
    <td>Offer nature</td>
</tr>
<tr id="parameter-product_code">
    <td><CopyableCode code="product_code" /></td>
    <td><code>string</code></td>
    <td>Commercial product code (wire: productCode)</td>
</tr>
<tr id="parameter-state">
    <td><CopyableCode code="state" /></td>
    <td><code>array</code></td>
    <td>Offer state</td>
</tr>
<tr id="parameter-technical_requirements">
    <td><CopyableCode code="technical_requirements" /></td>
    <td><code>array</code></td>
    <td>Offer config fields (wire: technicalRequirements)</td>
</tr>
<tr id="parameter-type">
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Offer type</td>
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
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Get details of an offer

```sql
SELECT
id,
code,
commercial_rating_values,
descriptions,
engagements,
legacy,
nature,
offers,
product,
technical_requirements,
type,
validity,
version
FROM ovh.commercial_catalog.offers
WHERE id = '{{ id }}' -- required
;
```
</TabItem>
<TabItem value="list">

List all offers

```sql
SELECT
id,
code,
commercial_rating_values,
descriptions,
engagements,
legacy,
nature,
offers,
product,
technical_requirements,
type,
validity,
version
FROM ovh.commercial_catalog.offers
WHERE x_pagination_cursor = '{{ x_pagination_cursor }}'
AND x_pagination_size = '{{ x_pagination_size }}'
AND merchants = '{{ merchants }}'
AND nature = '{{ nature }}'
AND product_code = '{{ product_code }}'
AND state = '{{ state }}'
AND technical_requirements = '{{ technical_requirements }}'
AND type = '{{ type }}'
;
```
</TabItem>
</Tabs>
