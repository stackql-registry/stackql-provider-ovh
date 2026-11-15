--- 
title: instance_interfaces
hide_title: false
hide_table_of_contents: false
keywords:
  - instance_interfaces
  - cloud
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

Creates, updates, deletes, gets or lists an <code>instance_interfaces</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="instance_interfaces" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.cloud.instance_interfaces" /></td></tr>
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
    <td><code>string</code></td>
    <td>Interface unique identifier</td>
</tr>
<tr>
    <td><CopyableCode code="network_id" /></td>
    <td><code>string</code></td>
    <td>Network id (wire: networkId)</td>
</tr>
<tr>
    <td><CopyableCode code="fixed_ips" /></td>
    <td><code>array</code></td>
    <td>List of ips of the interface (wire: fixedIps)</td>
</tr>
<tr>
    <td><CopyableCode code="mac_address" /></td>
    <td><code>string</code></td>
    <td>Mac address (wire: macAddress)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Openstack state</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Network type</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Interface

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
    <td><code>string</code></td>
    <td>Interface unique identifier</td>
</tr>
<tr>
    <td><CopyableCode code="network_id" /></td>
    <td><code>string</code></td>
    <td>Network id (wire: networkId)</td>
</tr>
<tr>
    <td><CopyableCode code="fixed_ips" /></td>
    <td><code>array</code></td>
    <td>List of ips of the interface (wire: fixedIps)</td>
</tr>
<tr>
    <td><CopyableCode code="mac_address" /></td>
    <td><code>string</code></td>
    <td>Mac address (wire: macAddress)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Openstack state</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Network type</td>
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
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-interface_id"><code>interface_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get interface</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get interfaces</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-network_id"><code>network_id</code></a></td>
    <td></td>
    <td>Create interface on an instance and attached it to a network</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-interface_id"><code>interface_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Delete an interface</td>
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
<tr id="parameter-instance_id">
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>Instance ID (wire: instanceId)</td>
</tr>
<tr id="parameter-interface_id">
    <td><CopyableCode code="interface_id" /></td>
    <td><code>string</code></td>
    <td>Interface ID (wire: interfaceId)</td>
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

Get interface

```sql
SELECT
id,
network_id,
fixed_ips,
mac_address,
state,
type
FROM ovh.cloud.instance_interfaces
WHERE instance_id = '{{ instance_id }}' -- required
AND interface_id = '{{ interface_id }}' -- required
AND service_name = '{{ service_name }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
<TabItem value="list">

Get interfaces

```sql
SELECT
id,
network_id,
fixed_ips,
mac_address,
state,
type
FROM ovh.cloud.instance_interfaces
WHERE instance_id = '{{ instance_id }}' -- required
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

Create interface on an instance and attached it to a network

```sql
INSERT INTO ovh.cloud.instance_interfaces (
ip,
network_id,
instance_id,
service_name
)
SELECT 
'{{ ip }}',
'{{ network_id }}' /* required */,
'{{ instance_id }}',
'{{ service_name }}'
RETURNING
id,
network_id,
fixed_ips,
mac_address,
state,
type
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: instance_interfaces
  props:
    - name: instance_id
      value: "{{ instance_id }}"
      description: Required parameter for the instance_interfaces resource.
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the instance_interfaces resource.
    - name: ip
      value: "{{ ip }}"
      description: |
        Static ip (Can only be defined for private networks)
    - name: network_id
      value: "{{ network_id }}"
      description: |
        Network id
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

Delete an interface

```sql
DELETE FROM ovh.cloud.instance_interfaces
WHERE instance_id = '{{ instance_id }}' --required
AND interface_id = '{{ interface_id }}' --required
AND service_name = '{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
</Tabs>
