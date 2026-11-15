--- 
title: region_workflow_backups
hide_title: false
hide_table_of_contents: false
keywords:
  - region_workflow_backups
  - cloud
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

Creates, updates, deletes, gets or lists a <code>region_workflow_backups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="region_workflow_backups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.cloud.region_workflow_backups" /></td></tr>
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
    <td>Workflow id</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Workflow name identifier</td>
</tr>
<tr>
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>Instance id (wire: instanceId)</td>
</tr>
<tr>
    <td><CopyableCode code="backup_name" /></td>
    <td><code>string</code></td>
    <td>Backup name (wire: backupName)</td>
</tr>
<tr>
    <td><CopyableCode code="distant_backup_name" /></td>
    <td><code>string</code></td>
    <td>Name of the distant backup if the workflow creates a distant backup (wire: distantBackupName)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date of the workflow (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="cron" /></td>
    <td><code>string</code></td>
    <td>Workflow cron pattern</td>
</tr>
<tr>
    <td><CopyableCode code="distant_region" /></td>
    <td><code>string</code></td>
    <td>Name of the distant region if the workflow creates a distant backup (wire: distantRegion)</td>
</tr>
<tr>
    <td><CopyableCode code="executions" /></td>
    <td><code>array</code></td>
    <td>Executions logs</td>
</tr>
<tr>
    <td><CopyableCode code="next_execution_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Next execution time (wire: nextExecutionTime)</td>
</tr>
<tr>
    <td><CopyableCode code="rotation" /></td>
    <td><code>integer</code></td>
    <td>Number of backup to keep</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

List your automated backups

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
    <td>Workflow id</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Workflow name identifier</td>
</tr>
<tr>
    <td><CopyableCode code="instance_id" /></td>
    <td><code>string</code></td>
    <td>Instance id (wire: instanceId)</td>
</tr>
<tr>
    <td><CopyableCode code="backup_name" /></td>
    <td><code>string</code></td>
    <td>Backup name (wire: backupName)</td>
</tr>
<tr>
    <td><CopyableCode code="distant_backup_name" /></td>
    <td><code>string</code></td>
    <td>Name of the distant backup if the workflow creates a distant backup (wire: distantBackupName)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date of the workflow (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="cron" /></td>
    <td><code>string</code></td>
    <td>Workflow cron pattern</td>
</tr>
<tr>
    <td><CopyableCode code="distant_region" /></td>
    <td><code>string</code></td>
    <td>Name of the distant region if the workflow creates a distant backup (wire: distantRegion)</td>
</tr>
<tr>
    <td><CopyableCode code="executions" /></td>
    <td><code>array</code></td>
    <td>Executions logs</td>
</tr>
<tr>
    <td><CopyableCode code="next_execution_time" /></td>
    <td><code>string (date-time)</code></td>
    <td>Next execution time (wire: nextExecutionTime)</td>
</tr>
<tr>
    <td><CopyableCode code="rotation" /></td>
    <td><code>integer</code></td>
    <td>Number of backup to keep</td>
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
    <td><a href="#parameter-backup_workflow_id"><code>backup_workflow_id</code></a>, <a href="#parameter-region_name"><code>region_name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get details about a backup workflow process</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region_name"><code>region_name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>List your automated backups</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region_name"><code>region_name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-cron"><code>cron</code></a>, <a href="#parameter-instance_id"><code>instance_id</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-rotation"><code>rotation</code></a></td>
    <td></td>
    <td>Create a new automated backup</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-backup_workflow_id"><code>backup_workflow_id</code></a>, <a href="#parameter-region_name"><code>region_name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Delete a backup workflow process</td>
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
<tr id="parameter-backup_workflow_id">
    <td><CopyableCode code="backup_workflow_id" /></td>
    <td><code>string</code></td>
    <td>Backup workflow ID (wire: backupWorkflowId)</td>
</tr>
<tr id="parameter-region_name">
    <td><CopyableCode code="region_name" /></td>
    <td><code>string</code></td>
    <td>Region name (wire: regionName)</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The Public Cloud project ID. Resolved from OVH_CLOUD_PROJECT_SERVICE when set.</td>
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

Get details about a backup workflow process

```sql
SELECT
id,
name,
instance_id,
backup_name,
distant_backup_name,
created_at,
cron,
distant_region,
executions,
next_execution_time,
rotation
FROM ovh.cloud.region_workflow_backups
WHERE backup_workflow_id = '{{ backup_workflow_id }}' -- required
AND region_name = '{{ region_name }}' -- required
AND service_name = '{{ service_name }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
<TabItem value="list">

List your automated backups

```sql
SELECT
id,
name,
instance_id,
backup_name,
distant_backup_name,
created_at,
cron,
distant_region,
executions,
next_execution_time,
rotation
FROM ovh.cloud.region_workflow_backups
WHERE region_name = '{{ region_name }}' -- required
AND service_name = '{{ service_name }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
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

Create a new automated backup

```sql
INSERT INTO ovh.cloud.region_workflow_backups (
cron,
instance_id,
max_execution_count,
name,
rotation,
region_name,
service_name
)
SELECT 
'{{ cron }}' /* required */,
'{{ instance_id }}' /* required */,
{{ max_execution_count }},
'{{ name }}' /* required */,
{{ rotation }} /* required */,
'{{ region_name }}',
'{{ service_name }}'
RETURNING
id,
name,
instance_id,
backup_name,
distant_backup_name,
created_at,
cron,
distant_region,
executions,
next_execution_time,
rotation
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: region_workflow_backups
  props:
    - name: region_name
      value: "{{ region_name }}"
      description: Required parameter for the region_workflow_backups resource.
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the region_workflow_backups resource.
    - name: cron
      value: "{{ cron }}"
      description: |
        Unix Cron pattern (eg: '* * * * *')
    - name: instance_id
      value: "{{ instance_id }}"
      description: |
        Instance ID to backup
    - name: max_execution_count
      value: {{ max_execution_count }}
      description: |
        Number of execution to process before ending the job. Null value means that the job will never end.
    - name: name
      value: "{{ name }}"
      description: |
        Name of your backup job
    - name: rotation
      value: {{ rotation }}
      description: |
        Number of backup to keep
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

Delete a backup workflow process

```sql
DELETE FROM ovh.cloud.region_workflow_backups
WHERE backup_workflow_id = '{{ backup_workflow_id }}' --required
AND region_name = '{{ region_name }}' --required
AND service_name = '{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
</Tabs>
