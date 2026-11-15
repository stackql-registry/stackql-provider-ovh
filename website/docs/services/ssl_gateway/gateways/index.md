--- 
title: gateways
hide_title: false
hide_table_of_contents: false
keywords:
  - gateways
  - ssl_gateway
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

Creates, updates, deletes, gets or lists a <code>gateways</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="gateways" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.ssl_gateway.gateways" /></td></tr>
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
    <td>Custom name of your SSL Gateway (wire: displayName)</td>
</tr>
<tr>
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The internal name of your SSL Gateway (wire: serviceName)</td>
</tr>
<tr>
    <td><CopyableCode code="allowed_source" /></td>
    <td><code>array</code></td>
    <td>Restrict SSL Gateway access to these ip block. No restriction if null (wire: allowedSource)</td>
</tr>
<tr>
    <td><CopyableCode code="hsts" /></td>
    <td><code>boolean</code></td>
    <td>Set to true to enable Strict-Transport-Security HTTP header</td>
</tr>
<tr>
    <td><CopyableCode code="https_redirect" /></td>
    <td><code>boolean</code></td>
    <td>Set to true to enable https redirect (wire: httpsRedirect)</td>
</tr>
<tr>
    <td><CopyableCode code="iam" /></td>
    <td><code>object</code></td>
    <td>IAM resource metadata</td>
</tr>
<tr>
    <td><CopyableCode code="ipv_4" /></td>
    <td><code>string (ipv4)</code></td>
    <td>The IPv4 you need to put in the A field of your domain name (example: 192.0.2.0) (wire: ipv4)</td>
</tr>
<tr>
    <td><CopyableCode code="ipv_6" /></td>
    <td><code>string (ipv6)</code></td>
    <td>The IPv6 you need to put in the AAAA field of your domain name (example: 2001:41d0:1:1994::1) (wire: ipv6)</td>
</tr>
<tr>
    <td><CopyableCode code="metrics_token" /></td>
    <td><code>string</code></td>
    <td>The metrics token associated with your SSL Gateway (wire: metricsToken)</td>
</tr>
<tr>
    <td><CopyableCode code="offer" /></td>
    <td><code>string</code></td>
    <td>Current offer for your SSL Gateway (advanced, enterprise, free, internal)</td>
</tr>
<tr>
    <td><CopyableCode code="reverse" /></td>
    <td><code>string</code></td>
    <td>Custom reverse for your SSL Gateway</td>
</tr>
<tr>
    <td><CopyableCode code="server_https" /></td>
    <td><code>boolean</code></td>
    <td>Set to true to contact backend servers over HTTPS (wire: serverHttps)</td>
</tr>
<tr>
    <td><CopyableCode code="ssl_configuration" /></td>
    <td><code>string</code></td>
    <td>Modern oldest compatible clients : Firefox 27, Chrome 30, IE 11 on Windows 7, Edge, Opera 17, Safari 9, Android 5.0, and Java 8. Intermediate oldest compatible clients : Firefox 1, Chrome 1, IE 7, Opera 5, Safari 1, Windows XP IE8, Android 2.3, Java 7. Intermediate if null. (intermediate, internal, modern) (wire: sslConfiguration)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Current state of your SSL Gateway (creating, deleted, deleting, http-only, internal, ok, suspended, upgrading)</td>
</tr>
<tr>
    <td><CopyableCode code="zones" /></td>
    <td><code>array</code></td>
    <td>Zones of your SSL Gateway</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Your SSL Gateway

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
    <td>Custom name of your SSL Gateway (wire: displayName)</td>
</tr>
<tr>
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The internal name of your SSL Gateway (wire: serviceName)</td>
</tr>
<tr>
    <td><CopyableCode code="allowed_source" /></td>
    <td><code>array</code></td>
    <td>Restrict SSL Gateway access to these ip block. No restriction if null (wire: allowedSource)</td>
</tr>
<tr>
    <td><CopyableCode code="hsts" /></td>
    <td><code>boolean</code></td>
    <td>Set to true to enable Strict-Transport-Security HTTP header</td>
</tr>
<tr>
    <td><CopyableCode code="https_redirect" /></td>
    <td><code>boolean</code></td>
    <td>Set to true to enable https redirect (wire: httpsRedirect)</td>
</tr>
<tr>
    <td><CopyableCode code="iam" /></td>
    <td><code>object</code></td>
    <td>IAM resource metadata</td>
</tr>
<tr>
    <td><CopyableCode code="ipv_4" /></td>
    <td><code>string (ipv4)</code></td>
    <td>The IPv4 you need to put in the A field of your domain name (example: 192.0.2.0) (wire: ipv4)</td>
</tr>
<tr>
    <td><CopyableCode code="ipv_6" /></td>
    <td><code>string (ipv6)</code></td>
    <td>The IPv6 you need to put in the AAAA field of your domain name (example: 2001:41d0:1:1994::1) (wire: ipv6)</td>
</tr>
<tr>
    <td><CopyableCode code="metrics_token" /></td>
    <td><code>string</code></td>
    <td>The metrics token associated with your SSL Gateway (wire: metricsToken)</td>
</tr>
<tr>
    <td><CopyableCode code="offer" /></td>
    <td><code>string</code></td>
    <td>Current offer for your SSL Gateway (advanced, enterprise, free, internal)</td>
</tr>
<tr>
    <td><CopyableCode code="reverse" /></td>
    <td><code>string</code></td>
    <td>Custom reverse for your SSL Gateway</td>
</tr>
<tr>
    <td><CopyableCode code="server_https" /></td>
    <td><code>boolean</code></td>
    <td>Set to true to contact backend servers over HTTPS (wire: serverHttps)</td>
</tr>
<tr>
    <td><CopyableCode code="ssl_configuration" /></td>
    <td><code>string</code></td>
    <td>Modern oldest compatible clients : Firefox 27, Chrome 30, IE 11 on Windows 7, Edge, Opera 17, Safari 9, Android 5.0, and Java 8. Intermediate oldest compatible clients : Firefox 1, Chrome 1, IE 7, Opera 5, Safari 1, Windows XP IE8, Android 2.3, Java 7. Intermediate if null. (intermediate, internal, modern) (wire: sslConfiguration)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Current state of your SSL Gateway (creating, deleted, deleting, http-only, internal, ok, suspended, upgrading)</td>
</tr>
<tr>
    <td><CopyableCode code="zones" /></td>
    <td><code>array</code></td>
    <td>Zones of your SSL Gateway</td>
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
    <td>Get an SSL Gateway (Beta version)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-iam_tags"><code>iam_tags</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List SSL Gateways (Beta version)</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Update an SSL Gateway (Beta version)</td>
</tr>
<tr>
    <td><a href="#change_contact"><CopyableCode code="change_contact" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Change service contacts. Starts a procedure to change the admin, tech or billing contact of the service. (Beta version)</td>
</tr>
<tr>
    <td><a href="#confirm_termination"><CopyableCode code="confirm_termination" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-token"><code>token</code></a></td>
    <td></td>
    <td>Confirm service termination. Terminates the service with the token sent by email to the admin contact. A reason, a future use and a comment can be given. (Beta version)</td>
</tr>
<tr>
    <td><a href="#renew_certificate"><CopyableCode code="renew_certificate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Renew certificates (Beta version)</td>
</tr>
<tr>
    <td><a href="#terminate"><CopyableCode code="terminate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Request service termination. Starts the termination of the service. The admin contact receives a token by email, to confirm with the `confirmTermination` call. (Beta version)</td>
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
    <td>The internal name of your SSL Gateway</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The internal name of your SSL Gateway (wire: serviceName)</td>
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

Get an SSL Gateway (Beta version)

```sql
SELECT
display_name,
service_name,
allowed_source,
hsts,
https_redirect,
iam,
ipv_4,
ipv_6,
metrics_token,
offer,
reverse,
server_https,
ssl_configuration,
state,
zones
FROM ovh.ssl_gateway.gateways
WHERE service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List SSL Gateways (Beta version)

```sql
SELECT
display_name,
service_name,
allowed_source,
hsts,
https_redirect,
iam,
ipv_4,
ipv_6,
metrics_token,
offer,
reverse,
server_https,
ssl_configuration,
state,
zones
FROM ovh.ssl_gateway.gateways
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

Update an SSL Gateway (Beta version)

```sql
UPDATE ovh.ssl_gateway.gateways
SET 
allowed_source = '{{ allowed_source }}',
display_name = '{{ display_name }}',
hsts = {{ hsts }},
https_redirect = {{ https_redirect }},
reverse = '{{ reverse }}',
server_https = {{ server_https }},
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
        { label: 'renew_certificate', value: 'renew_certificate' },
        { label: 'terminate', value: 'terminate' }
    ]}
>
<TabItem value="change_contact">

Change service contacts. Starts a procedure to change the admin, tech or billing contact of the service. (Beta version)

```sql
EXEC ovh.ssl_gateway.gateways.change_contact 
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

Confirm service termination. Terminates the service with the token sent by email to the admin contact. A reason, a future use and a comment can be given. (Beta version)

```sql
EXEC ovh.ssl_gateway.gateways.confirm_termination 
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
<TabItem value="renew_certificate">

Renew certificates (Beta version)

```sql
EXEC ovh.ssl_gateway.gateways.renew_certificate 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"domain": "{{ domain }}"
}'
;
```
</TabItem>
<TabItem value="terminate">

Request service termination. Starts the termination of the service. The admin contact receives a token by email, to confirm with the `confirmTermination` call. (Beta version)

```sql
EXEC ovh.ssl_gateway.gateways.terminate 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
</Tabs>
