--- 
title: private_databases
hide_title: false
hide_table_of_contents: false
keywords:
  - private_databases
  - hosting_private_database
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

Creates, updates, deletes, gets or lists a <code>private_databases</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="private_databases" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.hosting_private_database.private_databases" /></td></tr>
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
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>Set the name displayed in customer panel for your private database (max 50 chars) (wire: displayName)</td>
</tr>
<tr>
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>Service name (wire: serviceName)</td>
</tr>
<tr>
    <td><CopyableCode code="capabilities" /></td>
    <td><code>array</code></td>
    <td>Private database capabilities</td>
</tr>
<tr>
    <td><CopyableCode code="cpu" /></td>
    <td><code>integer</code></td>
    <td>Number of cpu on your private database</td>
</tr>
<tr>
    <td><CopyableCode code="datacenter" /></td>
    <td><code>string</code></td>
    <td>Datacenter where this private database is located (bhs1, gra1, gra2, gra3)</td>
</tr>
<tr>
    <td><CopyableCode code="graph_endpoint" /></td>
    <td><code>object</code></td>
    <td>Parameters required to query metrics from OpenTSDB (wire: graphEndpoint)</td>
</tr>
<tr>
    <td><CopyableCode code="gui_url" /></td>
    <td><code>string</code></td>
    <td>URL for the graphical user interface (wire: guiURL)</td>
</tr>
<tr>
    <td><CopyableCode code="hostname" /></td>
    <td><code>string</code></td>
    <td>Private database hostname</td>
</tr>
<tr>
    <td><CopyableCode code="hostname_ftp" /></td>
    <td><code>string</code></td>
    <td>Private database ftp hostname (wire: hostnameFtp)</td>
</tr>
<tr>
    <td><CopyableCode code="iam" /></td>
    <td><code>object</code></td>
    <td>IAM resource metadata</td>
</tr>
<tr>
    <td><CopyableCode code="infrastructure" /></td>
    <td><code>string</code></td>
    <td>Infrastructure where service was stored (docker)</td>
</tr>
<tr>
    <td><CopyableCode code="ip" /></td>
    <td><code>string (ipv4)</code></td>
    <td>Private database ip (example: 192.0.2.0)</td>
</tr>
<tr>
    <td><CopyableCode code="is_under_maintenance" /></td>
    <td><code>boolean</code></td>
    <td>Is the service under maintenance (wire: isUnderMaintenance)</td>
</tr>
<tr>
    <td><CopyableCode code="last_check" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date of the last data synchronization (wire: lastCheck)</td>
</tr>
<tr>
    <td><CopyableCode code="offer" /></td>
    <td><code>string</code></td>
    <td>Type of the private database offer (classic, public)</td>
</tr>
<tr>
    <td><CopyableCode code="port" /></td>
    <td><code>integer</code></td>
    <td>Private database service port</td>
</tr>
<tr>
    <td><CopyableCode code="port_ftp" /></td>
    <td><code>integer</code></td>
    <td>Private database ftp port (wire: portFtp)</td>
</tr>
<tr>
    <td><CopyableCode code="quota_size" /></td>
    <td><code>object</code></td>
    <td>Space allowed on your private database (wire: quotaSize)</td>
</tr>
<tr>
    <td><CopyableCode code="quota_used" /></td>
    <td><code>object</code></td>
    <td>Total space used on your private database (wire: quotaUsed)</td>
</tr>
<tr>
    <td><CopyableCode code="ram" /></td>
    <td><code>object</code></td>
    <td>Amount of ram on your private database</td>
</tr>
<tr>
    <td><CopyableCode code="server" /></td>
    <td><code>string</code></td>
    <td>Private database server name</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Private database state (detached, restartPending, startPending, started, stopPending, stopped)</td>
</tr>
<tr>
    <td><CopyableCode code="tls_ca" /></td>
    <td><code>string</code></td>
    <td>Return the TLS certificate authority used by the private database (wire: tlsCa)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Private database type (mariadb, mysql, postgresql, valkey)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>Private database version (mariadb_10.11, mariadb_11.4, mariadb_11.8, mysql_8.0, mysql_8.4, postgresql_14, postgresql_15, postgresql_16, postgresql_17, postgresql_18, valkey_7.2, valkey_8.1, valkey_9.1)</td>
</tr>
<tr>
    <td><CopyableCode code="version_label" /></td>
    <td><code>string</code></td>
    <td>Private database version label (wire: versionLabel)</td>
</tr>
<tr>
    <td><CopyableCode code="version_number" /></td>
    <td><code>number</code></td>
    <td>Private database version number (wire: versionNumber)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Web Cloud Database

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
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>Set the name displayed in customer panel for your private database (max 50 chars) (wire: displayName)</td>
</tr>
<tr>
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>Service name (wire: serviceName)</td>
</tr>
<tr>
    <td><CopyableCode code="capabilities" /></td>
    <td><code>array</code></td>
    <td>Private database capabilities</td>
</tr>
<tr>
    <td><CopyableCode code="cpu" /></td>
    <td><code>integer</code></td>
    <td>Number of cpu on your private database</td>
</tr>
<tr>
    <td><CopyableCode code="datacenter" /></td>
    <td><code>string</code></td>
    <td>Datacenter where this private database is located (bhs1, gra1, gra2, gra3)</td>
</tr>
<tr>
    <td><CopyableCode code="graph_endpoint" /></td>
    <td><code>object</code></td>
    <td>Parameters required to query metrics from OpenTSDB (wire: graphEndpoint)</td>
</tr>
<tr>
    <td><CopyableCode code="gui_url" /></td>
    <td><code>string</code></td>
    <td>URL for the graphical user interface (wire: guiURL)</td>
</tr>
<tr>
    <td><CopyableCode code="hostname" /></td>
    <td><code>string</code></td>
    <td>Private database hostname</td>
</tr>
<tr>
    <td><CopyableCode code="hostname_ftp" /></td>
    <td><code>string</code></td>
    <td>Private database ftp hostname (wire: hostnameFtp)</td>
</tr>
<tr>
    <td><CopyableCode code="iam" /></td>
    <td><code>object</code></td>
    <td>IAM resource metadata</td>
</tr>
<tr>
    <td><CopyableCode code="infrastructure" /></td>
    <td><code>string</code></td>
    <td>Infrastructure where service was stored (docker)</td>
</tr>
<tr>
    <td><CopyableCode code="ip" /></td>
    <td><code>string (ipv4)</code></td>
    <td>Private database ip (example: 192.0.2.0)</td>
</tr>
<tr>
    <td><CopyableCode code="is_under_maintenance" /></td>
    <td><code>boolean</code></td>
    <td>Is the service under maintenance (wire: isUnderMaintenance)</td>
</tr>
<tr>
    <td><CopyableCode code="last_check" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date of the last data synchronization (wire: lastCheck)</td>
</tr>
<tr>
    <td><CopyableCode code="offer" /></td>
    <td><code>string</code></td>
    <td>Type of the private database offer (classic, public)</td>
</tr>
<tr>
    <td><CopyableCode code="port" /></td>
    <td><code>integer</code></td>
    <td>Private database service port</td>
</tr>
<tr>
    <td><CopyableCode code="port_ftp" /></td>
    <td><code>integer</code></td>
    <td>Private database ftp port (wire: portFtp)</td>
</tr>
<tr>
    <td><CopyableCode code="quota_size" /></td>
    <td><code>object</code></td>
    <td>Space allowed on your private database (wire: quotaSize)</td>
</tr>
<tr>
    <td><CopyableCode code="quota_used" /></td>
    <td><code>object</code></td>
    <td>Total space used on your private database (wire: quotaUsed)</td>
</tr>
<tr>
    <td><CopyableCode code="ram" /></td>
    <td><code>object</code></td>
    <td>Amount of ram on your private database</td>
</tr>
<tr>
    <td><CopyableCode code="server" /></td>
    <td><code>string</code></td>
    <td>Private database server name</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Private database state (detached, restartPending, startPending, started, stopPending, stopped)</td>
</tr>
<tr>
    <td><CopyableCode code="tls_ca" /></td>
    <td><code>string</code></td>
    <td>Return the TLS certificate authority used by the private database (wire: tlsCa)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Private database type (mariadb, mysql, postgresql, valkey)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>Private database version (mariadb_10.11, mariadb_11.4, mariadb_11.8, mysql_8.0, mysql_8.4, postgresql_14, postgresql_15, postgresql_16, postgresql_17, postgresql_18, valkey_7.2, valkey_8.1, valkey_9.1)</td>
</tr>
<tr>
    <td><CopyableCode code="version_label" /></td>
    <td><code>string</code></td>
    <td>Private database version label (wire: versionLabel)</td>
</tr>
<tr>
    <td><CopyableCode code="version_number" /></td>
    <td><code>number</code></td>
    <td>Private database version number (wire: versionNumber)</td>
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
    <td>Returns the service properties, such as offer, DBMS type and version, hostname and ports, RAM, quota and state.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-iam_tags"><code>iam_tags</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>Returns the service names of the Web Cloud Databases of the account.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Updates the editable properties of the service, such as the display name (50 characters maximum).</td>
</tr>
<tr>
    <td><a href="#change_contact"><CopyableCode code="change_contact" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Starts a change procedure for the admin, billing or tech contact of the service. Returns the IDs of the account contact change tasks, which are not listed in the service tasks.</td>
</tr>
<tr>
    <td><a href="#change_ftp_password"><CopyableCode code="change_ftp_password" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-password"><code>password</code></a></td>
    <td></td>
    <td>Changes the FTP admin password of the service. The password must be alphanumeric and at least 8 characters long.</td>
</tr>
<tr>
    <td><a href="#change_version"><CopyableCode code="change_version" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-version"><code>version</code></a></td>
    <td></td>
    <td>Changes the DBMS version of the service to one of the available versions. Returns a task to follow the change.</td>
</tr>
<tr>
    <td><a href="#confirm_termination"><CopyableCode code="confirm_termination" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-token"><code>token</code></a></td>
    <td></td>
    <td>Confirms the termination of the service with the token sent by email to the admin contact.</td>
</tr>
<tr>
    <td><a href="#database_wizard"><CopyableCode code="database_wizard" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-databaseName"><code>databaseName</code></a>, <a href="#parameter-grant"><code>grant</code></a>, <a href="#parameter-password"><code>password</code></a>, <a href="#parameter-userName"><code>userName</code></a></td>
    <td></td>
    <td>Creates a database and a user in one call, and grants the user the chosen rights on the database. The password must be alphanumeric and at least 8 characters long.</td>
</tr>
<tr>
    <td><a href="#generate_temporary_logs_link"><CopyableCode code="generate_temporary_logs_link" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Returns a temporary URL to access the logs of the service, with its expiration date.</td>
</tr>
<tr>
    <td><a href="#log_url"><CopyableCode code="log_url" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-kind"><code>kind</code></a></td>
    <td></td>
    <td>Generates a temporary URL to read the logs of one kind. The URL expires.</td>
</tr>
<tr>
    <td><a href="#quota_refresh"><CopyableCode code="quota_refresh" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Recalculates the disk space used by the service. Returns a task to follow the refresh.</td>
</tr>
<tr>
    <td><a href="#restart"><CopyableCode code="restart" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Restarts the service, which is unavailable for a few seconds. Returns a task to follow the restart.</td>
</tr>
<tr>
    <td><a href="#terminate"><CopyableCode code="terminate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Starts the termination of the service and sends a confirmation token by email to the admin contact. Confirm it with the termination confirmation.</td>
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
    <td>Service name</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>Service name (wire: serviceName)</td>
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

Returns the service properties, such as offer, DBMS type and version, hostname and ports, RAM, quota and state.

```sql
SELECT
display_name,
service_name,
capabilities,
cpu,
datacenter,
graph_endpoint,
gui_url,
hostname,
hostname_ftp,
iam,
infrastructure,
ip,
is_under_maintenance,
last_check,
offer,
port,
port_ftp,
quota_size,
quota_used,
ram,
server,
state,
tls_ca,
type,
version,
version_label,
version_number
FROM ovh.hosting_private_database.private_databases
WHERE service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns the service names of the Web Cloud Databases of the account.

```sql
SELECT
display_name,
service_name,
capabilities,
cpu,
datacenter,
graph_endpoint,
gui_url,
hostname,
hostname_ftp,
iam,
infrastructure,
ip,
is_under_maintenance,
last_check,
offer,
port,
port_ftp,
quota_size,
quota_used,
ram,
server,
state,
tls_ca,
type,
version,
version_label,
version_number
FROM ovh.hosting_private_database.private_databases
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

Updates the editable properties of the service, such as the display name (50 characters maximum).

```sql
UPDATE ovh.hosting_private_database.private_databases
SET 
display_name = '{{ display_name }}'
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
        { label: 'change_ftp_password', value: 'change_ftp_password' },
        { label: 'change_version', value: 'change_version' },
        { label: 'confirm_termination', value: 'confirm_termination' },
        { label: 'database_wizard', value: 'database_wizard' },
        { label: 'generate_temporary_logs_link', value: 'generate_temporary_logs_link' },
        { label: 'log_url', value: 'log_url' },
        { label: 'quota_refresh', value: 'quota_refresh' },
        { label: 'restart', value: 'restart' },
        { label: 'terminate', value: 'terminate' }
    ]}
>
<TabItem value="change_contact">

Starts a change procedure for the admin, billing or tech contact of the service. Returns the IDs of the account contact change tasks, which are not listed in the service tasks.

```sql
EXEC ovh.hosting_private_database.private_databases.change_contact 
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
<TabItem value="change_ftp_password">

Changes the FTP admin password of the service. The password must be alphanumeric and at least 8 characters long.

```sql
EXEC ovh.hosting_private_database.private_databases.change_ftp_password 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"password": "{{ password }}"
}'
;
```
</TabItem>
<TabItem value="change_version">

Changes the DBMS version of the service to one of the available versions. Returns a task to follow the change.

```sql
EXEC ovh.hosting_private_database.private_databases.change_version 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"version": "{{ version }}"
}'
;
```
</TabItem>
<TabItem value="confirm_termination">

Confirms the termination of the service with the token sent by email to the admin contact.

```sql
EXEC ovh.hosting_private_database.private_databases.confirm_termination 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"commentary": "{{ commentary }}", 
"commentaryFutureUse": "{{ commentaryFutureUse }}", 
"commentaryReason": "{{ commentaryReason }}", 
"futureUse": "{{ futureUse }}", 
"reason": "{{ reason }}", 
"token": "{{ token }}"
}'
;
```
</TabItem>
<TabItem value="database_wizard">

Creates a database and a user in one call, and grants the user the chosen rights on the database. The password must be alphanumeric and at least 8 characters long.

```sql
EXEC ovh.hosting_private_database.private_databases.database_wizard 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"databaseName": "{{ databaseName }}", 
"grant": "{{ grant }}", 
"password": "{{ password }}", 
"userName": "{{ userName }}"
}'
;
```
</TabItem>
<TabItem value="generate_temporary_logs_link">

Returns a temporary URL to access the logs of the service, with its expiration date.

```sql
EXEC ovh.hosting_private_database.private_databases.generate_temporary_logs_link 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
<TabItem value="log_url">

Generates a temporary URL to read the logs of one kind. The URL expires.

```sql
EXEC ovh.hosting_private_database.private_databases.log_url 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"kind": "{{ kind }}"
}'
;
```
</TabItem>
<TabItem value="quota_refresh">

Recalculates the disk space used by the service. Returns a task to follow the refresh.

```sql
EXEC ovh.hosting_private_database.private_databases.quota_refresh 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
<TabItem value="restart">

Restarts the service, which is unavailable for a few seconds. Returns a task to follow the restart.

```sql
EXEC ovh.hosting_private_database.private_databases.restart 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
<TabItem value="terminate">

Starts the termination of the service and sends a confirmation token by email to the admin contact. Confirm it with the termination confirmation.

```sql
EXEC ovh.hosting_private_database.private_databases.terminate 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
</Tabs>
