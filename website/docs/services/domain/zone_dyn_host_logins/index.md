--- 
title: zone_dyn_host_logins
hide_title: false
hide_table_of_contents: false
keywords:
  - zone_dyn_host_logins
  - domain
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

Creates, updates, deletes, gets or lists a <code>zone_dyn_host_logins</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="zone_dyn_host_logins" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.domain.zone_dyn_host_logins" /></td></tr>
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
    <td><CopyableCode code="login" /></td>
    <td><code>string</code></td>
    <td>Login name</td>
</tr>
<tr>
    <td><CopyableCode code="sub_domain" /></td>
    <td><code>string</code></td>
    <td>Login sub-domain (wire: subDomain)</td>
</tr>
<tr>
    <td><CopyableCode code="zone" /></td>
    <td><code>string</code></td>
    <td>Login zone</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

DNS zone dynHost login

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
    <td><CopyableCode code="login" /></td>
    <td><code>string</code></td>
    <td>Login name</td>
</tr>
<tr>
    <td><CopyableCode code="sub_domain" /></td>
    <td><code>string</code></td>
    <td>Login sub-domain (wire: subDomain)</td>
</tr>
<tr>
    <td><CopyableCode code="zone" /></td>
    <td><code>string</code></td>
    <td>Login zone</td>
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
    <td><a href="#parameter-login"><code>login</code></a>, <a href="#parameter-zone_name"><code>zone_name</code></a></td>
    <td></td>
    <td>Returns a DynHost login: its name and the subdomain it can update.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-zone_name"><code>zone_name</code></a></td>
    <td><a href="#parameter-login"><code>login</code></a>, <a href="#parameter-sub_domain"><code>sub_domain</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>Returns the DynHost logins of the zone. Can be filtered by login and subdomain.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-zone_name"><code>zone_name</code></a>, <a href="#parameter-login_suffix"><code>login_suffix</code></a>, <a href="#parameter-password"><code>password</code></a>, <a href="#parameter-sub_domain"><code>sub_domain</code></a></td>
    <td></td>
    <td>Creates a login named from the zone name and a suffix. The subdomain `*` allows all subdomains.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-login"><code>login</code></a>, <a href="#parameter-zone_name"><code>zone_name</code></a></td>
    <td></td>
    <td>Updates the subdomain a DynHost login is allowed to update.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-login"><code>login</code></a>, <a href="#parameter-zone_name"><code>zone_name</code></a></td>
    <td></td>
    <td>Deletes a DynHost login from the zone.</td>
</tr>
<tr>
    <td><a href="#change_password"><CopyableCode code="change_password" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-login"><code>login</code></a>, <a href="#parameter-zoneName"><code>zoneName</code></a>, <a href="#parameter-password"><code>password</code></a></td>
    <td></td>
    <td>Sets a new password for a DynHost login.</td>
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
    <td>Login</td>
</tr>
<tr id="parameter-zoneName">
    <td><CopyableCode code="zoneName" /></td>
    <td><code>string</code></td>
    <td>Zone name</td>
</tr>
<tr id="parameter-zone_name">
    <td><CopyableCode code="zone_name" /></td>
    <td><code>string</code></td>
    <td>Zone name (wire: zoneName)</td>
</tr>
<tr id="parameter-login">
    <td><CopyableCode code="login" /></td>
    <td><code>string</code></td>
    <td>Filter the value of login property (ilike)</td>
</tr>
<tr id="parameter-sub_domain">
    <td><CopyableCode code="sub_domain" /></td>
    <td><code>string</code></td>
    <td>Filter the value of subDomain property (ilike) (wire: subDomain)</td>
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

Returns a DynHost login: its name and the subdomain it can update.

```sql
SELECT
login,
sub_domain,
zone
FROM ovh.domain.zone_dyn_host_logins
WHERE login = '{{ login }}' -- required
AND zone_name = '{{ zone_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns the DynHost logins of the zone. Can be filtered by login and subdomain.

```sql
SELECT
login,
sub_domain,
zone
FROM ovh.domain.zone_dyn_host_logins
WHERE zone_name = '{{ zone_name }}' -- required
AND login = '{{ login }}'
AND sub_domain = '{{ sub_domain }}'
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

Creates a login named from the zone name and a suffix. The subdomain `*` allows all subdomains.

```sql
INSERT INTO ovh.domain.zone_dyn_host_logins (
login_suffix,
password,
sub_domain,
zone_name
)
SELECT 
'{{ login_suffix }}' /* required */,
'{{ password }}' /* required */,
'{{ sub_domain }}' /* required */,
'{{ zone_name }}'
RETURNING
login,
sub_domain,
zone
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: zone_dyn_host_logins
  props:
    - name: zone_name
      value: "{{ zone_name }}"
      description: Required parameter for the zone_dyn_host_logins resource.
    - name: login_suffix
      value: "{{ login_suffix }}"
      description: |
        Suffix that will be concatenated to the zoneName to create the login
    - name: password
      value: "{{ password }}"
      description: |
        Password of the login
    - name: sub_domain
      value: "{{ sub_domain }}"
      description: |
        Subdomain that the login will be allowed to update (use * to allow all)
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

Updates the subdomain a DynHost login is allowed to update.

```sql
UPDATE ovh.domain.zone_dyn_host_logins
SET 
sub_domain = '{{ sub_domain }}'
WHERE 
login = '{{ login }}' --required
AND zone_name = '{{ zone_name }}' --required;
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

Deletes a DynHost login from the zone.

```sql
DELETE FROM ovh.domain.zone_dyn_host_logins
WHERE login = '{{ login }}' --required
AND zone_name = '{{ zone_name }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="change_password"
    values={[
        { label: 'change_password', value: 'change_password' }
    ]}
>
<TabItem value="change_password">

Sets a new password for a DynHost login.

```sql
EXEC ovh.domain.zone_dyn_host_logins.change_password 
@login='{{ login }}' --required, 
@zoneName='{{ zoneName }}' --required 
@@json=
'{
"password": "{{ password }}"
}'
;
```
</TabItem>
</Tabs>
