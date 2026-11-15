--- 
title: crons
hide_title: false
hide_table_of_contents: false
keywords:
  - crons
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

Creates, updates, deletes, gets or lists a <code>crons</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="crons" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.hosting_web.crons" /></td></tr>
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
    <td>Cron's id</td>
</tr>
<tr>
    <td><CopyableCode code="command" /></td>
    <td><code>string</code></td>
    <td>Command to execute</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description field for you</td>
</tr>
<tr>
    <td><CopyableCode code="email" /></td>
    <td><code>string</code></td>
    <td>Email used to receive error log (stderr)</td>
</tr>
<tr>
    <td><CopyableCode code="frequency" /></td>
    <td><code>string</code></td>
    <td>Frequency (crontab format) defined for the script (minutes are ignored)</td>
</tr>
<tr>
    <td><CopyableCode code="language" /></td>
    <td><code>string</code></td>
    <td>Cron language (node10, node11, node12, node14, node8, node9, other, php4, php5.2, php5.3, php5.4, php5.5, php5.6, php7.0, php7.1, php7.2, php7.3, php7.4, php8.0, php8.1, php8.2, php8.3, php8.4, php8.5, python2, python3, ruby2.6)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Cron language (created, creating, deleting, updating)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Cron status (disabled, enabled, suspended)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Cron

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
    <td>Cron's id</td>
</tr>
<tr>
    <td><CopyableCode code="command" /></td>
    <td><code>string</code></td>
    <td>Command to execute</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description field for you</td>
</tr>
<tr>
    <td><CopyableCode code="email" /></td>
    <td><code>string</code></td>
    <td>Email used to receive error log (stderr)</td>
</tr>
<tr>
    <td><CopyableCode code="frequency" /></td>
    <td><code>string</code></td>
    <td>Frequency (crontab format) defined for the script (minutes are ignored)</td>
</tr>
<tr>
    <td><CopyableCode code="language" /></td>
    <td><code>string</code></td>
    <td>Cron language (node10, node11, node12, node14, node8, node9, other, php4, php5.2, php5.3, php5.4, php5.5, php5.6, php7.0, php7.1, php7.2, php7.3, php7.4, php8.0, php8.1, php8.2, php8.3, php8.4, php8.5, python2, python3, ruby2.6)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Cron language (created, creating, deleting, updating)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Cron status (disabled, enabled, suspended)</td>
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
    <td>Returns the command, frequency, language, email and status of the cron job.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-command"><code>command</code></a>, <a href="#parameter-description"><code>description</code></a>, <a href="#parameter-email"><code>email</code></a>, <a href="#parameter-language"><code>language</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>Returns the IDs of the cron jobs of the hosting. Filter them by command, description, email or language.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-command"><code>command</code></a>, <a href="#parameter-frequency"><code>frequency</code></a>, <a href="#parameter-language"><code>language</code></a></td>
    <td></td>
    <td>Creates a cron job that runs a script at a crontab frequency, and returns the task. Minutes in the frequency are ignored. Errors are sent to the email address.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-command"><code>command</code></a>, <a href="#parameter-frequency"><code>frequency</code></a>, <a href="#parameter-language"><code>language</code></a></td>
    <td></td>
    <td>Updates the command, frequency, language, email or description of the cron job. Minutes in the frequency are ignored.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Deletes the cron job and returns the task.</td>
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
<tr id="parameter-command">
    <td><CopyableCode code="command" /></td>
    <td><code>string</code></td>
    <td>Filter the value of command property (like)</td>
</tr>
<tr id="parameter-description">
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Filter the value of description property (like)</td>
</tr>
<tr id="parameter-email">
    <td><CopyableCode code="email" /></td>
    <td><code>string</code></td>
    <td>Filter the value of email property (like)</td>
</tr>
<tr id="parameter-language">
    <td><CopyableCode code="language" /></td>
    <td><code>string</code></td>
    <td>Filter the value of language property (=)</td>
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

Returns the command, frequency, language, email and status of the cron job.

```sql
SELECT
id,
command,
description,
email,
frequency,
language,
state,
status
FROM ovh.hosting_web.crons
WHERE id = '{{ id }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns the IDs of the cron jobs of the hosting. Filter them by command, description, email or language.

```sql
SELECT
id,
command,
description,
email,
frequency,
language,
state,
status
FROM ovh.hosting_web.crons
WHERE service_name = '{{ service_name }}' -- required
AND command = '{{ command }}'
AND description = '{{ description }}'
AND email = '{{ email }}'
AND language = '{{ language }}'
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

Creates a cron job that runs a script at a crontab frequency, and returns the task. Minutes in the frequency are ignored. Errors are sent to the email address.

```sql
INSERT INTO ovh.hosting_web.crons (
command,
description,
email,
frequency,
language,
status,
service_name
)
SELECT 
'{{ command }}' /* required */,
'{{ description }}',
'{{ email }}',
'{{ frequency }}' /* required */,
'{{ language }}' /* required */,
'{{ status }}',
'{{ service_name }}'
RETURNING
id,
object_id,
done_date,
function,
last_update,
object_type,
start_date,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: crons
  props:
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the crons resource.
    - name: command
      value: "{{ command }}"
      description: |
        Command to execute
    - name: description
      value: "{{ description }}"
      description: |
        Description field for you
    - name: email
      value: "{{ email }}"
      description: |
        Email used to receive error log (stderr)
    - name: frequency
      value: "{{ frequency }}"
      description: |
        Frequency (crontab format) defined for the script (minutes are ignored)
    - name: language
      value: "{{ language }}"
      description: |
        Cron language
      valid_values: ['node10', 'node11', 'node12', 'node14', 'node8', 'node9', 'other', 'php4', 'php5.2', 'php5.3', 'php5.4', 'php5.5', 'php5.6', 'php7.0', 'php7.1', 'php7.2', 'php7.3', 'php7.4', 'php8.0', 'php8.1', 'php8.2', 'php8.3', 'php8.4', 'php8.5', 'python2', 'python3', 'ruby2.6']
    - name: status
      value: "{{ status }}"
      description: |
        Cron status
      valid_values: ['disabled', 'enabled', 'suspended']
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

Updates the command, frequency, language, email or description of the cron job. Minutes in the frequency are ignored.

```sql
UPDATE ovh.hosting_web.crons
SET 
command = '{{ command }}',
description = '{{ description }}',
email = '{{ email }}',
frequency = '{{ frequency }}',
language = '{{ language }}',
status = '{{ status }}'
WHERE 
id = '{{ id }}' --required
AND service_name = '{{ service_name }}' --required
AND command = '{{ command }}' --required
AND frequency = '{{ frequency }}' --required
AND language = '{{ language }}' --required;
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

Deletes the cron job and returns the task.

```sql
DELETE FROM ovh.hosting_web.crons
WHERE id = '{{ id }}' --required
AND service_name = '{{ service_name }}' --required
;
```
</TabItem>
</Tabs>
