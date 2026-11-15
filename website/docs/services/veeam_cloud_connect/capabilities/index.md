--- 
title: capabilities
hide_title: false
hide_table_of_contents: false
keywords:
  - capabilities
  - veeam_cloud_connect
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

Creates, updates, deletes, gets or lists a <code>capabilities</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="capabilities" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.veeam_cloud_connect.capabilities" /></td></tr>
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
    <td><CopyableCode code="default_quota" /></td>
    <td><code>integer</code></td>
    <td>Default quota applied on new repositories in GB (wire: defaultQuota)</td>
</tr>
<tr>
    <td><CopyableCode code="max_quota" /></td>
    <td><code>integer</code></td>
    <td>Maximum quota you can apply on your repositories in GB (wire: maxQuota)</td>
</tr>
<tr>
    <td><CopyableCode code="max_storages_count" /></td>
    <td><code>integer</code></td>
    <td>Max number of repositories you can add on your account (wire: maxStoragesCount)</td>
</tr>
<tr>
    <td><CopyableCode code="minimum_usage" /></td>
    <td><code>integer</code></td>
    <td>Required usage on all repositories to add a new one (percent) (wire: minimumUsage)</td>
</tr>
<tr>
    <td><CopyableCode code="multi_storages" /></td>
    <td><code>boolean</code></td>
    <td>Is account allowed to add new repositories (wire: multiStorages)</td>
</tr>
<tr>
    <td><CopyableCode code="replication" /></td>
    <td><code>boolean</code></td>
    <td>Are data replicated over two storages</td>
</tr>
<tr>
    <td><CopyableCode code="vm_capacity" /></td>
    <td><code>integer</code></td>
    <td>Included storage per vm (wire: vmCapacity)</td>
</tr>
<tr>
    <td><CopyableCode code="wan_accelerator" /></td>
    <td><code>boolean</code></td>
    <td>Is wan accelerator enabled (wire: wanAccelerator)</td>
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
    <td>Get capabilities</td>
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

Get capabilities

```sql
SELECT
default_quota,
max_quota,
max_storages_count,
minimum_usage,
multi_storages,
replication,
vm_capacity,
wan_accelerator
FROM ovh.veeam_cloud_connect.capabilities
WHERE service_name = '{{ service_name }}' -- required
;
```
</TabItem>
</Tabs>
