--- 
title: migration2020s
hide_title: false
hide_table_of_contents: false
keywords:
  - migration2020s
  - vps
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

Creates, updates, deletes, gets or lists a <code>migration2020s</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="migration2020s" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.vps.migration2020s" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
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
    <td><CopyableCode code="available_plans" /></td>
    <td><code>array</code></td>
    <td>List of available plans to migrate (wire: availablePlans)</td>
</tr>
<tr>
    <td><CopyableCode code="current_plan" /></td>
    <td><code>string</code></td>
    <td>VPS current plan code (wire: currentPlan)</td>
</tr>
<tr>
    <td><CopyableCode code="date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date of planned migration, null if not scheduled</td>
</tr>
<tr>
    <td><CopyableCode code="position" /></td>
    <td><code>integer</code></td>
    <td>Position on the migration queue, null if not in queue</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>All status a migration task can be in (available, done, notAvailable, ongoing, planned, toPlan)</td>
</tr>
<tr>
    <td><CopyableCode code="target_plan" /></td>
    <td><code>string</code></td>
    <td>VPS target plan code after migration (wire: targetPlan)</td>
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
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Returns the state of the migration of the VPS 2020 to VPS 2025, with the current and target plans, the available plans, the position in the queue and the date.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-plan"><code>plan</code></a></td>
    <td></td>
    <td>Queues the VPS 2020 for migration to VPS 2025 with the given target plan and returns the migration state.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Updates the target plan of the pending migration of the VPS 2020 to VPS 2025 and returns the migration state.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Cancels the pending migration request of the VPS 2020 to VPS 2025.</td>
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
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

Returns the state of the migration of the VPS 2020 to VPS 2025, with the current and target plans, the available plans, the position in the queue and the date.

```sql
SELECT
available_plans,
current_plan,
date,
position,
status,
target_plan
FROM ovh.vps.migration2020s
WHERE service_name = '{{ service_name }}' -- required
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

Queues the VPS 2020 for migration to VPS 2025 with the given target plan and returns the migration state.

```sql
INSERT INTO ovh.vps.migration2020s (
plan,
service_name
)
SELECT 
'{{ plan }}' /* required */,
'{{ service_name }}'
RETURNING
available_plans,
current_plan,
date,
position,
status,
target_plan
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: migration2020s
  props:
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the migration2020s resource.
    - name: plan
      value: "{{ plan }}"
      description: |
        VPS target plan code
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

Updates the target plan of the pending migration of the VPS 2020 to VPS 2025 and returns the migration state.

```sql
UPDATE ovh.vps.migration2020s
SET 
date = '{{ date }}'
WHERE 
service_name = '{{ service_name }}' --required
RETURNING
available_plans,
current_plan,
date,
position,
status,
target_plan;
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

Cancels the pending migration request of the VPS 2020 to VPS 2025.

```sql
DELETE FROM ovh.vps.migration2020s
WHERE service_name = '{{ service_name }}' --required
;
```
</TabItem>
</Tabs>
