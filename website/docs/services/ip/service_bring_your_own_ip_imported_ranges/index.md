--- 
title: service_bring_your_own_ip_imported_ranges
hide_title: false
hide_table_of_contents: false
keywords:
  - service_bring_your_own_ip_imported_ranges
  - ip
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

Creates, updates, deletes, gets or lists a <code>service_bring_your_own_ip_imported_ranges</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="service_bring_your_own_ip_imported_ranges" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.ip.service_bring_your_own_ip_imported_ranges" /></td></tr>
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
    <td><CopyableCode code="as_number" /></td>
    <td><code>integer</code></td>
    <td>AS number used to annouce the IP in BGP (wire: asNumber)</td>
</tr>
<tr>
    <td><CopyableCode code="as_rir" /></td>
    <td><code>string</code></td>
    <td>AS number's RIR (wire: asRir)</td>
</tr>
<tr>
    <td><CopyableCode code="ip" /></td>
    <td><code>string (ip-block)</code></td>
    <td>Imported IP range (example: 192.0.2.0/24)</td>
</tr>
<tr>
    <td><CopyableCode code="ip_rir" /></td>
    <td><code>string</code></td>
    <td>IP's RIR (wire: ipRir)</td>
</tr>
<tr>
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>IP's region (af-central-lz-abj, af-north-lz-rba, ap-south-lz-akl, ap-south-lz-blr, ap-south-lz-icd, ap-south-mum, ap-southeast-sgp, ap-southeast-syd, ca-east-bhs, ca-east-tor, eu-central-lz-buh, eu-central-lz-sof, eu-central-waw, eu-east-lz-prg, eu-north-lz-cph, eu-north-lz-hel, eu-north-lz-osl, eu-north-lz-sto, eu-south-lz-lis, eu-south-lz-mad, eu-south-lz-mil, eu-south-mil, eu-west-eri, eu-west-gra, eu-west-lim, eu-west-lz-ams, eu-west-lz-bru, eu-west-lz-dln, eu-west-lz-lux, eu-west-lz-mnc, eu-west-lz-mrs, eu-west-lz-vie, eu-west-lz-zrh, eu-west-par, eu-west-rbx, eu-west-sbg, me-south-lz-dxb, sa-central-lz-mex, sa-east-lz-sao, sa-west-lz-bue, sa-west-lz-scl, us-central-lz-slc, us-central-lz-stl, us-east-lz-atl, us-east-lz-bos, us-east-lz-chi, us-east-lz-dal, us-east-lz-mia, us-east-lz-nyc, us-east-vin, us-west-hil, us-west-lz-den, us-west-lz-lax, us-west-lz-pao, us-west-lz-phx, us-west-lz-sea)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>integer</code></td>
    <td>IP's version (4, 6)</td>
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
    <td>Get the imported range. Returns the imported range, its RIR and region, and the AS number that announces it. (Beta version)</td>
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
    <td>The internal name of your IP services (wire: serviceName)</td>
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

Get the imported range. Returns the imported range, its RIR and region, and the AS number that announces it. (Beta version)

```sql
SELECT
as_number,
as_rir,
ip,
ip_rir,
region,
version
FROM ovh.ip.service_bring_your_own_ip_imported_ranges
WHERE service_name = '{{ service_name }}' -- required
;
```
</TabItem>
</Tabs>
