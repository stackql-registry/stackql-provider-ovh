--- 
title: capabilities_region_presets
hide_title: false
hide_table_of_contents: false
keywords:
  - capabilities_region_presets
  - cloud_ai
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

Creates, updates, deletes, gets or lists a <code>capabilities_region_presets</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="capabilities_region_presets" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.cloud_ai.capabilities_region_presets" /></td></tr>
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
    <td>Preset id</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Preset name</td>
</tr>
<tr>
    <td><CopyableCode code="capabilities" /></td>
    <td><code>object</code></td>
    <td>Preset capabilities</td>
</tr>
<tr>
    <td><CopyableCode code="descriptions" /></td>
    <td><code>array</code></td>
    <td>Preset description</td>
</tr>
<tr>
    <td><CopyableCode code="doc_url" /></td>
    <td><code>array</code></td>
    <td>URL toward the preset image documentation (wire: docUrl)</td>
</tr>
<tr>
    <td><CopyableCode code="logo_url" /></td>
    <td><code>string</code></td>
    <td>URL toward the logo to illustrate the preset (wire: logoUrl)</td>
</tr>
<tr>
    <td><CopyableCode code="partner" /></td>
    <td><code>object</code></td>
    <td>Partner name</td>
</tr>
<tr>
    <td><CopyableCode code="snippet" /></td>
    <td><code>string</code></td>
    <td>Snippet example of the doc</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Preset type (app, job, notebook)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

AI Solutions Preset image

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
    <td>Preset id</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Preset name</td>
</tr>
<tr>
    <td><CopyableCode code="capabilities" /></td>
    <td><code>object</code></td>
    <td>Preset capabilities</td>
</tr>
<tr>
    <td><CopyableCode code="descriptions" /></td>
    <td><code>array</code></td>
    <td>Preset description</td>
</tr>
<tr>
    <td><CopyableCode code="doc_url" /></td>
    <td><code>array</code></td>
    <td>URL toward the preset image documentation (wire: docUrl)</td>
</tr>
<tr>
    <td><CopyableCode code="logo_url" /></td>
    <td><code>string</code></td>
    <td>URL toward the logo to illustrate the preset (wire: logoUrl)</td>
</tr>
<tr>
    <td><CopyableCode code="partner" /></td>
    <td><code>object</code></td>
    <td>Partner name</td>
</tr>
<tr>
    <td><CopyableCode code="snippet" /></td>
    <td><code>string</code></td>
    <td>Snippet example of the doc</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Preset type (app, job, notebook)</td>
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
    <td><a href="#parameter-preset_id"><code>preset_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get Preset Information</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-type"><code>type</code></a></td>
    <td>List Presets</td>
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
<tr id="parameter-preset_id">
    <td><CopyableCode code="preset_id" /></td>
    <td><code>string</code></td>
    <td>Preset ID (wire: presetId)</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Region</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The Public Cloud project ID. Resolved from OVH_CLOUD_PROJECT_SERVICE when set.</td>
</tr>
<tr id="parameter-type">
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Filter on type of preset image</td>
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

Get Preset Information

```sql
SELECT
id,
name,
capabilities,
descriptions,
doc_url,
logo_url,
partner,
snippet,
type
FROM ovh.cloud_ai.capabilities_region_presets
WHERE preset_id = '{{ preset_id }}' -- required
AND region = '{{ region }}' -- required
AND service_name = '{{ service_name }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
<TabItem value="list">

List Presets

```sql
SELECT
id,
name,
capabilities,
descriptions,
doc_url,
logo_url,
partner,
snippet,
type
FROM ovh.cloud_ai.capabilities_region_presets
WHERE region = '{{ region }}' -- required
AND service_name = '{{ service_name }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
AND type = '{{ type }}'
;
```
</TabItem>
</Tabs>
