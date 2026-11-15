--- 
title: job_logs
hide_title: false
hide_table_of_contents: false
keywords:
  - job_logs
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

Creates, updates, deletes, gets or lists a <code>job_logs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="job_logs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.cloud_ai.job_logs" /></td></tr>
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
    <td><CopyableCode code="last_activity" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last activity date (wire: lastActivity)</td>
</tr>
<tr>
    <td><CopyableCode code="logs" /></td>
    <td><code>array</code></td>
    <td>Logs lines</td>
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
    <td><a href="#parameter-job_id"><code>job_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-page"><code>page</code></a>, <a href="#parameter-size"><code>size</code></a></td>
    <td>Get the logs of a job</td>
</tr>
<tr>
    <td><a href="#url"><CopyableCode code="url" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-jobId"><code>jobId</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-kind"><code>kind</code></a></td>
    <td></td>
    <td>Generates a temporary URL to read the logs of one kind. The URL expires.</td>
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
<tr id="parameter-jobId">
    <td><CopyableCode code="jobId" /></td>
    <td><code>string (uuid)</code></td>
    <td>Job ID</td>
</tr>
<tr id="parameter-job_id">
    <td><CopyableCode code="job_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Job ID (wire: jobId)</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The Public Cloud project ID. Resolved from OVH_CLOUD_PROJECT_SERVICE when set.</td>
</tr>
<tr id="parameter-page">
    <td><CopyableCode code="page" /></td>
    <td><code>integer</code></td>
    <td>Page of the result set</td>
</tr>
<tr id="parameter-size">
    <td><CopyableCode code="size" /></td>
    <td><code>integer</code></td>
    <td>Size of the result set</td>
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

Get the logs of a job

```sql
SELECT
last_activity,
logs
FROM ovh.cloud_ai.job_logs
WHERE job_id = '{{ job_id }}' -- required
AND service_name = '{{ service_name }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
AND page = '{{ page }}'
AND size = '{{ size }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="url"
    values={[
        { label: 'url', value: 'url' }
    ]}
>
<TabItem value="url">

Generates a temporary URL to read the logs of one kind. The URL expires.

```sql
EXEC ovh.cloud_ai.job_logs.url 
@jobId='{{ jobId }}' --required, 
@service_name='{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set 
@@json=
'{
"kind": "{{ kind }}"
}'
;
```
</TabItem>
</Tabs>
