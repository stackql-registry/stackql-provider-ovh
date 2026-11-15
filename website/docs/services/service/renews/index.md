--- 
title: renews
hide_title: false
hide_table_of_contents: false
keywords:
  - renews
  - service
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

Creates, updates, deletes, gets or lists a <code>renews</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="renews" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.service.renews" /></td></tr>
</tbody></table>

## Fields

The following fields are returned by `SELECT` queries:

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

List possible renews for service

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
    <td><CopyableCode code="renew_period" /></td>
    <td><code>string (duration)</code></td>
    <td>ISO8601 formatted renewal duration (wire: renewPeriod)</td>
</tr>
<tr>
    <td><CopyableCode code="strategies" /></td>
    <td><code>array</code></td>
    <td>List possible strategies</td>
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
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-service_id"><code>service_id</code></a></td>
    <td><a href="#parameter-include_options"><code>include_options</code></a></td>
    <td>List possible renews for this service (Beta version)</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_id"><code>service_id</code></a>, <a href="#parameter-duration"><code>duration</code></a>, <a href="#parameter-services"><code>services</code></a></td>
    <td></td>
    <td>Create a renew order (Beta version)</td>
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
<tr id="parameter-service_id">
    <td><CopyableCode code="service_id" /></td>
    <td><code>string</code></td>
    <td>Service Id (wire: serviceId)</td>
</tr>
<tr id="parameter-include_options">
    <td><CopyableCode code="include_options" /></td>
    <td><code>boolean</code></td>
    <td>Include service's option(s) (wire: includeOptions)</td>
</tr>
</tbody>
</table>

## `SELECT` examples

<Tabs
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

List possible renews for this service (Beta version)

```sql
SELECT
renew_period,
strategies
FROM ovh.service.renews
WHERE service_id = '{{ service_id }}' -- required
AND include_options = '{{ include_options }}'
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

Create a renew order (Beta version)

```sql
INSERT INTO ovh.service.renews (
dry_run,
duration,
services,
service_id
)
SELECT 
{{ dry_run }},
'{{ duration }}' /* required */,
'{{ services }}' /* required */,
'{{ service_id }}'
RETURNING
order_id,
date,
expiration_date,
password,
pdf_url,
price_with_tax,
price_without_tax,
retraction_date,
tax,
url
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: renews
  props:
    - name: service_id
      value: "{{ service_id }}"
      description: Required parameter for the renews resource.
    - name: dry_run
      value: {{ dry_run }}
      description: |
        Indicates if renew order is generated
    - name: duration
      value: "{{ duration }}"
      description: |
        Renew duration
    - name: services
      value:
        - {{ services }}
      description: |
        List of services to renew
`}</CodeBlock>

</TabItem>
</Tabs>
