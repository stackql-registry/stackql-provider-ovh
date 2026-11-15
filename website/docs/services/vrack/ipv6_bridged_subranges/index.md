--- 
title: ipv6_bridged_subranges
hide_title: false
hide_table_of_contents: false
keywords:
  - ipv6_bridged_subranges
  - vrack
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

Creates, updates, deletes, gets or lists an <code>ipv6_bridged_subranges</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ipv6_bridged_subranges" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.vrack.ipv6_bridged_subranges" /></td></tr>
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
    <td><CopyableCode code="bridged_subrange" /></td>
    <td><code>string (ipv6-block)</code></td>
    <td>subrange bridged into your vrack (example: 2001:41d0::/128) (wire: bridgedSubrange)</td>
</tr>
<tr>
    <td><CopyableCode code="gateway" /></td>
    <td><code>string (ipv6)</code></td>
    <td>Your gateway (example: 2001:41d0:1:1994::1)</td>
</tr>
<tr>
    <td><CopyableCode code="slaac" /></td>
    <td><code>string</code></td>
    <td>Slaac status (disabled, enabled)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Bridged subrange within your IP v6 block

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
    <td><CopyableCode code="bridged_subrange" /></td>
    <td><code>string (ipv6-block)</code></td>
    <td>subrange bridged into your vrack (example: 2001:41d0::/128) (wire: bridgedSubrange)</td>
</tr>
<tr>
    <td><CopyableCode code="gateway" /></td>
    <td><code>string (ipv6)</code></td>
    <td>Your gateway (example: 2001:41d0:1:1994::1)</td>
</tr>
<tr>
    <td><CopyableCode code="slaac" /></td>
    <td><code>string</code></td>
    <td>Slaac status (disabled, enabled)</td>
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
    <td><a href="#parameter-bridged_subrange"><code>bridged_subrange</code></a>, <a href="#parameter-ipv_6"><code>ipv_6</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get a bridged subrange. Returns the subrange, its gateway and whether SLAAC is enabled.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-ipv_6"><code>ipv_6</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List bridged subranges. Returns the subranges of the block bridged in the vRack.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-bridged_subrange"><code>bridged_subrange</code></a>, <a href="#parameter-ipv_6"><code>ipv_6</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Update the SLAAC status. Enables or disables SLAAC on the bridged subrange. Returns the task that performs it.</td>
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
<tr id="parameter-bridged_subrange">
    <td><CopyableCode code="bridged_subrange" /></td>
    <td><code>string (ipv6-block)</code></td>
    <td>subrange bridged into your vrack (wire: bridgedSubrange)</td>
</tr>
<tr id="parameter-ipv_6">
    <td><CopyableCode code="ipv_6" /></td>
    <td><code>string (ipv6-block)</code></td>
    <td>Your IP v6 block (wire: ipv6)</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The internal name of your vrack (wire: serviceName)</td>
</tr>
<tr id="parameter-x_pagination_mode">
    <td><CopyableCode code="x_pagination_mode" /></td>
    <td><code>string</code></td>
    <td>Sent as CachedObjectList-Pages by default so the list returns the full objects rather than their identifiers. (wire: X-Pagination-Mode)</td>
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

Get a bridged subrange. Returns the subrange, its gateway and whether SLAAC is enabled.

```sql
SELECT
bridged_subrange,
gateway,
slaac
FROM ovh.vrack.ipv6_bridged_subranges
WHERE bridged_subrange = '{{ bridged_subrange }}' -- required
AND ipv_6 = '{{ ipv_6 }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List bridged subranges. Returns the subranges of the block bridged in the vRack.

```sql
SELECT
bridged_subrange,
gateway,
slaac
FROM ovh.vrack.ipv6_bridged_subranges
WHERE ipv_6 = '{{ ipv_6 }}' -- required
AND service_name = '{{ service_name }}' -- required
AND x_pagination_mode = '{{ x_pagination_mode }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update"
    values={[
        { label: 'update', value: 'update' }
    ]}
>
<TabItem value="update">

Update the SLAAC status. Enables or disables SLAAC on the bridged subrange. Returns the task that performs it.

```sql
UPDATE ovh.vrack.ipv6_bridged_subranges
SET 
slaac = '{{ slaac }}'
WHERE 
bridged_subrange = '{{ bridged_subrange }}' --required
AND ipv_6 = '{{ ipv_6 }}' --required
AND service_name = '{{ service_name }}' --required
RETURNING
id,
order_id,
service_name,
function,
last_update,
status,
target_domain,
todo_date;
```
</TabItem>
</Tabs>
