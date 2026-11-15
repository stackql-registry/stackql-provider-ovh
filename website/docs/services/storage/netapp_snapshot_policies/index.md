--- 
title: netapp_snapshot_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - netapp_snapshot_policies
  - storage
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

Creates, updates, deletes, gets or lists a <code>netapp_snapshot_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="netapp_snapshot_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.storage.netapp_snapshot_policies" /></td></tr>
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
    <td>Snapshot policy ID</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Snapshot policy name</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Snapshot policy creation date (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Snapshot policy description</td>
</tr>
<tr>
    <td><CopyableCode code="is_default" /></td>
    <td><code>boolean</code></td>
    <td>Is this the default snapshot policy? (wire: isDefault)</td>
</tr>
<tr>
    <td><CopyableCode code="rules" /></td>
    <td><code>array</code></td>
    <td>Snapshot policy rules, 1 to 4</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Snapshot policy status (available, creating, deleting, error, updating)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A snapshot policy

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
    <td>Snapshot policy ID</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Snapshot policy name</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Snapshot policy creation date (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Snapshot policy description</td>
</tr>
<tr>
    <td><CopyableCode code="is_default" /></td>
    <td><code>boolean</code></td>
    <td>Is this the default snapshot policy? (wire: isDefault)</td>
</tr>
<tr>
    <td><CopyableCode code="rules" /></td>
    <td><code>array</code></td>
    <td>Snapshot policy rules, 1 to 4</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Snapshot policy status (available, creating, deleting, error, updating)</td>
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
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-snapshot_policy_id"><code>snapshot_policy_id</code></a></td>
    <td></td>
    <td>Returns the snapshot policy with its rules and status. A policy can be updated, deleted or assigned to a share only when its status is available.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Returns the snapshot policies, including the default one. Each item contains only the policy ID and name: get a snapshot policy to read its rules and status.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-rules"><code>rules</code></a></td>
    <td></td>
    <td>Creates a policy made of rules, each with a schedule, a snapshot name prefix and a number of copies to keep. Creation is asynchronous: follow the snapshot policy status until it is available. The policy takes effect only once it is assigned to a share.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-snapshot_policy_id"><code>snapshot_policy_id</code></a></td>
    <td></td>
    <td>Updates the policy name and description. Rules cannot be changed: create a new policy instead. The policy must be available, and the default policy cannot be updated.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-snapshot_policy_id"><code>snapshot_policy_id</code></a></td>
    <td></td>
    <td>Deletes the snapshot policy and its schedules. A policy applied to a share cannot be deleted: apply another non-default policy to the share first. The default policy cannot be deleted, and deletion is asynchronous: follow the snapshot policy status until the policy is no longer found.</td>
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
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string (uuid)</code></td>
    <td>Service name (wire: serviceName)</td>
</tr>
<tr id="parameter-snapshot_policy_id">
    <td><CopyableCode code="snapshot_policy_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Snapshot policy ID (wire: snapshotPolicyId)</td>
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

Returns the snapshot policy with its rules and status. A policy can be updated, deleted or assigned to a share only when its status is available.

```sql
SELECT
id,
name,
created_at,
description,
is_default,
rules,
status
FROM ovh.storage.netapp_snapshot_policies
WHERE service_name = '{{ service_name }}' -- required
AND snapshot_policy_id = '{{ snapshot_policy_id }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns the snapshot policies, including the default one. Each item contains only the policy ID and name: get a snapshot policy to read its rules and status.

```sql
SELECT
id,
name,
created_at,
description,
is_default,
rules,
status
FROM ovh.storage.netapp_snapshot_policies
WHERE service_name = '{{ service_name }}' -- required
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

Creates a policy made of rules, each with a schedule, a snapshot name prefix and a number of copies to keep. Creation is asynchronous: follow the snapshot policy status until it is available. The policy takes effect only once it is assigned to a share.

```sql
INSERT INTO ovh.storage.netapp_snapshot_policies (
description,
name,
rules,
service_name
)
SELECT 
'{{ description }}',
'{{ name }}',
'{{ rules }}' /* required */,
'{{ service_name }}'
RETURNING
id,
name,
created_at,
description,
is_default,
rules,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: netapp_snapshot_policies
  props:
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the netapp_snapshot_policies resource.
    - name: description
      value: "{{ description }}"
      description: |
        Snapshot policy description
    - name: name
      value: "{{ name }}"
      description: |
        Snapshot policy name
    - name: rules
      description: |
        Snapshot policy rules, 1 to 4
      value:
        - copies: {{ copies }}
          prefix: "{{ prefix }}"
          schedule:
            days:
              - {{ days }}
            hours:
              - {{ hours }}
            minutes:
              - {{ minutes }}
            months:
              - {{ months }}
            weekdays:
              - {{ weekdays }}
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

Updates the policy name and description. Rules cannot be changed: create a new policy instead. The policy must be available, and the default policy cannot be updated.

```sql
UPDATE ovh.storage.netapp_snapshot_policies
SET 
description = '{{ description }}',
name = '{{ name }}'
WHERE 
service_name = '{{ service_name }}' --required
AND snapshot_policy_id = '{{ snapshot_policy_id }}' --required;
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

Deletes the snapshot policy and its schedules. A policy applied to a share cannot be deleted: apply another non-default policy to the share first. The default policy cannot be deleted, and deletion is asynchronous: follow the snapshot policy status until the policy is no longer found.

```sql
DELETE FROM ovh.storage.netapp_snapshot_policies
WHERE service_name = '{{ service_name }}' --required
AND snapshot_policy_id = '{{ snapshot_policy_id }}' --required
;
```
</TabItem>
</Tabs>
