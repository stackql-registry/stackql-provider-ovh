--- 
title: resource_service_keys
hide_title: false
hide_table_of_contents: false
keywords:
  - resource_service_keys
  - okms
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

Creates, updates, deletes, gets or lists a <code>resource_service_keys</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resource_service_keys" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.okms.resource_service_keys" /></td></tr>
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
    <td><code>string (uuid)</code></td>
    <td>Key ID</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Key name</td>
</tr>
<tr>
    <td><CopyableCode code="always_sensitive" /></td>
    <td><code>boolean</code></td>
    <td>Whether the key has always been sensitive since creation (wire: alwaysSensitive)</td>
</tr>
<tr>
    <td><CopyableCode code="class" /></td>
    <td><code>string</code></td>
    <td>Class of the key (KEY_PAIR, PUBLIC_KEY, SECRET_KEY)</td>
</tr>
<tr>
    <td><CopyableCode code="consumer_count" /></td>
    <td><code>integer</code></td>
    <td>Number of declared consumers (wire: consumerCount)</td>
</tr>
<tr>
    <td><CopyableCode code="consumers" /></td>
    <td><code>array</code></td>
    <td>List of declared consumers of the key</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation time of the key (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="curve" /></td>
    <td><code>string</code></td>
    <td>Curve type for Elliptic Curve (EC) keys (P-256, P-384, P-521)</td>
</tr>
<tr>
    <td><CopyableCode code="extractable" /></td>
    <td><code>boolean</code></td>
    <td>Whether the key material can be extracted from the KMS</td>
</tr>
<tr>
    <td><CopyableCode code="iam" /></td>
    <td><code>object</code></td>
    <td>IAM resource metadata</td>
</tr>
<tr>
    <td><CopyableCode code="keys" /></td>
    <td><code>array</code></td>
    <td>The key in JWK format</td>
</tr>
<tr>
    <td><CopyableCode code="keys_pem" /></td>
    <td><code>array</code></td>
    <td>The key in PEM format (wire: keysPEM)</td>
</tr>
<tr>
    <td><CopyableCode code="never_extractable" /></td>
    <td><code>boolean</code></td>
    <td>Whether the key has never been extractable at any point in its lifetime (wire: neverExtractable)</td>
</tr>
<tr>
    <td><CopyableCode code="operations" /></td>
    <td><code>array</code></td>
    <td>The operations for which the key is intended to be used</td>
</tr>
<tr>
    <td><CopyableCode code="protection_level" /></td>
    <td><code>string</code></td>
    <td>Key protection level (HSM, SOFTWARE) (wire: protectionLevel)</td>
</tr>
<tr>
    <td><CopyableCode code="sensitive" /></td>
    <td><code>boolean</code></td>
    <td>Whether the key material can be exposed in plaintext. If true, extraction is only allowed in wrapped form.</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>integer</code></td>
    <td>Size of the key (128, 192, 256, 384, 521, 2048, 3072, 4096)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>State of the key (ACTIVE, ALL, COMPROMISED, DEACTIVATED, DESTROYED, DESTROYED_COMPROMISED, PRE_ACTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Key type (EC, RSA, oct)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

An OKMS service key

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
    <td><code>string (uuid)</code></td>
    <td>Key ID</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Key name</td>
</tr>
<tr>
    <td><CopyableCode code="always_sensitive" /></td>
    <td><code>boolean</code></td>
    <td>Whether the key has always been sensitive since creation (wire: alwaysSensitive)</td>
</tr>
<tr>
    <td><CopyableCode code="class" /></td>
    <td><code>string</code></td>
    <td>Class of the key (KEY_PAIR, PUBLIC_KEY, SECRET_KEY)</td>
</tr>
<tr>
    <td><CopyableCode code="consumer_count" /></td>
    <td><code>integer</code></td>
    <td>Number of declared consumers (wire: consumerCount)</td>
</tr>
<tr>
    <td><CopyableCode code="consumers" /></td>
    <td><code>array</code></td>
    <td>List of declared consumers of the key</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation time of the key (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="curve" /></td>
    <td><code>string</code></td>
    <td>Curve type for Elliptic Curve (EC) keys (P-256, P-384, P-521)</td>
</tr>
<tr>
    <td><CopyableCode code="extractable" /></td>
    <td><code>boolean</code></td>
    <td>Whether the key material can be extracted from the KMS</td>
</tr>
<tr>
    <td><CopyableCode code="iam" /></td>
    <td><code>object</code></td>
    <td>IAM resource metadata</td>
</tr>
<tr>
    <td><CopyableCode code="keys" /></td>
    <td><code>array</code></td>
    <td>The key in JWK format</td>
</tr>
<tr>
    <td><CopyableCode code="keys_pem" /></td>
    <td><code>array</code></td>
    <td>The key in PEM format (wire: keysPEM)</td>
</tr>
<tr>
    <td><CopyableCode code="never_extractable" /></td>
    <td><code>boolean</code></td>
    <td>Whether the key has never been extractable at any point in its lifetime (wire: neverExtractable)</td>
</tr>
<tr>
    <td><CopyableCode code="operations" /></td>
    <td><code>array</code></td>
    <td>The operations for which the key is intended to be used</td>
</tr>
<tr>
    <td><CopyableCode code="protection_level" /></td>
    <td><code>string</code></td>
    <td>Key protection level (HSM, SOFTWARE) (wire: protectionLevel)</td>
</tr>
<tr>
    <td><CopyableCode code="sensitive" /></td>
    <td><code>boolean</code></td>
    <td>Whether the key material can be exposed in plaintext. If true, extraction is only allowed in wrapped form.</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>integer</code></td>
    <td>Size of the key (128, 192, 256, 384, 521, 2048, 3072, 4096)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>State of the key (ACTIVE, ALL, COMPROMISED, DEACTIVATED, DESTROYED, DESTROYED_COMPROMISED, PRE_ACTIVE)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Key type (EC, RSA, oct)</td>
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
    <td><a href="#parameter-key_id"><code>key_id</code></a>, <a href="#parameter-okms_id"><code>okms_id</code></a></td>
    <td><a href="#parameter-format"><code>format</code></a></td>
    <td>Returns one service key and its metadata. Pass optional `format` to also export the key material as JWK or PEM, when the key is extractable.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-okms_id"><code>okms_id</code></a></td>
    <td><a href="#parameter-x_pagination_cursor"><code>x_pagination_cursor</code></a>, <a href="#parameter-x_pagination_size"><code>x_pagination_size</code></a>, <a href="#parameter-iam_tags"><code>iam_tags</code></a></td>
    <td>Returns the service keys of the service, with their metadata.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-okms_id"><code>okms_id</code></a></td>
    <td></td>
    <td>To create a new service key, omit the key material from the request. The KMS generates it from the type, size, curve and operations you specify.&lt;br /&gt;&lt;br /&gt;To import an existing service key, supply its key material in the request. The key is stored in the KMS with the attributes you provide.&lt;br /&gt;&lt;br /&gt;For a secure BYOK import, send the key material encrypted in `wrappedKeys` (RSA wrap) instead of in cleartext. The KMS unwraps it with the referenced transport key and stores the resulting service key.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-key_id"><code>key_id</code></a>, <a href="#parameter-okms_id"><code>okms_id</code></a></td>
    <td></td>
    <td>Updates the key's name or extractability.&lt;br /&gt;&lt;br /&gt;You can also change the key state to activate, deactivate, or mark it as compromised. Deactivation requires `deactivationReason`.&lt;br /&gt;&lt;br /&gt;A deactivated key keeps its material in the KMS and can be reactivated later.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-key_id"><code>key_id</code></a>, <a href="#parameter-okms_id"><code>okms_id</code></a></td>
    <td><a href="#parameter-force"><code>force</code></a></td>
    <td>Permanently deletes the key and its material from the KMS. Once deleted, the key cannot be recovered.&lt;br /&gt;&lt;br /&gt;The key must already be deactivated, unless `force` is set.</td>
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
<tr id="parameter-key_id">
    <td><CopyableCode code="key_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Key ID (wire: keyId)</td>
</tr>
<tr id="parameter-okms_id">
    <td><CopyableCode code="okms_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Okms ID (wire: okmsId)</td>
</tr>
<tr id="parameter-force">
    <td><CopyableCode code="force" /></td>
    <td><code>boolean</code></td>
    <td>Force deletion of the key</td>
</tr>
<tr id="parameter-format">
    <td><CopyableCode code="format" /></td>
    <td><code>string</code></td>
    <td>Optional additional output format of the key</td>
</tr>
<tr id="parameter-iam_tags">
    <td><CopyableCode code="iam_tags" /></td>
    <td><code>object</code></td>
    <td>Filter resources on IAM tags (wire: iamTags)</td>
</tr>
<tr id="parameter-x_pagination_cursor">
    <td><CopyableCode code="x_pagination_cursor" /></td>
    <td><code>string</code></td>
    <td>Pagination cursor (wire: X-Pagination-Cursor)</td>
</tr>
<tr id="parameter-x_pagination_size">
    <td><CopyableCode code="x_pagination_size" /></td>
    <td><code>integer</code></td>
    <td>Pagination size (wire: X-Pagination-Size)</td>
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

Returns one service key and its metadata. Pass optional `format` to also export the key material as JWK or PEM, when the key is extractable.

```sql
SELECT
id,
name,
always_sensitive,
class,
consumer_count,
consumers,
created_at,
curve,
extractable,
iam,
keys,
keys_pem,
never_extractable,
operations,
protection_level,
sensitive,
size,
state,
type
FROM ovh.okms.resource_service_keys
WHERE key_id = '{{ key_id }}' -- required
AND okms_id = '{{ okms_id }}' -- required
AND format = '{{ format }}'
;
```
</TabItem>
<TabItem value="list">

Returns the service keys of the service, with their metadata.

```sql
SELECT
id,
name,
always_sensitive,
class,
consumer_count,
consumers,
created_at,
curve,
extractable,
iam,
keys,
keys_pem,
never_extractable,
operations,
protection_level,
sensitive,
size,
state,
type
FROM ovh.okms.resource_service_keys
WHERE okms_id = '{{ okms_id }}' -- required
AND x_pagination_cursor = '{{ x_pagination_cursor }}'
AND x_pagination_size = '{{ x_pagination_size }}'
AND iam_tags = '{{ iam_tags }}'
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

To create a new service key, omit the key material from the request. The KMS generates it from the type, size, curve and operations you specify.&lt;br /&gt;&lt;br /&gt;To import an existing service key, supply its key material in the request. The key is stored in the KMS with the attributes you provide.&lt;br /&gt;&lt;br /&gt;For a secure BYOK import, send the key material encrypted in `wrappedKeys` (RSA wrap) instead of in cleartext. The KMS unwraps it with the referenced transport key and stores the resulting service key.

```sql
INSERT INTO ovh.okms.resource_service_keys (
context,
curve,
extractable,
keys,
name,
operations,
protection_level,
size,
type,
okms_id
)
SELECT 
'{{ context }}',
'{{ curve }}',
{{ extractable }},
'{{ keys }}',
'{{ name }}',
'{{ operations }}',
'{{ protection_level }}',
{{ size }},
'{{ type }}',
'{{ okms_id }}'
RETURNING
id,
name,
always_sensitive,
class,
consumer_count,
consumers,
created_at,
curve,
extractable,
keys,
keys_pem,
never_extractable,
operations,
protection_level,
sensitive,
size,
state,
type
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: resource_service_keys
  props:
    - name: okms_id
      value: "{{ okms_id }}"
      description: Required parameter for the resource_service_keys resource.
    - name: context
      value: "{{ context }}"
      description: |
        Context of the key
    - name: curve
      value: "{{ curve }}"
      description: |
        Curve type for Elliptic Curve (EC) keys
      valid_values: ['P-256', 'P-384', 'P-521']
    - name: extractable
      value: {{ extractable }}
      description: |
        Whether the key material can be extracted from the KMS. Defaults to false.
    - name: keys
      description: |
        Set of JSON Web Keys in case of import, incompatible with type,size,curve and operations
      value:
        - alg: "{{ alg }}"
          crv: "{{ crv }}"
          d: "{{ d }}"
          dp: "{{ dp }}"
          dq: "{{ dq }}"
          e: "{{ e }}"
          k: "{{ k }}"
          key_ops: "{{ key_ops }}"
          kid: "{{ kid }}"
          kty: "{{ kty }}"
          n: "{{ n }}"
          p: "{{ p }}"
          q: "{{ q }}"
          qi: "{{ qi }}"
          use: "{{ use }}"
          x: "{{ x }}"
          y: "{{ y }}"
    - name: name
      value: "{{ name }}"
      description: |
        Key name
    - name: operations
      value:
        - "{{ operations }}"
      description: |
        The operations for which the key is intended to be used
    - name: protection_level
      value: "{{ protection_level }}"
      description: |
        Key protection level
      valid_values: ['HSM', 'SOFTWARE']
    - name: size
      value: {{ size }}
      description: |
        Size of the key to be created
      valid_values: ['128', '192', '256', '384', '521', '2048', '3072', '4096']
    - name: type
      value: "{{ type }}"
      description: |
        Type of the key to be created
      valid_values: ['EC', 'RSA', 'oct']
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

Updates the key's name or extractability.&lt;br /&gt;&lt;br /&gt;You can also change the key state to activate, deactivate, or mark it as compromised. Deactivation requires `deactivationReason`.&lt;br /&gt;&lt;br /&gt;A deactivated key keeps its material in the KMS and can be reactivated later.

```sql
UPDATE ovh.okms.resource_service_keys
SET 
deactivation_reason = '{{ deactivation_reason }}',
extractable = {{ extractable }},
name = '{{ name }}',
state = '{{ state }}'
WHERE 
key_id = '{{ key_id }}' --required
AND okms_id = '{{ okms_id }}' --required
RETURNING
id,
name,
always_sensitive,
class,
consumer_count,
consumers,
created_at,
curve,
extractable,
keys,
keys_pem,
never_extractable,
operations,
protection_level,
sensitive,
size,
state,
type;
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

Permanently deletes the key and its material from the KMS. Once deleted, the key cannot be recovered.&lt;br /&gt;&lt;br /&gt;The key must already be deactivated, unless `force` is set.

```sql
DELETE FROM ovh.okms.resource_service_keys
WHERE key_id = '{{ key_id }}' --required
AND okms_id = '{{ okms_id }}' --required
AND force = '{{ force }}'
;
```
</TabItem>
</Tabs>
