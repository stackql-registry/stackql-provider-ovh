--- 
title: attached_domains
hide_title: false
hide_table_of_contents: false
keywords:
  - attached_domains
  - hosting_web
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

Creates, updates, deletes, gets or lists an <code>attached_domains</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="attached_domains" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.hosting_web.attached_domains" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="get"
    values={[
        { label: 'get', value: 'get' },
        { label: 'list_by_service_name', value: 'list_by_service_name' },
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
    <td><CopyableCode code="runtime_id" /></td>
    <td><code>integer</code></td>
    <td>The runtime configuration ID used on this domain (wire: runtimeId)</td>
</tr>
<tr>
    <td><CopyableCode code="task_id" /></td>
    <td><code>integer</code></td>
    <td>The task ID working on this domain (wire: taskId)</td>
</tr>
<tr>
    <td><CopyableCode code="capabilities" /></td>
    <td><code>array</code></td>
    <td>Provides the capabilities related to your attachedDomain</td>
</tr>
<tr>
    <td><CopyableCode code="cdn" /></td>
    <td><code>string</code></td>
    <td>whether or not attachedDomain is linked to the hosting cdn (active, none)</td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>Domain linked (fqdn)</td>
</tr>
<tr>
    <td><CopyableCode code="firewall" /></td>
    <td><code>string</code></td>
    <td>Firewall state for this path (active, none)</td>
</tr>
<tr>
    <td><CopyableCode code="ip_location" /></td>
    <td><code>string</code></td>
    <td>IP location of the domain linked (BE, CA, CZ, DE, ES, FI, FR, IE, IT, LT, NL, PL, PT, UK) (wire: ipLocation)</td>
</tr>
<tr>
    <td><CopyableCode code="is_flushable" /></td>
    <td><code>boolean</code></td>
    <td>Whether your CDN can be flushed (wire: isFlushable)</td>
</tr>
<tr>
    <td><CopyableCode code="own_log" /></td>
    <td><code>string</code></td>
    <td>Domain for separate the logs (wire: ownLog)</td>
</tr>
<tr>
    <td><CopyableCode code="path" /></td>
    <td><code>string</code></td>
    <td>Attached domain path</td>
</tr>
<tr>
    <td><CopyableCode code="ssl" /></td>
    <td><code>boolean</code></td>
    <td>Put domain in SSL certificate</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Domain status (created, creating, deleting, updating)</td>
</tr>
<tr>
    <td><CopyableCode code="vcs_status" /></td>
    <td><code>string</code></td>
    <td>The status of the VCS synchronization (created, creating, deleting, deploying, disabled, error, initialError) (wire: vcsStatus)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list_by_service_name">

Public attached domain

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
    <td><CopyableCode code="runtime_id" /></td>
    <td><code>integer</code></td>
    <td>The runtime configuration ID used on this domain (wire: runtimeId)</td>
</tr>
<tr>
    <td><CopyableCode code="task_id" /></td>
    <td><code>integer</code></td>
    <td>The task ID working on this domain (wire: taskId)</td>
</tr>
<tr>
    <td><CopyableCode code="capabilities" /></td>
    <td><code>array</code></td>
    <td>Provides the capabilities related to your attachedDomain</td>
</tr>
<tr>
    <td><CopyableCode code="cdn" /></td>
    <td><code>string</code></td>
    <td>whether or not attachedDomain is linked to the hosting cdn (active, none)</td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>Domain linked (fqdn)</td>
</tr>
<tr>
    <td><CopyableCode code="firewall" /></td>
    <td><code>string</code></td>
    <td>Firewall state for this path (active, none)</td>
</tr>
<tr>
    <td><CopyableCode code="ip_location" /></td>
    <td><code>string</code></td>
    <td>IP location of the domain linked (BE, CA, CZ, DE, ES, FI, FR, IE, IT, LT, NL, PL, PT, UK) (wire: ipLocation)</td>
</tr>
<tr>
    <td><CopyableCode code="is_flushable" /></td>
    <td><code>boolean</code></td>
    <td>Whether your CDN can be flushed (wire: isFlushable)</td>
</tr>
<tr>
    <td><CopyableCode code="own_log" /></td>
    <td><code>string</code></td>
    <td>Domain for separate the logs (wire: ownLog)</td>
</tr>
<tr>
    <td><CopyableCode code="path" /></td>
    <td><code>string</code></td>
    <td>Attached domain path</td>
</tr>
<tr>
    <td><CopyableCode code="ssl" /></td>
    <td><code>boolean</code></td>
    <td>Put domain in SSL certificate</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Domain status (created, creating, deleting, updating)</td>
</tr>
<tr>
    <td><CopyableCode code="vcs_status" /></td>
    <td><code>string</code></td>
    <td>The status of the VCS synchronization (created, creating, deleting, deploying, disabled, error, initialError) (wire: vcsStatus)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

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
    <td><CopyableCode code="value" /></td>
    <td><code>string</code></td>
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
    <td><a href="#get"><CopyableCode code="get" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Returns the path, CDN, firewall, SSL, IP location and status of the attached domain.</td>
</tr>
<tr>
    <td><a href="#list_by_service_name"><CopyableCode code="list_by_service_name" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-path"><code>path</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>Returns the domains and subdomains attached to the hosting. Filter them by domain or path.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-domain"><code>domain</code></a></td>
    <td></td>
    <td>Returns the service names of the hostings that have the given domain attached.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Attaches a domain to a folder of the hosting, with its CDN, firewall, SSL and IP location settings, and returns the task. Set bypassDNSConfiguration to true to leave the DNS zone unchanged.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Updates the path, CDN, firewall, SSL, IP location or log domain of the attached domain.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-bypass_dns_configuration"><code>bypass_dns_configuration</code></a></td>
    <td>Detaches the domain from the hosting and returns the task. Set bypassDNSConfiguration to true to leave the DNS zone unchanged.</td>
</tr>
<tr>
    <td><a href="#purge_cache"><CopyableCode code="purge_cache" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Purge the attached domain cache. Purges the CDN cache of the attached domain and returns the task. Available when isFlushable is true on the attached domain.</td>
</tr>
<tr>
    <td><a href="#restart"><CopyableCode code="restart" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-domain"><code>domain</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Restart the attached domain virtual host. Restarts the virtual host serving the attached domain and returns the task.</td>
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
    <td>Domain linked (fqdn)</td>
</tr>
<tr id="parameter-serviceName">
    <td><CopyableCode code="serviceName" /></td>
    <td><code>string</code></td>
    <td>The internal name of your hosting</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>Service name (wire: serviceName)</td>
</tr>
<tr id="parameter-bypass_dns_configuration">
    <td><CopyableCode code="bypass_dns_configuration" /></td>
    <td><code>boolean</code></td>
    <td>If set to true, DNS zone will not be updated by the operation (wire: bypassDNSConfiguration)</td>
</tr>
<tr id="parameter-domain">
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>Filter the value of domain property (like)</td>
</tr>
<tr id="parameter-path">
    <td><CopyableCode code="path" /></td>
    <td><code>string</code></td>
    <td>Filter the value of path property (like)</td>
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
        { label: 'list_by_service_name', value: 'list_by_service_name' },
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="get">

Returns the path, CDN, firewall, SSL, IP location and status of the attached domain.

```sql
SELECT
runtime_id,
task_id,
capabilities,
cdn,
domain,
firewall,
ip_location,
is_flushable,
own_log,
path,
ssl,
status,
vcs_status
FROM ovh.hosting_web.attached_domains
WHERE domain = '{{ domain }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list_by_service_name">

Returns the domains and subdomains attached to the hosting. Filter them by domain or path.

```sql
SELECT
runtime_id,
task_id,
capabilities,
cdn,
domain,
firewall,
ip_location,
is_flushable,
own_log,
path,
ssl,
status,
vcs_status
FROM ovh.hosting_web.attached_domains
WHERE service_name = '{{ service_name }}' -- required
AND domain = '{{ domain }}'
AND path = '{{ path }}'
AND x_pagination_mode = '{{ x_pagination_mode }}'
;
```
</TabItem>
<TabItem value="list">

Returns the service names of the hostings that have the given domain attached.

```sql
SELECT
value
FROM ovh.hosting_web.attached_domains
WHERE domain = '{{ domain }}' -- required
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

Attaches a domain to a folder of the hosting, with its CDN, firewall, SSL and IP location settings, and returns the task. Set bypassDNSConfiguration to true to leave the DNS zone unchanged.

```sql
INSERT INTO ovh.hosting_web.attached_domains (
bypass_dns_configuration,
cdn,
domain,
firewall,
ip_location,
own_log,
path,
runtime_id,
ssl,
service_name
)
SELECT 
{{ bypass_dns_configuration }},
'{{ cdn }}',
'{{ domain }}',
'{{ firewall }}',
'{{ ip_location }}',
'{{ own_log }}',
'{{ path }}',
{{ runtime_id }},
{{ ssl }},
'{{ service_name }}'
RETURNING
id,
object_id,
done_date,
function,
last_update,
object_type,
start_date,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: attached_domains
  props:
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the attached_domains resource.
    - name: bypass_dns_configuration
      value: {{ bypass_dns_configuration }}
      description: |
        If set to true, DNS zone will not be updated by the operation
    - name: cdn
      value: "{{ cdn }}"
      description: |
        Whether the attached domain is linked to the hosting CDN
      valid_values: ['active', 'none']
    - name: domain
      value: "{{ domain }}"
      description: |
        Domain to link
    - name: firewall
      value: "{{ firewall }}"
      description: |
        Whether the firewall is active for this domain
      valid_values: ['active', 'none']
    - name: ip_location
      value: "{{ ip_location }}"
      description: |
        Change attached domain's DNS to the IP of the country
      valid_values: ['BE', 'CA', 'CZ', 'DE', 'ES', 'FI', 'FR', 'IE', 'IT', 'LT', 'NL', 'PL', 'PT', 'UK']
    - name: own_log
      value: "{{ own_log }}"
      description: |
        Domain to separate the logs on
    - name: path
      value: "{{ path }}"
      description: |
        Path of the attached domain
    - name: runtime_id
      value: {{ runtime_id }}
      description: |
        The runtime configuration ID used on this domain
    - name: ssl
      value: {{ ssl }}
      description: |
        Whether to put the attached domain in the SSL certificate
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

Updates the path, CDN, firewall, SSL, IP location or log domain of the attached domain.

```sql
UPDATE ovh.hosting_web.attached_domains
SET 
bypass_dns_configuration = {{ bypass_dns_configuration }},
cdn = '{{ cdn }}',
domain = '{{ domain }}',
firewall = '{{ firewall }}',
ip_location = '{{ ip_location }}',
own_log = '{{ own_log }}',
path = '{{ path }}',
runtime_id = {{ runtime_id }},
ssl = {{ ssl }}
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

Detaches the domain from the hosting and returns the task. Set bypassDNSConfiguration to true to leave the DNS zone unchanged.

```sql
DELETE FROM ovh.hosting_web.attached_domains
WHERE domain = '{{ domain }}' --required
AND service_name = '{{ service_name }}' --required
AND bypass_dns_configuration = '{{ bypass_dns_configuration }}'
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="purge_cache"
    values={[
        { label: 'purge_cache', value: 'purge_cache' },
        { label: 'restart', value: 'restart' }
    ]}
>
<TabItem value="purge_cache">

Purge the attached domain cache. Purges the CDN cache of the attached domain and returns the task. Available when isFlushable is true on the attached domain.

```sql
EXEC ovh.hosting_web.attached_domains.purge_cache 
@domain='{{ domain }}' --required, 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
<TabItem value="restart">

Restart the attached domain virtual host. Restarts the virtual host serving the attached domain and returns the task.

```sql
EXEC ovh.hosting_web.attached_domains.restart 
@domain='{{ domain }}' --required, 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
</Tabs>
