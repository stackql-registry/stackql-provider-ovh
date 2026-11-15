--- 
title: ipv6_routed_subranges
hide_title: false
hide_table_of_contents: false
keywords:
  - ipv6_routed_subranges
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

Creates, updates, deletes, gets or lists an <code>ipv6_routed_subranges</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ipv6_routed_subranges" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.vrack.ipv6_routed_subranges" /></td></tr>
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
    <td><CopyableCode code="nexthop" /></td>
    <td><code>string (ipv6)</code></td>
    <td>nexthop used as a gateway for your routed subrange (example: 2001:41d0:1:1994::1)</td>
</tr>
<tr>
    <td><CopyableCode code="routed_subrange" /></td>
    <td><code>string (ipv6-block)</code></td>
    <td>subrange routed into your vrack (example: 2001:41d0::/128) (wire: routedSubrange)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Routed subranges within your IP v6 block

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
    <td><CopyableCode code="nexthop" /></td>
    <td><code>string (ipv6)</code></td>
    <td>nexthop used as a gateway for your routed subrange (example: 2001:41d0:1:1994::1)</td>
</tr>
<tr>
    <td><CopyableCode code="routed_subrange" /></td>
    <td><code>string (ipv6-block)</code></td>
    <td>subrange routed into your vrack (example: 2001:41d0::/128) (wire: routedSubrange)</td>
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
    <td><a href="#parameter-ipv_6"><code>ipv_6</code></a>, <a href="#parameter-routed_subrange"><code>routed_subrange</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get a routed subrange. Returns the subrange and its next hop.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-ipv_6"><code>ipv_6</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List routed subranges. Returns the subranges of the block routed in the vRack.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-ipv_6"><code>ipv_6</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-nexthop"><code>nexthop</code></a>, <a href="#parameter-routed_subrange"><code>routed_subrange</code></a></td>
    <td></td>
    <td>Route a subrange. Routes a subrange of the block to a next hop. The next hop must belong to a bridged subrange. Returns the task that performs it.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-ipv_6"><code>ipv_6</code></a>, <a href="#parameter-routed_subrange"><code>routed_subrange</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Unroute a subrange. Removes the route of the subrange. Returns the task that performs it.</td>
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
<tr id="parameter-ipv_6">
    <td><CopyableCode code="ipv_6" /></td>
    <td><code>string (ipv6-block)</code></td>
    <td>Your IP v6 block (wire: ipv6)</td>
</tr>
<tr id="parameter-routed_subrange">
    <td><CopyableCode code="routed_subrange" /></td>
    <td><code>string (ipv6-block)</code></td>
    <td>subrange routed into your vrack (wire: routedSubrange)</td>
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

Get a routed subrange. Returns the subrange and its next hop.

```sql
SELECT
nexthop,
routed_subrange
FROM ovh.vrack.ipv6_routed_subranges
WHERE ipv_6 = '{{ ipv_6 }}' -- required
AND routed_subrange = '{{ routed_subrange }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List routed subranges. Returns the subranges of the block routed in the vRack.

```sql
SELECT
nexthop,
routed_subrange
FROM ovh.vrack.ipv6_routed_subranges
WHERE ipv_6 = '{{ ipv_6 }}' -- required
AND service_name = '{{ service_name }}' -- required
AND x_pagination_mode = '{{ x_pagination_mode }}'
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

Route a subrange. Routes a subrange of the block to a next hop. The next hop must belong to a bridged subrange. Returns the task that performs it.

```sql
INSERT INTO ovh.vrack.ipv6_routed_subranges (
nexthop,
routed_subrange,
ipv_6,
service_name
)
SELECT 
'{{ nexthop }}' /* required */,
'{{ routed_subrange }}' /* required */,
'{{ ipv_6 }}',
'{{ service_name }}'
RETURNING
id,
order_id,
service_name,
function,
last_update,
status,
target_domain,
todo_date
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: ipv6_routed_subranges
  props:
    - name: ipv_6
      value: "{{ ipv_6 }}"
      description: Required parameter for the ipv6_routed_subranges resource.
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the ipv6_routed_subranges resource.
    - name: nexthop
      value: "{{ nexthop }}"
      description: |
        nexthop to configure for your routed subrange (must be part of bridged subrange)
    - name: routed_subrange
      value: "{{ routed_subrange }}"
      description: |
        IPv6 CIDR notation (e.g., 2001:41d0::/128)
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete"
    values={[
        { label: 'delete', value: 'delete' }
    ]}
>
<TabItem value="delete">

Unroute a subrange. Removes the route of the subrange. Returns the task that performs it.

```sql
DELETE FROM ovh.vrack.ipv6_routed_subranges
WHERE ipv_6 = '{{ ipv_6 }}' --required
AND routed_subrange = '{{ routed_subrange }}' --required
AND service_name = '{{ service_name }}' --required
;
```
</TabItem>
</Tabs>
