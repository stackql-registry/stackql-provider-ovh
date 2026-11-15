--- 
title: udp_farm_servers
hide_title: false
hide_table_of_contents: false
keywords:
  - udp_farm_servers
  - ip_loadbalancing
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

Creates, updates, deletes, gets or lists a <code>udp_farm_servers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="udp_farm_servers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.ip_loadbalancing.udp_farm_servers" /></td></tr>
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
    <td><CopyableCode code="backend_id" /></td>
    <td><code>integer</code></td>
    <td>farm id (wire: backendId)</td>
</tr>
<tr>
    <td><CopyableCode code="server_id" /></td>
    <td><code>integer</code></td>
    <td>Id of your server (wire: serverId)</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>Human readable name for your server, this field is for you (wire: displayName)</td>
</tr>
<tr>
    <td><CopyableCode code="address" /></td>
    <td><code>string (ipv4)</code></td>
    <td>Address of your server (example: 192.0.2.0)</td>
</tr>
<tr>
    <td><CopyableCode code="port" /></td>
    <td><code>integer</code></td>
    <td>Port attached to your server. Inherited from farm if null</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status attached to your server (active, inactive)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

UDP Farm's Server

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
    <td><CopyableCode code="backend_id" /></td>
    <td><code>integer</code></td>
    <td>farm id (wire: backendId)</td>
</tr>
<tr>
    <td><CopyableCode code="server_id" /></td>
    <td><code>integer</code></td>
    <td>Id of your server (wire: serverId)</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>Human readable name for your server, this field is for you (wire: displayName)</td>
</tr>
<tr>
    <td><CopyableCode code="address" /></td>
    <td><code>string (ipv4)</code></td>
    <td>Address of your server (example: 192.0.2.0)</td>
</tr>
<tr>
    <td><CopyableCode code="port" /></td>
    <td><code>integer</code></td>
    <td>Port attached to your server. Inherited from farm if null</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status attached to your server (active, inactive)</td>
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
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-server_id"><code>server_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get a farm server (Beta version)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-address"><code>address</code></a>, <a href="#parameter-status"><code>status</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List farm servers (Beta version)</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-address"><code>address</code></a>, <a href="#parameter-status"><code>status</code></a></td>
    <td></td>
    <td>Create a farm server (Beta version)</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-server_id"><code>server_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Update a farm server (Beta version)</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-server_id"><code>server_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Delete a farm server (Beta version)</td>
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
<tr id="parameter-farm_id">
    <td><CopyableCode code="farm_id" /></td>
    <td><code>integer</code></td>
    <td>Id of your farm (wire: farmId)</td>
</tr>
<tr id="parameter-server_id">
    <td><CopyableCode code="server_id" /></td>
    <td><code>integer</code></td>
    <td>Id of your server (wire: serverId)</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The internal name of your IP load balancing (wire: serviceName)</td>
</tr>
<tr id="parameter-address">
    <td><CopyableCode code="address" /></td>
    <td><code>string (ipv4)</code></td>
    <td>Filter the value of address property (=)</td>
</tr>
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Filter the value of status property (=)</td>
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

Get a farm server (Beta version)

```sql
SELECT
backend_id,
server_id,
display_name,
address,
port,
status
FROM ovh.ip_loadbalancing.udp_farm_servers
WHERE farm_id = '{{ farm_id }}' -- required
AND server_id = '{{ server_id }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List farm servers (Beta version)

```sql
SELECT
backend_id,
server_id,
display_name,
address,
port,
status
FROM ovh.ip_loadbalancing.udp_farm_servers
WHERE farm_id = '{{ farm_id }}' -- required
AND service_name = '{{ service_name }}' -- required
AND address = '{{ address }}'
AND status = '{{ status }}'
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

Create a farm server (Beta version)

```sql
INSERT INTO ovh.ip_loadbalancing.udp_farm_servers (
address,
display_name,
port,
status,
farm_id,
service_name
)
SELECT 
'{{ address }}' /* required */,
'{{ display_name }}',
{{ port }},
'{{ status }}' /* required */,
'{{ farm_id }}',
'{{ service_name }}'
RETURNING
backend_id,
server_id,
display_name,
address,
port,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: udp_farm_servers
  props:
    - name: farm_id
      value: {{ farm_id }}
      description: Required parameter for the udp_farm_servers resource.
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the udp_farm_servers resource.
    - name: address
      value: "{{ address }}"
      description: |
        IPv4 address (e.g., 192.0.2.0)
    - name: display_name
      value: "{{ display_name }}"
      description: |
        Human readable name for your server, this field is for you
    - name: port
      value: {{ port }}
      description: |
        Port attached to your server ([1..49151]). Inherited from farm if null
    - name: status
      value: "{{ status }}"
      description: |
        Possible values for server status
      valid_values: ['active', 'inactive']
`}</CodeBlock>

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

Update a farm server (Beta version)

```sql
UPDATE ovh.ip_loadbalancing.udp_farm_servers
SET 
display_name = '{{ display_name }}',
port = {{ port }},
status = '{{ status }}'
WHERE 
farm_id = '{{ farm_id }}' --required
AND server_id = '{{ server_id }}' --required
AND service_name = '{{ service_name }}' --required;
```
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

Delete a farm server (Beta version)

```sql
DELETE FROM ovh.ip_loadbalancing.udp_farm_servers
WHERE farm_id = '{{ farm_id }}' --required
AND server_id = '{{ server_id }}' --required
AND service_name = '{{ service_name }}' --required
;
```
</TabItem>
</Tabs>
