--- 
title: datacenter_backups
hide_title: false
hide_table_of_contents: false
keywords:
  - datacenter_backups
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

Creates, updates, deletes, gets or lists a <code>datacenter_backups</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="datacenter_backups" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.dedicated_cloud.datacenter_backups" /></td></tr>
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
    <td><CopyableCode code="vmware_vm_id" /></td>
    <td><code>string</code></td>
    <td>The moref of the backup server virtual machine (wire: vmwareVmId)</td>
</tr>
<tr>
    <td><CopyableCode code="backup_duration_in_report" /></td>
    <td><code>boolean</code></td>
    <td>Duration on email report (wire: backupDurationInReport)</td>
</tr>
<tr>
    <td><CopyableCode code="backup_offer" /></td>
    <td><code>string</code></td>
    <td>Backup offer type (advanced, backup, classic, legacy, premium) (wire: backupOffer)</td>
</tr>
<tr>
    <td><CopyableCode code="backup_size_in_report" /></td>
    <td><code>boolean</code></td>
    <td>Backup size on day on email report (wire: backupSizeInReport)</td>
</tr>
<tr>
    <td><CopyableCode code="disk_size_in_report" /></td>
    <td><code>boolean</code></td>
    <td>Disk size on mail report (wire: diskSizeInReport)</td>
</tr>
<tr>
    <td><CopyableCode code="encryption" /></td>
    <td><code>boolean</code></td>
    <td>Backup is encrypted</td>
</tr>
<tr>
    <td><CopyableCode code="full_day_in_report" /></td>
    <td><code>boolean</code></td>
    <td>Full day on mail report (wire: fullDayInReport)</td>
</tr>
<tr>
    <td><CopyableCode code="hostname" /></td>
    <td><code>string</code></td>
    <td>Name of the backup server virtual machine.</td>
</tr>
<tr>
    <td><CopyableCode code="mail_address" /></td>
    <td><code>string</code></td>
    <td>Unique additional email address for backup daily report (wire: mailAddress)</td>
</tr>
<tr>
    <td><CopyableCode code="replication_zone" /></td>
    <td><code>string</code></td>
    <td>Backup replication zone (wire: replicationZone)</td>
</tr>
<tr>
    <td><CopyableCode code="restore_point_in_report" /></td>
    <td><code>boolean</code></td>
    <td>RestorePoint number on mail report (wire: restorePointInReport)</td>
</tr>
<tr>
    <td><CopyableCode code="schedule_hour" /></td>
    <td><code>string (time)</code></td>
    <td>Schedule hour for start backup (example: 15:04:05) (wire: scheduleHour)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>This Backup current state (disabled, disabling, enabled, enabling, error, migrating, removing)</td>
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
    <td><a href="#parameter-datacenter_id"><code>datacenter_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get the backup option. Returns the backup option of the datacenter: offer, state, schedule hour, encryption and report settings.</td>
</tr>
<tr>
    <td><a href="#batch_restore"><CopyableCode code="batch_restore" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-datacenterId"><code>datacenterId</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-backupRepositoryName"><code>backupRepositoryName</code></a></td>
    <td></td>
    <td>Restore the last backups. Restores each backup job, or a single virtual machine, from its last restore point. Find the repository and job names in the report sent by `generateReport`. Returns a task to track progress.</td>
</tr>
<tr>
    <td><a href="#change_properties"><CopyableCode code="change_properties" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-datacenterId"><code>datacenterId</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-backupOffer"><code>backupOffer</code></a></td>
    <td></td>
    <td>Update the backup option. Changes the backup offer, the schedule hour (UTC) and the additional email address for the daily report. Returns a task to track progress.</td>
</tr>
<tr>
    <td><a href="#disable"><CopyableCode code="disable" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-datacenterId"><code>datacenterId</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Disable the backup option. Disables the backup option of the datacenter. Returns a task to track progress.</td>
</tr>
<tr>
    <td><a href="#generate_report"><CopyableCode code="generate_report" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-datacenterId"><code>datacenterId</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Send a backup report. Sends a report with all backup information by email. Returns a task to track progress.</td>
</tr>
<tr>
    <td><a href="#optimize_proxies"><CopyableCode code="optimize_proxies" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-datacenterId"><code>datacenterId</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Optimize backup proxies. Optimizes the number of backup proxies of the datacenter. Returns a task to track progress.</td>
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
<tr id="parameter-datacenterId">
    <td><CopyableCode code="datacenterId" /></td>
    <td><code>integer</code></td>
    <td>Id of the Datacenter</td>
</tr>
<tr id="parameter-datacenter_id">
    <td><CopyableCode code="datacenter_id" /></td>
    <td><code>integer</code></td>
    <td>Id of the Datacenter (wire: datacenterId)</td>
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

Get the backup option. Returns the backup option of the datacenter: offer, state, schedule hour, encryption and report settings.

```sql
SELECT
vmware_vm_id,
backup_duration_in_report,
backup_offer,
backup_size_in_report,
disk_size_in_report,
encryption,
full_day_in_report,
hostname,
mail_address,
replication_zone,
restore_point_in_report,
schedule_hour,
state
FROM ovh.dedicated_cloud.datacenter_backups
WHERE datacenter_id = '{{ datacenter_id }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="batch_restore"
    values={[
        { label: 'batch_restore', value: 'batch_restore' },
        { label: 'change_properties', value: 'change_properties' },
        { label: 'disable', value: 'disable' },
        { label: 'generate_report', value: 'generate_report' },
        { label: 'optimize_proxies', value: 'optimize_proxies' }
    ]}
>
<TabItem value="batch_restore">

Restore the last backups. Restores each backup job, or a single virtual machine, from its last restore point. Find the repository and job names in the report sent by `generateReport`. Returns a task to track progress.

```sql
EXEC ovh.dedicated_cloud.datacenter_backups.batch_restore 
@datacenterId='{{ datacenterId }}' --required, 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"backupJobName": "{{ backupJobName }}", 
"backupRepositoryName": "{{ backupRepositoryName }}"
}'
;
```
</TabItem>
<TabItem value="change_properties">

Update the backup option. Changes the backup offer, the schedule hour (UTC) and the additional email address for the daily report. Returns a task to track progress.

```sql
EXEC ovh.dedicated_cloud.datacenter_backups.change_properties 
@datacenterId='{{ datacenterId }}' --required, 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"backupDurationInReport": {{ backupDurationInReport }}, 
"backupOffer": "{{ backupOffer }}", 
"backupSizeInReport": {{ backupSizeInReport }}, 
"diskSizeInReport": {{ diskSizeInReport }}, 
"fullDayInReport": {{ fullDayInReport }}, 
"mailAddress": "{{ mailAddress }}", 
"restorePointInReport": {{ restorePointInReport }}, 
"scheduleHour": "{{ scheduleHour }}"
}'
;
```
</TabItem>
<TabItem value="disable">

Disable the backup option. Disables the backup option of the datacenter. Returns a task to track progress.

```sql
EXEC ovh.dedicated_cloud.datacenter_backups.disable 
@datacenterId='{{ datacenterId }}' --required, 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
<TabItem value="generate_report">

Send a backup report. Sends a report with all backup information by email. Returns a task to track progress.

```sql
EXEC ovh.dedicated_cloud.datacenter_backups.generate_report 
@datacenterId='{{ datacenterId }}' --required, 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
<TabItem value="optimize_proxies">

Optimize backup proxies. Optimizes the number of backup proxies of the datacenter. Returns a task to track progress.

```sql
EXEC ovh.dedicated_cloud.datacenter_backups.optimize_proxies 
@datacenterId='{{ datacenterId }}' --required, 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
</Tabs>
