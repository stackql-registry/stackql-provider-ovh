--- 
title: user_rights
hide_title: false
hide_table_of_contents: false
keywords:
  - user_rights
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

Creates, updates, deletes, gets or lists a <code>user_rights</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="user_rights" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.dedicated_cloud.user_rights" /></td></tr>
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
    <td><CopyableCode code="datacenter_id" /></td>
    <td><code>integer</code></td>
    <td> (wire: datacenterId)</td>
</tr>
<tr>
    <td><CopyableCode code="right_id" /></td>
    <td><code>integer</code></td>
    <td> (wire: rightId)</td>
</tr>
<tr>
    <td><CopyableCode code="can_add_ressource" /></td>
    <td><code>boolean</code></td>
    <td>Determine if the user can add ressources in your VMware on OVHcloud (wire: canAddRessource)</td>
</tr>
<tr>
    <td><CopyableCode code="network_role" /></td>
    <td><code>string</code></td>
    <td>Determine how this user can interact with the VMware on OVHcloud V(x)Lans (admin, manager, noAccess, readonly) (wire: networkRole)</td>
</tr>
<tr>
    <td><CopyableCode code="right" /></td>
    <td><code>string</code></td>
    <td>Determine what kind of access the User will have in this Datacenter of your VMware on OVHcloud (admin, disabled, readonly, readwrite)</td>
</tr>
<tr>
    <td><CopyableCode code="vm_network_role" /></td>
    <td><code>string</code></td>
    <td>Determine how this user can interact with the VMware on OVHcloud VM Network (admin, noAccess, readonly) (wire: vmNetworkRole)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

User datacenter right

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
    <td><CopyableCode code="datacenter_id" /></td>
    <td><code>integer</code></td>
    <td> (wire: datacenterId)</td>
</tr>
<tr>
    <td><CopyableCode code="right_id" /></td>
    <td><code>integer</code></td>
    <td> (wire: rightId)</td>
</tr>
<tr>
    <td><CopyableCode code="can_add_ressource" /></td>
    <td><code>boolean</code></td>
    <td>Determine if the user can add ressources in your VMware on OVHcloud (wire: canAddRessource)</td>
</tr>
<tr>
    <td><CopyableCode code="network_role" /></td>
    <td><code>string</code></td>
    <td>Determine how this user can interact with the VMware on OVHcloud V(x)Lans (admin, manager, noAccess, readonly) (wire: networkRole)</td>
</tr>
<tr>
    <td><CopyableCode code="right" /></td>
    <td><code>string</code></td>
    <td>Determine what kind of access the User will have in this Datacenter of your VMware on OVHcloud (admin, disabled, readonly, readwrite)</td>
</tr>
<tr>
    <td><CopyableCode code="vm_network_role" /></td>
    <td><code>string</code></td>
    <td>Determine how this user can interact with the VMware on OVHcloud VM Network (admin, noAccess, readonly) (wire: vmNetworkRole)</td>
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
    <td><a href="#parameter-right_id"><code>right_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-user_id"><code>user_id</code></a></td>
    <td></td>
    <td>Get a user datacenter right. Returns the access of the user on a datacenter: access level, network and VM network roles, and right to add resources.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-user_id"><code>user_id</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List user datacenter rights</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-right_id"><code>right_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-user_id"><code>user_id</code></a></td>
    <td></td>
    <td>Update a user datacenter right. Updates the access level, the network and VM network roles, and the right to add resources. Returns a task to track progress.</td>
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
<tr id="parameter-right_id">
    <td><CopyableCode code="right_id" /></td>
    <td><code>integer</code></td>
    <td> (wire: rightId)</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>Domain of the service (wire: serviceName)</td>
</tr>
<tr id="parameter-user_id">
    <td><CopyableCode code="user_id" /></td>
    <td><code>integer</code></td>
    <td> (wire: userId)</td>
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

Get a user datacenter right. Returns the access of the user on a datacenter: access level, network and VM network roles, and right to add resources.

```sql
SELECT
datacenter_id,
right_id,
can_add_ressource,
network_role,
right,
vm_network_role
FROM ovh.dedicated_cloud.user_rights
WHERE right_id = '{{ right_id }}' -- required
AND service_name = '{{ service_name }}' -- required
AND user_id = '{{ user_id }}' -- required
;
```
</TabItem>
<TabItem value="list">

List user datacenter rights

```sql
SELECT
datacenter_id,
right_id,
can_add_ressource,
network_role,
right,
vm_network_role
FROM ovh.dedicated_cloud.user_rights
WHERE service_name = '{{ service_name }}' -- required
AND user_id = '{{ user_id }}' -- required
AND x_pagination_mode = '{{ x_pagination_mode }}'
;
```
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

Update a user datacenter right. Updates the access level, the network and VM network roles, and the right to add resources. Returns a task to track progress.

```sql
UPDATE ovh.dedicated_cloud.user_rights
SET 
can_add_ressource = {{ can_add_ressource }},
network_role = '{{ network_role }}',
right = '{{ right }}',
vm_network_role = '{{ vm_network_role }}'
WHERE 
right_id = '{{ right_id }}' --required
AND service_name = '{{ service_name }}' --required
AND user_id = '{{ user_id }}' --required
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
