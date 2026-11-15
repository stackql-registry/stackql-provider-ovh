--- 
title: account_sharepoints
hide_title: false
hide_table_of_contents: false
keywords:
  - account_sharepoints
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

Creates, updates, deletes, gets or lists an <code>account_sharepoints</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="account_sharepoints" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.ms_services.account_sharepoints" /></td></tr>
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
    <td><code>integer</code></td>
    <td>Sharepoint account id</td>
</tr>
<tr>
    <td><CopyableCode code="active_directory_account_id" /></td>
    <td><code>integer</code></td>
    <td>Active Directory Account id (wire: activeDirectoryAccountId)</td>
</tr>
<tr>
    <td><CopyableCode code="task_pending_id" /></td>
    <td><code>integer</code></td>
    <td>Pending task for this sharepoint account (wire: taskPendingId)</td>
</tr>
<tr>
    <td><CopyableCode code="access_rights" /></td>
    <td><code>string</code></td>
    <td>The rights assigned to the sharepoint account (administrator, user) (wire: accessRights)</td>
</tr>
<tr>
    <td><CopyableCode code="configured" /></td>
    <td><code>boolean</code></td>
    <td>Indicates if the account is configured</td>
</tr>
<tr>
    <td><CopyableCode code="current_usage" /></td>
    <td><code>integer</code></td>
    <td>OneDrive usage in byte (wire: currentUsage)</td>
</tr>
<tr>
    <td><CopyableCode code="delete_at_expiration" /></td>
    <td><code>boolean</code></td>
    <td>delete at expiration (wire: deleteAtExpiration)</td>
</tr>
<tr>
    <td><CopyableCode code="license" /></td>
    <td><code>string</code></td>
    <td>Sharepoint account license (foundation, standard)</td>
</tr>
<tr>
    <td><CopyableCode code="office_license" /></td>
    <td><code>boolean</code></td>
    <td>office license is available (wire: officeLicense)</td>
</tr>
<tr>
    <td><CopyableCode code="quota" /></td>
    <td><code>integer</code></td>
    <td>OneDrive maximum size in byte</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Sharepoint account state (creating, deleting, disabled, modifying, ok, reopening, suspended, suspending)</td>
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
    <td>Get the account SharePoint information (Deprecated, will be removed)</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-user_principal_name"><code>user_principal_name</code></a></td>
    <td></td>
    <td>Alter this object properties (Deprecated, will be removed)</td>
</tr>
<tr>
    <td><a href="#clear_space"><CopyableCode code="clear_space" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-userPrincipalName"><code>userPrincipalName</code></a></td>
    <td></td>
    <td>On-demand MySite clearance (Deprecated, will be removed)</td>
</tr>
<tr>
    <td><a href="#configure"><CopyableCode code="configure" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-userPrincipalName"><code>userPrincipalName</code></a></td>
    <td></td>
    <td>Configure sharepoint account to be operational (Deprecated, will be removed)</td>
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

Get the account SharePoint information (Deprecated, will be removed)

```sql
SELECT
id,
active_directory_account_id,
task_pending_id,
access_rights,
configured,
current_usage,
delete_at_expiration,
license,
office_license,
quota,
state
FROM ovh.ms_services.account_sharepoints
WHERE service_name = '{{ service_name }}' -- required
AND user_principal_name = '{{ user_principal_name }}' -- required
;
```
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

Alter this object properties (Deprecated, will be removed)

```sql
UPDATE ovh.ms_services.account_sharepoints
SET 
access_rights = '{{ access_rights }}',
delete_at_expiration = {{ delete_at_expiration }},
office_license = {{ office_license }}
WHERE 
service_name = '{{ service_name }}' --required
AND user_principal_name = '{{ user_principal_name }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="clear_space"
    values={[
        { label: 'clear_space', value: 'clear_space' },
        { label: 'configure', value: 'configure' }
    ]}
>
<TabItem value="clear_space">

On-demand MySite clearance (Deprecated, will be removed)

```sql
EXEC ovh.ms_services.account_sharepoints.clear_space 
@serviceName='{{ serviceName }}' --required, 
@userPrincipalName='{{ userPrincipalName }}' --required
;
```
</TabItem>
<TabItem value="configure">

Configure sharepoint account to be operational (Deprecated, will be removed)

```sql
EXEC ovh.ms_services.account_sharepoints.configure 
@serviceName='{{ serviceName }}' --required, 
@userPrincipalName='{{ userPrincipalName }}' --required
;
```
</TabItem>
</Tabs>
