--- 
title: api_credentials
hide_title: false
hide_table_of_contents: false
keywords:
  - api_credentials
  - me
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

Creates, updates, deletes, gets or lists an <code>api_credentials</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="api_credentials" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.me.api_credentials" /></td></tr>
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
    <td><CopyableCode code="application_id" /></td>
    <td><code>integer</code></td>
    <td>ID of associated API Application (wire: applicationId)</td>
</tr>
<tr>
    <td><CopyableCode code="credential_id" /></td>
    <td><code>integer</code></td>
    <td>ID of this credential (wire: credentialId)</td>
</tr>
<tr>
    <td><CopyableCode code="allowed_ips" /></td>
    <td><code>array</code></td>
    <td>If defined, list of ip blocks which are allowed to call API with this credential (wire: allowedIPs)</td>
</tr>
<tr>
    <td><CopyableCode code="creation" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date of this credential</td>
</tr>
<tr>
    <td><CopyableCode code="expiration" /></td>
    <td><code>string (date-time)</code></td>
    <td>Expiration date of this credential</td>
</tr>
<tr>
    <td><CopyableCode code="last_use" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last use date of this credential (wire: lastUse)</td>
</tr>
<tr>
    <td><CopyableCode code="ovh_support" /></td>
    <td><code>boolean</code></td>
    <td>States whether this credential has been created by yourself or by the OVH support team (wire: ovhSupport)</td>
</tr>
<tr>
    <td><CopyableCode code="rules" /></td>
    <td><code>array</code></td>
    <td>API routes allowed to this credential</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>State of to this credential (expired, pendingValidation, refused, validated)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

API Credential

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
    <td><CopyableCode code="application_id" /></td>
    <td><code>integer</code></td>
    <td>ID of associated API Application (wire: applicationId)</td>
</tr>
<tr>
    <td><CopyableCode code="credential_id" /></td>
    <td><code>integer</code></td>
    <td>ID of this credential (wire: credentialId)</td>
</tr>
<tr>
    <td><CopyableCode code="allowed_ips" /></td>
    <td><code>array</code></td>
    <td>If defined, list of ip blocks which are allowed to call API with this credential (wire: allowedIPs)</td>
</tr>
<tr>
    <td><CopyableCode code="creation" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date of this credential</td>
</tr>
<tr>
    <td><CopyableCode code="expiration" /></td>
    <td><code>string (date-time)</code></td>
    <td>Expiration date of this credential</td>
</tr>
<tr>
    <td><CopyableCode code="last_use" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last use date of this credential (wire: lastUse)</td>
</tr>
<tr>
    <td><CopyableCode code="ovh_support" /></td>
    <td><code>boolean</code></td>
    <td>States whether this credential has been created by yourself or by the OVH support team (wire: ovhSupport)</td>
</tr>
<tr>
    <td><CopyableCode code="rules" /></td>
    <td><code>array</code></td>
    <td>API routes allowed to this credential</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>State of to this credential (expired, pendingValidation, refused, validated)</td>
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
    <td><a href="#parameter-credential_id"><code>credential_id</code></a></td>
    <td></td>
    <td>Retrieve information about a credential</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-application_id"><code>application_id</code></a>, <a href="#parameter-status"><code>status</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>Retrieve all credentials</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-credential_id"><code>credential_id</code></a></td>
    <td></td>
    <td>Edit a credential</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-credential_id"><code>credential_id</code></a></td>
    <td></td>
    <td>Delete a credential</td>
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
<tr id="parameter-credential_id">
    <td><CopyableCode code="credential_id" /></td>
    <td><code>integer</code></td>
    <td>Credential ID (wire: credentialId)</td>
</tr>
<tr id="parameter-application_id">
    <td><CopyableCode code="application_id" /></td>
    <td><code>integer</code></td>
    <td>Filter by applicationId (wire: applicationId)</td>
</tr>
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Filter by status</td>
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

Retrieve information about a credential

```sql
SELECT
application_id,
credential_id,
allowed_ips,
creation,
expiration,
last_use,
ovh_support,
rules,
status
FROM ovh.me.api_credentials
WHERE credential_id = '{{ credential_id }}' -- required
;
```
</TabItem>
<TabItem value="list">

Retrieve all credentials

```sql
SELECT
application_id,
credential_id,
allowed_ips,
creation,
expiration,
last_use,
ovh_support,
rules,
status
FROM ovh.me.api_credentials
WHERE application_id = '{{ application_id }}'
AND status = '{{ status }}'
AND x_pagination_mode = '{{ x_pagination_mode }}'
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

Edit a credential

```sql
UPDATE ovh.me.api_credentials
SET 
allowed_ips = '{{ allowed_ips }}'
WHERE 
credential_id = '{{ credential_id }}' --required;
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

Delete a credential

```sql
DELETE FROM ovh.me.api_credentials
WHERE credential_id = '{{ credential_id }}' --required
;
```
</TabItem>
</Tabs>
