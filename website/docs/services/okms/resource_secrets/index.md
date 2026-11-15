--- 
title: resource_secrets
hide_title: false
hide_table_of_contents: false
keywords:
  - resource_secrets
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

Creates, updates, deletes, gets or lists a <code>resource_secrets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resource_secrets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.okms.resource_secrets" /></td></tr>
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
    <td><CopyableCode code="iam" /></td>
    <td><code>object</code></td>
    <td>IAM resource metadata</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>Secret metadata</td>
</tr>
<tr>
    <td><CopyableCode code="path" /></td>
    <td><code>string</code></td>
    <td>Unique identifier of the secret</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>object</code></td>
    <td>Data of the secret version</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

An OKMS secret

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
    <td><CopyableCode code="iam" /></td>
    <td><code>object</code></td>
    <td>IAM resource metadata</td>
</tr>
<tr>
    <td><CopyableCode code="metadata" /></td>
    <td><code>object</code></td>
    <td>Secret metadata</td>
</tr>
<tr>
    <td><CopyableCode code="path" /></td>
    <td><code>string</code></td>
    <td>Unique identifier of the secret</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>object</code></td>
    <td>Data of the secret version</td>
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
    <td><a href="#parameter-okms_id"><code>okms_id</code></a>, <a href="#parameter-path"><code>path</code></a></td>
    <td><a href="#parameter-include_data"><code>include_data</code></a>, <a href="#parameter-version"><code>version</code></a></td>
    <td>Returns a secret's metadata. By default the latest version is selected. Pass `version` to target another one.&lt;br /&gt;&lt;br /&gt;Set `includeData=true` to also return that version's data (requires the matching IAM action).</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-okms_id"><code>okms_id</code></a></td>
    <td><a href="#parameter-x_pagination_cursor"><code>x_pagination_cursor</code></a>, <a href="#parameter-x_pagination_size"><code>x_pagination_size</code></a>, <a href="#parameter-iam_tags"><code>iam_tags</code></a></td>
    <td>Lists secret paths with metadata (versions, CAS settings). The content of secret versions is not accessible through this API.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-okms_id"><code>okms_id</code></a>, <a href="#parameter-path"><code>path</code></a>, <a href="#parameter-version"><code>version</code></a></td>
    <td></td>
    <td>Creates a secret at the given path and stores the first version.&lt;br /&gt;Path and engine defaults (CAS, max versions) apply from the service secret config unless overridden in the body.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-okms_id"><code>okms_id</code></a>, <a href="#parameter-path"><code>path</code></a></td>
    <td><a href="#parameter-cas"><code>cas</code></a></td>
    <td>Updates the secret: include `version.data` to add a new version, and/or `metadata` to change this secret's engine settings.&lt;br /&gt;When `cas` is set, it must equal the current version for the write to succeed.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-okms_id"><code>okms_id</code></a>, <a href="#parameter-path"><code>path</code></a></td>
    <td></td>
    <td>Deletes the secret and all its versions.</td>
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
<tr id="parameter-cas">
    <td><CopyableCode code="cas" /></td>
    <td><code>integer</code></td>
    <td>Current secret version number. When the `cas` (Check and set) is specified, the current version of the secret is verified before updating it. In order for a write to be successful,`cas` must be set to the current version of the secret.</td>
</tr>
<tr id="parameter-iam_tags">
    <td><CopyableCode code="iam_tags" /></td>
    <td><code>object</code></td>
    <td>Filter resources on IAM tags (wire: iamTags)</td>
</tr>
<tr id="parameter-include_data">
    <td><CopyableCode code="include_data" /></td>
    <td><code>boolean</code></td>
    <td>Secret data (wire: includeData)</td>
</tr>
<tr id="parameter-version">
    <td><CopyableCode code="version" /></td>
    <td><code>integer</code></td>
    <td>Secret version. When omitted, the latest version will be returned.</td>
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

Returns a secret's metadata. By default the latest version is selected. Pass `version` to target another one.&lt;br /&gt;&lt;br /&gt;Set `includeData=true` to also return that version's data (requires the matching IAM action).

```sql
SELECT
iam,
metadata,
path,
version
FROM ovh.okms.resource_secrets
WHERE okms_id = '{{ okms_id }}' -- required
AND path = '{{ path }}' -- required
AND include_data = '{{ include_data }}'
AND version = '{{ version }}'
;
```
</TabItem>
<TabItem value="list">

Lists secret paths with metadata (versions, CAS settings). The content of secret versions is not accessible through this API.

```sql
SELECT
iam,
metadata,
path,
version
FROM ovh.okms.resource_secrets
WHERE okms_id = '{{ okms_id }}' -- required
AND x_pagination_cursor = '{{ x_pagination_cursor }}'
AND x_pagination_size = '{{ x_pagination_size }}'
AND iam_tags = '{{ iam_tags }}'
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

Creates a secret at the given path and stores the first version.&lt;br /&gt;Path and engine defaults (CAS, max versions) apply from the service secret config unless overridden in the body.

```sql
INSERT INTO ovh.okms.resource_secrets (
metadata,
path,
version,
okms_id
)
SELECT 
'{{ metadata }}',
'{{ path }}' /* required */,
'{{ version }}' /* required */,
'{{ okms_id }}'
RETURNING
metadata,
path
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: resource_secrets
  props:
    - name: okms_id
      value: "{{ okms_id }}"
      description: Required parameter for the resource_secrets resource.
    - name: metadata
      description: |
        Secret metadata
      value:
        casRequired: {{ casRequired }}
        customMetadata: "{{ customMetadata }}"
        deactivateVersionAfter: "{{ deactivateVersionAfter }}"
        maxVersions: {{ maxVersions }}
    - name: path
      value: "{{ path }}"
      description: |
        Secret path
    - name: version
      description: |
        Data of the secret version
      value:
        data: "{{ data }}"
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

Updates the secret: include `version.data` to add a new version, and/or `metadata` to change this secret's engine settings.&lt;br /&gt;When `cas` is set, it must equal the current version for the write to succeed.

```sql
UPDATE ovh.okms.resource_secrets
SET 
metadata = '{{ metadata }}',
version = '{{ version }}'
WHERE 
okms_id = '{{ okms_id }}' --required
AND path = '{{ path }}' --required
AND cas = '{{ cas}}'
RETURNING
metadata,
path;
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

Deletes the secret and all its versions.

```sql
DELETE FROM ovh.okms.resource_secrets
WHERE okms_id = '{{ okms_id }}' --required
AND path = '{{ path }}' --required
;
```
</TabItem>
</Tabs>
