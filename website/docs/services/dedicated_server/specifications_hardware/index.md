--- 
title: specifications_hardware
hide_title: false
hide_table_of_contents: false
keywords:
  - specifications_hardware
  - dedicated_server
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

Creates, updates, deletes, gets or lists a <code>specifications_hardware</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="specifications_hardware" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.dedicated_server.specifications_hardware" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
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
    <td><CopyableCode code="default_disk_group_id" /></td>
    <td><code>integer</code></td>
    <td>Default disk group id used for OS reinstallation when not specified (wire: defaultDiskGroupId)</td>
</tr>
<tr>
    <td><CopyableCode code="processor_name" /></td>
    <td><code>string</code></td>
    <td>processor name (wire: processorName)</td>
</tr>
<tr>
    <td><CopyableCode code="boot_mode" /></td>
    <td><code>string</code></td>
    <td>Server boot mode (legacy, uefi, uefi-legacy) (wire: bootMode)</td>
</tr>
<tr>
    <td><CopyableCode code="cores_per_processor" /></td>
    <td><code>integer</code></td>
    <td>number of cores per processor (wire: coresPerProcessor)</td>
</tr>
<tr>
    <td><CopyableCode code="default_hardware_raid_size" /></td>
    <td><code>object</code></td>
    <td>Default hardware raid size for this server (wire: defaultHardwareRaidSize)</td>
</tr>
<tr>
    <td><CopyableCode code="default_hardware_raid_type" /></td>
    <td><code>string</code></td>
    <td>Default hardware raid type configured on this server (raid0, raid1, raid10, raid1E, raid5, raid50, raid6, raid60) (wire: defaultHardwareRaidType)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>commercial name of this server</td>
</tr>
<tr>
    <td><CopyableCode code="disk_groups" /></td>
    <td><code>array</code></td>
    <td>details about the groups of disks in the server (wire: diskGroups)</td>
</tr>
<tr>
    <td><CopyableCode code="expansion_cards" /></td>
    <td><code>array</code></td>
    <td>details about the server's expansion cards (wire: expansionCards)</td>
</tr>
<tr>
    <td><CopyableCode code="form_factor" /></td>
    <td><code>string</code></td>
    <td>Server form factor (0.25u, 0.5u, 1u, 2u, 3u, 4u) (wire: formFactor)</td>
</tr>
<tr>
    <td><CopyableCode code="memory_size" /></td>
    <td><code>object</code></td>
    <td>ram capacity (wire: memorySize)</td>
</tr>
<tr>
    <td><CopyableCode code="motherboard" /></td>
    <td><code>string</code></td>
    <td>server motherboard</td>
</tr>
<tr>
    <td><CopyableCode code="number_of_processors" /></td>
    <td><code>integer</code></td>
    <td>number of processors in this dedicated server (wire: numberOfProcessors)</td>
</tr>
<tr>
    <td><CopyableCode code="processor_architecture" /></td>
    <td><code>string</code></td>
    <td>processor architecture bit (arm64, armhf32, ppc64, x86, x86-ht, x86_64) (wire: processorArchitecture)</td>
</tr>
<tr>
    <td><CopyableCode code="threads_per_processor" /></td>
    <td><code>integer</code></td>
    <td>number of threads per processor (wire: threadsPerProcessor)</td>
</tr>
<tr>
    <td><CopyableCode code="usb_keys" /></td>
    <td><code>array</code></td>
    <td>Capacity of the USB keys installed on your server, if any (wire: usbKeys)</td>
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
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get the hardware specifications. Returns the hardware of the server: commercial name, processors, memory, disk groups, expansion cards, motherboard, form factor and default RAID settings.</td>
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
    <td>The internal name of your dedicated server (wire: serviceName)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

Get the hardware specifications. Returns the hardware of the server: commercial name, processors, memory, disk groups, expansion cards, motherboard, form factor and default RAID settings.

```sql
SELECT
default_disk_group_id,
processor_name,
boot_mode,
cores_per_processor,
default_hardware_raid_size,
default_hardware_raid_type,
description,
disk_groups,
expansion_cards,
form_factor,
memory_size,
motherboard,
number_of_processors,
processor_architecture,
threads_per_processor,
usb_keys
FROM ovh.dedicated_server.specifications_hardware
WHERE service_name = '{{ service_name }}' -- required
;
```
</TabItem>
</Tabs>
