--- 
title: datacenter_hosts
hide_title: false
hide_table_of_contents: false
keywords:
  - datacenter_hosts
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

Creates, updates, deletes, gets or lists a <code>datacenter_hosts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="datacenter_hosts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.dedicated_cloud.datacenter_hosts" /></td></tr>
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
    <td>Name of the host (IP address)</td>
</tr>
<tr>
    <td><CopyableCode code="host_id" /></td>
    <td><code>integer</code></td>
    <td>Id of the host (wire: hostId)</td>
</tr>
<tr>
    <td><CopyableCode code="parent_host_id" /></td>
    <td><code>integer</code></td>
    <td>Id of the parent host (if any) (wire: parentHostId)</td>
</tr>
<tr>
    <td><CopyableCode code="cluster_name" /></td>
    <td><code>string</code></td>
    <td>Cluster of the host (wire: clusterName)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_name" /></td>
    <td><code>string</code></td>
    <td>Resource name (wire: resourceName)</td>
</tr>
<tr>
    <td><CopyableCode code="billing_type" /></td>
    <td><code>string</code></td>
    <td>Billing type of the host (freeSpare, hourly, monthly, undefined) (wire: billingType)</td>
</tr>
<tr>
    <td><CopyableCode code="connection_state" /></td>
    <td><code>string</code></td>
    <td>Connection state of the host (connected, disconnected, notResponding) (wire: connectionState)</td>
</tr>
<tr>
    <td><CopyableCode code="cpu" /></td>
    <td><code>object</code></td>
    <td>CPU total frenquency</td>
</tr>
<tr>
    <td><CopyableCode code="cpu_max" /></td>
    <td><code>integer</code></td>
    <td>The maximum speed of the cpu, in Mhz (wire: cpuMax)</td>
</tr>
<tr>
    <td><CopyableCode code="cpu_max_core" /></td>
    <td><code>integer</code></td>
    <td>The speed of the CPU cores. This is an average value if there are multiple speeds. in Mhz (wire: cpuMaxCore)</td>
</tr>
<tr>
    <td><CopyableCode code="cpu_num" /></td>
    <td><code>integer</code></td>
    <td>Number of physical CPU cores on the host. (wire: cpuNum)</td>
</tr>
<tr>
    <td><CopyableCode code="cpu_used" /></td>
    <td><code>integer</code></td>
    <td>Current cpu utilization, in Mhz (wire: cpuUsed)</td>
</tr>
<tr>
    <td><CopyableCode code="in_maintenance" /></td>
    <td><code>boolean</code></td>
    <td>Host is in maintenance mode (wire: inMaintenance)</td>
</tr>
<tr>
    <td><CopyableCode code="memory_used" /></td>
    <td><code>number</code></td>
    <td>Amount of used memory. Sum of the memory used by all powered on virtual machines and vSphere services on the host. in MB (wire: memoryUsed)</td>
</tr>
<tr>
    <td><CopyableCode code="profile" /></td>
    <td><code>string</code></td>
    <td>Host profile in a commercial range</td>
</tr>
<tr>
    <td><CopyableCode code="profile_code" /></td>
    <td><code>string</code></td>
    <td>Host profile code (wire: profileCode)</td>
</tr>
<tr>
    <td><CopyableCode code="rack" /></td>
    <td><code>string</code></td>
    <td>Rack of the host</td>
</tr>
<tr>
    <td><CopyableCode code="ram" /></td>
    <td><code>object</code></td>
    <td>Total RAM quantity</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>State of the host (adding, delivered, error, removing, unknown)</td>
</tr>
<tr>
    <td><CopyableCode code="uptime" /></td>
    <td><code>integer</code></td>
    <td>Host uptime in second</td>
</tr>
<tr>
    <td><CopyableCode code="vm_total" /></td>
    <td><code>integer</code></td>
    <td>Number of Virtual Machine on the host (wire: vmTotal)</td>
</tr>
<tr>
    <td><CopyableCode code="vm_vcpu_total" /></td>
    <td><code>integer</code></td>
    <td>Number of Vcpu use by virtual machines on the host (wire: vmVcpuTotal)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Host

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
    <td>Name of the host (IP address)</td>
</tr>
<tr>
    <td><CopyableCode code="host_id" /></td>
    <td><code>integer</code></td>
    <td>Id of the host (wire: hostId)</td>
</tr>
<tr>
    <td><CopyableCode code="parent_host_id" /></td>
    <td><code>integer</code></td>
    <td>Id of the parent host (if any) (wire: parentHostId)</td>
</tr>
<tr>
    <td><CopyableCode code="cluster_name" /></td>
    <td><code>string</code></td>
    <td>Cluster of the host (wire: clusterName)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_name" /></td>
    <td><code>string</code></td>
    <td>Resource name (wire: resourceName)</td>
</tr>
<tr>
    <td><CopyableCode code="billing_type" /></td>
    <td><code>string</code></td>
    <td>Billing type of the host (freeSpare, hourly, monthly, undefined) (wire: billingType)</td>
</tr>
<tr>
    <td><CopyableCode code="connection_state" /></td>
    <td><code>string</code></td>
    <td>Connection state of the host (connected, disconnected, notResponding) (wire: connectionState)</td>
</tr>
<tr>
    <td><CopyableCode code="cpu" /></td>
    <td><code>object</code></td>
    <td>CPU total frenquency</td>
</tr>
<tr>
    <td><CopyableCode code="cpu_max" /></td>
    <td><code>integer</code></td>
    <td>The maximum speed of the cpu, in Mhz (wire: cpuMax)</td>
</tr>
<tr>
    <td><CopyableCode code="cpu_max_core" /></td>
    <td><code>integer</code></td>
    <td>The speed of the CPU cores. This is an average value if there are multiple speeds. in Mhz (wire: cpuMaxCore)</td>
</tr>
<tr>
    <td><CopyableCode code="cpu_num" /></td>
    <td><code>integer</code></td>
    <td>Number of physical CPU cores on the host. (wire: cpuNum)</td>
</tr>
<tr>
    <td><CopyableCode code="cpu_used" /></td>
    <td><code>integer</code></td>
    <td>Current cpu utilization, in Mhz (wire: cpuUsed)</td>
</tr>
<tr>
    <td><CopyableCode code="in_maintenance" /></td>
    <td><code>boolean</code></td>
    <td>Host is in maintenance mode (wire: inMaintenance)</td>
</tr>
<tr>
    <td><CopyableCode code="memory_used" /></td>
    <td><code>number</code></td>
    <td>Amount of used memory. Sum of the memory used by all powered on virtual machines and vSphere services on the host. in MB (wire: memoryUsed)</td>
</tr>
<tr>
    <td><CopyableCode code="profile" /></td>
    <td><code>string</code></td>
    <td>Host profile in a commercial range</td>
</tr>
<tr>
    <td><CopyableCode code="profile_code" /></td>
    <td><code>string</code></td>
    <td>Host profile code (wire: profileCode)</td>
</tr>
<tr>
    <td><CopyableCode code="rack" /></td>
    <td><code>string</code></td>
    <td>Rack of the host</td>
</tr>
<tr>
    <td><CopyableCode code="ram" /></td>
    <td><code>object</code></td>
    <td>Total RAM quantity</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>State of the host (adding, delivered, error, removing, unknown)</td>
</tr>
<tr>
    <td><CopyableCode code="uptime" /></td>
    <td><code>integer</code></td>
    <td>Host uptime in second</td>
</tr>
<tr>
    <td><CopyableCode code="vm_total" /></td>
    <td><code>integer</code></td>
    <td>Number of Virtual Machine on the host (wire: vmTotal)</td>
</tr>
<tr>
    <td><CopyableCode code="vm_vcpu_total" /></td>
    <td><code>integer</code></td>
    <td>Number of Vcpu use by virtual machines on the host (wire: vmVcpuTotal)</td>
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
    <td><a href="#parameter-datacenter_id"><code>datacenter_id</code></a>, <a href="#parameter-host_id"><code>host_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get a host. Returns the host: profile, state, connection state, cluster, CPU and memory usage, and number of virtual machines.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-datacenter_id"><code>datacenter_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List hosts</td>
</tr>
<tr>
    <td><a href="#add_host_spare"><CopyableCode code="add_host_spare" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-datacenterId"><code>datacenterId</code></a>, <a href="#parameter-hostId"><code>hostId</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-reason"><code>reason</code></a></td>
    <td></td>
    <td>Request a host replacement. Asks for a spare host to replace this host. A reason is required. Returns a task to track progress.</td>
</tr>
<tr>
    <td><a href="#remove"><CopyableCode code="remove" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-datacenterId"><code>datacenterId</code></a>, <a href="#parameter-hostId"><code>hostId</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Remove a host</td>
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
<tr id="parameter-hostId">
    <td><CopyableCode code="hostId" /></td>
    <td><code>integer</code></td>
    <td>Id of the host</td>
</tr>
<tr id="parameter-host_id">
    <td><CopyableCode code="host_id" /></td>
    <td><code>integer</code></td>
    <td>Id of the host (wire: hostId)</td>
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

Get a host. Returns the host: profile, state, connection state, cluster, CPU and memory usage, and number of virtual machines.

```sql
SELECT
name,
host_id,
parent_host_id,
cluster_name,
resource_name,
billing_type,
connection_state,
cpu,
cpu_max,
cpu_max_core,
cpu_num,
cpu_used,
in_maintenance,
memory_used,
profile,
profile_code,
rack,
ram,
state,
uptime,
vm_total,
vm_vcpu_total
FROM ovh.dedicated_cloud.datacenter_hosts
WHERE datacenter_id = '{{ datacenter_id }}' -- required
AND host_id = '{{ host_id }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List hosts

```sql
SELECT
name,
host_id,
parent_host_id,
cluster_name,
resource_name,
billing_type,
connection_state,
cpu,
cpu_max,
cpu_max_core,
cpu_num,
cpu_used,
in_maintenance,
memory_used,
profile,
profile_code,
rack,
ram,
state,
uptime,
vm_total,
vm_vcpu_total
FROM ovh.dedicated_cloud.datacenter_hosts
WHERE datacenter_id = '{{ datacenter_id }}' -- required
AND service_name = '{{ service_name }}' -- required
AND x_pagination_mode = '{{ x_pagination_mode }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="add_host_spare"
    values={[
        { label: 'add_host_spare', value: 'add_host_spare' },
        { label: 'remove', value: 'remove' }
    ]}
>
<TabItem value="add_host_spare">

Request a host replacement. Asks for a spare host to replace this host. A reason is required. Returns a task to track progress.

```sql
EXEC ovh.dedicated_cloud.datacenter_hosts.add_host_spare 
@datacenterId='{{ datacenterId }}' --required, 
@hostId='{{ hostId }}' --required, 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"reason": "{{ reason }}"
}'
;
```
</TabItem>
<TabItem value="remove">

Remove a host

```sql
EXEC ovh.dedicated_cloud.datacenter_hosts.remove 
@datacenterId='{{ datacenterId }}' --required, 
@hostId='{{ hostId }}' --required, 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
</Tabs>
