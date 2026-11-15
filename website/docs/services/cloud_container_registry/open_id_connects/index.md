--- 
title: open_id_connects
hide_title: false
hide_table_of_contents: false
keywords:
  - open_id_connects
  - cloud_container_registry
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
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.cloud_container_registry.open_id_connects" /></td></tr>
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
    <td><CopyableCode code="id" /></td>
    <td><code>string</code></td>
    <td>The OIDC Configuration ID</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The OIDC Configuration Name</td>
</tr>
<tr>
    <td><CopyableCode code="client_id" /></td>
    <td><code>string</code></td>
    <td>The OIDC Configuration ClientID (wire: clientId)</td>
</tr>
<tr>
    <td><CopyableCode code="admin_group" /></td>
    <td><code>string</code></td>
    <td>The OIDC Configuration AdminGroup (wire: adminGroup)</td>
</tr>
<tr>
    <td><CopyableCode code="auto_onboard" /></td>
    <td><code>boolean</code></td>
    <td>The OIDC Configuration AutoOnboard (wire: autoOnboard)</td>
</tr>
<tr>
    <td><CopyableCode code="client_secret" /></td>
    <td><code>string (password)</code></td>
    <td>The OIDC Configuration Client Secret (wire: clientSecret)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The OIDC Configuration creation date (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="endpoint" /></td>
    <td><code>string</code></td>
    <td>The OIDC Configuration Endpoint</td>
</tr>
<tr>
    <td><CopyableCode code="group_filter" /></td>
    <td><code>string</code></td>
    <td>The OIDC Configuration GroupFilter (wire: groupFilter)</td>
</tr>
<tr>
    <td><CopyableCode code="groups_claim" /></td>
    <td><code>string</code></td>
    <td>The OIDC Configuration GroupsClaim (wire: groupsClaim)</td>
</tr>
<tr>
    <td><CopyableCode code="scope" /></td>
    <td><code>string</code></td>
    <td>The OIDC Configuration comma-separated list of Scopes</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The OIDC Configuration status (DELETING, ERROR, INSTALLING, PATCHING, READY, UPDATING)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>The OIDC Configuration last update date (wire: updatedAt)</td>
</tr>
<tr>
    <td><CopyableCode code="user_claim" /></td>
    <td><code>string</code></td>
    <td>The OIDC Configuration UserClaim (wire: userClaim)</td>
</tr>
<tr>
    <td><CopyableCode code="verify_cert" /></td>
    <td><code>boolean</code></td>
    <td>The OIDC Configuration VerifyCert (wire: verifyCert)</td>
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
    <td><a href="#parameter-registry_id"><code>registry_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get the registry's OIDC configuration</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-registry_id"><code>registry_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-provider"><code>provider</code></a></td>
    <td></td>
    <td>Add or replace the registry's OIDC configuration</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-registry_id"><code>registry_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Edit the registry's OIDC configuration</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-registry_id"><code>registry_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Delete the registry's OIDC Configuration</td>
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
<tr id="parameter-registry_id">
    <td><CopyableCode code="registry_id" /></td>
    <td><code>string</code></td>
    <td>RegistryID (wire: registryID)</td>
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

Get the registry's OIDC configuration

```sql
SELECT
id,
name,
client_id,
admin_group,
auto_onboard,
client_secret,
created_at,
endpoint,
group_filter,
groups_claim,
scope,
status,
updated_at,
user_claim,
verify_cert
FROM ovh.cloud_container_registry.open_id_connects
WHERE registry_id = '{{ registry_id }}' -- required
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

Add or replace the registry's OIDC configuration

```sql
INSERT INTO ovh.cloud_container_registry.open_id_connects (
delete_users,
provider,
registry_id,
service_name
)
SELECT 
{{ delete_users }},
'{{ provider }}' /* required */,
'{{ registry_id }}',
'{{ service_name }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: open_id_connects
  props:
    - name: registry_id
      value: "{{ registry_id }}"
      description: Required parameter for the open_id_connects resource.
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the open_id_connects resource.
    - name: delete_users
      value: {{ delete_users }}
      description: |
        Delete all previously created users to allow OIDC configuration
    - name: provider
      description: |
        The OIDC provider configuration
      value:
        adminGroup: "{{ adminGroup }}"
        autoOnboard: {{ autoOnboard }}
        clientId: "{{ clientId }}"
        clientSecret: "{{ clientSecret }}"
        createdAt: "{{ createdAt }}"
        endpoint: "{{ endpoint }}"
        groupFilter: "{{ groupFilter }}"
        groupsClaim: "{{ groupsClaim }}"
        id: "{{ id }}"
        name: "{{ name }}"
        scope: "{{ scope }}"
        status: "{{ status }}"
        updatedAt: "{{ updatedAt }}"
        userClaim: "{{ userClaim }}"
        verifyCert: {{ verifyCert }}
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

Edit the registry's OIDC configuration

```sql
UPDATE ovh.cloud_container_registry.open_id_connects
SET 
admin_group = '{{ admin_group }}',
auto_onboard = {{ auto_onboard }},
client_id = '{{ client_id }}',
client_secret = '{{ client_secret }}',
endpoint = '{{ endpoint }}',
group_filter = '{{ group_filter }}',
groups_claim = '{{ groups_claim }}',
name = '{{ name }}',
scope = '{{ scope }}',
user_claim = '{{ user_claim }}',
verify_cert = {{ verify_cert }}
WHERE 
registry_id = '{{ registry_id }}' --required
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

Delete the registry's OIDC Configuration

```sql
DELETE FROM ovh.cloud_container_registry.open_id_connects
WHERE registry_id = '{{ registry_id }}' --required
AND service_name = '{{ service_name }}' --required unless OVH_CLOUD_PROJECT_SERVICE is set
;
```
</TabItem>
</Tabs>
