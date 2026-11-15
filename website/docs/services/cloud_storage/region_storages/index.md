--- 
title: region_storages
hide_title: false
hide_table_of_contents: false
keywords:
  - region_storages
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

Creates, updates, deletes, gets or lists a <code>region_storages</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="region_storages" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.cloud_storage.region_storages" /></td></tr>
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
    <td>Container name.</td>
</tr>
<tr>
    <td><CopyableCode code="owner_id" /></td>
    <td><code>integer</code></td>
    <td>Container owner user ID. (wire: ownerId)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>Container ARN (Amazon Resource Name).</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and timestamp when the container was created. (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="encryption" /></td>
    <td><code>object</code></td>
    <td>Encryption configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycle" /></td>
    <td><code>object</code></td>
    <td>Lifecycle configuration</td>
</tr>
<tr>
    <td><CopyableCode code="object_lock" /></td>
    <td><code>object</code></td>
    <td>Object lock configuration. (wire: objectLock)</td>
</tr>
<tr>
    <td><CopyableCode code="objects" /></td>
    <td><code>array</code></td>
    <td>Container objects (deprecated).</td>
</tr>
<tr>
    <td><CopyableCode code="objects_count" /></td>
    <td><code>integer</code></td>
    <td>Container total objects count. (wire: objectsCount)</td>
</tr>
<tr>
    <td><CopyableCode code="objects_size" /></td>
    <td><code>integer</code></td>
    <td>Container total objects size in bytes. (wire: objectsSize)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Container region.</td>
</tr>
<tr>
    <td><CopyableCode code="replication" /></td>
    <td><code>object</code></td>
    <td>Replication configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Container tags.</td>
</tr>
<tr>
    <td><CopyableCode code="versioning" /></td>
    <td><code>object</code></td>
    <td>Versioning configuration.</td>
</tr>
<tr>
    <td><CopyableCode code="virtual_host" /></td>
    <td><code>string</code></td>
    <td>Container virtual host. (wire: virtualHost)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Object storage container.

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
    <td>Container name.</td>
</tr>
<tr>
    <td><CopyableCode code="owner_id" /></td>
    <td><code>integer</code></td>
    <td>Container owner user ID. (wire: ownerId)</td>
</tr>
<tr>
    <td><CopyableCode code="arn" /></td>
    <td><code>string</code></td>
    <td>Container ARN (Amazon Resource Name).</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and timestamp when the container was created. (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="objects" /></td>
    <td><code>array</code></td>
    <td>Container objects (deprecated).</td>
</tr>
<tr>
    <td><CopyableCode code="objects_count" /></td>
    <td><code>integer</code></td>
    <td>Container total objects count. (wire: objectsCount)</td>
</tr>
<tr>
    <td><CopyableCode code="objects_size" /></td>
    <td><code>integer</code></td>
    <td>Container total objects size in bytes. (wire: objectsSize)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Container region.</td>
</tr>
<tr>
    <td><CopyableCode code="virtual_host" /></td>
    <td><code>string</code></td>
    <td>Container virtual host. (wire: virtualHost)</td>
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
    <td><a href="#parameter-limit"><code>limit</code></a>, <a href="#parameter-marker"><code>marker</code></a>, <a href="#parameter-no_objects"><code>no_objects</code></a>, <a href="#parameter-prefix"><code>prefix</code></a></td>
    <td>&lt;sup&gt;*&lt;/sup&gt; S3 is a trademark filed by Amazon Technologies,Inc. OVHcloud's service is not sponsored by, endorsed by, or otherwise affiliated with Amazon Technologies,Inc.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region_name"><code>region_name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>&lt;sup&gt;*&lt;/sup&gt; S3 is a trademark filed by Amazon Technologies,Inc. OVHcloud's service is not sponsored by, endorsed by, or otherwise affiliated with Amazon Technologies,Inc.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region_name"><code>region_name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>&lt;sup&gt;*&lt;/sup&gt; S3 is a trademark filed by Amazon Technologies,Inc. OVHcloud's service is not sponsored by, endorsed by, or otherwise affiliated with Amazon Technologies,Inc.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-region_name"><code>region_name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
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
    <td><a href="#bulk_delete_objects"><CopyableCode code="bulk_delete_objects" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-regionName"><code>regionName</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-objects"><code>objects</code></a></td>
    <td></td>
    <td>Bulk delete container objects</td>
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
    <td>&lt;sup&gt;*&lt;/sup&gt; S3 is a trademark filed by Amazon Technologies,Inc. OVHcloud's service is not sponsored by, endorsed by, or otherwise affiliated with Amazon Technologies,Inc.</td>
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
    <td>Limit the number of objects returned (1000 maximum, defaults to 1000)</td>
</tr>
<tr id="parameter-marker">
    <td><CopyableCode code="marker" /></td>
    <td><code>string</code></td>
    <td>Key to start with when listing objects</td>
</tr>
<tr id="parameter-no_objects">
    <td><CopyableCode code="no_objects" /></td>
    <td><code>boolean</code></td>
    <td>Do not return container objects (wire: noObjects)</td>
</tr>
<tr id="parameter-prefix">
    <td><CopyableCode code="prefix" /></td>
    <td><code>string</code></td>
    <td>List objects whose key begins with this prefix</td>
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
arn,
created_at,
encryption,
lifecycle,
object_lock,
objects,
objects_count,
objects_size,
region,
replication,
tags,
versioning,
virtual_host
FROM ovh.cloud_storage.region_storages
WHERE name = '{{ name }}' -- required
AND region_name = '{{ region_name }}' -- required
AND service_name = '{{ service_name }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
AND limit = '{{ limit }}'
AND marker = '{{ marker }}'
AND no_objects = '{{ no_objects }}'
AND prefix = '{{ prefix }}'
;
```
</TabItem>
<TabItem value="list">

&lt;sup&gt;*&lt;/sup&gt; S3 is a trademark filed by Amazon Technologies,Inc. OVHcloud's service is not sponsored by, endorsed by, or otherwise affiliated with Amazon Technologies,Inc.

```sql
SELECT
name,
owner_id,
arn,
created_at,
objects,
objects_count,
objects_size,
region,
virtual_host
FROM ovh.cloud_storage.region_storages
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
INSERT INTO ovh.cloud_storage.region_storages (
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
arn,
created_at,
encryption,
lifecycle,
object_lock,
objects,
objects_count,
objects_size,
region,
replication,
tags,
versioning,
virtual_host
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: region_storages
  props:
    - name: region_name
      value: "{{ region_name }}"
      description: Required parameter for the region_storages resource.
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the region_storages resource.
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


## `UPDATE` examples

<Tabs
    defaultValue="update"
    values={[
        { label: 'update', value: 'update' }
    ]}
>
<TabItem value="update">

&lt;sup&gt;*&lt;/sup&gt; S3 is a trademark filed by Amazon Technologies,Inc. OVHcloud's service is not sponsored by, endorsed by, or otherwise affiliated with Amazon Technologies,Inc.

```sql
UPDATE ovh.cloud_storage.region_storages
SET 
encryption = '{{ encryption }}',
lifecycle = '{{ lifecycle }}',
object_lock = '{{ object_lock }}',
replication = '{{ replication }}',
tags = '{{ tags }}',
versioning = '{{ versioning }}'
WHERE 
name = '{{ name }}' --required
AND region_name = '{{ region_name }}' --required
AND service_name = '{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
RETURNING
name,
owner_id,
arn,
created_at,
encryption,
lifecycle,
object_lock,
objects,
objects_count,
objects_size,
region,
replication,
tags,
versioning,
virtual_host;
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

&lt;sup&gt;*&lt;/sup&gt; S3 is a trademark filed by Amazon Technologies,Inc. OVHcloud's service is not sponsored by, endorsed by, or otherwise affiliated with Amazon Technologies,Inc.

```sql
DELETE FROM ovh.cloud_storage.region_storages
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
    defaultValue="bulk_delete_objects"
    values={[
        { label: 'bulk_delete_objects', value: 'bulk_delete_objects' },
        { label: 'policy', value: 'policy' },
        { label: 'presign', value: 'presign' }
    ]}
>
<TabItem value="bulk_delete_objects">

Bulk delete container objects

```sql
EXEC ovh.cloud_storage.region_storages.bulk_delete_objects 
@name='{{ name }}' --required, 
@regionName='{{ regionName }}' --required, 
@service_name='{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set 
@@json=
'{
"objects": "{{ objects }}"
}'
;
```
</TabItem>
<TabItem value="policy">

&lt;sup&gt;*&lt;/sup&gt; S3 is a trademark filed by Amazon Technologies,Inc. OVHcloud's service is not sponsored by, endorsed by, or otherwise affiliated with Amazon Technologies,Inc.

```sql
EXEC ovh.cloud_storage.region_storages.policy 
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

&lt;sup&gt;*&lt;/sup&gt; S3 is a trademark filed by Amazon Technologies,Inc. OVHcloud's service is not sponsored by, endorsed by, or otherwise affiliated with Amazon Technologies,Inc.

```sql
EXEC ovh.cloud_storage.region_storages.presign 
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
</Tabs>
