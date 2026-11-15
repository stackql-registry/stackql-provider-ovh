--- 
title: region_cold_archives
hide_title: false
hide_table_of_contents: false
keywords:
  - region_cold_archives
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

Creates, updates, deletes, gets or lists a <code>region_cold_archives</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="region_cold_archives" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.cloud_storage.region_cold_archives" /></td></tr>
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Container name</td>
</tr>
<tr>
    <td><CopyableCode code="owner_id" /></td>
    <td><code>integer</code></td>
    <td>Container owner user ID (wire: ownerId)</td>
</tr>
<tr>
    <td><CopyableCode code="automatic_deletion_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>After restoring your archive, date when the restored files will be deleted (wire: automaticDeletionAt)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when the resource was created (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="locked_until" /></td>
    <td><code>string (date-time)</code></td>
    <td>Archive is locked (cannot be deleted) until this date (wire: lockedUntil)</td>
</tr>
<tr>
    <td><CopyableCode code="objects" /></td>
    <td><code>array</code></td>
    <td>Container objects (deprecated)</td>
</tr>
<tr>
    <td><CopyableCode code="objects_count" /></td>
    <td><code>integer</code></td>
    <td>Container total objects count (wire: objectsCount)</td>
</tr>
<tr>
    <td><CopyableCode code="objects_size" /></td>
    <td><code>integer</code></td>
    <td>Container total objects size (bytes) (wire: objectsSize)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>ColdArchive status (archived, archiving, deleting, flushed, none, restored, restoring)</td>
</tr>
<tr>
    <td><CopyableCode code="virtual_host" /></td>
    <td><code>string</code></td>
    <td>Container virtual host (wire: virtualHost)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Container

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Container name</td>
</tr>
<tr>
    <td><CopyableCode code="owner_id" /></td>
    <td><code>integer</code></td>
    <td>Container owner user ID (wire: ownerId)</td>
</tr>
<tr>
    <td><CopyableCode code="automatic_deletion_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>After restoring your archive, date when the restored files will be deleted (wire: automaticDeletionAt)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date when the resource was created (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="locked_until" /></td>
    <td><code>string (date-time)</code></td>
    <td>Archive is locked (cannot be deleted) until this date (wire: lockedUntil)</td>
</tr>
<tr>
    <td><CopyableCode code="objects" /></td>
    <td><code>array</code></td>
    <td>Container objects (deprecated)</td>
</tr>
<tr>
    <td><CopyableCode code="objects_count" /></td>
    <td><code>integer</code></td>
    <td>Container total objects count (wire: objectsCount)</td>
</tr>
<tr>
    <td><CopyableCode code="objects_size" /></td>
    <td><code>integer</code></td>
    <td>Container total objects size (bytes) (wire: objectsSize)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>ColdArchive status (archived, archiving, deleting, flushed, none, restored, restoring)</td>
</tr>
<tr>
    <td><CopyableCode code="virtual_host" /></td>
    <td><code>string</code></td>
    <td>Container virtual host (wire: virtualHost)</td>
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
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region_name"><code>region_name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-marker"><code>marker</code></a>, <a href="#parameter-prefix"><code>prefix</code></a></td>
    <td>&lt;sup&gt;*&lt;/sup&gt; S3 is a trademark filed by Amazon Technologies,Inc. OVHcloud's service is not sponsored by, endorsed by, or otherwise affiliated with Amazon Technologies,Inc.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region_name"><code>region_name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get cold archive containers</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region_name"><code>region_name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>&lt;sup&gt;*&lt;/sup&gt; S3 is a trademark filed by Amazon Technologies,Inc. OVHcloud's service is not sponsored by, endorsed by, or otherwise affiliated with Amazon Technologies,Inc.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region_name"><code>region_name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>&lt;sup&gt;*&lt;/sup&gt; S3 is a trademark filed by Amazon Technologies,Inc. OVHcloud's service is not sponsored by, endorsed by, or otherwise affiliated with Amazon Technologies,Inc.</td>
</tr>
<tr>
    <td><a href="#archive"><CopyableCode code="archive" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-regionName"><code>regionName</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Start archiving of container</td>
</tr>
<tr>
    <td><a href="#destroy"><CopyableCode code="destroy" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-regionName"><code>regionName</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Start cleaning tape date of archived container</td>
</tr>
<tr>
    <td><a href="#delete_object"><CopyableCode code="delete_object" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-objectKey"><code>objectKey</code></a>, <a href="#parameter-regionName"><code>regionName</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>&lt;sup&gt;*&lt;/sup&gt; S3 is a trademark filed by Amazon Technologies,Inc. OVHcloud's service is not sponsored by, endorsed by, or otherwise affiliated with Amazon Technologies,Inc.</td>
</tr>
<tr>
    <td><a href="#policy"><CopyableCode code="policy" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-regionName"><code>regionName</code></a>, <a href="#parameter-userId"><code>userId</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-roleName"><code>roleName</code></a></td>
    <td></td>
    <td>&lt;sup&gt;*&lt;/sup&gt; S3 is a trademark filed by Amazon Technologies,Inc. OVHcloud's service is not sponsored by, endorsed by, or otherwise affiliated with Amazon Technologies,Inc.</td>
</tr>
<tr>
    <td><a href="#presign"><CopyableCode code="presign" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-regionName"><code>regionName</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Generate presigned URLs to download or upload objects</td>
</tr>
<tr>
    <td><a href="#restore"><CopyableCode code="restore" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-regionName"><code>regionName</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Start restoring of container</td>
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
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name</td>
</tr>
<tr id="parameter-objectKey">
    <td><CopyableCode code="objectKey" /></td>
    <td><code>string</code></td>
    <td>Object key</td>
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
<tr id="parameter-userId">
    <td><CopyableCode code="userId" /></td>
    <td><code>string</code></td>
    <td>User ID</td>
</tr>
<tr id="parameter-limit">
    <td><CopyableCode code="limit" /></td>
    <td><code>integer</code></td>
    <td>Limits the number of objects in the result</td>
</tr>
<tr id="parameter-marker">
    <td><CopyableCode code="marker" /></td>
    <td><code>string</code></td>
    <td>Constrains the list to objects whose names are greater than the marker</td>
</tr>
<tr id="parameter-prefix">
    <td><CopyableCode code="prefix" /></td>
    <td><code>string</code></td>
    <td>Filter objects by name prefix</td>
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

&lt;sup&gt;*&lt;/sup&gt; S3 is a trademark filed by Amazon Technologies,Inc. OVHcloud's service is not sponsored by, endorsed by, or otherwise affiliated with Amazon Technologies,Inc.

```sql
SELECT
name,
owner_id,
automatic_deletion_at,
created_at,
locked_until,
objects,
objects_count,
objects_size,
status,
virtual_host
FROM ovh.cloud_storage.region_cold_archives
WHERE name = '{{ name }}' -- required
AND region_name = '{{ region_name }}' -- required
AND service_name = '{{ service_name }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
AND limit = '{{ limit }}'
AND marker = '{{ marker }}'
AND prefix = '{{ prefix }}'
;
```
</TabItem>
<TabItem value="list">

Get cold archive containers

```sql
SELECT
name,
owner_id,
automatic_deletion_at,
created_at,
locked_until,
objects,
objects_count,
objects_size,
status,
virtual_host
FROM ovh.cloud_storage.region_cold_archives
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

&lt;sup&gt;*&lt;/sup&gt; S3 is a trademark filed by Amazon Technologies,Inc. OVHcloud's service is not sponsored by, endorsed by, or otherwise affiliated with Amazon Technologies,Inc.

```sql
INSERT INTO ovh.cloud_storage.region_cold_archives (
encryption,
lifecycle,
name,
object_lock,
owner_id,
replication,
tags,
versioning,
region_name,
service_name
)
SELECT 
'{{ encryption }}',
'{{ lifecycle }}',
'{{ name }}' /* required */,
'{{ object_lock }}',
{{ owner_id }},
'{{ replication }}',
'{{ tags }}',
'{{ versioning }}',
'{{ region_name }}',
'{{ service_name }}'
RETURNING
name,
owner_id,
automatic_deletion_at,
created_at,
locked_until,
objects,
objects_count,
objects_size,
status,
virtual_host
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: region_cold_archives
  props:
    - name: region_name
      value: "{{ region_name }}"
      description: Required parameter for the region_cold_archives resource.
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the region_cold_archives resource.
    - name: encryption
      description: |
        Encryption configuration.
      value:
        sseAlgorithm: "{{ sseAlgorithm }}"
    - name: lifecycle
      description: |
        Lifecycle configuration
      value:
        rules:
          - abortIncompleteMultipartUpload:
              daysAfterInitiation: {{ daysAfterInitiation }}
            expiration:
              date: "{{ date }}"
              days: {{ days }}
              expiredObjectDeleteMarker: {{ expiredObjectDeleteMarker }}
            filter:
              objectSizeGreaterThan: {{ objectSizeGreaterThan }}
              objectSizeLessThan: {{ objectSizeLessThan }}
              prefix: "{{ prefix }}"
              tags: "{{ tags }}"
            id: "{{ id }}"
            noncurrentVersionExpiration:
              newerNoncurrentVersions: {{ newerNoncurrentVersions }}
              noncurrentDays: {{ noncurrentDays }}
            noncurrentVersionTransitions: "{{ noncurrentVersionTransitions }}"
            status: "{{ status }}"
            transitions: "{{ transitions }}"
    - name: name
      value: "{{ name }}"
      description: |
        Container name.
    - name: object_lock
      description: |
        Object lock configuration.
      value:
        rule:
          mode: "{{ mode }}"
          period: "{{ period }}"
        status: "{{ status }}"
    - name: owner_id
      value: {{ owner_id }}
      description: |
        Container owner user ID.
    - name: replication
      description: |
        Replication configuration.
      value:
        rules:
          - deleteMarkerReplication: "{{ deleteMarkerReplication }}"
            destination:
              name: "{{ name }}"
              region: "{{ region }}"
              storageClass: "{{ storageClass }}"
            filter:
              prefix: "{{ prefix }}"
              tags: "{{ tags }}"
            id: "{{ id }}"
            priority: {{ priority }}
            status: "{{ status }}"
    - name: tags
      value: "{{ tags }}"
      description: |
        Container tags.
    - name: versioning
      description: |
        Versioning configuration.
      value:
        status: "{{ status }}"
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

&lt;sup&gt;*&lt;/sup&gt; S3 is a trademark filed by Amazon Technologies,Inc. OVHcloud's service is not sponsored by, endorsed by, or otherwise affiliated with Amazon Technologies,Inc.

```sql
DELETE FROM ovh.cloud_storage.region_cold_archives
WHERE name = '{{ name }}' --required
AND region_name = '{{ region_name }}' --required
AND service_name = '{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="archive"
    values={[
        { label: 'archive', value: 'archive' },
        { label: 'destroy', value: 'destroy' },
        { label: 'delete_object', value: 'delete_object' },
        { label: 'policy', value: 'policy' },
        { label: 'presign', value: 'presign' },
        { label: 'restore', value: 'restore' }
    ]}
>
<TabItem value="archive">

Start archiving of container

```sql
EXEC ovh.cloud_storage.region_cold_archives.archive 
@name='{{ name }}' --required, 
@regionName='{{ regionName }}' --required, 
@service_name='{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set 
@@json=
'{
"lockedUntilDays": {{ lockedUntilDays }}
}'
;
```
</TabItem>
<TabItem value="destroy">

Start cleaning tape date of archived container

```sql
EXEC ovh.cloud_storage.region_cold_archives.destroy 
@name='{{ name }}' --required, 
@regionName='{{ regionName }}' --required, 
@service_name='{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
<TabItem value="delete_object">

&lt;sup&gt;*&lt;/sup&gt; S3 is a trademark filed by Amazon Technologies,Inc. OVHcloud's service is not sponsored by, endorsed by, or otherwise affiliated with Amazon Technologies,Inc.

```sql
EXEC ovh.cloud_storage.region_cold_archives.delete_object 
@name='{{ name }}' --required, 
@objectKey='{{ objectKey }}' --required, 
@regionName='{{ regionName }}' --required, 
@service_name='{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
<TabItem value="policy">

&lt;sup&gt;*&lt;/sup&gt; S3 is a trademark filed by Amazon Technologies,Inc. OVHcloud's service is not sponsored by, endorsed by, or otherwise affiliated with Amazon Technologies,Inc.

```sql
EXEC ovh.cloud_storage.region_cold_archives.policy 
@name='{{ name }}' --required, 
@regionName='{{ regionName }}' --required, 
@userId='{{ userId }}' --required, 
@service_name='{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set 
@@json=
'{
"objectKey": "{{ objectKey }}", 
"roleName": "{{ roleName }}"
}'
;
```
</TabItem>
<TabItem value="presign">

Generate presigned URLs to download or upload objects

```sql
EXEC ovh.cloud_storage.region_cold_archives.presign 
@name='{{ name }}' --required, 
@regionName='{{ regionName }}' --required, 
@service_name='{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set 
@@json=
'{
"expire": {{ expire }}, 
"method": "{{ method }}", 
"object": "{{ object }}", 
"storageClass": "{{ storageClass }}", 
"versionId": "{{ versionId }}"
}'
;
```
</TabItem>
<TabItem value="restore">

Start restoring of container

```sql
EXEC ovh.cloud_storage.region_cold_archives.restore 
@name='{{ name }}' --required, 
@regionName='{{ regionName }}' --required, 
@service_name='{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
</Tabs>
