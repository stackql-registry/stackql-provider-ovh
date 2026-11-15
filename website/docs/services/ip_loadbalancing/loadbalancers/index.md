--- 
title: loadbalancers
hide_title: false
hide_table_of_contents: false
keywords:
  - loadbalancers
  - ip_loadbalancing
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

Creates, updates, deletes, gets or lists a <code>loadbalancers</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="loadbalancers" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.ip_loadbalancing.loadbalancers" /></td></tr>
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
    <td>Set the name displayed in ManagerV6 for your iplb (max 50 chars) (wire: displayName)</td>
</tr>
<tr>
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The internal name of your IP load balancing (wire: serviceName)</td>
</tr>
<tr>
    <td><CopyableCode code="vrack_name" /></td>
    <td><code>string</code></td>
    <td>Name of the vRack on which the current Load Balancer is attached to, as it is named on vRack product (wire: vrackName)</td>
</tr>
<tr>
    <td><CopyableCode code="iam" /></td>
    <td><code>object</code></td>
    <td>IAM resource metadata</td>
</tr>
<tr>
    <td><CopyableCode code="ip_loadbalancing" /></td>
    <td><code>string (ipv4)</code></td>
    <td>Your IP load balancing (example: 192.0.2.0) (wire: ipLoadbalancing)</td>
</tr>
<tr>
    <td><CopyableCode code="ipv_4" /></td>
    <td><code>string (ipv4)</code></td>
    <td>The IPV4 associated to your IP load balancing (example: 192.0.2.0) (wire: ipv4)</td>
</tr>
<tr>
    <td><CopyableCode code="ipv_6" /></td>
    <td><code>string (ipv6)</code></td>
    <td>The IPV6 associated to your IP load balancing (example: 2001:41d0:1:1994::1) (wire: ipv6)</td>
</tr>
<tr>
    <td><CopyableCode code="metrics_token" /></td>
    <td><code>string</code></td>
    <td>The metrics token associated with your IP load balancing (wire: metricsToken)</td>
</tr>
<tr>
    <td><CopyableCode code="offer" /></td>
    <td><code>string</code></td>
    <td>The offer of your IP load balancing</td>
</tr>
<tr>
    <td><CopyableCode code="orderable_zone" /></td>
    <td><code>array</code></td>
    <td>Available additional zone for your Load Balancer (wire: orderableZone)</td>
</tr>
<tr>
    <td><CopyableCode code="ssl_configuration" /></td>
    <td><code>string</code></td>
    <td>Modern oldest compatible clients : Firefox 27, Chrome 30, IE 11 on Windows 7, Edge, Opera 17, Safari 9, Android 5.0, and Java 8. Intermediate oldest compatible clients : Firefox 1, Chrome 1, IE 7, Opera 5, Safari 1, Windows XP IE8, Android 2.3, Java 7. Intermediate if null. (intermediate, modern) (wire: sslConfiguration)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Current state of your IP (blacklisted, deleted, free, ok, quarantined, suspended)</td>
</tr>
<tr>
    <td><CopyableCode code="vrack_eligibility" /></td>
    <td><code>boolean</code></td>
    <td>Vrack eligibility (wire: vrackEligibility)</td>
</tr>
<tr>
    <td><CopyableCode code="zone" /></td>
    <td><code>array</code></td>
    <td>Location where your service is</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Your IP load balancing

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
    <td>Set the name displayed in ManagerV6 for your iplb (max 50 chars) (wire: displayName)</td>
</tr>
<tr>
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The internal name of your IP load balancing (wire: serviceName)</td>
</tr>
<tr>
    <td><CopyableCode code="vrack_name" /></td>
    <td><code>string</code></td>
    <td>Name of the vRack on which the current Load Balancer is attached to, as it is named on vRack product (wire: vrackName)</td>
</tr>
<tr>
    <td><CopyableCode code="iam" /></td>
    <td><code>object</code></td>
    <td>IAM resource metadata</td>
</tr>
<tr>
    <td><CopyableCode code="ip_loadbalancing" /></td>
    <td><code>string (ipv4)</code></td>
    <td>Your IP load balancing (example: 192.0.2.0) (wire: ipLoadbalancing)</td>
</tr>
<tr>
    <td><CopyableCode code="ipv_4" /></td>
    <td><code>string (ipv4)</code></td>
    <td>The IPV4 associated to your IP load balancing (example: 192.0.2.0) (wire: ipv4)</td>
</tr>
<tr>
    <td><CopyableCode code="ipv_6" /></td>
    <td><code>string (ipv6)</code></td>
    <td>The IPV6 associated to your IP load balancing (example: 2001:41d0:1:1994::1) (wire: ipv6)</td>
</tr>
<tr>
    <td><CopyableCode code="metrics_token" /></td>
    <td><code>string</code></td>
    <td>The metrics token associated with your IP load balancing (wire: metricsToken)</td>
</tr>
<tr>
    <td><CopyableCode code="offer" /></td>
    <td><code>string</code></td>
    <td>The offer of your IP load balancing</td>
</tr>
<tr>
    <td><CopyableCode code="orderable_zone" /></td>
    <td><code>array</code></td>
    <td>Available additional zone for your Load Balancer (wire: orderableZone)</td>
</tr>
<tr>
    <td><CopyableCode code="ssl_configuration" /></td>
    <td><code>string</code></td>
    <td>Modern oldest compatible clients : Firefox 27, Chrome 30, IE 11 on Windows 7, Edge, Opera 17, Safari 9, Android 5.0, and Java 8. Intermediate oldest compatible clients : Firefox 1, Chrome 1, IE 7, Opera 5, Safari 1, Windows XP IE8, Android 2.3, Java 7. Intermediate if null. (intermediate, modern) (wire: sslConfiguration)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Current state of your IP (blacklisted, deleted, free, ok, quarantined, suspended)</td>
</tr>
<tr>
    <td><CopyableCode code="vrack_eligibility" /></td>
    <td><code>boolean</code></td>
    <td>Vrack eligibility (wire: vrackEligibility)</td>
</tr>
<tr>
    <td><CopyableCode code="zone" /></td>
    <td><code>array</code></td>
    <td>Location where your service is</td>
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
    <td>Get a Load Balancer service</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-iam_tags"><code>iam_tags</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List Load Balancer services</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Update a Load Balancer service</td>
</tr>
<tr>
    <td><a href="#change_contact"><CopyableCode code="change_contact" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Change service contacts. Starts a procedure to change the admin, tech or billing contact of the service.</td>
</tr>
<tr>
    <td><a href="#confirm_termination"><CopyableCode code="confirm_termination" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-token"><code>token</code></a></td>
    <td></td>
    <td>Confirm service termination. Terminates the service with the token sent by email to the admin contact. A reason, a future use and a comment can be given.</td>
</tr>
<tr>
    <td><a href="#free_certificate"><CopyableCode code="free_certificate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-fqdn"><code>fqdn</code></a></td>
    <td></td>
    <td>Order a free certificate</td>
</tr>
<tr>
    <td><a href="#log_url"><CopyableCode code="log_url" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-kind"><code>kind</code></a></td>
    <td></td>
    <td>Generate a temporary log URL</td>
</tr>
<tr>
    <td><a href="#refresh"><CopyableCode code="refresh" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Apply the configuration</td>
</tr>
<tr>
    <td><a href="#terminate"><CopyableCode code="terminate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Request service termination. Starts the termination of the service. The admin contact receives a token by email, to confirm with the `confirmTermination` call.</td>
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
    <td>The internal name of your IP load balancing</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The internal name of your IP load balancing (wire: serviceName)</td>
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

Get a Load Balancer service

```sql
SELECT
display_name,
service_name,
vrack_name,
iam,
ip_loadbalancing,
ipv_4,
ipv_6,
metrics_token,
offer,
orderable_zone,
ssl_configuration,
state,
vrack_eligibility,
zone
FROM ovh.ip_loadbalancing.loadbalancers
WHERE service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List Load Balancer services

```sql
SELECT
display_name,
service_name,
vrack_name,
iam,
ip_loadbalancing,
ipv_4,
ipv_6,
metrics_token,
offer,
orderable_zone,
ssl_configuration,
state,
vrack_eligibility,
zone
FROM ovh.ip_loadbalancing.loadbalancers
WHERE iam_tags = '{{ iam_tags }}'
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

Update a Load Balancer service

```sql
UPDATE ovh.ip_loadbalancing.loadbalancers
SET 
display_name = '{{ display_name }}',
ssl_configuration = '{{ ssl_configuration }}'
WHERE 
service_name = '{{ service_name }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="change_contact"
    values={[
        { label: 'change_contact', value: 'change_contact' },
        { label: 'confirm_termination', value: 'confirm_termination' },
        { label: 'free_certificate', value: 'free_certificate' },
        { label: 'log_url', value: 'log_url' },
        { label: 'refresh', value: 'refresh' },
        { label: 'terminate', value: 'terminate' }
    ]}
>
<TabItem value="change_contact">

Change service contacts. Starts a procedure to change the admin, tech or billing contact of the service.

```sql
EXEC ovh.ip_loadbalancing.loadbalancers.change_contact 
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
<TabItem value="confirm_termination">

Confirm service termination. Terminates the service with the token sent by email to the admin contact. A reason, a future use and a comment can be given.

```sql
EXEC ovh.ip_loadbalancing.loadbalancers.confirm_termination 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"commentary": "{{ commentary }}", 
"futureUse": "{{ futureUse }}", 
"reason": "{{ reason }}", 
"token": "{{ token }}"
}'
;
```
</TabItem>
<TabItem value="free_certificate">

Order a free certificate

```sql
EXEC ovh.ip_loadbalancing.loadbalancers.free_certificate 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"fqdn": "{{ fqdn }}"
}'
;
```
</TabItem>
<TabItem value="log_url">

Generate a temporary log URL

```sql
EXEC ovh.ip_loadbalancing.loadbalancers.log_url 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"kind": "{{ kind }}"
}'
;
```
</TabItem>
<TabItem value="refresh">

Apply the configuration

```sql
EXEC ovh.ip_loadbalancing.loadbalancers.refresh 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"zone": "{{ zone }}"
}'
;
```
</TabItem>
<TabItem value="terminate">

Request service termination. Starts the termination of the service. The admin contact receives a token by email, to confirm with the `confirmTermination` call.

```sql
EXEC ovh.ip_loadbalancing.loadbalancers.terminate 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
</Tabs>
