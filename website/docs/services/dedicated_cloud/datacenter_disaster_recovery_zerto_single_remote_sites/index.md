--- 
title: datacenter_disaster_recovery_zerto_single_remote_sites
hide_title: false
hide_table_of_contents: false
keywords:
  - datacenter_disaster_recovery_zerto_single_remote_sites
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

Creates, updates, deletes, gets or lists a <code>datacenter_disaster_recovery_zerto_single_remote_sites</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="datacenter_disaster_recovery_zerto_single_remote_sites" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.dedicated_cloud.datacenter_disaster_recovery_zerto_single_remote_sites" /></td></tr>
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

Zerto disaster recovery remote site

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
    <td>ID of the remote Vra Network</td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>Name given to this network</td>
</tr>
<tr>
    <td><CopyableCode code="remote_endpoint_public_ip" /></td>
    <td><code>string (ipv4)</code></td>
    <td>Your onsite endpoint public IP for the secured replication data tunnel (example: 192.0.2.0) (wire: remoteEndpointPublicIp)</td>
</tr>
<tr>
    <td><CopyableCode code="remote_vra_network" /></td>
    <td><code>string (ip-block)</code></td>
    <td>Internal zerto subnet of your onsite infrastructure (ip/cidr) (example: 192.0.2.0/24) (wire: remoteVraNetwork)</td>
</tr>
<tr>
    <td><CopyableCode code="remote_zvm_internal_ip" /></td>
    <td><code>string (ipv4)</code></td>
    <td>Internal ZVM ip on your onsite infrastructure local network (example: 192.0.2.0) (wire: remoteZvmInternalIp)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Current state of your current Zerto remote site (creating, deleting, delivered, error, toCreate, toDelete, toUpdate, unknown, updating)</td>
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
    <td><a href="#parameter-datacenter_id"><code>datacenter_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>List Zerto disaster recovery remote sites</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-datacenter_id"><code>datacenter_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-label"><code>label</code></a>, <a href="#parameter-pre_shared_key"><code>pre_shared_key</code></a>, <a href="#parameter-remote_endpoint_public_ip"><code>remote_endpoint_public_ip</code></a>, <a href="#parameter-remote_vra_network"><code>remote_vra_network</code></a>, <a href="#parameter-remote_zvm_internal_ip"><code>remote_zvm_internal_ip</code></a></td>
    <td></td>
    <td>Create Zerto disaster recovery remote site on VPN endpoint</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-datacenter_id"><code>datacenter_id</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Remove Zerto disaster recovery remote site</td>
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
<tr id="parameter-datacenter_id">
    <td><CopyableCode code="datacenter_id" /></td>
    <td><code>integer</code></td>
    <td>Id of the Datacenter (wire: datacenterId)</td>
</tr>
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>integer</code></td>
    <td>The id number of the network to remove (as returned by a GET call)</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>Domain of the service (wire: serviceName)</td>
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

List Zerto disaster recovery remote sites

```sql
SELECT
id,
label,
remote_endpoint_public_ip,
remote_vra_network,
remote_zvm_internal_ip,
state
FROM ovh.dedicated_cloud.datacenter_disaster_recovery_zerto_single_remote_sites
WHERE datacenter_id = '{{ datacenter_id }}' -- required
AND service_name = '{{ service_name }}' -- required
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

Create Zerto disaster recovery remote site on VPN endpoint

```sql
INSERT INTO ovh.dedicated_cloud.datacenter_disaster_recovery_zerto_single_remote_sites (
label,
pre_shared_key,
remote_endpoint_public_ip,
remote_vra_network,
remote_zvm_internal_ip,
datacenter_id,
service_name
)
SELECT 
'{{ label }}' /* required */,
'{{ pre_shared_key }}' /* required */,
'{{ remote_endpoint_public_ip }}' /* required */,
'{{ remote_vra_network }}' /* required */,
'{{ remote_zvm_internal_ip }}' /* required */,
'{{ datacenter_id }}',
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
- name: datacenter_disaster_recovery_zerto_single_remote_sites
  props:
    - name: datacenter_id
      value: {{ datacenter_id }}
      description: Required parameter for the datacenter_disaster_recovery_zerto_single_remote_sites resource.
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the datacenter_disaster_recovery_zerto_single_remote_sites resource.
    - name: label
      value: "{{ label }}"
      description: |
        The name for this connection
    - name: pre_shared_key
      value: "{{ pre_shared_key }}"
      description: |
        Pre-Shared Key to secure data transfer between both sites
    - name: remote_endpoint_public_ip
      value: "{{ remote_endpoint_public_ip }}"
      description: |
        Your onsite endpoint public IP for the secured replication data tunnel
    - name: remote_vra_network
      value: "{{ remote_vra_network }}"
      description: |
        Internal zerto subnet of your onsite infrastructure (ip/cidr)
    - name: remote_zvm_internal_ip
      value: "{{ remote_zvm_internal_ip }}"
      description: |
        Internal ZVM ip of your onsite infrastructure
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

Remove Zerto disaster recovery remote site

```sql
DELETE FROM ovh.dedicated_cloud.datacenter_disaster_recovery_zerto_single_remote_sites
WHERE datacenter_id = '{{ datacenter_id }}' --required
AND id = '{{ id }}' --required
AND service_name = '{{ service_name }}' --required
;
```
</TabItem>
</Tabs>
