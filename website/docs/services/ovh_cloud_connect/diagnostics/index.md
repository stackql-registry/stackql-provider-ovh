--- 
title: diagnostics
hide_title: false
hide_table_of_contents: false
keywords:
  - diagnostics
  - ovh_cloud_connect
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

Creates, updates, deletes, gets or lists a <code>diagnostics</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="diagnostics" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.ovh_cloud_connect.diagnostics" /></td></tr>
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
    <td><CopyableCode code="id" /></td>
    <td><code>integer</code></td>
    <td>Diagnostic id</td>
</tr>
<tr>
    <td><CopyableCode code="date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date of the diagnostic</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the diagnostic</td>
</tr>
<tr>
    <td><CopyableCode code="function" /></td>
    <td><code>string</code></td>
    <td>Diagnostic function (diagAccessEdge, diagMacs, diagPeering, diagPeeringExtra, diagRoutes)</td>
</tr>
<tr>
    <td><CopyableCode code="result" /></td>
    <td><code>array</code></td>
    <td>Diagnostic result</td>
</tr>
<tr>
    <td><CopyableCode code="source" /></td>
    <td><code>string</code></td>
    <td>Source where the diagnostic was run</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Diagnostic status (denied, doing, done, error, pause, todo)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

OVHcloud Connect Diagnostic

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
    <td><CopyableCode code="id" /></td>
    <td><code>integer</code></td>
    <td>Diagnostic id</td>
</tr>
<tr>
    <td><CopyableCode code="date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date of the diagnostic</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the diagnostic</td>
</tr>
<tr>
    <td><CopyableCode code="function" /></td>
    <td><code>string</code></td>
    <td>Diagnostic function (diagAccessEdge, diagMacs, diagPeering, diagPeeringExtra, diagRoutes)</td>
</tr>
<tr>
    <td><CopyableCode code="result" /></td>
    <td><code>array</code></td>
    <td>Diagnostic result</td>
</tr>
<tr>
    <td><CopyableCode code="source" /></td>
    <td><code>string</code></td>
    <td>Source where the diagnostic was run</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Diagnostic status (denied, doing, done, error, pause, todo)</td>
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
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Returns the diagnostic status and the equipment output (BGP state, routes or MACs).</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>Returns the IDs of the diagnostics run on the service.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-diagnostic_name"><code>diagnostic_name</code></a></td>
    <td></td>
    <td>Checks BGP peering, routes or MAC addresses on a configuration; runs per 24 h are capped.</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>integer</code></td>
    <td>Id</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string (uuid)</code></td>
    <td>Service name (wire: serviceName)</td>
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

Returns the diagnostic status and the equipment output (BGP state, routes or MACs).

```sql
SELECT
id,
date,
description,
function,
result,
source,
status
FROM ovh.ovh_cloud_connect.diagnostics
WHERE id = '{{ id }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns the IDs of the diagnostics run on the service.

```sql
SELECT
id,
date,
description,
function,
result,
source,
status
FROM ovh.ovh_cloud_connect.diagnostics
WHERE service_name = '{{ service_name }}' -- required
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

Checks BGP peering, routes or MAC addresses on a configuration; runs per 24 h are capped.

```sql
INSERT INTO ovh.ovh_cloud_connect.diagnostics (
dc_config_id,
diagnostic_name,
diagnostic_type,
edge_id,
extra_config_id,
pop_config_id,
service_name
)
SELECT 
{{ dc_config_id }},
'{{ diagnostic_name }}' /* required */,
'{{ diagnostic_type }}',
{{ edge_id }},
{{ extra_config_id }},
{{ pop_config_id }},
'{{ service_name }}'
RETURNING
id,
date,
description,
function,
result,
source,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: diagnostics
  props:
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the diagnostics resource.
    - name: dc_config_id
      value: {{ dc_config_id }}
      description: |
        ID of the Datacenter configuration
    - name: diagnostic_name
      value: "{{ diagnostic_name }}"
      description: |
        Name of the diagnostic
      valid_values: ['diagAccessEdge', 'diagMacs', 'diagPeering', 'diagPeeringExtra', 'diagRoutes']
    - name: diagnostic_type
      value: "{{ diagnostic_type }}"
      description: |
        Type of the diagnostic
      valid_values: ['advertised-routes', 'default', 'routes']
    - name: edge_id
      value: {{ edge_id }}
      description: |
        ID of the service Edge
    - name: extra_config_id
      value: {{ extra_config_id }}
      description: |
        ID of the extra configuration
    - name: pop_config_id
      value: {{ pop_config_id }}
      description: |
        ID of the Pop Configuration
`}</CodeBlock>

</TabItem>
</Tabs>
