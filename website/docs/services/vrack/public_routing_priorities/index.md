--- 
title: public_routing_priorities
hide_title: false
hide_table_of_contents: false
keywords:
  - public_routing_priorities
  - vrack
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

Creates, updates, deletes, gets or lists a <code>public_routing_priorities</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="public_routing_priorities" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.vrack.public_routing_priorities" /></td></tr>
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
    <td><CopyableCode code="priority_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Public routing priority identifier (wire: priorityId)</td>
</tr>
<tr>
    <td><CopyableCode code="availability_zones" /></td>
    <td><code>array</code></td>
    <td>Priority definition per availability zone (wire: availabilityZones)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Name of the region where public routing priority is defined</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Public routing priority type (custom, default)</td>
</tr>
<tr>
    <td><CopyableCode code="vrack" /></td>
    <td><code>string</code></td>
    <td>vrack name</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Public routing priority

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
    <td><CopyableCode code="priority_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Public routing priority identifier (wire: priorityId)</td>
</tr>
<tr>
    <td><CopyableCode code="availability_zones" /></td>
    <td><code>array</code></td>
    <td>Priority definition per availability zone (wire: availabilityZones)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Name of the region where public routing priority is defined</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Public routing priority type (custom, default)</td>
</tr>
<tr>
    <td><CopyableCode code="vrack" /></td>
    <td><code>string</code></td>
    <td>vrack name</td>
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
    <td><a href="#parameter-priority_id"><code>priority_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get a priority. Returns the region, the type, default or custom, and the priority of each availability zone.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List priorities. Returns the identifiers of the 3-AZ failover priorities of the vRack.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-availability_zones"><code>availability_zones</code></a>, <a href="#parameter-region"><code>region</code></a></td>
    <td></td>
    <td>Create a priority.&lt;br /&gt;&lt;br /&gt;This endpoint will create a new 'custom' routing priority.&lt;br /&gt;&lt;br /&gt;You can create a new 'custom' routing priority if you have an additional IP block in your vRack in the same region or not.&lt;br /&gt;&lt;br /&gt;You do not have to create a 'custom' routing priority for RTvRack 3AZ to work. If you add an additional IP block in a 3AZ region without any routing priority and any additional IP block, a 'default' routing priority will automatically be chosen for you.&lt;br /&gt;&lt;br /&gt;Priorities must be set to `1`, `2` or `3` for each availability zone.&lt;br /&gt;&lt;br /&gt;`1` stands for the availability zone with highest priority, which will handle traffic by default.&lt;br /&gt;&lt;br /&gt;`2` is the availability zone with second-highest priority, which will handle traffic as soon as priority `1` availability zone is not available.&lt;br /&gt;&lt;br /&gt;`3` is the availability zone with lowest priority, it will handle traffic if neither the availability zone with priority `1` nor the availability zone with priority `2` are available.&lt;br /&gt;&lt;br /&gt;All availability zones in a 3AZ region must be set in the payload in order for the 'custom' routing priority to be created.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-priority_id"><code>priority_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Update a priority. Updates the priority of each availability zone of a custom failover priority. A default one cannot be updated: create a custom one first.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-priority_id"><code>priority_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Delete a priority. Deletes a custom failover priority. If Additional IP blocks remain in the region, a default priority is generated from the infrastructure usage.</td>
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
<tr id="parameter-priority_id">
    <td><CopyableCode code="priority_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Public routing priority identifier (wire: priorityId)</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The internal name of your vrack (wire: serviceName)</td>
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

Get a priority. Returns the region, the type, default or custom, and the priority of each availability zone.

```sql
SELECT
priority_id,
availability_zones,
region,
type,
vrack
FROM ovh.vrack.public_routing_priorities
WHERE priority_id = '{{ priority_id }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List priorities. Returns the identifiers of the 3-AZ failover priorities of the vRack.

```sql
SELECT
priority_id,
availability_zones,
region,
type,
vrack
FROM ovh.vrack.public_routing_priorities
WHERE service_name = '{{ service_name }}' -- required
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

Create a priority.&lt;br /&gt;&lt;br /&gt;This endpoint will create a new 'custom' routing priority.&lt;br /&gt;&lt;br /&gt;You can create a new 'custom' routing priority if you have an additional IP block in your vRack in the same region or not.&lt;br /&gt;&lt;br /&gt;You do not have to create a 'custom' routing priority for RTvRack 3AZ to work. If you add an additional IP block in a 3AZ region without any routing priority and any additional IP block, a 'default' routing priority will automatically be chosen for you.&lt;br /&gt;&lt;br /&gt;Priorities must be set to `1`, `2` or `3` for each availability zone.&lt;br /&gt;&lt;br /&gt;`1` stands for the availability zone with highest priority, which will handle traffic by default.&lt;br /&gt;&lt;br /&gt;`2` is the availability zone with second-highest priority, which will handle traffic as soon as priority `1` availability zone is not available.&lt;br /&gt;&lt;br /&gt;`3` is the availability zone with lowest priority, it will handle traffic if neither the availability zone with priority `1` nor the availability zone with priority `2` are available.&lt;br /&gt;&lt;br /&gt;All availability zones in a 3AZ region must be set in the payload in order for the 'custom' routing priority to be created.

```sql
INSERT INTO ovh.vrack.public_routing_priorities (
availability_zones,
region,
service_name
)
SELECT 
'{{ availability_zones }}' /* required */,
'{{ region }}' /* required */,
'{{ service_name }}'
RETURNING
id,
order_id,
service_name,
function,
last_update,
status,
target_domain,
todo_date
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: public_routing_priorities
  props:
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the public_routing_priorities resource.
    - name: availability_zones
      description: |
        Priority definition, every region's availability zones MUST be listed
      value:
        - name: "{{ name }}"
          priority: {{ priority }}
    - name: region
      value: "{{ region }}"
      description: |
        Name of the region where Public routing priority is defined
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

Update a priority. Updates the priority of each availability zone of a custom failover priority. A default one cannot be updated: create a custom one first.

```sql
UPDATE ovh.vrack.public_routing_priorities
SET 
availability_zones = '{{ availability_zones }}'
WHERE 
priority_id = '{{ priority_id }}' --required
AND service_name = '{{ service_name }}' --required
RETURNING
id,
order_id,
service_name,
function,
last_update,
status,
target_domain,
todo_date;
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

Delete a priority. Deletes a custom failover priority. If Additional IP blocks remain in the region, a default priority is generated from the infrastructure usage.

```sql
DELETE FROM ovh.vrack.public_routing_priorities
WHERE priority_id = '{{ priority_id }}' --required
AND service_name = '{{ service_name }}' --required
;
```
</TabItem>
</Tabs>
