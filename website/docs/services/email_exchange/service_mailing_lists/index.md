--- 
title: service_mailing_lists
hide_title: false
hide_table_of_contents: false
keywords:
  - service_mailing_lists
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

Creates, updates, deletes, gets or lists a <code>service_mailing_lists</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="service_mailing_lists" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.email_exchange.service_mailing_lists" /></td></tr>
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
    <td>Mailing list id</td>
</tr>
<tr>
    <td><CopyableCode code="task_pending_id" /></td>
    <td><code>integer</code></td>
    <td>Task pending id (wire: taskPendingId)</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>Name displayed in Global Access List (wire: displayName)</td>
</tr>
<tr>
    <td><CopyableCode code="company" /></td>
    <td><code>string</code></td>
    <td>Company name</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date (wire: creationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="depart_restriction" /></td>
    <td><code>string</code></td>
    <td>Depart restriction policy (closed, open) (wire: departRestriction)</td>
</tr>
<tr>
    <td><CopyableCode code="hidden_from_gal" /></td>
    <td><code>boolean</code></td>
    <td>If true mailing list is hiddend in Global Address List (wire: hiddenFromGAL)</td>
</tr>
<tr>
    <td><CopyableCode code="join_restriction" /></td>
    <td><code>string</code></td>
    <td>Join restriction policy (approvalRequired, closed, open) (wire: joinRestriction)</td>
</tr>
<tr>
    <td><CopyableCode code="last_update_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Update date (wire: lastUpdateDate)</td>
</tr>
<tr>
    <td><CopyableCode code="mailing_list_address" /></td>
    <td><code>string</code></td>
    <td>The mailing list address (wire: mailingListAddress)</td>
</tr>
<tr>
    <td><CopyableCode code="max_receive_size" /></td>
    <td><code>integer</code></td>
    <td>Maximum receive email size in MB (wire: maxReceiveSize)</td>
</tr>
<tr>
    <td><CopyableCode code="max_send_size" /></td>
    <td><code>integer</code></td>
    <td>Maximum send email size in MB (wire: maxSendSize)</td>
</tr>
<tr>
    <td><CopyableCode code="sender_authentification" /></td>
    <td><code>boolean</code></td>
    <td>If true sender has to authenticate (wire: senderAuthentification)</td>
</tr>
<tr>
    <td><CopyableCode code="spam_detected" /></td>
    <td><code>boolean</code></td>
    <td>Account was sending spam (wire: spamDetected)</td>
</tr>
<tr>
    <td><CopyableCode code="spam_ticket_number" /></td>
    <td><code>integer</code></td>
    <td>Ticket number of spam detection (wire: spamTicketNumber)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Mailing list state (creating, deleting, internalMigration, ok, reopening, suspended, suspending)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Mailing list

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
    <td>Mailing list id</td>
</tr>
<tr>
    <td><CopyableCode code="task_pending_id" /></td>
    <td><code>integer</code></td>
    <td>Task pending id (wire: taskPendingId)</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>Name displayed in Global Access List (wire: displayName)</td>
</tr>
<tr>
    <td><CopyableCode code="company" /></td>
    <td><code>string</code></td>
    <td>Company name</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date (wire: creationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="depart_restriction" /></td>
    <td><code>string</code></td>
    <td>Depart restriction policy (closed, open) (wire: departRestriction)</td>
</tr>
<tr>
    <td><CopyableCode code="hidden_from_gal" /></td>
    <td><code>boolean</code></td>
    <td>If true mailing list is hiddend in Global Address List (wire: hiddenFromGAL)</td>
</tr>
<tr>
    <td><CopyableCode code="join_restriction" /></td>
    <td><code>string</code></td>
    <td>Join restriction policy (approvalRequired, closed, open) (wire: joinRestriction)</td>
</tr>
<tr>
    <td><CopyableCode code="last_update_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Update date (wire: lastUpdateDate)</td>
</tr>
<tr>
    <td><CopyableCode code="mailing_list_address" /></td>
    <td><code>string</code></td>
    <td>The mailing list address (wire: mailingListAddress)</td>
</tr>
<tr>
    <td><CopyableCode code="max_receive_size" /></td>
    <td><code>integer</code></td>
    <td>Maximum receive email size in MB (wire: maxReceiveSize)</td>
</tr>
<tr>
    <td><CopyableCode code="max_send_size" /></td>
    <td><code>integer</code></td>
    <td>Maximum send email size in MB (wire: maxSendSize)</td>
</tr>
<tr>
    <td><CopyableCode code="sender_authentification" /></td>
    <td><code>boolean</code></td>
    <td>If true sender has to authenticate (wire: senderAuthentification)</td>
</tr>
<tr>
    <td><CopyableCode code="spam_detected" /></td>
    <td><code>boolean</code></td>
    <td>Account was sending spam (wire: spamDetected)</td>
</tr>
<tr>
    <td><CopyableCode code="spam_ticket_number" /></td>
    <td><code>integer</code></td>
    <td>Ticket number of spam detection (wire: spamTicketNumber)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Mailing list state (creating, deleting, internalMigration, ok, reopening, suspended, suspending)</td>
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
    <td><a href="#parameter-exchange_service"><code>exchange_service</code></a>, <a href="#parameter-mailing_list_address"><code>mailing_list_address</code></a>, <a href="#parameter-organization_name"><code>organization_name</code></a></td>
    <td></td>
    <td>Get a group. Returns the address, display name, join and depart restrictions, size limits, sender authentication and state of the group.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-exchange_service"><code>exchange_service</code></a>, <a href="#parameter-organization_name"><code>organization_name</code></a></td>
    <td><a href="#parameter-company"><code>company</code></a>, <a href="#parameter-mailing_list_address"><code>mailing_list_address</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List groups. Returns the email addresses of the groups (distribution lists) of the service. Filter them by `mailingListAddress` or `company`.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-exchange_service"><code>exchange_service</code></a>, <a href="#parameter-organization_name"><code>organization_name</code></a>, <a href="#parameter-depart_restriction"><code>depart_restriction</code></a>, <a href="#parameter-join_restriction"><code>join_restriction</code></a>, <a href="#parameter-mailing_list_address"><code>mailing_list_address</code></a></td>
    <td></td>
    <td>Create a group. Creates a group from its `mailingListAddress` and its join and depart restrictions, and returns the task.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-exchange_service"><code>exchange_service</code></a>, <a href="#parameter-mailing_list_address"><code>mailing_list_address</code></a>, <a href="#parameter-organization_name"><code>organization_name</code></a></td>
    <td></td>
    <td>Update a group. Updates the address, display name, join and depart restrictions, size limits, sender authentication and Global Address List visibility of the group.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-exchange_service"><code>exchange_service</code></a>, <a href="#parameter-mailing_list_address"><code>mailing_list_address</code></a>, <a href="#parameter-organization_name"><code>organization_name</code></a></td>
    <td></td>
    <td>Delete a group. Deletes the group with its aliases and permissions, and returns the task. Its members keep their own accounts.</td>
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
<tr id="parameter-organization_name">
    <td><CopyableCode code="organization_name" /></td>
    <td><code>string</code></td>
    <td>The internal name of your exchange organization (wire: organizationName)</td>
</tr>
<tr id="parameter-company">
    <td><CopyableCode code="company" /></td>
    <td><code>string</code></td>
    <td>Filter the value of company property (like)</td>
</tr>
<tr id="parameter-mailing_list_address">
    <td><CopyableCode code="mailing_list_address" /></td>
    <td><code>string</code></td>
    <td>Filter the value of mailingListAddress property (like) (wire: mailingListAddress)</td>
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

Get a group. Returns the address, display name, join and depart restrictions, size limits, sender authentication and state of the group.

```sql
SELECT
id,
task_pending_id,
display_name,
company,
creation_date,
depart_restriction,
hidden_from_gal,
join_restriction,
last_update_date,
mailing_list_address,
max_receive_size,
max_send_size,
sender_authentification,
spam_detected,
spam_ticket_number,
state
FROM ovh.email_exchange.service_mailing_lists
WHERE exchange_service = '{{ exchange_service }}' -- required
AND mailing_list_address = '{{ mailing_list_address }}' -- required
AND organization_name = '{{ organization_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List groups. Returns the email addresses of the groups (distribution lists) of the service. Filter them by `mailingListAddress` or `company`.

```sql
SELECT
id,
task_pending_id,
display_name,
company,
creation_date,
depart_restriction,
hidden_from_gal,
join_restriction,
last_update_date,
mailing_list_address,
max_receive_size,
max_send_size,
sender_authentification,
spam_detected,
spam_ticket_number,
state
FROM ovh.email_exchange.service_mailing_lists
WHERE exchange_service = '{{ exchange_service }}' -- required
AND organization_name = '{{ organization_name }}' -- required
AND company = '{{ company }}'
AND mailing_list_address = '{{ mailing_list_address }}'
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

Create a group. Creates a group from its `mailingListAddress` and its join and depart restrictions, and returns the task.

```sql
INSERT INTO ovh.email_exchange.service_mailing_lists (
company,
depart_restriction,
display_name,
hidden_from_gal,
join_restriction,
mailing_list_address,
max_receive_size,
max_send_size,
sender_authentification,
exchange_service,
organization_name
)
SELECT 
'{{ company }}',
'{{ depart_restriction }}' /* required */,
'{{ display_name }}',
{{ hidden_from_gal }},
'{{ join_restriction }}' /* required */,
'{{ mailing_list_address }}' /* required */,
{{ max_receive_size }},
{{ max_send_size }},
{{ sender_authentification }},
'{{ exchange_service }}',
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
- name: service_mailing_lists
  props:
    - name: exchange_service
      value: "{{ exchange_service }}"
      description: Required parameter for the service_mailing_lists resource.
    - name: organization_name
      value: "{{ organization_name }}"
      description: Required parameter for the service_mailing_lists resource.
    - name: company
      value: "{{ company }}"
      description: |
        Company name
    - name: depart_restriction
      value: "{{ depart_restriction }}"
      description: |
        Depart restriction policy
      valid_values: ['closed', 'open']
    - name: display_name
      value: "{{ display_name }}"
      description: |
        Name displayed in Global Access List
    - name: hidden_from_gal
      value: {{ hidden_from_gal }}
      description: |
        If true mailing list is hiddend in Global Address List
    - name: join_restriction
      value: "{{ join_restriction }}"
      description: |
        Join restriction policy
      valid_values: ['approvalRequired', 'closed', 'open']
    - name: mailing_list_address
      value: "{{ mailing_list_address }}"
      description: |
        The mailing list address
    - name: max_receive_size
      value: {{ max_receive_size }}
      description: |
        Maximum receive email size in MB
    - name: max_send_size
      value: {{ max_send_size }}
      description: |
        Maximum send email size in MB
    - name: sender_authentification
      value: {{ sender_authentification }}
      description: |
        If true sender has to authenticate
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

Update a group. Updates the address, display name, join and depart restrictions, size limits, sender authentication and Global Address List visibility of the group.

```sql
UPDATE ovh.email_exchange.service_mailing_lists
SET 
company = '{{ company }}',
depart_restriction = '{{ depart_restriction }}',
display_name = '{{ display_name }}',
hidden_from_gal = {{ hidden_from_gal }},
join_restriction = '{{ join_restriction }}',
mailing_list_address = '{{ mailing_list_address }}',
max_receive_size = {{ max_receive_size }},
max_send_size = {{ max_send_size }},
sender_authentification = {{ sender_authentification }}
WHERE 
exchange_service = '{{ exchange_service }}' --required
AND mailing_list_address = '{{ mailing_list_address }}' --required
AND organization_name = '{{ organization_name }}' --required;
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

Delete a group. Deletes the group with its aliases and permissions, and returns the task. Its members keep their own accounts.

```sql
DELETE FROM ovh.email_exchange.service_mailing_lists
WHERE exchange_service = '{{ exchange_service }}' --required
AND mailing_list_address = '{{ mailing_list_address }}' --required
AND organization_name = '{{ organization_name }}' --required
;
```
</TabItem>
</Tabs>
