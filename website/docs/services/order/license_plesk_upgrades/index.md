--- 
title: license_plesk_upgrades
hide_title: false
hide_table_of_contents: false
keywords:
  - license_plesk_upgrades
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

Creates, updates, deletes, gets or lists a <code>license_plesk_upgrades</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="license_plesk_upgrades" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.order.license_plesk_upgrades" /></td></tr>
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
    <td><CopyableCode code="order_id" /></td>
    <td><code>integer</code></td>
    <td>Identifier of the order (wire: orderId)</td>
</tr>
<tr>
    <td><CopyableCode code="contracts" /></td>
    <td><code>array</code></td>
    <td>List of contracts related to the order</td>
</tr>
<tr>
    <td><CopyableCode code="details" /></td>
    <td><code>array</code></td>
    <td>Details of the order</td>
</tr>
<tr>
    <td><CopyableCode code="prices" /></td>
    <td><code>object</code></td>
    <td>Prices of the order including with and without taxes</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td>URL to download the order</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

An order

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
    <td><CopyableCode code="order_id" /></td>
    <td><code>integer</code></td>
    <td>Identifier of the order (wire: orderId)</td>
</tr>
<tr>
    <td><CopyableCode code="contracts" /></td>
    <td><code>array</code></td>
    <td>List of contracts related to the order</td>
</tr>
<tr>
    <td><CopyableCode code="details" /></td>
    <td><code>array</code></td>
    <td>Details of the order</td>
</tr>
<tr>
    <td><CopyableCode code="prices" /></td>
    <td><code>object</code></td>
    <td>Prices of the order including with and without taxes</td>
</tr>
<tr>
    <td><CopyableCode code="url" /></td>
    <td><code>string</code></td>
    <td>URL to download the order</td>
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
    <td><a href="#parameter-duration"><code>duration</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-antispam"><code>antispam</code></a>, <a href="#parameter-antivirus"><code>antivirus</code></a>, <a href="#parameter-application_set"><code>application_set</code></a>, <a href="#parameter-domain_number"><code>domain_number</code></a>, <a href="#parameter-language_pack_number"><code>language_pack_number</code></a>, <a href="#parameter-powerpack"><code>powerpack</code></a>, <a href="#parameter-reseller_management"><code>reseller_management</code></a>, <a href="#parameter-version"><code>version</code></a>, <a href="#parameter-wordpress_toolkit"><code>wordpress_toolkit</code></a></td>
    <td>Get prices and contracts information</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-antispam"><code>antispam</code></a>, <a href="#parameter-antivirus"><code>antivirus</code></a>, <a href="#parameter-application_set"><code>application_set</code></a>, <a href="#parameter-domain_number"><code>domain_number</code></a>, <a href="#parameter-language_pack_number"><code>language_pack_number</code></a>, <a href="#parameter-powerpack"><code>powerpack</code></a>, <a href="#parameter-reseller_management"><code>reseller_management</code></a>, <a href="#parameter-version"><code>version</code></a>, <a href="#parameter-wordpress_toolkit"><code>wordpress_toolkit</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>Get allowed durations for 'upgrade' option</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-duration"><code>duration</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Create order</td>
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
<tr id="parameter-duration">
    <td><CopyableCode code="duration" /></td>
    <td><code>string</code></td>
    <td>Duration</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The name of your Plesk license (wire: serviceName)</td>
</tr>
<tr id="parameter-antispam">
    <td><CopyableCode code="antispam" /></td>
    <td><code>string</code></td>
    <td>The antispam currently enabled on this Plesk License</td>
</tr>
<tr id="parameter-antivirus">
    <td><CopyableCode code="antivirus" /></td>
    <td><code>string</code></td>
    <td>The antivirus to enable on this Plesk license</td>
</tr>
<tr id="parameter-application_set">
    <td><CopyableCode code="application_set" /></td>
    <td><code>string</code></td>
    <td>Wanted application set (wire: applicationSet)</td>
</tr>
<tr id="parameter-domain_number">
    <td><CopyableCode code="domain_number" /></td>
    <td><code>string</code></td>
    <td>This license domain number (wire: domainNumber)</td>
</tr>
<tr id="parameter-language_pack_number">
    <td><CopyableCode code="language_pack_number" /></td>
    <td><code>string</code></td>
    <td>The amount (between 0 and 5) of language pack numbers to include in this licences (wire: languagePackNumber)</td>
</tr>
<tr id="parameter-powerpack">
    <td><CopyableCode code="powerpack" /></td>
    <td><code>boolean</code></td>
    <td>powerpack current activation state on your license</td>
</tr>
<tr id="parameter-reseller_management">
    <td><CopyableCode code="reseller_management" /></td>
    <td><code>boolean</code></td>
    <td>Reseller management option activation (wire: resellerManagement)</td>
</tr>
<tr id="parameter-version">
    <td><CopyableCode code="version" /></td>
    <td><code>string</code></td>
    <td>This license version</td>
</tr>
<tr id="parameter-wordpress_toolkit">
    <td><CopyableCode code="wordpress_toolkit" /></td>
    <td><code>boolean</code></td>
    <td>WordpressToolkit option activation (wire: wordpressToolkit)</td>
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

Get prices and contracts information

```sql
SELECT
order_id,
contracts,
details,
prices,
url
FROM ovh.order.license_plesk_upgrades
WHERE duration = '{{ duration }}' -- required
AND service_name = '{{ service_name }}' -- required
AND antispam = '{{ antispam }}'
AND antivirus = '{{ antivirus }}'
AND application_set = '{{ application_set }}'
AND domain_number = '{{ domain_number }}'
AND language_pack_number = '{{ language_pack_number }}'
AND powerpack = '{{ powerpack }}'
AND reseller_management = '{{ reseller_management }}'
AND version = '{{ version }}'
AND wordpress_toolkit = '{{ wordpress_toolkit }}'
;
```
</TabItem>
<TabItem value="list">

Get allowed durations for 'upgrade' option

```sql
SELECT
order_id,
contracts,
details,
prices,
url
FROM ovh.order.license_plesk_upgrades
WHERE service_name = '{{ service_name }}' -- required
AND antispam = '{{ antispam }}'
AND antivirus = '{{ antivirus }}'
AND application_set = '{{ application_set }}'
AND domain_number = '{{ domain_number }}'
AND language_pack_number = '{{ language_pack_number }}'
AND powerpack = '{{ powerpack }}'
AND reseller_management = '{{ reseller_management }}'
AND version = '{{ version }}'
AND wordpress_toolkit = '{{ wordpress_toolkit }}'
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

Create order

```sql
INSERT INTO ovh.order.license_plesk_upgrades (
antispam,
antivirus,
application_set,
domain_number,
language_pack_number,
powerpack,
reseller_management,
version,
wordpress_toolkit,
duration,
service_name
)
SELECT 
'{{ antispam }}',
'{{ antivirus }}',
'{{ application_set }}',
'{{ domain_number }}',
'{{ language_pack_number }}',
{{ powerpack }},
{{ reseller_management }},
'{{ version }}',
{{ wordpress_toolkit }},
'{{ duration }}',
'{{ service_name }}'
RETURNING
order_id,
contracts,
details,
prices,
url
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: license_plesk_upgrades
  props:
    - name: duration
      value: "{{ duration }}"
      description: Required parameter for the license_plesk_upgrades resource.
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the license_plesk_upgrades resource.
    - name: antispam
      value: "{{ antispam }}"
      description: |
        All antispam available for Plesk products
      valid_values: ['SPAM_ASSASSIN']
    - name: antivirus
      value: "{{ antivirus }}"
      description: |
        All antivirus available for Plesk products
      valid_values: ['DR_WEB', 'KASPERSKY_UNLIMITED_MAILBOXES', 'kaspersky']
    - name: application_set
      value: "{{ application_set }}"
      description: |
        Application set available for Plesk products
      valid_values: ['applicationpack', 'developerpack', 'power-pack-for-plesk12', 'powerpack']
    - name: domain_number
      value: "{{ domain_number }}"
      description: |
        All domain available for Plesk products
      valid_values: ['10', '100', '30', '300', 'hostingsuite', 'unlimited']
    - name: language_pack_number
      value: "{{ language_pack_number }}"
      description: |
        All language pack numbers available for Plesk products
      valid_values: ['1', '1-extra-language-for-plesk', '1-extra-language-for-plesk-for-vps', '1-extra-language-for-plesk12', '1-extra-language-for-plesk12-for-vps', '1-extra-language-pack-for-plesk', '2', '2-extra-languages-for-plesk', '2-extra-languages-for-plesk-for-vps', '2-extra-languages-for-plesk12', '2-extra-languages-for-plesk12-for-vps', '2-extra-languages-pack-for-plesk', '3', '3-extra-languages-for-plesk', '3-extra-languages-for-plesk-for-vps', '3-extra-languages-for-plesk12', '3-extra-languages-for-plesk12-for-vps', '3-extra-languages-pack-for-plesk', '4', '4-extra-languages-for-plesk', '4-extra-languages-for-plesk-for-vps', '4-extra-languages-for-plesk12', '4-extra-languages-for-plesk12-for-vps', '4-extra-languages-pack-for-plesk', '5', '5-extra-languages-for-plesk', '5-extra-languages-for-plesk-for-vps', '5-extra-languages-for-plesk12', '5-extra-languages-for-plesk12-for-vps', '5-extra-languages-pack-for-plesk', 'unlimited', 'unlimited-extra-languages-for-plesk', 'unlimited-extra-languages-for-plesk-for-vps', 'unlimited-extra-languages-for-plesk12', 'unlimited-extra-languages-for-plesk12-for-vps', 'unlimited-extra-languages-pack-for-plesk']
    - name: powerpack
      value: {{ powerpack }}
      description: |
        powerpack current activation state on your license
    - name: reseller_management
      value: {{ reseller_management }}
      description: |
        Reseller management option activation
    - name: version
      value: "{{ version }}"
      description: |
        All versions available for Plesk products
      valid_values: ['PLESK_10_AND_LATER', 'PLESK_10_AND_LATER_FOR_KVM', 'PLESK_10_AND_LATER_FOR_VMWARE', 'PLESK_10_AND_LATER_FOR_VZ', 'PLESK_10_AND_LATER_FOR_WIN', 'PLESK_10_AND_LATER_FOR_WIN_FOR_VMWARE', 'PLESK_10_AND_LATER_FOR_WIN_FOR_VZ', 'PLESK_10_AND_LATER_FOR_WIN_FOR_XEN', 'PLESK_10_AND_LATER_FOR_XEN', 'PLESK_12_VPS_WEB_ADMIN', 'PLESK_12_VPS_WEB_APP', 'PLESK_12_VPS_WEB_HOST', 'PLESK_12_VPS_WEB_HOST_CLNX', 'PLESK_12_VPS_WEB_PRO', 'PLESK_12_VPS_WEB_PRO_CLNX', 'PLESK_12_WEB_ADMIN', 'PLESK_12_WEB_APP', 'PLESK_12_WEB_HOST', 'PLESK_12_WEB_HOST_CLNX', 'PLESK_12_WEB_PRO', 'PLESK_12_WEB_PRO_CLNX', 'PLESK_75_RELOADED', 'PLESK_80', 'PLESK_80_FOR_VZ', 'PLESK_81_FOR_WIN', 'PLESK_9', 'PLESK_95', 'PLESK_95_FOR_VZ', 'PLESK_95_FOR_WIN', 'PLESK_9_FOR_VZ', 'PLESK_9_FOR_WIN', 'PLESK_ONYX_VPS_WEB_ADMIN', 'PLESK_ONYX_VPS_WEB_APP', 'PLESK_ONYX_VPS_WEB_HOST', 'PLESK_ONYX_VPS_WEB_HOST_CLNX', 'PLESK_ONYX_VPS_WEB_PRO', 'PLESK_ONYX_VPS_WEB_PRO_CLNX', 'PLESK_ONYX_WEB_ADMIN', 'PLESK_ONYX_WEB_APP', 'PLESK_ONYX_WEB_HOST', 'PLESK_ONYX_WEB_HOST_CLNX', 'PLESK_ONYX_WEB_PRO', 'PLESK_ONYX_WEB_PRO_CLNX', 'PLESK_VPS_WEB_ADMIN', 'PLESK_VPS_WEB_HOST', 'PLESK_VPS_WEB_PRO', 'PLESK_WEB_ADMIN', 'PLESK_WEB_HOST', 'PLESK_WEB_PRO', 'plesk-12-webadmin', 'plesk-12-webadmin-for-vps', 'plesk-12-webhost', 'plesk-12-webhost-for-vps', 'plesk-12-webpro', 'plesk-12-webpro-for-vps', 'plesk-webadmin', 'plesk-webadmin-for-vps', 'plesk-webhost', 'plesk-webhost-for-vps', 'plesk-webpro', 'plesk-webpro-for-vps']
    - name: wordpress_toolkit
      value: {{ wordpress_toolkit }}
      description: |
        WordpressToolkit option activation
`}</CodeBlock>

</TabItem>
</Tabs>
