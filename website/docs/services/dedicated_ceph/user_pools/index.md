--- 
title: user_pools
hide_title: false
hide_table_of_contents: false
keywords:
  - user_pools
  - dedicated_ceph
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

Creates, updates, deletes, gets or lists a <code>user_pools</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="user_pools" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.dedicated_ceph.user_pools" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

List of permissions

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
    <td><CopyableCode code="pool_name" /></td>
    <td><code>string</code></td>
    <td>Name of Ceph pool (wire: poolName)</td>
</tr>
<tr>
    <td><CopyableCode code="class_read" /></td>
    <td><code>boolean</code></td>
    <td>Class read permission (wire: classRead)</td>
</tr>
<tr>
    <td><CopyableCode code="class_write" /></td>
    <td><code>boolean</code></td>
    <td>Class write permission (wire: classWrite)</td>
</tr>
<tr>
    <td><CopyableCode code="execute" /></td>
    <td><code>boolean</code></td>
    <td>Execute permission</td>
</tr>
<tr>
    <td><CopyableCode code="read" /></td>
    <td><code>boolean</code></td>
    <td>Read permission</td>
</tr>
<tr>
    <td><CopyableCode code="write" /></td>
    <td><code>boolean</code></td>
    <td>Write permission</td>
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
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-user_name"><code>user_name</code></a></td>
    <td></td>
    <td>Returns the permissions of the user on each pool.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-user_name"><code>user_name</code></a></td>
    <td></td>
    <td>Replaces all pool permissions of the user with the given list. Pools left out of the list lose their permissions.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-user_name"><code>user_name</code></a>, <a href="#parameter-class_read"><code>class_read</code></a>, <a href="#parameter-class_write"><code>class_write</code></a>, <a href="#parameter-execute"><code>execute</code></a>, <a href="#parameter-pool_name"><code>pool_name</code></a>, <a href="#parameter-read"><code>read</code></a>, <a href="#parameter-write"><code>write</code></a></td>
    <td></td>
    <td>Updates the permissions of the user on one pool.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-pool_name"><code>pool_name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-user_name"><code>user_name</code></a></td>
    <td></td>
    <td>Removes all permissions of the user on the pool.</td>
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
<tr id="parameter-pool_name">
    <td><CopyableCode code="pool_name" /></td>
    <td><code>string</code></td>
    <td>Pool name (wire: poolName)</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>Service name (wire: serviceName)</td>
</tr>
<tr id="parameter-user_name">
    <td><CopyableCode code="user_name" /></td>
    <td><code>string</code></td>
    <td>User name (wire: userName)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

Returns the permissions of the user on each pool.

```sql
SELECT
pool_name,
class_read,
class_write,
execute,
read,
write
FROM ovh.dedicated_ceph.user_pools
WHERE service_name = '{{ service_name }}' -- required
AND user_name = '{{ user_name }}' -- required
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

Replaces all pool permissions of the user with the given list. Pools left out of the list lose their permissions.

```sql
INSERT INTO ovh.dedicated_ceph.user_pools (
permissions,
service_name,
user_name
)
SELECT 
'{{ permissions }}',
'{{ service_name }}',
'{{ user_name }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: user_pools
  props:
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the user_pools resource.
    - name: user_name
      value: "{{ user_name }}"
      description: Required parameter for the user_pools resource.
    - name: permissions
      description: |
        Permissions
      value:
        - classRead: {{ classRead }}
          classWrite: {{ classWrite }}
          execute: {{ execute }}
          poolName: "{{ poolName }}"
          read: {{ read }}
          write: {{ write }}
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

Updates the permissions of the user on one pool.

```sql
UPDATE ovh.dedicated_ceph.user_pools
SET 
class_read = {{ class_read }},
class_write = {{ class_write }},
execute = {{ execute }},
pool_name = '{{ pool_name }}',
read = {{ read }},
write = {{ write }}
WHERE 
service_name = '{{ service_name }}' --required
AND user_name = '{{ user_name }}' --required
AND class_read = {{ class_read }} --required
AND class_write = {{ class_write }} --required
AND execute = {{ execute }} --required
AND pool_name = '{{ pool_name }}' --required
AND read = {{ read }} --required
AND write = {{ write }} --required;
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

Removes all permissions of the user on the pool.

```sql
DELETE FROM ovh.dedicated_ceph.user_pools
WHERE pool_name = '{{ pool_name }}' --required
AND service_name = '{{ service_name }}' --required
AND user_name = '{{ user_name }}' --required
;
```
</TabItem>
</Tabs>
