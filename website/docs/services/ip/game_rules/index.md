--- 
title: game_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - game_rules
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

Creates, updates, deletes, gets or lists a <code>game_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="game_rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.ip.game_rules" /></td></tr>
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
    <td>ID of the rule</td>
</tr>
<tr>
    <td><CopyableCode code="ports" /></td>
    <td><code>object</code></td>
    <td>Start and end points (inclusive) of a range</td>
</tr>
<tr>
    <td><CopyableCode code="protocol" /></td>
    <td><code>string</code></td>
    <td>Possible values for game rule protocol (arkSurvivalAscended, arkSurvivalEvolved, arkSurvivalEvolvedV311.78+, arma, counterStrike2, fiveM, gtaMultiTheftAutoSanAndreas, gtaSanAndreasMultiplayerMod, hl2Source, minecraftBedrockWithRacknetCookie, minecraftJava, minecraftPocketEdition, minecraftQuery, mumble, other, rust, teamspeak2, teamspeak3, trackmaniaShootmania, valheim)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Current state of your rule (createRulePending, deleteRulePending, ok)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Rule on ip:ports

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
    <td>ID of the rule</td>
</tr>
<tr>
    <td><CopyableCode code="ports" /></td>
    <td><code>object</code></td>
    <td>Start and end points (inclusive) of a range</td>
</tr>
<tr>
    <td><CopyableCode code="protocol" /></td>
    <td><code>string</code></td>
    <td>Possible values for game rule protocol (arkSurvivalAscended, arkSurvivalEvolved, arkSurvivalEvolvedV311.78+, arma, counterStrike2, fiveM, gtaMultiTheftAutoSanAndreas, gtaSanAndreasMultiplayerMod, hl2Source, minecraftBedrockWithRacknetCookie, minecraftJava, minecraftPocketEdition, minecraftQuery, mumble, other, rust, teamspeak2, teamspeak3, trackmaniaShootmania, valheim)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Current state of your rule (createRulePending, deleteRulePending, ok)</td>
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
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-ip"><code>ip</code></a>, <a href="#parameter-ip_on_game"><code>ip_on_game</code></a></td>
    <td></td>
    <td>Get a protection rule. Returns the UDP port range, the protocol running behind it and the state of the protection rule.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-ip"><code>ip</code></a>, <a href="#parameter-ip_on_game"><code>ip_on_game</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List protection rules. Returns the identifiers of the protection rules declared on the IP. Their number is limited by maxRules on the IP.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-ip"><code>ip</code></a>, <a href="#parameter-ip_on_game"><code>ip_on_game</code></a>, <a href="#parameter-ports"><code>ports</code></a>, <a href="#parameter-protocol"><code>protocol</code></a></td>
    <td></td>
    <td>Create a protection rule. Declares the Game DDoS protection rule: L7 protocol and UDP port range for a given IP address. Valid protocols are listed in supportedProtocols and the number of rules is limited by maxRules.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-ip"><code>ip</code></a>, <a href="#parameter-ip_on_game"><code>ip_on_game</code></a></td>
    <td></td>
    <td>Delete a protection rule. Deletes the protection rule from the IP, and returns the deleted rule with its state.</td>
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
    <td>ID of the rule</td>
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

Get a protection rule. Returns the UDP port range, the protocol running behind it and the state of the protection rule.

```sql
SELECT
id,
ports,
protocol,
state
FROM ovh.ip.game_rules
WHERE id = '{{ id }}' -- required
AND ip = '{{ ip }}' -- required
AND ip_on_game = '{{ ip_on_game }}' -- required
;
```
</TabItem>
<TabItem value="list">

List protection rules. Returns the identifiers of the protection rules declared on the IP. Their number is limited by maxRules on the IP.

```sql
SELECT
id,
ports,
protocol,
state
FROM ovh.ip.game_rules
WHERE ip = '{{ ip }}' -- required
AND ip_on_game = '{{ ip_on_game }}' -- required
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

Create a protection rule. Declares the Game DDoS protection rule: L7 protocol and UDP port range for a given IP address. Valid protocols are listed in supportedProtocols and the number of rules is limited by maxRules.

```sql
INSERT INTO ovh.ip.game_rules (
ports,
protocol,
ip,
ip_on_game
)
SELECT 
'{{ ports }}' /* required */,
'{{ protocol }}' /* required */,
'{{ ip }}',
'{{ ip_on_game }}'
RETURNING
id,
ports,
protocol,
state
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: game_rules
  props:
    - name: ip
      value: "{{ ip }}"
      description: Required parameter for the game_rules resource.
    - name: ip_on_game
      value: "{{ ip_on_game }}"
      description: Required parameter for the game_rules resource.
    - name: ports
      description: |
        The UDP port range to apply the rule on
      value:
        from: {{ from }}
        to: {{ to }}
    - name: protocol
      value: "{{ protocol }}"
      description: |
        Possible values for game rule protocol
      valid_values: ['arkSurvivalAscended', 'arkSurvivalEvolved', 'arkSurvivalEvolvedV311.78+', 'arma', 'counterStrike2', 'fiveM', 'gtaMultiTheftAutoSanAndreas', 'gtaSanAndreasMultiplayerMod', 'hl2Source', 'minecraftBedrockWithRacknetCookie', 'minecraftJava', 'minecraftPocketEdition', 'minecraftQuery', 'mumble', 'other', 'rust', 'teamspeak2', 'teamspeak3', 'trackmaniaShootmania', 'valheim']
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

Delete a protection rule. Deletes the protection rule from the IP, and returns the deleted rule with its state.

```sql
DELETE FROM ovh.ip.game_rules
WHERE id = '{{ id }}' --required
AND ip = '{{ ip }}' --required
AND ip_on_game = '{{ ip_on_game }}' --required
;
```
</TabItem>
</Tabs>
