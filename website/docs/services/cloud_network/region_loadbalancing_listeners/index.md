--- 
title: region_loadbalancing_listeners
hide_title: false
hide_table_of_contents: false
keywords:
  - region_loadbalancing_listeners
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

Creates, updates, deletes, gets or lists a <code>region_loadbalancing_listeners</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="region_loadbalancing_listeners" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.cloud_network.region_loadbalancing_listeners" /></td></tr>
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
    <td><CopyableCode code="certificate_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>The ID of the secret containing the certificate (wire: certificateId)</td>
</tr>
<tr>
    <td><CopyableCode code="default_pool_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>The ID of the default pool (wire: defaultPoolId)</td>
</tr>
<tr>
    <td><CopyableCode code="allowed_cidrs" /></td>
    <td><code>array</code></td>
    <td>The allowed CIDRs (wire: allowedCidrs)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the listener</td>
</tr>
<tr>
    <td><CopyableCode code="load_balancer_ids" /></td>
    <td><code>array</code></td>
    <td>A list of load balancer IDs (wire: loadBalancerIds)</td>
</tr>
<tr>
    <td><CopyableCode code="operating_status" /></td>
    <td><code>string</code></td>
    <td>Operating status of the listener (degraded, draining, error, noMonitor, offline, online) (wire: operatingStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="port" /></td>
    <td><code>integer</code></td>
    <td>Port to listen on</td>
</tr>
<tr>
    <td><CopyableCode code="protocol" /></td>
    <td><code>string</code></td>
    <td>Protocol of the listener (http, https, prometheus, sctp, tcp, terminatedHTTPS, udp)</td>
</tr>
<tr>
    <td><CopyableCode code="provisioning_status" /></td>
    <td><code>string</code></td>
    <td>Provisioning status of the listener (active, creating, deleted, deleting, error, updating) (wire: provisioningStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="timeout_client_data" /></td>
    <td><code>integer</code></td>
    <td>Timeout client data of the listener (wire: timeoutClientData)</td>
</tr>
<tr>
    <td><CopyableCode code="timeout_member_data" /></td>
    <td><code>integer</code></td>
    <td>Timeout member data of the listener (wire: timeoutMemberData)</td>
</tr>
<tr>
    <td><CopyableCode code="tls_versions" /></td>
    <td><code>array</code></td>
    <td>TLS versions of the listener (wire: tlsVersions)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Listener

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
    <td><CopyableCode code="certificate_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>The ID of the secret containing the certificate (wire: certificateId)</td>
</tr>
<tr>
    <td><CopyableCode code="default_pool_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>The ID of the default pool (wire: defaultPoolId)</td>
</tr>
<tr>
    <td><CopyableCode code="allowed_cidrs" /></td>
    <td><code>array</code></td>
    <td>The allowed CIDRs (wire: allowedCidrs)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the listener</td>
</tr>
<tr>
    <td><CopyableCode code="load_balancer_ids" /></td>
    <td><code>array</code></td>
    <td>A list of load balancer IDs (wire: loadBalancerIds)</td>
</tr>
<tr>
    <td><CopyableCode code="operating_status" /></td>
    <td><code>string</code></td>
    <td>Operating status of the listener (degraded, draining, error, noMonitor, offline, online) (wire: operatingStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="port" /></td>
    <td><code>integer</code></td>
    <td>Port to listen on</td>
</tr>
<tr>
    <td><CopyableCode code="protocol" /></td>
    <td><code>string</code></td>
    <td>Protocol of the listener (http, https, prometheus, sctp, tcp, terminatedHTTPS, udp)</td>
</tr>
<tr>
    <td><CopyableCode code="provisioning_status" /></td>
    <td><code>string</code></td>
    <td>Provisioning status of the listener (active, creating, deleted, deleting, error, updating) (wire: provisioningStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="timeout_client_data" /></td>
    <td><code>integer</code></td>
    <td>Timeout client data of the listener (wire: timeoutClientData)</td>
</tr>
<tr>
    <td><CopyableCode code="timeout_member_data" /></td>
    <td><code>integer</code></td>
    <td>Timeout member data of the listener (wire: timeoutMemberData)</td>
</tr>
<tr>
    <td><CopyableCode code="tls_versions" /></td>
    <td><code>array</code></td>
    <td>TLS versions of the listener (wire: tlsVersions)</td>
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
    <td><a href="#parameter-listener_id"><code>listener_id</code></a>, <a href="#parameter-region_name"><code>region_name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get details about a loadbalancer listener</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region_name"><code>region_name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-loadbalancer_id"><code>loadbalancer_id</code></a></td>
    <td>List your loadbalancer listeners</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region_name"><code>region_name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-loadbalancer_id"><code>loadbalancer_id</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-port"><code>port</code></a>, <a href="#parameter-protocol"><code>protocol</code></a></td>
    <td></td>
    <td>Create a loadbalancer listener</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-listener_id"><code>listener_id</code></a>, <a href="#parameter-region_name"><code>region_name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Edit a loadbalancer listener</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-listener_id"><code>listener_id</code></a>, <a href="#parameter-region_name"><code>region_name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Delete loadbalancer listener</td>
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
<tr id="parameter-listener_id">
    <td><CopyableCode code="listener_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Listener ID (wire: listenerId)</td>
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
<tr id="parameter-loadbalancer_id">
    <td><CopyableCode code="loadbalancer_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Filter by loadbalancer (wire: loadbalancerId)</td>
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

Get details about a loadbalancer listener

```sql
SELECT
id,
name,
certificate_id,
default_pool_id,
allowed_cidrs,
description,
load_balancer_ids,
operating_status,
port,
protocol,
provisioning_status,
timeout_client_data,
timeout_member_data,
tls_versions
FROM ovh.cloud_network.region_loadbalancing_listeners
WHERE listener_id = '{{ listener_id }}' -- required
AND region_name = '{{ region_name }}' -- required
AND service_name = '{{ service_name }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
<TabItem value="list">

List your loadbalancer listeners

```sql
SELECT
id,
name,
certificate_id,
default_pool_id,
allowed_cidrs,
description,
load_balancer_ids,
operating_status,
port,
protocol,
provisioning_status,
timeout_client_data,
timeout_member_data,
tls_versions
FROM ovh.cloud_network.region_loadbalancing_listeners
WHERE region_name = '{{ region_name }}' -- required
AND service_name = '{{ service_name }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
AND loadbalancer_id = '{{ loadbalancer_id }}'
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

Create a loadbalancer listener

```sql
INSERT INTO ovh.cloud_network.region_loadbalancing_listeners (
allowed_cidrs,
certificate_id,
default_pool_id,
description,
loadbalancer_id,
name,
port,
protocol,
timeout_client_data,
timeout_member_data,
tls_versions,
region_name,
service_name
)
SELECT 
'{{ allowed_cidrs }}',
'{{ certificate_id }}',
'{{ default_pool_id }}',
'{{ description }}',
'{{ loadbalancer_id }}' /* required */,
'{{ name }}' /* required */,
{{ port }} /* required */,
'{{ protocol }}' /* required */,
{{ timeout_client_data }},
{{ timeout_member_data }},
'{{ tls_versions }}',
'{{ region_name }}',
'{{ service_name }}'
RETURNING
id,
name,
certificate_id,
default_pool_id,
allowed_cidrs,
description,
load_balancer_ids,
operating_status,
port,
protocol,
provisioning_status,
timeout_client_data,
timeout_member_data,
tls_versions
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: region_loadbalancing_listeners
  props:
    - name: region_name
      value: "{{ region_name }}"
      description: Required parameter for the region_loadbalancing_listeners resource.
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the region_loadbalancing_listeners resource.
    - name: allowed_cidrs
      value:
        - "{{ allowed_cidrs }}"
      description: |
        The allowed CIDRs
    - name: certificate_id
      value: "{{ certificate_id }}"
      description: |
        The ID of the secret containing the certificate
    - name: default_pool_id
      value: "{{ default_pool_id }}"
      description: |
        The ID of the default pool
    - name: description
      value: "{{ description }}"
      description: |
        The description of the listener
    - name: loadbalancer_id
      value: "{{ loadbalancer_id }}"
      description: |
        The ID of the loadbalancer
    - name: name
      value: "{{ name }}"
      description: |
        The name of the listener
    - name: port
      value: {{ port }}
      description: |
        Port to listen on
    - name: protocol
      value: "{{ protocol }}"
      description: |
        Protocol of the listener
      valid_values: ['http', 'https', 'prometheus', 'sctp', 'tcp', 'terminatedHTTPS', 'udp']
    - name: timeout_client_data
      value: {{ timeout_client_data }}
      description: |
        Timeout client data of the listener
    - name: timeout_member_data
      value: {{ timeout_member_data }}
      description: |
        Timeout member data of the listener
    - name: tls_versions
      value:
        - "{{ tls_versions }}"
      description: |
        TLS versions of the listener
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

Edit a loadbalancer listener

```sql
UPDATE ovh.cloud_network.region_loadbalancing_listeners
SET 
allowed_cidrs = '{{ allowed_cidrs }}',
certificate_id = '{{ certificate_id }}',
default_pool_id = '{{ default_pool_id }}',
description = '{{ description }}',
name = '{{ name }}'
WHERE 
listener_id = '{{ listener_id }}' --required
AND region_name = '{{ region_name }}' --required
AND service_name = '{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
RETURNING
id,
name,
certificate_id,
default_pool_id,
allowed_cidrs,
description,
load_balancer_ids,
operating_status,
port,
protocol,
provisioning_status,
timeout_client_data,
timeout_member_data,
tls_versions;
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

Delete loadbalancer listener

```sql
DELETE FROM ovh.cloud_network.region_loadbalancing_listeners
WHERE listener_id = '{{ listener_id }}' --required
AND region_name = '{{ region_name }}' --required
AND service_name = '{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
</Tabs>
