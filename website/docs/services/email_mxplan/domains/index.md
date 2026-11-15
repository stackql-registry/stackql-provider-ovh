--- 
title: domains
hide_title: false
hide_table_of_contents: false
keywords:
  - domains
  - email_mxplan
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
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.email_mxplan.domains" /></td></tr>
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
    <td><CopyableCode code="expected_mx" /></td>
    <td><code>array</code></td>
    <td>Expected MX record(s) on this domain (wire: expectedMX)</td>
</tr>
<tr>
    <td><CopyableCode code="is_alias_domain" /></td>
    <td><code>boolean</code></td>
    <td>Indicate if this domain is an alias for another domain (wire: isAliasDomain)</td>
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
    <td>Pending taks id (wire: taskPendingId)</td>
</tr>
<tr>
    <td><CopyableCode code="cname_to_check" /></td>
    <td><code>string</code></td>
    <td>Cname that will be checked to prove the domain ownership (wire: cnameToCheck)</td>
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
    <td><CopyableCode code="expected_mx" /></td>
    <td><code>array</code></td>
    <td>Expected MX record(s) on this domain (wire: expectedMX)</td>
</tr>
<tr>
    <td><CopyableCode code="is_alias_domain" /></td>
    <td><code>boolean</code></td>
    <td>Indicate if this domain is an alias for another domain (wire: isAliasDomain)</td>
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
    <td>Get a domain. Returns the type and state of the domain, its MX and SRV records with their validation status, the expected MX records, its MX relay and its aliases.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service"><code>service</code></a></td>
    <td><a href="#parameter-state"><code>state</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List domains. Returns the names of the domains attached to the service. Filter them by `state`, such as ok or suspended.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-domain_name"><code>domain_name</code></a>, <a href="#parameter-service"><code>service</code></a></td>
    <td></td>
    <td>Update a domain. Updates the `type` of the domain, authoritative or nonAuthoritative, and its `mxRelay`, the domain that receives the emails sent to addresses that do not exist.</td>
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
    <td>The internal name of your mxplan organization</td>
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

Get a domain. Returns the type and state of the domain, its MX and SRV records with their validation status, the expected MX records, its MX relay and its aliases.

```sql
SELECT
name,
task_pending_id,
cname_to_check,
domain_aliases,
domain_validated,
expected_mx,
is_alias_domain,
mx_is_valid,
mx_record,
mx_relay,
srv_is_valid,
srv_record,
state,
type
FROM ovh.email_mxplan.domains
WHERE domain_name = '{{ domain_name }}' -- required
AND service = '{{ service }}' -- required
;
```
</TabItem>
<TabItem value="list">

List domains. Returns the names of the domains attached to the service. Filter them by `state`, such as ok or suspended.

```sql
SELECT
name,
task_pending_id,
cname_to_check,
domain_aliases,
domain_validated,
expected_mx,
is_alias_domain,
mx_is_valid,
mx_record,
mx_relay,
srv_is_valid,
srv_record,
state,
type
FROM ovh.email_mxplan.domains
WHERE service = '{{ service }}' -- required
AND state = '{{ state }}'
AND x_pagination_mode = '{{ x_pagination_mode }}'
;
```
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
UPDATE ovh.email_mxplan.domains
SET 
mx_relay = '{{ mx_relay }}',
type = '{{ type }}'
WHERE 
domain_name = '{{ domain_name }}' --required
AND service = '{{ service }}' --required;
```
</TabItem>
</Tabs>
