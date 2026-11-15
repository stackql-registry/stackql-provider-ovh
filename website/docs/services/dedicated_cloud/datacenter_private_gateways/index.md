--- 
title: datacenter_private_gateways
hide_title: false
hide_table_of_contents: false
keywords:
  - datacenter_private_gateways
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

Creates, updates, deletes, gets or lists a <code>datacenter_private_gateways</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="datacenter_private_gateways" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.dedicated_cloud.datacenter_private_gateways" /></td></tr>
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
    <td><CopyableCode code="customer_ip" /></td>
    <td><code>string (ipv4)</code></td>
    <td>Ip set on your private gateway in your network (example: 192.0.2.0) (wire: customerIp)</td>
</tr>
<tr>
    <td><CopyableCode code="customer_netmask" /></td>
    <td><code>string (ipv4)</code></td>
    <td>Your netmask set on the private gateway (example: 192.0.2.0) (wire: customerNetmask)</td>
</tr>
<tr>
    <td><CopyableCode code="customer_port_group" /></td>
    <td><code>string</code></td>
    <td>Portgroup in your VMware on OVHcloud used to deploy the private gateway (wire: customerPortGroup)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>State of the option (disabled, disabling, enabled, enabling, error, migrating, unknown)</td>
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
    <td>Get the private gateway. Returns the private management gateway: IP address, netmask, portgroup and state.</td>
</tr>
<tr>
    <td><a href="#disable"><CopyableCode code="disable" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-datacenterId"><code>datacenterId</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Remove the private gateway. Removes the private management gateway. Returns a task to track progress.</td>
</tr>
<tr>
    <td><a href="#enable"><CopyableCode code="enable" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-datacenterId"><code>datacenterId</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-ip"><code>ip</code></a>, <a href="#parameter-netmask"><code>netmask</code></a>, <a href="#parameter-portgroup"><code>portgroup</code></a></td>
    <td></td>
    <td>Deploy the private gateway. Deploys the private management gateway on a portgroup of the service, with the given IP address and netmask. Returns a task to track progress.</td>
</tr>
<tr>
    <td><a href="#reconfigure"><CopyableCode code="reconfigure" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-datacenterId"><code>datacenterId</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Reconfigure the private gateway. Changes the IP address, netmask or portgroup of the private management gateway, or moves it to another datacenter. Returns a task to track progress.</td>
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

Get the private gateway. Returns the private management gateway: IP address, netmask, portgroup and state.

```sql
SELECT
customer_ip,
customer_netmask,
customer_port_group,
state
FROM ovh.dedicated_cloud.datacenter_private_gateways
WHERE datacenter_id = '{{ datacenter_id }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="disable"
    values={[
        { label: 'disable', value: 'disable' },
        { label: 'enable', value: 'enable' },
        { label: 'reconfigure', value: 'reconfigure' }
    ]}
>
<TabItem value="disable">

Remove the private gateway. Removes the private management gateway. Returns a task to track progress.

```sql
EXEC ovh.dedicated_cloud.datacenter_private_gateways.disable 
@datacenterId='{{ datacenterId }}' --required, 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
<TabItem value="enable">

Deploy the private gateway. Deploys the private management gateway on a portgroup of the service, with the given IP address and netmask. Returns a task to track progress.

```sql
EXEC ovh.dedicated_cloud.datacenter_private_gateways.enable 
@datacenterId='{{ datacenterId }}' --required, 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"ip": "{{ ip }}", 
"netmask": "{{ netmask }}", 
"portgroup": "{{ portgroup }}"
}'
;
```
</TabItem>
<TabItem value="reconfigure">

Reconfigure the private gateway. Changes the IP address, netmask or portgroup of the private management gateway, or moves it to another datacenter. Returns a task to track progress.

```sql
EXEC ovh.dedicated_cloud.datacenter_private_gateways.reconfigure 
@datacenterId='{{ datacenterId }}' --required, 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"ip": "{{ ip }}", 
"netmask": "{{ netmask }}", 
"newDatacenterId": {{ newDatacenterId }}, 
"portgroup": "{{ portgroup }}"
}'
;
```
</TabItem>
</Tabs>
