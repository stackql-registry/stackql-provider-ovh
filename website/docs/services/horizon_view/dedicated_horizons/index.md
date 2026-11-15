--- 
title: dedicated_horizons
hide_title: false
hide_table_of_contents: false
keywords:
  - dedicated_horizons
  - horizon_view
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

Creates, updates, deletes, gets or lists a <code>dedicated_horizons</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="dedicated_horizons" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.horizon_view.dedicated_horizons" /></td></tr>
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
    <td><CopyableCode code="private_cloud_name" /></td>
    <td><code>string</code></td>
    <td>Your Horizon Dedicated Cloud  (wire: privateCloudName)</td>
</tr>
<tr>
    <td><CopyableCode code="master_zone" /></td>
    <td><code>string</code></td>
    <td>The location of your administration servers in our datacenter (Beauharnois, Roubaix, Strasbourg) (wire: masterZone)</td>
</tr>
<tr>
    <td><CopyableCode code="private_cloud_zone" /></td>
    <td><code>string</code></td>
    <td>The location of your datacenter (Beauharnois, Roubaix, Strasbourg) (wire: privateCloudZone)</td>
</tr>
<tr>
    <td><CopyableCode code="public_url" /></td>
    <td><code>string</code></td>
    <td>Url of your Dedicated Horizon (wire: publicUrl)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Current state of your Dedicated Horizon (available, creating, delivered, disabled, error, reserved)</td>
</tr>
<tr>
    <td><CopyableCode code="storage_accelerator" /></td>
    <td><code>boolean</code></td>
    <td>View Storage Accelerator for Vcenter (wire: storageAccelerator)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>Version of your Dedicated Horizon</td>
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
    <td></td>
    <td>Get this object properties</td>
</tr>
<tr>
    <td><a href="#disable_storage_accelerator"><CopyableCode code="disable_storage_accelerator" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Disable the View Storage Accelerator option on VCenter</td>
</tr>
<tr>
    <td><a href="#enable_storage_accelerator"><CopyableCode code="enable_storage_accelerator" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Enable the View Storage Accelerator option on VCenter</td>
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
<tr id="parameter-serviceName">
    <td><CopyableCode code="serviceName" /></td>
    <td><code>string</code></td>
    <td>Domain of the service</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>Domain of the service (wire: serviceName)</td>
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

Get this object properties

```sql
SELECT
private_cloud_name,
master_zone,
private_cloud_zone,
public_url,
state,
storage_accelerator,
version
FROM ovh.horizon_view.dedicated_horizons
WHERE service_name = '{{ service_name }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="disable_storage_accelerator"
    values={[
        { label: 'disable_storage_accelerator', value: 'disable_storage_accelerator' },
        { label: 'enable_storage_accelerator', value: 'enable_storage_accelerator' }
    ]}
>
<TabItem value="disable_storage_accelerator">

Disable the View Storage Accelerator option on VCenter

```sql
EXEC ovh.horizon_view.dedicated_horizons.disable_storage_accelerator 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
<TabItem value="enable_storage_accelerator">

Enable the View Storage Accelerator option on VCenter

```sql
EXEC ovh.horizon_view.dedicated_horizons.enable_storage_accelerator 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
</Tabs>
