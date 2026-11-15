--- 
title: forms
hide_title: false
hide_table_of_contents: false
keywords:
  - forms
  - services
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

Creates, updates, deletes, gets or lists a <code>forms</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="forms" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.services.forms" /></td></tr>
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the form</td>
</tr>
<tr>
    <td><CopyableCode code="questions" /></td>
    <td><code>array</code></td>
    <td>List of available questions for the form</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Description of a form

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the form</td>
</tr>
<tr>
    <td><CopyableCode code="questions" /></td>
    <td><code>array</code></td>
    <td>List of available questions for the form</td>
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
    <td><a href="#parameter-form_name"><code>form_name</code></a>, <a href="#parameter-service_id"><code>service_id</code></a></td>
    <td></td>
    <td>Get specified form description for service (Beta version)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_id"><code>service_id</code></a></td>
    <td></td>
    <td>List available forms for service (Beta version)</td>
</tr>
<tr>
    <td><a href="#answer"><CopyableCode code="answer" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-formName"><code>formName</code></a>, <a href="#parameter-serviceId"><code>serviceId</code></a>, <a href="#parameter-answers"><code>answers</code></a></td>
    <td></td>
    <td>Post answers to the form for your service (Beta version)</td>
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
<tr id="parameter-formName">
    <td><CopyableCode code="formName" /></td>
    <td><code>string</code></td>
    <td>Form name</td>
</tr>
<tr id="parameter-form_name">
    <td><CopyableCode code="form_name" /></td>
    <td><code>string</code></td>
    <td>Form name (wire: formName)</td>
</tr>
<tr id="parameter-serviceId">
    <td><CopyableCode code="serviceId" /></td>
    <td><code>integer</code></td>
    <td>Service ID</td>
</tr>
<tr id="parameter-service_id">
    <td><CopyableCode code="service_id" /></td>
    <td><code>integer</code></td>
    <td>Service ID (wire: serviceId)</td>
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

Get specified form description for service (Beta version)

```sql
SELECT
name,
questions
FROM ovh.services.forms
WHERE form_name = '{{ form_name }}' -- required
AND service_id = '{{ service_id }}' -- required
;
```
</TabItem>
<TabItem value="list">

List available forms for service (Beta version)

```sql
SELECT
name,
questions
FROM ovh.services.forms
WHERE service_id = '{{ service_id }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="answer"
    values={[
        { label: 'answer', value: 'answer' }
    ]}
>
<TabItem value="answer">

Post answers to the form for your service (Beta version)

```sql
EXEC ovh.services.forms.answer 
@formName='{{ formName }}' --required, 
@serviceId='{{ serviceId }}' --required 
@@json=
'{
"answers": "{{ answers }}"
}'
;
```
</TabItem>
</Tabs>
