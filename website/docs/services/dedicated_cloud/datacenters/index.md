--- 
title: datacenters
hide_title: false
hide_table_of_contents: false
keywords:
  - datacenters
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

Creates, updates, deletes, gets or lists a <code>datacenters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="datacenters" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.dedicated_cloud.datacenters" /></td></tr>
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
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="datacenter_id" /></td>
    <td><code>integer</code></td>
    <td>Id of the Datacenter (wire: datacenterId)</td>
</tr>
<tr>
    <td><CopyableCode code="commercial_name" /></td>
    <td><code>string</code></td>
    <td>The commercial name of this Datacenter (CDI, CDI-HDS, CDI-HIPAA, CDI-NSX, CDI-NSX-T, CDI-NSX-VROPS, CDI-PCIDSS, CDI-UNKNOWN, CDI-VROPS, DC, DC-ANCIENT, DC-ANCIENT-HDS, DC-ANCIENT-HIPAA, DC-ANCIENT-NSX, DC-ANCIENT-NSX-T, DC-ANCIENT-NSX-VROPS, DC-ANCIENT-PCIDSS, DC-ANCIENT-UNKNOWN, DC-ANCIENT-VROPS, DC-HDS, DC-HIPAA, DC-LEGACY, DC-LEGACY-HDS, DC-LEGACY-HIPAA, DC-LEGACY-NSX, DC-LEGACY-NSX-T, DC-LEGACY-NSX-VROPS, DC-LEGACY-PCIDSS, DC-LEGACY-UNKNOWN, DC-LEGACY-VROPS, DC-NSX, DC-NSX-T, DC-NSX-VROPS, DC-PCIDSS, DC-UNKNOWN, DC-VROPS, ESSENTIALS, ESSENTIALS-HDS, ESSENTIALS-HIPAA, ESSENTIALS-NSX, ESSENTIALS-NSX-T, ESSENTIALS-NSX-VROPS, ESSENTIALS-PCIDSS, ESSENTIALS-UNKNOWN, ESSENTIALS-VROPS, NSX-T, NSX-T-DEFAULT, NSX-T-HDS, NSX-T-NSX, NSX-T-NSX-VROPS, NSX-T-PCIDSS, NSX-T-VROPS, NSX-T-VROPS-WITHOUT-NSX, NSX-T-WITHOUT-NSX, PREMIER, PREMIER-DEFAULT, PREMIER-HDS, PREMIER-HIPAA, PREMIER-NSX, PREMIER-NSX-T, PREMIER-NSX-VROPS, PREMIER-PCIDSS, PREMIER-UNKNOWN, PREMIER-VROPS, SDDC, SDDC-DEFAULT, SDDC-HDS, SDDC-HIPAA, SDDC-LEGACY, SDDC-LEGACY-HDS, SDDC-LEGACY-HIPAA, SDDC-LEGACY-PCIDSS, SDDC-LEGACY-UNKNOWN, SDDC-LEGACY-VROPS, SDDC-LEGACY-VROPS-WITHOUT-NSX, SDDC-LEGACY-WITHOUT-NSX, SDDC-PCIDSS, SDDC-UNKNOWN, SDDC-VROPS, SDDC-VROPS-WITHOUT-NSX, SDDC-WITHOUT-NSX, UNKNOWN, UNKNOWN-HDS, UNKNOWN-HIPAA, UNKNOWN-NSX, UNKNOWN-NSX-T, UNKNOWN-NSX-VROPS, UNKNOWN-PCIDSS, UNKNOWN-UNKNOWN, UNKNOWN-VROPS, UNKNOWN-VSPHERE, VSPHERE, VSPHERE-DEFAULT, VSPHERE-HDS, VSPHERE-NSX, VSPHERE-NSX-VROPS, VSPHERE-PCIDSS, VSPHERE-VROPS, VSPHERE-VROPS-WITHOUT-NSX, VSPHERE-WITHOUT-NSX) (wire: commercialName)</td>
</tr>
<tr>
    <td><CopyableCode code="commercial_range_name" /></td>
    <td><code>string</code></td>
    <td>The commercial range associated to this Datacenter (wire: commercialRangeName)</td>
</tr>
<tr>
    <td><CopyableCode code="horizon_view_name" /></td>
    <td><code>string</code></td>
    <td>Name of the associated Horizon View service if the VDI option is enabled (wire: horizonViewName)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="has_mixed_host_profiles" /></td>
    <td><code>boolean</code></td>
    <td>Check if this datacenter has different host profiles (wire: hasMixedHostProfiles)</td>
</tr>
<tr>
    <td><CopyableCode code="has_mixed_vsan_host_profiles" /></td>
    <td><code>boolean</code></td>
    <td>Check if this datacenter has different VSAN host profiles (wire: hasMixedVsanHostProfiles)</td>
</tr>
<tr>
    <td><CopyableCode code="is_removable" /></td>
    <td><code>boolean</code></td>
    <td>Check if this datacenter is removable (Need to be Empty) (wire: isRemovable)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>Os version installed on your VMware on OVHcloud</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Virtual datacenter

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
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="datacenter_id" /></td>
    <td><code>integer</code></td>
    <td>Id of the Datacenter (wire: datacenterId)</td>
</tr>
<tr>
    <td><CopyableCode code="commercial_name" /></td>
    <td><code>string</code></td>
    <td>The commercial name of this Datacenter (CDI, CDI-HDS, CDI-HIPAA, CDI-NSX, CDI-NSX-T, CDI-NSX-VROPS, CDI-PCIDSS, CDI-UNKNOWN, CDI-VROPS, DC, DC-ANCIENT, DC-ANCIENT-HDS, DC-ANCIENT-HIPAA, DC-ANCIENT-NSX, DC-ANCIENT-NSX-T, DC-ANCIENT-NSX-VROPS, DC-ANCIENT-PCIDSS, DC-ANCIENT-UNKNOWN, DC-ANCIENT-VROPS, DC-HDS, DC-HIPAA, DC-LEGACY, DC-LEGACY-HDS, DC-LEGACY-HIPAA, DC-LEGACY-NSX, DC-LEGACY-NSX-T, DC-LEGACY-NSX-VROPS, DC-LEGACY-PCIDSS, DC-LEGACY-UNKNOWN, DC-LEGACY-VROPS, DC-NSX, DC-NSX-T, DC-NSX-VROPS, DC-PCIDSS, DC-UNKNOWN, DC-VROPS, ESSENTIALS, ESSENTIALS-HDS, ESSENTIALS-HIPAA, ESSENTIALS-NSX, ESSENTIALS-NSX-T, ESSENTIALS-NSX-VROPS, ESSENTIALS-PCIDSS, ESSENTIALS-UNKNOWN, ESSENTIALS-VROPS, NSX-T, NSX-T-DEFAULT, NSX-T-HDS, NSX-T-NSX, NSX-T-NSX-VROPS, NSX-T-PCIDSS, NSX-T-VROPS, NSX-T-VROPS-WITHOUT-NSX, NSX-T-WITHOUT-NSX, PREMIER, PREMIER-DEFAULT, PREMIER-HDS, PREMIER-HIPAA, PREMIER-NSX, PREMIER-NSX-T, PREMIER-NSX-VROPS, PREMIER-PCIDSS, PREMIER-UNKNOWN, PREMIER-VROPS, SDDC, SDDC-DEFAULT, SDDC-HDS, SDDC-HIPAA, SDDC-LEGACY, SDDC-LEGACY-HDS, SDDC-LEGACY-HIPAA, SDDC-LEGACY-PCIDSS, SDDC-LEGACY-UNKNOWN, SDDC-LEGACY-VROPS, SDDC-LEGACY-VROPS-WITHOUT-NSX, SDDC-LEGACY-WITHOUT-NSX, SDDC-PCIDSS, SDDC-UNKNOWN, SDDC-VROPS, SDDC-VROPS-WITHOUT-NSX, SDDC-WITHOUT-NSX, UNKNOWN, UNKNOWN-HDS, UNKNOWN-HIPAA, UNKNOWN-NSX, UNKNOWN-NSX-T, UNKNOWN-NSX-VROPS, UNKNOWN-PCIDSS, UNKNOWN-UNKNOWN, UNKNOWN-VROPS, UNKNOWN-VSPHERE, VSPHERE, VSPHERE-DEFAULT, VSPHERE-HDS, VSPHERE-NSX, VSPHERE-NSX-VROPS, VSPHERE-PCIDSS, VSPHERE-VROPS, VSPHERE-VROPS-WITHOUT-NSX, VSPHERE-WITHOUT-NSX) (wire: commercialName)</td>
</tr>
<tr>
    <td><CopyableCode code="commercial_range_name" /></td>
    <td><code>string</code></td>
    <td>The commercial range associated to this Datacenter (wire: commercialRangeName)</td>
</tr>
<tr>
    <td><CopyableCode code="horizon_view_name" /></td>
    <td><code>string</code></td>
    <td>Name of the associated Horizon View service if the VDI option is enabled (wire: horizonViewName)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="has_mixed_host_profiles" /></td>
    <td><code>boolean</code></td>
    <td>Check if this datacenter has different host profiles (wire: hasMixedHostProfiles)</td>
</tr>
<tr>
    <td><CopyableCode code="has_mixed_vsan_host_profiles" /></td>
    <td><code>boolean</code></td>
    <td>Check if this datacenter has different VSAN host profiles (wire: hasMixedVsanHostProfiles)</td>
</tr>
<tr>
    <td><CopyableCode code="is_removable" /></td>
    <td><code>boolean</code></td>
    <td>Check if this datacenter is removable (Need to be Empty) (wire: isRemovable)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>Os version installed on your VMware on OVHcloud</td>
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
    <td><a href="#parameter-datacenter_id"><code>datacenter_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get a datacenter. Returns the datacenter: name, commercial range, version and whether it can be removed.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List datacenters</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-commercial_range_name"><code>commercial_range_name</code></a></td>
    <td></td>
    <td>Create a datacenter. Creates a datacenter in a commercial range, optionally linked to a vRack. Returns a task to track progress.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-datacenter_id"><code>datacenter_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Update a datacenter. Updates the name and description of the datacenter. Returns a task to track progress.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-datacenter_id"><code>datacenter_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Delete a datacenter. Deletes the datacenter. The datacenter must be empty: check `isRemovable` first. Returns a task to track progress.</td>
</tr>
<tr>
    <td><a href="#check_backup_jobs"><CopyableCode code="check_backup_jobs" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-datacenterId"><code>datacenterId</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Check backup jobs. Checks that the backup jobs of the datacenter are set correctly after virtual machines moved to another datacenter. Returns a task to track progress.</td>
</tr>
<tr>
    <td><a href="#disaster_recovery_zerto_disable"><CopyableCode code="disaster_recovery_zerto_disable" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-datacenterId"><code>datacenterId</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-secondaryDatacenterId"><code>secondaryDatacenterId</code></a>, <a href="#parameter-secondaryServiceName"><code>secondaryServiceName</code></a></td>
    <td></td>
    <td>Disable Zerto disaster recovery between two VMware on OVHcloud infrastructures</td>
</tr>
<tr>
    <td><a href="#disaster_recovery_zerto_end_migration"><CopyableCode code="disaster_recovery_zerto_end_migration" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-datacenterId"><code>datacenterId</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Unlink migration source virtual datacenter from Zerto disaster recovery</td>
</tr>
<tr>
    <td><a href="#disaster_recovery_zerto_endpoint_public_ip"><CopyableCode code="disaster_recovery_zerto_endpoint_public_ip" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-datacenterId"><code>datacenterId</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-newEndpointPublicIp"><code>newEndpointPublicIp</code></a></td>
    <td></td>
    <td>Change the IP address used by Zerto disaster recovery endpoint for public network access</td>
</tr>
<tr>
    <td><a href="#disaster_recovery_zerto_request_health_check"><CopyableCode code="disaster_recovery_zerto_request_health_check" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-datacenterId"><code>datacenterId</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Run Zerto disaster recovery health check task</td>
</tr>
<tr>
    <td><a href="#disaster_recovery_zerto_start_migration"><CopyableCode code="disaster_recovery_zerto_start_migration" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-datacenterId"><code>datacenterId</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Link migration target virtual datacenter to Zerto disaster recovery</td>
</tr>
<tr>
    <td><a href="#disaster_recovery_zerto_single_disable"><CopyableCode code="disaster_recovery_zerto_single_disable" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-datacenterId"><code>datacenterId</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Disable Zerto disaster recovery between VMware on OVHcloud infrastructure and onsite infrastructure</td>
</tr>
<tr>
    <td><a href="#disaster_recovery_zerto_single_endpoint_public_ip"><CopyableCode code="disaster_recovery_zerto_single_endpoint_public_ip" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-datacenterId"><code>datacenterId</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-newEndpointPublicIp"><code>newEndpointPublicIp</code></a></td>
    <td></td>
    <td>Change the IP address used by Zerto disaster recovery endpoint for public network access</td>
</tr>
<tr>
    <td><a href="#disaster_recovery_zerto_single_request_pairing_token"><CopyableCode code="disaster_recovery_zerto_single_request_pairing_token" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-datacenterId"><code>datacenterId</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Request Zerto disaster recovery pairing token for onsite infrastructure</td>
</tr>
<tr>
    <td><a href="#order_new_filer_hourly"><CopyableCode code="order_new_filer_hourly" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-datacenterId"><code>datacenterId</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Order an hourly datastore. Orders a datastore billed by the hour with the given profile. Returns a task to track progress.</td>
</tr>
<tr>
    <td><a href="#order_new_host_hourly"><CopyableCode code="order_new_host_hourly" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-datacenterId"><code>datacenterId</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Order an hourly host. Orders a host billed by the hour with the given host profile, optionally in a given cluster. Returns a task to track progress.</td>
</tr>
<tr>
    <td><a href="#resize_nsxt_edge_cluster"><CopyableCode code="resize_nsxt_edge_cluster" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-datacenterId"><code>datacenterId</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-size"><code>size</code></a></td>
    <td></td>
    <td>Resize the edge nodes. Changes the size of the edge nodes of the datacenter: MEDIUM, LARGE or XLARGE. Returns a task to track progress.</td>
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
<tr id="parameter-datacenterId">
    <td><CopyableCode code="datacenterId" /></td>
    <td><code>integer</code></td>
    <td>Id of the Datacenter</td>
</tr>
<tr id="parameter-datacenter_id">
    <td><CopyableCode code="datacenter_id" /></td>
    <td><code>integer</code></td>
    <td>Id of the Datacenter (wire: datacenterId)</td>
</tr>
<tr id="parameter-serviceName">
    <td><CopyableCode code="serviceName" /></td>
    <td><code>string</code></td>
    <td>Domain of the service</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>Domain of the service (wire: serviceName)</td>
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

Get a datacenter. Returns the datacenter: name, commercial range, version and whether it can be removed.

```sql
SELECT
name,
datacenter_id,
commercial_name,
commercial_range_name,
horizon_view_name,
description,
has_mixed_host_profiles,
has_mixed_vsan_host_profiles,
is_removable,
version
FROM ovh.dedicated_cloud.datacenters
WHERE datacenter_id = '{{ datacenter_id }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List datacenters

```sql
SELECT
name,
datacenter_id,
commercial_name,
commercial_range_name,
horizon_view_name,
description,
has_mixed_host_profiles,
has_mixed_vsan_host_profiles,
is_removable,
version
FROM ovh.dedicated_cloud.datacenters
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

Create a datacenter. Creates a datacenter in a commercial range, optionally linked to a vRack. Returns a task to track progress.

```sql
INSERT INTO ovh.dedicated_cloud.datacenters (
commercial_range_name,
vrack_name,
service_name
)
SELECT 
'{{ commercial_range_name }}' /* required */,
'{{ vrack_name }}',
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
- name: datacenters
  props:
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the datacenters resource.
    - name: commercial_range_name
      value: "{{ commercial_range_name }}"
      description: |
        The commercial range of this new datacenter. You can see what commercial ranges are orderable on this API section : /dedicatedCloud/commercialRange/
    - name: vrack_name
      value: "{{ vrack_name }}"
      description: |
        Name of the Vrack link to the new datacenter.
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

Update a datacenter. Updates the name and description of the datacenter. Returns a task to track progress.

```sql
UPDATE ovh.dedicated_cloud.datacenters
SET 
description = '{{ description }}',
name = '{{ name }}'
WHERE 
datacenter_id = '{{ datacenter_id }}' --required
AND service_name = '{{ service_name }}' --required
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


## `DELETE` examples

<Tabs
    defaultValue="delete"
    values={[
        { label: 'delete', value: 'delete' }
    ]}
>
<TabItem value="delete">

Delete a datacenter. Deletes the datacenter. The datacenter must be empty: check `isRemovable` first. Returns a task to track progress.

```sql
DELETE FROM ovh.dedicated_cloud.datacenters
WHERE datacenter_id = '{{ datacenter_id }}' --required
AND service_name = '{{ service_name }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="check_backup_jobs"
    values={[
        { label: 'check_backup_jobs', value: 'check_backup_jobs' },
        { label: 'disaster_recovery_zerto_disable', value: 'disaster_recovery_zerto_disable' },
        { label: 'disaster_recovery_zerto_end_migration', value: 'disaster_recovery_zerto_end_migration' },
        { label: 'disaster_recovery_zerto_endpoint_public_ip', value: 'disaster_recovery_zerto_endpoint_public_ip' },
        { label: 'disaster_recovery_zerto_request_health_check', value: 'disaster_recovery_zerto_request_health_check' },
        { label: 'disaster_recovery_zerto_start_migration', value: 'disaster_recovery_zerto_start_migration' },
        { label: 'disaster_recovery_zerto_single_disable', value: 'disaster_recovery_zerto_single_disable' },
        { label: 'disaster_recovery_zerto_single_endpoint_public_ip', value: 'disaster_recovery_zerto_single_endpoint_public_ip' },
        { label: 'disaster_recovery_zerto_single_request_pairing_token', value: 'disaster_recovery_zerto_single_request_pairing_token' },
        { label: 'order_new_filer_hourly', value: 'order_new_filer_hourly' },
        { label: 'order_new_host_hourly', value: 'order_new_host_hourly' },
        { label: 'resize_nsxt_edge_cluster', value: 'resize_nsxt_edge_cluster' }
    ]}
>
<TabItem value="check_backup_jobs">

Check backup jobs. Checks that the backup jobs of the datacenter are set correctly after virtual machines moved to another datacenter. Returns a task to track progress.

```sql
EXEC ovh.dedicated_cloud.datacenters.check_backup_jobs 
@datacenterId='{{ datacenterId }}' --required, 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
<TabItem value="disaster_recovery_zerto_disable">

Disable Zerto disaster recovery between two VMware on OVHcloud infrastructures

```sql
EXEC ovh.dedicated_cloud.datacenters.disaster_recovery_zerto_disable 
@datacenterId='{{ datacenterId }}' --required, 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"secondaryDatacenterId": {{ secondaryDatacenterId }}, 
"secondaryServiceName": "{{ secondaryServiceName }}"
}'
;
```
</TabItem>
<TabItem value="disaster_recovery_zerto_end_migration">

Unlink migration source virtual datacenter from Zerto disaster recovery

```sql
EXEC ovh.dedicated_cloud.datacenters.disaster_recovery_zerto_end_migration 
@datacenterId='{{ datacenterId }}' --required, 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
<TabItem value="disaster_recovery_zerto_endpoint_public_ip">

Change the IP address used by Zerto disaster recovery endpoint for public network access

```sql
EXEC ovh.dedicated_cloud.datacenters.disaster_recovery_zerto_endpoint_public_ip 
@datacenterId='{{ datacenterId }}' --required, 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"newEndpointPublicIp": "{{ newEndpointPublicIp }}"
}'
;
```
</TabItem>
<TabItem value="disaster_recovery_zerto_request_health_check">

Run Zerto disaster recovery health check task

```sql
EXEC ovh.dedicated_cloud.datacenters.disaster_recovery_zerto_request_health_check 
@datacenterId='{{ datacenterId }}' --required, 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
<TabItem value="disaster_recovery_zerto_start_migration">

Link migration target virtual datacenter to Zerto disaster recovery

```sql
EXEC ovh.dedicated_cloud.datacenters.disaster_recovery_zerto_start_migration 
@datacenterId='{{ datacenterId }}' --required, 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
<TabItem value="disaster_recovery_zerto_single_disable">

Disable Zerto disaster recovery between VMware on OVHcloud infrastructure and onsite infrastructure

```sql
EXEC ovh.dedicated_cloud.datacenters.disaster_recovery_zerto_single_disable 
@datacenterId='{{ datacenterId }}' --required, 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
<TabItem value="disaster_recovery_zerto_single_endpoint_public_ip">

Change the IP address used by Zerto disaster recovery endpoint for public network access

```sql
EXEC ovh.dedicated_cloud.datacenters.disaster_recovery_zerto_single_endpoint_public_ip 
@datacenterId='{{ datacenterId }}' --required, 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"newEndpointPublicIp": "{{ newEndpointPublicIp }}"
}'
;
```
</TabItem>
<TabItem value="disaster_recovery_zerto_single_request_pairing_token">

Request Zerto disaster recovery pairing token for onsite infrastructure

```sql
EXEC ovh.dedicated_cloud.datacenters.disaster_recovery_zerto_single_request_pairing_token 
@datacenterId='{{ datacenterId }}' --required, 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
<TabItem value="order_new_filer_hourly">

Order an hourly datastore. Orders a datastore billed by the hour with the given profile. Returns a task to track progress.

```sql
EXEC ovh.dedicated_cloud.datacenters.order_new_filer_hourly 
@datacenterId='{{ datacenterId }}' --required, 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"name": "{{ name }}"
}'
;
```
</TabItem>
<TabItem value="order_new_host_hourly">

Order an hourly host. Orders a host billed by the hour with the given host profile, optionally in a given cluster. Returns a task to track progress.

```sql
EXEC ovh.dedicated_cloud.datacenters.order_new_host_hourly 
@datacenterId='{{ datacenterId }}' --required, 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"name": "{{ name }}", 
"vmwareClusterId": "{{ vmwareClusterId }}"
}'
;
```
</TabItem>
<TabItem value="resize_nsxt_edge_cluster">

Resize the edge nodes. Changes the size of the edge nodes of the datacenter: MEDIUM, LARGE or XLARGE. Returns a task to track progress.

```sql
EXEC ovh.dedicated_cloud.datacenters.resize_nsxt_edge_cluster 
@datacenterId='{{ datacenterId }}' --required, 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"size": "{{ size }}"
}'
;
```
</TabItem>
</Tabs>
