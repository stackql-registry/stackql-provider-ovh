--- 
title: arps
hide_title: false
hide_table_of_contents: false
keywords:
  - arps
  - ip
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

Creates, updates, deletes, gets or lists an <code>arps</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="arps" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.ip.arps" /></td></tr>
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
    <td><CopyableCode code="blocked_since" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last blocking date (wire: blockedSince)</td>
</tr>
<tr>
    <td><CopyableCode code="ip_blocked" /></td>
    <td><code>string (ipv4)</code></td>
    <td>your IP (example: 192.0.2.0) (wire: ipBlocked)</td>
</tr>
<tr>
    <td><CopyableCode code="logs" /></td>
    <td><code>string</code></td>
    <td>ARP logs</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>this IP address state (blocked, unblocking)</td>
</tr>
<tr>
    <td><CopyableCode code="time" /></td>
    <td><code>integer</code></td>
    <td>Time (in seconds) remaining before you can request your IP to be unblocked</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

ARP blocked IP information

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
    <td><CopyableCode code="blocked_since" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last blocking date (wire: blockedSince)</td>
</tr>
<tr>
    <td><CopyableCode code="ip_blocked" /></td>
    <td><code>string (ipv4)</code></td>
    <td>your IP (example: 192.0.2.0) (wire: ipBlocked)</td>
</tr>
<tr>
    <td><CopyableCode code="logs" /></td>
    <td><code>string</code></td>
    <td>ARP logs</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>this IP address state (blocked, unblocking)</td>
</tr>
<tr>
    <td><CopyableCode code="time" /></td>
    <td><code>integer</code></td>
    <td>Time (in seconds) remaining before you can request your IP to be unblocked</td>
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
    <td><a href="#parameter-ip"><code>ip</code></a>, <a href="#parameter-ip_blocked"><code>ip_blocked</code></a></td>
    <td></td>
    <td>Get an ARP block. Returns the block date, ARP logs, and the seconds left before you can ask to unblock.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-ip"><code>ip</code></a></td>
    <td><a href="#parameter-state"><code>state</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List ARP blocks. Returns the addresses of the block blocked for ARP spoofing, filterable by state: blocked or unblocking.</td>
</tr>
<tr>
    <td><a href="#unblock"><CopyableCode code="unblock" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-ip"><code>ip</code></a>, <a href="#parameter-ipBlocked"><code>ipBlocked</code></a></td>
    <td></td>
    <td>Lift an ARP block. Unblocks the address once the waiting time is over. Get the ARP block to see the seconds left.</td>
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
<tr id="parameter-ip">
    <td><CopyableCode code="ip" /></td>
    <td><code>string (ip-block)</code></td>
    <td></td>
</tr>
<tr id="parameter-ipBlocked">
    <td><CopyableCode code="ipBlocked" /></td>
    <td><code>string (ipv4)</code></td>
    <td>your IP</td>
</tr>
<tr id="parameter-ip_blocked">
    <td><CopyableCode code="ip_blocked" /></td>
    <td><code>string (ipv4)</code></td>
    <td>your IP (wire: ipBlocked)</td>
</tr>
<tr id="parameter-state">
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Filter the value of state property (=)</td>
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

Get an ARP block. Returns the block date, ARP logs, and the seconds left before you can ask to unblock.

```sql
SELECT
blocked_since,
ip_blocked,
logs,
state,
time
FROM ovh.ip.arps
WHERE ip = '{{ ip }}' -- required
AND ip_blocked = '{{ ip_blocked }}' -- required
;
```
</TabItem>
<TabItem value="list">

List ARP blocks. Returns the addresses of the block blocked for ARP spoofing, filterable by state: blocked or unblocking.

```sql
SELECT
blocked_since,
ip_blocked,
logs,
state,
time
FROM ovh.ip.arps
WHERE ip = '{{ ip }}' -- required
AND state = '{{ state }}'
AND x_pagination_mode = '{{ x_pagination_mode }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="unblock"
    values={[
        { label: 'unblock', value: 'unblock' }
    ]}
>
<TabItem value="unblock">

Lift an ARP block. Unblocks the address once the waiting time is over. Get the ARP block to see the seconds left.

```sql
EXEC ovh.ip.arps.unblock 
@ip='{{ ip }}' --required, 
@ipBlocked='{{ ipBlocked }}' --required
;
```
</TabItem>
</Tabs>
