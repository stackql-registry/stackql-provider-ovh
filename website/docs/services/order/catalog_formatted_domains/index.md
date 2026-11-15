--- 
title: catalog_formatted_domains
hide_title: false
hide_table_of_contents: false
keywords:
  - catalog_formatted_domains
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

Creates, updates, deletes, gets or lists a <code>catalog_formatted_domains</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="catalog_formatted_domains" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.order.catalog_formatted_domains" /></td></tr>
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
    <td><CopyableCode code="count" /></td>
    <td><code>integer</code></td>
    <td>Number of extensions in this page</td>
</tr>
<tr>
    <td><CopyableCode code="display" /></td>
    <td><code>object</code></td>
    <td>How the subsidiary's prices are put forward on the website</td>
</tr>
<tr>
    <td><CopyableCode code="extensions" /></td>
    <td><code>array</code></td>
    <td>Domain extensions of this page</td>
</tr>
<tr>
    <td><CopyableCode code="pagination" /></td>
    <td><code>array</code></td>
    <td>List of the available page numbers</td>
</tr>
<tr>
    <td><CopyableCode code="total" /></td>
    <td><code>integer</code></td>
    <td>Total number of extensions matching the filters</td>
</tr>
<tr>
    <td><CopyableCode code="webhosting" /></td>
    <td><code>object</code></td>
    <td>Cheapest web hosting offer of the subsidiary, for the TLD pages' hosting cross-sell card. Omitted when the webHosting catalog is unavailable</td>
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
    <td><a href="#parameter-ovh_subsidiary"><code>ovh_subsidiary</code></a></td>
    <td><a href="#parameter-categories"><code>categories</code></a>, <a href="#parameter-count"><code>count</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-period"><code>period</code></a>, <a href="#parameter-plan_code"><code>plan_code</code></a>, <a href="#parameter-plan_codes"><code>plan_codes</code></a>, <a href="#parameter-price_max"><code>price_max</code></a>, <a href="#parameter-price_min"><code>price_min</code></a>, <a href="#parameter-price_type"><code>price_type</code></a>, <a href="#parameter-promotion"><code>promotion</code></a>, <a href="#parameter-search"><code>search</code></a>, <a href="#parameter-sort"><code>sort</code></a>, <a href="#parameter-zones"><code>zones</code></a></td>
    <td>Domain extensions of the public catalog for a subsidiary, with creation/renewal/transfer/restore/trade prices and promotions, keyword search, thematic category and geographic zone filters, price filtering, sorting and pagination.</td>
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
    <td>OVHcloud subsidiary targeted (wire: ovhSubsidiary)</td>
</tr>
<tr id="parameter-categories">
    <td><CopyableCode code="categories" /></td>
    <td><code>array</code></td>
    <td>Filter on thematic categories (byCategory machine names, e.g. art_and_culture); several values combine with OR. Repeat the parameter for multiple values</td>
</tr>
<tr id="parameter-count">
    <td><CopyableCode code="count" /></td>
    <td><code>integer</code></td>
    <td>Number of results per page. Default to 25</td>
</tr>
<tr id="parameter-offset">
    <td><CopyableCode code="offset" /></td>
    <td><code>integer</code></td>
    <td>Offset of the first result returned, used with count for pagination</td>
</tr>
<tr id="parameter-period">
    <td><CopyableCode code="period" /></td>
    <td><code>integer</code></td>
    <td>Commitment in years whose price priceMin, priceMax and price sorting read: 1 (default), 3 or 5 (the multiyear totals; extensions without that commitment never match a price range and come last when sorting by price)</td>
</tr>
<tr id="parameter-plan_code">
    <td><CopyableCode code="plan_code" /></td>
    <td><code>string</code></td>
    <td>Return only the extension with this plan code (e.g. fr for .fr, com for .com) (wire: planCode)</td>
</tr>
<tr id="parameter-plan_codes">
    <td><CopyableCode code="plan_codes" /></td>
    <td><code>string</code></td>
    <td>Return only the extensions with these plan codes, comma-separated (e.g. com,fr) (wire: planCodes)</td>
</tr>
<tr id="parameter-price_max">
    <td><CopyableCode code="price_max" /></td>
    <td><code>number</code></td>
    <td>Maximum price (wire: priceMax)</td>
</tr>
<tr id="parameter-price_min">
    <td><CopyableCode code="price_min" /></td>
    <td><code>number</code></td>
    <td>Minimum price (wire: priceMin)</td>
</tr>
<tr id="parameter-price_type">
    <td><CopyableCode code="price_type" /></td>
    <td><code>string</code></td>
    <td>Price used by priceMin, priceMax and price sorting: creation (default), renewal or transfer (wire: priceType)</td>
</tr>
<tr id="parameter-promotion">
    <td><CopyableCode code="promotion" /></td>
    <td><code>boolean</code></td>
    <td>Return only the extensions in promotion over the period: a creation or multi-year promotion, or a discounted price</td>
</tr>
<tr id="parameter-search">
    <td><CopyableCode code="search" /></td>
    <td><code>string</code></td>
    <td>Search extensions by name</td>
</tr>
<tr id="parameter-sort">
    <td><CopyableCode code="sort" /></td>
    <td><code>string</code></td>
    <td>Sort order: name-asc (default), name-desc, price-asc or price-desc. Extensions with a promotion always come first</td>
</tr>
<tr id="parameter-zones">
    <td><CopyableCode code="zones" /></td>
    <td><code>array</code></td>
    <td>Filter on geographic zones (byCategory machine names, e.g. europe); several values combine with OR. Repeat the parameter for multiple values</td>
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

Domain extensions of the public catalog for a subsidiary, with creation/renewal/transfer/restore/trade prices and promotions, keyword search, thematic category and geographic zone filters, price filtering, sorting and pagination.

```sql
SELECT
count,
display,
extensions,
pagination,
total,
webhosting
FROM ovh.order.catalog_formatted_domains
WHERE ovh_subsidiary = '{{ ovh_subsidiary }}' -- required
AND categories = '{{ categories }}'
AND count = '{{ count }}'
AND offset = '{{ offset }}'
AND period = '{{ period }}'
AND plan_code = '{{ plan_code }}'
AND plan_codes = '{{ plan_codes }}'
AND price_max = '{{ price_max }}'
AND price_min = '{{ price_min }}'
AND price_type = '{{ price_type }}'
AND promotion = '{{ promotion }}'
AND search = '{{ search }}'
AND sort = '{{ sort }}'
AND zones = '{{ zones }}'
;
```
</TabItem>
</Tabs>
