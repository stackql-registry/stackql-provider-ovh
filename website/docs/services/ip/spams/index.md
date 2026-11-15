--- 
title: spams
hide_title: false
hide_table_of_contents: false
keywords:
  - spams
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

Creates, updates, deletes, gets or lists a <code>spams</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="spams" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.ip.spams" /></td></tr>
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
    <td><CopyableCode code="date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last date the ip was blocked</td>
</tr>
<tr>
    <td><CopyableCode code="ip_spamming" /></td>
    <td><code>string (ipv4)</code></td>
    <td>IP address which is sending spam (example: 192.0.2.0) (wire: ipSpamming)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Current state of the ip (blockedForSpam, unblocked, unblocking)</td>
</tr>
<tr>
    <td><CopyableCode code="time" /></td>
    <td><code>integer</code></td>
    <td>Time (in seconds) while the IP will be blocked</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Your IP spam stats

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
    <td><CopyableCode code="date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last date the ip was blocked</td>
</tr>
<tr>
    <td><CopyableCode code="ip_spamming" /></td>
    <td><code>string (ipv4)</code></td>
    <td>IP address which is sending spam (example: 192.0.2.0) (wire: ipSpamming)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Current state of the ip (blockedForSpam, unblocked, unblocking)</td>
</tr>
<tr>
    <td><CopyableCode code="time" /></td>
    <td><code>integer</code></td>
    <td>Time (in seconds) while the IP will be blocked</td>
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
    <td><a href="#parameter-ip"><code>ip</code></a>, <a href="#parameter-ip_spamming"><code>ip_spamming</code></a></td>
    <td></td>
    <td>Get a spam block. Returns the last block date, the state, and how long, in seconds, the address stays blocked.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-ip"><code>ip</code></a></td>
    <td><a href="#parameter-state"><code>state</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List spam blocks. Returns the addresses of the block blocked for sending spam, filterable by state: blockedForSpam, unblocked or unblocking.</td>
</tr>
<tr>
    <td><a href="#unblock"><CopyableCode code="unblock" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-ip"><code>ip</code></a>, <a href="#parameter-ipSpamming"><code>ipSpamming</code></a></td>
    <td></td>
    <td>Lift a spam block. Releases the address from the anti-spam system, and returns the spam block of the address.</td>
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
<tr id="parameter-ipSpamming">
    <td><CopyableCode code="ipSpamming" /></td>
    <td><code>string (ipv4)</code></td>
    <td>IP address which is sending spam</td>
</tr>
<tr id="parameter-ip_spamming">
    <td><CopyableCode code="ip_spamming" /></td>
    <td><code>string (ipv4)</code></td>
    <td>IP address which is sending spam (wire: ipSpamming)</td>
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

Get a spam block. Returns the last block date, the state, and how long, in seconds, the address stays blocked.

```sql
SELECT
date,
ip_spamming,
state,
time
FROM ovh.ip.spams
WHERE ip = '{{ ip }}' -- required
AND ip_spamming = '{{ ip_spamming }}' -- required
;
```
</TabItem>
<TabItem value="list">

List spam blocks. Returns the addresses of the block blocked for sending spam, filterable by state: blockedForSpam, unblocked or unblocking.

```sql
SELECT
date,
ip_spamming,
state,
time
FROM ovh.ip.spams
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

Lift a spam block. Releases the address from the anti-spam system, and returns the spam block of the address.

```sql
EXEC ovh.ip.spams.unblock 
@ip='{{ ip }}' --required, 
@ipSpamming='{{ ipSpamming }}' --required
;
```
</TabItem>
</Tabs>
