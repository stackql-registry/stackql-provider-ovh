--- 
title: resources
hide_title: false
hide_table_of_contents: false
keywords:
  - resources
  - managed_cms
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

Creates, updates, deletes, gets or lists a <code>resources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resources" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.managed_cms.resources" /></td></tr>
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
    <td><code>string (uuid)</code></td>
    <td>Unique identifier of the service</td>
</tr>
<tr>
    <td><CopyableCode code="checksum" /></td>
    <td><code>string</code></td>
    <td>Computed hash used to control concurrent modification requests. Here, it represents the current target specification value.</td>
</tr>
<tr>
    <td><CopyableCode code="current_state" /></td>
    <td><code>object</code></td>
    <td>Current state of the service (wire: currentState)</td>
</tr>
<tr>
    <td><CopyableCode code="current_tasks" /></td>
    <td><code>array</code></td>
    <td>Ongoing asynchronous tasks related to the service (wire: currentTasks)</td>
</tr>
<tr>
    <td><CopyableCode code="iam" /></td>
    <td><code>object</code></td>
    <td>IAM resource metadata</td>
</tr>
<tr>
    <td><CopyableCode code="resource_status" /></td>
    <td><code>string</code></td>
    <td>Service readiness in the system (CREATING, CREATION_PLANNED, DELETING, ERROR, OUT_OF_SYNC, READY, SUSPENDED, UNKNOWN, UPDATING) (wire: resourceStatus)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A Managed CMS service

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
    <td><code>string (uuid)</code></td>
    <td>Unique identifier of the service</td>
</tr>
<tr>
    <td><CopyableCode code="checksum" /></td>
    <td><code>string</code></td>
    <td>Computed hash used to control concurrent modification requests. Here, it represents the current target specification value.</td>
</tr>
<tr>
    <td><CopyableCode code="current_state" /></td>
    <td><code>object</code></td>
    <td>Current state of the service (wire: currentState)</td>
</tr>
<tr>
    <td><CopyableCode code="current_tasks" /></td>
    <td><code>array</code></td>
    <td>Ongoing asynchronous tasks related to the service (wire: currentTasks)</td>
</tr>
<tr>
    <td><CopyableCode code="iam" /></td>
    <td><code>object</code></td>
    <td>IAM resource metadata</td>
</tr>
<tr>
    <td><CopyableCode code="resource_status" /></td>
    <td><code>string</code></td>
    <td>Service readiness in the system (CREATING, CREATION_PLANNED, DELETING, ERROR, OUT_OF_SYNC, READY, SUSPENDED, UNKNOWN, UPDATING) (wire: resourceStatus)</td>
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
    <td><a href="#parameter-service_id"><code>service_id</code></a></td>
    <td></td>
    <td>Returns the plan, dashboard URLs and disk, visits and websites quotas of the service, with its running tasks. (Alpha version)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-x_pagination_cursor"><code>x_pagination_cursor</code></a>, <a href="#parameter-x_pagination_size"><code>x_pagination_size</code></a>, <a href="#parameter-iam_tags"><code>iam_tags</code></a></td>
    <td>Returns the Managed CMS services of the account. (Alpha version)</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-service_id"><code>service_id</code></a></td>
    <td></td>
    <td>Updates the service. Set flushCDNDate to a new date to flush the CDN of all its websites. (Alpha version)</td>
</tr>
<tr>
    <td><a href="#dashboard_application_password"><CopyableCode code="dashboard_application_password" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceId"><code>serviceId</code></a>, <a href="#parameter-cms"><code>cms</code></a></td>
    <td></td>
    <td>Each call creates a new application password on the existing administrator user. The previous ones stay valid. They can be revoked from the CMS administration. (Beta version)</td>
</tr>
<tr>
    <td><a href="#flush_cdn"><CopyableCode code="flush_cdn" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceId"><code>serviceId</code></a></td>
    <td></td>
    <td>Flushes the CDN cache of all the websites of the service and returns the task. Fails if a task is already running on the service. (Alpha version)</td>
</tr>
<tr>
    <td><a href="#log_url"><CopyableCode code="log_url" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceId"><code>serviceId</code></a>, <a href="#parameter-kind"><code>kind</code></a></td>
    <td></td>
    <td>Generates a temporary URL to read the logs of one kind. Returns the URL and its expiration date. (Beta version)</td>
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
<tr id="parameter-serviceId">
    <td><CopyableCode code="serviceId" /></td>
    <td><code>string (uuid)</code></td>
    <td>Service ID</td>
</tr>
<tr id="parameter-service_id">
    <td><CopyableCode code="service_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Service ID (wire: serviceId)</td>
</tr>
<tr id="parameter-iam_tags">
    <td><CopyableCode code="iam_tags" /></td>
    <td><code>object</code></td>
    <td>Filter resources on IAM tags (wire: iamTags)</td>
</tr>
<tr id="parameter-x_pagination_cursor">
    <td><CopyableCode code="x_pagination_cursor" /></td>
    <td><code>string</code></td>
    <td>Pagination cursor (wire: X-Pagination-Cursor)</td>
</tr>
<tr id="parameter-x_pagination_size">
    <td><CopyableCode code="x_pagination_size" /></td>
    <td><code>integer</code></td>
    <td>Pagination size (wire: X-Pagination-Size)</td>
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

Returns the plan, dashboard URLs and disk, visits and websites quotas of the service, with its running tasks. (Alpha version)

```sql
SELECT
id,
checksum,
current_state,
current_tasks,
iam,
resource_status
FROM ovh.managed_cms.resources
WHERE service_id = '{{ service_id }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns the Managed CMS services of the account. (Alpha version)

```sql
SELECT
id,
checksum,
current_state,
current_tasks,
iam,
resource_status
FROM ovh.managed_cms.resources
WHERE x_pagination_cursor = '{{ x_pagination_cursor }}'
AND x_pagination_size = '{{ x_pagination_size }}'
AND iam_tags = '{{ iam_tags }}'
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

Updates the service. Set flushCDNDate to a new date to flush the CDN of all its websites. (Alpha version)

```sql
UPDATE ovh.managed_cms.resources
SET 
target_spec = '{{ target_spec }}'
WHERE 
service_id = '{{ service_id }}' --required
RETURNING
id,
checksum,
current_state,
current_tasks,
resource_status;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="dashboard_application_password"
    values={[
        { label: 'dashboard_application_password', value: 'dashboard_application_password' },
        { label: 'flush_cdn', value: 'flush_cdn' },
        { label: 'log_url', value: 'log_url' }
    ]}
>
<TabItem value="dashboard_application_password">

Each call creates a new application password on the existing administrator user. The previous ones stay valid. They can be revoked from the CMS administration. (Beta version)

```sql
EXEC ovh.managed_cms.resources.dashboard_application_password 
@serviceId='{{ serviceId }}' --required 
@@json=
'{
"cms": "{{ cms }}"
}'
;
```
</TabItem>
<TabItem value="flush_cdn">

Flushes the CDN cache of all the websites of the service and returns the task. Fails if a task is already running on the service. (Alpha version)

```sql
EXEC ovh.managed_cms.resources.flush_cdn 
@serviceId='{{ serviceId }}' --required
;
```
</TabItem>
<TabItem value="log_url">

Generates a temporary URL to read the logs of one kind. Returns the URL and its expiration date. (Beta version)

```sql
EXEC ovh.managed_cms.resources.log_url 
@serviceId='{{ serviceId }}' --required 
@@json=
'{
"kind": "{{ kind }}"
}'
;
```
</TabItem>
</Tabs>
