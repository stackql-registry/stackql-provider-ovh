--- 
title: cdn
hide_title: false
hide_table_of_contents: false
keywords:
  - cdn
  - hosting_web
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

Creates, updates, deletes, gets or lists a <code>cdn</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="cdn" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.hosting_web.cdn" /></td></tr>
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
    <td><CopyableCode code="task_id" /></td>
    <td><code>integer</code></td>
    <td>The task ID working on this CDN (wire: taskId)</td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>Domain of this CDN</td>
</tr>
<tr>
    <td><CopyableCode code="free" /></td>
    <td><code>boolean</code></td>
    <td>Whether CDN is free with the hosting</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of the CDN option (created, creating, deleting, flushing, reopening, suspended, suspending)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of the CDN</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>Version of the CDN</td>
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
    <td>Returns the domain, type, version and status of the CDN option, and whether it is free with the hosting.</td>
</tr>
<tr>
    <td><a href="#log_url"><CopyableCode code="log_url" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-kind"><code>kind</code></a></td>
    <td></td>
    <td>Generates a temporary URL to read the logs of one kind. The URL expires.</td>
</tr>
<tr>
    <td><a href="#service_infos_update"><CopyableCode code="service_infos_update" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-renew"><code>renew</code></a></td>
    <td></td>
    <td>Update CDN renewal. Updates the renewal settings of the CDN option: automatic renewal, renewal period and deletion at expiration.</td>
</tr>
<tr>
    <td><a href="#terminate"><CopyableCode code="terminate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Terminate the CDN option. Requests the termination of the CDN option. A link to confirm it is sent by email to the administrator contact.</td>
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
    <td>The internal name of your hosting</td>
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

Returns the domain, type, version and status of the CDN option, and whether it is free with the hosting.

```sql
SELECT
task_id,
domain,
free,
status,
type,
version
FROM ovh.hosting_web.cdn
WHERE service_name = '{{ service_name }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="log_url"
    values={[
        { label: 'log_url', value: 'log_url' },
        { label: 'service_infos_update', value: 'service_infos_update' },
        { label: 'terminate', value: 'terminate' }
    ]}
>
<TabItem value="log_url">

Generates a temporary URL to read the logs of one kind. The URL expires.

```sql
EXEC ovh.hosting_web.cdn.log_url 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"kind": "{{ kind }}"
}'
;
```
</TabItem>
<TabItem value="service_infos_update">

Update CDN renewal. Updates the renewal settings of the CDN option: automatic renewal, renewal period and deletion at expiration.

```sql
EXEC ovh.hosting_web.cdn.service_infos_update 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"renew": "{{ renew }}"
}'
;
```
</TabItem>
<TabItem value="terminate">

Terminate the CDN option. Requests the termination of the CDN option. A link to confirm it is sent by email to the administrator contact.

```sql
EXEC ovh.hosting_web.cdn.terminate 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
</Tabs>
