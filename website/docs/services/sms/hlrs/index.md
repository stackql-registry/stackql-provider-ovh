--- 
title: hlrs
hide_title: false
hide_table_of_contents: false
keywords:
  - hlrs
  - sms
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

Creates, updates, deletes, gets or lists a <code>hlrs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="hlrs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.sms.hlrs" /></td></tr>
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
    <td>HLR id</td>
</tr>
<tr>
    <td><CopyableCode code="datetime" /></td>
    <td><code>string (date-time)</code></td>
    <td>HLR creation datetime</td>
</tr>
<tr>
    <td><CopyableCode code="msisdn" /></td>
    <td><code>string</code></td>
    <td>MSISDN</td>
</tr>
<tr>
    <td><CopyableCode code="operator_code" /></td>
    <td><code>string</code></td>
    <td>The &#123;Mobile Country Code, Mobile Network Code&#125; unique identifier (wire: operatorCode)</td>
</tr>
<tr>
    <td><CopyableCode code="ported" /></td>
    <td><code>boolean</code></td>
    <td>Has the MSISDN been ported from its original network</td>
</tr>
<tr>
    <td><CopyableCode code="reachable" /></td>
    <td><code>boolean</code></td>
    <td>Is the MSISDN currently reachable</td>
</tr>
<tr>
    <td><CopyableCode code="roaming" /></td>
    <td><code>boolean</code></td>
    <td>Is the MSISDN currently roaming outside its natinal network</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of the HLR request (doing, done, error, todo)</td>
</tr>
<tr>
    <td><CopyableCode code="valid" /></td>
    <td><code>boolean</code></td>
    <td>Is the MSISDN valid</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Home Location Register informations. Give informations about a given cellular phone.

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
    <td>HLR id</td>
</tr>
<tr>
    <td><CopyableCode code="datetime" /></td>
    <td><code>string (date-time)</code></td>
    <td>HLR creation datetime</td>
</tr>
<tr>
    <td><CopyableCode code="msisdn" /></td>
    <td><code>string</code></td>
    <td>MSISDN</td>
</tr>
<tr>
    <td><CopyableCode code="operator_code" /></td>
    <td><code>string</code></td>
    <td>The &#123;Mobile Country Code, Mobile Network Code&#125; unique identifier (wire: operatorCode)</td>
</tr>
<tr>
    <td><CopyableCode code="ported" /></td>
    <td><code>boolean</code></td>
    <td>Has the MSISDN been ported from its original network</td>
</tr>
<tr>
    <td><CopyableCode code="reachable" /></td>
    <td><code>boolean</code></td>
    <td>Is the MSISDN currently reachable</td>
</tr>
<tr>
    <td><CopyableCode code="roaming" /></td>
    <td><code>boolean</code></td>
    <td>Is the MSISDN currently roaming outside its natinal network</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of the HLR request (doing, done, error, todo)</td>
</tr>
<tr>
    <td><CopyableCode code="valid" /></td>
    <td><code>boolean</code></td>
    <td>Is the MSISDN valid</td>
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
    <td>Get an HLR lookup. Returns the result of the HLR lookup: validity, reachability, portability and roaming of the number.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List HLR lookups. Returns the identifiers of the HLR lookups. An HLR lookup checks whether a mobile number is valid, reachable, ported or roaming.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Request HLR lookups. Requests an HLR lookup for one or several mobile numbers, given as a list or a CSV document URL. Returns the lookup identifiers and the credits used.</td>
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
    <td>HLR id</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The internal name of your SMS offer (wire: serviceName)</td>
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

Get an HLR lookup. Returns the result of the HLR lookup: validity, reachability, portability and roaming of the number.

```sql
SELECT
id,
datetime,
msisdn,
operator_code,
ported,
reachable,
roaming,
status,
valid
FROM ovh.sms.hlrs
WHERE id = '{{ id }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List HLR lookups. Returns the identifiers of the HLR lookups. An HLR lookup checks whether a mobile number is valid, reachable, ported or roaming.

```sql
SELECT
id,
datetime,
msisdn,
operator_code,
ported,
reachable,
roaming,
status,
valid
FROM ovh.sms.hlrs
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

Request HLR lookups. Requests an HLR lookup for one or several mobile numbers, given as a list or a CSV document URL. Returns the lookup identifiers and the credits used.

```sql
INSERT INTO ovh.sms.hlrs (
receivers,
receivers_document_url,
service_name
)
SELECT 
'{{ receivers }}',
'{{ receivers_document_url }}',
'{{ service_name }}'
RETURNING
ids,
invalid_receivers,
tag,
total_credits_removed,
valid_receivers
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: hlrs
  props:
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the hlrs resource.
    - name: receivers
      value:
        - "{{ receivers }}"
      description: |
        The receivers
    - name: receivers_document_url
      value: "{{ receivers_document_url }}"
      description: |
        The receivers document url link in csv format
`}</CodeBlock>

</TabItem>
</Tabs>
