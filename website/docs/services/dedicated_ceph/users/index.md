--- 
title: users
hide_title: false
hide_table_of_contents: false
keywords:
  - users
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

Creates, updates, deletes, gets or lists a <code>users</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="users" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.dedicated_ceph.users" /></td></tr>
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
    <td>Name of ceph user</td>
</tr>
<tr>
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>ID of cluster (wire: serviceName)</td>
</tr>
<tr>
    <td><CopyableCode code="key" /></td>
    <td><code>string</code></td>
    <td>Key of user to connect into cluster</td>
</tr>
<tr>
    <td><CopyableCode code="key_type" /></td>
    <td><code>string</code></td>
    <td>Type of the user key (AES, AES256K) (wire: keyType)</td>
</tr>
<tr>
    <td><CopyableCode code="mds_caps" /></td>
    <td><code>string</code></td>
    <td>Capabilities of user on MDS (wire: mdsCaps)</td>
</tr>
<tr>
    <td><CopyableCode code="mon_caps" /></td>
    <td><code>string</code></td>
    <td>Capabilities of user on MON (wire: monCaps)</td>
</tr>
<tr>
    <td><CopyableCode code="osd_caps" /></td>
    <td><code>string</code></td>
    <td>Capabilities of user on OSD (wire: osdCaps)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Ceph user

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
    <td>Name of ceph user</td>
</tr>
<tr>
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>ID of cluster (wire: serviceName)</td>
</tr>
<tr>
    <td><CopyableCode code="key" /></td>
    <td><code>string</code></td>
    <td>Key of user to connect into cluster</td>
</tr>
<tr>
    <td><CopyableCode code="key_type" /></td>
    <td><code>string</code></td>
    <td>Type of the user key (AES, AES256K) (wire: keyType)</td>
</tr>
<tr>
    <td><CopyableCode code="mds_caps" /></td>
    <td><code>string</code></td>
    <td>Capabilities of user on MDS (wire: mdsCaps)</td>
</tr>
<tr>
    <td><CopyableCode code="mon_caps" /></td>
    <td><code>string</code></td>
    <td>Capabilities of user on MON (wire: monCaps)</td>
</tr>
<tr>
    <td><CopyableCode code="osd_caps" /></td>
    <td><code>string</code></td>
    <td>Capabilities of user on OSD (wire: osdCaps)</td>
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
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-user_name"><code>user_name</code></a></td>
    <td></td>
    <td>Returns a Ceph user. Use its key to connect a client to the cluster.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Returns the Ceph users of the cluster.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-user_name"><code>user_name</code></a></td>
    <td></td>
    <td>Creates a Ceph user with no pool permissions. The name must contain at least three characters.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-user_name"><code>user_name</code></a></td>
    <td></td>
    <td>Deletes the Ceph user from the cluster.</td>
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
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Returns a Ceph user. Use its key to connect a client to the cluster.

```sql
SELECT
name,
service_name,
key,
key_type,
mds_caps,
mon_caps,
osd_caps
FROM ovh.dedicated_ceph.users
WHERE service_name = '{{ service_name }}' -- required
AND user_name = '{{ user_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns the Ceph users of the cluster.

```sql
SELECT
name,
service_name,
key,
key_type,
mds_caps,
mon_caps,
osd_caps
FROM ovh.dedicated_ceph.users
WHERE service_name = '{{ service_name }}' -- required
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

Creates a Ceph user with no pool permissions. The name must contain at least three characters.

```sql
INSERT INTO ovh.dedicated_ceph.users (
key_type,
user_name,
service_name
)
SELECT 
'{{ key_type }}',
'{{ user_name }}' /* required */,
'{{ service_name }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: users
  props:
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the users resource.
    - name: key_type
      value: "{{ key_type }}"
      description: |
        Type of the generated user key, AES unless given
      valid_values: ['AES', 'AES256K']
    - name: user_name
      value: "{{ user_name }}"
      description: |
        Name of the new user
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

Deletes the Ceph user from the cluster.

```sql
DELETE FROM ovh.dedicated_ceph.users
WHERE service_name = '{{ service_name }}' --required
AND user_name = '{{ user_name }}' --required
;
```
</TabItem>
</Tabs>
