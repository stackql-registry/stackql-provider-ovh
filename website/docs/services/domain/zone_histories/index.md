--- 
title: zone_histories
hide_title: false
hide_table_of_contents: false
keywords:
  - zone_histories
  - domain
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

Creates, updates, deletes, gets or lists a <code>zone_histories</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="zone_histories" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.domain.zone_histories" /></td></tr>
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
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date of backup creation (wire: creationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="zone_file_url" /></td>
    <td><code>string</code></td>
    <td>The URL of the saved zone at this date (wire: zoneFileUrl)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

DNS zone history

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
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date of backup creation (wire: creationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="zone_file_url" /></td>
    <td><code>string</code></td>
    <td>The URL of the saved zone at this date (wire: zoneFileUrl)</td>
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
    <td><a href="#parameter-creation_date"><code>creation_date</code></a>, <a href="#parameter-zone_name"><code>zone_name</code></a></td>
    <td></td>
    <td>Returns a restore point: its creation date and the URL of the saved zone file.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-zone_name"><code>zone_name</code></a></td>
    <td><a href="#parameter-creation_date.from"><code>creation_date.from</code></a>, <a href="#parameter-creation_date.to"><code>creation_date.to</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>Returns the creation dates of the zone restore points. Can be filtered by a creation date range.</td>
</tr>
<tr>
    <td><a href="#restore"><CopyableCode code="restore" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-creationDate"><code>creationDate</code></a>, <a href="#parameter-zoneName"><code>zoneName</code></a></td>
    <td></td>
    <td>Restores the zone to the selected restore point and returns the task.</td>
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
<tr id="parameter-creationDate">
    <td><CopyableCode code="creationDate" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date</td>
</tr>
<tr id="parameter-creation_date">
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date (wire: creationDate)</td>
</tr>
<tr id="parameter-zoneName">
    <td><CopyableCode code="zoneName" /></td>
    <td><code>string</code></td>
    <td>Zone name</td>
</tr>
<tr id="parameter-zone_name">
    <td><CopyableCode code="zone_name" /></td>
    <td><code>string</code></td>
    <td>Zone name (wire: zoneName)</td>
</tr>
<tr id="parameter-creation_date.from">
    <td><CopyableCode code="creation_date.from" /></td>
    <td><code>string (date-time)</code></td>
    <td>Filter using the value of creationDate property (&gt;=) (wire: creationDate.from)</td>
</tr>
<tr id="parameter-creation_date.to">
    <td><CopyableCode code="creation_date.to" /></td>
    <td><code>string (date-time)</code></td>
    <td>Filter using the value of creationDate property (&lt;=) (wire: creationDate.to)</td>
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

Returns a restore point: its creation date and the URL of the saved zone file.

```sql
SELECT
creation_date,
zone_file_url
FROM ovh.domain.zone_histories
WHERE creation_date = '{{ creation_date }}' -- required
AND zone_name = '{{ zone_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns the creation dates of the zone restore points. Can be filtered by a creation date range.

```sql
SELECT
creation_date,
zone_file_url
FROM ovh.domain.zone_histories
WHERE zone_name = '{{ zone_name }}' -- required
AND creation_date.from = '{{ creation_date.from }}'
AND creation_date.to = '{{ creation_date.to }}'
AND x_pagination_mode = '{{ x_pagination_mode }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="restore"
    values={[
        { label: 'restore', value: 'restore' }
    ]}
>
<TabItem value="restore">

Restores the zone to the selected restore point and returns the task.

```sql
EXEC ovh.domain.zone_histories.restore 
@creationDate='{{ creationDate }}' --required, 
@zoneName='{{ zoneName }}' --required
;
```
</TabItem>
</Tabs>
