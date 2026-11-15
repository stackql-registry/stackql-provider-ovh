--- 
title: service_domain_disclaimers
hide_title: false
hide_table_of_contents: false
keywords:
  - service_domain_disclaimers
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

Creates, updates, deletes, gets or lists a <code>service_domain_disclaimers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="service_domain_disclaimers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.email_exchange.service_domain_disclaimers" /></td></tr>
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Disclaimer name</td>
</tr>
<tr>
    <td><CopyableCode code="task_pending_id" /></td>
    <td><code>integer</code></td>
    <td>task pending id (wire: taskPendingId)</td>
</tr>
<tr>
    <td><CopyableCode code="content" /></td>
    <td><code>string</code></td>
    <td>Signature, added at the bottom of your organization emails</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date (wire: creationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="outside_only" /></td>
    <td><code>boolean</code></td>
    <td>Activate the disclaimer only for external emails (wire: outsideOnly)</td>
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
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-exchange_service"><code>exchange_service</code></a>, <a href="#parameter-organization_name"><code>organization_name</code></a></td>
    <td></td>
    <td>Get the disclaimer. Returns the content of the disclaimer added to the emails of the domain, and whether it applies to external emails only.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-exchange_service"><code>exchange_service</code></a>, <a href="#parameter-organization_name"><code>organization_name</code></a>, <a href="#parameter-content"><code>content</code></a></td>
    <td></td>
    <td>Create a disclaimer. Adds a disclaimer at the bottom of the emails of the domain, and returns the task. Set `outsideOnly` to add it to external emails only. Insert Active Directory attributes in `content` as `%%AttributeName%%`.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-exchange_service"><code>exchange_service</code></a>, <a href="#parameter-organization_name"><code>organization_name</code></a></td>
    <td></td>
    <td>Update the disclaimer. Updates the `content` of the disclaimer and `outsideOnly`, which limits it to external emails. Insert Active Directory attributes in `content` as `%%AttributeName%%`.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-exchange_service"><code>exchange_service</code></a>, <a href="#parameter-organization_name"><code>organization_name</code></a></td>
    <td></td>
    <td>Delete the disclaimer. Removes the disclaimer of the domain, so that it is no longer added to the emails sent from it, and returns the task.</td>
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
<tr id="parameter-domain_name">
    <td><CopyableCode code="domain_name" /></td>
    <td><code>string</code></td>
    <td>Domain name (wire: domainName)</td>
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

Get the disclaimer. Returns the content of the disclaimer added to the emails of the domain, and whether it applies to external emails only.

```sql
SELECT
name,
task_pending_id,
content,
creation_date,
outside_only
FROM ovh.email_exchange.service_domain_disclaimers
WHERE domain_name = '{{ domain_name }}' -- required
AND exchange_service = '{{ exchange_service }}' -- required
AND organization_name = '{{ organization_name }}' -- required
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

Create a disclaimer. Adds a disclaimer at the bottom of the emails of the domain, and returns the task. Set `outsideOnly` to add it to external emails only. Insert Active Directory attributes in `content` as `%%AttributeName%%`.

```sql
INSERT INTO ovh.email_exchange.service_domain_disclaimers (
content,
outside_only,
domain_name,
exchange_service,
organization_name
)
SELECT 
'{{ content }}' /* required */,
{{ outside_only }},
'{{ domain_name }}',
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
- name: service_domain_disclaimers
  props:
    - name: domain_name
      value: "{{ domain_name }}"
      description: Required parameter for the service_domain_disclaimers resource.
    - name: exchange_service
      value: "{{ exchange_service }}"
      description: Required parameter for the service_domain_disclaimers resource.
    - name: organization_name
      value: "{{ organization_name }}"
      description: Required parameter for the service_domain_disclaimers resource.
    - name: content
      value: "{{ content }}"
      description: |
        Signature, added at the bottom of your organization emails
    - name: outside_only
      value: {{ outside_only }}
      description: |
        Activate the disclaimer only for external emails
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

Update the disclaimer. Updates the `content` of the disclaimer and `outsideOnly`, which limits it to external emails. Insert Active Directory attributes in `content` as `%%AttributeName%%`.

```sql
UPDATE ovh.email_exchange.service_domain_disclaimers
SET 
content = '{{ content }}',
outside_only = {{ outside_only }}
WHERE 
domain_name = '{{ domain_name }}' --required
AND exchange_service = '{{ exchange_service }}' --required
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

Delete the disclaimer. Removes the disclaimer of the domain, so that it is no longer added to the emails sent from it, and returns the task.

```sql
DELETE FROM ovh.email_exchange.service_domain_disclaimers
WHERE domain_name = '{{ domain_name }}' --required
AND exchange_service = '{{ exchange_service }}' --required
AND organization_name = '{{ organization_name }}' --required
;
```
</TabItem>
</Tabs>
