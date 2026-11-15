--- 
title: valkeys
hide_title: false
hide_table_of_contents: false
keywords:
  - valkeys
  - cloud_database
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

Creates, updates, deletes, gets or lists a <code>valkeys</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="valkeys" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.cloud_database.valkeys" /></td></tr>
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
    <td>Service ID</td>
</tr>
<tr>
    <td><CopyableCode code="network_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Private network ID in which the cluster is (wire: networkId)</td>
</tr>
<tr>
    <td><CopyableCode code="subnet_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Private subnet ID in which the cluster is (wire: subnetId)</td>
</tr>
<tr>
    <td><CopyableCode code="backup_time" /></td>
    <td><code>string (time)</code></td>
    <td>Time on which backups start every day. DEPRECATED: use backups.time (example: 15:04:05) (wire: backupTime)</td>
</tr>
<tr>
    <td><CopyableCode code="backups" /></td>
    <td><code>object</code></td>
    <td>Information related to the backups, null if the engine does not support backups</td>
</tr>
<tr>
    <td><CopyableCode code="capabilities" /></td>
    <td><code>object</code></td>
    <td>Capabilities of the services</td>
</tr>
<tr>
    <td><CopyableCode code="category" /></td>
    <td><code>string</code></td>
    <td>Category of the engine (analysis, operational, streaming)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date of the creation of the cluster (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="deletion_protection" /></td>
    <td><code>boolean</code></td>
    <td>Enable deletion protection (wire: deletionProtection)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the cluster</td>
</tr>
<tr>
    <td><CopyableCode code="disk" /></td>
    <td><code>object</code></td>
    <td>Disk attributes of the cluster. DEPRECATED: use storage</td>
</tr>
<tr>
    <td><CopyableCode code="enable_prometheus" /></td>
    <td><code>boolean</code></td>
    <td>Enable Prometheus (wire: enablePrometheus)</td>
</tr>
<tr>
    <td><CopyableCode code="endpoints" /></td>
    <td><code>array</code></td>
    <td>List of all endpoints of the service</td>
</tr>
<tr>
    <td><CopyableCode code="engine" /></td>
    <td><code>string</code></td>
    <td>Name of the engine of the service (clickhouse, grafana, kafka, kafkaConnect, kafkaMirrorMaker, mongodb, mysql, opensearch, postgresql, valkey)</td>
</tr>
<tr>
    <td><CopyableCode code="flavor" /></td>
    <td><code>string</code></td>
    <td>The VM flavor used for this cluster</td>
</tr>
<tr>
    <td><CopyableCode code="ip_restrictions" /></td>
    <td><code>array</code></td>
    <td>IP Blocks authorized to access to the cluster (wire: ipRestrictions)</td>
</tr>
<tr>
    <td><CopyableCode code="maintenance_time" /></td>
    <td><code>string (time)</code></td>
    <td>Time on which maintenances can start every day (example: 15:04:05) (wire: maintenanceTime)</td>
</tr>
<tr>
    <td><CopyableCode code="network_type" /></td>
    <td><code>string</code></td>
    <td>Type of network of the cluster (private, public) (wire: networkType)</td>
</tr>
<tr>
    <td><CopyableCode code="node_number" /></td>
    <td><code>integer</code></td>
    <td>Number of nodes in the cluster. DEPRECATED: use nodes (wire: nodeNumber)</td>
</tr>
<tr>
    <td><CopyableCode code="nodes" /></td>
    <td><code>array</code></td>
    <td>Nodes of the cluster</td>
</tr>
<tr>
    <td><CopyableCode code="openstack_region" /></td>
    <td><code>string</code></td>
    <td>OpenStack region of the cluster (wire: openstackRegion)</td>
</tr>
<tr>
    <td><CopyableCode code="plan" /></td>
    <td><code>string</code></td>
    <td>Plan of the cluster</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Current status of the cluster (CREATING, DELETING, DRAINED, ERROR, LOCKED, LOCKED_PENDING, LOCKED_UPDATING, PENDING, READY, SHELVED, TO_DRAIN, UPDATING)</td>
</tr>
<tr>
    <td><CopyableCode code="storage" /></td>
    <td><code>object</code></td>
    <td>Storage attributes of the cluster</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>Version of the engine deployed on the cluster</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Cloud database service definition

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
    <td>Service ID</td>
</tr>
<tr>
    <td><CopyableCode code="network_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Private network ID in which the cluster is (wire: networkId)</td>
</tr>
<tr>
    <td><CopyableCode code="subnet_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Private subnet ID in which the cluster is (wire: subnetId)</td>
</tr>
<tr>
    <td><CopyableCode code="backup_time" /></td>
    <td><code>string (time)</code></td>
    <td>Time on which backups start every day. DEPRECATED: use backups.time (example: 15:04:05) (wire: backupTime)</td>
</tr>
<tr>
    <td><CopyableCode code="backups" /></td>
    <td><code>object</code></td>
    <td>Information related to the backups, null if the engine does not support backups</td>
</tr>
<tr>
    <td><CopyableCode code="capabilities" /></td>
    <td><code>object</code></td>
    <td>Capabilities of the services</td>
</tr>
<tr>
    <td><CopyableCode code="category" /></td>
    <td><code>string</code></td>
    <td>Category of the engine (analysis, operational, streaming)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date of the creation of the cluster (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="deletion_protection" /></td>
    <td><code>boolean</code></td>
    <td>Enable deletion protection (wire: deletionProtection)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the cluster</td>
</tr>
<tr>
    <td><CopyableCode code="disk" /></td>
    <td><code>object</code></td>
    <td>Disk attributes of the cluster. DEPRECATED: use storage</td>
</tr>
<tr>
    <td><CopyableCode code="enable_prometheus" /></td>
    <td><code>boolean</code></td>
    <td>Enable Prometheus (wire: enablePrometheus)</td>
</tr>
<tr>
    <td><CopyableCode code="endpoints" /></td>
    <td><code>array</code></td>
    <td>List of all endpoints of the service</td>
</tr>
<tr>
    <td><CopyableCode code="engine" /></td>
    <td><code>string</code></td>
    <td>Name of the engine of the service (clickhouse, grafana, kafka, kafkaConnect, kafkaMirrorMaker, mongodb, mysql, opensearch, postgresql, valkey)</td>
</tr>
<tr>
    <td><CopyableCode code="flavor" /></td>
    <td><code>string</code></td>
    <td>The VM flavor used for this cluster</td>
</tr>
<tr>
    <td><CopyableCode code="ip_restrictions" /></td>
    <td><code>array</code></td>
    <td>IP Blocks authorized to access to the cluster (wire: ipRestrictions)</td>
</tr>
<tr>
    <td><CopyableCode code="maintenance_time" /></td>
    <td><code>string (time)</code></td>
    <td>Time on which maintenances can start every day (example: 15:04:05) (wire: maintenanceTime)</td>
</tr>
<tr>
    <td><CopyableCode code="network_type" /></td>
    <td><code>string</code></td>
    <td>Type of network of the cluster (private, public) (wire: networkType)</td>
</tr>
<tr>
    <td><CopyableCode code="node_number" /></td>
    <td><code>integer</code></td>
    <td>Number of nodes in the cluster. DEPRECATED: use nodes (wire: nodeNumber)</td>
</tr>
<tr>
    <td><CopyableCode code="nodes" /></td>
    <td><code>array</code></td>
    <td>Nodes of the cluster</td>
</tr>
<tr>
    <td><CopyableCode code="openstack_region" /></td>
    <td><code>string</code></td>
    <td>OpenStack region of the cluster (wire: openstackRegion)</td>
</tr>
<tr>
    <td><CopyableCode code="plan" /></td>
    <td><code>string</code></td>
    <td>Plan of the cluster</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Current status of the cluster (CREATING, DELETING, DRAINED, ERROR, LOCKED, LOCKED_PENDING, LOCKED_UPDATING, PENDING, READY, SHELVED, TO_DRAIN, UPDATING)</td>
</tr>
<tr>
    <td><CopyableCode code="storage" /></td>
    <td><code>object</code></td>
    <td>Storage attributes of the cluster</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>Version of the engine deployed on the cluster</td>
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
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get valkey cluster properties</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List all the valkey of the project</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Create a new valkey cluster</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Update an existing valkey cluster</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-cluster_id"><code>cluster_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Delete a valkey cluster</td>
</tr>
<tr>
    <td><a href="#log_url"><CopyableCode code="log_url" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-clusterId"><code>clusterId</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-kind"><code>kind</code></a></td>
    <td></td>
    <td>Generates a temporary URL to read the logs of one kind. The URL expires.</td>
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
<tr id="parameter-clusterId">
    <td><CopyableCode code="clusterId" /></td>
    <td><code>string (uuid)</code></td>
    <td>Cluster ID</td>
</tr>
<tr id="parameter-cluster_id">
    <td><CopyableCode code="cluster_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Cluster ID (wire: clusterId)</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The Public Cloud project ID. Resolved from OVH_CLOUD_PROJECT_SERVICE when set.</td>
</tr>
<tr id="parameter-x_pagination_mode">
    <td><CopyableCode code="x_pagination_mode" /></td>
    <td><code>string</code></td>
    <td>Sent as CachedObjectList-Pages by default so the list returns the full objects rather than their identifiers. (wire: X-Pagination-Mode)</td>
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

Get valkey cluster properties

```sql
SELECT
id,
network_id,
subnet_id,
backup_time,
backups,
capabilities,
category,
created_at,
deletion_protection,
description,
disk,
enable_prometheus,
endpoints,
engine,
flavor,
ip_restrictions,
maintenance_time,
network_type,
node_number,
nodes,
openstack_region,
plan,
status,
storage,
version
FROM ovh.cloud_database.valkeys
WHERE cluster_id = '{{ cluster_id }}' -- required
AND service_name = '{{ service_name }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
<TabItem value="list">

List all the valkey of the project

```sql
SELECT
id,
network_id,
subnet_id,
backup_time,
backups,
capabilities,
category,
created_at,
deletion_protection,
description,
disk,
enable_prometheus,
endpoints,
engine,
flavor,
ip_restrictions,
maintenance_time,
network_type,
node_number,
nodes,
openstack_region,
plan,
status,
storage,
version
FROM ovh.cloud_database.valkeys
WHERE service_name = '{{ service_name }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
AND x_pagination_mode = '{{ x_pagination_mode }}'
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

Create a new valkey cluster

```sql
INSERT INTO ovh.cloud_database.valkeys (
backup,
backup_time,
backups,
description,
disk,
fork_from,
ip_restrictions,
maintenance_time,
network_id,
nodes_list,
nodes_pattern,
plan,
subnet_id,
version,
service_name
)
SELECT 
'{{ backup }}',
'{{ backup_time }}',
'{{ backups }}',
'{{ description }}',
'{{ disk }}',
'{{ fork_from }}',
'{{ ip_restrictions }}',
'{{ maintenance_time }}',
'{{ network_id }}',
'{{ nodes_list }}',
'{{ nodes_pattern }}',
'{{ plan }}',
'{{ subnet_id }}',
'{{ version }}',
'{{ service_name }}'
RETURNING
id,
network_id,
subnet_id,
backup_time,
backups,
capabilities,
category,
created_at,
deletion_protection,
description,
disk,
enable_prometheus,
endpoints,
engine,
flavor,
ip_restrictions,
maintenance_time,
network_type,
node_number,
nodes,
openstack_region,
plan,
status,
storage,
version
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: valkeys
  props:
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the valkeys resource.
    - name: backup
      description: |
        Backup from which the new service is created. DEPRECATED: use forkFrom
      value:
        id: "{{ id }}"
        pointInTime: "{{ pointInTime }}"
        serviceId: "{{ serviceId }}"
    - name: backup_time
      value: "{{ backup_time }}"
      description: |
        Time on which backups start every day. DEPRECATED: use backups.time
    - name: backups
      description: |
        Information related to the backups, null if the engine does not support backups
      value:
        pitr: "{{ pitr }}"
        regions:
          - "{{ regions }}"
        retentionDays: {{ retentionDays }}
        time: "{{ time }}"
    - name: description
      value: "{{ description }}"
      description: |
        Description of the cluster
    - name: disk
      description: |
        Disk attributes of the cluster
      value:
        size: {{ size }}
        type: "{{ type }}"
    - name: fork_from
      description: |
        Backup from which the new service is created
      value:
        backupId: "{{ backupId }}"
        pointInTime: "{{ pointInTime }}"
        serviceId: "{{ serviceId }}"
    - name: ip_restrictions
      description: |
        IP Blocks authorized to access to the cluster
      value:
        - description: "{{ description }}"
          ip: "{{ ip }}"
          status: "{{ status }}"
    - name: maintenance_time
      value: "{{ maintenance_time }}"
      description: |
        Time on which maintenances can start every day
    - name: network_id
      value: "{{ network_id }}"
      description: |
        Private network ID in which the cluster is
    - name: nodes_list
      description: |
        List of nodes in the cluster, not compatible with nodesPattern
      value:
        - createdAt: "{{ createdAt }}"
          flavor: "{{ flavor }}"
          id: "{{ id }}"
          name: "{{ name }}"
          port: {{ port }}
          region: "{{ region }}"
          role: "{{ role }}"
          status: "{{ status }}"
    - name: nodes_pattern
      description: |
        Pattern definition of the nodes in the cluster, not compatible with nodesList
      value:
        flavor: "{{ flavor }}"
        number: {{ number }}
        region: "{{ region }}"
    - name: plan
      value: "{{ plan }}"
      description: |
        Plan of the cluster
    - name: subnet_id
      value: "{{ subnet_id }}"
      description: |
        Private subnet ID in which the cluster is
    - name: version
      value: "{{ version }}"
      description: |
        Version of the engine deployed on the cluster
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

Update an existing valkey cluster

```sql
UPDATE ovh.cloud_database.valkeys
SET 
backup_time = '{{ backup_time }}',
backups = '{{ backups }}',
deletion_protection = {{ deletion_protection }},
description = '{{ description }}',
disk = '{{ disk }}',
enable_prometheus = {{ enable_prometheus }},
flavor = '{{ flavor }}',
ip_restrictions = '{{ ip_restrictions }}',
maintenance_time = '{{ maintenance_time }}',
network_id = '{{ network_id }}',
node_number = {{ node_number }},
plan = '{{ plan }}',
storage = '{{ storage }}',
subnet_id = '{{ subnet_id }}',
version = '{{ version }}'
WHERE 
cluster_id = '{{ cluster_id }}' --required
AND service_name = '{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
RETURNING
id,
network_id,
subnet_id,
backup_time,
backups,
capabilities,
category,
created_at,
deletion_protection,
description,
disk,
enable_prometheus,
endpoints,
engine,
flavor,
ip_restrictions,
maintenance_time,
network_type,
node_number,
nodes,
openstack_region,
plan,
status,
storage,
version;
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

Delete a valkey cluster

```sql
DELETE FROM ovh.cloud_database.valkeys
WHERE cluster_id = '{{ cluster_id }}' --required
AND service_name = '{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="log_url"
    values={[
        { label: 'log_url', value: 'log_url' }
    ]}
>
<TabItem value="log_url">

Generates a temporary URL to read the logs of one kind. The URL expires.

```sql
EXEC ovh.cloud_database.valkeys.log_url 
@clusterId='{{ clusterId }}' --required, 
@service_name='{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set 
@@json=
'{
"kind": "{{ kind }}"
}'
;
```
</TabItem>
</Tabs>
