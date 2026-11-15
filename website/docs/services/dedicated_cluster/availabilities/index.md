--- 
title: availabilities
hide_title: false
hide_table_of_contents: false
keywords:
  - availabilities
  - dedicated_cluster
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

Creates, updates, deletes, gets or lists an <code>availabilities</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="availabilities" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.dedicated_cluster.availabilities" /></td></tr>
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

Cluster availability

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
    <td><CopyableCode code="cluster_plan_code" /></td>
    <td><code>string</code></td>
    <td>Plan code in which the hardware is involved (wire: clusterPlanCode)</td>
</tr>
<tr>
    <td><CopyableCode code="fqn" /></td>
    <td><code>string</code></td>
    <td>Fully qualified name and unique name of the hardware</td>
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
    <td>A structure describing the hardware availability for each datacenter</td>
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
    <td><a href="#parameter-quantity"><code>quantity</code></a></td>
    <td><a href="#parameter-memory"><code>memory</code></a>, <a href="#parameter-plan_code"><code>plan_code</code></a>, <a href="#parameter-server"><code>server</code></a>, <a href="#parameter-storage"><code>storage</code></a>, <a href="#parameter-system_storage"><code>system_storage</code></a></td>
    <td>Returns the cluster configurations that match the requested quantity, hardware parts and plan code, with their availability for each region. This call does not require authentication. (Deprecated, will be removed)</td>
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
<tr id="parameter-quantity">
    <td><CopyableCode code="quantity" /></td>
    <td><code>integer</code></td>
    <td>Cluster quantity</td>
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

Returns the cluster configurations that match the requested quantity, hardware parts and plan code, with their availability for each region. This call does not require authentication. (Deprecated, will be removed)

```sql
SELECT
cluster_plan_code,
fqn,
memory,
plan_code,
regions,
server,
storage,
system_storage
FROM ovh.dedicated_cluster.availabilities
WHERE quantity = '{{ quantity }}' -- required
AND memory = '{{ memory }}'
AND plan_code = '{{ plan_code }}'
AND server = '{{ server }}'
AND storage = '{{ storage }}'
AND system_storage = '{{ system_storage }}'
;
```
</TabItem>
</Tabs>
