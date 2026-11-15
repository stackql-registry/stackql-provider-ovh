--- 
title: nodes
hide_title: false
hide_table_of_contents: false
keywords:
  - nodes
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

Creates, updates, deletes, gets or lists a <code>nodes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="nodes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.cluster_hadoop.nodes" /></td></tr>
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
    <td><CopyableCode code="billing_profile_name" /></td>
    <td><code>string</code></td>
    <td>Name of the billing profile attached to the node (100-small, 200-cpu-1, 220-cpu-3, 300-disk-1, 310-disk-3, 900-vm-1) (wire: billingProfileName)</td>
</tr>
<tr>
    <td><CopyableCode code="hostname" /></td>
    <td><code>string</code></td>
    <td>Hostname of the node</td>
</tr>
<tr>
    <td><CopyableCode code="ip" /></td>
    <td><code>string (ipv4)</code></td>
    <td>IP of the Node (example: 192.0.2.0)</td>
</tr>
<tr>
    <td><CopyableCode code="is_removable" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not the Node is removable (wire: isRemovable)</td>
</tr>
<tr>
    <td><CopyableCode code="software_profile" /></td>
    <td><code>string</code></td>
    <td>Profile of the Node (ApplicationServer, BasicNode, ClouderaManager, MasterServer, SecondaryServer) (wire: softwareProfile)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>State of the Node (available, delivered, toDeploy, unavailable)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Physical or Virtual Node

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
    <td><CopyableCode code="billing_profile_name" /></td>
    <td><code>string</code></td>
    <td>Name of the billing profile attached to the node (100-small, 200-cpu-1, 220-cpu-3, 300-disk-1, 310-disk-3, 900-vm-1) (wire: billingProfileName)</td>
</tr>
<tr>
    <td><CopyableCode code="hostname" /></td>
    <td><code>string</code></td>
    <td>Hostname of the node</td>
</tr>
<tr>
    <td><CopyableCode code="ip" /></td>
    <td><code>string (ipv4)</code></td>
    <td>IP of the Node (example: 192.0.2.0)</td>
</tr>
<tr>
    <td><CopyableCode code="is_removable" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not the Node is removable (wire: isRemovable)</td>
</tr>
<tr>
    <td><CopyableCode code="software_profile" /></td>
    <td><code>string</code></td>
    <td>Profile of the Node (ApplicationServer, BasicNode, ClouderaManager, MasterServer, SecondaryServer) (wire: softwareProfile)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>State of the Node (available, delivered, toDeploy, unavailable)</td>
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
    <td><a href="#parameter-hostname"><code>hostname</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get this object properties</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-software_profile"><code>software_profile</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>Nodes of the Cluster</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-hostname"><code>hostname</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Remove this Node from the Cluster</td>
</tr>
<tr>
    <td><a href="#decommission"><CopyableCode code="decommission" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-hostname"><code>hostname</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Decommission the node and all the services on it</td>
</tr>
<tr>
    <td><a href="#recommission"><CopyableCode code="recommission" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-hostname"><code>hostname</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Recommission the node and all the services on it</td>
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
<tr id="parameter-software_profile">
    <td><CopyableCode code="software_profile" /></td>
    <td><code>string</code></td>
    <td>Filter the value of softwareProfile property (=) (wire: softwareProfile)</td>
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
billing_profile_name,
hostname,
ip,
is_removable,
software_profile,
state
FROM ovh.cluster_hadoop.nodes
WHERE hostname = '{{ hostname }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

Nodes of the Cluster

```sql
SELECT
billing_profile_name,
hostname,
ip,
is_removable,
software_profile,
state
FROM ovh.cluster_hadoop.nodes
WHERE service_name = '{{ service_name }}' -- required
AND software_profile = '{{ software_profile }}'
AND x_pagination_mode = '{{ x_pagination_mode }}'
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

Remove this Node from the Cluster

```sql
DELETE FROM ovh.cluster_hadoop.nodes
WHERE hostname = '{{ hostname }}' --required
AND service_name = '{{ service_name }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="decommission"
    values={[
        { label: 'decommission', value: 'decommission' },
        { label: 'recommission', value: 'recommission' }
    ]}
>
<TabItem value="decommission">

Decommission the node and all the services on it

```sql
EXEC ovh.cluster_hadoop.nodes.decommission 
@hostname='{{ hostname }}' --required, 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
<TabItem value="recommission">

Recommission the node and all the services on it

```sql
EXEC ovh.cluster_hadoop.nodes.recommission 
@hostname='{{ hostname }}' --required, 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
</Tabs>
