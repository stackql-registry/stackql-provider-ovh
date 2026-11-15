--- 
title: users_documents
hide_title: false
hide_table_of_contents: false
keywords:
  - users_documents
  - sms
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

Creates, updates, deletes, gets or lists a <code>users_documents</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="users_documents" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.sms.users_documents" /></td></tr>
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
    <td><CopyableCode code="value" /></td>
    <td><code>string</code></td>
    <td></td>
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
    <td><a href="#parameter-login"><code>login</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-way_type"><code>way_type</code></a></td>
    <td><a href="#parameter-creation_datetime.from"><code>creation_datetime.from</code></a>, <a href="#parameter-creation_datetime.to"><code>creation_datetime.to</code></a>, <a href="#parameter-tag"><code>tag</code></a></td>
    <td>Export SMS to a document. Generates a document with the SMS of the account, filtered by tag, date, direction or batch. Returns the identifier of the document in /me/document.</td>
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
<tr id="parameter-login">
    <td><CopyableCode code="login" /></td>
    <td><code>string</code></td>
    <td>The sms user login</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The internal name of your SMS offer (wire: serviceName)</td>
</tr>
<tr id="parameter-way_type">
    <td><CopyableCode code="way_type" /></td>
    <td><code>string</code></td>
    <td>specify outgoing or incoming sms (wire: wayType)</td>
</tr>
<tr id="parameter-creation_datetime.from">
    <td><CopyableCode code="creation_datetime.from" /></td>
    <td><code>string (date-time)</code></td>
    <td>Filter the value of creationDatetime property (&gt;=) (wire: creationDatetime.from)</td>
</tr>
<tr id="parameter-creation_datetime.to">
    <td><CopyableCode code="creation_datetime.to" /></td>
    <td><code>string (date-time)</code></td>
    <td>Filter the value of creationDatetime property (&lt;=) (wire: creationDatetime.to)</td>
</tr>
<tr id="parameter-tag">
    <td><CopyableCode code="tag" /></td>
    <td><code>string</code></td>
    <td>Select sms with a specific identifier group tag</td>
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

Export SMS to a document. Generates a document with the SMS of the account, filtered by tag, date, direction or batch. Returns the identifier of the document in /me/document.

```sql
SELECT
value
FROM ovh.sms.users_documents
WHERE login = '{{ login }}' -- required
AND service_name = '{{ service_name }}' -- required
AND way_type = '{{ way_type }}' -- required
AND creation_datetime.from = '{{ creation_datetime.from }}'
AND creation_datetime.to = '{{ creation_datetime.to }}'
AND tag = '{{ tag }}'
;
```
</TabItem>
</Tabs>
