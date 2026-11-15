--- 
title: service_outlook_availabilities
hide_title: false
hide_table_of_contents: false
keywords:
  - service_outlook_availabilities
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

Creates, updates, deletes, gets or lists a <code>service_outlook_availabilities</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="service_outlook_availabilities" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.email_exchange.service_outlook_availabilities" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

Availability of outlook version

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
    <td><CopyableCode code="outlook_language" /></td>
    <td><code>string</code></td>
    <td>Outlook language (ar, bg, cz, da, de, el, en, es, et, fi, fr, he, hr, hu, id, in, it, ja, ko, kz, lt, lv, ms, nb, nl, pl, pt, pt-BR, ro, rs, ru, sk, sl, sv, th, tr, uk, vi, zh-CN) (wire: outlookLanguage)</td>
</tr>
<tr>
    <td><CopyableCode code="outlook_version" /></td>
    <td><code>string</code></td>
    <td>Outlook version (mac_x86_2016, mac_x86_2019, mac_x86_2021, windows_x64_2016, windows_x64_2019, windows_x64_2021, windows_x86_2016, windows_x86_2019, windows_x86_2021) (wire: outlookVersion)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>boolean</code></td>
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
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-exchange_service"><code>exchange_service</code></a>, <a href="#parameter-organization_name"><code>organization_name</code></a></td>
    <td><a href="#parameter-outlook_language"><code>outlook_language</code></a>, <a href="#parameter-outlook_version"><code>outlook_version</code></a></td>
    <td>List available Outlook versions. Returns whether each Outlook version and language is available. Filter by `outlookVersion` or `outlookLanguage`.</td>
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
<tr id="parameter-organization_name">
    <td><CopyableCode code="organization_name" /></td>
    <td><code>string</code></td>
    <td>The internal name of your exchange organization (wire: organizationName)</td>
</tr>
<tr id="parameter-outlook_language">
    <td><CopyableCode code="outlook_language" /></td>
    <td><code>string</code></td>
    <td>Language version of outlook (wire: outlookLanguage)</td>
</tr>
<tr id="parameter-outlook_version">
    <td><CopyableCode code="outlook_version" /></td>
    <td><code>string</code></td>
    <td>OS version of outlook (wire: outlookVersion)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

List available Outlook versions. Returns whether each Outlook version and language is available. Filter by `outlookVersion` or `outlookLanguage`.

```sql
SELECT
outlook_language,
outlook_version,
status
FROM ovh.email_exchange.service_outlook_availabilities
WHERE exchange_service = '{{ exchange_service }}' -- required
AND organization_name = '{{ organization_name }}' -- required
AND outlook_language = '{{ outlook_language }}'
AND outlook_version = '{{ outlook_version }}'
;
```
</TabItem>
</Tabs>
