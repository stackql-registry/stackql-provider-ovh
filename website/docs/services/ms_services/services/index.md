--- 
title: services
hide_title: false
hide_table_of_contents: false
keywords:
  - services
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

Creates, updates, deletes, gets or lists a <code>services</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="services" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.ms_services.services" /></td></tr>
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
    <td>Name of the Active Directory organizational unit</td>
</tr>
<tr>
    <td><CopyableCode code="task_pending_id" /></td>
    <td><code>integer</code></td>
    <td>Task pending id (wire: taskPendingId)</td>
</tr>
<tr>
    <td><CopyableCode code="office_tenant_service_name" /></td>
    <td><code>string</code></td>
    <td>Service name of the office tenant (/licence/office/&#123;serviceName&#125;) linked to this AD service (wire: officeTenantServiceName)</td>
</tr>
<tr>
    <td><CopyableCode code="complexity_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Flag indicating if passwords should be forced to follow Microsoft's password guidelines (wire: complexityEnabled)</td>
</tr>
<tr>
    <td><CopyableCode code="iam" /></td>
    <td><code>object</code></td>
    <td>IAM resource metadata</td>
</tr>
<tr>
    <td><CopyableCode code="lockout_duration" /></td>
    <td><code>integer</code></td>
    <td>Account lock time (in minutes) when too much passwords have been tried (wire: lockoutDuration)</td>
</tr>
<tr>
    <td><CopyableCode code="lockout_observation_window" /></td>
    <td><code>integer</code></td>
    <td>Time (in minutes) before the password attempts counter is reset (wire: lockoutObservationWindow)</td>
</tr>
<tr>
    <td><CopyableCode code="lockout_threshold" /></td>
    <td><code>integer</code></td>
    <td>Maximum number of password tries before account locking (wire: lockoutThreshold)</td>
</tr>
<tr>
    <td><CopyableCode code="max_password_age" /></td>
    <td><code>integer</code></td>
    <td>Maximum lifespan of passwords, in days (wire: maxPasswordAge)</td>
</tr>
<tr>
    <td><CopyableCode code="min_password_age" /></td>
    <td><code>integer</code></td>
    <td>Minimum lifespan of passwords, in days (0 = unlimited) (wire: minPasswordAge)</td>
</tr>
<tr>
    <td><CopyableCode code="min_password_length" /></td>
    <td><code>integer</code></td>
    <td>Minimum number of characters passwords must contain (wire: minPasswordLength)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Current state of the Active Directory organizational unit (creating, deleting, inMaintenance, ok, reopening, suspended, suspending)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Active Directory organizational unit

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
    <td>Name of the Active Directory organizational unit</td>
</tr>
<tr>
    <td><CopyableCode code="task_pending_id" /></td>
    <td><code>integer</code></td>
    <td>Task pending id (wire: taskPendingId)</td>
</tr>
<tr>
    <td><CopyableCode code="office_tenant_service_name" /></td>
    <td><code>string</code></td>
    <td>Service name of the office tenant (/licence/office/&#123;serviceName&#125;) linked to this AD service (wire: officeTenantServiceName)</td>
</tr>
<tr>
    <td><CopyableCode code="complexity_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Flag indicating if passwords should be forced to follow Microsoft's password guidelines (wire: complexityEnabled)</td>
</tr>
<tr>
    <td><CopyableCode code="iam" /></td>
    <td><code>object</code></td>
    <td>IAM resource metadata</td>
</tr>
<tr>
    <td><CopyableCode code="lockout_duration" /></td>
    <td><code>integer</code></td>
    <td>Account lock time (in minutes) when too much passwords have been tried (wire: lockoutDuration)</td>
</tr>
<tr>
    <td><CopyableCode code="lockout_observation_window" /></td>
    <td><code>integer</code></td>
    <td>Time (in minutes) before the password attempts counter is reset (wire: lockoutObservationWindow)</td>
</tr>
<tr>
    <td><CopyableCode code="lockout_threshold" /></td>
    <td><code>integer</code></td>
    <td>Maximum number of password tries before account locking (wire: lockoutThreshold)</td>
</tr>
<tr>
    <td><CopyableCode code="max_password_age" /></td>
    <td><code>integer</code></td>
    <td>Maximum lifespan of passwords, in days (wire: maxPasswordAge)</td>
</tr>
<tr>
    <td><CopyableCode code="min_password_age" /></td>
    <td><code>integer</code></td>
    <td>Minimum lifespan of passwords, in days (0 = unlimited) (wire: minPasswordAge)</td>
</tr>
<tr>
    <td><CopyableCode code="min_password_length" /></td>
    <td><code>integer</code></td>
    <td>Minimum number of characters passwords must contain (wire: minPasswordLength)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Current state of the Active Directory organizational unit (creating, deleting, inMaintenance, ok, reopening, suspended, suspending)</td>
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
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get an Active Directory service. Returns the name, state and password policy of the Active Directory service, and the service name of the linked Microsoft 365 tenant.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-iam_tags"><code>iam_tags</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List Active Directory services. Returns the names of the Active Directory services of the account. Filter them by IAM tags with `iamTags`.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Update an Active Directory service. Updates the password policy: complexity, minimum length, minimum and maximum age, and lockout threshold, duration and observation window.</td>
</tr>
<tr>
    <td><a href="#change_contact"><CopyableCode code="change_contact" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Change service contacts. Starts a procedure to change the admin, tech or billing contact of the service.</td>
</tr>
<tr>
    <td><a href="#create_mfa_on_all_users"><CopyableCode code="create_mfa_on_all_users" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Create MFA on all accounts. Creates MFA for all the accounts of the Active Directory service and returns the task.</td>
</tr>
<tr>
    <td><a href="#remove_mfa_on_all_users"><CopyableCode code="remove_mfa_on_all_users" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Remove MFA from all accounts. Removes MFA from all the accounts of the Active Directory service and returns the task.</td>
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
<tr id="parameter-iam_tags">
    <td><CopyableCode code="iam_tags" /></td>
    <td><code>object</code></td>
    <td>Filter resources on IAM tags (wire: iamTags)</td>
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

Get an Active Directory service. Returns the name, state and password policy of the Active Directory service, and the service name of the linked Microsoft 365 tenant.

```sql
SELECT
name,
task_pending_id,
office_tenant_service_name,
complexity_enabled,
iam,
lockout_duration,
lockout_observation_window,
lockout_threshold,
max_password_age,
min_password_age,
min_password_length,
state
FROM ovh.ms_services.services
WHERE service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List Active Directory services. Returns the names of the Active Directory services of the account. Filter them by IAM tags with `iamTags`.

```sql
SELECT
name,
task_pending_id,
office_tenant_service_name,
complexity_enabled,
iam,
lockout_duration,
lockout_observation_window,
lockout_threshold,
max_password_age,
min_password_age,
min_password_length,
state
FROM ovh.ms_services.services
WHERE iam_tags = '{{ iam_tags }}'
AND x_pagination_mode = '{{ x_pagination_mode }}'
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

Update an Active Directory service. Updates the password policy: complexity, minimum length, minimum and maximum age, and lockout threshold, duration and observation window.

```sql
UPDATE ovh.ms_services.services
SET 
complexity_enabled = {{ complexity_enabled }},
lockout_duration = {{ lockout_duration }},
lockout_observation_window = {{ lockout_observation_window }},
lockout_threshold = {{ lockout_threshold }},
max_password_age = {{ max_password_age }},
min_password_age = {{ min_password_age }},
min_password_length = {{ min_password_length }}
WHERE 
service_name = '{{ service_name }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="change_contact"
    values={[
        { label: 'change_contact', value: 'change_contact' },
        { label: 'create_mfa_on_all_users', value: 'create_mfa_on_all_users' },
        { label: 'remove_mfa_on_all_users', value: 'remove_mfa_on_all_users' }
    ]}
>
<TabItem value="change_contact">

Change service contacts. Starts a procedure to change the admin, tech or billing contact of the service.

```sql
EXEC ovh.ms_services.services.change_contact 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"contactAdmin": "{{ contactAdmin }}", 
"contactBilling": "{{ contactBilling }}", 
"contactTech": "{{ contactTech }}"
}'
;
```
</TabItem>
<TabItem value="create_mfa_on_all_users">

Create MFA on all accounts. Creates MFA for all the accounts of the Active Directory service and returns the task.

```sql
EXEC ovh.ms_services.services.create_mfa_on_all_users 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
<TabItem value="remove_mfa_on_all_users">

Remove MFA from all accounts. Removes MFA from all the accounts of the Active Directory service and returns the task.

```sql
EXEC ovh.ms_services.services.remove_mfa_on_all_users 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
</Tabs>
