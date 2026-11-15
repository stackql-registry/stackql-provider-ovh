--- 
title: fax_screen_lists
hide_title: false
hide_table_of_contents: false
keywords:
  - fax_screen_lists
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

Creates, updates, deletes, gets or lists a <code>fax_screen_lists</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="fax_screen_lists" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.telephony.fax_screen_lists" /></td></tr>
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
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td> (wire: serviceName)</td>
</tr>
<tr>
    <td><CopyableCode code="blacklisted_numbers" /></td>
    <td><code>array</code></td>
    <td>List of numbers not allowed to send a fax (wire: blacklistedNumbers)</td>
</tr>
<tr>
    <td><CopyableCode code="blacklisted_tsi" /></td>
    <td><code>array</code></td>
    <td>List of logins (TSI or ID) not allowed to send a fax (wire: blacklistedTSI)</td>
</tr>
<tr>
    <td><CopyableCode code="call_number" /></td>
    <td><code>string</code></td>
    <td>Number of the fax service (wire: callNumber)</td>
</tr>
<tr>
    <td><CopyableCode code="country_code" /></td>
    <td><code>string</code></td>
    <td>Country code of the fax service (wire: countryCode)</td>
</tr>
<tr>
    <td><CopyableCode code="filtering_list" /></td>
    <td><code>string</code></td>
    <td>Which list is active (blackist, whitelist or none) (, blacklist, no, whitelist) (wire: filteringList)</td>
</tr>
<tr>
    <td><CopyableCode code="whitelisted_numbers" /></td>
    <td><code>array</code></td>
    <td>List of numbers allowed to send a fax (wire: whitelistedNumbers)</td>
</tr>
<tr>
    <td><CopyableCode code="whitelisted_tsi" /></td>
    <td><code>array</code></td>
    <td>List of logins (TSI or ID) allowed to send a fax (wire: whitelistedTSI)</td>
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
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get the screen lists. Returns the numbers and logins (TSI) allowed or blocked from sending faxes to the service, and which list is active.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Create the screen lists. Creates the screen lists of the fax service. The active list is whitelist, blacklist or none.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Update the screen lists. Updates the allowed and blocked numbers and logins (TSI). The active list is chosen when the screen lists are created.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Delete the screen lists. Deletes all screen lists of the fax service: allowed and blocked numbers and logins (TSI).</td>
</tr>
<tr>
    <td><a href="#reset"><CopyableCode code="reset" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-billingAccount"><code>billingAccount</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Reset the screen lists. Empties the selected screen lists: allowed or blocked numbers, allowed or blocked logins.</td>
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
<tr id="parameter-billingAccount">
    <td><CopyableCode code="billingAccount" /></td>
    <td><code>string</code></td>
    <td>The name of your billingAccount</td>
</tr>
<tr id="parameter-billing_account">
    <td><CopyableCode code="billing_account" /></td>
    <td><code>string</code></td>
    <td>The name of your billingAccount (wire: billingAccount)</td>
</tr>
<tr id="parameter-serviceName">
    <td><CopyableCode code="serviceName" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td> (wire: serviceName)</td>
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

Get the screen lists. Returns the numbers and logins (TSI) allowed or blocked from sending faxes to the service, and which list is active.

```sql
SELECT
service_name,
blacklisted_numbers,
blacklisted_tsi,
call_number,
country_code,
filtering_list,
whitelisted_numbers,
whitelisted_tsi
FROM ovh.telephony.fax_screen_lists
WHERE billing_account = '{{ billing_account }}' -- required
AND service_name = '{{ service_name }}' -- required
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

Create the screen lists. Creates the screen lists of the fax service. The active list is whitelist, blacklist or none.

```sql
INSERT INTO ovh.telephony.fax_screen_lists (
blacklisted_numbers,
blacklisted_tsi,
filtering_list,
whitelisted_numbers,
whitelisted_tsi,
billing_account,
service_name
)
SELECT 
'{{ blacklisted_numbers }}',
'{{ blacklisted_tsi }}',
'{{ filtering_list }}',
'{{ whitelisted_numbers }}',
'{{ whitelisted_tsi }}',
'{{ billing_account }}',
'{{ service_name }}'
RETURNING
service_name,
blacklisted_numbers,
blacklisted_tsi,
call_number,
country_code,
filtering_list,
whitelisted_numbers,
whitelisted_tsi
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: fax_screen_lists
  props:
    - name: billing_account
      value: "{{ billing_account }}"
      description: Required parameter for the fax_screen_lists resource.
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the fax_screen_lists resource.
    - name: blacklisted_numbers
      value:
        - "{{ blacklisted_numbers }}"
      description: |
        List of numbers not allowed to send a fax
    - name: blacklisted_tsi
      value:
        - "{{ blacklisted_tsi }}"
      description: |
        List of logins (TSI or ID) not allowed to send a fax
    - name: filtering_list
      value: "{{ filtering_list }}"
      description: |
        Which list is active (blackist, whitelist or none)
      valid_values: ['', 'blacklist', 'no', 'whitelist']
    - name: whitelisted_numbers
      value:
        - "{{ whitelisted_numbers }}"
      description: |
        List of numbers allowed to send a fax
    - name: whitelisted_tsi
      value:
        - "{{ whitelisted_tsi }}"
      description: |
        List of logins (TSI or ID) allowed to send a fax
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

Update the screen lists. Updates the allowed and blocked numbers and logins (TSI). The active list is chosen when the screen lists are created.

```sql
UPDATE ovh.telephony.fax_screen_lists
SET 
blacklisted_numbers = '{{ blacklisted_numbers }}',
blacklisted_tsi = '{{ blacklisted_tsi }}',
whitelisted_numbers = '{{ whitelisted_numbers }}',
whitelisted_tsi = '{{ whitelisted_tsi }}'
WHERE 
billing_account = '{{ billing_account }}' --required
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

Delete the screen lists. Deletes all screen lists of the fax service: allowed and blocked numbers and logins (TSI).

```sql
DELETE FROM ovh.telephony.fax_screen_lists
WHERE billing_account = '{{ billing_account }}' --required
AND service_name = '{{ service_name }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="reset"
    values={[
        { label: 'reset', value: 'reset' }
    ]}
>
<TabItem value="reset">

Reset the screen lists. Empties the selected screen lists: allowed or blocked numbers, allowed or blocked logins.

```sql
EXEC ovh.telephony.fax_screen_lists.reset 
@billingAccount='{{ billingAccount }}' --required, 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"blacklistedNumbers": {{ blacklistedNumbers }}, 
"blacklistedTSI": {{ blacklistedTSI }}, 
"whitelistedNumbers": {{ whitelistedNumbers }}, 
"whitelistedTSI": {{ whitelistedTSI }}
}'
;
```
</TabItem>
</Tabs>
