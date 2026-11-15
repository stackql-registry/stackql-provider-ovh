--- 
title: filers
hide_title: false
hide_table_of_contents: false
keywords:
  - filers
  - dedicated_cloud
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

Creates, updates, deletes, gets or lists a <code>filers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="filers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.dedicated_cloud.filers" /></td></tr>
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Filer name</td>
</tr>
<tr>
    <td><CopyableCode code="filer_id" /></td>
    <td><code>integer</code></td>
    <td>Filer Id (wire: filerId)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_name" /></td>
    <td><code>string</code></td>
    <td>Resource name (wire: resourceName)</td>
</tr>
<tr>
    <td><CopyableCode code="active_node" /></td>
    <td><code>string</code></td>
    <td>Filer active node. (master, slave) (wire: activeNode)</td>
</tr>
<tr>
    <td><CopyableCode code="billing_type" /></td>
    <td><code>string</code></td>
    <td>Billing type of this filer (freeSpare, hourly, monthly, undefined) (wire: billingType)</td>
</tr>
<tr>
    <td><CopyableCode code="connection_state" /></td>
    <td><code>string</code></td>
    <td>Filer connexion state. (offline, online) (wire: connectionState)</td>
</tr>
<tr>
    <td><CopyableCode code="full_profile" /></td>
    <td><code>string</code></td>
    <td>Human-Readable profile name (wire: fullProfile)</td>
</tr>
<tr>
    <td><CopyableCode code="is_managed_by_ovh" /></td>
    <td><code>boolean</code></td>
    <td>Filer accessibility (if true, customer cannot access it) (wire: isManagedByOvh)</td>
</tr>
<tr>
    <td><CopyableCode code="master" /></td>
    <td><code>string</code></td>
    <td>Filer master node hostname.</td>
</tr>
<tr>
    <td><CopyableCode code="profile" /></td>
    <td><code>string</code></td>
    <td>Commercial profile name</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>object</code></td>
    <td>Filer capacity</td>
</tr>
<tr>
    <td><CopyableCode code="slave" /></td>
    <td><code>string</code></td>
    <td>Filer slave node hostname.</td>
</tr>
<tr>
    <td><CopyableCode code="space_free" /></td>
    <td><code>number</code></td>
    <td>Available space of this datastore, in GB (wire: spaceFree)</td>
</tr>
<tr>
    <td><CopyableCode code="space_provisionned" /></td>
    <td><code>number</code></td>
    <td>Provisionned space of this datastore, in GB (wire: spaceProvisionned)</td>
</tr>
<tr>
    <td><CopyableCode code="space_used" /></td>
    <td><code>number</code></td>
    <td>Used Space of this filer, in GB (wire: spaceUsed)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>State of the filer (adding, delivered, error, removing, unknown)</td>
</tr>
<tr>
    <td><CopyableCode code="vm_total" /></td>
    <td><code>integer</code></td>
    <td>Number of virtual machine on the filer (wire: vmTotal)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Datastore

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Filer name</td>
</tr>
<tr>
    <td><CopyableCode code="filer_id" /></td>
    <td><code>integer</code></td>
    <td>Filer Id (wire: filerId)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_name" /></td>
    <td><code>string</code></td>
    <td>Resource name (wire: resourceName)</td>
</tr>
<tr>
    <td><CopyableCode code="active_node" /></td>
    <td><code>string</code></td>
    <td>Filer active node. (master, slave) (wire: activeNode)</td>
</tr>
<tr>
    <td><CopyableCode code="billing_type" /></td>
    <td><code>string</code></td>
    <td>Billing type of this filer (freeSpare, hourly, monthly, undefined) (wire: billingType)</td>
</tr>
<tr>
    <td><CopyableCode code="connection_state" /></td>
    <td><code>string</code></td>
    <td>Filer connexion state. (offline, online) (wire: connectionState)</td>
</tr>
<tr>
    <td><CopyableCode code="full_profile" /></td>
    <td><code>string</code></td>
    <td>Human-Readable profile name (wire: fullProfile)</td>
</tr>
<tr>
    <td><CopyableCode code="is_managed_by_ovh" /></td>
    <td><code>boolean</code></td>
    <td>Filer accessibility (if true, customer cannot access it) (wire: isManagedByOvh)</td>
</tr>
<tr>
    <td><CopyableCode code="master" /></td>
    <td><code>string</code></td>
    <td>Filer master node hostname.</td>
</tr>
<tr>
    <td><CopyableCode code="profile" /></td>
    <td><code>string</code></td>
    <td>Commercial profile name</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>object</code></td>
    <td>Filer capacity</td>
</tr>
<tr>
    <td><CopyableCode code="slave" /></td>
    <td><code>string</code></td>
    <td>Filer slave node hostname.</td>
</tr>
<tr>
    <td><CopyableCode code="space_free" /></td>
    <td><code>number</code></td>
    <td>Available space of this datastore, in GB (wire: spaceFree)</td>
</tr>
<tr>
    <td><CopyableCode code="space_provisionned" /></td>
    <td><code>number</code></td>
    <td>Provisionned space of this datastore, in GB (wire: spaceProvisionned)</td>
</tr>
<tr>
    <td><CopyableCode code="space_used" /></td>
    <td><code>number</code></td>
    <td>Used Space of this filer, in GB (wire: spaceUsed)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>State of the filer (adding, delivered, error, removing, unknown)</td>
</tr>
<tr>
    <td><CopyableCode code="vm_total" /></td>
    <td><code>integer</code></td>
    <td>Number of virtual machine on the filer (wire: vmTotal)</td>
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
    <td><a href="#parameter-filer_id"><code>filer_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get a datastore. Returns the datastore: profile, size, used, free and provisioned space, state and number of virtual machines.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List global datastores</td>
</tr>
<tr>
    <td><a href="#convert_to_global"><CopyableCode code="convert_to_global" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-filerId"><code>filerId</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Convert a datastore to global. Converts the datastore to a global datastore, mounted on all datacenters of the service. Returns a task to track progress.</td>
</tr>
<tr>
    <td><a href="#remove"><CopyableCode code="remove" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-filerId"><code>filerId</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Remove a datastore</td>
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
<tr id="parameter-filerId">
    <td><CopyableCode code="filerId" /></td>
    <td><code>integer</code></td>
    <td>Filer Id</td>
</tr>
<tr id="parameter-filer_id">
    <td><CopyableCode code="filer_id" /></td>
    <td><code>integer</code></td>
    <td>Filer Id (wire: filerId)</td>
</tr>
<tr id="parameter-serviceName">
    <td><CopyableCode code="serviceName" /></td>
    <td><code>string</code></td>
    <td>Domain of the service</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>Domain of the service (wire: serviceName)</td>
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

Get a datastore. Returns the datastore: profile, size, used, free and provisioned space, state and number of virtual machines.

```sql
SELECT
name,
filer_id,
resource_name,
active_node,
billing_type,
connection_state,
full_profile,
is_managed_by_ovh,
master,
profile,
size,
slave,
space_free,
space_provisionned,
space_used,
state,
vm_total
FROM ovh.dedicated_cloud.filers
WHERE filer_id = '{{ filer_id }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List global datastores

```sql
SELECT
name,
filer_id,
resource_name,
active_node,
billing_type,
connection_state,
full_profile,
is_managed_by_ovh,
master,
profile,
size,
slave,
space_free,
space_provisionned,
space_used,
state,
vm_total
FROM ovh.dedicated_cloud.filers
WHERE service_name = '{{ service_name }}' -- required
AND x_pagination_mode = '{{ x_pagination_mode }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="convert_to_global"
    values={[
        { label: 'convert_to_global', value: 'convert_to_global' },
        { label: 'remove', value: 'remove' }
    ]}
>
<TabItem value="convert_to_global">

Convert a datastore to global. Converts the datastore to a global datastore, mounted on all datacenters of the service. Returns a task to track progress.

```sql
EXEC ovh.dedicated_cloud.filers.convert_to_global 
@filerId='{{ filerId }}' --required, 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
<TabItem value="remove">

Remove a datastore

```sql
EXEC ovh.dedicated_cloud.filers.remove 
@filerId='{{ filerId }}' --required, 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
</Tabs>
