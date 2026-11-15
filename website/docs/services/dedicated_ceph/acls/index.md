--- 
title: acls
hide_title: false
hide_table_of_contents: false
keywords:
  - acls
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

Creates, updates, deletes, gets or lists an <code>acls</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="acls" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.dedicated_ceph.acls" /></td></tr>
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
    <td><code>integer</code></td>
    <td>ID of IP ACL</td>
</tr>
<tr>
    <td><CopyableCode code="family" /></td>
    <td><code>string</code></td>
    <td>Family of IP ACL (IPV4, IPV6)</td>
</tr>
<tr>
    <td><CopyableCode code="netmask" /></td>
    <td><code>string (ipv4)</code></td>
    <td>IP address (e.g., 192.0.2.0) (example: 192.0.2.0)</td>
</tr>
<tr>
    <td><CopyableCode code="network" /></td>
    <td><code>string (ipv4)</code></td>
    <td>IP address (e.g., 192.0.2.0) (example: 192.0.2.0)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

IP ACL

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
    <td><code>integer</code></td>
    <td>ID of IP ACL</td>
</tr>
<tr>
    <td><CopyableCode code="family" /></td>
    <td><code>string</code></td>
    <td>Family of IP ACL (IPV4, IPV6)</td>
</tr>
<tr>
    <td><CopyableCode code="netmask" /></td>
    <td><code>string (ipv4)</code></td>
    <td>IP address (e.g., 192.0.2.0) (example: 192.0.2.0)</td>
</tr>
<tr>
    <td><CopyableCode code="network" /></td>
    <td><code>string (ipv4)</code></td>
    <td>IP address (e.g., 192.0.2.0) (example: 192.0.2.0)</td>
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
    <td><a href="#parameter-acl_id"><code>acl_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Returns an IP ACL, which allows one network to connect to the cluster.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Returns the IP ACLs of the cluster. Only the networks listed in an ACL can connect to the cluster.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-acl_list"><code>acl_list</code></a></td>
    <td></td>
    <td>Creates one IP ACL for each network in aclList, to allow it to connect to the cluster. The ACLs also apply to CephFS.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-acl_id"><code>acl_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Deletes the IP ACL. Clients in its network can no longer connect to the cluster.</td>
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
<tr id="parameter-acl_id">
    <td><CopyableCode code="acl_id" /></td>
    <td><code>integer</code></td>
    <td>Acl ID (wire: aclId)</td>
</tr>
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

Returns an IP ACL, which allows one network to connect to the cluster.

```sql
SELECT
id,
family,
netmask,
network
FROM ovh.dedicated_ceph.acls
WHERE acl_id = '{{ acl_id }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns the IP ACLs of the cluster. Only the networks listed in an ACL can connect to the cluster.

```sql
SELECT
id,
family,
netmask,
network
FROM ovh.dedicated_ceph.acls
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

Creates one IP ACL for each network in aclList, to allow it to connect to the cluster. The ACLs also apply to CephFS.

```sql
INSERT INTO ovh.dedicated_ceph.acls (
acl_list,
service_name
)
SELECT 
'{{ acl_list }}' /* required */,
'{{ service_name }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: acls
  props:
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the acls resource.
    - name: acl_list
      value:
        - "{{ acl_list }}"
      description: |
        List of new ACLs
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

Deletes the IP ACL. Clients in its network can no longer connect to the cluster.

```sql
DELETE FROM ovh.dedicated_ceph.acls
WHERE acl_id = '{{ acl_id }}' --required
AND service_name = '{{ service_name }}' --required
;
```
</TabItem>
</Tabs>
