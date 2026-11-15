--- 
title: udp_farms
hide_title: false
hide_table_of_contents: false
keywords:
  - udp_farms
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

Creates, updates, deletes, gets or lists a <code>udp_farms</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="udp_farms" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.ip_loadbalancing.udp_farms" /></td></tr>
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
    <td><CopyableCode code="farm_id" /></td>
    <td><code>integer</code></td>
    <td>Id of your farm (wire: farmId)</td>
</tr>
<tr>
    <td><CopyableCode code="vrack_network_id" /></td>
    <td><code>integer</code></td>
    <td>Internal Load Balancer identifier of the vRack private network attached to your farm, mandatory when your Load Balancer is attached to a vRack (wire: vrackNetworkId)</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>Human readable name for your backend, this field is for you (wire: displayName)</td>
</tr>
<tr>
    <td><CopyableCode code="port" /></td>
    <td><code>integer</code></td>
    <td>Port attached to your farm. Inherited from frontend if null</td>
</tr>
<tr>
    <td><CopyableCode code="zone" /></td>
    <td><code>string</code></td>
    <td>Zone of you farm</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

UDP Farm

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
    <td><CopyableCode code="farm_id" /></td>
    <td><code>integer</code></td>
    <td>Id of your farm (wire: farmId)</td>
</tr>
<tr>
    <td><CopyableCode code="vrack_network_id" /></td>
    <td><code>integer</code></td>
    <td>Internal Load Balancer identifier of the vRack private network attached to your farm, mandatory when your Load Balancer is attached to a vRack (wire: vrackNetworkId)</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>Human readable name for your backend, this field is for you (wire: displayName)</td>
</tr>
<tr>
    <td><CopyableCode code="port" /></td>
    <td><code>integer</code></td>
    <td>Port attached to your farm. Inherited from frontend if null</td>
</tr>
<tr>
    <td><CopyableCode code="zone" /></td>
    <td><code>string</code></td>
    <td>Zone of you farm</td>
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
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get a UDP farm (Beta version)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-vrack_network_id"><code>vrack_network_id</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List UDP farms (Beta version)</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-port"><code>port</code></a>, <a href="#parameter-zone"><code>zone</code></a></td>
    <td></td>
    <td>Create a UDP farm (Beta version)</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Update a UDP farm (Beta version)</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Delete a UDP farm (Beta version)</td>
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
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The internal name of your IP load balancing (wire: serviceName)</td>
</tr>
<tr id="parameter-vrack_network_id">
    <td><CopyableCode code="vrack_network_id" /></td>
    <td><code>integer</code></td>
    <td>Filter the value of vrackNetworkId property (=) (wire: vrackNetworkId)</td>
</tr>
<tr id="parameter-x_pagination_mode">
    <td><CopyableCode code="x_pagination_mode" /></td>
    <td><code>string</code></td>
    <td>Sent as CachedObjectList-Pages by default so the list returns the full objects rather than their identifiers. (wire: X-Pagination-Mode)</td>
</tr>
<tr id="parameter-zone">
    <td><CopyableCode code="zone" /></td>
    <td><code>string</code></td>
    <td>Filter the value of zone property (=)</td>
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

Get a UDP farm (Beta version)

```sql
SELECT
farm_id,
vrack_network_id,
display_name,
port,
zone
FROM ovh.ip_loadbalancing.udp_farms
WHERE farm_id = '{{ farm_id }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List UDP farms (Beta version)

```sql
SELECT
farm_id,
vrack_network_id,
display_name,
port,
zone
FROM ovh.ip_loadbalancing.udp_farms
WHERE service_name = '{{ service_name }}' -- required
AND vrack_network_id = '{{ vrack_network_id }}'
AND zone = '{{ zone }}'
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

Create a UDP farm (Beta version)

```sql
INSERT INTO ovh.ip_loadbalancing.udp_farms (
display_name,
port,
vrack_network_id,
zone,
service_name
)
SELECT 
'{{ display_name }}',
{{ port }} /* required */,
{{ vrack_network_id }},
'{{ zone }}' /* required */,
'{{ service_name }}'
RETURNING
farm_id,
vrack_network_id,
display_name,
port,
zone
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: udp_farms
  props:
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the udp_farms resource.
    - name: display_name
      value: "{{ display_name }}"
      description: |
        Human readable name for your backend, this field is for you
    - name: port
      value: {{ port }}
      description: |
        Port attached to your farm ([1..49151]). Inherited from frontend if null
    - name: vrack_network_id
      value: {{ vrack_network_id }}
      description: |
        Internal Load Balancer identifier of the vRack private network to attach to your farm, mandatory when your Load Balancer is attached to a vRack
    - name: zone
      value: "{{ zone }}"
      description: |
        Zone of your farm
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

Update a UDP farm (Beta version)

```sql
UPDATE ovh.ip_loadbalancing.udp_farms
SET 
display_name = '{{ display_name }}',
port = {{ port }},
vrack_network_id = {{ vrack_network_id }}
WHERE 
farm_id = '{{ farm_id }}' --required
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

Delete a UDP farm (Beta version)

```sql
DELETE FROM ovh.ip_loadbalancing.udp_farms
WHERE farm_id = '{{ farm_id }}' --required
AND service_name = '{{ service_name }}' --required
;
```
</TabItem>
</Tabs>
