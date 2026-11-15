--- 
title: reverses
hide_title: false
hide_table_of_contents: false
keywords:
  - reverses
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

Creates, updates, deletes, gets or lists a <code>reverses</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="reverses" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.ip.reverses" /></td></tr>
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
    <td><CopyableCode code="ip_reverse" /></td>
    <td><code>string (ipv4)</code></td>
    <td>IP address (e.g., 192.0.2.0) (example: 192.0.2.0) (wire: ipReverse)</td>
</tr>
<tr>
    <td><CopyableCode code="reverse" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Your reverse records on IP

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
    <td><CopyableCode code="ip_reverse" /></td>
    <td><code>string (ipv4)</code></td>
    <td>IP address (e.g., 192.0.2.0) (example: 192.0.2.0) (wire: ipReverse)</td>
</tr>
<tr>
    <td><CopyableCode code="reverse" /></td>
    <td><code>string</code></td>
    <td></td>
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
    <td><a href="#parameter-ip"><code>ip</code></a>, <a href="#parameter-ip_reverse"><code>ip_reverse</code></a></td>
    <td></td>
    <td>Get a reverse. Returns the reverse DNS (PTR) name set on this address of the block, with the address itself.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-ip"><code>ip</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List reverses. Returns the addresses of the block that have a reverse DNS (PTR) record, not the reverse names themselves.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-ip"><code>ip</code></a>, <a href="#parameter-ip_reverse"><code>ip_reverse</code></a>, <a href="#parameter-reverse"><code>reverse</code></a></td>
    <td></td>
    <td>Create a reverse. Sets the reverse DNS name of one address of the block. The name must resolve to that address.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-ip"><code>ip</code></a>, <a href="#parameter-ip_reverse"><code>ip_reverse</code></a></td>
    <td></td>
    <td>Delete a reverse. Removes the reverse DNS (PTR) name set on this address of the block. The call returns no content.</td>
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
<tr id="parameter-ip_reverse">
    <td><CopyableCode code="ip_reverse" /></td>
    <td><code>string (ipv4)</code></td>
    <td> (wire: ipReverse)</td>
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

Get a reverse. Returns the reverse DNS (PTR) name set on this address of the block, with the address itself.

```sql
SELECT
ip_reverse,
reverse
FROM ovh.ip.reverses
WHERE ip = '{{ ip }}' -- required
AND ip_reverse = '{{ ip_reverse }}' -- required
;
```
</TabItem>
<TabItem value="list">

List reverses. Returns the addresses of the block that have a reverse DNS (PTR) record, not the reverse names themselves.

```sql
SELECT
ip_reverse,
reverse
FROM ovh.ip.reverses
WHERE ip = '{{ ip }}' -- required
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

Create a reverse. Sets the reverse DNS name of one address of the block. The name must resolve to that address.

```sql
INSERT INTO ovh.ip.reverses (
ip_reverse,
reverse,
ip
)
SELECT 
'{{ ip_reverse }}' /* required */,
'{{ reverse }}' /* required */,
'{{ ip }}'
RETURNING
ip_reverse,
reverse
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: reverses
  props:
    - name: ip
      value: "{{ ip }}"
      description: Required parameter for the reverses resource.
    - name: ip_reverse
      value: "{{ ip_reverse }}"
      description: |
        IP address (e.g., 192.0.2.0)
    - name: reverse
      value: "{{ reverse }}"
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

Delete a reverse. Removes the reverse DNS (PTR) name set on this address of the block. The call returns no content.

```sql
DELETE FROM ovh.ip.reverses
WHERE ip = '{{ ip }}' --required
AND ip_reverse = '{{ ip_reverse }}' --required
;
```
</TabItem>
</Tabs>
