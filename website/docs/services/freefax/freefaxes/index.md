--- 
title: freefaxes
hide_title: false
hide_table_of_contents: false
keywords:
  - freefaxes
  - freefax
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

Creates, updates, deletes, gets or lists a <code>freefaxes</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="freefaxes" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.freefax.freefaxes" /></td></tr>
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
    <td><CopyableCode code="from_name" /></td>
    <td><code>string</code></td>
    <td>Name of the sender of the email (wire: fromName)</td>
</tr>
<tr>
    <td><CopyableCode code="fax_max_call" /></td>
    <td><code>integer</code></td>
    <td>Number of tries when sending a fax (1, 2, 3, 4, 5, 6, 7, 8, 9) (wire: faxMaxCall)</td>
</tr>
<tr>
    <td><CopyableCode code="fax_quality" /></td>
    <td><code>string</code></td>
    <td>Available quality for fax documents (best, high, normal) (wire: faxQuality)</td>
</tr>
<tr>
    <td><CopyableCode code="fax_tag_line" /></td>
    <td><code>string</code></td>
    <td>Customised freefax header (wire: faxTagLine)</td>
</tr>
<tr>
    <td><CopyableCode code="from_email" /></td>
    <td><code>string</code></td>
    <td>FROM email header (wire: fromEmail)</td>
</tr>
<tr>
    <td><CopyableCode code="iam" /></td>
    <td><code>object</code></td>
    <td>IAM resource metadata</td>
</tr>
<tr>
    <td><CopyableCode code="number" /></td>
    <td><code>string (phone-number)</code></td>
    <td>Phone number</td>
</tr>
<tr>
    <td><CopyableCode code="redirection_email" /></td>
    <td><code>array</code></td>
    <td>Email address to redirect fax response. (wire: redirectionEmail)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Freefax properties

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
    <td><CopyableCode code="from_name" /></td>
    <td><code>string</code></td>
    <td>Name of the sender of the email (wire: fromName)</td>
</tr>
<tr>
    <td><CopyableCode code="fax_max_call" /></td>
    <td><code>integer</code></td>
    <td>Number of tries when sending a fax (1, 2, 3, 4, 5, 6, 7, 8, 9) (wire: faxMaxCall)</td>
</tr>
<tr>
    <td><CopyableCode code="fax_quality" /></td>
    <td><code>string</code></td>
    <td>Available quality for fax documents (best, high, normal) (wire: faxQuality)</td>
</tr>
<tr>
    <td><CopyableCode code="fax_tag_line" /></td>
    <td><code>string</code></td>
    <td>Customised freefax header (wire: faxTagLine)</td>
</tr>
<tr>
    <td><CopyableCode code="from_email" /></td>
    <td><code>string</code></td>
    <td>FROM email header (wire: fromEmail)</td>
</tr>
<tr>
    <td><CopyableCode code="iam" /></td>
    <td><code>object</code></td>
    <td>IAM resource metadata</td>
</tr>
<tr>
    <td><CopyableCode code="number" /></td>
    <td><code>string (phone-number)</code></td>
    <td>Phone number</td>
</tr>
<tr>
    <td><CopyableCode code="redirection_email" /></td>
    <td><code>array</code></td>
    <td>Email address to redirect fax response. (wire: redirectionEmail)</td>
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
    <td>Get Freefax information</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-iam_tags"><code>iam_tags</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List Freefax line accounts</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Edit the Freefax properties</td>
</tr>
<tr>
    <td><a href="#change_password"><CopyableCode code="change_password" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Generates a new password for your fax account</td>
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
    <td><code>string (phone-number)</code></td>
    <td>Service name</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string (phone-number)</code></td>
    <td>Service name (wire: serviceName)</td>
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

Get Freefax information

```sql
SELECT
from_name,
fax_max_call,
fax_quality,
fax_tag_line,
from_email,
iam,
number,
redirection_email
FROM ovh.freefax.freefaxes
WHERE service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List Freefax line accounts

```sql
SELECT
from_name,
fax_max_call,
fax_quality,
fax_tag_line,
from_email,
iam,
number,
redirection_email
FROM ovh.freefax.freefaxes
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

Edit the Freefax properties

```sql
UPDATE ovh.freefax.freefaxes
SET 
fax_max_call = {{ fax_max_call }},
fax_quality = '{{ fax_quality }}',
fax_tag_line = '{{ fax_tag_line }}',
from_email = '{{ from_email }}',
from_name = '{{ from_name }}',
redirection_email = '{{ redirection_email }}'
WHERE 
service_name = '{{ service_name }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="change_password"
    values={[
        { label: 'change_password', value: 'change_password' }
    ]}
>
<TabItem value="change_password">

Generates a new password for your fax account

```sql
EXEC ovh.freefax.freefaxes.change_password 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
</Tabs>
