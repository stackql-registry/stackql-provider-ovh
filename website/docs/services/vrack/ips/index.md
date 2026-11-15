--- 
title: ips
hide_title: false
hide_table_of_contents: false
keywords:
  - ips
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

Creates, updates, deletes, gets or lists an <code>ips</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ips" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.vrack.ips" /></td></tr>
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
    <td><CopyableCode code="gateway" /></td>
    <td><code>string (ip-block)</code></td>
    <td>Your gateway (example: 192.0.2.0/24)</td>
</tr>
<tr>
    <td><CopyableCode code="ip" /></td>
    <td><code>string (ip-block)</code></td>
    <td>Your IP block (example: 192.0.2.0/24)</td>
</tr>
<tr>
    <td><CopyableCode code="public_routing_type" /></td>
    <td><code>string</code></td>
    <td>Mode in which gateway is configured (wire: publicRoutingType)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Where you want your block announced on the network</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

IP block in vrack

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
    <td><CopyableCode code="gateway" /></td>
    <td><code>string (ip-block)</code></td>
    <td>Your gateway (example: 192.0.2.0/24)</td>
</tr>
<tr>
    <td><CopyableCode code="ip" /></td>
    <td><code>string (ip-block)</code></td>
    <td>Your IP block (example: 192.0.2.0/24)</td>
</tr>
<tr>
    <td><CopyableCode code="public_routing_type" /></td>
    <td><code>string</code></td>
    <td>Mode in which gateway is configured (wire: publicRoutingType)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Where you want your block announced on the network</td>
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
    <td><a href="#parameter-ip"><code>ip</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get a block. Returns the Additional IPv4 block, its gateway, its region and its public routing type.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List blocks. Returns the Additional IPv4 blocks routed in the vRack.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-block"><code>block</code></a></td>
    <td></td>
    <td>Attach a block. Routes an Additional IPv4 block in the vRack, in the given region. Returns the task that performs it.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-ip"><code>ip</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Detach a block. Removes the Additional IPv4 block from the vRack. Returns the task that performs it.</td>
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
<tr id="parameter-ip">
    <td><CopyableCode code="ip" /></td>
    <td><code>string (ip-block)</code></td>
    <td>Your IP block</td>
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

Get a block. Returns the Additional IPv4 block, its gateway, its region and its public routing type.

```sql
SELECT
gateway,
ip,
public_routing_type,
region
FROM ovh.vrack.ips
WHERE ip = '{{ ip }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List blocks. Returns the Additional IPv4 blocks routed in the vRack.

```sql
SELECT
gateway,
ip,
public_routing_type,
region
FROM ovh.vrack.ips
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

Attach a block. Routes an Additional IPv4 block in the vRack, in the given region. Returns the task that performs it.

```sql
INSERT INTO ovh.vrack.ips (
block,
region,
service_name
)
SELECT 
'{{ block }}' /* required */,
'{{ region }}',
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
- name: ips
  props:
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the ips resource.
    - name: block
      value: "{{ block }}"
      description: |
        IP (v4 or v6) CIDR notation (e.g., 192.0.2.0/24)
    - name: region
      value: "{{ region }}"
      description: |
        Choose the region in which to route the block
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

Detach a block. Removes the Additional IPv4 block from the vRack. Returns the task that performs it.

```sql
DELETE FROM ovh.vrack.ips
WHERE ip = '{{ ip }}' --required
AND service_name = '{{ service_name }}' --required
;
```
</TabItem>
</Tabs>
