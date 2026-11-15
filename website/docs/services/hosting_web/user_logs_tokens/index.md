--- 
title: user_logs_tokens
hide_title: false
hide_table_of_contents: false
keywords:
  - user_logs_tokens
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

Creates, updates, deletes, gets or lists a <code>user_logs_tokens</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="user_logs_tokens" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.hosting_web.user_logs_tokens" /></td></tr>
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
    <td><CopyableCode code="value" /></td>
    <td><code>string (password)</code></td>
    <td></td>
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
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-attached_domain"><code>attached_domain</code></a>, <a href="#parameter-remote_check"><code>remote_check</code></a>, <a href="#parameter-ttl"><code>ttl</code></a></td>
    <td>Get a logs interface token. Returns a temporary token to access the logs interface. Set its lifetime in seconds with ttl, its scope with attachedDomain, and remoteCheck to limit it to the caller IP.</td>
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
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The internal name of your hosting (wire: serviceName)</td>
</tr>
<tr id="parameter-attached_domain">
    <td><CopyableCode code="attached_domain" /></td>
    <td><code>string</code></td>
    <td>Specific attached domain to be included in the scope of your token (wire: attachedDomain)</td>
</tr>
<tr id="parameter-remote_check">
    <td><CopyableCode code="remote_check" /></td>
    <td><code>boolean</code></td>
    <td>Whether to limit the use of the token to the remote IPv4 of API caller (wire: remoteCheck)</td>
</tr>
<tr id="parameter-ttl">
    <td><CopyableCode code="ttl" /></td>
    <td><code>integer</code></td>
    <td>Expiration of your token (in seconds)</td>
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

Get a logs interface token. Returns a temporary token to access the logs interface. Set its lifetime in seconds with ttl, its scope with attachedDomain, and remoteCheck to limit it to the caller IP.

```sql
SELECT
value
FROM ovh.hosting_web.user_logs_tokens
WHERE service_name = '{{ service_name }}' -- required
AND attached_domain = '{{ attached_domain }}'
AND remote_check = '{{ remote_check }}'
AND ttl = '{{ ttl }}'
;
```
</TabItem>
</Tabs>
