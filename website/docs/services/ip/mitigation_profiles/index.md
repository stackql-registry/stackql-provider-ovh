--- 
title: mitigation_profiles
hide_title: false
hide_table_of_contents: false
keywords:
  - mitigation_profiles
  - ip
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

Creates, updates, deletes, gets or lists a <code>mitigation_profiles</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="mitigation_profiles" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.ip.mitigation_profiles" /></td></tr>
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
    <td><CopyableCode code="auto_mitigation_time_out" /></td>
    <td><code>integer</code></td>
    <td>Delay to wait before remove ip from auto mitigation after an attack (0, 15, 60, 360, 1560) (wire: autoMitigationTimeOut)</td>
</tr>
<tr>
    <td><CopyableCode code="ip_mitigation_profile" /></td>
    <td><code>string (ipv4)</code></td>
    <td>IPv4 address (e.g., 192.0.2.0) (example: 192.0.2.0) (wire: ipMitigationProfile)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Current state of your mitigation profile (ok, tasksPending)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Mitigation profile for your ip

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
    <td><CopyableCode code="auto_mitigation_time_out" /></td>
    <td><code>integer</code></td>
    <td>Delay to wait before remove ip from auto mitigation after an attack (0, 15, 60, 360, 1560) (wire: autoMitigationTimeOut)</td>
</tr>
<tr>
    <td><CopyableCode code="ip_mitigation_profile" /></td>
    <td><code>string (ipv4)</code></td>
    <td>IPv4 address (e.g., 192.0.2.0) (example: 192.0.2.0) (wire: ipMitigationProfile)</td>
</tr>
<tr>
    <td><CopyableCode code="state" /></td>
    <td><code>string</code></td>
    <td>Current state of your mitigation profile (ok, tasksPending)</td>
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
    <td><a href="#parameter-ip"><code>ip</code></a>, <a href="#parameter-ip_mitigation_profile"><code>ip_mitigation_profile</code></a></td>
    <td></td>
    <td>Get an IP mitigation timeout. Returns the VAC mitigation timeout of a given IP address, in minutes, and its state: ok or tasksPending.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-ip"><code>ip</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List IP mitigation timeouts. Returns the IPs of the block with a custom VAC mitigation timeout: how long each one stays in mitigation after an attack ends.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-ip"><code>ip</code></a>, <a href="#parameter-auto_mitigation_time_out"><code>auto_mitigation_time_out</code></a>, <a href="#parameter-ip_mitigation_profile"><code>ip_mitigation_profile</code></a></td>
    <td></td>
    <td>Create an IP mitigation timeout. Sets how long, in minutes: 0, 15, 60, 360 or 1560, a given IP address stays in VAC mitigation after an attack ends.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-ip"><code>ip</code></a>, <a href="#parameter-ip_mitigation_profile"><code>ip_mitigation_profile</code></a></td>
    <td></td>
    <td>Update an IP mitigation timeout. Changes the VAC mitigation timeout of a given IP address, the only editable field, to 0, 15, 60, 360 or 1560 minutes.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-ip"><code>ip</code></a>, <a href="#parameter-ip_mitigation_profile"><code>ip_mitigation_profile</code></a></td>
    <td></td>
    <td>Delete an IP mitigation timeout. Removes the custom VAC mitigation timeout of a given IP address; the default applies again. The call returns no content.</td>
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
<tr id="parameter-ip">
    <td><CopyableCode code="ip" /></td>
    <td><code>string (ip-block)</code></td>
    <td></td>
</tr>
<tr id="parameter-ip_mitigation_profile">
    <td><CopyableCode code="ip_mitigation_profile" /></td>
    <td><code>string (ipv4)</code></td>
    <td> (wire: ipMitigationProfile)</td>
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

Get an IP mitigation timeout. Returns the VAC mitigation timeout of a given IP address, in minutes, and its state: ok or tasksPending.

```sql
SELECT
auto_mitigation_time_out,
ip_mitigation_profile,
state
FROM ovh.ip.mitigation_profiles
WHERE ip = '{{ ip }}' -- required
AND ip_mitigation_profile = '{{ ip_mitigation_profile }}' -- required
;
```
</TabItem>
<TabItem value="list">

List IP mitigation timeouts. Returns the IPs of the block with a custom VAC mitigation timeout: how long each one stays in mitigation after an attack ends.

```sql
SELECT
auto_mitigation_time_out,
ip_mitigation_profile,
state
FROM ovh.ip.mitigation_profiles
WHERE ip = '{{ ip }}' -- required
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

Create an IP mitigation timeout. Sets how long, in minutes: 0, 15, 60, 360 or 1560, a given IP address stays in VAC mitigation after an attack ends.

```sql
INSERT INTO ovh.ip.mitigation_profiles (
auto_mitigation_time_out,
ip_mitigation_profile,
ip
)
SELECT 
{{ auto_mitigation_time_out }} /* required */,
'{{ ip_mitigation_profile }}' /* required */,
'{{ ip }}'
RETURNING
auto_mitigation_time_out,
ip_mitigation_profile,
state
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: mitigation_profiles
  props:
    - name: ip
      value: "{{ ip }}"
      description: Required parameter for the mitigation_profiles resource.
    - name: auto_mitigation_time_out
      value: {{ auto_mitigation_time_out }}
      description: |
        Delay to wait before remove ip from auto mitigation after an attack
      valid_values: ['0', '15', '60', '360', '1560']
    - name: ip_mitigation_profile
      value: "{{ ip_mitigation_profile }}"
      description: |
        IPv4 address (e.g., 192.0.2.0)
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

Update an IP mitigation timeout. Changes the VAC mitigation timeout of a given IP address, the only editable field, to 0, 15, 60, 360 or 1560 minutes.

```sql
UPDATE ovh.ip.mitigation_profiles
SET 
auto_mitigation_time_out = {{ auto_mitigation_time_out }}
WHERE 
ip = '{{ ip }}' --required
AND ip_mitigation_profile = '{{ ip_mitigation_profile }}' --required;
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

Delete an IP mitigation timeout. Removes the custom VAC mitigation timeout of a given IP address; the default applies again. The call returns no content.

```sql
DELETE FROM ovh.ip.mitigation_profiles
WHERE ip = '{{ ip }}' --required
AND ip_mitigation_profile = '{{ ip_mitigation_profile }}' --required
;
```
</TabItem>
</Tabs>
