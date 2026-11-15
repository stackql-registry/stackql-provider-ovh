--- 
title: datacenter_disaster_recovery_zerto_single_vra_resources
hide_title: false
hide_table_of_contents: false
keywords:
  - datacenter_disaster_recovery_zerto_single_vra_resources
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

Creates, updates, deletes, gets or lists a <code>datacenter_disaster_recovery_zerto_single_vra_resources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="datacenter_disaster_recovery_zerto_single_vra_resources" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.dedicated_cloud.datacenter_disaster_recovery_zerto_single_vra_resources" /></td></tr>
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

Zerto VRA resource details

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
    <td><CopyableCode code="vm_id" /></td>
    <td><code>integer</code></td>
    <td>ID of the Vra (wire: vmId)</td>
</tr>
<tr>
    <td><CopyableCode code="vra_name" /></td>
    <td><code>string</code></td>
    <td>Name of the VRA VM (wire: vraName)</td>
</tr>
<tr>
    <td><CopyableCode code="cpu" /></td>
    <td><code>integer</code></td>
    <td>Number of CPUs of VRA VM</td>
</tr>
<tr>
    <td><CopyableCode code="memory" /></td>
    <td><code>integer</code></td>
    <td>Memory of VRA vm in GB</td>
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
    <td>Lists all Zerto VRAs along with their allocated CPU and RAM resources</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-datacenter_id"><code>datacenter_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-resources_size"><code>resources_size</code></a>, <a href="#parameter-vm_id"><code>vm_id</code></a></td>
    <td></td>
    <td>Updates the CPU and RAM resources allocated to a specified Zerto VRA</td>
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

Lists all Zerto VRAs along with their allocated CPU and RAM resources

```sql
SELECT
vm_id,
vra_name,
cpu,
memory
FROM ovh.dedicated_cloud.datacenter_disaster_recovery_zerto_single_vra_resources
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

Updates the CPU and RAM resources allocated to a specified Zerto VRA

```sql
INSERT INTO ovh.dedicated_cloud.datacenter_disaster_recovery_zerto_single_vra_resources (
resources_size,
vm_id,
datacenter_id,
service_name
)
SELECT 
'{{ resources_size }}' /* required */,
{{ vm_id }} /* required */,
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
- name: datacenter_disaster_recovery_zerto_single_vra_resources
  props:
    - name: datacenter_id
      value: {{ datacenter_id }}
      description: Required parameter for the datacenter_disaster_recovery_zerto_single_vra_resources resource.
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the datacenter_disaster_recovery_zerto_single_vra_resources resource.
    - name: resources_size
      value: "{{ resources_size }}"
      description: |
        The desired CPU and RAM configuration for the VRA
      valid_values: ['L', 'S', 'XL', 'XS']
    - name: vm_id
      value: {{ vm_id }}
      description: |
        The unique identifier of the VRA vm
`}</CodeBlock>

</TabItem>
</Tabs>
