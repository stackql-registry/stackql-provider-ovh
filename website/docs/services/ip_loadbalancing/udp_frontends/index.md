--- 
title: udp_frontends
hide_title: false
hide_table_of_contents: false
keywords:
  - udp_frontends
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

Creates, updates, deletes, gets or lists a <code>udp_frontends</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="udp_frontends" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.ip_loadbalancing.udp_frontends" /></td></tr>
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
    <td><CopyableCode code="default_farm_id" /></td>
    <td><code>integer</code></td>
    <td>Default UDP Farm of your frontend (wire: defaultFarmId)</td>
</tr>
<tr>
    <td><CopyableCode code="frontend_id" /></td>
    <td><code>integer</code></td>
    <td>Id of your frontend (wire: frontendId)</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>Human readable name for your frontend, this field is for you (wire: displayName)</td>
</tr>
<tr>
    <td><CopyableCode code="dedicated_ipfo" /></td>
    <td><code>array</code></td>
    <td>Only attach frontend on these ip. No restriction if null (wire: dedicatedIpfo)</td>
</tr>
<tr>
    <td><CopyableCode code="disabled" /></td>
    <td><code>boolean</code></td>
    <td>Disable frontend. Default: 'false'</td>
</tr>
<tr>
    <td><CopyableCode code="port" /></td>
    <td><code>string</code></td>
    <td>Listening port(s) on the server</td>
</tr>
<tr>
    <td><CopyableCode code="zone" /></td>
    <td><code>string</code></td>
    <td>Zone of you frontend</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Frontend UDP

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
    <td><CopyableCode code="default_farm_id" /></td>
    <td><code>integer</code></td>
    <td>Default UDP Farm of your frontend (wire: defaultFarmId)</td>
</tr>
<tr>
    <td><CopyableCode code="frontend_id" /></td>
    <td><code>integer</code></td>
    <td>Id of your frontend (wire: frontendId)</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>Human readable name for your frontend, this field is for you (wire: displayName)</td>
</tr>
<tr>
    <td><CopyableCode code="dedicated_ipfo" /></td>
    <td><code>array</code></td>
    <td>Only attach frontend on these ip. No restriction if null (wire: dedicatedIpfo)</td>
</tr>
<tr>
    <td><CopyableCode code="disabled" /></td>
    <td><code>boolean</code></td>
    <td>Disable frontend. Default: 'false'</td>
</tr>
<tr>
    <td><CopyableCode code="port" /></td>
    <td><code>string</code></td>
    <td>Listening port(s) on the server</td>
</tr>
<tr>
    <td><CopyableCode code="zone" /></td>
    <td><code>string</code></td>
    <td>Zone of you frontend</td>
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
    <td><a href="#parameter-frontend_id"><code>frontend_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get a UDP frontend (Beta version)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-default_farm_id"><code>default_farm_id</code></a>, <a href="#parameter-port"><code>port</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List UDP frontends (Beta version)</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-port"><code>port</code></a>, <a href="#parameter-zone"><code>zone</code></a></td>
    <td></td>
    <td>Create a UDP frontend (Beta version)</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-frontend_id"><code>frontend_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Update a UDP frontend (Beta version)</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-frontend_id"><code>frontend_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Delete a UDP frontend (Beta version)</td>
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
<tr id="parameter-frontend_id">
    <td><CopyableCode code="frontend_id" /></td>
    <td><code>integer</code></td>
    <td>Id of your frontend (wire: frontendId)</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The internal name of your IP load balancing (wire: serviceName)</td>
</tr>
<tr id="parameter-default_farm_id">
    <td><CopyableCode code="default_farm_id" /></td>
    <td><code>integer</code></td>
    <td>Filter the value of defaultFarmId property (=) (wire: defaultFarmId)</td>
</tr>
<tr id="parameter-port">
    <td><CopyableCode code="port" /></td>
    <td><code>string</code></td>
    <td>Filter the value of port property (like)</td>
</tr>
<tr id="parameter-x_pagination_mode">
    <td><CopyableCode code="x_pagination_mode" /></td>
    <td><code>string</code></td>
    <td>Sent as CachedObjectList-Pages by default so the list returns the full objects rather than their identifiers. (wire: X-Pagination-Mode)</td>
</tr>
<tr id="parameter-zone">
    <td><CopyableCode code="zone" /></td>
    <td><code>string</code></td>
    <td>Filter the value of zone property (=)</td>
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

Get a UDP frontend (Beta version)

```sql
SELECT
default_farm_id,
frontend_id,
display_name,
dedicated_ipfo,
disabled,
port,
zone
FROM ovh.ip_loadbalancing.udp_frontends
WHERE frontend_id = '{{ frontend_id }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List UDP frontends (Beta version)

```sql
SELECT
default_farm_id,
frontend_id,
display_name,
dedicated_ipfo,
disabled,
port,
zone
FROM ovh.ip_loadbalancing.udp_frontends
WHERE service_name = '{{ service_name }}' -- required
AND default_farm_id = '{{ default_farm_id }}'
AND port = '{{ port }}'
AND zone = '{{ zone }}'
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

Create a UDP frontend (Beta version)

```sql
INSERT INTO ovh.ip_loadbalancing.udp_frontends (
dedicated_ipfo,
default_farm_id,
disabled,
display_name,
port,
zone,
service_name
)
SELECT 
'{{ dedicated_ipfo }}',
{{ default_farm_id }},
{{ disabled }},
'{{ display_name }}',
'{{ port }}' /* required */,
'{{ zone }}' /* required */,
'{{ service_name }}'
RETURNING
default_farm_id,
frontend_id,
display_name,
dedicated_ipfo,
disabled,
port,
zone
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: udp_frontends
  props:
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the udp_frontends resource.
    - name: dedicated_ipfo
      value:
        - "{{ dedicated_ipfo }}"
      description: |
        Only attach frontend on these ip. No restriction if null
    - name: default_farm_id
      value: {{ default_farm_id }}
      description: |
        Default UDP Farm of your frontend
    - name: disabled
      value: {{ disabled }}
      description: |
        Disable your frontend. Default: 'false'
    - name: display_name
      value: "{{ display_name }}"
      description: |
        Human readable name for your frontend, this field is for you
    - name: port
      value: "{{ port }}"
      description: |
        Port(s) attached to your frontend. Supports single port (numerical value), range (2 dash-delimited increasing ports) and comma-separated list of 'single port' and/or 'range'. Each port must be in the [1;49151] range.
    - name: zone
      value: "{{ zone }}"
      description: |
        Zone of your frontend. Use "all" for all owned zone.
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

Update a UDP frontend (Beta version)

```sql
UPDATE ovh.ip_loadbalancing.udp_frontends
SET 
dedicated_ipfo = '{{ dedicated_ipfo }}',
default_farm_id = {{ default_farm_id }},
disabled = {{ disabled }},
display_name = '{{ display_name }}',
port = '{{ port }}',
zone = '{{ zone }}'
WHERE 
frontend_id = '{{ frontend_id }}' --required
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

Delete a UDP frontend (Beta version)

```sql
DELETE FROM ovh.ip_loadbalancing.udp_frontends
WHERE frontend_id = '{{ frontend_id }}' --required
AND service_name = '{{ service_name }}' --required
;
```
</TabItem>
</Tabs>
