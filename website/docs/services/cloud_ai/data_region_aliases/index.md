--- 
title: data_region_aliases
hide_title: false
hide_table_of_contents: false
keywords:
  - data_region_aliases
  - cloud_ai
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

Creates, updates, deletes, gets or lists a <code>data_region_aliases</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="data_region_aliases" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.cloud_ai.data_region_aliases" /></td></tr>
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
    <td><CopyableCode code="alias" /></td>
    <td><code>string</code></td>
    <td>Data store alias</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint" /></td>
    <td><code>string</code></td>
    <td>Data store endpoint URL</td>
</tr>
<tr>
    <td><CopyableCode code="owner" /></td>
    <td><code>string</code></td>
    <td>Owner type of the datastore (customer, ovhcloud)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of the datastore (git, s3, swift)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

AI Solutions data store container Volume Object

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
    <td><CopyableCode code="alias" /></td>
    <td><code>string</code></td>
    <td>Data store alias</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint" /></td>
    <td><code>string</code></td>
    <td>Data store endpoint URL</td>
</tr>
<tr>
    <td><CopyableCode code="owner" /></td>
    <td><code>string</code></td>
    <td>Owner type of the datastore (customer, ovhcloud)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of the datastore (git, s3, swift)</td>
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
    <td><a href="#parameter-alias"><code>alias</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get Datastore Information</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>List datastores</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-region"><code>region</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-alias"><code>alias</code></a>, <a href="#parameter-credentials"><code>credentials</code></a>, <a href="#parameter-endpoint"><code>endpoint</code></a>, <a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td><a href="#parameter-skip_data_store_connection_check"><code>skip_data_store_connection_check</code></a></td>
    <td>Create a new datastore</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-alias"><code>alias</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-alias"><code>alias</code></a>, <a href="#parameter-credentials"><code>credentials</code></a>, <a href="#parameter-endpoint"><code>endpoint</code></a>, <a href="#parameter-owner"><code>owner</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td></td>
    <td>Update a datastore</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-alias"><code>alias</code></a>, <a href="#parameter-region"><code>region</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Permanently delete a datastore</td>
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
<tr id="parameter-alias">
    <td><CopyableCode code="alias" /></td>
    <td><code>string</code></td>
    <td>Alias</td>
</tr>
<tr id="parameter-api_host">
    <td><CopyableCode code="api_host" /></td>
    <td><code>string</code></td>
    <td>The OVHcloud API host. Selected by OVH_ENDPOINT (ovh-eu, ovh-ca or ovh-us; default ovh-eu). (default: api.eu.ovhcloud.com, x-stackQL-envVarSelector: &#123;"envVar":"OVH_ENDPOINT","default":"ovh-eu","values":&#123;"ovh-eu":"api.eu.ovhcloud.com","ovh-ca":"api.ca.ovhcloud.com","ovh-us":"api.us.ovhcloud.com"&#125;&#125;)</td>
</tr>
<tr id="parameter-region">
    <td><CopyableCode code="region" /></td>
    <td><code>string</code></td>
    <td>Region</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The Public Cloud project ID. Resolved from OVH_CLOUD_PROJECT_SERVICE when set.</td>
</tr>
<tr id="parameter-skip_data_store_connection_check">
    <td><CopyableCode code="skip_data_store_connection_check" /></td>
    <td><code>boolean</code></td>
    <td>If set to true, it will skip the data store connection check (wire: skipDataStoreConnectionCheck)</td>
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

Get Datastore Information

```sql
SELECT
alias,
endpoint,
owner,
type
FROM ovh.cloud_ai.data_region_aliases
WHERE alias = '{{ alias }}' -- required
AND region = '{{ region }}' -- required
AND service_name = '{{ service_name }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
<TabItem value="list">

List datastores

```sql
SELECT
alias,
endpoint,
owner,
type
FROM ovh.cloud_ai.data_region_aliases
WHERE region = '{{ region }}' -- required
AND service_name = '{{ service_name }}' -- required unless OVH_CLOUD_PROJECT_SERVICE is set
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

Create a new datastore

```sql
INSERT INTO ovh.cloud_ai.data_region_aliases (
alias,
credentials,
endpoint,
owner,
prefix,
type,
region,
service_name,
skip_data_store_connection_check
)
SELECT 
'{{ alias }}' /* required */,
'{{ credentials }}' /* required */,
'{{ endpoint }}' /* required */,
'{{ owner }}' /* required */,
'{{ prefix }}',
'{{ type }}' /* required */,
'{{ region }}',
'{{ service_name }}',
'{{ skip_data_store_connection_check }}'
RETURNING
alias,
endpoint,
owner,
type
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: data_region_aliases
  props:
    - name: region
      value: "{{ region }}"
      description: Required parameter for the data_region_aliases resource.
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the data_region_aliases resource.
    - name: alias
      value: "{{ alias }}"
      description: |
        Data store alias
    - name: credentials
      description: |
        Data store credentials
      value:
        git:
          basicAuth:
            password: "{{ password }}"
            username: "{{ username }}"
          sshKeypair:
            privateKey: "{{ privateKey }}"
            publicKey: "{{ publicKey }}"
        s3:
          accessKey: "{{ accessKey }}"
          region: "{{ region }}"
          secretKey: "{{ secretKey }}"
    - name: endpoint
      value: "{{ endpoint }}"
      description: |
        Datastore endpoint
    - name: owner
      value: "{{ owner }}"
      description: |
        Data store owner
      valid_values: ['customer', 'ovhcloud']
    - name: prefix
      value: "{{ prefix }}"
      description: |
        Data store prefix
    - name: type
      value: "{{ type }}"
      description: |
        Data store type
      valid_values: ['git', 's3', 'swift']
    - name: skip_data_store_connection_check
      value: {{ skip_data_store_connection_check }}
      description: If set to true, it will skip the data store connection check
      description: If set to true, it will skip the data store connection check
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

Update a datastore

```sql
UPDATE ovh.cloud_ai.data_region_aliases
SET 
alias = '{{ alias }}',
credentials = '{{ credentials }}',
endpoint = '{{ endpoint }}',
owner = '{{ owner }}',
prefix = '{{ prefix }}',
type = '{{ type }}'
WHERE 
alias = '{{ alias }}' --required
AND region = '{{ region }}' --required
AND service_name = '{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
AND alias = '{{ alias }}' --required
AND credentials = '{{ credentials }}' --required
AND endpoint = '{{ endpoint }}' --required
AND owner = '{{ owner }}' --required
AND type = '{{ type }}' --required;
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

Permanently delete a datastore

```sql
DELETE FROM ovh.cloud_ai.data_region_aliases
WHERE alias = '{{ alias }}' --required
AND region = '{{ region }}' --required
AND service_name = '{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
</Tabs>
