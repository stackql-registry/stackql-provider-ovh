--- 
title: resource_website_backup_downloads
hide_title: false
hide_table_of_contents: false
keywords:
  - resource_website_backup_downloads
  - managed_cms
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

Creates, updates, deletes, gets or lists a <code>resource_website_backup_downloads</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resource_website_backup_downloads" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.managed_cms.resource_website_backup_downloads" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
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
    <td><code>string (uuid)</code></td>
    <td>Unique identifier of the backup</td>
</tr>
<tr>
    <td><CopyableCode code="database_download_url" /></td>
    <td><code>string</code></td>
    <td>URL to download the database of the backup, null while the backup is being created (wire: databaseDownloadURL)</td>
</tr>
<tr>
    <td><CopyableCode code="expires_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date after which the backup is deleted, null while the backup is being created (wire: expiresAt)</td>
</tr>
<tr>
    <td><CopyableCode code="files_download_url" /></td>
    <td><code>string</code></td>
    <td>URL to download the files of the backup, null while the backup is being created (wire: filesDownloadURL)</td>
</tr>
<tr>
    <td><CopyableCode code="size_bytes" /></td>
    <td><code>integer</code></td>
    <td>Size of the backup, in bytes, null while the backup is being created (wire: sizeBytes)</td>
</tr>
<tr>
    <td><CopyableCode code="started_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date the backup was triggered at (wire: startedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of the backup (CREATING, READY)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Whether the backup was taken automatically or requested by the customer (AUTOMATIC, MANUAL)</td>
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
    <td><a href="#parameter-backup_id"><code>backup_id</code></a>, <a href="#parameter-service_id"><code>service_id</code></a>, <a href="#parameter-website_id"><code>website_id</code></a></td>
    <td></td>
    <td>Returns a backup of the website with its download links, one for its files and one for its database, available once the backup is READY. Backups are listed in the current state of the website. (Beta version)</td>
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
<tr id="parameter-backup_id">
    <td><CopyableCode code="backup_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Identifier of the backup, as listed in the current state of the website (wire: backupId)</td>
</tr>
<tr id="parameter-service_id">
    <td><CopyableCode code="service_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Service ID (wire: serviceId)</td>
</tr>
<tr id="parameter-website_id">
    <td><CopyableCode code="website_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Website ID (wire: websiteId)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

Returns a backup of the website with its download links, one for its files and one for its database, available once the backup is READY. Backups are listed in the current state of the website. (Beta version)

```sql
SELECT
id,
database_download_url,
expires_at,
files_download_url,
size_bytes,
started_at,
status,
type
FROM ovh.managed_cms.resource_website_backup_downloads
WHERE backup_id = '{{ backup_id }}' -- required
AND service_id = '{{ service_id }}' -- required
AND website_id = '{{ website_id }}' -- required
;
```
</TabItem>
</Tabs>
