--- 
title: dedicated_servers
hide_title: false
hide_table_of_contents: false
keywords:
  - dedicated_servers
  - vrack
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

Creates, updates, deletes, gets or lists a <code>dedicated_servers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="dedicated_servers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.vrack.dedicated_servers" /></td></tr>
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
    <td><CopyableCode code="dedicated_server" /></td>
    <td><code>string</code></td>
    <td>Dedicated Server (wire: dedicatedServer)</td>
</tr>
<tr>
    <td><CopyableCode code="vrack" /></td>
    <td><code>string</code></td>
    <td>vrack name</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

vrack dedicated server interfaces (LEGACY)

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
    <td><CopyableCode code="dedicated_server" /></td>
    <td><code>string</code></td>
    <td>Dedicated Server (wire: dedicatedServer)</td>
</tr>
<tr>
    <td><CopyableCode code="vrack" /></td>
    <td><code>string</code></td>
    <td>vrack name</td>
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
    <td><a href="#parameter-dedicated_server"><code>dedicated_server</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get a server link (legacy). Returns the attached server and its vRack. This is the legacy whole-server link, not an interface link.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List servers (legacy). Returns the dedicated servers attached as a whole to the vRack, in the legacy mode. Attaching by interface replaces it.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-dedicated_server"><code>dedicated_server</code></a></td>
    <td></td>
    <td>Attach a server (legacy). Attaches a whole dedicated server to the vRack, in the legacy mode. Prefer attaching one of its interfaces. Returns the task that performs it.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-dedicated_server"><code>dedicated_server</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Detach a server (legacy). Detaches a whole dedicated server from the vRack, in the legacy mode. Returns the task that performs it.</td>
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
<tr id="parameter-dedicated_server">
    <td><CopyableCode code="dedicated_server" /></td>
    <td><code>string</code></td>
    <td>Dedicated Server (wire: dedicatedServer)</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The internal name of your vrack (wire: serviceName)</td>
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

Get a server link (legacy). Returns the attached server and its vRack. This is the legacy whole-server link, not an interface link.

```sql
SELECT
dedicated_server,
vrack
FROM ovh.vrack.dedicated_servers
WHERE dedicated_server = '{{ dedicated_server }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List servers (legacy). Returns the dedicated servers attached as a whole to the vRack, in the legacy mode. Attaching by interface replaces it.

```sql
SELECT
dedicated_server,
vrack
FROM ovh.vrack.dedicated_servers
WHERE service_name = '{{ service_name }}' -- required
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

Attach a server (legacy). Attaches a whole dedicated server to the vRack, in the legacy mode. Prefer attaching one of its interfaces. Returns the task that performs it.

```sql
INSERT INTO ovh.vrack.dedicated_servers (
dedicated_server,
service_name
)
SELECT 
'{{ dedicated_server }}' /* required */,
'{{ service_name }}'
RETURNING
id,
order_id,
service_name,
function,
last_update,
status,
target_domain,
todo_date
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: dedicated_servers
  props:
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the dedicated_servers resource.
    - name: dedicated_server
      value: "{{ dedicated_server }}"
      description: |
        Dedicated server to add
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

Detach a server (legacy). Detaches a whole dedicated server from the vRack, in the legacy mode. Returns the task that performs it.

```sql
DELETE FROM ovh.vrack.dedicated_servers
WHERE dedicated_server = '{{ dedicated_server }}' --required
AND service_name = '{{ service_name }}' --required
;
```
</TabItem>
</Tabs>
