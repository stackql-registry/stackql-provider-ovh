--- 
title: mitigations
hide_title: false
hide_table_of_contents: false
keywords:
  - mitigations
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

Creates, updates, deletes, gets or lists a <code>mitigations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="mitigations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.ip.mitigations" /></td></tr>
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
    <td><CopyableCode code="auto" /></td>
    <td><code>boolean</code></td>
    <td>Set on true if your ip is on auto-mitigation</td>
</tr>
<tr>
    <td><CopyableCode code="ip_on_mitigation" /></td>
    <td><code>string (ipv4)</code></td>
    <td>IPv4 address (e.g., 192.0.2.0) (example: 192.0.2.0) (wire: ipOnMitigation)</td>
</tr>
<tr>
    <td><CopyableCode code="permanent" /></td>
    <td><code>boolean</code></td>
    <td>DEPRECATED: this field is kept for backward compatibility of the API, changing its value has no operational impact</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Current state of your ip on mitigation (creationPending, ok, removalPending)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Your IP on mitigation

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
    <td><CopyableCode code="auto" /></td>
    <td><code>boolean</code></td>
    <td>Set on true if your ip is on auto-mitigation</td>
</tr>
<tr>
    <td><CopyableCode code="ip_on_mitigation" /></td>
    <td><code>string (ipv4)</code></td>
    <td>IPv4 address (e.g., 192.0.2.0) (example: 192.0.2.0) (wire: ipOnMitigation)</td>
</tr>
<tr>
    <td><CopyableCode code="permanent" /></td>
    <td><code>boolean</code></td>
    <td>DEPRECATED: this field is kept for backward compatibility of the API, changing its value has no operational impact</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Current state of your ip on mitigation (creationPending, ok, removalPending)</td>
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
    <td><a href="#parameter-ip"><code>ip</code></a>, <a href="#parameter-ip_on_mitigation"><code>ip_on_mitigation</code></a></td>
    <td></td>
    <td>Get a mitigation entry. Returns whether a given IP address of the block is under VAC auto-mitigation, and its state: creationPending, ok or removalPending.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-ip"><code>ip</code></a></td>
    <td><a href="#parameter-auto"><code>auto</code></a>, <a href="#parameter-state"><code>state</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List mitigation entries. Returns the IP addresses of the block that have a VAC DDoS mitigation entry. Filterable by state or auto-mitigation.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-ip"><code>ip</code></a>, <a href="#parameter-ip_on_mitigation"><code>ip_on_mitigation</code></a></td>
    <td></td>
    <td>Create a mitigation entry. Creates a VAC DDoS mitigation entry for an IP address of the block. No longer needed: entries are created automatically during an attack.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-ip"><code>ip</code></a>, <a href="#parameter-ip_on_mitigation"><code>ip_on_mitigation</code></a></td>
    <td></td>
    <td>Update a mitigation entry. Changes the permanent flag of the entry, kept only for backward compatibility: the change has no operational impact. (Deprecated, will be removed)</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-ip"><code>ip</code></a>, <a href="#parameter-ip_on_mitigation"><code>ip_on_mitigation</code></a></td>
    <td></td>
    <td>Delete a mitigation entry. Removes a given IP address of the block from VAC mitigation, and returns its mitigation entry with its state.</td>
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
<tr id="parameter-ip_on_mitigation">
    <td><CopyableCode code="ip_on_mitigation" /></td>
    <td><code>string (ipv4)</code></td>
    <td> (wire: ipOnMitigation)</td>
</tr>
<tr id="parameter-auto">
    <td><CopyableCode code="auto" /></td>
    <td><code>boolean</code></td>
    <td>Filter the value of auto property (=)</td>
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

Get a mitigation entry. Returns whether a given IP address of the block is under VAC auto-mitigation, and its state: creationPending, ok or removalPending.

```sql
SELECT
auto,
ip_on_mitigation,
permanent,
state
FROM ovh.ip.mitigations
WHERE ip = '{{ ip }}' -- required
AND ip_on_mitigation = '{{ ip_on_mitigation }}' -- required
;
```
</TabItem>
<TabItem value="list">

List mitigation entries. Returns the IP addresses of the block that have a VAC DDoS mitigation entry. Filterable by state or auto-mitigation.

```sql
SELECT
auto,
ip_on_mitigation,
permanent,
state
FROM ovh.ip.mitigations
WHERE ip = '{{ ip }}' -- required
AND auto = '{{ auto }}'
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

Create a mitigation entry. Creates a VAC DDoS mitigation entry for an IP address of the block. No longer needed: entries are created automatically during an attack.

```sql
INSERT INTO ovh.ip.mitigations (
ip_on_mitigation,
ip
)
SELECT 
'{{ ip_on_mitigation }}' /* required */,
'{{ ip }}'
RETURNING
auto,
ip_on_mitigation,
permanent,
state
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: mitigations
  props:
    - name: ip
      value: "{{ ip }}"
      description: Required parameter for the mitigations resource.
    - name: ip_on_mitigation
      value: "{{ ip_on_mitigation }}"
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

Update a mitigation entry. Changes the permanent flag of the entry, kept only for backward compatibility: the change has no operational impact. (Deprecated, will be removed)

```sql
UPDATE ovh.ip.mitigations
SET 
permanent = {{ permanent }}
WHERE 
ip = '{{ ip }}' --required
AND ip_on_mitigation = '{{ ip_on_mitigation }}' --required;
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

Delete a mitigation entry. Removes a given IP address of the block from VAC mitigation, and returns its mitigation entry with its state.

```sql
DELETE FROM ovh.ip.mitigations
WHERE ip = '{{ ip }}' --required
AND ip_on_mitigation = '{{ ip_on_mitigation }}' --required
;
```
</TabItem>
</Tabs>
