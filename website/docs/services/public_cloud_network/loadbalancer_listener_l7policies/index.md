--- 
title: loadbalancer_listener_l7policies
hide_title: false
hide_table_of_contents: false
keywords:
  - loadbalancer_listener_l7policies
  - public_cloud_network
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

Creates, updates, deletes, gets or lists a <code>loadbalancer_listener_l7policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="loadbalancer_listener_l7policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.public_cloud_network.loadbalancer_listener_l7policies" /></td></tr>
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
    <td>Unique identifier of the L7 policy</td>
</tr>
<tr>
    <td><CopyableCode code="checksum" /></td>
    <td><code>string</code></td>
    <td>Computed hash representing the current target specification value</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date of the L7 policy (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="current_state" /></td>
    <td><code>object</code></td>
    <td>Current state of the L7 policy (wire: currentState)</td>
</tr>
<tr>
    <td><CopyableCode code="current_tasks" /></td>
    <td><code>array</code></td>
    <td>Ongoing asynchronous tasks related to the L7 policy (wire: currentTasks)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_status" /></td>
    <td><code>string</code></td>
    <td>L7 policy readiness in the system (CREATING, CREATION_PLANNED, DELETING, ERROR, OUT_OF_SYNC, READY, SUSPENDED, UNKNOWN, UPDATING) (wire: resourceStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="target_spec" /></td>
    <td><code>object</code></td>
    <td>Last target specification of the L7 policy (wire: targetSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last update date of the L7 policy (wire: updatedAt)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A Public Cloud load balancer L7 policy

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
    <td>Unique identifier of the L7 policy</td>
</tr>
<tr>
    <td><CopyableCode code="checksum" /></td>
    <td><code>string</code></td>
    <td>Computed hash representing the current target specification value</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date of the L7 policy (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="current_state" /></td>
    <td><code>object</code></td>
    <td>Current state of the L7 policy (wire: currentState)</td>
</tr>
<tr>
    <td><CopyableCode code="current_tasks" /></td>
    <td><code>array</code></td>
    <td>Ongoing asynchronous tasks related to the L7 policy (wire: currentTasks)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_status" /></td>
    <td><code>string</code></td>
    <td>L7 policy readiness in the system (CREATING, CREATION_PLANNED, DELETING, ERROR, OUT_OF_SYNC, READY, SUSPENDED, UNKNOWN, UPDATING) (wire: resourceStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="target_spec" /></td>
    <td><code>object</code></td>
    <td>Last target specification of the L7 policy (wire: targetSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last update date of the L7 policy (wire: updatedAt)</td>
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
    <td><a href="#parameter-l_7_policy_id"><code>l_7_policy_id</code></a>, <a href="#parameter-listener_id"><code>listener_id</code></a>, <a href="#parameter-loadbalancer_id"><code>loadbalancer_id</code></a>, <a href="#parameter-project_id"><code>project_id</code></a></td>
    <td></td>
    <td>Returns the L7 policy, including its action and matching rules.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-listener_id"><code>listener_id</code></a>, <a href="#parameter-loadbalancer_id"><code>loadbalancer_id</code></a>, <a href="#parameter-project_id"><code>project_id</code></a></td>
    <td><a href="#parameter-x_pagination_cursor"><code>x_pagination_cursor</code></a>, <a href="#parameter-x_pagination_size"><code>x_pagination_size</code></a>, <a href="#parameter-action"><code>action</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td>Returns the L7 policies of the listener.&lt;br /&gt;&lt;br /&gt;### Filters&lt;br /&gt;The optional `name` and `action` query parameters narrow the list. Each one can be repeated (for example `?action=REJECT&action=REDIRECT_TO_POOL`): repeated values of the same parameter are combined with OR, and different parameters are combined with AND. An unknown `action` value is rejected with a `400 InvalidParameter`. The `resourceStatus` is computed from the live state of each resource, so it is not a filter: a `status` query parameter is rejected with a `400 InvalidParameter`.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-listener_id"><code>listener_id</code></a>, <a href="#parameter-loadbalancer_id"><code>loadbalancer_id</code></a>, <a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-target_spec"><code>target_spec</code></a></td>
    <td></td>
    <td>Creates an L7 policy that redirects or rejects traffic matching its rules. Position sets its evaluation order among the listener's policies.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-l_7_policy_id"><code>l_7_policy_id</code></a>, <a href="#parameter-listener_id"><code>listener_id</code></a>, <a href="#parameter-loadbalancer_id"><code>loadbalancer_id</code></a>, <a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-target_spec"><code>target_spec</code></a></td>
    <td></td>
    <td>Replaces the L7 policy's target specification as a whole, including its action and evaluation position.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-l_7_policy_id"><code>l_7_policy_id</code></a>, <a href="#parameter-listener_id"><code>listener_id</code></a>, <a href="#parameter-loadbalancer_id"><code>loadbalancer_id</code></a>, <a href="#parameter-project_id"><code>project_id</code></a></td>
    <td></td>
    <td>Deletes the L7 policy.</td>
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
<tr id="parameter-l_7_policy_id">
    <td><CopyableCode code="l_7_policy_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>L7 policy ID (wire: l7PolicyId)</td>
</tr>
<tr id="parameter-listener_id">
    <td><CopyableCode code="listener_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Listener ID (wire: listenerId)</td>
</tr>
<tr id="parameter-loadbalancer_id">
    <td><CopyableCode code="loadbalancer_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Loadbalancer ID (wire: loadbalancerId)</td>
</tr>
<tr id="parameter-project_id">
    <td><CopyableCode code="project_id" /></td>
    <td><code>string</code></td>
    <td>The Public Cloud project ID. Resolved from OVH_CLOUD_PROJECT_SERVICE when set.</td>
</tr>
<tr id="parameter-action">
    <td><CopyableCode code="action" /></td>
    <td><code>array</code></td>
    <td>Filter by L7 policy action. Repeatable.</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>array</code></td>
    <td>Filter by L7 policy name (case-insensitive substring match). Repeatable.</td>
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

Returns the L7 policy, including its action and matching rules.

```sql
SELECT
id,
checksum,
created_at,
current_state,
current_tasks,
resource_status,
target_spec,
updated_at
FROM ovh.public_cloud_network.loadbalancer_listener_l7policies
WHERE l_7_policy_id = '{{ l_7_policy_id }}' -- required
AND listener_id = '{{ listener_id }}' -- required
AND loadbalancer_id = '{{ loadbalancer_id }}' -- required
AND project_id = '{{ project_id }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
<TabItem value="list">

Returns the L7 policies of the listener.&lt;br /&gt;&lt;br /&gt;### Filters&lt;br /&gt;The optional `name` and `action` query parameters narrow the list. Each one can be repeated (for example `?action=REJECT&action=REDIRECT_TO_POOL`): repeated values of the same parameter are combined with OR, and different parameters are combined with AND. An unknown `action` value is rejected with a `400 InvalidParameter`. The `resourceStatus` is computed from the live state of each resource, so it is not a filter: a `status` query parameter is rejected with a `400 InvalidParameter`.

```sql
SELECT
id,
checksum,
created_at,
current_state,
current_tasks,
resource_status,
target_spec,
updated_at
FROM ovh.public_cloud_network.loadbalancer_listener_l7policies
WHERE listener_id = '{{ listener_id }}' -- required
AND loadbalancer_id = '{{ loadbalancer_id }}' -- required
AND project_id = '{{ project_id }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
AND x_pagination_cursor = '{{ x_pagination_cursor }}'
AND x_pagination_size = '{{ x_pagination_size }}'
AND action = '{{ action }}'
AND name = '{{ name }}'
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

Creates an L7 policy that redirects or rejects traffic matching its rules. Position sets its evaluation order among the listener's policies.

```sql
INSERT INTO ovh.public_cloud_network.loadbalancer_listener_l7policies (
target_spec,
listener_id,
loadbalancer_id,
project_id
)
SELECT 
'{{ target_spec }}' /* required */,
'{{ listener_id }}',
'{{ loadbalancer_id }}',
'{{ project_id }}'
RETURNING
id,
checksum,
created_at,
current_state,
current_tasks,
resource_status,
target_spec,
updated_at
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: loadbalancer_listener_l7policies
  props:
    - name: listener_id
      value: "{{ listener_id }}"
      description: Required parameter for the loadbalancer_listener_l7policies resource.
    - name: loadbalancer_id
      value: "{{ loadbalancer_id }}"
      description: Required parameter for the loadbalancer_listener_l7policies resource.
    - name: project_id
      value: "{{ project_id }}"
      description: Required parameter for the loadbalancer_listener_l7policies resource.
    - name: target_spec
      description: |
        Desired target specification for the L7 policy to create
      value:
        action: "{{ action }}"
        description: "{{ description }}"
        name: "{{ name }}"
        position: {{ position }}
        redirectHttpCode: {{ redirectHttpCode }}
        redirectPool:
          id: "{{ id }}"
        redirectPrefix: "{{ redirectPrefix }}"
        redirectUrl: "{{ redirectUrl }}"
        rules:
          - compareType: "{{ compareType }}"
            invert: {{ invert }}
            key: "{{ key }}"
            type: "{{ type }}"
            value: "{{ value }}"
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

Replaces the L7 policy's target specification as a whole, including its action and evaluation position.

```sql
UPDATE ovh.public_cloud_network.loadbalancer_listener_l7policies
SET 
checksum = '{{ checksum }}',
target_spec = '{{ target_spec }}'
WHERE 
l_7_policy_id = '{{ l_7_policy_id }}' --required
AND listener_id = '{{ listener_id }}' --required
AND loadbalancer_id = '{{ loadbalancer_id }}' --required
AND project_id = '{{ project_id }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
AND target_spec = '{{ target_spec }}' --required
RETURNING
id,
checksum,
created_at,
current_state,
current_tasks,
resource_status,
target_spec,
updated_at;
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

Deletes the L7 policy.

```sql
DELETE FROM ovh.public_cloud_network.loadbalancer_listener_l7policies
WHERE l_7_policy_id = '{{ l_7_policy_id }}' --required
AND listener_id = '{{ listener_id }}' --required
AND loadbalancer_id = '{{ loadbalancer_id }}' --required
AND project_id = '{{ project_id }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
</Tabs>
