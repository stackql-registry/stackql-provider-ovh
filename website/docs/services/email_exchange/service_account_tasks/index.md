--- 
title: service_account_tasks
hide_title: false
hide_table_of_contents: false
keywords:
  - service_account_tasks
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

Creates, updates, deletes, gets or lists a <code>service_account_tasks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="service_account_tasks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.email_exchange.service_account_tasks" /></td></tr>
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
    <td>Function name (activateSharepoint, addAccount, addAccountArchive, addAccountImpersonation, addActiveSyncMailNotification, addAlias, addDistributionGroup, addDistributionGroupManager, addDistributionGroupMember, addDistributionGroupSendAs, addDistributionGroupSendOnBehalfTo, addDomain, addDomainDisclaimer, addExchangeCustomIsolation, addExchangeDomainDKIM, addExchangeRemoteMailbox, addExchangeServiceAuthorizedIp, addExportPstRequest, addExternalContact, addFullAccess, addOutlookLicense, addPublicFolder, addPublicFolderPermission, addResourceAccount, addResourceDelegate, addSendAs, addSendConnector, addSendOnBehalfTo, addSharedAccount, addSharedAccountFullAccess, addSharedAccountSendAs, addSharedAccountSendOnBehalfTo, changeHostname, changePassword, clearDataOnDevice, cloneTemplateExchangePrivate, configureExchangeCustomer, configureExchangeOwaMfa, copyMailbox, createExternalAntiSpamReceiveConnector, deleteAccount, deleteAccountArchive, deleteAccountImpersonation, deleteActiveSyncMailNotification, deleteAlias, deleteDistributionGroup, deleteDistributionGroupManager, deleteDistributionGroupMember, deleteDistributionGroupSendAs, deleteDistributionGroupSendOnBehalfTo, deleteDomain, deleteDomainDisclaimer, deleteExchangeCustomIsolation, deleteExchangeDomainDKIM, deleteExchangeRemoteMailbox, deleteExchangeService, deleteExchangeServiceAuthorizedIp, deleteExportPstRequest, deleteExternalAntiSpamReceiveConnector, deleteExternalContact, deleteFullAccess, deleteOutlookLicense, deletePublicFolder, deletePublicFolderPermission, deleteResourceAccount, deleteResourceDelegate, deleteSendAs, deleteSendConnector, deleteSendOnBehalfTo, deleteSharedAccount, deleteSharedAccountFullAccess, deleteSharedAccountSendAs, deleteSharedAccountSendOnBehalfTo, destroyPrivateVm, diagnoseAccount, disableExchangeDKIM, enableExchangeDKIM, expandDrive, generateOutlookUrl, generatePstUrl, installExchange, installSSL, maintenance, migrationAccount, migrationDisclaimer, migrationExternalContact, migrationHistory, migrationMailingList, migrationResourceAccount, migrationService, reOpenHostedAccount, reOpenOutlookLicense, reOpenPrivateAccount, reOpenPrivateVm, setAccount, setAccountArchive, setAlias, setDistributionGroup, setDns, setDomain, setDomainDisclaimer, setExchangeAccountProtocol, setExchangeRemoteMailbox, setExchangeServiceDevice, setExternalAntiSpamReceiveConnector, setExternalContact, setPublicFolder, setPublicFolderPermission, setResourceAccount, setSendConnector, setService, setSharedAccount, suspendAccount, suspendExchangeService, suspendHostedAccount, suspendOutlookLicense, suspendPrivateAccount, suspendPrivateVm, unsuspendAccount, unsuspendExchangeService, unsuspendHostedAccount, updateExchangeServiceDevice, upgrade2016)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Task status (canceled, doing, done, error, standby, todo)</td>
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

Exchange task details

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
    <td>Function name (activateSharepoint, addAccount, addAccountArchive, addAccountImpersonation, addActiveSyncMailNotification, addAlias, addDistributionGroup, addDistributionGroupManager, addDistributionGroupMember, addDistributionGroupSendAs, addDistributionGroupSendOnBehalfTo, addDomain, addDomainDisclaimer, addExchangeCustomIsolation, addExchangeDomainDKIM, addExchangeRemoteMailbox, addExchangeServiceAuthorizedIp, addExportPstRequest, addExternalContact, addFullAccess, addOutlookLicense, addPublicFolder, addPublicFolderPermission, addResourceAccount, addResourceDelegate, addSendAs, addSendConnector, addSendOnBehalfTo, addSharedAccount, addSharedAccountFullAccess, addSharedAccountSendAs, addSharedAccountSendOnBehalfTo, changeHostname, changePassword, clearDataOnDevice, cloneTemplateExchangePrivate, configureExchangeCustomer, configureExchangeOwaMfa, copyMailbox, createExternalAntiSpamReceiveConnector, deleteAccount, deleteAccountArchive, deleteAccountImpersonation, deleteActiveSyncMailNotification, deleteAlias, deleteDistributionGroup, deleteDistributionGroupManager, deleteDistributionGroupMember, deleteDistributionGroupSendAs, deleteDistributionGroupSendOnBehalfTo, deleteDomain, deleteDomainDisclaimer, deleteExchangeCustomIsolation, deleteExchangeDomainDKIM, deleteExchangeRemoteMailbox, deleteExchangeService, deleteExchangeServiceAuthorizedIp, deleteExportPstRequest, deleteExternalAntiSpamReceiveConnector, deleteExternalContact, deleteFullAccess, deleteOutlookLicense, deletePublicFolder, deletePublicFolderPermission, deleteResourceAccount, deleteResourceDelegate, deleteSendAs, deleteSendConnector, deleteSendOnBehalfTo, deleteSharedAccount, deleteSharedAccountFullAccess, deleteSharedAccountSendAs, deleteSharedAccountSendOnBehalfTo, destroyPrivateVm, diagnoseAccount, disableExchangeDKIM, enableExchangeDKIM, expandDrive, generateOutlookUrl, generatePstUrl, installExchange, installSSL, maintenance, migrationAccount, migrationDisclaimer, migrationExternalContact, migrationHistory, migrationMailingList, migrationResourceAccount, migrationService, reOpenHostedAccount, reOpenOutlookLicense, reOpenPrivateAccount, reOpenPrivateVm, setAccount, setAccountArchive, setAlias, setDistributionGroup, setDns, setDomain, setDomainDisclaimer, setExchangeAccountProtocol, setExchangeRemoteMailbox, setExchangeServiceDevice, setExternalAntiSpamReceiveConnector, setExternalContact, setPublicFolder, setPublicFolderPermission, setResourceAccount, setSendConnector, setService, setSharedAccount, suspendAccount, suspendExchangeService, suspendHostedAccount, suspendOutlookLicense, suspendPrivateAccount, suspendPrivateVm, unsuspendAccount, unsuspendExchangeService, unsuspendHostedAccount, updateExchangeServiceDevice, upgrade2016)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Task status (canceled, doing, done, error, standby, todo)</td>
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
    <td><a href="#parameter-exchange_service"><code>exchange_service</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-organization_name"><code>organization_name</code></a>, <a href="#parameter-primary_email_address"><code>primary_email_address</code></a></td>
    <td></td>
    <td>Get a task. Returns the function, the status, the creation date (`todoDate`) and the completion date (`finishDate`) of the task.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-exchange_service"><code>exchange_service</code></a>, <a href="#parameter-organization_name"><code>organization_name</code></a>, <a href="#parameter-primary_email_address"><code>primary_email_address</code></a></td>
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
<tr id="parameter-exchange_service">
    <td><CopyableCode code="exchange_service" /></td>
    <td><code>string</code></td>
    <td>The internal name of your exchange service (wire: exchangeService)</td>
</tr>
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>integer</code></td>
    <td>Task id</td>
</tr>
<tr id="parameter-organization_name">
    <td><CopyableCode code="organization_name" /></td>
    <td><code>string</code></td>
    <td>The internal name of your exchange organization (wire: organizationName)</td>
</tr>
<tr id="parameter-primary_email_address">
    <td><CopyableCode code="primary_email_address" /></td>
    <td><code>string</code></td>
    <td>Default email for this mailbox (wire: primaryEmailAddress)</td>
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

Get a task. Returns the function, the status, the creation date (`todoDate`) and the completion date (`finishDate`) of the task.

```sql
SELECT
id,
finish_date,
function,
status,
todo_date
FROM ovh.email_exchange.service_account_tasks
WHERE exchange_service = '{{ exchange_service }}' -- required
AND id = '{{ id }}' -- required
AND organization_name = '{{ organization_name }}' -- required
AND primary_email_address = '{{ primary_email_address }}' -- required
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
FROM ovh.email_exchange.service_account_tasks
WHERE exchange_service = '{{ exchange_service }}' -- required
AND organization_name = '{{ organization_name }}' -- required
AND primary_email_address = '{{ primary_email_address }}' -- required
AND x_pagination_mode = '{{ x_pagination_mode }}'
;
```
</TabItem>
</Tabs>
