--- 
title: user_object_rights
hide_title: false
hide_table_of_contents: false
keywords:
  - user_object_rights
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

Creates, updates, deletes, gets or lists a <code>user_object_rights</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="user_object_rights" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.dedicated_cloud.user_object_rights" /></td></tr>
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the object</td>
</tr>
<tr>
    <td><CopyableCode code="object_right_id" /></td>
    <td><code>integer</code></td>
    <td> (wire: objectRightId)</td>
</tr>
<tr>
    <td><CopyableCode code="vmware_object_id" /></td>
    <td><code>string</code></td>
    <td>The VMware MoRef of the object (wire: vmwareObjectId)</td>
</tr>
<tr>
    <td><CopyableCode code="propagate" /></td>
    <td><code>boolean</code></td>
    <td>Right propagation on children objects</td>
</tr>
<tr>
    <td><CopyableCode code="right" /></td>
    <td><code>string</code></td>
    <td>User access on the VMware object (admin, disabled, readonly, readwrite)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of the object (cluster, datastore, dvportgroup, folder, pool, vm)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

User object right

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the object</td>
</tr>
<tr>
    <td><CopyableCode code="object_right_id" /></td>
    <td><code>integer</code></td>
    <td> (wire: objectRightId)</td>
</tr>
<tr>
    <td><CopyableCode code="vmware_object_id" /></td>
    <td><code>string</code></td>
    <td>The VMware MoRef of the object (wire: vmwareObjectId)</td>
</tr>
<tr>
    <td><CopyableCode code="propagate" /></td>
    <td><code>boolean</code></td>
    <td>Right propagation on children objects</td>
</tr>
<tr>
    <td><CopyableCode code="right" /></td>
    <td><code>string</code></td>
    <td>User access on the VMware object (admin, disabled, readonly, readwrite)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of the object (cluster, datastore, dvportgroup, folder, pool, vm)</td>
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
    <td><a href="#parameter-object_right_id"><code>object_right_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-user_id"><code>user_id</code></a></td>
    <td></td>
    <td>Get a user object right. Returns the right of the user on a VMware object: object type, MoRef, access level and propagation.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-user_id"><code>user_id</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List user object rights</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-user_id"><code>user_id</code></a>, <a href="#parameter-right"><code>right</code></a>, <a href="#parameter-type"><code>type</code></a>, <a href="#parameter-vmware_object_id"><code>vmware_object_id</code></a></td>
    <td></td>
    <td>Create a user object right. Gives the user a right on a VMware object, given by its MoRef: cluster, datastore, portgroup, folder, pool or virtual machine. The right can propagate to child objects. Returns a task to track progress.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-object_right_id"><code>object_right_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-user_id"><code>user_id</code></a></td>
    <td></td>
    <td>Delete a user object right. Removes the right of the user on the VMware object. Returns a task to track progress.</td>
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
<tr id="parameter-object_right_id">
    <td><CopyableCode code="object_right_id" /></td>
    <td><code>integer</code></td>
    <td> (wire: objectRightId)</td>
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

Get a user object right. Returns the right of the user on a VMware object: object type, MoRef, access level and propagation.

```sql
SELECT
name,
object_right_id,
vmware_object_id,
propagate,
right,
type
FROM ovh.dedicated_cloud.user_object_rights
WHERE object_right_id = '{{ object_right_id }}' -- required
AND service_name = '{{ service_name }}' -- required
AND user_id = '{{ user_id }}' -- required
;
```
</TabItem>
<TabItem value="list">

List user object rights

```sql
SELECT
name,
object_right_id,
vmware_object_id,
propagate,
right,
type
FROM ovh.dedicated_cloud.user_object_rights
WHERE service_name = '{{ service_name }}' -- required
AND user_id = '{{ user_id }}' -- required
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

Create a user object right. Gives the user a right on a VMware object, given by its MoRef: cluster, datastore, portgroup, folder, pool or virtual machine. The right can propagate to child objects. Returns a task to track progress.

```sql
INSERT INTO ovh.dedicated_cloud.user_object_rights (
propagate,
right,
type,
vmware_object_id,
service_name,
user_id
)
SELECT 
{{ propagate }},
'{{ right }}' /* required */,
'{{ type }}' /* required */,
'{{ vmware_object_id }}' /* required */,
'{{ service_name }}',
'{{ user_id }}'
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
- name: user_object_rights
  props:
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the user_object_rights resource.
    - name: user_id
      value: {{ user_id }}
      description: Required parameter for the user_object_rights resource.
    - name: propagate
      value: {{ propagate }}
      description: |
        Right propagation on children objects
    - name: right
      value: "{{ right }}"
      description: |
        User access on the VMware object
      valid_values: ['admin', 'disabled', 'readonly', 'readwrite']
    - name: type
      value: "{{ type }}"
      description: |
        Type of the object
      valid_values: ['cluster', 'datastore', 'dvportgroup', 'folder', 'pool', 'vm']
    - name: vmware_object_id
      value: "{{ vmware_object_id }}"
      description: |
        The VMware MoRef of the object
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

Delete a user object right. Removes the right of the user on the VMware object. Returns a task to track progress.

```sql
DELETE FROM ovh.dedicated_cloud.user_object_rights
WHERE object_right_id = '{{ object_right_id }}' --required
AND service_name = '{{ service_name }}' --required
AND user_id = '{{ user_id }}' --required
;
```
</TabItem>
</Tabs>
