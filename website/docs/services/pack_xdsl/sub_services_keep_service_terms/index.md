--- 
title: sub_services_keep_service_terms
hide_title: false
hide_table_of_contents: false
keywords:
  - sub_services_keep_service_terms
  - pack_xdsl
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

Creates, updates, deletes, gets or lists a <code>sub_services_keep_service_terms</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="sub_services_keep_service_terms" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.pack_xdsl.sub_services_keep_service_terms" /></td></tr>
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
    <td><CopyableCode code="is_allowed" /></td>
    <td><code>boolean</code></td>
    <td>Tells whether or not the service can be unpacked (wire: isAllowed)</td>
</tr>
<tr>
    <td><CopyableCode code="price" /></td>
    <td><code>object</code></td>
    <td>Price bill on the unpack action</td>
</tr>
<tr>
    <td><CopyableCode code="renew_period" /></td>
    <td><code>number</code></td>
    <td>Renew period in month of the service (wire: renewPeriod)</td>
</tr>
<tr>
    <td><CopyableCode code="renew_price" /></td>
    <td><code>object</code></td>
    <td>The price it will cost when it will be renew (wire: renewPrice)</td>
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
    <td><a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-pack_name"><code>pack_name</code></a></td>
    <td></td>
    <td>Get the unpack terms of a service of an xDSL pack. Returns whether the service can be taken out of the pack, the price billed and its renewal price and period.</td>
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
<tr id="parameter-domain">
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-pack_name">
    <td><CopyableCode code="pack_name" /></td>
    <td><code>string</code></td>
    <td>The internal name of your pack (wire: packName)</td>
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

Get the unpack terms of a service of an xDSL pack. Returns whether the service can be taken out of the pack, the price billed and its renewal price and period.

```sql
SELECT
is_allowed,
price,
renew_period,
renew_price
FROM ovh.pack_xdsl.sub_services_keep_service_terms
WHERE domain = '{{ domain }}' -- required
AND pack_name = '{{ pack_name }}' -- required
;
```
</TabItem>
</Tabs>
