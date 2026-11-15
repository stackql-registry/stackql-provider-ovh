--- 
title: service_domains
hide_title: false
hide_table_of_contents: false
keywords:
  - service_domains
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

Creates, updates, deletes, gets or lists a <code>service_domains</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="service_domains" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.email_exchange.service_domains" /></td></tr>
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Domain name</td>
</tr>
<tr>
    <td><CopyableCode code="task_pending_id" /></td>
    <td><code>integer</code></td>
    <td>Pending taks id (wire: taskPendingId)</td>
</tr>
<tr>
    <td><CopyableCode code="cname_to_check" /></td>
    <td><code>string</code></td>
    <td>Cname that will be checked to prove the domain ownership (wire: cnameToCheck)</td>
</tr>
<tr>
    <td><CopyableCode code="dkim_diagnostics" /></td>
    <td><code>object</code></td>
    <td>DKIM diagnostics on this domain (wire: dkimDiagnostics)</td>
</tr>
<tr>
    <td><CopyableCode code="domain_aliases" /></td>
    <td><code>array</code></td>
    <td>List of aliases for this domain (wire: domainAliases)</td>
</tr>
<tr>
    <td><CopyableCode code="domain_validated" /></td>
    <td><code>boolean</code></td>
    <td>Domain validation status (wire: domainValidated)</td>
</tr>
<tr>
    <td><CopyableCode code="expected_autodiscover_srv" /></td>
    <td><code>string</code></td>
    <td>Expected SRV record on this domain (wire: expectedAutodiscoverSRV)</td>
</tr>
<tr>
    <td><CopyableCode code="expected_mx" /></td>
    <td><code>array</code></td>
    <td>Expected MX record(s) on this domain (wire: expectedMX)</td>
</tr>
<tr>
    <td><CopyableCode code="expected_spf" /></td>
    <td><code>string</code></td>
    <td>Expected SPF record on this domain (wire: expectedSPF)</td>
</tr>
<tr>
    <td><CopyableCode code="is_alias_domain" /></td>
    <td><code>boolean</code></td>
    <td>Indicate if this domain is an alias for another domain (wire: isAliasDomain)</td>
</tr>
<tr>
    <td><CopyableCode code="main" /></td>
    <td><code>boolean</code></td>
    <td>If true this is an organization (Exchange 2010 only)</td>
</tr>
<tr>
    <td><CopyableCode code="mx_is_valid" /></td>
    <td><code>boolean</code></td>
    <td>If true your dns mx configuration is valid (wire: mxIsValid)</td>
</tr>
<tr>
    <td><CopyableCode code="mx_record" /></td>
    <td><code>array</code></td>
    <td>Domain MX record configured in DNS (wire: mxRecord)</td>
</tr>
<tr>
    <td><CopyableCode code="mx_relay" /></td>
    <td><code>string</code></td>
    <td>If specified, emails to not existing address will be redirected to that domain (wire: mxRelay)</td>
</tr>
<tr>
    <td><CopyableCode code="organization_2010" /></td>
    <td><code>string</code></td>
    <td>If specified, indicates to which organization this domain belongs (Exchange 2010 only) (wire: organization2010)</td>
</tr>
<tr>
    <td><CopyableCode code="sbr_default" /></td>
    <td><code>string</code></td>
    <td>Relay domain address that will be used to all newly created accounts (wire: sbrDefault)</td>
</tr>
<tr>
    <td><CopyableCode code="send_connector_id_default" /></td>
    <td><code>integer</code></td>
    <td>Send connector id that will be used to all newly created accounts (wire: sendConnectorIdDefault)</td>
</tr>
<tr>
    <td><CopyableCode code="spf_is_valid" /></td>
    <td><code>boolean</code></td>
    <td>Wether your SPF record is valid (wire: spfIsValid)</td>
</tr>
<tr>
    <td><CopyableCode code="spf_record" /></td>
    <td><code>array</code></td>
    <td>Domain's SPF record configured in the DNS (wire: spfRecord)</td>
</tr>
<tr>
    <td><CopyableCode code="srv_is_valid" /></td>
    <td><code>boolean</code></td>
    <td>If true your dns srv record is valid (wire: srvIsValid)</td>
</tr>
<tr>
    <td><CopyableCode code="srv_record" /></td>
    <td><code>array</code></td>
    <td>Domain SRV record configured in DNS (wire: srvRecord)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Domain state (creating, deleting, internalMigration, ok, reopening, suspended, suspending)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Domain type (authoritative, nonAuthoritative)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Exchange domain

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
    <td>Domain name</td>
</tr>
<tr>
    <td><CopyableCode code="task_pending_id" /></td>
    <td><code>integer</code></td>
    <td>Pending taks id (wire: taskPendingId)</td>
</tr>
<tr>
    <td><CopyableCode code="cname_to_check" /></td>
    <td><code>string</code></td>
    <td>Cname that will be checked to prove the domain ownership (wire: cnameToCheck)</td>
</tr>
<tr>
    <td><CopyableCode code="dkim_diagnostics" /></td>
    <td><code>object</code></td>
    <td>DKIM diagnostics on this domain (wire: dkimDiagnostics)</td>
</tr>
<tr>
    <td><CopyableCode code="domain_aliases" /></td>
    <td><code>array</code></td>
    <td>List of aliases for this domain (wire: domainAliases)</td>
</tr>
<tr>
    <td><CopyableCode code="domain_validated" /></td>
    <td><code>boolean</code></td>
    <td>Domain validation status (wire: domainValidated)</td>
</tr>
<tr>
    <td><CopyableCode code="expected_autodiscover_srv" /></td>
    <td><code>string</code></td>
    <td>Expected SRV record on this domain (wire: expectedAutodiscoverSRV)</td>
</tr>
<tr>
    <td><CopyableCode code="expected_mx" /></td>
    <td><code>array</code></td>
    <td>Expected MX record(s) on this domain (wire: expectedMX)</td>
</tr>
<tr>
    <td><CopyableCode code="expected_spf" /></td>
    <td><code>string</code></td>
    <td>Expected SPF record on this domain (wire: expectedSPF)</td>
</tr>
<tr>
    <td><CopyableCode code="is_alias_domain" /></td>
    <td><code>boolean</code></td>
    <td>Indicate if this domain is an alias for another domain (wire: isAliasDomain)</td>
</tr>
<tr>
    <td><CopyableCode code="main" /></td>
    <td><code>boolean</code></td>
    <td>If true this is an organization (Exchange 2010 only)</td>
</tr>
<tr>
    <td><CopyableCode code="mx_is_valid" /></td>
    <td><code>boolean</code></td>
    <td>If true your dns mx configuration is valid (wire: mxIsValid)</td>
</tr>
<tr>
    <td><CopyableCode code="mx_record" /></td>
    <td><code>array</code></td>
    <td>Domain MX record configured in DNS (wire: mxRecord)</td>
</tr>
<tr>
    <td><CopyableCode code="mx_relay" /></td>
    <td><code>string</code></td>
    <td>If specified, emails to not existing address will be redirected to that domain (wire: mxRelay)</td>
</tr>
<tr>
    <td><CopyableCode code="organization_2010" /></td>
    <td><code>string</code></td>
    <td>If specified, indicates to which organization this domain belongs (Exchange 2010 only) (wire: organization2010)</td>
</tr>
<tr>
    <td><CopyableCode code="sbr_default" /></td>
    <td><code>string</code></td>
    <td>Relay domain address that will be used to all newly created accounts (wire: sbrDefault)</td>
</tr>
<tr>
    <td><CopyableCode code="send_connector_id_default" /></td>
    <td><code>integer</code></td>
    <td>Send connector id that will be used to all newly created accounts (wire: sendConnectorIdDefault)</td>
</tr>
<tr>
    <td><CopyableCode code="spf_is_valid" /></td>
    <td><code>boolean</code></td>
    <td>Wether your SPF record is valid (wire: spfIsValid)</td>
</tr>
<tr>
    <td><CopyableCode code="spf_record" /></td>
    <td><code>array</code></td>
    <td>Domain's SPF record configured in the DNS (wire: spfRecord)</td>
</tr>
<tr>
    <td><CopyableCode code="srv_is_valid" /></td>
    <td><code>boolean</code></td>
    <td>If true your dns srv record is valid (wire: srvIsValid)</td>
</tr>
<tr>
    <td><CopyableCode code="srv_record" /></td>
    <td><code>array</code></td>
    <td>Domain SRV record configured in DNS (wire: srvRecord)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Domain state (creating, deleting, internalMigration, ok, reopening, suspended, suspending)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Domain type (authoritative, nonAuthoritative)</td>
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
    <td>Get a domain. Returns the type, state and validation status of the domain, its expected and configured MX, SPF and SRV records, and its DKIM diagnostics.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-exchange_service"><code>exchange_service</code></a>, <a href="#parameter-organization_name"><code>organization_name</code></a></td>
    <td><a href="#parameter-main"><code>main</code></a>, <a href="#parameter-state"><code>state</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List domains. Returns the names of the domains of the service. Filter them by `state`, or set `main` to get the main domain only.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-exchange_service"><code>exchange_service</code></a>, <a href="#parameter-organization_name"><code>organization_name</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td></td>
    <td>Add a domain. Adds an authoritative or non-authoritative domain to the service and returns the task. For a domain hosted by OVHcloud, the MX, SPF, autodiscover and DKIM records can be configured automatically.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-exchange_service"><code>exchange_service</code></a>, <a href="#parameter-organization_name"><code>organization_name</code></a></td>
    <td></td>
    <td>Update a domain. Updates the type of the domain and `mxRelay`, the domain that receives the emails sent to addresses that do not exist.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-exchange_service"><code>exchange_service</code></a>, <a href="#parameter-organization_name"><code>organization_name</code></a></td>
    <td></td>
    <td>Remove a domain. Detaches the domain from the Exchange service, which no longer serves email addresses on it, and returns the task.</td>
</tr>
<tr>
    <td><a href="#change_default_sbr"><CopyableCode code="change_default_sbr" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-domainName"><code>domainName</code></a>, <a href="#parameter-exchangeService"><code>exchangeService</code></a>, <a href="#parameter-organizationName"><code>organizationName</code></a></td>
    <td></td>
    <td>Change the default sender-based routing. Sets the destination domain (`sbrDefault`) and the send connector (`sendConnectorIdDefault`) applied to all new accounts of the domain.</td>
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
<tr id="parameter-main">
    <td><CopyableCode code="main" /></td>
    <td><code>boolean</code></td>
    <td>Filter the value of main property (like)</td>
</tr>
<tr id="parameter-state">
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Filter the value of state property (=)</td>
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

Get a domain. Returns the type, state and validation status of the domain, its expected and configured MX, SPF and SRV records, and its DKIM diagnostics.

```sql
SELECT
name,
task_pending_id,
cname_to_check,
dkim_diagnostics,
domain_aliases,
domain_validated,
expected_autodiscover_srv,
expected_mx,
expected_spf,
is_alias_domain,
main,
mx_is_valid,
mx_record,
mx_relay,
organization_2010,
sbr_default,
send_connector_id_default,
spf_is_valid,
spf_record,
srv_is_valid,
srv_record,
state,
type
FROM ovh.email_exchange.service_domains
WHERE domain_name = '{{ domain_name }}' -- required
AND exchange_service = '{{ exchange_service }}' -- required
AND organization_name = '{{ organization_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List domains. Returns the names of the domains of the service. Filter them by `state`, or set `main` to get the main domain only.

```sql
SELECT
name,
task_pending_id,
cname_to_check,
dkim_diagnostics,
domain_aliases,
domain_validated,
expected_autodiscover_srv,
expected_mx,
expected_spf,
is_alias_domain,
main,
mx_is_valid,
mx_record,
mx_relay,
organization_2010,
sbr_default,
send_connector_id_default,
spf_is_valid,
spf_record,
srv_is_valid,
srv_record,
state,
type
FROM ovh.email_exchange.service_domains
WHERE exchange_service = '{{ exchange_service }}' -- required
AND organization_name = '{{ organization_name }}' -- required
AND main = '{{ main }}'
AND state = '{{ state }}'
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

Add a domain. Adds an authoritative or non-authoritative domain to the service and returns the task. For a domain hosted by OVHcloud, the MX, SPF, autodiscover and DKIM records can be configured automatically.

```sql
INSERT INTO ovh.email_exchange.service_domains (
auto_enable_dkim,
configure_autodiscover,
configure_dkim,
configure_mx,
configure_spf,
main,
mx_relay,
name,
organization_2010,
sbr_default,
send_connector_id_default,
type,
exchange_service,
organization_name
)
SELECT 
{{ auto_enable_dkim }},
{{ configure_autodiscover }},
{{ configure_dkim }},
{{ configure_mx }},
{{ configure_spf }},
{{ main }},
'{{ mx_relay }}',
'{{ name }}' /* required */,
'{{ organization_2010 }}',
'{{ sbr_default }}',
{{ send_connector_id_default }},
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
- name: service_domains
  props:
    - name: exchange_service
      value: "{{ exchange_service }}"
      description: Required parameter for the service_domains resource.
    - name: organization_name
      value: "{{ organization_name }}"
      description: Required parameter for the service_domains resource.
    - name: auto_enable_dkim
      value: {{ auto_enable_dkim }}
      description: |
        Enable DKIM automatically after DKIM configuration
    - name: configure_autodiscover
      value: {{ configure_autodiscover }}
      description: |
        If you host domain in OVH we can configure autodiscover record automatically
    - name: configure_dkim
      value: {{ configure_dkim }}
      description: |
        Launch configuration of DKIM automatically for the domain
    - name: configure_mx
      value: {{ configure_mx }}
      description: |
        If you host domain in OVH we can configure mx record automatically
    - name: configure_spf
      value: {{ configure_spf }}
      description: |
        Enable automatic SPF record (only for domains hosted by OVHcloud)
    - name: main
      value: {{ main }}
      description: |
        This newly created domain will be an organization (Exchange 2010 only)
    - name: mx_relay
      value: "{{ mx_relay }}"
      description: |
        If specified, emails to not existing address will be redirected to that domain
    - name: name
      value: "{{ name }}"
      description: |
        Domain to install on server
    - name: organization_2010
      value: "{{ organization_2010 }}"
      description: |
        If specified, indicates which organization this newly created domain will be part of (Exchange 2010 only)
    - name: sbr_default
      value: "{{ sbr_default }}"
      description: |
        Default Sender base routing destination domain applied on all new created accounts
    - name: send_connector_id_default
      value: {{ send_connector_id_default }}
      description: |
        Default Sender Connector id applied on all new created accounts
    - name: type
      value: "{{ type }}"
      description: |
        Type of domain that You want to install
      valid_values: ['authoritative', 'nonAuthoritative']
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

Update a domain. Updates the type of the domain and `mxRelay`, the domain that receives the emails sent to addresses that do not exist.

```sql
UPDATE ovh.email_exchange.service_domains
SET 
mx_relay = '{{ mx_relay }}',
type = '{{ type }}'
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

Remove a domain. Detaches the domain from the Exchange service, which no longer serves email addresses on it, and returns the task.

```sql
DELETE FROM ovh.email_exchange.service_domains
WHERE domain_name = '{{ domain_name }}' --required
AND exchange_service = '{{ exchange_service }}' --required
AND organization_name = '{{ organization_name }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="change_default_sbr"
    values={[
        { label: 'change_default_sbr', value: 'change_default_sbr' }
    ]}
>
<TabItem value="change_default_sbr">

Change the default sender-based routing. Sets the destination domain (`sbrDefault`) and the send connector (`sendConnectorIdDefault`) applied to all new accounts of the domain.

```sql
EXEC ovh.email_exchange.service_domains.change_default_sbr 
@domainName='{{ domainName }}' --required, 
@exchangeService='{{ exchangeService }}' --required, 
@organizationName='{{ organizationName }}' --required 
@@json=
'{
"sbrDefault": "{{ sbrDefault }}", 
"sendConnectorIdDefault": {{ sendConnectorIdDefault }}
}'
;
```
</TabItem>
</Tabs>
