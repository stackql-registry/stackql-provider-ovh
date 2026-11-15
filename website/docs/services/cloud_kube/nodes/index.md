--- 
title: nodes
hide_title: false
hide_table_of_contents: false
keywords:
  - nodes
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

Creates, updates, deletes, gets or lists a <code>nodes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="nodes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.cloud_kube.nodes" /></td></tr>
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
    <td>Node ID</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Node name</td>
</tr>
<tr>
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>Public Cloud instance id (wire: instanceId)</td>
</tr>
<tr>
    <td><CopyableCode code="node_pool_id" /></td>
    <td><code>string</code></td>
    <td>NodePool parent id (wire: nodePoolId)</td>
</tr>
<tr>
    <td><CopyableCode code="project_id" /></td>
    <td><code>string</code></td>
    <td>Project id (wire: projectId)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="deleted_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Node deletion date (wire: deletedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="deployed_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Node deployment date (wire: deployedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="flavor" /></td>
    <td><code>string</code></td>
    <td>Flavor name</td>
</tr>
<tr>
    <td><CopyableCode code="is_up_to_date" /></td>
    <td><code>boolean</code></td>
    <td>True if the node is up to date (wire: isUpToDate)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status (DELETED, DELETING, ERROR, FLAVOR_OUT_OF_STOCK_ERROR, INSTALLING, MAINTENANCE, READY, REDEPLOYING, REOPENING, RESETTING, SUSPENDED, SUSPENDING, UNKNOWN, UPDATING, USER_ERROR, USER_NODE_NOT_FOUND_ERROR, USER_NODE_SUSPENDED_SERVICE, USER_QUOTA_ERROR, USER_WEBHOOK_PREVENTING_OPERATIONS_ERROR)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Node last update date (wire: updatedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>Node version</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Node installed on your cluster

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
    <td>Node ID</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Node name</td>
</tr>
<tr>
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>Public Cloud instance id (wire: instanceId)</td>
</tr>
<tr>
    <td><CopyableCode code="node_pool_id" /></td>
    <td><code>string</code></td>
    <td>NodePool parent id (wire: nodePoolId)</td>
</tr>
<tr>
    <td><CopyableCode code="project_id" /></td>
    <td><code>string</code></td>
    <td>Project id (wire: projectId)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="deleted_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Node deletion date (wire: deletedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="deployed_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Node deployment date (wire: deployedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="flavor" /></td>
    <td><code>string</code></td>
    <td>Flavor name</td>
</tr>
<tr>
    <td><CopyableCode code="is_up_to_date" /></td>
    <td><code>boolean</code></td>
    <td>True if the node is up to date (wire: isUpToDate)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status (DELETED, DELETING, ERROR, FLAVOR_OUT_OF_STOCK_ERROR, INSTALLING, MAINTENANCE, READY, REDEPLOYING, REOPENING, RESETTING, SUSPENDED, SUSPENDING, UNKNOWN, UPDATING, USER_ERROR, USER_NODE_NOT_FOUND_ERROR, USER_NODE_SUSPENDED_SERVICE, USER_QUOTA_ERROR, USER_WEBHOOK_PREVENTING_OPERATIONS_ERROR)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Node last update date (wire: updatedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>Node version</td>
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
    <td><a href="#parameter-kube_id"><code>kube_id</code></a>, <a href="#parameter-node_id"><code>node_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get information on a specific node on your cluster</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-kube_id"><code>kube_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_cursor"><code>x_pagination_cursor</code></a>, <a href="#parameter-history"><code>history</code></a></td>
    <td>List your nodes</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-kube_id"><code>kube_id</code></a>, <a href="#parameter-node_id"><code>node_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Delete a specific node on your cluster. This will also decrease by one the desirednodes value of its nodepool.</td>
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
<tr id="parameter-node_id">
    <td><CopyableCode code="node_id" /></td>
    <td><code>string</code></td>
    <td>Node ID (wire: nodeId)</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The Public Cloud project ID. Resolved from OVH_CLOUD_PROJECT_SERVICE when set.</td>
</tr>
<tr id="parameter-history">
    <td><CopyableCode code="history" /></td>
    <td><code>boolean</code></td>
    <td>If set to true then returns DELETED nodes ordered by deletion date (most recently deleted first). Returns non-DELETED nodes if false or not set.</td>
</tr>
<tr id="parameter-x_pagination_cursor">
    <td><CopyableCode code="x_pagination_cursor" /></td>
    <td><code>string</code></td>
    <td>Pagination cursor (wire: X-Pagination-Cursor)</td>
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

Get information on a specific node on your cluster

```sql
SELECT
id,
name,
instance_id,
node_pool_id,
project_id,
created_at,
deleted_at,
deployed_at,
flavor,
is_up_to_date,
status,
updated_at,
version
FROM ovh.cloud_kube.nodes
WHERE kube_id = '{{ kube_id }}' -- required
AND node_id = '{{ node_id }}' -- required
AND service_name = '{{ service_name }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
<TabItem value="list">

List your nodes

```sql
SELECT
id,
name,
instance_id,
node_pool_id,
project_id,
created_at,
deleted_at,
deployed_at,
flavor,
is_up_to_date,
status,
updated_at,
version
FROM ovh.cloud_kube.nodes
WHERE kube_id = '{{ kube_id }}' -- required
AND service_name = '{{ service_name }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
AND x_pagination_cursor = '{{ x_pagination_cursor }}'
AND history = '{{ history }}'
;
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

Delete a specific node on your cluster. This will also decrease by one the desirednodes value of its nodepool.

```sql
DELETE FROM ovh.cloud_kube.nodes
WHERE kube_id = '{{ kube_id }}' --required
AND node_id = '{{ node_id }}' --required
AND service_name = '{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
</Tabs>
