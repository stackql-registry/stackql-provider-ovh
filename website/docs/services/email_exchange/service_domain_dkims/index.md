--- 
title: service_domain_dkims
hide_title: false
hide_table_of_contents: false
keywords:
  - service_domain_dkims
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

Creates, updates, deletes, gets or lists a <code>service_domain_dkims</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="service_domain_dkims" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.email_exchange.service_domain_dkims" /></td></tr>
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
    <td>Pending task for this DKIM (wire: taskPendingId)</td>
</tr>
<tr>
    <td><CopyableCode code="selector_name" /></td>
    <td><code>string</code></td>
    <td>selectorName (wire: selectorName)</td>
</tr>
<tr>
    <td><CopyableCode code="cname_is_valid" /></td>
    <td><code>boolean</code></td>
    <td>If true your dns cname configuration is valid (wire: cnameIsValid)</td>
</tr>
<tr>
    <td><CopyableCode code="customer_record" /></td>
    <td><code>string</code></td>
    <td>customer dns record (wire: customerRecord)</td>
</tr>
<tr>
    <td><CopyableCode code="header" /></td>
    <td><code>string</code></td>
    <td>header used for dkim signature</td>
</tr>
<tr>
    <td><CopyableCode code="last_update" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last update date (wire: lastUpdate)</td>
</tr>
<tr>
    <td><CopyableCode code="record_type" /></td>
    <td><code>string</code></td>
    <td>Record type of the customer record (wire: recordType)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>dkim status (deleting, disabling, enabling, inProduction, ready, todo, waitingRecord)</td>
</tr>
<tr>
    <td><CopyableCode code="target_record" /></td>
    <td><code>string</code></td>
    <td>Target of the customer record (wire: targetRecord)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

DKIM for a domain

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
    <td>Pending task for this DKIM (wire: taskPendingId)</td>
</tr>
<tr>
    <td><CopyableCode code="selector_name" /></td>
    <td><code>string</code></td>
    <td>selectorName (wire: selectorName)</td>
</tr>
<tr>
    <td><CopyableCode code="cname_is_valid" /></td>
    <td><code>boolean</code></td>
    <td>If true your dns cname configuration is valid (wire: cnameIsValid)</td>
</tr>
<tr>
    <td><CopyableCode code="customer_record" /></td>
    <td><code>string</code></td>
    <td>customer dns record (wire: customerRecord)</td>
</tr>
<tr>
    <td><CopyableCode code="header" /></td>
    <td><code>string</code></td>
    <td>header used for dkim signature</td>
</tr>
<tr>
    <td><CopyableCode code="last_update" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last update date (wire: lastUpdate)</td>
</tr>
<tr>
    <td><CopyableCode code="record_type" /></td>
    <td><code>string</code></td>
    <td>Record type of the customer record (wire: recordType)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>dkim status (deleting, disabling, enabling, inProduction, ready, todo, waitingRecord)</td>
</tr>
<tr>
    <td><CopyableCode code="target_record" /></td>
    <td><code>string</code></td>
    <td>Target of the customer record (wire: targetRecord)</td>
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
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-exchange_service"><code>exchange_service</code></a>, <a href="#parameter-organization_name"><code>organization_name</code></a>, <a href="#parameter-selector_name"><code>selector_name</code></a></td>
    <td></td>
    <td>Get a DKIM selector. Returns the status of the DKIM selector, the DNS record to create (name, type and target) and whether the CNAME record is valid.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-exchange_service"><code>exchange_service</code></a>, <a href="#parameter-organization_name"><code>organization_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List DKIM selectors. Returns the names of the DKIM selectors of the domain. Get one to read its DNS record and its status.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-exchange_service"><code>exchange_service</code></a>, <a href="#parameter-organization_name"><code>organization_name</code></a>, <a href="#parameter-selector_name"><code>selector_name</code></a></td>
    <td></td>
    <td>Create a DKIM selector. Creates a DKIM selector on the domain and returns the task. For a domain hosted by OVHcloud, `configureDkim` creates the DNS record and `autoEnableDKIM` enables the selector once configured.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-exchange_service"><code>exchange_service</code></a>, <a href="#parameter-organization_name"><code>organization_name</code></a>, <a href="#parameter-selector_name"><code>selector_name</code></a></td>
    <td></td>
    <td>Delete a DKIM selector. Removes the DKIM selector and its key from the domain of the Exchange service, and returns the task.</td>
</tr>
<tr>
    <td><a href="#disable"><CopyableCode code="disable" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-domainName"><code>domainName</code></a>, <a href="#parameter-exchangeService"><code>exchangeService</code></a>, <a href="#parameter-organizationName"><code>organizationName</code></a>, <a href="#parameter-selectorName"><code>selectorName</code></a></td>
    <td></td>
    <td>Disable DKIM signing. Stops signing the emails of the domain with this DKIM selector, and returns the task. The selector is kept.</td>
</tr>
<tr>
    <td><a href="#enable"><CopyableCode code="enable" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-domainName"><code>domainName</code></a>, <a href="#parameter-exchangeService"><code>exchangeService</code></a>, <a href="#parameter-organizationName"><code>organizationName</code></a>, <a href="#parameter-selectorName"><code>selectorName</code></a></td>
    <td></td>
    <td>Enable DKIM signing. Enables DKIM signing with the selector, or switches the selector in use to this one, and returns the task.</td>
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
<tr id="parameter-domainName">
    <td><CopyableCode code="domainName" /></td>
    <td><code>string</code></td>
    <td>Domain name</td>
</tr>
<tr id="parameter-domain_name">
    <td><CopyableCode code="domain_name" /></td>
    <td><code>string</code></td>
    <td>Domain name (wire: domainName)</td>
</tr>
<tr id="parameter-exchangeService">
    <td><CopyableCode code="exchangeService" /></td>
    <td><code>string</code></td>
    <td>The internal name of your exchange service</td>
</tr>
<tr id="parameter-exchange_service">
    <td><CopyableCode code="exchange_service" /></td>
    <td><code>string</code></td>
    <td>The internal name of your exchange service (wire: exchangeService)</td>
</tr>
<tr id="parameter-organizationName">
    <td><CopyableCode code="organizationName" /></td>
    <td><code>string</code></td>
    <td>The internal name of your exchange organization</td>
</tr>
<tr id="parameter-organization_name">
    <td><CopyableCode code="organization_name" /></td>
    <td><code>string</code></td>
    <td>The internal name of your exchange organization (wire: organizationName)</td>
</tr>
<tr id="parameter-selectorName">
    <td><CopyableCode code="selectorName" /></td>
    <td><code>string</code></td>
    <td>selectorName</td>
</tr>
<tr id="parameter-selector_name">
    <td><CopyableCode code="selector_name" /></td>
    <td><code>string</code></td>
    <td>selectorName (wire: selectorName)</td>
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

Get a DKIM selector. Returns the status of the DKIM selector, the DNS record to create (name, type and target) and whether the CNAME record is valid.

```sql
SELECT
task_pending_id,
selector_name,
cname_is_valid,
customer_record,
header,
last_update,
record_type,
status,
target_record
FROM ovh.email_exchange.service_domain_dkims
WHERE domain_name = '{{ domain_name }}' -- required
AND exchange_service = '{{ exchange_service }}' -- required
AND organization_name = '{{ organization_name }}' -- required
AND selector_name = '{{ selector_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List DKIM selectors. Returns the names of the DKIM selectors of the domain. Get one to read its DNS record and its status.

```sql
SELECT
task_pending_id,
selector_name,
cname_is_valid,
customer_record,
header,
last_update,
record_type,
status,
target_record
FROM ovh.email_exchange.service_domain_dkims
WHERE domain_name = '{{ domain_name }}' -- required
AND exchange_service = '{{ exchange_service }}' -- required
AND organization_name = '{{ organization_name }}' -- required
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

Create a DKIM selector. Creates a DKIM selector on the domain and returns the task. For a domain hosted by OVHcloud, `configureDkim` creates the DNS record and `autoEnableDKIM` enables the selector once configured.

```sql
INSERT INTO ovh.email_exchange.service_domain_dkims (
auto_enable_dkim,
configure_dkim,
selector_name,
domain_name,
exchange_service,
organization_name
)
SELECT 
{{ auto_enable_dkim }},
{{ configure_dkim }},
'{{ selector_name }}' /* required */,
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
- name: service_domain_dkims
  props:
    - name: domain_name
      value: "{{ domain_name }}"
      description: Required parameter for the service_domain_dkims resource.
    - name: exchange_service
      value: "{{ exchange_service }}"
      description: Required parameter for the service_domain_dkims resource.
    - name: organization_name
      value: "{{ organization_name }}"
      description: Required parameter for the service_domain_dkims resource.
    - name: auto_enable_dkim
      value: {{ auto_enable_dkim }}
      description: |
        Enable DKIM automatically after DKIM configuration
    - name: configure_dkim
      value: {{ configure_dkim }}
      description: |
        If you host domain in OVH we can configure dkim dns record automatically
    - name: selector_name
      value: "{{ selector_name }}"
      description: |
        selector name for DKIM
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

Delete a DKIM selector. Removes the DKIM selector and its key from the domain of the Exchange service, and returns the task.

```sql
DELETE FROM ovh.email_exchange.service_domain_dkims
WHERE domain_name = '{{ domain_name }}' --required
AND exchange_service = '{{ exchange_service }}' --required
AND organization_name = '{{ organization_name }}' --required
AND selector_name = '{{ selector_name }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="disable"
    values={[
        { label: 'disable', value: 'disable' },
        { label: 'enable', value: 'enable' }
    ]}
>
<TabItem value="disable">

Disable DKIM signing. Stops signing the emails of the domain with this DKIM selector, and returns the task. The selector is kept.

```sql
EXEC ovh.email_exchange.service_domain_dkims.disable 
@domainName='{{ domainName }}' --required, 
@exchangeService='{{ exchangeService }}' --required, 
@organizationName='{{ organizationName }}' --required, 
@selectorName='{{ selectorName }}' --required
;
```
</TabItem>
<TabItem value="enable">

Enable DKIM signing. Enables DKIM signing with the selector, or switches the selector in use to this one, and returns the task.

```sql
EXEC ovh.email_exchange.service_domain_dkims.enable 
@domainName='{{ domainName }}' --required, 
@exchangeService='{{ exchangeService }}' --required, 
@organizationName='{{ organizationName }}' --required, 
@selectorName='{{ selectorName }}' --required
;
```
</TabItem>
</Tabs>
