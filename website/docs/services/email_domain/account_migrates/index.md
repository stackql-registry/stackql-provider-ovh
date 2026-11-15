--- 
title: account_migrates
hide_title: false
hide_table_of_contents: false
keywords:
  - account_migrates
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

Creates, updates, deletes, gets or lists an <code>account_migrates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="account_migrates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.email_domain.account_migrates" /></td></tr>
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
    <td><CopyableCode code="destination_service_name" /></td>
    <td><code>string</code></td>
    <td>Service name allowed as migration destination (wire: destinationServiceName)</td>
</tr>
<tr>
    <td><CopyableCode code="contact_admin" /></td>
    <td><code>string</code></td>
    <td>Admin contact of service (wire: contactAdmin)</td>
</tr>
<tr>
    <td><CopyableCode code="contact_billing" /></td>
    <td><code>string</code></td>
    <td>Billing contact of service (wire: contactBilling)</td>
</tr>
<tr>
    <td><CopyableCode code="contact_tech" /></td>
    <td><code>string</code></td>
    <td>Tech contact of service (wire: contactTech)</td>
</tr>
<tr>
    <td><CopyableCode code="creation" /></td>
    <td><code>string (date)</code></td>
    <td>Creation date of service</td>
</tr>
<tr>
    <td><CopyableCode code="expiration" /></td>
    <td><code>string (date)</code></td>
    <td>Expiration date of service</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Offer type of service (EMAIL PRO, HOSTED EXCHANGE, PRIVATE EXCHANGE, PROVIDER EXCHANGE)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Migration service

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
    <td><CopyableCode code="destination_service_name" /></td>
    <td><code>string</code></td>
    <td>Service name allowed as migration destination (wire: destinationServiceName)</td>
</tr>
<tr>
    <td><CopyableCode code="contact_admin" /></td>
    <td><code>string</code></td>
    <td>Admin contact of service (wire: contactAdmin)</td>
</tr>
<tr>
    <td><CopyableCode code="contact_billing" /></td>
    <td><code>string</code></td>
    <td>Billing contact of service (wire: contactBilling)</td>
</tr>
<tr>
    <td><CopyableCode code="contact_tech" /></td>
    <td><code>string</code></td>
    <td>Tech contact of service (wire: contactTech)</td>
</tr>
<tr>
    <td><CopyableCode code="creation" /></td>
    <td><code>string (date)</code></td>
    <td>Creation date of service</td>
</tr>
<tr>
    <td><CopyableCode code="expiration" /></td>
    <td><code>string (date)</code></td>
    <td>Expiration date of service</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Offer type of service (EMAIL PRO, HOSTED EXCHANGE, PRIVATE EXCHANGE, PROVIDER EXCHANGE)</td>
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
    <td><a href="#parameter-account_name"><code>account_name</code></a>, <a href="#parameter-destination_service_name"><code>destination_service_name</code></a>, <a href="#parameter-domain"><code>domain</code></a></td>
    <td></td>
    <td>Get a migration destination. Returns the offer type, creation and expiration dates, and admin, tech and billing contacts of the destination service. (Beta version)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-account_name"><code>account_name</code></a>, <a href="#parameter-domain"><code>domain</code></a></td>
    <td><a href="#parameter-type"><code>type</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List migration destinations. Returns the names of the services the email account can be migrated to. Filter them by `type`: Email Pro, hosted, private or provider Exchange. (Beta version)</td>
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
<tr id="parameter-account_name">
    <td><CopyableCode code="account_name" /></td>
    <td><code>string</code></td>
    <td>Name of account (wire: accountName)</td>
</tr>
<tr id="parameter-api_host">
    <td><CopyableCode code="api_host" /></td>
    <td><code>string</code></td>
    <td>The OVHcloud API host. Selected by OVH_ENDPOINT (ovh-eu, ovh-ca or ovh-us; default ovh-eu). (default: api.eu.ovhcloud.com, x-stackQL-envVarSelector: &#123;"envVar":"OVH_ENDPOINT","default":"ovh-eu","values":&#123;"ovh-eu":"api.eu.ovhcloud.com","ovh-ca":"api.ca.ovhcloud.com","ovh-us":"api.us.ovhcloud.com"&#125;&#125;)</td>
</tr>
<tr id="parameter-destination_service_name">
    <td><CopyableCode code="destination_service_name" /></td>
    <td><code>string</code></td>
    <td>Service name allowed as migration destination (wire: destinationServiceName)</td>
</tr>
<tr id="parameter-domain">
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>Name of your domain name</td>
</tr>
<tr id="parameter-type">
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Type of migration service</td>
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

Get a migration destination. Returns the offer type, creation and expiration dates, and admin, tech and billing contacts of the destination service. (Beta version)

```sql
SELECT
destination_service_name,
contact_admin,
contact_billing,
contact_tech,
creation,
expiration,
type
FROM ovh.email_domain.account_migrates
WHERE account_name = '{{ account_name }}' -- required
AND destination_service_name = '{{ destination_service_name }}' -- required
AND domain = '{{ domain }}' -- required
;
```
</TabItem>
<TabItem value="list">

List migration destinations. Returns the names of the services the email account can be migrated to. Filter them by `type`: Email Pro, hosted, private or provider Exchange. (Beta version)

```sql
SELECT
destination_service_name,
contact_admin,
contact_billing,
contact_tech,
creation,
expiration,
type
FROM ovh.email_domain.account_migrates
WHERE account_name = '{{ account_name }}' -- required
AND domain = '{{ domain }}' -- required
AND type = '{{ type }}'
AND x_pagination_mode = '{{ x_pagination_mode }}'
;
```
</TabItem>
</Tabs>
