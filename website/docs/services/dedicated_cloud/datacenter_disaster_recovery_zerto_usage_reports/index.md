--- 
title: datacenter_disaster_recovery_zerto_usage_reports
hide_title: false
hide_table_of_contents: false
keywords:
  - datacenter_disaster_recovery_zerto_usage_reports
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

Creates, updates, deletes, gets or lists a <code>datacenter_disaster_recovery_zerto_usage_reports</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="datacenter_disaster_recovery_zerto_usage_reports" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.dedicated_cloud.datacenter_disaster_recovery_zerto_usage_reports" /></td></tr>
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

Information on virtual machine protected by Zerto

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
    <td><code>string</code></td>
    <td>ID of the protected VM (wire: vmId)</td>
</tr>
<tr>
    <td><CopyableCode code="vm_name" /></td>
    <td><code>string</code></td>
    <td>Name of the protected VM (wire: vmName)</td>
</tr>
<tr>
    <td><CopyableCode code="vpg_name" /></td>
    <td><code>string</code></td>
    <td>Name of the virtual protection group in which the VM is located (wire: vpgName)</td>
</tr>
<tr>
    <td><CopyableCode code="from_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Start of the backup for the requested period (wire: fromDate)</td>
</tr>
<tr>
    <td><CopyableCode code="protected_site" /></td>
    <td><code>string</code></td>
    <td>Name of the site in which the VM is running (wire: protectedSite)</td>
</tr>
<tr>
    <td><CopyableCode code="recovery_site" /></td>
    <td><code>string</code></td>
    <td>Name of the site where the VM is backed up (wire: recoverySite)</td>
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
    <td><a href="#parameter-datacenter_id"><code>datacenter_id</code></a>, <a href="#parameter-month"><code>month</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-year"><code>year</code></a></td>
    <td></td>
    <td>List Zerto disaster recovery protected virtual machines</td>
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
<tr id="parameter-month">
    <td><CopyableCode code="month" /></td>
    <td><code>integer</code></td>
    <td>Billing month</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>Domain of the service (wire: serviceName)</td>
</tr>
<tr id="parameter-year">
    <td><CopyableCode code="year" /></td>
    <td><code>integer</code></td>
    <td>Billing year</td>
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

List Zerto disaster recovery protected virtual machines

```sql
SELECT
vm_id,
vm_name,
vpg_name,
from_date,
protected_site,
recovery_site
FROM ovh.dedicated_cloud.datacenter_disaster_recovery_zerto_usage_reports
WHERE datacenter_id = '{{ datacenter_id }}' -- required
AND month = '{{ month }}' -- required
AND service_name = '{{ service_name }}' -- required
AND year = '{{ year }}' -- required
;
```
</TabItem>
</Tabs>
