--- 
title: service_resource_account_delegates
hide_title: false
hide_table_of_contents: false
keywords:
  - service_resource_account_delegates
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

Creates, updates, deletes, gets or lists a <code>service_resource_account_delegates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="service_resource_account_delegates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.email_exchange.service_resource_account_delegates" /></td></tr>
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
    <td><CopyableCode code="allowed_account_id" /></td>
    <td><code>integer</code></td>
    <td>delegate's account id (wire: allowedAccountId)</td>
</tr>
<tr>
    <td><CopyableCode code="task_pending_id" /></td>
    <td><code>integer</code></td>
    <td>task pending id (wire: taskPendingId)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date (wire: creationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="delegate_email_address" /></td>
    <td><code>string</code></td>
    <td>Delegate account primaryEmailAddress (wire: delegateEmailAddress)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Resource accounts delegates

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
    <td><CopyableCode code="allowed_account_id" /></td>
    <td><code>integer</code></td>
    <td>delegate's account id (wire: allowedAccountId)</td>
</tr>
<tr>
    <td><CopyableCode code="task_pending_id" /></td>
    <td><code>integer</code></td>
    <td>task pending id (wire: taskPendingId)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date (wire: creationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="delegate_email_address" /></td>
    <td><code>string</code></td>
    <td>Delegate account primaryEmailAddress (wire: delegateEmailAddress)</td>
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
    <td><a href="#parameter-allowed_account_id"><code>allowed_account_id</code></a>, <a href="#parameter-exchange_service"><code>exchange_service</code></a>, <a href="#parameter-organization_name"><code>organization_name</code></a>, <a href="#parameter-resource_email_address"><code>resource_email_address</code></a></td>
    <td></td>
    <td>Get a resource account delegate. Returns the ID and the email address of the account that manages the bookings of the resource.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-exchange_service"><code>exchange_service</code></a>, <a href="#parameter-organization_name"><code>organization_name</code></a>, <a href="#parameter-resource_email_address"><code>resource_email_address</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List resource account delegates. Returns the IDs of the accounts that are delegates of the resource account.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-exchange_service"><code>exchange_service</code></a>, <a href="#parameter-organization_name"><code>organization_name</code></a>, <a href="#parameter-resource_email_address"><code>resource_email_address</code></a>, <a href="#parameter-allowed_account_id"><code>allowed_account_id</code></a></td>
    <td></td>
    <td>Add a resource account delegate. Adds the account given by `allowedAccountId` as a delegate of the resource account, and returns the task.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-allowed_account_id"><code>allowed_account_id</code></a>, <a href="#parameter-exchange_service"><code>exchange_service</code></a>, <a href="#parameter-organization_name"><code>organization_name</code></a>, <a href="#parameter-resource_email_address"><code>resource_email_address</code></a></td>
    <td></td>
    <td>Remove a resource account delegate. Withdraws from the email account the management of the bookings of the resource, and returns the task.</td>
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
<tr id="parameter-allowed_account_id">
    <td><CopyableCode code="allowed_account_id" /></td>
    <td><code>integer</code></td>
    <td>delegate's account id (wire: allowedAccountId)</td>
</tr>
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

Get a resource account delegate. Returns the ID and the email address of the account that manages the bookings of the resource.

```sql
SELECT
allowed_account_id,
task_pending_id,
creation_date,
delegate_email_address
FROM ovh.email_exchange.service_resource_account_delegates
WHERE allowed_account_id = '{{ allowed_account_id }}' -- required
AND exchange_service = '{{ exchange_service }}' -- required
AND organization_name = '{{ organization_name }}' -- required
AND resource_email_address = '{{ resource_email_address }}' -- required
;
```
</TabItem>
<TabItem value="list">

List resource account delegates. Returns the IDs of the accounts that are delegates of the resource account.

```sql
SELECT
allowed_account_id,
task_pending_id,
creation_date,
delegate_email_address
FROM ovh.email_exchange.service_resource_account_delegates
WHERE exchange_service = '{{ exchange_service }}' -- required
AND organization_name = '{{ organization_name }}' -- required
AND resource_email_address = '{{ resource_email_address }}' -- required
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

Add a resource account delegate. Adds the account given by `allowedAccountId` as a delegate of the resource account, and returns the task.

```sql
INSERT INTO ovh.email_exchange.service_resource_account_delegates (
allowed_account_id,
exchange_service,
organization_name,
resource_email_address
)
SELECT 
{{ allowed_account_id }} /* required */,
'{{ exchange_service }}',
'{{ organization_name }}',
'{{ resource_email_address }}'
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
- name: service_resource_account_delegates
  props:
    - name: exchange_service
      value: "{{ exchange_service }}"
      description: Required parameter for the service_resource_account_delegates resource.
    - name: organization_name
      value: "{{ organization_name }}"
      description: Required parameter for the service_resource_account_delegates resource.
    - name: resource_email_address
      value: "{{ resource_email_address }}"
      description: Required parameter for the service_resource_account_delegates resource.
    - name: allowed_account_id
      value: {{ allowed_account_id }}
      description: |
        delegate's account id
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

Remove a resource account delegate. Withdraws from the email account the management of the bookings of the resource, and returns the task.

```sql
DELETE FROM ovh.email_exchange.service_resource_account_delegates
WHERE allowed_account_id = '{{ allowed_account_id }}' --required
AND exchange_service = '{{ exchange_service }}' --required
AND organization_name = '{{ organization_name }}' --required
AND resource_email_address = '{{ resource_email_address }}' --required
;
```
</TabItem>
</Tabs>
