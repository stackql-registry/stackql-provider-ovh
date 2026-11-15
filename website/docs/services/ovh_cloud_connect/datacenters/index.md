--- 
title: datacenters
hide_title: false
hide_table_of_contents: false
keywords:
  - datacenters
  - ovh_cloud_connect
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

Creates, updates, deletes, gets or lists a <code>datacenters</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="datacenters" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.ovh_cloud_connect.datacenters" /></td></tr>
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
    <td>ID of the datacenter</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>name of the datacenter</td>
</tr>
<tr>
    <td><CopyableCode code="available" /></td>
    <td><code>boolean</code></td>
    <td>Get availability to add new configuration on it</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>region of the datacenter (af-north-lz-rba, ap-south-mum, ap-southeast-sgp, ap-southeast-syd, ca-east-bhs, ca-east-tor, eu-central-lz-buh, eu-central-lz-prg, eu-central-lz-sof, eu-central-waw, eu-north-lz-cph, eu-north-lz-hel, eu-north-lz-osl, eu-north-lz-sto, eu-south-lz-lis, eu-south-lz-mad, eu-south-lz-mil, eu-south-mil, eu-west-eri, eu-west-gra, eu-west-gra-snc, eu-west-lim, eu-west-lz-ams, eu-west-lz-bru, eu-west-lz-dln, eu-west-lz-lux, eu-west-lz-mnc, eu-west-lz-mrs, eu-west-lz-vie, eu-west-lz-zrh, eu-west-par, eu-west-rbx, eu-west-rbx-snc, eu-west-sbg, eu-west-sbg-snc, us-central-lz-slc, us-central-lz-stl, us-east-lz-atl, us-east-lz-bos, us-east-lz-chi, us-east-lz-dal, us-east-lz-mia, us-east-lz-nyc, us-east-vin, us-west-hil, us-west-lz-den, us-west-lz-lax, us-west-lz-pao, us-west-lz-sea)</td>
</tr>
<tr>
    <td><CopyableCode code="region_type" /></td>
    <td><code>string</code></td>
    <td>region type of the datacenter (1-AZ, 3-AZ) (wire: regionType)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

OVHcloud Connect Datacenter

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
    <td>ID of the datacenter</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>name of the datacenter</td>
</tr>
<tr>
    <td><CopyableCode code="available" /></td>
    <td><code>boolean</code></td>
    <td>Get availability to add new configuration on it</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>region of the datacenter (af-north-lz-rba, ap-south-mum, ap-southeast-sgp, ap-southeast-syd, ca-east-bhs, ca-east-tor, eu-central-lz-buh, eu-central-lz-prg, eu-central-lz-sof, eu-central-waw, eu-north-lz-cph, eu-north-lz-hel, eu-north-lz-osl, eu-north-lz-sto, eu-south-lz-lis, eu-south-lz-mad, eu-south-lz-mil, eu-south-mil, eu-west-eri, eu-west-gra, eu-west-gra-snc, eu-west-lim, eu-west-lz-ams, eu-west-lz-bru, eu-west-lz-dln, eu-west-lz-lux, eu-west-lz-mnc, eu-west-lz-mrs, eu-west-lz-vie, eu-west-lz-zrh, eu-west-par, eu-west-rbx, eu-west-rbx-snc, eu-west-sbg, eu-west-sbg-snc, us-central-lz-slc, us-central-lz-stl, us-east-lz-atl, us-east-lz-bos, us-east-lz-chi, us-east-lz-dal, us-east-lz-mia, us-east-lz-nyc, us-east-vin, us-west-hil, us-west-lz-den, us-west-lz-lax, us-west-lz-pao, us-west-lz-sea)</td>
</tr>
<tr>
    <td><CopyableCode code="region_type" /></td>
    <td><code>string</code></td>
    <td>region type of the datacenter (1-AZ, 3-AZ) (wire: regionType)</td>
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
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Returns the availability zone's name, region, 1-AZ or 3-AZ type, and whether it accepts a new configuration.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>Returns the IDs of the availability zones this service can connect to.</td>
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
    <td>Id</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string (uuid)</code></td>
    <td>Service name (wire: serviceName)</td>
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

Returns the availability zone's name, region, 1-AZ or 3-AZ type, and whether it accepts a new configuration.

```sql
SELECT
id,
name,
available,
region,
region_type
FROM ovh.ovh_cloud_connect.datacenters
WHERE id = '{{ id }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns the IDs of the availability zones this service can connect to.

```sql
SELECT
id,
name,
available,
region,
region_type
FROM ovh.ovh_cloud_connect.datacenters
WHERE service_name = '{{ service_name }}' -- required
AND x_pagination_mode = '{{ x_pagination_mode }}'
;
```
</TabItem>
</Tabs>
