--- 
title: capabilities_region_notebook_workspacebackupretentionpolicies
hide_title: false
hide_table_of_contents: false
keywords:
  - capabilities_region_notebook_workspacebackupretentionpolicies
  - cloud_ai
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

Creates, updates, deletes, gets or lists a <code>capabilities_region_notebook_workspacebackupretentionpolicies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="capabilities_region_notebook_workspacebackupretentionpolicies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.cloud_ai.capabilities_region_notebook_workspacebackupretentionpolicies" /></td></tr>
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
    <td><CopyableCode code="lifetime_eviction_threshold" /></td>
    <td><code>integer</code></td>
    <td>Position in the backup history from which the lifetime-based eviction can be applied to a workspace backup (wire: lifetimeEvictionThreshold)</td>
</tr>
<tr>
    <td><CopyableCode code="lifetime_in_days" /></td>
    <td><code>integer</code></td>
    <td>Maximum number of retention days for a given notebook's workspace backups which is at or after lifetime_eviction_threshold index in history (wire: lifetimeInDays)</td>
</tr>
<tr>
    <td><CopyableCode code="retained_number" /></td>
    <td><code>integer</code></td>
    <td>The number of retained workspace backups for a given notebook (wire: retainedNumber)</td>
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
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get the applied notebook backup retention policy for the parent public cloud project and region</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Override notebook backup retention policy for the parent public cloud project and region</td>
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
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Region</td>
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
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

Get the applied notebook backup retention policy for the parent public cloud project and region

```sql
SELECT
lifetime_eviction_threshold,
lifetime_in_days,
retained_number
FROM ovh.cloud_ai.capabilities_region_notebook_workspacebackupretentionpolicies
WHERE region = '{{ region }}' -- required
AND service_name = '{{ service_name }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
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

Override notebook backup retention policy for the parent public cloud project and region

```sql
UPDATE ovh.cloud_ai.capabilities_region_notebook_workspacebackupretentionpolicies
SET 
lifetime_eviction_threshold = {{ lifetime_eviction_threshold }},
lifetime_in_days = {{ lifetime_in_days }},
retained_number = {{ retained_number }}
WHERE 
region = '{{ region }}' --required
AND service_name = '{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
RETURNING
lifetime_eviction_threshold,
lifetime_in_days,
retained_number;
```
</TabItem>
</Tabs>
