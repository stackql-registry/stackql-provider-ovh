--- 
title: identity_providers
hide_title: false
hide_table_of_contents: false
keywords:
  - identity_providers
  - me
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

Creates, updates, deletes, gets or lists an <code>identity_providers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="identity_providers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.me.identity_providers" /></td></tr>
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
    <td><CopyableCode code="group_attribute_name" /></td>
    <td><code>string</code></td>
    <td>SAML Group attribute name (wire: groupAttributeName)</td>
</tr>
<tr>
    <td><CopyableCode code="user_attribute_name" /></td>
    <td><code>string</code></td>
    <td>SAML User attribute name (wire: userAttributeName)</td>
</tr>
<tr>
    <td><CopyableCode code="creation" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date of the identity provider</td>
</tr>
<tr>
    <td><CopyableCode code="disable_users" /></td>
    <td><code>boolean</code></td>
    <td>Whether account users should still be usable as a login method or not (wire: disableUsers)</td>
</tr>
<tr>
    <td><CopyableCode code="extensions" /></td>
    <td><code>object</code></td>
    <td>SAML Extensions to embed inside the SAML requests</td>
</tr>
<tr>
    <td><CopyableCode code="idp_signing_certificates" /></td>
    <td><code>array</code></td>
    <td>IdP's signing certificate (wire: idpSigningCertificates)</td>
</tr>
<tr>
    <td><CopyableCode code="last_update" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last update of the identity provider (wire: lastUpdate)</td>
</tr>
<tr>
    <td><CopyableCode code="sign_requests" /></td>
    <td><code>boolean</code></td>
    <td>Whether SAML Authn Requests should be signed (wire: signRequests)</td>
</tr>
<tr>
    <td><CopyableCode code="sso_service_url" /></td>
    <td><code>string</code></td>
    <td>IdP's Single Sign On Service Url (wire: ssoServiceUrl)</td>
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
    <td></td>
    <td></td>
    <td>Get the identity provider linked to this account</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-metadata"><code>metadata</code></a></td>
    <td></td>
    <td>Define an identity provider (SAML 2.0)</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td></td>
    <td></td>
    <td>Alter the provider</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td></td>
    <td></td>
    <td>Remove the identity provider</td>
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

Get the identity provider linked to this account

```sql
SELECT
group_attribute_name,
user_attribute_name,
creation,
disable_users,
extensions,
idp_signing_certificates,
last_update,
sign_requests,
sso_service_url
FROM ovh.me.identity_providers
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

Define an identity provider (SAML 2.0)

```sql
INSERT INTO ovh.me.identity_providers (
disable_users,
extensions,
group_attribute_name,
metadata,
sign_requests,
user_attribute_name
)
SELECT 
{{ disable_users }},
'{{ extensions }}',
'{{ group_attribute_name }}',
'{{ metadata }}' /* required */,
{{ sign_requests }},
'{{ user_attribute_name }}'
RETURNING
group_attribute_name,
user_attribute_name,
creation,
disable_users,
extensions,
idp_signing_certificates,
last_update,
sign_requests,
sso_service_url
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: identity_providers
  props:
    - name: disable_users
      value: {{ disable_users }}
      description: |
        Whether account users should still be usable as a login method or not
    - name: extensions
      description: |
        SAML Extensions to embed inside the SAML requests
      value:
        requestedAttributes:
          - isRequired: {{ isRequired }}
            name: "{{ name }}"
            nameFormat: "{{ nameFormat }}"
            values: "{{ values }}"
    - name: group_attribute_name
      value: "{{ group_attribute_name }}"
      description: |
        SAML Group attribute name
    - name: metadata
      value: "{{ metadata }}"
      description: |
        IdP's signing certificate
    - name: sign_requests
      value: {{ sign_requests }}
      description: |
        Whether SAML Authn Requests should be signed
    - name: user_attribute_name
      value: "{{ user_attribute_name }}"
      description: |
        SAML User attribute name
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

Alter the provider

```sql
UPDATE ovh.me.identity_providers
SET 
disable_users = {{ disable_users }},
extensions = '{{ extensions }}',
group_attribute_name = '{{ group_attribute_name }}',
sign_requests = {{ sign_requests }},
user_attribute_name = '{{ user_attribute_name }}';
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

Remove the identity provider

```sql
DELETE FROM ovh.me.identity_providers
;
```
</TabItem>
</Tabs>
