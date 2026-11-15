--- 
title: ds_records
hide_title: false
hide_table_of_contents: false
keywords:
  - ds_records
  - domain
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

Creates, updates, deletes, gets or lists a <code>ds_records</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ds_records" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.domain.ds_records" /></td></tr>
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
    <td>ID of the DNSSEC key</td>
</tr>
<tr>
    <td><CopyableCode code="algorithm" /></td>
    <td><code>integer</code></td>
    <td>Algorithm number of the DNSSEC key (3, 5, 6, 7, 8, 10, 12, 13, 14, 15, 16)</td>
</tr>
<tr>
    <td><CopyableCode code="flags" /></td>
    <td><code>integer</code></td>
    <td>Flag of the DNSSEC key (256, 257)</td>
</tr>
<tr>
    <td><CopyableCode code="public_key" /></td>
    <td><code>string</code></td>
    <td>Public key (wire: publicKey)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Key status of the DNSSEC key (active, generated, published, removed, retired, revoked)</td>
</tr>
<tr>
    <td><CopyableCode code="tag" /></td>
    <td><code>integer</code></td>
    <td>Tag of the DNSSEC key</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Domain's DNSSEC Key

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
    <td>ID of the DNSSEC key</td>
</tr>
<tr>
    <td><CopyableCode code="algorithm" /></td>
    <td><code>integer</code></td>
    <td>Algorithm number of the DNSSEC key (3, 5, 6, 7, 8, 10, 12, 13, 14, 15, 16)</td>
</tr>
<tr>
    <td><CopyableCode code="flags" /></td>
    <td><code>integer</code></td>
    <td>Flag of the DNSSEC key (256, 257)</td>
</tr>
<tr>
    <td><CopyableCode code="public_key" /></td>
    <td><code>string</code></td>
    <td>Public key (wire: publicKey)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Key status of the DNSSEC key (active, generated, published, removed, retired, revoked)</td>
</tr>
<tr>
    <td><CopyableCode code="tag" /></td>
    <td><code>integer</code></td>
    <td>Tag of the DNSSEC key</td>
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
    <td>Get details on this DS Record</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-flags"><code>flags</code></a>, <a href="#parameter-status"><code>status</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List of domain's DS Records</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-keys"><code>keys</code></a></td>
    <td></td>
    <td>Update DS records</td>
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
    <td><code>string</code></td>
    <td>Service name (wire: serviceName)</td>
</tr>
<tr id="parameter-flags">
    <td><CopyableCode code="flags" /></td>
    <td><code>integer</code></td>
    <td>Filter the value of flags property (=)</td>
</tr>
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Filter the value of status property (=)</td>
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

Get details on this DS Record

```sql
SELECT
id,
algorithm,
flags,
public_key,
status,
tag
FROM ovh.domain.ds_records
WHERE id = '{{ id }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List of domain's DS Records

```sql
SELECT
id,
algorithm,
flags,
public_key,
status,
tag
FROM ovh.domain.ds_records
WHERE service_name = '{{ service_name }}' -- required
AND flags = '{{ flags }}'
AND status = '{{ status }}'
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

Update DS records

```sql
INSERT INTO ovh.domain.ds_records (
keys,
service_name
)
SELECT 
'{{ keys }}' /* required */,
'{{ service_name }}'
RETURNING
id,
can_accelerate,
can_cancel,
can_relaunch,
comment,
creation_date,
domain,
done_date,
function,
last_update,
status,
todo_date,
type
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: ds_records
  props:
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the ds_records resource.
    - name: keys
      description: |
        New Keys
      value:
        - algorithm: {{ algorithm }}
          flags: {{ flags }}
          id: {{ id }}
          publicKey: "{{ publicKey }}"
          status: "{{ status }}"
          tag: {{ tag }}
`}</CodeBlock>

</TabItem>
</Tabs>
