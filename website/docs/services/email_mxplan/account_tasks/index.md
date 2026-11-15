--- 
title: account_tasks
hide_title: false
hide_table_of_contents: false
keywords:
  - account_tasks
  - email_mxplan
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

Creates, updates, deletes, gets or lists an <code>account_tasks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="account_tasks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.email_mxplan.account_tasks" /></td></tr>
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
    <td><code>integer</code></td>
    <td>Task id</td>
</tr>
<tr>
    <td><CopyableCode code="finish_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Completion date (wire: finishDate)</td>
</tr>
<tr>
    <td><CopyableCode code="function" /></td>
    <td><code>string</code></td>
    <td>Function name (addAccount, addAlias, addDomain, addDomainDKIM, addDomainDisclaimer, addExternalContact, addFullAccess, addSendAs, addSendOnBehalfTo, addServiceAuthorizedIp, changeHostname, changePassword, configureCustomer, deleteAccount, deleteAlias, deleteDomain, deleteDomainDKIM, deleteDomainDisclaimer, deleteExternalContact, deleteFullAccess, deleteSendAs, deleteSendOnBehalfTo, deleteService, deleteServiceAuthorizedIp, diagnoseAccount, disableDKIM, enableDKIM, expandDrive, installServer, maintenance, migrateAccountViaOMM, migrationAccount, migrationDisclaimer, migrationExternalContact, migrationHistory, migrationService, reOpenAccount, setAccount, setAlias, setDns, setDomain, setDomainDisclaimer, setExternalContact, setService, suspendAccount, suspendService, unknown, unsuspendAccount, unsuspendService)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Task status (cancelled, doing, done, error, todo)</td>
</tr>
<tr>
    <td><CopyableCode code="todo_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date (wire: todoDate)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Organization task details

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
    <td>Task id</td>
</tr>
<tr>
    <td><CopyableCode code="finish_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Completion date (wire: finishDate)</td>
</tr>
<tr>
    <td><CopyableCode code="function" /></td>
    <td><code>string</code></td>
    <td>Function name (addAccount, addAlias, addDomain, addDomainDKIM, addDomainDisclaimer, addExternalContact, addFullAccess, addSendAs, addSendOnBehalfTo, addServiceAuthorizedIp, changeHostname, changePassword, configureCustomer, deleteAccount, deleteAlias, deleteDomain, deleteDomainDKIM, deleteDomainDisclaimer, deleteExternalContact, deleteFullAccess, deleteSendAs, deleteSendOnBehalfTo, deleteService, deleteServiceAuthorizedIp, diagnoseAccount, disableDKIM, enableDKIM, expandDrive, installServer, maintenance, migrateAccountViaOMM, migrationAccount, migrationDisclaimer, migrationExternalContact, migrationHistory, migrationService, reOpenAccount, setAccount, setAlias, setDns, setDomain, setDomainDisclaimer, setExternalContact, setService, suspendAccount, suspendService, unknown, unsuspendAccount, unsuspendService)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Task status (cancelled, doing, done, error, todo)</td>
</tr>
<tr>
    <td><CopyableCode code="todo_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date (wire: todoDate)</td>
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
    <td><a href="#parameter-email"><code>email</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-service"><code>service</code></a></td>
    <td></td>
    <td>Get a task. Returns the function, status, creation date and completion date of the task. The status is todo, doing, done, error or cancelled.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-email"><code>email</code></a>, <a href="#parameter-service"><code>service</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List email account tasks. Returns the IDs of the tasks of the email account. Get one to follow its function, status and dates.</td>
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
<tr id="parameter-email">
    <td><CopyableCode code="email" /></td>
    <td><code>string</code></td>
    <td>Default email for this mailbox</td>
</tr>
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>integer</code></td>
    <td>Task id</td>
</tr>
<tr id="parameter-service">
    <td><CopyableCode code="service" /></td>
    <td><code>string</code></td>
    <td>The internal name of your mxplan organization</td>
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

Get a task. Returns the function, status, creation date and completion date of the task. The status is todo, doing, done, error or cancelled.

```sql
SELECT
id,
finish_date,
function,
status,
todo_date
FROM ovh.email_mxplan.account_tasks
WHERE email = '{{ email }}' -- required
AND id = '{{ id }}' -- required
AND service = '{{ service }}' -- required
;
```
</TabItem>
<TabItem value="list">

List email account tasks. Returns the IDs of the tasks of the email account. Get one to follow its function, status and dates.

```sql
SELECT
id,
finish_date,
function,
status,
todo_date
FROM ovh.email_mxplan.account_tasks
WHERE email = '{{ email }}' -- required
AND service = '{{ service }}' -- required
AND x_pagination_mode = '{{ x_pagination_mode }}'
;
```
</TabItem>
</Tabs>
