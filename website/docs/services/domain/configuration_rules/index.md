--- 
title: configuration_rules
hide_title: false
hide_table_of_contents: false
keywords:
  - configuration_rules
  - domain
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

Creates, updates, deletes, gets or lists a <code>configuration_rules</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="configuration_rules" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.domain.configuration_rules" /></td></tr>
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
    <td><CopyableCode code="and" /></td>
    <td><code>array</code></td>
    <td>An "and" operator on multiple rules</td>
</tr>
<tr>
    <td><CopyableCode code="conditions" /></td>
    <td><code>object</code></td>
    <td>Whether this rule is applied or not</td>
</tr>
<tr>
    <td><CopyableCode code="constraints" /></td>
    <td><code>array</code></td>
    <td>The constraints of the rule</td>
</tr>
<tr>
    <td><CopyableCode code="contexts" /></td>
    <td><code>array</code></td>
    <td>The context on which the rule applies</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>The description of the rule</td>
</tr>
<tr>
    <td><CopyableCode code="fields" /></td>
    <td><code>object</code></td>
    <td>The fields with specific rules</td>
</tr>
<tr>
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>The label of the rule</td>
</tr>
<tr>
    <td><CopyableCode code="or" /></td>
    <td><code>array</code></td>
    <td>An "or" operator on multiple rules</td>
</tr>
<tr>
    <td><CopyableCode code="placeholder" /></td>
    <td><code>string</code></td>
    <td>The default value used for the rule</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>The type of the object the rule applies on (bool, contact, date_ISO8601, domain, json, number, string, string&#91;&#93;, text)</td>
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
    <td><a href="#parameter-action"><code>action</code></a>, <a href="#parameter-domain"><code>domain</code></a></td>
    <td></td>
    <td>Get configuration rule applied for a domain in a given action</td>
</tr>
<tr>
    <td><a href="#check"><CopyableCode code="check" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-action"><code>action</code></a>, <a href="#parameter-domain"><code>domain</code></a></td>
    <td></td>
    <td>Validate a rule data for a specified domain</td>
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
<tr id="parameter-action">
    <td><CopyableCode code="action" /></td>
    <td><code>string</code></td>
    <td>Depending on the action, the applied rule will change (transfer vs create)</td>
</tr>
<tr id="parameter-api_host">
    <td><CopyableCode code="api_host" /></td>
    <td><code>string</code></td>
    <td>The OVHcloud API host. Selected by OVH_ENDPOINT (ovh-eu, ovh-ca or ovh-us; default ovh-eu). (default: api.eu.ovhcloud.com, x-stackQL-envVarSelector: &#123;"envVar":"OVH_ENDPOINT","default":"ovh-eu","values":&#123;"ovh-eu":"api.eu.ovhcloud.com","ovh-ca":"api.ca.ovhcloud.com","ovh-us":"api.us.ovhcloud.com"&#125;&#125;)</td>
</tr>
<tr id="parameter-domain">
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>The domain to check the rule data for</td>
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

Get configuration rule applied for a domain in a given action

```sql
SELECT
and,
conditions,
constraints,
contexts,
description,
fields,
label,
or,
placeholder,
type
FROM ovh.domain.configuration_rules
WHERE action = '{{ action }}' -- required
AND domain = '{{ domain }}' -- required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="check"
    values={[
        { label: 'check', value: 'check' }
    ]}
>
<TabItem value="check">

Validate a rule data for a specified domain

```sql
EXEC ovh.domain.configuration_rules.check 
@action='{{ action }}' --required, 
@domain='{{ domain }}' --required 
@@json=
'{
"adminAccount": "{{ adminAccount }}", 
"domain": "{{ domain }}", 
"extras": "{{ extras }}", 
"owner": "{{ owner }}", 
"techAccount": "{{ techAccount }}"
}'
;
```
</TabItem>
</Tabs>
