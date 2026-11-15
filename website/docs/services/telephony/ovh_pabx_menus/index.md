--- 
title: ovh_pabx_menus
hide_title: false
hide_table_of_contents: false
keywords:
  - ovh_pabx_menus
  - telephony
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

Creates, updates, deletes, gets or lists an <code>ovh_pabx_menus</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ovh_pabx_menus" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.telephony.ovh_pabx_menus" /></td></tr>
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
    <td>The name of the menu</td>
</tr>
<tr>
    <td><CopyableCode code="menu_id" /></td>
    <td><code>integer</code></td>
    <td> (wire: menuId)</td>
</tr>
<tr>
    <td><CopyableCode code="greet_sound" /></td>
    <td><code>integer</code></td>
    <td>The id of the OvhPabxSound played to greet (wire: greetSound)</td>
</tr>
<tr>
    <td><CopyableCode code="greet_sound_tts" /></td>
    <td><code>integer</code></td>
    <td>The text to speech sound played to greet (wire: greetSoundTts)</td>
</tr>
<tr>
    <td><CopyableCode code="inter_digit_timeout" /></td>
    <td><code>integer</code></td>
    <td>The timeout in milliseconds before considering the DTMF entry as done (wire: interDigitTimeout)</td>
</tr>
<tr>
    <td><CopyableCode code="invalid_sound" /></td>
    <td><code>integer</code></td>
    <td>The id of the OvhPabxSound played when the caller uses an invalid DTMF (wire: invalidSound)</td>
</tr>
<tr>
    <td><CopyableCode code="invalid_sound_tts" /></td>
    <td><code>integer</code></td>
    <td>The text to speech sound played when the caller uses an invalid DTMF (wire: invalidSoundTts)</td>
</tr>
<tr>
    <td><CopyableCode code="timeout" /></td>
    <td><code>integer</code></td>
    <td>The timeout in milliseconds before ending the menu when no DTMF is received</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

IVR Menu

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
    <td>The name of the menu</td>
</tr>
<tr>
    <td><CopyableCode code="menu_id" /></td>
    <td><code>integer</code></td>
    <td> (wire: menuId)</td>
</tr>
<tr>
    <td><CopyableCode code="greet_sound" /></td>
    <td><code>integer</code></td>
    <td>The id of the OvhPabxSound played to greet (wire: greetSound)</td>
</tr>
<tr>
    <td><CopyableCode code="greet_sound_tts" /></td>
    <td><code>integer</code></td>
    <td>The text to speech sound played to greet (wire: greetSoundTts)</td>
</tr>
<tr>
    <td><CopyableCode code="inter_digit_timeout" /></td>
    <td><code>integer</code></td>
    <td>The timeout in milliseconds before considering the DTMF entry as done (wire: interDigitTimeout)</td>
</tr>
<tr>
    <td><CopyableCode code="invalid_sound" /></td>
    <td><code>integer</code></td>
    <td>The id of the OvhPabxSound played when the caller uses an invalid DTMF (wire: invalidSound)</td>
</tr>
<tr>
    <td><CopyableCode code="invalid_sound_tts" /></td>
    <td><code>integer</code></td>
    <td>The text to speech sound played when the caller uses an invalid DTMF (wire: invalidSoundTts)</td>
</tr>
<tr>
    <td><CopyableCode code="timeout" /></td>
    <td><code>integer</code></td>
    <td>The timeout in milliseconds before ending the menu when no DTMF is received</td>
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
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-menu_id"><code>menu_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get a menu</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List menus</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Create a menu</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-menu_id"><code>menu_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Update a menu</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-menu_id"><code>menu_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Delete a menu</td>
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
<tr id="parameter-billing_account">
    <td><CopyableCode code="billing_account" /></td>
    <td><code>string</code></td>
    <td>The name of your billingAccount (wire: billingAccount)</td>
</tr>
<tr id="parameter-menu_id">
    <td><CopyableCode code="menu_id" /></td>
    <td><code>integer</code></td>
    <td> (wire: menuId)</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td> (wire: serviceName)</td>
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

Get a menu

```sql
SELECT
name,
menu_id,
greet_sound,
greet_sound_tts,
inter_digit_timeout,
invalid_sound,
invalid_sound_tts,
timeout
FROM ovh.telephony.ovh_pabx_menus
WHERE billing_account = '{{ billing_account }}' -- required
AND menu_id = '{{ menu_id }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List menus

```sql
SELECT
name,
menu_id,
greet_sound,
greet_sound_tts,
inter_digit_timeout,
invalid_sound,
invalid_sound_tts,
timeout
FROM ovh.telephony.ovh_pabx_menus
WHERE billing_account = '{{ billing_account }}' -- required
AND service_name = '{{ service_name }}' -- required
AND x_pagination_mode = '{{ x_pagination_mode }}'
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

Create a menu

```sql
INSERT INTO ovh.telephony.ovh_pabx_menus (
greet_sound,
greet_sound_tts,
inter_digit_timeout,
invalid_sound,
invalid_sound_tts,
name,
timeout,
billing_account,
service_name
)
SELECT 
{{ greet_sound }},
{{ greet_sound_tts }},
{{ inter_digit_timeout }},
{{ invalid_sound }},
{{ invalid_sound_tts }},
'{{ name }}' /* required */,
{{ timeout }},
'{{ billing_account }}',
'{{ service_name }}'
RETURNING
name,
menu_id,
greet_sound,
greet_sound_tts,
inter_digit_timeout,
invalid_sound,
invalid_sound_tts,
timeout
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: ovh_pabx_menus
  props:
    - name: billing_account
      value: "{{ billing_account }}"
      description: Required parameter for the ovh_pabx_menus resource.
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the ovh_pabx_menus resource.
    - name: greet_sound
      value: {{ greet_sound }}
      description: |
        The id of the OvhPabxSound played to greet
    - name: greet_sound_tts
      value: {{ greet_sound_tts }}
      description: |
        The text to speech sound played to greet
    - name: inter_digit_timeout
      value: {{ inter_digit_timeout }}
      description: |
        The timeout in milliseconds before considering the DTMF entry as done
    - name: invalid_sound
      value: {{ invalid_sound }}
      description: |
        The id of the OvhPabxSound played when the caller uses an invalid DTMF
    - name: invalid_sound_tts
      value: {{ invalid_sound_tts }}
      description: |
        The text to speech sound played when the caller uses an invalid DTMF
    - name: name
      value: "{{ name }}"
      description: |
        The name of the menu
    - name: timeout
      value: {{ timeout }}
      description: |
        The timeout in milliseconds before ending the menu when no DTMF is received
`}</CodeBlock>

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

Update a menu

```sql
UPDATE ovh.telephony.ovh_pabx_menus
SET 
greet_sound = {{ greet_sound }},
greet_sound_tts = {{ greet_sound_tts }},
inter_digit_timeout = {{ inter_digit_timeout }},
invalid_sound = {{ invalid_sound }},
invalid_sound_tts = {{ invalid_sound_tts }},
name = '{{ name }}',
timeout = {{ timeout }}
WHERE 
billing_account = '{{ billing_account }}' --required
AND menu_id = '{{ menu_id }}' --required
AND service_name = '{{ service_name }}' --required;
```
</TabItem>
</Tabs>


## `DELETE` examples

<Tabs
    defaultValue="delete"
    values={[
        { label: 'delete', value: 'delete' }
    ]}
>
<TabItem value="delete">

Delete a menu

```sql
DELETE FROM ovh.telephony.ovh_pabx_menus
WHERE billing_account = '{{ billing_account }}' --required
AND menu_id = '{{ menu_id }}' --required
AND service_name = '{{ service_name }}' --required
;
```
</TabItem>
</Tabs>
