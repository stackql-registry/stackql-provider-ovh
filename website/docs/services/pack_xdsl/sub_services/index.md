--- 
title: sub_services
hide_title: false
hide_table_of_contents: false
keywords:
  - sub_services
  - pack_xdsl
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

Creates, updates, deletes, gets or lists a <code>sub_services</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="sub_services" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.pack_xdsl.sub_services" /></td></tr>
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
    <td><code>number</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Service name (domain, emailPro, exchangeAccount, exchangeIndividual, exchangeOrganization, grt10ho, grt20m10ho, grt20m4ho, grt4ho, grt5m10ho, grt5m4ho, grtAlt, grtDsp, grtFt, grtKosc, grtOvh, hostedEmail, modem, overTheBoxHardware, overTheBoxService, voipAlias, voipBillingAccount, voipEcoFax, voipLine, voipTrunk, xdslAccess)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Service link to the pack

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
    <td><code>number</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Service name (domain, emailPro, exchangeAccount, exchangeIndividual, exchangeOrganization, grt10ho, grt20m10ho, grt20m4ho, grt4ho, grt5m10ho, grt5m4ho, grtAlt, grtDsp, grtFt, grtKosc, grtOvh, hostedEmail, modem, overTheBoxHardware, overTheBoxService, voipAlias, voipBillingAccount, voipEcoFax, voipLine, voipTrunk, xdslAccess)</td>
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
    <td><a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-pack_name"><code>pack_name</code></a></td>
    <td></td>
    <td>Get a service contained in an xDSL pack. Returns the ID, domain and type of a service of the pack. Its unpack terms come from keepServiceTerms.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-pack_name"><code>pack_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List the services contained in an xDSL pack. Returns the domains of the services of the pack. Get a service for its type and unpack terms.</td>
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
    <td></td>
</tr>
<tr id="parameter-pack_name">
    <td><CopyableCode code="pack_name" /></td>
    <td><code>string</code></td>
    <td>The internal name of your pack (wire: packName)</td>
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

Get a service contained in an xDSL pack. Returns the ID, domain and type of a service of the pack. Its unpack terms come from keepServiceTerms.

```sql
SELECT
id,
domain,
type
FROM ovh.pack_xdsl.sub_services
WHERE domain = '{{ domain }}' -- required
AND pack_name = '{{ pack_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List the services contained in an xDSL pack. Returns the domains of the services of the pack. Get a service for its type and unpack terms.

```sql
SELECT
id,
domain,
type
FROM ovh.pack_xdsl.sub_services
WHERE pack_name = '{{ pack_name }}' -- required
AND x_pagination_mode = '{{ x_pagination_mode }}'
;
```
</TabItem>
</Tabs>
