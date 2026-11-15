--- 
title: region_availabilities
hide_title: false
hide_table_of_contents: false
keywords:
  - region_availabilities
  - dedicated_server
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

Creates, updates, deletes, gets or lists a <code>region_availabilities</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="region_availabilities" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.dedicated_server.region_availabilities" /></td></tr>
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

A structure describing the availabilities of dedicated server

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
    <td><CopyableCode code="fqn" /></td>
    <td><code>string</code></td>
    <td>Fully qualified and unique name of the hardware</td>
</tr>
<tr>
    <td><CopyableCode code="gpu" /></td>
    <td><code>string</code></td>
    <td>Name of the gpu hardware part</td>
</tr>
<tr>
    <td><CopyableCode code="memory" /></td>
    <td><code>string</code></td>
    <td>Name of the memory hardware part</td>
</tr>
<tr>
    <td><CopyableCode code="plan_code" /></td>
    <td><code>string</code></td>
    <td>Plan code in which the hardware is involved (wire: planCode)</td>
</tr>
<tr>
    <td><CopyableCode code="regions" /></td>
    <td><code>array</code></td>
    <td>The hardware availability for each region</td>
</tr>
<tr>
    <td><CopyableCode code="server" /></td>
    <td><code>string</code></td>
    <td>Name of the base hardware</td>
</tr>
<tr>
    <td><CopyableCode code="storage" /></td>
    <td><code>string</code></td>
    <td>Name of the storage hardware part</td>
</tr>
<tr>
    <td><CopyableCode code="system_storage" /></td>
    <td><code>string</code></td>
    <td>Name of the system storage hardware part (wire: systemStorage)</td>
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
    <td></td>
    <td><a href="#parameter-exclude_regions"><code>exclude_regions</code></a>, <a href="#parameter-gpu"><code>gpu</code></a>, <a href="#parameter-memory"><code>memory</code></a>, <a href="#parameter-plan_code"><code>plan_code</code></a>, <a href="#parameter-regions"><code>regions</code></a>, <a href="#parameter-server"><code>server</code></a>, <a href="#parameter-storage"><code>storage</code></a>, <a href="#parameter-system_storage"><code>system_storage</code></a></td>
    <td>Returns the availability of each server hardware configuration in each region and its availability zones. Filter by plan code or hardware part, and choose regions with regions and excludeRegions. Unlike the datacenter route, this call requires authentication. (Beta version)</td>
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
<tr id="parameter-exclude_regions">
    <td><CopyableCode code="exclude_regions" /></td>
    <td><code>boolean</code></td>
    <td>If true, all regions are returned except those listed in regions parameter (wire: excludeRegions)</td>
</tr>
<tr id="parameter-gpu">
    <td><CopyableCode code="gpu" /></td>
    <td><code>string</code></td>
    <td>The name of the gpu hardware part</td>
</tr>
<tr id="parameter-memory">
    <td><CopyableCode code="memory" /></td>
    <td><code>string</code></td>
    <td>The name of the memory hardware part</td>
</tr>
<tr id="parameter-plan_code">
    <td><CopyableCode code="plan_code" /></td>
    <td><code>string</code></td>
    <td>The plan code in which the hardware is involved (wire: planCode)</td>
</tr>
<tr id="parameter-regions">
    <td><CopyableCode code="regions" /></td>
    <td><code>array</code></td>
    <td>The names of regions</td>
</tr>
<tr id="parameter-server">
    <td><CopyableCode code="server" /></td>
    <td><code>string</code></td>
    <td>The name of the base hardware</td>
</tr>
<tr id="parameter-storage">
    <td><CopyableCode code="storage" /></td>
    <td><code>string</code></td>
    <td>The name of the storage hardware part</td>
</tr>
<tr id="parameter-system_storage">
    <td><CopyableCode code="system_storage" /></td>
    <td><code>string</code></td>
    <td>The name of the system storage hardware part (wire: systemStorage)</td>
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

Returns the availability of each server hardware configuration in each region and its availability zones. Filter by plan code or hardware part, and choose regions with regions and excludeRegions. Unlike the datacenter route, this call requires authentication. (Beta version)

```sql
SELECT
fqn,
gpu,
memory,
plan_code,
regions,
server,
storage,
system_storage
FROM ovh.dedicated_server.region_availabilities
WHERE exclude_regions = '{{ exclude_regions }}'
AND gpu = '{{ gpu }}'
AND memory = '{{ memory }}'
AND plan_code = '{{ plan_code }}'
AND regions = '{{ regions }}'
AND server = '{{ server }}'
AND storage = '{{ storage }}'
AND system_storage = '{{ system_storage }}'
;
```
</TabItem>
</Tabs>
