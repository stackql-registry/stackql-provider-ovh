--- 
title: region_volume_backups
hide_title: false
hide_table_of_contents: false
keywords:
  - region_volume_backups
  - cloud_storage
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

Creates, updates, deletes, gets or lists a <code>region_volume_backups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="region_volume_backups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.cloud_storage.region_volume_backups" /></td></tr>
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
    <td><code>string (uuid)</code></td>
    <td>Volume backup id</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Volume backup name</td>
</tr>
<tr>
    <td><CopyableCode code="volume_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>ID of the volume used to create the backup (wire: volumeId)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date of the backup (wire: creationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Volume backup region</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>integer</code></td>
    <td>Size of the backup in GiB</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Staus of the backup (creating, deleting, error, ok, restoring)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A volume backup

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
    <td>Volume backup id</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Volume backup name</td>
</tr>
<tr>
    <td><CopyableCode code="volume_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>ID of the volume used to create the backup (wire: volumeId)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date of the backup (wire: creationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Volume backup region</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>integer</code></td>
    <td>Size of the backup in GiB</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Staus of the backup (creating, deleting, error, ok, restoring)</td>
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
    <td><a href="#parameter-region_name"><code>region_name</code></a>, <a href="#parameter-volume_backup_id"><code>volume_backup_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get volume backup</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region_name"><code>region_name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>List volume backups</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region_name"><code>region_name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-volume_id"><code>volume_id</code></a></td>
    <td></td>
    <td>Create a volume backup</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region_name"><code>region_name</code></a>, <a href="#parameter-volume_backup_id"><code>volume_backup_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Delete volume backup</td>
</tr>
<tr>
    <td><a href="#restore"><CopyableCode code="restore" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-regionName"><code>regionName</code></a>, <a href="#parameter-volumeBackupId"><code>volumeBackupId</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-volumeId"><code>volumeId</code></a></td>
    <td></td>
    <td>Restore a volume backup on a volume</td>
</tr>
<tr>
    <td><a href="#volume"><CopyableCode code="volume" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-regionName"><code>regionName</code></a>, <a href="#parameter-volumeBackupId"><code>volumeBackupId</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Create a volume from a volume backup</td>
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
<tr id="parameter-regionName">
    <td><CopyableCode code="regionName" /></td>
    <td><code>string</code></td>
    <td>Region name</td>
</tr>
<tr id="parameter-region_name">
    <td><CopyableCode code="region_name" /></td>
    <td><code>string</code></td>
    <td>Region name (wire: regionName)</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The Public Cloud project ID. Resolved from OVH_CLOUD_PROJECT_SERVICE when set.</td>
</tr>
<tr id="parameter-volumeBackupId">
    <td><CopyableCode code="volumeBackupId" /></td>
    <td><code>string (uuid)</code></td>
    <td>Volume backup ID</td>
</tr>
<tr id="parameter-volume_backup_id">
    <td><CopyableCode code="volume_backup_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Volume backup ID (wire: volumeBackupId)</td>
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

Get volume backup

```sql
SELECT
id,
name,
volume_id,
creation_date,
region,
size,
status
FROM ovh.cloud_storage.region_volume_backups
WHERE region_name = '{{ region_name }}' -- required
AND volume_backup_id = '{{ volume_backup_id }}' -- required
AND service_name = '{{ service_name }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
<TabItem value="list">

List volume backups

```sql
SELECT
id,
name,
volume_id,
creation_date,
region,
size,
status
FROM ovh.cloud_storage.region_volume_backups
WHERE region_name = '{{ region_name }}' -- required
AND service_name = '{{ service_name }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
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

Create a volume backup

```sql
INSERT INTO ovh.cloud_storage.region_volume_backups (
name,
volume_id,
region_name,
service_name
)
SELECT 
'{{ name }}',
'{{ volume_id }}' /* required */,
'{{ region_name }}',
'{{ service_name }}'
RETURNING
id,
name,
volume_id,
creation_date,
region,
size,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: region_volume_backups
  props:
    - name: region_name
      value: "{{ region_name }}"
      description: Required parameter for the region_volume_backups resource.
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the region_volume_backups resource.
    - name: name
      value: "{{ name }}"
      description: |
        name of the backup
    - name: volume_id
      value: "{{ volume_id }}"
      description: |
        ID of the volume to backup
`}</CodeBlock>

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

Delete volume backup

```sql
DELETE FROM ovh.cloud_storage.region_volume_backups
WHERE region_name = '{{ region_name }}' --required
AND volume_backup_id = '{{ volume_backup_id }}' --required
AND service_name = '{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="restore"
    values={[
        { label: 'restore', value: 'restore' },
        { label: 'volume', value: 'volume' }
    ]}
>
<TabItem value="restore">

Restore a volume backup on a volume

```sql
EXEC ovh.cloud_storage.region_volume_backups.restore 
@regionName='{{ regionName }}' --required, 
@volumeBackupId='{{ volumeBackupId }}' --required, 
@service_name='{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set 
@@json=
'{
"volumeId": "{{ volumeId }}"
}'
;
```
</TabItem>
<TabItem value="volume">

Create a volume from a volume backup

```sql
EXEC ovh.cloud_storage.region_volume_backups.volume 
@regionName='{{ regionName }}' --required, 
@volumeBackupId='{{ volumeBackupId }}' --required, 
@service_name='{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set 
@@json=
'{
"name": "{{ name }}"
}'
;
```
</TabItem>
</Tabs>
