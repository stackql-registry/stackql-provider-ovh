--- 
title: platform_accounts
hide_title: false
hide_table_of_contents: false
keywords:
  - platform_accounts
  - zimbra
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

Creates, updates, deletes, gets or lists a <code>platform_accounts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="platform_accounts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.zimbra.platform_accounts" /></td></tr>
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
    <td><CopyableCode code="id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Resource identifier in UUID representation</td>
</tr>
<tr>
    <td><CopyableCode code="checksum" /></td>
    <td><code>string</code></td>
    <td>Checksum hash in MD5 representation</td>
</tr>
<tr>
    <td><CopyableCode code="current_state" /></td>
    <td><code>object</code></td>
    <td>Object representing account (wire: currentState)</td>
</tr>
<tr>
    <td><CopyableCode code="current_tasks" /></td>
    <td><code>array</code></td>
    <td>An array containing tasks responses pending on resource extends AsyncResourceBase object (wire: currentTasks)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_status" /></td>
    <td><code>string</code></td>
    <td>Current resource status (CREATING, CREATION_PLANNED, DELETING, ERROR, OUT_OF_SYNC, READY, SUSPENDED, UNKNOWN, UPDATING) (wire: resourceStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="target_spec" /></td>
    <td><code>object</code></td>
    <td>Object representing account (wire: targetSpec)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Response for a Zimbra Account

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
    <td><code>string (uuid)</code></td>
    <td>Resource identifier in UUID representation</td>
</tr>
<tr>
    <td><CopyableCode code="checksum" /></td>
    <td><code>string</code></td>
    <td>Checksum hash in MD5 representation</td>
</tr>
<tr>
    <td><CopyableCode code="current_state" /></td>
    <td><code>object</code></td>
    <td>Object representing account (wire: currentState)</td>
</tr>
<tr>
    <td><CopyableCode code="current_tasks" /></td>
    <td><code>array</code></td>
    <td>An array containing tasks responses pending on resource extends AsyncResourceBase object (wire: currentTasks)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_status" /></td>
    <td><code>string</code></td>
    <td>Current resource status (CREATING, CREATION_PLANNED, DELETING, ERROR, OUT_OF_SYNC, READY, SUSPENDED, UNKNOWN, UPDATING) (wire: resourceStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="target_spec" /></td>
    <td><code>object</code></td>
    <td>Object representing account (wire: targetSpec)</td>
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
    <td><a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-platform_id"><code>platform_id</code></a></td>
    <td></td>
    <td>Returns the email address, offer, slot, quota usage, contact information and detailed status of the email account, with its ongoing tasks.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-platform_id"><code>platform_id</code></a></td>
    <td><a href="#parameter-x_pagination_cursor"><code>x_pagination_cursor</code></a>, <a href="#parameter-x_pagination_size"><code>x_pagination_size</code></a>, <a href="#parameter-domain_id"><code>domain_id</code></a>, <a href="#parameter-email"><code>email</code></a>, <a href="#parameter-offer"><code>offer</code></a>, <a href="#parameter-organization_id"><code>organization_id</code></a>, <a href="#parameter-organization_label"><code>organization_label</code></a></td>
    <td>Returns the email accounts of the platform with their current state. Filter them by `organizationId`, `organizationLabel`, `domainId`, `email` or `offer`.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-platform_id"><code>platform_id</code></a>, <a href="#parameter-target_spec"><code>target_spec</code></a></td>
    <td></td>
    <td>Creates an email account from its `email`, `password`, `offer` and `slotId`. The domain must be ready and the slot must match the offer. Creation is asynchronous: follow `resourceStatus` and `currentTasks`.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-platform_id"><code>platform_id</code></a>, <a href="#parameter-target_spec"><code>target_spec</code></a></td>
    <td></td>
    <td>Updates the email address, password, names, contact information, visibility in the global address list (`hideInGal`) or quota limit of the email account. When set, `checksum` must match the current checksum of the account, otherwise the update is rejected.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-account_id"><code>account_id</code></a>, <a href="#parameter-platform_id"><code>platform_id</code></a></td>
    <td></td>
    <td>Deletes the email account. An account blocked for spam cannot be deleted.</td>
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
    <td><code>string (uuid)</code></td>
    <td>Account ID (wire: accountId)</td>
</tr>
<tr id="parameter-api_host">
    <td><CopyableCode code="api_host" /></td>
    <td><code>string</code></td>
    <td>The OVHcloud API host. Selected by OVH_ENDPOINT (ovh-eu, ovh-ca or ovh-us; default ovh-eu). (default: api.eu.ovhcloud.com, x-stackQL-envVarSelector: &#123;"envVar":"OVH_ENDPOINT","default":"ovh-eu","values":&#123;"ovh-eu":"api.eu.ovhcloud.com","ovh-ca":"api.ca.ovhcloud.com","ovh-us":"api.us.ovhcloud.com"&#125;&#125;)</td>
</tr>
<tr id="parameter-platform_id">
    <td><CopyableCode code="platform_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Platform ID (wire: platformId)</td>
</tr>
<tr id="parameter-domain_id">
    <td><CopyableCode code="domain_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Filter by Domain identifier (wire: domainId)</td>
</tr>
<tr id="parameter-email">
    <td><CopyableCode code="email" /></td>
    <td><code>string</code></td>
    <td>Filter by email</td>
</tr>
<tr id="parameter-offer">
    <td><CopyableCode code="offer" /></td>
    <td><code>string</code></td>
    <td>Filter by offer</td>
</tr>
<tr id="parameter-organization_id">
    <td><CopyableCode code="organization_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Filter by organization identifier (wire: organizationId)</td>
</tr>
<tr id="parameter-organization_label">
    <td><CopyableCode code="organization_label" /></td>
    <td><code>string</code></td>
    <td>Filter by organization label (wire: organizationLabel)</td>
</tr>
<tr id="parameter-x_pagination_cursor">
    <td><CopyableCode code="x_pagination_cursor" /></td>
    <td><code>string</code></td>
    <td>Pagination cursor (wire: X-Pagination-Cursor)</td>
</tr>
<tr id="parameter-x_pagination_size">
    <td><CopyableCode code="x_pagination_size" /></td>
    <td><code>integer</code></td>
    <td>Pagination size (wire: X-Pagination-Size)</td>
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

Returns the email address, offer, slot, quota usage, contact information and detailed status of the email account, with its ongoing tasks.

```sql
SELECT
id,
checksum,
current_state,
current_tasks,
resource_status,
target_spec
FROM ovh.zimbra.platform_accounts
WHERE account_id = '{{ account_id }}' -- required
AND platform_id = '{{ platform_id }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns the email accounts of the platform with their current state. Filter them by `organizationId`, `organizationLabel`, `domainId`, `email` or `offer`.

```sql
SELECT
id,
checksum,
current_state,
current_tasks,
resource_status,
target_spec
FROM ovh.zimbra.platform_accounts
WHERE platform_id = '{{ platform_id }}' -- required
AND x_pagination_cursor = '{{ x_pagination_cursor }}'
AND x_pagination_size = '{{ x_pagination_size }}'
AND domain_id = '{{ domain_id }}'
AND email = '{{ email }}'
AND offer = '{{ offer }}'
AND organization_id = '{{ organization_id }}'
AND organization_label = '{{ organization_label }}'
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

Creates an email account from its `email`, `password`, `offer` and `slotId`. The domain must be ready and the slot must match the offer. Creation is asynchronous: follow `resourceStatus` and `currentTasks`.

```sql
INSERT INTO ovh.zimbra.platform_accounts (
target_spec,
platform_id
)
SELECT 
'{{ target_spec }}' /* required */,
'{{ platform_id }}'
RETURNING
id,
checksum,
current_state,
current_tasks,
resource_status,
target_spec
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: platform_accounts
  props:
    - name: platform_id
      value: "{{ platform_id }}"
      description: Required parameter for the platform_accounts resource.
    - name: target_spec
      description: |
        Target organization specification
      value:
        contactInformation:
          city: "{{ city }}"
          company: "{{ company }}"
          country: "{{ country }}"
          faxNumber: "{{ faxNumber }}"
          mobileNumber: "{{ mobileNumber }}"
          office: "{{ office }}"
          phoneNumber: "{{ phoneNumber }}"
          postcode: "{{ postcode }}"
          profession: "{{ profession }}"
          service: "{{ service }}"
          street: "{{ street }}"
        description: "{{ description }}"
        displayName: "{{ displayName }}"
        email: "{{ email }}"
        firstName: "{{ firstName }}"
        forceChangePasswordAfterLogin: {{ forceChangePasswordAfterLogin }}
        hideInGal: {{ hideInGal }}
        lastName: "{{ lastName }}"
        offer: "{{ offer }}"
        password: "{{ password }}"
        quota:
          limit: {{ limit }}
        slotId: "{{ slotId }}"
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

Updates the email address, password, names, contact information, visibility in the global address list (`hideInGal`) or quota limit of the email account. When set, `checksum` must match the current checksum of the account, otherwise the update is rejected.

```sql
UPDATE ovh.zimbra.platform_accounts
SET 
checksum = '{{ checksum }}',
target_spec = '{{ target_spec }}'
WHERE 
account_id = '{{ account_id }}' --required
AND platform_id = '{{ platform_id }}' --required
AND target_spec = '{{ target_spec }}' --required
RETURNING
id,
checksum,
current_state,
current_tasks,
resource_status,
target_spec;
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

Deletes the email account. An account blocked for spam cannot be deleted.

```sql
DELETE FROM ovh.zimbra.platform_accounts
WHERE account_id = '{{ account_id }}' --required
AND platform_id = '{{ platform_id }}' --required
;
```
</TabItem>
</Tabs>
