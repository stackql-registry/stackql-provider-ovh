--- 
title: open_id_connects
hide_title: false
hide_table_of_contents: false
keywords:
  - open_id_connects
  - cloud_kube
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

Creates, updates, deletes, gets or lists an <code>open_id_connects</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="open_id_connects" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.cloud_kube.open_id_connects" /></td></tr>
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
    <td><CopyableCode code="client_id" /></td>
    <td><code>string</code></td>
    <td>Client ID (wire: clientId)</td>
</tr>
<tr>
    <td><CopyableCode code="ca_content" /></td>
    <td><code>string</code></td>
    <td>Content of the certificate for the CA, in base64 format, that signed your identity provider's web certificate. Defaults to the host's root CAs. (wire: caContent)</td>
</tr>
<tr>
    <td><CopyableCode code="groups_claim" /></td>
    <td><code>array</code></td>
    <td>JWT claim to use as the user's group. If the claim is present it must be an array of strings. (wire: groupsClaim)</td>
</tr>
<tr>
    <td><CopyableCode code="groups_prefix" /></td>
    <td><code>string</code></td>
    <td>Prefix prepended to group claims to prevent clashes with existing names (such as system: groups). For example, the value oidc: will create group names like oidc:engineering and oidc:infra. (wire: groupsPrefix)</td>
</tr>
<tr>
    <td><CopyableCode code="issuer_url" /></td>
    <td><code>string</code></td>
    <td>Issuer URL (wire: issuerUrl)</td>
</tr>
<tr>
    <td><CopyableCode code="required_claim" /></td>
    <td><code>array</code></td>
    <td>key=value pairs that describe required claims in the ID Token. If set, the claims are verified to be present in the ID Token with a matching value. (wire: requiredClaim)</td>
</tr>
<tr>
    <td><CopyableCode code="signing_algorithms" /></td>
    <td><code>array</code></td>
    <td>The signing algorithms accepted. Default is "RS256". (wire: signingAlgorithms)</td>
</tr>
<tr>
    <td><CopyableCode code="username_claim" /></td>
    <td><code>string</code></td>
    <td>JWT claim to use as the user name. By default sub, which is expected to be a unique identifier of the end user. Admins can choose other claims, such as email or name, depending on their provider. However, claims other than email will be prefixed with the issuer URL to prevent naming clashes with other plugins. (wire: usernameClaim)</td>
</tr>
<tr>
    <td><CopyableCode code="username_prefix" /></td>
    <td><code>string</code></td>
    <td>Prefix prepended to username claims to prevent clashes with existing names (such as system: users). For example, the value oidc: will create usernames like oidc:jane.doe. If this field isn't set and oidcUsernameClaim is a value other than email the prefix defaults to ( Issuer URL )# where ( Issuer URL ) is the value of oidcIssuerUrl. The value - can be used to disable all prefixing. (wire: usernamePrefix)</td>
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
    <td><a href="#parameter-kube_id"><code>kube_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get openIdConnect integration parameters</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-kube_id"><code>kube_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-client_id"><code>client_id</code></a>, <a href="#parameter-issuer_url"><code>issuer_url</code></a></td>
    <td></td>
    <td>Configure APIServer for OpenIdConnect</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-kube_id"><code>kube_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Update parameters and reconfigure APIServer</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-kube_id"><code>kube_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Remove OpenIdConnect integration from APIServer</td>
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
<tr id="parameter-kube_id">
    <td><CopyableCode code="kube_id" /></td>
    <td><code>string</code></td>
    <td>Kube ID (wire: kubeId)</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The Public Cloud project ID. Resolved from OVH_CLOUD_PROJECT_SERVICE when set.</td>
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

Get openIdConnect integration parameters

```sql
SELECT
client_id,
ca_content,
groups_claim,
groups_prefix,
issuer_url,
required_claim,
signing_algorithms,
username_claim,
username_prefix
FROM ovh.cloud_kube.open_id_connects
WHERE kube_id = '{{ kube_id }}' -- required
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

Configure APIServer for OpenIdConnect

```sql
INSERT INTO ovh.cloud_kube.open_id_connects (
ca_content,
client_id,
groups_claim,
groups_prefix,
issuer_url,
required_claim,
signing_algorithms,
username_claim,
username_prefix,
kube_id,
service_name
)
SELECT 
'{{ ca_content }}',
'{{ client_id }}' /* required */,
'{{ groups_claim }}',
'{{ groups_prefix }}',
'{{ issuer_url }}' /* required */,
'{{ required_claim }}',
'{{ signing_algorithms }}',
'{{ username_claim }}',
'{{ username_prefix }}',
'{{ kube_id }}',
'{{ service_name }}'
RETURNING
client_id,
ca_content,
groups_claim,
groups_prefix,
issuer_url,
required_claim,
signing_algorithms,
username_claim,
username_prefix
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: open_id_connects
  props:
    - name: kube_id
      value: "{{ kube_id }}"
      description: Required parameter for the open_id_connects resource.
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the open_id_connects resource.
    - name: ca_content
      value: "{{ ca_content }}"
      description: |
        Content of the certificate for the CA, in base64 format, that signed your identity provider's web certificate. Defaults to the host's root CAs.
    - name: client_id
      value: "{{ client_id }}"
      description: |
        Client ID
    - name: groups_claim
      value:
        - "{{ groups_claim }}"
      description: |
        JWT claim to use as the user's group. If the claim is present it must be an array of strings.
    - name: groups_prefix
      value: "{{ groups_prefix }}"
      description: |
        Prefix prepended to group claims to prevent clashes with existing names (such as system: groups). For example, the value oidc: will create group names like oidc:engineering and oidc:infra.
    - name: issuer_url
      value: "{{ issuer_url }}"
      description: |
        Issuer URL
    - name: required_claim
      value:
        - "{{ required_claim }}"
      description: |
        key=value pairs that describe required claims in the ID Token. If set, the claims are verified to be present in the ID Token with a matching value.
    - name: signing_algorithms
      value:
        - "{{ signing_algorithms }}"
      description: |
        The signing algorithms accepted. Default is "RS256".
    - name: username_claim
      value: "{{ username_claim }}"
      description: |
        JWT claim to use as the user name. By default sub, which is expected to be a unique identifier of the end user. Admins can choose other claims, such as email or name, depending on their provider. However, claims other than email will be prefixed with the issuer URL to prevent naming clashes with other plugins.
    - name: username_prefix
      value: "{{ username_prefix }}"
      description: |
        Prefix prepended to username claims to prevent clashes with existing names (such as system: users). For example, the value oidc: will create usernames like oidc:jane.doe. If this field isn't set and oidcUsernameClaim is a value other than email the prefix defaults to ( Issuer URL )# where ( Issuer URL ) is the value of oidcIssuerUrl. The value - can be used to disable all prefixing.
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

Update parameters and reconfigure APIServer

```sql
UPDATE ovh.cloud_kube.open_id_connects
SET 
ca_content = '{{ ca_content }}',
client_id = '{{ client_id }}',
groups_claim = '{{ groups_claim }}',
groups_prefix = '{{ groups_prefix }}',
issuer_url = '{{ issuer_url }}',
required_claim = '{{ required_claim }}',
signing_algorithms = '{{ signing_algorithms }}',
username_claim = '{{ username_claim }}',
username_prefix = '{{ username_prefix }}'
WHERE 
kube_id = '{{ kube_id }}' --required
AND service_name = '{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set;
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

Remove OpenIdConnect integration from APIServer

```sql
DELETE FROM ovh.cloud_kube.open_id_connects
WHERE kube_id = '{{ kube_id }}' --required
AND service_name = '{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
</Tabs>
