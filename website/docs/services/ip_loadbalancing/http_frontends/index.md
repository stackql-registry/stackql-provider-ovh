--- 
title: http_frontends
hide_title: false
hide_table_of_contents: false
keywords:
  - http_frontends
  - ip_loadbalancing
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

Creates, updates, deletes, gets or lists a <code>http_frontends</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="http_frontends" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.ip_loadbalancing.http_frontends" /></td></tr>
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
    <td><CopyableCode code="default_farm_id" /></td>
    <td><code>integer</code></td>
    <td>Default HTTP Farm of your frontend (wire: defaultFarmId)</td>
</tr>
<tr>
    <td><CopyableCode code="default_ssl_id" /></td>
    <td><code>integer</code></td>
    <td>Default ssl served to your customer (wire: defaultSslId)</td>
</tr>
<tr>
    <td><CopyableCode code="frontend_id" /></td>
    <td><code>integer</code></td>
    <td>Id of your frontend (wire: frontendId)</td>
</tr>
<tr>
    <td><CopyableCode code="vrack_network_id" /></td>
    <td><code>integer</code></td>
    <td>Internal Load Balancer identifier of the vRack private network attached to your frontend. (wire: vrackNetworkId)</td>
</tr>
<tr>
    <td><CopyableCode code="vrack_vrouter_id" /></td>
    <td><code>integer</code></td>
    <td>Virtual Router Identifier. 1-255 (wire: vrackVrouterId)</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>Human readable name for your frontend, this field is for you (wire: displayName)</td>
</tr>
<tr>
    <td><CopyableCode code="allowed_source" /></td>
    <td><code>array</code></td>
    <td>Restrict IP Load Balancing access to these ip block. No restriction if null. You cannot specify allowedSource and deniedSource both at the same time (wire: allowedSource)</td>
</tr>
<tr>
    <td><CopyableCode code="dedicated_ipfo" /></td>
    <td><code>array</code></td>
    <td>Only attach frontend on these ip. No restriction if null (wire: dedicatedIpfo)</td>
</tr>
<tr>
    <td><CopyableCode code="denied_source" /></td>
    <td><code>array</code></td>
    <td>Deny IP Load Balancing access to these ip block. No restriction if null. You cannot specify allowedSource and deniedSource both at the same time (wire: deniedSource)</td>
</tr>
<tr>
    <td><CopyableCode code="disabled" /></td>
    <td><code>boolean</code></td>
    <td>Disable frontend. Default: 'false'</td>
</tr>
<tr>
    <td><CopyableCode code="force_sni" /></td>
    <td><code>boolean</code></td>
    <td>block all SSL connection request without SNI. Default: 'false' (wire: forceSni)</td>
</tr>
<tr>
    <td><CopyableCode code="hsts" /></td>
    <td><code>boolean</code></td>
    <td>HTTP Strict Transport Security. Default: 'false'</td>
</tr>
<tr>
    <td><CopyableCode code="http_header" /></td>
    <td><code>array</code></td>
    <td>Add header to your frontend. Useful variables admitted : %ci &lt;=&gt; client_ip, %cp &lt;=&gt; client_port (wire: httpHeader)</td>
</tr>
<tr>
    <td><CopyableCode code="port" /></td>
    <td><code>string</code></td>
    <td>Listening port(s) on the server</td>
</tr>
<tr>
    <td><CopyableCode code="redirect_location" /></td>
    <td><code>string</code></td>
    <td>HTTP redirection (Ex : http:​//www.ovh.com) (wire: redirectLocation)</td>
</tr>
<tr>
    <td><CopyableCode code="ssl" /></td>
    <td><code>boolean</code></td>
    <td>SSL deciphering. Default: 'false'</td>
</tr>
<tr>
    <td><CopyableCode code="zone" /></td>
    <td><code>string</code></td>
    <td>Zone of you frontend</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Frontend HTTP

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
    <td><CopyableCode code="default_farm_id" /></td>
    <td><code>integer</code></td>
    <td>Default HTTP Farm of your frontend (wire: defaultFarmId)</td>
</tr>
<tr>
    <td><CopyableCode code="default_ssl_id" /></td>
    <td><code>integer</code></td>
    <td>Default ssl served to your customer (wire: defaultSslId)</td>
</tr>
<tr>
    <td><CopyableCode code="frontend_id" /></td>
    <td><code>integer</code></td>
    <td>Id of your frontend (wire: frontendId)</td>
</tr>
<tr>
    <td><CopyableCode code="vrack_network_id" /></td>
    <td><code>integer</code></td>
    <td>Internal Load Balancer identifier of the vRack private network attached to your frontend. (wire: vrackNetworkId)</td>
</tr>
<tr>
    <td><CopyableCode code="vrack_vrouter_id" /></td>
    <td><code>integer</code></td>
    <td>Virtual Router Identifier. 1-255 (wire: vrackVrouterId)</td>
</tr>
<tr>
    <td><CopyableCode code="display_name" /></td>
    <td><code>string</code></td>
    <td>Human readable name for your frontend, this field is for you (wire: displayName)</td>
</tr>
<tr>
    <td><CopyableCode code="allowed_source" /></td>
    <td><code>array</code></td>
    <td>Restrict IP Load Balancing access to these ip block. No restriction if null. You cannot specify allowedSource and deniedSource both at the same time (wire: allowedSource)</td>
</tr>
<tr>
    <td><CopyableCode code="dedicated_ipfo" /></td>
    <td><code>array</code></td>
    <td>Only attach frontend on these ip. No restriction if null (wire: dedicatedIpfo)</td>
</tr>
<tr>
    <td><CopyableCode code="denied_source" /></td>
    <td><code>array</code></td>
    <td>Deny IP Load Balancing access to these ip block. No restriction if null. You cannot specify allowedSource and deniedSource both at the same time (wire: deniedSource)</td>
</tr>
<tr>
    <td><CopyableCode code="disabled" /></td>
    <td><code>boolean</code></td>
    <td>Disable frontend. Default: 'false'</td>
</tr>
<tr>
    <td><CopyableCode code="force_sni" /></td>
    <td><code>boolean</code></td>
    <td>block all SSL connection request without SNI. Default: 'false' (wire: forceSni)</td>
</tr>
<tr>
    <td><CopyableCode code="hsts" /></td>
    <td><code>boolean</code></td>
    <td>HTTP Strict Transport Security. Default: 'false'</td>
</tr>
<tr>
    <td><CopyableCode code="http_header" /></td>
    <td><code>array</code></td>
    <td>Add header to your frontend. Useful variables admitted : %ci &lt;=&gt; client_ip, %cp &lt;=&gt; client_port (wire: httpHeader)</td>
</tr>
<tr>
    <td><CopyableCode code="port" /></td>
    <td><code>string</code></td>
    <td>Listening port(s) on the server</td>
</tr>
<tr>
    <td><CopyableCode code="redirect_location" /></td>
    <td><code>string</code></td>
    <td>HTTP redirection (Ex : http:​//www.ovh.com) (wire: redirectLocation)</td>
</tr>
<tr>
    <td><CopyableCode code="ssl" /></td>
    <td><code>boolean</code></td>
    <td>SSL deciphering. Default: 'false'</td>
</tr>
<tr>
    <td><CopyableCode code="zone" /></td>
    <td><code>string</code></td>
    <td>Zone of you frontend</td>
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
    <td><a href="#parameter-frontend_id"><code>frontend_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get an HTTP frontend</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-default_farm_id"><code>default_farm_id</code></a>, <a href="#parameter-default_ssl_id"><code>default_ssl_id</code></a>, <a href="#parameter-port"><code>port</code></a>, <a href="#parameter-zone"><code>zone</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List HTTP frontends</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-port"><code>port</code></a>, <a href="#parameter-zone"><code>zone</code></a></td>
    <td></td>
    <td>Create an HTTP frontend</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-frontend_id"><code>frontend_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Update an HTTP frontend</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-frontend_id"><code>frontend_id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Delete an HTTP frontend</td>
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
<tr id="parameter-frontend_id">
    <td><CopyableCode code="frontend_id" /></td>
    <td><code>integer</code></td>
    <td>Id of your frontend (wire: frontendId)</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The internal name of your IP load balancing (wire: serviceName)</td>
</tr>
<tr id="parameter-default_farm_id">
    <td><CopyableCode code="default_farm_id" /></td>
    <td><code>integer</code></td>
    <td>Filter the value of defaultFarmId property (=) (wire: defaultFarmId)</td>
</tr>
<tr id="parameter-default_ssl_id">
    <td><CopyableCode code="default_ssl_id" /></td>
    <td><code>integer</code></td>
    <td>Filter the value of defaultSslId property (=) (wire: defaultSslId)</td>
</tr>
<tr id="parameter-port">
    <td><CopyableCode code="port" /></td>
    <td><code>string</code></td>
    <td>Filter the value of port property (like)</td>
</tr>
<tr id="parameter-x_pagination_mode">
    <td><CopyableCode code="x_pagination_mode" /></td>
    <td><code>string</code></td>
    <td>Sent as CachedObjectList-Pages by default so the list returns the full objects rather than their identifiers. (wire: X-Pagination-Mode)</td>
</tr>
<tr id="parameter-zone">
    <td><CopyableCode code="zone" /></td>
    <td><code>string</code></td>
    <td>Filter the value of zone property (=)</td>
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

Get an HTTP frontend

```sql
SELECT
default_farm_id,
default_ssl_id,
frontend_id,
vrack_network_id,
vrack_vrouter_id,
display_name,
allowed_source,
dedicated_ipfo,
denied_source,
disabled,
force_sni,
hsts,
http_header,
port,
redirect_location,
ssl,
zone
FROM ovh.ip_loadbalancing.http_frontends
WHERE frontend_id = '{{ frontend_id }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List HTTP frontends

```sql
SELECT
default_farm_id,
default_ssl_id,
frontend_id,
vrack_network_id,
vrack_vrouter_id,
display_name,
allowed_source,
dedicated_ipfo,
denied_source,
disabled,
force_sni,
hsts,
http_header,
port,
redirect_location,
ssl,
zone
FROM ovh.ip_loadbalancing.http_frontends
WHERE service_name = '{{ service_name }}' -- required
AND default_farm_id = '{{ default_farm_id }}'
AND default_ssl_id = '{{ default_ssl_id }}'
AND port = '{{ port }}'
AND zone = '{{ zone }}'
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

Create an HTTP frontend

```sql
INSERT INTO ovh.ip_loadbalancing.http_frontends (
allowed_source,
dedicated_ipfo,
default_farm_id,
default_ssl_id,
denied_source,
disabled,
display_name,
force_sni,
hsts,
http_header,
port,
redirect_location,
ssl,
zone,
service_name
)
SELECT 
'{{ allowed_source }}',
'{{ dedicated_ipfo }}',
{{ default_farm_id }},
{{ default_ssl_id }},
'{{ denied_source }}',
{{ disabled }},
'{{ display_name }}',
{{ force_sni }},
{{ hsts }},
'{{ http_header }}',
'{{ port }}' /* required */,
'{{ redirect_location }}',
{{ ssl }},
'{{ zone }}' /* required */,
'{{ service_name }}'
RETURNING
default_farm_id,
default_ssl_id,
frontend_id,
vrack_network_id,
vrack_vrouter_id,
display_name,
allowed_source,
dedicated_ipfo,
denied_source,
disabled,
force_sni,
hsts,
http_header,
port,
redirect_location,
ssl,
zone
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: http_frontends
  props:
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the http_frontends resource.
    - name: allowed_source
      value:
        - "{{ allowed_source }}"
      description: |
        Restrict IP Load Balancing access to these ip block. No restriction if null. You cannot specify allowedSource and deniedSource both at the same time
    - name: dedicated_ipfo
      value:
        - "{{ dedicated_ipfo }}"
      description: |
        Only attach frontend on these ip. No restriction if null
    - name: default_farm_id
      value: {{ default_farm_id }}
      description: |
        Default HTTP Farm of your frontend
    - name: default_ssl_id
      value: {{ default_ssl_id }}
      description: |
        Default ssl served to your customer
    - name: denied_source
      value:
        - "{{ denied_source }}"
      description: |
        Deny IP Load Balancing access to these ip block. No restriction if null. You cannot specify allowedSource and deniedSource both at the same time
    - name: disabled
      value: {{ disabled }}
      description: |
        Disable your frontend. Default: 'false'
    - name: display_name
      value: "{{ display_name }}"
      description: |
        Human readable name for your frontend, this field is for you
    - name: force_sni
      value: {{ force_sni }}
      description: |
        block all SSL connection request without SNI. Default: 'false'
    - name: hsts
      value: {{ hsts }}
      description: |
        HTTP Strict Transport Security. Default: 'false'
    - name: http_header
      value:
        - "{{ http_header }}"
      description: |
        Add header to your frontend. Useful variables admitted : %ci <=> client_ip, %cp <=> client_port
    - name: port
      value: "{{ port }}"
      description: |
        Port(s) attached to your frontend. Supports single port (numerical value), range (2 dash-delimited increasing ports) and comma-separated list of 'single port' and/or 'range'. Each port must be in the [1;49151] range.
    - name: redirect_location
      value: "{{ redirect_location }}"
      description: |
        HTTP redirection (Ex : http://www.ovh.com)
    - name: ssl
      value: {{ ssl }}
      description: |
        SSL deciphering. Default: 'false'
    - name: zone
      value: "{{ zone }}"
      description: |
        Zone of your frontend. Use "all" for all owned zone.
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

Update an HTTP frontend

```sql
UPDATE ovh.ip_loadbalancing.http_frontends
SET 
allowed_source = '{{ allowed_source }}',
dedicated_ipfo = '{{ dedicated_ipfo }}',
default_farm_id = {{ default_farm_id }},
default_ssl_id = {{ default_ssl_id }},
denied_source = '{{ denied_source }}',
disabled = {{ disabled }},
display_name = '{{ display_name }}',
force_sni = {{ force_sni }},
hsts = {{ hsts }},
http_header = '{{ http_header }}',
port = '{{ port }}',
redirect_location = '{{ redirect_location }}',
ssl = {{ ssl }},
zone = '{{ zone }}'
WHERE 
frontend_id = '{{ frontend_id }}' --required
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

Delete an HTTP frontend

```sql
DELETE FROM ovh.ip_loadbalancing.http_frontends
WHERE frontend_id = '{{ frontend_id }}' --required
AND service_name = '{{ service_name }}' --required
;
```
</TabItem>
</Tabs>
