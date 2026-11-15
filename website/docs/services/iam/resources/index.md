--- 
title: resources
hide_title: false
hide_table_of_contents: false
keywords:
  - resources
  - iam
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

Creates, updates, deletes, gets or lists a <code>resources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resources" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.iam.resources" /></td></tr>
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
    <td>Identifier of the resource</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Resource name</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>Resource display name (wire: displayName)</td>
</tr>
<tr>
    <td><CopyableCode code="owner" /></td>
    <td><code>string</code></td>
    <td>Resource owner</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Resource tags. Tags that were internally computed are prefixed with ovh:</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Resource type. All types can be retrieved at /reference/resource/type.</td>
</tr>
<tr>
    <td><CopyableCode code="urn" /></td>
    <td><code>string</code></td>
    <td>Unique resource name used in policies</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Resource is an entity standing for a product. It is used for right delegation.

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
    <td>Identifier of the resource</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Resource name</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>Resource display name (wire: displayName)</td>
</tr>
<tr>
    <td><CopyableCode code="owner" /></td>
    <td><code>string</code></td>
    <td>Resource owner</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Resource tags. Tags that were internally computed are prefixed with ovh:</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Resource type. All types can be retrieved at /reference/resource/type.</td>
</tr>
<tr>
    <td><CopyableCode code="urn" /></td>
    <td><code>string</code></td>
    <td>Unique resource name used in policies</td>
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
    <td><a href="#parameter-resource_urn"><code>resource_urn</code></a></td>
    <td></td>
    <td>Returns the details of a resource identified by its URN.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-x_pagination_cursor"><code>x_pagination_cursor</code></a>, <a href="#parameter-x_pagination_size"><code>x_pagination_size</code></a>, <a href="#parameter-resource_name"><code>resource_name</code></a>, <a href="#parameter-resource_type"><code>resource_type</code></a>, <a href="#parameter-resource_urn"><code>resource_urn</code></a>, <a href="#parameter-tags"><code>tags</code></a></td>
    <td>Returns the resources of the account. Filter by `resourceType`, `resourceName`, `resourceURN` pattern and tag filters.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-resource_urn"><code>resource_urn</code></a></td>
    <td></td>
    <td>Updates the tags of the resource. Adding a tag requires the `$resourceType:apiovh:iam/resource/tag/add` action and removing one requires `$resourceType:apiovh:iam/resource/tag/remove`, with `$resourceType` the type of the resource.</td>
</tr>
<tr>
    <td><a href="#authorization_check"><CopyableCode code="authorization_check" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-resourceURN"><code>resourceURN</code></a>, <a href="#parameter-actions"><code>actions</code></a></td>
    <td></td>
    <td>Checks the listed actions on this resource.&lt;br /&gt;Returns the actions that are authorized and those that are not.</td>
</tr>
<tr>
    <td><a href="#tag"><CopyableCode code="tag" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-resourceURN"><code>resourceURN</code></a>, <a href="#parameter-key"><code>key</code></a>, <a href="#parameter-value"><code>value</code></a></td>
    <td></td>
    <td>Adds a tag, made of a key and a value, to the resource. Requires the `$resourceType:apiovh:iam/resource/tag/add` action on the resource type.</td>
</tr>
<tr>
    <td><a href="#delete_tag"><CopyableCode code="delete_tag" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-key"><code>key</code></a>, <a href="#parameter-resourceURN"><code>resourceURN</code></a></td>
    <td></td>
    <td>Deletes the tag identified by its key. Computed `ovh:` tags cannot be deleted. Requires the `$resourceType:apiovh:iam/resource/tag/remove` action on the resource type.</td>
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
<tr id="parameter-key">
    <td><CopyableCode code="key" /></td>
    <td><code>string</code></td>
    <td>Key</td>
</tr>
<tr id="parameter-resourceURN">
    <td><CopyableCode code="resourceURN" /></td>
    <td><code>string</code></td>
    <td>ResourceURN</td>
</tr>
<tr id="parameter-resource_urn">
    <td><CopyableCode code="resource_urn" /></td>
    <td><code>string</code></td>
    <td>ResourceURN (wire: resourceURN)</td>
</tr>
<tr id="parameter-resource_name">
    <td><CopyableCode code="resource_name" /></td>
    <td><code>array</code></td>
    <td>Filter resources for specific resource names (wire: resourceName)</td>
</tr>
<tr id="parameter-resource_type">
    <td><CopyableCode code="resource_type" /></td>
    <td><code>array</code></td>
    <td>Filter resources for specific resource types (wire: resourceType)</td>
</tr>
<tr id="parameter-resource_urn">
    <td><CopyableCode code="resource_urn" /></td>
    <td><code>array</code></td>
    <td>Filter resources for specific resource URN patterns (wire: resourceURN)</td>
</tr>
<tr id="parameter-tags">
    <td><CopyableCode code="tags" /></td>
    <td><code>object</code></td>
    <td>Filter resources using tag filters</td>
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

Returns the details of a resource identified by its URN.

```sql
SELECT
id,
name,
display_name,
owner,
tags,
type,
urn
FROM ovh.iam.resources
WHERE resource_urn = '{{ resource_urn }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns the resources of the account. Filter by `resourceType`, `resourceName`, `resourceURN` pattern and tag filters.

```sql
SELECT
id,
name,
display_name,
owner,
tags,
type,
urn
FROM ovh.iam.resources
WHERE x_pagination_cursor = '{{ x_pagination_cursor }}'
AND x_pagination_size = '{{ x_pagination_size }}'
AND resource_name = '{{ resource_name }}'
AND resource_type = '{{ resource_type }}'
AND resource_urn = '{{ resource_urn }}'
AND tags = '{{ tags }}'
;
```
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

Updates the tags of the resource. Adding a tag requires the `$resourceType:apiovh:iam/resource/tag/add` action and removing one requires `$resourceType:apiovh:iam/resource/tag/remove`, with `$resourceType` the type of the resource.

```sql
UPDATE ovh.iam.resources
SET 
tags = '{{ tags }}'
WHERE 
resource_urn = '{{ resource_urn }}' --required
RETURNING
id,
name,
display_name,
owner,
tags,
type,
urn;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="authorization_check"
    values={[
        { label: 'authorization_check', value: 'authorization_check' },
        { label: 'tag', value: 'tag' },
        { label: 'delete_tag', value: 'delete_tag' }
    ]}
>
<TabItem value="authorization_check">

Checks the listed actions on this resource.&lt;br /&gt;Returns the actions that are authorized and those that are not.

```sql
EXEC ovh.iam.resources.authorization_check 
@resourceURN='{{ resourceURN }}' --required 
@@json=
'{
"actions": "{{ actions }}"
}'
;
```
</TabItem>
<TabItem value="tag">

Adds a tag, made of a key and a value, to the resource. Requires the `$resourceType:apiovh:iam/resource/tag/add` action on the resource type.

```sql
EXEC ovh.iam.resources.tag 
@resourceURN='{{ resourceURN }}' --required 
@@json=
'{
"key": "{{ key }}", 
"value": "{{ value }}"
}'
;
```
</TabItem>
<TabItem value="delete_tag">

Deletes the tag identified by its key. Computed `ovh:` tags cannot be deleted. Requires the `$resourceType:apiovh:iam/resource/tag/remove` action on the resource type.

```sql
EXEC ovh.iam.resources.delete_tag 
@key='{{ key }}' --required, 
@resourceURN='{{ resourceURN }}' --required
;
```
</TabItem>
</Tabs>
