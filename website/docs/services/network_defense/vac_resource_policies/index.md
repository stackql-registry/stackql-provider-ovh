--- 
title: vac_resource_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - vac_resource_policies
  - network_defense
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

Creates, updates, deletes, gets or lists a <code>vac_resource_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="vac_resource_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.network_defense.vac_resource_policies" /></td></tr>
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
    <td>Unique identifier of the policy</td>
</tr>
<tr>
    <td><CopyableCode code="checksum" /></td>
    <td><code>string</code></td>
    <td>Checksum of the current configuration, used to detect concurrent changes. Provide it on update to avoid overwriting another change.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time the policy was created (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="current_state" /></td>
    <td><code>object</code></td>
    <td>Configuration currently being enforced. Null while the policy is still being created (CREATING). (wire: currentState)</td>
</tr>
<tr>
    <td><CopyableCode code="error_message" /></td>
    <td><code>string</code></td>
    <td>Details of the last error, set when the status is ERROR (wire: errorMessage)</td>
</tr>
<tr>
    <td><CopyableCode code="iam" /></td>
    <td><code>object</code></td>
    <td>IAM resource metadata</td>
</tr>
<tr>
    <td><CopyableCode code="resource_status" /></td>
    <td><code>string</code></td>
    <td>Current status of the policy (CREATING, CREATION_PLANNED, DELETING, ERROR, OUT_OF_SYNC, READY, SUSPENDED, UNKNOWN, UPDATING) (wire: resourceStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="target_spec" /></td>
    <td><code>object</code></td>
    <td>Configuration you requested. While a change is being applied (CREATING, UPDATING or ERROR) it differs from currentState. Once READY it mirrors currentState. Null while the policy is being deleted. (wire: targetSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time the policy was last updated (wire: updatedAt)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A protection policy within a VAC resource. Changes are applied in the background, so its status shows whether the policy is ready or a change is still being applied.

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
    <td>Unique identifier of the policy</td>
</tr>
<tr>
    <td><CopyableCode code="checksum" /></td>
    <td><code>string</code></td>
    <td>Checksum of the current configuration, used to detect concurrent changes. Provide it on update to avoid overwriting another change.</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time the policy was created (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="current_state" /></td>
    <td><code>object</code></td>
    <td>Configuration currently being enforced. Null while the policy is still being created (CREATING). (wire: currentState)</td>
</tr>
<tr>
    <td><CopyableCode code="error_message" /></td>
    <td><code>string</code></td>
    <td>Details of the last error, set when the status is ERROR (wire: errorMessage)</td>
</tr>
<tr>
    <td><CopyableCode code="iam" /></td>
    <td><code>object</code></td>
    <td>IAM resource metadata</td>
</tr>
<tr>
    <td><CopyableCode code="resource_status" /></td>
    <td><code>string</code></td>
    <td>Current status of the policy (CREATING, CREATION_PLANNED, DELETING, ERROR, OUT_OF_SYNC, READY, SUSPENDED, UNKNOWN, UPDATING) (wire: resourceStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="target_spec" /></td>
    <td><code>object</code></td>
    <td>Configuration you requested. While a change is being applied (CREATING, UPDATING or ERROR) it differs from currentState. Once READY it mirrors currentState. Null while the policy is being deleted. (wire: targetSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time the policy was last updated (wire: updatedAt)</td>
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
    <td><a href="#parameter-policy_id"><code>policy_id</code></a>, <a href="#parameter-resource_name"><code>resource_name</code></a></td>
    <td></td>
    <td>Returns a policy with the configuration requested and the one currently enforced, including the status of every protected IP address prefix.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-resource_name"><code>resource_name</code></a></td>
    <td><a href="#parameter-x_pagination_cursor"><code>x_pagination_cursor</code></a>, <a href="#parameter-x_pagination_size"><code>x_pagination_size</code></a>, <a href="#parameter-iam_tags"><code>iam_tags</code></a></td>
    <td>Returns the list of policies within a VAC DDoS protection resource. Every policy applies a profile and a sensitivity level to target IP address prefixes, and carries the configuration requested and the one currently enforced.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-resource_name"><code>resource_name</code></a>, <a href="#parameter-target_spec"><code>target_spec</code></a></td>
    <td><a href="#parameter-force"><code>force</code></a></td>
    <td>Creates a policy within a VAC DDoS protection resource, applying a profile and a sensitivity level to target IP address prefixes in order to tune detection and mitigation rules. Async call, follow resourceStatus for operation progress. A target whose prefix carries protection settings that were not set via a policy is refused, unless you send force=true to overwrite them.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-policy_id"><code>policy_id</code></a>, <a href="#parameter-resource_name"><code>resource_name</code></a>, <a href="#parameter-target_spec"><code>target_spec</code></a></td>
    <td><a href="#parameter-force"><code>force</code></a></td>
    <td>Updates the name, enabled state, targets, profile and sensitivity level of a policy. The targets sent fully replace the previous ones: an omitted or empty list of targets removes every target from the policy. Removed target IPs reset their VAC DDoS protection settings to the default state. Send the checksum from the last read. A stale value is rejected. A new target whose prefix carries protection settings that were not set via a policy is refused, unless you send force=true to overwrite them.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-policy_id"><code>policy_id</code></a>, <a href="#parameter-resource_name"><code>resource_name</code></a></td>
    <td></td>
    <td>Deletes a policy from a VAC DDoS protection resource. All settings of linked target IP address prefixes return to their default states.</td>
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
<tr id="parameter-policy_id">
    <td><CopyableCode code="policy_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Policy ID (wire: policyId)</td>
</tr>
<tr id="parameter-resource_name">
    <td><CopyableCode code="resource_name" /></td>
    <td><code>string (uuid)</code></td>
    <td>Resource name (wire: resourceName)</td>
</tr>
<tr id="parameter-force">
    <td><CopyableCode code="force" /></td>
    <td><code>boolean</code></td>
    <td>Overwrite the protection settings that were not set via a policy on the targets this request adds. Without it, such a request is refused. The previous settings are lost: you cannot restore them yourself. The `force` flag is not stored in the policy spec.</td>
</tr>
<tr id="parameter-iam_tags">
    <td><CopyableCode code="iam_tags" /></td>
    <td><code>object</code></td>
    <td>Filter resources on IAM tags (wire: iamTags)</td>
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

Returns a policy with the configuration requested and the one currently enforced, including the status of every protected IP address prefix.

```sql
SELECT
id,
checksum,
created_at,
current_state,
error_message,
iam,
resource_status,
target_spec,
updated_at
FROM ovh.network_defense.vac_resource_policies
WHERE policy_id = '{{ policy_id }}' -- required
AND resource_name = '{{ resource_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns the list of policies within a VAC DDoS protection resource. Every policy applies a profile and a sensitivity level to target IP address prefixes, and carries the configuration requested and the one currently enforced.

```sql
SELECT
id,
checksum,
created_at,
current_state,
error_message,
iam,
resource_status,
target_spec,
updated_at
FROM ovh.network_defense.vac_resource_policies
WHERE resource_name = '{{ resource_name }}' -- required
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

Creates a policy within a VAC DDoS protection resource, applying a profile and a sensitivity level to target IP address prefixes in order to tune detection and mitigation rules. Async call, follow resourceStatus for operation progress. A target whose prefix carries protection settings that were not set via a policy is refused, unless you send force=true to overwrite them.

```sql
INSERT INTO ovh.network_defense.vac_resource_policies (
target_spec,
resource_name,
force
)
SELECT 
'{{ target_spec }}' /* required */,
'{{ resource_name }}',
'{{ force }}'
RETURNING
id,
checksum,
created_at,
current_state,
error_message,
resource_status,
target_spec,
updated_at
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: vac_resource_policies
  props:
    - name: resource_name
      value: "{{ resource_name }}"
      description: Required parameter for the vac_resource_policies resource.
    - name: target_spec
      description: |
        Protection configuration to apply to the policy
      value:
        enabled: {{ enabled }}
        name: "{{ name }}"
        profileId: "{{ profileId }}"
        sensitivity: "{{ sensitivity }}"
        targets:
          - prefix:
              cidr: "{{ cidr }}"
    - name: force
      value: {{ force }}
      description: Overwrite the protection settings that were not set via a policy on the targets this request adds. Without it, such a request is refused. The previous settings are lost: you cannot restore them yourself. The \`force\` flag is not stored in the policy spec.
      description: Overwrite the protection settings that were not set via a policy on the targets this request adds. Without it, such a request is refused. The previous settings are lost: you cannot restore them yourself. The \`force\` flag is not stored in the policy spec.
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

Updates the name, enabled state, targets, profile and sensitivity level of a policy. The targets sent fully replace the previous ones: an omitted or empty list of targets removes every target from the policy. Removed target IPs reset their VAC DDoS protection settings to the default state. Send the checksum from the last read. A stale value is rejected. A new target whose prefix carries protection settings that were not set via a policy is refused, unless you send force=true to overwrite them.

```sql
UPDATE ovh.network_defense.vac_resource_policies
SET 
checksum = '{{ checksum }}',
target_spec = '{{ target_spec }}'
WHERE 
policy_id = '{{ policy_id }}' --required
AND resource_name = '{{ resource_name }}' --required
AND target_spec = '{{ target_spec }}' --required
AND force = {{ force}}
RETURNING
id,
checksum,
created_at,
current_state,
error_message,
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

Deletes a policy from a VAC DDoS protection resource. All settings of linked target IP address prefixes return to their default states.

```sql
DELETE FROM ovh.network_defense.vac_resource_policies
WHERE policy_id = '{{ policy_id }}' --required
AND resource_name = '{{ resource_name }}' --required
;
```
</TabItem>
</Tabs>
