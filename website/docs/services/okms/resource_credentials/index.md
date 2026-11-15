--- 
title: resource_credentials
hide_title: false
hide_table_of_contents: false
keywords:
  - resource_credentials
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

Creates, updates, deletes, gets or lists a <code>resource_credentials</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resource_credentials" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.okms.resource_credentials" /></td></tr>
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
    <td>Unique identifier of the credential</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the credential</td>
</tr>
<tr>
    <td><CopyableCode code="certificate_pem" /></td>
    <td><code>string</code></td>
    <td>Certificate PEM of the credential (wire: certificatePEM)</td>
</tr>
<tr>
    <td><CopyableCode code="certificate_type" /></td>
    <td><code>string</code></td>
    <td>Type of the certificate (ECDSA or RSA) (ECDSA, RSA) (wire: certificateType)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation time of the credential (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the credential</td>
</tr>
<tr>
    <td><CopyableCode code="expired_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Expiration time of the credential (wire: expiredAt)</td>
</tr>
<tr>
    <td><CopyableCode code="from_csr" /></td>
    <td><code>boolean</code></td>
    <td>Is the credential generated from CSR (wire: fromCSR)</td>
</tr>
<tr>
    <td><CopyableCode code="identity_urns" /></td>
    <td><code>array</code></td>
    <td>List of identity URNs associated with the credential (wire: identityURNs)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of the credential (CREATING, DELETING, ERROR, EXPIRED, READY)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

An OKMS service access credential

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
    <td>Unique identifier of the credential</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the credential</td>
</tr>
<tr>
    <td><CopyableCode code="certificate_pem" /></td>
    <td><code>string</code></td>
    <td>Certificate PEM of the credential (wire: certificatePEM)</td>
</tr>
<tr>
    <td><CopyableCode code="certificate_type" /></td>
    <td><code>string</code></td>
    <td>Type of the certificate (ECDSA or RSA) (ECDSA, RSA) (wire: certificateType)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation time of the credential (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the credential</td>
</tr>
<tr>
    <td><CopyableCode code="expired_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>Expiration time of the credential (wire: expiredAt)</td>
</tr>
<tr>
    <td><CopyableCode code="from_csr" /></td>
    <td><code>boolean</code></td>
    <td>Is the credential generated from CSR (wire: fromCSR)</td>
</tr>
<tr>
    <td><CopyableCode code="identity_urns" /></td>
    <td><code>array</code></td>
    <td>List of identity URNs associated with the credential (wire: identityURNs)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Status of the credential (CREATING, DELETING, ERROR, EXPIRED, READY)</td>
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
    <td><a href="#parameter-credential_id"><code>credential_id</code></a>, <a href="#parameter-okms_id"><code>okms_id</code></a></td>
    <td></td>
    <td>Returns the metadata and certificate of an access credential. The private key is returned only when the credential is created and can never be retrieved afterward.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-okms_id"><code>okms_id</code></a></td>
    <td><a href="#parameter-x_pagination_cursor"><code>x_pagination_cursor</code></a>, <a href="#parameter-x_pagination_size"><code>x_pagination_size</code></a></td>
    <td>Returns the access credentials of the service, with their identity, status and expiry. Private keys are never returned.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-okms_id"><code>okms_id</code></a>, <a href="#parameter-identity_urns"><code>identity_urns</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Issues a certificate-based access credential bound to the given identity URNs.&lt;br /&gt;&lt;br /&gt;With a CSR, only the signed certificate is produced. Without one, a key pair is generated and the private key is returned in this response only. It can never be retrieved afterward.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-credential_id"><code>credential_id</code></a>, <a href="#parameter-okms_id"><code>okms_id</code></a></td>
    <td></td>
    <td>Revokes the credential and removes it. It can no longer be used to authenticate to the KMS.</td>
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
<tr id="parameter-credential_id">
    <td><CopyableCode code="credential_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Credential ID (wire: credentialId)</td>
</tr>
<tr id="parameter-okms_id">
    <td><CopyableCode code="okms_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Okms ID (wire: okmsId)</td>
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

Returns the metadata and certificate of an access credential. The private key is returned only when the credential is created and can never be retrieved afterward.

```sql
SELECT
id,
name,
certificate_pem,
certificate_type,
created_at,
description,
expired_at,
from_csr,
identity_urns,
status
FROM ovh.okms.resource_credentials
WHERE credential_id = '{{ credential_id }}' -- required
AND okms_id = '{{ okms_id }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns the access credentials of the service, with their identity, status and expiry. Private keys are never returned.

```sql
SELECT
id,
name,
certificate_pem,
certificate_type,
created_at,
description,
expired_at,
from_csr,
identity_urns,
status
FROM ovh.okms.resource_credentials
WHERE okms_id = '{{ okms_id }}' -- required
AND x_pagination_cursor = '{{ x_pagination_cursor }}'
AND x_pagination_size = '{{ x_pagination_size }}'
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

Issues a certificate-based access credential bound to the given identity URNs.&lt;br /&gt;&lt;br /&gt;With a CSR, only the signed certificate is produced. Without one, a key pair is generated and the private key is returned in this response only. It can never be retrieved afterward.

```sql
INSERT INTO ovh.okms.resource_credentials (
certificate_type,
csr,
description,
identity_urns,
name,
validity,
okms_id
)
SELECT 
'{{ certificate_type }}',
'{{ csr }}',
'{{ description }}',
'{{ identity_urns }}' /* required */,
'{{ name }}' /* required */,
{{ validity }},
'{{ okms_id }}'
RETURNING
id,
name,
certificate_type,
created_at,
description,
expired_at,
from_csr,
identity_urns,
private_key_pem,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: resource_credentials
  props:
    - name: okms_id
      value: "{{ okms_id }}"
      description: Required parameter for the resource_credentials resource.
    - name: certificate_type
      value: "{{ certificate_type }}"
      description: |
        Type of the certificate (ECDSA or RSA, incompatible with CSR)
      valid_values: ['ECDSA', 'RSA']
    - name: csr
      value: "{{ csr }}"
      description: |
        Valid Certificate Signing Request
    - name: description
      value: "{{ description }}"
      description: |
        Description of the credential. At most 200.
    - name: identity_urns
      value:
        - "{{ identity_urns }}"
      description: |
        List of identity URNs associated with the credential. At most 25.
    - name: name
      value: "{{ name }}"
      description: |
        Name of the credential. At most 50.
    - name: validity
      value: {{ validity }}
      description: |
        Validity in days (default 365, max 365)
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

Revokes the credential and removes it. It can no longer be used to authenticate to the KMS.

```sql
DELETE FROM ovh.okms.resource_credentials
WHERE credential_id = '{{ credential_id }}' --required
AND okms_id = '{{ okms_id }}' --required
;
```
</TabItem>
</Tabs>
