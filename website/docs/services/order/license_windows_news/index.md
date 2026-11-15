--- 
title: license_windows_news
hide_title: false
hide_table_of_contents: false
keywords:
  - license_windows_news
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

Creates, updates, deletes, gets or lists a <code>license_windows_news</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="license_windows_news" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.order.license_windows_news" /></td></tr>
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
    <td><a href="#parameter-duration"><code>duration</code></a>, <a href="#parameter-ip"><code>ip</code></a>, <a href="#parameter-version"><code>version</code></a></td>
    <td><a href="#parameter-service_type"><code>service_type</code></a>, <a href="#parameter-sql_version"><code>sql_version</code></a></td>
    <td>Get prices and contracts information</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-ip"><code>ip</code></a>, <a href="#parameter-version"><code>version</code></a></td>
    <td><a href="#parameter-service_type"><code>service_type</code></a>, <a href="#parameter-sql_version"><code>sql_version</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>Get allowed durations for 'new' option</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-duration"><code>duration</code></a>, <a href="#parameter-ip"><code>ip</code></a>, <a href="#parameter-version"><code>version</code></a></td>
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
<tr id="parameter-ip">
    <td><CopyableCode code="ip" /></td>
    <td><code>string (ipv4)</code></td>
    <td>Ip on which this license would be installed (for dedicated your main server Ip)</td>
</tr>
<tr id="parameter-version">
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>This license version</td>
</tr>
<tr id="parameter-service_type">
    <td><CopyableCode code="service_type" /></td>
    <td><code>string</code></td>
    <td># DEPRECATED # The kind of service on which this license will be used # Will not be used, keeped only for compatibility # (wire: serviceType)</td>
</tr>
<tr id="parameter-sql_version">
    <td><CopyableCode code="sql_version" /></td>
    <td><code>string</code></td>
    <td>The SQL Server version to enable on this license Windows license (wire: sqlVersion)</td>
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
FROM ovh.order.license_windows_news
WHERE duration = '{{ duration }}' -- required
AND ip = '{{ ip }}' -- required
AND version = '{{ version }}' -- required
AND service_type = '{{ service_type }}'
AND sql_version = '{{ sql_version }}'
;
```
</TabItem>
<TabItem value="list">

Get allowed durations for 'new' option

```sql
SELECT
order_id,
contracts,
details,
prices,
url
FROM ovh.order.license_windows_news
WHERE ip = '{{ ip }}' -- required
AND version = '{{ version }}' -- required
AND service_type = '{{ service_type }}'
AND sql_version = '{{ sql_version }}'
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
INSERT INTO ovh.order.license_windows_news (
ip,
service_type,
sql_version,
version,
duration
)
SELECT 
'{{ ip }}' /* required */,
'{{ service_type }}',
'{{ sql_version }}',
'{{ version }}' /* required */,
'{{ duration }}'
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
- name: license_windows_news
  props:
    - name: duration
      value: "{{ duration }}"
      description: Required parameter for the license_windows_news resource.
    - name: ip
      value: "{{ ip }}"
      description: |
        IPv4 address (e.g., 192.0.2.0)
    - name: service_type
      value: "{{ service_type }}"
      description: |
        Possible values for license type
      valid_values: ['dedicated', 'dedicatedCloud', 'dedicatedFailover', 'failover', 'vm', 'vps', 'vps_ceph', 'vps_classic', 'vps_cloud', 'vps_cloud_2016', 'vps_ssd']
    - name: sql_version
      value: "{{ sql_version }}"
      description: |
        All SQL Server versions for Windows products
      valid_values: ['SQL_SERVER_2008_STANDARD_EDITION', 'SQL_SERVER_2008_STANDARD_EDITION_2_CPU', 'SQL_SERVER_2008_WEB_EDITION', 'SQL_SERVER_2008_WEB_EDITION_2_CPU', 'SQL_SERVER_2012_STANDARD_EDITION', 'SQL_SERVER_2012_STANDARD_EDITION_12_CORES', 'SQL_SERVER_2012_STANDARD_EDITION_16_CORES', 'SQL_SERVER_2012_STANDARD_EDITION_18_CORES', 'SQL_SERVER_2012_STANDARD_EDITION_20_CORES', 'SQL_SERVER_2012_STANDARD_EDITION_24_CORES', 'SQL_SERVER_2012_STANDARD_EDITION_2_CPU', 'SQL_SERVER_2012_STANDARD_EDITION_32_CORES', 'SQL_SERVER_2012_STANDARD_EDITION_4_CORES', 'SQL_SERVER_2012_STANDARD_EDITION_6_CORES', 'SQL_SERVER_2012_STANDARD_EDITION_8_CORES', 'SQL_SERVER_2012_WEB_EDITION_12_CORES', 'SQL_SERVER_2012_WEB_EDITION_16_CORES', 'SQL_SERVER_2012_WEB_EDITION_18_CORES', 'SQL_SERVER_2012_WEB_EDITION_20_CORES', 'SQL_SERVER_2012_WEB_EDITION_24_CORES', 'SQL_SERVER_2012_WEB_EDITION_32_CORES', 'SQL_SERVER_2012_WEB_EDITION_4_CORES', 'SQL_SERVER_2012_WEB_EDITION_6_CORES', 'SQL_SERVER_2012_WEB_EDITION_8_CORES']
    - name: version
      value: "{{ version }}"
      description: |
        All versions for Windows products
      valid_values: ['WINDOWS_SERVER_2003_ENTERPRISE_EDITION', 'WINDOWS_SERVER_2003_ENTERPRISE_EDITION_2_CPU', 'WINDOWS_SERVER_2003_STANDARD_EDITION', 'WINDOWS_SERVER_2003_WEB_EDITION', 'WINDOWS_SERVER_2003_WEB_EDITION_2_CPU', 'WINDOWS_SERVER_2003_WEB_ENHANCED_EDITION', 'WINDOWS_SERVER_2003_WEB_STANDARD_EDITION', 'WINDOWS_SERVER_2003_WEB_STANDARD_EDITION_2_CPU', 'WINDOWS_SERVER_2008_DATACENTER_EDITION', 'WINDOWS_SERVER_2008_DATACENTER_EDITION_2_CPU', 'WINDOWS_SERVER_2008_DATACENTER_EDITION_4_CPU', 'WINDOWS_SERVER_2008_ENTERPRISE_EDITION', 'WINDOWS_SERVER_2008_ENTERPRISE_EDITION_2_CPU', 'WINDOWS_SERVER_2008_ENTERPRISE_EDITION_4_CPU', 'WINDOWS_SERVER_2008_STANDARD_EDITION', 'WINDOWS_SERVER_2008_STANDARD_EDITION_2_CPU', 'WINDOWS_SERVER_2008_STANDARD_EDITION_4_CPU', 'WINDOWS_SERVER_2008_WEB_EDITION', 'WINDOWS_SERVER_2008_WEB_EDITION_2_CPU', 'WINDOWS_SERVER_2008_WEB_EDITION_4_CPU', 'WINDOWS_SERVER_2008_WEB_STANDARD_EDITION', 'WINDOWS_SERVER_2012_DATACENTER_EDITION', 'WINDOWS_SERVER_2012_DATACENTER_EDITION_2_CPU', 'WINDOWS_SERVER_2012_DATACENTER_EDITION_4_CPU', 'WINDOWS_SERVER_2012_ENTERPRISE_EDITION', 'WINDOWS_SERVER_2012_ENTERPRISE_EDITION_2_CPU', 'WINDOWS_SERVER_2012_STANDARD_EDITION', 'WINDOWS_SERVER_2012_STANDARD_EDITION_2_CPU', 'WINDOWS_SERVER_2012_STANDARD_EDITION_4_CPU', 'WINDOWS_SERVER_2012_WEB_EDITION', 'WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_10_CORES', 'WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_12_CORES', 'WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_14_CORES', 'WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_16_CORES', 'WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_18_CORES', 'WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_20_CORES', 'WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_22_CORES', 'WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_24_CORES', 'WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_32_CORES', 'WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_48_CORES', 'WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_64_CORES', 'WINDOWS_SERVER_2016_DATACENTER_EDITION_1_CPU_8_CORES', 'WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_10_CORES', 'WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_12_CORES', 'WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_14_CORES', 'WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_16_CORES', 'WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_18_CORES', 'WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_20_CORES', 'WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_22_CORES', 'WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_24_CORES', 'WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_32_CORES', 'WINDOWS_SERVER_2016_DATACENTER_EDITION_2_CPU_8_CORES', 'WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_10_CORES', 'WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_12_CORES', 'WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_14_CORES', 'WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_16_CORES', 'WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_18_CORES', 'WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_20_CORES', 'WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_22_CORES', 'WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_24_CORES', 'WINDOWS_SERVER_2016_DATACENTER_EDITION_4_CPU_8_CORES', 'WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_10_CORES', 'WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_12_CORES', 'WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_14_CORES', 'WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_16_CORES', 'WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_18_CORES', 'WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_20_CORES', 'WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_22_CORES', 'WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_24_CORES', 'WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_32_CORES', 'WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_48_CORES', 'WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_64_CORES', 'WINDOWS_SERVER_2016_STANDARD_EDITION_1_CPU_8_CORES', 'WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_10_CORES', 'WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_12_CORES', 'WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_14_CORES', 'WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_16_CORES', 'WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_18_CORES', 'WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_20_CORES', 'WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_22_CORES', 'WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_24_CORES', 'WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_32_CORES', 'WINDOWS_SERVER_2016_STANDARD_EDITION_2_CPU_8_CORES', 'WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_10_CORES', 'WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_12_CORES', 'WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_14_CORES', 'WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_16_CORES', 'WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_18_CORES', 'WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_20_CORES', 'WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_22_CORES', 'WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_24_CORES', 'WINDOWS_SERVER_2016_STANDARD_EDITION_4_CPU_8_CORES', 'WINDOWS_SERVER_2019_DATACENTER_EDITION_10_CORES', 'WINDOWS_SERVER_2019_DATACENTER_EDITION_128_CORES', 'WINDOWS_SERVER_2019_DATACENTER_EDITION_12_CORES', 'WINDOWS_SERVER_2019_DATACENTER_EDITION_14_CORES', 'WINDOWS_SERVER_2019_DATACENTER_EDITION_16_CORES', 'WINDOWS_SERVER_2019_DATACENTER_EDITION_18_CORES', 'WINDOWS_SERVER_2019_DATACENTER_EDITION_192_CORES', 'WINDOWS_SERVER_2019_DATACENTER_EDITION_20_CORES', 'WINDOWS_SERVER_2019_DATACENTER_EDITION_22_CORES', 'WINDOWS_SERVER_2019_DATACENTER_EDITION_24_CORES', 'WINDOWS_SERVER_2019_DATACENTER_EDITION_256_CORES', 'WINDOWS_SERVER_2019_DATACENTER_EDITION_26_CORES', 'WINDOWS_SERVER_2019_DATACENTER_EDITION_28_CORES', 'WINDOWS_SERVER_2019_DATACENTER_EDITION_30_CORES', 'WINDOWS_SERVER_2019_DATACENTER_EDITION_32_CORES', 'WINDOWS_SERVER_2019_DATACENTER_EDITION_34_CORES', 'WINDOWS_SERVER_2019_DATACENTER_EDITION_36_CORES', 'WINDOWS_SERVER_2019_DATACENTER_EDITION_38_CORES', 'WINDOWS_SERVER_2019_DATACENTER_EDITION_40_CORES', 'WINDOWS_SERVER_2019_DATACENTER_EDITION_42_CORES', 'WINDOWS_SERVER_2019_DATACENTER_EDITION_44_CORES', 'WINDOWS_SERVER_2019_DATACENTER_EDITION_46_CORES', 'WINDOWS_SERVER_2019_DATACENTER_EDITION_48_CORES', 'WINDOWS_SERVER_2019_DATACENTER_EDITION_50_CORES', 'WINDOWS_SERVER_2019_DATACENTER_EDITION_512_CORES', 'WINDOWS_SERVER_2019_DATACENTER_EDITION_52_CORES', 'WINDOWS_SERVER_2019_DATACENTER_EDITION_54_CORES', 'WINDOWS_SERVER_2019_DATACENTER_EDITION_56_CORES', 'WINDOWS_SERVER_2019_DATACENTER_EDITION_58_CORES', 'WINDOWS_SERVER_2019_DATACENTER_EDITION_60_CORES', 'WINDOWS_SERVER_2019_DATACENTER_EDITION_62_CORES', 'WINDOWS_SERVER_2019_DATACENTER_EDITION_64_CORES', 'WINDOWS_SERVER_2019_DATACENTER_EDITION_72_CORES', 'WINDOWS_SERVER_2019_DATACENTER_EDITION_8_CORES', 'WINDOWS_SERVER_2019_DATACENTER_EDITION_96_CORES', 'WINDOWS_SERVER_2019_STANDARD_EDITION_10_CORES', 'WINDOWS_SERVER_2019_STANDARD_EDITION_128_CORES', 'WINDOWS_SERVER_2019_STANDARD_EDITION_12_CORES', 'WINDOWS_SERVER_2019_STANDARD_EDITION_14_CORES', 'WINDOWS_SERVER_2019_STANDARD_EDITION_16_CORES', 'WINDOWS_SERVER_2019_STANDARD_EDITION_18_CORES', 'WINDOWS_SERVER_2019_STANDARD_EDITION_192_CORES', 'WINDOWS_SERVER_2019_STANDARD_EDITION_20_CORES', 'WINDOWS_SERVER_2019_STANDARD_EDITION_22_CORES', 'WINDOWS_SERVER_2019_STANDARD_EDITION_24_CORES', 'WINDOWS_SERVER_2019_STANDARD_EDITION_256_CORES', 'WINDOWS_SERVER_2019_STANDARD_EDITION_26_CORES', 'WINDOWS_SERVER_2019_STANDARD_EDITION_28_CORES', 'WINDOWS_SERVER_2019_STANDARD_EDITION_30_CORES', 'WINDOWS_SERVER_2019_STANDARD_EDITION_32_CORES', 'WINDOWS_SERVER_2019_STANDARD_EDITION_34_CORES', 'WINDOWS_SERVER_2019_STANDARD_EDITION_36_CORES', 'WINDOWS_SERVER_2019_STANDARD_EDITION_38_CORES', 'WINDOWS_SERVER_2019_STANDARD_EDITION_40_CORES', 'WINDOWS_SERVER_2019_STANDARD_EDITION_42_CORES', 'WINDOWS_SERVER_2019_STANDARD_EDITION_44_CORES', 'WINDOWS_SERVER_2019_STANDARD_EDITION_46_CORES', 'WINDOWS_SERVER_2019_STANDARD_EDITION_48_CORES', 'WINDOWS_SERVER_2019_STANDARD_EDITION_50_CORES', 'WINDOWS_SERVER_2019_STANDARD_EDITION_512_CORES', 'WINDOWS_SERVER_2019_STANDARD_EDITION_52_CORES', 'WINDOWS_SERVER_2019_STANDARD_EDITION_54_CORES', 'WINDOWS_SERVER_2019_STANDARD_EDITION_56_CORES', 'WINDOWS_SERVER_2019_STANDARD_EDITION_58_CORES', 'WINDOWS_SERVER_2019_STANDARD_EDITION_60_CORES', 'WINDOWS_SERVER_2019_STANDARD_EDITION_62_CORES', 'WINDOWS_SERVER_2019_STANDARD_EDITION_64_CORES', 'WINDOWS_SERVER_2019_STANDARD_EDITION_72_CORES', 'WINDOWS_SERVER_2019_STANDARD_EDITION_8_CORES', 'WINDOWS_SERVER_2019_STANDARD_EDITION_96_CORES', 'WINDOWS_SERVER_2022_DATACENTER_EDITION_10_CORES', 'WINDOWS_SERVER_2022_DATACENTER_EDITION_128_CORES', 'WINDOWS_SERVER_2022_DATACENTER_EDITION_12_CORES', 'WINDOWS_SERVER_2022_DATACENTER_EDITION_14_CORES', 'WINDOWS_SERVER_2022_DATACENTER_EDITION_16_CORES', 'WINDOWS_SERVER_2022_DATACENTER_EDITION_18_CORES', 'WINDOWS_SERVER_2022_DATACENTER_EDITION_192_CORES', 'WINDOWS_SERVER_2022_DATACENTER_EDITION_20_CORES', 'WINDOWS_SERVER_2022_DATACENTER_EDITION_22_CORES', 'WINDOWS_SERVER_2022_DATACENTER_EDITION_24_CORES', 'WINDOWS_SERVER_2022_DATACENTER_EDITION_256_CORES', 'WINDOWS_SERVER_2022_DATACENTER_EDITION_26_CORES', 'WINDOWS_SERVER_2022_DATACENTER_EDITION_28_CORES', 'WINDOWS_SERVER_2022_DATACENTER_EDITION_30_CORES', 'WINDOWS_SERVER_2022_DATACENTER_EDITION_32_CORES', 'WINDOWS_SERVER_2022_DATACENTER_EDITION_34_CORES', 'WINDOWS_SERVER_2022_DATACENTER_EDITION_36_CORES', 'WINDOWS_SERVER_2022_DATACENTER_EDITION_38_CORES', 'WINDOWS_SERVER_2022_DATACENTER_EDITION_40_CORES', 'WINDOWS_SERVER_2022_DATACENTER_EDITION_42_CORES', 'WINDOWS_SERVER_2022_DATACENTER_EDITION_44_CORES', 'WINDOWS_SERVER_2022_DATACENTER_EDITION_46_CORES', 'WINDOWS_SERVER_2022_DATACENTER_EDITION_48_CORES', 'WINDOWS_SERVER_2022_DATACENTER_EDITION_50_CORES', 'WINDOWS_SERVER_2022_DATACENTER_EDITION_512_CORES', 'WINDOWS_SERVER_2022_DATACENTER_EDITION_52_CORES', 'WINDOWS_SERVER_2022_DATACENTER_EDITION_54_CORES', 'WINDOWS_SERVER_2022_DATACENTER_EDITION_56_CORES', 'WINDOWS_SERVER_2022_DATACENTER_EDITION_58_CORES', 'WINDOWS_SERVER_2022_DATACENTER_EDITION_60_CORES', 'WINDOWS_SERVER_2022_DATACENTER_EDITION_62_CORES', 'WINDOWS_SERVER_2022_DATACENTER_EDITION_64_CORES', 'WINDOWS_SERVER_2022_DATACENTER_EDITION_72_CORES', 'WINDOWS_SERVER_2022_DATACENTER_EDITION_8_CORES', 'WINDOWS_SERVER_2022_DATACENTER_EDITION_96_CORES', 'WINDOWS_SERVER_2022_STANDARD_EDITION_10_CORES', 'WINDOWS_SERVER_2022_STANDARD_EDITION_128_CORES', 'WINDOWS_SERVER_2022_STANDARD_EDITION_12_CORES', 'WINDOWS_SERVER_2022_STANDARD_EDITION_14_CORES', 'WINDOWS_SERVER_2022_STANDARD_EDITION_16_CORES', 'WINDOWS_SERVER_2022_STANDARD_EDITION_18_CORES', 'WINDOWS_SERVER_2022_STANDARD_EDITION_192_CORES', 'WINDOWS_SERVER_2022_STANDARD_EDITION_20_CORES', 'WINDOWS_SERVER_2022_STANDARD_EDITION_22_CORES', 'WINDOWS_SERVER_2022_STANDARD_EDITION_24_CORES', 'WINDOWS_SERVER_2022_STANDARD_EDITION_256_CORES', 'WINDOWS_SERVER_2022_STANDARD_EDITION_26_CORES', 'WINDOWS_SERVER_2022_STANDARD_EDITION_28_CORES', 'WINDOWS_SERVER_2022_STANDARD_EDITION_30_CORES', 'WINDOWS_SERVER_2022_STANDARD_EDITION_32_CORES', 'WINDOWS_SERVER_2022_STANDARD_EDITION_34_CORES', 'WINDOWS_SERVER_2022_STANDARD_EDITION_36_CORES', 'WINDOWS_SERVER_2022_STANDARD_EDITION_38_CORES', 'WINDOWS_SERVER_2022_STANDARD_EDITION_40_CORES', 'WINDOWS_SERVER_2022_STANDARD_EDITION_42_CORES', 'WINDOWS_SERVER_2022_STANDARD_EDITION_44_CORES', 'WINDOWS_SERVER_2022_STANDARD_EDITION_46_CORES', 'WINDOWS_SERVER_2022_STANDARD_EDITION_48_CORES', 'WINDOWS_SERVER_2022_STANDARD_EDITION_50_CORES', 'WINDOWS_SERVER_2022_STANDARD_EDITION_512_CORES', 'WINDOWS_SERVER_2022_STANDARD_EDITION_52_CORES', 'WINDOWS_SERVER_2022_STANDARD_EDITION_54_CORES', 'WINDOWS_SERVER_2022_STANDARD_EDITION_56_CORES', 'WINDOWS_SERVER_2022_STANDARD_EDITION_58_CORES', 'WINDOWS_SERVER_2022_STANDARD_EDITION_60_CORES', 'WINDOWS_SERVER_2022_STANDARD_EDITION_62_CORES', 'WINDOWS_SERVER_2022_STANDARD_EDITION_64_CORES', 'WINDOWS_SERVER_2022_STANDARD_EDITION_72_CORES', 'WINDOWS_SERVER_2022_STANDARD_EDITION_8_CORES', 'WINDOWS_SERVER_2022_STANDARD_EDITION_96_CORES', 'WINDOWS_SERVER_2025_DATACENTER_EDITION_10_CORES', 'WINDOWS_SERVER_2025_DATACENTER_EDITION_128_CORES', 'WINDOWS_SERVER_2025_DATACENTER_EDITION_12_CORES', 'WINDOWS_SERVER_2025_DATACENTER_EDITION_14_CORES', 'WINDOWS_SERVER_2025_DATACENTER_EDITION_16_CORES', 'WINDOWS_SERVER_2025_DATACENTER_EDITION_18_CORES', 'WINDOWS_SERVER_2025_DATACENTER_EDITION_192_CORES', 'WINDOWS_SERVER_2025_DATACENTER_EDITION_20_CORES', 'WINDOWS_SERVER_2025_DATACENTER_EDITION_22_CORES', 'WINDOWS_SERVER_2025_DATACENTER_EDITION_24_CORES', 'WINDOWS_SERVER_2025_DATACENTER_EDITION_256_CORES', 'WINDOWS_SERVER_2025_DATACENTER_EDITION_26_CORES', 'WINDOWS_SERVER_2025_DATACENTER_EDITION_28_CORES', 'WINDOWS_SERVER_2025_DATACENTER_EDITION_30_CORES', 'WINDOWS_SERVER_2025_DATACENTER_EDITION_32_CORES', 'WINDOWS_SERVER_2025_DATACENTER_EDITION_34_CORES', 'WINDOWS_SERVER_2025_DATACENTER_EDITION_36_CORES', 'WINDOWS_SERVER_2025_DATACENTER_EDITION_38_CORES', 'WINDOWS_SERVER_2025_DATACENTER_EDITION_40_CORES', 'WINDOWS_SERVER_2025_DATACENTER_EDITION_42_CORES', 'WINDOWS_SERVER_2025_DATACENTER_EDITION_44_CORES', 'WINDOWS_SERVER_2025_DATACENTER_EDITION_46_CORES', 'WINDOWS_SERVER_2025_DATACENTER_EDITION_48_CORES', 'WINDOWS_SERVER_2025_DATACENTER_EDITION_50_CORES', 'WINDOWS_SERVER_2025_DATACENTER_EDITION_512_CORES', 'WINDOWS_SERVER_2025_DATACENTER_EDITION_52_CORES', 'WINDOWS_SERVER_2025_DATACENTER_EDITION_54_CORES', 'WINDOWS_SERVER_2025_DATACENTER_EDITION_56_CORES', 'WINDOWS_SERVER_2025_DATACENTER_EDITION_58_CORES', 'WINDOWS_SERVER_2025_DATACENTER_EDITION_60_CORES', 'WINDOWS_SERVER_2025_DATACENTER_EDITION_62_CORES', 'WINDOWS_SERVER_2025_DATACENTER_EDITION_64_CORES', 'WINDOWS_SERVER_2025_DATACENTER_EDITION_72_CORES', 'WINDOWS_SERVER_2025_DATACENTER_EDITION_8_CORES', 'WINDOWS_SERVER_2025_DATACENTER_EDITION_96_CORES', 'WINDOWS_SERVER_2025_STANDARD_EDITION_10_CORES', 'WINDOWS_SERVER_2025_STANDARD_EDITION_128_CORES', 'WINDOWS_SERVER_2025_STANDARD_EDITION_12_CORES', 'WINDOWS_SERVER_2025_STANDARD_EDITION_14_CORES', 'WINDOWS_SERVER_2025_STANDARD_EDITION_16_CORES', 'WINDOWS_SERVER_2025_STANDARD_EDITION_18_CORES', 'WINDOWS_SERVER_2025_STANDARD_EDITION_192_CORES', 'WINDOWS_SERVER_2025_STANDARD_EDITION_20_CORES', 'WINDOWS_SERVER_2025_STANDARD_EDITION_22_CORES', 'WINDOWS_SERVER_2025_STANDARD_EDITION_24_CORES', 'WINDOWS_SERVER_2025_STANDARD_EDITION_256_CORES', 'WINDOWS_SERVER_2025_STANDARD_EDITION_26_CORES', 'WINDOWS_SERVER_2025_STANDARD_EDITION_28_CORES', 'WINDOWS_SERVER_2025_STANDARD_EDITION_30_CORES', 'WINDOWS_SERVER_2025_STANDARD_EDITION_32_CORES', 'WINDOWS_SERVER_2025_STANDARD_EDITION_34_CORES', 'WINDOWS_SERVER_2025_STANDARD_EDITION_36_CORES', 'WINDOWS_SERVER_2025_STANDARD_EDITION_38_CORES', 'WINDOWS_SERVER_2025_STANDARD_EDITION_40_CORES', 'WINDOWS_SERVER_2025_STANDARD_EDITION_42_CORES', 'WINDOWS_SERVER_2025_STANDARD_EDITION_44_CORES', 'WINDOWS_SERVER_2025_STANDARD_EDITION_46_CORES', 'WINDOWS_SERVER_2025_STANDARD_EDITION_48_CORES', 'WINDOWS_SERVER_2025_STANDARD_EDITION_50_CORES', 'WINDOWS_SERVER_2025_STANDARD_EDITION_512_CORES', 'WINDOWS_SERVER_2025_STANDARD_EDITION_52_CORES', 'WINDOWS_SERVER_2025_STANDARD_EDITION_54_CORES', 'WINDOWS_SERVER_2025_STANDARD_EDITION_56_CORES', 'WINDOWS_SERVER_2025_STANDARD_EDITION_58_CORES', 'WINDOWS_SERVER_2025_STANDARD_EDITION_60_CORES', 'WINDOWS_SERVER_2025_STANDARD_EDITION_62_CORES', 'WINDOWS_SERVER_2025_STANDARD_EDITION_64_CORES', 'WINDOWS_SERVER_2025_STANDARD_EDITION_72_CORES', 'WINDOWS_SERVER_2025_STANDARD_EDITION_8_CORES', 'WINDOWS_SERVER_2025_STANDARD_EDITION_96_CORES', 'windows-server-2008-license-datacenter-edition-1-cpu', 'windows-server-2008-license-datacenter-edition-2-cpu', 'windows-server-2008-license-datacenter-edition-4-cpu', 'windows-server-2008-license-enterprise-edition-1-cpu', 'windows-server-2008-license-enterprise-edition-2-cpu', 'windows-server-2008-license-enterprise-edition-4-cpu', 'windows-server-2008-license-standard-edition-1-cpu', 'windows-server-2008-license-standard-edition-2-cpu', 'windows-server-2008-license-standard-edition-4-cpu', 'windows-server-2008-license-web-edition-1-cpu', 'windows-server-2008-license-web-edition-2-cpu', 'windows-server-2008-license-web-edition-4-cpu', 'windows-server-2012-license-datacenter-edition-1-cpu', 'windows-server-2012-license-datacenter-edition-2-cpu', 'windows-server-2012-license-datacenter-edition-4-cpu', 'windows-server-2012-license-standard-edition-1-cpu', 'windows-server-2012-license-standard-edition-2-cpu', 'windows-server-2012-license-standard-edition-4-cpu', 'windows-server-2016-license-datacenter-edition-1-cpu-10-cores', 'windows-server-2016-license-datacenter-edition-1-cpu-12-cores', 'windows-server-2016-license-datacenter-edition-1-cpu-14-cores', 'windows-server-2016-license-datacenter-edition-1-cpu-16-cores', 'windows-server-2016-license-datacenter-edition-1-cpu-18-cores', 'windows-server-2016-license-datacenter-edition-1-cpu-20-cores', 'windows-server-2016-license-datacenter-edition-1-cpu-22-cores', 'windows-server-2016-license-datacenter-edition-1-cpu-24-cores', 'windows-server-2016-license-datacenter-edition-1-cpu-32-cores', 'windows-server-2016-license-datacenter-edition-1-cpu-48-cores', 'windows-server-2016-license-datacenter-edition-1-cpu-64-cores', 'windows-server-2016-license-datacenter-edition-1-cpu-8-cores', 'windows-server-2016-license-datacenter-edition-2-cpu-10-cores', 'windows-server-2016-license-datacenter-edition-2-cpu-12-cores', 'windows-server-2016-license-datacenter-edition-2-cpu-14-cores', 'windows-server-2016-license-datacenter-edition-2-cpu-16-cores', 'windows-server-2016-license-datacenter-edition-2-cpu-18-cores', 'windows-server-2016-license-datacenter-edition-2-cpu-20-cores', 'windows-server-2016-license-datacenter-edition-2-cpu-22-cores', 'windows-server-2016-license-datacenter-edition-2-cpu-24-cores', 'windows-server-2016-license-datacenter-edition-2-cpu-32-cores', 'windows-server-2016-license-datacenter-edition-2-cpu-8-cores', 'windows-server-2016-license-datacenter-edition-4-cpu-10-cores', 'windows-server-2016-license-datacenter-edition-4-cpu-12-cores', 'windows-server-2016-license-datacenter-edition-4-cpu-14-cores', 'windows-server-2016-license-datacenter-edition-4-cpu-16-cores', 'windows-server-2016-license-datacenter-edition-4-cpu-18-cores', 'windows-server-2016-license-datacenter-edition-4-cpu-20-cores', 'windows-server-2016-license-datacenter-edition-4-cpu-22-cores', 'windows-server-2016-license-datacenter-edition-4-cpu-24-cores', 'windows-server-2016-license-datacenter-edition-4-cpu-8-cores', 'windows-server-2016-license-standard-edition-1-cpu-10-cores', 'windows-server-2016-license-standard-edition-1-cpu-12-cores', 'windows-server-2016-license-standard-edition-1-cpu-14-cores', 'windows-server-2016-license-standard-edition-1-cpu-16-cores', 'windows-server-2016-license-standard-edition-1-cpu-18-cores', 'windows-server-2016-license-standard-edition-1-cpu-20-cores', 'windows-server-2016-license-standard-edition-1-cpu-22-cores', 'windows-server-2016-license-standard-edition-1-cpu-24-cores', 'windows-server-2016-license-standard-edition-1-cpu-32-cores', 'windows-server-2016-license-standard-edition-1-cpu-48-cores', 'windows-server-2016-license-standard-edition-1-cpu-64-cores', 'windows-server-2016-license-standard-edition-1-cpu-8-cores', 'windows-server-2016-license-standard-edition-2-cpu-10-cores', 'windows-server-2016-license-standard-edition-2-cpu-12-cores', 'windows-server-2016-license-standard-edition-2-cpu-14-cores', 'windows-server-2016-license-standard-edition-2-cpu-16-cores', 'windows-server-2016-license-standard-edition-2-cpu-18-cores', 'windows-server-2016-license-standard-edition-2-cpu-20-cores', 'windows-server-2016-license-standard-edition-2-cpu-22-cores', 'windows-server-2016-license-standard-edition-2-cpu-24-cores', 'windows-server-2016-license-standard-edition-2-cpu-32-cores', 'windows-server-2016-license-standard-edition-2-cpu-8-cores', 'windows-server-2016-license-standard-edition-4-cpu-10-cores', 'windows-server-2016-license-standard-edition-4-cpu-12-cores', 'windows-server-2016-license-standard-edition-4-cpu-14-cores', 'windows-server-2016-license-standard-edition-4-cpu-16-cores', 'windows-server-2016-license-standard-edition-4-cpu-18-cores', 'windows-server-2016-license-standard-edition-4-cpu-20-cores', 'windows-server-2016-license-standard-edition-4-cpu-22-cores', 'windows-server-2016-license-standard-edition-4-cpu-24-cores', 'windows-server-2016-license-standard-edition-4-cpu-8-cores', 'windows-server-2019-license-datacenter-edition-10-cores', 'windows-server-2019-license-datacenter-edition-12-cores', 'windows-server-2019-license-datacenter-edition-128-cores', 'windows-server-2019-license-datacenter-edition-14-cores', 'windows-server-2019-license-datacenter-edition-16-cores', 'windows-server-2019-license-datacenter-edition-18-cores', 'windows-server-2019-license-datacenter-edition-192-cores', 'windows-server-2019-license-datacenter-edition-20-cores', 'windows-server-2019-license-datacenter-edition-22-cores', 'windows-server-2019-license-datacenter-edition-24-cores', 'windows-server-2019-license-datacenter-edition-256-cores', 'windows-server-2019-license-datacenter-edition-26-cores', 'windows-server-2019-license-datacenter-edition-28-cores', 'windows-server-2019-license-datacenter-edition-30-cores', 'windows-server-2019-license-datacenter-edition-32-cores', 'windows-server-2019-license-datacenter-edition-34-cores', 'windows-server-2019-license-datacenter-edition-36-cores', 'windows-server-2019-license-datacenter-edition-38-cores', 'windows-server-2019-license-datacenter-edition-40-cores', 'windows-server-2019-license-datacenter-edition-42-cores', 'windows-server-2019-license-datacenter-edition-44-cores', 'windows-server-2019-license-datacenter-edition-46-cores', 'windows-server-2019-license-datacenter-edition-48-cores', 'windows-server-2019-license-datacenter-edition-50-cores', 'windows-server-2019-license-datacenter-edition-512-cores', 'windows-server-2019-license-datacenter-edition-52-cores', 'windows-server-2019-license-datacenter-edition-54-cores', 'windows-server-2019-license-datacenter-edition-56-cores', 'windows-server-2019-license-datacenter-edition-58-cores', 'windows-server-2019-license-datacenter-edition-60-cores', 'windows-server-2019-license-datacenter-edition-62-cores', 'windows-server-2019-license-datacenter-edition-64-cores', 'windows-server-2019-license-datacenter-edition-72-cores', 'windows-server-2019-license-datacenter-edition-8-cores', 'windows-server-2019-license-datacenter-edition-96-cores', 'windows-server-2019-license-standard-edition-10-cores', 'windows-server-2019-license-standard-edition-12-cores', 'windows-server-2019-license-standard-edition-128-cores', 'windows-server-2019-license-standard-edition-14-cores', 'windows-server-2019-license-standard-edition-16-cores', 'windows-server-2019-license-standard-edition-18-cores', 'windows-server-2019-license-standard-edition-192-cores', 'windows-server-2019-license-standard-edition-20-cores', 'windows-server-2019-license-standard-edition-22-cores', 'windows-server-2019-license-standard-edition-24-cores', 'windows-server-2019-license-standard-edition-256-cores', 'windows-server-2019-license-standard-edition-26-cores', 'windows-server-2019-license-standard-edition-28-cores', 'windows-server-2019-license-standard-edition-30-cores', 'windows-server-2019-license-standard-edition-32-cores', 'windows-server-2019-license-standard-edition-34-cores', 'windows-server-2019-license-standard-edition-36-cores', 'windows-server-2019-license-standard-edition-38-cores', 'windows-server-2019-license-standard-edition-40-cores', 'windows-server-2019-license-standard-edition-42-cores', 'windows-server-2019-license-standard-edition-44-cores', 'windows-server-2019-license-standard-edition-46-cores', 'windows-server-2019-license-standard-edition-48-cores', 'windows-server-2019-license-standard-edition-50-cores', 'windows-server-2019-license-standard-edition-512-cores', 'windows-server-2019-license-standard-edition-52-cores', 'windows-server-2019-license-standard-edition-54-cores', 'windows-server-2019-license-standard-edition-56-cores', 'windows-server-2019-license-standard-edition-58-cores', 'windows-server-2019-license-standard-edition-60-cores', 'windows-server-2019-license-standard-edition-62-cores', 'windows-server-2019-license-standard-edition-64-cores', 'windows-server-2019-license-standard-edition-72-cores', 'windows-server-2019-license-standard-edition-8-cores', 'windows-server-2019-license-standard-edition-96-cores', 'windows-server-2022-license-datacenter-edition-10-cores', 'windows-server-2022-license-datacenter-edition-12-cores', 'windows-server-2022-license-datacenter-edition-128-cores', 'windows-server-2022-license-datacenter-edition-14-cores', 'windows-server-2022-license-datacenter-edition-16-cores', 'windows-server-2022-license-datacenter-edition-18-cores', 'windows-server-2022-license-datacenter-edition-192-cores', 'windows-server-2022-license-datacenter-edition-20-cores', 'windows-server-2022-license-datacenter-edition-22-cores', 'windows-server-2022-license-datacenter-edition-24-cores', 'windows-server-2022-license-datacenter-edition-256-cores', 'windows-server-2022-license-datacenter-edition-26-cores', 'windows-server-2022-license-datacenter-edition-28-cores', 'windows-server-2022-license-datacenter-edition-30-cores', 'windows-server-2022-license-datacenter-edition-32-cores', 'windows-server-2022-license-datacenter-edition-34-cores', 'windows-server-2022-license-datacenter-edition-36-cores', 'windows-server-2022-license-datacenter-edition-38-cores', 'windows-server-2022-license-datacenter-edition-40-cores', 'windows-server-2022-license-datacenter-edition-42-cores', 'windows-server-2022-license-datacenter-edition-44-cores', 'windows-server-2022-license-datacenter-edition-46-cores', 'windows-server-2022-license-datacenter-edition-48-cores', 'windows-server-2022-license-datacenter-edition-50-cores', 'windows-server-2022-license-datacenter-edition-512-cores', 'windows-server-2022-license-datacenter-edition-52-cores', 'windows-server-2022-license-datacenter-edition-54-cores', 'windows-server-2022-license-datacenter-edition-56-cores', 'windows-server-2022-license-datacenter-edition-58-cores', 'windows-server-2022-license-datacenter-edition-60-cores', 'windows-server-2022-license-datacenter-edition-62-cores', 'windows-server-2022-license-datacenter-edition-64-cores', 'windows-server-2022-license-datacenter-edition-72-cores', 'windows-server-2022-license-datacenter-edition-8-cores', 'windows-server-2022-license-datacenter-edition-96-cores', 'windows-server-2022-license-standard-edition-10-cores', 'windows-server-2022-license-standard-edition-12-cores', 'windows-server-2022-license-standard-edition-128-cores', 'windows-server-2022-license-standard-edition-14-cores', 'windows-server-2022-license-standard-edition-16-cores', 'windows-server-2022-license-standard-edition-18-cores', 'windows-server-2022-license-standard-edition-192-cores', 'windows-server-2022-license-standard-edition-20-cores', 'windows-server-2022-license-standard-edition-22-cores', 'windows-server-2022-license-standard-edition-24-cores', 'windows-server-2022-license-standard-edition-256-cores', 'windows-server-2022-license-standard-edition-26-cores', 'windows-server-2022-license-standard-edition-28-cores', 'windows-server-2022-license-standard-edition-30-cores', 'windows-server-2022-license-standard-edition-32-cores', 'windows-server-2022-license-standard-edition-34-cores', 'windows-server-2022-license-standard-edition-36-cores', 'windows-server-2022-license-standard-edition-38-cores', 'windows-server-2022-license-standard-edition-40-cores', 'windows-server-2022-license-standard-edition-42-cores', 'windows-server-2022-license-standard-edition-44-cores', 'windows-server-2022-license-standard-edition-46-cores', 'windows-server-2022-license-standard-edition-48-cores', 'windows-server-2022-license-standard-edition-50-cores', 'windows-server-2022-license-standard-edition-512-cores', 'windows-server-2022-license-standard-edition-52-cores', 'windows-server-2022-license-standard-edition-54-cores', 'windows-server-2022-license-standard-edition-56-cores', 'windows-server-2022-license-standard-edition-58-cores', 'windows-server-2022-license-standard-edition-60-cores', 'windows-server-2022-license-standard-edition-62-cores', 'windows-server-2022-license-standard-edition-64-cores', 'windows-server-2022-license-standard-edition-72-cores', 'windows-server-2022-license-standard-edition-8-cores', 'windows-server-2022-license-standard-edition-96-cores', 'windows-server-2025-license-datacenter-edition-10-cores', 'windows-server-2025-license-datacenter-edition-12-cores', 'windows-server-2025-license-datacenter-edition-128-cores', 'windows-server-2025-license-datacenter-edition-14-cores', 'windows-server-2025-license-datacenter-edition-16-cores', 'windows-server-2025-license-datacenter-edition-18-cores', 'windows-server-2025-license-datacenter-edition-192-cores', 'windows-server-2025-license-datacenter-edition-20-cores', 'windows-server-2025-license-datacenter-edition-22-cores', 'windows-server-2025-license-datacenter-edition-24-cores', 'windows-server-2025-license-datacenter-edition-256-cores', 'windows-server-2025-license-datacenter-edition-26-cores', 'windows-server-2025-license-datacenter-edition-28-cores', 'windows-server-2025-license-datacenter-edition-30-cores', 'windows-server-2025-license-datacenter-edition-32-cores', 'windows-server-2025-license-datacenter-edition-34-cores', 'windows-server-2025-license-datacenter-edition-36-cores', 'windows-server-2025-license-datacenter-edition-38-cores', 'windows-server-2025-license-datacenter-edition-40-cores', 'windows-server-2025-license-datacenter-edition-42-cores', 'windows-server-2025-license-datacenter-edition-44-cores', 'windows-server-2025-license-datacenter-edition-46-cores', 'windows-server-2025-license-datacenter-edition-48-cores', 'windows-server-2025-license-datacenter-edition-50-cores', 'windows-server-2025-license-datacenter-edition-512-cores', 'windows-server-2025-license-datacenter-edition-52-cores', 'windows-server-2025-license-datacenter-edition-54-cores', 'windows-server-2025-license-datacenter-edition-56-cores', 'windows-server-2025-license-datacenter-edition-58-cores', 'windows-server-2025-license-datacenter-edition-60-cores', 'windows-server-2025-license-datacenter-edition-62-cores', 'windows-server-2025-license-datacenter-edition-64-cores', 'windows-server-2025-license-datacenter-edition-72-cores', 'windows-server-2025-license-datacenter-edition-8-cores', 'windows-server-2025-license-datacenter-edition-96-cores', 'windows-server-2025-license-standard-edition-10-cores', 'windows-server-2025-license-standard-edition-12-cores', 'windows-server-2025-license-standard-edition-128-cores', 'windows-server-2025-license-standard-edition-14-cores', 'windows-server-2025-license-standard-edition-16-cores', 'windows-server-2025-license-standard-edition-18-cores', 'windows-server-2025-license-standard-edition-192-cores', 'windows-server-2025-license-standard-edition-20-cores', 'windows-server-2025-license-standard-edition-22-cores', 'windows-server-2025-license-standard-edition-24-cores', 'windows-server-2025-license-standard-edition-256-cores', 'windows-server-2025-license-standard-edition-26-cores', 'windows-server-2025-license-standard-edition-28-cores', 'windows-server-2025-license-standard-edition-30-cores', 'windows-server-2025-license-standard-edition-32-cores', 'windows-server-2025-license-standard-edition-34-cores', 'windows-server-2025-license-standard-edition-36-cores', 'windows-server-2025-license-standard-edition-38-cores', 'windows-server-2025-license-standard-edition-40-cores', 'windows-server-2025-license-standard-edition-42-cores', 'windows-server-2025-license-standard-edition-44-cores', 'windows-server-2025-license-standard-edition-46-cores', 'windows-server-2025-license-standard-edition-48-cores', 'windows-server-2025-license-standard-edition-50-cores', 'windows-server-2025-license-standard-edition-512-cores', 'windows-server-2025-license-standard-edition-52-cores', 'windows-server-2025-license-standard-edition-54-cores', 'windows-server-2025-license-standard-edition-56-cores', 'windows-server-2025-license-standard-edition-58-cores', 'windows-server-2025-license-standard-edition-60-cores', 'windows-server-2025-license-standard-edition-62-cores', 'windows-server-2025-license-standard-edition-64-cores', 'windows-server-2025-license-standard-edition-72-cores', 'windows-server-2025-license-standard-edition-8-cores', 'windows-server-2025-license-standard-edition-96-cores']
`}</CodeBlock>

</TabItem>
</Tabs>
