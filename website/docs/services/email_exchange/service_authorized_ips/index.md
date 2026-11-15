--- 
title: service_authorized_ips
hide_title: false
hide_table_of_contents: false
keywords:
  - service_authorized_ips
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

Creates, updates, deletes, gets or lists a <code>service_authorized_ips</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="service_authorized_ips" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.email_exchange.service_authorized_ips" /></td></tr>
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
    <td>display name (wire: displayName)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date (wire: creationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="https" /></td>
    <td><code>boolean</code></td>
    <td>Webmail,outlook,web Service(EWS) and active sync access (port 443) (wire: HTTPS)</td>
</tr>
<tr>
    <td><CopyableCode code="imap" /></td>
    <td><code>boolean</code></td>
    <td>IMAP access (port 143) (wire: IMAP)</td>
</tr>
<tr>
    <td><CopyableCode code="imaps" /></td>
    <td><code>boolean</code></td>
    <td>IMAPS access (port 993) (wire: IMAPS)</td>
</tr>
<tr>
    <td><CopyableCode code="ip" /></td>
    <td><code>string (ipv4-block)</code></td>
    <td>Allowed IP (example: 192.0.2.0/24)</td>
</tr>
<tr>
    <td><CopyableCode code="pop" /></td>
    <td><code>boolean</code></td>
    <td>POP access (port 110) (wire: POP)</td>
</tr>
<tr>
    <td><CopyableCode code="pops" /></td>
    <td><code>boolean</code></td>
    <td>POPS access (port 995) (wire: POPS)</td>
</tr>
<tr>
    <td><CopyableCode code="smtp" /></td>
    <td><code>boolean</code></td>
    <td>SMTP access (port 25) (wire: SMTP)</td>
</tr>
<tr>
    <td><CopyableCode code="smtps" /></td>
    <td><code>boolean</code></td>
    <td>SMTPS access (port 587) (wire: SMTPS)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Authorized IP status (creating, deleting, ok)</td>
</tr>
<tr>
    <td><CopyableCode code="update_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last update date (wire: updateDate)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Get authorized IPs for POP(s),IMAP(s), SMTP(s) and HTTP(s)

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
    <td>display name (wire: displayName)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date (wire: creationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="https" /></td>
    <td><code>boolean</code></td>
    <td>Webmail,outlook,web Service(EWS) and active sync access (port 443) (wire: HTTPS)</td>
</tr>
<tr>
    <td><CopyableCode code="imap" /></td>
    <td><code>boolean</code></td>
    <td>IMAP access (port 143) (wire: IMAP)</td>
</tr>
<tr>
    <td><CopyableCode code="imaps" /></td>
    <td><code>boolean</code></td>
    <td>IMAPS access (port 993) (wire: IMAPS)</td>
</tr>
<tr>
    <td><CopyableCode code="ip" /></td>
    <td><code>string (ipv4-block)</code></td>
    <td>Allowed IP (example: 192.0.2.0/24)</td>
</tr>
<tr>
    <td><CopyableCode code="pop" /></td>
    <td><code>boolean</code></td>
    <td>POP access (port 110) (wire: POP)</td>
</tr>
<tr>
    <td><CopyableCode code="pops" /></td>
    <td><code>boolean</code></td>
    <td>POPS access (port 995) (wire: POPS)</td>
</tr>
<tr>
    <td><CopyableCode code="smtp" /></td>
    <td><code>boolean</code></td>
    <td>SMTP access (port 25) (wire: SMTP)</td>
</tr>
<tr>
    <td><CopyableCode code="smtps" /></td>
    <td><code>boolean</code></td>
    <td>SMTPS access (port 587) (wire: SMTPS)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Authorized IP status (creating, deleting, ok)</td>
</tr>
<tr>
    <td><CopyableCode code="update_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last update date (wire: updateDate)</td>
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
    <td><a href="#parameter-exchange_service"><code>exchange_service</code></a>, <a href="#parameter-ip"><code>ip</code></a>, <a href="#parameter-organization_name"><code>organization_name</code></a></td>
    <td></td>
    <td>Get an authorized IP. Returns the display name and status of the IP block, and the accesses it is allowed: HTTPS, IMAP, IMAPS, POP, POPS, SMTP and SMTPS.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-exchange_service"><code>exchange_service</code></a>, <a href="#parameter-organization_name"><code>organization_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List authorized IPs. Returns the IP blocks allowed to access the service over POP, IMAP, SMTP or HTTPS, with or without SSL.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-exchange_service"><code>exchange_service</code></a>, <a href="#parameter-organization_name"><code>organization_name</code></a>, <a href="#parameter-ip"><code>ip</code></a></td>
    <td></td>
    <td>Add an authorized IP. Allows an IP block to access the service over the selected protocols: HTTPS, IMAP, IMAPS, POP, POPS, SMTP and SMTPS. Returns the task.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-exchange_service"><code>exchange_service</code></a>, <a href="#parameter-ip"><code>ip</code></a>, <a href="#parameter-organization_name"><code>organization_name</code></a></td>
    <td></td>
    <td>Update an authorized IP. Updates the display name of the IP block and the accesses it is allowed: HTTPS, IMAP, IMAPS, POP, POPS, SMTP and SMTPS.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-exchange_service"><code>exchange_service</code></a>, <a href="#parameter-ip"><code>ip</code></a>, <a href="#parameter-organization_name"><code>organization_name</code></a></td>
    <td></td>
    <td>Delete an authorized IP. Removes the IP block from the IPs allowed to reach the service, and returns the task.</td>
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
<tr id="parameter-ip">
    <td><CopyableCode code="ip" /></td>
    <td><code>string (ipv4-block)</code></td>
    <td>Allowed IP</td>
</tr>
<tr id="parameter-organization_name">
    <td><CopyableCode code="organization_name" /></td>
    <td><code>string</code></td>
    <td>The internal name of your exchange organization (wire: organizationName)</td>
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

Get an authorized IP. Returns the display name and status of the IP block, and the accesses it is allowed: HTTPS, IMAP, IMAPS, POP, POPS, SMTP and SMTPS.

```sql
SELECT
display_name,
creation_date,
https,
imap,
imaps,
ip,
pop,
pops,
smtp,
smtps,
status,
update_date
FROM ovh.email_exchange.service_authorized_ips
WHERE exchange_service = '{{ exchange_service }}' -- required
AND ip = '{{ ip }}' -- required
AND organization_name = '{{ organization_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List authorized IPs. Returns the IP blocks allowed to access the service over POP, IMAP, SMTP or HTTPS, with or without SSL.

```sql
SELECT
display_name,
creation_date,
https,
imap,
imaps,
ip,
pop,
pops,
smtp,
smtps,
status,
update_date
FROM ovh.email_exchange.service_authorized_ips
WHERE exchange_service = '{{ exchange_service }}' -- required
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

Add an authorized IP. Allows an IP block to access the service over the selected protocols: HTTPS, IMAP, IMAPS, POP, POPS, SMTP and SMTPS. Returns the task.

```sql
INSERT INTO ovh.email_exchange.service_authorized_ips (
https,
imap,
imaps,
ip,
pop,
pops,
smtp,
smtps,
display_name,
exchange_service,
organization_name
)
SELECT 
{{ https }},
{{ imap }},
{{ imaps }},
'{{ ip }}' /* required */,
{{ pop }},
{{ pops }},
{{ smtp }},
{{ smtps }},
'{{ display_name }}',
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
- name: service_authorized_ips
  props:
    - name: exchange_service
      value: "{{ exchange_service }}"
      description: Required parameter for the service_authorized_ips resource.
    - name: organization_name
      value: "{{ organization_name }}"
      description: Required parameter for the service_authorized_ips resource.
    - name: https
      value: {{ https }}
      description: |
        Webmail,outlook,web Service(EWS) and active sync access (port 443)
    - name: imap
      value: {{ imap }}
      description: |
        IMAP access (port 143)
    - name: imaps
      value: {{ imaps }}
      description: |
        IMAPS access (port 993)
    - name: ip
      value: "{{ ip }}"
      description: |
        Authorized IP
    - name: pop
      value: {{ pop }}
      description: |
        POP access (port 110)
    - name: pops
      value: {{ pops }}
      description: |
        POPS access (port 995)
    - name: smtp
      value: {{ smtp }}
      description: |
        SMTP access (port 25)
    - name: smtps
      value: {{ smtps }}
      description: |
        SMTPS access (port 587)
    - name: display_name
      value: "{{ display_name }}"
      description: |
        display name information
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

Update an authorized IP. Updates the display name of the IP block and the accesses it is allowed: HTTPS, IMAP, IMAPS, POP, POPS, SMTP and SMTPS.

```sql
UPDATE ovh.email_exchange.service_authorized_ips
SET 
https = {{ https }},
imap = {{ imap }},
imaps = {{ imaps }},
pop = {{ pop }},
pops = {{ pops }},
smtp = {{ smtp }},
smtps = {{ smtps }},
display_name = '{{ display_name }}'
WHERE 
exchange_service = '{{ exchange_service }}' --required
AND ip = '{{ ip }}' --required
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

Delete an authorized IP. Removes the IP block from the IPs allowed to reach the service, and returns the task.

```sql
DELETE FROM ovh.email_exchange.service_authorized_ips
WHERE exchange_service = '{{ exchange_service }}' --required
AND ip = '{{ ip }}' --required
AND organization_name = '{{ organization_name }}' --required
;
```
</TabItem>
</Tabs>
