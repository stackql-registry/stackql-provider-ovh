--- 
title: xdsl_settings
hide_title: false
hide_table_of_contents: false
keywords:
  - xdsl_settings
  - me
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

Creates, updates, deletes, gets or lists a <code>xdsl_settings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="xdsl_settings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.me.xdsl_settings" /></td></tr>
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
    <td><CopyableCode code="isp_partner_order_collect_choice" /></td>
    <td><code>boolean</code></td>
    <td>Enable the partner collect choice in the order funnel (wire: ispPartnerOrderCollectChoice)</td>
</tr>
<tr>
    <td><CopyableCode code="reseller_fast_modem_shipping" /></td>
    <td><code>boolean</code></td>
    <td>Send the modem as soon as possible, do not wait the xdsl line to be active (wire: resellerFastModemShipping)</td>
</tr>
<tr>
    <td><CopyableCode code="reseller_modem_basic_config" /></td>
    <td><code>boolean</code></td>
    <td>Let the modem with vendor configuration. It prevent to apply the config managed by ovh manager (wire: resellerModemBasicConfig)</td>
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
    <td></td>
    <td></td>
    <td>Get xdsl settings linked to the nichandle</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td></td>
    <td></td>
    <td>Change xdsl settings linked to the nichandle</td>
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

Get xdsl settings linked to the nichandle

```sql
SELECT
isp_partner_order_collect_choice,
reseller_fast_modem_shipping,
reseller_modem_basic_config
FROM ovh.me.xdsl_settings
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

Change xdsl settings linked to the nichandle

```sql
INSERT INTO ovh.me.xdsl_settings (
reseller_fast_modem_shipping,
reseller_modem_basic_config
)
SELECT 
{{ reseller_fast_modem_shipping }},
{{ reseller_modem_basic_config }}
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: xdsl_settings
  props:
    - name: reseller_fast_modem_shipping
      value: {{ reseller_fast_modem_shipping }}
      description: |
        Send the modem as soon as possible, do not wait the xdsl line to be active
    - name: reseller_modem_basic_config
      value: {{ reseller_modem_basic_config }}
      description: |
        Let the modem with vendor configuration. It prevent to apply the config managed by ovh manager
`}</CodeBlock>

</TabItem>
</Tabs>
