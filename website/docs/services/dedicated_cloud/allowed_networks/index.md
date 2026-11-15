--- 
title: allowed_networks
hide_title: false
hide_table_of_contents: false
keywords:
  - allowed_networks
  - dedicated_cloud
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

Creates, updates, deletes, gets or lists an <code>allowed_networks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="allowed_networks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.dedicated_cloud.allowed_networks" /></td></tr>
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
    <td><CopyableCode code="network_access_id" /></td>
    <td><code>integer</code></td>
    <td> (wire: networkAccessId)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="network" /></td>
    <td><code>string (ipv4-block)</code></td>
    <td>Network name, e.g. 123.100.200.0/32 (example: 192.0.2.0/24)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>All states an Allowed Network can be in (allowed, toDelete, toUpdate)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Network allowed on infrastructure firewall

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
    <td><CopyableCode code="network_access_id" /></td>
    <td><code>integer</code></td>
    <td> (wire: networkAccessId)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="network" /></td>
    <td><code>string (ipv4-block)</code></td>
    <td>Network name, e.g. 123.100.200.0/32 (example: 192.0.2.0/24)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>All states an Allowed Network can be in (allowed, toDelete, toUpdate)</td>
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
    <td><a href="#parameter-network_access_id"><code>network_access_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get an allowed network</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List allowed networks</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-network"><code>network</code></a></td>
    <td></td>
    <td>Create an allowed network. Allows a network, in CIDR notation, through the infrastructure firewall. Returns a task to track progress.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-network_access_id"><code>network_access_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Update an allowed network</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-network_access_id"><code>network_access_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Delete an allowed network. Removes the network from the infrastructure firewall. Returns a task to track progress.</td>
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
<tr id="parameter-network_access_id">
    <td><CopyableCode code="network_access_id" /></td>
    <td><code>integer</code></td>
    <td> (wire: networkAccessId)</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>Domain of the service (wire: serviceName)</td>
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

Get an allowed network

```sql
SELECT
network_access_id,
description,
network,
state
FROM ovh.dedicated_cloud.allowed_networks
WHERE network_access_id = '{{ network_access_id }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List allowed networks

```sql
SELECT
network_access_id,
description,
network,
state
FROM ovh.dedicated_cloud.allowed_networks
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

Create an allowed network. Allows a network, in CIDR notation, through the infrastructure firewall. Returns a task to track progress.

```sql
INSERT INTO ovh.dedicated_cloud.allowed_networks (
description,
network,
service_name
)
SELECT 
'{{ description }}',
'{{ network }}' /* required */,
'{{ service_name }}'
RETURNING
name,
datacenter_id,
filer_id,
host_id,
network_access_id,
order_id,
parent_task_id,
task_id,
user_id,
vlan_id,
created_by,
created_from,
description,
end_date,
execution_date,
last_modification_date,
maintenance_date_from,
maintenance_date_to,
network,
progress,
state,
type
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: allowed_networks
  props:
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the allowed_networks resource.
    - name: description
      value: "{{ description }}"
      description: |
        Description for your ACL
    - name: network
      value: "{{ network }}"
      description: |
        Network name, e.g. 123.100.200.0/32
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

Update an allowed network

```sql
UPDATE ovh.dedicated_cloud.allowed_networks
SET 
description = '{{ description }}',
network = '{{ network }}'
WHERE 
network_access_id = '{{ network_access_id }}' --required
AND service_name = '{{ service_name }}' --required
RETURNING
name,
datacenter_id,
filer_id,
host_id,
network_access_id,
order_id,
parent_task_id,
task_id,
user_id,
vlan_id,
created_by,
created_from,
description,
end_date,
execution_date,
last_modification_date,
maintenance_date_from,
maintenance_date_to,
network,
progress,
state,
type;
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

Delete an allowed network. Removes the network from the infrastructure firewall. Returns a task to track progress.

```sql
DELETE FROM ovh.dedicated_cloud.allowed_networks
WHERE network_access_id = '{{ network_access_id }}' --required
AND service_name = '{{ service_name }}' --required
;
```
</TabItem>
</Tabs>
