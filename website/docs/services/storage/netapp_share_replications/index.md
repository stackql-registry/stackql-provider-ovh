--- 
title: netapp_share_replications
hide_title: false
hide_table_of_contents: false
keywords:
  - netapp_share_replications
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

Creates, updates, deletes, gets or lists a <code>netapp_share_replications</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="netapp_share_replications" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.storage.netapp_share_replications" /></td></tr>
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
    <td>Share replication ID</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Share replication creation date (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Share replication description</td>
</tr>
<tr>
    <td><CopyableCode code="destination" /></td>
    <td><code>object</code></td>
    <td>Share replication destination information</td>
</tr>
<tr>
    <td><CopyableCode code="progress" /></td>
    <td><code>integer</code></td>
    <td>Percentage of the source share’s data that has been successfully replicated to the destination share</td>
</tr>
<tr>
    <td><CopyableCode code="replica_state" /></td>
    <td><code>string</code></td>
    <td>Share replica state (active, error, in_sync, out_of_sync) (wire: replicaState)</td>
</tr>
<tr>
    <td><CopyableCode code="source" /></td>
    <td><code>object</code></td>
    <td>Share replication source information</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Share replication status (accepted, completed, cutover, cutting_over, deleted, deleting, error, pending)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A share replication

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
    <td>Share replication ID</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Share replication creation date (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Share replication description</td>
</tr>
<tr>
    <td><CopyableCode code="destination" /></td>
    <td><code>object</code></td>
    <td>Share replication destination information</td>
</tr>
<tr>
    <td><CopyableCode code="progress" /></td>
    <td><code>integer</code></td>
    <td>Percentage of the source share’s data that has been successfully replicated to the destination share</td>
</tr>
<tr>
    <td><CopyableCode code="replica_state" /></td>
    <td><code>string</code></td>
    <td>Share replica state (active, error, in_sync, out_of_sync) (wire: replicaState)</td>
</tr>
<tr>
    <td><CopyableCode code="source" /></td>
    <td><code>object</code></td>
    <td>Share replication source information</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Share replication status (accepted, completed, cutover, cutting_over, deleted, deleting, error, pending)</td>
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
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-share_replication_id"><code>share_replication_id</code></a></td>
    <td></td>
    <td>Returns the source, destination, status and progress of the replication, in percent. (Beta version)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Returns the share replications of the service, whether this service is the source or the destination. (Beta version)</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Creates a share replication from a share of this service to the service given in `destinationServiceId`. It is returned with status pending, and the replication only starts after it is accepted on the destination service. To find a compatible destination, use *List compatible replication destinations*. (Beta version)</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-share_replication_id"><code>share_replication_id</code></a></td>
    <td></td>
    <td>Deletes the share replication. Deletion is asynchronous and blocked while the replication is in status cutting_over, deleting or error. If the replication was accepted, the destination share is deleted with it. (Beta version)</td>
</tr>
<tr>
    <td><a href="#accept"><CopyableCode code="accept" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-shareReplicationId"><code>shareReplicationId</code></a></td>
    <td></td>
    <td>Accepts the share replication and creates the destination share on this service, with the name, size and protocol given in the body. The replication must be in status pending. Acceptance is asynchronous: the replication is returned with status accepted, follow its progress until the replica state is in_sync. (Beta version)</td>
</tr>
<tr>
    <td><a href="#cutover"><CopyableCode code="cutover" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-shareReplicationId"><code>shareReplicationId</code></a></td>
    <td></td>
    <td>Cuts over the share replication: the destination share becomes the primary, the replication stops, and the source and destination data diverge after it, so the operation cannot be undone. The call must be made on the destination service, and the replication must be in status accepted. The cutover is asynchronous: follow the status of the share replication until it is completed. (Beta version)</td>
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
<tr id="parameter-shareReplicationId">
    <td><CopyableCode code="shareReplicationId" /></td>
    <td><code>string (uuid)</code></td>
    <td>Share replication ID</td>
</tr>
<tr id="parameter-share_replication_id">
    <td><CopyableCode code="share_replication_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Share replication ID (wire: shareReplicationId)</td>
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

Returns the source, destination, status and progress of the replication, in percent. (Beta version)

```sql
SELECT
id,
created_at,
description,
destination,
progress,
replica_state,
source,
status
FROM ovh.storage.netapp_share_replications
WHERE service_name = '{{ service_name }}' -- required
AND share_replication_id = '{{ share_replication_id }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns the share replications of the service, whether this service is the source or the destination. (Beta version)

```sql
SELECT
id,
created_at,
description,
destination,
progress,
replica_state,
source,
status
FROM ovh.storage.netapp_share_replications
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

Creates a share replication from a share of this service to the service given in `destinationServiceId`. It is returned with status pending, and the replication only starts after it is accepted on the destination service. To find a compatible destination, use *List compatible replication destinations*. (Beta version)

```sql
INSERT INTO ovh.storage.netapp_share_replications (
description,
destination_service_id,
source_share_id,
service_name
)
SELECT 
'{{ description }}',
'{{ destination_service_id }}',
'{{ source_share_id }}',
'{{ service_name }}'
RETURNING
id,
created_at,
description,
destination,
progress,
replica_state,
source,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: netapp_share_replications
  props:
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the netapp_share_replications resource.
    - name: description
      value: "{{ description }}"
      description: |
        Share replication description
    - name: destination_service_id
      value: "{{ destination_service_id }}"
      description: |
        Replication service ID (destination)
    - name: source_share_id
      value: "{{ source_share_id }}"
      description: |
        Replication share ID (source)
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

Deletes the share replication. Deletion is asynchronous and blocked while the replication is in status cutting_over, deleting or error. If the replication was accepted, the destination share is deleted with it. (Beta version)

```sql
DELETE FROM ovh.storage.netapp_share_replications
WHERE service_name = '{{ service_name }}' --required
AND share_replication_id = '{{ share_replication_id }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="accept"
    values={[
        { label: 'accept', value: 'accept' },
        { label: 'cutover', value: 'cutover' }
    ]}
>
<TabItem value="accept">

Accepts the share replication and creates the destination share on this service, with the name, size and protocol given in the body. The replication must be in status pending. Acceptance is asynchronous: the replication is returned with status accepted, follow its progress until the replica state is in_sync. (Beta version)

```sql
EXEC ovh.storage.netapp_share_replications.accept 
@serviceName='{{ serviceName }}' --required, 
@shareReplicationId='{{ shareReplicationId }}' --required 
@@json=
'{
"share": "{{ share }}"
}'
;
```
</TabItem>
<TabItem value="cutover">

Cuts over the share replication: the destination share becomes the primary, the replication stops, and the source and destination data diverge after it, so the operation cannot be undone. The call must be made on the destination service, and the replication must be in status accepted. The cutover is asynchronous: follow the status of the share replication until it is completed. (Beta version)

```sql
EXEC ovh.storage.netapp_share_replications.cutover 
@serviceName='{{ serviceName }}' --required, 
@shareReplicationId='{{ shareReplicationId }}' --required
;
```
</TabItem>
</Tabs>
