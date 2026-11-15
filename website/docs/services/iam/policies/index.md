--- 
title: policies
hide_title: false
hide_table_of_contents: false
keywords:
  - policies
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

Creates, updates, deletes, gets or lists a <code>policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.iam.policies" /></td></tr>
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the policy</td>
</tr>
<tr>
    <td><CopyableCode code="conditions" /></td>
    <td><code>object</code></td>
    <td>Conditions restrict permissions following resources, date or customer's information</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation time (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the policy</td>
</tr>
<tr>
    <td><CopyableCode code="expired_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Expiration date of the policy, after this date it will no longer be applied (wire: expiredAt)</td>
</tr>
<tr>
    <td><CopyableCode code="identities" /></td>
    <td><code>array</code></td>
    <td>Recipients of the delegated resources</td>
</tr>
<tr>
    <td><CopyableCode code="owner" /></td>
    <td><code>string</code></td>
    <td>Owner of the policy</td>
</tr>
<tr>
    <td><CopyableCode code="permissions" /></td>
    <td><code>object</code></td>
    <td>Permissions accorded to the recipients on the given resources</td>
</tr>
<tr>
    <td><CopyableCode code="permissions_groups" /></td>
    <td><code>array</code></td>
    <td>Permissions groups accorded to the recipients on the given resources (wire: permissionsGroups)</td>
</tr>
<tr>
    <td><CopyableCode code="read_only" /></td>
    <td><code>boolean</code></td>
    <td>Whether you can update policy (wire: readOnly)</td>
</tr>
<tr>
    <td><CopyableCode code="resources" /></td>
    <td><code>array</code></td>
    <td>Resources to delegate</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last update time (wire: updatedAt)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Policy definition

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the policy</td>
</tr>
<tr>
    <td><CopyableCode code="conditions" /></td>
    <td><code>object</code></td>
    <td>Conditions restrict permissions following resources, date or customer's information</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation time (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the policy</td>
</tr>
<tr>
    <td><CopyableCode code="expired_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Expiration date of the policy, after this date it will no longer be applied (wire: expiredAt)</td>
</tr>
<tr>
    <td><CopyableCode code="identities" /></td>
    <td><code>array</code></td>
    <td>Recipients of the delegated resources</td>
</tr>
<tr>
    <td><CopyableCode code="owner" /></td>
    <td><code>string</code></td>
    <td>Owner of the policy</td>
</tr>
<tr>
    <td><CopyableCode code="permissions" /></td>
    <td><code>object</code></td>
    <td>Permissions accorded to the recipients on the given resources</td>
</tr>
<tr>
    <td><CopyableCode code="permissions_groups" /></td>
    <td><code>array</code></td>
    <td>Permissions groups accorded to the recipients on the given resources (wire: permissionsGroups)</td>
</tr>
<tr>
    <td><CopyableCode code="read_only" /></td>
    <td><code>boolean</code></td>
    <td>Whether you can update policy (wire: readOnly)</td>
</tr>
<tr>
    <td><CopyableCode code="resources" /></td>
    <td><code>array</code></td>
    <td>Resources to delegate</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last update time (wire: updatedAt)</td>
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
    <td><a href="#parameter-policy_id"><code>policy_id</code></a></td>
    <td><a href="#parameter-details"><code>details</code></a></td>
    <td>Returns the policy definition. Set `details` to true to expand resource information.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-x_pagination_cursor"><code>x_pagination_cursor</code></a>, <a href="#parameter-x_pagination_size"><code>x_pagination_size</code></a>, <a href="#parameter-action"><code>action</code></a>, <a href="#parameter-details"><code>details</code></a>, <a href="#parameter-identity"><code>identity</code></a>, <a href="#parameter-read_only"><code>read_only</code></a>, <a href="#parameter-resource_urn"><code>resource_urn</code></a></td>
    <td>Returns the policies of the account. Filter with `identity`, `resourceURN` and `action`.&lt;br /&gt;Set `readOnly` to true to include the read-only policies generated by OVHcloud.&lt;br /&gt;Set `details` to true to expand resource information.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-identities"><code>identities</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-permissions"><code>permissions</code></a>, <a href="#parameter-resources"><code>resources</code></a></td>
    <td></td>
    <td>Creates a policy that grants one or more identities access to a set of resources.&lt;br /&gt;&lt;br /&gt;`identities` are URNs: `account` (NIC), `user` (`account-id/username`) or `group` (`account-id/group-name`).&lt;br /&gt;`resources` are `resource` or `resourceGroup` URNs.&lt;br /&gt;Both actions and resource URNs may end with `*` to match several items at once.&lt;br /&gt;&lt;br /&gt;`permissions.allow` is the set of granted actions: everything else is denied by default.&lt;br /&gt;`permissions.except` subtracts actions from that allow set (useful with wildcards).&lt;br /&gt;`permissions.deny` forbids actions outright and always wins, including over allows from other policies.&lt;br /&gt;&lt;br /&gt;Optional `permissionsGroups` attach reusable allow/deny sets defined separately.&lt;br /&gt;Optional `conditions` (AND / OR / NOT / MATCH over resource type, tags, name, request IP, date/time) must evaluate true for the policy to apply.&lt;br /&gt;Optional `expiredAt` disables the policy after that date.&lt;br /&gt;&lt;br /&gt;A policy can target another OVHcloud account: the recipient can re-delegate only within the rights received, never beyond them.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-policy_id"><code>policy_id</code></a>, <a href="#parameter-identities"><code>identities</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-permissions"><code>permissions</code></a>, <a href="#parameter-resources"><code>resources</code></a></td>
    <td></td>
    <td>Updates the policy definition: identities, resources, permissions, conditions and expiry. Omitted optional fields keep their current value.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-policy_id"><code>policy_id</code></a></td>
    <td></td>
    <td>Deletes the policy and the access it granted.</td>
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
<tr id="parameter-action">
    <td><CopyableCode code="action" /></td>
    <td><code>array</code></td>
    <td>Filter on policies embedding the given IAM action</td>
</tr>
<tr id="parameter-details">
    <td><CopyableCode code="details" /></td>
    <td><code>boolean</code></td>
    <td>Add extra information about resources in output</td>
</tr>
<tr id="parameter-identity">
    <td><CopyableCode code="identity" /></td>
    <td><code>array</code></td>
    <td>Filter on policies embedding the given identity</td>
</tr>
<tr id="parameter-read_only">
    <td><CopyableCode code="read_only" /></td>
    <td><code>boolean</code></td>
    <td>Filter on the readOnly attribute (wire: readOnly)</td>
</tr>
<tr id="parameter-resource_urn">
    <td><CopyableCode code="resource_urn" /></td>
    <td><code>array</code></td>
    <td>Filter on policies embedding the given resource URN (wire: resourceURN)</td>
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

Returns the policy definition. Set `details` to true to expand resource information.

```sql
SELECT
id,
name,
conditions,
created_at,
description,
expired_at,
identities,
owner,
permissions,
permissions_groups,
read_only,
resources,
updated_at
FROM ovh.iam.policies
WHERE policy_id = '{{ policy_id }}' -- required
AND details = '{{ details }}'
;
```
</TabItem>
<TabItem value="list">

Returns the policies of the account. Filter with `identity`, `resourceURN` and `action`.&lt;br /&gt;Set `readOnly` to true to include the read-only policies generated by OVHcloud.&lt;br /&gt;Set `details` to true to expand resource information.

```sql
SELECT
id,
name,
conditions,
created_at,
description,
expired_at,
identities,
owner,
permissions,
permissions_groups,
read_only,
resources,
updated_at
FROM ovh.iam.policies
WHERE x_pagination_cursor = '{{ x_pagination_cursor }}'
AND x_pagination_size = '{{ x_pagination_size }}'
AND action = '{{ action }}'
AND details = '{{ details }}'
AND identity = '{{ identity }}'
AND read_only = '{{ read_only }}'
AND resource_urn = '{{ resource_urn }}'
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

Creates a policy that grants one or more identities access to a set of resources.&lt;br /&gt;&lt;br /&gt;`identities` are URNs: `account` (NIC), `user` (`account-id/username`) or `group` (`account-id/group-name`).&lt;br /&gt;`resources` are `resource` or `resourceGroup` URNs.&lt;br /&gt;Both actions and resource URNs may end with `*` to match several items at once.&lt;br /&gt;&lt;br /&gt;`permissions.allow` is the set of granted actions: everything else is denied by default.&lt;br /&gt;`permissions.except` subtracts actions from that allow set (useful with wildcards).&lt;br /&gt;`permissions.deny` forbids actions outright and always wins, including over allows from other policies.&lt;br /&gt;&lt;br /&gt;Optional `permissionsGroups` attach reusable allow/deny sets defined separately.&lt;br /&gt;Optional `conditions` (AND / OR / NOT / MATCH over resource type, tags, name, request IP, date/time) must evaluate true for the policy to apply.&lt;br /&gt;Optional `expiredAt` disables the policy after that date.&lt;br /&gt;&lt;br /&gt;A policy can target another OVHcloud account: the recipient can re-delegate only within the rights received, never beyond them.

```sql
INSERT INTO ovh.iam.policies (
conditions,
description,
expired_at,
identities,
name,
permissions,
permissions_groups,
resources
)
SELECT 
'{{ conditions }}',
'{{ description }}',
'{{ expired_at }}',
'{{ identities }}' /* required */,
'{{ name }}' /* required */,
'{{ permissions }}' /* required */,
'{{ permissions_groups }}',
'{{ resources }}' /* required */
RETURNING
id,
name,
conditions,
created_at,
description,
expired_at,
identities,
owner,
permissions,
permissions_groups,
read_only,
resources,
updated_at
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: policies
  props:
    - name: conditions
      description: |
        Conditions restrict permissions following resources, date or customer's information
      value:
        conditions:
          - conditions: "{{ conditions }}"
            operator: "{{ operator }}"
            values: "{{ values }}"
        operator: "{{ operator }}"
        values: "{{ values }}"
    - name: description
      value: "{{ description }}"
      description: |
        Description of the policy
    - name: expired_at
      value: "{{ expired_at }}"
      description: |
        Expiration date of the policy, after this date it will no longer be applied
    - name: identities
      value:
        - "{{ identities }}"
      description: |
        Recipients of the delegated resources
    - name: name
      value: "{{ name }}"
      description: |
        Name of the policy
    - name: permissions
      description: |
        Permissions accorded to the recipients on the given resources
      value:
        allow:
          - action: "{{ action }}"
        deny:
          - action: "{{ action }}"
        except:
          - action: "{{ action }}"
    - name: permissions_groups
      description: |
        Permissions groups accorded to the recipients on the given resources
      value:
        - name: "{{ name }}"
          owner: "{{ owner }}"
          permissions:
            allow:
              - action: "{{ action }}"
            deny:
              - action: "{{ action }}"
            except:
              - action: "{{ action }}"
          urn: "{{ urn }}"
    - name: resources
      description: |
        Resources to delegate
      value:
        - group:
            id: "{{ id }}"
            name: "{{ name }}"
            readOnly: {{ readOnly }}
          resource:
            displayName: "{{ displayName }}"
            id: "{{ id }}"
            name: "{{ name }}"
            owner: "{{ owner }}"
            tags: "{{ tags }}"
            type: "{{ type }}"
          urn: "{{ urn }}"
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

Updates the policy definition: identities, resources, permissions, conditions and expiry. Omitted optional fields keep their current value.

```sql
UPDATE ovh.iam.policies
SET 
conditions = '{{ conditions }}',
description = '{{ description }}',
expired_at = '{{ expired_at }}',
identities = '{{ identities }}',
name = '{{ name }}',
permissions = '{{ permissions }}',
permissions_groups = '{{ permissions_groups }}',
resources = '{{ resources }}'
WHERE 
policy_id = '{{ policy_id }}' --required
AND identities = '{{ identities }}' --required
AND name = '{{ name }}' --required
AND permissions = '{{ permissions }}' --required
AND resources = '{{ resources }}' --required
RETURNING
id,
name,
conditions,
created_at,
description,
expired_at,
identities,
owner,
permissions,
permissions_groups,
read_only,
resources,
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

Deletes the policy and the access it granted.

```sql
DELETE FROM ovh.iam.policies
WHERE policy_id = '{{ policy_id }}' --required
;
```
</TabItem>
</Tabs>
