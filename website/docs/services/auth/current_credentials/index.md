--- 
title: current_credentials
hide_title: false
hide_table_of_contents: false
keywords:
  - current_credentials
  - auth
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

Creates, updates, deletes, gets or lists a <code>current_credentials</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="current_credentials" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.auth.current_credentials" /></td></tr>
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
    <td></td>
    <td></td>
    <td>Get the current credential details</td>
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

Get the current credential details

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
FROM ovh.auth.current_credentials
;
```
</TabItem>
</Tabs>
