--- 
title: platform_aliases
hide_title: false
hide_table_of_contents: false
keywords:
  - platform_aliases
  - zimbra
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

Creates, updates, deletes, gets or lists a <code>platform_aliases</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="platform_aliases" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.zimbra.platform_aliases" /></td></tr>
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
    <td>Resource identifier in UUID representation</td>
</tr>
<tr>
    <td><CopyableCode code="checksum" /></td>
    <td><code>string</code></td>
    <td>Checksum hash in MD5 representation</td>
</tr>
<tr>
    <td><CopyableCode code="current_state" /></td>
    <td><code>object</code></td>
    <td>Object representing Alias (wire: currentState)</td>
</tr>
<tr>
    <td><CopyableCode code="current_tasks" /></td>
    <td><code>array</code></td>
    <td>An array containing tasks responses pending on resource extends AsyncResourceBase object (wire: currentTasks)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_status" /></td>
    <td><code>string</code></td>
    <td>Current resource status (CREATING, CREATION_PLANNED, DELETING, ERROR, OUT_OF_SYNC, READY, SUSPENDED, UNKNOWN, UPDATING) (wire: resourceStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="target_spec" /></td>
    <td><code>object</code></td>
    <td>Object representing Alias (wire: targetSpec)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Response for get Alias

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
    <td>Resource identifier in UUID representation</td>
</tr>
<tr>
    <td><CopyableCode code="checksum" /></td>
    <td><code>string</code></td>
    <td>Checksum hash in MD5 representation</td>
</tr>
<tr>
    <td><CopyableCode code="current_state" /></td>
    <td><code>object</code></td>
    <td>Object representing Alias (wire: currentState)</td>
</tr>
<tr>
    <td><CopyableCode code="current_tasks" /></td>
    <td><code>array</code></td>
    <td>An array containing tasks responses pending on resource extends AsyncResourceBase object (wire: currentTasks)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_status" /></td>
    <td><code>string</code></td>
    <td>Current resource status (CREATING, CREATION_PLANNED, DELETING, ERROR, OUT_OF_SYNC, READY, SUSPENDED, UNKNOWN, UPDATING) (wire: resourceStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="target_spec" /></td>
    <td><code>object</code></td>
    <td>Object representing Alias (wire: targetSpec)</td>
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
    <td><a href="#parameter-alias_id"><code>alias_id</code></a>, <a href="#parameter-platform_id"><code>platform_id</code></a></td>
    <td></td>
    <td>Returns the alias address, its domain and organization, and its target: an email account or a mailing list.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-platform_id"><code>platform_id</code></a></td>
    <td><a href="#parameter-x_pagination_cursor"><code>x_pagination_cursor</code></a>, <a href="#parameter-x_pagination_size"><code>x_pagination_size</code></a>, <a href="#parameter-alias"><code>alias</code></a>, <a href="#parameter-alias_organization_id"><code>alias_organization_id</code></a>, <a href="#parameter-alias_organization_label"><code>alias_organization_label</code></a>, <a href="#parameter-alias_target_id"><code>alias_target_id</code></a></td>
    <td>Returns the aliases of the platform with their target. Filter them by `alias`, `aliasTargetId`, `aliasOrganizationId` or `aliasOrganizationLabel`.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-platform_id"><code>platform_id</code></a>, <a href="#parameter-target_spec"><code>target_spec</code></a></td>
    <td></td>
    <td>Creates an alias address from `alias` and the ID of its target in `targetId`. The alias domain and the target domain must be in the same organization.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-alias_id"><code>alias_id</code></a>, <a href="#parameter-platform_id"><code>platform_id</code></a></td>
    <td></td>
    <td>Deletes the alias address. The alias, its domain and its target must be ready.</td>
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
<tr id="parameter-alias_id">
    <td><CopyableCode code="alias_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Alias ID (wire: aliasId)</td>
</tr>
<tr id="parameter-api_host">
    <td><CopyableCode code="api_host" /></td>
    <td><code>string</code></td>
    <td>The OVHcloud API host. Selected by OVH_ENDPOINT (ovh-eu, ovh-ca or ovh-us; default ovh-eu). (default: api.eu.ovhcloud.com, x-stackQL-envVarSelector: &#123;"envVar":"OVH_ENDPOINT","default":"ovh-eu","values":&#123;"ovh-eu":"api.eu.ovhcloud.com","ovh-ca":"api.ca.ovhcloud.com","ovh-us":"api.us.ovhcloud.com"&#125;&#125;)</td>
</tr>
<tr id="parameter-platform_id">
    <td><CopyableCode code="platform_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Platform ID (wire: platformId)</td>
</tr>
<tr id="parameter-alias">
    <td><CopyableCode code="alias" /></td>
    <td><code>string</code></td>
    <td>Filter by the alias email</td>
</tr>
<tr id="parameter-alias_organization_id">
    <td><CopyableCode code="alias_organization_id" /></td>
    <td><code>string</code></td>
    <td>Filter by organization identifier of the aliases (wire: aliasOrganizationId)</td>
</tr>
<tr id="parameter-alias_organization_label">
    <td><CopyableCode code="alias_organization_label" /></td>
    <td><code>string</code></td>
    <td>Filter by organization label of the aliases (wire: aliasOrganizationLabel)</td>
</tr>
<tr id="parameter-alias_target_id">
    <td><CopyableCode code="alias_target_id" /></td>
    <td><code>string</code></td>
    <td>Filter by the targeted email account identifier (wire: aliasTargetId)</td>
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

Returns the alias address, its domain and organization, and its target: an email account or a mailing list.

```sql
SELECT
id,
checksum,
current_state,
current_tasks,
resource_status,
target_spec
FROM ovh.zimbra.platform_aliases
WHERE alias_id = '{{ alias_id }}' -- required
AND platform_id = '{{ platform_id }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns the aliases of the platform with their target. Filter them by `alias`, `aliasTargetId`, `aliasOrganizationId` or `aliasOrganizationLabel`.

```sql
SELECT
id,
checksum,
current_state,
current_tasks,
resource_status,
target_spec
FROM ovh.zimbra.platform_aliases
WHERE platform_id = '{{ platform_id }}' -- required
AND x_pagination_cursor = '{{ x_pagination_cursor }}'
AND x_pagination_size = '{{ x_pagination_size }}'
AND alias = '{{ alias }}'
AND alias_organization_id = '{{ alias_organization_id }}'
AND alias_organization_label = '{{ alias_organization_label }}'
AND alias_target_id = '{{ alias_target_id }}'
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

Creates an alias address from `alias` and the ID of its target in `targetId`. The alias domain and the target domain must be in the same organization.

```sql
INSERT INTO ovh.zimbra.platform_aliases (
target_spec,
platform_id
)
SELECT 
'{{ target_spec }}' /* required */,
'{{ platform_id }}'
RETURNING
id,
checksum,
current_state,
current_tasks,
resource_status,
target_spec
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: platform_aliases
  props:
    - name: platform_id
      value: "{{ platform_id }}"
      description: Required parameter for the platform_aliases resource.
    - name: target_spec
      description: |
        Target alias specification
      value:
        alias: "{{ alias }}"
        targetId: "{{ targetId }}"
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

Deletes the alias address. The alias, its domain and its target must be ready.

```sql
DELETE FROM ovh.zimbra.platform_aliases
WHERE alias_id = '{{ alias_id }}' --required
AND platform_id = '{{ platform_id }}' --required
;
```
</TabItem>
</Tabs>
