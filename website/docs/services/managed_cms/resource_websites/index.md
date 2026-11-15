--- 
title: resource_websites
hide_title: false
hide_table_of_contents: false
keywords:
  - resource_websites
  - managed_cms
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

Creates, updates, deletes, gets or lists a <code>resource_websites</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="resource_websites" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.managed_cms.resource_websites" /></td></tr>
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
    <td>Unique identifier of the website</td>
</tr>
<tr>
    <td><CopyableCode code="checksum" /></td>
    <td><code>string</code></td>
    <td>Computed hash used to control concurrent modification requests</td>
</tr>
<tr>
    <td><CopyableCode code="current_state" /></td>
    <td><code>object</code></td>
    <td>Current state of the website (wire: currentState)</td>
</tr>
<tr>
    <td><CopyableCode code="current_tasks" /></td>
    <td><code>array</code></td>
    <td>Ongoing asynchronous tasks related to the website (wire: currentTasks)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_status" /></td>
    <td><code>string</code></td>
    <td>Website readiness in the system (CREATING, CREATION_PLANNED, DELETING, ERROR, OUT_OF_SYNC, READY, SUSPENDED, UNKNOWN, UPDATING) (wire: resourceStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="target_spec" /></td>
    <td><code>object</code></td>
    <td>Target specification of the website (wire: targetSpec)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Information about a website

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
    <td>Unique identifier of the website</td>
</tr>
<tr>
    <td><CopyableCode code="checksum" /></td>
    <td><code>string</code></td>
    <td>Computed hash used to control concurrent modification requests</td>
</tr>
<tr>
    <td><CopyableCode code="current_state" /></td>
    <td><code>object</code></td>
    <td>Current state of the website (wire: currentState)</td>
</tr>
<tr>
    <td><CopyableCode code="current_tasks" /></td>
    <td><code>array</code></td>
    <td>Ongoing asynchronous tasks related to the website (wire: currentTasks)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_status" /></td>
    <td><code>string</code></td>
    <td>Website readiness in the system (CREATING, CREATION_PLANNED, DELETING, ERROR, OUT_OF_SYNC, READY, SUSPENDED, UNKNOWN, UPDATING) (wire: resourceStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="target_spec" /></td>
    <td><code>object</code></td>
    <td>Target specification of the website (wire: targetSpec)</td>
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
    <td><a href="#parameter-service_id"><code>service_id</code></a>, <a href="#parameter-website_id"><code>website_id</code></a></td>
    <td></td>
    <td>Returns the CMS and PHP versions, domains, SFTP and database access, disk usage and planned update of the website. (Alpha version)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_id"><code>service_id</code></a></td>
    <td><a href="#parameter-x_pagination_cursor"><code>x_pagination_cursor</code></a>, <a href="#parameter-x_pagination_size"><code>x_pagination_size</code></a></td>
    <td>Returns the websites of the service. (Alpha version)</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_id"><code>service_id</code></a>, <a href="#parameter-target_spec"><code>target_spec</code></a></td>
    <td></td>
    <td>Creates a WordPress website, imports one from its admin URL and credentials, or clones a website of the same service. The admin login of a created website must be an email address. Creation is asynchronous: follow its task in currentTasks. (Alpha version)</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-service_id"><code>service_id</code></a>, <a href="#parameter-website_id"><code>website_id</code></a></td>
    <td></td>
    <td>Updates the domains, primary FQDN or planned update of the website. It can also flush its CDN, or reset its database, SFTP or PhpMyAdmin password. (Alpha version)</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-service_id"><code>service_id</code></a>, <a href="#parameter-website_id"><code>website_id</code></a></td>
    <td></td>
    <td>Permanently deletes the website, with its files and database. (Alpha version)</td>
</tr>
<tr>
    <td><a href="#application_password"><CopyableCode code="application_password" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceId"><code>serviceId</code></a>, <a href="#parameter-websiteId"><code>websiteId</code></a></td>
    <td></td>
    <td>Each call creates a new application password on the existing administrator user. The previous ones stay valid. They can be revoked from the CMS administration. (Beta version)</td>
</tr>
<tr>
    <td><a href="#flush_cdn"><CopyableCode code="flush_cdn" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceId"><code>serviceId</code></a>, <a href="#parameter-websiteId"><code>websiteId</code></a></td>
    <td></td>
    <td>Flushes the CDN cache of the website and returns the task. (Alpha version)</td>
</tr>
<tr>
    <td><a href="#reset_database_password"><CopyableCode code="reset_database_password" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceId"><code>serviceId</code></a>, <a href="#parameter-websiteId"><code>websiteId</code></a></td>
    <td></td>
    <td>Generates a new database password and sets it on the database and in the WordPress configuration. Use it to revoke a leaked password: the new password is not returned. (Alpha version)</td>
</tr>
<tr>
    <td><a href="#reset_php_my_admin_password"><CopyableCode code="reset_php_my_admin_password" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceId"><code>serviceId</code></a>, <a href="#parameter-websiteId"><code>websiteId</code></a>, <a href="#parameter-password"><code>password</code></a></td>
    <td></td>
    <td>Sets a new PhpMyAdmin password for the website and returns the task. The password needs 9 to 30 alphanumeric characters, with at least one uppercase letter, one lowercase letter and one digit. (Alpha version)</td>
</tr>
<tr>
    <td><a href="#reset_sftp_password"><CopyableCode code="reset_sftp_password" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceId"><code>serviceId</code></a>, <a href="#parameter-websiteId"><code>websiteId</code></a>, <a href="#parameter-password"><code>password</code></a></td>
    <td></td>
    <td>Sets a new SFTP password for the website and returns the task. The password needs 9 to 30 alphanumeric characters, with at least one uppercase letter, one lowercase letter and one digit. (Alpha version)</td>
</tr>
<tr>
    <td><a href="#snapshot"><CopyableCode code="snapshot" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceId"><code>serviceId</code></a>, <a href="#parameter-websiteId"><code>websiteId</code></a></td>
    <td></td>
    <td>Exports a full backup of the website, files and database, and returns the task. The download links are sent by email. (Alpha version)</td>
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
<tr id="parameter-serviceId">
    <td><CopyableCode code="serviceId" /></td>
    <td><code>string (uuid)</code></td>
    <td>Service ID</td>
</tr>
<tr id="parameter-service_id">
    <td><CopyableCode code="service_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Service ID (wire: serviceId)</td>
</tr>
<tr id="parameter-websiteId">
    <td><CopyableCode code="websiteId" /></td>
    <td><code>string (uuid)</code></td>
    <td>Website ID</td>
</tr>
<tr id="parameter-website_id">
    <td><CopyableCode code="website_id" /></td>
    <td><code>string (uuid)</code></td>
    <td>Website ID (wire: websiteId)</td>
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

Returns the CMS and PHP versions, domains, SFTP and database access, disk usage and planned update of the website. (Alpha version)

```sql
SELECT
id,
checksum,
current_state,
current_tasks,
resource_status,
target_spec
FROM ovh.managed_cms.resource_websites
WHERE service_id = '{{ service_id }}' -- required
AND website_id = '{{ website_id }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns the websites of the service. (Alpha version)

```sql
SELECT
id,
checksum,
current_state,
current_tasks,
resource_status,
target_spec
FROM ovh.managed_cms.resource_websites
WHERE service_id = '{{ service_id }}' -- required
AND x_pagination_cursor = '{{ x_pagination_cursor }}'
AND x_pagination_size = '{{ x_pagination_size }}'
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

Creates a WordPress website, imports one from its admin URL and credentials, or clones a website of the same service. The admin login of a created website must be an email address. Creation is asynchronous: follow its task in currentTasks. (Alpha version)

```sql
INSERT INTO ovh.managed_cms.resource_websites (
target_spec,
service_id
)
SELECT 
'{{ target_spec }}' /* required */,
'{{ service_id }}'
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
- name: resource_websites
  props:
    - name: service_id
      value: "{{ service_id }}"
      description: Required parameter for the resource_websites resource.
    - name: target_spec
      description: |
        Target specification of the website
      value:
        clone:
          sourceWebsiteId: "{{ sourceWebsiteId }}"
        creation:
          adminLogin: "{{ adminLogin }}"
          adminPassword: "{{ adminPassword }}"
          cms: "{{ cms }}"
          cmsSpecific:
            wordpress:
              language: "{{ language }}"
          phpVersion: "{{ phpVersion }}"
        import:
          adminLogin: "{{ adminLogin }}"
          adminPassword: "{{ adminPassword }}"
          adminURL: "{{ adminURL }}"
          cms: "{{ cms }}"
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

Updates the domains, primary FQDN or planned update of the website. It can also flush its CDN, or reset its database, SFTP or PhpMyAdmin password. (Alpha version)

```sql
UPDATE ovh.managed_cms.resource_websites
SET 
target_spec = '{{ target_spec }}'
WHERE 
service_id = '{{ service_id }}' --required
AND website_id = '{{ website_id }}' --required
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

Permanently deletes the website, with its files and database. (Alpha version)

```sql
DELETE FROM ovh.managed_cms.resource_websites
WHERE service_id = '{{ service_id }}' --required
AND website_id = '{{ website_id }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="application_password"
    values={[
        { label: 'application_password', value: 'application_password' },
        { label: 'flush_cdn', value: 'flush_cdn' },
        { label: 'reset_database_password', value: 'reset_database_password' },
        { label: 'reset_php_my_admin_password', value: 'reset_php_my_admin_password' },
        { label: 'reset_sftp_password', value: 'reset_sftp_password' },
        { label: 'snapshot', value: 'snapshot' }
    ]}
>
<TabItem value="application_password">

Each call creates a new application password on the existing administrator user. The previous ones stay valid. They can be revoked from the CMS administration. (Beta version)

```sql
EXEC ovh.managed_cms.resource_websites.application_password 
@serviceId='{{ serviceId }}' --required, 
@websiteId='{{ websiteId }}' --required
;
```
</TabItem>
<TabItem value="flush_cdn">

Flushes the CDN cache of the website and returns the task. (Alpha version)

```sql
EXEC ovh.managed_cms.resource_websites.flush_cdn 
@serviceId='{{ serviceId }}' --required, 
@websiteId='{{ websiteId }}' --required
;
```
</TabItem>
<TabItem value="reset_database_password">

Generates a new database password and sets it on the database and in the WordPress configuration. Use it to revoke a leaked password: the new password is not returned. (Alpha version)

```sql
EXEC ovh.managed_cms.resource_websites.reset_database_password 
@serviceId='{{ serviceId }}' --required, 
@websiteId='{{ websiteId }}' --required
;
```
</TabItem>
<TabItem value="reset_php_my_admin_password">

Sets a new PhpMyAdmin password for the website and returns the task. The password needs 9 to 30 alphanumeric characters, with at least one uppercase letter, one lowercase letter and one digit. (Alpha version)

```sql
EXEC ovh.managed_cms.resource_websites.reset_php_my_admin_password 
@serviceId='{{ serviceId }}' --required, 
@websiteId='{{ websiteId }}' --required 
@@json=
'{
"password": "{{ password }}"
}'
;
```
</TabItem>
<TabItem value="reset_sftp_password">

Sets a new SFTP password for the website and returns the task. The password needs 9 to 30 alphanumeric characters, with at least one uppercase letter, one lowercase letter and one digit. (Alpha version)

```sql
EXEC ovh.managed_cms.resource_websites.reset_sftp_password 
@serviceId='{{ serviceId }}' --required, 
@websiteId='{{ websiteId }}' --required 
@@json=
'{
"password": "{{ password }}"
}'
;
```
</TabItem>
<TabItem value="snapshot">

Exports a full backup of the website, files and database, and returns the task. The download links are sent by email. (Alpha version)

```sql
EXEC ovh.managed_cms.resource_websites.snapshot 
@serviceId='{{ serviceId }}' --required, 
@websiteId='{{ websiteId }}' --required
;
```
</TabItem>
</Tabs>
