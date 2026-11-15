--- 
title: fax_campaigns
hide_title: false
hide_table_of_contents: false
keywords:
  - fax_campaigns
  - telephony
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

Creates, updates, deletes, gets or lists a <code>fax_campaigns</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="fax_campaigns" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.telephony.fax_campaigns" /></td></tr>
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
    <td>The id of the fax campaign</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the fax campaign</td>
</tr>
<tr>
    <td><CopyableCode code="count_failed" /></td>
    <td><code>integer</code></td>
    <td>The count of failed faxes in the campaign (wire: countFailed)</td>
</tr>
<tr>
    <td><CopyableCode code="count_success" /></td>
    <td><code>integer</code></td>
    <td>The count of success faxes in the campaign (wire: countSuccess)</td>
</tr>
<tr>
    <td><CopyableCode code="count_total" /></td>
    <td><code>integer</code></td>
    <td>The total count of faxes in the campaign (wire: countTotal)</td>
</tr>
<tr>
    <td><CopyableCode code="date_end" /></td>
    <td><code>string (date-time)</code></td>
    <td>The end date of the fax campaign (wire: dateEnd)</td>
</tr>
<tr>
    <td><CopyableCode code="date_start" /></td>
    <td><code>string (date-time)</code></td>
    <td>The start date of the fax campaign (wire: dateStart)</td>
</tr>
<tr>
    <td><CopyableCode code="reference" /></td>
    <td><code>string</code></td>
    <td>The reference of the fax campaign</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the fax campaign</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Fax campaigns

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
    <td>The id of the fax campaign</td>
</tr>
<tr>
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The name of the fax campaign</td>
</tr>
<tr>
    <td><CopyableCode code="count_failed" /></td>
    <td><code>integer</code></td>
    <td>The count of failed faxes in the campaign (wire: countFailed)</td>
</tr>
<tr>
    <td><CopyableCode code="count_success" /></td>
    <td><code>integer</code></td>
    <td>The count of success faxes in the campaign (wire: countSuccess)</td>
</tr>
<tr>
    <td><CopyableCode code="count_total" /></td>
    <td><code>integer</code></td>
    <td>The total count of faxes in the campaign (wire: countTotal)</td>
</tr>
<tr>
    <td><CopyableCode code="date_end" /></td>
    <td><code>string (date-time)</code></td>
    <td>The end date of the fax campaign (wire: dateEnd)</td>
</tr>
<tr>
    <td><CopyableCode code="date_start" /></td>
    <td><code>string (date-time)</code></td>
    <td>The start date of the fax campaign (wire: dateStart)</td>
</tr>
<tr>
    <td><CopyableCode code="reference" /></td>
    <td><code>string</code></td>
    <td>The reference of the fax campaign</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>The status of the fax campaign</td>
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
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get a campaign. Returns the campaign: name, reference, status, dates, and the number of faxes sent, successful and failed.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List campaigns. Returns the identifiers of the fax campaigns of the service. Get a campaign for its status, dates and counters.</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-document_id"><code>document_id</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-recipients_type"><code>recipients_type</code></a>, <a href="#parameter-send_type"><code>send_type</code></a></td>
    <td></td>
    <td>Create a campaign. Creates a campaign that sends a PDF document to a list of numbers or to the numbers of a document. The campaign is sent manually, automatically or at a scheduled date.</td>
</tr>
<tr>
    <td><a href="#delete"><CopyableCode code="delete" /></a></td>
    <td><CopyableCode code="delete" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Delete a campaign. Deletes the fax campaign from the fax service. The campaign no longer appears in the list of campaigns.</td>
</tr>
<tr>
    <td><a href="#start"><CopyableCode code="start" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-billingAccount"><code>billingAccount</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Start a campaign. Starts sending the campaign to its recipients. Follow the progress with the success and failure counters of the campaign.</td>
</tr>
<tr>
    <td><a href="#stop"><CopyableCode code="stop" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-billingAccount"><code>billingAccount</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Stop a campaign. Stops sending the campaign to its recipients. The success and failure counters of the campaign show the faxes sent before the stop.</td>
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
<tr id="parameter-billingAccount">
    <td><CopyableCode code="billingAccount" /></td>
    <td><code>string</code></td>
    <td>The name of your billingAccount</td>
</tr>
<tr id="parameter-billing_account">
    <td><CopyableCode code="billing_account" /></td>
    <td><code>string</code></td>
    <td>The name of your billingAccount (wire: billingAccount)</td>
</tr>
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>integer</code></td>
    <td>Id of the object</td>
</tr>
<tr id="parameter-serviceName">
    <td><CopyableCode code="serviceName" /></td>
    <td><code>string</code></td>
    <td></td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td> (wire: serviceName)</td>
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

Get a campaign. Returns the campaign: name, reference, status, dates, and the number of faxes sent, successful and failed.

```sql
SELECT
id,
name,
count_failed,
count_success,
count_total,
date_end,
date_start,
reference,
status
FROM ovh.telephony.fax_campaigns
WHERE billing_account = '{{ billing_account }}' -- required
AND id = '{{ id }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List campaigns. Returns the identifiers of the fax campaigns of the service. Get a campaign for its status, dates and counters.

```sql
SELECT
id,
name,
count_failed,
count_success,
count_total,
date_end,
date_start,
reference,
status
FROM ovh.telephony.fax_campaigns
WHERE billing_account = '{{ billing_account }}' -- required
AND service_name = '{{ service_name }}' -- required
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

Create a campaign. Creates a campaign that sends a PDF document to a list of numbers or to the numbers of a document. The campaign is sent manually, automatically or at a scheduled date.

```sql
INSERT INTO ovh.telephony.fax_campaigns (
document_id,
fax_quality,
name,
recipients_doc_id,
recipients_list,
recipients_type,
send_date,
send_type,
billing_account,
service_name
)
SELECT 
'{{ document_id }}' /* required */,
'{{ fax_quality }}',
'{{ name }}' /* required */,
'{{ recipients_doc_id }}',
'{{ recipients_list }}',
'{{ recipients_type }}' /* required */,
'{{ send_date }}',
'{{ send_type }}' /* required */,
'{{ billing_account }}',
'{{ service_name }}'
RETURNING
id,
name,
count_failed,
count_success,
count_total,
date_end,
date_start,
reference,
status
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: fax_campaigns
  props:
    - name: billing_account
      value: "{{ billing_account }}"
      description: Required parameter for the fax_campaigns resource.
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the fax_campaigns resource.
    - name: document_id
      value: "{{ document_id }}"
      description: |
        The id of the /me/document pdf you want to send
    - name: fax_quality
      value: "{{ fax_quality }}"
      description: |
        The quality of the fax you want to send
      valid_values: ['best', 'high', 'normal']
    - name: name
      value: "{{ name }}"
      description: |
        The name of the fax campaign
    - name: recipients_doc_id
      value: "{{ recipients_doc_id }}"
      description: |
        If recipientsType is set to document, the id of the document containing the recipients phone numbers
    - name: recipients_list
      value:
        - "{{ recipients_list }}"
      description: |
        If recipientsType is set to list, the list of recipients phone numbers
    - name: recipients_type
      value: "{{ recipients_type }}"
      description: |
        Method to set the campaign recipient
      valid_values: ['document', 'list']
    - name: send_date
      value: "{{ send_date }}"
      description: |
        Sending date of the campaign (when sendType is scheduled)
    - name: send_type
      value: "{{ send_type }}"
      description: |
        Sending type of the campaign
      valid_values: ['automatic', 'manual', 'scheduled']
`}</CodeBlock>

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

Delete a campaign. Deletes the fax campaign from the fax service. The campaign no longer appears in the list of campaigns.

```sql
DELETE FROM ovh.telephony.fax_campaigns
WHERE billing_account = '{{ billing_account }}' --required
AND id = '{{ id }}' --required
AND service_name = '{{ service_name }}' --required
;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="start"
    values={[
        { label: 'start', value: 'start' },
        { label: 'stop', value: 'stop' }
    ]}
>
<TabItem value="start">

Start a campaign. Starts sending the campaign to its recipients. Follow the progress with the success and failure counters of the campaign.

```sql
EXEC ovh.telephony.fax_campaigns.start 
@billingAccount='{{ billingAccount }}' --required, 
@id='{{ id }}' --required, 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
<TabItem value="stop">

Stop a campaign. Stops sending the campaign to its recipients. The success and failure counters of the campaign show the faxes sent before the stop.

```sql
EXEC ovh.telephony.fax_campaigns.stop 
@billingAccount='{{ billingAccount }}' --required, 
@id='{{ id }}' --required, 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
</Tabs>
