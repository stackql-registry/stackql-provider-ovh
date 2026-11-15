--- 
title: service_account_diagnostics
hide_title: false
hide_table_of_contents: false
keywords:
  - service_account_diagnostics
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

Creates, updates, deletes, gets or lists a <code>service_account_diagnostics</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="service_account_diagnostics" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.email_exchange.service_account_diagnostics" /></td></tr>
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
    <td><CopyableCode code="can_receive_email" /></td>
    <td><code>boolean</code></td>
    <td>Determines if ingoing message has been received (wire: canReceiveEmail)</td>
</tr>
<tr>
    <td><CopyableCode code="can_send_email" /></td>
    <td><code>boolean</code></td>
    <td>Determines if outgoing message has been delivered (wire: canSendEmail)</td>
</tr>
<tr>
    <td><CopyableCode code="connective_owa" /></td>
    <td><code>boolean</code></td>
    <td>Determines if possible to authenticate with credentials (wire: connectiveOWA)</td>
</tr>
<tr>
    <td><CopyableCode code="is_locked" /></td>
    <td><code>boolean</code></td>
    <td>Determines if account is locked (wire: isLocked)</td>
</tr>
<tr>
    <td><CopyableCode code="is_mx_valid" /></td>
    <td><code>boolean</code></td>
    <td>Determines if MX record for account's domain is properly set (wire: isMxValid)</td>
</tr>
<tr>
    <td><CopyableCode code="is_spammer" /></td>
    <td><code>boolean</code></td>
    <td>Determines if account is flagged as spammer (wire: isSpammer)</td>
</tr>
<tr>
    <td><CopyableCode code="is_srv_valid" /></td>
    <td><code>boolean</code></td>
    <td>Determines if SRV (autodiscovery) record for account's domain is properly set (wire: isSrvValid)</td>
</tr>
<tr>
    <td><CopyableCode code="is_suspended" /></td>
    <td><code>boolean</code></td>
    <td>Determines if account is suspended (wire: isSuspended)</td>
</tr>
<tr>
    <td><CopyableCode code="last_check" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last performed diagnostics date (wire: lastCheck)</td>
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
    <td>Get the account diagnosis. Returns the results of the last diagnosis of the email account: sending, receiving, webmail login, lock, suspension, spam flag, and MX and SRV records.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-exchange_service"><code>exchange_service</code></a>, <a href="#parameter-organization_name"><code>organization_name</code></a>, <a href="#parameter-primary_email_address"><code>primary_email_address</code></a>, <a href="#parameter-password"><code>password</code></a></td>
    <td></td>
    <td>Run an account diagnosis. Starts a diagnosis of the email account, which needs its `password`, and returns the task.</td>
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

Get the account diagnosis. Returns the results of the last diagnosis of the email account: sending, receiving, webmail login, lock, suspension, spam flag, and MX and SRV records.

```sql
SELECT
can_receive_email,
can_send_email,
connective_owa,
is_locked,
is_mx_valid,
is_spammer,
is_srv_valid,
is_suspended,
last_check
FROM ovh.email_exchange.service_account_diagnostics
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

Run an account diagnosis. Starts a diagnosis of the email account, which needs its `password`, and returns the task.

```sql
INSERT INTO ovh.email_exchange.service_account_diagnostics (
password,
exchange_service,
organization_name,
primary_email_address
)
SELECT 
'{{ password }}' /* required */,
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
- name: service_account_diagnostics
  props:
    - name: exchange_service
      value: "{{ exchange_service }}"
      description: Required parameter for the service_account_diagnostics resource.
    - name: organization_name
      value: "{{ organization_name }}"
      description: Required parameter for the service_account_diagnostics resource.
    - name: primary_email_address
      value: "{{ primary_email_address }}"
      description: Required parameter for the service_account_diagnostics resource.
    - name: password
      value: "{{ password }}"
      description: |
        Account password
`}</CodeBlock>

</TabItem>
</Tabs>
