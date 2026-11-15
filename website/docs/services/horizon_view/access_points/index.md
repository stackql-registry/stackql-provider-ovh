--- 
title: access_points
hide_title: false
hide_table_of_contents: false
keywords:
  - access_points
  - horizon_view
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

Creates, updates, deletes, gets or lists an <code>access_points</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="access_points" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.horizon_view.access_points" /></td></tr>
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
    <td><CopyableCode code="access_point_id" /></td>
    <td><code>integer</code></td>
    <td>Pool id (wire: accessPointId)</td>
</tr>
<tr>
    <td><CopyableCode code="port_group_id" /></td>
    <td><code>string</code></td>
    <td>Port group id (wire: portGroupId)</td>
</tr>
<tr>
    <td><CopyableCode code="dhcp_netmask" /></td>
    <td><code>string (ipv4)</code></td>
    <td>DHCP netmask in this port group (example: 192.0.2.0) (wire: dhcpNetmask)</td>
</tr>
<tr>
    <td><CopyableCode code="dhcp_network" /></td>
    <td><code>string (ipv4)</code></td>
    <td>DHCP network in this port group (example: 192.0.2.0) (wire: dhcpNetwork)</td>
</tr>
<tr>
    <td><CopyableCode code="external_url" /></td>
    <td><code>string</code></td>
    <td>External url of your access point (wire: externalUrl)</td>
</tr>
<tr>
    <td><CopyableCode code="interco_next_hop" /></td>
    <td><code>string (ipv4)</code></td>
    <td>Next hop IP to reach virtual desktops network for public Access Point (example: 192.0.2.0) (wire: intercoNextHop)</td>
</tr>
<tr>
    <td><CopyableCode code="interco_private_next_hop" /></td>
    <td><code>string (ipv4)</code></td>
    <td>Next hop IP to reach virtual desktops network for private Access Point (example: 192.0.2.0) (wire: intercoPrivateNextHop)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Network state (available, creating, delivered, disabled, error, reserved)</td>
</tr>
<tr>
    <td><CopyableCode code="two_fa" /></td>
    <td><code>boolean</code></td>
    <td>Two factor authentication (wire: twoFA)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Pool type (hybridPool, privatePool, publicPool)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

All informations about access point

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
    <td><CopyableCode code="access_point_id" /></td>
    <td><code>integer</code></td>
    <td>Pool id (wire: accessPointId)</td>
</tr>
<tr>
    <td><CopyableCode code="port_group_id" /></td>
    <td><code>string</code></td>
    <td>Port group id (wire: portGroupId)</td>
</tr>
<tr>
    <td><CopyableCode code="dhcp_netmask" /></td>
    <td><code>string (ipv4)</code></td>
    <td>DHCP netmask in this port group (example: 192.0.2.0) (wire: dhcpNetmask)</td>
</tr>
<tr>
    <td><CopyableCode code="dhcp_network" /></td>
    <td><code>string (ipv4)</code></td>
    <td>DHCP network in this port group (example: 192.0.2.0) (wire: dhcpNetwork)</td>
</tr>
<tr>
    <td><CopyableCode code="external_url" /></td>
    <td><code>string</code></td>
    <td>External url of your access point (wire: externalUrl)</td>
</tr>
<tr>
    <td><CopyableCode code="interco_next_hop" /></td>
    <td><code>string (ipv4)</code></td>
    <td>Next hop IP to reach virtual desktops network for public Access Point (example: 192.0.2.0) (wire: intercoNextHop)</td>
</tr>
<tr>
    <td><CopyableCode code="interco_private_next_hop" /></td>
    <td><code>string (ipv4)</code></td>
    <td>Next hop IP to reach virtual desktops network for private Access Point (example: 192.0.2.0) (wire: intercoPrivateNextHop)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Network state (available, creating, delivered, disabled, error, reserved)</td>
</tr>
<tr>
    <td><CopyableCode code="two_fa" /></td>
    <td><code>boolean</code></td>
    <td>Two factor authentication (wire: twoFA)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Pool type (hybridPool, privatePool, publicPool)</td>
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
    <td><a href="#parameter-access_point_id"><code>access_point_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get this object properties</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>Pool associated with this Datacenter</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-pool_type"><code>pool_type</code></a></td>
    <td></td>
    <td>Add new access point to create a new network</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-access_point_id"><code>access_point_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Delete this access point </td>
</tr>
<tr>
    <td><a href="#change_session_timeout"><CopyableCode code="change_session_timeout" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-accessPointId"><code>accessPointId</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-expiration"><code>expiration</code></a></td>
    <td></td>
    <td>Manage your session Timeout on Unified Access Gateway</td>
</tr>
<tr>
    <td><a href="#disable_two_fa"><CopyableCode code="disable_two_fa" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-accessPointId"><code>accessPointId</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Disable two factor authentication on your pool</td>
</tr>
<tr>
    <td><a href="#disable_windows_username_option"><CopyableCode code="disable_windows_username_option" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-accessPointId"><code>accessPointId</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Disable windows Username option on Unified Access Gateway</td>
</tr>
<tr>
    <td><a href="#enable_two_fa"><CopyableCode code="enable_two_fa" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-accessPointId"><code>accessPointId</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-radiusIp"><code>radiusIp</code></a>, <a href="#parameter-secret"><code>secret</code></a></td>
    <td></td>
    <td>Enable two factor authentication on your pool</td>
</tr>
<tr>
    <td><a href="#enable_windows_username_option"><CopyableCode code="enable_windows_username_option" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-accessPointId"><code>accessPointId</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Enable windows Username option on Unified Access Gateway</td>
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
<tr id="parameter-accessPointId">
    <td><CopyableCode code="accessPointId" /></td>
    <td><code>integer</code></td>
    <td>Pool id</td>
</tr>
<tr id="parameter-access_point_id">
    <td><CopyableCode code="access_point_id" /></td>
    <td><code>integer</code></td>
    <td>Pool id (wire: accessPointId)</td>
</tr>
<tr id="parameter-api_host">
    <td><CopyableCode code="api_host" /></td>
    <td><code>string</code></td>
    <td>The OVHcloud API host. Selected by OVH_ENDPOINT (ovh-eu, ovh-ca or ovh-us; default ovh-eu). (default: api.eu.ovhcloud.com, x-stackQL-envVarSelector: &#123;"envVar":"OVH_ENDPOINT","default":"ovh-eu","values":&#123;"ovh-eu":"api.eu.ovhcloud.com","ovh-ca":"api.ca.ovhcloud.com","ovh-us":"api.us.ovhcloud.com"&#125;&#125;)</td>
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

Get this object properties

```sql
SELECT
access_point_id,
port_group_id,
dhcp_netmask,
dhcp_network,
external_url,
interco_next_hop,
interco_private_next_hop,
state,
two_fa,
type
FROM ovh.horizon_view.access_points
WHERE access_point_id = '{{ access_point_id }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

Pool associated with this Datacenter

```sql
SELECT
access_point_id,
port_group_id,
dhcp_netmask,
dhcp_network,
external_url,
interco_next_hop,
interco_private_next_hop,
state,
two_fa,
type
FROM ovh.horizon_view.access_points
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

Add new access point to create a new network

```sql
INSERT INTO ovh.horizon_view.access_points (
pool_type,
private_block,
private_vlan,
vrouter_pool_public_ip,
service_name
)
SELECT 
'{{ pool_type }}' /* required */,
'{{ private_block }}',
{{ private_vlan }},
'{{ vrouter_pool_public_ip }}',
'{{ service_name }}'
RETURNING
name,
task_id,
description,
last_modification_date,
progress,
state
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: access_points
  props:
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the access_points resource.
    - name: pool_type
      value: "{{ pool_type }}"
      description: |
        The type of pool you want to deploy.
      valid_values: ['hybridPool', 'privatePool', 'publicPool']
    - name: private_block
      value: "{{ private_block }}"
      description: |
        You can customize your pool by choosing the private network (Ex : 10.0.0.0/16)
    - name: private_vlan
      value: {{ private_vlan }}
      description: |
        You can customize your pool by choosing its private Vlan ID. (smaller than 4095)
    - name: vrouter_pool_public_ip
      value: "{{ vrouter_pool_public_ip }}"
      description: |
        You need to use a public Ip if you want to deploy a public pool.
`}</CodeBlock>

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

Delete this access point 

```sql
DELETE FROM ovh.horizon_view.access_points
WHERE access_point_id = '{{ access_point_id }}' --required
AND service_name = '{{ service_name }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="change_session_timeout"
    values={[
        { label: 'change_session_timeout', value: 'change_session_timeout' },
        { label: 'disable_two_fa', value: 'disable_two_fa' },
        { label: 'disable_windows_username_option', value: 'disable_windows_username_option' },
        { label: 'enable_two_fa', value: 'enable_two_fa' },
        { label: 'enable_windows_username_option', value: 'enable_windows_username_option' }
    ]}
>
<TabItem value="change_session_timeout">

Manage your session Timeout on Unified Access Gateway

```sql
EXEC ovh.horizon_view.access_points.change_session_timeout 
@accessPointId='{{ accessPointId }}' --required, 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"expiration": {{ expiration }}, 
"onSingleAP": "{{ onSingleAP }}"
}'
;
```
</TabItem>
<TabItem value="disable_two_fa">

Disable two factor authentication on your pool

```sql
EXEC ovh.horizon_view.access_points.disable_two_fa 
@accessPointId='{{ accessPointId }}' --required, 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
<TabItem value="disable_windows_username_option">

Disable windows Username option on Unified Access Gateway

```sql
EXEC ovh.horizon_view.access_points.disable_windows_username_option 
@accessPointId='{{ accessPointId }}' --required, 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"onSingleAP": "{{ onSingleAP }}"
}'
;
```
</TabItem>
<TabItem value="enable_two_fa">

Enable two factor authentication on your pool

```sql
EXEC ovh.horizon_view.access_points.enable_two_fa 
@accessPointId='{{ accessPointId }}' --required, 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"onSingleAP": "{{ onSingleAP }}", 
"radiusIp": "{{ radiusIp }}", 
"secret": "{{ secret }}"
}'
;
```
</TabItem>
<TabItem value="enable_windows_username_option">

Enable windows Username option on Unified Access Gateway

```sql
EXEC ovh.horizon_view.access_points.enable_windows_username_option 
@accessPointId='{{ accessPointId }}' --required, 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"onSingleAP": "{{ onSingleAP }}"
}'
;
```
</TabItem>
</Tabs>
