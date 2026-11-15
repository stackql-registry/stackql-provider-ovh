--- 
title: location_hypervisors
hide_title: false
hide_table_of_contents: false
keywords:
  - location_hypervisors
  - dedicated_cloud
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

Creates, updates, deletes, gets or lists a <code>location_hypervisors</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="location_hypervisors" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.dedicated_cloud.location_hypervisors" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'get_by_short_name', value: 'get_by_short_name' },
        { label: 'list', value: 'list' },
        { label: 'list_by_service_name', value: 'list_by_service_name' }
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
    <td><CopyableCode code="full_name" /></td>
    <td><code>string</code></td>
    <td>Full name of hypervisor (wire: fullName)</td>
</tr>
<tr>
    <td><CopyableCode code="short_name" /></td>
    <td><code>string</code></td>
    <td>Short name of hypervisor (wire: shortName)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modification_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last modification of hypervisor (wire: lastModificationDate)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="get_by_short_name">

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
    <td><CopyableCode code="full_name" /></td>
    <td><code>string</code></td>
    <td>Full name of hypervisor (wire: fullName)</td>
</tr>
<tr>
    <td><CopyableCode code="short_name" /></td>
    <td><code>string</code></td>
    <td>Short name of hypervisor (wire: shortName)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modification_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last modification of hypervisor (wire: lastModificationDate)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Hypervisor

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
    <td><CopyableCode code="full_name" /></td>
    <td><code>string</code></td>
    <td>Full name of hypervisor (wire: fullName)</td>
</tr>
<tr>
    <td><CopyableCode code="short_name" /></td>
    <td><code>string</code></td>
    <td>Short name of hypervisor (wire: shortName)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modification_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last modification of hypervisor (wire: lastModificationDate)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_by_service_name">

Hypervisor

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
    <td><CopyableCode code="full_name" /></td>
    <td><code>string</code></td>
    <td>Full name of hypervisor (wire: fullName)</td>
</tr>
<tr>
    <td><CopyableCode code="short_name" /></td>
    <td><code>string</code></td>
    <td>Short name of hypervisor (wire: shortName)</td>
</tr>
<tr>
    <td><CopyableCode code="last_modification_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last modification of hypervisor (wire: lastModificationDate)</td>
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
    <td><a href="#parameter-pcc_zone"><code>pcc_zone</code></a>, <a href="#parameter-short_name"><code>short_name</code></a></td>
    <td></td>
    <td>Get a hypervisor version. Returns the short name, full name and last modification date of the hypervisor.</td>
</tr>
<tr>
    <td><a href="#get_by_short_name"><CopyableCode code="get_by_short_name" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-short_name"><code>short_name</code></a></td>
    <td></td>
    <td>Get a hypervisor version. Returns the short name, full name and last modification date of the hypervisor.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-pcc_zone"><code>pcc_zone</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List hypervisor versions</td>
</tr>
<tr>
    <td><a href="#list_by_service_name"><CopyableCode code="list_by_service_name" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List hypervisor versions</td>
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
<tr id="parameter-pcc_zone">
    <td><CopyableCode code="pcc_zone" /></td>
    <td><code>string</code></td>
    <td>Name of pccZone (wire: pccZone)</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>Domain of the service (wire: serviceName)</td>
</tr>
<tr id="parameter-short_name">
    <td><CopyableCode code="short_name" /></td>
    <td><code>string</code></td>
    <td>Short name of hypervisor (wire: shortName)</td>
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
        { label: 'get_by_short_name', value: 'get_by_short_name' },
        { label: 'list', value: 'list' },
        { label: 'list_by_service_name', value: 'list_by_service_name' }
    ]}
>
<TabItem value="get">

Get a hypervisor version. Returns the short name, full name and last modification date of the hypervisor.

```sql
SELECT
full_name,
short_name,
last_modification_date
FROM ovh.dedicated_cloud.location_hypervisors
WHERE pcc_zone = '{{ pcc_zone }}' -- required
AND short_name = '{{ short_name }}' -- required
;
```
</TabItem>
<TabItem value="get_by_short_name">

Get a hypervisor version. Returns the short name, full name and last modification date of the hypervisor.

```sql
SELECT
full_name,
short_name,
last_modification_date
FROM ovh.dedicated_cloud.location_hypervisors
WHERE service_name = '{{ service_name }}' -- required
AND short_name = '{{ short_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List hypervisor versions

```sql
SELECT
full_name,
short_name,
last_modification_date
FROM ovh.dedicated_cloud.location_hypervisors
WHERE pcc_zone = '{{ pcc_zone }}' -- required
AND x_pagination_mode = '{{ x_pagination_mode }}'
;
```
</TabItem>
<TabItem value="list_by_service_name">

List hypervisor versions

```sql
SELECT
full_name,
short_name,
last_modification_date
FROM ovh.dedicated_cloud.location_hypervisors
WHERE service_name = '{{ service_name }}' -- required
AND x_pagination_mode = '{{ x_pagination_mode }}'
;
```
</TabItem>
</Tabs>
