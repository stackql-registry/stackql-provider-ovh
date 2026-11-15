--- 
title: account_syncs
hide_title: false
hide_table_of_contents: false
keywords:
  - account_syncs
  - ms_services
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

Creates, updates, deletes, gets or lists an <code>account_syncs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="account_syncs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.ms_services.account_syncs" /></td></tr>
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
    <td><CopyableCode code="task_pending_id" /></td>
    <td><code>integer</code></td>
    <td>Pending task for this sync account (wire: taskPendingId)</td>
</tr>
<tr>
    <td><CopyableCode code="configured" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if the account is configured</td>
</tr>
<tr>
    <td><CopyableCode code="license" /></td>
    <td><code>string</code></td>
    <td>Sync account license (standard, standardFree)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Sync account state (creating, deleting, disabled, modifying, ok, reopening, suspended, suspending)</td>
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
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-user_principal_name"><code>user_principal_name</code></a></td>
    <td></td>
    <td>Get the account synchronization (Deprecated, will be removed)</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-user_principal_name"><code>user_principal_name</code></a>, <a href="#parameter-license"><code>license</code></a></td>
    <td></td>
    <td>Create new sync account (Deprecated, will be removed)</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-user_principal_name"><code>user_principal_name</code></a></td>
    <td></td>
    <td>Delete sync account (Deprecated, will be removed)</td>
</tr>
<tr>
    <td><a href="#configure"><CopyableCode code="configure" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-userPrincipalName"><code>userPrincipalName</code></a></td>
    <td></td>
    <td>Configure sync account to be operational (Deprecated, will be removed)</td>
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
    <td>The internal name of your Active Directory organization</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The internal name of your Active Directory organization (wire: serviceName)</td>
</tr>
<tr id="parameter-userPrincipalName">
    <td><CopyableCode code="userPrincipalName" /></td>
    <td><code>string</code></td>
    <td>User Principal Name</td>
</tr>
<tr id="parameter-user_principal_name">
    <td><CopyableCode code="user_principal_name" /></td>
    <td><code>string</code></td>
    <td>User Principal Name (wire: userPrincipalName)</td>
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

Get the account synchronization (Deprecated, will be removed)

```sql
SELECT
task_pending_id,
configured,
license,
state
FROM ovh.ms_services.account_syncs
WHERE service_name = '{{ service_name }}' -- required
AND user_principal_name = '{{ user_principal_name }}' -- required
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

Create new sync account (Deprecated, will be removed)

```sql
INSERT INTO ovh.ms_services.account_syncs (
license,
service_name,
user_principal_name
)
SELECT 
'{{ license }}' /* required */,
'{{ service_name }}',
'{{ user_principal_name }}'
RETURNING
id,
finish_date,
function,
status,
todo_date
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: account_syncs
  props:
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the account_syncs resource.
    - name: user_principal_name
      value: "{{ user_principal_name }}"
      description: Required parameter for the account_syncs resource.
    - name: license
      value: "{{ license }}"
      description: |
        Sync account license
      valid_values: ['standard', 'standardFree']
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

Delete sync account (Deprecated, will be removed)

```sql
DELETE FROM ovh.ms_services.account_syncs
WHERE service_name = '{{ service_name }}' --required
AND user_principal_name = '{{ user_principal_name }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="configure"
    values={[
        { label: 'configure', value: 'configure' }
    ]}
>
<TabItem value="configure">

Configure sync account to be operational (Deprecated, will be removed)

```sql
EXEC ovh.ms_services.account_syncs.configure 
@serviceName='{{ serviceName }}' --required, 
@userPrincipalName='{{ userPrincipalName }}' --required
;
```
</TabItem>
</Tabs>
