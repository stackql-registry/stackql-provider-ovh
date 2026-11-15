--- 
title: wireguard_peers
hide_title: false
hide_table_of_contents: false
keywords:
  - wireguard_peers
  - over_the_box
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

Creates, updates, deletes, gets or lists a <code>wireguard_peers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="wireguard_peers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.over_the_box.wireguard_peers" /></td></tr>
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
    <td>Wireguard peer name</td>
</tr>
<tr>
    <td><CopyableCode code="peer_id" /></td>
    <td><code>string</code></td>
    <td>Wireguard peer id (wire: peerId)</td>
</tr>
<tr>
    <td><CopyableCode code="active" /></td>
    <td><code>boolean</code></td>
    <td>Wireguard peer status</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Wireguard peer description</td>
</tr>
<tr>
    <td><CopyableCode code="private_ipv_4" /></td>
    <td><code>string (ipv4-block)</code></td>
    <td>Wireguard peer private IP (example: 192.0.2.0/24) (wire: privateIpv4)</td>
</tr>
<tr>
    <td><CopyableCode code="public_key" /></td>
    <td><code>string</code></td>
    <td>Wireguard peer public key (wire: publicKey)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Service Wiregard peer details

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
    <td>Wireguard peer name</td>
</tr>
<tr>
    <td><CopyableCode code="peer_id" /></td>
    <td><code>string</code></td>
    <td>Wireguard peer id (wire: peerId)</td>
</tr>
<tr>
    <td><CopyableCode code="active" /></td>
    <td><code>boolean</code></td>
    <td>Wireguard peer status</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Wireguard peer description</td>
</tr>
<tr>
    <td><CopyableCode code="private_ipv_4" /></td>
    <td><code>string (ipv4-block)</code></td>
    <td>Wireguard peer private IP (example: 192.0.2.0/24) (wire: privateIpv4)</td>
</tr>
<tr>
    <td><CopyableCode code="public_key" /></td>
    <td><code>string</code></td>
    <td>Wireguard peer public key (wire: publicKey)</td>
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
    <td><a href="#parameter-peer_id"><code>peer_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Returns a WireGuard peer with its name, description, public key, private IPv4 and whether it is active. (Beta version)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>Returns the IDs of the WireGuard peers configured on the OverTheBox service. (Beta version)</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-description"><code>description</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-private_ipv_4"><code>private_ipv_4</code></a>, <a href="#parameter-public_key"><code>public_key</code></a></td>
    <td></td>
    <td>Adds a WireGuard peer to the service from its name, description, public key and private IPv4. Returns the created peer. (Beta version)</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-peer_id"><code>peer_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Changes the name, description, public key, private IPv4 or active status of a WireGuard peer. Returns the task that applies the change. (Beta version)</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-peer_id"><code>peer_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Removes the WireGuard peer from the service. Returns the task that performs the removal. (Beta version)</td>
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
<tr id="parameter-peer_id">
    <td><CopyableCode code="peer_id" /></td>
    <td><code>string</code></td>
    <td>Peer ID (wire: peerId)</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>Service name (wire: serviceName)</td>
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

Returns a WireGuard peer with its name, description, public key, private IPv4 and whether it is active. (Beta version)

```sql
SELECT
name,
peer_id,
active,
description,
private_ipv_4,
public_key
FROM ovh.over_the_box.wireguard_peers
WHERE peer_id = '{{ peer_id }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns the IDs of the WireGuard peers configured on the OverTheBox service. (Beta version)

```sql
SELECT
name,
peer_id,
active,
description,
private_ipv_4,
public_key
FROM ovh.over_the_box.wireguard_peers
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

Adds a WireGuard peer to the service from its name, description, public key and private IPv4. Returns the created peer. (Beta version)

```sql
INSERT INTO ovh.over_the_box.wireguard_peers (
description,
name,
private_ipv_4,
public_key,
service_name
)
SELECT 
'{{ description }}' /* required */,
'{{ name }}' /* required */,
'{{ private_ipv_4 }}' /* required */,
'{{ public_key }}' /* required */,
'{{ service_name }}'
RETURNING
name,
peer_id,
active,
description,
private_ipv_4,
public_key
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: wireguard_peers
  props:
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the wireguard_peers resource.
    - name: description
      value: "{{ description }}"
      description: |
        Wireguard peer description
    - name: name
      value: "{{ name }}"
      description: |
        Wireguard peer name
    - name: private_ipv_4
      value: "{{ private_ipv_4 }}"
      description: |
        Wireguard peer private IP
    - name: public_key
      value: "{{ public_key }}"
      description: |
        Wireguard peer public key
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

Changes the name, description, public key, private IPv4 or active status of a WireGuard peer. Returns the task that applies the change. (Beta version)

```sql
UPDATE ovh.over_the_box.wireguard_peers
SET 
active = {{ active }},
description = '{{ description }}',
name = '{{ name }}',
private_ipv_4 = '{{ private_ipv_4 }}',
public_key = '{{ public_key }}'
WHERE 
peer_id = '{{ peer_id }}' --required
AND service_name = '{{ service_name }}' --required
RETURNING
name,
task_id,
status;
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

Removes the WireGuard peer from the service. Returns the task that performs the removal. (Beta version)

```sql
DELETE FROM ovh.over_the_box.wireguard_peers
WHERE peer_id = '{{ peer_id }}' --required
AND service_name = '{{ service_name }}' --required
;
```
</TabItem>
</Tabs>
