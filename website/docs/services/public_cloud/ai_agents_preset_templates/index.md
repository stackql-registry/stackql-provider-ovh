--- 
title: ai_agents_preset_templates
hide_title: false
hide_table_of_contents: false
keywords:
  - ai_agents_preset_templates
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

Creates, updates, deletes, gets or lists an <code>ai_agents_preset_templates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ai_agents_preset_templates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.public_cloud.ai_agents_preset_templates" /></td></tr>
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
    <td>Identifier to pass as targetSpec.template.id when creating an agent from this preset</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Human-readable name of the preset</td>
</tr>
<tr>
    <td><CopyableCode code="ai_endpoints" /></td>
    <td><code>boolean</code></td>
    <td>Whether an agent created from this preset uses the OVHcloud AI Endpoints provider preset (wire: aiEndpoints)</td>
</tr>
<tr>
    <td><CopyableCode code="ai_endpoints_integrated_auth" /></td>
    <td><code>boolean</code></td>
    <td>Whether the AI Endpoints credential is minted by this service rather than supplied by the caller (wire: aiEndpointsIntegratedAuth)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>What this preset is for. Empty when the deployment states none.</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

One ready-made AI agent configuration OVHcloud publishes, offered alongside the templates a caller writes for themselves. Its identifier is what a creation names to build an agent from it, and carries a reserved prefix that distinguishes it from a caller's own template.

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
    <td>Identifier to pass as targetSpec.template.id when creating an agent from this preset</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Human-readable name of the preset</td>
</tr>
<tr>
    <td><CopyableCode code="ai_endpoints" /></td>
    <td><code>boolean</code></td>
    <td>Whether an agent created from this preset uses the OVHcloud AI Endpoints provider preset (wire: aiEndpoints)</td>
</tr>
<tr>
    <td><CopyableCode code="ai_endpoints_integrated_auth" /></td>
    <td><code>boolean</code></td>
    <td>Whether the AI Endpoints credential is minted by this service rather than supplied by the caller (wire: aiEndpointsIntegratedAuth)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>What this preset is for. Empty when the deployment states none.</td>
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
    <td><a href="#parameter-template_preset_id"><code>template_preset_id</code></a>, <a href="#parameter-project_id"><code>project_id</code></a></td>
    <td></td>
    <td>A preset is a ready-made configuration OVHcloud publishes, offered alongside the templates a caller writes for themselves. Pass its `id` as `targetSpec.template.id` on an agent creation to build an agent from it. The identifier carries a reserved prefix, so a client can tell a preset from a template of its own.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-project_id"><code>project_id</code></a></td>
    <td><a href="#parameter-x_pagination_cursor"><code>x_pagination_cursor</code></a>, <a href="#parameter-x_pagination_size"><code>x_pagination_size</code></a></td>
    <td>Presets are ready-made configurations OVHcloud publishes, offered alongside the templates a caller writes for themselves. Pass a preset's `id` as `targetSpec.template.id` on an agent creation to build an agent from it. Identifiers carry a reserved prefix, so a client can tell a preset from a template of its own.</td>
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
<tr id="parameter-template_preset_id">
    <td><CopyableCode code="template_preset_id" /></td>
    <td><code>string</code></td>
    <td>Template preset ID (wire: templatePresetId)</td>
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

A preset is a ready-made configuration OVHcloud publishes, offered alongside the templates a caller writes for themselves. Pass its `id` as `targetSpec.template.id` on an agent creation to build an agent from it. The identifier carries a reserved prefix, so a client can tell a preset from a template of its own.

```sql
SELECT
id,
name,
ai_endpoints,
ai_endpoints_integrated_auth,
description
FROM ovh.public_cloud.ai_agents_preset_templates
WHERE template_preset_id = '{{ template_preset_id }}' -- required
AND project_id = '{{ project_id }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
<TabItem value="list">

Presets are ready-made configurations OVHcloud publishes, offered alongside the templates a caller writes for themselves. Pass a preset's `id` as `targetSpec.template.id` on an agent creation to build an agent from it. Identifiers carry a reserved prefix, so a client can tell a preset from a template of its own.

```sql
SELECT
id,
name,
ai_endpoints,
ai_endpoints_integrated_auth,
description
FROM ovh.public_cloud.ai_agents_preset_templates
WHERE project_id = '{{ project_id }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
AND x_pagination_cursor = '{{ x_pagination_cursor }}'
AND x_pagination_size = '{{ x_pagination_size }}'
;
```
</TabItem>
</Tabs>
