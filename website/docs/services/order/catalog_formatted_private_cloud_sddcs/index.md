--- 
title: catalog_formatted_private_cloud_sddcs
hide_title: false
hide_table_of_contents: false
keywords:
  - catalog_formatted_private_cloud_sddcs
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

Creates, updates, deletes, gets or lists a <code>catalog_formatted_private_cloud_sddcs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="catalog_formatted_private_cloud_sddcs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.order.catalog_formatted_private_cloud_sddcs" /></td></tr>
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
    <td>Catalog ID (wire: catalogId)</td>
</tr>
<tr>
    <td><CopyableCode code="catalog_name" /></td>
    <td><code>string</code></td>
    <td>Catalog name (wire: catalogName)</td>
</tr>
<tr>
    <td><CopyableCode code="default_hypervisor" /></td>
    <td><code>string</code></td>
    <td>Default hypervisor for this catalog (wire: defaultHypervisor)</td>
</tr>
<tr>
    <td><CopyableCode code="default_zone" /></td>
    <td><code>string</code></td>
    <td>Default datacenter for this catalog (wire: defaultZone)</td>
</tr>
<tr>
    <td><CopyableCode code="merchant_code" /></td>
    <td><code>string</code></td>
    <td>OVH Subsidiary of the Catalog (wire: merchantCode)</td>
</tr>
<tr>
    <td><CopyableCode code="options" /></td>
    <td><code>object</code></td>
    <td>Describe all capabilities of different types of service</td>
</tr>
<tr>
    <td><CopyableCode code="zones" /></td>
    <td><code>object</code></td>
    <td>Zone definitions per datacenters</td>
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
    <td>Retrieve information of Dedicated Cloud SDDC catalog (Deprecated, will be removed)</td>
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
    <td>Subsidiary of the country you want to consult catalog (wire: ovhSubsidiary)</td>
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

Retrieve information of Dedicated Cloud SDDC catalog (Deprecated, will be removed)

```sql
SELECT
catalog_id,
catalog_name,
default_hypervisor,
default_zone,
merchant_code,
options,
zones
FROM ovh.order.catalog_formatted_private_cloud_sddcs
WHERE ovh_subsidiary = '{{ ovh_subsidiary }}' -- required
;
```
</TabItem>
</Tabs>
