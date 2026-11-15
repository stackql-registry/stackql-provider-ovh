--- 
title: requirements
hide_title: false
hide_table_of_contents: false
keywords:
  - requirements
  - nutanix
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

Creates, updates, deletes, gets or lists a <code>requirements</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="requirements" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.nutanix.requirements" /></td></tr>
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
    <td><CopyableCode code="max_nodes" /></td>
    <td><code>integer</code></td>
    <td>Maximum number of nodes (wire: maxNodes)</td>
</tr>
<tr>
    <td><CopyableCode code="min_nodes" /></td>
    <td><code>integer</code></td>
    <td>Minimum number of nodes (wire: minNodes)</td>
</tr>
<tr>
    <td><CopyableCode code="scale_factor" /></td>
    <td><code>integer</code></td>
    <td>Number of added/removed nodes in case of scaling up/down (wire: scaleFactor)</td>
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
    <td><a href="#parameter-erasure_coding"><code>erasure_coding</code></a>, <a href="#parameter-rack_awareness"><code>rack_awareness</code></a>, <a href="#parameter-redundancy_factor"><code>redundancy_factor</code></a></td>
    <td></td>
    <td>Fetch the requirements for a given cluster configuration</td>
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
<tr id="parameter-erasure_coding">
    <td><CopyableCode code="erasure_coding" /></td>
    <td><code>boolean</code></td>
    <td> (wire: erasureCoding)</td>
</tr>
<tr id="parameter-rack_awareness">
    <td><CopyableCode code="rack_awareness" /></td>
    <td><code>boolean</code></td>
    <td> (wire: rackAwareness)</td>
</tr>
<tr id="parameter-redundancy_factor">
    <td><CopyableCode code="redundancy_factor" /></td>
    <td><code>integer</code></td>
    <td> (wire: redundancyFactor)</td>
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

Fetch the requirements for a given cluster configuration

```sql
SELECT
max_nodes,
min_nodes,
scale_factor
FROM ovh.nutanix.requirements
WHERE erasure_coding = '{{ erasure_coding }}' -- required
AND rack_awareness = '{{ rack_awareness }}' -- required
AND redundancy_factor = '{{ redundancy_factor }}' -- required
;
```
</TabItem>
</Tabs>
