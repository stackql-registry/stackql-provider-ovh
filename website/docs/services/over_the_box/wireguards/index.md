--- 
title: wireguards
hide_title: false
hide_table_of_contents: false
keywords:
  - wireguards
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

Creates, updates, deletes, gets or lists a <code>wireguards</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="wireguards" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.over_the_box.wireguards" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
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
    <td><CopyableCode code="endpoint" /></td>
    <td><code>object</code></td>
    <td>Wireguard server connection endpoint</td>
</tr>
<tr>
    <td><CopyableCode code="max_peer_active" /></td>
    <td><code>integer</code></td>
    <td>Maximum peers simultaneously active (wire: maxPeerActive)</td>
</tr>
<tr>
    <td><CopyableCode code="max_peer_allowed" /></td>
    <td><code>integer</code></td>
    <td>Maximum peers simultaneously configured (wire: maxPeerAllowed)</td>
</tr>
<tr>
    <td><CopyableCode code="private_ipv_4" /></td>
    <td><code>string (ipv4-block)</code></td>
    <td>Wireguard server private IP block (example: 192.0.2.0/24) (wire: privateIpv4)</td>
</tr>
<tr>
    <td><CopyableCode code="public_key" /></td>
    <td><code>string</code></td>
    <td>Wireguard server public key (wire: publicKey)</td>
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
    <td>Returns the WireGuard server configuration: its public key, private IPv4 block, connection endpoint (IPv4 and port), and the maximum number of peers configured and simultaneously active. (Beta version)</td>
</tr>
<tr>
    <td><a href="#regenerate"><CopyableCode code="regenerate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Regenerates the key of the WireGuard server of the service, which changes the server public key the peers use. Returns the task that performs the change. (Beta version)</td>
</tr>
<tr>
    <td><a href="#reset"><CopyableCode code="reset" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Resets the WireGuard configuration of the service to its default. Returns the task that performs the reset. (Beta version)</td>
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
    <td>Service name</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>Service name (wire: serviceName)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

Returns the WireGuard server configuration: its public key, private IPv4 block, connection endpoint (IPv4 and port), and the maximum number of peers configured and simultaneously active. (Beta version)

```sql
SELECT
endpoint,
max_peer_active,
max_peer_allowed,
private_ipv_4,
public_key
FROM ovh.over_the_box.wireguards
WHERE service_name = '{{ service_name }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="regenerate"
    values={[
        { label: 'regenerate', value: 'regenerate' },
        { label: 'reset', value: 'reset' }
    ]}
>
<TabItem value="regenerate">

Regenerates the key of the WireGuard server of the service, which changes the server public key the peers use. Returns the task that performs the change. (Beta version)

```sql
EXEC ovh.over_the_box.wireguards.regenerate 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
<TabItem value="reset">

Resets the WireGuard configuration of the service to its default. Returns the task that performs the reset. (Beta version)

```sql
EXEC ovh.over_the_box.wireguards.reset 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
</Tabs>
