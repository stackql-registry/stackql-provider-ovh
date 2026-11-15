--- 
title: ai_agents_preset_model_ai_endpoints_providers
hide_title: false
hide_table_of_contents: false
keywords:
  - ai_agents_preset_model_ai_endpoints_providers
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

Creates, updates, deletes, gets or lists an <code>ai_agents_preset_model_ai_endpoints_providers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ai_agents_preset_model_ai_endpoints_providers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.public_cloud.ai_agents_preset_model_ai_endpoints_providers" /></td></tr>
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
    <td><CopyableCode code="api_base" /></td>
    <td><code>string</code></td>
    <td>OpenAI-compatible base URL, published so a client can list models from its /models sub-path (wire: apiBase)</td>
</tr>
<tr>
    <td><CopyableCode code="default_model" /></td>
    <td><code>string</code></td>
    <td>Model seeded when the caller states none. Empty when this deployment states no default. (wire: defaultModel)</td>
</tr>
<tr>
    <td><CopyableCode code="enabled" /></td>
    <td><code>boolean</code></td>
    <td>Whether the OVHcloud AI Endpoints provider preset is available on this deployment</td>
</tr>
<tr>
    <td><CopyableCode code="integrated_auth" /></td>
    <td><code>boolean</code></td>
    <td>Whether OVHcloud provisions the AI Endpoints credential for the agent, so the caller does not have to supply one (wire: integratedAuth)</td>
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
    <td><a href="#parameter-project_id"><code>project_id</code></a></td>
    <td></td>
    <td>States whether the OVHcloud AI Endpoints provider preset can be selected, whether OVHcloud provisions its credential so the caller need not supply one, the base URL whose `/models` sub-path lists the models available, and the model used when the caller names none.</td>
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

States whether the OVHcloud AI Endpoints provider preset can be selected, whether OVHcloud provisions its credential so the caller need not supply one, the base URL whose `/models` sub-path lists the models available, and the model used when the caller names none.

```sql
SELECT
api_base,
default_model,
enabled,
integrated_auth
FROM ovh.public_cloud.ai_agents_preset_model_ai_endpoints_providers
WHERE project_id = '{{ project_id }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
</Tabs>
