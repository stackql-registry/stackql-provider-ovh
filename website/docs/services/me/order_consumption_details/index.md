--- 
title: order_consumption_details
hide_title: false
hide_table_of_contents: false
keywords:
  - order_consumption_details
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

Creates, updates, deletes, gets or lists an <code>order_consumption_details</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="order_consumption_details" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.me.order_consumption_details" /></td></tr>
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
    <td><CopyableCode code="task_id" /></td>
    <td><code>integer</code></td>
    <td>Consumption details export task's identifier (wire: taskId)</td>
</tr>
<tr>
    <td><CopyableCode code="file_format" /></td>
    <td><code>string</code></td>
    <td>Format of the file (csv) (wire: fileFormat)</td>
</tr>
<tr>
    <td><CopyableCode code="file_url" /></td>
    <td><code>string</code></td>
    <td>Temporary URL to download detailed consumption (wire: fileURL)</td>
</tr>
<tr>
    <td><CopyableCode code="message" /></td>
    <td><code>string</code></td>
    <td>Request's state description</td>
</tr>
<tr>
    <td><CopyableCode code="task_status" /></td>
    <td><code>string</code></td>
    <td>Consumption details export task's status (DOING, DONE, ERROR, TODO) (wire: taskStatus)</td>
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
    <td><a href="#parameter-file_format"><code>file_format</code></a>, <a href="#parameter-order_id"><code>order_id</code></a></td>
    <td></td>
    <td>Retrieve order's detailed consumption information as a file</td>
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
<tr id="parameter-file_format">
    <td><CopyableCode code="file_format" /></td>
    <td><code>string</code></td>
    <td>Format of the file (wire: fileFormat)</td>
</tr>
<tr id="parameter-order_id">
    <td><CopyableCode code="order_id" /></td>
    <td><code>integer</code></td>
    <td> (wire: orderId)</td>
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

Retrieve order's detailed consumption information as a file

```sql
SELECT
task_id,
file_format,
file_url,
message,
task_status
FROM ovh.me.order_consumption_details
WHERE file_format = '{{ file_format }}' -- required
AND order_id = '{{ order_id }}' -- required
;
```
</TabItem>
</Tabs>
