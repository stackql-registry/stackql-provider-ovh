--- 
title: output_graylog_stream_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - output_graylog_stream_rules
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

Creates, updates, deletes, gets or lists an <code>output_graylog_stream_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="output_graylog_stream_rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.dbaas_logs.output_graylog_stream_rules" /></td></tr>
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
    <td><CopyableCode code="rule_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Stream rule ID (wire: ruleId)</td>
</tr>
<tr>
    <td><CopyableCode code="field" /></td>
    <td><code>string</code></td>
    <td>Field name</td>
</tr>
<tr>
    <td><CopyableCode code="is_inverted" /></td>
    <td><code>boolean</code></td>
    <td>Invert condition (wire: isInverted)</td>
</tr>
<tr>
    <td><CopyableCode code="operator" /></td>
    <td><code>string</code></td>
    <td>Field operator (FIELD_PRESENCE, GREATER_THAN, MATCH_EXACTLY, SMALLER_THAN)</td>
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

Stream rule

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
    <td><CopyableCode code="rule_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Stream rule ID (wire: ruleId)</td>
</tr>
<tr>
    <td><CopyableCode code="field" /></td>
    <td><code>string</code></td>
    <td>Field name</td>
</tr>
<tr>
    <td><CopyableCode code="is_inverted" /></td>
    <td><code>boolean</code></td>
    <td>Invert condition (wire: isInverted)</td>
</tr>
<tr>
    <td><CopyableCode code="operator" /></td>
    <td><code>string</code></td>
    <td>Field operator (FIELD_PRESENCE, GREATER_THAN, MATCH_EXACTLY, SMALLER_THAN)</td>
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
    <td><a href="#parameter-rule_id"><code>rule_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-stream_id"><code>stream_id</code></a></td>
    <td></td>
    <td>Returns the stream rule.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-stream_id"><code>stream_id</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>Returns the stream rules of the Logs Data Platform service.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-stream_id"><code>stream_id</code></a>, <a href="#parameter-field"><code>field</code></a>, <a href="#parameter-operator"><code>operator</code></a>, <a href="#parameter-value"><code>value</code></a></td>
    <td></td>
    <td>Creates a stream rule on the Logs Data Platform service.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-rule_id"><code>rule_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-stream_id"><code>stream_id</code></a></td>
    <td></td>
    <td>Deletes the stream rule.</td>
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
<tr id="parameter-rule_id">
    <td><CopyableCode code="rule_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Rule ID (wire: ruleId)</td>
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

Returns the stream rule.

```sql
SELECT
rule_id,
field,
is_inverted,
operator,
value
FROM ovh.dbaas_logs.output_graylog_stream_rules
WHERE rule_id = '{{ rule_id }}' -- required
AND service_name = '{{ service_name }}' -- required
AND stream_id = '{{ stream_id }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns the stream rules of the Logs Data Platform service.

```sql
SELECT
rule_id,
field,
is_inverted,
operator,
value
FROM ovh.dbaas_logs.output_graylog_stream_rules
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

Creates a stream rule on the Logs Data Platform service.

```sql
INSERT INTO ovh.dbaas_logs.output_graylog_stream_rules (
field,
is_inverted,
operator,
value,
service_name,
stream_id
)
SELECT 
'{{ field }}' /* required */,
{{ is_inverted }},
'{{ operator }}' /* required */,
'{{ value }}' /* required */,
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
- name: output_graylog_stream_rules
  props:
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the output_graylog_stream_rules resource.
    - name: stream_id
      value: "{{ stream_id }}"
      description: Required parameter for the output_graylog_stream_rules resource.
    - name: field
      value: "{{ field }}"
      description: |
        Field name
    - name: is_inverted
      value: {{ is_inverted }}
      description: |
        Invert condition
    - name: operator
      value: "{{ operator }}"
      description: |
        Field operator
      valid_values: ['FIELD_PRESENCE', 'GREATER_THAN', 'MATCH_EXACTLY', 'SMALLER_THAN']
    - name: value
      value: "{{ value }}"
      description: |
        Field value
`}</CodeBlock>

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

Deletes the stream rule.

```sql
DELETE FROM ovh.dbaas_logs.output_graylog_stream_rules
WHERE rule_id = '{{ rule_id }}' --required
AND service_name = '{{ service_name }}' --required
AND stream_id = '{{ stream_id }}' --required
;
```
</TabItem>
</Tabs>
