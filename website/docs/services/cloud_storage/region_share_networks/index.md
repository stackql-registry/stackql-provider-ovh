--- 
title: region_share_networks
hide_title: false
hide_table_of_contents: false
keywords:
  - region_share_networks
  - cloud_storage
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

Creates, updates, deletes, gets or lists a <code>region_share_networks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="region_share_networks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.cloud_storage.region_share_networks" /></td></tr>
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
    <td>Share network ID</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Share network name</td>
</tr>
<tr>
    <td><CopyableCode code="network_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Private network ID (wire: networkId)</td>
</tr>
<tr>
    <td><CopyableCode code="subnet_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Subnet ID (wire: subnetId)</td>
</tr>
<tr>
    <td><CopyableCode code="availability_zone" /></td>
    <td><code>string</code></td>
    <td>Availability zone (wire: availabilityZone)</td>
</tr>
<tr>
    <td><CopyableCode code="cidr" /></td>
    <td><code>string (ip-block)</code></td>
    <td>Subnet CIDR (example: 192.0.2.0/24)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and timestamp when the resource was created (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Share network description</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Region</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and timestamp when the resource was last updated (wire: updatedAt)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Share network

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
    <td>Share network ID</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Share network name</td>
</tr>
<tr>
    <td><CopyableCode code="network_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Private network ID (wire: networkId)</td>
</tr>
<tr>
    <td><CopyableCode code="subnet_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Subnet ID (wire: subnetId)</td>
</tr>
<tr>
    <td><CopyableCode code="availability_zone" /></td>
    <td><code>string</code></td>
    <td>Availability zone (wire: availabilityZone)</td>
</tr>
<tr>
    <td><CopyableCode code="cidr" /></td>
    <td><code>string (ip-block)</code></td>
    <td>Subnet CIDR (example: 192.0.2.0/24)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and timestamp when the resource was created (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Share network description</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Region</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and timestamp when the resource was last updated (wire: updatedAt)</td>
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
    <td><a href="#parameter-region_name"><code>region_name</code></a>, <a href="#parameter-share_network_id"><code>share_network_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get share network</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region_name"><code>region_name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>List share networks</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region_name"><code>region_name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-network_id"><code>network_id</code></a>, <a href="#parameter-subnet_id"><code>subnet_id</code></a></td>
    <td></td>
    <td>Create share network</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region_name"><code>region_name</code></a>, <a href="#parameter-share_network_id"><code>share_network_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Delete share network</td>
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
<tr id="parameter-share_network_id">
    <td><CopyableCode code="share_network_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Share network ID (wire: shareNetworkId)</td>
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

Get share network

```sql
SELECT
id,
name,
network_id,
subnet_id,
availability_zone,
cidr,
created_at,
description,
region,
updated_at
FROM ovh.cloud_storage.region_share_networks
WHERE region_name = '{{ region_name }}' -- required
AND share_network_id = '{{ share_network_id }}' -- required
AND service_name = '{{ service_name }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
<TabItem value="list">

List share networks

```sql
SELECT
id,
name,
network_id,
subnet_id,
availability_zone,
cidr,
created_at,
description,
region,
updated_at
FROM ovh.cloud_storage.region_share_networks
WHERE region_name = '{{ region_name }}' -- required
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

Create share network

```sql
INSERT INTO ovh.cloud_storage.region_share_networks (
availability_zone,
description,
name,
network_id,
subnet_id,
region_name,
service_name
)
SELECT 
'{{ availability_zone }}',
'{{ description }}',
'{{ name }}',
'{{ network_id }}' /* required */,
'{{ subnet_id }}' /* required */,
'{{ region_name }}',
'{{ service_name }}'
RETURNING
id,
name,
network_id,
subnet_id,
availability_zone,
cidr,
created_at,
description,
region,
updated_at
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: region_share_networks
  props:
    - name: region_name
      value: "{{ region_name }}"
      description: Required parameter for the region_share_networks resource.
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the region_share_networks resource.
    - name: availability_zone
      value: "{{ availability_zone }}"
      description: |
        Availability zone for the share network (required in 3AZ regions)
    - name: description
      value: "{{ description }}"
      description: |
        Share network description
    - name: name
      value: "{{ name }}"
      description: |
        Share network name
    - name: network_id
      value: "{{ network_id }}"
      description: |
        Private network ID
    - name: subnet_id
      value: "{{ subnet_id }}"
      description: |
        Subnet ID
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

Delete share network

```sql
DELETE FROM ovh.cloud_storage.region_share_networks
WHERE region_name = '{{ region_name }}' --required
AND share_network_id = '{{ share_network_id }}' --required
AND service_name = '{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
</Tabs>
