--- 
title: ssls
hide_title: false
hide_table_of_contents: false
keywords:
  - ssls
  - ip_loadbalancing
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

Creates, updates, deletes, gets or lists a <code>ssls</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ssls" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.ip_loadbalancing.ssls" /></td></tr>
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
    <td>Id of your SSL certificate</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>Human readable name for your ssl certificate, this field is for you (wire: displayName)</td>
</tr>
<tr>
    <td><CopyableCode code="expire_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Expire date of your SSL certificate (wire: expireDate)</td>
</tr>
<tr>
    <td><CopyableCode code="fingerprint" /></td>
    <td><code>string</code></td>
    <td>Fingerprint of your SSL certificate</td>
</tr>
<tr>
    <td><CopyableCode code="san" /></td>
    <td><code>array</code></td>
    <td>Subject Alternative Name of your SSL certificate</td>
</tr>
<tr>
    <td><CopyableCode code="serial" /></td>
    <td><code>string</code></td>
    <td>Serial of your SSL certificate (Deprecated, use fingerprint instead !)</td>
</tr>
<tr>
    <td><CopyableCode code="subject" /></td>
    <td><code>string</code></td>
    <td>Subject of your SSL certificate</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of your SSL certificate. 'built' for SSL certificates managed by the IP Load Balancing. 'custom' for user manager certificates. (built, built_not_routed, custom)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Ssl

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
    <td>Id of your SSL certificate</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>Human readable name for your ssl certificate, this field is for you (wire: displayName)</td>
</tr>
<tr>
    <td><CopyableCode code="expire_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Expire date of your SSL certificate (wire: expireDate)</td>
</tr>
<tr>
    <td><CopyableCode code="fingerprint" /></td>
    <td><code>string</code></td>
    <td>Fingerprint of your SSL certificate</td>
</tr>
<tr>
    <td><CopyableCode code="san" /></td>
    <td><code>array</code></td>
    <td>Subject Alternative Name of your SSL certificate</td>
</tr>
<tr>
    <td><CopyableCode code="serial" /></td>
    <td><code>string</code></td>
    <td>Serial of your SSL certificate (Deprecated, use fingerprint instead !)</td>
</tr>
<tr>
    <td><CopyableCode code="subject" /></td>
    <td><code>string</code></td>
    <td>Subject of your SSL certificate</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of your SSL certificate. 'built' for SSL certificates managed by the IP Load Balancing. 'custom' for user manager certificates. (built, built_not_routed, custom)</td>
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
    <td>Get an SSL certificate</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-expire_date"><code>expire_date</code></a>, <a href="#parameter-fingerprint"><code>fingerprint</code></a>, <a href="#parameter-serial"><code>serial</code></a>, <a href="#parameter-type"><code>type</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List SSL certificates</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-certificate"><code>certificate</code></a>, <a href="#parameter-key"><code>key</code></a></td>
    <td></td>
    <td>Create a custom SSL certificate</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Update an SSL certificate</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Delete an SSL certificate</td>
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
    <td>Id of your SSL certificate</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The internal name of your IP load balancing (wire: serviceName)</td>
</tr>
<tr id="parameter-expire_date">
    <td><CopyableCode code="expire_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Filter the value of expireDate property (&lt;) (wire: expireDate)</td>
</tr>
<tr id="parameter-fingerprint">
    <td><CopyableCode code="fingerprint" /></td>
    <td><code>string</code></td>
    <td>Filter the value of fingerprint property (like)</td>
</tr>
<tr id="parameter-serial">
    <td><CopyableCode code="serial" /></td>
    <td><code>string</code></td>
    <td>Filter the value of serial property (like)</td>
</tr>
<tr id="parameter-type">
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Filter the value of type property (=)</td>
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

Get an SSL certificate

```sql
SELECT
id,
display_name,
expire_date,
fingerprint,
san,
serial,
subject,
type
FROM ovh.ip_loadbalancing.ssls
WHERE id = '{{ id }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List SSL certificates

```sql
SELECT
id,
display_name,
expire_date,
fingerprint,
san,
serial,
subject,
type
FROM ovh.ip_loadbalancing.ssls
WHERE service_name = '{{ service_name }}' -- required
AND expire_date = '{{ expire_date }}'
AND fingerprint = '{{ fingerprint }}'
AND serial = '{{ serial }}'
AND type = '{{ type }}'
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

Create a custom SSL certificate

```sql
INSERT INTO ovh.ip_loadbalancing.ssls (
certificate,
chain,
display_name,
key,
service_name
)
SELECT 
'{{ certificate }}' /* required */,
'{{ chain }}',
'{{ display_name }}',
'{{ key }}' /* required */,
'{{ service_name }}'
RETURNING
id,
display_name,
expire_date,
fingerprint,
san,
serial,
subject,
type
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: ssls
  props:
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the ssls resource.
    - name: certificate
      value: "{{ certificate }}"
      description: |
        Certificate
    - name: chain
      value: "{{ chain }}"
      description: |
        Certificate chain
    - name: display_name
      value: "{{ display_name }}"
      description: |
        Human readable name for your ssl certificate, this field is for you
    - name: key
      value: "{{ key }}"
      description: |
        Certificate key
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

Update an SSL certificate

```sql
UPDATE ovh.ip_loadbalancing.ssls
SET 
display_name = '{{ display_name }}'
WHERE 
id = '{{ id }}' --required
AND service_name = '{{ service_name }}' --required;
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

Delete an SSL certificate

```sql
DELETE FROM ovh.ip_loadbalancing.ssls
WHERE id = '{{ id }}' --required
AND service_name = '{{ service_name }}' --required
;
```
</TabItem>
</Tabs>
