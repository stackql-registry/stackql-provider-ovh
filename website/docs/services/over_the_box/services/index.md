--- 
title: services
hide_title: false
hide_table_of_contents: false
keywords:
  - services
  - over_the_box
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

Creates, updates, deletes, gets or lists a <code>services</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="services" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.over_the_box.services" /></td></tr>
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
    <td><CopyableCode code="pretty_offer_name" /></td>
    <td><code>string</code></td>
    <td>Service pretty offer name (wire: prettyOfferName)</td>
</tr>
<tr>
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>Service name (wire: serviceName)</td>
</tr>
<tr>
    <td><CopyableCode code="auto_mtu" /></td>
    <td><code>string</code></td>
    <td>Service auto MTU status (disabled, enabled) (wire: autoMTU)</td>
</tr>
<tr>
    <td><CopyableCode code="auto_upgrade" /></td>
    <td><code>boolean</code></td>
    <td>Service auto upgrade status (wire: autoUpgrade)</td>
</tr>
<tr>
    <td><CopyableCode code="bandwidth" /></td>
    <td><code>integer</code></td>
    <td>Service bandwith in bits</td>
</tr>
<tr>
    <td><CopyableCode code="configuration_mode" /></td>
    <td><code>string</code></td>
    <td>Service description (autoconfigure, local) (wire: configurationMode)</td>
</tr>
<tr>
    <td><CopyableCode code="customer_description" /></td>
    <td><code>string</code></td>
    <td>Service description (wire: customerDescription)</td>
</tr>
<tr>
    <td><CopyableCode code="graph_endpoint" /></td>
    <td><code>object</code></td>
    <td>Service metrics endpoint (wire: graphEndpoint)</td>
</tr>
<tr>
    <td><CopyableCode code="iam" /></td>
    <td><code>object</code></td>
    <td>IAM resource metadata</td>
</tr>
<tr>
    <td><CopyableCode code="ipv_6_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Service IPv6 status (wire: ipv6Enabled)</td>
</tr>
<tr>
    <td><CopyableCode code="offer" /></td>
    <td><code>string</code></td>
    <td>Service offer</td>
</tr>
<tr>
    <td><CopyableCode code="operation_mode" /></td>
    <td><code>string</code></td>
    <td>Service operation mode options (overthebox, overthebox-legacy, wireguard) (wire: operationMode)</td>
</tr>
<tr>
    <td><CopyableCode code="release_channel" /></td>
    <td><code>string</code></td>
    <td>Service release channel (wire: releaseChannel)</td>
</tr>
<tr>
    <td><CopyableCode code="socks_proxy_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Service socks proxy status (wire: SOCKSProxyEnabled)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Service status (active, creating, deleted, suspended, toCreate, toDelete)</td>
</tr>
<tr>
    <td><CopyableCode code="tunnel_mode" /></td>
    <td><code>string</code></td>
    <td>Service tunnel mode options (glorytun, glorytun_hybrid, glorytun_mud, wireguard) (wire: tunnelMode)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Service details

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
    <td><CopyableCode code="pretty_offer_name" /></td>
    <td><code>string</code></td>
    <td>Service pretty offer name (wire: prettyOfferName)</td>
</tr>
<tr>
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>Service name (wire: serviceName)</td>
</tr>
<tr>
    <td><CopyableCode code="auto_mtu" /></td>
    <td><code>string</code></td>
    <td>Service auto MTU status (disabled, enabled) (wire: autoMTU)</td>
</tr>
<tr>
    <td><CopyableCode code="auto_upgrade" /></td>
    <td><code>boolean</code></td>
    <td>Service auto upgrade status (wire: autoUpgrade)</td>
</tr>
<tr>
    <td><CopyableCode code="bandwidth" /></td>
    <td><code>integer</code></td>
    <td>Service bandwith in bits</td>
</tr>
<tr>
    <td><CopyableCode code="configuration_mode" /></td>
    <td><code>string</code></td>
    <td>Service description (autoconfigure, local) (wire: configurationMode)</td>
</tr>
<tr>
    <td><CopyableCode code="customer_description" /></td>
    <td><code>string</code></td>
    <td>Service description (wire: customerDescription)</td>
</tr>
<tr>
    <td><CopyableCode code="graph_endpoint" /></td>
    <td><code>object</code></td>
    <td>Service metrics endpoint (wire: graphEndpoint)</td>
</tr>
<tr>
    <td><CopyableCode code="iam" /></td>
    <td><code>object</code></td>
    <td>IAM resource metadata</td>
</tr>
<tr>
    <td><CopyableCode code="ipv_6_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Service IPv6 status (wire: ipv6Enabled)</td>
</tr>
<tr>
    <td><CopyableCode code="offer" /></td>
    <td><code>string</code></td>
    <td>Service offer</td>
</tr>
<tr>
    <td><CopyableCode code="operation_mode" /></td>
    <td><code>string</code></td>
    <td>Service operation mode options (overthebox, overthebox-legacy, wireguard) (wire: operationMode)</td>
</tr>
<tr>
    <td><CopyableCode code="release_channel" /></td>
    <td><code>string</code></td>
    <td>Service release channel (wire: releaseChannel)</td>
</tr>
<tr>
    <td><CopyableCode code="socks_proxy_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Service socks proxy status (wire: SOCKSProxyEnabled)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Service status (active, creating, deleted, suspended, toCreate, toDelete)</td>
</tr>
<tr>
    <td><CopyableCode code="tunnel_mode" /></td>
    <td><code>string</code></td>
    <td>Service tunnel mode options (glorytun, glorytun_hybrid, glorytun_mud, wireguard) (wire: tunnelMode)</td>
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
    <td>Returns the service status, offer and bandwidth, its operation, tunnel and configuration modes, release channel, IPv6, autoMTU and auto upgrade settings, and the endpoint to query its metrics.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-iam_tags"><code>iam_tags</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>Returns the names of the OverTheBox services of the account. Each name is the serviceName used by the other OverTheBox calls.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Update an OverTheBox service. Changes the settings that can be modified: the customer description, the release channel and the device auto upgrade.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Resiliate an OverTheBox service. Requests the resiliation of the service. Cancel it with cancelResiliation while it is not effective.</td>
</tr>
<tr>
    <td><a href="#devices"><CopyableCode code="devices" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td></td>
    <td></td>
    <td>List the devices available for registration. Returns the devices seen from the IP address of the call, with their ID, last seen date and whether each one is already activated.</td>
</tr>
<tr>
    <td><a href="#update_auto_mtu"><CopyableCode code="update_auto_mtu" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-mtuAuto"><code>mtuAuto</code></a></td>
    <td></td>
    <td>Update the autoMTU of an OverTheBox service. Enables or disables the automatic detection of the MTU on the service.</td>
</tr>
<tr>
    <td><a href="#cancel_resiliation"><CopyableCode code="cancel_resiliation" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Cancel the resiliation of an OverTheBox service. Cancels the resiliation requested on the service, which stays active.</td>
</tr>
<tr>
    <td><a href="#change_contact"><CopyableCode code="change_contact" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Change service contacts. Starts a procedure to change the admin, tech or billing contact of the service.</td>
</tr>
<tr>
    <td><a href="#update_ipv6"><CopyableCode code="update_ipv6" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-enabled"><code>enabled</code></a></td>
    <td></td>
    <td>Update the IPv6 status of an OverTheBox service. Enables or disables IPv6 on the service and returns the task that performs the change. (Beta version)</td>
</tr>
<tr>
    <td><a href="#link_device"><CopyableCode code="link_device" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-deviceId"><code>deviceId</code></a></td>
    <td></td>
    <td>Link a device to an OverTheBox service. Associates the device, identified by its ID, with the service.</td>
</tr>
<tr>
    <td><a href="#link_hardware"><CopyableCode code="link_hardware" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-hardwareName"><code>hardwareName</code></a></td>
    <td></td>
    <td>Link a hardware to an OverTheBox service. Associates one of the available hardware of the account, identified by its name, with the service.</td>
</tr>
<tr>
    <td><a href="#log_url"><CopyableCode code="log_url" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-kind"><code>kind</code></a></td>
    <td></td>
    <td>Generates a temporary URL to read the logs of one kind. The URL expires.</td>
</tr>
<tr>
    <td><a href="#migration_change_offers"><CopyableCode code="migration_change_offers" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-offer"><code>offer</code></a></td>
    <td></td>
    <td>Migrate an OverTheBox service to another offer. Creates the order to migrate to the offer, with an optional hardware and shipping contact, and returns its ID and URL.</td>
</tr>
<tr>
    <td><a href="#update_operation_mode"><CopyableCode code="update_operation_mode" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-operationMode"><code>operationMode</code></a></td>
    <td></td>
    <td>Update the operation mode of an OverTheBox service. Switches the service to one of its available operation modes and returns the task. (Beta version)</td>
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
<tr id="parameter-serviceName">
    <td><CopyableCode code="serviceName" /></td>
    <td><code>string</code></td>
    <td>The internal name of your overTheBox offer</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The internal name of your overTheBox offer (wire: serviceName)</td>
</tr>
<tr id="parameter-iam_tags">
    <td><CopyableCode code="iam_tags" /></td>
    <td><code>object</code></td>
    <td>Filter resources on IAM tags (wire: iamTags)</td>
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

Returns the service status, offer and bandwidth, its operation, tunnel and configuration modes, release channel, IPv6, autoMTU and auto upgrade settings, and the endpoint to query its metrics.

```sql
SELECT
pretty_offer_name,
service_name,
auto_mtu,
auto_upgrade,
bandwidth,
configuration_mode,
customer_description,
graph_endpoint,
iam,
ipv_6_enabled,
offer,
operation_mode,
release_channel,
socks_proxy_enabled,
status,
tunnel_mode
FROM ovh.over_the_box.services
WHERE service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns the names of the OverTheBox services of the account. Each name is the serviceName used by the other OverTheBox calls.

```sql
SELECT
pretty_offer_name,
service_name,
auto_mtu,
auto_upgrade,
bandwidth,
configuration_mode,
customer_description,
graph_endpoint,
iam,
ipv_6_enabled,
offer,
operation_mode,
release_channel,
socks_proxy_enabled,
status,
tunnel_mode
FROM ovh.over_the_box.services
WHERE iam_tags = '{{ iam_tags }}'
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

Update an OverTheBox service. Changes the settings that can be modified: the customer description, the release channel and the device auto upgrade.

```sql
UPDATE ovh.over_the_box.services
SET 
auto_upgrade = {{ auto_upgrade }},
customer_description = '{{ customer_description }}',
release_channel = '{{ release_channel }}'
WHERE 
service_name = '{{ service_name }}' --required;
```
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

Resiliate an OverTheBox service. Requests the resiliation of the service. Cancel it with cancelResiliation while it is not effective.

```sql
DELETE FROM ovh.over_the_box.services
WHERE service_name = '{{ service_name }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="devices"
    values={[
        { label: 'devices', value: 'devices' },
        { label: 'update_auto_mtu', value: 'update_auto_mtu' },
        { label: 'cancel_resiliation', value: 'cancel_resiliation' },
        { label: 'change_contact', value: 'change_contact' },
        { label: 'update_ipv6', value: 'update_ipv6' },
        { label: 'link_device', value: 'link_device' },
        { label: 'link_hardware', value: 'link_hardware' },
        { label: 'log_url', value: 'log_url' },
        { label: 'migration_change_offers', value: 'migration_change_offers' },
        { label: 'update_operation_mode', value: 'update_operation_mode' }
    ]}
>
<TabItem value="devices">

List the devices available for registration. Returns the devices seen from the IP address of the call, with their ID, last seen date and whether each one is already activated.

```sql
EXEC ovh.over_the_box.services.devices 
;
```
</TabItem>
<TabItem value="update_auto_mtu">

Update the autoMTU of an OverTheBox service. Enables or disables the automatic detection of the MTU on the service.

```sql
EXEC ovh.over_the_box.services.update_auto_mtu 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"mtuAuto": "{{ mtuAuto }}"
}'
;
```
</TabItem>
<TabItem value="cancel_resiliation">

Cancel the resiliation of an OverTheBox service. Cancels the resiliation requested on the service, which stays active.

```sql
EXEC ovh.over_the_box.services.cancel_resiliation 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
<TabItem value="change_contact">

Change service contacts. Starts a procedure to change the admin, tech or billing contact of the service.

```sql
EXEC ovh.over_the_box.services.change_contact 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"contactAdmin": "{{ contactAdmin }}", 
"contactBilling": "{{ contactBilling }}", 
"contactTech": "{{ contactTech }}"
}'
;
```
</TabItem>
<TabItem value="update_ipv6">

Update the IPv6 status of an OverTheBox service. Enables or disables IPv6 on the service and returns the task that performs the change. (Beta version)

```sql
EXEC ovh.over_the_box.services.update_ipv6 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"enabled": {{ enabled }}
}'
;
```
</TabItem>
<TabItem value="link_device">

Link a device to an OverTheBox service. Associates the device, identified by its ID, with the service.

```sql
EXEC ovh.over_the_box.services.link_device 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"deviceId": "{{ deviceId }}"
}'
;
```
</TabItem>
<TabItem value="link_hardware">

Link a hardware to an OverTheBox service. Associates one of the available hardware of the account, identified by its name, with the service.

```sql
EXEC ovh.over_the_box.services.link_hardware 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"hardwareName": "{{ hardwareName }}"
}'
;
```
</TabItem>
<TabItem value="log_url">

Generates a temporary URL to read the logs of one kind. The URL expires.

```sql
EXEC ovh.over_the_box.services.log_url 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"kind": "{{ kind }}"
}'
;
```
</TabItem>
<TabItem value="migration_change_offers">

Migrate an OverTheBox service to another offer. Creates the order to migrate to the offer, with an optional hardware and shipping contact, and returns its ID and URL.

```sql
EXEC ovh.over_the_box.services.migration_change_offers 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"hardwareName": "{{ hardwareName }}", 
"offer": "{{ offer }}", 
"shippingContactID": "{{ shippingContactID }}"
}'
;
```
</TabItem>
<TabItem value="update_operation_mode">

Update the operation mode of an OverTheBox service. Switches the service to one of its available operation modes and returns the task. (Beta version)

```sql
EXEC ovh.over_the_box.services.update_operation_mode 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"operationMode": "{{ operationMode }}"
}'
;
```
</TabItem>
</Tabs>
