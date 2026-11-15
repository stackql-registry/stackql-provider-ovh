--- 
title: logs_audits
hide_title: false
hide_table_of_contents: false
keywords:
  - logs_audits
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

Creates, updates, deletes, gets or lists a <code>logs_audits</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="logs_audits" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.me.logs_audits" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

An audit Log

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
    <td><CopyableCode code="auth_details" /></td>
    <td><code>object</code></td>
    <td>authentication details (wire: authDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="created_at" /></td>
    <td><code>string (date-time)</code></td>
    <td>event's date (wire: createdAt)</td>
</tr>
<tr>
    <td><CopyableCode code="group_created_details" /></td>
    <td><code>object</code></td>
    <td>specific fields for GROUP_CREATED events (wire: groupCreatedDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="group_deleted_details" /></td>
    <td><code>object</code></td>
    <td>specific fields for GROUP_DELETED events (wire: groupDeletedDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="group_modified_details" /></td>
    <td><code>object</code></td>
    <td>specific fields for GROUP_MODIFIED events (wire: groupModifiedDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="ip" /></td>
    <td><code>string (ipv4)</code></td>
    <td>IP associated to this event (example: 192.0.2.0)</td>
</tr>
<tr>
    <td><CopyableCode code="login_success_details" /></td>
    <td><code>object</code></td>
    <td>specific fields for LOGIN_SUCCESS events (wire: loginSuccessDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="policy_created_details" /></td>
    <td><code>object</code></td>
    <td>specific fields for POLICY_CREATED events (wire: policyCreatedDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="policy_deleted_details" /></td>
    <td><code>object</code></td>
    <td>specific fields for POLICY_DELETED events (wire: policyDeletedDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="policy_modified_details" /></td>
    <td><code>object</code></td>
    <td>specific fields for POLICY_MODIFIED events (wire: policyModifiedDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="provider_created_details" /></td>
    <td><code>object</code></td>
    <td>specific fields for PROVIDER_CREATED events (wire: providerCreatedDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="provider_deleted_details" /></td>
    <td><code>object</code></td>
    <td>specific fields for PROVIDER_DELETED events (wire: providerDeletedDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="provider_modified_details" /></td>
    <td><code>object</code></td>
    <td>specific fields for PROVIDER_MODIFIED events (wire: providerModifiedDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_group_created_details" /></td>
    <td><code>object</code></td>
    <td>specific fields for RESOURCE_GROUP_CREATED events (wire: resourceGroupCreatedDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_group_deleted_details" /></td>
    <td><code>object</code></td>
    <td>specific fields for RESOURCE_GROUP_DELETED events (wire: resourceGroupDeletedDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_group_modified_details" /></td>
    <td><code>object</code></td>
    <td>specific fields for RESOURCE_GROUP_MODIFIED events (wire: resourceGroupModifiedDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="token_created_details" /></td>
    <td><code>object</code></td>
    <td>specific fields for TOKEN_CREATED events (wire: tokenCreatedDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="token_deleted_details" /></td>
    <td><code>object</code></td>
    <td>specific fields for TOKEN_DELETED events (wire: tokenDeletedDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="token_modified_details" /></td>
    <td><code>object</code></td>
    <td>specific fields for TOKEN_MODIFIED events (wire: tokenModifiedDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>type of event (ACCOUNT_PASSWORD_CHANGED, GROUP_CREATED, GROUP_DELETED, GROUP_MODIFIED, LOGIN_SUCCESS, POLICY_CREATED, POLICY_DELETED, POLICY_MODIFIED, PROVIDER_CREATED, PROVIDER_DELETED, PROVIDER_MODIFIED, RESOURCE_GROUP_CREATED, RESOURCE_GROUP_DELETED, RESOURCE_GROUP_MODIFIED, TOKEN_CREATED, TOKEN_DELETED, TOKEN_MODIFIED, USER_CREATED, USER_DELETED, USER_MODIFIED, USER_PASSWORD_CHANGED)</td>
</tr>
<tr>
    <td><CopyableCode code="user_created_details" /></td>
    <td><code>object</code></td>
    <td>specific fields for USER_CREATED events (wire: userCreatedDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="user_deleted_details" /></td>
    <td><code>object</code></td>
    <td>specific fields for USER_DELETED events (wire: userDeletedDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="user_modified_details" /></td>
    <td><code>object</code></td>
    <td>specific fields for USER_MODIFIED events (wire: userModifiedDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="user_password_changed_details" /></td>
    <td><code>object</code></td>
    <td>specific fields for USER_PASSWORD_CHANGED events (wire: userPasswordChangedDetails)</td>
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
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Get your audit logs (Alpha version)</td>
</tr>
<tr>
    <td><a href="#log_url"><CopyableCode code="log_url" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-kind"><code>kind</code></a></td>
    <td></td>
    <td>Generate a temporary URL to retrieve logs</td>
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
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

Get your audit logs (Alpha version)

```sql
SELECT
auth_details,
created_at,
group_created_details,
group_deleted_details,
group_modified_details,
ip,
login_success_details,
policy_created_details,
policy_deleted_details,
policy_modified_details,
provider_created_details,
provider_deleted_details,
provider_modified_details,
resource_group_created_details,
resource_group_deleted_details,
resource_group_modified_details,
token_created_details,
token_deleted_details,
token_modified_details,
type,
user_created_details,
user_deleted_details,
user_modified_details,
user_password_changed_details
FROM ovh.me.logs_audits
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="log_url"
    values={[
        { label: 'log_url', value: 'log_url' }
    ]}
>
<TabItem value="log_url">

Generate a temporary URL to retrieve logs

```sql
EXEC ovh.me.logs_audits.log_url 
@@json=
'{
"kind": "{{ kind }}"
}'
;
```
</TabItem>
</Tabs>
