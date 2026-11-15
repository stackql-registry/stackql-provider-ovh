--- 
title: region_shares
hide_title: false
hide_table_of_contents: false
keywords:
  - region_shares
  - cloud_storage
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

Creates, updates, deletes, gets or lists a <code>region_shares</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="region_shares" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.cloud_storage.region_shares" /></td></tr>
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
    <td>Share ID</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Share name</td>
</tr>
<tr>
    <td><CopyableCode code="network_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Private network ID (wire: networkId)</td>
</tr>
<tr>
    <td><CopyableCode code="share_network_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Share network ID (wire: shareNetworkId)</td>
</tr>
<tr>
    <td><CopyableCode code="subnet_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Subnet ID (wire: subnetId)</td>
</tr>
<tr>
    <td><CopyableCode code="availability_zone" /></td>
    <td><code>string</code></td>
    <td>Availability zone (wire: availabilityZone)</td>
</tr>
<tr>
    <td><CopyableCode code="capabilities" /></td>
    <td><code>array</code></td>
    <td>Share capabilities</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and timestamp when the resource was created (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Share description</td>
</tr>
<tr>
    <td><CopyableCode code="encryption" /></td>
    <td><code>object</code></td>
    <td>Encryption settings, null when the share is not encrypted</td>
</tr>
<tr>
    <td><CopyableCode code="export_locations" /></td>
    <td><code>array</code></td>
    <td>Share export locations (wire: exportLocations)</td>
</tr>
<tr>
    <td><CopyableCode code="is_public" /></td>
    <td><code>boolean</code></td>
    <td>Whether the share is public (wire: isPublic)</td>
</tr>
<tr>
    <td><CopyableCode code="protocol" /></td>
    <td><code>string</code></td>
    <td>Share protocol (NFS)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Region</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>integer</code></td>
    <td>Share size in GB</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Share status (available, awaiting_transfer, backup_creating, backup_restoring, backup_restoring_error, creating, creating_from_snapshot, deleted, deleting, error, error_deleting, extending, extending_error, inactive, manage_error, manage_starting, migrating, migrating_to, replication_change, reverting, reverting_error, shrinking, shrinking_error, shrinking_possible_data_loss_error, unmanage_error, unmanage_starting, unmanaged)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Share type (standard-1az, standard-1az-luks)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Share

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
    <td>Share ID</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Share name</td>
</tr>
<tr>
    <td><CopyableCode code="network_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Private network ID (wire: networkId)</td>
</tr>
<tr>
    <td><CopyableCode code="share_network_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Share network ID (wire: shareNetworkId)</td>
</tr>
<tr>
    <td><CopyableCode code="subnet_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Subnet ID (wire: subnetId)</td>
</tr>
<tr>
    <td><CopyableCode code="availability_zone" /></td>
    <td><code>string</code></td>
    <td>Availability zone (wire: availabilityZone)</td>
</tr>
<tr>
    <td><CopyableCode code="capabilities" /></td>
    <td><code>array</code></td>
    <td>Share capabilities</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and timestamp when the resource was created (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Share description</td>
</tr>
<tr>
    <td><CopyableCode code="encryption" /></td>
    <td><code>object</code></td>
    <td>Encryption settings, null when the share is not encrypted</td>
</tr>
<tr>
    <td><CopyableCode code="export_locations" /></td>
    <td><code>array</code></td>
    <td>Share export locations (wire: exportLocations)</td>
</tr>
<tr>
    <td><CopyableCode code="is_public" /></td>
    <td><code>boolean</code></td>
    <td>Whether the share is public (wire: isPublic)</td>
</tr>
<tr>
    <td><CopyableCode code="protocol" /></td>
    <td><code>string</code></td>
    <td>Share protocol (NFS)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Region</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>integer</code></td>
    <td>Share size in GB</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Share status (available, awaiting_transfer, backup_creating, backup_restoring, backup_restoring_error, creating, creating_from_snapshot, deleted, deleting, error, error_deleting, extending, extending_error, inactive, manage_error, manage_starting, migrating, migrating_to, replication_change, reverting, reverting_error, shrinking, shrinking_error, shrinking_possible_data_loss_error, unmanage_error, unmanage_starting, unmanaged)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Share type (standard-1az, standard-1az-luks)</td>
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
    <td><a href="#parameter-region_name"><code>region_name</code></a>, <a href="#parameter-share_id"><code>share_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get share</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region_name"><code>region_name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get shares</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region_name"><code>region_name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td></td>
    <td>Create Share</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region_name"><code>region_name</code></a>, <a href="#parameter-share_id"><code>share_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Update Share</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-region_name"><code>region_name</code></a>, <a href="#parameter-share_id"><code>share_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Delete Share</td>
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
<tr id="parameter-region_name">
    <td><CopyableCode code="region_name" /></td>
    <td><code>string</code></td>
    <td>Region name (wire: regionName)</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The Public Cloud project ID. Resolved from OVH_CLOUD_PROJECT_SERVICE when set.</td>
</tr>
<tr id="parameter-share_id">
    <td><CopyableCode code="share_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Share ID (wire: shareId)</td>
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

Get share

```sql
SELECT
id,
name,
network_id,
share_network_id,
subnet_id,
availability_zone,
capabilities,
created_at,
description,
encryption,
export_locations,
is_public,
protocol,
region,
size,
status,
type
FROM ovh.cloud_storage.region_shares
WHERE region_name = '{{ region_name }}' -- required
AND share_id = '{{ share_id }}' -- required
AND service_name = '{{ service_name }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
<TabItem value="list">

Get shares

```sql
SELECT
id,
name,
network_id,
share_network_id,
subnet_id,
availability_zone,
capabilities,
created_at,
description,
encryption,
export_locations,
is_public,
protocol,
region,
size,
status,
type
FROM ovh.cloud_storage.region_shares
WHERE region_name = '{{ region_name }}' -- required
AND service_name = '{{ service_name }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
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

Create Share

```sql
INSERT INTO ovh.cloud_storage.region_shares (
availability_zone,
description,
encryption,
name,
network_id,
share_network_id,
size,
snapshot_id,
subnet_id,
type,
region_name,
service_name
)
SELECT 
'{{ availability_zone }}',
'{{ description }}',
'{{ encryption }}',
'{{ name }}',
'{{ network_id }}',
'{{ share_network_id }}',
{{ size }},
'{{ snapshot_id }}',
'{{ subnet_id }}',
'{{ type }}' /* required */,
'{{ region_name }}',
'{{ service_name }}'
RETURNING
id,
resource_id,
action,
completed_at,
created_at,
progress,
regions,
started_at,
status,
sub_operations
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: region_shares
  props:
    - name: region_name
      value: "{{ region_name }}"
      description: Required parameter for the region_shares resource.
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the region_shares resource.
    - name: availability_zone
      value: "{{ availability_zone }}"
      description: |
        Availability zone for the share (required in 3AZ regions)
    - name: description
      value: "{{ description }}"
      description: |
        Share description
    - name: encryption
      description: |
        Optional encryption settings. Omit for an unencrypted share.
      value:
        encrypted: {{ encrypted }}
    - name: name
      value: "{{ name }}"
      description: |
        Share name
    - name: network_id
      value: "{{ network_id }}"
      description: |
        Network ID (required unless shareNetworkId is set)
    - name: share_network_id
      value: "{{ share_network_id }}"
      description: |
        Existing share network ID (alternative to networkId/subnetId)
    - name: size
      value: {{ size }}
      description: |
        Share size in GB
    - name: snapshot_id
      value: "{{ snapshot_id }}"
      description: |
        Snapshot ID to create the share from
    - name: subnet_id
      value: "{{ subnet_id }}"
      description: |
        Subnet ID (required unless shareNetworkId is set)
    - name: type
      value: "{{ type }}"
      description: |
        Share type
      valid_values: ['standard-1az', 'standard-1az-luks']
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

Update Share

```sql
UPDATE ovh.cloud_storage.region_shares
SET 
description = '{{ description }}',
name = '{{ name }}',
new_size = {{ new_size }}
WHERE 
region_name = '{{ region_name }}' --required
AND share_id = '{{ share_id }}' --required
AND service_name = '{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
RETURNING
id,
resource_id,
action,
completed_at,
created_at,
progress,
regions,
started_at,
status,
sub_operations;
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

Delete Share

```sql
DELETE FROM ovh.cloud_storage.region_shares
WHERE region_name = '{{ region_name }}' --required
AND share_id = '{{ share_id }}' --required
AND service_name = '{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
</Tabs>
