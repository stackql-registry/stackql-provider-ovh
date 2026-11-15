--- 
title: datacenter_vm_licenseds
hide_title: false
hide_table_of_contents: false
keywords:
  - datacenter_vm_licenseds
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

Creates, updates, deletes, gets or lists a <code>datacenter_vm_licenseds</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="datacenter_vm_licenseds" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.dedicated_cloud.datacenter_vm_licenseds" /></td></tr>
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

A structure describing the licensing of a virtual machine

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
    <td>Virtual machine name</td>
</tr>
<tr>
    <td><CopyableCode code="vm_id" /></td>
    <td><code>integer</code></td>
    <td>Virtual machine identifier (wire: vmId)</td>
</tr>
<tr>
    <td><CopyableCode code="guest_os_family" /></td>
    <td><code>string</code></td>
    <td>Guest Operating System reported by VMware tools (wire: guestOsFamily)</td>
</tr>
<tr>
    <td><CopyableCode code="license" /></td>
    <td><code>string</code></td>
    <td>Attached SPLA licensing (OVHcloud managed, unknown or unsupported license, unlicensed windows guestos, windows 2008 R2 Datacenter, windows 2008 R2 Enterprise, windows 2008 R2 Standard, windows 2008 R2 Web, windows 2012 Datacenter, windows 2012 R2 Datacenter, windows 2012 R2 Standard, windows 2012 R2 Standard SQL2016 Standard, windows 2012 R2 Standard SQL2016 Web, windows 2012 Standard, windows 2016 Datacenter, windows 2016 Standard, windows 2016 Standard SQL2016 Standard, windows 2016 Standard SQL2016 Web, windows 2019 Datacenter, windows 2019 Datacenter Core, windows 2019 Standard, windows 2019 Standard Core, windows 2019 Standard SQL2019 Standard, windows 2019 Standard SQL2019 Web, windows 2019 Standard SQL2022 Standard, windows 2019 Standard SQL2022 Web, windows 2022 Datacenter, windows 2022 Datacenter Core, windows 2022 Datacenter SQL2019 Standard, windows 2022 Datacenter SQL2019 Web, windows 2022 Datacenter SQL2022 Standard, windows 2022 Datacenter SQL2022 Web, windows 2022 Standard, windows 2022 Standard Core, windows 2022 Standard SQL2019 Standard, windows 2022 Standard SQL2019 Web, windows 2022 Standard SQL2022 Standard, windows 2022 Standard SQL2022 Web, windows 2025 Datacenter, windows 2025 Datacenter Core, windows 2025 Datacenter SQL2022 Enterprise, windows 2025 Datacenter SQL2022 Standard, windows 2025 Datacenter SQL2022 Web, windows 2025 Standard, windows 2025 Standard Core, windows 2025 Standard SQL2022 Standard, windows 2025 Standard SQL2022 Web)</td>
</tr>
<tr>
    <td><CopyableCode code="mo_ref" /></td>
    <td><code>string</code></td>
    <td>VMware Managed object Reference identifier (wire: moRef)</td>
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
    <td><a href="#parameter-kms_license"><code>kms_license</code></a></td>
    <td>List licensed VMs. Returns the virtual machines with a managed license, with their guest OS and license. Filter by license with `kmsLicense`.</td>
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
<tr id="parameter-kms_license">
    <td><CopyableCode code="kms_license" /></td>
    <td><code>string</code></td>
    <td>Only display virtual machines with this license (wire: kmsLicense)</td>
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

List licensed VMs. Returns the virtual machines with a managed license, with their guest OS and license. Filter by license with `kmsLicense`.

```sql
SELECT
name,
vm_id,
guest_os_family,
license,
mo_ref
FROM ovh.dedicated_cloud.datacenter_vm_licenseds
WHERE datacenter_id = '{{ datacenter_id }}' -- required
AND service_name = '{{ service_name }}' -- required
AND kms_license = '{{ kms_license }}'
;
```
</TabItem>
</Tabs>
