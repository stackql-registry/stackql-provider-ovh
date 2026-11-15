--- 
title: node_roles
hide_title: false
hide_table_of_contents: false
keywords:
  - node_roles
  - cluster_hadoop
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

Creates, updates, deletes, gets or lists a <code>node_roles</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="node_roles" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.cluster_hadoop.node_roles" /></td></tr>
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
    <td><code>integer</code></td>
    <td>ID of the Role</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Role name (cloudera_manager, data_node, elasticsearch_server, hbase_master, hbase_region_server, hive_server2, hue, impala_daemon, impala_server, map_reduce_history_server, name_node, oozie_server, open_tsdb, secondary_name_node, solr_server, spark_master, spark_worker, sqoop_server, yarn_node_manager, yarn_resource_manager, zoo_keeper)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Role (ie set of Hadoop services) of the Node

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
    <td><code>integer</code></td>
    <td>ID of the Role</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Role name (cloudera_manager, data_node, elasticsearch_server, hbase_master, hbase_region_server, hive_server2, hue, impala_daemon, impala_server, map_reduce_history_server, name_node, oozie_server, open_tsdb, secondary_name_node, solr_server, spark_master, spark_worker, sqoop_server, yarn_node_manager, yarn_resource_manager, zoo_keeper)</td>
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
    <td><a href="#parameter-hostname"><code>hostname</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td></td>
    <td>Get this object properties</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-hostname"><code>hostname</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>Roles (ie set of Hadoop services) of the Node</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-hostname"><code>hostname</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td></td>
    <td>Add the Role to the Node</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-hostname"><code>hostname</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td></td>
    <td>Remove this Role from the Node</td>
</tr>
<tr>
    <td><a href="#restart"><CopyableCode code="restart" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-hostname"><code>hostname</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td></td>
    <td>Restart the role on the node (THIS ACTION WILL RESTART OTHER DEPENDANT ROLES)</td>
</tr>
<tr>
    <td><a href="#start"><CopyableCode code="start" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-hostname"><code>hostname</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td></td>
    <td>Start the role on the node</td>
</tr>
<tr>
    <td><a href="#stop"><CopyableCode code="stop" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-hostname"><code>hostname</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td></td>
    <td>Stop the role on the node (THIS ACTION WILL STOP OTHER DEPENDANT ROLES)</td>
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
<tr id="parameter-hostname">
    <td><CopyableCode code="hostname" /></td>
    <td><code>string</code></td>
    <td>Hostname of the node</td>
</tr>
<tr id="parameter-serviceName">
    <td><CopyableCode code="serviceName" /></td>
    <td><code>string</code></td>
    <td>The internal name of your cluster</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The internal name of your cluster (wire: serviceName)</td>
</tr>
<tr id="parameter-type">
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Role name</td>
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

Get this object properties

```sql
SELECT
id,
type
FROM ovh.cluster_hadoop.node_roles
WHERE hostname = '{{ hostname }}' -- required
AND service_name = '{{ service_name }}' -- required
AND type = '{{ type }}' -- required
;
```
</TabItem>
<TabItem value="list">

Roles (ie set of Hadoop services) of the Node

```sql
SELECT
id,
type
FROM ovh.cluster_hadoop.node_roles
WHERE hostname = '{{ hostname }}' -- required
AND service_name = '{{ service_name }}' -- required
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

Add the Role to the Node

```sql
INSERT INTO ovh.cluster_hadoop.node_roles (
type,
hostname,
service_name
)
SELECT 
'{{ type }}' /* required */,
'{{ hostname }}',
'{{ service_name }}'
RETURNING
name,
task_id,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: node_roles
  props:
    - name: hostname
      value: "{{ hostname }}"
      description: Required parameter for the node_roles resource.
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the node_roles resource.
    - name: type
      value: "{{ type }}"
      description: |
        Role name
      valid_values: ['cloudera_manager', 'data_node', 'elasticsearch_server', 'hbase_master', 'hbase_region_server', 'hive_server2', 'hue', 'impala_daemon', 'impala_server', 'map_reduce_history_server', 'name_node', 'oozie_server', 'open_tsdb', 'secondary_name_node', 'solr_server', 'spark_master', 'spark_worker', 'sqoop_server', 'yarn_node_manager', 'yarn_resource_manager', 'zoo_keeper']
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

Remove this Role from the Node

```sql
DELETE FROM ovh.cluster_hadoop.node_roles
WHERE hostname = '{{ hostname }}' --required
AND service_name = '{{ service_name }}' --required
AND type = '{{ type }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="restart"
    values={[
        { label: 'restart', value: 'restart' },
        { label: 'start', value: 'start' },
        { label: 'stop', value: 'stop' }
    ]}
>
<TabItem value="restart">

Restart the role on the node (THIS ACTION WILL RESTART OTHER DEPENDANT ROLES)

```sql
EXEC ovh.cluster_hadoop.node_roles.restart 
@hostname='{{ hostname }}' --required, 
@serviceName='{{ serviceName }}' --required, 
@type='{{ type }}' --required
;
```
</TabItem>
<TabItem value="start">

Start the role on the node

```sql
EXEC ovh.cluster_hadoop.node_roles.start 
@hostname='{{ hostname }}' --required, 
@serviceName='{{ serviceName }}' --required, 
@type='{{ type }}' --required
;
```
</TabItem>
<TabItem value="stop">

Stop the role on the node (THIS ACTION WILL STOP OTHER DEPENDANT ROLES)

```sql
EXEC ovh.cluster_hadoop.node_roles.stop 
@hostname='{{ hostname }}' --required, 
@serviceName='{{ serviceName }}' --required, 
@type='{{ type }}' --required
;
```
</TabItem>
</Tabs>
