--- 
title: tenant_vspc_backup_agents
hide_title: false
hide_table_of_contents: false
keywords:
  - tenant_vspc_backup_agents
  - backup_services
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

Creates, updates, deletes, gets or lists a <code>tenant_vspc_backup_agents</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="tenant_vspc_backup_agents" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.backup_services.tenant_vspc_backup_agents" /></td></tr>
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
    <td>Unique identifier of the backup agent</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time when you create the backup agent (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="current_state" /></td>
    <td><code>object</code></td>
    <td>Current state of the backup agent (wire: currentState)</td>
</tr>
<tr>
    <td><CopyableCode code="current_tasks" /></td>
    <td><code>array</code></td>
    <td>Current tasks that the backup agent performs (wire: currentTasks)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Shows whether the backup agent is ready (CREATING, DISABLED, ENABLED, NOT_CONFIGURED, NOT_INSTALLED, UPDATING)</td>
</tr>
<tr>
    <td><CopyableCode code="target_spec" /></td>
    <td><code>object</code></td>
    <td>Target specification for the backup agent (wire: targetSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time when you update the backup agent (wire: updatedAt)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Represents a VSPC backup agent

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
    <td>Unique identifier of the backup agent</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time when you create the backup agent (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="current_state" /></td>
    <td><code>object</code></td>
    <td>Current state of the backup agent (wire: currentState)</td>
</tr>
<tr>
    <td><CopyableCode code="current_tasks" /></td>
    <td><code>array</code></td>
    <td>Current tasks that the backup agent performs (wire: currentTasks)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Shows whether the backup agent is ready (CREATING, DISABLED, ENABLED, NOT_CONFIGURED, NOT_INSTALLED, UPDATING)</td>
</tr>
<tr>
    <td><CopyableCode code="target_spec" /></td>
    <td><code>object</code></td>
    <td>Target specification for the backup agent (wire: targetSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date and time when you update the backup agent (wire: updatedAt)</td>
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
    <td><a href="#parameter-backup_agent_id"><code>backup_agent_id</code></a>, <a href="#parameter-backup_services_id"><code>backup_services_id</code></a>, <a href="#parameter-vspc_tenant_id"><code>vspc_tenant_id</code></a></td>
    <td></td>
    <td>Gets specific backup agent details</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-backup_services_id"><code>backup_services_id</code></a>, <a href="#parameter-vspc_tenant_id"><code>vspc_tenant_id</code></a></td>
    <td><a href="#parameter-x_pagination_cursor"><code>x_pagination_cursor</code></a>, <a href="#parameter-x_pagination_size"><code>x_pagination_size</code></a></td>
    <td>Lists backup agents</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-backup_services_id"><code>backup_services_id</code></a>, <a href="#parameter-vspc_tenant_id"><code>vspc_tenant_id</code></a></td>
    <td></td>
    <td>Creates backup agent</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-backup_agent_id"><code>backup_agent_id</code></a>, <a href="#parameter-backup_services_id"><code>backup_services_id</code></a>, <a href="#parameter-vspc_tenant_id"><code>vspc_tenant_id</code></a></td>
    <td></td>
    <td>Updates backup agent</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-backup_agent_id"><code>backup_agent_id</code></a>, <a href="#parameter-backup_services_id"><code>backup_services_id</code></a>, <a href="#parameter-vspc_tenant_id"><code>vspc_tenant_id</code></a></td>
    <td></td>
    <td>Deletes backup agent</td>
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
<tr id="parameter-backup_agent_id">
    <td><CopyableCode code="backup_agent_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Backup agent ID (wire: backupAgentId)</td>
</tr>
<tr id="parameter-backup_services_id">
    <td><CopyableCode code="backup_services_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Backup services ID (wire: backupServicesId)</td>
</tr>
<tr id="parameter-vspc_tenant_id">
    <td><CopyableCode code="vspc_tenant_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Vspc tenant ID (wire: vspcTenantId)</td>
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

Gets specific backup agent details

```sql
SELECT
id,
created_at,
current_state,
current_tasks,
status,
target_spec,
updated_at
FROM ovh.backup_services.tenant_vspc_backup_agents
WHERE backup_agent_id = '{{ backup_agent_id }}' -- required
AND backup_services_id = '{{ backup_services_id }}' -- required
AND vspc_tenant_id = '{{ vspc_tenant_id }}' -- required
;
```
</TabItem>
<TabItem value="list">

Lists backup agents

```sql
SELECT
id,
created_at,
current_state,
current_tasks,
status,
target_spec,
updated_at
FROM ovh.backup_services.tenant_vspc_backup_agents
WHERE backup_services_id = '{{ backup_services_id }}' -- required
AND vspc_tenant_id = '{{ vspc_tenant_id }}' -- required
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

Creates backup agent

```sql
INSERT INTO ovh.backup_services.tenant_vspc_backup_agents (
display_name,
ips,
product_resource_name,
region,
backup_services_id,
vspc_tenant_id
)
SELECT 
'{{ display_name }}',
'{{ ips }}',
'{{ product_resource_name }}',
'{{ region }}',
'{{ backup_services_id }}',
'{{ vspc_tenant_id }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: tenant_vspc_backup_agents
  props:
    - name: backup_services_id
      value: "{{ backup_services_id }}"
      description: Required parameter for the tenant_vspc_backup_agents resource.
    - name: vspc_tenant_id
      value: "{{ vspc_tenant_id }}"
      description: Required parameter for the tenant_vspc_backup_agents resource.
    - name: display_name
      value: "{{ display_name }}"
      description: |
        Specifies the name of the backup agent
    - name: ips
      value:
        - "{{ ips }}"
      description: |
        Specifies the IP addresses assigned to the backup agent
    - name: product_resource_name
      value: "{{ product_resource_name }}"
      description: |
        Specifies the product resource name that the agent backs up
    - name: region
      value: "{{ region }}"
      description: |
        Specifies the geographic region where the backup agent operates
      valid_values: ['af-north-lz-rba', 'ap-south-mum', 'ap-southeast-sgp', 'ap-southeast-syd', 'ca-east-bhs', 'ca-east-tor', 'eu-central-lz-buh', 'eu-central-lz-prg', 'eu-central-lz-sof', 'eu-central-waw', 'eu-north-lz-cph', 'eu-north-lz-hel', 'eu-north-lz-osl', 'eu-north-lz-sto', 'eu-south-lz-lis', 'eu-south-lz-mad', 'eu-south-lz-mil', 'eu-south-mil', 'eu-west-eri', 'eu-west-gra', 'eu-west-gra-snc', 'eu-west-lim', 'eu-west-lz-ams', 'eu-west-lz-bru', 'eu-west-lz-dln', 'eu-west-lz-lux', 'eu-west-lz-mnc', 'eu-west-lz-mrs', 'eu-west-lz-vie', 'eu-west-lz-zrh', 'eu-west-par', 'eu-west-rbx', 'eu-west-rbx-snc', 'eu-west-sbg', 'eu-west-sbg-snc', 'us-central-lz-slc', 'us-central-lz-stl', 'us-east-lz-atl', 'us-east-lz-bos', 'us-east-lz-chi', 'us-east-lz-dal', 'us-east-lz-mia', 'us-east-lz-nyc', 'us-east-vin', 'us-west-hil', 'us-west-lz-den', 'us-west-lz-lax', 'us-west-lz-pao', 'us-west-lz-phx', 'us-west-lz-sea']
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

Updates backup agent

```sql
UPDATE ovh.backup_services.tenant_vspc_backup_agents
SET 
display_name = '{{ display_name }}',
ips = '{{ ips }}',
policy = '{{ policy }}'
WHERE 
backup_agent_id = '{{ backup_agent_id }}' --required
AND backup_services_id = '{{ backup_services_id }}' --required
AND vspc_tenant_id = '{{ vspc_tenant_id }}' --required;
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

Deletes backup agent

```sql
DELETE FROM ovh.backup_services.tenant_vspc_backup_agents
WHERE backup_agent_id = '{{ backup_agent_id }}' --required
AND backup_services_id = '{{ backup_services_id }}' --required
AND vspc_tenant_id = '{{ vspc_tenant_id }}' --required
;
```
</TabItem>
</Tabs>
