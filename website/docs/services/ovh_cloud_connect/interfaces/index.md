--- 
title: interfaces
hide_title: false
hide_table_of_contents: false
keywords:
  - interfaces
  - ovh_cloud_connect
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

Creates, updates, deletes, gets or lists an <code>interfaces</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="interfaces" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.ovh_cloud_connect.interfaces" /></td></tr>
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
    <td><code>integer</code></td>
    <td>Interface reference</td>
</tr>
<tr>
    <td><CopyableCode code="device_display_name" /></td>
    <td><code>string</code></td>
    <td>Patch panel name (wire: deviceDisplayName)</td>
</tr>
<tr>
    <td><CopyableCode code="device_rack_display_name" /></td>
    <td><code>string</code></td>
    <td>Equipment name in the rack (wire: deviceRackDisplayName)</td>
</tr>
<tr>
    <td><CopyableCode code="interface_name" /></td>
    <td><code>string</code></td>
    <td>Port location (wire: interfaceName)</td>
</tr>
<tr>
    <td><CopyableCode code="incoming_light_status" /></td>
    <td><code>string</code></td>
    <td>Status of the light received on the port (checked every 5 min) (down, unknown, up) (wire: incomingLightStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="incoming_light_value" /></td>
    <td><code>number</code></td>
    <td>Value of the light received on the port (checked every 5 min) (wire: incomingLightValue)</td>
</tr>
<tr>
    <td><CopyableCode code="interface_status" /></td>
    <td><code>string</code></td>
    <td>Status of the interface (down, unknown, up) (wire: interfaceStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="interface_status_last_update" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date of the last interface status change detected (wire: interfaceStatusLastUpdate)</td>
</tr>
<tr>
    <td><CopyableCode code="interface_termination_type" /></td>
    <td><code>string</code></td>
    <td>Fiber termination type (LC/PC, SC/PC) (wire: interfaceTerminationType)</td>
</tr>
<tr>
    <td><CopyableCode code="light_last_update" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date of the last light change detected (wire: lightLastUpdate)</td>
</tr>
<tr>
    <td><CopyableCode code="outgoing_light_status" /></td>
    <td><code>string</code></td>
    <td>Status of the light emitted on the port (checked every 5 min) (down, unknown, up) (wire: outgoingLightStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="outgoing_light_value" /></td>
    <td><code>number</code></td>
    <td>Value of the light emitted on the port (checked every 5 min) (wire: outgoingLightValue)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of the port (disabled, enabled, reserved)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

OVHcloud Connect Interface

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
    <td><code>integer</code></td>
    <td>Interface reference</td>
</tr>
<tr>
    <td><CopyableCode code="device_display_name" /></td>
    <td><code>string</code></td>
    <td>Patch panel name (wire: deviceDisplayName)</td>
</tr>
<tr>
    <td><CopyableCode code="device_rack_display_name" /></td>
    <td><code>string</code></td>
    <td>Equipment name in the rack (wire: deviceRackDisplayName)</td>
</tr>
<tr>
    <td><CopyableCode code="interface_name" /></td>
    <td><code>string</code></td>
    <td>Port location (wire: interfaceName)</td>
</tr>
<tr>
    <td><CopyableCode code="incoming_light_status" /></td>
    <td><code>string</code></td>
    <td>Status of the light received on the port (checked every 5 min) (down, unknown, up) (wire: incomingLightStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="incoming_light_value" /></td>
    <td><code>number</code></td>
    <td>Value of the light received on the port (checked every 5 min) (wire: incomingLightValue)</td>
</tr>
<tr>
    <td><CopyableCode code="interface_status" /></td>
    <td><code>string</code></td>
    <td>Status of the interface (down, unknown, up) (wire: interfaceStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="interface_status_last_update" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date of the last interface status change detected (wire: interfaceStatusLastUpdate)</td>
</tr>
<tr>
    <td><CopyableCode code="interface_termination_type" /></td>
    <td><code>string</code></td>
    <td>Fiber termination type (LC/PC, SC/PC) (wire: interfaceTerminationType)</td>
</tr>
<tr>
    <td><CopyableCode code="light_last_update" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date of the last light change detected (wire: lightLastUpdate)</td>
</tr>
<tr>
    <td><CopyableCode code="outgoing_light_status" /></td>
    <td><code>string</code></td>
    <td>Status of the light emitted on the port (checked every 5 min) (down, unknown, up) (wire: outgoingLightStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="outgoing_light_value" /></td>
    <td><code>number</code></td>
    <td>Value of the light emitted on the port (checked every 5 min) (wire: outgoingLightValue)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of the port (disabled, enabled, reserved)</td>
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
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Returns the port's location, patch panel, status, connector type and optical light levels.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>Returns the IDs of the service's physical ports.</td>
</tr>
<tr>
    <td><a href="#lock"><CopyableCode code="lock" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Blocks all traffic on the port until it is unlocked (async task).</td>
</tr>
<tr>
    <td><a href="#unlock"><CopyableCode code="unlock" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Restores traffic on a locked port (async task).</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>integer</code></td>
    <td>Id</td>
</tr>
<tr id="parameter-serviceName">
    <td><CopyableCode code="serviceName" /></td>
    <td><code>string (uuid)</code></td>
    <td>Service name</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string (uuid)</code></td>
    <td>Service name (wire: serviceName)</td>
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

Returns the port's location, patch panel, status, connector type and optical light levels.

```sql
SELECT
id,
device_display_name,
device_rack_display_name,
interface_name,
incoming_light_status,
incoming_light_value,
interface_status,
interface_status_last_update,
interface_termination_type,
light_last_update,
outgoing_light_status,
outgoing_light_value,
status
FROM ovh.ovh_cloud_connect.interfaces
WHERE id = '{{ id }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns the IDs of the service's physical ports.

```sql
SELECT
id,
device_display_name,
device_rack_display_name,
interface_name,
incoming_light_status,
incoming_light_value,
interface_status,
interface_status_last_update,
interface_termination_type,
light_last_update,
outgoing_light_status,
outgoing_light_value,
status
FROM ovh.ovh_cloud_connect.interfaces
WHERE service_name = '{{ service_name }}' -- required
AND x_pagination_mode = '{{ x_pagination_mode }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="lock"
    values={[
        { label: 'lock', value: 'lock' },
        { label: 'unlock', value: 'unlock' }
    ]}
>
<TabItem value="lock">

Blocks all traffic on the port until it is unlocked (async task).

```sql
EXEC ovh.ovh_cloud_connect.interfaces.lock 
@id='{{ id }}' --required, 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
<TabItem value="unlock">

Restores traffic on a locked port (async task).

```sql
EXEC ovh.ovh_cloud_connect.interfaces.unlock 
@id='{{ id }}' --required, 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
</Tabs>
