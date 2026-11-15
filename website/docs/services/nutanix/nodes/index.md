--- 
title: nodes
hide_title: false
hide_table_of_contents: false
keywords:
  - nodes
  - nutanix
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
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.nutanix.nodes" /></td></tr>
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
    <td><CopyableCode code="ahv_ip" /></td>
    <td><code>string (ipv4)</code></td>
    <td>Hypervisor IP (example: 192.0.2.0) (wire: ahvIp)</td>
</tr>
<tr>
    <td><CopyableCode code="cvm_ip" /></td>
    <td><code>string (ipv4)</code></td>
    <td>Controler VM IP (example: 192.0.2.0) (wire: cvmIp)</td>
</tr>
<tr>
    <td><CopyableCode code="possible_actions" /></td>
    <td><code>array</code></td>
    <td>Node possible actions (wire: possibleActions)</td>
</tr>
<tr>
    <td><CopyableCode code="server" /></td>
    <td><code>string</code></td>
    <td>Name of the associated server</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Node status (DEPLOYED, DEPLOYING, DEPLOY_CANCELLED, DEPLOY_FAILURE, UNDEPLOYED, UNDEPLOYING, UNDEPLOY_CANCELLED, UNDEPLOY_FAILURE, UNKNOWN)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Node details in a nutanix cluster

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
    <td><CopyableCode code="ahv_ip" /></td>
    <td><code>string (ipv4)</code></td>
    <td>Hypervisor IP (example: 192.0.2.0) (wire: ahvIp)</td>
</tr>
<tr>
    <td><CopyableCode code="cvm_ip" /></td>
    <td><code>string (ipv4)</code></td>
    <td>Controler VM IP (example: 192.0.2.0) (wire: cvmIp)</td>
</tr>
<tr>
    <td><CopyableCode code="possible_actions" /></td>
    <td><code>array</code></td>
    <td>Node possible actions (wire: possibleActions)</td>
</tr>
<tr>
    <td><CopyableCode code="server" /></td>
    <td><code>string</code></td>
    <td>Name of the associated server</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Node status (DEPLOYED, DEPLOYING, DEPLOY_CANCELLED, DEPLOY_FAILURE, UNDEPLOYED, UNDEPLOYING, UNDEPLOY_CANCELLED, UNDEPLOY_FAILURE, UNKNOWN)</td>
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
    <td><a href="#parameter-server"><code>server</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get a node details in a cluster</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get all nodes in a cluster</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-server"><code>server</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-version"><code>version</code></a></td>
    <td></td>
    <td>Reinstall a node in a cluster</td>
</tr>
<tr>
    <td><a href="#deploy"><CopyableCode code="deploy" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-server"><code>server</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td></td>
</tr>
<tr>
    <td><a href="#terminate"><CopyableCode code="terminate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-server"><code>server</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Terminate a node</td>
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
<tr id="parameter-server">
    <td><CopyableCode code="server" /></td>
    <td><code>string</code></td>
    <td>Server</td>
</tr>
<tr id="parameter-serviceName">
    <td><CopyableCode code="serviceName" /></td>
    <td><code>string</code></td>
    <td>Service name</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>Service name (wire: serviceName)</td>
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

Get a node details in a cluster

```sql
SELECT
ahv_ip,
cvm_ip,
possible_actions,
server,
status
FROM ovh.nutanix.nodes
WHERE server = '{{ server }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

Get all nodes in a cluster

```sql
SELECT
ahv_ip,
cvm_ip,
possible_actions,
server,
status
FROM ovh.nutanix.nodes
WHERE service_name = '{{ service_name }}' -- required
;
```
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

Reinstall a node in a cluster

```sql
UPDATE ovh.nutanix.nodes
SET 
version = '{{ version }}'
WHERE 
server = '{{ server }}' --required
AND service_name = '{{ service_name }}' --required
AND version = '{{ version }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="deploy"
    values={[
        { label: 'deploy', value: 'deploy' },
        { label: 'terminate', value: 'terminate' }
    ]}
>
<TabItem value="deploy">

successful operation

```sql
EXEC ovh.nutanix.nodes.deploy 
@server='{{ server }}' --required, 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"ahvIp": "{{ ahvIp }}", 
"cvmIp": "{{ cvmIp }}", 
"version": "{{ version }}"
}'
;
```
</TabItem>
<TabItem value="terminate">

Terminate a node

```sql
EXEC ovh.nutanix.nodes.terminate 
@server='{{ server }}' --required, 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
</Tabs>
