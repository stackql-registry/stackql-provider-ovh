--- 
title: ovh_pabx_hunting_agents
hide_title: false
hide_table_of_contents: false
keywords:
  - ovh_pabx_hunting_agents
  - telephony
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

Creates, updates, deletes, gets or lists an <code>ovh_pabx_hunting_agents</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ovh_pabx_hunting_agents" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.telephony.ovh_pabx_hunting_agents" /></td></tr>
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
    <td><CopyableCode code="agent_id" /></td>
    <td><code>integer</code></td>
    <td> (wire: agentId)</td>
</tr>
<tr>
    <td><CopyableCode code="break_status" /></td>
    <td><code>integer</code></td>
    <td>The id of the current break status of the agent (wire: breakStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The agent's description</td>
</tr>
<tr>
    <td><CopyableCode code="number" /></td>
    <td><code>string (phone-number)</code></td>
    <td>The number of the agent</td>
</tr>
<tr>
    <td><CopyableCode code="simultaneous_lines" /></td>
    <td><code>integer</code></td>
    <td>The maximum of simultaneous calls that the agent will receive from the hunting (wire: simultaneousLines)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the agent (available, loggedOut, onBreak)</td>
</tr>
<tr>
    <td><CopyableCode code="timeout" /></td>
    <td><code>integer</code></td>
    <td>The waiting timeout (in seconds) before hangup an assigned called</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The agent's type (external, internal)</td>
</tr>
<tr>
    <td><CopyableCode code="wrap_up_time" /></td>
    <td><code>integer</code></td>
    <td>The wrap up time (in seconds) after the calls (wire: wrapUpTime)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Calls agent

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
    <td><CopyableCode code="agent_id" /></td>
    <td><code>integer</code></td>
    <td> (wire: agentId)</td>
</tr>
<tr>
    <td><CopyableCode code="break_status" /></td>
    <td><code>integer</code></td>
    <td>The id of the current break status of the agent (wire: breakStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The agent's description</td>
</tr>
<tr>
    <td><CopyableCode code="number" /></td>
    <td><code>string (phone-number)</code></td>
    <td>The number of the agent</td>
</tr>
<tr>
    <td><CopyableCode code="simultaneous_lines" /></td>
    <td><code>integer</code></td>
    <td>The maximum of simultaneous calls that the agent will receive from the hunting (wire: simultaneousLines)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The current status of the agent (available, loggedOut, onBreak)</td>
</tr>
<tr>
    <td><CopyableCode code="timeout" /></td>
    <td><code>integer</code></td>
    <td>The waiting timeout (in seconds) before hangup an assigned called</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The agent's type (external, internal)</td>
</tr>
<tr>
    <td><CopyableCode code="wrap_up_time" /></td>
    <td><code>integer</code></td>
    <td>The wrap up time (in seconds) after the calls (wire: wrapUpTime)</td>
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
    <td><a href="#parameter-agent_id"><code>agent_id</code></a>, <a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get an agent</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List agents</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-number"><code>number</code></a>, <a href="#parameter-simultaneous_lines"><code>simultaneous_lines</code></a>, <a href="#parameter-status"><code>status</code></a>, <a href="#parameter-timeout"><code>timeout</code></a>, <a href="#parameter-wrap_up_time"><code>wrap_up_time</code></a></td>
    <td></td>
    <td>Create an agent</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-agent_id"><code>agent_id</code></a>, <a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Update an agent</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-agent_id"><code>agent_id</code></a>, <a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Delete an agent</td>
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
<tr id="parameter-agent_id">
    <td><CopyableCode code="agent_id" /></td>
    <td><code>integer</code></td>
    <td> (wire: agentId)</td>
</tr>
<tr id="parameter-api_host">
    <td><CopyableCode code="api_host" /></td>
    <td><code>string</code></td>
    <td>The OVHcloud API host. Selected by OVH_ENDPOINT (ovh-eu, ovh-ca or ovh-us; default ovh-eu). (default: api.eu.ovhcloud.com, x-stackQL-envVarSelector: &#123;"envVar":"OVH_ENDPOINT","default":"ovh-eu","values":&#123;"ovh-eu":"api.eu.ovhcloud.com","ovh-ca":"api.ca.ovhcloud.com","ovh-us":"api.us.ovhcloud.com"&#125;&#125;)</td>
</tr>
<tr id="parameter-billing_account">
    <td><CopyableCode code="billing_account" /></td>
    <td><code>string</code></td>
    <td>The name of your billingAccount (wire: billingAccount)</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td> (wire: serviceName)</td>
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

Get an agent

```sql
SELECT
agent_id,
break_status,
description,
number,
simultaneous_lines,
status,
timeout,
type,
wrap_up_time
FROM ovh.telephony.ovh_pabx_hunting_agents
WHERE agent_id = '{{ agent_id }}' -- required
AND billing_account = '{{ billing_account }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List agents

```sql
SELECT
agent_id,
break_status,
description,
number,
simultaneous_lines,
status,
timeout,
type,
wrap_up_time
FROM ovh.telephony.ovh_pabx_hunting_agents
WHERE billing_account = '{{ billing_account }}' -- required
AND service_name = '{{ service_name }}' -- required
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

Create an agent

```sql
INSERT INTO ovh.telephony.ovh_pabx_hunting_agents (
description,
number,
simultaneous_lines,
status,
timeout,
wrap_up_time,
billing_account,
service_name
)
SELECT 
'{{ description }}',
'{{ number }}' /* required */,
{{ simultaneous_lines }} /* required */,
'{{ status }}' /* required */,
{{ timeout }} /* required */,
{{ wrap_up_time }} /* required */,
'{{ billing_account }}',
'{{ service_name }}'
RETURNING
agent_id,
break_status,
description,
number,
simultaneous_lines,
status,
timeout,
type,
wrap_up_time
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: ovh_pabx_hunting_agents
  props:
    - name: billing_account
      value: "{{ billing_account }}"
      description: Required parameter for the ovh_pabx_hunting_agents resource.
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the ovh_pabx_hunting_agents resource.
    - name: description
      value: "{{ description }}"
      description: |
        The agent's description
    - name: number
      value: "{{ number }}"
      description: |
        Phone number
    - name: simultaneous_lines
      value: {{ simultaneous_lines }}
      description: |
        The maximum of simultaneous calls that the agent will receive from the hunting
    - name: status
      value: "{{ status }}"
      description: |
        The current status of the agent
      valid_values: ['available', 'loggedOut', 'onBreak']
    - name: timeout
      value: {{ timeout }}
      description: |
        The waiting timeout (in seconds) before hangup for an assigned called
    - name: wrap_up_time
      value: {{ wrap_up_time }}
      description: |
        The wrap up time (in seconds) after the calls
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

Update an agent

```sql
UPDATE ovh.telephony.ovh_pabx_hunting_agents
SET 
break_status = {{ break_status }},
description = '{{ description }}',
number = '{{ number }}',
simultaneous_lines = {{ simultaneous_lines }},
status = '{{ status }}',
timeout = {{ timeout }},
wrap_up_time = {{ wrap_up_time }}
WHERE 
agent_id = '{{ agent_id }}' --required
AND billing_account = '{{ billing_account }}' --required
AND service_name = '{{ service_name }}' --required;
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

Delete an agent

```sql
DELETE FROM ovh.telephony.ovh_pabx_hunting_agents
WHERE agent_id = '{{ agent_id }}' --required
AND billing_account = '{{ billing_account }}' --required
AND service_name = '{{ service_name }}' --required
;
```
</TabItem>
</Tabs>
