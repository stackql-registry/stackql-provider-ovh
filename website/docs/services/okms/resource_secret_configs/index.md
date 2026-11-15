--- 
title: resource_secret_configs
hide_title: false
hide_table_of_contents: false
keywords:
  - resource_secret_configs
  - okms
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

Creates, updates, deletes, gets or lists a <code>resource_secret_configs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resource_secret_configs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.okms.resource_secret_configs" /></td></tr>
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
    <td><CopyableCode code="cas_required" /></td>
    <td><code>boolean</code></td>
    <td>If set to true, the `Cas` (Check And Set) parameter will be required and verified for each secret update (wire: casRequired)</td>
</tr>
<tr>
    <td><CopyableCode code="deactivate_version_after" /></td>
    <td><code>string</code></td>
    <td>Time duration before a version is deactivated. If 0s, default configuration (unlimited) is applied. (wire: deactivateVersionAfter)</td>
</tr>
<tr>
    <td><CopyableCode code="max_versions" /></td>
    <td><code>integer</code></td>
    <td>The number of versions to keep. If 0, default configuration (10) is applied. (wire: maxVersions)</td>
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
    <td><a href="#parameter-okms_id"><code>okms_id</code></a></td>
    <td></td>
    <td>Returns the service-level defaults applied to new secrets: `casRequired`, `maxVersions` and `deactivateVersionAfter`.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-okms_id"><code>okms_id</code></a></td>
    <td></td>
    <td>Updates the service-level defaults applied to new secrets.&lt;br /&gt;Existing secrets keep the metadata they were created with.</td>
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
<tr id="parameter-okms_id">
    <td><CopyableCode code="okms_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Okms ID (wire: okmsId)</td>
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

Returns the service-level defaults applied to new secrets: `casRequired`, `maxVersions` and `deactivateVersionAfter`.

```sql
SELECT
cas_required,
deactivate_version_after,
max_versions
FROM ovh.okms.resource_secret_configs
WHERE okms_id = '{{ okms_id }}' -- required
;
```
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

Updates the service-level defaults applied to new secrets.&lt;br /&gt;Existing secrets keep the metadata they were created with.

```sql
UPDATE ovh.okms.resource_secret_configs
SET 
cas_required = {{ cas_required }},
deactivate_version_after = '{{ deactivate_version_after }}',
max_versions = {{ max_versions }}
WHERE 
okms_id = '{{ okms_id }}' --required
RETURNING
cas_required,
deactivate_version_after,
max_versions;
```
</TabItem>
</Tabs>
