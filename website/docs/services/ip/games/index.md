--- 
title: games
hide_title: false
hide_table_of_contents: false
keywords:
  - games
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

Creates, updates, deletes, gets or lists a <code>games</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="games" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.ip.games" /></td></tr>
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
    <td><CopyableCode code="firewall_mode_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Firewall mode : in UDP, only allow traffic matching your rules (as well as established traffic). If not enabled, traffic to ports not defined in your rules will be permited. TCP traffic is unaffected by this. (wire: firewallModeEnabled)</td>
</tr>
<tr>
    <td><CopyableCode code="ip_on_game" /></td>
    <td><code>string (ipv4)</code></td>
    <td>IPv4 address (e.g., 192.0.2.0) (example: 192.0.2.0) (wire: ipOnGame)</td>
</tr>
<tr>
    <td><CopyableCode code="max_rules" /></td>
    <td><code>integer</code></td>
    <td>Maximum number of rules for this IP (wire: maxRules)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Possible values for udp mitigation rule state (cleanRulesPending, firewallModeDisablePending, firewallModeEnablePending, ok)</td>
</tr>
<tr>
    <td><CopyableCode code="supported_protocols" /></td>
    <td><code>array</code></td>
    <td>List of protocols available on this IP (wire: supportedProtocols)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

GAME Anti-DDoS

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
    <td><CopyableCode code="firewall_mode_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Firewall mode : in UDP, only allow traffic matching your rules (as well as established traffic). If not enabled, traffic to ports not defined in your rules will be permited. TCP traffic is unaffected by this. (wire: firewallModeEnabled)</td>
</tr>
<tr>
    <td><CopyableCode code="ip_on_game" /></td>
    <td><code>string (ipv4)</code></td>
    <td>IPv4 address (e.g., 192.0.2.0) (example: 192.0.2.0) (wire: ipOnGame)</td>
</tr>
<tr>
    <td><CopyableCode code="max_rules" /></td>
    <td><code>integer</code></td>
    <td>Maximum number of rules for this IP (wire: maxRules)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Possible values for udp mitigation rule state (cleanRulesPending, firewallModeDisablePending, firewallModeEnablePending, ok)</td>
</tr>
<tr>
    <td><CopyableCode code="supported_protocols" /></td>
    <td><code>array</code></td>
    <td>List of protocols available on this IP (wire: supportedProtocols)</td>
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
    <td><a href="#parameter-ip"><code>ip</code></a>, <a href="#parameter-ip_on_game"><code>ip_on_game</code></a></td>
    <td></td>
    <td>Get an IP under protection. Returns the firewall mode, the supported game protocols, the maximum number of rules and the state of the Game DDoS protection.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-ip"><code>ip</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List IPs under protection. Returns a list of all IP addresses from a given IP block object that are protected by Game DDoS protection.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-ip"><code>ip</code></a>, <a href="#parameter-ip_on_game"><code>ip_on_game</code></a></td>
    <td></td>
    <td>Update the firewall mode. Enables or disables the firewall mode of the IP. When enabled, UDP traffic that matches no declared rule is dropped. TCP traffic is not affected.</td>
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
<tr id="parameter-ip_on_game">
    <td><CopyableCode code="ip_on_game" /></td>
    <td><code>string (ipv4)</code></td>
    <td> (wire: ipOnGame)</td>
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

Get an IP under protection. Returns the firewall mode, the supported game protocols, the maximum number of rules and the state of the Game DDoS protection.

```sql
SELECT
firewall_mode_enabled,
ip_on_game,
max_rules,
state,
supported_protocols
FROM ovh.ip.games
WHERE ip = '{{ ip }}' -- required
AND ip_on_game = '{{ ip_on_game }}' -- required
;
```
</TabItem>
<TabItem value="list">

List IPs under protection. Returns a list of all IP addresses from a given IP block object that are protected by Game DDoS protection.

```sql
SELECT
firewall_mode_enabled,
ip_on_game,
max_rules,
state,
supported_protocols
FROM ovh.ip.games
WHERE ip = '{{ ip }}' -- required
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

Update the firewall mode. Enables or disables the firewall mode of the IP. When enabled, UDP traffic that matches no declared rule is dropped. TCP traffic is not affected.

```sql
UPDATE ovh.ip.games
SET 
firewall_mode_enabled = {{ firewall_mode_enabled }}
WHERE 
ip = '{{ ip }}' --required
AND ip_on_game = '{{ ip_on_game }}' --required;
```
</TabItem>
</Tabs>
