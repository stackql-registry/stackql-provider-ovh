--- 
title: users
hide_title: false
hide_table_of_contents: false
keywords:
  - users
  - sms
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
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.sms.users" /></td></tr>
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
    <td><CopyableCode code="alert_threshold_informations" /></td>
    <td><code>object</code></td>
    <td>A structure describing all information about alert threshold informations (wire: alertThresholdInformations)</td>
</tr>
<tr>
    <td><CopyableCode code="call_back" /></td>
    <td><code>string</code></td>
    <td>URL called when state of a sent SMS changes (wire: callBack)</td>
</tr>
<tr>
    <td><CopyableCode code="ip_restrictions" /></td>
    <td><code>array</code></td>
    <td> (wire: ipRestrictions)</td>
</tr>
<tr>
    <td><CopyableCode code="login" /></td>
    <td><code>string</code></td>
    <td>The sms user login</td>
</tr>
<tr>
    <td><CopyableCode code="password" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="quota_informations" /></td>
    <td><code>object</code></td>
    <td>A structure describing all information about quota informations (wire: quotaInformations)</td>
</tr>
<tr>
    <td><CopyableCode code="stop_call_back" /></td>
    <td><code>string</code></td>
    <td>URL called when a STOP is received after a receiver replied stop to a SMS (wire: stopCallBack)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

SMS users

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
    <td><CopyableCode code="alert_threshold_informations" /></td>
    <td><code>object</code></td>
    <td>A structure describing all information about alert threshold informations (wire: alertThresholdInformations)</td>
</tr>
<tr>
    <td><CopyableCode code="call_back" /></td>
    <td><code>string</code></td>
    <td>URL called when state of a sent SMS changes (wire: callBack)</td>
</tr>
<tr>
    <td><CopyableCode code="ip_restrictions" /></td>
    <td><code>array</code></td>
    <td> (wire: ipRestrictions)</td>
</tr>
<tr>
    <td><CopyableCode code="login" /></td>
    <td><code>string</code></td>
    <td>The sms user login</td>
</tr>
<tr>
    <td><CopyableCode code="password" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="quota_informations" /></td>
    <td><code>object</code></td>
    <td>A structure describing all information about quota informations (wire: quotaInformations)</td>
</tr>
<tr>
    <td><CopyableCode code="stop_call_back" /></td>
    <td><code>string</code></td>
    <td>URL called when a STOP is received after a receiver replied stop to a SMS (wire: stopCallBack)</td>
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
    <td><a href="#parameter-login"><code>login</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get a user. Returns the API user: login, callback URLs, quota left and status, alert threshold and the IP addresses allowed to send SMS.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List users. Returns the logins of the API users of the SMS account. Each user sends SMS with its own login, callback URLs, quota and IP restrictions.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-login"><code>login</code></a>, <a href="#parameter-password"><code>password</code></a></td>
    <td></td>
    <td>Create a user. Creates an API user with a login and a password, to send SMS with its own callback URLs, quota and IP restrictions.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-login"><code>login</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Update a user. Updates the API user: password, callback URLs, quota, alert threshold and the IP addresses allowed to send SMS.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-login"><code>login</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Delete a user. Deletes the API user of the SMS account. Its login and password can no longer be used to send SMS.</td>
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
<tr id="parameter-login">
    <td><CopyableCode code="login" /></td>
    <td><code>string</code></td>
    <td>The sms user login</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The internal name of your SMS offer (wire: serviceName)</td>
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

Get a user. Returns the API user: login, callback URLs, quota left and status, alert threshold and the IP addresses allowed to send SMS.

```sql
SELECT
alert_threshold_informations,
call_back,
ip_restrictions,
login,
password,
quota_informations,
stop_call_back
FROM ovh.sms.users
WHERE login = '{{ login }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List users. Returns the logins of the API users of the SMS account. Each user sends SMS with its own login, callback URLs, quota and IP restrictions.

```sql
SELECT
alert_threshold_informations,
call_back,
ip_restrictions,
login,
password,
quota_informations,
stop_call_back
FROM ovh.sms.users
WHERE service_name = '{{ service_name }}' -- required
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

Create a user. Creates an API user with a login and a password, to send SMS with its own callback URLs, quota and IP restrictions.

```sql
INSERT INTO ovh.sms.users (
login,
password,
service_name
)
SELECT 
'{{ login }}' /* required */,
'{{ password }}' /* required */,
'{{ service_name }}'
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
    - name: login
      value: "{{ login }}"
      description: |
        The sms login
    - name: password
      value: "{{ password }}"
      description: |
        The sms password
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

Update a user. Updates the API user: password, callback URLs, quota, alert threshold and the IP addresses allowed to send SMS.

```sql
UPDATE ovh.sms.users
SET 
alert_threshold_informations = '{{ alert_threshold_informations }}',
call_back = '{{ call_back }}',
ip_restrictions = '{{ ip_restrictions }}',
password = '{{ password }}',
quota_informations = '{{ quota_informations }}',
stop_call_back = '{{ stop_call_back }}'
WHERE 
login = '{{ login }}' --required
AND service_name = '{{ service_name }}' --required;
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

Delete a user. Deletes the API user of the SMS account. Its login and password can no longer be used to send SMS.

```sql
DELETE FROM ovh.sms.users
WHERE login = '{{ login }}' --required
AND service_name = '{{ service_name }}' --required
;
```
</TabItem>
</Tabs>
