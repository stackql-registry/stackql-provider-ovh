--- 
title: output_graylog_stream_archives
hide_title: false
hide_table_of_contents: false
keywords:
  - output_graylog_stream_archives
  - dbaas_logs
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

Creates, updates, deletes, gets or lists an <code>output_graylog_stream_archives</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="output_graylog_stream_archives" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.dbaas_logs.output_graylog_stream_archives" /></td></tr>
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
    <td><CopyableCode code="archive_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Archive ID (wire: archiveId)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Create date (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="filename" /></td>
    <td><code>string</code></td>
    <td>Filename</td>
</tr>
<tr>
    <td><CopyableCode code="md_5" /></td>
    <td><code>string</code></td>
    <td>MD5 checksum (wire: md5)</td>
</tr>
<tr>
    <td><CopyableCode code="retrieval_delay" /></td>
    <td><code>integer</code></td>
    <td>Retrieval delay (wire: retrievalDelay)</td>
</tr>
<tr>
    <td><CopyableCode code="retrieval_state" /></td>
    <td><code>string</code></td>
    <td>Retrieval state (sealed, unsealed, unsealing) (wire: retrievalState)</td>
</tr>
<tr>
    <td><CopyableCode code="sha_256" /></td>
    <td><code>string</code></td>
    <td>sha256 checksum (wire: sha256)</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>integer</code></td>
    <td>File size in bytes</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Stream archive

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
    <td><CopyableCode code="archive_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Archive ID (wire: archiveId)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Create date (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="filename" /></td>
    <td><code>string</code></td>
    <td>Filename</td>
</tr>
<tr>
    <td><CopyableCode code="md_5" /></td>
    <td><code>string</code></td>
    <td>MD5 checksum (wire: md5)</td>
</tr>
<tr>
    <td><CopyableCode code="retrieval_delay" /></td>
    <td><code>integer</code></td>
    <td>Retrieval delay (wire: retrievalDelay)</td>
</tr>
<tr>
    <td><CopyableCode code="retrieval_state" /></td>
    <td><code>string</code></td>
    <td>Retrieval state (sealed, unsealed, unsealing) (wire: retrievalState)</td>
</tr>
<tr>
    <td><CopyableCode code="sha_256" /></td>
    <td><code>string</code></td>
    <td>sha256 checksum (wire: sha256)</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>integer</code></td>
    <td>File size in bytes</td>
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
    <td><a href="#parameter-archive_id"><code>archive_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-stream_id"><code>stream_id</code></a></td>
    <td></td>
    <td>Returns the archive.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-stream_id"><code>stream_id</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>Returns the archives of the Logs Data Platform service.</td>
</tr>
<tr>
    <td><a href="#url"><CopyableCode code="url" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-archiveId"><code>archiveId</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-streamId"><code>streamId</code></a></td>
    <td></td>
    <td>Creates a temporary URL to download the archive. The URL expires.</td>
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
<tr id="parameter-archiveId">
    <td><CopyableCode code="archiveId" /></td>
    <td><code>string (uuid)</code></td>
    <td>Archive ID</td>
</tr>
<tr id="parameter-archive_id">
    <td><CopyableCode code="archive_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Archive ID (wire: archiveId)</td>
</tr>
<tr id="parameter-serviceName">
    <td><CopyableCode code="serviceName" /></td>
    <td><code>string</code></td>
    <td>Service name</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>Service name (wire: serviceName)</td>
</tr>
<tr id="parameter-streamId">
    <td><CopyableCode code="streamId" /></td>
    <td><code>string (uuid)</code></td>
    <td>Stream ID</td>
</tr>
<tr id="parameter-stream_id">
    <td><CopyableCode code="stream_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Stream ID (wire: streamId)</td>
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

Returns the archive.

```sql
SELECT
archive_id,
created_at,
filename,
md_5,
retrieval_delay,
retrieval_state,
sha_256,
size
FROM ovh.dbaas_logs.output_graylog_stream_archives
WHERE archive_id = '{{ archive_id }}' -- required
AND service_name = '{{ service_name }}' -- required
AND stream_id = '{{ stream_id }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns the archives of the Logs Data Platform service.

```sql
SELECT
archive_id,
created_at,
filename,
md_5,
retrieval_delay,
retrieval_state,
sha_256,
size
FROM ovh.dbaas_logs.output_graylog_stream_archives
WHERE service_name = '{{ service_name }}' -- required
AND stream_id = '{{ stream_id }}' -- required
AND x_pagination_mode = '{{ x_pagination_mode }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="url"
    values={[
        { label: 'url', value: 'url' }
    ]}
>
<TabItem value="url">

Creates a temporary URL to download the archive. The URL expires.

```sql
EXEC ovh.dbaas_logs.output_graylog_stream_archives.url 
@archiveId='{{ archiveId }}' --required, 
@serviceName='{{ serviceName }}' --required, 
@streamId='{{ streamId }}' --required
;
```
</TabItem>
</Tabs>
