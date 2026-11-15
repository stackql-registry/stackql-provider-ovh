--- 
title: hosted_email_services_accounts
hide_title: false
hide_table_of_contents: false
keywords:
  - hosted_email_services_accounts
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

Creates, updates, deletes, gets or lists a <code>hosted_email_services_accounts</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="hosted_email_services_accounts" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.pack_xdsl.hosted_email_services_accounts" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
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
    <td><CopyableCode code="antispam_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Is the anti-spam enabled ? (wire: antispamEnabled)</td>
</tr>
<tr>
    <td><CopyableCode code="antivirus_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Is the anti-virus enabled ? (wire: antivirusEnabled)</td>
</tr>
<tr>
    <td><CopyableCode code="offer" /></td>
    <td><code>string</code></td>
    <td>Offer name (individual)</td>
</tr>
<tr>
    <td><CopyableCode code="primary_email_address" /></td>
    <td><code>string</code></td>
    <td>Primary email address (wire: primaryEmailAddress)</td>
</tr>
<tr>
    <td><CopyableCode code="quota" /></td>
    <td><code>object</code></td>
    <td>Quota of the mailbox</td>
</tr>
<tr>
    <td><CopyableCode code="size" /></td>
    <td><code>object</code></td>
    <td>Size of the maibox</td>
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
    <td>Get the account of a hosted email service. Returns the primary address, offer, quota, mailbox size and the anti-spam and anti-virus status of the account.</td>
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
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' }
    ]}
>
<TabItem value="get">

Get the account of a hosted email service. Returns the primary address, offer, quota, mailbox size and the anti-spam and anti-virus status of the account.

```sql
SELECT
antispam_enabled,
antivirus_enabled,
offer,
primary_email_address,
quota,
size
FROM ovh.pack_xdsl.hosted_email_services_accounts
WHERE domain = '{{ domain }}' -- required
AND pack_name = '{{ pack_name }}' -- required
;
```
</TabItem>
</Tabs>
