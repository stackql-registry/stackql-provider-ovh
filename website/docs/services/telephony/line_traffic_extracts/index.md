--- 
title: line_traffic_extracts
hide_title: false
hide_table_of_contents: false
keywords:
  - line_traffic_extracts
  - telephony
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

Creates, updates, deletes, gets or lists a <code>line_traffic_extracts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="line_traffic_extracts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.telephony.line_traffic_extracts" /></td></tr>
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
    <td>The id of the traffic extract</td>
</tr>
<tr>
    <td><CopyableCode code="date_end" /></td>
    <td><code>string (date-time)</code></td>
    <td>The start date of the traffic extract (wire: dateEnd)</td>
</tr>
<tr>
    <td><CopyableCode code="date_start" /></td>
    <td><code>string (date-time)</code></td>
    <td>The start date of the traffic extract (wire: dateStart)</td>
</tr>
<tr>
    <td><CopyableCode code="file_size" /></td>
    <td><code>integer</code></td>
    <td>The PCAP file size of the traffic extract (wire: fileSize)</td>
</tr>
<tr>
    <td><CopyableCode code="file_url" /></td>
    <td><code>string</code></td>
    <td>The PCAP URL of the traffic extract (wire: fileUrl)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the extract (doing, done, error, pause, todo)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Traffic extracts (SIP) of your line

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
    <td>The id of the traffic extract</td>
</tr>
<tr>
    <td><CopyableCode code="date_end" /></td>
    <td><code>string (date-time)</code></td>
    <td>The start date of the traffic extract (wire: dateEnd)</td>
</tr>
<tr>
    <td><CopyableCode code="date_start" /></td>
    <td><code>string (date-time)</code></td>
    <td>The start date of the traffic extract (wire: dateStart)</td>
</tr>
<tr>
    <td><CopyableCode code="file_size" /></td>
    <td><code>integer</code></td>
    <td>The PCAP file size of the traffic extract (wire: fileSize)</td>
</tr>
<tr>
    <td><CopyableCode code="file_url" /></td>
    <td><code>string</code></td>
    <td>The PCAP URL of the traffic extract (wire: fileUrl)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the extract (doing, done, error, pause, todo)</td>
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
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get a traffic extract</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List traffic extracts</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-date_end"><code>date_end</code></a>, <a href="#parameter-date_start"><code>date_start</code></a></td>
    <td></td>
    <td>Start a traffic extract</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Delete a traffic extract</td>
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
<tr id="parameter-billing_account">
    <td><CopyableCode code="billing_account" /></td>
    <td><code>string</code></td>
    <td>The name of your billingAccount (wire: billingAccount)</td>
</tr>
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>integer</code></td>
    <td>Id of the object</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td> (wire: serviceName)</td>
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

Get a traffic extract

```sql
SELECT
id,
date_end,
date_start,
file_size,
file_url,
status
FROM ovh.telephony.line_traffic_extracts
WHERE billing_account = '{{ billing_account }}' -- required
AND id = '{{ id }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List traffic extracts

```sql
SELECT
id,
date_end,
date_start,
file_size,
file_url,
status
FROM ovh.telephony.line_traffic_extracts
WHERE billing_account = '{{ billing_account }}' -- required
AND service_name = '{{ service_name }}' -- required
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

Start a traffic extract

```sql
INSERT INTO ovh.telephony.line_traffic_extracts (
date_end,
date_start,
billing_account,
service_name
)
SELECT 
'{{ date_end }}' /* required */,
'{{ date_start }}' /* required */,
'{{ billing_account }}',
'{{ service_name }}'
RETURNING
id,
date_end,
date_start,
file_size,
file_url,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: line_traffic_extracts
  props:
    - name: billing_account
      value: "{{ billing_account }}"
      description: Required parameter for the line_traffic_extracts resource.
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the line_traffic_extracts resource.
    - name: date_end
      value: "{{ date_end }}"
      description: |
        The end date of the traffic extract
    - name: date_start
      value: "{{ date_start }}"
      description: |
        The start date of the traffic extract
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

Delete a traffic extract

```sql
DELETE FROM ovh.telephony.line_traffic_extracts
WHERE billing_account = '{{ billing_account }}' --required
AND id = '{{ id }}' --required
AND service_name = '{{ service_name }}' --required
;
```
</TabItem>
</Tabs>
