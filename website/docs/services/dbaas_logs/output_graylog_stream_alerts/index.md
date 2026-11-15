--- 
title: output_graylog_stream_alerts
hide_title: false
hide_table_of_contents: false
keywords:
  - output_graylog_stream_alerts
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

Creates, updates, deletes, gets or lists an <code>output_graylog_stream_alerts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="output_graylog_stream_alerts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.dbaas_logs.output_graylog_stream_alerts" /></td></tr>
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
    <td><CopyableCode code="alert_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Stream alert condition ID (wire: alertId)</td>
</tr>
<tr>
    <td><CopyableCode code="backlog" /></td>
    <td><code>integer</code></td>
    <td>Backlog size</td>
</tr>
<tr>
    <td><CopyableCode code="condition_type" /></td>
    <td><code>string</code></td>
    <td>Alert condition type (FIELD_CONTENT_VALUE, FIELD_VALUE, MESSAGE_COUNT) (wire: conditionType)</td>
</tr>
<tr>
    <td><CopyableCode code="constraint_type" /></td>
    <td><code>string</code></td>
    <td>Constraint type (MAX, MEAN, MIN, STDLABEU, SUM) (wire: constraintType)</td>
</tr>
<tr>
    <td><CopyableCode code="field" /></td>
    <td><code>string</code></td>
    <td>Field name</td>
</tr>
<tr>
    <td><CopyableCode code="grace" /></td>
    <td><code>integer</code></td>
    <td>Grace period in minutes</td>
</tr>
<tr>
    <td><CopyableCode code="query_filter" /></td>
    <td><code>string</code></td>
    <td>Query filter (wire: queryFilter)</td>
</tr>
<tr>
    <td><CopyableCode code="repeat_notifications_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Repeat notifications (wire: repeatNotificationsEnabled)</td>
</tr>
<tr>
    <td><CopyableCode code="threshold" /></td>
    <td><code>integer</code></td>
    <td>Threshold</td>
</tr>
<tr>
    <td><CopyableCode code="threshold_type" /></td>
    <td><code>string</code></td>
    <td>Threshold condition (EQ, GT, GTE, LT, LTE) (wire: thresholdType)</td>
</tr>
<tr>
    <td><CopyableCode code="time" /></td>
    <td><code>integer</code></td>
    <td>Time lapse in minutes</td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td>Condition label</td>
</tr>
<tr>
    <td><CopyableCode code="value" /></td>
    <td><code>string</code></td>
    <td>Field value</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Alert condition

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
    <td><CopyableCode code="alert_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Stream alert condition ID (wire: alertId)</td>
</tr>
<tr>
    <td><CopyableCode code="backlog" /></td>
    <td><code>integer</code></td>
    <td>Backlog size</td>
</tr>
<tr>
    <td><CopyableCode code="condition_type" /></td>
    <td><code>string</code></td>
    <td>Alert condition type (FIELD_CONTENT_VALUE, FIELD_VALUE, MESSAGE_COUNT) (wire: conditionType)</td>
</tr>
<tr>
    <td><CopyableCode code="constraint_type" /></td>
    <td><code>string</code></td>
    <td>Constraint type (MAX, MEAN, MIN, STDLABEU, SUM) (wire: constraintType)</td>
</tr>
<tr>
    <td><CopyableCode code="field" /></td>
    <td><code>string</code></td>
    <td>Field name</td>
</tr>
<tr>
    <td><CopyableCode code="grace" /></td>
    <td><code>integer</code></td>
    <td>Grace period in minutes</td>
</tr>
<tr>
    <td><CopyableCode code="query_filter" /></td>
    <td><code>string</code></td>
    <td>Query filter (wire: queryFilter)</td>
</tr>
<tr>
    <td><CopyableCode code="repeat_notifications_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Repeat notifications (wire: repeatNotificationsEnabled)</td>
</tr>
<tr>
    <td><CopyableCode code="threshold" /></td>
    <td><code>integer</code></td>
    <td>Threshold</td>
</tr>
<tr>
    <td><CopyableCode code="threshold_type" /></td>
    <td><code>string</code></td>
    <td>Threshold condition (EQ, GT, GTE, LT, LTE) (wire: thresholdType)</td>
</tr>
<tr>
    <td><CopyableCode code="time" /></td>
    <td><code>integer</code></td>
    <td>Time lapse in minutes</td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td>Condition label</td>
</tr>
<tr>
    <td><CopyableCode code="value" /></td>
    <td><code>string</code></td>
    <td>Field value</td>
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
    <td><a href="#parameter-alert_id"><code>alert_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-stream_id"><code>stream_id</code></a></td>
    <td></td>
    <td>Returns the stream alert.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-stream_id"><code>stream_id</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>Returns the stream alerts of the Logs Data Platform service.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-stream_id"><code>stream_id</code></a>, <a href="#parameter-backlog"><code>backlog</code></a>, <a href="#parameter-grace"><code>grace</code></a>, <a href="#parameter-title"><code>title</code></a></td>
    <td></td>
    <td>Creates a stream alert on the Logs Data Platform service.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-alert_id"><code>alert_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-stream_id"><code>stream_id</code></a>, <a href="#parameter-backlog"><code>backlog</code></a>, <a href="#parameter-grace"><code>grace</code></a>, <a href="#parameter-title"><code>title</code></a></td>
    <td></td>
    <td>Updates the stream alert.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-alert_id"><code>alert_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-stream_id"><code>stream_id</code></a></td>
    <td></td>
    <td>Deletes the stream alert.</td>
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
<tr id="parameter-alert_id">
    <td><CopyableCode code="alert_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Alert ID (wire: alertId)</td>
</tr>
<tr id="parameter-api_host">
    <td><CopyableCode code="api_host" /></td>
    <td><code>string</code></td>
    <td>The OVHcloud API host. Selected by OVH_ENDPOINT (ovh-eu, ovh-ca or ovh-us; default ovh-eu). (default: api.eu.ovhcloud.com, x-stackQL-envVarSelector: &#123;"envVar":"OVH_ENDPOINT","default":"ovh-eu","values":&#123;"ovh-eu":"api.eu.ovhcloud.com","ovh-ca":"api.ca.ovhcloud.com","ovh-us":"api.us.ovhcloud.com"&#125;&#125;)</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>Service name (wire: serviceName)</td>
</tr>
<tr id="parameter-stream_id">
    <td><CopyableCode code="stream_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Stream ID (wire: streamId)</td>
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

Returns the stream alert.

```sql
SELECT
alert_id,
backlog,
condition_type,
constraint_type,
field,
grace,
query_filter,
repeat_notifications_enabled,
threshold,
threshold_type,
time,
title,
value
FROM ovh.dbaas_logs.output_graylog_stream_alerts
WHERE alert_id = '{{ alert_id }}' -- required
AND service_name = '{{ service_name }}' -- required
AND stream_id = '{{ stream_id }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns the stream alerts of the Logs Data Platform service.

```sql
SELECT
alert_id,
backlog,
condition_type,
constraint_type,
field,
grace,
query_filter,
repeat_notifications_enabled,
threshold,
threshold_type,
time,
title,
value
FROM ovh.dbaas_logs.output_graylog_stream_alerts
WHERE service_name = '{{ service_name }}' -- required
AND stream_id = '{{ stream_id }}' -- required
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

Creates a stream alert on the Logs Data Platform service.

```sql
INSERT INTO ovh.dbaas_logs.output_graylog_stream_alerts (
backlog,
condition_type,
constraint_type,
field,
grace,
query_filter,
repeat_notifications_enabled,
threshold,
threshold_type,
time,
title,
value,
service_name,
stream_id
)
SELECT 
{{ backlog }} /* required */,
'{{ condition_type }}',
'{{ constraint_type }}',
'{{ field }}',
{{ grace }} /* required */,
'{{ query_filter }}',
{{ repeat_notifications_enabled }},
{{ threshold }},
'{{ threshold_type }}',
{{ time }},
'{{ title }}' /* required */,
'{{ value }}',
'{{ service_name }}',
'{{ stream_id }}'
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
- name: output_graylog_stream_alerts
  props:
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the output_graylog_stream_alerts resource.
    - name: stream_id
      value: "{{ stream_id }}"
      description: Required parameter for the output_graylog_stream_alerts resource.
    - name: backlog
      value: {{ backlog }}
      description: |
        Backlog
    - name: condition_type
      value: "{{ condition_type }}"
      description: |
        Condition type
      valid_values: ['FIELD_CONTENT_VALUE', 'FIELD_VALUE', 'MESSAGE_COUNT']
    - name: constraint_type
      value: "{{ constraint_type }}"
      description: |
        Constraint type
      valid_values: ['MAX', 'MEAN', 'MIN', 'STDLABEU', 'SUM']
    - name: field
      value: "{{ field }}"
      description: |
        Field
    - name: grace
      value: {{ grace }}
      description: |
        Grace period
    - name: query_filter
      value: "{{ query_filter }}"
      description: |
        Query filter
    - name: repeat_notifications_enabled
      value: {{ repeat_notifications_enabled }}
      description: |
        Repeat notifications enabled
    - name: threshold
      value: {{ threshold }}
      description: |
        Threshold
    - name: threshold_type
      value: "{{ threshold_type }}"
      description: |
        Threshold type
      valid_values: ['EQ', 'GT', 'GTE', 'LT', 'LTE']
    - name: time
      value: {{ time }}
      description: |
        Time
    - name: title
      value: "{{ title }}"
      description: |
        Title
    - name: value
      value: "{{ value }}"
      description: |
        Value
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

Updates the stream alert.

```sql
UPDATE ovh.dbaas_logs.output_graylog_stream_alerts
SET 
backlog = {{ backlog }},
condition_type = '{{ condition_type }}',
constraint_type = '{{ constraint_type }}',
field = '{{ field }}',
grace = {{ grace }},
query_filter = '{{ query_filter }}',
repeat_notifications_enabled = {{ repeat_notifications_enabled }},
threshold = {{ threshold }},
threshold_type = '{{ threshold_type }}',
time = {{ time }},
title = '{{ title }}',
value = '{{ value }}'
WHERE 
alert_id = '{{ alert_id }}' --required
AND service_name = '{{ service_name }}' --required
AND stream_id = '{{ stream_id }}' --required
AND backlog = '{{ backlog }}' --required
AND grace = '{{ grace }}' --required
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

Deletes the stream alert.

```sql
DELETE FROM ovh.dbaas_logs.output_graylog_stream_alerts
WHERE alert_id = '{{ alert_id }}' --required
AND service_name = '{{ service_name }}' --required
AND stream_id = '{{ stream_id }}' --required
;
```
</TabItem>
</Tabs>
