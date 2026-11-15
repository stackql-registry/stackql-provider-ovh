--- 
title: template_modems
hide_title: false
hide_table_of_contents: false
keywords:
  - template_modems
  - xdsl
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

Creates, updates, deletes, gets or lists a <code>template_modems</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="template_modems" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.xdsl.template_modems" /></td></tr>
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
    <td>Name of the Modem Template</td>
</tr>
<tr>
    <td><CopyableCode code="capabilities" /></td>
    <td><code>string</code></td>
    <td>Parameters capabilities. Lists what can be applied from this template</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Template creation date (wire: creationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="dhcp" /></td>
    <td><code>array</code></td>
    <td>List of DHCP for this template (wire: DHCP)</td>
</tr>
<tr>
    <td><CopyableCode code="dmz_ip" /></td>
    <td><code>string (ipv4)</code></td>
    <td>IP Address of the DMZ (example: 192.0.2.0) (wire: dmzIP)</td>
</tr>
<tr>
    <td><CopyableCode code="lan" /></td>
    <td><code>array</code></td>
    <td>List of LAN for this template (wire: LAN)</td>
</tr>
<tr>
    <td><CopyableCode code="mtu_size" /></td>
    <td><code>integer</code></td>
    <td>Size of the Maximum Transmission Unit on the modem's interfaces (1432, 1456, 1492) (wire: mtuSize)</td>
</tr>
<tr>
    <td><CopyableCode code="parameters_to_ignore" /></td>
    <td><code>object</code></td>
    <td>Do not apply these parameters from template. You can use parametersCapabilities to know availability (wire: parametersToIgnore)</td>
</tr>
<tr>
    <td><CopyableCode code="port_mapping" /></td>
    <td><code>array</code></td>
    <td>List of PortMapping for this template (wire: portMapping)</td>
</tr>
<tr>
    <td><CopyableCode code="wlan" /></td>
    <td><code>array</code></td>
    <td>List of WLAN for this template (wire: WLAN)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Modem Template

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
    <td>Name of the Modem Template</td>
</tr>
<tr>
    <td><CopyableCode code="capabilities" /></td>
    <td><code>string</code></td>
    <td>Parameters capabilities. Lists what can be applied from this template</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Template creation date (wire: creationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="dhcp" /></td>
    <td><code>array</code></td>
    <td>List of DHCP for this template (wire: DHCP)</td>
</tr>
<tr>
    <td><CopyableCode code="dmz_ip" /></td>
    <td><code>string (ipv4)</code></td>
    <td>IP Address of the DMZ (example: 192.0.2.0) (wire: dmzIP)</td>
</tr>
<tr>
    <td><CopyableCode code="lan" /></td>
    <td><code>array</code></td>
    <td>List of LAN for this template (wire: LAN)</td>
</tr>
<tr>
    <td><CopyableCode code="mtu_size" /></td>
    <td><code>integer</code></td>
    <td>Size of the Maximum Transmission Unit on the modem's interfaces (1432, 1456, 1492) (wire: mtuSize)</td>
</tr>
<tr>
    <td><CopyableCode code="parameters_to_ignore" /></td>
    <td><code>object</code></td>
    <td>Do not apply these parameters from template. You can use parametersCapabilities to know availability (wire: parametersToIgnore)</td>
</tr>
<tr>
    <td><CopyableCode code="port_mapping" /></td>
    <td><code>array</code></td>
    <td>List of PortMapping for this template (wire: portMapping)</td>
</tr>
<tr>
    <td><CopyableCode code="wlan" /></td>
    <td><code>array</code></td>
    <td>List of WLAN for this template (wire: WLAN)</td>
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
    <td><a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Returns the LAN, DHCP, WLAN, port mapping, DMZ and MTU settings of a modem template, and the parameters to ignore when it is applied.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>Returns the names of the modem templates of the account.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-name"><code>name</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Creates a template from the modem configuration of an access. Returns the created template.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Changes the parameters to ignore when the template is applied to a modem.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Deletes the modem template and all its settings.</td>
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
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name</td>
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

Returns the LAN, DHCP, WLAN, port mapping, DMZ and MTU settings of a modem template, and the parameters to ignore when it is applied.

```sql
SELECT
name,
capabilities,
creation_date,
dhcp,
dmz_ip,
lan,
mtu_size,
parameters_to_ignore,
port_mapping,
wlan
FROM ovh.xdsl.template_modems
WHERE name = '{{ name }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns the names of the modem templates of the account.

```sql
SELECT
name,
capabilities,
creation_date,
dhcp,
dmz_ip,
lan,
mtu_size,
parameters_to_ignore,
port_mapping,
wlan
FROM ovh.xdsl.template_modems
WHERE x_pagination_mode = '{{ x_pagination_mode }}'
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

Creates a template from the modem configuration of an access. Returns the created template.

```sql
INSERT INTO ovh.xdsl.template_modems (
name,
service_name
)
SELECT 
'{{ name }}' /* required */,
'{{ service_name }}' /* required */
RETURNING
name,
capabilities,
creation_date,
dhcp,
dmz_ip,
lan,
mtu_size,
parameters_to_ignore,
port_mapping,
wlan
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: template_modems
  props:
    - name: name
      value: "{{ name }}"
      description: |
        Modem Template name (only alphanumeric characters)
    - name: service_name
      value: "{{ service_name }}"
      description: |
        The access name with the config you want to duplicate
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

Changes the parameters to ignore when the template is applied to a modem.

```sql
UPDATE ovh.xdsl.template_modems
SET 
parameters_to_ignore = '{{ parameters_to_ignore }}'
WHERE 
name = '{{ name }}' --required;
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

Deletes the modem template and all its settings.

```sql
DELETE FROM ovh.xdsl.template_modems
WHERE name = '{{ name }}' --required
;
```
</TabItem>
</Tabs>
