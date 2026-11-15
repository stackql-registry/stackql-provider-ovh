--- 
title: servers
hide_title: false
hide_table_of_contents: false
keywords:
  - servers
  - email_pro
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

Creates, updates, deletes, gets or lists a <code>servers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="servers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.email_pro.servers" /></td></tr>
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
    <td><CopyableCode code="task_pending_id" /></td>
    <td><code>integer</code></td>
    <td>Task pending id (wire: taskPendingId)</td>
</tr>
<tr>
    <td><CopyableCode code="current_disk_usage" /></td>
    <td><code>integer</code></td>
    <td>Current disk usage in MB (wire: currentDiskUsage)</td>
</tr>
<tr>
    <td><CopyableCode code="disk_size" /></td>
    <td><code>integer</code></td>
    <td>Total disk size in MB (wire: diskSize)</td>
</tr>
<tr>
    <td><CopyableCode code="ip" /></td>
    <td><code>string (ipv4)</code></td>
    <td>ipV4 (example: 192.0.2.0)</td>
</tr>
<tr>
    <td><CopyableCode code="ip_v6" /></td>
    <td><code>string (ipv6)</code></td>
    <td>ipV6 (example: 2001:41d0:1:1994::1) (wire: ipV6)</td>
</tr>
<tr>
    <td><CopyableCode code="is_a_valid" /></td>
    <td><code>boolean</code></td>
    <td>If true your dns A record is valid (wire: isAValid)</td>
</tr>
<tr>
    <td><CopyableCode code="is_aaaa_valid" /></td>
    <td><code>boolean</code></td>
    <td>If true your dns AAAA record is valid (wire: isAaaaValid)</td>
</tr>
<tr>
    <td><CopyableCode code="is_ptr_v6_valid" /></td>
    <td><code>boolean</code></td>
    <td>If true your dns ptrV6 record is valid (wire: isPtrV6Valid)</td>
</tr>
<tr>
    <td><CopyableCode code="is_ptr_valid" /></td>
    <td><code>boolean</code></td>
    <td>If true your dns ptr record is valid (wire: isPtrValid)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Server state (configurationPending, notConfigured, ok)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>Server version</td>
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
    <td><a href="#parameter-service"><code>service</code></a></td>
    <td></td>
    <td>Returns the state, IPv4 and IPv6 addresses, version and disk usage of the server, and whether its A, AAAA and PTR DNS records are valid. (Alpha version)</td>
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
<tr id="parameter-service">
    <td><CopyableCode code="service" /></td>
    <td><code>string</code></td>
    <td>Service</td>
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

Returns the state, IPv4 and IPv6 addresses, version and disk usage of the server, and whether its A, AAAA and PTR DNS records are valid. (Alpha version)

```sql
SELECT
task_pending_id,
current_disk_usage,
disk_size,
ip,
ip_v6,
is_a_valid,
is_aaaa_valid,
is_ptr_v6_valid,
is_ptr_valid,
state,
version
FROM ovh.email_pro.servers
WHERE service = '{{ service }}' -- required
;
```
</TabItem>
</Tabs>
