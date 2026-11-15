--- 
title: agreements
hide_title: false
hide_table_of_contents: false
keywords:
  - agreements
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

Creates, updates, deletes, gets or lists an <code>agreements</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="agreements" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.me.agreements" /></td></tr>
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
    <td><CopyableCode code="id" /></td>
    <td><code>integer</code></td>
    <td>Id of the contract</td>
</tr>
<tr>
    <td><CopyableCode code="contract_id" /></td>
    <td><code>integer</code></td>
    <td>Id of the agreed contract (wire: contractId)</td>
</tr>
<tr>
    <td><CopyableCode code="agreed" /></td>
    <td><code>string</code></td>
    <td>State of the agreement (ko, obsolete, ok, todo)</td>
</tr>
<tr>
    <td><CopyableCode code="date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date the agreed contract was effective</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Contract agreement

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
    <td><CopyableCode code="id" /></td>
    <td><code>integer</code></td>
    <td>Id of the contract</td>
</tr>
<tr>
    <td><CopyableCode code="contract_id" /></td>
    <td><code>integer</code></td>
    <td>Id of the agreed contract (wire: contractId)</td>
</tr>
<tr>
    <td><CopyableCode code="agreed" /></td>
    <td><code>string</code></td>
    <td>State of the agreement (ko, obsolete, ok, todo)</td>
</tr>
<tr>
    <td><CopyableCode code="date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date the agreed contract was effective</td>
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
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Get this object properties</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-agreed"><code>agreed</code></a>, <a href="#parameter-contract_id"><code>contract_id</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List of contracts signed between you and OVH</td>
</tr>
<tr>
    <td><a href="#accept"><CopyableCode code="accept" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Accept this contract</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>integer</code></td>
    <td>Id of the contract</td>
</tr>
<tr id="parameter-agreed">
    <td><CopyableCode code="agreed" /></td>
    <td><code>string</code></td>
    <td>Filter the value of agreed property (like)</td>
</tr>
<tr id="parameter-contract_id">
    <td><CopyableCode code="contract_id" /></td>
    <td><code>integer</code></td>
    <td>Filter the value of contractId property (like) (wire: contractId)</td>
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

Get this object properties

```sql
SELECT
id,
contract_id,
agreed,
date
FROM ovh.me.agreements
WHERE id = '{{ id }}' -- required
;
```
</TabItem>
<TabItem value="list">

List of contracts signed between you and OVH

```sql
SELECT
id,
contract_id,
agreed,
date
FROM ovh.me.agreements
WHERE agreed = '{{ agreed }}'
AND contract_id = '{{ contract_id }}'
AND x_pagination_mode = '{{ x_pagination_mode }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="accept"
    values={[
        { label: 'accept', value: 'accept' }
    ]}
>
<TabItem value="accept">

Accept this contract

```sql
EXEC ovh.me.agreements.accept 
@id='{{ id }}' --required
;
```
</TabItem>
</Tabs>
