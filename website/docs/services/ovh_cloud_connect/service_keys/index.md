--- 
title: service_keys
hide_title: false
hide_table_of_contents: false
keywords:
  - service_keys
  - ovh_cloud_connect
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

Creates, updates, deletes, gets or lists a <code>service_keys</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="service_keys" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.ovh_cloud_connect.service_keys" /></td></tr>
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
    <td>Service Key id</td>
</tr>
<tr>
    <td><CopyableCode code="key" /></td>
    <td><code>string</code></td>
    <td>Reference of the service</td>
</tr>
<tr>
    <td><CopyableCode code="provider" /></td>
    <td><code>string</code></td>
    <td>Service Key provider (OVHcloud, RISQ, consoleconnect, dcexp, digitalrealty, edge, equinix, fibrenoire, google, intercloud, internal, interxion, megaport, orange)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Service Key status (active, cancelled, doing, terminated, toCheck)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

OVHcloud Connect Service Key

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
    <td>Service Key id</td>
</tr>
<tr>
    <td><CopyableCode code="key" /></td>
    <td><code>string</code></td>
    <td>Reference of the service</td>
</tr>
<tr>
    <td><CopyableCode code="provider" /></td>
    <td><code>string</code></td>
    <td>Service Key provider (OVHcloud, RISQ, consoleconnect, dcexp, digitalrealty, edge, equinix, fibrenoire, google, intercloud, internal, interxion, megaport, orange)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Service Key status (active, cancelled, doing, terminated, toCheck)</td>
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
    <td><a href="#parameter-service_key_id"><code>service_key_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Returns the key value, its provider and its status.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>Returns the IDs of all service keys generated for the provider, current and past.</td>
</tr>
<tr>
    <td><a href="#regenerate"><CopyableCode code="regenerate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceKeyId"><code>serviceKeyId</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Generates a new key that the provider uses to set up the connection; previous service key is no longer active.</td>
</tr>
<tr>
    <td><a href="#send"><CopyableCode code="send" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceKeyId"><code>serviceKeyId</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-email"><code>email</code></a></td>
    <td></td>
    <td>Emails the key value to the given address.</td>
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
<tr id="parameter-serviceKeyId">
    <td><CopyableCode code="serviceKeyId" /></td>
    <td><code>integer</code></td>
    <td>Service key ID</td>
</tr>
<tr id="parameter-serviceName">
    <td><CopyableCode code="serviceName" /></td>
    <td><code>string (uuid)</code></td>
    <td>Service name</td>
</tr>
<tr id="parameter-service_key_id">
    <td><CopyableCode code="service_key_id" /></td>
    <td><code>integer</code></td>
    <td>Service key ID (wire: serviceKeyId)</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string (uuid)</code></td>
    <td>Service name (wire: serviceName)</td>
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

Returns the key value, its provider and its status.

```sql
SELECT
id,
key,
provider,
status
FROM ovh.ovh_cloud_connect.service_keys
WHERE service_key_id = '{{ service_key_id }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns the IDs of all service keys generated for the provider, current and past.

```sql
SELECT
id,
key,
provider,
status
FROM ovh.ovh_cloud_connect.service_keys
WHERE service_name = '{{ service_name }}' -- required
AND x_pagination_mode = '{{ x_pagination_mode }}'
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
        { label: 'send', value: 'send' }
    ]}
>
<TabItem value="regenerate">

Generates a new key that the provider uses to set up the connection; previous service key is no longer active.

```sql
EXEC ovh.ovh_cloud_connect.service_keys.regenerate 
@serviceKeyId='{{ serviceKeyId }}' --required, 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
<TabItem value="send">

Emails the key value to the given address.

```sql
EXEC ovh.ovh_cloud_connect.service_keys.send 
@serviceKeyId='{{ serviceKeyId }}' --required, 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"email": "{{ email }}"
}'
;
```
</TabItem>
</Tabs>
