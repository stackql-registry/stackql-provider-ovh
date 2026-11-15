--- 
title: boots
hide_title: false
hide_table_of_contents: false
keywords:
  - boots
  - dedicated_server
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

Creates, updates, deletes, gets or lists a <code>boots</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="boots" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.dedicated_server.boots" /></td></tr>
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
    <td><CopyableCode code="boot_id" /></td>
    <td><code>integer</code></td>
    <td>boot id (wire: bootId)</td>
</tr>
<tr>
    <td><CopyableCode code="boot_type" /></td>
    <td><code>string</code></td>
    <td>the boot system (harddisk, internal, network, power, rescue) (wire: bootType)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>the boot description</td>
</tr>
<tr>
    <td><CopyableCode code="kernel" /></td>
    <td><code>string</code></td>
    <td>The boot kernel</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Available boots

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
    <td><CopyableCode code="boot_id" /></td>
    <td><code>integer</code></td>
    <td>boot id (wire: bootId)</td>
</tr>
<tr>
    <td><CopyableCode code="boot_type" /></td>
    <td><code>string</code></td>
    <td>the boot system (harddisk, internal, network, power, rescue) (wire: bootType)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>the boot description</td>
</tr>
<tr>
    <td><CopyableCode code="kernel" /></td>
    <td><code>string</code></td>
    <td>The boot kernel</td>
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
    <td><a href="#parameter-boot_id"><code>boot_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get a netboot. Returns a netboot compatible with the server: its boot type, its kernel and its description.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-boot_type"><code>boot_type</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List compatible netboots. Returns the identifiers of the netboots compatible with the server. Filter them by boot type (harddisk, network, rescue, internal or power) with the bootType parameter.</td>
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
<tr id="parameter-boot_id">
    <td><CopyableCode code="boot_id" /></td>
    <td><code>integer</code></td>
    <td>boot id (wire: bootId)</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The internal name of your dedicated server (wire: serviceName)</td>
</tr>
<tr id="parameter-boot_type">
    <td><CopyableCode code="boot_type" /></td>
    <td><code>string</code></td>
    <td>Filter the value of bootType property (=) (wire: bootType)</td>
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

Get a netboot. Returns a netboot compatible with the server: its boot type, its kernel and its description.

```sql
SELECT
boot_id,
boot_type,
description,
kernel
FROM ovh.dedicated_server.boots
WHERE boot_id = '{{ boot_id }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List compatible netboots. Returns the identifiers of the netboots compatible with the server. Filter them by boot type (harddisk, network, rescue, internal or power) with the bootType parameter.

```sql
SELECT
boot_id,
boot_type,
description,
kernel
FROM ovh.dedicated_server.boots
WHERE service_name = '{{ service_name }}' -- required
AND boot_type = '{{ boot_type }}'
AND x_pagination_mode = '{{ x_pagination_mode }}'
;
```
</TabItem>
</Tabs>
