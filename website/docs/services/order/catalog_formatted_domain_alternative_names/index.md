--- 
title: catalog_formatted_domain_alternative_names
hide_title: false
hide_table_of_contents: false
keywords:
  - catalog_formatted_domain_alternative_names
  - order
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

Creates, updates, deletes, gets or lists a <code>catalog_formatted_domain_alternative_names</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="catalog_formatted_domain_alternative_names" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.order.catalog_formatted_domain_alternative_names" /></td></tr>
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
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>Domain name looked up, in lower case</td>
</tr>
<tr>
    <td><CopyableCode code="suggestions" /></td>
    <td><code>array</code></td>
    <td>At most two available domain names whose extension the subsidiary sells, in the order of the suggestion engine</td>
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
    <td><a href="#parameter-label"><code>label</code></a>, <a href="#parameter-ovh_subsidiary"><code>ovh_subsidiary</code></a></td>
    <td></td>
    <td>The first two available domain names suggested for a domain name (the name itself excluded) whose extension the subsidiary sells, in the order of the suggestion engine, each with its first-year creation price and, while a promotion runs, the price before it and the promotion. Europe subsidiaries only: the suggestions are made for the subsidiary's market.</td>
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
<tr id="parameter-label">
    <td><CopyableCode code="label" /></td>
    <td><code>string</code></td>
    <td>Domain name looked up (e.g. boulangerie.fr)</td>
</tr>
<tr id="parameter-ovh_subsidiary">
    <td><CopyableCode code="ovh_subsidiary" /></td>
    <td><code>string</code></td>
    <td>OVHcloud subsidiary targeted, a Europe one (wire: ovhSubsidiary)</td>
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

The first two available domain names suggested for a domain name (the name itself excluded) whose extension the subsidiary sells, in the order of the suggestion engine, each with its first-year creation price and, while a promotion runs, the price before it and the promotion. Europe subsidiaries only: the suggestions are made for the subsidiary's market.

```sql
SELECT
label,
suggestions
FROM ovh.order.catalog_formatted_domain_alternative_names
WHERE label = '{{ label }}' -- required
AND ovh_subsidiary = '{{ ovh_subsidiary }}' -- required
;
```
</TabItem>
</Tabs>
