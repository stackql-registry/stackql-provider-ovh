--- 
title: account_delegations
hide_title: false
hide_table_of_contents: false
keywords:
  - account_delegations
  - email_domain
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

Creates, updates, deletes, gets or lists an <code>account_delegations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="account_delegations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.email_domain.account_delegations" /></td></tr>
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
    <td><CopyableCode code="account_id" /></td>
    <td><code>string</code></td>
    <td>OVH customer unique identifier (wire: accountId)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Delegation List

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
    <td><CopyableCode code="account_id" /></td>
    <td><code>string</code></td>
    <td>OVH customer unique identifier (wire: accountId)</td>
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
    <td><a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-account_name"><code>account_name</code></a>, <a href="#parameter-domain"><code>domain</code></a></td>
    <td></td>
    <td>Get a delegation. Returns the OVHcloud account ID (`accountId`) that has been delegated the management of the email account.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-account_name"><code>account_name</code></a>, <a href="#parameter-domain"><code>domain</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List delegations. Returns the OVHcloud account IDs (`accountId`) that have been delegated the management of the email account.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-account_name"><code>account_name</code></a>, <a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-account_id"><code>account_id</code></a></td>
    <td></td>
    <td>Create a delegation. Gives the OVHcloud account `accountId` the management of the email account, from its own control panel.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-account_name"><code>account_name</code></a>, <a href="#parameter-domain"><code>domain</code></a></td>
    <td></td>
    <td>Remove a delegation. Withdraws from the OVHcloud account the management of the email account that it had been delegated.</td>
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
<tr id="parameter-account_id">
    <td><CopyableCode code="account_id" /></td>
    <td><code>string</code></td>
    <td>OVH customer unique identifier (wire: accountId)</td>
</tr>
<tr id="parameter-account_name">
    <td><CopyableCode code="account_name" /></td>
    <td><code>string</code></td>
    <td>Name of account (wire: accountName)</td>
</tr>
<tr id="parameter-api_host">
    <td><CopyableCode code="api_host" /></td>
    <td><code>string</code></td>
    <td>The OVHcloud API host. Selected by OVH_ENDPOINT (ovh-eu, ovh-ca or ovh-us; default ovh-eu). (default: api.eu.ovhcloud.com, x-stackQL-envVarSelector: &#123;"envVar":"OVH_ENDPOINT","default":"ovh-eu","values":&#123;"ovh-eu":"api.eu.ovhcloud.com","ovh-ca":"api.ca.ovhcloud.com","ovh-us":"api.us.ovhcloud.com"&#125;&#125;)</td>
</tr>
<tr id="parameter-domain">
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>Name of your domain name</td>
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

Get a delegation. Returns the OVHcloud account ID (`accountId`) that has been delegated the management of the email account.

```sql
SELECT
account_id
FROM ovh.email_domain.account_delegations
WHERE account_id = '{{ account_id }}' -- required
AND account_name = '{{ account_name }}' -- required
AND domain = '{{ domain }}' -- required
;
```
</TabItem>
<TabItem value="list">

List delegations. Returns the OVHcloud account IDs (`accountId`) that have been delegated the management of the email account.

```sql
SELECT
account_id
FROM ovh.email_domain.account_delegations
WHERE account_name = '{{ account_name }}' -- required
AND domain = '{{ domain }}' -- required
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

Create a delegation. Gives the OVHcloud account `accountId` the management of the email account, from its own control panel.

```sql
INSERT INTO ovh.email_domain.account_delegations (
account_id,
account_name,
domain
)
SELECT 
'{{ account_id }}' /* required */,
'{{ account_name }}',
'{{ domain }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: account_delegations
  props:
    - name: account_name
      value: "{{ account_name }}"
      description: Required parameter for the account_delegations resource.
    - name: domain
      value: "{{ domain }}"
      description: Required parameter for the account_delegations resource.
    - name: account_id
      value: "{{ account_id }}"
      description: |
        OVH customer unique identifier
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

Remove a delegation. Withdraws from the OVHcloud account the management of the email account that it had been delegated.

```sql
DELETE FROM ovh.email_domain.account_delegations
WHERE account_id = '{{ account_id }}' --required
AND account_name = '{{ account_name }}' --required
AND domain = '{{ domain }}' --required
;
```
</TabItem>
</Tabs>
