--- 
title: vac_traffic
hide_title: false
hide_table_of_contents: false
keywords:
  - vac_traffic
  - network_defense
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

Creates, updates, deletes, gets or lists a <code>vac_traffic</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="vac_traffic" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.network_defense.vac_traffic" /></td></tr>
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
    <td><CopyableCode code="bps" /></td>
    <td><code>object</code></td>
    <td>Bits per seconds statistics</td>
</tr>
<tr>
    <td><CopyableCode code="pps" /></td>
    <td><code>object</code></td>
    <td>Packets per seconds statistics</td>
</tr>
<tr>
    <td><CopyableCode code="timestamps" /></td>
    <td><code>array</code></td>
    <td>Timestamps of the statistics points</td>
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
    <td><a href="#parameter-after"><code>after</code></a>, <a href="#parameter-subnet"><code>subnet</code></a></td>
    <td><a href="#parameter-x_pagination_cursor"><code>x_pagination_cursor</code></a>, <a href="#parameter-x_pagination_size"><code>x_pagination_size</code></a>, <a href="#parameter-before"><code>before</code></a></td>
    <td>Returns the traffic dropped and passed by the VAC DDoS protection after a detection event. Request by subnet, IPv4 /32 or IPv6 /64 CIDR, in bits and packets per second, over a date range.</td>
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
<tr id="parameter-after">
    <td><CopyableCode code="after" /></td>
    <td><code>string (date-time)</code></td>
    <td>Query statistics after the given date</td>
</tr>
<tr id="parameter-api_host">
    <td><CopyableCode code="api_host" /></td>
    <td><code>string</code></td>
    <td>The OVHcloud API host. Selected by OVH_ENDPOINT (ovh-eu, ovh-ca or ovh-us; default ovh-eu). (default: api.eu.ovhcloud.com, x-stackQL-envVarSelector: &#123;"envVar":"OVH_ENDPOINT","default":"ovh-eu","values":&#123;"ovh-eu":"api.eu.ovhcloud.com","ovh-ca":"api.ca.ovhcloud.com","ovh-us":"api.us.ovhcloud.com"&#125;&#125;)</td>
</tr>
<tr id="parameter-subnet">
    <td><CopyableCode code="subnet" /></td>
    <td><code>string (ip-block)</code></td>
    <td>Query statistics for the given subnet (currently, only IPv4/32 or IPv6/64 are supported)</td>
</tr>
<tr id="parameter-before">
    <td><CopyableCode code="before" /></td>
    <td><code>string (date-time)</code></td>
    <td>Query statistics before the given date</td>
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
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

Returns the traffic dropped and passed by the VAC DDoS protection after a detection event. Request by subnet, IPv4 /32 or IPv6 /64 CIDR, in bits and packets per second, over a date range.

```sql
SELECT
bps,
pps,
timestamps
FROM ovh.network_defense.vac_traffic
WHERE after = '{{ after }}' -- required
AND subnet = '{{ subnet }}' -- required
AND x_pagination_cursor = '{{ x_pagination_cursor }}'
AND x_pagination_size = '{{ x_pagination_size }}'
AND before = '{{ before }}'
;
```
</TabItem>
</Tabs>
