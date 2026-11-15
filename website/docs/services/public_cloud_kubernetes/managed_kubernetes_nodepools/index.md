--- 
title: managed_kubernetes_nodepools
hide_title: false
hide_table_of_contents: false
keywords:
  - managed_kubernetes_nodepools
  - public_cloud_kubernetes
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

Creates, updates, deletes, gets or lists a <code>managed_kubernetes_nodepools</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="managed_kubernetes_nodepools" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.public_cloud_kubernetes.managed_kubernetes_nodepools" /></td></tr>
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
    <td>Unique identifier of the nodepool</td>
</tr>
<tr>
    <td><CopyableCode code="checksum" /></td>
    <td><code>string</code></td>
    <td>Concurrency control hash of the target specification</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Nodepool creation timestamp (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="current_state" /></td>
    <td><code>object</code></td>
    <td>Actual nodepool state (wire: currentState)</td>
</tr>
<tr>
    <td><CopyableCode code="current_tasks" /></td>
    <td><code>array</code></td>
    <td>In-progress asynchronous operations on the nodepool (wire: currentTasks)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_status" /></td>
    <td><code>string</code></td>
    <td>Current lifecycle status of the nodepool (CREATING, CREATION_PLANNED, DELETING, ERROR, OUT_OF_SYNC, READY, SUSPENDED, UNKNOWN, UPDATING) (wire: resourceStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="target_spec" /></td>
    <td><code>object</code></td>
    <td>Desired nodepool specification (wire: targetSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last nodepool modification timestamp (wire: updatedAt)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A nodepool of a managed Kubernetes cluster

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
    <td>Unique identifier of the nodepool</td>
</tr>
<tr>
    <td><CopyableCode code="checksum" /></td>
    <td><code>string</code></td>
    <td>Concurrency control hash of the target specification</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Nodepool creation timestamp (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="current_state" /></td>
    <td><code>object</code></td>
    <td>Actual nodepool state (wire: currentState)</td>
</tr>
<tr>
    <td><CopyableCode code="current_tasks" /></td>
    <td><code>array</code></td>
    <td>In-progress asynchronous operations on the nodepool (wire: currentTasks)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_status" /></td>
    <td><code>string</code></td>
    <td>Current lifecycle status of the nodepool (CREATING, CREATION_PLANNED, DELETING, ERROR, OUT_OF_SYNC, READY, SUSPENDED, UNKNOWN, UPDATING) (wire: resourceStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="target_spec" /></td>
    <td><code>object</code></td>
    <td>Desired nodepool specification (wire: targetSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last nodepool modification timestamp (wire: updatedAt)</td>
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
    <td><a href="#parameter-managed_kubernetes_id"><code>managed_kubernetes_id</code></a>, <a href="#parameter-node_pool_id"><code>node_pool_id</code></a>, <a href="#parameter-project_id"><code>project_id</code></a></td>
    <td></td>
    <td>Get a nodepool of a managed Kubernetes cluster (Beta version)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-managed_kubernetes_id"><code>managed_kubernetes_id</code></a>, <a href="#parameter-project_id"><code>project_id</code></a></td>
    <td><a href="#parameter-x_pagination_cursor"><code>x_pagination_cursor</code></a>, <a href="#parameter-x_pagination_size"><code>x_pagination_size</code></a></td>
    <td>List nodepools of a managed Kubernetes cluster (Beta version)</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-managed_kubernetes_id"><code>managed_kubernetes_id</code></a>, <a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-target_spec"><code>target_spec</code></a></td>
    <td></td>
    <td>Create a nodepool in a managed Kubernetes cluster (Beta version)</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-managed_kubernetes_id"><code>managed_kubernetes_id</code></a>, <a href="#parameter-node_pool_id"><code>node_pool_id</code></a>, <a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-target_spec"><code>target_spec</code></a></td>
    <td></td>
    <td>Update a nodepool of a managed Kubernetes cluster (Beta version)</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-managed_kubernetes_id"><code>managed_kubernetes_id</code></a>, <a href="#parameter-node_pool_id"><code>node_pool_id</code></a>, <a href="#parameter-project_id"><code>project_id</code></a></td>
    <td></td>
    <td>Delete a nodepool of a managed Kubernetes cluster (Beta version)</td>
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
<tr id="parameter-managed_kubernetes_id">
    <td><CopyableCode code="managed_kubernetes_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Managed kubernetes ID (wire: managedKubernetesId)</td>
</tr>
<tr id="parameter-node_pool_id">
    <td><CopyableCode code="node_pool_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Node pool ID (wire: nodePoolId)</td>
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

Get a nodepool of a managed Kubernetes cluster (Beta version)

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
FROM ovh.public_cloud_kubernetes.managed_kubernetes_nodepools
WHERE managed_kubernetes_id = '{{ managed_kubernetes_id }}' -- required
AND node_pool_id = '{{ node_pool_id }}' -- required
AND project_id = '{{ project_id }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
<TabItem value="list">

List nodepools of a managed Kubernetes cluster (Beta version)

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
FROM ovh.public_cloud_kubernetes.managed_kubernetes_nodepools
WHERE managed_kubernetes_id = '{{ managed_kubernetes_id }}' -- required
AND project_id = '{{ project_id }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
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

Create a nodepool in a managed Kubernetes cluster (Beta version)

```sql
INSERT INTO ovh.public_cloud_kubernetes.managed_kubernetes_nodepools (
target_spec,
managed_kubernetes_id,
project_id
)
SELECT 
'{{ target_spec }}' /* required */,
'{{ managed_kubernetes_id }}',
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
- name: managed_kubernetes_nodepools
  props:
    - name: managed_kubernetes_id
      value: "{{ managed_kubernetes_id }}"
      description: Required parameter for the managed_kubernetes_nodepools resource.
    - name: project_id
      value: "{{ project_id }}"
      description: Required parameter for the managed_kubernetes_nodepools resource.
    - name: target_spec
      description: |
        Desired nodepool specification
      value:
        antiAffinity:
          enabled: {{ enabled }}
          policy: "{{ policy }}"
        autoscaler:
          enabled: {{ enabled }}
          maxNodes: {{ maxNodes }}
          minNodes: {{ minNodes }}
          scaleDown:
            unneededTimeSeconds: {{ unneededTimeSeconds }}
            unreadyTimeSeconds: {{ unreadyTimeSeconds }}
            utilizationThreshold: {{ utilizationThreshold }}
        availabilityZone: "{{ availabilityZone }}"
        billingType: "{{ billingType }}"
        desiredNodes: {{ desiredNodes }}
        name: "{{ name }}"
        nodeConfig:
          attachFloatingIp:
            enabled: {{ enabled }}
          flavor: "{{ flavor }}"
        template:
          metadata:
            annotations: "{{ annotations }}"
            finalizers:
              - "{{ finalizers }}"
            labels: "{{ labels }}"
          spec:
            taints:
              - effect: "{{ effect }}"
                key: "{{ key }}"
                value: "{{ value }}"
            unschedulable: {{ unschedulable }}
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

Update a nodepool of a managed Kubernetes cluster (Beta version)

```sql
UPDATE ovh.public_cloud_kubernetes.managed_kubernetes_nodepools
SET 
checksum = '{{ checksum }}',
target_spec = '{{ target_spec }}'
WHERE 
managed_kubernetes_id = '{{ managed_kubernetes_id }}' --required
AND node_pool_id = '{{ node_pool_id }}' --required
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

Delete a nodepool of a managed Kubernetes cluster (Beta version)

```sql
DELETE FROM ovh.public_cloud_kubernetes.managed_kubernetes_nodepools
WHERE managed_kubernetes_id = '{{ managed_kubernetes_id }}' --required
AND node_pool_id = '{{ node_pool_id }}' --required
AND project_id = '{{ project_id }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
</Tabs>
