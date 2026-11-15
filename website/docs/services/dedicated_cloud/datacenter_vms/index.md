--- 
title: datacenter_vms
hide_title: false
hide_table_of_contents: false
keywords:
  - datacenter_vms
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

Creates, updates, deletes, gets or lists a <code>datacenter_vms</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="datacenter_vms" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.dedicated_cloud.datacenter_vms" /></td></tr>
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
    <td>Name of the virtual machine.</td>
</tr>
<tr>
    <td><CopyableCode code="vm_id" /></td>
    <td><code>integer</code></td>
    <td>Id of the virtual machine. (wire: vmId)</td>
</tr>
<tr>
    <td><CopyableCode code="cluster_name" /></td>
    <td><code>string</code></td>
    <td>Cluster of the virtual machine. (wire: clusterName)</td>
</tr>
<tr>
    <td><CopyableCode code="folder_name" /></td>
    <td><code>string</code></td>
    <td>Folder of the virtual machine. (wire: folderName)</td>
</tr>
<tr>
    <td><CopyableCode code="host_name" /></td>
    <td><code>string</code></td>
    <td>Name of the host hosting the virtual machine. (wire: hostName)</td>
</tr>
<tr>
    <td><CopyableCode code="backup" /></td>
    <td><code>object</code></td>
    <td>Backup associated to this Virtual Machine</td>
</tr>
<tr>
    <td><CopyableCode code="cdroms" /></td>
    <td><code>array</code></td>
    <td>Virtual machine cdroms devices</td>
</tr>
<tr>
    <td><CopyableCode code="cpu_max" /></td>
    <td><code>number</code></td>
    <td>Maximum CPU performance, in MHz. (wire: cpuMax)</td>
</tr>
<tr>
    <td><CopyableCode code="cpu_num" /></td>
    <td><code>integer</code></td>
    <td>Number of processors in the virtual machine. (wire: cpuNum)</td>
</tr>
<tr>
    <td><CopyableCode code="cpu_ready" /></td>
    <td><code>number</code></td>
    <td>Time that the virtual machine was ready, but could not get scheduled to run on the physical CPU. In millisecond (wire: cpuReady)</td>
</tr>
<tr>
    <td><CopyableCode code="cpu_ready_percent" /></td>
    <td><code>number</code></td>
    <td>Percentage of time that the virtual machine was ready, but could not get scheduled to run on the physical CPU. In percent (wire: cpuReadyPercent)</td>
</tr>
<tr>
    <td><CopyableCode code="cpu_used" /></td>
    <td><code>integer</code></td>
    <td>Current CPU performance, in MHz. (wire: cpuUsed)</td>
</tr>
<tr>
    <td><CopyableCode code="filers" /></td>
    <td><code>array</code></td>
    <td>List of filers in use by the virtual machine.</td>
</tr>
<tr>
    <td><CopyableCode code="guest_os_family" /></td>
    <td><code>string</code></td>
    <td>VMware guest configured OS family (wire: guestOsFamily)</td>
</tr>
<tr>
    <td><CopyableCode code="license" /></td>
    <td><code>string</code></td>
    <td>Registered managed license (OVHcloud managed, unknown or unsupported license, unlicensed windows guestos, windows 2008 R2 Datacenter, windows 2008 R2 Enterprise, windows 2008 R2 Standard, windows 2008 R2 Web, windows 2012 Datacenter, windows 2012 R2 Datacenter, windows 2012 R2 Standard, windows 2012 R2 Standard SQL2016 Standard, windows 2012 R2 Standard SQL2016 Web, windows 2012 Standard, windows 2016 Datacenter, windows 2016 Standard, windows 2016 Standard SQL2016 Standard, windows 2016 Standard SQL2016 Web, windows 2019 Datacenter, windows 2019 Datacenter Core, windows 2019 Standard, windows 2019 Standard Core, windows 2019 Standard SQL2019 Standard, windows 2019 Standard SQL2019 Web, windows 2019 Standard SQL2022 Standard, windows 2019 Standard SQL2022 Web, windows 2022 Datacenter, windows 2022 Datacenter Core, windows 2022 Datacenter SQL2019 Standard, windows 2022 Datacenter SQL2019 Web, windows 2022 Datacenter SQL2022 Standard, windows 2022 Datacenter SQL2022 Web, windows 2022 Standard, windows 2022 Standard Core, windows 2022 Standard SQL2019 Standard, windows 2022 Standard SQL2019 Web, windows 2022 Standard SQL2022 Standard, windows 2022 Standard SQL2022 Web, windows 2025 Datacenter, windows 2025 Datacenter Core, windows 2025 Datacenter SQL2022 Enterprise, windows 2025 Datacenter SQL2022 Standard, windows 2025 Datacenter SQL2022 Web, windows 2025 Standard, windows 2025 Standard Core, windows 2025 Standard SQL2022 Standard, windows 2025 Standard SQL2022 Web)</td>
</tr>
<tr>
    <td><CopyableCode code="memory_max" /></td>
    <td><code>integer</code></td>
    <td>Memory size of the virtual machine, in MB (wire: memoryMax)</td>
</tr>
<tr>
    <td><CopyableCode code="memory_tps" /></td>
    <td><code>string</code></td>
    <td>Amount of guest memory that is shared with other virtual machines, in Mb (wire: memoryTps)</td>
</tr>
<tr>
    <td><CopyableCode code="memory_used" /></td>
    <td><code>integer</code></td>
    <td>Current memory utilization, in MB (wire: memoryUsed)</td>
</tr>
<tr>
    <td><CopyableCode code="mo_ref" /></td>
    <td><code>string</code></td>
    <td>moRef of the virtual machine. (wire: moRef)</td>
</tr>
<tr>
    <td><CopyableCode code="net_packet_rx" /></td>
    <td><code>number</code></td>
    <td>Number of packets received. (wire: netPacketRx)</td>
</tr>
<tr>
    <td><CopyableCode code="net_packet_tx" /></td>
    <td><code>number</code></td>
    <td>Number of packets transmitted. (wire: netPacketTx)</td>
</tr>
<tr>
    <td><CopyableCode code="net_rx" /></td>
    <td><code>number</code></td>
    <td>Rate at which data is received. In KB/s (wire: netRx)</td>
</tr>
<tr>
    <td><CopyableCode code="net_tx" /></td>
    <td><code>number</code></td>
    <td>Rate at which data is transmitted. In KB/s (wire: netTx)</td>
</tr>
<tr>
    <td><CopyableCode code="networks" /></td>
    <td><code>array</code></td>
    <td>List of the networks link to this virtual machine</td>
</tr>
<tr>
    <td><CopyableCode code="power_state" /></td>
    <td><code>string</code></td>
    <td>Power state of the virtual machine. (deleted, poweredOff, poweredOn, suspended) (wire: powerState)</td>
</tr>
<tr>
    <td><CopyableCode code="read_latency" /></td>
    <td><code>number</code></td>
    <td>Amount of time for a read operation from the virtual disk. In millisecond (wire: readLatency)</td>
</tr>
<tr>
    <td><CopyableCode code="read_per_second" /></td>
    <td><code>number</code></td>
    <td>Number of read issued per second to the virtual disk. In millisecond (wire: readPerSecond)</td>
</tr>
<tr>
    <td><CopyableCode code="read_rate" /></td>
    <td><code>number</code></td>
    <td>Rate of reading data from the virtual disk. In KB/s (wire: readRate)</td>
</tr>
<tr>
    <td><CopyableCode code="role_ft" /></td>
    <td><code>string</code></td>
    <td>The index of the current VM in instanceUuids array starting from 1, so 1 means that it is the primary VM. (wire: roleFt)</td>
</tr>
<tr>
    <td><CopyableCode code="snapshot_num" /></td>
    <td><code>integer</code></td>
    <td>Number of snapshot of the virtual machine. (wire: snapshotNum)</td>
</tr>
<tr>
    <td><CopyableCode code="state_ft" /></td>
    <td><code>string</code></td>
    <td>The fault tolerance state of the virtual machine. (disabled, enabled, needSecondary, notConfigured, running, starting) (wire: stateFt)</td>
</tr>
<tr>
    <td><CopyableCode code="vmware_tools" /></td>
    <td><code>string</code></td>
    <td>Current version status of VMware Tools in the guest operating system. (wire: vmwareTools)</td>
</tr>
<tr>
    <td><CopyableCode code="vmware_tools_version" /></td>
    <td><code>string</code></td>
    <td>Current version of VMware Tools (wire: vmwareToolsVersion)</td>
</tr>
<tr>
    <td><CopyableCode code="write_latency" /></td>
    <td><code>number</code></td>
    <td>Amount of time for a write operation from the virtual disk. In millisecond (wire: writeLatency)</td>
</tr>
<tr>
    <td><CopyableCode code="write_per_second" /></td>
    <td><code>number</code></td>
    <td>Number of write issued per second to the virtual disk. In millisecond (wire: writePerSecond)</td>
</tr>
<tr>
    <td><CopyableCode code="write_rate" /></td>
    <td><code>number</code></td>
    <td>Rate of writing data from the virtual disk. In KB/s (wire: writeRate)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Virtual machine

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
    <td>Name of the virtual machine.</td>
</tr>
<tr>
    <td><CopyableCode code="vm_id" /></td>
    <td><code>integer</code></td>
    <td>Id of the virtual machine. (wire: vmId)</td>
</tr>
<tr>
    <td><CopyableCode code="cluster_name" /></td>
    <td><code>string</code></td>
    <td>Cluster of the virtual machine. (wire: clusterName)</td>
</tr>
<tr>
    <td><CopyableCode code="folder_name" /></td>
    <td><code>string</code></td>
    <td>Folder of the virtual machine. (wire: folderName)</td>
</tr>
<tr>
    <td><CopyableCode code="host_name" /></td>
    <td><code>string</code></td>
    <td>Name of the host hosting the virtual machine. (wire: hostName)</td>
</tr>
<tr>
    <td><CopyableCode code="backup" /></td>
    <td><code>object</code></td>
    <td>Backup associated to this Virtual Machine</td>
</tr>
<tr>
    <td><CopyableCode code="cdroms" /></td>
    <td><code>array</code></td>
    <td>Virtual machine cdroms devices</td>
</tr>
<tr>
    <td><CopyableCode code="cpu_max" /></td>
    <td><code>number</code></td>
    <td>Maximum CPU performance, in MHz. (wire: cpuMax)</td>
</tr>
<tr>
    <td><CopyableCode code="cpu_num" /></td>
    <td><code>integer</code></td>
    <td>Number of processors in the virtual machine. (wire: cpuNum)</td>
</tr>
<tr>
    <td><CopyableCode code="cpu_ready" /></td>
    <td><code>number</code></td>
    <td>Time that the virtual machine was ready, but could not get scheduled to run on the physical CPU. In millisecond (wire: cpuReady)</td>
</tr>
<tr>
    <td><CopyableCode code="cpu_ready_percent" /></td>
    <td><code>number</code></td>
    <td>Percentage of time that the virtual machine was ready, but could not get scheduled to run on the physical CPU. In percent (wire: cpuReadyPercent)</td>
</tr>
<tr>
    <td><CopyableCode code="cpu_used" /></td>
    <td><code>integer</code></td>
    <td>Current CPU performance, in MHz. (wire: cpuUsed)</td>
</tr>
<tr>
    <td><CopyableCode code="filers" /></td>
    <td><code>array</code></td>
    <td>List of filers in use by the virtual machine.</td>
</tr>
<tr>
    <td><CopyableCode code="guest_os_family" /></td>
    <td><code>string</code></td>
    <td>VMware guest configured OS family (wire: guestOsFamily)</td>
</tr>
<tr>
    <td><CopyableCode code="license" /></td>
    <td><code>string</code></td>
    <td>Registered managed license (OVHcloud managed, unknown or unsupported license, unlicensed windows guestos, windows 2008 R2 Datacenter, windows 2008 R2 Enterprise, windows 2008 R2 Standard, windows 2008 R2 Web, windows 2012 Datacenter, windows 2012 R2 Datacenter, windows 2012 R2 Standard, windows 2012 R2 Standard SQL2016 Standard, windows 2012 R2 Standard SQL2016 Web, windows 2012 Standard, windows 2016 Datacenter, windows 2016 Standard, windows 2016 Standard SQL2016 Standard, windows 2016 Standard SQL2016 Web, windows 2019 Datacenter, windows 2019 Datacenter Core, windows 2019 Standard, windows 2019 Standard Core, windows 2019 Standard SQL2019 Standard, windows 2019 Standard SQL2019 Web, windows 2019 Standard SQL2022 Standard, windows 2019 Standard SQL2022 Web, windows 2022 Datacenter, windows 2022 Datacenter Core, windows 2022 Datacenter SQL2019 Standard, windows 2022 Datacenter SQL2019 Web, windows 2022 Datacenter SQL2022 Standard, windows 2022 Datacenter SQL2022 Web, windows 2022 Standard, windows 2022 Standard Core, windows 2022 Standard SQL2019 Standard, windows 2022 Standard SQL2019 Web, windows 2022 Standard SQL2022 Standard, windows 2022 Standard SQL2022 Web, windows 2025 Datacenter, windows 2025 Datacenter Core, windows 2025 Datacenter SQL2022 Enterprise, windows 2025 Datacenter SQL2022 Standard, windows 2025 Datacenter SQL2022 Web, windows 2025 Standard, windows 2025 Standard Core, windows 2025 Standard SQL2022 Standard, windows 2025 Standard SQL2022 Web)</td>
</tr>
<tr>
    <td><CopyableCode code="memory_max" /></td>
    <td><code>integer</code></td>
    <td>Memory size of the virtual machine, in MB (wire: memoryMax)</td>
</tr>
<tr>
    <td><CopyableCode code="memory_tps" /></td>
    <td><code>string</code></td>
    <td>Amount of guest memory that is shared with other virtual machines, in Mb (wire: memoryTps)</td>
</tr>
<tr>
    <td><CopyableCode code="memory_used" /></td>
    <td><code>integer</code></td>
    <td>Current memory utilization, in MB (wire: memoryUsed)</td>
</tr>
<tr>
    <td><CopyableCode code="mo_ref" /></td>
    <td><code>string</code></td>
    <td>moRef of the virtual machine. (wire: moRef)</td>
</tr>
<tr>
    <td><CopyableCode code="net_packet_rx" /></td>
    <td><code>number</code></td>
    <td>Number of packets received. (wire: netPacketRx)</td>
</tr>
<tr>
    <td><CopyableCode code="net_packet_tx" /></td>
    <td><code>number</code></td>
    <td>Number of packets transmitted. (wire: netPacketTx)</td>
</tr>
<tr>
    <td><CopyableCode code="net_rx" /></td>
    <td><code>number</code></td>
    <td>Rate at which data is received. In KB/s (wire: netRx)</td>
</tr>
<tr>
    <td><CopyableCode code="net_tx" /></td>
    <td><code>number</code></td>
    <td>Rate at which data is transmitted. In KB/s (wire: netTx)</td>
</tr>
<tr>
    <td><CopyableCode code="networks" /></td>
    <td><code>array</code></td>
    <td>List of the networks link to this virtual machine</td>
</tr>
<tr>
    <td><CopyableCode code="power_state" /></td>
    <td><code>string</code></td>
    <td>Power state of the virtual machine. (deleted, poweredOff, poweredOn, suspended) (wire: powerState)</td>
</tr>
<tr>
    <td><CopyableCode code="read_latency" /></td>
    <td><code>number</code></td>
    <td>Amount of time for a read operation from the virtual disk. In millisecond (wire: readLatency)</td>
</tr>
<tr>
    <td><CopyableCode code="read_per_second" /></td>
    <td><code>number</code></td>
    <td>Number of read issued per second to the virtual disk. In millisecond (wire: readPerSecond)</td>
</tr>
<tr>
    <td><CopyableCode code="read_rate" /></td>
    <td><code>number</code></td>
    <td>Rate of reading data from the virtual disk. In KB/s (wire: readRate)</td>
</tr>
<tr>
    <td><CopyableCode code="role_ft" /></td>
    <td><code>string</code></td>
    <td>The index of the current VM in instanceUuids array starting from 1, so 1 means that it is the primary VM. (wire: roleFt)</td>
</tr>
<tr>
    <td><CopyableCode code="snapshot_num" /></td>
    <td><code>integer</code></td>
    <td>Number of snapshot of the virtual machine. (wire: snapshotNum)</td>
</tr>
<tr>
    <td><CopyableCode code="state_ft" /></td>
    <td><code>string</code></td>
    <td>The fault tolerance state of the virtual machine. (disabled, enabled, needSecondary, notConfigured, running, starting) (wire: stateFt)</td>
</tr>
<tr>
    <td><CopyableCode code="vmware_tools" /></td>
    <td><code>string</code></td>
    <td>Current version status of VMware Tools in the guest operating system. (wire: vmwareTools)</td>
</tr>
<tr>
    <td><CopyableCode code="vmware_tools_version" /></td>
    <td><code>string</code></td>
    <td>Current version of VMware Tools (wire: vmwareToolsVersion)</td>
</tr>
<tr>
    <td><CopyableCode code="write_latency" /></td>
    <td><code>number</code></td>
    <td>Amount of time for a write operation from the virtual disk. In millisecond (wire: writeLatency)</td>
</tr>
<tr>
    <td><CopyableCode code="write_per_second" /></td>
    <td><code>number</code></td>
    <td>Number of write issued per second to the virtual disk. In millisecond (wire: writePerSecond)</td>
</tr>
<tr>
    <td><CopyableCode code="write_rate" /></td>
    <td><code>number</code></td>
    <td>Rate of writing data from the virtual disk. In KB/s (wire: writeRate)</td>
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
    <td><a href="#parameter-datacenter_id"><code>datacenter_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-vm_id"><code>vm_id</code></a></td>
    <td></td>
    <td>Get a virtual machine. Returns the virtual machine: power state, host, cluster, CPU, memory, disk and network usage, backup and license.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-datacenter_id"><code>datacenter_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List virtual machines</td>
</tr>
<tr>
    <td><a href="#disable_backup"><CopyableCode code="disable_backup" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-datacenterId"><code>datacenterId</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-vmId"><code>vmId</code></a></td>
    <td></td>
    <td>Disable VM backup</td>
</tr>
<tr>
    <td><a href="#disable_carp"><CopyableCode code="disable_carp" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-datacenterId"><code>datacenterId</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-vmId"><code>vmId</code></a>, <a href="#parameter-macAddress"><code>macAddress</code></a></td>
    <td></td>
    <td>Disable CARP on a VM. Disables CARP on the network port of the virtual machine with the given MAC address, on the VM Network portgroup. Returns a task to track progress.</td>
</tr>
<tr>
    <td><a href="#edit_backup"><CopyableCode code="edit_backup" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-datacenterId"><code>datacenterId</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-vmId"><code>vmId</code></a>, <a href="#parameter-backupDays"><code>backupDays</code></a></td>
    <td></td>
    <td>Update VM backup days. Changes the days on which the virtual machine is backed up. Returns a task to track progress.</td>
</tr>
<tr>
    <td><a href="#enable_backup"><CopyableCode code="enable_backup" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-datacenterId"><code>datacenterId</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-vmId"><code>vmId</code></a>, <a href="#parameter-backupDays"><code>backupDays</code></a></td>
    <td></td>
    <td>Enable VM backup. Starts backing up the virtual machine on the given days. Returns a task to track progress.</td>
</tr>
<tr>
    <td><a href="#enable_carp"><CopyableCode code="enable_carp" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-datacenterId"><code>datacenterId</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-vmId"><code>vmId</code></a>, <a href="#parameter-macAddress"><code>macAddress</code></a></td>
    <td></td>
    <td>Enable CARP on a VM. Enables CARP on the network port of the virtual machine with the given MAC address, on the VM Network portgroup. Returns a task to track progress.</td>
</tr>
<tr>
    <td><a href="#remove_license"><CopyableCode code="remove_license" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-datacenterId"><code>datacenterId</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-vmId"><code>vmId</code></a></td>
    <td></td>
    <td>Remove a managed license. Removes the managed license from the virtual machine. Returns a task to track progress.</td>
</tr>
<tr>
    <td><a href="#restore_backup"><CopyableCode code="restore_backup" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-datacenterId"><code>datacenterId</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-vmId"><code>vmId</code></a>, <a href="#parameter-filerId"><code>filerId</code></a>, <a href="#parameter-restorePointId"><code>restorePointId</code></a></td>
    <td></td>
    <td>Restore a VM backup. Restores the virtual machine from a restore point to the given datastore, NAS by default or vSAN. Returns a task to track progress.</td>
</tr>
<tr>
    <td><a href="#set_license"><CopyableCode code="set_license" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-datacenterId"><code>datacenterId</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-vmId"><code>vmId</code></a>, <a href="#parameter-bypassGuestOsFamilyCheck"><code>bypassGuestOsFamilyCheck</code></a>, <a href="#parameter-kmsLicense"><code>kmsLicense</code></a></td>
    <td></td>
    <td>Set a managed license. Attaches an OVHcloud managed Windows license to the virtual machine. Skip the guest OS family check with `bypassGuestOsFamilyCheck`. Returns a task to track progress.</td>
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
<tr id="parameter-vmId">
    <td><CopyableCode code="vmId" /></td>
    <td><code>integer</code></td>
    <td>Id of the virtual machine.</td>
</tr>
<tr id="parameter-vm_id">
    <td><CopyableCode code="vm_id" /></td>
    <td><code>integer</code></td>
    <td>Id of the virtual machine. (wire: vmId)</td>
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

Get a virtual machine. Returns the virtual machine: power state, host, cluster, CPU, memory, disk and network usage, backup and license.

```sql
SELECT
name,
vm_id,
cluster_name,
folder_name,
host_name,
backup,
cdroms,
cpu_max,
cpu_num,
cpu_ready,
cpu_ready_percent,
cpu_used,
filers,
guest_os_family,
license,
memory_max,
memory_tps,
memory_used,
mo_ref,
net_packet_rx,
net_packet_tx,
net_rx,
net_tx,
networks,
power_state,
read_latency,
read_per_second,
read_rate,
role_ft,
snapshot_num,
state_ft,
vmware_tools,
vmware_tools_version,
write_latency,
write_per_second,
write_rate
FROM ovh.dedicated_cloud.datacenter_vms
WHERE datacenter_id = '{{ datacenter_id }}' -- required
AND service_name = '{{ service_name }}' -- required
AND vm_id = '{{ vm_id }}' -- required
;
```
</TabItem>
<TabItem value="list">

List virtual machines

```sql
SELECT
name,
vm_id,
cluster_name,
folder_name,
host_name,
backup,
cdroms,
cpu_max,
cpu_num,
cpu_ready,
cpu_ready_percent,
cpu_used,
filers,
guest_os_family,
license,
memory_max,
memory_tps,
memory_used,
mo_ref,
net_packet_rx,
net_packet_tx,
net_rx,
net_tx,
networks,
power_state,
read_latency,
read_per_second,
read_rate,
role_ft,
snapshot_num,
state_ft,
vmware_tools,
vmware_tools_version,
write_latency,
write_per_second,
write_rate
FROM ovh.dedicated_cloud.datacenter_vms
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
    defaultValue="disable_backup"
    values={[
        { label: 'disable_backup', value: 'disable_backup' },
        { label: 'disable_carp', value: 'disable_carp' },
        { label: 'edit_backup', value: 'edit_backup' },
        { label: 'enable_backup', value: 'enable_backup' },
        { label: 'enable_carp', value: 'enable_carp' },
        { label: 'remove_license', value: 'remove_license' },
        { label: 'restore_backup', value: 'restore_backup' },
        { label: 'set_license', value: 'set_license' }
    ]}
>
<TabItem value="disable_backup">

Disable VM backup

```sql
EXEC ovh.dedicated_cloud.datacenter_vms.disable_backup 
@datacenterId='{{ datacenterId }}' --required, 
@serviceName='{{ serviceName }}' --required, 
@vmId='{{ vmId }}' --required
;
```
</TabItem>
<TabItem value="disable_carp">

Disable CARP on a VM. Disables CARP on the network port of the virtual machine with the given MAC address, on the VM Network portgroup. Returns a task to track progress.

```sql
EXEC ovh.dedicated_cloud.datacenter_vms.disable_carp 
@datacenterId='{{ datacenterId }}' --required, 
@serviceName='{{ serviceName }}' --required, 
@vmId='{{ vmId }}' --required 
@@json=
'{
"macAddress": "{{ macAddress }}"
}'
;
```
</TabItem>
<TabItem value="edit_backup">

Update VM backup days. Changes the days on which the virtual machine is backed up. Returns a task to track progress.

```sql
EXEC ovh.dedicated_cloud.datacenter_vms.edit_backup 
@datacenterId='{{ datacenterId }}' --required, 
@serviceName='{{ serviceName }}' --required, 
@vmId='{{ vmId }}' --required 
@@json=
'{
"backupDays": "{{ backupDays }}"
}'
;
```
</TabItem>
<TabItem value="enable_backup">

Enable VM backup. Starts backing up the virtual machine on the given days. Returns a task to track progress.

```sql
EXEC ovh.dedicated_cloud.datacenter_vms.enable_backup 
@datacenterId='{{ datacenterId }}' --required, 
@serviceName='{{ serviceName }}' --required, 
@vmId='{{ vmId }}' --required 
@@json=
'{
"backupDays": "{{ backupDays }}"
}'
;
```
</TabItem>
<TabItem value="enable_carp">

Enable CARP on a VM. Enables CARP on the network port of the virtual machine with the given MAC address, on the VM Network portgroup. Returns a task to track progress.

```sql
EXEC ovh.dedicated_cloud.datacenter_vms.enable_carp 
@datacenterId='{{ datacenterId }}' --required, 
@serviceName='{{ serviceName }}' --required, 
@vmId='{{ vmId }}' --required 
@@json=
'{
"macAddress": "{{ macAddress }}"
}'
;
```
</TabItem>
<TabItem value="remove_license">

Remove a managed license. Removes the managed license from the virtual machine. Returns a task to track progress.

```sql
EXEC ovh.dedicated_cloud.datacenter_vms.remove_license 
@datacenterId='{{ datacenterId }}' --required, 
@serviceName='{{ serviceName }}' --required, 
@vmId='{{ vmId }}' --required
;
```
</TabItem>
<TabItem value="restore_backup">

Restore a VM backup. Restores the virtual machine from a restore point to the given datastore, NAS by default or vSAN. Returns a task to track progress.

```sql
EXEC ovh.dedicated_cloud.datacenter_vms.restore_backup 
@datacenterId='{{ datacenterId }}' --required, 
@serviceName='{{ serviceName }}' --required, 
@vmId='{{ vmId }}' --required 
@@json=
'{
"filerId": {{ filerId }}, 
"filerType": "{{ filerType }}", 
"restorePointId": {{ restorePointId }}
}'
;
```
</TabItem>
<TabItem value="set_license">

Set a managed license. Attaches an OVHcloud managed Windows license to the virtual machine. Skip the guest OS family check with `bypassGuestOsFamilyCheck`. Returns a task to track progress.

```sql
EXEC ovh.dedicated_cloud.datacenter_vms.set_license 
@datacenterId='{{ datacenterId }}' --required, 
@serviceName='{{ serviceName }}' --required, 
@vmId='{{ vmId }}' --required 
@@json=
'{
"bypassGuestOsFamilyCheck": {{ bypassGuestOsFamilyCheck }}, 
"kmsLicense": "{{ kmsLicense }}"
}'
;
```
</TabItem>
</Tabs>
