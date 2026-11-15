--- 
title: service_devices
hide_title: false
hide_table_of_contents: false
keywords:
  - service_devices
  - email_exchange
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

Creates, updates, deletes, gets or lists a <code>service_devices</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="service_devices" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.email_exchange.service_devices" /></td></tr>
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
    <td><CopyableCode code="device_id" /></td>
    <td><code>string</code></td>
    <td>Device Id (wire: deviceId)</td>
</tr>
<tr>
    <td><CopyableCode code="task_pending_id" /></td>
    <td><code>integer</code></td>
    <td>Pending task id (wire: taskPendingId)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date (wire: creationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="device_model" /></td>
    <td><code>string</code></td>
    <td>Model device (wire: deviceModel)</td>
</tr>
<tr>
    <td><CopyableCode code="device_state" /></td>
    <td><code>string</code></td>
    <td>Device State (allowed, blocked, deviceDiscovery, quarantined) (wire: deviceState)</td>
</tr>
<tr>
    <td><CopyableCode code="guid" /></td>
    <td><code>string</code></td>
    <td>user guid</td>
</tr>
<tr>
    <td><CopyableCode code="identity" /></td>
    <td><code>string</code></td>
    <td>Exchange identity</td>
</tr>
<tr>
    <td><CopyableCode code="imei" /></td>
    <td><code>string</code></td>
    <td>International Mobile Equipment Identity (wire: IMEI)</td>
</tr>
<tr>
    <td><CopyableCode code="last_update" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last update date (wire: lastUpdate)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Get the list of your ActiveSync devices registered on this Exchange service

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
    <td><CopyableCode code="device_id" /></td>
    <td><code>string</code></td>
    <td>Device Id (wire: deviceId)</td>
</tr>
<tr>
    <td><CopyableCode code="task_pending_id" /></td>
    <td><code>integer</code></td>
    <td>Pending task id (wire: taskPendingId)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date (wire: creationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="device_model" /></td>
    <td><code>string</code></td>
    <td>Model device (wire: deviceModel)</td>
</tr>
<tr>
    <td><CopyableCode code="device_state" /></td>
    <td><code>string</code></td>
    <td>Device State (allowed, blocked, deviceDiscovery, quarantined) (wire: deviceState)</td>
</tr>
<tr>
    <td><CopyableCode code="guid" /></td>
    <td><code>string</code></td>
    <td>user guid</td>
</tr>
<tr>
    <td><CopyableCode code="identity" /></td>
    <td><code>string</code></td>
    <td>Exchange identity</td>
</tr>
<tr>
    <td><CopyableCode code="imei" /></td>
    <td><code>string</code></td>
    <td>International Mobile Equipment Identity (wire: IMEI)</td>
</tr>
<tr>
    <td><CopyableCode code="last_update" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last update date (wire: lastUpdate)</td>
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
    <td><a href="#parameter-exchange_service"><code>exchange_service</code></a>, <a href="#parameter-identity"><code>identity</code></a>, <a href="#parameter-organization_name"><code>organization_name</code></a></td>
    <td></td>
    <td>Get a device. Returns the model, IMEI, device ID, ActiveSync state and last update date of the ActiveSync device.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-exchange_service"><code>exchange_service</code></a>, <a href="#parameter-organization_name"><code>organization_name</code></a></td>
    <td><a href="#parameter-imei"><code>imei</code></a>, <a href="#parameter-device_state"><code>device_state</code></a>, <a href="#parameter-identity"><code>identity</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List devices. Returns the identities of the ActiveSync devices registered on the service. Filter them by `identity`, `IMEI` or `deviceState`.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-exchange_service"><code>exchange_service</code></a>, <a href="#parameter-identity"><code>identity</code></a>, <a href="#parameter-organization_name"><code>organization_name</code></a></td>
    <td></td>
    <td>Update a device. Updates the ActiveSync state of the device with `deviceState`, for example to allow, block or quarantine it.</td>
</tr>
<tr>
    <td><a href="#clear_device"><CopyableCode code="clear_device" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-exchangeService"><code>exchangeService</code></a>, <a href="#parameter-identity"><code>identity</code></a>, <a href="#parameter-organizationName"><code>organizationName</code></a></td>
    <td></td>
    <td>Reset a device to factory settings. Runs a factory reset on the device and returns the task. This cannot be undone: all data on the device is lost.</td>
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
<tr id="parameter-exchangeService">
    <td><CopyableCode code="exchangeService" /></td>
    <td><code>string</code></td>
    <td>The internal name of your exchange service</td>
</tr>
<tr id="parameter-exchange_service">
    <td><CopyableCode code="exchange_service" /></td>
    <td><code>string</code></td>
    <td>The internal name of your exchange service (wire: exchangeService)</td>
</tr>
<tr id="parameter-identity">
    <td><CopyableCode code="identity" /></td>
    <td><code>string</code></td>
    <td>Exchange identity</td>
</tr>
<tr id="parameter-organizationName">
    <td><CopyableCode code="organizationName" /></td>
    <td><code>string</code></td>
    <td>The internal name of your exchange organization</td>
</tr>
<tr id="parameter-organization_name">
    <td><CopyableCode code="organization_name" /></td>
    <td><code>string</code></td>
    <td>The internal name of your exchange organization (wire: organizationName)</td>
</tr>
<tr id="parameter-device_state">
    <td><CopyableCode code="device_state" /></td>
    <td><code>string</code></td>
    <td>Filter the value of deviceState property (=) (wire: deviceState)</td>
</tr>
<tr id="parameter-identity">
    <td><CopyableCode code="identity" /></td>
    <td><code>string</code></td>
    <td>Filter the value of identity property (like)</td>
</tr>
<tr id="parameter-imei">
    <td><CopyableCode code="imei" /></td>
    <td><code>string</code></td>
    <td>Filter the value of IMEI property (like) (wire: IMEI)</td>
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

Get a device. Returns the model, IMEI, device ID, ActiveSync state and last update date of the ActiveSync device.

```sql
SELECT
device_id,
task_pending_id,
creation_date,
device_model,
device_state,
guid,
identity,
imei,
last_update
FROM ovh.email_exchange.service_devices
WHERE exchange_service = '{{ exchange_service }}' -- required
AND identity = '{{ identity }}' -- required
AND organization_name = '{{ organization_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List devices. Returns the identities of the ActiveSync devices registered on the service. Filter them by `identity`, `IMEI` or `deviceState`.

```sql
SELECT
device_id,
task_pending_id,
creation_date,
device_model,
device_state,
guid,
identity,
imei,
last_update
FROM ovh.email_exchange.service_devices
WHERE exchange_service = '{{ exchange_service }}' -- required
AND organization_name = '{{ organization_name }}' -- required
AND imei = '{{ imei }}'
AND device_state = '{{ device_state }}'
AND identity = '{{ identity }}'
AND x_pagination_mode = '{{ x_pagination_mode }}'
;
```
</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update"
    values={[
        { label: 'update', value: 'update' }
    ]}
>
<TabItem value="update">

Update a device. Updates the ActiveSync state of the device with `deviceState`, for example to allow, block or quarantine it.

```sql
UPDATE ovh.email_exchange.service_devices
SET 
device_state = '{{ device_state }}'
WHERE 
exchange_service = '{{ exchange_service }}' --required
AND identity = '{{ identity }}' --required
AND organization_name = '{{ organization_name }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="clear_device"
    values={[
        { label: 'clear_device', value: 'clear_device' }
    ]}
>
<TabItem value="clear_device">

Reset a device to factory settings. Runs a factory reset on the device and returns the task. This cannot be undone: all data on the device is lost.

```sql
EXEC ovh.email_exchange.service_devices.clear_device 
@exchangeService='{{ exchangeService }}' --required, 
@identity='{{ identity }}' --required, 
@organizationName='{{ organizationName }}' --required
;
```
</TabItem>
</Tabs>
