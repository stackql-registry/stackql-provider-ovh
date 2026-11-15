--- 
title: module_lists
hide_title: false
hide_table_of_contents: false
keywords:
  - module_lists
  - hosting_web
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

Creates, updates, deletes, gets or lists a <code>module_lists</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="module_lists" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.hosting_web.module_lists" /></td></tr>
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
    <td><code>integer</code></td>
    <td>The ID of the module</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the module</td>
</tr>
<tr>
    <td><CopyableCode code="active" /></td>
    <td><code>boolean</code></td>
    <td>Is the module available?</td>
</tr>
<tr>
    <td><CopyableCode code="admin_name_type" /></td>
    <td><code>string</code></td>
    <td>The type of the admin name (email, string) (wire: adminNameType)</td>
</tr>
<tr>
    <td><CopyableCode code="author" /></td>
    <td><code>string</code></td>
    <td>The packager of this module for OVH</td>
</tr>
<tr>
    <td><CopyableCode code="branch" /></td>
    <td><code>string</code></td>
    <td>The branch of the module (old, stable, testing)</td>
</tr>
<tr>
    <td><CopyableCode code="keywords" /></td>
    <td><code>array</code></td>
    <td>The keywords for this module</td>
</tr>
<tr>
    <td><CopyableCode code="language" /></td>
    <td><code>array</code></td>
    <td>All available languages for this module</td>
</tr>
<tr>
    <td><CopyableCode code="language_requirement" /></td>
    <td><code>object</code></td>
    <td>Minimal language version required to run this module (wire: languageRequirement)</td>
</tr>
<tr>
    <td><CopyableCode code="latest" /></td>
    <td><code>boolean</code></td>
    <td>Is this the latest version available?</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>object</code></td>
    <td>Size of the module</td>
</tr>
<tr>
    <td><CopyableCode code="upgrade_from" /></td>
    <td><code>array</code></td>
    <td>The IDs of the module you can upgrade to (wire: upgradeFrom)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The version of the module</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

A module specifically packaged by OVH

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
    <td><code>integer</code></td>
    <td>The ID of the module</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the module</td>
</tr>
<tr>
    <td><CopyableCode code="active" /></td>
    <td><code>boolean</code></td>
    <td>Is the module available?</td>
</tr>
<tr>
    <td><CopyableCode code="admin_name_type" /></td>
    <td><code>string</code></td>
    <td>The type of the admin name (email, string) (wire: adminNameType)</td>
</tr>
<tr>
    <td><CopyableCode code="author" /></td>
    <td><code>string</code></td>
    <td>The packager of this module for OVH</td>
</tr>
<tr>
    <td><CopyableCode code="branch" /></td>
    <td><code>string</code></td>
    <td>The branch of the module (old, stable, testing)</td>
</tr>
<tr>
    <td><CopyableCode code="keywords" /></td>
    <td><code>array</code></td>
    <td>The keywords for this module</td>
</tr>
<tr>
    <td><CopyableCode code="language" /></td>
    <td><code>array</code></td>
    <td>All available languages for this module</td>
</tr>
<tr>
    <td><CopyableCode code="language_requirement" /></td>
    <td><code>object</code></td>
    <td>Minimal language version required to run this module (wire: languageRequirement)</td>
</tr>
<tr>
    <td><CopyableCode code="latest" /></td>
    <td><code>boolean</code></td>
    <td>Is this the latest version available?</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>object</code></td>
    <td>Size of the module</td>
</tr>
<tr>
    <td><CopyableCode code="upgrade_from" /></td>
    <td><code>array</code></td>
    <td>The IDs of the module you can upgrade to (wire: upgradeFrom)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>The version of the module</td>
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
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Get an available module. Returns the name, version, branch, languages and requirements of the module, and the modules it can be upgraded to.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-active"><code>active</code></a>, <a href="#parameter-branch"><code>branch</code></a>, <a href="#parameter-latest"><code>latest</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List available modules. Returns the IDs of the modules that can be installed. Filter them by active, branch or latest.</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>integer</code></td>
    <td>The ID of the module</td>
</tr>
<tr id="parameter-active">
    <td><CopyableCode code="active" /></td>
    <td><code>boolean</code></td>
    <td>Filter the value of active property (=)</td>
</tr>
<tr id="parameter-branch">
    <td><CopyableCode code="branch" /></td>
    <td><code>string</code></td>
    <td>Filter the value of branch property (=)</td>
</tr>
<tr id="parameter-latest">
    <td><CopyableCode code="latest" /></td>
    <td><code>boolean</code></td>
    <td>Filter the value of latest property (=)</td>
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

Get an available module. Returns the name, version, branch, languages and requirements of the module, and the modules it can be upgraded to.

```sql
SELECT
id,
name,
active,
admin_name_type,
author,
branch,
keywords,
language,
language_requirement,
latest,
size,
upgrade_from,
version
FROM ovh.hosting_web.module_lists
WHERE id = '{{ id }}' -- required
;
```
</TabItem>
<TabItem value="list">

List available modules. Returns the IDs of the modules that can be installed. Filter them by active, branch or latest.

```sql
SELECT
id,
name,
active,
admin_name_type,
author,
branch,
keywords,
language,
language_requirement,
latest,
size,
upgrade_from,
version
FROM ovh.hosting_web.module_lists
WHERE active = '{{ active }}'
AND branch = '{{ branch }}'
AND latest = '{{ latest }}'
AND x_pagination_mode = '{{ x_pagination_mode }}'
;
```
</TabItem>
</Tabs>
