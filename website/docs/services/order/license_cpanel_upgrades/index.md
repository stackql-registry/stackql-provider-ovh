--- 
title: license_cpanel_upgrades
hide_title: false
hide_table_of_contents: false
keywords:
  - license_cpanel_upgrades
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

Creates, updates, deletes, gets or lists a <code>license_cpanel_upgrades</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="license_cpanel_upgrades" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.order.license_cpanel_upgrades" /></td></tr>
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
    <td><CopyableCode code="order_id" /></td>
    <td><code>integer</code></td>
    <td>Identifier of the order (wire: orderId)</td>
</tr>
<tr>
    <td><CopyableCode code="contracts" /></td>
    <td><code>array</code></td>
    <td>List of contracts related to the order</td>
</tr>
<tr>
    <td><CopyableCode code="details" /></td>
    <td><code>array</code></td>
    <td>Details of the order</td>
</tr>
<tr>
    <td><CopyableCode code="prices" /></td>
    <td><code>object</code></td>
    <td>Prices of the order including with and without taxes</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td>URL to download the order</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

An order

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
    <td><CopyableCode code="order_id" /></td>
    <td><code>integer</code></td>
    <td>Identifier of the order (wire: orderId)</td>
</tr>
<tr>
    <td><CopyableCode code="contracts" /></td>
    <td><code>array</code></td>
    <td>List of contracts related to the order</td>
</tr>
<tr>
    <td><CopyableCode code="details" /></td>
    <td><code>array</code></td>
    <td>Details of the order</td>
</tr>
<tr>
    <td><CopyableCode code="prices" /></td>
    <td><code>object</code></td>
    <td>Prices of the order including with and without taxes</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td>URL to download the order</td>
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
    <td><a href="#parameter-duration"><code>duration</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-version"><code>version</code></a></td>
    <td></td>
    <td>Get prices and contracts information</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-version"><code>version</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>Get allowed durations for 'upgrade' option</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-duration"><code>duration</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-version"><code>version</code></a></td>
    <td></td>
    <td>Create order</td>
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
<tr id="parameter-duration">
    <td><CopyableCode code="duration" /></td>
    <td><code>string</code></td>
    <td>Duration</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The name of your Cpanel license (wire: serviceName)</td>
</tr>
<tr id="parameter-version">
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>Wanted new version</td>
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

Get prices and contracts information

```sql
SELECT
order_id,
contracts,
details,
prices,
url
FROM ovh.order.license_cpanel_upgrades
WHERE duration = '{{ duration }}' -- required
AND service_name = '{{ service_name }}' -- required
AND version = '{{ version }}' -- required
;
```
</TabItem>
<TabItem value="list">

Get allowed durations for 'upgrade' option

```sql
SELECT
order_id,
contracts,
details,
prices,
url
FROM ovh.order.license_cpanel_upgrades
WHERE service_name = '{{ service_name }}' -- required
AND version = '{{ version }}' -- required
AND x_pagination_mode = '{{ x_pagination_mode }}'
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create"
    values={[
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create">

Create order

```sql
INSERT INTO ovh.order.license_cpanel_upgrades (
version,
duration,
service_name
)
SELECT 
'{{ version }}' /* required */,
'{{ duration }}',
'{{ service_name }}'
RETURNING
order_id,
contracts,
details,
prices,
url
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: license_cpanel_upgrades
  props:
    - name: duration
      value: "{{ duration }}"
      description: Required parameter for the license_cpanel_upgrades resource.
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the license_cpanel_upgrades resource.
    - name: version
      value: "{{ version }}"
      description: |
        All versions available for Cpanel products
      valid_values: ['VERSION_11_FOR_LINUX', 'VERSION_11_FOR_VIRTUOZZO', 'VERSION_11_FOR_VPS', 'cpanel-license-admin-cloud', 'cpanel-license-plus-cloud', 'cpanel-license-premier-cloud-100-accounts', 'cpanel-license-premier-cloud-1000-accounts', 'cpanel-license-premier-cloud-10000-accounts', 'cpanel-license-premier-cloud-1100-accounts', 'cpanel-license-premier-cloud-1200-accounts', 'cpanel-license-premier-cloud-1300-accounts', 'cpanel-license-premier-cloud-1400-accounts', 'cpanel-license-premier-cloud-150-accounts', 'cpanel-license-premier-cloud-1500-accounts', 'cpanel-license-premier-cloud-1600-accounts', 'cpanel-license-premier-cloud-1700-accounts', 'cpanel-license-premier-cloud-1800-accounts', 'cpanel-license-premier-cloud-1900-accounts', 'cpanel-license-premier-cloud-200-accounts', 'cpanel-license-premier-cloud-2000-accounts', 'cpanel-license-premier-cloud-2100-accounts', 'cpanel-license-premier-cloud-2200-accounts', 'cpanel-license-premier-cloud-2300-accounts', 'cpanel-license-premier-cloud-2400-accounts', 'cpanel-license-premier-cloud-250-accounts', 'cpanel-license-premier-cloud-2500-accounts', 'cpanel-license-premier-cloud-2600-accounts', 'cpanel-license-premier-cloud-2700-accounts', 'cpanel-license-premier-cloud-2800-accounts', 'cpanel-license-premier-cloud-2900-accounts', 'cpanel-license-premier-cloud-300-accounts', 'cpanel-license-premier-cloud-3000-accounts', 'cpanel-license-premier-cloud-3100-accounts', 'cpanel-license-premier-cloud-3200-accounts', 'cpanel-license-premier-cloud-3300-accounts', 'cpanel-license-premier-cloud-3400-accounts', 'cpanel-license-premier-cloud-3500-accounts', 'cpanel-license-premier-cloud-3600-accounts', 'cpanel-license-premier-cloud-3700-accounts', 'cpanel-license-premier-cloud-3800-accounts', 'cpanel-license-premier-cloud-3900-accounts', 'cpanel-license-premier-cloud-400-accounts', 'cpanel-license-premier-cloud-4000-accounts', 'cpanel-license-premier-cloud-4100-accounts', 'cpanel-license-premier-cloud-4200-accounts', 'cpanel-license-premier-cloud-4300-accounts', 'cpanel-license-premier-cloud-4400-accounts', 'cpanel-license-premier-cloud-4500-accounts', 'cpanel-license-premier-cloud-4600-accounts', 'cpanel-license-premier-cloud-4700-accounts', 'cpanel-license-premier-cloud-4800-accounts', 'cpanel-license-premier-cloud-4900-accounts', 'cpanel-license-premier-cloud-500-accounts', 'cpanel-license-premier-cloud-5000-accounts', 'cpanel-license-premier-cloud-5100-accounts', 'cpanel-license-premier-cloud-5200-accounts', 'cpanel-license-premier-cloud-5300-accounts', 'cpanel-license-premier-cloud-5400-accounts', 'cpanel-license-premier-cloud-5500-accounts', 'cpanel-license-premier-cloud-5600-accounts', 'cpanel-license-premier-cloud-5700-accounts', 'cpanel-license-premier-cloud-5800-accounts', 'cpanel-license-premier-cloud-5900-accounts', 'cpanel-license-premier-cloud-600-accounts', 'cpanel-license-premier-cloud-6000-accounts', 'cpanel-license-premier-cloud-6100-accounts', 'cpanel-license-premier-cloud-6200-accounts', 'cpanel-license-premier-cloud-6300-accounts', 'cpanel-license-premier-cloud-6400-accounts', 'cpanel-license-premier-cloud-6500-accounts', 'cpanel-license-premier-cloud-6600-accounts', 'cpanel-license-premier-cloud-6700-accounts', 'cpanel-license-premier-cloud-6800-accounts', 'cpanel-license-premier-cloud-6900-accounts', 'cpanel-license-premier-cloud-700-accounts', 'cpanel-license-premier-cloud-7000-accounts', 'cpanel-license-premier-cloud-7100-accounts', 'cpanel-license-premier-cloud-7200-accounts', 'cpanel-license-premier-cloud-7300-accounts', 'cpanel-license-premier-cloud-7400-accounts', 'cpanel-license-premier-cloud-7500-accounts', 'cpanel-license-premier-cloud-7600-accounts', 'cpanel-license-premier-cloud-7700-accounts', 'cpanel-license-premier-cloud-7800-accounts', 'cpanel-license-premier-cloud-7900-accounts', 'cpanel-license-premier-cloud-800-accounts', 'cpanel-license-premier-cloud-8000-accounts', 'cpanel-license-premier-cloud-8100-accounts', 'cpanel-license-premier-cloud-8200-accounts', 'cpanel-license-premier-cloud-8300-accounts', 'cpanel-license-premier-cloud-8400-accounts', 'cpanel-license-premier-cloud-8500-accounts', 'cpanel-license-premier-cloud-8600-accounts', 'cpanel-license-premier-cloud-8700-accounts', 'cpanel-license-premier-cloud-8800-accounts', 'cpanel-license-premier-cloud-8900-accounts', 'cpanel-license-premier-cloud-900-accounts', 'cpanel-license-premier-cloud-9000-accounts', 'cpanel-license-premier-cloud-9100-accounts', 'cpanel-license-premier-cloud-9200-accounts', 'cpanel-license-premier-cloud-9300-accounts', 'cpanel-license-premier-cloud-9400-accounts', 'cpanel-license-premier-cloud-9500-accounts', 'cpanel-license-premier-cloud-9600-accounts', 'cpanel-license-premier-cloud-9700-accounts', 'cpanel-license-premier-cloud-9800-accounts', 'cpanel-license-premier-cloud-9900-accounts', 'cpanel-license-premier-metal-100-accounts', 'cpanel-license-premier-metal-1000-accounts', 'cpanel-license-premier-metal-10000-accounts', 'cpanel-license-premier-metal-1100-accounts', 'cpanel-license-premier-metal-1200-accounts', 'cpanel-license-premier-metal-1300-accounts', 'cpanel-license-premier-metal-1400-accounts', 'cpanel-license-premier-metal-150-accounts', 'cpanel-license-premier-metal-1500-accounts', 'cpanel-license-premier-metal-1600-accounts', 'cpanel-license-premier-metal-1700-accounts', 'cpanel-license-premier-metal-1800-accounts', 'cpanel-license-premier-metal-1900-accounts', 'cpanel-license-premier-metal-200-accounts', 'cpanel-license-premier-metal-2000-accounts', 'cpanel-license-premier-metal-2100-accounts', 'cpanel-license-premier-metal-2200-accounts', 'cpanel-license-premier-metal-2300-accounts', 'cpanel-license-premier-metal-2400-accounts', 'cpanel-license-premier-metal-250-accounts', 'cpanel-license-premier-metal-2500-accounts', 'cpanel-license-premier-metal-2600-accounts', 'cpanel-license-premier-metal-2700-accounts', 'cpanel-license-premier-metal-2800-accounts', 'cpanel-license-premier-metal-2900-accounts', 'cpanel-license-premier-metal-300-accounts', 'cpanel-license-premier-metal-3000-accounts', 'cpanel-license-premier-metal-3100-accounts', 'cpanel-license-premier-metal-3200-accounts', 'cpanel-license-premier-metal-3300-accounts', 'cpanel-license-premier-metal-3400-accounts', 'cpanel-license-premier-metal-3500-accounts', 'cpanel-license-premier-metal-3600-accounts', 'cpanel-license-premier-metal-3700-accounts', 'cpanel-license-premier-metal-3800-accounts', 'cpanel-license-premier-metal-3900-accounts', 'cpanel-license-premier-metal-400-accounts', 'cpanel-license-premier-metal-4000-accounts', 'cpanel-license-premier-metal-4100-accounts', 'cpanel-license-premier-metal-4200-accounts', 'cpanel-license-premier-metal-4300-accounts', 'cpanel-license-premier-metal-4400-accounts', 'cpanel-license-premier-metal-4500-accounts', 'cpanel-license-premier-metal-4600-accounts', 'cpanel-license-premier-metal-4700-accounts', 'cpanel-license-premier-metal-4800-accounts', 'cpanel-license-premier-metal-4900-accounts', 'cpanel-license-premier-metal-500-accounts', 'cpanel-license-premier-metal-5000-accounts', 'cpanel-license-premier-metal-5100-accounts', 'cpanel-license-premier-metal-5200-accounts', 'cpanel-license-premier-metal-5300-accounts', 'cpanel-license-premier-metal-5400-accounts', 'cpanel-license-premier-metal-5500-accounts', 'cpanel-license-premier-metal-5600-accounts', 'cpanel-license-premier-metal-5700-accounts', 'cpanel-license-premier-metal-5800-accounts', 'cpanel-license-premier-metal-5900-accounts', 'cpanel-license-premier-metal-600-accounts', 'cpanel-license-premier-metal-6000-accounts', 'cpanel-license-premier-metal-6100-accounts', 'cpanel-license-premier-metal-6200-accounts', 'cpanel-license-premier-metal-6300-accounts', 'cpanel-license-premier-metal-6400-accounts', 'cpanel-license-premier-metal-6500-accounts', 'cpanel-license-premier-metal-6600-accounts', 'cpanel-license-premier-metal-6700-accounts', 'cpanel-license-premier-metal-6800-accounts', 'cpanel-license-premier-metal-6900-accounts', 'cpanel-license-premier-metal-700-accounts', 'cpanel-license-premier-metal-7000-accounts', 'cpanel-license-premier-metal-7100-accounts', 'cpanel-license-premier-metal-7200-accounts', 'cpanel-license-premier-metal-7300-accounts', 'cpanel-license-premier-metal-7400-accounts', 'cpanel-license-premier-metal-7500-accounts', 'cpanel-license-premier-metal-7600-accounts', 'cpanel-license-premier-metal-7700-accounts', 'cpanel-license-premier-metal-7800-accounts', 'cpanel-license-premier-metal-7900-accounts', 'cpanel-license-premier-metal-800-accounts', 'cpanel-license-premier-metal-8000-accounts', 'cpanel-license-premier-metal-8100-accounts', 'cpanel-license-premier-metal-8200-accounts', 'cpanel-license-premier-metal-8300-accounts', 'cpanel-license-premier-metal-8400-accounts', 'cpanel-license-premier-metal-8500-accounts', 'cpanel-license-premier-metal-8600-accounts', 'cpanel-license-premier-metal-8700-accounts', 'cpanel-license-premier-metal-8800-accounts', 'cpanel-license-premier-metal-8900-accounts', 'cpanel-license-premier-metal-900-accounts', 'cpanel-license-premier-metal-9000-accounts', 'cpanel-license-premier-metal-9100-accounts', 'cpanel-license-premier-metal-9200-accounts', 'cpanel-license-premier-metal-9300-accounts', 'cpanel-license-premier-metal-9400-accounts', 'cpanel-license-premier-metal-9500-accounts', 'cpanel-license-premier-metal-9600-accounts', 'cpanel-license-premier-metal-9700-accounts', 'cpanel-license-premier-metal-9800-accounts', 'cpanel-license-premier-metal-9900-accounts', 'cpanel-license-pro-cloud', 'cpanel-license-solo-cloud', 'cpanel-license-solo-metal', 'cpanel-license-version-11', 'cpanel-license-version-11-for-virtuozzo', 'cpanel-license-version-11-for-vps', 'version-admin-cloud', 'version-plus-cloud', 'version-premier-cloud-100', 'version-premier-cloud-1000', 'version-premier-cloud-10000', 'version-premier-cloud-1100', 'version-premier-cloud-1200', 'version-premier-cloud-1300', 'version-premier-cloud-1400', 'version-premier-cloud-150', 'version-premier-cloud-1500', 'version-premier-cloud-1600', 'version-premier-cloud-1700', 'version-premier-cloud-1800', 'version-premier-cloud-1900', 'version-premier-cloud-200', 'version-premier-cloud-2000', 'version-premier-cloud-2100', 'version-premier-cloud-2200', 'version-premier-cloud-2300', 'version-premier-cloud-2400', 'version-premier-cloud-250', 'version-premier-cloud-2500', 'version-premier-cloud-2600', 'version-premier-cloud-2700', 'version-premier-cloud-2800', 'version-premier-cloud-2900', 'version-premier-cloud-300', 'version-premier-cloud-3000', 'version-premier-cloud-3100', 'version-premier-cloud-3200', 'version-premier-cloud-3300', 'version-premier-cloud-3400', 'version-premier-cloud-3500', 'version-premier-cloud-3600', 'version-premier-cloud-3700', 'version-premier-cloud-3800', 'version-premier-cloud-3900', 'version-premier-cloud-400', 'version-premier-cloud-4000', 'version-premier-cloud-4100', 'version-premier-cloud-4200', 'version-premier-cloud-4300', 'version-premier-cloud-4400', 'version-premier-cloud-4500', 'version-premier-cloud-4600', 'version-premier-cloud-4700', 'version-premier-cloud-4800', 'version-premier-cloud-4900', 'version-premier-cloud-500', 'version-premier-cloud-5000', 'version-premier-cloud-5100', 'version-premier-cloud-5200', 'version-premier-cloud-5300', 'version-premier-cloud-5400', 'version-premier-cloud-5500', 'version-premier-cloud-5600', 'version-premier-cloud-5700', 'version-premier-cloud-5800', 'version-premier-cloud-5900', 'version-premier-cloud-600', 'version-premier-cloud-6000', 'version-premier-cloud-6100', 'version-premier-cloud-6200', 'version-premier-cloud-6300', 'version-premier-cloud-6400', 'version-premier-cloud-6500', 'version-premier-cloud-6600', 'version-premier-cloud-6700', 'version-premier-cloud-6800', 'version-premier-cloud-6900', 'version-premier-cloud-700', 'version-premier-cloud-7000', 'version-premier-cloud-7100', 'version-premier-cloud-7200', 'version-premier-cloud-7300', 'version-premier-cloud-7400', 'version-premier-cloud-7500', 'version-premier-cloud-7600', 'version-premier-cloud-7700', 'version-premier-cloud-7800', 'version-premier-cloud-7900', 'version-premier-cloud-800', 'version-premier-cloud-8000', 'version-premier-cloud-8100', 'version-premier-cloud-8200', 'version-premier-cloud-8300', 'version-premier-cloud-8400', 'version-premier-cloud-8500', 'version-premier-cloud-8600', 'version-premier-cloud-8700', 'version-premier-cloud-8800', 'version-premier-cloud-8900', 'version-premier-cloud-900', 'version-premier-cloud-9000', 'version-premier-cloud-9100', 'version-premier-cloud-9200', 'version-premier-cloud-9300', 'version-premier-cloud-9400', 'version-premier-cloud-9500', 'version-premier-cloud-9600', 'version-premier-cloud-9700', 'version-premier-cloud-9800', 'version-premier-cloud-9900', 'version-premier-metal-100', 'version-premier-metal-1000', 'version-premier-metal-10000', 'version-premier-metal-1100', 'version-premier-metal-1200', 'version-premier-metal-1300', 'version-premier-metal-1400', 'version-premier-metal-150', 'version-premier-metal-1500', 'version-premier-metal-1600', 'version-premier-metal-1700', 'version-premier-metal-1800', 'version-premier-metal-1900', 'version-premier-metal-200', 'version-premier-metal-2000', 'version-premier-metal-2100', 'version-premier-metal-2200', 'version-premier-metal-2300', 'version-premier-metal-2400', 'version-premier-metal-250', 'version-premier-metal-2500', 'version-premier-metal-2600', 'version-premier-metal-2700', 'version-premier-metal-2800', 'version-premier-metal-2900', 'version-premier-metal-300', 'version-premier-metal-3000', 'version-premier-metal-3100', 'version-premier-metal-3200', 'version-premier-metal-3300', 'version-premier-metal-3400', 'version-premier-metal-3500', 'version-premier-metal-3600', 'version-premier-metal-3700', 'version-premier-metal-3800', 'version-premier-metal-3900', 'version-premier-metal-400', 'version-premier-metal-4000', 'version-premier-metal-4100', 'version-premier-metal-4200', 'version-premier-metal-4300', 'version-premier-metal-4400', 'version-premier-metal-4500', 'version-premier-metal-4600', 'version-premier-metal-4700', 'version-premier-metal-4800', 'version-premier-metal-4900', 'version-premier-metal-500', 'version-premier-metal-5000', 'version-premier-metal-5100', 'version-premier-metal-5200', 'version-premier-metal-5300', 'version-premier-metal-5400', 'version-premier-metal-5500', 'version-premier-metal-5600', 'version-premier-metal-5700', 'version-premier-metal-5800', 'version-premier-metal-5900', 'version-premier-metal-600', 'version-premier-metal-6000', 'version-premier-metal-6100', 'version-premier-metal-6200', 'version-premier-metal-6300', 'version-premier-metal-6400', 'version-premier-metal-6500', 'version-premier-metal-6600', 'version-premier-metal-6700', 'version-premier-metal-6800', 'version-premier-metal-6900', 'version-premier-metal-700', 'version-premier-metal-7000', 'version-premier-metal-7100', 'version-premier-metal-7200', 'version-premier-metal-7300', 'version-premier-metal-7400', 'version-premier-metal-7500', 'version-premier-metal-7600', 'version-premier-metal-7700', 'version-premier-metal-7800', 'version-premier-metal-7900', 'version-premier-metal-800', 'version-premier-metal-8000', 'version-premier-metal-8100', 'version-premier-metal-8200', 'version-premier-metal-8300', 'version-premier-metal-8400', 'version-premier-metal-8500', 'version-premier-metal-8600', 'version-premier-metal-8700', 'version-premier-metal-8800', 'version-premier-metal-8900', 'version-premier-metal-900', 'version-premier-metal-9000', 'version-premier-metal-9100', 'version-premier-metal-9200', 'version-premier-metal-9300', 'version-premier-metal-9400', 'version-premier-metal-9500', 'version-premier-metal-9600', 'version-premier-metal-9700', 'version-premier-metal-9800', 'version-premier-metal-9900', 'version-pro-cloud', 'version-solo-cloud', 'version-solo-metal']
`}</CodeBlock>

</TabItem>
</Tabs>
