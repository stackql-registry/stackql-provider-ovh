--- 
title: line_options
hide_title: false
hide_table_of_contents: false
keywords:
  - line_options
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

Creates, updates, deletes, gets or lists a <code>line_options</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="line_options" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.telephony.line_options" /></td></tr>
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
    <td><CopyableCode code="tone_on_call_waiting_sound_id" /></td>
    <td><code>integer</code></td>
    <td>Sound ID of on-call-waiting tone (wire: toneOnCallWaitingSoundId)</td>
</tr>
<tr>
    <td><CopyableCode code="tone_on_hold_sound_id" /></td>
    <td><code>integer</code></td>
    <td>Sound ID of on-hold tone (wire: toneOnHoldSoundId)</td>
</tr>
<tr>
    <td><CopyableCode code="tone_ringback_sound_id" /></td>
    <td><code>integer</code></td>
    <td>Sound ID of ringback tone (wire: toneRingbackSoundId)</td>
</tr>
<tr>
    <td><CopyableCode code="absent_subscriber" /></td>
    <td><code>boolean</code></td>
    <td> (wire: absentSubscriber)</td>
</tr>
<tr>
    <td><CopyableCode code="anonymous_call_rejection" /></td>
    <td><code>boolean</code></td>
    <td>Reject anonymous calls (wire: anonymousCallRejection)</td>
</tr>
<tr>
    <td><CopyableCode code="call_restriction_incoming" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not the line has restriction on incoming calls (wire: callRestrictionIncoming)</td>
</tr>
<tr>
    <td><CopyableCode code="call_restriction_outgoing" /></td>
    <td><code>boolean</code></td>
    <td>Whether or not the line has restriction on outgoing calls (wire: callRestrictionOutgoing)</td>
</tr>
<tr>
    <td><CopyableCode code="call_waiting" /></td>
    <td><code>boolean</code></td>
    <td>If the line receives a new call and the line is already in communication, this new call is dispatched once the current call is completed (wire: callWaiting)</td>
</tr>
<tr>
    <td><CopyableCode code="codecs" /></td>
    <td><code>string</code></td>
    <td>Codecs preferences</td>
</tr>
<tr>
    <td><CopyableCode code="default_voicemail" /></td>
    <td><code>string (phone-number)</code></td>
    <td>The default voicemail of the line. It can be the voicemail of any line of your account. (wire: defaultVoicemail)</td>
</tr>
<tr>
    <td><CopyableCode code="display_number" /></td>
    <td><code>string (phone-number)</code></td>
    <td>Phone number (wire: displayNumber)</td>
</tr>
<tr>
    <td><CopyableCode code="do_not_disturb" /></td>
    <td><code>boolean</code></td>
    <td> (wire: doNotDisturb)</td>
</tr>
<tr>
    <td><CopyableCode code="domain" /></td>
    <td><code>string</code></td>
    <td>The domain to configure in your SIP client.</td>
</tr>
<tr>
    <td><CopyableCode code="forward_backup" /></td>
    <td><code>boolean</code></td>
    <td>Enable calls forward when the line is unavailable (wire: forwardBackup)</td>
</tr>
<tr>
    <td><CopyableCode code="forward_backup_nature" /></td>
    <td><code>string</code></td>
    <td>Nature of the forward when the line is unavailable (fax, number, voicemail) (wire: forwardBackupNature)</td>
</tr>
<tr>
    <td><CopyableCode code="forward_backup_number" /></td>
    <td><code>string (phone-number)</code></td>
    <td>Destination of the forward when the line is unavailable (wire: forwardBackupNumber)</td>
</tr>
<tr>
    <td><CopyableCode code="forward_busy" /></td>
    <td><code>boolean</code></td>
    <td>Enable calls forward when the line is busy (wire: forwardBusy)</td>
</tr>
<tr>
    <td><CopyableCode code="forward_busy_nature" /></td>
    <td><code>string</code></td>
    <td>Nature of the forward when the line is busy (fax, number, voicemail) (wire: forwardBusyNature)</td>
</tr>
<tr>
    <td><CopyableCode code="forward_busy_number" /></td>
    <td><code>string (phone-number)</code></td>
    <td>Destination of the forward when the line is busy (wire: forwardBusyNumber)</td>
</tr>
<tr>
    <td><CopyableCode code="forward_no_reply" /></td>
    <td><code>boolean</code></td>
    <td>Enable calls forward on no-reply (wire: forwardNoReply)</td>
</tr>
<tr>
    <td><CopyableCode code="forward_no_reply_delay" /></td>
    <td><code>integer</code></td>
    <td>Delay before forward on no-reply (wire: forwardNoReplyDelay)</td>
</tr>
<tr>
    <td><CopyableCode code="forward_no_reply_nature" /></td>
    <td><code>string</code></td>
    <td>Nature of the forward on no-reply (fax, number, voicemail) (wire: forwardNoReplyNature)</td>
</tr>
<tr>
    <td><CopyableCode code="forward_no_reply_number" /></td>
    <td><code>string (phone-number)</code></td>
    <td>Destination of the forward on no-reply (wire: forwardNoReplyNumber)</td>
</tr>
<tr>
    <td><CopyableCode code="forward_unconditional" /></td>
    <td><code>boolean</code></td>
    <td>Enable unconditional calls forward (wire: forwardUnconditional)</td>
</tr>
<tr>
    <td><CopyableCode code="forward_unconditional_nature" /></td>
    <td><code>string</code></td>
    <td>Nature of the unconditional forward (fax, number, voicemail) (wire: forwardUnconditionalNature)</td>
</tr>
<tr>
    <td><CopyableCode code="forward_unconditional_number" /></td>
    <td><code>string (phone-number)</code></td>
    <td>Destination of the unconditional forward (wire: forwardUnconditionalNumber)</td>
</tr>
<tr>
    <td><CopyableCode code="identification_restriction" /></td>
    <td><code>boolean</code></td>
    <td>Do not display your number (wire: identificationRestriction)</td>
</tr>
<tr>
    <td><CopyableCode code="intercom" /></td>
    <td><code>string</code></td>
    <td>Intercom mode: takes automatically the call with the loudspeaker (no, prefixed, yes)</td>
</tr>
<tr>
    <td><CopyableCode code="ip_restrictions" /></td>
    <td><code>array</code></td>
    <td>The ip restrictions of your line (wire: ipRestrictions)</td>
</tr>
<tr>
    <td><CopyableCode code="language" /></td>
    <td><code>string</code></td>
    <td>Language of the line (Dutch, English (UK), French, French (BE), German, Italian, Spanish)</td>
</tr>
<tr>
    <td><CopyableCode code="lock_out_call" /></td>
    <td><code>boolean</code></td>
    <td>Disallow outgoing calls (wire: lockOutCall)</td>
</tr>
<tr>
    <td><CopyableCode code="lock_out_call_password" /></td>
    <td><code>string</code></td>
    <td>Disallow outgoing calls password (wire: lockOutCallPassword)</td>
</tr>
<tr>
    <td><CopyableCode code="proxy" /></td>
    <td><code>string</code></td>
    <td>The outbound proxy to configure in your SIP client.</td>
</tr>
<tr>
    <td><CopyableCode code="record_outgoing_calls_beta" /></td>
    <td><code>boolean</code></td>
    <td>Enable or disable record of outgoing calls (wire: recordOutgoingCallsBeta)</td>
</tr>
<tr>
    <td><CopyableCode code="voicemail_external_number" /></td>
    <td><code>string (phone-number)</code></td>
    <td>Voicemail number to dial from any other line (wire: voicemailExternalNumber)</td>
</tr>
<tr>
    <td><CopyableCode code="voicemail_internal_number" /></td>
    <td><code>string</code></td>
    <td>Voicemail short number to dial from the line (wire: voicemailInternalNumber)</td>
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
    <td>Get the line options</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Update the line options</td>
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
<tr id="parameter-billing_account">
    <td><CopyableCode code="billing_account" /></td>
    <td><code>string</code></td>
    <td>The name of your billingAccount (wire: billingAccount)</td>
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

Get the line options

```sql
SELECT
tone_on_call_waiting_sound_id,
tone_on_hold_sound_id,
tone_ringback_sound_id,
absent_subscriber,
anonymous_call_rejection,
call_restriction_incoming,
call_restriction_outgoing,
call_waiting,
codecs,
default_voicemail,
display_number,
do_not_disturb,
domain,
forward_backup,
forward_backup_nature,
forward_backup_number,
forward_busy,
forward_busy_nature,
forward_busy_number,
forward_no_reply,
forward_no_reply_delay,
forward_no_reply_nature,
forward_no_reply_number,
forward_unconditional,
forward_unconditional_nature,
forward_unconditional_number,
identification_restriction,
intercom,
ip_restrictions,
language,
lock_out_call,
lock_out_call_password,
proxy,
record_outgoing_calls_beta,
voicemail_external_number,
voicemail_internal_number
FROM ovh.telephony.line_options
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

Update the line options

```sql
UPDATE ovh.telephony.line_options
SET 
absent_subscriber = {{ absent_subscriber }},
anonymous_call_rejection = {{ anonymous_call_rejection }},
call_restriction_incoming = {{ call_restriction_incoming }},
call_restriction_outgoing = {{ call_restriction_outgoing }},
call_waiting = {{ call_waiting }},
codecs = '{{ codecs }}',
default_voicemail = '{{ default_voicemail }}',
display_number = '{{ display_number }}',
do_not_disturb = {{ do_not_disturb }},
domain = '{{ domain }}',
forward_backup = {{ forward_backup }},
forward_backup_nature = '{{ forward_backup_nature }}',
forward_backup_number = '{{ forward_backup_number }}',
forward_busy = {{ forward_busy }},
forward_busy_nature = '{{ forward_busy_nature }}',
forward_busy_number = '{{ forward_busy_number }}',
forward_no_reply = {{ forward_no_reply }},
forward_no_reply_delay = {{ forward_no_reply_delay }},
forward_no_reply_nature = '{{ forward_no_reply_nature }}',
forward_no_reply_number = '{{ forward_no_reply_number }}',
forward_unconditional = {{ forward_unconditional }},
forward_unconditional_nature = '{{ forward_unconditional_nature }}',
forward_unconditional_number = '{{ forward_unconditional_number }}',
identification_restriction = {{ identification_restriction }},
intercom = '{{ intercom }}',
ip_restrictions = '{{ ip_restrictions }}',
language = '{{ language }}',
lock_out_call = {{ lock_out_call }},
lock_out_call_password = '{{ lock_out_call_password }}',
record_outgoing_calls_beta = {{ record_outgoing_calls_beta }},
tone_on_call_waiting_sound_id = {{ tone_on_call_waiting_sound_id }},
tone_on_hold_sound_id = {{ tone_on_hold_sound_id }},
tone_ringback_sound_id = {{ tone_ringback_sound_id }}
WHERE 
billing_account = '{{ billing_account }}' --required
AND service_name = '{{ service_name }}' --required;
```
</TabItem>
</Tabs>
