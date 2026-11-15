--- 
title: flavors
hide_title: false
hide_table_of_contents: false
keywords:
  - flavors
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

Creates, updates, deletes, gets or lists a <code>flavors</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="flavors" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.cloud.flavors" /></td></tr>
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
    <td>Flavor id</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Flavor name</td>
</tr>
<tr>
    <td><CopyableCode code="available" /></td>
    <td><code>boolean</code></td>
    <td>Available in stock</td>
</tr>
<tr>
    <td><CopyableCode code="capabilities" /></td>
    <td><code>array</code></td>
    <td>Capabilities of the flavor</td>
</tr>
<tr>
    <td><CopyableCode code="disk" /></td>
    <td><code>integer</code></td>
    <td>Number of disks</td>
</tr>
<tr>
    <td><CopyableCode code="inbound_bandwidth" /></td>
    <td><code>integer</code></td>
    <td>Max capacity of inbound traffic in Mbit/s (wire: inboundBandwidth)</td>
</tr>
<tr>
    <td><CopyableCode code="os_type" /></td>
    <td><code>string</code></td>
    <td>OS to install on (wire: osType)</td>
</tr>
<tr>
    <td><CopyableCode code="outbound_bandwidth" /></td>
    <td><code>integer</code></td>
    <td>Max capacity of outbound traffic in Mbit/s (wire: outboundBandwidth)</td>
</tr>
<tr>
    <td><CopyableCode code="plan_codes" /></td>
    <td><code>object</code></td>
    <td>Plan codes to order instances (wire: planCodes)</td>
</tr>
<tr>
    <td><CopyableCode code="quota" /></td>
    <td><code>integer</code></td>
    <td>Number instance you can spawn with your actual quota</td>
</tr>
<tr>
    <td><CopyableCode code="ram" /></td>
    <td><code>integer</code></td>
    <td>Ram quantity (Gio)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Flavor region</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Flavor type</td>
</tr>
<tr>
    <td><CopyableCode code="vcpus" /></td>
    <td><code>integer</code></td>
    <td>Number of VCPUs</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Flavor

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
    <td>Flavor id</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Flavor name</td>
</tr>
<tr>
    <td><CopyableCode code="available" /></td>
    <td><code>boolean</code></td>
    <td>Available in stock</td>
</tr>
<tr>
    <td><CopyableCode code="capabilities" /></td>
    <td><code>array</code></td>
    <td>Capabilities of the flavor</td>
</tr>
<tr>
    <td><CopyableCode code="disk" /></td>
    <td><code>integer</code></td>
    <td>Number of disks</td>
</tr>
<tr>
    <td><CopyableCode code="inbound_bandwidth" /></td>
    <td><code>integer</code></td>
    <td>Max capacity of inbound traffic in Mbit/s (wire: inboundBandwidth)</td>
</tr>
<tr>
    <td><CopyableCode code="os_type" /></td>
    <td><code>string</code></td>
    <td>OS to install on (wire: osType)</td>
</tr>
<tr>
    <td><CopyableCode code="outbound_bandwidth" /></td>
    <td><code>integer</code></td>
    <td>Max capacity of outbound traffic in Mbit/s (wire: outboundBandwidth)</td>
</tr>
<tr>
    <td><CopyableCode code="plan_codes" /></td>
    <td><code>object</code></td>
    <td>Plan codes to order instances (wire: planCodes)</td>
</tr>
<tr>
    <td><CopyableCode code="quota" /></td>
    <td><code>integer</code></td>
    <td>Number instance you can spawn with your actual quota</td>
</tr>
<tr>
    <td><CopyableCode code="ram" /></td>
    <td><code>integer</code></td>
    <td>Ram quantity (Gio)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Flavor region</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Flavor type</td>
</tr>
<tr>
    <td><CopyableCode code="vcpus" /></td>
    <td><code>integer</code></td>
    <td>Number of VCPUs</td>
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
    <td><a href="#parameter-flavor_id"><code>flavor_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get a specific flavor for a public cloud project</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-region"><code>region</code></a></td>
    <td>List all flavors for a public cloud project</td>
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
<tr id="parameter-flavor_id">
    <td><CopyableCode code="flavor_id" /></td>
    <td><code>string</code></td>
    <td>Flavor ID (wire: flavorId)</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The Public Cloud project ID. Resolved from OVH_CLOUD_PROJECT_SERVICE when set.</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Flavor region</td>
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

Get a specific flavor for a public cloud project

```sql
SELECT
id,
name,
available,
capabilities,
disk,
inbound_bandwidth,
os_type,
outbound_bandwidth,
plan_codes,
quota,
ram,
region,
type,
vcpus
FROM ovh.cloud.flavors
WHERE flavor_id = '{{ flavor_id }}' -- required
AND service_name = '{{ service_name }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
<TabItem value="list">

List all flavors for a public cloud project

```sql
SELECT
id,
name,
available,
capabilities,
disk,
inbound_bandwidth,
os_type,
outbound_bandwidth,
plan_codes,
quota,
ram,
region,
type,
vcpus
FROM ovh.cloud.flavors
WHERE service_name = '{{ service_name }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
AND region = '{{ region }}'
;
```
</TabItem>
</Tabs>
