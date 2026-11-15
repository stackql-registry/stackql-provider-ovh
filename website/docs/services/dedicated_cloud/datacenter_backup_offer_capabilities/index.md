--- 
title: datacenter_backup_offer_capabilities
hide_title: false
hide_table_of_contents: false
keywords:
  - datacenter_backup_offer_capabilities
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

Creates, updates, deletes, gets or lists a <code>datacenter_backup_offer_capabilities</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="datacenter_backup_offer_capabilities" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.dedicated_cloud.datacenter_backup_offer_capabilities" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

Details about BackupCapabilities

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
    <td><CopyableCode code="offer_name" /></td>
    <td><code>string</code></td>
    <td>Name of offer type (wire: offerName)</td>
</tr>
<tr>
    <td><CopyableCode code="backup_days" /></td>
    <td><code>boolean</code></td>
    <td>Customized backup days (wire: backupDays)</td>
</tr>
<tr>
    <td><CopyableCode code="custom_report" /></td>
    <td><code>boolean</code></td>
    <td>Customized Backup report (wire: customReport)</td>
</tr>
<tr>
    <td><CopyableCode code="dedicated_proxy" /></td>
    <td><code>boolean</code></td>
    <td>Indicates additional backup proxy for large disk size VM (wire: dedicatedProxy)</td>
</tr>
<tr>
    <td><CopyableCode code="encryption" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if backup will be encrypted</td>
</tr>
<tr>
    <td><CopyableCode code="mail_address" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if customer can add an additional email address for backup report (wire: mailAddress)</td>
</tr>
<tr>
    <td><CopyableCode code="minimum_full_backups" /></td>
    <td><code>integer</code></td>
    <td>Minimum number of full backups (wire: minimumFullBackups)</td>
</tr>
<tr>
    <td><CopyableCode code="proxy_per_host" /></td>
    <td><code>boolean</code></td>
    <td>Backup Proxy per host (wire: proxyPerHost)</td>
</tr>
<tr>
    <td><CopyableCode code="replication" /></td>
    <td><code>boolean</code></td>
    <td>Backup Replication enabled</td>
</tr>
<tr>
    <td><CopyableCode code="retention" /></td>
    <td><code>integer</code></td>
    <td>Restore points</td>
</tr>
<tr>
    <td><CopyableCode code="schedule_hour" /></td>
    <td><code>boolean</code></td>
    <td>Scheduled hour of backup start customizable (wire: scheduleHour)</td>
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
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-datacenter_id"><code>datacenter_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>List backup offers. Returns the features of each backup offer: retention, encryption, replication, backup days and report options.</td>
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
<tr id="parameter-datacenter_id">
    <td><CopyableCode code="datacenter_id" /></td>
    <td><code>integer</code></td>
    <td>Id of the Datacenter (wire: datacenterId)</td>
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
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

List backup offers. Returns the features of each backup offer: retention, encryption, replication, backup days and report options.

```sql
SELECT
offer_name,
backup_days,
custom_report,
dedicated_proxy,
encryption,
mail_address,
minimum_full_backups,
proxy_per_host,
replication,
retention,
schedule_hour
FROM ovh.dedicated_cloud.datacenter_backup_offer_capabilities
WHERE datacenter_id = '{{ datacenter_id }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
</Tabs>
