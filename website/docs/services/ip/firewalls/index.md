--- 
title: firewalls
hide_title: false
hide_table_of_contents: false
keywords:
  - firewalls
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

Creates, updates, deletes, gets or lists a <code>firewalls</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="firewalls" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.ip.firewalls" /></td></tr>
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
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="ip_on_firewall" /></td>
    <td><code>string (ipv4)</code></td>
    <td>IPv4 address (e.g., 192.0.2.0) (example: 192.0.2.0) (wire: ipOnFirewall)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Current state of your ip on firewall (disableFirewallPending, enableFirewallPending, ok)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Your IP on firewall

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
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="ip_on_firewall" /></td>
    <td><code>string (ipv4)</code></td>
    <td>IPv4 address (e.g., 192.0.2.0) (example: 192.0.2.0) (wire: ipOnFirewall)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Current state of your ip on firewall (disableFirewallPending, enableFirewallPending, ok)</td>
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
    <td><a href="#parameter-ip"><code>ip</code></a>, <a href="#parameter-ip_on_firewall"><code>ip_on_firewall</code></a></td>
    <td></td>
    <td>Get a firewalled IP. Returns whether the firewall is enabled on this address, and its state: ok, enableFirewallPending or disableFirewallPending.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-ip"><code>ip</code></a></td>
    <td><a href="#parameter-enabled"><code>enabled</code></a>, <a href="#parameter-state"><code>state</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List firewalled IPs. Returns the addresses of the block added to the firewall, filterable by state or by whether the firewall is enabled.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-ip"><code>ip</code></a>, <a href="#parameter-ip_on_firewall"><code>ip_on_firewall</code></a></td>
    <td></td>
    <td>Create a firewalled IP. Adds one address of the block to the firewall. Turn it on with Update a firewalled IP.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-ip"><code>ip</code></a>, <a href="#parameter-ip_on_firewall"><code>ip_on_firewall</code></a></td>
    <td></td>
    <td>Update a firewalled IP. Turns the firewall on or off for this address. Its state is enableFirewallPending or disableFirewallPending until the change is applied.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-ip"><code>ip</code></a>, <a href="#parameter-ip_on_firewall"><code>ip_on_firewall</code></a></td>
    <td></td>
    <td>Delete a firewalled IP. Removes the address of the block from the firewall, together with all the rules set on it.</td>
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
<tr id="parameter-ip_on_firewall">
    <td><CopyableCode code="ip_on_firewall" /></td>
    <td><code>string (ipv4)</code></td>
    <td> (wire: ipOnFirewall)</td>
</tr>
<tr id="parameter-enabled">
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td>Filter the value of enabled property (=)</td>
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

Get a firewalled IP. Returns whether the firewall is enabled on this address, and its state: ok, enableFirewallPending or disableFirewallPending.

```sql
SELECT
enabled,
ip_on_firewall,
state
FROM ovh.ip.firewalls
WHERE ip = '{{ ip }}' -- required
AND ip_on_firewall = '{{ ip_on_firewall }}' -- required
;
```
</TabItem>
<TabItem value="list">

List firewalled IPs. Returns the addresses of the block added to the firewall, filterable by state or by whether the firewall is enabled.

```sql
SELECT
enabled,
ip_on_firewall,
state
FROM ovh.ip.firewalls
WHERE ip = '{{ ip }}' -- required
AND enabled = '{{ enabled }}'
AND state = '{{ state }}'
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

Create a firewalled IP. Adds one address of the block to the firewall. Turn it on with Update a firewalled IP.

```sql
INSERT INTO ovh.ip.firewalls (
ip_on_firewall,
ip
)
SELECT 
'{{ ip_on_firewall }}' /* required */,
'{{ ip }}'
RETURNING
enabled,
ip_on_firewall,
state
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: firewalls
  props:
    - name: ip
      value: "{{ ip }}"
      description: Required parameter for the firewalls resource.
    - name: ip_on_firewall
      value: "{{ ip_on_firewall }}"
      description: |
        IPv4 address (e.g., 192.0.2.0)
`}</CodeBlock>

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

Update a firewalled IP. Turns the firewall on or off for this address. Its state is enableFirewallPending or disableFirewallPending until the change is applied.

```sql
UPDATE ovh.ip.firewalls
SET 
enabled = {{ enabled }}
WHERE 
ip = '{{ ip }}' --required
AND ip_on_firewall = '{{ ip_on_firewall }}' --required;
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

Delete a firewalled IP. Removes the address of the block from the firewall, together with all the rules set on it.

```sql
DELETE FROM ovh.ip.firewalls
WHERE ip = '{{ ip }}' --required
AND ip_on_firewall = '{{ ip_on_firewall }}' --required
;
```
</TabItem>
</Tabs>
