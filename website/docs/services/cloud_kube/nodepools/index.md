--- 
title: nodepools
hide_title: false
hide_table_of_contents: false
keywords:
  - nodepools
  - cloud_kube
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

Creates, updates, deletes, gets or lists a <code>nodepools</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="nodepools" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.cloud_kube.nodepools" /></td></tr>
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
    <td><code>string</code></td>
    <td>NodePool ID</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>NodePool resource name</td>
</tr>
<tr>
    <td><CopyableCode code="project_id" /></td>
    <td><code>string</code></td>
    <td>Project id (wire: projectId)</td>
</tr>
<tr>
    <td><CopyableCode code="anti_affinity" /></td>
    <td><code>boolean</code></td>
    <td>Enable anti affinity groups for nodes in the pool (wire: antiAffinity)</td>
</tr>
<tr>
    <td><CopyableCode code="attach_floating_ips" /></td>
    <td><code>object</code></td>
    <td>Parameters for optional node exposition via a floating IP per node (wire: attachFloatingIps)</td>
</tr>
<tr>
    <td><CopyableCode code="autoscale" /></td>
    <td><code>boolean</code></td>
    <td>Enable auto-scaling for the pool</td>
</tr>
<tr>
    <td><CopyableCode code="autoscaling" /></td>
    <td><code>object</code></td>
    <td>Autoscaling customization parameters</td>
</tr>
<tr>
    <td><CopyableCode code="availability_zones" /></td>
    <td><code>array</code></td>
    <td>List of availability zones where nodes will be created (only 1 zone is supported for now) (wire: availabilityZones)</td>
</tr>
<tr>
    <td><CopyableCode code="available_nodes" /></td>
    <td><code>integer</code></td>
    <td>Number of nodes which are actually ready in the pool (wire: availableNodes)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="current_nodes" /></td>
    <td><code>integer</code></td>
    <td>Number of nodes present in the pool (wire: currentNodes)</td>
</tr>
<tr>
    <td><CopyableCode code="desired_nodes" /></td>
    <td><code>integer</code></td>
    <td>Number of nodes you desire in the pool (wire: desiredNodes)</td>
</tr>
<tr>
    <td><CopyableCode code="flavor" /></td>
    <td><code>string</code></td>
    <td>Flavor name</td>
</tr>
<tr>
    <td><CopyableCode code="max_nodes" /></td>
    <td><code>integer</code></td>
    <td>Number of nodes you desire in the pool (wire: maxNodes)</td>
</tr>
<tr>
    <td><CopyableCode code="min_nodes" /></td>
    <td><code>integer</code></td>
    <td>Number of nodes you desire in the pool (wire: minNodes)</td>
</tr>
<tr>
    <td><CopyableCode code="monthly_billed" /></td>
    <td><code>boolean</code></td>
    <td>Enable monthly billing on all nodes in the pool (wire: monthlyBilled)</td>
</tr>
<tr>
    <td><CopyableCode code="size_status" /></td>
    <td><code>string</code></td>
    <td>Status describing the state between number of nodes wanted and available ones (CAPACITY_OK, OVER_CAPACITY, UNDER_CAPACITY) (wire: sizeStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Current status (DELETED, DELETING, DOWNSCALING, ERROR, INSTALLING, MAINTENANCE, READY, REDEPLOYING, REOPENING, RESETTING, SUSPENDED, SUSPENDING, UNKNOWN, UPDATING, UPSCALING, USER_ERROR, USER_NODE_NOT_FOUND_ERROR, USER_NODE_SUSPENDED_SERVICE, USER_QUOTA_ERROR, USER_WEBHOOK_PREVENTING_OPERATIONS_ERROR)</td>
</tr>
<tr>
    <td><CopyableCode code="template" /></td>
    <td><code>object</code></td>
    <td>Template of nodes metadata and spec to create in the pool</td>
</tr>
<tr>
    <td><CopyableCode code="up_to_date_nodes" /></td>
    <td><code>integer</code></td>
    <td>Number of nodes with latest version installed in the pool (wire: upToDateNodes)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last update date (wire: updatedAt)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

NodePool created on your cluster to manage your nodes

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
    <td><code>string</code></td>
    <td>NodePool ID</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>NodePool resource name</td>
</tr>
<tr>
    <td><CopyableCode code="project_id" /></td>
    <td><code>string</code></td>
    <td>Project id (wire: projectId)</td>
</tr>
<tr>
    <td><CopyableCode code="anti_affinity" /></td>
    <td><code>boolean</code></td>
    <td>Enable anti affinity groups for nodes in the pool (wire: antiAffinity)</td>
</tr>
<tr>
    <td><CopyableCode code="attach_floating_ips" /></td>
    <td><code>object</code></td>
    <td>Parameters for optional node exposition via a floating IP per node (wire: attachFloatingIps)</td>
</tr>
<tr>
    <td><CopyableCode code="autoscale" /></td>
    <td><code>boolean</code></td>
    <td>Enable auto-scaling for the pool</td>
</tr>
<tr>
    <td><CopyableCode code="autoscaling" /></td>
    <td><code>object</code></td>
    <td>Autoscaling customization parameters</td>
</tr>
<tr>
    <td><CopyableCode code="availability_zones" /></td>
    <td><code>array</code></td>
    <td>List of availability zones where nodes will be created (only 1 zone is supported for now) (wire: availabilityZones)</td>
</tr>
<tr>
    <td><CopyableCode code="available_nodes" /></td>
    <td><code>integer</code></td>
    <td>Number of nodes which are actually ready in the pool (wire: availableNodes)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="current_nodes" /></td>
    <td><code>integer</code></td>
    <td>Number of nodes present in the pool (wire: currentNodes)</td>
</tr>
<tr>
    <td><CopyableCode code="desired_nodes" /></td>
    <td><code>integer</code></td>
    <td>Number of nodes you desire in the pool (wire: desiredNodes)</td>
</tr>
<tr>
    <td><CopyableCode code="flavor" /></td>
    <td><code>string</code></td>
    <td>Flavor name</td>
</tr>
<tr>
    <td><CopyableCode code="max_nodes" /></td>
    <td><code>integer</code></td>
    <td>Number of nodes you desire in the pool (wire: maxNodes)</td>
</tr>
<tr>
    <td><CopyableCode code="min_nodes" /></td>
    <td><code>integer</code></td>
    <td>Number of nodes you desire in the pool (wire: minNodes)</td>
</tr>
<tr>
    <td><CopyableCode code="monthly_billed" /></td>
    <td><code>boolean</code></td>
    <td>Enable monthly billing on all nodes in the pool (wire: monthlyBilled)</td>
</tr>
<tr>
    <td><CopyableCode code="size_status" /></td>
    <td><code>string</code></td>
    <td>Status describing the state between number of nodes wanted and available ones (CAPACITY_OK, OVER_CAPACITY, UNDER_CAPACITY) (wire: sizeStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Current status (DELETED, DELETING, DOWNSCALING, ERROR, INSTALLING, MAINTENANCE, READY, REDEPLOYING, REOPENING, RESETTING, SUSPENDED, SUSPENDING, UNKNOWN, UPDATING, UPSCALING, USER_ERROR, USER_NODE_NOT_FOUND_ERROR, USER_NODE_SUSPENDED_SERVICE, USER_QUOTA_ERROR, USER_WEBHOOK_PREVENTING_OPERATIONS_ERROR)</td>
</tr>
<tr>
    <td><CopyableCode code="template" /></td>
    <td><code>object</code></td>
    <td>Template of nodes metadata and spec to create in the pool</td>
</tr>
<tr>
    <td><CopyableCode code="up_to_date_nodes" /></td>
    <td><code>integer</code></td>
    <td>Number of nodes with latest version installed in the pool (wire: upToDateNodes)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last update date (wire: updatedAt)</td>
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
    <td><a href="#parameter-kube_id"><code>kube_id</code></a>, <a href="#parameter-node_pool_id"><code>node_pool_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get information on a specific nodepool on your cluster</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-kube_id"><code>kube_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>List your nodepools</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-kube_id"><code>kube_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-flavor_name"><code>flavor_name</code></a></td>
    <td></td>
    <td>Create a nodepool on your cluster</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-kube_id"><code>kube_id</code></a>, <a href="#parameter-node_pool_id"><code>node_pool_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Update your nodepool information</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-kube_id"><code>kube_id</code></a>, <a href="#parameter-node_pool_id"><code>node_pool_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Delete a nodepool from your cluster</td>
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
<tr id="parameter-kube_id">
    <td><CopyableCode code="kube_id" /></td>
    <td><code>string</code></td>
    <td>Kube ID (wire: kubeId)</td>
</tr>
<tr id="parameter-node_pool_id">
    <td><CopyableCode code="node_pool_id" /></td>
    <td><code>string</code></td>
    <td>Node pool ID (wire: nodePoolId)</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The Public Cloud project ID. Resolved from OVH_CLOUD_PROJECT_SERVICE when set.</td>
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

Get information on a specific nodepool on your cluster

```sql
SELECT
id,
name,
project_id,
anti_affinity,
attach_floating_ips,
autoscale,
autoscaling,
availability_zones,
available_nodes,
created_at,
current_nodes,
desired_nodes,
flavor,
max_nodes,
min_nodes,
monthly_billed,
size_status,
status,
template,
up_to_date_nodes,
updated_at
FROM ovh.cloud_kube.nodepools
WHERE kube_id = '{{ kube_id }}' -- required
AND node_pool_id = '{{ node_pool_id }}' -- required
AND service_name = '{{ service_name }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
<TabItem value="list">

List your nodepools

```sql
SELECT
id,
name,
project_id,
anti_affinity,
attach_floating_ips,
autoscale,
autoscaling,
availability_zones,
available_nodes,
created_at,
current_nodes,
desired_nodes,
flavor,
max_nodes,
min_nodes,
monthly_billed,
size_status,
status,
template,
up_to_date_nodes,
updated_at
FROM ovh.cloud_kube.nodepools
WHERE kube_id = '{{ kube_id }}' -- required
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

Create a nodepool on your cluster

```sql
INSERT INTO ovh.cloud_kube.nodepools (
anti_affinity,
attach_floating_ips,
autoscale,
autoscaling,
availability_zones,
desired_nodes,
flavor_name,
max_nodes,
min_nodes,
monthly_billed,
name,
template,
kube_id,
service_name
)
SELECT 
{{ anti_affinity }},
'{{ attach_floating_ips }}',
{{ autoscale }},
'{{ autoscaling }}',
'{{ availability_zones }}',
{{ desired_nodes }},
'{{ flavor_name }}' /* required */,
{{ max_nodes }},
{{ min_nodes }},
{{ monthly_billed }},
'{{ name }}',
'{{ template }}',
'{{ kube_id }}',
'{{ service_name }}'
RETURNING
id,
name,
project_id,
anti_affinity,
attach_floating_ips,
autoscale,
autoscaling,
availability_zones,
available_nodes,
created_at,
current_nodes,
desired_nodes,
flavor,
max_nodes,
min_nodes,
monthly_billed,
size_status,
status,
template,
up_to_date_nodes,
updated_at
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: nodepools
  props:
    - name: kube_id
      value: "{{ kube_id }}"
      description: Required parameter for the nodepools resource.
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the nodepools resource.
    - name: anti_affinity
      value: {{ anti_affinity }}
      description: |
        Enable anti affinity groups for nodes in the pool
    - name: attach_floating_ips
      description: |
        Parameters for optional node exposition via a floating IP per node
      value:
        enabled: {{ enabled }}
    - name: autoscale
      value: {{ autoscale }}
      description: |
        Enable the auto-scaling on the pool
    - name: autoscaling
      description: |
        Autoscaling customization parameters
      value:
        scaleDownUnneededTimeSeconds: {{ scaleDownUnneededTimeSeconds }}
        scaleDownUnreadyTimeSeconds: {{ scaleDownUnreadyTimeSeconds }}
        scaleDownUtilizationThreshold: {{ scaleDownUtilizationThreshold }}
    - name: availability_zones
      value:
        - "{{ availability_zones }}"
      description: |
        List of availability zones where nodes will be created (only 1 zone is supported for now)
    - name: desired_nodes
      value: {{ desired_nodes }}
      description: |
        Number of nodes to instantiate (1 by default)
    - name: flavor_name
      value: "{{ flavor_name }}"
      description: |
        Nodes flavor
    - name: max_nodes
      value: {{ max_nodes }}
      description: |
        Higher limit you accept for the desiredNodes value (100 by default)
    - name: min_nodes
      value: {{ min_nodes }}
      description: |
        Lower limit you accept for the desiredNodes value (0 by default)
    - name: monthly_billed
      value: {{ monthly_billed }}
      description: |
        Enable monthly billing for nodes in the pool
    - name: name
      value: "{{ name }}"
      description: |
        NodePool name
    - name: template
      description: |
        NodePool template to apply to each children nodes
      value:
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

Update your nodepool information

```sql
UPDATE ovh.cloud_kube.nodepools
SET 
attach_floating_ips = '{{ attach_floating_ips }}',
autoscale = {{ autoscale }},
autoscaling = '{{ autoscaling }}',
desired_nodes = {{ desired_nodes }},
max_nodes = {{ max_nodes }},
min_nodes = {{ min_nodes }},
nodes_to_remove = '{{ nodes_to_remove }}',
template = '{{ template }}'
WHERE 
kube_id = '{{ kube_id }}' --required
AND node_pool_id = '{{ node_pool_id }}' --required
AND service_name = '{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set;
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

Delete a nodepool from your cluster

```sql
DELETE FROM ovh.cloud_kube.nodepools
WHERE kube_id = '{{ kube_id }}' --required
AND node_pool_id = '{{ node_pool_id }}' --required
AND service_name = '{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
</Tabs>
