--- 
title: allowed_services
hide_title: false
hide_table_of_contents: false
keywords:
  - allowed_services
  - vrack
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

Creates, updates, deletes, gets or lists an <code>allowed_services</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="allowed_services" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.vrack.allowed_services" /></td></tr>
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
    <td><CopyableCode code="cloud_project" /></td>
    <td><code>array</code></td>
    <td>list of publicCloud projects allowed to be connected to vrack (wire: cloudProject)</td>
</tr>
<tr>
    <td><CopyableCode code="dedicated_cloud" /></td>
    <td><code>array</code></td>
    <td>list of dedicated cloud allowed to be connected to vrack (wire: dedicatedCloud)</td>
</tr>
<tr>
    <td><CopyableCode code="dedicated_cloud_datacenter" /></td>
    <td><code>array</code></td>
    <td>list of dedicated cloud datacenters allowed to be connected to vrack (wire: dedicatedCloudDatacenter)</td>
</tr>
<tr>
    <td><CopyableCode code="dedicated_connect" /></td>
    <td><code>array</code></td>
    <td>list of dedicated connect links allowed to be connected to vrack (wire: dedicatedConnect)</td>
</tr>
<tr>
    <td><CopyableCode code="dedicated_server" /></td>
    <td><code>array</code></td>
    <td>list of dedicated servers allowed to be connected to vrack (wire: dedicatedServer)</td>
</tr>
<tr>
    <td><CopyableCode code="dedicated_server_interface" /></td>
    <td><code>array</code></td>
    <td>list of dedicated server interfaces allowed to be connected to vrack (wire: dedicatedServerInterface)</td>
</tr>
<tr>
    <td><CopyableCode code="ip" /></td>
    <td><code>array</code></td>
    <td>list of blocks allowed to be connected to vrack</td>
</tr>
<tr>
    <td><CopyableCode code="ip_loadbalancing" /></td>
    <td><code>array</code></td>
    <td>list of ipLoadbalancing allowed to be connected to vrack (wire: ipLoadbalancing)</td>
</tr>
<tr>
    <td><CopyableCode code="ipv_6" /></td>
    <td><code>array</code></td>
    <td>list of ipv6 blocks allowed to be connected to vrack (wire: ipv6)</td>
</tr>
<tr>
    <td><CopyableCode code="legacy_vrack" /></td>
    <td><code>array</code></td>
    <td>list of legacy vrack (1.0) allowed to be connected to vrack (wire: legacyVrack)</td>
</tr>
<tr>
    <td><CopyableCode code="ovh_cloud_connect" /></td>
    <td><code>array</code></td>
    <td>List of the ovhCloudConnect services allowed to be connected to vrack (wire: ovhCloudConnect)</td>
</tr>
<tr>
    <td><CopyableCode code="vmware_cloud_director_virtual_data_center" /></td>
    <td><code>array</code></td>
    <td>List of the vmwareCloudDirectorVirtualDataCenter allowed to be connected to vrack (wire: vmwareCloudDirectorVirtualDataCenter)</td>
</tr>
<tr>
    <td><CopyableCode code="vrack_services" /></td>
    <td><code>array</code></td>
    <td>List of the vrackServices allowed to be connected to vrack (wire: vrackServices)</td>
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
    <td><a href="#parameter-service_family"><code>service_family</code></a></td>
    <td>List allowed services (deprecated). Returns, by service family, the services that can be attached to the vRack. Deprecated: use eligibleServices instead. (Deprecated, will be removed)</td>
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
    <td>The internal name of your vrack (wire: serviceName)</td>
</tr>
<tr id="parameter-service_family">
    <td><CopyableCode code="service_family" /></td>
    <td><code>string</code></td>
    <td>Filter on a specific service family (wire: serviceFamily)</td>
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

List allowed services (deprecated). Returns, by service family, the services that can be attached to the vRack. Deprecated: use eligibleServices instead. (Deprecated, will be removed)

```sql
SELECT
cloud_project,
dedicated_cloud,
dedicated_cloud_datacenter,
dedicated_connect,
dedicated_server,
dedicated_server_interface,
ip,
ip_loadbalancing,
ipv_6,
legacy_vrack,
ovh_cloud_connect,
vmware_cloud_director_virtual_data_center,
vrack_services
FROM ovh.vrack.allowed_services
WHERE service_name = '{{ service_name }}' -- required
AND service_family = '{{ service_family }}'
;
```
</TabItem>
</Tabs>
