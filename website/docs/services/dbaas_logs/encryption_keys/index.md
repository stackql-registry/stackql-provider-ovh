--- 
title: encryption_keys
hide_title: false
hide_table_of_contents: false
keywords:
  - encryption_keys
  - dbaas_logs
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

Creates, updates, deletes, gets or lists an <code>encryption_keys</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="encryption_keys" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.dbaas_logs.encryption_keys" /></td></tr>
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
    <td><CopyableCode code="encryption_key_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Encryption Key ID (wire: encryptionKeyId)</td>
</tr>
<tr>
    <td><CopyableCode code="algorithm" /></td>
    <td><code>string</code></td>
    <td>Encryption Key algorithm (ECC25519, RSA4096)</td>
</tr>
<tr>
    <td><CopyableCode code="content" /></td>
    <td><code>string (password)</code></td>
    <td>Encryption Key content</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Encryption Key creation date (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="fingerprint" /></td>
    <td><code>string</code></td>
    <td>Encryption Key fingerprint</td>
</tr>
<tr>
    <td><CopyableCode code="is_editable" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if you are allowed to edit entry (wire: isEditable)</td>
</tr>
<tr>
    <td><CopyableCode code="nb_archive" /></td>
    <td><code>integer</code></td>
    <td>Number of archives encrypted with this Encryption Key (wire: nbArchive)</td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td>Encryption Key title</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Encryption Key user ID</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Encryption key

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
    <td><CopyableCode code="encryption_key_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Encryption Key ID (wire: encryptionKeyId)</td>
</tr>
<tr>
    <td><CopyableCode code="algorithm" /></td>
    <td><code>string</code></td>
    <td>Encryption Key algorithm (ECC25519, RSA4096)</td>
</tr>
<tr>
    <td><CopyableCode code="content" /></td>
    <td><code>string (password)</code></td>
    <td>Encryption Key content</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Encryption Key creation date (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="fingerprint" /></td>
    <td><code>string</code></td>
    <td>Encryption Key fingerprint</td>
</tr>
<tr>
    <td><CopyableCode code="is_editable" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if you are allowed to edit entry (wire: isEditable)</td>
</tr>
<tr>
    <td><CopyableCode code="nb_archive" /></td>
    <td><code>integer</code></td>
    <td>Number of archives encrypted with this Encryption Key (wire: nbArchive)</td>
</tr>
<tr>
    <td><CopyableCode code="title" /></td>
    <td><code>string</code></td>
    <td>Encryption Key title</td>
</tr>
<tr>
    <td><CopyableCode code="uid" /></td>
    <td><code>string</code></td>
    <td>Encryption Key user ID</td>
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
    <td><a href="#parameter-encryption_key_id"><code>encryption_key_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Returns the encryption key.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-title_pattern"><code>title_pattern</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>Returns the encryption keys of the Logs Data Platform service.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-content"><code>content</code></a>, <a href="#parameter-fingerprint"><code>fingerprint</code></a>, <a href="#parameter-title"><code>title</code></a></td>
    <td></td>
    <td>Creates an encryption key on the Logs Data Platform service.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-encryption_key_id"><code>encryption_key_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Deletes the encryption key.</td>
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
<tr id="parameter-encryption_key_id">
    <td><CopyableCode code="encryption_key_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Encryption key ID (wire: encryptionKeyId)</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>Service name (wire: serviceName)</td>
</tr>
<tr id="parameter-title_pattern">
    <td><CopyableCode code="title_pattern" /></td>
    <td><code>string</code></td>
    <td>Filter by title (like) (wire: titlePattern)</td>
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

Returns the encryption key.

```sql
SELECT
encryption_key_id,
algorithm,
content,
created_at,
fingerprint,
is_editable,
nb_archive,
title,
uid
FROM ovh.dbaas_logs.encryption_keys
WHERE encryption_key_id = '{{ encryption_key_id }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns the encryption keys of the Logs Data Platform service.

```sql
SELECT
encryption_key_id,
algorithm,
content,
created_at,
fingerprint,
is_editable,
nb_archive,
title,
uid
FROM ovh.dbaas_logs.encryption_keys
WHERE service_name = '{{ service_name }}' -- required
AND title_pattern = '{{ title_pattern }}'
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

Creates an encryption key on the Logs Data Platform service.

```sql
INSERT INTO ovh.dbaas_logs.encryption_keys (
content,
fingerprint,
title,
service_name
)
SELECT 
'{{ content }}' /* required */,
'{{ fingerprint }}' /* required */,
'{{ title }}' /* required */,
'{{ service_name }}'
RETURNING
alias_id,
dashboard_id,
encryption_key_id,
index_id,
input_id,
operation_id,
osd_id,
role_id,
stream_id,
subscription_id,
tenant_id,
token_id,
service_name,
created_at,
state,
updated_at
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: encryption_keys
  props:
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the encryption_keys resource.
    - name: content
      value: "{{ content }}"
      description: |
        Encryption Key content
    - name: fingerprint
      value: "{{ fingerprint }}"
      description: |
        Encryption Key fingerprint
    - name: title
      value: "{{ title }}"
      description: |
        Encryption Key title
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

Deletes the encryption key.

```sql
DELETE FROM ovh.dbaas_logs.encryption_keys
WHERE encryption_key_id = '{{ encryption_key_id }}' --required
AND service_name = '{{ service_name }}' --required
;
```
</TabItem>
</Tabs>
