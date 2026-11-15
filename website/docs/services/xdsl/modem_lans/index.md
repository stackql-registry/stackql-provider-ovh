--- 
title: modem_lans
hide_title: false
hide_table_of_contents: false
keywords:
  - modem_lans
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

Creates, updates, deletes, gets or lists a <code>modem_lans</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="modem_lans" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.xdsl.modem_lans" /></td></tr>
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
    <td><CopyableCode code="lan_name" /></td>
    <td><code>string</code></td>
    <td>Name of the LAN (wire: lanName)</td>
</tr>
<tr>
    <td><CopyableCode code="addressing_type" /></td>
    <td><code>string</code></td>
    <td>How the modem gets its LAN IP Address (DHCP, Static) (wire: addressingType)</td>
</tr>
<tr>
    <td><CopyableCode code="ip_address" /></td>
    <td><code>string (ipv4)</code></td>
    <td>IP address (e.g., 192.0.2.0) (example: 192.0.2.0) (wire: IPAddress)</td>
</tr>
<tr>
    <td><CopyableCode code="subnet_mask" /></td>
    <td><code>string (ipv4)</code></td>
    <td>IP address (e.g., 192.0.2.0) (example: 192.0.2.0) (wire: subnetMask)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

LAN Configuration of the Modem

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
    <td><CopyableCode code="lan_name" /></td>
    <td><code>string</code></td>
    <td>Name of the LAN (wire: lanName)</td>
</tr>
<tr>
    <td><CopyableCode code="addressing_type" /></td>
    <td><code>string</code></td>
    <td>How the modem gets its LAN IP Address (DHCP, Static) (wire: addressingType)</td>
</tr>
<tr>
    <td><CopyableCode code="ip_address" /></td>
    <td><code>string (ipv4)</code></td>
    <td>IP address (e.g., 192.0.2.0) (example: 192.0.2.0) (wire: IPAddress)</td>
</tr>
<tr>
    <td><CopyableCode code="subnet_mask" /></td>
    <td><code>string (ipv4)</code></td>
    <td>IP address (e.g., 192.0.2.0) (example: 192.0.2.0) (wire: subnetMask)</td>
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
    <td><a href="#parameter-lan_name"><code>lan_name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Returns the IP address, subnet mask and addressing type of a LAN of the modem.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>Returns the names of the LANs configured on the modem of the access.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-lan_name"><code>lan_name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Changes the IP address, subnet mask and addressing type of a LAN of the modem.</td>
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
<tr id="parameter-lan_name">
    <td><CopyableCode code="lan_name" /></td>
    <td><code>string</code></td>
    <td>Lan name (wire: lanName)</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
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

Returns the IP address, subnet mask and addressing type of a LAN of the modem.

```sql
SELECT
task_id,
lan_name,
addressing_type,
ip_address,
subnet_mask
FROM ovh.xdsl.modem_lans
WHERE lan_name = '{{ lan_name }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns the names of the LANs configured on the modem of the access.

```sql
SELECT
task_id,
lan_name,
addressing_type,
ip_address,
subnet_mask
FROM ovh.xdsl.modem_lans
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

Changes the IP address, subnet mask and addressing type of a LAN of the modem.

```sql
UPDATE ovh.xdsl.modem_lans
SET 
ip_address = '{{ ip_address }}',
addressing_type = '{{ addressing_type }}',
subnet_mask = '{{ subnet_mask }}'
WHERE 
lan_name = '{{ lan_name }}' --required
AND service_name = '{{ service_name }}' --required;
```
</TabItem>
</Tabs>
