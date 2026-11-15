--- 
title: service_resource_accounts
hide_title: false
hide_table_of_contents: false
keywords:
  - service_resource_accounts
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

Creates, updates, deletes, gets or lists a <code>service_resource_accounts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="service_resource_accounts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.email_exchange.service_resource_accounts" /></td></tr>
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
    <td><CopyableCode code="task_pending_id" /></td>
    <td><code>integer</code></td>
    <td>task pending id (wire: taskPendingId)</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>name of resource (wire: displayName)</td>
</tr>
<tr>
    <td><CopyableCode code="add_organizer_to_subject" /></td>
    <td><code>boolean</code></td>
    <td>meeting organizer's name is used as the subject of the meeting request (wire: addOrganizerToSubject)</td>
</tr>
<tr>
    <td><CopyableCode code="allow_conflict" /></td>
    <td><code>boolean</code></td>
    <td>resource can be scheduled by more than one person during the same time period (wire: allowConflict)</td>
</tr>
<tr>
    <td><CopyableCode code="booking_window" /></td>
    <td><code>integer</code></td>
    <td>maximum number of days in advance that the resource can be reserved (wire: bookingWindow)</td>
</tr>
<tr>
    <td><CopyableCode code="capacity" /></td>
    <td><code>integer</code></td>
    <td>number of the same equipment or capacity of a room</td>
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
    <td><CopyableCode code="delete_comments" /></td>
    <td><code>boolean</code></td>
    <td>remove any text in the message body of incoming meeting requests on resourceAccount (wire: deleteComments)</td>
</tr>
<tr>
    <td><CopyableCode code="delete_subject" /></td>
    <td><code>boolean</code></td>
    <td>remove email subject of incoming meeting requests on resourceAccount (wire: deleteSubject)</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>string</code></td>
    <td>resource location name</td>
</tr>
<tr>
    <td><CopyableCode code="maximum_duration" /></td>
    <td><code>integer</code></td>
    <td>maximum duration in minutes for meeting requests (wire: maximumDuration)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_email_address" /></td>
    <td><code>string</code></td>
    <td>resource as email (wire: resourceEmailAddress)</td>
</tr>
<tr>
    <td><CopyableCode code="show_meeting_details" /></td>
    <td><code>string</code></td>
    <td>granted right on a calendar of that resourceAccount (availabilityOnly, limitedDetails, reviewer) (wire: showMeetingDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>account state (creating, deleting, internalMigration, ok, reopening, suspended, suspending)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>resource type (equipment, room)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Exchange resource account

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
    <td>task pending id (wire: taskPendingId)</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>name of resource (wire: displayName)</td>
</tr>
<tr>
    <td><CopyableCode code="add_organizer_to_subject" /></td>
    <td><code>boolean</code></td>
    <td>meeting organizer's name is used as the subject of the meeting request (wire: addOrganizerToSubject)</td>
</tr>
<tr>
    <td><CopyableCode code="allow_conflict" /></td>
    <td><code>boolean</code></td>
    <td>resource can be scheduled by more than one person during the same time period (wire: allowConflict)</td>
</tr>
<tr>
    <td><CopyableCode code="booking_window" /></td>
    <td><code>integer</code></td>
    <td>maximum number of days in advance that the resource can be reserved (wire: bookingWindow)</td>
</tr>
<tr>
    <td><CopyableCode code="capacity" /></td>
    <td><code>integer</code></td>
    <td>number of the same equipment or capacity of a room</td>
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
    <td><CopyableCode code="delete_comments" /></td>
    <td><code>boolean</code></td>
    <td>remove any text in the message body of incoming meeting requests on resourceAccount (wire: deleteComments)</td>
</tr>
<tr>
    <td><CopyableCode code="delete_subject" /></td>
    <td><code>boolean</code></td>
    <td>remove email subject of incoming meeting requests on resourceAccount (wire: deleteSubject)</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>string</code></td>
    <td>resource location name</td>
</tr>
<tr>
    <td><CopyableCode code="maximum_duration" /></td>
    <td><code>integer</code></td>
    <td>maximum duration in minutes for meeting requests (wire: maximumDuration)</td>
</tr>
<tr>
    <td><CopyableCode code="resource_email_address" /></td>
    <td><code>string</code></td>
    <td>resource as email (wire: resourceEmailAddress)</td>
</tr>
<tr>
    <td><CopyableCode code="show_meeting_details" /></td>
    <td><code>string</code></td>
    <td>granted right on a calendar of that resourceAccount (availabilityOnly, limitedDetails, reviewer) (wire: showMeetingDetails)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>account state (creating, deleting, internalMigration, ok, reopening, suspended, suspending)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>resource type (equipment, room)</td>
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
    <td><a href="#parameter-exchange_service"><code>exchange_service</code></a>, <a href="#parameter-organization_name"><code>organization_name</code></a>, <a href="#parameter-resource_email_address"><code>resource_email_address</code></a></td>
    <td></td>
    <td>Get a resource account. Returns the type, capacity, location, booking settings and state of the room or equipment resource account.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-exchange_service"><code>exchange_service</code></a>, <a href="#parameter-organization_name"><code>organization_name</code></a></td>
    <td><a href="#parameter-company"><code>company</code></a>, <a href="#parameter-resource_email_address"><code>resource_email_address</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List resource accounts. Returns the email addresses of the room and equipment resource accounts. Filter them by `resourceEmailAddress` or `company`.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-exchange_service"><code>exchange_service</code></a>, <a href="#parameter-organization_name"><code>organization_name</code></a>, <a href="#parameter-capacity"><code>capacity</code></a>, <a href="#parameter-resource_email_address"><code>resource_email_address</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td></td>
    <td>Create a resource account. Creates a room or equipment resource account from its `resourceEmailAddress` and `capacity`, and returns the task.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-exchange_service"><code>exchange_service</code></a>, <a href="#parameter-organization_name"><code>organization_name</code></a>, <a href="#parameter-resource_email_address"><code>resource_email_address</code></a></td>
    <td></td>
    <td>Update a resource account. Updates the display name, capacity, location and booking settings of the resource account, such as `allowConflict`, `bookingWindow` or `maximumDuration`.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-exchange_service"><code>exchange_service</code></a>, <a href="#parameter-organization_name"><code>organization_name</code></a>, <a href="#parameter-resource_email_address"><code>resource_email_address</code></a></td>
    <td></td>
    <td>Delete a resource account. Deletes the resource account (room or equipment) and its delegates, and returns the task.</td>
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
<tr id="parameter-resource_email_address">
    <td><CopyableCode code="resource_email_address" /></td>
    <td><code>string</code></td>
    <td>resource as email (wire: resourceEmailAddress)</td>
</tr>
<tr id="parameter-company">
    <td><CopyableCode code="company" /></td>
    <td><code>string</code></td>
    <td>Filter the value of company property (like)</td>
</tr>
<tr id="parameter-resource_email_address">
    <td><CopyableCode code="resource_email_address" /></td>
    <td><code>string</code></td>
    <td>Filter the value of resourceEmailAddress property (like) (wire: resourceEmailAddress)</td>
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

Get a resource account. Returns the type, capacity, location, booking settings and state of the room or equipment resource account.

```sql
SELECT
task_pending_id,
display_name,
add_organizer_to_subject,
allow_conflict,
booking_window,
capacity,
company,
creation_date,
delete_comments,
delete_subject,
location,
maximum_duration,
resource_email_address,
show_meeting_details,
state,
type
FROM ovh.email_exchange.service_resource_accounts
WHERE exchange_service = '{{ exchange_service }}' -- required
AND organization_name = '{{ organization_name }}' -- required
AND resource_email_address = '{{ resource_email_address }}' -- required
;
```
</TabItem>
<TabItem value="list">

List resource accounts. Returns the email addresses of the room and equipment resource accounts. Filter them by `resourceEmailAddress` or `company`.

```sql
SELECT
task_pending_id,
display_name,
add_organizer_to_subject,
allow_conflict,
booking_window,
capacity,
company,
creation_date,
delete_comments,
delete_subject,
location,
maximum_duration,
resource_email_address,
show_meeting_details,
state,
type
FROM ovh.email_exchange.service_resource_accounts
WHERE exchange_service = '{{ exchange_service }}' -- required
AND organization_name = '{{ organization_name }}' -- required
AND company = '{{ company }}'
AND resource_email_address = '{{ resource_email_address }}'
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

Create a resource account. Creates a room or equipment resource account from its `resourceEmailAddress` and `capacity`, and returns the task.

```sql
INSERT INTO ovh.email_exchange.service_resource_accounts (
add_organizer_to_subject,
allow_conflict,
booking_window,
capacity,
company,
delete_comments,
delete_subject,
display_name,
location,
maximum_duration,
resource_email_address,
show_meeting_details,
type,
exchange_service,
organization_name
)
SELECT 
{{ add_organizer_to_subject }},
{{ allow_conflict }},
{{ booking_window }},
{{ capacity }} /* required */,
'{{ company }}',
{{ delete_comments }},
{{ delete_subject }},
'{{ display_name }}',
'{{ location }}',
{{ maximum_duration }},
'{{ resource_email_address }}' /* required */,
'{{ show_meeting_details }}',
'{{ type }}' /* required */,
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
- name: service_resource_accounts
  props:
    - name: exchange_service
      value: "{{ exchange_service }}"
      description: Required parameter for the service_resource_accounts resource.
    - name: organization_name
      value: "{{ organization_name }}"
      description: Required parameter for the service_resource_accounts resource.
    - name: add_organizer_to_subject
      value: {{ add_organizer_to_subject }}
      description: |
        meeting organizer's name is used as the subject of the meeting request
    - name: allow_conflict
      value: {{ allow_conflict }}
      description: |
        resource can be scheduled by more than one person during the same time period
    - name: booking_window
      value: {{ booking_window }}
      description: |
        maximum number of days in advance that the resource can be reserved
    - name: capacity
      value: {{ capacity }}
      description: |
        number of the same equipment or capacity of a room
    - name: company
      value: "{{ company }}"
      description: |
        Company name
    - name: delete_comments
      value: {{ delete_comments }}
      description: |
        remove any text in the message body of incoming meeting requests on resourceAccount
    - name: delete_subject
      value: {{ delete_subject }}
      description: |
        remove email subject of incoming meeting requests on resourceAccount
    - name: display_name
      value: "{{ display_name }}"
      description: |
        resource account display name
    - name: location
      value: "{{ location }}"
      description: |
        resource location
    - name: maximum_duration
      value: {{ maximum_duration }}
      description: |
        maximum duration in minutes for meeting requests
    - name: resource_email_address
      value: "{{ resource_email_address }}"
      description: |
        resource address
    - name: show_meeting_details
      value: "{{ show_meeting_details }}"
      description: |
        granted right on a calendar of that resourceAccount
      valid_values: ['availabilityOnly', 'limitedDetails', 'reviewer']
    - name: type
      value: "{{ type }}"
      description: |
        type of your reservation
      valid_values: ['equipment', 'room']
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

Update a resource account. Updates the display name, capacity, location and booking settings of the resource account, such as `allowConflict`, `bookingWindow` or `maximumDuration`.

```sql
UPDATE ovh.email_exchange.service_resource_accounts
SET 
add_organizer_to_subject = {{ add_organizer_to_subject }},
allow_conflict = {{ allow_conflict }},
booking_window = {{ booking_window }},
capacity = {{ capacity }},
company = '{{ company }}',
delete_comments = {{ delete_comments }},
delete_subject = {{ delete_subject }},
display_name = '{{ display_name }}',
location = '{{ location }}',
maximum_duration = {{ maximum_duration }},
resource_email_address = '{{ resource_email_address }}',
show_meeting_details = '{{ show_meeting_details }}'
WHERE 
exchange_service = '{{ exchange_service }}' --required
AND organization_name = '{{ organization_name }}' --required
AND resource_email_address = '{{ resource_email_address }}' --required;
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

Delete a resource account. Deletes the resource account (room or equipment) and its delegates, and returns the task.

```sql
DELETE FROM ovh.email_exchange.service_resource_accounts
WHERE exchange_service = '{{ exchange_service }}' --required
AND organization_name = '{{ organization_name }}' --required
AND resource_email_address = '{{ resource_email_address }}' --required
;
```
</TabItem>
</Tabs>
