--- 
title: service_account_archives
hide_title: false
hide_table_of_contents: false
keywords:
  - service_account_archives
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

Creates, updates, deletes, gets or lists a <code>service_account_archives</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="service_account_archives" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.email_exchange.service_account_archives" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
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
    <td><CopyableCode code="task_pending_id" /></td>
    <td><code>integer</code></td>
    <td>Pending task for this archive mailbox (wire: taskPendingId)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date (wire: creationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="current_usage" /></td>
    <td><code>integer</code></td>
    <td>Archive mailbox usage (wire: currentUsage)</td>
</tr>
<tr>
    <td><CopyableCode code="guid" /></td>
    <td><code>string</code></td>
    <td>GUID of archive mailbox</td>
</tr>
<tr>
    <td><CopyableCode code="quota" /></td>
    <td><code>integer</code></td>
    <td>Archive mailbox maximum size in GB</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Archive mailbox state (creating, deleting, internalMigration, ok, reopening, suspended, suspending)</td>
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
    <td><a href="#parameter-exchange_service"><code>exchange_service</code></a>, <a href="#parameter-organization_name"><code>organization_name</code></a>, <a href="#parameter-primary_email_address"><code>primary_email_address</code></a></td>
    <td></td>
    <td>Get the archive mailbox. Returns the quota in GB, the usage, the state and the creation date of the archive mailbox.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-exchange_service"><code>exchange_service</code></a>, <a href="#parameter-organization_name"><code>organization_name</code></a>, <a href="#parameter-primary_email_address"><code>primary_email_address</code></a></td>
    <td></td>
    <td>Create an archive mailbox. Creates the archive mailbox of the email account and returns the task. Without `quota`, the archive gets the quota of the mailbox.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-exchange_service"><code>exchange_service</code></a>, <a href="#parameter-organization_name"><code>organization_name</code></a>, <a href="#parameter-primary_email_address"><code>primary_email_address</code></a></td>
    <td></td>
    <td>Update the archive mailbox quota. Sets the maximum size of the archive mailbox of the email account (`quota`, in GB).</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-exchange_service"><code>exchange_service</code></a>, <a href="#parameter-organization_name"><code>organization_name</code></a>, <a href="#parameter-primary_email_address"><code>primary_email_address</code></a></td>
    <td></td>
    <td>Delete the archive mailbox. Deletes the archive mailbox of the email account with the emails archived in it, and returns the task.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

Get the archive mailbox. Returns the quota in GB, the usage, the state and the creation date of the archive mailbox.

```sql
SELECT
task_pending_id,
creation_date,
current_usage,
guid,
quota,
state
FROM ovh.email_exchange.service_account_archives
WHERE exchange_service = '{{ exchange_service }}' -- required
AND organization_name = '{{ organization_name }}' -- required
AND primary_email_address = '{{ primary_email_address }}' -- required
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

Create an archive mailbox. Creates the archive mailbox of the email account and returns the task. Without `quota`, the archive gets the quota of the mailbox.

```sql
INSERT INTO ovh.email_exchange.service_account_archives (
quota,
exchange_service,
organization_name,
primary_email_address
)
SELECT 
{{ quota }},
'{{ exchange_service }}',
'{{ organization_name }}',
'{{ primary_email_address }}'
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
- name: service_account_archives
  props:
    - name: exchange_service
      value: "{{ exchange_service }}"
      description: Required parameter for the service_account_archives resource.
    - name: organization_name
      value: "{{ organization_name }}"
      description: Required parameter for the service_account_archives resource.
    - name: primary_email_address
      value: "{{ primary_email_address }}"
      description: Required parameter for the service_account_archives resource.
    - name: quota
      value: {{ quota }}
      description: |
        Archive mailbox quota (if not provided mailbox quota will be taken)
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

Update the archive mailbox quota. Sets the maximum size of the archive mailbox of the email account (`quota`, in GB).

```sql
UPDATE ovh.email_exchange.service_account_archives
SET 
quota = {{ quota }}
WHERE 
exchange_service = '{{ exchange_service }}' --required
AND organization_name = '{{ organization_name }}' --required
AND primary_email_address = '{{ primary_email_address }}' --required;
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

Delete the archive mailbox. Deletes the archive mailbox of the email account with the emails archived in it, and returns the task.

```sql
DELETE FROM ovh.email_exchange.service_account_archives
WHERE exchange_service = '{{ exchange_service }}' --required
AND organization_name = '{{ organization_name }}' --required
AND primary_email_address = '{{ primary_email_address }}' --required
;
```
</TabItem>
</Tabs>
