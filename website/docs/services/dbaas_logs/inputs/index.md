--- 
title: inputs
hide_title: false
hide_table_of_contents: false
keywords:
  - inputs
  - dbaas_logs
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

Creates, updates, deletes, gets or lists an <code>inputs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="inputs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.dbaas_logs.inputs" /></td></tr>
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
    <td><CopyableCode code="engine_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Input engine ID (wire: engineId)</td>
</tr>
<tr>
    <td><CopyableCode code="input_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Input ID (wire: inputId)</td>
</tr>
<tr>
    <td><CopyableCode code="stream_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Associated Graylog stream (wire: streamId)</td>
</tr>
<tr>
    <td><CopyableCode code="allowed_networks" /></td>
    <td><code>array</code></td>
    <td>IP blocks (wire: allowedNetworks)</td>
</tr>
<tr>
    <td><CopyableCode code="autoscale" /></td>
    <td><code>boolean</code></td>
    <td>Whether the workload is auto-scaled</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Input creation (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Input description</td>
</tr>
<tr>
    <td><CopyableCode code="exposed_port" /></td>
    <td><code>string</code></td>
    <td>Port (wire: exposedPort)</td>
</tr>
<tr>
    <td><CopyableCode code="hostname" /></td>
    <td><code>string</code></td>
    <td>Hostname</td>
</tr>
<tr>
    <td><CopyableCode code="is_restart_required" /></td>
    <td><code>boolean</code></td>
    <td>Indicate if input need to be restarted (wire: isRestartRequired)</td>
</tr>
<tr>
    <td><CopyableCode code="max_scale_instance" /></td>
    <td><code>integer</code></td>
    <td>Maximum number of instances in auto-scaled mode (wire: maxScaleInstance)</td>
</tr>
<tr>
    <td><CopyableCode code="min_scale_instance" /></td>
    <td><code>integer</code></td>
    <td>Minimum number of instances in auto-scaled mode (wire: minScaleInstance)</td>
</tr>
<tr>
    <td><CopyableCode code="nb_instance" /></td>
    <td><code>integer</code></td>
    <td>Number of instance running (wire: nbInstance)</td>
</tr>
<tr>
    <td><CopyableCode code="public_address" /></td>
    <td><code>string</code></td>
    <td>Input IP address (wire: publicAddress)</td>
</tr>
<tr>
    <td><CopyableCode code="scaling_notify_enabled" /></td>
    <td><code>boolean</code></td>
    <td>If set, notify when scaling happens (wire: scalingNotifyEnabled)</td>
</tr>
<tr>
    <td><CopyableCode code="ssl_certificate" /></td>
    <td><code>string</code></td>
    <td>Input SSL certificate (wire: sslCertificate)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>init: configuration required, pending: ready to start, running: available (INIT, PENDING, PROCESSING, RUNNING)</td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td>Input title</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Input last update (wire: updatedAt)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Input

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
    <td><CopyableCode code="engine_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Input engine ID (wire: engineId)</td>
</tr>
<tr>
    <td><CopyableCode code="input_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Input ID (wire: inputId)</td>
</tr>
<tr>
    <td><CopyableCode code="stream_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Associated Graylog stream (wire: streamId)</td>
</tr>
<tr>
    <td><CopyableCode code="allowed_networks" /></td>
    <td><code>array</code></td>
    <td>IP blocks (wire: allowedNetworks)</td>
</tr>
<tr>
    <td><CopyableCode code="autoscale" /></td>
    <td><code>boolean</code></td>
    <td>Whether the workload is auto-scaled</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Input creation (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Input description</td>
</tr>
<tr>
    <td><CopyableCode code="exposed_port" /></td>
    <td><code>string</code></td>
    <td>Port (wire: exposedPort)</td>
</tr>
<tr>
    <td><CopyableCode code="hostname" /></td>
    <td><code>string</code></td>
    <td>Hostname</td>
</tr>
<tr>
    <td><CopyableCode code="is_restart_required" /></td>
    <td><code>boolean</code></td>
    <td>Indicate if input need to be restarted (wire: isRestartRequired)</td>
</tr>
<tr>
    <td><CopyableCode code="max_scale_instance" /></td>
    <td><code>integer</code></td>
    <td>Maximum number of instances in auto-scaled mode (wire: maxScaleInstance)</td>
</tr>
<tr>
    <td><CopyableCode code="min_scale_instance" /></td>
    <td><code>integer</code></td>
    <td>Minimum number of instances in auto-scaled mode (wire: minScaleInstance)</td>
</tr>
<tr>
    <td><CopyableCode code="nb_instance" /></td>
    <td><code>integer</code></td>
    <td>Number of instance running (wire: nbInstance)</td>
</tr>
<tr>
    <td><CopyableCode code="public_address" /></td>
    <td><code>string</code></td>
    <td>Input IP address (wire: publicAddress)</td>
</tr>
<tr>
    <td><CopyableCode code="scaling_notify_enabled" /></td>
    <td><code>boolean</code></td>
    <td>If set, notify when scaling happens (wire: scalingNotifyEnabled)</td>
</tr>
<tr>
    <td><CopyableCode code="ssl_certificate" /></td>
    <td><code>string</code></td>
    <td>Input SSL certificate (wire: sslCertificate)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>init: configuration required, pending: ready to start, running: available (INIT, PENDING, PROCESSING, RUNNING)</td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td>Input title</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Input last update (wire: updatedAt)</td>
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
    <td><a href="#parameter-input_id"><code>input_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Returns the data-gathering tool.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-title_pattern"><code>title_pattern</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>Returns the data-gathering tools of the Logs Data Platform service.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-description"><code>description</code></a>, <a href="#parameter-engine_id"><code>engine_id</code></a>, <a href="#parameter-stream_id"><code>stream_id</code></a>, <a href="#parameter-title"><code>title</code></a></td>
    <td></td>
    <td>Creates a data-gathering tool on the Logs Data Platform service.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-input_id"><code>input_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-description"><code>description</code></a>, <a href="#parameter-engine_id"><code>engine_id</code></a>, <a href="#parameter-stream_id"><code>stream_id</code></a>, <a href="#parameter-title"><code>title</code></a></td>
    <td></td>
    <td>Updates the data-gathering tool.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-input_id"><code>input_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Deletes the data-gathering tool.</td>
</tr>
<tr>
    <td><a href="#configtest"><CopyableCode code="configtest" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-inputId"><code>inputId</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Checks the data-gathering tool configuration and returns a test result.</td>
</tr>
<tr>
    <td><a href="#end"><CopyableCode code="end" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-inputId"><code>inputId</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Stops the data-gathering tool.</td>
</tr>
<tr>
    <td><a href="#logs_url"><CopyableCode code="logs_url" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-inputId"><code>inputId</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Creates a temporary URL to read the logs of a data-gathering tool. The URL expires.</td>
</tr>
<tr>
    <td><a href="#restart"><CopyableCode code="restart" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-inputId"><code>inputId</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Restarts the data-gathering tool.</td>
</tr>
<tr>
    <td><a href="#start"><CopyableCode code="start" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-inputId"><code>inputId</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Starts the data-gathering tool.</td>
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
<tr id="parameter-inputId">
    <td><CopyableCode code="inputId" /></td>
    <td><code>string (uuid)</code></td>
    <td>Input ID</td>
</tr>
<tr id="parameter-input_id">
    <td><CopyableCode code="input_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Input ID (wire: inputId)</td>
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
<tr id="parameter-title_pattern">
    <td><CopyableCode code="title_pattern" /></td>
    <td><code>string</code></td>
    <td>Filter by title (like) (wire: titlePattern)</td>
</tr>
<tr id="parameter-x_pagination_mode">
    <td><CopyableCode code="x_pagination_mode" /></td>
    <td><code>string</code></td>
    <td>Sent as CachedObjectList-Pages by default so the list returns the full objects rather than their identifiers. (wire: X-Pagination-Mode)</td>
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

Returns the data-gathering tool.

```sql
SELECT
engine_id,
input_id,
stream_id,
allowed_networks,
autoscale,
created_at,
description,
exposed_port,
hostname,
is_restart_required,
max_scale_instance,
min_scale_instance,
nb_instance,
public_address,
scaling_notify_enabled,
ssl_certificate,
status,
title,
updated_at
FROM ovh.dbaas_logs.inputs
WHERE input_id = '{{ input_id }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns the data-gathering tools of the Logs Data Platform service.

```sql
SELECT
engine_id,
input_id,
stream_id,
allowed_networks,
autoscale,
created_at,
description,
exposed_port,
hostname,
is_restart_required,
max_scale_instance,
min_scale_instance,
nb_instance,
public_address,
scaling_notify_enabled,
ssl_certificate,
status,
title,
updated_at
FROM ovh.dbaas_logs.inputs
WHERE service_name = '{{ service_name }}' -- required
AND title_pattern = '{{ title_pattern }}'
AND x_pagination_mode = '{{ x_pagination_mode }}'
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

Creates a data-gathering tool on the Logs Data Platform service.

```sql
INSERT INTO ovh.dbaas_logs.inputs (
allowed_networks,
autoscale,
description,
engine_id,
exposed_port,
max_scale_instance,
min_scale_instance,
nb_instance,
scaling_notify_enabled,
stream_id,
title,
service_name
)
SELECT 
'{{ allowed_networks }}',
{{ autoscale }},
'{{ description }}' /* required */,
'{{ engine_id }}' /* required */,
'{{ exposed_port }}',
{{ max_scale_instance }},
{{ min_scale_instance }},
{{ nb_instance }},
{{ scaling_notify_enabled }},
'{{ stream_id }}' /* required */,
'{{ title }}' /* required */,
'{{ service_name }}'
RETURNING
alias_id,
dashboard_id,
encryption_key_id,
index_id,
input_id,
operation_id,
osd_id,
role_id,
stream_id,
subscription_id,
tenant_id,
token_id,
service_name,
created_at,
state,
updated_at
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: inputs
  props:
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the inputs resource.
    - name: allowed_networks
      value:
        - "{{ allowed_networks }}"
      description: |
        IP blocks
    - name: autoscale
      value: {{ autoscale }}
      description: |
        Whether the workload is auto-scaled
    - name: description
      value: "{{ description }}"
      description: |
        Description
    - name: engine_id
      value: "{{ engine_id }}"
      description: |
        Engine ID
    - name: exposed_port
      value: "{{ exposed_port }}"
      description: |
        Exposed port
    - name: max_scale_instance
      value: {{ max_scale_instance }}
      description: |
        Maximum number of instances in auto-scaled mode
    - name: min_scale_instance
      value: {{ min_scale_instance }}
      description: |
        Minimum number of instances in auto-scaled mode
    - name: nb_instance
      value: {{ nb_instance }}
      description: |
        Number of instance running
    - name: scaling_notify_enabled
      value: {{ scaling_notify_enabled }}
      description: |
        If set, notify when scaling happens
    - name: stream_id
      value: "{{ stream_id }}"
      description: |
        Stream ID
    - name: title
      value: "{{ title }}"
      description: |
        Title
`}</CodeBlock>

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

Updates the data-gathering tool.

```sql
UPDATE ovh.dbaas_logs.inputs
SET 
allowed_networks = '{{ allowed_networks }}',
autoscale = {{ autoscale }},
description = '{{ description }}',
engine_id = '{{ engine_id }}',
exposed_port = '{{ exposed_port }}',
max_scale_instance = {{ max_scale_instance }},
min_scale_instance = {{ min_scale_instance }},
nb_instance = {{ nb_instance }},
scaling_notify_enabled = {{ scaling_notify_enabled }},
stream_id = '{{ stream_id }}',
title = '{{ title }}'
WHERE 
input_id = '{{ input_id }}' --required
AND service_name = '{{ service_name }}' --required
AND description = '{{ description }}' --required
AND engine_id = '{{ engine_id }}' --required
AND stream_id = '{{ stream_id }}' --required
AND title = '{{ title }}' --required
RETURNING
alias_id,
dashboard_id,
encryption_key_id,
index_id,
input_id,
operation_id,
osd_id,
role_id,
stream_id,
subscription_id,
tenant_id,
token_id,
service_name,
created_at,
state,
updated_at;
```
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

Deletes the data-gathering tool.

```sql
DELETE FROM ovh.dbaas_logs.inputs
WHERE input_id = '{{ input_id }}' --required
AND service_name = '{{ service_name }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="configtest"
    values={[
        { label: 'configtest', value: 'configtest' },
        { label: 'end', value: 'end' },
        { label: 'logs_url', value: 'logs_url' },
        { label: 'restart', value: 'restart' },
        { label: 'start', value: 'start' }
    ]}
>
<TabItem value="configtest">

Checks the data-gathering tool configuration and returns a test result.

```sql
EXEC ovh.dbaas_logs.inputs.configtest 
@inputId='{{ inputId }}' --required, 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
<TabItem value="end">

Stops the data-gathering tool.

```sql
EXEC ovh.dbaas_logs.inputs.end 
@inputId='{{ inputId }}' --required, 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
<TabItem value="logs_url">

Creates a temporary URL to read the logs of a data-gathering tool. The URL expires.

```sql
EXEC ovh.dbaas_logs.inputs.logs_url 
@inputId='{{ inputId }}' --required, 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
<TabItem value="restart">

Restarts the data-gathering tool.

```sql
EXEC ovh.dbaas_logs.inputs.restart 
@inputId='{{ inputId }}' --required, 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
<TabItem value="start">

Starts the data-gathering tool.

```sql
EXEC ovh.dbaas_logs.inputs.start 
@inputId='{{ inputId }}' --required, 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
</Tabs>
