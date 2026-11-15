--- 
title: vrops_outgoing_flows
hide_title: false
hide_table_of_contents: false
keywords:
  - vrops_outgoing_flows
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

Creates, updates, deletes, gets or lists a <code>vrops_outgoing_flows</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="vrops_outgoing_flows" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.dedicated_cloud.vrops_outgoing_flows" /></td></tr>
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
    <td><CopyableCode code="outgoing_flow_id" /></td>
    <td><code>integer</code></td>
    <td>Id of the VMware Aria Operations outgoing flow (wire: outgoingFlowId)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Outgoing flow description</td>
</tr>
<tr>
    <td><CopyableCode code="ip" /></td>
    <td><code>string (ipv4)</code></td>
    <td>IP address of the remote service (example: 192.0.2.0)</td>
</tr>
<tr>
    <td><CopyableCode code="service_port" /></td>
    <td><code>integer</code></td>
    <td>Remote service port (25, 465, 587 or 2525) (wire: servicePort)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Outgoing flow state (creating, deleting, delivered, error, toCreate, toDelete, toUpdate, unknown, updating)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

VMware Aria Operations outgoing flows

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
    <td><CopyableCode code="outgoing_flow_id" /></td>
    <td><code>integer</code></td>
    <td>Id of the VMware Aria Operations outgoing flow (wire: outgoingFlowId)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Outgoing flow description</td>
</tr>
<tr>
    <td><CopyableCode code="ip" /></td>
    <td><code>string (ipv4)</code></td>
    <td>IP address of the remote service (example: 192.0.2.0)</td>
</tr>
<tr>
    <td><CopyableCode code="service_port" /></td>
    <td><code>integer</code></td>
    <td>Remote service port (25, 465, 587 or 2525) (wire: servicePort)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Outgoing flow state (creating, deleting, delivered, error, toCreate, toDelete, toUpdate, unknown, updating)</td>
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
    <td><a href="#parameter-outgoing_flow_id"><code>outgoing_flow_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get an Aria Operations outgoing flow. Returns the remote IP address and port, description and state of the outgoing flow.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List Aria Operations outgoing flows. Returns the IDs of the outgoing flows allowed from Aria Operations.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-ip"><code>ip</code></a>, <a href="#parameter-service_port"><code>service_port</code></a></td>
    <td></td>
    <td>Create an Aria Operations outgoing flow. Allows Aria Operations to reach a remote service on port 25, 465, 587 or 2525. Returns a task to track progress.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-outgoing_flow_id"><code>outgoing_flow_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Delete an Aria Operations outgoing flow. Removes the outgoing flow. Returns a task to track progress.</td>
</tr>
<tr>
    <td><a href="#change_properties"><CopyableCode code="change_properties" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-outgoingFlowId"><code>outgoingFlowId</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Update an Aria Operations outgoing flow. Updates the description of the outgoing flow. Returns a task to track progress.</td>
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
<tr id="parameter-outgoingFlowId">
    <td><CopyableCode code="outgoingFlowId" /></td>
    <td><code>integer</code></td>
    <td>Id of the VMware Aria Operations outgoing flow</td>
</tr>
<tr id="parameter-outgoing_flow_id">
    <td><CopyableCode code="outgoing_flow_id" /></td>
    <td><code>integer</code></td>
    <td>Id of the VMware Aria Operations outgoing flow (wire: outgoingFlowId)</td>
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

Get an Aria Operations outgoing flow. Returns the remote IP address and port, description and state of the outgoing flow.

```sql
SELECT
outgoing_flow_id,
description,
ip,
service_port,
state
FROM ovh.dedicated_cloud.vrops_outgoing_flows
WHERE outgoing_flow_id = '{{ outgoing_flow_id }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List Aria Operations outgoing flows. Returns the IDs of the outgoing flows allowed from Aria Operations.

```sql
SELECT
outgoing_flow_id,
description,
ip,
service_port,
state
FROM ovh.dedicated_cloud.vrops_outgoing_flows
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

Create an Aria Operations outgoing flow. Allows Aria Operations to reach a remote service on port 25, 465, 587 or 2525. Returns a task to track progress.

```sql
INSERT INTO ovh.dedicated_cloud.vrops_outgoing_flows (
description,
ip,
service_port,
service_name
)
SELECT 
'{{ description }}',
'{{ ip }}' /* required */,
{{ service_port }} /* required */,
'{{ service_name }}'
RETURNING
name,
datacenter_id,
filer_id,
host_id,
network_access_id,
order_id,
parent_task_id,
task_id,
user_id,
vlan_id,
created_by,
created_from,
description,
end_date,
execution_date,
last_modification_date,
maintenance_date_from,
maintenance_date_to,
network,
progress,
state,
type
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: vrops_outgoing_flows
  props:
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the vrops_outgoing_flows resource.
    - name: description
      value: "{{ description }}"
      description: |
        Outgoing flow description
    - name: ip
      value: "{{ ip }}"
      description: |
        IP address of the remote service, e.g. 123.100.200.0
    - name: service_port
      value: {{ service_port }}
      description: |
        Remote service port (25, 465, 587 or 2525)
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

Delete an Aria Operations outgoing flow. Removes the outgoing flow. Returns a task to track progress.

```sql
DELETE FROM ovh.dedicated_cloud.vrops_outgoing_flows
WHERE outgoing_flow_id = '{{ outgoing_flow_id }}' --required
AND service_name = '{{ service_name }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="change_properties"
    values={[
        { label: 'change_properties', value: 'change_properties' }
    ]}
>
<TabItem value="change_properties">

Update an Aria Operations outgoing flow. Updates the description of the outgoing flow. Returns a task to track progress.

```sql
EXEC ovh.dedicated_cloud.vrops_outgoing_flows.change_properties 
@outgoingFlowId='{{ outgoingFlowId }}' --required, 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"description": "{{ description }}"
}'
;
```
</TabItem>
</Tabs>
