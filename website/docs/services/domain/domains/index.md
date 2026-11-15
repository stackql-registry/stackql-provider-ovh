--- 
title: domains
hide_title: false
hide_table_of_contents: false
keywords:
  - domains
  - domain
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
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.domain.domains" /></td></tr>
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
    <td><CopyableCode code="service_id" /></td>
    <td><code>integer</code></td>
    <td>Technical service identifier (wire: serviceId)</td>
</tr>
<tr>
    <td><CopyableCode code="contact_admin" /></td>
    <td><code>object</code></td>
    <td>Administrative contact data (wire: contactAdmin)</td>
</tr>
<tr>
    <td><CopyableCode code="contact_billing" /></td>
    <td><code>object</code></td>
    <td>Billing contact data (wire: contactBilling)</td>
</tr>
<tr>
    <td><CopyableCode code="contact_owner" /></td>
    <td><code>object</code></td>
    <td>Owner (registrant) contact data (wire: contactOwner)</td>
</tr>
<tr>
    <td><CopyableCode code="contact_tech" /></td>
    <td><code>object</code></td>
    <td>Technical contact data (wire: contactTech)</td>
</tr>
<tr>
    <td><CopyableCode code="dnssec_state" /></td>
    <td><code>string</code></td>
    <td>Current DNSSEC state of the domain name (disabled, enabled, not_supported) (wire: dnssecState)</td>
</tr>
<tr>
    <td><CopyableCode code="dnssec_supported" /></td>
    <td><code>boolean</code></td>
    <td>Whether DNSSEC is activated for this domain name (wire: dnssecSupported)</td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>Domain name</td>
</tr>
<tr>
    <td><CopyableCode code="expiration_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date when the domain name will expire, if not renewed (wire: expirationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="glue_record_ipv_6_supported" /></td>
    <td><code>boolean</code></td>
    <td>Whether the registry supports IPv6 glue records (wire: glueRecordIpv6Supported)</td>
</tr>
<tr>
    <td><CopyableCode code="glue_record_multi_ip_supported" /></td>
    <td><code>boolean</code></td>
    <td>Whether the registry supports multi-ip glue records (wire: glueRecordMultiIpSupported)</td>
</tr>
<tr>
    <td><CopyableCode code="host_supported" /></td>
    <td><code>boolean</code></td>
    <td>Whether the registry supports hosts as independent entities (wire: hostSupported)</td>
</tr>
<tr>
    <td><CopyableCode code="iam" /></td>
    <td><code>object</code></td>
    <td>IAM resource metadata</td>
</tr>
<tr>
    <td><CopyableCode code="last_update" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last update date (wire: lastUpdate)</td>
</tr>
<tr>
    <td><CopyableCode code="name_server_type" /></td>
    <td><code>string</code></td>
    <td>Name servers type (anycast, dedicated, empty, external, hold, hosted, hosting, mixed, parking) (wire: nameServerType)</td>
</tr>
<tr>
    <td><CopyableCode code="name_servers" /></td>
    <td><code>array</code></td>
    <td>Name servers list (wire: nameServers)</td>
</tr>
<tr>
    <td><CopyableCode code="offer" /></td>
    <td><code>string</code></td>
    <td>Offer associated with the domain name (diamond, gold, platinum)</td>
</tr>
<tr>
    <td><CopyableCode code="owo_supported" /></td>
    <td><code>boolean</code></td>
    <td>Whether Whois data obfuscation is supported for this domain name (wire: owoSupported)</td>
</tr>
<tr>
    <td><CopyableCode code="parent_service" /></td>
    <td><code>object</code></td>
    <td>Parent service (wire: parentService)</td>
</tr>
<tr>
    <td><CopyableCode code="renewal_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date when the domain name should be renewed (relevant if renewalState is automatic_renew) (wire: renewalDate)</td>
</tr>
<tr>
    <td><CopyableCode code="renewal_state" /></td>
    <td><code>string</code></td>
    <td>Current renewal state of the domain name (automatic_renew, cancellation_complete, cancellation_requested, manual_renew, unpaid) (wire: renewalState)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Current state of the domain name (autorenew_in_progress, autorenew_registry_in_progress, deleted, dispute, expired, ok, outgoing_transfer, pending_create, pending_delete, pending_incoming_transfer, pending_installation, registry_suspended, restorable, technical_suspended)</td>
</tr>
<tr>
    <td><CopyableCode code="suspension_state" /></td>
    <td><code>string</code></td>
    <td>Current suspension state of the domain name (not_suspended, suspended) (wire: suspensionState)</td>
</tr>
<tr>
    <td><CopyableCode code="transfer_lock_status" /></td>
    <td><code>string</code></td>
    <td>Current transfer lock status of the domain name (locked, locking, unavailable, unlocked, unlocking) (wire: transferLockStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="whois_owner" /></td>
    <td><code>string</code></td>
    <td>Owner (registrant) contact ID (contact data can be edited via /me/contact/&lt;ID&gt;) (wire: whoisOwner)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

General information about a domain name service

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
    <td><CopyableCode code="service_id" /></td>
    <td><code>integer</code></td>
    <td>Technical service identifier (wire: serviceId)</td>
</tr>
<tr>
    <td><CopyableCode code="contact_admin" /></td>
    <td><code>object</code></td>
    <td>Administrative contact data (wire: contactAdmin)</td>
</tr>
<tr>
    <td><CopyableCode code="contact_billing" /></td>
    <td><code>object</code></td>
    <td>Billing contact data (wire: contactBilling)</td>
</tr>
<tr>
    <td><CopyableCode code="contact_owner" /></td>
    <td><code>object</code></td>
    <td>Owner (registrant) contact data (wire: contactOwner)</td>
</tr>
<tr>
    <td><CopyableCode code="contact_tech" /></td>
    <td><code>object</code></td>
    <td>Technical contact data (wire: contactTech)</td>
</tr>
<tr>
    <td><CopyableCode code="dnssec_state" /></td>
    <td><code>string</code></td>
    <td>Current DNSSEC state of the domain name (disabled, enabled, not_supported) (wire: dnssecState)</td>
</tr>
<tr>
    <td><CopyableCode code="dnssec_supported" /></td>
    <td><code>boolean</code></td>
    <td>Whether DNSSEC is activated for this domain name (wire: dnssecSupported)</td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>Domain name</td>
</tr>
<tr>
    <td><CopyableCode code="expiration_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date when the domain name will expire, if not renewed (wire: expirationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="glue_record_ipv_6_supported" /></td>
    <td><code>boolean</code></td>
    <td>Whether the registry supports IPv6 glue records (wire: glueRecordIpv6Supported)</td>
</tr>
<tr>
    <td><CopyableCode code="glue_record_multi_ip_supported" /></td>
    <td><code>boolean</code></td>
    <td>Whether the registry supports multi-ip glue records (wire: glueRecordMultiIpSupported)</td>
</tr>
<tr>
    <td><CopyableCode code="host_supported" /></td>
    <td><code>boolean</code></td>
    <td>Whether the registry supports hosts as independent entities (wire: hostSupported)</td>
</tr>
<tr>
    <td><CopyableCode code="iam" /></td>
    <td><code>object</code></td>
    <td>IAM resource metadata</td>
</tr>
<tr>
    <td><CopyableCode code="last_update" /></td>
    <td><code>string (date-time)</code></td>
    <td>Last update date (wire: lastUpdate)</td>
</tr>
<tr>
    <td><CopyableCode code="name_server_type" /></td>
    <td><code>string</code></td>
    <td>Name servers type (anycast, dedicated, empty, external, hold, hosted, hosting, mixed, parking) (wire: nameServerType)</td>
</tr>
<tr>
    <td><CopyableCode code="name_servers" /></td>
    <td><code>array</code></td>
    <td>Name servers list (wire: nameServers)</td>
</tr>
<tr>
    <td><CopyableCode code="offer" /></td>
    <td><code>string</code></td>
    <td>Offer associated with the domain name (diamond, gold, platinum)</td>
</tr>
<tr>
    <td><CopyableCode code="owo_supported" /></td>
    <td><code>boolean</code></td>
    <td>Whether Whois data obfuscation is supported for this domain name (wire: owoSupported)</td>
</tr>
<tr>
    <td><CopyableCode code="parent_service" /></td>
    <td><code>object</code></td>
    <td>Parent service (wire: parentService)</td>
</tr>
<tr>
    <td><CopyableCode code="renewal_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Date when the domain name should be renewed (relevant if renewalState is automatic_renew) (wire: renewalDate)</td>
</tr>
<tr>
    <td><CopyableCode code="renewal_state" /></td>
    <td><code>string</code></td>
    <td>Current renewal state of the domain name (automatic_renew, cancellation_complete, cancellation_requested, manual_renew, unpaid) (wire: renewalState)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Current state of the domain name (autorenew_in_progress, autorenew_registry_in_progress, deleted, dispute, expired, ok, outgoing_transfer, pending_create, pending_delete, pending_incoming_transfer, pending_installation, registry_suspended, restorable, technical_suspended)</td>
</tr>
<tr>
    <td><CopyableCode code="suspension_state" /></td>
    <td><code>string</code></td>
    <td>Current suspension state of the domain name (not_suspended, suspended) (wire: suspensionState)</td>
</tr>
<tr>
    <td><CopyableCode code="transfer_lock_status" /></td>
    <td><code>string</code></td>
    <td>Current transfer lock status of the domain name (locked, locking, unavailable, unlocked, unlocking) (wire: transferLockStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="whois_owner" /></td>
    <td><code>string</code></td>
    <td>Owner (registrant) contact ID (contact data can be edited via /me/contact/&lt;ID&gt;) (wire: whoisOwner)</td>
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
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get domain name information</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-iam_tags"><code>iam_tags</code></a>, <a href="#parameter-whois_owner"><code>whois_owner</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>Get the list of managed domain names</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Edit domain name properties</td>
</tr>
<tr>
    <td><a href="#order_create"><CopyableCode code="order_create" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-domain"><code>domain</code></a></td>
    <td><a href="#parameter-dryRun"><code>dryRun</code></a></td>
    <td>Order a new domain name (Beta version)</td>
</tr>
<tr>
    <td><a href="#change_contact"><CopyableCode code="change_contact" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Launch a contact change procedure</td>
</tr>
<tr>
    <td><a href="#name_servers_update"><CopyableCode code="name_servers_update" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-nameServers"><code>nameServers</code></a></td>
    <td></td>
    <td>Update DNS servers</td>
</tr>
<tr>
    <td><a href="#uk_outgoing_transfer"><CopyableCode code="uk_outgoing_transfer" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-tag"><code>tag</code></a></td>
    <td></td>
    <td>Schedule an outgoing transfer task for this domain (.uk only)</td>
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
<tr id="parameter-serviceName">
    <td><CopyableCode code="serviceName" /></td>
    <td><code>string</code></td>
    <td>Service name</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>Service name (wire: serviceName)</td>
</tr>
<tr id="parameter-dryRun">
    <td><CopyableCode code="dryRun" /></td>
    <td><code>boolean</code></td>
    <td>If true, simulate the order and return the pricing without actually placing it. Default to false.</td>
</tr>
<tr id="parameter-iam_tags">
    <td><CopyableCode code="iam_tags" /></td>
    <td><code>object</code></td>
    <td>Filter resources on IAM tags (wire: iamTags)</td>
</tr>
<tr id="parameter-whois_owner">
    <td><CopyableCode code="whois_owner" /></td>
    <td><code>string</code></td>
    <td>Filter domain names by owner ID (wire: whoisOwner)</td>
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

Get domain name information

```sql
SELECT
service_id,
contact_admin,
contact_billing,
contact_owner,
contact_tech,
dnssec_state,
dnssec_supported,
domain,
expiration_date,
glue_record_ipv_6_supported,
glue_record_multi_ip_supported,
host_supported,
iam,
last_update,
name_server_type,
name_servers,
offer,
owo_supported,
parent_service,
renewal_date,
renewal_state,
state,
suspension_state,
transfer_lock_status,
whois_owner
FROM ovh.domain.domains
WHERE service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

Get the list of managed domain names

```sql
SELECT
service_id,
contact_admin,
contact_billing,
contact_owner,
contact_tech,
dnssec_state,
dnssec_supported,
domain,
expiration_date,
glue_record_ipv_6_supported,
glue_record_multi_ip_supported,
host_supported,
iam,
last_update,
name_server_type,
name_servers,
offer,
owo_supported,
parent_service,
renewal_date,
renewal_state,
state,
suspension_state,
transfer_lock_status,
whois_owner
FROM ovh.domain.domains
WHERE iam_tags = '{{ iam_tags }}'
AND whois_owner = '{{ whois_owner }}'
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

Edit domain name properties

```sql
UPDATE ovh.domain.domains
SET 
name_server_type = '{{ name_server_type }}',
transfer_lock_status = '{{ transfer_lock_status }}'
WHERE 
service_name = '{{ service_name }}' --required
RETURNING
service_id,
contact_admin,
contact_billing,
contact_owner,
contact_tech,
dnssec_state,
dnssec_supported,
domain,
expiration_date,
glue_record_ipv_6_supported,
glue_record_multi_ip_supported,
host_supported,
last_update,
name_server_type,
name_servers,
offer,
owo_supported,
parent_service,
renewal_date,
renewal_state,
state,
suspension_state,
transfer_lock_status,
whois_owner;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="order_create"
    values={[
        { label: 'order_create', value: 'order_create' },
        { label: 'change_contact', value: 'change_contact' },
        { label: 'name_servers_update', value: 'name_servers_update' },
        { label: 'uk_outgoing_transfer', value: 'uk_outgoing_transfer' }
    ]}
>
<TabItem value="order_create">

Order a new domain name (Beta version)

```sql
EXEC ovh.domain.domains.order_create 
@dryRun={{ dryRun }} 
@@json=
'{
"contacts": "{{ contacts }}", 
"dns": "{{ dns }}", 
"domain": "{{ domain }}", 
"duration": "{{ duration }}", 
"priceAcknowledge": "{{ priceAcknowledge }}", 
"promoCodes": "{{ promoCodes }}", 
"waiveRetractationPeriod": {{ waiveRetractationPeriod }}, 
"zone": "{{ zone }}"
}'
;
```
</TabItem>
<TabItem value="change_contact">

Launch a contact change procedure

```sql
EXEC ovh.domain.domains.change_contact 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"contactAdmin": "{{ contactAdmin }}", 
"contactBilling": "{{ contactBilling }}", 
"contactTech": "{{ contactTech }}"
}'
;
```
</TabItem>
<TabItem value="name_servers_update">

Update DNS servers

```sql
EXEC ovh.domain.domains.name_servers_update 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"nameServers": "{{ nameServers }}"
}'
;
```
</TabItem>
<TabItem value="uk_outgoing_transfer">

Schedule an outgoing transfer task for this domain (.uk only)

```sql
EXEC ovh.domain.domains.uk_outgoing_transfer 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"tag": "{{ tag }}"
}'
;
```
</TabItem>
</Tabs>
