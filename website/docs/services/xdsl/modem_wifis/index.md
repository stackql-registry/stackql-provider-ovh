--- 
title: modem_wifis
hide_title: false
hide_table_of_contents: false
keywords:
  - modem_wifis
  - xdsl
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

Creates, updates, deletes, gets or lists a <code>modem_wifis</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="modem_wifis" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.xdsl.modem_wifis" /></td></tr>
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
    <td><CopyableCode code="task_id" /></td>
    <td><code>integer</code></td>
    <td>ID of the ongoing todo (NULL if none) (wire: taskId)</td>
</tr>
<tr>
    <td><CopyableCode code="wifi_name" /></td>
    <td><code>string</code></td>
    <td>Name of the Wifi (wire: wifiName)</td>
</tr>
<tr>
    <td><CopyableCode code="band_steering" /></td>
    <td><code>boolean</code></td>
    <td>Indicate if frequencies 2.4GHz and 5GHz are agregated (wire: bandSteering)</td>
</tr>
<tr>
    <td><CopyableCode code="channel" /></td>
    <td><code>integer</code></td>
    <td>Choice of a channel (When chosen, channelMode is set to Manual)</td>
</tr>
<tr>
    <td><CopyableCode code="channel_mode" /></td>
    <td><code>string</code></td>
    <td>How the WiFi channel is selected (Auto, Manual) (wire: channelMode)</td>
</tr>
<tr>
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td>Wifi state</td>
</tr>
<tr>
    <td><CopyableCode code="frequency" /></td>
    <td><code>string</code></td>
    <td>Frequency (2.4GHz | 5GHz) (2.4GHz, 5GHz)</td>
</tr>
<tr>
    <td><CopyableCode code="guest" /></td>
    <td><code>boolean</code></td>
    <td>Indicate if it is normal access wifi or guest wifi</td>
</tr>
<tr>
    <td><CopyableCode code="security_key" /></td>
    <td><code>string</code></td>
    <td>WiFi security key (wire: securityKey)</td>
</tr>
<tr>
    <td><CopyableCode code="security_type" /></td>
    <td><code>string</code></td>
    <td>Type of WLAN security protection (None, WEP, WPA, WPA2, WPA2andWPA3, WPA3, WPAandWPA2) (wire: securityType)</td>
</tr>
<tr>
    <td><CopyableCode code="ssid" /></td>
    <td><code>string</code></td>
    <td>Service Set Identifier of the WLAN interface (wire: SSID)</td>
</tr>
<tr>
    <td><CopyableCode code="ssid_advertisement_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Hide or show the Wifi (wire: SSIDAdvertisementEnabled)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

WLAN Configuration of the Modem

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
    <td><CopyableCode code="task_id" /></td>
    <td><code>integer</code></td>
    <td>ID of the ongoing todo (NULL if none) (wire: taskId)</td>
</tr>
<tr>
    <td><CopyableCode code="wifi_name" /></td>
    <td><code>string</code></td>
    <td>Name of the Wifi (wire: wifiName)</td>
</tr>
<tr>
    <td><CopyableCode code="band_steering" /></td>
    <td><code>boolean</code></td>
    <td>Indicate if frequencies 2.4GHz and 5GHz are agregated (wire: bandSteering)</td>
</tr>
<tr>
    <td><CopyableCode code="channel" /></td>
    <td><code>integer</code></td>
    <td>Choice of a channel (When chosen, channelMode is set to Manual)</td>
</tr>
<tr>
    <td><CopyableCode code="channel_mode" /></td>
    <td><code>string</code></td>
    <td>How the WiFi channel is selected (Auto, Manual) (wire: channelMode)</td>
</tr>
<tr>
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td>Wifi state</td>
</tr>
<tr>
    <td><CopyableCode code="frequency" /></td>
    <td><code>string</code></td>
    <td>Frequency (2.4GHz | 5GHz) (2.4GHz, 5GHz)</td>
</tr>
<tr>
    <td><CopyableCode code="guest" /></td>
    <td><code>boolean</code></td>
    <td>Indicate if it is normal access wifi or guest wifi</td>
</tr>
<tr>
    <td><CopyableCode code="security_key" /></td>
    <td><code>string</code></td>
    <td>WiFi security key (wire: securityKey)</td>
</tr>
<tr>
    <td><CopyableCode code="security_type" /></td>
    <td><code>string</code></td>
    <td>Type of WLAN security protection (None, WEP, WPA, WPA2, WPA2andWPA3, WPA3, WPAandWPA2) (wire: securityType)</td>
</tr>
<tr>
    <td><CopyableCode code="ssid" /></td>
    <td><code>string</code></td>
    <td>Service Set Identifier of the WLAN interface (wire: SSID)</td>
</tr>
<tr>
    <td><CopyableCode code="ssid_advertisement_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Hide or show the Wifi (wire: SSIDAdvertisementEnabled)</td>
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
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-wifi_name"><code>wifi_name</code></a></td>
    <td></td>
    <td>Returns the SSID, state, visibility, frequency, channel, security type and key of a WiFi network, and whether it is a guest network.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>Returns the names of the WiFi networks of the modem of the access.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-wifi_name"><code>wifi_name</code></a></td>
    <td></td>
    <td>Changes the SSID, state, visibility, channel, channel mode, security type or security key of a WiFi network.</td>
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
    <td>Service name (wire: serviceName)</td>
</tr>
<tr id="parameter-wifi_name">
    <td><CopyableCode code="wifi_name" /></td>
    <td><code>string</code></td>
    <td>Wifi name (wire: wifiName)</td>
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

Returns the SSID, state, visibility, frequency, channel, security type and key of a WiFi network, and whether it is a guest network.

```sql
SELECT
task_id,
wifi_name,
band_steering,
channel,
channel_mode,
enabled,
frequency,
guest,
security_key,
security_type,
ssid,
ssid_advertisement_enabled
FROM ovh.xdsl.modem_wifis
WHERE service_name = '{{ service_name }}' -- required
AND wifi_name = '{{ wifi_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns the names of the WiFi networks of the modem of the access.

```sql
SELECT
task_id,
wifi_name,
band_steering,
channel,
channel_mode,
enabled,
frequency,
guest,
security_key,
security_type,
ssid,
ssid_advertisement_enabled
FROM ovh.xdsl.modem_wifis
WHERE service_name = '{{ service_name }}' -- required
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

Changes the SSID, state, visibility, channel, channel mode, security type or security key of a WiFi network.

```sql
UPDATE ovh.xdsl.modem_wifis
SET 
ssid = '{{ ssid }}',
ssid_advertisement_enabled = {{ ssid_advertisement_enabled }},
channel = {{ channel }},
channel_mode = '{{ channel_mode }}',
enabled = {{ enabled }},
security_key = '{{ security_key }}',
security_type = '{{ security_type }}'
WHERE 
service_name = '{{ service_name }}' --required
AND wifi_name = '{{ wifi_name }}' --required;
```
</TabItem>
</Tabs>
