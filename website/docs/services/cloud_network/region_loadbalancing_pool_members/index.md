--- 
title: region_loadbalancing_pool_members
hide_title: false
hide_table_of_contents: false
keywords:
  - region_loadbalancing_pool_members
  - cloud_network
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

Creates, updates, deletes, gets or lists a <code>region_loadbalancing_pool_members</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="region_loadbalancing_pool_members" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.cloud_network.region_loadbalancing_pool_members" /></td></tr>
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
    <td><code>string (uuid)</code></td>
    <td>ID of the resource</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the resource</td>
</tr>
<tr>
    <td><CopyableCode code="address" /></td>
    <td><code>string (ipv4)</code></td>
    <td>IP address of the resource (example: 192.0.2.0)</td>
</tr>
<tr>
    <td><CopyableCode code="operating_status" /></td>
    <td><code>string</code></td>
    <td>Operating status of the resource (degraded, draining, error, noMonitor, offline, online) (wire: operatingStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="protocol_port" /></td>
    <td><code>integer</code></td>
    <td>Protocol port number for the resource (wire: protocolPort)</td>
</tr>
<tr>
    <td><CopyableCode code="provisioning_status" /></td>
    <td><code>string</code></td>
    <td>Provisioning status of the resource (active, creating, deleted, deleting, error, updating) (wire: provisioningStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="weight" /></td>
    <td><code>integer</code></td>
    <td>Weight of a member determines the portion of requests or connections it services compared to the other members of the pool</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Member

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
    <td><code>string (uuid)</code></td>
    <td>ID of the resource</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the resource</td>
</tr>
<tr>
    <td><CopyableCode code="address" /></td>
    <td><code>string (ipv4)</code></td>
    <td>IP address of the resource (example: 192.0.2.0)</td>
</tr>
<tr>
    <td><CopyableCode code="operating_status" /></td>
    <td><code>string</code></td>
    <td>Operating status of the resource (degraded, draining, error, noMonitor, offline, online) (wire: operatingStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="protocol_port" /></td>
    <td><code>integer</code></td>
    <td>Protocol port number for the resource (wire: protocolPort)</td>
</tr>
<tr>
    <td><CopyableCode code="provisioning_status" /></td>
    <td><code>string</code></td>
    <td>Provisioning status of the resource (active, creating, deleted, deleting, error, updating) (wire: provisioningStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="weight" /></td>
    <td><code>integer</code></td>
    <td>Weight of a member determines the portion of requests or connections it services compared to the other members of the pool</td>
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
    <td><a href="#parameter-member_id"><code>member_id</code></a>, <a href="#parameter-pool_id"><code>pool_id</code></a>, <a href="#parameter-region_name"><code>region_name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get details about a pool member</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-pool_id"><code>pool_id</code></a>, <a href="#parameter-region_name"><code>region_name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>List your pool members</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-pool_id"><code>pool_id</code></a>, <a href="#parameter-region_name"><code>region_name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-members"><code>members</code></a></td>
    <td></td>
    <td>Create pool members</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-member_id"><code>member_id</code></a>, <a href="#parameter-pool_id"><code>pool_id</code></a>, <a href="#parameter-region_name"><code>region_name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Update a pool member</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-member_id"><code>member_id</code></a>, <a href="#parameter-pool_id"><code>pool_id</code></a>, <a href="#parameter-region_name"><code>region_name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Delete a pool member</td>
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
<tr id="parameter-member_id">
    <td><CopyableCode code="member_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Member ID (wire: memberId)</td>
</tr>
<tr id="parameter-pool_id">
    <td><CopyableCode code="pool_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Pool ID (wire: poolId)</td>
</tr>
<tr id="parameter-region_name">
    <td><CopyableCode code="region_name" /></td>
    <td><code>string</code></td>
    <td>Region name (wire: regionName)</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The Public Cloud project ID. Resolved from OVH_CLOUD_PROJECT_SERVICE when set.</td>
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

Get details about a pool member

```sql
SELECT
id,
name,
address,
operating_status,
protocol_port,
provisioning_status,
weight
FROM ovh.cloud_network.region_loadbalancing_pool_members
WHERE member_id = '{{ member_id }}' -- required
AND pool_id = '{{ pool_id }}' -- required
AND region_name = '{{ region_name }}' -- required
AND service_name = '{{ service_name }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
<TabItem value="list">

List your pool members

```sql
SELECT
id,
name,
address,
operating_status,
protocol_port,
provisioning_status,
weight
FROM ovh.cloud_network.region_loadbalancing_pool_members
WHERE pool_id = '{{ pool_id }}' -- required
AND region_name = '{{ region_name }}' -- required
AND service_name = '{{ service_name }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
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

Create pool members

```sql
INSERT INTO ovh.cloud_network.region_loadbalancing_pool_members (
members,
pool_id,
region_name,
service_name
)
SELECT 
'{{ members }}' /* required */,
'{{ pool_id }}',
'{{ region_name }}',
'{{ service_name }}'
RETURNING
id,
name,
address,
operating_status,
protocol_port,
provisioning_status,
weight
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: region_loadbalancing_pool_members
  props:
    - name: pool_id
      value: "{{ pool_id }}"
      description: Required parameter for the region_loadbalancing_pool_members resource.
    - name: region_name
      value: "{{ region_name }}"
      description: Required parameter for the region_loadbalancing_pool_members resource.
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the region_loadbalancing_pool_members resource.
    - name: members
      description: |
        Members of a pool
      value:
        - address: "{{ address }}"
          id: "{{ id }}"
          name: "{{ name }}"
          operatingStatus: "{{ operatingStatus }}"
          protocolPort: {{ protocolPort }}
          provisioningStatus: "{{ provisioningStatus }}"
          weight: {{ weight }}
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

Update a pool member

```sql
UPDATE ovh.cloud_network.region_loadbalancing_pool_members
SET 
name = '{{ name }}',
weight = {{ weight }}
WHERE 
member_id = '{{ member_id }}' --required
AND pool_id = '{{ pool_id }}' --required
AND region_name = '{{ region_name }}' --required
AND service_name = '{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
RETURNING
id,
name,
address,
operating_status,
protocol_port,
provisioning_status,
weight;
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

Delete a pool member

```sql
DELETE FROM ovh.cloud_network.region_loadbalancing_pool_members
WHERE member_id = '{{ member_id }}' --required
AND pool_id = '{{ pool_id }}' --required
AND region_name = '{{ region_name }}' --required
AND service_name = '{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
</Tabs>
