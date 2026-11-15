--- 
title: domains
hide_title: false
hide_table_of_contents: false
keywords:
  - domains
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

Creates, updates, deletes, gets or lists a <code>domains</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="domains" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.email_pro.domains" /></td></tr>
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
    <td>Pending tasks id (wire: taskPendingId)</td>
</tr>
<tr>
    <td><CopyableCode code="cname_to_check" /></td>
    <td><code>string</code></td>
    <td>Cname that will be checked to prove the domain ownership (wire: cnameToCheck)</td>
</tr>
<tr>
    <td><CopyableCode code="dkim_diagnostics" /></td>
    <td><code>object</code></td>
    <td>Dkim selectors and DNS configuration state (wire: dkimDiagnostics)</td>
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
    <td><CopyableCode code="mx_is_valid" /></td>
    <td><code>boolean</code></td>
    <td>If true your DNS MX configuration is valid (wire: mxIsValid)</td>
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
    <td><CopyableCode code="spf_is_valid" /></td>
    <td><code>boolean</code></td>
    <td>SPF record validation passed (wire: spfIsValid)</td>
</tr>
<tr>
    <td><CopyableCode code="spf_record" /></td>
    <td><code>array</code></td>
    <td>Domain's SPF record configured in the DNS (wire: spfRecord)</td>
</tr>
<tr>
    <td><CopyableCode code="srv_is_valid" /></td>
    <td><code>boolean</code></td>
    <td>If true your DNS SRV record is valid (wire: srvIsValid)</td>
</tr>
<tr>
    <td><CopyableCode code="srv_record" /></td>
    <td><code>array</code></td>
    <td>Domain SRV record configured in DNS (wire: srvRecord)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Domain state (creating, deleting, ok, reopening, suspended, suspending, unknown)</td>
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

Domain

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
    <td>Pending tasks id (wire: taskPendingId)</td>
</tr>
<tr>
    <td><CopyableCode code="cname_to_check" /></td>
    <td><code>string</code></td>
    <td>Cname that will be checked to prove the domain ownership (wire: cnameToCheck)</td>
</tr>
<tr>
    <td><CopyableCode code="dkim_diagnostics" /></td>
    <td><code>object</code></td>
    <td>Dkim selectors and DNS configuration state (wire: dkimDiagnostics)</td>
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
    <td><CopyableCode code="mx_is_valid" /></td>
    <td><code>boolean</code></td>
    <td>If true your DNS MX configuration is valid (wire: mxIsValid)</td>
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
    <td><CopyableCode code="spf_is_valid" /></td>
    <td><code>boolean</code></td>
    <td>SPF record validation passed (wire: spfIsValid)</td>
</tr>
<tr>
    <td><CopyableCode code="spf_record" /></td>
    <td><code>array</code></td>
    <td>Domain's SPF record configured in the DNS (wire: spfRecord)</td>
</tr>
<tr>
    <td><CopyableCode code="srv_is_valid" /></td>
    <td><code>boolean</code></td>
    <td>If true your DNS SRV record is valid (wire: srvIsValid)</td>
</tr>
<tr>
    <td><CopyableCode code="srv_record" /></td>
    <td><code>array</code></td>
    <td>Domain SRV record configured in DNS (wire: srvRecord)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Domain state (creating, deleting, ok, reopening, suspended, suspending, unknown)</td>
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
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-service"><code>service</code></a></td>
    <td></td>
    <td>Returns the type and state of the domain, its MX, SRV and SPF records with their validation status, the expected records, its DKIM diagnostics, its MX relay and its aliases. (Alpha version)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service"><code>service</code></a></td>
    <td><a href="#parameter-state"><code>state</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>Returns the names of the domains attached to the service. Filter them by `state`, such as ok or suspended. (Alpha version)</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service"><code>service</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td></td>
    <td>Add a domain. Adds an authoritative or nonAuthoritative domain to the service and returns the task. For a domain hosted by OVHcloud, the MX, autodiscover SRV, SPF and DKIM records can be configured automatically.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-service"><code>service</code></a></td>
    <td></td>
    <td>Update a domain. Updates the `type` of the domain, authoritative or nonAuthoritative, and its `mxRelay`, the domain that receives the emails sent to addresses that do not exist.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-service"><code>service</code></a></td>
    <td></td>
    <td>Remove a domain. Detaches the domain from the Email Pro service, which no longer serves email addresses on it, and returns the task.</td>
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
<tr id="parameter-service">
    <td><CopyableCode code="service" /></td>
    <td><code>string</code></td>
    <td>The internal name of your pro organization</td>
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

Returns the type and state of the domain, its MX, SRV and SPF records with their validation status, the expected records, its DKIM diagnostics, its MX relay and its aliases. (Alpha version)

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
mx_is_valid,
mx_record,
mx_relay,
spf_is_valid,
spf_record,
srv_is_valid,
srv_record,
state,
type
FROM ovh.email_pro.domains
WHERE domain_name = '{{ domain_name }}' -- required
AND service = '{{ service }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns the names of the domains attached to the service. Filter them by `state`, such as ok or suspended. (Alpha version)

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
mx_is_valid,
mx_record,
mx_relay,
spf_is_valid,
spf_record,
srv_is_valid,
srv_record,
state,
type
FROM ovh.email_pro.domains
WHERE service = '{{ service }}' -- required
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

Add a domain. Adds an authoritative or nonAuthoritative domain to the service and returns the task. For a domain hosted by OVHcloud, the MX, autodiscover SRV, SPF and DKIM records can be configured automatically.

```sql
INSERT INTO ovh.email_pro.domains (
auto_enable_dkim,
configure_autodiscover,
configure_dkim,
configure_mx,
configure_spf,
mx_relay,
name,
type,
service
)
SELECT 
{{ auto_enable_dkim }},
{{ configure_autodiscover }},
{{ configure_dkim }},
{{ configure_mx }},
{{ configure_spf }},
'{{ mx_relay }}',
'{{ name }}' /* required */,
'{{ type }}' /* required */,
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
- name: domains
  props:
    - name: service
      value: "{{ service }}"
      description: Required parameter for the domains resource.
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
    - name: mx_relay
      value: "{{ mx_relay }}"
      description: |
        If specified, emails to not existing address will be redirected to that domain
    - name: name
      value: "{{ name }}"
      description: |
        Domain to install on server
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

Update a domain. Updates the `type` of the domain, authoritative or nonAuthoritative, and its `mxRelay`, the domain that receives the emails sent to addresses that do not exist.

```sql
UPDATE ovh.email_pro.domains
SET 
mx_relay = '{{ mx_relay }}',
type = '{{ type }}'
WHERE 
domain_name = '{{ domain_name }}' --required
AND service = '{{ service }}' --required;
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

Remove a domain. Detaches the domain from the Email Pro service, which no longer serves email addresses on it, and returns the task.

```sql
DELETE FROM ovh.email_pro.domains
WHERE domain_name = '{{ domain_name }}' --required
AND service = '{{ service }}' --required
;
```
</TabItem>
</Tabs>
