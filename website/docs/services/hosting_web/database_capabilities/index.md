--- 
title: database_capabilities
hide_title: false
hide_table_of_contents: false
keywords:
  - database_capabilities
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

Creates, updates, deletes, gets or lists a <code>database_capabilities</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="database_capabilities" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.hosting_web.database_capabilities" /></td></tr>
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
    <td><CopyableCode code="change_password" /></td>
    <td><code>boolean</code></td>
    <td>Availability of the changePassword function (wire: changePassword)</td>
</tr>
<tr>
    <td><CopyableCode code="change_right" /></td>
    <td><code>boolean</code></td>
    <td>Availability of the changeRight function (wire: changeRight)</td>
</tr>
<tr>
    <td><CopyableCode code="delete" /></td>
    <td><code>boolean</code></td>
    <td>Availability of the delete function</td>
</tr>
<tr>
    <td><CopyableCode code="dump" /></td>
    <td><code>boolean</code></td>
    <td>Availability of the dump function</td>
</tr>
<tr>
    <td><CopyableCode code="get_quota" /></td>
    <td><code>boolean</code></td>
    <td>Availability of the getQuota function (wire: getQuota)</td>
</tr>
<tr>
    <td><CopyableCode code="get_right" /></td>
    <td><code>boolean</code></td>
    <td>Availability of the getQuota function (wire: getRight)</td>
</tr>
<tr>
    <td><CopyableCode code="gui_url" /></td>
    <td><code>string</code></td>
    <td>URL of the database management tool (wire: guiURL)</td>
</tr>
<tr>
    <td><CopyableCode code="optimize" /></td>
    <td><code>boolean</code></td>
    <td>Availability of the optimize function</td>
</tr>
<tr>
    <td><CopyableCode code="restore" /></td>
    <td><code>boolean</code></td>
    <td>Availability of the restore function</td>
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
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get database capabilities. Returns the functions available on the database, such as dump, restore or password change, and the URL of its management tool.</td>
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
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Database name (like mydb.mysql.db or mydb.postgres.db)</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The internal name of your hosting (wire: serviceName)</td>
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

Get database capabilities. Returns the functions available on the database, such as dump, restore or password change, and the URL of its management tool.

```sql
SELECT
change_password,
change_right,
delete,
dump,
get_quota,
get_right,
gui_url,
optimize,
restore
FROM ovh.hosting_web.database_capabilities
WHERE name = '{{ name }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
</Tabs>
