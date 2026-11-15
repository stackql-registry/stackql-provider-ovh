--- 
title: automated_backups
hide_title: false
hide_table_of_contents: false
keywords:
  - automated_backups
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

Creates, updates, deletes, gets or lists an <code>automated_backups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="automated_backups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.vps.automated_backups" /></td></tr>
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
    <td><CopyableCode code="service_resource_name" /></td>
    <td><code>string</code></td>
    <td>Resource name of the service of your automated backup (wire: serviceResourceName)</td>
</tr>
<tr>
    <td><CopyableCode code="rotation" /></td>
    <td><code>integer</code></td>
    <td>Number of rotation of your daily backup</td>
</tr>
<tr>
    <td><CopyableCode code="schedule" /></td>
    <td><code>string (time)</code></td>
    <td>Scheduled time of your daily backup (example: 15:04:05)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Backup state (disabled, enabled)</td>
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
    <td>Returns whether the automated backup is enabled, its rotation and the time of the daily backup.</td>
</tr>
<tr>
    <td><a href="#detach_backup"><CopyableCode code="detach_backup" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-restorePoint"><code>restorePoint</code></a></td>
    <td></td>
    <td>Unmounts the restored backup from the VPS and returns the task that performs it.</td>
</tr>
<tr>
    <td><a href="#reschedule"><CopyableCode code="reschedule" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-schedule"><code>schedule</code></a></td>
    <td></td>
    <td>Changes the time of the daily automated backup and returns the task that performs it.</td>
</tr>
<tr>
    <td><a href="#restore"><CopyableCode code="restore" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-restorePoint"><code>restorePoint</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td></td>
    <td>Restores the VPS from the given restore point and returns the task that performs it.</td>
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
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

Returns whether the automated backup is enabled, its rotation and the time of the daily backup.

```sql
SELECT
service_resource_name,
rotation,
schedule,
state
FROM ovh.vps.automated_backups
WHERE service_name = '{{ service_name }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="detach_backup"
    values={[
        { label: 'detach_backup', value: 'detach_backup' },
        { label: 'reschedule', value: 'reschedule' },
        { label: 'restore', value: 'restore' }
    ]}
>
<TabItem value="detach_backup">

Unmounts the restored backup from the VPS and returns the task that performs it.

```sql
EXEC ovh.vps.automated_backups.detach_backup 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"restorePoint": "{{ restorePoint }}"
}'
;
```
</TabItem>
<TabItem value="reschedule">

Changes the time of the daily automated backup and returns the task that performs it.

```sql
EXEC ovh.vps.automated_backups.reschedule 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"schedule": "{{ schedule }}"
}'
;
```
</TabItem>
<TabItem value="restore">

Restores the VPS from the given restore point and returns the task that performs it.

```sql
EXEC ovh.vps.automated_backups.restore 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"changePassword": {{ changePassword }}, 
"restorePoint": "{{ restorePoint }}", 
"type": "{{ type }}"
}'
;
```
</TabItem>
</Tabs>
