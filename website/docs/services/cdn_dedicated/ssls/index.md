--- 
title: ssls
hide_title: false
hide_table_of_contents: false
keywords:
  - ssls
  - cdn_dedicated
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
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.cdn_dedicated.ssls" /></td></tr>
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="certificate_provider" /></td>
    <td><code>string</code></td>
    <td>Provider of the certificate installed on CDN (wire: certificateProvider)</td>
</tr>
<tr>
    <td><CopyableCode code="certificate_valid_from" /></td>
    <td><code>string (date-time)</code></td>
    <td> (wire: certificateValidFrom)</td>
</tr>
<tr>
    <td><CopyableCode code="certificate_valid_to" /></td>
    <td><code>string (date-time)</code></td>
    <td> (wire: certificateValidTo)</td>
</tr>
<tr>
    <td><CopyableCode code="cn" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>All states a CDN SSL can be in (checking, creating, error, off, on, removing, updating, uploading)</td>
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
    <td>Get the SSL certificate</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Create an SSL certificate</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Delete the SSL certificate</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-certificate"><code>certificate</code></a>, <a href="#parameter-key"><code>key</code></a></td>
    <td></td>
    <td>Update the SSL certificate</td>
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
<tr id="parameter-serviceName">
    <td><CopyableCode code="serviceName" /></td>
    <td><code>string</code></td>
    <td>The internal name of your CDN offer</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The internal name of your CDN offer (wire: serviceName)</td>
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

Get the SSL certificate

```sql
SELECT
name,
certificate_provider,
certificate_valid_from,
certificate_valid_to,
cn,
status
FROM ovh.cdn_dedicated.ssls
WHERE service_name = '{{ service_name }}' -- required
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

Create an SSL certificate

```sql
INSERT INTO ovh.cdn_dedicated.ssls (
certificate,
chain,
key,
name,
service_name
)
SELECT 
'{{ certificate }}',
'{{ chain }}',
'{{ key }}',
'{{ name }}' /* required */,
'{{ service_name }}'
RETURNING
name,
certificate_provider,
certificate_valid_from,
certificate_valid_to,
cn,
status
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
        certificate (empty for lets encrypt generation)
    - name: chain
      value: "{{ chain }}"
      description: |
        certificate chain (empty for lets encrypt generation)
    - name: key
      value: "{{ key }}"
      description: |
        certificate key (empty for lets encrypt generation)
    - name: name
      value: "{{ name }}"
      description: |
        ssl name to add on CDN
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

Delete the SSL certificate

```sql
DELETE FROM ovh.cdn_dedicated.ssls
WHERE service_name = '{{ service_name }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="update"
    values={[
        { label: 'update', value: 'update' }
    ]}
>
<TabItem value="update">

Update the SSL certificate

```sql
EXEC ovh.cdn_dedicated.ssls.update 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"certificate": "{{ certificate }}", 
"chain": "{{ chain }}", 
"key": "{{ key }}"
}'
;
```
</TabItem>
</Tabs>
