--- 
title: ip_failovers
hide_title: false
hide_table_of_contents: false
keywords:
  - ip_failovers
  - cloud_network
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

Creates, updates, deletes, gets or lists an <code>ip_failovers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ip_failovers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.cloud_network.ip_failovers" /></td></tr>
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
    <td><code>string</code></td>
    <td>Ip id</td>
</tr>
<tr>
    <td><CopyableCode code="block" /></td>
    <td><code>string (ip-block)</code></td>
    <td>IP block (example: 192.0.2.0/24)</td>
</tr>
<tr>
    <td><CopyableCode code="continent_code" /></td>
    <td><code>string</code></td>
    <td>Ip continent (wire: continentCode)</td>
</tr>
<tr>
    <td><CopyableCode code="geoloc" /></td>
    <td><code>string</code></td>
    <td>Ip location</td>
</tr>
<tr>
    <td><CopyableCode code="ip" /></td>
    <td><code>string (ipv4)</code></td>
    <td>Ip (example: 192.0.2.0)</td>
</tr>
<tr>
    <td><CopyableCode code="progress" /></td>
    <td><code>integer</code></td>
    <td>Current operation progress in percent</td>
</tr>
<tr>
    <td><CopyableCode code="routed_to" /></td>
    <td><code>string</code></td>
    <td>Instance where ip is routed to (wire: routedTo)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Ip status (ok, operationPending)</td>
</tr>
<tr>
    <td><CopyableCode code="sub_type" /></td>
    <td><code>string</code></td>
    <td>IP sub type (cloud, ovh) (wire: subType)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

FailoverIp

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
    <td><code>string</code></td>
    <td>Ip id</td>
</tr>
<tr>
    <td><CopyableCode code="block" /></td>
    <td><code>string (ip-block)</code></td>
    <td>IP block (example: 192.0.2.0/24)</td>
</tr>
<tr>
    <td><CopyableCode code="continent_code" /></td>
    <td><code>string</code></td>
    <td>Ip continent (wire: continentCode)</td>
</tr>
<tr>
    <td><CopyableCode code="geoloc" /></td>
    <td><code>string</code></td>
    <td>Ip location</td>
</tr>
<tr>
    <td><CopyableCode code="ip" /></td>
    <td><code>string (ipv4)</code></td>
    <td>Ip (example: 192.0.2.0)</td>
</tr>
<tr>
    <td><CopyableCode code="progress" /></td>
    <td><code>integer</code></td>
    <td>Current operation progress in percent</td>
</tr>
<tr>
    <td><CopyableCode code="routed_to" /></td>
    <td><code>string</code></td>
    <td>Instance where ip is routed to (wire: routedTo)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Ip status (ok, operationPending)</td>
</tr>
<tr>
    <td><CopyableCode code="sub_type" /></td>
    <td><code>string</code></td>
    <td>IP sub type (cloud, ovh) (wire: subType)</td>
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
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get failover ip</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get failover ips</td>
</tr>
<tr>
    <td><a href="#attach"><CopyableCode code="attach" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-instanceId"><code>instanceId</code></a></td>
    <td></td>
    <td>Attach failover ip to an instance</td>
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
    <td><code>string</code></td>
    <td>Id</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The Public Cloud project ID. Resolved from OVH_CLOUD_PROJECT_SERVICE when set.</td>
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

Get failover ip

```sql
SELECT
id,
block,
continent_code,
geoloc,
ip,
progress,
routed_to,
status,
sub_type
FROM ovh.cloud_network.ip_failovers
WHERE id = '{{ id }}' -- required
AND service_name = '{{ service_name }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
<TabItem value="list">

Get failover ips

```sql
SELECT
id,
block,
continent_code,
geoloc,
ip,
progress,
routed_to,
status,
sub_type
FROM ovh.cloud_network.ip_failovers
WHERE service_name = '{{ service_name }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="attach"
    values={[
        { label: 'attach', value: 'attach' }
    ]}
>
<TabItem value="attach">

Attach failover ip to an instance

```sql
EXEC ovh.cloud_network.ip_failovers.attach 
@id='{{ id }}' --required, 
@service_name='{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set 
@@json=
'{
"instanceId": "{{ instanceId }}"
}'
;
```
</TabItem>
</Tabs>
