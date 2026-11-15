--- 
title: organization_virtual_data_center_orderable_resources
hide_title: false
hide_table_of_contents: false
keywords:
  - organization_virtual_data_center_orderable_resources
  - vmware_cloud_director
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

Creates, updates, deletes, gets or lists an <code>organization_virtual_data_center_orderable_resources</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="organization_virtual_data_center_orderable_resources" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.vmware_cloud_director.organization_virtual_data_center_orderable_resources" /></td></tr>
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
    <td><CopyableCode code="compute" /></td>
    <td><code>array</code></td>
    <td>Available orderable compute resources to your organization Virtual DataCenter</td>
</tr>
<tr>
    <td><CopyableCode code="storage" /></td>
    <td><code>array</code></td>
    <td>Available orderable storage resources to your organization Virtual DataCenter</td>
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
    <td><a href="#parameter-organization_id"><code>organization_id</code></a>, <a href="#parameter-virtual_data_center_id"><code>virtual_data_center_id</code></a></td>
    <td></td>
    <td>Returns the compute and storage profiles that can be ordered for the virtual datacenter, with their quotas, vCPU speed and IOPS per TB.</td>
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
<tr id="parameter-organization_id">
    <td><CopyableCode code="organization_id" /></td>
    <td><code>string</code></td>
    <td>Organization ID (wire: organizationId)</td>
</tr>
<tr id="parameter-virtual_data_center_id">
    <td><CopyableCode code="virtual_data_center_id" /></td>
    <td><code>string</code></td>
    <td>Virtual data center ID (wire: virtualDataCenterId)</td>
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

Returns the compute and storage profiles that can be ordered for the virtual datacenter, with their quotas, vCPU speed and IOPS per TB.

```sql
SELECT
compute,
storage
FROM ovh.vmware_cloud_director.organization_virtual_data_center_orderable_resources
WHERE organization_id = '{{ organization_id }}' -- required
AND virtual_data_center_id = '{{ virtual_data_center_id }}' -- required
;
```
</TabItem>
</Tabs>
