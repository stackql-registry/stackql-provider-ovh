--- 
title: data_smds
hide_title: false
hide_table_of_contents: false
keywords:
  - data_smds
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

Creates, updates, deletes, gets or lists a <code>data_smds</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="data_smds" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.domain.data_smds" /></td></tr>
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
    <td>UUID of SMD file</td>
</tr>
<tr>
    <td><CopyableCode code="smd_id" /></td>
    <td><code>string</code></td>
    <td>TMCH Internal identifier (wire: smdId)</td>
</tr>
<tr>
    <td><CopyableCode code="data" /></td>
    <td><code>string</code></td>
    <td>SMD file content</td>
</tr>
<tr>
    <td><CopyableCode code="not_after" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date when information about SMD file aren't valid anymore (wire: notAfter)</td>
</tr>
<tr>
    <td><CopyableCode code="not_before" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date before when information about SMD file aren't valid yet (wire: notBefore)</td>
</tr>
<tr>
    <td><CopyableCode code="protected_labels" /></td>
    <td><code>array</code></td>
    <td>List of the labels that are protect with that SMD file (wire: protectedLabels)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Representation of a SMD file

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
    <td>UUID of SMD file</td>
</tr>
<tr>
    <td><CopyableCode code="smd_id" /></td>
    <td><code>string</code></td>
    <td>TMCH Internal identifier (wire: smdId)</td>
</tr>
<tr>
    <td><CopyableCode code="data" /></td>
    <td><code>string</code></td>
    <td>SMD file content</td>
</tr>
<tr>
    <td><CopyableCode code="not_after" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date when information about SMD file aren't valid anymore (wire: notAfter)</td>
</tr>
<tr>
    <td><CopyableCode code="not_before" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date before when information about SMD file aren't valid yet (wire: notBefore)</td>
</tr>
<tr>
    <td><CopyableCode code="protected_labels" /></td>
    <td><code>array</code></td>
    <td>List of the labels that are protect with that SMD file (wire: protectedLabels)</td>
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
    <td><a href="#parameter-smd_id"><code>smd_id</code></a></td>
    <td></td>
    <td>Get details about a SMD file</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>List all SMD files</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Create a SMD file</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-smd_id"><code>smd_id</code></a>, <a href="#parameter-data"><code>data</code></a></td>
    <td></td>
    <td>Update a SMD file</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-smd_id"><code>smd_id</code></a></td>
    <td></td>
    <td>Delete a SMD file</td>
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
<tr id="parameter-smd_id">
    <td><CopyableCode code="smd_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Smd ID (wire: smdId)</td>
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

Get details about a SMD file

```sql
SELECT
id,
smd_id,
data,
not_after,
not_before,
protected_labels
FROM ovh.domain.data_smds
WHERE smd_id = '{{ smd_id }}' -- required
;
```
</TabItem>
<TabItem value="list">

List all SMD files

```sql
SELECT
id,
smd_id,
data,
not_after,
not_before,
protected_labels
FROM ovh.domain.data_smds
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

Create a SMD file

```sql
INSERT INTO ovh.domain.data_smds (
data
)
SELECT 
'{{ data }}' /* required */
RETURNING
id,
smd_id,
data,
not_after,
not_before,
protected_labels
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: data_smds
  props:
    - name: data
      value: "{{ data }}"
      description: |
        SMD file content in base64
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

Update a SMD file

```sql
UPDATE ovh.domain.data_smds
SET 
data = '{{ data }}'
WHERE 
smd_id = '{{ smd_id }}' --required
AND data = '{{ data }}' --required
RETURNING
id,
smd_id,
data,
not_after,
not_before,
protected_labels;
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

Delete a SMD file

```sql
DELETE FROM ovh.domain.data_smds
WHERE smd_id = '{{ smd_id }}' --required
;
```
</TabItem>
</Tabs>
