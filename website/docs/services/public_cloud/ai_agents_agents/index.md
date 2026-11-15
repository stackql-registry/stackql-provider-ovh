--- 
title: ai_agents_agents
hide_title: false
hide_table_of_contents: false
keywords:
  - ai_agents_agents
  - public_cloud
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

Creates, updates, deletes, gets or lists an <code>ai_agents_agents</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ai_agents_agents" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.public_cloud.ai_agents_agents" /></td></tr>
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
    <td><code>string</code></td>
    <td>Unique identifier of the AI agent</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date of the AI agent creation (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="current_state" /></td>
    <td><code>object</code></td>
    <td>Current state of the AI agent (wire: currentState)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_status" /></td>
    <td><code>string</code></td>
    <td>Reflects the readiness of the AI agent: READY, SUSPENDED when it is paused, or DELETING on the response to its deletion (CREATING, CREATION_PLANNED, DELETING, ERROR, OUT_OF_SYNC, READY, SUSPENDED, UNKNOWN, UPDATING) (wire: resourceStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="target_spec" /></td>
    <td><code>object</code></td>
    <td>Last target specification of the AI agent (wire: targetSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date of the last AI agent update (wire: updatedAt)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A managed AI agent

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
    <td><code>string</code></td>
    <td>Unique identifier of the AI agent</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date of the AI agent creation (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="current_state" /></td>
    <td><code>object</code></td>
    <td>Current state of the AI agent (wire: currentState)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_status" /></td>
    <td><code>string</code></td>
    <td>Reflects the readiness of the AI agent: READY, SUSPENDED when it is paused, or DELETING on the response to its deletion (CREATING, CREATION_PLANNED, DELETING, ERROR, OUT_OF_SYNC, READY, SUSPENDED, UNKNOWN, UPDATING) (wire: resourceStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="target_spec" /></td>
    <td><code>object</code></td>
    <td>Last target specification of the AI agent (wire: targetSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date of the last AI agent update (wire: updatedAt)</td>
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
    <td><a href="#parameter-agent_id"><code>agent_id</code></a>, <a href="#parameter-project_id"><code>project_id</code></a></td>
    <td></td>
    <td>Get an AI agent</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a></td>
    <td><a href="#parameter-x_pagination_cursor"><code>x_pagination_cursor</code></a>, <a href="#parameter-x_pagination_size"><code>x_pagination_size</code></a></td>
    <td>List AI agents</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-target_spec"><code>target_spec</code></a></td>
    <td></td>
    <td>Creates an AI agent: a hosted assistant that answers on its own URL, given by `currentState.endpointUrl`, and reached with a token from the `token` action. An agent runs a model with a persona, plus whatever tools, memory and channels its configuration gives it. That configuration can come from a ready-made one published by OVHcloud, from a template of your own, or from settings supplied here — or from none of them, leaving an agent that cannot answer until it is given a model. Parts of it that OVHcloud manages are rejected here; the `globalSettings` preset says which. This is the only point at which this API sets an agent's configuration: from here on the agent holds its own and is configured through its endpoint. Create it paused to finish preparing it before it answers anyone.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-agent_id"><code>agent_id</code></a>, <a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-target_spec"><code>target_spec</code></a></td>
    <td></td>
    <td>`targetSpec.enabled` is mandatory, including on an update whose only intent is a rename. Restating the agent's current running state changes nothing; stating the other one pauses or resumes it. `targetSpec.name` is optional: omitting it, or restating the current name, leaves it untouched. Any other name renames the agent and redeploys it, keeping its identifier, its access tokens, its configuration and its data, and re-applying its paused state. A name another agent in the project already holds is rejected. The configuration is not settable here; it is read and changed through the agent itself.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-agent_id"><code>agent_id</code></a>, <a href="#parameter-project_id"><code>project_id</code></a></td>
    <td></td>
    <td>Deletion is asynchronous: the response describes the agent with `resourceStatus: DELETING`.</td>
</tr>
<tr>
    <td><a href="#redeploy"><CopyableCode code="redeploy" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-agentId"><code>agentId</code></a>, <a href="#parameter-project_id"><code>project_id</code></a></td>
    <td></td>
    <td>Refreshes the agent's runtime without touching its configuration or the data it holds.</td>
</tr>
<tr>
    <td><a href="#token"><CopyableCode code="token" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-agentId"><code>agentId</code></a>, <a href="#parameter-project_id"><code>project_id</code></a></td>
    <td></td>
    <td>Returns a bearer token to present to the agent at `currentState.endpointUrl`. The token is returned once, here, and is never readable afterwards. Both body fields are optional: send `&#123;&#125;` for the defaults, which are the VIEWER role and the agent's own default lifetime. A lifetime longer than the agent's own maximum is rejected.</td>
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
<tr id="parameter-agentId">
    <td><CopyableCode code="agentId" /></td>
    <td><code>string</code></td>
    <td>Agent ID</td>
</tr>
<tr id="parameter-agent_id">
    <td><CopyableCode code="agent_id" /></td>
    <td><code>string</code></td>
    <td>Agent ID (wire: agentId)</td>
</tr>
<tr id="parameter-api_host">
    <td><CopyableCode code="api_host" /></td>
    <td><code>string</code></td>
    <td>The OVHcloud API host. Selected by OVH_ENDPOINT (ovh-eu, ovh-ca or ovh-us; default ovh-eu). (default: api.eu.ovhcloud.com, x-stackQL-envVarSelector: &#123;"envVar":"OVH_ENDPOINT","default":"ovh-eu","values":&#123;"ovh-eu":"api.eu.ovhcloud.com","ovh-ca":"api.ca.ovhcloud.com","ovh-us":"api.us.ovhcloud.com"&#125;&#125;)</td>
</tr>
<tr id="parameter-project_id">
    <td><CopyableCode code="project_id" /></td>
    <td><code>string</code></td>
    <td>The Public Cloud project ID. Resolved from OVH_CLOUD_PROJECT_SERVICE when set.</td>
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

Get an AI agent

```sql
SELECT
id,
created_at,
current_state,
resource_status,
target_spec,
updated_at
FROM ovh.public_cloud.ai_agents_agents
WHERE agent_id = '{{ agent_id }}' -- required
AND project_id = '{{ project_id }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
<TabItem value="list">

List AI agents

```sql
SELECT
id,
created_at,
current_state,
resource_status,
target_spec,
updated_at
FROM ovh.public_cloud.ai_agents_agents
WHERE project_id = '{{ project_id }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
AND x_pagination_cursor = '{{ x_pagination_cursor }}'
AND x_pagination_size = '{{ x_pagination_size }}'
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

Creates an AI agent: a hosted assistant that answers on its own URL, given by `currentState.endpointUrl`, and reached with a token from the `token` action. An agent runs a model with a persona, plus whatever tools, memory and channels its configuration gives it. That configuration can come from a ready-made one published by OVHcloud, from a template of your own, or from settings supplied here — or from none of them, leaving an agent that cannot answer until it is given a model. Parts of it that OVHcloud manages are rejected here; the `globalSettings` preset says which. This is the only point at which this API sets an agent's configuration: from here on the agent holds its own and is configured through its endpoint. Create it paused to finish preparing it before it answers anyone.

```sql
INSERT INTO ovh.public_cloud.ai_agents_agents (
target_spec,
project_id
)
SELECT 
'{{ target_spec }}' /* required */,
'{{ project_id }}'
RETURNING
id,
created_at,
current_state,
resource_status,
target_spec,
updated_at
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: ai_agents_agents
  props:
    - name: project_id
      value: "{{ project_id }}"
      description: Required parameter for the ai_agents_agents resource.
    - name: target_spec
      description: |
        Desired specification of the AI agent to create
      value:
        config:
          agent:
            name: "{{ name }}"
          auth:
            kagentJwt:
              allowUnlimited: {{ allowUnlimited }}
              enabled: {{ enabled }}
              maxTtlSeconds: {{ maxTtlSeconds }}
              secretB64: "{{ secretB64 }}"
            mode: "{{ mode }}"
            oauth2:
              audience: "{{ audience }}"
              issuer: "{{ issuer }}"
              jwksUri: "{{ jwksUri }}"
              ownerSub: "{{ ownerSub }}"
              requiredScopes:
                - "{{ requiredScopes }}"
          builtins:
            network: {{ network }}
            search: {{ search }}
            searchApiKey: "{{ searchApiKey }}"
            searchProvider: "{{ searchProvider }}"
            toolsDeny:
              - "{{ toolsDeny }}"
            wizard: {{ wizard }}
          channels:
            telegram:
              botToken: "{{ botToken }}"
              enabled: {{ enabled }}
              webhookSecret: "{{ webhookSecret }}"
            webex:
              accessToken: "{{ accessToken }}"
              enabled: {{ enabled }}
              webhookSecret: "{{ webhookSecret }}"
          exec:
            apiKey: "{{ apiKey }}"
            autoSuspendIdleSeconds: {{ autoSuspendIdleSeconds }}
            baseUrl: "{{ baseUrl }}"
            defaultImage: "{{ defaultImage }}"
            enabled: {{ enabled }}
          llm:
            failover:
              on:
                - "{{ on }}"
            fallbacks:
              - maxTokens: {{ maxTokens }}
                model: "{{ model }}"
                providerId: "{{ providerId }}"
                temperature: {{ temperature }}
            maxContextMessages: {{ maxContextMessages }}
            maxTokens: {{ maxTokens }}
            model: "{{ model }}"
            providerId: "{{ providerId }}"
            temperature: {{ temperature }}
            vision:
              maxTokens: {{ maxTokens }}
              model: "{{ model }}"
              providerId: "{{ providerId }}"
              temperature: {{ temperature }}
          mcpIndexer:
            embedderBatchSize: {{ embedderBatchSize }}
            embedderModel: "{{ embedderModel }}"
            providerId: "{{ providerId }}"
          mcpServers: "{{ mcpServers }}"
          memory:
            consolidateOnTurnEnd: {{ consolidateOnTurnEnd }}
            consolidationCron: "{{ consolidationCron }}"
            consolidationMaxRounds: {{ consolidationMaxRounds }}
            corePredicates:
              - "{{ corePredicates }}"
            embedderBatchSize: {{ embedderBatchSize }}
            embedderModel: "{{ embedderModel }}"
            enabled: {{ enabled }}
            gcCron: "{{ gcCron }}"
            gcMaxSize: {{ gcMaxSize }}
            gcMinRetention: {{ gcMinRetention }}
            gcSoftLimit: {{ gcSoftLimit }}
            halfLifeDays: {{ halfLifeDays }}
            identityPromotionThreshold: {{ identityPromotionThreshold }}
            inferenceLlmFallback: {{ inferenceLlmFallback }}
            mergeSimilarityThreshold: {{ mergeSimilarityThreshold }}
            providerId: "{{ providerId }}"
            ruleIdleGcDays: {{ ruleIdleGcDays }}
            rulesMax: {{ rulesMax }}
          profiles:
            enabled: {{ enabled }}
            items: "{{ items }}"
          providers: "{{ providers }}"
          relay:
            enabled: {{ enabled }}
            maxMessagesPerRoom: {{ maxMessagesPerRoom }}
            maxRooms: {{ maxRooms }}
            roomCreation: "{{ roomCreation }}"
          skills:
            builtins:
              - "{{ builtins }}"
            enabled: {{ enabled }}
            items: "{{ items }}"
          soul: "{{ soul }}"
          toolPermissions:
            judge:
              enabled: {{ enabled }}
              model: "{{ model }}"
              providerId: "{{ providerId }}"
              soul: "{{ soul }}"
            rules:
              - action: "{{ action }}"
                args: "{{ args }}"
                phase: "{{ phase }}"
                reason: "{{ reason }}"
                result: "{{ result }}"
                tool: "{{ tool }}"
                triggers: "{{ triggers }}"
                unattended: "{{ unattended }}"
          version: "{{ version }}"
          workspace:
            agentsPath: "{{ agentsPath }}"
            mount:
              - accessKey: "{{ accessKey }}"
                backend: "{{ backend }}"
                bucket: "{{ bucket }}"
                endpoint: "{{ endpoint }}"
                maxFileBytes: {{ maxFileBytes }}
                maxFiles: {{ maxFiles }}
                maxTotalBytes: {{ maxTotalBytes }}
                path: "{{ path }}"
                prefix: "{{ prefix }}"
                region: "{{ region }}"
                ro: {{ ro }}
                secretKey: "{{ secretKey }}"
            scratchpad:
              cleanupCron: "{{ cleanupCron }}"
              enabled: {{ enabled }}
              maxDownloadBytes: {{ maxDownloadBytes }}
              path: "{{ path }}"
              retentionDays: {{ retentionDays }}
              spillBytes: {{ spillBytes }}
            skillsPath: "{{ skillsPath }}"
            zerofs:
              enabled: {{ enabled }}
              mountPath: "{{ mountPath }}"
        enabled: {{ enabled }}
        name: "{{ name }}"
        template:
          id: "{{ id }}"
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

`targetSpec.enabled` is mandatory, including on an update whose only intent is a rename. Restating the agent's current running state changes nothing; stating the other one pauses or resumes it. `targetSpec.name` is optional: omitting it, or restating the current name, leaves it untouched. Any other name renames the agent and redeploys it, keeping its identifier, its access tokens, its configuration and its data, and re-applying its paused state. A name another agent in the project already holds is rejected. The configuration is not settable here; it is read and changed through the agent itself.

```sql
UPDATE ovh.public_cloud.ai_agents_agents
SET 
target_spec = '{{ target_spec }}'
WHERE 
agent_id = '{{ agent_id }}' --required
AND project_id = '{{ project_id }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
AND target_spec = '{{ target_spec }}' --required
RETURNING
id,
created_at,
current_state,
resource_status,
target_spec,
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

Deletion is asynchronous: the response describes the agent with `resourceStatus: DELETING`.

```sql
DELETE FROM ovh.public_cloud.ai_agents_agents
WHERE agent_id = '{{ agent_id }}' --required
AND project_id = '{{ project_id }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="redeploy"
    values={[
        { label: 'redeploy', value: 'redeploy' },
        { label: 'token', value: 'token' }
    ]}
>
<TabItem value="redeploy">

Refreshes the agent's runtime without touching its configuration or the data it holds.

```sql
EXEC ovh.public_cloud.ai_agents_agents.redeploy 
@agentId='{{ agentId }}' --required, 
@project_id='{{ project_id }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
<TabItem value="token">

Returns a bearer token to present to the agent at `currentState.endpointUrl`. The token is returned once, here, and is never readable afterwards. Both body fields are optional: send `&#123;&#125;` for the defaults, which are the VIEWER role and the agent's own default lifetime. A lifetime longer than the agent's own maximum is rejected.

```sql
EXEC ovh.public_cloud.ai_agents_agents.token 
@agentId='{{ agentId }}' --required, 
@project_id='{{ project_id }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set 
@@json=
'{
"lifetimeSeconds": {{ lifetimeSeconds }}, 
"role": "{{ role }}"
}'
;
```
</TabItem>
</Tabs>
