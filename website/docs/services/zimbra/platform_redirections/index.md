--- 
title: platform_redirections
hide_title: false
hide_table_of_contents: false
keywords:
  - platform_redirections
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

Creates, updates, deletes, gets or lists a <code>platform_redirections</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="platform_redirections" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.zimbra.platform_redirections" /></td></tr>
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
    <td>Object representing Redirection (wire: currentState)</td>
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
    <td>Object representing Redirection Target Spec (wire: targetSpec)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Response for get redirection

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
    <td>Object representing Redirection (wire: currentState)</td>
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
    <td>Object representing Redirection Target Spec (wire: targetSpec)</td>
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
    <td><a href="#parameter-platform_id"><code>platform_id</code></a>, <a href="#parameter-redirection_id"><code>redirection_id</code></a></td>
    <td></td>
    <td>Returns the source and destination email addresses of the redirection, with its domain and organization. (Beta version)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-platform_id"><code>platform_id</code></a></td>
    <td><a href="#parameter-x_pagination_cursor"><code>x_pagination_cursor</code></a>, <a href="#parameter-x_pagination_size"><code>x_pagination_size</code></a>, <a href="#parameter-destination"><code>destination</code></a>, <a href="#parameter-domain_id"><code>domain_id</code></a>, <a href="#parameter-organization_id"><code>organization_id</code></a>, <a href="#parameter-source"><code>source</code></a></td>
    <td>Returns the redirections of the platform with their current state. Filter them by `source`, `destination`, `domainId` or `organizationId`. (Beta version)</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-platform_id"><code>platform_id</code></a>, <a href="#parameter-target_spec"><code>target_spec</code></a></td>
    <td></td>
    <td>Creates a redirection from a `source` email address to a `destination` email address. (Beta version)</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-platform_id"><code>platform_id</code></a>, <a href="#parameter-redirection_id"><code>redirection_id</code></a></td>
    <td></td>
    <td>Deletes the redirection. (Beta version)</td>
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
<tr id="parameter-platform_id">
    <td><CopyableCode code="platform_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Platform ID (wire: platformId)</td>
</tr>
<tr id="parameter-redirection_id">
    <td><CopyableCode code="redirection_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Redirection ID (wire: redirectionId)</td>
</tr>
<tr id="parameter-destination">
    <td><CopyableCode code="destination" /></td>
    <td><code>string</code></td>
    <td>Filter by destination</td>
</tr>
<tr id="parameter-domain_id">
    <td><CopyableCode code="domain_id" /></td>
    <td><code>string</code></td>
    <td>Filter by domain id (wire: domainId)</td>
</tr>
<tr id="parameter-organization_id">
    <td><CopyableCode code="organization_id" /></td>
    <td><code>string</code></td>
    <td>Filter by organization id (wire: organizationId)</td>
</tr>
<tr id="parameter-source">
    <td><CopyableCode code="source" /></td>
    <td><code>string</code></td>
    <td>Filter by source</td>
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

Returns the source and destination email addresses of the redirection, with its domain and organization. (Beta version)

```sql
SELECT
id,
checksum,
current_state,
current_tasks,
resource_status,
target_spec
FROM ovh.zimbra.platform_redirections
WHERE platform_id = '{{ platform_id }}' -- required
AND redirection_id = '{{ redirection_id }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns the redirections of the platform with their current state. Filter them by `source`, `destination`, `domainId` or `organizationId`. (Beta version)

```sql
SELECT
id,
checksum,
current_state,
current_tasks,
resource_status,
target_spec
FROM ovh.zimbra.platform_redirections
WHERE platform_id = '{{ platform_id }}' -- required
AND x_pagination_cursor = '{{ x_pagination_cursor }}'
AND x_pagination_size = '{{ x_pagination_size }}'
AND destination = '{{ destination }}'
AND domain_id = '{{ domain_id }}'
AND organization_id = '{{ organization_id }}'
AND source = '{{ source }}'
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

Creates a redirection from a `source` email address to a `destination` email address. (Beta version)

```sql
INSERT INTO ovh.zimbra.platform_redirections (
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
- name: platform_redirections
  props:
    - name: platform_id
      value: "{{ platform_id }}"
      description: Required parameter for the platform_redirections resource.
    - name: target_spec
      description: |
        Target redirection specification
      value:
        destination: "{{ destination }}"
        source: "{{ source }}"
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

Deletes the redirection. (Beta version)

```sql
DELETE FROM ovh.zimbra.platform_redirections
WHERE platform_id = '{{ platform_id }}' --required
AND redirection_id = '{{ redirection_id }}' --required
;
```
</TabItem>
</Tabs>
