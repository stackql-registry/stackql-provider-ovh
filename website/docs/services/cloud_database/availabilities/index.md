--- 
title: availabilities
hide_title: false
hide_table_of_contents: false
keywords:
  - availabilities
  - cloud_database
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

Creates, updates, deletes, gets or lists an <code>availabilities</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="availabilities" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.cloud_database.availabilities" /></td></tr>
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

Availability of databases engines on cloud projects

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
    <td><CopyableCode code="backup" /></td>
    <td><code>string</code></td>
    <td>Defines the type of backup. DEPRECATED: use backups.enable (automatic, manual, none, pitr, snapshot)</td>
</tr>
<tr>
    <td><CopyableCode code="backup_retention_days" /></td>
    <td><code>integer</code></td>
    <td>Backup retention time of the availability in days. DEPRECATED: use backups.retentionDays (wire: backupRetentionDays)</td>
</tr>
<tr>
    <td><CopyableCode code="backups" /></td>
    <td><code>object</code></td>
    <td>Defines backups strategy for the availability</td>
</tr>
<tr>
    <td><CopyableCode code="category" /></td>
    <td><code>string</code></td>
    <td>Category of the engine (analysis, operational, streaming)</td>
</tr>
<tr>
    <td><CopyableCode code="default" /></td>
    <td><code>boolean</code></td>
    <td>Whether this availability can be used by default</td>
</tr>
<tr>
    <td><CopyableCode code="end_of_life" /></td>
    <td><code>string (date)</code></td>
    <td>End of life of the product. DEPRECATED: use lifecycle.endOfLife (wire: endOfLife)</td>
</tr>
<tr>
    <td><CopyableCode code="engine" /></td>
    <td><code>string</code></td>
    <td>Database engine name</td>
</tr>
<tr>
    <td><CopyableCode code="flavor" /></td>
    <td><code>string</code></td>
    <td>Flavor name. DEPRECATED: use specifications.flavor</td>
</tr>
<tr>
    <td><CopyableCode code="lifecycle" /></td>
    <td><code>object</code></td>
    <td>Defines the lifecycle of the availability</td>
</tr>
<tr>
    <td><CopyableCode code="max_disk_size" /></td>
    <td><code>integer</code></td>
    <td>Maximum possible disk size in GB. DEPRECATED: use specifications.storage.maximum (wire: maxDiskSize)</td>
</tr>
<tr>
    <td><CopyableCode code="max_node_number" /></td>
    <td><code>integer</code></td>
    <td>Maximum nodes of the cluster. DEPRECATED: use specifications.nodes.maximum (wire: maxNodeNumber)</td>
</tr>
<tr>
    <td><CopyableCode code="min_disk_size" /></td>
    <td><code>integer</code></td>
    <td>Minimum possible disk size in GB. DEPRECATED: use specifications.storage.minimum (wire: minDiskSize)</td>
</tr>
<tr>
    <td><CopyableCode code="min_node_number" /></td>
    <td><code>integer</code></td>
    <td>Minimum nodes of the cluster. DEPRECATED: use specifications.nodes.minimum (wire: minNodeNumber)</td>
</tr>
<tr>
    <td><CopyableCode code="network" /></td>
    <td><code>string</code></td>
    <td>Type of network. DEPRECATED: use specifications.network (private, public)</td>
</tr>
<tr>
    <td><CopyableCode code="plan" /></td>
    <td><code>string</code></td>
    <td>Plan name</td>
</tr>
<tr>
    <td><CopyableCode code="plan_code" /></td>
    <td><code>string</code></td>
    <td>Billing plan code (wire: planCode)</td>
</tr>
<tr>
    <td><CopyableCode code="plan_code_storage" /></td>
    <td><code>string</code></td>
    <td>Billing plan code for storage (wire: planCodeStorage)</td>
</tr>
<tr>
    <td><CopyableCode code="plan_codes" /></td>
    <td><code>object</code></td>
    <td>Split pricing plan codes (wire: planCodes)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Region name</td>
</tr>
<tr>
    <td><CopyableCode code="specifications" /></td>
    <td><code>object</code></td>
    <td>Defines the technical specifications of the availability</td>
</tr>
<tr>
    <td><CopyableCode code="start_date" /></td>
    <td><code>string (date)</code></td>
    <td>Date of the release of the product. DEPRECATED: use lifecycle.startDate (wire: startDate)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of the availability. DEPRECATED: use lifecycle.status (BETA, DEPRECATED, END_OF_LIFE, END_OF_SALE, STABLE, UNAVAILABLE)</td>
</tr>
<tr>
    <td><CopyableCode code="step_disk_size" /></td>
    <td><code>integer</code></td>
    <td>Flex disk size step in GB. DEPRECATED: use specifications.storage.step (wire: stepDiskSize)</td>
</tr>
<tr>
    <td><CopyableCode code="upstream_end_of_life" /></td>
    <td><code>string (date)</code></td>
    <td>End of life of the upstream product. DEPRECATED: use lifecycle (wire: upstreamEndOfLife)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>Version name</td>
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
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-action"><code>action</code></a>, <a href="#parameter-cluster_id"><code>cluster_id</code></a>, <a href="#parameter-target"><code>target</code></a></td>
    <td>Get database engines availability</td>
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
    <td>The Public Cloud project ID. Resolved from OVH_CLOUD_PROJECT_SERVICE when set.</td>
</tr>
<tr id="parameter-action">
    <td><CopyableCode code="action" /></td>
    <td><code>string</code></td>
    <td>Type of action on which restrict the availabilities</td>
</tr>
<tr id="parameter-cluster_id">
    <td><CopyableCode code="cluster_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Cluster ID on which restrict the availabilities (wire: clusterId)</td>
</tr>
<tr id="parameter-target">
    <td><CopyableCode code="target" /></td>
    <td><code>string</code></td>
    <td>Type of target on which restrict the availabilities</td>
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

Get database engines availability

```sql
SELECT
backup,
backup_retention_days,
backups,
category,
default,
end_of_life,
engine,
flavor,
lifecycle,
max_disk_size,
max_node_number,
min_disk_size,
min_node_number,
network,
plan,
plan_code,
plan_code_storage,
plan_codes,
region,
specifications,
start_date,
status,
step_disk_size,
upstream_end_of_life,
version
FROM ovh.cloud_database.availabilities
WHERE service_name = '{{ service_name }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
AND action = '{{ action }}'
AND cluster_id = '{{ cluster_id }}'
AND target = '{{ target }}'
;
```
</TabItem>
</Tabs>
