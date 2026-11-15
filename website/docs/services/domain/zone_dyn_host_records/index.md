--- 
title: zone_dyn_host_records
hide_title: false
hide_table_of_contents: false
keywords:
  - zone_dyn_host_records
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

Creates, updates, deletes, gets or lists a <code>zone_dyn_host_records</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="zone_dyn_host_records" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.domain.zone_dyn_host_records" /></td></tr>
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
    <td>Record ID</td>
</tr>
<tr>
    <td><CopyableCode code="ip" /></td>
    <td><code>string (ipv4)</code></td>
    <td>Record IP (example: 192.0.2.0)</td>
</tr>
<tr>
    <td><CopyableCode code="sub_domain" /></td>
    <td><code>string</code></td>
    <td>Record sub-domain (wire: subDomain)</td>
</tr>
<tr>
    <td><CopyableCode code="ttl" /></td>
    <td><code>integer</code></td>
    <td>Record TTL (Time to Live)</td>
</tr>
<tr>
    <td><CopyableCode code="zone" /></td>
    <td><code>string</code></td>
    <td>Record zone</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

DNS zone dynHost record

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
    <td>Record ID</td>
</tr>
<tr>
    <td><CopyableCode code="ip" /></td>
    <td><code>string (ipv4)</code></td>
    <td>Record IP (example: 192.0.2.0)</td>
</tr>
<tr>
    <td><CopyableCode code="sub_domain" /></td>
    <td><code>string</code></td>
    <td>Record sub-domain (wire: subDomain)</td>
</tr>
<tr>
    <td><CopyableCode code="ttl" /></td>
    <td><code>integer</code></td>
    <td>Record TTL (Time to Live)</td>
</tr>
<tr>
    <td><CopyableCode code="zone" /></td>
    <td><code>string</code></td>
    <td>Record zone</td>
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
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-zone_name"><code>zone_name</code></a></td>
    <td></td>
    <td>Returns a DynHost record: subdomain, IP and TTL.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-zone_name"><code>zone_name</code></a></td>
    <td><a href="#parameter-sub_domain"><code>sub_domain</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>Returns the identifiers of the DynHost records of the zone. Can be filtered by subdomain.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-zone_name"><code>zone_name</code></a></td>
    <td></td>
    <td>Creates a DynHost record with a subdomain, an IP and a TTL.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-zone_name"><code>zone_name</code></a></td>
    <td></td>
    <td>Updates the IP and TTL of a DynHost record.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-zone_name"><code>zone_name</code></a></td>
    <td></td>
    <td>Deletes a DynHost record.</td>
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
<tr id="parameter-zone_name">
    <td><CopyableCode code="zone_name" /></td>
    <td><code>string</code></td>
    <td>Zone name (wire: zoneName)</td>
</tr>
<tr id="parameter-sub_domain">
    <td><CopyableCode code="sub_domain" /></td>
    <td><code>string</code></td>
    <td>Filter the value of subDomain property (ilike) (wire: subDomain)</td>
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

Returns a DynHost record: subdomain, IP and TTL.

```sql
SELECT
id,
ip,
sub_domain,
ttl,
zone
FROM ovh.domain.zone_dyn_host_records
WHERE id = '{{ id }}' -- required
AND zone_name = '{{ zone_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns the identifiers of the DynHost records of the zone. Can be filtered by subdomain.

```sql
SELECT
id,
ip,
sub_domain,
ttl,
zone
FROM ovh.domain.zone_dyn_host_records
WHERE zone_name = '{{ zone_name }}' -- required
AND sub_domain = '{{ sub_domain }}'
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

Creates a DynHost record with a subdomain, an IP and a TTL.

```sql
INSERT INTO ovh.domain.zone_dyn_host_records (
ip,
sub_domain,
zone_name
)
SELECT 
'{{ ip }}',
'{{ sub_domain }}',
'{{ zone_name }}'
RETURNING
id,
ip,
sub_domain,
ttl,
zone
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: zone_dyn_host_records
  props:
    - name: zone_name
      value: "{{ zone_name }}"
      description: Required parameter for the zone_dyn_host_records resource.
    - name: ip
      value: "{{ ip }}"
      description: |
        Record IP
    - name: sub_domain
      value: "{{ sub_domain }}"
      description: |
        Record sub-domain
`}</CodeBlock>

</TabItem>
</Tabs>


## `UPDATE` examples

<Tabs
    defaultValue="update"
    values={[
        { label: 'update', value: 'update' }
    ]}
>
<TabItem value="update">

Updates the IP and TTL of a DynHost record.

```sql
UPDATE ovh.domain.zone_dyn_host_records
SET 
ip = '{{ ip }}',
sub_domain = '{{ sub_domain }}'
WHERE 
id = '{{ id }}' --required
AND zone_name = '{{ zone_name }}' --required;
```
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

Deletes a DynHost record.

```sql
DELETE FROM ovh.domain.zone_dyn_host_records
WHERE id = '{{ id }}' --required
AND zone_name = '{{ zone_name }}' --required
;
```
</TabItem>
</Tabs>
