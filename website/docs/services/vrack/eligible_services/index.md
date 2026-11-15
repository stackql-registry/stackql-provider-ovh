--- 
title: eligible_services
hide_title: false
hide_table_of_contents: false
keywords:
  - eligible_services
  - vrack
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

Creates, updates, deletes, gets or lists an <code>eligible_services</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="eligible_services" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.vrack.eligible_services" /></td></tr>
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
    <td><CopyableCode code="created_at" /></td>
    <td><code>string</code></td>
    <td>Creation date of the call (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="errors" /></td>
    <td><code>array</code></td>
    <td>List of services where an error has been encountered</td>
</tr>
<tr>
    <td><CopyableCode code="result" /></td>
    <td><code>object</code></td>
    <td>Eligible services for this vRack</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of the call</td>
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
    <td><a href="#parameter-service_family"><code>service_family</code></a></td>
    <td>Returns, by service family, the services that can be attached to the vRack. The eligibility check runs asynchronously: the route can be called several times until all the eligible services are returned.&lt;br /&gt;&lt;br /&gt;While the `status` is set to `pending` the results are partial.&lt;br /&gt;&lt;br /&gt;Once the `status` is set to `done`, all the eligible services have been found.&lt;br /&gt;&lt;br /&gt;In the eventuality of errors getting specific service types, the errors will be listed in the `errors` field.</td>
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
    <td>The internal name of your vrack (wire: serviceName)</td>
</tr>
<tr id="parameter-service_family">
    <td><CopyableCode code="service_family" /></td>
    <td><code>string</code></td>
    <td>serviceFamily allows to filter on a specific service family (wire: serviceFamily)</td>
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

Returns, by service family, the services that can be attached to the vRack. The eligibility check runs asynchronously: the route can be called several times until all the eligible services are returned.&lt;br /&gt;&lt;br /&gt;While the `status` is set to `pending` the results are partial.&lt;br /&gt;&lt;br /&gt;Once the `status` is set to `done`, all the eligible services have been found.&lt;br /&gt;&lt;br /&gt;In the eventuality of errors getting specific service types, the errors will be listed in the `errors` field.

```sql
SELECT
created_at,
errors,
result,
status
FROM ovh.vrack.eligible_services
WHERE service_name = '{{ service_name }}' -- required
AND service_family = '{{ service_family }}'
;
```
</TabItem>
</Tabs>
