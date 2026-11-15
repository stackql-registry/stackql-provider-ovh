--- 
title: secondary_dns_domains
hide_title: false
hide_table_of_contents: false
keywords:
  - secondary_dns_domains
  - dedicated_server
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

Creates, updates, deletes, gets or lists a <code>secondary_dns_domains</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="secondary_dns_domains" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.dedicated_server.secondary_dns_domains" /></td></tr>
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
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td> (wire: creationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="dns" /></td>
    <td><code>string</code></td>
    <td>Secondary DNS server</td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>Domain on slave server</td>
</tr>
<tr>
    <td><CopyableCode code="ip_master" /></td>
    <td><code>string (ipv4)</code></td>
    <td>Master IPv4 address (example: 192.0.2.0) (wire: ipMaster)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Secondary DNS infos

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
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td> (wire: creationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="dns" /></td>
    <td><code>string</code></td>
    <td>Secondary DNS server</td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>Domain on slave server</td>
</tr>
<tr>
    <td><CopyableCode code="ip_master" /></td>
    <td><code>string (ipv4)</code></td>
    <td>Master IPv4 address (example: 192.0.2.0) (wire: ipMaster)</td>
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
    <td><a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get a secondary DNS domain. Returns the domain, the secondary DNS server that hosts it, its master IPv4 address and its creation date.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List secondary DNS domains. Returns the names of the domains declared on the secondary DNS of the server.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-domain"><code>domain</code></a></td>
    <td></td>
    <td>Create a secondary DNS domain. Adds a domain to the secondary DNS of the server, with its ip, which is required. The domain must first be verified with the TXT record given by secondaryDnsNameDomainToken.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Update a secondary DNS domain. Updates the master IPv4 address targeted by the domain on the secondary DNS. It is the only field that can be changed.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Delete a secondary DNS domain. Removes the domain from the secondary DNS of the server. The call returns no content.</td>
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
<tr id="parameter-domain">
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>Domain on slave server</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The internal name of your dedicated server (wire: serviceName)</td>
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

Get a secondary DNS domain. Returns the domain, the secondary DNS server that hosts it, its master IPv4 address and its creation date.

```sql
SELECT
creation_date,
dns,
domain,
ip_master
FROM ovh.dedicated_server.secondary_dns_domains
WHERE domain = '{{ domain }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List secondary DNS domains. Returns the names of the domains declared on the secondary DNS of the server.

```sql
SELECT
creation_date,
dns,
domain,
ip_master
FROM ovh.dedicated_server.secondary_dns_domains
WHERE service_name = '{{ service_name }}' -- required
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

Create a secondary DNS domain. Adds a domain to the secondary DNS of the server, with its ip, which is required. The domain must first be verified with the TXT record given by secondaryDnsNameDomainToken.

```sql
INSERT INTO ovh.dedicated_server.secondary_dns_domains (
domain,
ip,
service_name
)
SELECT 
'{{ domain }}' /* required */,
'{{ ip }}',
'{{ service_name }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: secondary_dns_domains
  props:
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the secondary_dns_domains resource.
    - name: domain
      value: "{{ domain }}"
      description: |
        The domain to add
    - name: ip
      value: "{{ ip }}"
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

Update a secondary DNS domain. Updates the master IPv4 address targeted by the domain on the secondary DNS. It is the only field that can be changed.

```sql
UPDATE ovh.dedicated_server.secondary_dns_domains
SET 
ip_master = '{{ ip_master }}'
WHERE 
domain = '{{ domain }}' --required
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

Delete a secondary DNS domain. Removes the domain from the secondary DNS of the server. The call returns no content.

```sql
DELETE FROM ovh.dedicated_server.secondary_dns_domains
WHERE domain = '{{ domain }}' --required
AND service_name = '{{ service_name }}' --required
;
```
</TabItem>
</Tabs>
