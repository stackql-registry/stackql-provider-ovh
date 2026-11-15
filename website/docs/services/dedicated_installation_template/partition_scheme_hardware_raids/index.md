--- 
title: partition_scheme_hardware_raids
hide_title: false
hide_table_of_contents: false
keywords:
  - partition_scheme_hardware_raids
  - dedicated_installation_template
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

Creates, updates, deletes, gets or lists a <code>partition_scheme_hardware_raids</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="partition_scheme_hardware_raids" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.dedicated_installation_template.partition_scheme_hardware_raids" /></td></tr>
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Hardware RAID name</td>
</tr>
<tr>
    <td><CopyableCode code="disks" /></td>
    <td><code>array</code></td>
    <td>Disk list</td>
</tr>
<tr>
    <td><CopyableCode code="mode" /></td>
    <td><code>string</code></td>
    <td>RAID mode (raid0, raid1, raid10, raid5, raid50, raid6, raid60)</td>
</tr>
<tr>
    <td><CopyableCode code="step" /></td>
    <td><code>integer</code></td>
    <td>Specifies the creation order of the hardware RAID</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Hardware RAID defined in this partitioning scheme

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Hardware RAID name</td>
</tr>
<tr>
    <td><CopyableCode code="disks" /></td>
    <td><code>array</code></td>
    <td>Disk list</td>
</tr>
<tr>
    <td><CopyableCode code="mode" /></td>
    <td><code>string</code></td>
    <td>RAID mode (raid0, raid1, raid10, raid5, raid50, raid6, raid60)</td>
</tr>
<tr>
    <td><CopyableCode code="step" /></td>
    <td><code>integer</code></td>
    <td>Specifies the creation order of the hardware RAID</td>
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
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-scheme_name"><code>scheme_name</code></a>, <a href="#parameter-template_name"><code>template_name</code></a></td>
    <td></td>
    <td>Get a hardware RAID. Returns the RAID mode, the disks and the creation order of a hardware RAID defined in the partitioning scheme.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-scheme_name"><code>scheme_name</code></a>, <a href="#parameter-template_name"><code>template_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List hardware RAIDs. Returns the names of the hardware RAIDs defined in the partitioning scheme. Each one has a RAID mode, a disk list and a creation order.</td>
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
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Hardware RAID name</td>
</tr>
<tr id="parameter-scheme_name">
    <td><CopyableCode code="scheme_name" /></td>
    <td><code>string</code></td>
    <td>This partitioning scheme name (wire: schemeName)</td>
</tr>
<tr id="parameter-template_name">
    <td><CopyableCode code="template_name" /></td>
    <td><code>string</code></td>
    <td>This template name (wire: templateName)</td>
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

Get a hardware RAID. Returns the RAID mode, the disks and the creation order of a hardware RAID defined in the partitioning scheme.

```sql
SELECT
name,
disks,
mode,
step
FROM ovh.dedicated_installation_template.partition_scheme_hardware_raids
WHERE name = '{{ name }}' -- required
AND scheme_name = '{{ scheme_name }}' -- required
AND template_name = '{{ template_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List hardware RAIDs. Returns the names of the hardware RAIDs defined in the partitioning scheme. Each one has a RAID mode, a disk list and a creation order.

```sql
SELECT
name,
disks,
mode,
step
FROM ovh.dedicated_installation_template.partition_scheme_hardware_raids
WHERE scheme_name = '{{ scheme_name }}' -- required
AND template_name = '{{ template_name }}' -- required
AND x_pagination_mode = '{{ x_pagination_mode }}'
;
```
</TabItem>
</Tabs>
