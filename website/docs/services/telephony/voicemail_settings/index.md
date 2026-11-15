--- 
title: voicemail_settings
hide_title: false
hide_table_of_contents: false
keywords:
  - voicemail_settings
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

Creates, updates, deletes, gets or lists a <code>voicemail_settings</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="voicemail_settings" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.telephony.voicemail_settings" /></td></tr>
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
    <td><CopyableCode code="full_greeting_sound_id" /></td>
    <td><code>integer</code></td>
    <td>Sound ID of the long greeeting (wire: fullGreetingSoundId)</td>
</tr>
<tr>
    <td><CopyableCode code="short_greeting_sound_id" /></td>
    <td><code>integer</code></td>
    <td>Sound ID of the short greeting played before an automated message (wire: shortGreetingSoundId)</td>
</tr>
<tr>
    <td><CopyableCode code="temporary_greeting_sound_id" /></td>
    <td><code>integer</code></td>
    <td>Sound ID of the temporary greeeting (wire: temporaryGreetingSoundId)</td>
</tr>
<tr>
    <td><CopyableCode code="from_name" /></td>
    <td><code>string</code></td>
    <td>Name from which emails will be sent (wire: fromName)</td>
</tr>
<tr>
    <td><CopyableCode code="annouce_message" /></td>
    <td><code>string</code></td>
    <td>Name of the voicemail panel announce file (wire: annouceMessage)</td>
</tr>
<tr>
    <td><CopyableCode code="audio_format" /></td>
    <td><code>string</code></td>
    <td>Format of the voicemail audio file attached to emails (aiff, au, flac, mp3, ogg, wav) (wire: audioFormat)</td>
</tr>
<tr>
    <td><CopyableCode code="do_not_record" /></td>
    <td><code>boolean</code></td>
    <td>Don't allow callers to leave voicemails (wire: doNotRecord)</td>
</tr>
<tr>
    <td><CopyableCode code="force_password" /></td>
    <td><code>boolean</code></td>
    <td>Force password request to access the voicemail panel (wire: forcePassword)</td>
</tr>
<tr>
    <td><CopyableCode code="from_email" /></td>
    <td><code>string</code></td>
    <td>Email address from which emails will be sent (wire: fromEmail)</td>
</tr>
<tr>
    <td><CopyableCode code="greeting_type" /></td>
    <td><code>string</code></td>
    <td>Type of the greeting to play (default, full, short) (wire: greetingType)</td>
</tr>
<tr>
    <td><CopyableCode code="is_new_version" /></td>
    <td><code>boolean</code></td>
    <td>Current voicemail version (wire: isNewVersion)</td>
</tr>
<tr>
    <td><CopyableCode code="keep_message" /></td>
    <td><code>boolean</code></td>
    <td>Don't delete voicemails after they've been sent by email (wire: keepMessage)</td>
</tr>
<tr>
    <td><CopyableCode code="redirection_emails" /></td>
    <td><code>array</code></td>
    <td>Email addresses to notify when a new voicemail is left (wire: redirectionEmails)</td>
</tr>
<tr>
    <td><CopyableCode code="temporary_greeting_activated" /></td>
    <td><code>boolean</code></td>
    <td>Play the temporary greeting instead of the regular one (wire: temporaryGreetingActivated)</td>
</tr>
<tr>
    <td><CopyableCode code="unread_messages" /></td>
    <td><code>integer</code></td>
    <td>Quantity of unread voicemails (wire: unreadMessages)</td>
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
    <td>Get the voicemail settings</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Update the voicemail settings</td>
</tr>
<tr>
    <td><a href="#change_password"><CopyableCode code="change_password" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-billingAccount"><code>billingAccount</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-password"><code>password</code></a></td>
    <td></td>
    <td>Change the voicemail password</td>
</tr>
<tr>
    <td><a href="#change_routing"><CopyableCode code="change_routing" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-billingAccount"><code>billingAccount</code></a>, <a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-routing"><code>routing</code></a></td>
    <td></td>
    <td>Enable or disable the voicemail</td>
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

Get the voicemail settings

```sql
SELECT
full_greeting_sound_id,
short_greeting_sound_id,
temporary_greeting_sound_id,
from_name,
annouce_message,
audio_format,
do_not_record,
force_password,
from_email,
greeting_type,
is_new_version,
keep_message,
redirection_emails,
temporary_greeting_activated,
unread_messages
FROM ovh.telephony.voicemail_settings
WHERE billing_account = '{{ billing_account }}' -- required
AND service_name = '{{ service_name }}' -- required
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

Update the voicemail settings

```sql
UPDATE ovh.telephony.voicemail_settings
SET 
audio_format = '{{ audio_format }}',
do_not_record = {{ do_not_record }},
force_password = {{ force_password }},
from_email = '{{ from_email }}',
from_name = '{{ from_name }}',
full_greeting_sound_id = {{ full_greeting_sound_id }},
greeting_type = '{{ greeting_type }}',
keep_message = {{ keep_message }},
redirection_emails = '{{ redirection_emails }}',
short_greeting_sound_id = {{ short_greeting_sound_id }},
temporary_greeting_activated = {{ temporary_greeting_activated }},
temporary_greeting_sound_id = {{ temporary_greeting_sound_id }}
WHERE 
billing_account = '{{ billing_account }}' --required
AND service_name = '{{ service_name }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="change_password"
    values={[
        { label: 'change_password', value: 'change_password' },
        { label: 'change_routing', value: 'change_routing' }
    ]}
>
<TabItem value="change_password">

Change the voicemail password

```sql
EXEC ovh.telephony.voicemail_settings.change_password 
@billingAccount='{{ billingAccount }}' --required, 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"password": "{{ password }}"
}'
;
```
</TabItem>
<TabItem value="change_routing">

Enable or disable the voicemail

```sql
EXEC ovh.telephony.voicemail_settings.change_routing 
@billingAccount='{{ billingAccount }}' --required, 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"routing": "{{ routing }}"
}'
;
```
</TabItem>
</Tabs>
