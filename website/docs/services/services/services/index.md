--- 
title: services
hide_title: false
hide_table_of_contents: false
keywords:
  - services
  - services
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

Creates, updates, deletes, gets or lists a <code>services</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="services" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.services.services" /></td></tr>
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
    <td><CopyableCode code="parent_service_id" /></td>
    <td><code>integer</code></td>
    <td>Parent service ID (wire: parentServiceId)</td>
</tr>
<tr>
    <td><CopyableCode code="service_id" /></td>
    <td><code>integer</code></td>
    <td>Service ID (wire: serviceId)</td>
</tr>
<tr>
    <td><CopyableCode code="billing" /></td>
    <td><code>object</code></td>
    <td>Billing information</td>
</tr>
<tr>
    <td><CopyableCode code="customer" /></td>
    <td><code>object</code></td>
    <td>Customer information</td>
</tr>
<tr>
    <td><CopyableCode code="resource" /></td>
    <td><code>object</code></td>
    <td>Resource</td>
</tr>
<tr>
    <td><CopyableCode code="route" /></td>
    <td><code>object</code></td>
    <td>Route</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>Service tags</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Description of a service

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
    <td><CopyableCode code="parent_service_id" /></td>
    <td><code>integer</code></td>
    <td>Parent service ID (wire: parentServiceId)</td>
</tr>
<tr>
    <td><CopyableCode code="service_id" /></td>
    <td><code>integer</code></td>
    <td>Service ID (wire: serviceId)</td>
</tr>
<tr>
    <td><CopyableCode code="billing" /></td>
    <td><code>object</code></td>
    <td>Billing information</td>
</tr>
<tr>
    <td><CopyableCode code="customer" /></td>
    <td><code>object</code></td>
    <td>Customer information</td>
</tr>
<tr>
    <td><CopyableCode code="resource" /></td>
    <td><code>object</code></td>
    <td>Resource</td>
</tr>
<tr>
    <td><CopyableCode code="route" /></td>
    <td><code>object</code></td>
    <td>Route</td>
</tr>
<tr>
    <td><CopyableCode code="tags" /></td>
    <td><code>array</code></td>
    <td>Service tags</td>
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
    <td><a href="#parameter-service_id"><code>service_id</code></a></td>
    <td></td>
    <td>Get details about a service (Beta version)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-order_by"><code>order_by</code></a>, <a href="#parameter-resource_name"><code>resource_name</code></a>, <a href="#parameter-routes"><code>routes</code></a>, <a href="#parameter-sort"><code>sort</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List available services (Beta version)</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-service_id"><code>service_id</code></a></td>
    <td></td>
    <td>Update service information (Beta version)</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-service_id"><code>service_id</code></a></td>
    <td></td>
    <td>Delete a service without asking for confirmation (Beta version)</td>
</tr>
<tr>
    <td><a href="#savings_plans_subscribe_execute"><CopyableCode code="savings_plans_subscribe_execute" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceId"><code>serviceId</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-offerId"><code>offerId</code></a>, <a href="#parameter-size"><code>size</code></a></td>
    <td></td>
    <td>Subscribe to a Savings Plan, applicable contracts will be automatically agreed to.</td>
</tr>
<tr>
    <td><a href="#savings_plans_subscribe_simulate"><CopyableCode code="savings_plans_subscribe_simulate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceId"><code>serviceId</code></a>, <a href="#parameter-displayName"><code>displayName</code></a>, <a href="#parameter-offerId"><code>offerId</code></a>, <a href="#parameter-size"><code>size</code></a></td>
    <td></td>
    <td>Simulate a Subscription to a Savings Plan</td>
</tr>
<tr>
    <td><a href="#terminate"><CopyableCode code="terminate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceId"><code>serviceId</code></a></td>
    <td></td>
    <td>Request service termination (Beta version)</td>
</tr>
<tr>
    <td><a href="#terminate_confirm"><CopyableCode code="terminate_confirm" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceId"><code>serviceId</code></a>, <a href="#parameter-token"><code>token</code></a></td>
    <td></td>
    <td>Confirm service termination (Beta version)</td>
</tr>
<tr>
    <td><a href="#terminate_skip_retention_period"><CopyableCode code="terminate_skip_retention_period" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceId"><code>serviceId</code></a></td>
    <td></td>
    <td>Immediately release the resources associated to this Service. This API can be called on services that are already terminated (Beta version)</td>
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
<tr id="parameter-serviceId">
    <td><CopyableCode code="serviceId" /></td>
    <td><code>integer</code></td>
    <td>Service ID</td>
</tr>
<tr id="parameter-service_id">
    <td><CopyableCode code="service_id" /></td>
    <td><code>integer</code></td>
    <td>Service ID (wire: serviceId)</td>
</tr>
<tr id="parameter-order_by">
    <td><CopyableCode code="order_by" /></td>
    <td><code>string</code></td>
    <td>Order services by services.expanded.Service properties (wire: orderBy)</td>
</tr>
<tr id="parameter-resource_name">
    <td><CopyableCode code="resource_name" /></td>
    <td><code>string</code></td>
    <td>Filter services by their resourceName (resource.name) (wire: resourceName)</td>
</tr>
<tr id="parameter-routes">
    <td><CopyableCode code="routes" /></td>
    <td><code>string</code></td>
    <td>Filter services by API route path (comma separated)</td>
</tr>
<tr id="parameter-sort">
    <td><CopyableCode code="sort" /></td>
    <td><code>string</code></td>
    <td>Sort results generated by 'orderBy'</td>
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

Get details about a service (Beta version)

```sql
SELECT
parent_service_id,
service_id,
billing,
customer,
resource,
route,
tags
FROM ovh.services.services
WHERE service_id = '{{ service_id }}' -- required
;
```
</TabItem>
<TabItem value="list">

List available services (Beta version)

```sql
SELECT
parent_service_id,
service_id,
billing,
customer,
resource,
route,
tags
FROM ovh.services.services
WHERE order_by = '{{ order_by }}'
AND resource_name = '{{ resource_name }}'
AND routes = '{{ routes }}'
AND sort = '{{ sort }}'
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

Update service information (Beta version)

```sql
UPDATE ovh.services.services
SET 
display_name = '{{ display_name }}',
renew = '{{ renew }}',
termination_policy = '{{ termination_policy }}'
WHERE 
service_id = '{{ service_id }}' --required;
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

Delete a service without asking for confirmation (Beta version)

```sql
DELETE FROM ovh.services.services
WHERE service_id = '{{ service_id }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="savings_plans_subscribe_execute"
    values={[
        { label: 'savings_plans_subscribe_execute', value: 'savings_plans_subscribe_execute' },
        { label: 'savings_plans_subscribe_simulate', value: 'savings_plans_subscribe_simulate' },
        { label: 'terminate', value: 'terminate' },
        { label: 'terminate_confirm', value: 'terminate_confirm' },
        { label: 'terminate_skip_retention_period', value: 'terminate_skip_retention_period' }
    ]}
>
<TabItem value="savings_plans_subscribe_execute">

Subscribe to a Savings Plan, applicable contracts will be automatically agreed to.

```sql
EXEC ovh.services.services.savings_plans_subscribe_execute 
@serviceId='{{ serviceId }}' --required 
@@json=
'{
"displayName": "{{ displayName }}", 
"offerId": "{{ offerId }}", 
"size": {{ size }}, 
"startDate": "{{ startDate }}"
}'
;
```
</TabItem>
<TabItem value="savings_plans_subscribe_simulate">

Simulate a Subscription to a Savings Plan

```sql
EXEC ovh.services.services.savings_plans_subscribe_simulate 
@serviceId='{{ serviceId }}' --required 
@@json=
'{
"displayName": "{{ displayName }}", 
"offerId": "{{ offerId }}", 
"size": {{ size }}, 
"startDate": "{{ startDate }}"
}'
;
```
</TabItem>
<TabItem value="terminate">

Request service termination (Beta version)

```sql
EXEC ovh.services.services.terminate 
@serviceId='{{ serviceId }}' --required
;
```
</TabItem>
<TabItem value="terminate_confirm">

Confirm service termination (Beta version)

```sql
EXEC ovh.services.services.terminate_confirm 
@serviceId='{{ serviceId }}' --required 
@@json=
'{
"token": "{{ token }}"
}'
;
```
</TabItem>
<TabItem value="terminate_skip_retention_period">

Immediately release the resources associated to this Service. This API can be called on services that are already terminated (Beta version)

```sql
EXEC ovh.services.services.terminate_skip_retention_period 
@serviceId='{{ serviceId }}' --required
;
```
</TabItem>
</Tabs>
