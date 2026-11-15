--- 
title: domain_trusts
hide_title: false
hide_table_of_contents: false
keywords:
  - domain_trusts
  - horizon_view
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

Creates, updates, deletes, gets or lists a <code>domain_trusts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="domain_trusts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.horizon_view.domain_trusts" /></td></tr>
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
    <td><CopyableCode code="domain_trust_id" /></td>
    <td><code>integer</code></td>
    <td>Domain trust id (wire: domainTrustId)</td>
</tr>
<tr>
    <td><CopyableCode code="active_directory_ip" /></td>
    <td><code>string (ipv4)</code></td>
    <td>IP of your Active Directory (example: 192.0.2.0) (wire: activeDirectoryIP)</td>
</tr>
<tr>
    <td><CopyableCode code="dns_1" /></td>
    <td><code>string (ipv4)</code></td>
    <td>IP of your first DNS (example: 192.0.2.0) (wire: dns1)</td>
</tr>
<tr>
    <td><CopyableCode code="dns_2" /></td>
    <td><code>string (ipv4)</code></td>
    <td>IP of your second DNS (example: 192.0.2.0) (wire: dns2)</td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>Name of your private domain</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

List all Active Directories linked to your CDI Active Directory

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
    <td><CopyableCode code="domain_trust_id" /></td>
    <td><code>integer</code></td>
    <td>Domain trust id (wire: domainTrustId)</td>
</tr>
<tr>
    <td><CopyableCode code="active_directory_ip" /></td>
    <td><code>string (ipv4)</code></td>
    <td>IP of your Active Directory (example: 192.0.2.0) (wire: activeDirectoryIP)</td>
</tr>
<tr>
    <td><CopyableCode code="dns_1" /></td>
    <td><code>string (ipv4)</code></td>
    <td>IP of your first DNS (example: 192.0.2.0) (wire: dns1)</td>
</tr>
<tr>
    <td><CopyableCode code="dns_2" /></td>
    <td><code>string (ipv4)</code></td>
    <td>IP of your second DNS (example: 192.0.2.0) (wire: dns2)</td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>Name of your private domain</td>
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
    <td><a href="#parameter-domain_trust_id"><code>domain_trust_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get this object properties</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List all Active Directories linked to your CDI Active Directory</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-active_directory_ip"><code>active_directory_ip</code></a>, <a href="#parameter-domain"><code>domain</code></a></td>
    <td></td>
    <td>Link your Active Directory to your CDI Active Directory</td>
</tr>
<tr>
    <td><a href="#add_child_domain"><CopyableCode code="add_child_domain" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-domainTrustId"><code>domainTrustId</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-activeDirectoryIP"><code>activeDirectoryIP</code></a>, <a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-passphrase"><code>passphrase</code></a>, <a href="#parameter-serviceAccountPassword"><code>serviceAccountPassword</code></a></td>
    <td></td>
    <td>Add a child domain for this domain.</td>
</tr>
<tr>
    <td><a href="#add_domain_controller"><CopyableCode code="add_domain_controller" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-domainTrustId"><code>domainTrustId</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-domainControllerIp"><code>domainControllerIp</code></a></td>
    <td></td>
    <td>Add a Domain Controller for this domain.</td>
</tr>
<tr>
    <td><a href="#add_domain_user_on_composer"><CopyableCode code="add_domain_user_on_composer" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-domainTrustId"><code>domainTrustId</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-password"><code>password</code></a>, <a href="#parameter-username"><code>username</code></a></td>
    <td></td>
    <td>Add a domain user to add your desktop in your Active Directory</td>
</tr>
<tr>
    <td><a href="#create_trust"><CopyableCode code="create_trust" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-domainTrustId"><code>domainTrustId</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-passphrase"><code>passphrase</code></a>, <a href="#parameter-serviceAccountPassword"><code>serviceAccountPassword</code></a></td>
    <td></td>
    <td>Change Horizon View user password</td>
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
<tr id="parameter-domainTrustId">
    <td><CopyableCode code="domainTrustId" /></td>
    <td><code>integer</code></td>
    <td>Domain trust id</td>
</tr>
<tr id="parameter-domain_trust_id">
    <td><CopyableCode code="domain_trust_id" /></td>
    <td><code>integer</code></td>
    <td>Domain trust id (wire: domainTrustId)</td>
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

Get this object properties

```sql
SELECT
domain_trust_id,
active_directory_ip,
dns_1,
dns_2,
domain
FROM ovh.horizon_view.domain_trusts
WHERE domain_trust_id = '{{ domain_trust_id }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List all Active Directories linked to your CDI Active Directory

```sql
SELECT
domain_trust_id,
active_directory_ip,
dns_1,
dns_2,
domain
FROM ovh.horizon_view.domain_trusts
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

Link your Active Directory to your CDI Active Directory

```sql
INSERT INTO ovh.horizon_view.domain_trusts (
active_directory_ip,
dns_1,
dns_2,
domain,
service_name
)
SELECT 
'{{ active_directory_ip }}' /* required */,
'{{ dns_1 }}',
'{{ dns_2 }}',
'{{ domain }}' /* required */,
'{{ service_name }}'
RETURNING
name,
task_id,
description,
last_modification_date,
progress,
state
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: domain_trusts
  props:
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the domain_trusts resource.
    - name: active_directory_ip
      value: "{{ active_directory_ip }}"
      description: |
        IP of your Active Directory
    - name: dns_1
      value: "{{ dns_1 }}"
      description: |
        IP of your first DNS
    - name: dns_2
      value: "{{ dns_2 }}"
      description: |
        IP of your second DNS
    - name: domain
      value: "{{ domain }}"
      description: |
        Domain of your active directory (for example domain.local)
`}</CodeBlock>

</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="add_child_domain"
    values={[
        { label: 'add_child_domain', value: 'add_child_domain' },
        { label: 'add_domain_controller', value: 'add_domain_controller' },
        { label: 'add_domain_user_on_composer', value: 'add_domain_user_on_composer' },
        { label: 'create_trust', value: 'create_trust' }
    ]}
>
<TabItem value="add_child_domain">

Add a child domain for this domain.

```sql
EXEC ovh.horizon_view.domain_trusts.add_child_domain 
@domainTrustId='{{ domainTrustId }}' --required, 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"activeDirectoryIP": "{{ activeDirectoryIP }}", 
"domain": "{{ domain }}", 
"passphrase": "{{ passphrase }}", 
"serviceAccountPassword": "{{ serviceAccountPassword }}"
}'
;
```
</TabItem>
<TabItem value="add_domain_controller">

Add a Domain Controller for this domain.

```sql
EXEC ovh.horizon_view.domain_trusts.add_domain_controller 
@domainTrustId='{{ domainTrustId }}' --required, 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"domain": "{{ domain }}", 
"domainControllerIp": "{{ domainControllerIp }}"
}'
;
```
</TabItem>
<TabItem value="add_domain_user_on_composer">

Add a domain user to add your desktop in your Active Directory

```sql
EXEC ovh.horizon_view.domain_trusts.add_domain_user_on_composer 
@domainTrustId='{{ domainTrustId }}' --required, 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"domain": "{{ domain }}", 
"password": "{{ password }}", 
"username": "{{ username }}"
}'
;
```
</TabItem>
<TabItem value="create_trust">

Change Horizon View user password

```sql
EXEC ovh.horizon_view.domain_trusts.create_trust 
@domainTrustId='{{ domainTrustId }}' --required, 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"passphrase": "{{ passphrase }}", 
"serviceAccountPassword": "{{ serviceAccountPassword }}"
}'
;
```
</TabItem>
</Tabs>
