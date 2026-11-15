--- 
title: account_migrate_destination_email_address_check_migrates
hide_title: false
hide_table_of_contents: false
keywords:
  - account_migrate_destination_email_address_check_migrates
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

Creates, updates, deletes, gets or lists an <code>account_migrate_destination_email_address_check_migrates</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="account_migrate_destination_email_address_check_migrates" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.email_domain.account_migrate_destination_email_address_check_migrates" /></td></tr>
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
    <td><CopyableCode code="alias" /></td>
    <td><code>array</code></td>
    <td>List of aliases</td>
</tr>
<tr>
    <td><CopyableCode code="error" /></td>
    <td><code>array</code></td>
    <td>List of errors</td>
</tr>
<tr>
    <td><CopyableCode code="filter" /></td>
    <td><code>array</code></td>
    <td>List of filters</td>
</tr>
<tr>
    <td><CopyableCode code="forward" /></td>
    <td><code>array</code></td>
    <td>List of forwards</td>
</tr>
<tr>
    <td><CopyableCode code="warning" /></td>
    <td><code>array</code></td>
    <td>List of warnings</td>
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
    <td><a href="#parameter-account_name"><code>account_name</code></a>, <a href="#parameter-destination_email_address"><code>destination_email_address</code></a>, <a href="#parameter-destination_service_name"><code>destination_service_name</code></a>, <a href="#parameter-domain"><code>domain</code></a></td>
    <td></td>
    <td>Check an email account migration. Returns the errors and warnings found for the migration to the destination account, and the aliases, filters and forwards found. (Beta version)</td>
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
<tr id="parameter-destination_email_address">
    <td><CopyableCode code="destination_email_address" /></td>
    <td><code>string</code></td>
    <td>Destination account name (wire: destinationEmailAddress)</td>
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

Check an email account migration. Returns the errors and warnings found for the migration to the destination account, and the aliases, filters and forwards found. (Beta version)

```sql
SELECT
alias,
error,
filter,
forward,
warning
FROM ovh.email_domain.account_migrate_destination_email_address_check_migrates
WHERE account_name = '{{ account_name }}' -- required
AND destination_email_address = '{{ destination_email_address }}' -- required
AND destination_service_name = '{{ destination_service_name }}' -- required
AND domain = '{{ domain }}' -- required
;
```
</TabItem>
</Tabs>
