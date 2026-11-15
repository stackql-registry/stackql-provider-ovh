--- 
title: netapp_share_snapshots
hide_title: false
hide_table_of_contents: false
keywords:
  - netapp_share_snapshots
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

Creates, updates, deletes, gets or lists a <code>netapp_share_snapshots</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="netapp_share_snapshots" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.storage.netapp_share_snapshots" /></td></tr>
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
    <td>Snapshot ID</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Snapshot name</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Snapshot creation date (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Snapshot description</td>
</tr>
<tr>
    <td><CopyableCode code="path" /></td>
    <td><code>string</code></td>
    <td>Snapshot path</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Snapshot status (available, creating, deleting, error, error_deleting, manage_error, manage_starting, restoring, unmanage_error, unmanage_starting)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Snapshot type (automatic, manual, system)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A share snapshot

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
    <td>Snapshot ID</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Snapshot name</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Snapshot creation date (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Snapshot description</td>
</tr>
<tr>
    <td><CopyableCode code="path" /></td>
    <td><code>string</code></td>
    <td>Snapshot path</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Snapshot status (available, creating, deleting, error, error_deleting, manage_error, manage_starting, restoring, unmanage_error, unmanage_starting)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Snapshot type (automatic, manual, system)</td>
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
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-share_id"><code>share_id</code></a>, <a href="#parameter-snapshot_id"><code>snapshot_id</code></a></td>
    <td></td>
    <td>Returns the snapshot properties, its status and its type: manual, automatic when taken by the snapshot policy, or system. Holding an automatic snapshot turns it into a manual snapshot with a new ID.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-share_id"><code>share_id</code></a></td>
    <td><a href="#parameter-detail"><code>detail</code></a></td>
    <td>Returns the ID and name of each snapshot of the share, including the snapshots taken automatically and by the system. Set `detail` to true to get all snapshot properties, such as their type and status.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-share_id"><code>share_id</code></a></td>
    <td></td>
    <td>Creates a manual snapshot of the share. Creation is asynchronous: the snapshot is returned with status creating, follow its status until available. The share must be in status available.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-share_id"><code>share_id</code></a>, <a href="#parameter-snapshot_id"><code>snapshot_id</code></a></td>
    <td></td>
    <td>Updates the snapshot name and description. Only manual snapshots can be updated: hold an automatic snapshot first.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-share_id"><code>share_id</code></a>, <a href="#parameter-snapshot_id"><code>snapshot_id</code></a></td>
    <td></td>
    <td>Permanently deletes the snapshot. Deletion is asynchronous: follow the snapshot until it no longer exists. System snapshots cannot be deleted, and a manual snapshot must be in status available or error.</td>
</tr>
<tr>
    <td><a href="#hold"><CopyableCode code="hold" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-shareId"><code>shareId</code></a>, <a href="#parameter-snapshotId"><code>snapshotId</code></a></td>
    <td></td>
    <td>Converts an automatic snapshot into a manual snapshot with a new ID, which the snapshot policy no longer deletes. Holding is asynchronous: follow the status of the returned snapshot until it is available. A held snapshot will not be released and is kept until you delete it. (Beta version)</td>
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
<tr id="parameter-serviceName">
    <td><CopyableCode code="serviceName" /></td>
    <td><code>string (uuid)</code></td>
    <td>Service name</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string (uuid)</code></td>
    <td>Service name (wire: serviceName)</td>
</tr>
<tr id="parameter-shareId">
    <td><CopyableCode code="shareId" /></td>
    <td><code>string (uuid)</code></td>
    <td>Share ID</td>
</tr>
<tr id="parameter-share_id">
    <td><CopyableCode code="share_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Share ID (wire: shareId)</td>
</tr>
<tr id="parameter-snapshotId">
    <td><CopyableCode code="snapshotId" /></td>
    <td><code>string (uuid)</code></td>
    <td>Snapshot ID</td>
</tr>
<tr id="parameter-snapshot_id">
    <td><CopyableCode code="snapshot_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Snapshot ID (wire: snapshotId)</td>
</tr>
<tr id="parameter-detail">
    <td><CopyableCode code="detail" /></td>
    <td><code>boolean</code></td>
    <td>Get detailed information about each snapshot</td>
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

Returns the snapshot properties, its status and its type: manual, automatic when taken by the snapshot policy, or system. Holding an automatic snapshot turns it into a manual snapshot with a new ID.

```sql
SELECT
id,
name,
created_at,
description,
path,
status,
type
FROM ovh.storage.netapp_share_snapshots
WHERE service_name = '{{ service_name }}' -- required
AND share_id = '{{ share_id }}' -- required
AND snapshot_id = '{{ snapshot_id }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns the ID and name of each snapshot of the share, including the snapshots taken automatically and by the system. Set `detail` to true to get all snapshot properties, such as their type and status.

```sql
SELECT
id,
name,
created_at,
description,
path,
status,
type
FROM ovh.storage.netapp_share_snapshots
WHERE service_name = '{{ service_name }}' -- required
AND share_id = '{{ share_id }}' -- required
AND detail = '{{ detail }}'
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

Creates a manual snapshot of the share. Creation is asynchronous: the snapshot is returned with status creating, follow its status until available. The share must be in status available.

```sql
INSERT INTO ovh.storage.netapp_share_snapshots (
description,
name,
service_name,
share_id
)
SELECT 
'{{ description }}',
'{{ name }}',
'{{ service_name }}',
'{{ share_id }}'
RETURNING
id,
name,
created_at,
description,
path,
status,
type
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: netapp_share_snapshots
  props:
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the netapp_share_snapshots resource.
    - name: share_id
      value: "{{ share_id }}"
      description: Required parameter for the netapp_share_snapshots resource.
    - name: description
      value: "{{ description }}"
      description: |
        Snapshot description
    - name: name
      value: "{{ name }}"
      description: |
        Snapshot name
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

Updates the snapshot name and description. Only manual snapshots can be updated: hold an automatic snapshot first.

```sql
UPDATE ovh.storage.netapp_share_snapshots
SET 
description = '{{ description }}',
name = '{{ name }}'
WHERE 
service_name = '{{ service_name }}' --required
AND share_id = '{{ share_id }}' --required
AND snapshot_id = '{{ snapshot_id }}' --required
RETURNING
id,
name,
created_at,
description,
path,
status,
type;
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

Permanently deletes the snapshot. Deletion is asynchronous: follow the snapshot until it no longer exists. System snapshots cannot be deleted, and a manual snapshot must be in status available or error.

```sql
DELETE FROM ovh.storage.netapp_share_snapshots
WHERE service_name = '{{ service_name }}' --required
AND share_id = '{{ share_id }}' --required
AND snapshot_id = '{{ snapshot_id }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="hold"
    values={[
        { label: 'hold', value: 'hold' }
    ]}
>
<TabItem value="hold">

Converts an automatic snapshot into a manual snapshot with a new ID, which the snapshot policy no longer deletes. Holding is asynchronous: follow the status of the returned snapshot until it is available. A held snapshot will not be released and is kept until you delete it. (Beta version)

```sql
EXEC ovh.storage.netapp_share_snapshots.hold 
@serviceName='{{ serviceName }}' --required, 
@shareId='{{ shareId }}' --required, 
@snapshotId='{{ snapshotId }}' --required
;
```
</TabItem>
</Tabs>
