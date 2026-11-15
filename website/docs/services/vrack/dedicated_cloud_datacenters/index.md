--- 
title: dedicated_cloud_datacenters
hide_title: false
hide_table_of_contents: false
keywords:
  - dedicated_cloud_datacenters
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

Creates, updates, deletes, gets or lists a <code>dedicated_cloud_datacenters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="dedicated_cloud_datacenters" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.vrack.dedicated_cloud_datacenters" /></td></tr>
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
    <td><CopyableCode code="datacenter" /></td>
    <td><code>string</code></td>
    <td>Your dedicatedCloud datacenter name</td>
</tr>
<tr>
    <td><CopyableCode code="dedicated_cloud" /></td>
    <td><code>string</code></td>
    <td>Your dedicatedCloud name (wire: dedicatedCloud)</td>
</tr>
<tr>
    <td><CopyableCode code="vrack" /></td>
    <td><code>string</code></td>
    <td>vrack name</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

vrack datacenter interface

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
    <td><CopyableCode code="datacenter" /></td>
    <td><code>string</code></td>
    <td>Your dedicatedCloud datacenter name</td>
</tr>
<tr>
    <td><CopyableCode code="dedicated_cloud" /></td>
    <td><code>string</code></td>
    <td>Your dedicatedCloud name (wire: dedicatedCloud)</td>
</tr>
<tr>
    <td><CopyableCode code="vrack" /></td>
    <td><code>string</code></td>
    <td>vrack name</td>
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
    <td><a href="#parameter-datacenter"><code>datacenter</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get a datacenter. Returns the attached Private Cloud datacenter and its vRack.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List datacenters. Returns the Private Cloud datacenters attached to the vRack.</td>
</tr>
<tr>
    <td><a href="#move"><CopyableCode code="move" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-datacenter"><code>datacenter</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-targetServiceName"><code>targetServiceName</code></a></td>
    <td></td>
    <td>Move a datacenter. Moves the Private Cloud datacenter to another vRack. Returns the task that performs it.</td>
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
<tr id="parameter-datacenter">
    <td><CopyableCode code="datacenter" /></td>
    <td><code>string</code></td>
    <td>Your dedicatedCloud datacenter name</td>
</tr>
<tr id="parameter-serviceName">
    <td><CopyableCode code="serviceName" /></td>
    <td><code>string</code></td>
    <td>The internal name of your vrack</td>
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

Get a datacenter. Returns the attached Private Cloud datacenter and its vRack.

```sql
SELECT
datacenter,
dedicated_cloud,
vrack
FROM ovh.vrack.dedicated_cloud_datacenters
WHERE datacenter = '{{ datacenter }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List datacenters. Returns the Private Cloud datacenters attached to the vRack.

```sql
SELECT
datacenter,
dedicated_cloud,
vrack
FROM ovh.vrack.dedicated_cloud_datacenters
WHERE service_name = '{{ service_name }}' -- required
AND x_pagination_mode = '{{ x_pagination_mode }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="move"
    values={[
        { label: 'move', value: 'move' }
    ]}
>
<TabItem value="move">

Move a datacenter. Moves the Private Cloud datacenter to another vRack. Returns the task that performs it.

```sql
EXEC ovh.vrack.dedicated_cloud_datacenters.move 
@datacenter='{{ datacenter }}' --required, 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"targetServiceName": "{{ targetServiceName }}"
}'
;
```
</TabItem>
</Tabs>
