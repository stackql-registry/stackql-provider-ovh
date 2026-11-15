--- 
title: billing_report_consumptions
hide_title: false
hide_table_of_contents: false
keywords:
  - billing_report_consumptions
  - me
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

Creates, updates, deletes, gets or lists a <code>billing_report_consumptions</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="billing_report_consumptions" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.me.billing_report_consumptions" /></td></tr>
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
    <td><CopyableCode code="task_id" /></td>
    <td><code>string</code></td>
    <td>Task id of the report (wire: taskId)</td>
</tr>
<tr>
    <td><CopyableCode code="period_end" /></td>
    <td><code>string (date)</code></td>
    <td>End date of the report period (wire: periodEnd)</td>
</tr>
<tr>
    <td><CopyableCode code="period_start" /></td>
    <td><code>string (date)</code></td>
    <td>Start date of the report period (wire: periodStart)</td>
</tr>
<tr>
    <td><CopyableCode code="report" /></td>
    <td><code>string</code></td>
    <td>Url of the report</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of the report (CREATING, ERROR, READY)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Consumption billing report

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
    <td><CopyableCode code="task_id" /></td>
    <td><code>string</code></td>
    <td>Task id of the report (wire: taskId)</td>
</tr>
<tr>
    <td><CopyableCode code="period_end" /></td>
    <td><code>string (date)</code></td>
    <td>End date of the report period (wire: periodEnd)</td>
</tr>
<tr>
    <td><CopyableCode code="period_start" /></td>
    <td><code>string (date)</code></td>
    <td>Start date of the report period (wire: periodStart)</td>
</tr>
<tr>
    <td><CopyableCode code="report" /></td>
    <td><code>string</code></td>
    <td>Url of the report</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of the report (CREATING, ERROR, READY)</td>
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
    <td><a href="#parameter-task_id"><code>task_id</code></a></td>
    <td></td>
    <td>Retrieve a consumption billing report with task id</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>Retrieve all billing reports of consumption</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-period_end"><code>period_end</code></a>, <a href="#parameter-period_start"><code>period_start</code></a></td>
    <td></td>
    <td>Generate consumption billing report for a period</td>
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
<tr id="parameter-task_id">
    <td><CopyableCode code="task_id" /></td>
    <td><code>string</code></td>
    <td>Task ID (wire: taskId)</td>
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

Retrieve a consumption billing report with task id

```sql
SELECT
task_id,
period_end,
period_start,
report,
status
FROM ovh.me.billing_report_consumptions
WHERE task_id = '{{ task_id }}' -- required
;
```
</TabItem>
<TabItem value="list">

Retrieve all billing reports of consumption

```sql
SELECT
task_id,
period_end,
period_start,
report,
status
FROM ovh.me.billing_report_consumptions
WHERE x_pagination_mode = '{{ x_pagination_mode }}'
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

Generate consumption billing report for a period

```sql
INSERT INTO ovh.me.billing_report_consumptions (
period_end,
period_start
)
SELECT 
'{{ period_end }}' /* required */,
'{{ period_start }}' /* required */
RETURNING
task_id
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: billing_report_consumptions
  props:
    - name: period_end
      value: "{{ period_end }}"
      description: |
        End date of the report period
    - name: period_start
      value: "{{ period_start }}"
      description: |
        Start date of the report period
`}</CodeBlock>

</TabItem>
</Tabs>
