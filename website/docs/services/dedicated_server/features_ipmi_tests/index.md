--- 
title: features_ipmi_tests
hide_title: false
hide_table_of_contents: false
keywords:
  - features_ipmi_tests
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

Creates, updates, deletes, gets or lists a <code>features_ipmi_tests</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="features_ipmi_tests" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.dedicated_server.features_ipmi_tests" /></td></tr>
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
    <td><CopyableCode code="date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Test running date</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Test result</td>
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
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td></td>
    <td>Get an IPMI test result. Returns the result and the run date of the IPMI test of the given type: http, password or ping. Launch the test with POST on the same route first; the result is kept only for the ttl given at launch.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-ttl"><code>ttl</code></a>, <a href="#parameter-type"><code>type</code></a></td>
    <td></td>
    <td>Test the IPMI interface. Launches an http, password or ping test on the IPMI interface and returns a task. ttl sets how long the result is kept: 1, 3, 5, 10 or 15 minutes. The result is read with GET on the same route.</td>
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
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>The internal name of your dedicated server (wire: serviceName)</td>
</tr>
<tr id="parameter-type">
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Test type result on KVM IPMI interface</td>
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

Get an IPMI test result. Returns the result and the run date of the IPMI test of the given type: http, password or ping. Launch the test with POST on the same route first; the result is kept only for the ttl given at launch.

```sql
SELECT
date,
status
FROM ovh.dedicated_server.features_ipmi_tests
WHERE service_name = '{{ service_name }}' -- required
AND type = '{{ type }}' -- required
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

Test the IPMI interface. Launches an http, password or ping test on the IPMI interface and returns a task. ttl sets how long the result is kept: 1, 3, 5, 10 or 15 minutes. The result is read with GET on the same route.

```sql
INSERT INTO ovh.dedicated_server.features_ipmi_tests (
ttl,
type,
service_name
)
SELECT 
{{ ttl }} /* required */,
'{{ type }}' /* required */,
'{{ service_name }}'
RETURNING
planned_intervention_id,
task_id,
change_uuid,
comment,
done_date,
function,
last_update,
need_schedule,
note,
start_date,
status,
tags,
ticket_reference
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: features_ipmi_tests
  props:
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the features_ipmi_tests resource.
    - name: ttl
      value: {{ ttl }}
      description: |
        Result time to live in minutes
      valid_values: ['1', '3', '5', '10', '15']
    - name: type
      value: "{{ type }}"
      description: |
        Different test can be made on IPMI interface
      valid_values: ['http', 'password', 'ping']
`}</CodeBlock>

</TabItem>
</Tabs>
