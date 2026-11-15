--- 
title: tcp_routes
hide_title: false
hide_table_of_contents: false
keywords:
  - tcp_routes
  - ip_loadbalancing
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

Creates, updates, deletes, gets or lists a <code>tcp_routes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="tcp_routes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.ip_loadbalancing.tcp_routes" /></td></tr>
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
    <td><CopyableCode code="frontend_id" /></td>
    <td><code>integer</code></td>
    <td>Route traffic for this frontend (wire: frontendId)</td>
</tr>
<tr>
    <td><CopyableCode code="route_id" /></td>
    <td><code>integer</code></td>
    <td>Id of your route (wire: routeId)</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>Human readable name for your route, this field is for you (wire: displayName)</td>
</tr>
<tr>
    <td><CopyableCode code="action" /></td>
    <td><code>object</code></td>
    <td>Action triggered when all rules match</td>
</tr>
<tr>
    <td><CopyableCode code="rules" /></td>
    <td><code>array</code></td>
    <td>List of rules to match to trigger action</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Route status. Routes in "ok" state are ready to operate (creating, deleting, internal, ok, updating)</td>
</tr>
<tr>
    <td><CopyableCode code="weight" /></td>
    <td><code>integer</code></td>
    <td>Route priority (&#91;0..255&#93;). 0 if null. Highest priority routes are evaluated last. Only the first matching route will trigger an action</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

TCP Route

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
    <td><CopyableCode code="frontend_id" /></td>
    <td><code>integer</code></td>
    <td>Route traffic for this frontend (wire: frontendId)</td>
</tr>
<tr>
    <td><CopyableCode code="route_id" /></td>
    <td><code>integer</code></td>
    <td>Id of your route (wire: routeId)</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>Human readable name for your route, this field is for you (wire: displayName)</td>
</tr>
<tr>
    <td><CopyableCode code="action" /></td>
    <td><code>object</code></td>
    <td>Action triggered when all rules match</td>
</tr>
<tr>
    <td><CopyableCode code="rules" /></td>
    <td><code>array</code></td>
    <td>List of rules to match to trigger action</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Route status. Routes in "ok" state are ready to operate (creating, deleting, internal, ok, updating)</td>
</tr>
<tr>
    <td><CopyableCode code="weight" /></td>
    <td><code>integer</code></td>
    <td>Route priority (&#91;0..255&#93;). 0 if null. Highest priority routes are evaluated last. Only the first matching route will trigger an action</td>
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
    <td><a href="#parameter-route_id"><code>route_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get a TCP route</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-frontend_id"><code>frontend_id</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List TCP routes</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-action"><code>action</code></a></td>
    <td></td>
    <td>Create a TCP route</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-route_id"><code>route_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Update a TCP route</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-route_id"><code>route_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Delete a TCP route</td>
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
<tr id="parameter-route_id">
    <td><CopyableCode code="route_id" /></td>
    <td><code>integer</code></td>
    <td>Id of your route (wire: routeId)</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The internal name of your IP load balancing (wire: serviceName)</td>
</tr>
<tr id="parameter-frontend_id">
    <td><CopyableCode code="frontend_id" /></td>
    <td><code>integer</code></td>
    <td>Filter the value of frontendId property (=) (wire: frontendId)</td>
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

Get a TCP route

```sql
SELECT
frontend_id,
route_id,
display_name,
action,
rules,
status,
weight
FROM ovh.ip_loadbalancing.tcp_routes
WHERE route_id = '{{ route_id }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List TCP routes

```sql
SELECT
frontend_id,
route_id,
display_name,
action,
rules,
status,
weight
FROM ovh.ip_loadbalancing.tcp_routes
WHERE service_name = '{{ service_name }}' -- required
AND frontend_id = '{{ frontend_id }}'
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

Create a TCP route

```sql
INSERT INTO ovh.ip_loadbalancing.tcp_routes (
action,
display_name,
frontend_id,
weight,
service_name
)
SELECT 
'{{ action }}' /* required */,
'{{ display_name }}',
{{ frontend_id }},
{{ weight }},
'{{ service_name }}'
RETURNING
frontend_id,
route_id,
display_name,
action,
rules,
status,
weight
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: tcp_routes
  props:
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the tcp_routes resource.
    - name: action
      description: |
        Action triggered when all rules match
      value:
        target: "{{ target }}"
        type: "{{ type }}"
    - name: display_name
      value: "{{ display_name }}"
      description: |
        Human readable name for your route, this field is for you
    - name: frontend_id
      value: {{ frontend_id }}
      description: |
        Route traffic for this frontend
    - name: weight
      value: {{ weight }}
      description: |
        Route priority ([0..255]). 0 if null. Highest priority routes are evaluated last. Only the first matching route will trigger an action
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

Update a TCP route

```sql
UPDATE ovh.ip_loadbalancing.tcp_routes
SET 
action = '{{ action }}',
display_name = '{{ display_name }}',
frontend_id = {{ frontend_id }},
weight = {{ weight }}
WHERE 
route_id = '{{ route_id }}' --required
AND service_name = '{{ service_name }}' --required;
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

Delete a TCP route

```sql
DELETE FROM ovh.ip_loadbalancing.tcp_routes
WHERE route_id = '{{ route_id }}' --required
AND service_name = '{{ service_name }}' --required
;
```
</TabItem>
</Tabs>
