--- 
title: service_mailing_list_manager_accounts
hide_title: false
hide_table_of_contents: false
keywords:
  - service_mailing_list_manager_accounts
  - email_exchange
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

Creates, updates, deletes, gets or lists a <code>service_mailing_list_manager_accounts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="service_mailing_list_manager_accounts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.email_exchange.service_mailing_list_manager_accounts" /></td></tr>
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
    <td><CopyableCode code="manager_account_id" /></td>
    <td><code>integer</code></td>
    <td>Manager account id (wire: managerAccountId)</td>
</tr>
<tr>
    <td><CopyableCode code="task_pending_id" /></td>
    <td><code>integer</code></td>
    <td>Pending task id (wire: taskPendingId)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date (wire: creationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="manager_email_address" /></td>
    <td><code>string</code></td>
    <td>Member account primaryEmailAddress (wire: managerEmailAddress)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Mailing list managers

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
    <td><CopyableCode code="manager_account_id" /></td>
    <td><code>integer</code></td>
    <td>Manager account id (wire: managerAccountId)</td>
</tr>
<tr>
    <td><CopyableCode code="task_pending_id" /></td>
    <td><code>integer</code></td>
    <td>Pending task id (wire: taskPendingId)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date (wire: creationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="manager_email_address" /></td>
    <td><code>string</code></td>
    <td>Member account primaryEmailAddress (wire: managerEmailAddress)</td>
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
    <td><a href="#parameter-exchange_service"><code>exchange_service</code></a>, <a href="#parameter-mailing_list_address"><code>mailing_list_address</code></a>, <a href="#parameter-manager_account_id"><code>manager_account_id</code></a>, <a href="#parameter-organization_name"><code>organization_name</code></a></td>
    <td></td>
    <td>Get a group manager. Returns the ID and the email address of the account that manages the group, and the date it was added.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-exchange_service"><code>exchange_service</code></a>, <a href="#parameter-mailing_list_address"><code>mailing_list_address</code></a>, <a href="#parameter-organization_name"><code>organization_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List group managers. Returns the IDs of the email accounts that manage the group: they can change its members and settings.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-exchange_service"><code>exchange_service</code></a>, <a href="#parameter-mailing_list_address"><code>mailing_list_address</code></a>, <a href="#parameter-organization_name"><code>organization_name</code></a>, <a href="#parameter-manager_account_id"><code>manager_account_id</code></a></td>
    <td></td>
    <td>Add a group manager. Makes the email account given by `managerAccountId` a manager of the group, and returns the task.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-exchange_service"><code>exchange_service</code></a>, <a href="#parameter-mailing_list_address"><code>mailing_list_address</code></a>, <a href="#parameter-manager_account_id"><code>manager_account_id</code></a>, <a href="#parameter-organization_name"><code>organization_name</code></a></td>
    <td></td>
    <td>Remove a group manager. Withdraws from the email account the management of the group, and returns the task.</td>
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
<tr id="parameter-exchange_service">
    <td><CopyableCode code="exchange_service" /></td>
    <td><code>string</code></td>
    <td>The internal name of your exchange service (wire: exchangeService)</td>
</tr>
<tr id="parameter-mailing_list_address">
    <td><CopyableCode code="mailing_list_address" /></td>
    <td><code>string</code></td>
    <td>The mailing list address (wire: mailingListAddress)</td>
</tr>
<tr id="parameter-manager_account_id">
    <td><CopyableCode code="manager_account_id" /></td>
    <td><code>integer</code></td>
    <td>Manager account id (wire: managerAccountId)</td>
</tr>
<tr id="parameter-organization_name">
    <td><CopyableCode code="organization_name" /></td>
    <td><code>string</code></td>
    <td>The internal name of your exchange organization (wire: organizationName)</td>
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

Get a group manager. Returns the ID and the email address of the account that manages the group, and the date it was added.

```sql
SELECT
manager_account_id,
task_pending_id,
creation_date,
manager_email_address
FROM ovh.email_exchange.service_mailing_list_manager_accounts
WHERE exchange_service = '{{ exchange_service }}' -- required
AND mailing_list_address = '{{ mailing_list_address }}' -- required
AND manager_account_id = '{{ manager_account_id }}' -- required
AND organization_name = '{{ organization_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List group managers. Returns the IDs of the email accounts that manage the group: they can change its members and settings.

```sql
SELECT
manager_account_id,
task_pending_id,
creation_date,
manager_email_address
FROM ovh.email_exchange.service_mailing_list_manager_accounts
WHERE exchange_service = '{{ exchange_service }}' -- required
AND mailing_list_address = '{{ mailing_list_address }}' -- required
AND organization_name = '{{ organization_name }}' -- required
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

Add a group manager. Makes the email account given by `managerAccountId` a manager of the group, and returns the task.

```sql
INSERT INTO ovh.email_exchange.service_mailing_list_manager_accounts (
manager_account_id,
exchange_service,
mailing_list_address,
organization_name
)
SELECT 
{{ manager_account_id }} /* required */,
'{{ exchange_service }}',
'{{ mailing_list_address }}',
'{{ organization_name }}'
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
- name: service_mailing_list_manager_accounts
  props:
    - name: exchange_service
      value: "{{ exchange_service }}"
      description: Required parameter for the service_mailing_list_manager_accounts resource.
    - name: mailing_list_address
      value: "{{ mailing_list_address }}"
      description: Required parameter for the service_mailing_list_manager_accounts resource.
    - name: organization_name
      value: "{{ organization_name }}"
      description: Required parameter for the service_mailing_list_manager_accounts resource.
    - name: manager_account_id
      value: {{ manager_account_id }}
      description: |
        Manager account id
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

Remove a group manager. Withdraws from the email account the management of the group, and returns the task.

```sql
DELETE FROM ovh.email_exchange.service_mailing_list_manager_accounts
WHERE exchange_service = '{{ exchange_service }}' --required
AND mailing_list_address = '{{ mailing_list_address }}' --required
AND manager_account_id = '{{ manager_account_id }}' --required
AND organization_name = '{{ organization_name }}' --required
;
```
</TabItem>
</Tabs>
