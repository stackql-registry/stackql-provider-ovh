--- 
title: service_authentication_policies
hide_title: false
hide_table_of_contents: false
keywords:
  - service_authentication_policies
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

Creates, updates, deletes, gets or lists a <code>service_authentication_policies</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="service_authentication_policies" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.email_exchange.service_authentication_policies" /></td></tr>
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
    <td><CopyableCode code="id" /></td>
    <td><code>integer</code></td>
    <td>Authentication policy id</td>
</tr>
<tr>
    <td><CopyableCode code="block_legacy_auth_active_sync" /></td>
    <td><code>boolean</code></td>
    <td>Block legacy authentication on ActiveSync (wire: blockLegacyAuthActiveSync)</td>
</tr>
<tr>
    <td><CopyableCode code="block_legacy_auth_autodiscover" /></td>
    <td><code>boolean</code></td>
    <td>Block legacy authentication on Autodiscover (wire: blockLegacyAuthAutodiscover)</td>
</tr>
<tr>
    <td><CopyableCode code="block_legacy_auth_imap" /></td>
    <td><code>boolean</code></td>
    <td>Block legacy authentication on Imap (wire: blockLegacyAuthImap)</td>
</tr>
<tr>
    <td><CopyableCode code="block_legacy_auth_mapi" /></td>
    <td><code>boolean</code></td>
    <td>Block legacy authentication on Mapi (wire: blockLegacyAuthMapi)</td>
</tr>
<tr>
    <td><CopyableCode code="block_legacy_auth_offline_address_book" /></td>
    <td><code>boolean</code></td>
    <td>Block legacy authentication on Offline Address Book (wire: blockLegacyAuthOfflineAddressBook)</td>
</tr>
<tr>
    <td><CopyableCode code="block_legacy_auth_pop" /></td>
    <td><code>boolean</code></td>
    <td>Block legacy authentication on Pop (wire: blockLegacyAuthPop)</td>
</tr>
<tr>
    <td><CopyableCode code="block_legacy_auth_web_services" /></td>
    <td><code>boolean</code></td>
    <td>Block legacy authentication on Web Services (wire: blockLegacyAuthWebServices)</td>
</tr>
<tr>
    <td><CopyableCode code="block_modern_auth_active_sync" /></td>
    <td><code>boolean</code></td>
    <td>Block modern authentication on ActiveSync (wire: blockModernAuthActiveSync)</td>
</tr>
<tr>
    <td><CopyableCode code="block_modern_auth_autodiscover" /></td>
    <td><code>boolean</code></td>
    <td>Block modern authentication on Autodiscover (wire: blockModernAuthAutodiscover)</td>
</tr>
<tr>
    <td><CopyableCode code="block_modern_auth_imap" /></td>
    <td><code>boolean</code></td>
    <td>Block modern authentication on Imap (wire: blockModernAuthImap)</td>
</tr>
<tr>
    <td><CopyableCode code="block_modern_auth_mapi" /></td>
    <td><code>boolean</code></td>
    <td>Block modern authentication on Mapi (wire: blockModernAuthMapi)</td>
</tr>
<tr>
    <td><CopyableCode code="block_modern_auth_offline_address_book" /></td>
    <td><code>boolean</code></td>
    <td>Block modern authentication on Offline Address Book (wire: blockModernAuthOfflineAddressBook)</td>
</tr>
<tr>
    <td><CopyableCode code="block_modern_auth_pop" /></td>
    <td><code>boolean</code></td>
    <td>Block modern authentication on Pop (wire: blockModernAuthPop)</td>
</tr>
<tr>
    <td><CopyableCode code="block_modern_auth_web_services" /></td>
    <td><code>boolean</code></td>
    <td>Block modern authentication on Web Services (wire: blockModernAuthWebServices)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Get authentication policy for protocols

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
    <td><CopyableCode code="id" /></td>
    <td><code>integer</code></td>
    <td>Authentication policy id</td>
</tr>
<tr>
    <td><CopyableCode code="block_legacy_auth_active_sync" /></td>
    <td><code>boolean</code></td>
    <td>Block legacy authentication on ActiveSync (wire: blockLegacyAuthActiveSync)</td>
</tr>
<tr>
    <td><CopyableCode code="block_legacy_auth_autodiscover" /></td>
    <td><code>boolean</code></td>
    <td>Block legacy authentication on Autodiscover (wire: blockLegacyAuthAutodiscover)</td>
</tr>
<tr>
    <td><CopyableCode code="block_legacy_auth_imap" /></td>
    <td><code>boolean</code></td>
    <td>Block legacy authentication on Imap (wire: blockLegacyAuthImap)</td>
</tr>
<tr>
    <td><CopyableCode code="block_legacy_auth_mapi" /></td>
    <td><code>boolean</code></td>
    <td>Block legacy authentication on Mapi (wire: blockLegacyAuthMapi)</td>
</tr>
<tr>
    <td><CopyableCode code="block_legacy_auth_offline_address_book" /></td>
    <td><code>boolean</code></td>
    <td>Block legacy authentication on Offline Address Book (wire: blockLegacyAuthOfflineAddressBook)</td>
</tr>
<tr>
    <td><CopyableCode code="block_legacy_auth_pop" /></td>
    <td><code>boolean</code></td>
    <td>Block legacy authentication on Pop (wire: blockLegacyAuthPop)</td>
</tr>
<tr>
    <td><CopyableCode code="block_legacy_auth_web_services" /></td>
    <td><code>boolean</code></td>
    <td>Block legacy authentication on Web Services (wire: blockLegacyAuthWebServices)</td>
</tr>
<tr>
    <td><CopyableCode code="block_modern_auth_active_sync" /></td>
    <td><code>boolean</code></td>
    <td>Block modern authentication on ActiveSync (wire: blockModernAuthActiveSync)</td>
</tr>
<tr>
    <td><CopyableCode code="block_modern_auth_autodiscover" /></td>
    <td><code>boolean</code></td>
    <td>Block modern authentication on Autodiscover (wire: blockModernAuthAutodiscover)</td>
</tr>
<tr>
    <td><CopyableCode code="block_modern_auth_imap" /></td>
    <td><code>boolean</code></td>
    <td>Block modern authentication on Imap (wire: blockModernAuthImap)</td>
</tr>
<tr>
    <td><CopyableCode code="block_modern_auth_mapi" /></td>
    <td><code>boolean</code></td>
    <td>Block modern authentication on Mapi (wire: blockModernAuthMapi)</td>
</tr>
<tr>
    <td><CopyableCode code="block_modern_auth_offline_address_book" /></td>
    <td><code>boolean</code></td>
    <td>Block modern authentication on Offline Address Book (wire: blockModernAuthOfflineAddressBook)</td>
</tr>
<tr>
    <td><CopyableCode code="block_modern_auth_pop" /></td>
    <td><code>boolean</code></td>
    <td>Block modern authentication on Pop (wire: blockModernAuthPop)</td>
</tr>
<tr>
    <td><CopyableCode code="block_modern_auth_web_services" /></td>
    <td><code>boolean</code></td>
    <td>Block modern authentication on Web Services (wire: blockModernAuthWebServices)</td>
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
    <td><a href="#parameter-exchange_service"><code>exchange_service</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-organization_name"><code>organization_name</code></a></td>
    <td></td>
    <td>Get an authentication policy. Returns, for each protocol, whether legacy and modern authentication are blocked: ActiveSync, Autodiscover, IMAP, MAPI, offline address book, POP and web services.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-exchange_service"><code>exchange_service</code></a>, <a href="#parameter-organization_name"><code>organization_name</code></a></td>
    <td><a href="#parameter-block_legacy_auth_active_sync"><code>block_legacy_auth_active_sync</code></a>, <a href="#parameter-block_legacy_auth_autodiscover"><code>block_legacy_auth_autodiscover</code></a>, <a href="#parameter-block_legacy_auth_imap"><code>block_legacy_auth_imap</code></a>, <a href="#parameter-block_legacy_auth_mapi"><code>block_legacy_auth_mapi</code></a>, <a href="#parameter-block_legacy_auth_offline_address_book"><code>block_legacy_auth_offline_address_book</code></a>, <a href="#parameter-block_legacy_auth_pop"><code>block_legacy_auth_pop</code></a>, <a href="#parameter-block_legacy_auth_web_services"><code>block_legacy_auth_web_services</code></a>, <a href="#parameter-block_modern_auth_active_sync"><code>block_modern_auth_active_sync</code></a>, <a href="#parameter-block_modern_auth_autodiscover"><code>block_modern_auth_autodiscover</code></a>, <a href="#parameter-block_modern_auth_imap"><code>block_modern_auth_imap</code></a>, <a href="#parameter-block_modern_auth_mapi"><code>block_modern_auth_mapi</code></a>, <a href="#parameter-block_modern_auth_offline_address_book"><code>block_modern_auth_offline_address_book</code></a>, <a href="#parameter-block_modern_auth_pop"><code>block_modern_auth_pop</code></a>, <a href="#parameter-block_modern_auth_web_services"><code>block_modern_auth_web_services</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List authentication policies. Returns the IDs of the authentication policies. Filter them by the legacy or modern authentication blocked on a protocol, such as `blockLegacyAuthImap`.</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>integer</code></td>
    <td>Authentication policy id</td>
</tr>
<tr id="parameter-organization_name">
    <td><CopyableCode code="organization_name" /></td>
    <td><code>string</code></td>
    <td>The internal name of your exchange organization (wire: organizationName)</td>
</tr>
<tr id="parameter-block_legacy_auth_active_sync">
    <td><CopyableCode code="block_legacy_auth_active_sync" /></td>
    <td><code>boolean</code></td>
    <td>Filter the value of blockLegacyAuthActiveSync property (=) (wire: blockLegacyAuthActiveSync)</td>
</tr>
<tr id="parameter-block_legacy_auth_autodiscover">
    <td><CopyableCode code="block_legacy_auth_autodiscover" /></td>
    <td><code>boolean</code></td>
    <td>Filter the value of blockLegacyAuthAutodiscover property (=) (wire: blockLegacyAuthAutodiscover)</td>
</tr>
<tr id="parameter-block_legacy_auth_imap">
    <td><CopyableCode code="block_legacy_auth_imap" /></td>
    <td><code>boolean</code></td>
    <td>Filter the value of blockLegacyAuthImap property (=) (wire: blockLegacyAuthImap)</td>
</tr>
<tr id="parameter-block_legacy_auth_mapi">
    <td><CopyableCode code="block_legacy_auth_mapi" /></td>
    <td><code>boolean</code></td>
    <td>Filter the value of blockLegacyAuthMapi property (=) (wire: blockLegacyAuthMapi)</td>
</tr>
<tr id="parameter-block_legacy_auth_offline_address_book">
    <td><CopyableCode code="block_legacy_auth_offline_address_book" /></td>
    <td><code>boolean</code></td>
    <td>Filter the value of blockLegacyAuthOfflineAddressBook property (=) (wire: blockLegacyAuthOfflineAddressBook)</td>
</tr>
<tr id="parameter-block_legacy_auth_pop">
    <td><CopyableCode code="block_legacy_auth_pop" /></td>
    <td><code>boolean</code></td>
    <td>Filter the value of blockLegacyAuthPop property (=) (wire: blockLegacyAuthPop)</td>
</tr>
<tr id="parameter-block_legacy_auth_web_services">
    <td><CopyableCode code="block_legacy_auth_web_services" /></td>
    <td><code>boolean</code></td>
    <td>Filter the value of blockLegacyAuthWebServices property (=) (wire: blockLegacyAuthWebServices)</td>
</tr>
<tr id="parameter-block_modern_auth_active_sync">
    <td><CopyableCode code="block_modern_auth_active_sync" /></td>
    <td><code>boolean</code></td>
    <td>Filter the value of blockModernAuthActiveSync property (=) (wire: blockModernAuthActiveSync)</td>
</tr>
<tr id="parameter-block_modern_auth_autodiscover">
    <td><CopyableCode code="block_modern_auth_autodiscover" /></td>
    <td><code>boolean</code></td>
    <td>Filter the value of blockModernAuthAutodiscover property (=) (wire: blockModernAuthAutodiscover)</td>
</tr>
<tr id="parameter-block_modern_auth_imap">
    <td><CopyableCode code="block_modern_auth_imap" /></td>
    <td><code>boolean</code></td>
    <td>Filter the value of blockModernAuthImap property (=) (wire: blockModernAuthImap)</td>
</tr>
<tr id="parameter-block_modern_auth_mapi">
    <td><CopyableCode code="block_modern_auth_mapi" /></td>
    <td><code>boolean</code></td>
    <td>Filter the value of blockModernAuthMapi property (=) (wire: blockModernAuthMapi)</td>
</tr>
<tr id="parameter-block_modern_auth_offline_address_book">
    <td><CopyableCode code="block_modern_auth_offline_address_book" /></td>
    <td><code>boolean</code></td>
    <td>Filter the value of blockModernAuthOfflineAddressBook property (=) (wire: blockModernAuthOfflineAddressBook)</td>
</tr>
<tr id="parameter-block_modern_auth_pop">
    <td><CopyableCode code="block_modern_auth_pop" /></td>
    <td><code>boolean</code></td>
    <td>Filter the value of blockModernAuthPop property (=) (wire: blockModernAuthPop)</td>
</tr>
<tr id="parameter-block_modern_auth_web_services">
    <td><CopyableCode code="block_modern_auth_web_services" /></td>
    <td><code>boolean</code></td>
    <td>Filter the value of blockModernAuthWebServices property (=) (wire: blockModernAuthWebServices)</td>
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

Get an authentication policy. Returns, for each protocol, whether legacy and modern authentication are blocked: ActiveSync, Autodiscover, IMAP, MAPI, offline address book, POP and web services.

```sql
SELECT
id,
block_legacy_auth_active_sync,
block_legacy_auth_autodiscover,
block_legacy_auth_imap,
block_legacy_auth_mapi,
block_legacy_auth_offline_address_book,
block_legacy_auth_pop,
block_legacy_auth_web_services,
block_modern_auth_active_sync,
block_modern_auth_autodiscover,
block_modern_auth_imap,
block_modern_auth_mapi,
block_modern_auth_offline_address_book,
block_modern_auth_pop,
block_modern_auth_web_services
FROM ovh.email_exchange.service_authentication_policies
WHERE exchange_service = '{{ exchange_service }}' -- required
AND id = '{{ id }}' -- required
AND organization_name = '{{ organization_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List authentication policies. Returns the IDs of the authentication policies. Filter them by the legacy or modern authentication blocked on a protocol, such as `blockLegacyAuthImap`.

```sql
SELECT
id,
block_legacy_auth_active_sync,
block_legacy_auth_autodiscover,
block_legacy_auth_imap,
block_legacy_auth_mapi,
block_legacy_auth_offline_address_book,
block_legacy_auth_pop,
block_legacy_auth_web_services,
block_modern_auth_active_sync,
block_modern_auth_autodiscover,
block_modern_auth_imap,
block_modern_auth_mapi,
block_modern_auth_offline_address_book,
block_modern_auth_pop,
block_modern_auth_web_services
FROM ovh.email_exchange.service_authentication_policies
WHERE exchange_service = '{{ exchange_service }}' -- required
AND organization_name = '{{ organization_name }}' -- required
AND block_legacy_auth_active_sync = '{{ block_legacy_auth_active_sync }}'
AND block_legacy_auth_autodiscover = '{{ block_legacy_auth_autodiscover }}'
AND block_legacy_auth_imap = '{{ block_legacy_auth_imap }}'
AND block_legacy_auth_mapi = '{{ block_legacy_auth_mapi }}'
AND block_legacy_auth_offline_address_book = '{{ block_legacy_auth_offline_address_book }}'
AND block_legacy_auth_pop = '{{ block_legacy_auth_pop }}'
AND block_legacy_auth_web_services = '{{ block_legacy_auth_web_services }}'
AND block_modern_auth_active_sync = '{{ block_modern_auth_active_sync }}'
AND block_modern_auth_autodiscover = '{{ block_modern_auth_autodiscover }}'
AND block_modern_auth_imap = '{{ block_modern_auth_imap }}'
AND block_modern_auth_mapi = '{{ block_modern_auth_mapi }}'
AND block_modern_auth_offline_address_book = '{{ block_modern_auth_offline_address_book }}'
AND block_modern_auth_pop = '{{ block_modern_auth_pop }}'
AND block_modern_auth_web_services = '{{ block_modern_auth_web_services }}'
AND x_pagination_mode = '{{ x_pagination_mode }}'
;
```
</TabItem>
</Tabs>
