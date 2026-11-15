--- 
title: http_farms
hide_title: false
hide_table_of_contents: false
keywords:
  - http_farms
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

Creates, updates, deletes, gets or lists a <code>http_farms</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="http_farms" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.ip_loadbalancing.http_farms" /></td></tr>
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
    <td><CopyableCode code="farm_id" /></td>
    <td><code>integer</code></td>
    <td>Id of your farm (wire: farmId)</td>
</tr>
<tr>
    <td><CopyableCode code="vrack_network_id" /></td>
    <td><code>integer</code></td>
    <td>Internal Load Balancer identifier of the vRack private network attached to your farm, mandatory when your Load Balancer is attached to a vRack (wire: vrackNetworkId)</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>Human readable name for your backend, this field is for you (wire: displayName)</td>
</tr>
<tr>
    <td><CopyableCode code="balance" /></td>
    <td><code>string</code></td>
    <td>Load balancing algorithm. 'roundrobin' if null (first, leastconn, roundrobin, source, uri)</td>
</tr>
<tr>
    <td><CopyableCode code="port" /></td>
    <td><code>integer</code></td>
    <td>Port attached to your farm. Inherited from frontend if null</td>
</tr>
<tr>
    <td><CopyableCode code="probe" /></td>
    <td><code>object</code></td>
    <td>Probe used to determine if a backend is alive and can handle requests. Defaults to tcp on the same port as the farm</td>
</tr>
<tr>
    <td><CopyableCode code="stickiness" /></td>
    <td><code>string</code></td>
    <td>Stickiness type. No stickiness if null (cookie, sourceIp)</td>
</tr>
<tr>
    <td><CopyableCode code="zone" /></td>
    <td><code>string</code></td>
    <td>Zone of you farm</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

HTTP Farm

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
    <td><CopyableCode code="farm_id" /></td>
    <td><code>integer</code></td>
    <td>Id of your farm (wire: farmId)</td>
</tr>
<tr>
    <td><CopyableCode code="vrack_network_id" /></td>
    <td><code>integer</code></td>
    <td>Internal Load Balancer identifier of the vRack private network attached to your farm, mandatory when your Load Balancer is attached to a vRack (wire: vrackNetworkId)</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>Human readable name for your backend, this field is for you (wire: displayName)</td>
</tr>
<tr>
    <td><CopyableCode code="balance" /></td>
    <td><code>string</code></td>
    <td>Load balancing algorithm. 'roundrobin' if null (first, leastconn, roundrobin, source, uri)</td>
</tr>
<tr>
    <td><CopyableCode code="port" /></td>
    <td><code>integer</code></td>
    <td>Port attached to your farm. Inherited from frontend if null</td>
</tr>
<tr>
    <td><CopyableCode code="probe" /></td>
    <td><code>object</code></td>
    <td>Probe used to determine if a backend is alive and can handle requests. Defaults to tcp on the same port as the farm</td>
</tr>
<tr>
    <td><CopyableCode code="stickiness" /></td>
    <td><code>string</code></td>
    <td>Stickiness type. No stickiness if null (cookie, sourceIp)</td>
</tr>
<tr>
    <td><CopyableCode code="zone" /></td>
    <td><code>string</code></td>
    <td>Zone of you farm</td>
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
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get an HTTP farm</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-vrack_network_id"><code>vrack_network_id</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List HTTP farms</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-zone"><code>zone</code></a></td>
    <td></td>
    <td>Create an HTTP farm</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Update an HTTP farm</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-farm_id"><code>farm_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Delete an HTTP farm</td>
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
<tr id="parameter-farm_id">
    <td><CopyableCode code="farm_id" /></td>
    <td><code>integer</code></td>
    <td>Id of your farm (wire: farmId)</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The internal name of your IP load balancing (wire: serviceName)</td>
</tr>
<tr id="parameter-vrack_network_id">
    <td><CopyableCode code="vrack_network_id" /></td>
    <td><code>integer</code></td>
    <td>Filter the value of vrackNetworkId property (=) (wire: vrackNetworkId)</td>
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

Get an HTTP farm

```sql
SELECT
farm_id,
vrack_network_id,
display_name,
balance,
port,
probe,
stickiness,
zone
FROM ovh.ip_loadbalancing.http_farms
WHERE farm_id = '{{ farm_id }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List HTTP farms

```sql
SELECT
farm_id,
vrack_network_id,
display_name,
balance,
port,
probe,
stickiness,
zone
FROM ovh.ip_loadbalancing.http_farms
WHERE service_name = '{{ service_name }}' -- required
AND vrack_network_id = '{{ vrack_network_id }}'
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

Create an HTTP farm

```sql
INSERT INTO ovh.ip_loadbalancing.http_farms (
balance,
display_name,
port,
probe,
stickiness,
vrack_network_id,
zone,
service_name
)
SELECT 
'{{ balance }}',
'{{ display_name }}',
{{ port }},
'{{ probe }}',
'{{ stickiness }}',
{{ vrack_network_id }},
'{{ zone }}' /* required */,
'{{ service_name }}'
RETURNING
farm_id,
vrack_network_id,
display_name,
balance,
port,
probe,
stickiness,
zone
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: http_farms
  props:
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the http_farms resource.
    - name: balance
      value: "{{ balance }}"
      description: |
        Load balancing algorithm. 'roundrobin' if null
      valid_values: ['first', 'leastconn', 'roundrobin', 'source', 'uri']
    - name: display_name
      value: "{{ display_name }}"
      description: |
        Human readable name for your backend, this field is for you
    - name: port
      value: {{ port }}
      description: |
        Port attached to your farm ([1..49151]). Inherited from frontend if null
    - name: probe
      description: |
        Probe used to determine if a backend is alive and can handle requests
      value:
        forceSsl: {{ forceSsl }}
        interval: {{ interval }}
        match: "{{ match }}"
        method: "{{ method }}"
        negate: {{ negate }}
        pattern: "{{ pattern }}"
        port: {{ port }}
        type: "{{ type }}"
        url: "{{ url }}"
    - name: stickiness
      value: "{{ stickiness }}"
      description: |
        Stickiness type. No stickiness if null
      valid_values: ['cookie', 'sourceIp']
    - name: vrack_network_id
      value: {{ vrack_network_id }}
      description: |
        Internal Load Balancer identifier of the vRack private network to attach to your farm, mandatory when your Load Balancer is attached to a vRack
    - name: zone
      value: "{{ zone }}"
      description: |
        Zone of your farm
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

Update an HTTP farm

```sql
UPDATE ovh.ip_loadbalancing.http_farms
SET 
balance = '{{ balance }}',
display_name = '{{ display_name }}',
port = {{ port }},
probe = '{{ probe }}',
stickiness = '{{ stickiness }}',
vrack_network_id = {{ vrack_network_id }}
WHERE 
farm_id = '{{ farm_id }}' --required
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

Delete an HTTP farm

```sql
DELETE FROM ovh.ip_loadbalancing.http_farms
WHERE farm_id = '{{ farm_id }}' --required
AND service_name = '{{ service_name }}' --required
;
```
</TabItem>
</Tabs>
