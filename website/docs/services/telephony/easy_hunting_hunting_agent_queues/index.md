--- 
title: easy_hunting_hunting_agent_queues
hide_title: false
hide_table_of_contents: false
keywords:
  - easy_hunting_hunting_agent_queues
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

Creates, updates, deletes, gets or lists an <code>easy_hunting_hunting_agent_queues</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="easy_hunting_hunting_agent_queues" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.telephony.easy_hunting_hunting_agent_queues" /></td></tr>
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
    <td><CopyableCode code="queue_id" /></td>
    <td><code>integer</code></td>
    <td> (wire: queueId)</td>
</tr>
<tr>
    <td><CopyableCode code="position" /></td>
    <td><code>integer</code></td>
    <td>The position in the queue</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Agent assigned to a queue

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
    <td><CopyableCode code="queue_id" /></td>
    <td><code>integer</code></td>
    <td> (wire: queueId)</td>
</tr>
<tr>
    <td><CopyableCode code="position" /></td>
    <td><code>integer</code></td>
    <td>The position in the queue</td>
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
    <td><a href="#parameter-agent_id"><code>agent_id</code></a>, <a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-queue_id"><code>queue_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get an agent position in a queue</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-agent_id"><code>agent_id</code></a>, <a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List the queues of an agent</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-agent_id"><code>agent_id</code></a>, <a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-position"><code>position</code></a>, <a href="#parameter-queue_id"><code>queue_id</code></a></td>
    <td></td>
    <td>Assign an agent to a queue</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-agent_id"><code>agent_id</code></a>, <a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-queue_id"><code>queue_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Update an agent position in a queue</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-agent_id"><code>agent_id</code></a>, <a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-queue_id"><code>queue_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Remove an agent from a queue</td>
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
<tr id="parameter-queue_id">
    <td><CopyableCode code="queue_id" /></td>
    <td><code>integer</code></td>
    <td> (wire: queueId)</td>
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

Get an agent position in a queue

```sql
SELECT
agent_id,
queue_id,
position
FROM ovh.telephony.easy_hunting_hunting_agent_queues
WHERE agent_id = '{{ agent_id }}' -- required
AND billing_account = '{{ billing_account }}' -- required
AND queue_id = '{{ queue_id }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List the queues of an agent

```sql
SELECT
agent_id,
queue_id,
position
FROM ovh.telephony.easy_hunting_hunting_agent_queues
WHERE agent_id = '{{ agent_id }}' -- required
AND billing_account = '{{ billing_account }}' -- required
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

Assign an agent to a queue

```sql
INSERT INTO ovh.telephony.easy_hunting_hunting_agent_queues (
position,
queue_id,
agent_id,
billing_account,
service_name
)
SELECT 
{{ position }} /* required */,
{{ queue_id }} /* required */,
'{{ agent_id }}',
'{{ billing_account }}',
'{{ service_name }}'
RETURNING
agent_id,
queue_id,
position
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: easy_hunting_hunting_agent_queues
  props:
    - name: agent_id
      value: {{ agent_id }}
      description: Required parameter for the easy_hunting_hunting_agent_queues resource.
    - name: billing_account
      value: "{{ billing_account }}"
      description: Required parameter for the easy_hunting_hunting_agent_queues resource.
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the easy_hunting_hunting_agent_queues resource.
    - name: position
      value: {{ position }}
      description: |
        The position of the agent in the queue
    - name: queue_id
      value: {{ queue_id }}
      description: |
        The queue where you want to add the agent
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

Update an agent position in a queue

```sql
UPDATE ovh.telephony.easy_hunting_hunting_agent_queues
SET 
position = {{ position }}
WHERE 
agent_id = '{{ agent_id }}' --required
AND billing_account = '{{ billing_account }}' --required
AND queue_id = '{{ queue_id }}' --required
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

Remove an agent from a queue

```sql
DELETE FROM ovh.telephony.easy_hunting_hunting_agent_queues
WHERE agent_id = '{{ agent_id }}' --required
AND billing_account = '{{ billing_account }}' --required
AND queue_id = '{{ queue_id }}' --required
AND service_name = '{{ service_name }}' --required
;
```
</TabItem>
</Tabs>
