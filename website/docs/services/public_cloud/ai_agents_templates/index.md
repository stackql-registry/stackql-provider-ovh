--- 
title: ai_agents_templates
hide_title: false
hide_table_of_contents: false
keywords:
  - ai_agents_templates
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

Creates, updates, deletes, gets or lists an <code>ai_agents_templates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ai_agents_templates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.public_cloud.ai_agents_templates" /></td></tr>
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
    <td>Unique identifier of the template</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date of the template creation (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_status" /></td>
    <td><code>string</code></td>
    <td>Reflects the readiness of the template: READY, or DELETING on the response to its deletion (CREATING, CREATION_PLANNED, DELETING, ERROR, OUT_OF_SYNC, READY, SUSPENDED, UNKNOWN, UPDATING) (wire: resourceStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="source" /></td>
    <td><code>string</code></td>
    <td>Distinguishes built-in (code-defined) from user-authored templates (BUILTIN, USER)</td>
</tr>
<tr>
    <td><CopyableCode code="target_spec" /></td>
    <td><code>object</code></td>
    <td>Desired specification to replace the template with (wire: targetSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date of the last template update (wire: updatedAt)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

An AI agent configuration template

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
    <td>Unique identifier of the template</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date of the template creation (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_status" /></td>
    <td><code>string</code></td>
    <td>Reflects the readiness of the template: READY, or DELETING on the response to its deletion (CREATING, CREATION_PLANNED, DELETING, ERROR, OUT_OF_SYNC, READY, SUSPENDED, UNKNOWN, UPDATING) (wire: resourceStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="source" /></td>
    <td><code>string</code></td>
    <td>Distinguishes built-in (code-defined) from user-authored templates (BUILTIN, USER)</td>
</tr>
<tr>
    <td><CopyableCode code="target_spec" /></td>
    <td><code>object</code></td>
    <td>Desired specification to replace the template with (wire: targetSpec)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date of the last template update (wire: updatedAt)</td>
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
    <td><a href="#parameter-template_id"><code>template_id</code></a>, <a href="#parameter-project_id"><code>project_id</code></a></td>
    <td></td>
    <td>The ready-made configurations OVHcloud publishes are not returned here. They are served by the `preset/template` node.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a></td>
    <td><a href="#parameter-x_pagination_cursor"><code>x_pagination_cursor</code></a>, <a href="#parameter-x_pagination_size"><code>x_pagination_size</code></a></td>
    <td>The ready-made configurations OVHcloud publishes are absent from this list. They are served by the `preset/template` node.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-target_spec"><code>target_spec</code></a></td>
    <td></td>
    <td>Registers a reusable configuration that a later agent creation can name through `targetSpec.template.id`. A template stores a configuration. It runs nothing by itself. `targetSpec.name` must be unique within the project's namespace.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-template_id"><code>template_id</code></a>, <a href="#parameter-project_id"><code>project_id</code></a>, <a href="#parameter-target_spec"><code>target_spec</code></a></td>
    <td></td>
    <td>Replaces the template's target spec as a whole: a field left out of the body is not preserved, and `targetSpec.config` is mandatory. Secrets inside that configuration read back as `&#91;REDACTED&#93;`. Send the sentinel back unchanged to keep the stored value. Configuration blocks OVHcloud reserves or does not offer are left out of a read, and a body that does not restate them drops them from the stored template. Agents already created from this template are unaffected, since a template is read once, at agent creation time.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-template_id"><code>template_id</code></a>, <a href="#parameter-project_id"><code>project_id</code></a></td>
    <td></td>
    <td>Deletion is asynchronous: the response describes the template with `resourceStatus: DELETING`. Agents already created from it are unaffected, since a template is read once, at agent creation time.</td>
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
<tr id="parameter-project_id">
    <td><CopyableCode code="project_id" /></td>
    <td><code>string</code></td>
    <td>The Public Cloud project ID. Resolved from OVH_CLOUD_PROJECT_SERVICE when set.</td>
</tr>
<tr id="parameter-template_id">
    <td><CopyableCode code="template_id" /></td>
    <td><code>string</code></td>
    <td>Template ID (wire: templateId)</td>
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

The ready-made configurations OVHcloud publishes are not returned here. They are served by the `preset/template` node.

```sql
SELECT
id,
created_at,
resource_status,
source,
target_spec,
updated_at
FROM ovh.public_cloud.ai_agents_templates
WHERE template_id = '{{ template_id }}' -- required
AND project_id = '{{ project_id }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
<TabItem value="list">

The ready-made configurations OVHcloud publishes are absent from this list. They are served by the `preset/template` node.

```sql
SELECT
id,
created_at,
resource_status,
source,
target_spec,
updated_at
FROM ovh.public_cloud.ai_agents_templates
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

Registers a reusable configuration that a later agent creation can name through `targetSpec.template.id`. A template stores a configuration. It runs nothing by itself. `targetSpec.name` must be unique within the project's namespace.

```sql
INSERT INTO ovh.public_cloud.ai_agents_templates (
target_spec,
project_id
)
SELECT 
'{{ target_spec }}' /* required */,
'{{ project_id }}'
RETURNING
id,
created_at,
resource_status,
source,
target_spec,
updated_at
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: ai_agents_templates
  props:
    - name: project_id
      value: "{{ project_id }}"
      description: Required parameter for the ai_agents_templates resource.
    - name: target_spec
      description: |
        Desired specification of the template to create
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
        description: "{{ description }}"
        name: "{{ name }}"
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

Replaces the template's target spec as a whole: a field left out of the body is not preserved, and `targetSpec.config` is mandatory. Secrets inside that configuration read back as `[REDACTED]`. Send the sentinel back unchanged to keep the stored value. Configuration blocks OVHcloud reserves or does not offer are left out of a read, and a body that does not restate them drops them from the stored template. Agents already created from this template are unaffected, since a template is read once, at agent creation time.

```sql
UPDATE ovh.public_cloud.ai_agents_templates
SET 
target_spec = '{{ target_spec }}'
WHERE 
template_id = '{{ template_id }}' --required
AND project_id = '{{ project_id }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
AND target_spec = '{{ target_spec }}' --required
RETURNING
id,
created_at,
resource_status,
source,
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

Deletion is asynchronous: the response describes the template with `resourceStatus: DELETING`. Agents already created from it are unaffected, since a template is read once, at agent creation time.

```sql
DELETE FROM ovh.public_cloud.ai_agents_templates
WHERE template_id = '{{ template_id }}' --required
AND project_id = '{{ project_id }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
</Tabs>
