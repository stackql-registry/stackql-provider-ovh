--- 
title: license_sqlserver_news
hide_title: false
hide_table_of_contents: false
keywords:
  - license_sqlserver_news
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

Creates, updates, deletes, gets or lists a <code>license_sqlserver_news</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="license_sqlserver_news" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.order.license_sqlserver_news" /></td></tr>
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
    <td></td>
    <td>Get prices and contracts information</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-ip"><code>ip</code></a>, <a href="#parameter-version"><code>version</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
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
FROM ovh.order.license_sqlserver_news
WHERE duration = '{{ duration }}' -- required
AND ip = '{{ ip }}' -- required
AND version = '{{ version }}' -- required
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
FROM ovh.order.license_sqlserver_news
WHERE ip = '{{ ip }}' -- required
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
INSERT INTO ovh.order.license_sqlserver_news (
ip,
version,
duration
)
SELECT 
'{{ ip }}' /* required */,
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
- name: license_sqlserver_news
  props:
    - name: duration
      value: "{{ duration }}"
      description: Required parameter for the license_sqlserver_news resource.
    - name: ip
      value: "{{ ip }}"
      description: |
        IPv4 address (e.g., 192.0.2.0)
    - name: version
      value: "{{ version }}"
      description: |
        All versions for SQL Server product
      valid_values: ['SQL_SERVER_2008_STANDARD_EDITION_2_CPU', 'SQL_SERVER_2008_STANDARD_EDITION_4_CPU', 'SQL_SERVER_2008_WEB_EDITION_2_CPU', 'SQL_SERVER_2008_WEB_EDITION_4_CPU', 'SQL_SERVER_2012_STANDARD_EDITION_10_CORES', 'SQL_SERVER_2012_STANDARD_EDITION_12_CORES', 'SQL_SERVER_2012_STANDARD_EDITION_16_CORES', 'SQL_SERVER_2012_STANDARD_EDITION_18_CORES', 'SQL_SERVER_2012_STANDARD_EDITION_20_CORES', 'SQL_SERVER_2012_STANDARD_EDITION_24_CORES', 'SQL_SERVER_2012_STANDARD_EDITION_2_CPU', 'SQL_SERVER_2012_STANDARD_EDITION_32_CORES', 'SQL_SERVER_2012_STANDARD_EDITION_4_CORES', 'SQL_SERVER_2012_STANDARD_EDITION_6_CORES', 'SQL_SERVER_2012_STANDARD_EDITION_8_CORES', 'SQL_SERVER_2012_WEB_EDITION_10_CORES', 'SQL_SERVER_2012_WEB_EDITION_12_CORES', 'SQL_SERVER_2012_WEB_EDITION_16_CORES', 'SQL_SERVER_2012_WEB_EDITION_18_CORES', 'SQL_SERVER_2012_WEB_EDITION_20_CORES', 'SQL_SERVER_2012_WEB_EDITION_24_CORES', 'SQL_SERVER_2012_WEB_EDITION_32_CORES', 'SQL_SERVER_2012_WEB_EDITION_4_CORES', 'SQL_SERVER_2012_WEB_EDITION_6_CORES', 'SQL_SERVER_2012_WEB_EDITION_8_CORES', 'SQL_SERVER_2014_STANDARD_EDITION_10_CORES', 'SQL_SERVER_2014_STANDARD_EDITION_12_CORES', 'SQL_SERVER_2014_STANDARD_EDITION_16_CORES', 'SQL_SERVER_2014_STANDARD_EDITION_18_CORES', 'SQL_SERVER_2014_STANDARD_EDITION_20_CORES', 'SQL_SERVER_2014_STANDARD_EDITION_24_CORES', 'SQL_SERVER_2014_STANDARD_EDITION_4_CORES', 'SQL_SERVER_2014_STANDARD_EDITION_6_CORES', 'SQL_SERVER_2014_STANDARD_EDITION_8_CORES', 'SQL_SERVER_2014_WEB_EDITION_10_CORES', 'SQL_SERVER_2014_WEB_EDITION_12_CORES', 'SQL_SERVER_2014_WEB_EDITION_16_CORES', 'SQL_SERVER_2014_WEB_EDITION_18_CORES', 'SQL_SERVER_2014_WEB_EDITION_20_CORES', 'SQL_SERVER_2014_WEB_EDITION_24_CORES', 'SQL_SERVER_2014_WEB_EDITION_4_CORES', 'SQL_SERVER_2014_WEB_EDITION_6_CORES', 'SQL_SERVER_2014_WEB_EDITION_8_CORES', 'SQL_SERVER_2016_STANDARD_EDITION_10_CORES', 'SQL_SERVER_2016_STANDARD_EDITION_12_CORES', 'SQL_SERVER_2016_STANDARD_EDITION_14_CORES', 'SQL_SERVER_2016_STANDARD_EDITION_16_CORES', 'SQL_SERVER_2016_STANDARD_EDITION_4_CORES', 'SQL_SERVER_2016_STANDARD_EDITION_6_CORES', 'SQL_SERVER_2016_STANDARD_EDITION_8_CORES', 'SQL_SERVER_2016_WEB_EDITION_10_CORES', 'SQL_SERVER_2016_WEB_EDITION_12_CORES', 'SQL_SERVER_2016_WEB_EDITION_14_CORES', 'SQL_SERVER_2016_WEB_EDITION_16_CORES', 'SQL_SERVER_2016_WEB_EDITION_4_CORES', 'SQL_SERVER_2016_WEB_EDITION_6_CORES', 'SQL_SERVER_2016_WEB_EDITION_8_CORES', 'SQL_SERVER_2017_STANDARD_EDITION_10_CORES', 'SQL_SERVER_2017_STANDARD_EDITION_12_CORES', 'SQL_SERVER_2017_STANDARD_EDITION_14_CORES', 'SQL_SERVER_2017_STANDARD_EDITION_16_CORES', 'SQL_SERVER_2017_STANDARD_EDITION_18_CORES', 'SQL_SERVER_2017_STANDARD_EDITION_20_CORES', 'SQL_SERVER_2017_STANDARD_EDITION_22_CORES', 'SQL_SERVER_2017_STANDARD_EDITION_24_CORES', 'SQL_SERVER_2017_STANDARD_EDITION_26_CORES', 'SQL_SERVER_2017_STANDARD_EDITION_28_CORES', 'SQL_SERVER_2017_STANDARD_EDITION_30_CORES', 'SQL_SERVER_2017_STANDARD_EDITION_32_CORES', 'SQL_SERVER_2017_STANDARD_EDITION_4_CORES', 'SQL_SERVER_2017_STANDARD_EDITION_6_CORES', 'SQL_SERVER_2017_STANDARD_EDITION_8_CORES', 'SQL_SERVER_2017_WEB_EDITION_10_CORES', 'SQL_SERVER_2017_WEB_EDITION_12_CORES', 'SQL_SERVER_2017_WEB_EDITION_14_CORES', 'SQL_SERVER_2017_WEB_EDITION_16_CORES', 'SQL_SERVER_2017_WEB_EDITION_18_CORES', 'SQL_SERVER_2017_WEB_EDITION_20_CORES', 'SQL_SERVER_2017_WEB_EDITION_22_CORES', 'SQL_SERVER_2017_WEB_EDITION_24_CORES', 'SQL_SERVER_2017_WEB_EDITION_26_CORES', 'SQL_SERVER_2017_WEB_EDITION_28_CORES', 'SQL_SERVER_2017_WEB_EDITION_30_CORES', 'SQL_SERVER_2017_WEB_EDITION_32_CORES', 'SQL_SERVER_2017_WEB_EDITION_4_CORES', 'SQL_SERVER_2017_WEB_EDITION_6_CORES', 'SQL_SERVER_2017_WEB_EDITION_8_CORES', 'SQL_SERVER_2019_ENTERPRISE_EDITION_10_CORES', 'SQL_SERVER_2019_ENTERPRISE_EDITION_128_CORES', 'SQL_SERVER_2019_ENTERPRISE_EDITION_12_CORES', 'SQL_SERVER_2019_ENTERPRISE_EDITION_14_CORES', 'SQL_SERVER_2019_ENTERPRISE_EDITION_16_CORES', 'SQL_SERVER_2019_ENTERPRISE_EDITION_18_CORES', 'SQL_SERVER_2019_ENTERPRISE_EDITION_192_CORES', 'SQL_SERVER_2019_ENTERPRISE_EDITION_20_CORES', 'SQL_SERVER_2019_ENTERPRISE_EDITION_22_CORES', 'SQL_SERVER_2019_ENTERPRISE_EDITION_24_CORES', 'SQL_SERVER_2019_ENTERPRISE_EDITION_26_CORES', 'SQL_SERVER_2019_ENTERPRISE_EDITION_28_CORES', 'SQL_SERVER_2019_ENTERPRISE_EDITION_30_CORES', 'SQL_SERVER_2019_ENTERPRISE_EDITION_32_CORES', 'SQL_SERVER_2019_ENTERPRISE_EDITION_34_CORES', 'SQL_SERVER_2019_ENTERPRISE_EDITION_36_CORES', 'SQL_SERVER_2019_ENTERPRISE_EDITION_384_CORES', 'SQL_SERVER_2019_ENTERPRISE_EDITION_38_CORES', 'SQL_SERVER_2019_ENTERPRISE_EDITION_40_CORES', 'SQL_SERVER_2019_ENTERPRISE_EDITION_42_CORES', 'SQL_SERVER_2019_ENTERPRISE_EDITION_44_CORES', 'SQL_SERVER_2019_ENTERPRISE_EDITION_46_CORES', 'SQL_SERVER_2019_ENTERPRISE_EDITION_48_CORES', 'SQL_SERVER_2019_ENTERPRISE_EDITION_4_CORES', 'SQL_SERVER_2019_ENTERPRISE_EDITION_50_CORES', 'SQL_SERVER_2019_ENTERPRISE_EDITION_52_CORES', 'SQL_SERVER_2019_ENTERPRISE_EDITION_54_CORES', 'SQL_SERVER_2019_ENTERPRISE_EDITION_56_CORES', 'SQL_SERVER_2019_ENTERPRISE_EDITION_58_CORES', 'SQL_SERVER_2019_ENTERPRISE_EDITION_60_CORES', 'SQL_SERVER_2019_ENTERPRISE_EDITION_62_CORES', 'SQL_SERVER_2019_ENTERPRISE_EDITION_64_CORES', 'SQL_SERVER_2019_ENTERPRISE_EDITION_6_CORES', 'SQL_SERVER_2019_ENTERPRISE_EDITION_72_CORES', 'SQL_SERVER_2019_ENTERPRISE_EDITION_8_CORES', 'SQL_SERVER_2019_ENTERPRISE_EDITION_96_CORES', 'SQL_SERVER_2019_STANDARD_EDITION_10_CORES', 'SQL_SERVER_2019_STANDARD_EDITION_128_CORES', 'SQL_SERVER_2019_STANDARD_EDITION_12_CORES', 'SQL_SERVER_2019_STANDARD_EDITION_14_CORES', 'SQL_SERVER_2019_STANDARD_EDITION_16_CORES', 'SQL_SERVER_2019_STANDARD_EDITION_18_CORES', 'SQL_SERVER_2019_STANDARD_EDITION_192_CORES', 'SQL_SERVER_2019_STANDARD_EDITION_20_CORES', 'SQL_SERVER_2019_STANDARD_EDITION_22_CORES', 'SQL_SERVER_2019_STANDARD_EDITION_24_CORES', 'SQL_SERVER_2019_STANDARD_EDITION_26_CORES', 'SQL_SERVER_2019_STANDARD_EDITION_28_CORES', 'SQL_SERVER_2019_STANDARD_EDITION_30_CORES', 'SQL_SERVER_2019_STANDARD_EDITION_32_CORES', 'SQL_SERVER_2019_STANDARD_EDITION_34_CORES', 'SQL_SERVER_2019_STANDARD_EDITION_36_CORES', 'SQL_SERVER_2019_STANDARD_EDITION_384_CORES', 'SQL_SERVER_2019_STANDARD_EDITION_38_CORES', 'SQL_SERVER_2019_STANDARD_EDITION_40_CORES', 'SQL_SERVER_2019_STANDARD_EDITION_42_CORES', 'SQL_SERVER_2019_STANDARD_EDITION_44_CORES', 'SQL_SERVER_2019_STANDARD_EDITION_46_CORES', 'SQL_SERVER_2019_STANDARD_EDITION_48_CORES', 'SQL_SERVER_2019_STANDARD_EDITION_4_CORES', 'SQL_SERVER_2019_STANDARD_EDITION_50_CORES', 'SQL_SERVER_2019_STANDARD_EDITION_52_CORES', 'SQL_SERVER_2019_STANDARD_EDITION_54_CORES', 'SQL_SERVER_2019_STANDARD_EDITION_56_CORES', 'SQL_SERVER_2019_STANDARD_EDITION_58_CORES', 'SQL_SERVER_2019_STANDARD_EDITION_60_CORES', 'SQL_SERVER_2019_STANDARD_EDITION_62_CORES', 'SQL_SERVER_2019_STANDARD_EDITION_64_CORES', 'SQL_SERVER_2019_STANDARD_EDITION_6_CORES', 'SQL_SERVER_2019_STANDARD_EDITION_72_CORES', 'SQL_SERVER_2019_STANDARD_EDITION_8_CORES', 'SQL_SERVER_2019_STANDARD_EDITION_96_CORES', 'SQL_SERVER_2019_WEB_EDITION_10_CORES', 'SQL_SERVER_2019_WEB_EDITION_128_CORES', 'SQL_SERVER_2019_WEB_EDITION_12_CORES', 'SQL_SERVER_2019_WEB_EDITION_14_CORES', 'SQL_SERVER_2019_WEB_EDITION_16_CORES', 'SQL_SERVER_2019_WEB_EDITION_18_CORES', 'SQL_SERVER_2019_WEB_EDITION_192_CORES', 'SQL_SERVER_2019_WEB_EDITION_20_CORES', 'SQL_SERVER_2019_WEB_EDITION_22_CORES', 'SQL_SERVER_2019_WEB_EDITION_24_CORES', 'SQL_SERVER_2019_WEB_EDITION_26_CORES', 'SQL_SERVER_2019_WEB_EDITION_28_CORES', 'SQL_SERVER_2019_WEB_EDITION_30_CORES', 'SQL_SERVER_2019_WEB_EDITION_32_CORES', 'SQL_SERVER_2019_WEB_EDITION_34_CORES', 'SQL_SERVER_2019_WEB_EDITION_36_CORES', 'SQL_SERVER_2019_WEB_EDITION_384_CORES', 'SQL_SERVER_2019_WEB_EDITION_38_CORES', 'SQL_SERVER_2019_WEB_EDITION_40_CORES', 'SQL_SERVER_2019_WEB_EDITION_42_CORES', 'SQL_SERVER_2019_WEB_EDITION_44_CORES', 'SQL_SERVER_2019_WEB_EDITION_46_CORES', 'SQL_SERVER_2019_WEB_EDITION_48_CORES', 'SQL_SERVER_2019_WEB_EDITION_4_CORES', 'SQL_SERVER_2019_WEB_EDITION_50_CORES', 'SQL_SERVER_2019_WEB_EDITION_52_CORES', 'SQL_SERVER_2019_WEB_EDITION_54_CORES', 'SQL_SERVER_2019_WEB_EDITION_56_CORES', 'SQL_SERVER_2019_WEB_EDITION_58_CORES', 'SQL_SERVER_2019_WEB_EDITION_60_CORES', 'SQL_SERVER_2019_WEB_EDITION_62_CORES', 'SQL_SERVER_2019_WEB_EDITION_64_CORES', 'SQL_SERVER_2019_WEB_EDITION_6_CORES', 'SQL_SERVER_2019_WEB_EDITION_72_CORES', 'SQL_SERVER_2019_WEB_EDITION_8_CORES', 'SQL_SERVER_2019_WEB_EDITION_96_CORES', 'SQL_SERVER_2022_ENTERPRISE_EDITION_10_CORES', 'SQL_SERVER_2022_ENTERPRISE_EDITION_128_CORES', 'SQL_SERVER_2022_ENTERPRISE_EDITION_12_CORES', 'SQL_SERVER_2022_ENTERPRISE_EDITION_14_CORES', 'SQL_SERVER_2022_ENTERPRISE_EDITION_16_CORES', 'SQL_SERVER_2022_ENTERPRISE_EDITION_18_CORES', 'SQL_SERVER_2022_ENTERPRISE_EDITION_192_CORES', 'SQL_SERVER_2022_ENTERPRISE_EDITION_20_CORES', 'SQL_SERVER_2022_ENTERPRISE_EDITION_22_CORES', 'SQL_SERVER_2022_ENTERPRISE_EDITION_24_CORES', 'SQL_SERVER_2022_ENTERPRISE_EDITION_26_CORES', 'SQL_SERVER_2022_ENTERPRISE_EDITION_28_CORES', 'SQL_SERVER_2022_ENTERPRISE_EDITION_30_CORES', 'SQL_SERVER_2022_ENTERPRISE_EDITION_32_CORES', 'SQL_SERVER_2022_ENTERPRISE_EDITION_34_CORES', 'SQL_SERVER_2022_ENTERPRISE_EDITION_36_CORES', 'SQL_SERVER_2022_ENTERPRISE_EDITION_384_CORES', 'SQL_SERVER_2022_ENTERPRISE_EDITION_38_CORES', 'SQL_SERVER_2022_ENTERPRISE_EDITION_40_CORES', 'SQL_SERVER_2022_ENTERPRISE_EDITION_42_CORES', 'SQL_SERVER_2022_ENTERPRISE_EDITION_44_CORES', 'SQL_SERVER_2022_ENTERPRISE_EDITION_46_CORES', 'SQL_SERVER_2022_ENTERPRISE_EDITION_48_CORES', 'SQL_SERVER_2022_ENTERPRISE_EDITION_4_CORES', 'SQL_SERVER_2022_ENTERPRISE_EDITION_50_CORES', 'SQL_SERVER_2022_ENTERPRISE_EDITION_52_CORES', 'SQL_SERVER_2022_ENTERPRISE_EDITION_54_CORES', 'SQL_SERVER_2022_ENTERPRISE_EDITION_56_CORES', 'SQL_SERVER_2022_ENTERPRISE_EDITION_58_CORES', 'SQL_SERVER_2022_ENTERPRISE_EDITION_60_CORES', 'SQL_SERVER_2022_ENTERPRISE_EDITION_62_CORES', 'SQL_SERVER_2022_ENTERPRISE_EDITION_64_CORES', 'SQL_SERVER_2022_ENTERPRISE_EDITION_6_CORES', 'SQL_SERVER_2022_ENTERPRISE_EDITION_72_CORES', 'SQL_SERVER_2022_ENTERPRISE_EDITION_8_CORES', 'SQL_SERVER_2022_ENTERPRISE_EDITION_96_CORES', 'SQL_SERVER_2022_STANDARD_EDITION_10_CORES', 'SQL_SERVER_2022_STANDARD_EDITION_128_CORES', 'SQL_SERVER_2022_STANDARD_EDITION_12_CORES', 'SQL_SERVER_2022_STANDARD_EDITION_14_CORES', 'SQL_SERVER_2022_STANDARD_EDITION_16_CORES', 'SQL_SERVER_2022_STANDARD_EDITION_18_CORES', 'SQL_SERVER_2022_STANDARD_EDITION_192_CORES', 'SQL_SERVER_2022_STANDARD_EDITION_20_CORES', 'SQL_SERVER_2022_STANDARD_EDITION_22_CORES', 'SQL_SERVER_2022_STANDARD_EDITION_24_CORES', 'SQL_SERVER_2022_STANDARD_EDITION_26_CORES', 'SQL_SERVER_2022_STANDARD_EDITION_28_CORES', 'SQL_SERVER_2022_STANDARD_EDITION_30_CORES', 'SQL_SERVER_2022_STANDARD_EDITION_32_CORES', 'SQL_SERVER_2022_STANDARD_EDITION_34_CORES', 'SQL_SERVER_2022_STANDARD_EDITION_36_CORES', 'SQL_SERVER_2022_STANDARD_EDITION_384_CORES', 'SQL_SERVER_2022_STANDARD_EDITION_38_CORES', 'SQL_SERVER_2022_STANDARD_EDITION_40_CORES', 'SQL_SERVER_2022_STANDARD_EDITION_42_CORES', 'SQL_SERVER_2022_STANDARD_EDITION_44_CORES', 'SQL_SERVER_2022_STANDARD_EDITION_46_CORES', 'SQL_SERVER_2022_STANDARD_EDITION_48_CORES', 'SQL_SERVER_2022_STANDARD_EDITION_4_CORES', 'SQL_SERVER_2022_STANDARD_EDITION_50_CORES', 'SQL_SERVER_2022_STANDARD_EDITION_52_CORES', 'SQL_SERVER_2022_STANDARD_EDITION_54_CORES', 'SQL_SERVER_2022_STANDARD_EDITION_56_CORES', 'SQL_SERVER_2022_STANDARD_EDITION_58_CORES', 'SQL_SERVER_2022_STANDARD_EDITION_60_CORES', 'SQL_SERVER_2022_STANDARD_EDITION_62_CORES', 'SQL_SERVER_2022_STANDARD_EDITION_64_CORES', 'SQL_SERVER_2022_STANDARD_EDITION_6_CORES', 'SQL_SERVER_2022_STANDARD_EDITION_72_CORES', 'SQL_SERVER_2022_STANDARD_EDITION_8_CORES', 'SQL_SERVER_2022_STANDARD_EDITION_96_CORES', 'SQL_SERVER_2022_WEB_EDITION_10_CORES', 'SQL_SERVER_2022_WEB_EDITION_128_CORES', 'SQL_SERVER_2022_WEB_EDITION_12_CORES', 'SQL_SERVER_2022_WEB_EDITION_14_CORES', 'SQL_SERVER_2022_WEB_EDITION_16_CORES', 'SQL_SERVER_2022_WEB_EDITION_18_CORES', 'SQL_SERVER_2022_WEB_EDITION_192_CORES', 'SQL_SERVER_2022_WEB_EDITION_20_CORES', 'SQL_SERVER_2022_WEB_EDITION_22_CORES', 'SQL_SERVER_2022_WEB_EDITION_24_CORES', 'SQL_SERVER_2022_WEB_EDITION_26_CORES', 'SQL_SERVER_2022_WEB_EDITION_28_CORES', 'SQL_SERVER_2022_WEB_EDITION_30_CORES', 'SQL_SERVER_2022_WEB_EDITION_32_CORES', 'SQL_SERVER_2022_WEB_EDITION_34_CORES', 'SQL_SERVER_2022_WEB_EDITION_36_CORES', 'SQL_SERVER_2022_WEB_EDITION_384_CORES', 'SQL_SERVER_2022_WEB_EDITION_38_CORES', 'SQL_SERVER_2022_WEB_EDITION_40_CORES', 'SQL_SERVER_2022_WEB_EDITION_42_CORES', 'SQL_SERVER_2022_WEB_EDITION_44_CORES', 'SQL_SERVER_2022_WEB_EDITION_46_CORES', 'SQL_SERVER_2022_WEB_EDITION_48_CORES', 'SQL_SERVER_2022_WEB_EDITION_4_CORES', 'SQL_SERVER_2022_WEB_EDITION_50_CORES', 'SQL_SERVER_2022_WEB_EDITION_52_CORES', 'SQL_SERVER_2022_WEB_EDITION_54_CORES', 'SQL_SERVER_2022_WEB_EDITION_56_CORES', 'SQL_SERVER_2022_WEB_EDITION_58_CORES', 'SQL_SERVER_2022_WEB_EDITION_60_CORES', 'SQL_SERVER_2022_WEB_EDITION_62_CORES', 'SQL_SERVER_2022_WEB_EDITION_64_CORES', 'SQL_SERVER_2022_WEB_EDITION_6_CORES', 'SQL_SERVER_2022_WEB_EDITION_72_CORES', 'SQL_SERVER_2022_WEB_EDITION_8_CORES', 'SQL_SERVER_2022_WEB_EDITION_96_CORES', 'SQL_SERVER_2025_ENTERPRISE_EDITION_10_CORES', 'SQL_SERVER_2025_ENTERPRISE_EDITION_128_CORES', 'SQL_SERVER_2025_ENTERPRISE_EDITION_12_CORES', 'SQL_SERVER_2025_ENTERPRISE_EDITION_14_CORES', 'SQL_SERVER_2025_ENTERPRISE_EDITION_16_CORES', 'SQL_SERVER_2025_ENTERPRISE_EDITION_18_CORES', 'SQL_SERVER_2025_ENTERPRISE_EDITION_192_CORES', 'SQL_SERVER_2025_ENTERPRISE_EDITION_20_CORES', 'SQL_SERVER_2025_ENTERPRISE_EDITION_22_CORES', 'SQL_SERVER_2025_ENTERPRISE_EDITION_24_CORES', 'SQL_SERVER_2025_ENTERPRISE_EDITION_26_CORES', 'SQL_SERVER_2025_ENTERPRISE_EDITION_28_CORES', 'SQL_SERVER_2025_ENTERPRISE_EDITION_30_CORES', 'SQL_SERVER_2025_ENTERPRISE_EDITION_32_CORES', 'SQL_SERVER_2025_ENTERPRISE_EDITION_34_CORES', 'SQL_SERVER_2025_ENTERPRISE_EDITION_36_CORES', 'SQL_SERVER_2025_ENTERPRISE_EDITION_384_CORES', 'SQL_SERVER_2025_ENTERPRISE_EDITION_38_CORES', 'SQL_SERVER_2025_ENTERPRISE_EDITION_40_CORES', 'SQL_SERVER_2025_ENTERPRISE_EDITION_42_CORES', 'SQL_SERVER_2025_ENTERPRISE_EDITION_44_CORES', 'SQL_SERVER_2025_ENTERPRISE_EDITION_46_CORES', 'SQL_SERVER_2025_ENTERPRISE_EDITION_48_CORES', 'SQL_SERVER_2025_ENTERPRISE_EDITION_4_CORES', 'SQL_SERVER_2025_ENTERPRISE_EDITION_50_CORES', 'SQL_SERVER_2025_ENTERPRISE_EDITION_52_CORES', 'SQL_SERVER_2025_ENTERPRISE_EDITION_54_CORES', 'SQL_SERVER_2025_ENTERPRISE_EDITION_56_CORES', 'SQL_SERVER_2025_ENTERPRISE_EDITION_58_CORES', 'SQL_SERVER_2025_ENTERPRISE_EDITION_60_CORES', 'SQL_SERVER_2025_ENTERPRISE_EDITION_62_CORES', 'SQL_SERVER_2025_ENTERPRISE_EDITION_64_CORES', 'SQL_SERVER_2025_ENTERPRISE_EDITION_6_CORES', 'SQL_SERVER_2025_ENTERPRISE_EDITION_72_CORES', 'SQL_SERVER_2025_ENTERPRISE_EDITION_8_CORES', 'SQL_SERVER_2025_ENTERPRISE_EDITION_96_CORES', 'SQL_SERVER_2025_STANDARD_EDITION_10_CORES', 'SQL_SERVER_2025_STANDARD_EDITION_128_CORES', 'SQL_SERVER_2025_STANDARD_EDITION_12_CORES', 'SQL_SERVER_2025_STANDARD_EDITION_14_CORES', 'SQL_SERVER_2025_STANDARD_EDITION_16_CORES', 'SQL_SERVER_2025_STANDARD_EDITION_18_CORES', 'SQL_SERVER_2025_STANDARD_EDITION_192_CORES', 'SQL_SERVER_2025_STANDARD_EDITION_20_CORES', 'SQL_SERVER_2025_STANDARD_EDITION_22_CORES', 'SQL_SERVER_2025_STANDARD_EDITION_24_CORES', 'SQL_SERVER_2025_STANDARD_EDITION_26_CORES', 'SQL_SERVER_2025_STANDARD_EDITION_28_CORES', 'SQL_SERVER_2025_STANDARD_EDITION_30_CORES', 'SQL_SERVER_2025_STANDARD_EDITION_32_CORES', 'SQL_SERVER_2025_STANDARD_EDITION_34_CORES', 'SQL_SERVER_2025_STANDARD_EDITION_36_CORES', 'SQL_SERVER_2025_STANDARD_EDITION_384_CORES', 'SQL_SERVER_2025_STANDARD_EDITION_38_CORES', 'SQL_SERVER_2025_STANDARD_EDITION_40_CORES', 'SQL_SERVER_2025_STANDARD_EDITION_42_CORES', 'SQL_SERVER_2025_STANDARD_EDITION_44_CORES', 'SQL_SERVER_2025_STANDARD_EDITION_46_CORES', 'SQL_SERVER_2025_STANDARD_EDITION_48_CORES', 'SQL_SERVER_2025_STANDARD_EDITION_4_CORES', 'SQL_SERVER_2025_STANDARD_EDITION_50_CORES', 'SQL_SERVER_2025_STANDARD_EDITION_52_CORES', 'SQL_SERVER_2025_STANDARD_EDITION_54_CORES', 'SQL_SERVER_2025_STANDARD_EDITION_56_CORES', 'SQL_SERVER_2025_STANDARD_EDITION_58_CORES', 'SQL_SERVER_2025_STANDARD_EDITION_60_CORES', 'SQL_SERVER_2025_STANDARD_EDITION_62_CORES', 'SQL_SERVER_2025_STANDARD_EDITION_64_CORES', 'SQL_SERVER_2025_STANDARD_EDITION_6_CORES', 'SQL_SERVER_2025_STANDARD_EDITION_72_CORES', 'SQL_SERVER_2025_STANDARD_EDITION_8_CORES', 'SQL_SERVER_2025_STANDARD_EDITION_96_CORES', 'SQL_SERVER_2025_WEB_EDITION_10_CORES', 'SQL_SERVER_2025_WEB_EDITION_128_CORES', 'SQL_SERVER_2025_WEB_EDITION_12_CORES', 'SQL_SERVER_2025_WEB_EDITION_14_CORES', 'SQL_SERVER_2025_WEB_EDITION_16_CORES', 'SQL_SERVER_2025_WEB_EDITION_18_CORES', 'SQL_SERVER_2025_WEB_EDITION_192_CORES', 'SQL_SERVER_2025_WEB_EDITION_20_CORES', 'SQL_SERVER_2025_WEB_EDITION_22_CORES', 'SQL_SERVER_2025_WEB_EDITION_24_CORES', 'SQL_SERVER_2025_WEB_EDITION_26_CORES', 'SQL_SERVER_2025_WEB_EDITION_28_CORES', 'SQL_SERVER_2025_WEB_EDITION_30_CORES', 'SQL_SERVER_2025_WEB_EDITION_32_CORES', 'SQL_SERVER_2025_WEB_EDITION_34_CORES', 'SQL_SERVER_2025_WEB_EDITION_36_CORES', 'SQL_SERVER_2025_WEB_EDITION_384_CORES', 'SQL_SERVER_2025_WEB_EDITION_38_CORES', 'SQL_SERVER_2025_WEB_EDITION_40_CORES', 'SQL_SERVER_2025_WEB_EDITION_42_CORES', 'SQL_SERVER_2025_WEB_EDITION_44_CORES', 'SQL_SERVER_2025_WEB_EDITION_46_CORES', 'SQL_SERVER_2025_WEB_EDITION_48_CORES', 'SQL_SERVER_2025_WEB_EDITION_4_CORES', 'SQL_SERVER_2025_WEB_EDITION_50_CORES', 'SQL_SERVER_2025_WEB_EDITION_52_CORES', 'SQL_SERVER_2025_WEB_EDITION_54_CORES', 'SQL_SERVER_2025_WEB_EDITION_56_CORES', 'SQL_SERVER_2025_WEB_EDITION_58_CORES', 'SQL_SERVER_2025_WEB_EDITION_60_CORES', 'SQL_SERVER_2025_WEB_EDITION_62_CORES', 'SQL_SERVER_2025_WEB_EDITION_64_CORES', 'SQL_SERVER_2025_WEB_EDITION_6_CORES', 'SQL_SERVER_2025_WEB_EDITION_72_CORES', 'SQL_SERVER_2025_WEB_EDITION_8_CORES', 'SQL_SERVER_2025_WEB_EDITION_96_CORES', 'sql-server-2008-license-standard-edition-2-cpu', 'sql-server-2008-license-standard-edition-4-cpu', 'sql-server-2008-license-web-edition-2-cpu', 'sql-server-2008-license-web-edition-4-cpu', 'sql-server-2012-license-standard-edition-10-cores', 'sql-server-2012-license-standard-edition-12-cores', 'sql-server-2012-license-standard-edition-16-cores', 'sql-server-2012-license-standard-edition-18-cores', 'sql-server-2012-license-standard-edition-2-cpu', 'sql-server-2012-license-standard-edition-20-cores', 'sql-server-2012-license-standard-edition-24-cores', 'sql-server-2012-license-standard-edition-32-cores', 'sql-server-2012-license-standard-edition-4-cores', 'sql-server-2012-license-standard-edition-6-cores', 'sql-server-2012-license-standard-edition-8-cores', 'sql-server-2012-license-web-edition-10-cores', 'sql-server-2012-license-web-edition-12-cores', 'sql-server-2012-license-web-edition-16-cores', 'sql-server-2012-license-web-edition-18-cores', 'sql-server-2012-license-web-edition-20-cores', 'sql-server-2012-license-web-edition-24-cores', 'sql-server-2012-license-web-edition-32-cores', 'sql-server-2012-license-web-edition-4-cores', 'sql-server-2012-license-web-edition-6-cores', 'sql-server-2012-license-web-edition-8-cores', 'sql-server-2014-license-standard-edition-10-cores', 'sql-server-2014-license-standard-edition-12-cores', 'sql-server-2014-license-standard-edition-16-cores', 'sql-server-2014-license-standard-edition-18-cores', 'sql-server-2014-license-standard-edition-20-cores', 'sql-server-2014-license-standard-edition-24-cores', 'sql-server-2014-license-standard-edition-4-cores', 'sql-server-2014-license-standard-edition-6-cores', 'sql-server-2014-license-standard-edition-8-cores', 'sql-server-2014-license-web-edition-10-cores', 'sql-server-2014-license-web-edition-12-cores', 'sql-server-2014-license-web-edition-16-cores', 'sql-server-2014-license-web-edition-18-cores', 'sql-server-2014-license-web-edition-20-cores', 'sql-server-2014-license-web-edition-24-cores', 'sql-server-2014-license-web-edition-4-cores', 'sql-server-2014-license-web-edition-6-cores', 'sql-server-2014-license-web-edition-8-cores', 'sql-server-2016-license-standard-edition-10-cores', 'sql-server-2016-license-standard-edition-12-cores', 'sql-server-2016-license-standard-edition-14-cores', 'sql-server-2016-license-standard-edition-16-cores', 'sql-server-2016-license-standard-edition-4-cores', 'sql-server-2016-license-standard-edition-6-cores', 'sql-server-2016-license-standard-edition-8-cores', 'sql-server-2016-license-web-edition-10-cores', 'sql-server-2016-license-web-edition-12-cores', 'sql-server-2016-license-web-edition-14-cores', 'sql-server-2016-license-web-edition-16-cores', 'sql-server-2016-license-web-edition-4-cores', 'sql-server-2016-license-web-edition-6-cores', 'sql-server-2016-license-web-edition-8-cores', 'sql-server-2017-license-standard-edition-10-cores', 'sql-server-2017-license-standard-edition-12-cores', 'sql-server-2017-license-standard-edition-14-cores', 'sql-server-2017-license-standard-edition-16-cores', 'sql-server-2017-license-standard-edition-18-cores', 'sql-server-2017-license-standard-edition-20-cores', 'sql-server-2017-license-standard-edition-22-cores', 'sql-server-2017-license-standard-edition-24-cores', 'sql-server-2017-license-standard-edition-26-cores', 'sql-server-2017-license-standard-edition-28-cores', 'sql-server-2017-license-standard-edition-30-cores', 'sql-server-2017-license-standard-edition-32-cores', 'sql-server-2017-license-standard-edition-4-cores', 'sql-server-2017-license-standard-edition-6-cores', 'sql-server-2017-license-standard-edition-8-cores', 'sql-server-2017-license-web-edition-10-cores', 'sql-server-2017-license-web-edition-12-cores', 'sql-server-2017-license-web-edition-14-cores', 'sql-server-2017-license-web-edition-16-cores', 'sql-server-2017-license-web-edition-18-cores', 'sql-server-2017-license-web-edition-20-cores', 'sql-server-2017-license-web-edition-22-cores', 'sql-server-2017-license-web-edition-24-cores', 'sql-server-2017-license-web-edition-26-cores', 'sql-server-2017-license-web-edition-28-cores', 'sql-server-2017-license-web-edition-30-cores', 'sql-server-2017-license-web-edition-32-cores', 'sql-server-2017-license-web-edition-4-cores', 'sql-server-2017-license-web-edition-6-cores', 'sql-server-2017-license-web-edition-8-cores', 'sql-server-2019-license-enterprise-edition-10-cores', 'sql-server-2019-license-enterprise-edition-12-cores', 'sql-server-2019-license-enterprise-edition-128-cores', 'sql-server-2019-license-enterprise-edition-14-cores', 'sql-server-2019-license-enterprise-edition-16-cores', 'sql-server-2019-license-enterprise-edition-18-cores', 'sql-server-2019-license-enterprise-edition-192-cores', 'sql-server-2019-license-enterprise-edition-20-cores', 'sql-server-2019-license-enterprise-edition-22-cores', 'sql-server-2019-license-enterprise-edition-24-cores', 'sql-server-2019-license-enterprise-edition-26-cores', 'sql-server-2019-license-enterprise-edition-28-cores', 'sql-server-2019-license-enterprise-edition-30-cores', 'sql-server-2019-license-enterprise-edition-32-cores', 'sql-server-2019-license-enterprise-edition-34-cores', 'sql-server-2019-license-enterprise-edition-36-cores', 'sql-server-2019-license-enterprise-edition-38-cores', 'sql-server-2019-license-enterprise-edition-384-cores', 'sql-server-2019-license-enterprise-edition-4-cores', 'sql-server-2019-license-enterprise-edition-40-cores', 'sql-server-2019-license-enterprise-edition-42-cores', 'sql-server-2019-license-enterprise-edition-44-cores', 'sql-server-2019-license-enterprise-edition-46-cores', 'sql-server-2019-license-enterprise-edition-48-cores', 'sql-server-2019-license-enterprise-edition-50-cores', 'sql-server-2019-license-enterprise-edition-52-cores', 'sql-server-2019-license-enterprise-edition-54-cores', 'sql-server-2019-license-enterprise-edition-56-cores', 'sql-server-2019-license-enterprise-edition-58-cores', 'sql-server-2019-license-enterprise-edition-6-cores', 'sql-server-2019-license-enterprise-edition-60-cores', 'sql-server-2019-license-enterprise-edition-62-cores', 'sql-server-2019-license-enterprise-edition-64-cores', 'sql-server-2019-license-enterprise-edition-72-cores', 'sql-server-2019-license-enterprise-edition-8-cores', 'sql-server-2019-license-enterprise-edition-96-cores', 'sql-server-2019-license-standard-edition-10-cores', 'sql-server-2019-license-standard-edition-12-cores', 'sql-server-2019-license-standard-edition-128-cores', 'sql-server-2019-license-standard-edition-14-cores', 'sql-server-2019-license-standard-edition-16-cores', 'sql-server-2019-license-standard-edition-18-cores', 'sql-server-2019-license-standard-edition-192-cores', 'sql-server-2019-license-standard-edition-20-cores', 'sql-server-2019-license-standard-edition-22-cores', 'sql-server-2019-license-standard-edition-24-cores', 'sql-server-2019-license-standard-edition-26-cores', 'sql-server-2019-license-standard-edition-28-cores', 'sql-server-2019-license-standard-edition-30-cores', 'sql-server-2019-license-standard-edition-32-cores', 'sql-server-2019-license-standard-edition-34-cores', 'sql-server-2019-license-standard-edition-36-cores', 'sql-server-2019-license-standard-edition-38-cores', 'sql-server-2019-license-standard-edition-384-cores', 'sql-server-2019-license-standard-edition-4-cores', 'sql-server-2019-license-standard-edition-40-cores', 'sql-server-2019-license-standard-edition-42-cores', 'sql-server-2019-license-standard-edition-44-cores', 'sql-server-2019-license-standard-edition-46-cores', 'sql-server-2019-license-standard-edition-48-cores', 'sql-server-2019-license-standard-edition-50-cores', 'sql-server-2019-license-standard-edition-52-cores', 'sql-server-2019-license-standard-edition-54-cores', 'sql-server-2019-license-standard-edition-56-cores', 'sql-server-2019-license-standard-edition-58-cores', 'sql-server-2019-license-standard-edition-6-cores', 'sql-server-2019-license-standard-edition-60-cores', 'sql-server-2019-license-standard-edition-62-cores', 'sql-server-2019-license-standard-edition-64-cores', 'sql-server-2019-license-standard-edition-72-cores', 'sql-server-2019-license-standard-edition-8-cores', 'sql-server-2019-license-standard-edition-96-cores', 'sql-server-2019-license-web-edition-10-cores', 'sql-server-2019-license-web-edition-12-cores', 'sql-server-2019-license-web-edition-128-cores', 'sql-server-2019-license-web-edition-14-cores', 'sql-server-2019-license-web-edition-16-cores', 'sql-server-2019-license-web-edition-18-cores', 'sql-server-2019-license-web-edition-192-cores', 'sql-server-2019-license-web-edition-20-cores', 'sql-server-2019-license-web-edition-22-cores', 'sql-server-2019-license-web-edition-24-cores', 'sql-server-2019-license-web-edition-26-cores', 'sql-server-2019-license-web-edition-28-cores', 'sql-server-2019-license-web-edition-30-cores', 'sql-server-2019-license-web-edition-32-cores', 'sql-server-2019-license-web-edition-34-cores', 'sql-server-2019-license-web-edition-36-cores', 'sql-server-2019-license-web-edition-38-cores', 'sql-server-2019-license-web-edition-384-cores', 'sql-server-2019-license-web-edition-4-cores', 'sql-server-2019-license-web-edition-40-cores', 'sql-server-2019-license-web-edition-42-cores', 'sql-server-2019-license-web-edition-44-cores', 'sql-server-2019-license-web-edition-46-cores', 'sql-server-2019-license-web-edition-48-cores', 'sql-server-2019-license-web-edition-50-cores', 'sql-server-2019-license-web-edition-52-cores', 'sql-server-2019-license-web-edition-54-cores', 'sql-server-2019-license-web-edition-56-cores', 'sql-server-2019-license-web-edition-58-cores', 'sql-server-2019-license-web-edition-6-cores', 'sql-server-2019-license-web-edition-60-cores', 'sql-server-2019-license-web-edition-62-cores', 'sql-server-2019-license-web-edition-64-cores', 'sql-server-2019-license-web-edition-72-cores', 'sql-server-2019-license-web-edition-8-cores', 'sql-server-2019-license-web-edition-96-cores', 'sql-server-2022-license-enterprise-edition-10-cores', 'sql-server-2022-license-enterprise-edition-12-cores', 'sql-server-2022-license-enterprise-edition-128-cores', 'sql-server-2022-license-enterprise-edition-14-cores', 'sql-server-2022-license-enterprise-edition-16-cores', 'sql-server-2022-license-enterprise-edition-18-cores', 'sql-server-2022-license-enterprise-edition-192-cores', 'sql-server-2022-license-enterprise-edition-20-cores', 'sql-server-2022-license-enterprise-edition-22-cores', 'sql-server-2022-license-enterprise-edition-24-cores', 'sql-server-2022-license-enterprise-edition-26-cores', 'sql-server-2022-license-enterprise-edition-28-cores', 'sql-server-2022-license-enterprise-edition-30-cores', 'sql-server-2022-license-enterprise-edition-32-cores', 'sql-server-2022-license-enterprise-edition-34-cores', 'sql-server-2022-license-enterprise-edition-36-cores', 'sql-server-2022-license-enterprise-edition-38-cores', 'sql-server-2022-license-enterprise-edition-384-cores', 'sql-server-2022-license-enterprise-edition-4-cores', 'sql-server-2022-license-enterprise-edition-40-cores', 'sql-server-2022-license-enterprise-edition-42-cores', 'sql-server-2022-license-enterprise-edition-44-cores', 'sql-server-2022-license-enterprise-edition-46-cores', 'sql-server-2022-license-enterprise-edition-48-cores', 'sql-server-2022-license-enterprise-edition-50-cores', 'sql-server-2022-license-enterprise-edition-52-cores', 'sql-server-2022-license-enterprise-edition-54-cores', 'sql-server-2022-license-enterprise-edition-56-cores', 'sql-server-2022-license-enterprise-edition-58-cores', 'sql-server-2022-license-enterprise-edition-6-cores', 'sql-server-2022-license-enterprise-edition-60-cores', 'sql-server-2022-license-enterprise-edition-62-cores', 'sql-server-2022-license-enterprise-edition-64-cores', 'sql-server-2022-license-enterprise-edition-72-cores', 'sql-server-2022-license-enterprise-edition-8-cores', 'sql-server-2022-license-enterprise-edition-96-cores', 'sql-server-2022-license-standard-edition-10-cores', 'sql-server-2022-license-standard-edition-12-cores', 'sql-server-2022-license-standard-edition-128-cores', 'sql-server-2022-license-standard-edition-14-cores', 'sql-server-2022-license-standard-edition-16-cores', 'sql-server-2022-license-standard-edition-18-cores', 'sql-server-2022-license-standard-edition-192-cores', 'sql-server-2022-license-standard-edition-20-cores', 'sql-server-2022-license-standard-edition-22-cores', 'sql-server-2022-license-standard-edition-24-cores', 'sql-server-2022-license-standard-edition-26-cores', 'sql-server-2022-license-standard-edition-28-cores', 'sql-server-2022-license-standard-edition-30-cores', 'sql-server-2022-license-standard-edition-32-cores', 'sql-server-2022-license-standard-edition-34-cores', 'sql-server-2022-license-standard-edition-36-cores', 'sql-server-2022-license-standard-edition-38-cores', 'sql-server-2022-license-standard-edition-384-cores', 'sql-server-2022-license-standard-edition-4-cores', 'sql-server-2022-license-standard-edition-40-cores', 'sql-server-2022-license-standard-edition-42-cores', 'sql-server-2022-license-standard-edition-44-cores', 'sql-server-2022-license-standard-edition-46-cores', 'sql-server-2022-license-standard-edition-48-cores', 'sql-server-2022-license-standard-edition-50-cores', 'sql-server-2022-license-standard-edition-52-cores', 'sql-server-2022-license-standard-edition-54-cores', 'sql-server-2022-license-standard-edition-56-cores', 'sql-server-2022-license-standard-edition-58-cores', 'sql-server-2022-license-standard-edition-6-cores', 'sql-server-2022-license-standard-edition-60-cores', 'sql-server-2022-license-standard-edition-62-cores', 'sql-server-2022-license-standard-edition-64-cores', 'sql-server-2022-license-standard-edition-72-cores', 'sql-server-2022-license-standard-edition-8-cores', 'sql-server-2022-license-standard-edition-96-cores', 'sql-server-2022-license-web-edition-10-cores', 'sql-server-2022-license-web-edition-12-cores', 'sql-server-2022-license-web-edition-128-cores', 'sql-server-2022-license-web-edition-14-cores', 'sql-server-2022-license-web-edition-16-cores', 'sql-server-2022-license-web-edition-18-cores', 'sql-server-2022-license-web-edition-192-cores', 'sql-server-2022-license-web-edition-20-cores', 'sql-server-2022-license-web-edition-22-cores', 'sql-server-2022-license-web-edition-24-cores', 'sql-server-2022-license-web-edition-26-cores', 'sql-server-2022-license-web-edition-28-cores', 'sql-server-2022-license-web-edition-30-cores', 'sql-server-2022-license-web-edition-32-cores', 'sql-server-2022-license-web-edition-34-cores', 'sql-server-2022-license-web-edition-36-cores', 'sql-server-2022-license-web-edition-38-cores', 'sql-server-2022-license-web-edition-384-cores', 'sql-server-2022-license-web-edition-4-cores', 'sql-server-2022-license-web-edition-40-cores', 'sql-server-2022-license-web-edition-42-cores', 'sql-server-2022-license-web-edition-44-cores', 'sql-server-2022-license-web-edition-46-cores', 'sql-server-2022-license-web-edition-48-cores', 'sql-server-2022-license-web-edition-50-cores', 'sql-server-2022-license-web-edition-52-cores', 'sql-server-2022-license-web-edition-54-cores', 'sql-server-2022-license-web-edition-56-cores', 'sql-server-2022-license-web-edition-58-cores', 'sql-server-2022-license-web-edition-6-cores', 'sql-server-2022-license-web-edition-60-cores', 'sql-server-2022-license-web-edition-62-cores', 'sql-server-2022-license-web-edition-64-cores', 'sql-server-2022-license-web-edition-72-cores', 'sql-server-2022-license-web-edition-8-cores', 'sql-server-2022-license-web-edition-96-cores', 'sql-server-2025-license-enterprise-edition-10-cores', 'sql-server-2025-license-enterprise-edition-12-cores', 'sql-server-2025-license-enterprise-edition-128-cores', 'sql-server-2025-license-enterprise-edition-14-cores', 'sql-server-2025-license-enterprise-edition-16-cores', 'sql-server-2025-license-enterprise-edition-18-cores', 'sql-server-2025-license-enterprise-edition-192-cores', 'sql-server-2025-license-enterprise-edition-20-cores', 'sql-server-2025-license-enterprise-edition-22-cores', 'sql-server-2025-license-enterprise-edition-24-cores', 'sql-server-2025-license-enterprise-edition-26-cores', 'sql-server-2025-license-enterprise-edition-28-cores', 'sql-server-2025-license-enterprise-edition-30-cores', 'sql-server-2025-license-enterprise-edition-32-cores', 'sql-server-2025-license-enterprise-edition-34-cores', 'sql-server-2025-license-enterprise-edition-36-cores', 'sql-server-2025-license-enterprise-edition-38-cores', 'sql-server-2025-license-enterprise-edition-384-cores', 'sql-server-2025-license-enterprise-edition-4-cores', 'sql-server-2025-license-enterprise-edition-40-cores', 'sql-server-2025-license-enterprise-edition-42-cores', 'sql-server-2025-license-enterprise-edition-44-cores', 'sql-server-2025-license-enterprise-edition-46-cores', 'sql-server-2025-license-enterprise-edition-48-cores', 'sql-server-2025-license-enterprise-edition-50-cores', 'sql-server-2025-license-enterprise-edition-52-cores', 'sql-server-2025-license-enterprise-edition-54-cores', 'sql-server-2025-license-enterprise-edition-56-cores', 'sql-server-2025-license-enterprise-edition-58-cores', 'sql-server-2025-license-enterprise-edition-6-cores', 'sql-server-2025-license-enterprise-edition-60-cores', 'sql-server-2025-license-enterprise-edition-62-cores', 'sql-server-2025-license-enterprise-edition-64-cores', 'sql-server-2025-license-enterprise-edition-72-cores', 'sql-server-2025-license-enterprise-edition-8-cores', 'sql-server-2025-license-enterprise-edition-96-cores', 'sql-server-2025-license-standard-edition-10-cores', 'sql-server-2025-license-standard-edition-12-cores', 'sql-server-2025-license-standard-edition-128-cores', 'sql-server-2025-license-standard-edition-14-cores', 'sql-server-2025-license-standard-edition-16-cores', 'sql-server-2025-license-standard-edition-18-cores', 'sql-server-2025-license-standard-edition-192-cores', 'sql-server-2025-license-standard-edition-20-cores', 'sql-server-2025-license-standard-edition-22-cores', 'sql-server-2025-license-standard-edition-24-cores', 'sql-server-2025-license-standard-edition-26-cores', 'sql-server-2025-license-standard-edition-28-cores', 'sql-server-2025-license-standard-edition-30-cores', 'sql-server-2025-license-standard-edition-32-cores', 'sql-server-2025-license-standard-edition-34-cores', 'sql-server-2025-license-standard-edition-36-cores', 'sql-server-2025-license-standard-edition-38-cores', 'sql-server-2025-license-standard-edition-384-cores', 'sql-server-2025-license-standard-edition-4-cores', 'sql-server-2025-license-standard-edition-40-cores', 'sql-server-2025-license-standard-edition-42-cores', 'sql-server-2025-license-standard-edition-44-cores', 'sql-server-2025-license-standard-edition-46-cores', 'sql-server-2025-license-standard-edition-48-cores', 'sql-server-2025-license-standard-edition-50-cores', 'sql-server-2025-license-standard-edition-52-cores', 'sql-server-2025-license-standard-edition-54-cores', 'sql-server-2025-license-standard-edition-56-cores', 'sql-server-2025-license-standard-edition-58-cores', 'sql-server-2025-license-standard-edition-6-cores', 'sql-server-2025-license-standard-edition-60-cores', 'sql-server-2025-license-standard-edition-62-cores', 'sql-server-2025-license-standard-edition-64-cores', 'sql-server-2025-license-standard-edition-72-cores', 'sql-server-2025-license-standard-edition-8-cores', 'sql-server-2025-license-standard-edition-96-cores', 'sql-server-2025-license-web-edition-10-cores', 'sql-server-2025-license-web-edition-12-cores', 'sql-server-2025-license-web-edition-128-cores', 'sql-server-2025-license-web-edition-14-cores', 'sql-server-2025-license-web-edition-16-cores', 'sql-server-2025-license-web-edition-18-cores', 'sql-server-2025-license-web-edition-192-cores', 'sql-server-2025-license-web-edition-20-cores', 'sql-server-2025-license-web-edition-22-cores', 'sql-server-2025-license-web-edition-24-cores', 'sql-server-2025-license-web-edition-26-cores', 'sql-server-2025-license-web-edition-28-cores', 'sql-server-2025-license-web-edition-30-cores', 'sql-server-2025-license-web-edition-32-cores', 'sql-server-2025-license-web-edition-34-cores', 'sql-server-2025-license-web-edition-36-cores', 'sql-server-2025-license-web-edition-38-cores', 'sql-server-2025-license-web-edition-384-cores', 'sql-server-2025-license-web-edition-4-cores', 'sql-server-2025-license-web-edition-40-cores', 'sql-server-2025-license-web-edition-42-cores', 'sql-server-2025-license-web-edition-44-cores', 'sql-server-2025-license-web-edition-46-cores', 'sql-server-2025-license-web-edition-48-cores', 'sql-server-2025-license-web-edition-50-cores', 'sql-server-2025-license-web-edition-52-cores', 'sql-server-2025-license-web-edition-54-cores', 'sql-server-2025-license-web-edition-56-cores', 'sql-server-2025-license-web-edition-58-cores', 'sql-server-2025-license-web-edition-6-cores', 'sql-server-2025-license-web-edition-60-cores', 'sql-server-2025-license-web-edition-62-cores', 'sql-server-2025-license-web-edition-64-cores', 'sql-server-2025-license-web-edition-72-cores', 'sql-server-2025-license-web-edition-8-cores', 'sql-server-2025-license-web-edition-96-cores']
`}</CodeBlock>

</TabItem>
</Tabs>
