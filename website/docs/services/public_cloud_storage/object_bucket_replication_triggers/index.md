--- 
title: object_bucket_replication_triggers
hide_title: false
hide_table_of_contents: false
keywords:
  - object_bucket_replication_triggers
  - public_cloud_storage
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

Creates, updates, deletes, gets or lists an <code>object_bucket_replication_triggers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="object_bucket_replication_triggers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.public_cloud_storage.object_bucket_replication_triggers" /></td></tr>
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
    <td>Unique identifier of the job</td>
</tr>
<tr>
    <td><CopyableCode code="completed" /></td>
    <td><code>integer</code></td>
    <td>Number of successfully replicated objects</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Job creation date (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="failed" /></td>
    <td><code>integer</code></td>
    <td>Number of objects that failed to replicate</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Job status (ACTIVE, COMPLETED, CREATED, FAILED, PREPARING)</td>
</tr>
<tr>
    <td><CopyableCode code="stuck" /></td>
    <td><code>integer</code></td>
    <td>Number of stuck objects</td>
</tr>
<tr>
    <td><CopyableCode code="total" /></td>
    <td><code>integer</code></td>
    <td>Total number of objects to replicate</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A batch replication job applying a bucket's replication configuration to its existing objects

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
    <td>Unique identifier of the job</td>
</tr>
<tr>
    <td><CopyableCode code="completed" /></td>
    <td><code>integer</code></td>
    <td>Number of successfully replicated objects</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Job creation date (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="failed" /></td>
    <td><code>integer</code></td>
    <td>Number of objects that failed to replicate</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Job status (ACTIVE, COMPLETED, CREATED, FAILED, PREPARING)</td>
</tr>
<tr>
    <td><CopyableCode code="stuck" /></td>
    <td><code>integer</code></td>
    <td>Number of stuck objects</td>
</tr>
<tr>
    <td><CopyableCode code="total" /></td>
    <td><code>integer</code></td>
    <td>Total number of objects to replicate</td>
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
    <td><a href="#parameter-bucket_name"><code>bucket_name</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-project_id"><code>project_id</code></a></td>
    <td></td>
    <td>Returns the progress of a batch replication job: total, completed, failed and stuck objects. (Alpha version)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-bucket_name"><code>bucket_name</code></a>, <a href="#parameter-project_id"><code>project_id</code></a></td>
    <td><a href="#parameter-x_pagination_cursor"><code>x_pagination_cursor</code></a>, <a href="#parameter-x_pagination_size"><code>x_pagination_size</code></a></td>
    <td>Returns the batch replication jobs of the bucket and their progress. (Alpha version)</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-bucket_name"><code>bucket_name</code></a>, <a href="#parameter-project_id"><code>project_id</code></a></td>
    <td></td>
    <td>Applies the current replication rules to the objects already in the bucket. (Alpha version)</td>
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
<tr id="parameter-bucket_name">
    <td><CopyableCode code="bucket_name" /></td>
    <td><code>string</code></td>
    <td>Bucket name (wire: bucketName)</td>
</tr>
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>Id</td>
</tr>
<tr id="parameter-project_id">
    <td><CopyableCode code="project_id" /></td>
    <td><code>string</code></td>
    <td>The Public Cloud project ID. Resolved from OVH_CLOUD_PROJECT_SERVICE when set.</td>
</tr>
<tr id="parameter-x_pagination_cursor">
    <td><CopyableCode code="x_pagination_cursor" /></td>
    <td><code>string</code></td>
    <td>Pagination cursor (wire: X-Pagination-Cursor)</td>
</tr>
<tr id="parameter-x_pagination_size">
    <td><CopyableCode code="x_pagination_size" /></td>
    <td><code>integer</code></td>
    <td>Pagination size (wire: X-Pagination-Size)</td>
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

Returns the progress of a batch replication job: total, completed, failed and stuck objects. (Alpha version)

```sql
SELECT
id,
completed,
created_at,
failed,
status,
stuck,
total
FROM ovh.public_cloud_storage.object_bucket_replication_triggers
WHERE bucket_name = '{{ bucket_name }}' -- required
AND id = '{{ id }}' -- required
AND project_id = '{{ project_id }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
<TabItem value="list">

Returns the batch replication jobs of the bucket and their progress. (Alpha version)

```sql
SELECT
id,
completed,
created_at,
failed,
status,
stuck,
total
FROM ovh.public_cloud_storage.object_bucket_replication_triggers
WHERE bucket_name = '{{ bucket_name }}' -- required
AND project_id = '{{ project_id }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
AND x_pagination_cursor = '{{ x_pagination_cursor }}'
AND x_pagination_size = '{{ x_pagination_size }}'
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

Applies the current replication rules to the objects already in the bucket. (Alpha version)

```sql
INSERT INTO ovh.public_cloud_storage.object_bucket_replication_triggers (
bucket_name,
project_id
)
SELECT 
'{{ bucket_name }}',
'{{ project_id }}'
RETURNING
id,
completed,
created_at,
failed,
status,
stuck,
total
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: object_bucket_replication_triggers
  props:
    - name: bucket_name
      value: "{{ bucket_name }}"
      description: Required parameter for the object_bucket_replication_triggers resource.
    - name: project_id
      value: "{{ project_id }}"
      description: Required parameter for the object_bucket_replication_triggers resource.
`}</CodeBlock>

</TabItem>
</Tabs>
