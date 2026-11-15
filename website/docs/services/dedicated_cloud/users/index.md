--- 
title: users
hide_title: false
hide_table_of_contents: false
keywords:
  - users
  - dedicated_cloud
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

Creates, updates, deletes, gets or lists a <code>users</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="users" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.dedicated_cloud.users" /></td></tr>
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the user</td>
</tr>
<tr>
    <td><CopyableCode code="active_directory_id" /></td>
    <td><code>integer</code></td>
    <td>Deprecated - Linked Federation Active Directory (if any) (wire: activeDirectoryId)</td>
</tr>
<tr>
    <td><CopyableCode code="identity_provider_id" /></td>
    <td><code>integer</code></td>
    <td>Linked Identity Provider (if any), can be Federation Active Directory or IAM (wire: identityProviderId)</td>
</tr>
<tr>
    <td><CopyableCode code="user_id" /></td>
    <td><code>integer</code></td>
    <td> (wire: userId)</td>
</tr>
<tr>
    <td><CopyableCode code="first_name" /></td>
    <td><code>string</code></td>
    <td>First name of the user (wire: firstName)</td>
</tr>
<tr>
    <td><CopyableCode code="last_name" /></td>
    <td><code>string</code></td>
    <td>Last name of the user (wire: lastName)</td>
</tr>
<tr>
    <td><CopyableCode code="activation_state" /></td>
    <td><code>string</code></td>
    <td>Activation state of the user account (disabled, disabling, enabled, enabling, toDisable, toEnable) (wire: activationState)</td>
</tr>
<tr>
    <td><CopyableCode code="active_directory_type" /></td>
    <td><code>string</code></td>
    <td>Deprecated - Federation Active Directory User type (if any) (group, user) (wire: activeDirectoryType)</td>
</tr>
<tr>
    <td><CopyableCode code="can_manage_ip_fail_overs" /></td>
    <td><code>boolean</code></td>
    <td>Defines if the user can manage ip failovers (wire: canManageIpFailOvers)</td>
</tr>
<tr>
    <td><CopyableCode code="can_manage_network" /></td>
    <td><code>boolean</code></td>
    <td>Defines if the user can manage the network (wire: canManageNetwork)</td>
</tr>
<tr>
    <td><CopyableCode code="can_manage_rights" /></td>
    <td><code>boolean</code></td>
    <td>Defines if the user can manage users rights (wire: canManageRights)</td>
</tr>
<tr>
    <td><CopyableCode code="email" /></td>
    <td><code>string</code></td>
    <td>Email address of the user</td>
</tr>
<tr>
    <td><CopyableCode code="encryption_right" /></td>
    <td><code>boolean</code></td>
    <td>Defines if the user can manage encryption / KMS configuration (wire: encryptionRight)</td>
</tr>
<tr>
    <td><CopyableCode code="full_admin_ro" /></td>
    <td><code>boolean</code></td>
    <td>Defines if the user is a full admin in readonly (wire: fullAdminRo)</td>
</tr>
<tr>
    <td><CopyableCode code="identity_provider_type" /></td>
    <td><code>string</code></td>
    <td>Linked Identity Provider type (if any), can be Federation Active Directory or IAM (federation, iam) (wire: identityProviderType)</td>
</tr>
<tr>
    <td><CopyableCode code="is_enable_manageable" /></td>
    <td><code>boolean</code></td>
    <td>Check if the given VMware on OVHcloud user can be enabled or disabled ? (wire: isEnableManageable)</td>
</tr>
<tr>
    <td><CopyableCode code="is_token_validator" /></td>
    <td><code>boolean</code></td>
    <td>Defines if the user can confirm security tokens (if a compatible option is enabled) (wire: isTokenValidator)</td>
</tr>
<tr>
    <td><CopyableCode code="login" /></td>
    <td><code>string</code></td>
    <td>Login of the user</td>
</tr>
<tr>
    <td><CopyableCode code="nsx_right" /></td>
    <td><code>boolean</code></td>
    <td>Is this User able to access nsx interface (requires NSX option) (wire: nsxRight)</td>
</tr>
<tr>
    <td><CopyableCode code="phone_number" /></td>
    <td><code>string</code></td>
    <td>Mobile phone number of the user (wire: phoneNumber)</td>
</tr>
<tr>
    <td><CopyableCode code="receive_alerts" /></td>
    <td><code>boolean</code></td>
    <td>Defines if the user receives technical alerts (wire: receiveAlerts)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>State of the user account (creating, deleting, delivered, error)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>User type (if any) (group, user)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

User

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the user</td>
</tr>
<tr>
    <td><CopyableCode code="active_directory_id" /></td>
    <td><code>integer</code></td>
    <td>Deprecated - Linked Federation Active Directory (if any) (wire: activeDirectoryId)</td>
</tr>
<tr>
    <td><CopyableCode code="identity_provider_id" /></td>
    <td><code>integer</code></td>
    <td>Linked Identity Provider (if any), can be Federation Active Directory or IAM (wire: identityProviderId)</td>
</tr>
<tr>
    <td><CopyableCode code="user_id" /></td>
    <td><code>integer</code></td>
    <td> (wire: userId)</td>
</tr>
<tr>
    <td><CopyableCode code="first_name" /></td>
    <td><code>string</code></td>
    <td>First name of the user (wire: firstName)</td>
</tr>
<tr>
    <td><CopyableCode code="last_name" /></td>
    <td><code>string</code></td>
    <td>Last name of the user (wire: lastName)</td>
</tr>
<tr>
    <td><CopyableCode code="activation_state" /></td>
    <td><code>string</code></td>
    <td>Activation state of the user account (disabled, disabling, enabled, enabling, toDisable, toEnable) (wire: activationState)</td>
</tr>
<tr>
    <td><CopyableCode code="active_directory_type" /></td>
    <td><code>string</code></td>
    <td>Deprecated - Federation Active Directory User type (if any) (group, user) (wire: activeDirectoryType)</td>
</tr>
<tr>
    <td><CopyableCode code="can_manage_ip_fail_overs" /></td>
    <td><code>boolean</code></td>
    <td>Defines if the user can manage ip failovers (wire: canManageIpFailOvers)</td>
</tr>
<tr>
    <td><CopyableCode code="can_manage_network" /></td>
    <td><code>boolean</code></td>
    <td>Defines if the user can manage the network (wire: canManageNetwork)</td>
</tr>
<tr>
    <td><CopyableCode code="can_manage_rights" /></td>
    <td><code>boolean</code></td>
    <td>Defines if the user can manage users rights (wire: canManageRights)</td>
</tr>
<tr>
    <td><CopyableCode code="email" /></td>
    <td><code>string</code></td>
    <td>Email address of the user</td>
</tr>
<tr>
    <td><CopyableCode code="encryption_right" /></td>
    <td><code>boolean</code></td>
    <td>Defines if the user can manage encryption / KMS configuration (wire: encryptionRight)</td>
</tr>
<tr>
    <td><CopyableCode code="full_admin_ro" /></td>
    <td><code>boolean</code></td>
    <td>Defines if the user is a full admin in readonly (wire: fullAdminRo)</td>
</tr>
<tr>
    <td><CopyableCode code="identity_provider_type" /></td>
    <td><code>string</code></td>
    <td>Linked Identity Provider type (if any), can be Federation Active Directory or IAM (federation, iam) (wire: identityProviderType)</td>
</tr>
<tr>
    <td><CopyableCode code="is_enable_manageable" /></td>
    <td><code>boolean</code></td>
    <td>Check if the given VMware on OVHcloud user can be enabled or disabled ? (wire: isEnableManageable)</td>
</tr>
<tr>
    <td><CopyableCode code="is_token_validator" /></td>
    <td><code>boolean</code></td>
    <td>Defines if the user can confirm security tokens (if a compatible option is enabled) (wire: isTokenValidator)</td>
</tr>
<tr>
    <td><CopyableCode code="login" /></td>
    <td><code>string</code></td>
    <td>Login of the user</td>
</tr>
<tr>
    <td><CopyableCode code="nsx_right" /></td>
    <td><code>boolean</code></td>
    <td>Is this User able to access nsx interface (requires NSX option) (wire: nsxRight)</td>
</tr>
<tr>
    <td><CopyableCode code="phone_number" /></td>
    <td><code>string</code></td>
    <td>Mobile phone number of the user (wire: phoneNumber)</td>
</tr>
<tr>
    <td><CopyableCode code="receive_alerts" /></td>
    <td><code>boolean</code></td>
    <td>Defines if the user receives technical alerts (wire: receiveAlerts)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>State of the user account (creating, deleting, delivered, error)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>User type (if any) (group, user)</td>
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
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-user_id"><code>user_id</code></a></td>
    <td></td>
    <td>Get a user. Returns the user: login, contact details, activation state, permissions and identity provider.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List users</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Create a user. Creates a user. Its `right` applies to all datacenters and is disabled by default. Without a password, a random one is generated and sent by email.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-user_id"><code>user_id</code></a></td>
    <td></td>
    <td>Delete a user</td>
</tr>
<tr>
    <td><a href="#change_password"><CopyableCode code="change_password" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-userId"><code>userId</code></a></td>
    <td></td>
    <td>Change a user password. Sets a new password that follows the password policy. Without a password, a random one is generated and sent by email. Returns a task to track progress.</td>
</tr>
<tr>
    <td><a href="#change_properties"><CopyableCode code="change_properties" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-userId"><code>userId</code></a></td>
    <td></td>
    <td>Update a user. Updates the name, email address, phone number and permissions of the user. Returns a task to track progress.</td>
</tr>
<tr>
    <td><a href="#confirm_phone_number"><CopyableCode code="confirm_phone_number" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-userId"><code>userId</code></a>, <a href="#parameter-token"><code>token</code></a></td>
    <td></td>
    <td>Confirm a user phone number. Confirms the phone number with the token sent by SMS. Returns a task to track progress.</td>
</tr>
<tr>
    <td><a href="#disable"><CopyableCode code="disable" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-userId"><code>userId</code></a></td>
    <td></td>
    <td>Disable a user. Disables the user account. Check `isEnableManageable` on the user first. Returns a task to track progress.</td>
</tr>
<tr>
    <td><a href="#enable"><CopyableCode code="enable" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-userId"><code>userId</code></a></td>
    <td></td>
    <td>Enable a user. Enables the user account. Check `isEnableManageable` on the user first. Returns a task to track progress.</td>
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
    <td>Domain of the service</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>Domain of the service (wire: serviceName)</td>
</tr>
<tr id="parameter-userId">
    <td><CopyableCode code="userId" /></td>
    <td><code>integer</code></td>
    <td></td>
</tr>
<tr id="parameter-user_id">
    <td><CopyableCode code="user_id" /></td>
    <td><code>integer</code></td>
    <td> (wire: userId)</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Filter the value of name property (like)</td>
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

Get a user. Returns the user: login, contact details, activation state, permissions and identity provider.

```sql
SELECT
name,
active_directory_id,
identity_provider_id,
user_id,
first_name,
last_name,
activation_state,
active_directory_type,
can_manage_ip_fail_overs,
can_manage_network,
can_manage_rights,
email,
encryption_right,
full_admin_ro,
identity_provider_type,
is_enable_manageable,
is_token_validator,
login,
nsx_right,
phone_number,
receive_alerts,
state,
type
FROM ovh.dedicated_cloud.users
WHERE service_name = '{{ service_name }}' -- required
AND user_id = '{{ user_id }}' -- required
;
```
</TabItem>
<TabItem value="list">

List users

```sql
SELECT
name,
active_directory_id,
identity_provider_id,
user_id,
first_name,
last_name,
activation_state,
active_directory_type,
can_manage_ip_fail_overs,
can_manage_network,
can_manage_rights,
email,
encryption_right,
full_admin_ro,
identity_provider_type,
is_enable_manageable,
is_token_validator,
login,
nsx_right,
phone_number,
receive_alerts,
state,
type
FROM ovh.dedicated_cloud.users
WHERE service_name = '{{ service_name }}' -- required
AND name = '{{ name }}'
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

Create a user. Creates a user. Its `right` applies to all datacenters and is disabled by default. Without a password, a random one is generated and sent by email.

```sql
INSERT INTO ovh.dedicated_cloud.users (
can_add_ressource,
can_manage_rights,
email,
encryption_right,
expiration_date,
first_name,
last_name,
name,
network_role,
nsx_right,
password,
phone_number,
receive_alerts,
right,
token_validator,
vm_network_role,
service_name
)
SELECT 
{{ can_add_ressource }},
{{ can_manage_rights }},
'{{ email }}',
{{ encryption_right }},
'{{ expiration_date }}',
'{{ first_name }}',
'{{ last_name }}',
'{{ name }}' /* required */,
'{{ network_role }}',
{{ nsx_right }},
'{{ password }}',
'{{ phone_number }}',
{{ receive_alerts }},
'{{ right }}',
{{ token_validator }},
'{{ vm_network_role }}',
'{{ service_name }}'
RETURNING
name,
datacenter_id,
filer_id,
host_id,
network_access_id,
order_id,
parent_task_id,
task_id,
user_id,
vlan_id,
created_by,
created_from,
description,
end_date,
execution_date,
last_modification_date,
maintenance_date_from,
maintenance_date_to,
network,
progress,
state,
type
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: users
  props:
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the users resource.
    - name: can_add_ressource
      value: {{ can_add_ressource }}
      description: |
        Is this User able to add ressources in the Datacenter he has access ? (default is no right to add ressource)
    - name: can_manage_rights
      value: {{ can_manage_rights }}
      description: |
        Is this user able to manage the users rights
    - name: email
      value: "{{ email }}"
      description: |
        The user email. If this field is empty, user informations will be sent to the dedicatedCloud administrator contact.
    - name: encryption_right
      value: {{ encryption_right }}
      description: |
        Defines if the user can manage encryption / KMS configuration
    - name: expiration_date
      value: "{{ expiration_date }}"
      description: |
        Date of removal of the user.
    - name: first_name
      value: "{{ first_name }}"
      description: |
        First name of the user
    - name: last_name
      value: "{{ last_name }}"
      description: |
        Last name of the user
    - name: name
      value: "{{ name }}"
      description: |
        Name of the user (login)
    - name: network_role
      value: "{{ network_role }}"
      description: |
        Determine how this user can act on the Dedicated Cloud vLans or vxLans
      valid_values: ['admin', 'manager', 'noAccess', 'readonly']
    - name: nsx_right
      value: {{ nsx_right }}
      description: |
        Is this User able to access nsx interface (requires NSX option)
    - name: password
      value: "{{ password }}"
      description: |
        The user password. It must fits your VMware on OVHcloud password policy. If this field is empty, a random password will be generated and sent by email.
    - name: phone_number
      value: "{{ phone_number }}"
      description: |
        Mobile phone number of the user
    - name: receive_alerts
      value: {{ receive_alerts }}
      description: |
        Defines if the user receives technical alerts
    - name: right
      value: "{{ right }}"
      description: |
        Determine what kind of access the User will have in all Datacenters of your VMware on OVHcloud (default is disabled)
      valid_values: ['admin', 'disabled', 'readonly', 'readwrite']
    - name: token_validator
      value: {{ token_validator }}
      description: |
        Defines if the user can confirm security tokens (if a compatible option is enabled)
    - name: vm_network_role
      value: "{{ vm_network_role }}"
      description: |
        Determine how this user will be able to act on this VMware on OVHcloud VM Network
      valid_values: ['admin', 'noAccess', 'readonly']
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

Delete a user

```sql
DELETE FROM ovh.dedicated_cloud.users
WHERE service_name = '{{ service_name }}' --required
AND user_id = '{{ user_id }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="change_password"
    values={[
        { label: 'change_password', value: 'change_password' },
        { label: 'change_properties', value: 'change_properties' },
        { label: 'confirm_phone_number', value: 'confirm_phone_number' },
        { label: 'disable', value: 'disable' },
        { label: 'enable', value: 'enable' }
    ]}
>
<TabItem value="change_password">

Change a user password. Sets a new password that follows the password policy. Without a password, a random one is generated and sent by email. Returns a task to track progress.

```sql
EXEC ovh.dedicated_cloud.users.change_password 
@serviceName='{{ serviceName }}' --required, 
@userId='{{ userId }}' --required 
@@json=
'{
"password": "{{ password }}"
}'
;
```
</TabItem>
<TabItem value="change_properties">

Update a user. Updates the name, email address, phone number and permissions of the user. Returns a task to track progress.

```sql
EXEC ovh.dedicated_cloud.users.change_properties 
@serviceName='{{ serviceName }}' --required, 
@userId='{{ userId }}' --required 
@@json=
'{
"canManageIpFailOvers": {{ canManageIpFailOvers }}, 
"canManageNetwork": {{ canManageNetwork }}, 
"canManageRights": {{ canManageRights }}, 
"email": "{{ email }}", 
"encryptionRight": {{ encryptionRight }}, 
"firstName": "{{ firstName }}", 
"fullAdminRo": {{ fullAdminRo }}, 
"lastName": "{{ lastName }}", 
"nsxRight": {{ nsxRight }}, 
"phoneNumber": "{{ phoneNumber }}", 
"receiveAlerts": {{ receiveAlerts }}, 
"tokenValidator": {{ tokenValidator }}
}'
;
```
</TabItem>
<TabItem value="confirm_phone_number">

Confirm a user phone number. Confirms the phone number with the token sent by SMS. Returns a task to track progress.

```sql
EXEC ovh.dedicated_cloud.users.confirm_phone_number 
@serviceName='{{ serviceName }}' --required, 
@userId='{{ userId }}' --required 
@@json=
'{
"token": "{{ token }}"
}'
;
```
</TabItem>
<TabItem value="disable">

Disable a user. Disables the user account. Check `isEnableManageable` on the user first. Returns a task to track progress.

```sql
EXEC ovh.dedicated_cloud.users.disable 
@serviceName='{{ serviceName }}' --required, 
@userId='{{ userId }}' --required
;
```
</TabItem>
<TabItem value="enable">

Enable a user. Enables the user account. Check `isEnableManageable` on the user first. Returns a task to track progress.

```sql
EXEC ovh.dedicated_cloud.users.enable 
@serviceName='{{ serviceName }}' --required, 
@userId='{{ userId }}' --required
;
```
</TabItem>
</Tabs>
