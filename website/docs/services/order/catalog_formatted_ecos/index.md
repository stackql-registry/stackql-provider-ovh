--- 
title: catalog_formatted_ecos
hide_title: false
hide_table_of_contents: false
keywords:
  - catalog_formatted_ecos
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

Creates, updates, deletes, gets or lists a <code>catalog_formatted_ecos</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="catalog_formatted_ecos" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.order.catalog_formatted_ecos" /></td></tr>
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
    <td>Number of servers (or references when groupBy=reference) in this page</td>
</tr>
<tr>
    <td><CopyableCode code="display" /></td>
    <td><code>object</code></td>
    <td>How the subsidiary's prices are put forward on the website</td>
</tr>
<tr>
    <td><CopyableCode code="facets" /></td>
    <td><code>object</code></td>
    <td>Values available for the interactive filters, computed on the matching servers. Only when groupBy=reference</td>
</tr>
<tr>
    <td><CopyableCode code="pagination" /></td>
    <td><code>array</code></td>
    <td>List of the available page numbers</td>
</tr>
<tr>
    <td><CopyableCode code="references" /></td>
    <td><code>array</code></td>
    <td>Commercial references of this page, each grouping its server variants. Only when groupBy=reference</td>
</tr>
<tr>
    <td><CopyableCode code="servers" /></td>
    <td><code>array</code></td>
    <td>Servers of this page. Absent when groupBy=reference</td>
</tr>
<tr>
    <td><CopyableCode code="total" /></td>
    <td><code>integer</code></td>
    <td>Total number of servers (or references when groupBy=reference) matching the filters</td>
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
    <td><a href="#parameter-availability"><code>availability</code></a>, <a href="#parameter-cores_max"><code>cores_max</code></a>, <a href="#parameter-cores_min"><code>cores_min</code></a>, <a href="#parameter-count"><code>count</code></a>, <a href="#parameter-cpu_brands"><code>cpu_brands</code></a>, <a href="#parameter-datacenters"><code>datacenters</code></a>, <a href="#parameter-exclude"><code>exclude</code></a>, <a href="#parameter-freq_max"><code>freq_max</code></a>, <a href="#parameter-freq_min"><code>freq_min</code></a>, <a href="#parameter-group_by"><code>group_by</code></a>, <a href="#parameter-offset"><code>offset</code></a>, <a href="#parameter-plan_codes"><code>plan_codes</code></a>, <a href="#parameter-price_max"><code>price_max</code></a>, <a href="#parameter-price_min"><code>price_min</code></a>, <a href="#parameter-private_bw_max"><code>private_bw_max</code></a>, <a href="#parameter-private_bw_min"><code>private_bw_min</code></a>, <a href="#parameter-public_bw_max"><code>public_bw_max</code></a>, <a href="#parameter-public_bw_min"><code>public_bw_min</code></a>, <a href="#parameter-ram_max"><code>ram_max</code></a>, <a href="#parameter-ram_min"><code>ram_min</code></a>, <a href="#parameter-ranges"><code>ranges</code></a>, <a href="#parameter-score_max"><code>score_max</code></a>, <a href="#parameter-score_min"><code>score_min</code></a>, <a href="#parameter-sort"><code>sort</code></a>, <a href="#parameter-storage_max"><code>storage_max</code></a>, <a href="#parameter-storage_min"><code>storage_min</code></a>, <a href="#parameter-storage_types"><code>storage_types</code></a>, <a href="#parameter-threads_max"><code>threads_max</code></a>, <a href="#parameter-threads_min"><code>threads_min</code></a>, <a href="#parameter-use_cases"><code>use_cases</code></a></td>
    <td>Servers of the public eco catalog for a subsidiary, cross-checked against datacenter availability, with interactive filters, optional grouping by commercial reference (`groupBy=reference`), sorting and pagination.</td>
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
<tr id="parameter-availability">
    <td><CopyableCode code="availability" /></td>
    <td><code>string</code></td>
    <td>Servers to list: available (default) lists the orderable ones; all also lists the sold-out and coming-soon ones, each tagged with its availability</td>
</tr>
<tr id="parameter-cores_max">
    <td><CopyableCode code="cores_max" /></td>
    <td><code>integer</code></td>
    <td>Maximum number of CPU cores (wire: coresMax)</td>
</tr>
<tr id="parameter-cores_min">
    <td><CopyableCode code="cores_min" /></td>
    <td><code>integer</code></td>
    <td>Minimum number of CPU cores (wire: coresMin)</td>
</tr>
<tr id="parameter-count">
    <td><CopyableCode code="count" /></td>
    <td><code>integer</code></td>
    <td>Number of results per page. Default to 20</td>
</tr>
<tr id="parameter-cpu_brands">
    <td><CopyableCode code="cpu_brands" /></td>
    <td><code>array</code></td>
    <td>Filter on CPU brands (e.g. Intel, AMD). Repeat the parameter for multiple values (wire: cpuBrands)</td>
</tr>
<tr id="parameter-datacenters">
    <td><CopyableCode code="datacenters" /></td>
    <td><code>array</code></td>
    <td>Filter on datacenters where the server is available. Repeat the parameter for multiple values</td>
</tr>
<tr id="parameter-exclude">
    <td><CopyableCode code="exclude" /></td>
    <td><code>array</code></td>
    <td>Response sections to exclude to lighten the response (e.g. variants)</td>
</tr>
<tr id="parameter-freq_max">
    <td><CopyableCode code="freq_max" /></td>
    <td><code>number</code></td>
    <td>Maximum CPU frequency, in GHz (wire: freqMax)</td>
</tr>
<tr id="parameter-freq_min">
    <td><CopyableCode code="freq_min" /></td>
    <td><code>number</code></td>
    <td>Minimum CPU frequency, in GHz (wire: freqMin)</td>
</tr>
<tr id="parameter-group_by">
    <td><CopyableCode code="group_by" /></td>
    <td><code>string</code></td>
    <td>Group the servers by commercial reference. Only allowed value: reference (wire: groupBy)</td>
</tr>
<tr id="parameter-offset">
    <td><CopyableCode code="offset" /></td>
    <td><code>integer</code></td>
    <td>Offset of the first result returned, used with count for pagination</td>
</tr>
<tr id="parameter-plan_codes">
    <td><CopyableCode code="plan_codes" /></td>
    <td><code>string</code></td>
    <td>Return only the servers with these plan codes, comma-separated (e.g. 24skgame012-syd,24sk202) (wire: planCodes)</td>
</tr>
<tr id="parameter-price_max">
    <td><CopyableCode code="price_max" /></td>
    <td><code>number</code></td>
    <td>Maximum monthly price (wire: priceMax)</td>
</tr>
<tr id="parameter-price_min">
    <td><CopyableCode code="price_min" /></td>
    <td><code>number</code></td>
    <td>Minimum monthly price (wire: priceMin)</td>
</tr>
<tr id="parameter-private_bw_max">
    <td><CopyableCode code="private_bw_max" /></td>
    <td><code>integer</code></td>
    <td>Maximum private bandwidth, in Mbps (wire: privateBwMax)</td>
</tr>
<tr id="parameter-private_bw_min">
    <td><CopyableCode code="private_bw_min" /></td>
    <td><code>integer</code></td>
    <td>Minimum private bandwidth, in Mbps (wire: privateBwMin)</td>
</tr>
<tr id="parameter-public_bw_max">
    <td><CopyableCode code="public_bw_max" /></td>
    <td><code>integer</code></td>
    <td>Maximum public bandwidth, in Mbps (wire: publicBwMax)</td>
</tr>
<tr id="parameter-public_bw_min">
    <td><CopyableCode code="public_bw_min" /></td>
    <td><code>integer</code></td>
    <td>Minimum public bandwidth, in Mbps (wire: publicBwMin)</td>
</tr>
<tr id="parameter-ram_max">
    <td><CopyableCode code="ram_max" /></td>
    <td><code>integer</code></td>
    <td>Maximum RAM size, in GB (wire: ramMax)</td>
</tr>
<tr id="parameter-ram_min">
    <td><CopyableCode code="ram_min" /></td>
    <td><code>integer</code></td>
    <td>Minimum RAM size, in GB (wire: ramMin)</td>
</tr>
<tr id="parameter-ranges">
    <td><CopyableCode code="ranges" /></td>
    <td><code>array</code></td>
    <td>Filter on commercial ranges. Repeat the parameter for multiple values</td>
</tr>
<tr id="parameter-score_max">
    <td><CopyableCode code="score_max" /></td>
    <td><code>integer</code></td>
    <td>Maximum CPU benchmark score (wire: scoreMax)</td>
</tr>
<tr id="parameter-score_min">
    <td><CopyableCode code="score_min" /></td>
    <td><code>integer</code></td>
    <td>Minimum CPU benchmark score (wire: scoreMin)</td>
</tr>
<tr id="parameter-sort">
    <td><CopyableCode code="sort" /></td>
    <td><code>string</code></td>
    <td>Sort order: price-asc (default), price-desc, name-asc or name-desc. Servers with a promotion always come first</td>
</tr>
<tr id="parameter-storage_max">
    <td><CopyableCode code="storage_max" /></td>
    <td><code>number</code></td>
    <td>Maximum storage size, in GB (wire: storageMax)</td>
</tr>
<tr id="parameter-storage_min">
    <td><CopyableCode code="storage_min" /></td>
    <td><code>number</code></td>
    <td>Minimum storage size, in GB (wire: storageMin)</td>
</tr>
<tr id="parameter-storage_types">
    <td><CopyableCode code="storage_types" /></td>
    <td><code>array</code></td>
    <td>Filter on storage types. Repeat the parameter for multiple values (wire: storageTypes)</td>
</tr>
<tr id="parameter-threads_max">
    <td><CopyableCode code="threads_max" /></td>
    <td><code>integer</code></td>
    <td>Maximum number of CPU threads (wire: threadsMax)</td>
</tr>
<tr id="parameter-threads_min">
    <td><CopyableCode code="threads_min" /></td>
    <td><code>integer</code></td>
    <td>Minimum number of CPU threads (wire: threadsMin)</td>
</tr>
<tr id="parameter-use_cases">
    <td><CopyableCode code="use_cases" /></td>
    <td><code>array</code></td>
    <td>Filter on server use cases. Repeat the parameter for multiple values (wire: useCases)</td>
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

Servers of the public eco catalog for a subsidiary, cross-checked against datacenter availability, with interactive filters, optional grouping by commercial reference (`groupBy=reference`), sorting and pagination.

```sql
SELECT
count,
display,
facets,
pagination,
references,
servers,
total
FROM ovh.order.catalog_formatted_ecos
WHERE ovh_subsidiary = '{{ ovh_subsidiary }}' -- required
AND availability = '{{ availability }}'
AND cores_max = '{{ cores_max }}'
AND cores_min = '{{ cores_min }}'
AND count = '{{ count }}'
AND cpu_brands = '{{ cpu_brands }}'
AND datacenters = '{{ datacenters }}'
AND exclude = '{{ exclude }}'
AND freq_max = '{{ freq_max }}'
AND freq_min = '{{ freq_min }}'
AND group_by = '{{ group_by }}'
AND offset = '{{ offset }}'
AND plan_codes = '{{ plan_codes }}'
AND price_max = '{{ price_max }}'
AND price_min = '{{ price_min }}'
AND private_bw_max = '{{ private_bw_max }}'
AND private_bw_min = '{{ private_bw_min }}'
AND public_bw_max = '{{ public_bw_max }}'
AND public_bw_min = '{{ public_bw_min }}'
AND ram_max = '{{ ram_max }}'
AND ram_min = '{{ ram_min }}'
AND ranges = '{{ ranges }}'
AND score_max = '{{ score_max }}'
AND score_min = '{{ score_min }}'
AND sort = '{{ sort }}'
AND storage_max = '{{ storage_max }}'
AND storage_min = '{{ storage_min }}'
AND storage_types = '{{ storage_types }}'
AND threads_max = '{{ threads_max }}'
AND threads_min = '{{ threads_min }}'
AND use_cases = '{{ use_cases }}'
;
```
</TabItem>
</Tabs>
