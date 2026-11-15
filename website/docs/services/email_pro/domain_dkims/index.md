--- 
title: domain_dkims
hide_title: false
hide_table_of_contents: false
keywords:
  - domain_dkims
  - email_pro
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

Creates, updates, deletes, gets or lists a <code>domain_dkims</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="domain_dkims" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.email_pro.domain_dkims" /></td></tr>
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
    <td>Selector name (wire: selectorName)</td>
</tr>
<tr>
    <td><CopyableCode code="cname_is_valid" /></td>
    <td><code>boolean</code></td>
    <td>DNS CNAME validation passed (wire: cnameIsValid)</td>
</tr>
<tr>
    <td><CopyableCode code="customer_record" /></td>
    <td><code>string</code></td>
    <td>Customer DNS record (wire: customerRecord)</td>
</tr>
<tr>
    <td><CopyableCode code="header" /></td>
    <td><code>string</code></td>
    <td>Header used for DKIM signature</td>
</tr>
<tr>
    <td><CopyableCode code="last_update" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last update date (wire: lastUpdate)</td>
</tr>
<tr>
    <td><CopyableCode code="record_type" /></td>
    <td><code>string</code></td>
    <td>Record type of the customer record (CNAME) (wire: recordType)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>DKIM status (deleting, disabling, enabling, inProduction, ready, todo, waitingRecord)</td>
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
    <td>Selector name (wire: selectorName)</td>
</tr>
<tr>
    <td><CopyableCode code="cname_is_valid" /></td>
    <td><code>boolean</code></td>
    <td>DNS CNAME validation passed (wire: cnameIsValid)</td>
</tr>
<tr>
    <td><CopyableCode code="customer_record" /></td>
    <td><code>string</code></td>
    <td>Customer DNS record (wire: customerRecord)</td>
</tr>
<tr>
    <td><CopyableCode code="header" /></td>
    <td><code>string</code></td>
    <td>Header used for DKIM signature</td>
</tr>
<tr>
    <td><CopyableCode code="last_update" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last update date (wire: lastUpdate)</td>
</tr>
<tr>
    <td><CopyableCode code="record_type" /></td>
    <td><code>string</code></td>
    <td>Record type of the customer record (CNAME) (wire: recordType)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>DKIM status (deleting, disabling, enabling, inProduction, ready, todo, waitingRecord)</td>
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
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-selector_name"><code>selector_name</code></a>, <a href="#parameter-service"><code>service</code></a></td>
    <td></td>
    <td>Returns the status of the DKIM selector, the CNAME record to add to the DNS zone with its target and validation status, and the header used for the DKIM signature. (Alpha version)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-service"><code>service</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>Returns the names of the DKIM selectors of the domain. Get one to read its DNS record and its status. (Alpha version)</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-service"><code>service</code></a>, <a href="#parameter-selector_name"><code>selector_name</code></a></td>
    <td></td>
    <td>Create a DKIM selector. Creates the DKIM selector `selectorName` on the domain and returns the task. Set `configureDkim` to configure its DNS record when the domain is hosted by OVHcloud, and `autoEnableDKIM` to enable it once configured.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-selector_name"><code>selector_name</code></a>, <a href="#parameter-service"><code>service</code></a></td>
    <td></td>
    <td>Delete a DKIM selector. Removes the DKIM selector and its key from the domain of the Email Pro service, and returns the task.</td>
</tr>
<tr>
    <td><a href="#disable"><CopyableCode code="disable" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-domainName"><code>domainName</code></a>, <a href="#parameter-selectorName"><code>selectorName</code></a>, <a href="#parameter-service"><code>service</code></a></td>
    <td></td>
    <td>Disable DKIM signing. Stops signing the emails of the domain with this DKIM selector, and returns the task. The selector is kept.</td>
</tr>
<tr>
    <td><a href="#enable"><CopyableCode code="enable" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-domainName"><code>domainName</code></a>, <a href="#parameter-selectorName"><code>selectorName</code></a>, <a href="#parameter-service"><code>service</code></a></td>
    <td></td>
    <td>Enable DKIM signing. Signs the emails of the domain with the DKIM selector, or switches to it from the selector in use, and returns the task.</td>
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
<tr id="parameter-service">
    <td><CopyableCode code="service" /></td>
    <td><code>string</code></td>
    <td>The internal name of your pro organization</td>
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

Returns the status of the DKIM selector, the CNAME record to add to the DNS zone with its target and validation status, and the header used for the DKIM signature. (Alpha version)

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
FROM ovh.email_pro.domain_dkims
WHERE domain_name = '{{ domain_name }}' -- required
AND selector_name = '{{ selector_name }}' -- required
AND service = '{{ service }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns the names of the DKIM selectors of the domain. Get one to read its DNS record and its status. (Alpha version)

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
FROM ovh.email_pro.domain_dkims
WHERE domain_name = '{{ domain_name }}' -- required
AND service = '{{ service }}' -- required
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

Create a DKIM selector. Creates the DKIM selector `selectorName` on the domain and returns the task. Set `configureDkim` to configure its DNS record when the domain is hosted by OVHcloud, and `autoEnableDKIM` to enable it once configured.

```sql
INSERT INTO ovh.email_pro.domain_dkims (
auto_enable_dkim,
configure_dkim,
selector_name,
domain_name,
service
)
SELECT 
{{ auto_enable_dkim }},
{{ configure_dkim }},
'{{ selector_name }}' /* required */,
'{{ domain_name }}',
'{{ service }}'
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
- name: domain_dkims
  props:
    - name: domain_name
      value: "{{ domain_name }}"
      description: Required parameter for the domain_dkims resource.
    - name: service
      value: "{{ service }}"
      description: Required parameter for the domain_dkims resource.
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

Delete a DKIM selector. Removes the DKIM selector and its key from the domain of the Email Pro service, and returns the task.

```sql
DELETE FROM ovh.email_pro.domain_dkims
WHERE domain_name = '{{ domain_name }}' --required
AND selector_name = '{{ selector_name }}' --required
AND service = '{{ service }}' --required
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
EXEC ovh.email_pro.domain_dkims.disable 
@domainName='{{ domainName }}' --required, 
@selectorName='{{ selectorName }}' --required, 
@service='{{ service }}' --required
;
```
</TabItem>
<TabItem value="enable">

Enable DKIM signing. Signs the emails of the domain with the DKIM selector, or switches to it from the selector in use, and returns the task.

```sql
EXEC ovh.email_pro.domain_dkims.enable 
@domainName='{{ domainName }}' --required, 
@selectorName='{{ selectorName }}' --required, 
@service='{{ service }}' --required
;
```
</TabItem>
</Tabs>
