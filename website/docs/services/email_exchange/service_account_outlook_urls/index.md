--- 
title: service_account_outlook_urls
hide_title: false
hide_table_of_contents: false
keywords:
  - service_account_outlook_urls
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

Creates, updates, deletes, gets or lists a <code>service_account_outlook_urls</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="service_account_outlook_urls" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.email_exchange.service_account_outlook_urls" /></td></tr>
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
    <td><CopyableCode code="expiration" /></td>
    <td><code>string (date-time)</code></td>
    <td>Url expiration date</td>
</tr>
<tr>
    <td><CopyableCode code="serial" /></td>
    <td><code>string</code></td>
    <td>Serial number</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td>Outlook url</td>
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
    <td><a href="#parameter-exchange_service"><code>exchange_service</code></a>, <a href="#parameter-organization_name"><code>organization_name</code></a>, <a href="#parameter-primary_email_address"><code>primary_email_address</code></a></td>
    <td></td>
    <td>Get the Outlook download URL. Returns the temporary Outlook download URL, its expiration date and the license serial number.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-exchange_service"><code>exchange_service</code></a>, <a href="#parameter-organization_name"><code>organization_name</code></a>, <a href="#parameter-primary_email_address"><code>primary_email_address</code></a>, <a href="#parameter-language"><code>language</code></a>, <a href="#parameter-version"><code>version</code></a></td>
    <td></td>
    <td>Generate an Outlook download URL. Generates a temporary Outlook download URL for the given `version` and `language`, and returns the task. The email account needs an Outlook license.</td>
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
<tr id="parameter-primary_email_address">
    <td><CopyableCode code="primary_email_address" /></td>
    <td><code>string</code></td>
    <td>Default email for this mailbox (wire: primaryEmailAddress)</td>
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

Get the Outlook download URL. Returns the temporary Outlook download URL, its expiration date and the license serial number.

```sql
SELECT
expiration,
serial,
url
FROM ovh.email_exchange.service_account_outlook_urls
WHERE exchange_service = '{{ exchange_service }}' -- required
AND organization_name = '{{ organization_name }}' -- required
AND primary_email_address = '{{ primary_email_address }}' -- required
;
```
</TabItem>
</Tabs>


## `INSERT` examples

<Tabs
    defaultValue="create"
    values={[
        { label: 'create', value: 'create' },
        { label: 'Manifest', value: 'manifest' }
    ]}
>
<TabItem value="create">

Generate an Outlook download URL. Generates a temporary Outlook download URL for the given `version` and `language`, and returns the task. The email account needs an Outlook license.

```sql
INSERT INTO ovh.email_exchange.service_account_outlook_urls (
language,
version,
exchange_service,
organization_name,
primary_email_address
)
SELECT 
'{{ language }}' /* required */,
'{{ version }}' /* required */,
'{{ exchange_service }}',
'{{ organization_name }}',
'{{ primary_email_address }}'
RETURNING
id,
finish_date,
function,
status,
todo_date
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: service_account_outlook_urls
  props:
    - name: exchange_service
      value: "{{ exchange_service }}"
      description: Required parameter for the service_account_outlook_urls resource.
    - name: organization_name
      value: "{{ organization_name }}"
      description: Required parameter for the service_account_outlook_urls resource.
    - name: primary_email_address
      value: "{{ primary_email_address }}"
      description: Required parameter for the service_account_outlook_urls resource.
    - name: language
      value: "{{ language }}"
      description: |
        Language of outlook
      valid_values: ['ar', 'bg', 'cz', 'da', 'de', 'el', 'en', 'es', 'et', 'fi', 'fr', 'he', 'hr', 'hu', 'id', 'in', 'it', 'ja', 'ko', 'kz', 'lt', 'lv', 'ms', 'nb', 'nl', 'pl', 'pt', 'pt-BR', 'ro', 'rs', 'ru', 'sk', 'sl', 'sv', 'th', 'tr', 'uk', 'vi', 'zh-CN']
    - name: version
      value: "{{ version }}"
      description: |
        Version of outlook
      valid_values: ['mac_x86_2016', 'mac_x86_2019', 'mac_x86_2021', 'windows_x64_2016', 'windows_x64_2019', 'windows_x64_2021', 'windows_x86_2016', 'windows_x86_2019', 'windows_x86_2021']
`}</CodeBlock>

</TabItem>
</Tabs>
