--- 
title: resource_eligible_bgp_allowed_prefixes
hide_title: false
hide_table_of_contents: false
keywords:
  - resource_eligible_bgp_allowed_prefixes
  - vrack_services
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

Creates, updates, deletes, gets or lists a <code>resource_eligible_bgp_allowed_prefixes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resource_eligible_bgp_allowed_prefixes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.vrack_services.resource_eligible_bgp_allowed_prefixes" /></td></tr>
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
    <td><CopyableCode code="ipv_4" /></td>
    <td><code>array</code></td>
    <td>List of eligible IPv4 prefixes (wire: ipv4)</td>
</tr>
<tr>
    <td><CopyableCode code="ipv_6" /></td>
    <td><code>array</code></td>
    <td>List of eligible IPv6 prefixes (wire: ipv6)</td>
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
    <td><a href="#parameter-vrack_services_id"><code>vrack_services_id</code></a></td>
    <td></td>
    <td>Returns the Additional IPv4 and IPv6 blocks that can be used in the BGP Service of the vRack Services: blocks in the same region that are not used elsewhere.</td>
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
<tr id="parameter-vrack_services_id">
    <td><CopyableCode code="vrack_services_id" /></td>
    <td><code>string</code></td>
    <td>Vrack services ID (wire: vrackServicesId)</td>
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

Returns the Additional IPv4 and IPv6 blocks that can be used in the BGP Service of the vRack Services: blocks in the same region that are not used elsewhere.

```sql
SELECT
ipv_4,
ipv_6
FROM ovh.vrack_services.resource_eligible_bgp_allowed_prefixes
WHERE vrack_services_id = '{{ vrack_services_id }}' -- required
;
```
</TabItem>
</Tabs>
