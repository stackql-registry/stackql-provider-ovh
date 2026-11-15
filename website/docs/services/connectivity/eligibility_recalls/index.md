--- 
title: eligibility_recalls
hide_title: false
hide_table_of_contents: false
keywords:
  - eligibility_recalls
  - connectivity
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

Creates, updates, deletes, gets or lists an <code>eligibility_recalls</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="eligibility_recalls" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.connectivity.eligibility_recalls" /></td></tr>
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
    <td><CopyableCode code="id" /></td>
    <td><code>integer</code></td>
    <td>ID</td>
</tr>
<tr>
    <td><CopyableCode code="completed" /></td>
    <td><code>boolean</code></td>
    <td>Is the recall completed ?</td>
</tr>
<tr>
    <td><CopyableCode code="completed_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Completed date (wire: completedDate)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date (wire: creationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="customer" /></td>
    <td><code>string</code></td>
    <td>customer ID</td>
</tr>
<tr>
    <td><CopyableCode code="dedicatedfiber_request" /></td>
    <td><code>boolean</code></td>
    <td>Check for Dedicated Fiber FTTO/FTTE eligibility ? (wire: dedicatedfiberRequest)</td>
</tr>
<tr>
    <td><CopyableCode code="profiber_request" /></td>
    <td><code>boolean</code></td>
    <td>Check for Pro Fiber FTTH eligibility ? (wire: profiberRequest)</td>
</tr>
<tr>
    <td><CopyableCode code="reference" /></td>
    <td><code>string</code></td>
    <td>Reference</td>
</tr>
<tr>
    <td><CopyableCode code="reference_type" /></td>
    <td><code>string</code></td>
    <td>Reference type (address, building) (wire: referenceType)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Updated date (wire: updatedDate)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Eligibility recall

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
    <td><CopyableCode code="id" /></td>
    <td><code>integer</code></td>
    <td>ID</td>
</tr>
<tr>
    <td><CopyableCode code="completed" /></td>
    <td><code>boolean</code></td>
    <td>Is the recall completed ?</td>
</tr>
<tr>
    <td><CopyableCode code="completed_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Completed date (wire: completedDate)</td>
</tr>
<tr>
    <td><CopyableCode code="creation_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Creation date (wire: creationDate)</td>
</tr>
<tr>
    <td><CopyableCode code="customer" /></td>
    <td><code>string</code></td>
    <td>customer ID</td>
</tr>
<tr>
    <td><CopyableCode code="dedicatedfiber_request" /></td>
    <td><code>boolean</code></td>
    <td>Check for Dedicated Fiber FTTO/FTTE eligibility ? (wire: dedicatedfiberRequest)</td>
</tr>
<tr>
    <td><CopyableCode code="profiber_request" /></td>
    <td><code>boolean</code></td>
    <td>Check for Pro Fiber FTTH eligibility ? (wire: profiberRequest)</td>
</tr>
<tr>
    <td><CopyableCode code="reference" /></td>
    <td><code>string</code></td>
    <td>Reference</td>
</tr>
<tr>
    <td><CopyableCode code="reference_type" /></td>
    <td><code>string</code></td>
    <td>Reference type (address, building) (wire: referenceType)</td>
</tr>
<tr>
    <td><CopyableCode code="updated_date" /></td>
    <td><code>string (date-time)</code></td>
    <td>Updated date (wire: updatedDate)</td>
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
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Returns an eligibility recall: its address or building reference, the fiber offers it checks (Pro Fiber FTTH, Dedicated Fiber FTTO/FTTE), and its creation, update and completion dates.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td></td>
    <td>Returns the eligibility recalls of the account, with their address or building reference, the requested fiber offers and whether each one is completed.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-reference"><code>reference</code></a>, <a href="#parameter-reference_type"><code>reference_type</code></a></td>
    <td></td>
    <td>Creates a recall on an address or building reference, to check again its eligibility to Pro Fiber FTTH or Dedicated Fiber FTTO/FTTE. Returns the created recall.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-id"><code>id</code></a>, <a href="#parameter-reference"><code>reference</code></a>, <a href="#parameter-reference_type"><code>reference_type</code></a></td>
    <td></td>
    <td>Updates the reference and the fiber offers to check of an eligibility recall. Returns the updated recall.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-id"><code>id</code></a></td>
    <td></td>
    <td>Deletes the eligibility recall of an address or building reference.</td>
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
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>integer</code></td>
    <td>Id</td>
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

Returns an eligibility recall: its address or building reference, the fiber offers it checks (Pro Fiber FTTH, Dedicated Fiber FTTO/FTTE), and its creation, update and completion dates.

```sql
SELECT
id,
completed,
completed_date,
creation_date,
customer,
dedicatedfiber_request,
profiber_request,
reference,
reference_type,
updated_date
FROM ovh.connectivity.eligibility_recalls
WHERE id = '{{ id }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns the eligibility recalls of the account, with their address or building reference, the requested fiber offers and whether each one is completed.

```sql
SELECT
id,
completed,
completed_date,
creation_date,
customer,
dedicatedfiber_request,
profiber_request,
reference,
reference_type,
updated_date
FROM ovh.connectivity.eligibility_recalls
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

Creates a recall on an address or building reference, to check again its eligibility to Pro Fiber FTTH or Dedicated Fiber FTTO/FTTE. Returns the created recall.

```sql
INSERT INTO ovh.connectivity.eligibility_recalls (
dedicatedfiber_request,
profiber_request,
reference,
reference_type
)
SELECT 
{{ dedicatedfiber_request }},
{{ profiber_request }},
'{{ reference }}' /* required */,
'{{ reference_type }}' /* required */
RETURNING
id,
completed,
completed_date,
creation_date,
customer,
dedicatedfiber_request,
profiber_request,
reference,
reference_type,
updated_date
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: eligibility_recalls
  props:
    - name: dedicatedfiber_request
      value: {{ dedicatedfiber_request }}
      description: |
        Check for Dedicated Fiber FTTO/FTTE eligibility ?
    - name: profiber_request
      value: {{ profiber_request }}
      description: |
        Check for Pro Fiber FTTH eligibility ?
    - name: reference
      value: "{{ reference }}"
      description: |
        Reference
    - name: reference_type
      value: "{{ reference_type }}"
      description: |
        Reference type
      valid_values: ['address', 'building']
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

Updates the reference and the fiber offers to check of an eligibility recall. Returns the updated recall.

```sql
UPDATE ovh.connectivity.eligibility_recalls
SET 
dedicatedfiber_request = {{ dedicatedfiber_request }},
profiber_request = {{ profiber_request }},
reference = '{{ reference }}',
reference_type = '{{ reference_type }}'
WHERE 
id = '{{ id }}' --required
AND reference = '{{ reference }}' --required
AND reference_type = '{{ reference_type }}' --required
RETURNING
id,
completed,
completed_date,
creation_date,
customer,
dedicatedfiber_request,
profiber_request,
reference,
reference_type,
updated_date;
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

Deletes the eligibility recall of an address or building reference.

```sql
DELETE FROM ovh.connectivity.eligibility_recalls
WHERE id = '{{ id }}' --required
;
```
</TabItem>
</Tabs>
