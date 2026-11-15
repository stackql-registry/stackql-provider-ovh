--- 
title: region_share_acls
hide_title: false
hide_table_of_contents: false
keywords:
  - region_share_acls
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

Creates, updates, deletes, gets or lists a <code>region_share_acls</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="region_share_acls" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.cloud_storage.region_share_acls" /></td></tr>
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
    <td>ACL ID</td>
</tr>
<tr>
    <td><CopyableCode code="access_level" /></td>
    <td><code>string</code></td>
    <td>ACL Access Level (ro, rw) (wire: accessLevel)</td>
</tr>
<tr>
    <td><CopyableCode code="access_to" /></td>
    <td><code>string</code></td>
    <td>ACL Access Resource (wire: accessTo)</td>
</tr>
<tr>
    <td><CopyableCode code="access_type" /></td>
    <td><code>string</code></td>
    <td>ACL Access Type (ip) (wire: accessType)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and timestamp when the resource was created (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>ACL Status (active, applying, denying, error, queued_to_apply, queued_to_deny)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and timestamp when the resource was updated for the last time (wire: updatedAt)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Share ACL

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
    <td>ACL ID</td>
</tr>
<tr>
    <td><CopyableCode code="access_level" /></td>
    <td><code>string</code></td>
    <td>ACL Access Level (ro, rw) (wire: accessLevel)</td>
</tr>
<tr>
    <td><CopyableCode code="access_to" /></td>
    <td><code>string</code></td>
    <td>ACL Access Resource (wire: accessTo)</td>
</tr>
<tr>
    <td><CopyableCode code="access_type" /></td>
    <td><code>string</code></td>
    <td>ACL Access Type (ip) (wire: accessType)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and timestamp when the resource was created (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>ACL Status (active, applying, denying, error, queued_to_apply, queued_to_deny)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and timestamp when the resource was updated for the last time (wire: updatedAt)</td>
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
    <td><a href="#parameter-acl_id"><code>acl_id</code></a>, <a href="#parameter-region_name"><code>region_name</code></a>, <a href="#parameter-share_id"><code>share_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get share ACL</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region_name"><code>region_name</code></a>, <a href="#parameter-share_id"><code>share_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get share ACLs</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region_name"><code>region_name</code></a>, <a href="#parameter-share_id"><code>share_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Create share ACL</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-acl_id"><code>acl_id</code></a>, <a href="#parameter-region_name"><code>region_name</code></a>, <a href="#parameter-share_id"><code>share_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Delete share ACL</td>
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
<tr id="parameter-acl_id">
    <td><CopyableCode code="acl_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Acl ID (wire: aclId)</td>
</tr>
<tr id="parameter-api_host">
    <td><CopyableCode code="api_host" /></td>
    <td><code>string</code></td>
    <td>The OVHcloud API host. Selected by OVH_ENDPOINT (ovh-eu, ovh-ca or ovh-us; default ovh-eu). (default: api.eu.ovhcloud.com, x-stackQL-envVarSelector: &#123;"envVar":"OVH_ENDPOINT","default":"ovh-eu","values":&#123;"ovh-eu":"api.eu.ovhcloud.com","ovh-ca":"api.ca.ovhcloud.com","ovh-us":"api.us.ovhcloud.com"&#125;&#125;)</td>
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
<tr id="parameter-share_id">
    <td><CopyableCode code="share_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Share ID (wire: shareId)</td>
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

Get share ACL

```sql
SELECT
id,
access_level,
access_to,
access_type,
created_at,
status,
updated_at
FROM ovh.cloud_storage.region_share_acls
WHERE acl_id = '{{ acl_id }}' -- required
AND region_name = '{{ region_name }}' -- required
AND share_id = '{{ share_id }}' -- required
AND service_name = '{{ service_name }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
<TabItem value="list">

Get share ACLs

```sql
SELECT
id,
access_level,
access_to,
access_type,
created_at,
status,
updated_at
FROM ovh.cloud_storage.region_share_acls
WHERE region_name = '{{ region_name }}' -- required
AND share_id = '{{ share_id }}' -- required
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

Create share ACL

```sql
INSERT INTO ovh.cloud_storage.region_share_acls (
access_level,
access_to,
region_name,
share_id,
service_name
)
SELECT 
'{{ access_level }}',
'{{ access_to }}',
'{{ region_name }}',
'{{ share_id }}',
'{{ service_name }}'
RETURNING
id,
access_level,
access_to,
access_type,
created_at,
status,
updated_at
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: region_share_acls
  props:
    - name: region_name
      value: "{{ region_name }}"
      description: Required parameter for the region_share_acls resource.
    - name: share_id
      value: "{{ share_id }}"
      description: Required parameter for the region_share_acls resource.
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the region_share_acls resource.
    - name: access_level
      value: "{{ access_level }}"
      description: |
        ACL Access Level
      valid_values: ['ro', 'rw']
    - name: access_to
      value: "{{ access_to }}"
      description: |
        ACL Access Resource
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

Delete share ACL

```sql
DELETE FROM ovh.cloud_storage.region_share_acls
WHERE acl_id = '{{ acl_id }}' --required
AND region_name = '{{ region_name }}' --required
AND share_id = '{{ share_id }}' --required
AND service_name = '{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
</Tabs>
