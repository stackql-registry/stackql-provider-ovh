--- 
title: tasks
hide_title: false
hide_table_of_contents: false
keywords:
  - tasks
  - hosting_web
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

Creates, updates, deletes, gets or lists a <code>tasks</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="tasks" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.hosting_web.tasks" /></td></tr>
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
    <td>Task's id</td>
</tr>
<tr>
    <td><CopyableCode code="object_id" /></td>
    <td><code>string</code></td>
    <td>Task object id (wire: objectId)</td>
</tr>
<tr>
    <td><CopyableCode code="done_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Done date (wire: doneDate)</td>
</tr>
<tr>
    <td><CopyableCode code="function" /></td>
    <td><code>string</code></td>
    <td>Task function (abuse/close, abuse/create, abuse/create/web, abuse/delete/web, abuse/update, abuse/update/web, agora/AnycastUpdateReference, agora/DnsAddonUpdateReference, agora/DnsUpdateReference, agora/updateReference, attachedDomain/create, attachedDomain/delete, attachedDomain/restart, attachedDomain/update, cdn/delete, cdn/domain/create, cdn/domain/delete, cdn/domain/flush, cdn/domain/suspend, cdn/flush, cdn/install, cdn/reopen, cdn/suspend, cdn/upgrade, cluster/setDevelopment, cluster/setTesting, cluster/ssl/deploy, cluster/ssl/renew, cluster/test/attachedDomains, cluster/test/cdn, cluster/test/crons, cluster/test/emails, cluster/test/fileBrowser, cluster/test/hostedssl, cluster/test/modules, cluster/test/ovhConfig, cluster/test/userLogs, cluster/test/users, configuration/create, configuration/delete, configuration/update, cron/create, cron/delete, cron/update, database/changePassword, database/changePasswordTest, database/changeRight, database/changeRightTest, database/checkQuotaNow, database/copy, database/copyRestore, database/create, database/delete, database/deleteTest, database/dumpAnyDay, database/hostUpdate, database/import, database/optimize, database/restore, dedicatedIp/delete, dedicatedIp/reopen, dedicatedIp/suspend, depc/push, dump/create, dump/delete, envVar/create, envVar/delete, envVar/update, envVar/upgrade, eventbus/push, filerz/customerMonitoring, filerz/delete, hostedssl/assignFreeKey, hostedssl/cdn/update, hostedssl/create, hostedssl/delete, hostedssl/globalsign/delete, hostedssl/htaccess/install, hostedssl/import, hostedssl/install, hostedssl/install/sectigo, hostedssl/iplb/reload, hostedssl/push, hostedssl/pushDcvFile, hostedssl/regenerate, hostedssl/repush, hosting/activate/privateDatabase, hosting/basculement, hosting/changeOffer/cloud, hosting/changeOffer/shared, hosting/changement, hosting/delete, hosting/delete_start1m, hosting/install, hosting/reopen, hosting/suspend, indy/reopen, indy/suspend, infra/certificate/deploy, infra/certificate/generate, infra/certificate/install, infra/sharedsql/upgrade, infra/ssl/deploy, infra/ssl/renew, ip/move, ip/park, localSeoAccount/create, localSeoAccount/delete, localSeoLocation/delete, localSeoLocation/install, localSeoLocation/reopen, localSeoLocation/suspend, localSeoVisibilityCheck/process, mailsout/checkMailsoutQueue, mailsout/flushMailsoutQueue, mailsout/updateUserInRedis, migration/copyUsers, migration/dday/filerz, migration/dday/listPrivateDatabases, migration/dday/lot, migration/dday/updateInfra/crons, migration/dday/updateInfra/dedicated, migration/dday/updateInfra/migratedFqdn, migration/updateOrt, module/changePassword, module/create, module/delete, module/install, monitoring/remotewrite, notification/send, ovhConfig/refresh, ovhConfig/rollback, ovhConfig/update, ovhOrg/delete, ownLogs/create, ownLogs/delete, provisionning/cdn, provisionning/cluster, provisionning/filerz, provisionning/filerz_log, provisionning/hosting, provisionning/ipfo, provisionning/ipifo, provisionning/iplb, provisionning/privatesql, provisionning/sharedsql, provisionning/ssl, provisionning/web, provisionning/webapp, runtime/create, runtime/delete, runtime/setDefault, runtime/update, scan/create, sqlperso/delete, sqlperso/install, sqlperso/reopen, sqlperso/suspend, synchronizeDepc/attachedDomain, synchronizeDepc/cluster, synchronizeDepc/database, synchronizeDepc/filer, synchronizeDepc/offer, synchronizeDepc/webd, test/migration, user/changePassword, user/create, user/delete, user/update, userLogs/changePassword, userLogs/create, userLogs/delete, uster/setTesting, web/changeDns, web/changeFilerz, web/changeFilerzWithCallback, web/changeJailState, web/changeOutState, web/changeState, web/changeWebState, web/checkQuotaNow, web/create, web/delete, web/deleteUser, web/restoreSnapshot, webProvisionning, webd/changeSlots, website/create, website/delete, website/deploy, website/vcs/create, website/vcs/delete, website/vcs/deploy)</td>
</tr>
<tr>
    <td><CopyableCode code="last_update" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last update date (wire: lastUpdate)</td>
</tr>
<tr>
    <td><CopyableCode code="object_type" /></td>
    <td><code>string</code></td>
    <td>Task object type (Abuse, AttachedDomain, BlockedIp, Cdn, Cron, Database, Deployment, Dump, EnvVar, Filerz, Hostedssl, Hosting, Indy, Infra, Minor, Module, Other, OvhConfig, OvhOrg, OwnLogs, Runtime, Scan, Sqlperso, User, UserLogs, Web, Webd, Website) (wire: objectType)</td>
</tr>
<tr>
    <td><CopyableCode code="start_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Start date (wire: startDate)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Task status (cancelled, doing, done, init, todo)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Public task

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
    <td>Task's id</td>
</tr>
<tr>
    <td><CopyableCode code="object_id" /></td>
    <td><code>string</code></td>
    <td>Task object id (wire: objectId)</td>
</tr>
<tr>
    <td><CopyableCode code="done_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Done date (wire: doneDate)</td>
</tr>
<tr>
    <td><CopyableCode code="function" /></td>
    <td><code>string</code></td>
    <td>Task function (abuse/close, abuse/create, abuse/create/web, abuse/delete/web, abuse/update, abuse/update/web, agora/AnycastUpdateReference, agora/DnsAddonUpdateReference, agora/DnsUpdateReference, agora/updateReference, attachedDomain/create, attachedDomain/delete, attachedDomain/restart, attachedDomain/update, cdn/delete, cdn/domain/create, cdn/domain/delete, cdn/domain/flush, cdn/domain/suspend, cdn/flush, cdn/install, cdn/reopen, cdn/suspend, cdn/upgrade, cluster/setDevelopment, cluster/setTesting, cluster/ssl/deploy, cluster/ssl/renew, cluster/test/attachedDomains, cluster/test/cdn, cluster/test/crons, cluster/test/emails, cluster/test/fileBrowser, cluster/test/hostedssl, cluster/test/modules, cluster/test/ovhConfig, cluster/test/userLogs, cluster/test/users, configuration/create, configuration/delete, configuration/update, cron/create, cron/delete, cron/update, database/changePassword, database/changePasswordTest, database/changeRight, database/changeRightTest, database/checkQuotaNow, database/copy, database/copyRestore, database/create, database/delete, database/deleteTest, database/dumpAnyDay, database/hostUpdate, database/import, database/optimize, database/restore, dedicatedIp/delete, dedicatedIp/reopen, dedicatedIp/suspend, depc/push, dump/create, dump/delete, envVar/create, envVar/delete, envVar/update, envVar/upgrade, eventbus/push, filerz/customerMonitoring, filerz/delete, hostedssl/assignFreeKey, hostedssl/cdn/update, hostedssl/create, hostedssl/delete, hostedssl/globalsign/delete, hostedssl/htaccess/install, hostedssl/import, hostedssl/install, hostedssl/install/sectigo, hostedssl/iplb/reload, hostedssl/push, hostedssl/pushDcvFile, hostedssl/regenerate, hostedssl/repush, hosting/activate/privateDatabase, hosting/basculement, hosting/changeOffer/cloud, hosting/changeOffer/shared, hosting/changement, hosting/delete, hosting/delete_start1m, hosting/install, hosting/reopen, hosting/suspend, indy/reopen, indy/suspend, infra/certificate/deploy, infra/certificate/generate, infra/certificate/install, infra/sharedsql/upgrade, infra/ssl/deploy, infra/ssl/renew, ip/move, ip/park, localSeoAccount/create, localSeoAccount/delete, localSeoLocation/delete, localSeoLocation/install, localSeoLocation/reopen, localSeoLocation/suspend, localSeoVisibilityCheck/process, mailsout/checkMailsoutQueue, mailsout/flushMailsoutQueue, mailsout/updateUserInRedis, migration/copyUsers, migration/dday/filerz, migration/dday/listPrivateDatabases, migration/dday/lot, migration/dday/updateInfra/crons, migration/dday/updateInfra/dedicated, migration/dday/updateInfra/migratedFqdn, migration/updateOrt, module/changePassword, module/create, module/delete, module/install, monitoring/remotewrite, notification/send, ovhConfig/refresh, ovhConfig/rollback, ovhConfig/update, ovhOrg/delete, ownLogs/create, ownLogs/delete, provisionning/cdn, provisionning/cluster, provisionning/filerz, provisionning/filerz_log, provisionning/hosting, provisionning/ipfo, provisionning/ipifo, provisionning/iplb, provisionning/privatesql, provisionning/sharedsql, provisionning/ssl, provisionning/web, provisionning/webapp, runtime/create, runtime/delete, runtime/setDefault, runtime/update, scan/create, sqlperso/delete, sqlperso/install, sqlperso/reopen, sqlperso/suspend, synchronizeDepc/attachedDomain, synchronizeDepc/cluster, synchronizeDepc/database, synchronizeDepc/filer, synchronizeDepc/offer, synchronizeDepc/webd, test/migration, user/changePassword, user/create, user/delete, user/update, userLogs/changePassword, userLogs/create, userLogs/delete, uster/setTesting, web/changeDns, web/changeFilerz, web/changeFilerzWithCallback, web/changeJailState, web/changeOutState, web/changeState, web/changeWebState, web/checkQuotaNow, web/create, web/delete, web/deleteUser, web/restoreSnapshot, webProvisionning, webd/changeSlots, website/create, website/delete, website/deploy, website/vcs/create, website/vcs/delete, website/vcs/deploy)</td>
</tr>
<tr>
    <td><CopyableCode code="last_update" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last update date (wire: lastUpdate)</td>
</tr>
<tr>
    <td><CopyableCode code="object_type" /></td>
    <td><code>string</code></td>
    <td>Task object type (Abuse, AttachedDomain, BlockedIp, Cdn, Cron, Database, Deployment, Dump, EnvVar, Filerz, Hostedssl, Hosting, Indy, Infra, Minor, Module, Other, OvhConfig, OvhOrg, OwnLogs, Runtime, Scan, Sqlperso, User, UserLogs, Web, Webd, Website) (wire: objectType)</td>
</tr>
<tr>
    <td><CopyableCode code="start_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Start date (wire: startDate)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Task status (cancelled, doing, done, init, todo)</td>
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
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Returns the function, status and dates of the task.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-function"><code>function</code></a>, <a href="#parameter-status"><code>status</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>Returns the IDs of the tasks of the hosting. Filter them by function or status.</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>integer</code></td>
    <td>Id</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>Service name (wire: serviceName)</td>
</tr>
<tr id="parameter-function">
    <td><CopyableCode code="function" /></td>
    <td><code>string</code></td>
    <td>Filter tasks by function (like)</td>
</tr>
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Filter tasks by status (like)</td>
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

Returns the function, status and dates of the task.

```sql
SELECT
id,
object_id,
done_date,
function,
last_update,
object_type,
start_date,
status
FROM ovh.hosting_web.tasks
WHERE id = '{{ id }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns the IDs of the tasks of the hosting. Filter them by function or status.

```sql
SELECT
id,
object_id,
done_date,
function,
last_update,
object_type,
start_date,
status
FROM ovh.hosting_web.tasks
WHERE service_name = '{{ service_name }}' -- required
AND function = '{{ function }}'
AND status = '{{ status }}'
AND x_pagination_mode = '{{ x_pagination_mode }}'
;
```
</TabItem>
</Tabs>
