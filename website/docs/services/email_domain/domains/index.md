--- 
title: domains
hide_title: false
hide_table_of_contents: false
keywords:
  - domains
  - email_domain
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
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.email_domain.domains" /></td></tr>
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
    <td><CopyableCode code="migrated_mx_plan_service_name" /></td>
    <td><code>string</code></td>
    <td>Name of new MXPlan service (wire: migratedMXPlanServiceName)</td>
</tr>
<tr>
    <td><CopyableCode code="allowed_account_size" /></td>
    <td><code>array</code></td>
    <td>List of allowed sizes for this domain in bytes (wire: allowedAccountSize)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date of domain (wire: creationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>Name of domain</td>
</tr>
<tr>
    <td><CopyableCode code="filerz" /></td>
    <td><code>integer</code></td>
    <td>Filerz of domain</td>
</tr>
<tr>
    <td><CopyableCode code="iam" /></td>
    <td><code>object</code></td>
    <td>IAM resource metadata</td>
</tr>
<tr>
    <td><CopyableCode code="is_mx_valid" /></td>
    <td><code>string</code></td>
    <td>Result of MX check if current MX fit to OVH recommendations (checkFail, invalid, none, unknown, valid) (wire: isMXValid)</td>
</tr>
<tr>
    <td><CopyableCode code="is_spf_valid" /></td>
    <td><code>string</code></td>
    <td>Result of SPF check if current SPF fit to OVH recommendations (checkFail, invalid, none, unknown, valid) (wire: isSPFValid)</td>
</tr>
<tr>
    <td><CopyableCode code="link_to" /></td>
    <td><code>string</code></td>
    <td>Name of servicelinked with this domain (wire: linkTo)</td>
</tr>
<tr>
    <td><CopyableCode code="offer" /></td>
    <td><code>string</code></td>
    <td>Offer of email service</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Domain Status (close, ok, readOnly, unknown)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Domain service

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
    <td><CopyableCode code="migrated_mx_plan_service_name" /></td>
    <td><code>string</code></td>
    <td>Name of new MXPlan service (wire: migratedMXPlanServiceName)</td>
</tr>
<tr>
    <td><CopyableCode code="allowed_account_size" /></td>
    <td><code>array</code></td>
    <td>List of allowed sizes for this domain in bytes (wire: allowedAccountSize)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date of domain (wire: creationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>Name of domain</td>
</tr>
<tr>
    <td><CopyableCode code="filerz" /></td>
    <td><code>integer</code></td>
    <td>Filerz of domain</td>
</tr>
<tr>
    <td><CopyableCode code="iam" /></td>
    <td><code>object</code></td>
    <td>IAM resource metadata</td>
</tr>
<tr>
    <td><CopyableCode code="is_mx_valid" /></td>
    <td><code>string</code></td>
    <td>Result of MX check if current MX fit to OVH recommendations (checkFail, invalid, none, unknown, valid) (wire: isMXValid)</td>
</tr>
<tr>
    <td><CopyableCode code="is_spf_valid" /></td>
    <td><code>string</code></td>
    <td>Result of SPF check if current SPF fit to OVH recommendations (checkFail, invalid, none, unknown, valid) (wire: isSPFValid)</td>
</tr>
<tr>
    <td><CopyableCode code="link_to" /></td>
    <td><code>string</code></td>
    <td>Name of servicelinked with this domain (wire: linkTo)</td>
</tr>
<tr>
    <td><CopyableCode code="offer" /></td>
    <td><code>string</code></td>
    <td>Offer of email service</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Domain Status (close, ok, readOnly, unknown)</td>
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
    <td><a href="#parameter-domain"><code>domain</code></a></td>
    <td></td>
    <td>Get the email domain. Returns the status, offer, creation date, linked service and allowed account sizes of the email domain, with the results of its MX and SPF checks.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-iam_tags"><code>iam_tags</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List MX Plan domains. Returns the domains of the account with an MX Plan email service. Filter them by IAM tags with `iamTags`.</td>
</tr>
<tr>
    <td><a href="#change_contact"><CopyableCode code="change_contact" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-domain"><code>domain</code></a></td>
    <td></td>
    <td>Change service contacts. Starts a procedure to change the admin, tech or billing contact of the service.</td>
</tr>
<tr>
    <td><a href="#change_dns_mx_filter"><CopyableCode code="change_dns_mx_filter" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-mxFilter"><code>mxFilter</code></a></td>
    <td></td>
    <td>Change MX filter. Changes the MX DNS records of the domain, or of `subDomain`, to apply the `mxFilter` filter. With CUSTOM, `customTarget` gives the target server.</td>
</tr>
<tr>
    <td><a href="#confirm_termination"><CopyableCode code="confirm_termination" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-token"><code>token</code></a></td>
    <td></td>
    <td>Confirm service termination. Terminates the email service with the termination `token`. A reason and a comment can be given.</td>
</tr>
<tr>
    <td><a href="#migrate_delegation_v3to_v6"><CopyableCode code="migrate_delegation_v3to_v6" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-domain"><code>domain</code></a></td>
    <td></td>
    <td>Migrate V3 delegations. Converts the delegations of the domain made with the former delegation system (V3) to the current one (V6).</td>
</tr>
<tr>
    <td><a href="#terminate"><CopyableCode code="terminate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-domain"><code>domain</code></a></td>
    <td></td>
    <td>Request service termination. Starts the termination of the email service, to confirm with the `confirmTermination` call.</td>
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
<tr id="parameter-domain">
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>Name of your domain name</td>
</tr>
<tr id="parameter-iam_tags">
    <td><CopyableCode code="iam_tags" /></td>
    <td><code>object</code></td>
    <td>Filter resources on IAM tags (wire: iamTags)</td>
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

Get the email domain. Returns the status, offer, creation date, linked service and allowed account sizes of the email domain, with the results of its MX and SPF checks.

```sql
SELECT
migrated_mx_plan_service_name,
allowed_account_size,
creation_date,
domain,
filerz,
iam,
is_mx_valid,
is_spf_valid,
link_to,
offer,
status
FROM ovh.email_domain.domains
WHERE domain = '{{ domain }}' -- required
;
```
</TabItem>
<TabItem value="list">

List MX Plan domains. Returns the domains of the account with an MX Plan email service. Filter them by IAM tags with `iamTags`.

```sql
SELECT
migrated_mx_plan_service_name,
allowed_account_size,
creation_date,
domain,
filerz,
iam,
is_mx_valid,
is_spf_valid,
link_to,
offer,
status
FROM ovh.email_domain.domains
WHERE iam_tags = '{{ iam_tags }}'
AND x_pagination_mode = '{{ x_pagination_mode }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="change_contact"
    values={[
        { label: 'change_contact', value: 'change_contact' },
        { label: 'change_dns_mx_filter', value: 'change_dns_mx_filter' },
        { label: 'confirm_termination', value: 'confirm_termination' },
        { label: 'migrate_delegation_v3to_v6', value: 'migrate_delegation_v3to_v6' },
        { label: 'terminate', value: 'terminate' }
    ]}
>
<TabItem value="change_contact">

Change service contacts. Starts a procedure to change the admin, tech or billing contact of the service.

```sql
EXEC ovh.email_domain.domains.change_contact 
@domain='{{ domain }}' --required 
@@json=
'{
"contactAdmin": "{{ contactAdmin }}", 
"contactBilling": "{{ contactBilling }}", 
"contactTech": "{{ contactTech }}"
}'
;
```
</TabItem>
<TabItem value="change_dns_mx_filter">

Change MX filter. Changes the MX DNS records of the domain, or of `subDomain`, to apply the `mxFilter` filter. With CUSTOM, `customTarget` gives the target server.

```sql
EXEC ovh.email_domain.domains.change_dns_mx_filter 
@domain='{{ domain }}' --required 
@@json=
'{
"customTarget": "{{ customTarget }}", 
"mxFilter": "{{ mxFilter }}", 
"subDomain": "{{ subDomain }}"
}'
;
```
</TabItem>
<TabItem value="confirm_termination">

Confirm service termination. Terminates the email service with the termination `token`. A reason and a comment can be given.

```sql
EXEC ovh.email_domain.domains.confirm_termination 
@domain='{{ domain }}' --required 
@@json=
'{
"commentary": "{{ commentary }}", 
"reason": "{{ reason }}", 
"token": "{{ token }}"
}'
;
```
</TabItem>
<TabItem value="migrate_delegation_v3to_v6">

Migrate V3 delegations. Converts the delegations of the domain made with the former delegation system (V3) to the current one (V6).

```sql
EXEC ovh.email_domain.domains.migrate_delegation_v3to_v6 
@domain='{{ domain }}' --required
;
```
</TabItem>
<TabItem value="terminate">

Request service termination. Starts the termination of the email service, to confirm with the `confirmTermination` call.

```sql
EXEC ovh.email_domain.domains.terminate 
@domain='{{ domain }}' --required
;
```
</TabItem>
</Tabs>
