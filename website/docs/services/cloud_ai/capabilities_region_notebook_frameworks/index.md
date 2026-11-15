--- 
title: capabilities_region_notebook_frameworks
hide_title: false
hide_table_of_contents: false
keywords:
  - capabilities_region_notebook_frameworks
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

Creates, updates, deletes, gets or lists a <code>capabilities_region_notebook_frameworks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="capabilities_region_notebook_frameworks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.cloud_ai.capabilities_region_notebook_frameworks" /></td></tr>
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
    <td>Unique identifier of the framework</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the framework</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Short description of the framework</td>
</tr>
<tr>
    <td><CopyableCode code="doc_url" /></td>
    <td><code>string</code></td>
    <td>URL of the framework documentation (wire: docUrl)</td>
</tr>
<tr>
    <td><CopyableCode code="logo_url" /></td>
    <td><code>string</code></td>
    <td>URL of the logo of the framework (wire: logoUrl)</td>
</tr>
<tr>
    <td><CopyableCode code="saved_paths" /></td>
    <td><code>array</code></td>
    <td>List of paths that are automatically saved (wire: savedPaths)</td>
</tr>
<tr>
    <td><CopyableCode code="supported_qpus" /></td>
    <td><code>array</code></td>
    <td>List of the QPU flavors that are supported by this framework (wire: supportedQpus)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of given framework eg. ai, quantum, quantum-qpu</td>
</tr>
<tr>
    <td><CopyableCode code="versions" /></td>
    <td><code>array</code></td>
    <td>List of available versions of this framework</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

AI Solutions Notebook framework object

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
    <td>Unique identifier of the framework</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the framework</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Short description of the framework</td>
</tr>
<tr>
    <td><CopyableCode code="doc_url" /></td>
    <td><code>string</code></td>
    <td>URL of the framework documentation (wire: docUrl)</td>
</tr>
<tr>
    <td><CopyableCode code="logo_url" /></td>
    <td><code>string</code></td>
    <td>URL of the logo of the framework (wire: logoUrl)</td>
</tr>
<tr>
    <td><CopyableCode code="saved_paths" /></td>
    <td><code>array</code></td>
    <td>List of paths that are automatically saved (wire: savedPaths)</td>
</tr>
<tr>
    <td><CopyableCode code="supported_qpus" /></td>
    <td><code>array</code></td>
    <td>List of the QPU flavors that are supported by this framework (wire: supportedQpus)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of given framework eg. ai, quantum, quantum-qpu</td>
</tr>
<tr>
    <td><CopyableCode code="versions" /></td>
    <td><code>array</code></td>
    <td>List of available versions of this framework</td>
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
    <td><a href="#parameter-framework_id"><code>framework_id</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get an AI Solutions Notebook framework</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-compatible_with_editor"><code>compatible_with_editor</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td>List AI Solutions Notebook frameworks</td>
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
<tr id="parameter-framework_id">
    <td><CopyableCode code="framework_id" /></td>
    <td><code>string</code></td>
    <td>Framework ID (wire: frameworkId)</td>
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
<tr id="parameter-compatible_with_editor">
    <td><CopyableCode code="compatible_with_editor" /></td>
    <td><code>string</code></td>
    <td>Only list frameworks compatible with this editor (wire: compatibleWithEditor)</td>
</tr>
<tr id="parameter-type">
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Only list frameworks of this type</td>
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

Get an AI Solutions Notebook framework

```sql
SELECT
id,
name,
description,
doc_url,
logo_url,
saved_paths,
supported_qpus,
type,
versions
FROM ovh.cloud_ai.capabilities_region_notebook_frameworks
WHERE framework_id = '{{ framework_id }}' -- required
AND region = '{{ region }}' -- required
AND service_name = '{{ service_name }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
<TabItem value="list">

List AI Solutions Notebook frameworks

```sql
SELECT
id,
name,
description,
doc_url,
logo_url,
saved_paths,
supported_qpus,
type,
versions
FROM ovh.cloud_ai.capabilities_region_notebook_frameworks
WHERE region = '{{ region }}' -- required
AND service_name = '{{ service_name }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
AND compatible_with_editor = '{{ compatible_with_editor }}'
AND type = '{{ type }}'
;
```
</TabItem>
</Tabs>
