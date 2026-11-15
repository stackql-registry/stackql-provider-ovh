--- 
title: catalog_formatted_web_hostings
hide_title: false
hide_table_of_contents: false
keywords:
  - catalog_formatted_web_hostings
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

Creates, updates, deletes, gets or lists a <code>catalog_formatted_web_hostings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="catalog_formatted_web_hostings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.order.catalog_formatted_web_hostings" /></td></tr>
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
    <td>Number of offers in this page</td>
</tr>
<tr>
    <td><CopyableCode code="pagination" /></td>
    <td><code>array</code></td>
    <td>List of the available page numbers</td>
</tr>
<tr>
    <td><CopyableCode code="plans" /></td>
    <td><code>array</code></td>
    <td>Web hosting offers of this page</td>
</tr>
<tr>
    <td><CopyableCode code="total" /></td>
    <td><code>integer</code></td>
    <td>Total number of offers matching the filters</td>
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
    <td><a href="#parameter-count"><code>count</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-plan_codes"><code>plan_codes</code></a></td>
    <td>Web hosting offers of the public catalog for a subsidiary, as the website's product cards show them: advertised monthly price, promotional first term and renewal price, every billing term, the prices per commitment (12, 24 or 48 months) with the saving on the shortest one, commercial features, technical specifications and order funnel link. Plan code filter and pagination.</td>
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
<tr id="parameter-count">
    <td><CopyableCode code="count" /></td>
    <td><code>integer</code></td>
    <td>Number of results per page. Defaults to 25</td>
</tr>
<tr id="parameter-offset">
    <td><CopyableCode code="offset" /></td>
    <td><code>integer</code></td>
    <td>Offset of the first result returned, used with count for pagination</td>
</tr>
<tr id="parameter-plan_codes">
    <td><CopyableCode code="plan_codes" /></td>
    <td><code>string</code></td>
    <td>Return only the offers with these plan codes, comma-separated (e.g. hosting-starter,hosting-perso) (wire: planCodes)</td>
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

Web hosting offers of the public catalog for a subsidiary, as the website's product cards show them: advertised monthly price, promotional first term and renewal price, every billing term, the prices per commitment (12, 24 or 48 months) with the saving on the shortest one, commercial features, technical specifications and order funnel link. Plan code filter and pagination.

```sql
SELECT
count,
pagination,
plans,
total
FROM ovh.order.catalog_formatted_web_hostings
WHERE ovh_subsidiary = '{{ ovh_subsidiary }}' -- required
AND count = '{{ count }}'
AND offset = '{{ offset }}'
AND plan_codes = '{{ plan_codes }}'
;
```
</TabItem>
</Tabs>
