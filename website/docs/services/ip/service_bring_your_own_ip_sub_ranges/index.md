--- 
title: service_bring_your_own_ip_sub_ranges
hide_title: false
hide_table_of_contents: false
keywords:
  - service_bring_your_own_ip_sub_ranges
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

Creates, updates, deletes, gets or lists a <code>service_bring_your_own_ip_sub_ranges</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="service_bring_your_own_ip_sub_ranges" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.ip.service_bring_your_own_ip_sub_ranges" /></td></tr>
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
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Custom description on your ip</td>
</tr>
<tr>
    <td><CopyableCode code="ip" /></td>
    <td><code>string (ip-block)</code></td>
    <td>IP (v4 or v6) CIDR notation (e.g., 192.0.2.0/24) (example: 192.0.2.0/24)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Imported IP range's sub range

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
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Custom description on your ip</td>
</tr>
<tr>
    <td><CopyableCode code="ip" /></td>
    <td><code>string (ip-block)</code></td>
    <td>IP (v4 or v6) CIDR notation (e.g., 192.0.2.0/24) (example: 192.0.2.0/24)</td>
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
    <td><a href="#parameter-ip"><code>ip</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get a sub-range. Returns the IPv4 or IPv6 sub-range, as an IP block, and the custom description set when it was created. (Beta version)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List sub-ranges. Returns the IPv4 and IPv6 sub-ranges of the imported range, as IP blocks in CIDR notation. (Beta version)</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-ip"><code>ip</code></a></td>
    <td></td>
    <td>Create an IPv6 sub-range. Creates an IPv6 /56 sub-range of the imported range, with an optional description. (Beta version)</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-ip"><code>ip</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Delete an IPv6 sub-range. Deletes the IPv6 sub-range from the imported range. The call returns no content. (Beta version)</td>
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
<tr id="parameter-ip">
    <td><CopyableCode code="ip" /></td>
    <td><code>string (ip-block)</code></td>
    <td></td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The internal name of your IP services (wire: serviceName)</td>
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

Get a sub-range. Returns the IPv4 or IPv6 sub-range, as an IP block, and the custom description set when it was created. (Beta version)

```sql
SELECT
description,
ip
FROM ovh.ip.service_bring_your_own_ip_sub_ranges
WHERE ip = '{{ ip }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List sub-ranges. Returns the IPv4 and IPv6 sub-ranges of the imported range, as IP blocks in CIDR notation. (Beta version)

```sql
SELECT
description,
ip
FROM ovh.ip.service_bring_your_own_ip_sub_ranges
WHERE service_name = '{{ service_name }}' -- required
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

Create an IPv6 sub-range. Creates an IPv6 /56 sub-range of the imported range, with an optional description. (Beta version)

```sql
INSERT INTO ovh.ip.service_bring_your_own_ip_sub_ranges (
description,
ip,
service_name
)
SELECT 
'{{ description }}',
'{{ ip }}' /* required */,
'{{ service_name }}'
RETURNING
description,
ip
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: service_bring_your_own_ip_sub_ranges
  props:
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the service_bring_your_own_ip_sub_ranges resource.
    - name: description
      value: "{{ description }}"
      description: |
        Sub range description
    - name: ip
      value: "{{ ip }}"
      description: |
        IP (v4 or v6) CIDR notation (e.g., 192.0.2.0/24)
`}</CodeBlock>

</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete"
    values={[
        { label: 'delete', value: 'delete' }
    ]}
>
<TabItem value="delete">

Delete an IPv6 sub-range. Deletes the IPv6 sub-range from the imported range. The call returns no content. (Beta version)

```sql
DELETE FROM ovh.ip.service_bring_your_own_ip_sub_ranges
WHERE ip = '{{ ip }}' --required
AND service_name = '{{ service_name }}' --required
;
```
</TabItem>
</Tabs>
