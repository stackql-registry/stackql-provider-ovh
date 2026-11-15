--- 
title: compute_instance_groups
hide_title: false
hide_table_of_contents: false
keywords:
  - compute_instance_groups
  - public_cloud
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

Creates, updates, deletes, gets or lists a <code>compute_instance_groups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="compute_instance_groups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.public_cloud.compute_instance_groups" /></td></tr>
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
    <td>Unique identifier of the instance group, assigned at creation and used to reference it on the GET/DELETE routes</td>
</tr>
<tr>
    <td><CopyableCode code="checksum" /></td>
    <td><code>string</code></td>
    <td>Checksum. Computed hash of the current target specification, used for optimistic concurrency control. Because an instance group has no update route, this value never changes after creation.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date. Timestamp at which the instance group was created, in RFC 3339 format. (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="current_state" /></td>
    <td><code>object</code></td>
    <td>Actual state of the instance group as reported by the backend (OpenStack/Nova server group), including its current members. This is read-only and reflects reality, in contrast to targetSpec which is the desired specification supplied on creation. May be null while the group is still being provisioned and no backend state is known yet. (wire: currentState)</td>
</tr>
<tr>
    <td><CopyableCode code="current_tasks" /></td>
    <td><code>array</code></td>
    <td>Current tasks. Asynchronous operations currently running against this instance group, for example the initial provisioning or the deletion. Empty or null when no operation is in progress. (wire: currentTasks)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_status" /></td>
    <td><code>string</code></td>
    <td>Lifecycle status of the instance group in the system, for example whether it is being created, ready, or being deleted. Reflects readiness of the resource, not the placement policy itself. (CREATING, CREATION_PLANNED, DELETING, ERROR, OUT_OF_SYNC, READY, SUSPENDED, UNKNOWN, UPDATING) (wire: resourceStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="target_spec" /></td>
    <td><code>object</code></td>
    <td>Target specification. Desired specification of the instance group as supplied on creation (name, location and placement policy). Since an instance group cannot be updated, this specification is fixed for the lifetime of the group. Compare it against currentState to see what the backend actually provisioned. (wire: targetSpec)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Instance group (placement group). A Public Cloud instance group, backed by an OpenStack/Nova server group, that constrains how its member instances are placed relative to one another (see policy and PolicyEnum: AFFINITY / ANTI_AFFINITY). An instance group is immutable once created: there is no update (PUT) route, and its membership is fixed. Instances join a group only at instance-creation time, through the instance's targetSpec.group field. They cannot be added to or removed from a group afterward. The only lifecycle operations are create (POST), read (GET/LIST) and delete (DELETE). The object follows the standard envelope: targetSpec is the desired specification supplied on creation, while currentState reflects what the backend actually reports (including the current members).

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
    <td>Unique identifier of the instance group, assigned at creation and used to reference it on the GET/DELETE routes</td>
</tr>
<tr>
    <td><CopyableCode code="checksum" /></td>
    <td><code>string</code></td>
    <td>Checksum. Computed hash of the current target specification, used for optimistic concurrency control. Because an instance group has no update route, this value never changes after creation.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date. Timestamp at which the instance group was created, in RFC 3339 format. (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="current_state" /></td>
    <td><code>object</code></td>
    <td>Actual state of the instance group as reported by the backend (OpenStack/Nova server group), including its current members. This is read-only and reflects reality, in contrast to targetSpec which is the desired specification supplied on creation. May be null while the group is still being provisioned and no backend state is known yet. (wire: currentState)</td>
</tr>
<tr>
    <td><CopyableCode code="current_tasks" /></td>
    <td><code>array</code></td>
    <td>Current tasks. Asynchronous operations currently running against this instance group, for example the initial provisioning or the deletion. Empty or null when no operation is in progress. (wire: currentTasks)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_status" /></td>
    <td><code>string</code></td>
    <td>Lifecycle status of the instance group in the system, for example whether it is being created, ready, or being deleted. Reflects readiness of the resource, not the placement policy itself. (CREATING, CREATION_PLANNED, DELETING, ERROR, OUT_OF_SYNC, READY, SUSPENDED, UNKNOWN, UPDATING) (wire: resourceStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="target_spec" /></td>
    <td><code>object</code></td>
    <td>Target specification. Desired specification of the instance group as supplied on creation (name, location and placement policy). Since an instance group cannot be updated, this specification is fixed for the lifetime of the group. Compare it against currentState to see what the backend actually provisioned. (wire: targetSpec)</td>
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
    <td><a href="#parameter-instance_group_id"><code>instance_group_id</code></a>, <a href="#parameter-project_id"><code>project_id</code></a></td>
    <td></td>
    <td>### Get an instance group&lt;br /&gt;&lt;br /&gt;Returns a single instance group (placement group), including its scheduling `policy` and its members.&lt;br /&gt;&lt;br /&gt;### Immutable by design&lt;br /&gt;Instance groups are immutable after creation. There is deliberately no `PUT` / update route. Neither the placement `policy` nor the set of members can be changed once the group exists. Membership is fixed at *instance* creation time: an instance joins a group via its `targetSpec.group` field when it is created (see the instance `POST`), and cannot be added to or removed from a group afterward. To change grouping you delete and recreate the affected instances into a different group.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a></td>
    <td><a href="#parameter-x_pagination_cursor"><code>x_pagination_cursor</code></a>, <a href="#parameter-x_pagination_size"><code>x_pagination_size</code></a></td>
    <td>### List instance groups&lt;br /&gt;&lt;br /&gt;Lists all instance groups (placement groups) in the project, each with the same shape as the `GET` route (scheduling `policy` and members).&lt;br /&gt;&lt;br /&gt;### Immutable by design&lt;br /&gt;Instance groups cannot be modified after creation. There is deliberately no `PUT` / update route, and membership is fixed at *instance* creation time via the instance's `targetSpec.group` field. See the `GET` route for details.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-target_spec"><code>target_spec</code></a></td>
    <td></td>
    <td>### Create an instance group&lt;br /&gt;&lt;br /&gt;Creates a new instance group (placement group). Creation is asynchronous: the group starts in `CREATING` and becomes `READY` once the backend has provisioned it.&lt;br /&gt;&lt;br /&gt;### Placement policy&lt;br /&gt;`targetSpec.policy` chooses how members are scheduled relative to each other:&lt;br /&gt;* `AFFINITY` — members are placed on the same hypervisor.&lt;br /&gt;* `ANTI_AFFINITY` — members are placed on different hypervisors (for high availability).&lt;br /&gt;&lt;br /&gt;### Immutable, membership set at instance creation&lt;br /&gt;The group is immutable once created. There is deliberately no `PUT` / update route, so the `policy` can never be changed. The group is created empty: instances are not added here. An instance joins the group only at its own creation time, via its `targetSpec.group` field (see the instance `POST`), and membership cannot change afterward (OpenStack/Nova server groups are immutable).</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-instance_group_id"><code>instance_group_id</code></a>, <a href="#parameter-project_id"><code>project_id</code></a></td>
    <td></td>
    <td>### Delete an instance group&lt;br /&gt;&lt;br /&gt;Deletes an instance group (placement group). Deletion is asynchronous: the resource transitions to `DELETING` and the backend then removes it.&lt;br /&gt;&lt;br /&gt;A group is normally removed once it is empty (has no member instances). Because membership is fixed at *instance* creation time and cannot be edited on an existing group, freeing a group means deleting or recreating its member instances first. Deleting the group tears down only the placement grouping. It does not delete the instances themselves. A delete already in progress is reported as `ResourceAlreadyBeingDeleted`.</td>
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
<tr id="parameter-instance_group_id">
    <td><CopyableCode code="instance_group_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Instance group ID (wire: instanceGroupId)</td>
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

### Get an instance group&lt;br /&gt;&lt;br /&gt;Returns a single instance group (placement group), including its scheduling `policy` and its members.&lt;br /&gt;&lt;br /&gt;### Immutable by design&lt;br /&gt;Instance groups are immutable after creation. There is deliberately no `PUT` / update route. Neither the placement `policy` nor the set of members can be changed once the group exists. Membership is fixed at *instance* creation time: an instance joins a group via its `targetSpec.group` field when it is created (see the instance `POST`), and cannot be added to or removed from a group afterward. To change grouping you delete and recreate the affected instances into a different group.

```sql
SELECT
id,
checksum,
created_at,
current_state,
current_tasks,
resource_status,
target_spec
FROM ovh.public_cloud.compute_instance_groups
WHERE instance_group_id = '{{ instance_group_id }}' -- required
AND project_id = '{{ project_id }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
<TabItem value="list">

### List instance groups&lt;br /&gt;&lt;br /&gt;Lists all instance groups (placement groups) in the project, each with the same shape as the `GET` route (scheduling `policy` and members).&lt;br /&gt;&lt;br /&gt;### Immutable by design&lt;br /&gt;Instance groups cannot be modified after creation. There is deliberately no `PUT` / update route, and membership is fixed at *instance* creation time via the instance's `targetSpec.group` field. See the `GET` route for details.

```sql
SELECT
id,
checksum,
created_at,
current_state,
current_tasks,
resource_status,
target_spec
FROM ovh.public_cloud.compute_instance_groups
WHERE project_id = '{{ project_id }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
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

### Create an instance group&lt;br /&gt;&lt;br /&gt;Creates a new instance group (placement group). Creation is asynchronous: the group starts in `CREATING` and becomes `READY` once the backend has provisioned it.&lt;br /&gt;&lt;br /&gt;### Placement policy&lt;br /&gt;`targetSpec.policy` chooses how members are scheduled relative to each other:&lt;br /&gt;* `AFFINITY` — members are placed on the same hypervisor.&lt;br /&gt;* `ANTI_AFFINITY` — members are placed on different hypervisors (for high availability).&lt;br /&gt;&lt;br /&gt;### Immutable, membership set at instance creation&lt;br /&gt;The group is immutable once created. There is deliberately no `PUT` / update route, so the `policy` can never be changed. The group is created empty: instances are not added here. An instance joins the group only at its own creation time, via its `targetSpec.group` field (see the instance `POST`), and membership cannot change afterward (OpenStack/Nova server groups are immutable).

```sql
INSERT INTO ovh.public_cloud.compute_instance_groups (
target_spec,
project_id
)
SELECT 
'{{ target_spec }}' /* required */,
'{{ project_id }}'
RETURNING
id,
checksum,
created_at,
current_state,
current_tasks,
resource_status,
target_spec
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: compute_instance_groups
  props:
    - name: project_id
      value: "{{ project_id }}"
      description: Required parameter for the compute_instance_groups resource.
    - name: target_spec
      description: |
        Target specification. Desired specification of the instance group to create: its name, location and placement policy (see PolicyEnum). All of these values are fixed for the lifetime of the group, as instance groups cannot be updated once created.
      value:
        location:
          availabilityZone: "{{ availabilityZone }}"
          region: "{{ region }}"
        name: "{{ name }}"
        policy: "{{ policy }}"
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

### Delete an instance group&lt;br /&gt;&lt;br /&gt;Deletes an instance group (placement group). Deletion is asynchronous: the resource transitions to `DELETING` and the backend then removes it.&lt;br /&gt;&lt;br /&gt;A group is normally removed once it is empty (has no member instances). Because membership is fixed at *instance* creation time and cannot be edited on an existing group, freeing a group means deleting or recreating its member instances first. Deleting the group tears down only the placement grouping. It does not delete the instances themselves. A delete already in progress is reported as `ResourceAlreadyBeingDeleted`.

```sql
DELETE FROM ovh.public_cloud.compute_instance_groups
WHERE instance_group_id = '{{ instance_group_id }}' --required
AND project_id = '{{ project_id }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
</Tabs>
