--- 
title: resource_secret_versions
hide_title: false
hide_table_of_contents: false
keywords:
  - resource_secret_versions
  - okms
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

Creates, updates, deletes, gets or lists a <code>resource_secret_versions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resource_secret_versions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.okms.resource_secret_versions" /></td></tr>
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
    <td><code>integer</code></td>
    <td>Secret version</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Time of creation of the secret version (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="data" /></td>
    <td><code></code></td>
    <td>Secret version data (example: This is a content of any type !)</td>
</tr>
<tr>
    <td><CopyableCode code="deactivated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Time of deactivation of the secret version (wire: deactivatedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>State of the secret version (ACTIVE, DEACTIVATED, DELETED)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

An OKMS secret version

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
    <td><code>integer</code></td>
    <td>Secret version</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Time of creation of the secret version (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="data" /></td>
    <td><code></code></td>
    <td>Secret version data (example: This is a content of any type !)</td>
</tr>
<tr>
    <td><CopyableCode code="deactivated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Time of deactivation of the secret version (wire: deactivatedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>State of the secret version (ACTIVE, DEACTIVATED, DELETED)</td>
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
    <td><a href="#parameter-okms_id"><code>okms_id</code></a>, <a href="#parameter-path"><code>path</code></a>, <a href="#parameter-version"><code>version</code></a></td>
    <td><a href="#parameter-include_data"><code>include_data</code></a></td>
    <td>Returns one version's metadata. Set `includeData=true` to also return the version data.&lt;br /&gt;&lt;br /&gt;Reading the data requires a specific IAM right.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-okms_id"><code>okms_id</code></a>, <a href="#parameter-path"><code>path</code></a></td>
    <td><a href="#parameter-x_pagination_cursor"><code>x_pagination_cursor</code></a>, <a href="#parameter-x_pagination_size"><code>x_pagination_size</code></a></td>
    <td>Lists version numbers and states for the secret. Version data is not returned by this API.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-okms_id"><code>okms_id</code></a>, <a href="#parameter-path"><code>path</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td><a href="#parameter-cas"><code>cas</code></a></td>
    <td>Appends a new version of the secret data. Optional `cas` must match the current version or the write is rejected.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-okms_id"><code>okms_id</code></a>, <a href="#parameter-path"><code>path</code></a>, <a href="#parameter-version"><code>version</code></a>, <a href="#parameter-state"><code>state</code></a></td>
    <td></td>
    <td>Changes the version state: activate, deactivate, or delete.&lt;br /&gt;&lt;br /&gt;To modify the secret data, create a new version.</td>
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
<tr id="parameter-okms_id">
    <td><CopyableCode code="okms_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Okms ID (wire: okmsId)</td>
</tr>
<tr id="parameter-path">
    <td><CopyableCode code="path" /></td>
    <td><code>string</code></td>
    <td>Path</td>
</tr>
<tr id="parameter-version">
    <td><CopyableCode code="version" /></td>
    <td><code>integer</code></td>
    <td>Version</td>
</tr>
<tr id="parameter-cas">
    <td><CopyableCode code="cas" /></td>
    <td><code>integer</code></td>
    <td>Current secret version number. When the `cas` (Check and set) is specified, the current version of the secret is verified before updating it. In order for a write to be successful,`cas` must be set to the current version of the secret.</td>
</tr>
<tr id="parameter-include_data">
    <td><CopyableCode code="include_data" /></td>
    <td><code>boolean</code></td>
    <td>Secret version data (wire: includeData)</td>
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

Returns one version's metadata. Set `includeData=true` to also return the version data.&lt;br /&gt;&lt;br /&gt;Reading the data requires a specific IAM right.

```sql
SELECT
id,
created_at,
data,
deactivated_at,
state
FROM ovh.okms.resource_secret_versions
WHERE okms_id = '{{ okms_id }}' -- required
AND path = '{{ path }}' -- required
AND version = '{{ version }}' -- required
AND include_data = '{{ include_data }}'
;
```
</TabItem>
<TabItem value="list">

Lists version numbers and states for the secret. Version data is not returned by this API.

```sql
SELECT
id,
created_at,
data,
deactivated_at,
state
FROM ovh.okms.resource_secret_versions
WHERE okms_id = '{{ okms_id }}' -- required
AND path = '{{ path }}' -- required
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

Appends a new version of the secret data. Optional `cas` must match the current version or the write is rejected.

```sql
INSERT INTO ovh.okms.resource_secret_versions (
data,
okms_id,
path,
cas
)
SELECT 
'{{ data }}' /* required */,
'{{ okms_id }}',
'{{ path }}',
'{{ cas }}'
RETURNING
id,
created_at,
data,
deactivated_at,
state
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: resource_secret_versions
  props:
    - name: okms_id
      value: "{{ okms_id }}"
      description: Required parameter for the resource_secret_versions resource.
    - name: path
      value: "{{ path }}"
      description: Required parameter for the resource_secret_versions resource.
    - name: data
      value: "{{ data }}"
      description: |
        Secret version data in key value json format
    - name: cas
      value: {{ cas }}
      description: Current secret version number. When the \`cas\` (Check and set) is specified, the current version of the secret is verified before updating it. In order for a write to be successful,\`cas\` must be set to the current version of the secret.
      description: Current secret version number. When the \`cas\` (Check and set) is specified, the current version of the secret is verified before updating it. In order for a write to be successful,\`cas\` must be set to the current version of the secret.
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

Changes the version state: activate, deactivate, or delete.&lt;br /&gt;&lt;br /&gt;To modify the secret data, create a new version.

```sql
UPDATE ovh.okms.resource_secret_versions
SET 
state = '{{ state }}'
WHERE 
okms_id = '{{ okms_id }}' --required
AND path = '{{ path }}' --required
AND version = '{{ version }}' --required
AND state = '{{ state }}' --required
RETURNING
id,
created_at,
deactivated_at,
state;
```
</TabItem>
</Tabs>
