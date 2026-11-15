--- 
title: easy_huntings
hide_title: false
hide_table_of_contents: false
keywords:
  - easy_huntings
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

Creates, updates, deletes, gets or lists an <code>easy_huntings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="easy_huntings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.telephony.easy_huntings" /></td></tr>
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
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td> (wire: serviceName)</td>
</tr>
<tr>
    <td><CopyableCode code="anonymous_rejection" /></td>
    <td><code>boolean</code></td>
    <td>Reject (hangup) anonymous calls (wire: anonymousRejection)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the service</td>
</tr>
<tr>
    <td><CopyableCode code="feature_type" /></td>
    <td><code>string</code></td>
    <td>Feature of the service (aiAgent, carrierSip, cloudHunting, cloudIvr, conference, contactCenterSolution, contactCenterSolutionExpert, ddi, easyHunting, empty, fax, freefax, mgcp, oldConference, plugAndFax, redirect, sip, svi, voicefax, voicemail, vxml) (wire: featureType)</td>
</tr>
<tr>
    <td><CopyableCode code="is_ccs" /></td>
    <td><code>boolean</code></td>
    <td>Does the service have extended CCS options enabled? (wire: isCCS)</td>
</tr>
<tr>
    <td><CopyableCode code="max_wait_time" /></td>
    <td><code>integer</code></td>
    <td>Max wait time when caller is in queue (in seconds) (wire: maxWaitTime)</td>
</tr>
<tr>
    <td><CopyableCode code="queue_size" /></td>
    <td><code>integer</code></td>
    <td>Max number of callers in queue (wire: queueSize)</td>
</tr>
<tr>
    <td><CopyableCode code="service_type" /></td>
    <td><code>string</code></td>
    <td>General type of the service (alias, line) (wire: serviceType)</td>
</tr>
<tr>
    <td><CopyableCode code="show_caller_number" /></td>
    <td><code>string</code></td>
    <td>The presented number when bridging calls (alias, both, caller) (wire: showCallerNumber)</td>
</tr>
<tr>
    <td><CopyableCode code="status_ivr_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Enable/Disable the status change IVR on your callcenter. The IVR is enabled by default. (wire: statusIvrEnabled)</td>
</tr>
<tr>
    <td><CopyableCode code="strategy" /></td>
    <td><code>string</code></td>
    <td>The calls dispatching strategy (cumulationByAgentOrder, longestHangupAgent, longestIdleAgent, random, ringAll, roundRobin, sequentiallyByAgentOrder)</td>
</tr>
<tr>
    <td><CopyableCode code="tone_on_closing" /></td>
    <td><code>integer</code></td>
    <td>Tone played just before call is hang up (wire: toneOnClosing)</td>
</tr>
<tr>
    <td><CopyableCode code="tone_on_hold" /></td>
    <td><code>integer</code></td>
    <td>Tone played when caller is put on hold (wire: toneOnHold)</td>
</tr>
<tr>
    <td><CopyableCode code="tone_on_opening" /></td>
    <td><code>integer</code></td>
    <td>Tone played when call is picked up (wire: toneOnOpening)</td>
</tr>
<tr>
    <td><CopyableCode code="voicemail" /></td>
    <td><code>string (phone-number)</code></td>
    <td>The voicemail used by the EasyPABX</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

OVH easy calls queues

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
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td> (wire: serviceName)</td>
</tr>
<tr>
    <td><CopyableCode code="anonymous_rejection" /></td>
    <td><code>boolean</code></td>
    <td>Reject (hangup) anonymous calls (wire: anonymousRejection)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Description of the service</td>
</tr>
<tr>
    <td><CopyableCode code="feature_type" /></td>
    <td><code>string</code></td>
    <td>Feature of the service (aiAgent, carrierSip, cloudHunting, cloudIvr, conference, contactCenterSolution, contactCenterSolutionExpert, ddi, easyHunting, empty, fax, freefax, mgcp, oldConference, plugAndFax, redirect, sip, svi, voicefax, voicemail, vxml) (wire: featureType)</td>
</tr>
<tr>
    <td><CopyableCode code="is_ccs" /></td>
    <td><code>boolean</code></td>
    <td>Does the service have extended CCS options enabled? (wire: isCCS)</td>
</tr>
<tr>
    <td><CopyableCode code="max_wait_time" /></td>
    <td><code>integer</code></td>
    <td>Max wait time when caller is in queue (in seconds) (wire: maxWaitTime)</td>
</tr>
<tr>
    <td><CopyableCode code="queue_size" /></td>
    <td><code>integer</code></td>
    <td>Max number of callers in queue (wire: queueSize)</td>
</tr>
<tr>
    <td><CopyableCode code="service_type" /></td>
    <td><code>string</code></td>
    <td>General type of the service (alias, line) (wire: serviceType)</td>
</tr>
<tr>
    <td><CopyableCode code="show_caller_number" /></td>
    <td><code>string</code></td>
    <td>The presented number when bridging calls (alias, both, caller) (wire: showCallerNumber)</td>
</tr>
<tr>
    <td><CopyableCode code="status_ivr_enabled" /></td>
    <td><code>boolean</code></td>
    <td>Enable/Disable the status change IVR on your callcenter. The IVR is enabled by default. (wire: statusIvrEnabled)</td>
</tr>
<tr>
    <td><CopyableCode code="strategy" /></td>
    <td><code>string</code></td>
    <td>The calls dispatching strategy (cumulationByAgentOrder, longestHangupAgent, longestIdleAgent, random, ringAll, roundRobin, sequentiallyByAgentOrder)</td>
</tr>
<tr>
    <td><CopyableCode code="tone_on_closing" /></td>
    <td><code>integer</code></td>
    <td>Tone played just before call is hang up (wire: toneOnClosing)</td>
</tr>
<tr>
    <td><CopyableCode code="tone_on_hold" /></td>
    <td><code>integer</code></td>
    <td>Tone played when caller is put on hold (wire: toneOnHold)</td>
</tr>
<tr>
    <td><CopyableCode code="tone_on_opening" /></td>
    <td><code>integer</code></td>
    <td>Tone played when call is picked up (wire: toneOnOpening)</td>
</tr>
<tr>
    <td><CopyableCode code="voicemail" /></td>
    <td><code>string (phone-number)</code></td>
    <td>The voicemail used by the EasyPABX</td>
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
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get a contact center service</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List contact center services</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Update a contact center service</td>
</tr>
<tr>
    <td><a href="#sound_upload"><CopyableCode code="sound_upload" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-billingAccount"><code>billingAccount</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Upload a sound</td>
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

Get a contact center service

```sql
SELECT
service_name,
anonymous_rejection,
description,
feature_type,
is_ccs,
max_wait_time,
queue_size,
service_type,
show_caller_number,
status_ivr_enabled,
strategy,
tone_on_closing,
tone_on_hold,
tone_on_opening,
voicemail
FROM ovh.telephony.easy_huntings
WHERE billing_account = '{{ billing_account }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List contact center services

```sql
SELECT
service_name,
anonymous_rejection,
description,
feature_type,
is_ccs,
max_wait_time,
queue_size,
service_type,
show_caller_number,
status_ivr_enabled,
strategy,
tone_on_closing,
tone_on_hold,
tone_on_opening,
voicemail
FROM ovh.telephony.easy_huntings
WHERE billing_account = '{{ billing_account }}' -- required
AND x_pagination_mode = '{{ x_pagination_mode }}'
;
```
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

Update a contact center service

```sql
UPDATE ovh.telephony.easy_huntings
SET 
anonymous_rejection = {{ anonymous_rejection }},
description = '{{ description }}',
max_wait_time = {{ max_wait_time }},
queue_size = {{ queue_size }},
show_caller_number = '{{ show_caller_number }}',
status_ivr_enabled = {{ status_ivr_enabled }},
strategy = '{{ strategy }}',
tone_on_closing = {{ tone_on_closing }},
tone_on_hold = {{ tone_on_hold }},
tone_on_opening = {{ tone_on_opening }},
voicemail = '{{ voicemail }}'
WHERE 
billing_account = '{{ billing_account }}' --required
AND service_name = '{{ service_name }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="sound_upload"
    values={[
        { label: 'sound_upload', value: 'sound_upload' }
    ]}
>
<TabItem value="sound_upload">

Upload a sound

```sql
EXEC ovh.telephony.easy_huntings.sound_upload 
@billingAccount='{{ billingAccount }}' --required, 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"documentId": "{{ documentId }}", 
"name": "{{ name }}", 
"url": "{{ url }}"
}'
;
```
</TabItem>
</Tabs>
