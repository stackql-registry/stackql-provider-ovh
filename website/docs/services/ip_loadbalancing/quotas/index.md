--- 
title: quotas
hide_title: false
hide_table_of_contents: false
keywords:
  - quotas
  - ip_loadbalancing
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

Creates, updates, deletes, gets or lists a <code>quotas</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="quotas" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.ip_loadbalancing.quotas" /></td></tr>
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
    <td><CopyableCode code="alert" /></td>
    <td><code>integer</code></td>
    <td>Quota alert value in bytes. When reached, we will send you an alert. Default : included quota with your offer</td>
</tr>
<tr>
    <td><CopyableCode code="included" /></td>
    <td><code>integer</code></td>
    <td>Included quota value with your offer, in bytes</td>
</tr>
<tr>
    <td><CopyableCode code="last_update_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time your quota was updated from your Load Balancer instance (wire: lastUpdateDate)</td>
</tr>
<tr>
    <td><CopyableCode code="reset_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time your quota was resetted (billed) (wire: resetDate)</td>
</tr>
<tr>
    <td><CopyableCode code="total" /></td>
    <td><code>integer</code></td>
    <td>Total used quota value in bytes</td>
</tr>
<tr>
    <td><CopyableCode code="zone" /></td>
    <td><code>string</code></td>
    <td>Zone of your quota</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Quota informations for current billing period for this zone

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
    <td><CopyableCode code="alert" /></td>
    <td><code>integer</code></td>
    <td>Quota alert value in bytes. When reached, we will send you an alert. Default : included quota with your offer</td>
</tr>
<tr>
    <td><CopyableCode code="included" /></td>
    <td><code>integer</code></td>
    <td>Included quota value with your offer, in bytes</td>
</tr>
<tr>
    <td><CopyableCode code="last_update_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time your quota was updated from your Load Balancer instance (wire: lastUpdateDate)</td>
</tr>
<tr>
    <td><CopyableCode code="reset_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>The last time your quota was resetted (billed) (wire: resetDate)</td>
</tr>
<tr>
    <td><CopyableCode code="total" /></td>
    <td><code>integer</code></td>
    <td>Total used quota value in bytes</td>
</tr>
<tr>
    <td><CopyableCode code="zone" /></td>
    <td><code>string</code></td>
    <td>Zone of your quota</td>
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
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-zone"><code>zone</code></a></td>
    <td></td>
    <td>Get a zone quota</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List quotas per zone</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-zone"><code>zone</code></a></td>
    <td></td>
    <td>Update a zone quota</td>
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
    <td>The internal name of your IP load balancing (wire: serviceName)</td>
</tr>
<tr id="parameter-zone">
    <td><CopyableCode code="zone" /></td>
    <td><code>string</code></td>
    <td>Zone of your quota</td>
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

Get a zone quota

```sql
SELECT
alert,
included,
last_update_date,
reset_date,
total,
zone
FROM ovh.ip_loadbalancing.quotas
WHERE service_name = '{{ service_name }}' -- required
AND zone = '{{ zone }}' -- required
;
```
</TabItem>
<TabItem value="list">

List quotas per zone

```sql
SELECT
alert,
included,
last_update_date,
reset_date,
total,
zone
FROM ovh.ip_loadbalancing.quotas
WHERE service_name = '{{ service_name }}' -- required
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

Update a zone quota

```sql
UPDATE ovh.ip_loadbalancing.quotas
SET 
alert = {{ alert }}
WHERE 
service_name = '{{ service_name }}' --required
AND zone = '{{ zone }}' --required;
```
</TabItem>
</Tabs>
