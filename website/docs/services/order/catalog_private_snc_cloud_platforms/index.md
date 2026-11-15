--- 
title: catalog_private_snc_cloud_platforms
hide_title: false
hide_table_of_contents: false
keywords:
  - catalog_private_snc_cloud_platforms
  - order
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

Creates, updates, deletes, gets or lists a <code>catalog_private_snc_cloud_platforms</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="catalog_private_snc_cloud_platforms" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.order.catalog_private_snc_cloud_platforms" /></td></tr>
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
    <td><CopyableCode code="catalog_id" /></td>
    <td><code>integer</code></td>
    <td>Identifier of the catalog (wire: catalogId)</td>
</tr>
<tr>
    <td><CopyableCode code="addons" /></td>
    <td><code>array</code></td>
    <td>List of addons of the catalog</td>
</tr>
<tr>
    <td><CopyableCode code="locale" /></td>
    <td><code>object</code></td>
    <td>Subsidiary specific information</td>
</tr>
<tr>
    <td><CopyableCode code="plan_families" /></td>
    <td><code>array</code></td>
    <td>List of plan families of the catalog (wire: planFamilies)</td>
</tr>
<tr>
    <td><CopyableCode code="plans" /></td>
    <td><code>array</code></td>
    <td>List of main plans of the catalog</td>
</tr>
<tr>
    <td><CopyableCode code="products" /></td>
    <td><code>array</code></td>
    <td>List of products of the catalog</td>
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
    <td><a href="#parameter-ovh_subsidiary"><code>ovh_subsidiary</code></a></td>
    <td></td>
    <td>Retrieve information of domain reseller catalog</td>
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
<tr id="parameter-ovh_subsidiary">
    <td><CopyableCode code="ovh_subsidiary" /></td>
    <td><code>string</code></td>
    <td>Subsidiary of the country you want to consult private domain reseller catalog (wire: ovhSubsidiary)</td>
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

Retrieve information of domain reseller catalog

```sql
SELECT
catalog_id,
addons,
locale,
plan_families,
plans,
products
FROM ovh.order.catalog_private_snc_cloud_platforms
WHERE ovh_subsidiary = '{{ ovh_subsidiary }}' -- required
;
```
</TabItem>
</Tabs>
