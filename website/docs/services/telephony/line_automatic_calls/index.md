--- 
title: line_automatic_calls
hide_title: false
hide_table_of_contents: false
keywords:
  - line_automatic_calls
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

Creates, updates, deletes, gets or lists a <code>line_automatic_calls</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="line_automatic_calls" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.telephony.line_automatic_calls" /></td></tr>
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
    <td><CopyableCode code="answer_datetime" /></td>
    <td><code>string (date-time)</code></td>
    <td>answer date (wire: answerDatetime)</td>
</tr>
<tr>
    <td><CopyableCode code="application" /></td>
    <td><code>string</code></td>
    <td>Application and dialplan running for call</td>
</tr>
<tr>
    <td><CopyableCode code="application_result" /></td>
    <td><code>string</code></td>
    <td>end status of application (wire: applicationResult)</td>
</tr>
<tr>
    <td><CopyableCode code="billing_number" /></td>
    <td><code>string (phone-number)</code></td>
    <td>billingNumber (service used) (wire: billingNumber)</td>
</tr>
<tr>
    <td><CopyableCode code="call_created_datetime" /></td>
    <td><code>string (date-time)</code></td>
    <td>creation date of the call (wire: callCreatedDatetime)</td>
</tr>
<tr>
    <td><CopyableCode code="call_duration" /></td>
    <td><code>integer</code></td>
    <td>call duration on seconds (wire: callDuration)</td>
</tr>
<tr>
    <td><CopyableCode code="callee" /></td>
    <td><code>string (phone-number)</code></td>
    <td>number called</td>
</tr>
<tr>
    <td><CopyableCode code="caller" /></td>
    <td><code>string (phone-number)</code></td>
    <td>number where the call come from</td>
</tr>
<tr>
    <td><CopyableCode code="dtmf" /></td>
    <td><code>string</code></td>
    <td>DTMF received during the call separate by commas</td>
</tr>
<tr>
    <td><CopyableCode code="hangup_cause" /></td>
    <td><code>string</code></td>
    <td>hangup cause (AccessInformationDiscarded, AllottedTimeout, AttendedTransfer, BlindTransfer, CallAwardedbeing, ChannelTypeNotImplemented, ChannelUnacceptable, CodeSip403BearerCapabilityNotAuthorized, CodeSip403IncomingCallsBarred, CodeSip403OutgoingCallsBarred, CodeSip404NoRouteToDestination, CodeSip404NoRouteToSpecifiedTransitNetwork, CodeSip404UnallocatedNumber, CodeSip408NoUserResponding, CodeSip410NumberChanged, CodeSip410RedirectionToNewDestination, CodeSip480NoAnswerFromUser, CodeSip480NormalUnspecified, CodeSip480SubscriberAbsent, CodeSip483ExchangeRoutingError, CodeSip484InvalidNumberFormatAddressIncomplete, CodeSip486UserBusy, CodeSip487OriginatorCancel, CodeSip488IncompatibleDestination, CodeSip488bearerCapabilityNotImplemented, CodeSip501FacilitiesRejected, CodeSip501RequestedFacilityNotImplemented, CodeSip501ServiceOrOptionNotImplementedUnspecified, CodeSip502DestinationOutOfOrder, CodeSip503BearerCapabilityNotPresentlyAvailable, CodeSip503NetworkOutOfOrder, CodeSip503NoCircuitChannelAvailable, CodeSip503RequestedCircuitOrChannelNotAvailable, CodeSip503SwitchingEquipmentCongestion, CodeSip503TemporaryFailure, CodeSip504RecoveryOnTimerExpiry, CodeSip603CallRejected, Crash, GatewayDown, InformationElementOrParameterNonExistentOrNotImplemented, InterworkingUnspecified, InvalidCallReferenceValue, InvalidInformationElementContents, InvalidMessageUnspecified, LoseRace, ManagerRequest, MandatoryInformationElementIsMissing, MediaTimeout, MessageNotCompatibleWithCallState, MessageNotCompatibleWithCallStateOrMessageTypeNonExistentOrNotImplemented, MessageTypeNonExistentOrNotImplemented, NormalCallClearing, ParameterNonExistentOrNotImplementedPassedOnNationalUse, PickedOff, PreEmpted, ProgressTimeout, ProtocolErrorUnspecified, RequestedFacilityNotSubscribed, ResponseToStatusInquiry, ServiceOrOptionNotAvailableUnspecified, SystemShutdown, UnknownOrCallUnfinished, UnspecifiedNoOtherCauseCodesApplicable, UserChallenge, UserNotRegistered) (wire: hangupCause)</td>
</tr>
<tr>
    <td><CopyableCode code="hangup_datetime" /></td>
    <td><code>string (date-time)</code></td>
    <td>hangup date (wire: hangupDatetime)</td>
</tr>
<tr>
    <td><CopyableCode code="identifier" /></td>
    <td><code>string</code></td>
    <td>Generated call identifier</td>
</tr>
<tr>
    <td><CopyableCode code="transfer_from" /></td>
    <td><code>string</code></td>
    <td>original call uuid if it's a transfer (wire: transferFrom)</td>
</tr>
<tr>
    <td><CopyableCode code="uuid" /></td>
    <td><code>string</code></td>
    <td>unique call id</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Automatic Call made by Call Generator on this line

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
    <td><CopyableCode code="answer_datetime" /></td>
    <td><code>string (date-time)</code></td>
    <td>answer date (wire: answerDatetime)</td>
</tr>
<tr>
    <td><CopyableCode code="application" /></td>
    <td><code>string</code></td>
    <td>Application and dialplan running for call</td>
</tr>
<tr>
    <td><CopyableCode code="application_result" /></td>
    <td><code>string</code></td>
    <td>end status of application (wire: applicationResult)</td>
</tr>
<tr>
    <td><CopyableCode code="billing_number" /></td>
    <td><code>string (phone-number)</code></td>
    <td>billingNumber (service used) (wire: billingNumber)</td>
</tr>
<tr>
    <td><CopyableCode code="call_created_datetime" /></td>
    <td><code>string (date-time)</code></td>
    <td>creation date of the call (wire: callCreatedDatetime)</td>
</tr>
<tr>
    <td><CopyableCode code="call_duration" /></td>
    <td><code>integer</code></td>
    <td>call duration on seconds (wire: callDuration)</td>
</tr>
<tr>
    <td><CopyableCode code="callee" /></td>
    <td><code>string (phone-number)</code></td>
    <td>number called</td>
</tr>
<tr>
    <td><CopyableCode code="caller" /></td>
    <td><code>string (phone-number)</code></td>
    <td>number where the call come from</td>
</tr>
<tr>
    <td><CopyableCode code="dtmf" /></td>
    <td><code>string</code></td>
    <td>DTMF received during the call separate by commas</td>
</tr>
<tr>
    <td><CopyableCode code="hangup_cause" /></td>
    <td><code>string</code></td>
    <td>hangup cause (AccessInformationDiscarded, AllottedTimeout, AttendedTransfer, BlindTransfer, CallAwardedbeing, ChannelTypeNotImplemented, ChannelUnacceptable, CodeSip403BearerCapabilityNotAuthorized, CodeSip403IncomingCallsBarred, CodeSip403OutgoingCallsBarred, CodeSip404NoRouteToDestination, CodeSip404NoRouteToSpecifiedTransitNetwork, CodeSip404UnallocatedNumber, CodeSip408NoUserResponding, CodeSip410NumberChanged, CodeSip410RedirectionToNewDestination, CodeSip480NoAnswerFromUser, CodeSip480NormalUnspecified, CodeSip480SubscriberAbsent, CodeSip483ExchangeRoutingError, CodeSip484InvalidNumberFormatAddressIncomplete, CodeSip486UserBusy, CodeSip487OriginatorCancel, CodeSip488IncompatibleDestination, CodeSip488bearerCapabilityNotImplemented, CodeSip501FacilitiesRejected, CodeSip501RequestedFacilityNotImplemented, CodeSip501ServiceOrOptionNotImplementedUnspecified, CodeSip502DestinationOutOfOrder, CodeSip503BearerCapabilityNotPresentlyAvailable, CodeSip503NetworkOutOfOrder, CodeSip503NoCircuitChannelAvailable, CodeSip503RequestedCircuitOrChannelNotAvailable, CodeSip503SwitchingEquipmentCongestion, CodeSip503TemporaryFailure, CodeSip504RecoveryOnTimerExpiry, CodeSip603CallRejected, Crash, GatewayDown, InformationElementOrParameterNonExistentOrNotImplemented, InterworkingUnspecified, InvalidCallReferenceValue, InvalidInformationElementContents, InvalidMessageUnspecified, LoseRace, ManagerRequest, MandatoryInformationElementIsMissing, MediaTimeout, MessageNotCompatibleWithCallState, MessageNotCompatibleWithCallStateOrMessageTypeNonExistentOrNotImplemented, MessageTypeNonExistentOrNotImplemented, NormalCallClearing, ParameterNonExistentOrNotImplementedPassedOnNationalUse, PickedOff, PreEmpted, ProgressTimeout, ProtocolErrorUnspecified, RequestedFacilityNotSubscribed, ResponseToStatusInquiry, ServiceOrOptionNotAvailableUnspecified, SystemShutdown, UnknownOrCallUnfinished, UnspecifiedNoOtherCauseCodesApplicable, UserChallenge, UserNotRegistered) (wire: hangupCause)</td>
</tr>
<tr>
    <td><CopyableCode code="hangup_datetime" /></td>
    <td><code>string (date-time)</code></td>
    <td>hangup date (wire: hangupDatetime)</td>
</tr>
<tr>
    <td><CopyableCode code="identifier" /></td>
    <td><code>string</code></td>
    <td>Generated call identifier</td>
</tr>
<tr>
    <td><CopyableCode code="transfer_from" /></td>
    <td><code>string</code></td>
    <td>original call uuid if it's a transfer (wire: transferFrom)</td>
</tr>
<tr>
    <td><CopyableCode code="uuid" /></td>
    <td><code>string</code></td>
    <td>unique call id</td>
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
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-identifier"><code>identifier</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Get an automatic call</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-service_name"><code>service_name</code></a></td>
    <td><a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List automatic calls</td>
</tr>
<tr>
    <td><a href="#create"><CopyableCode code="create" /></a></td>
    <td><CopyableCode code="insert" /></td>
    <td><a href="#parameter-billing_account"><code>billing_account</code></a>, <a href="#parameter-service_name"><code>service_name</code></a>, <a href="#parameter-called_number"><code>called_number</code></a>, <a href="#parameter-dialplan"><code>dialplan</code></a>, <a href="#parameter-is_anonymous"><code>is_anonymous</code></a></td>
    <td></td>
    <td>Make an automatic call</td>
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
<tr id="parameter-identifier">
    <td><CopyableCode code="identifier" /></td>
    <td><code>string</code></td>
    <td>Generated call identifier</td>
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

Get an automatic call

```sql
SELECT
answer_datetime,
application,
application_result,
billing_number,
call_created_datetime,
call_duration,
callee,
caller,
dtmf,
hangup_cause,
hangup_datetime,
identifier,
transfer_from,
uuid
FROM ovh.telephony.line_automatic_calls
WHERE billing_account = '{{ billing_account }}' -- required
AND identifier = '{{ identifier }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List automatic calls

```sql
SELECT
answer_datetime,
application,
application_result,
billing_number,
call_created_datetime,
call_duration,
callee,
caller,
dtmf,
hangup_cause,
hangup_datetime,
identifier,
transfer_from,
uuid
FROM ovh.telephony.line_automatic_calls
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

Make an automatic call

```sql
INSERT INTO ovh.telephony.line_automatic_calls (
bridge_number_dialplan,
called_number,
calling_number,
dialplan,
is_anonymous,
playback_audio_file_dialplan,
timeout,
tts_text_dialplan,
billing_account,
service_name
)
SELECT 
'{{ bridge_number_dialplan }}',
'{{ called_number }}' /* required */,
'{{ calling_number }}',
'{{ dialplan }}' /* required */,
{{ is_anonymous }} /* required */,
'{{ playback_audio_file_dialplan }}',
{{ timeout }},
'{{ tts_text_dialplan }}',
'{{ billing_account }}',
'{{ service_name }}'
;
```
</TabItem>
<TabItem value="manifest">

<CodeBlock language="yaml">{`# Description fields are for documentation purposes
- name: line_automatic_calls
  props:
    - name: billing_account
      value: "{{ billing_account }}"
      description: Required parameter for the line_automatic_calls resource.
    - name: service_name
      value: "{{ service_name }}"
      description: Required parameter for the line_automatic_calls resource.
    - name: bridge_number_dialplan
      value: "{{ bridge_number_dialplan }}"
      description: |
        Phone number
    - name: called_number
      value: "{{ called_number }}"
      description: |
        Phone number
    - name: calling_number
      value: "{{ calling_number }}"
      description: |
        Phone number
    - name: dialplan
      value: "{{ dialplan }}"
      description: |
        Dialplan used for the call
      valid_values: ['ReadText', 'RequestAppointmentConfirmation', 'RequestAppointmentConfirmationWithTransfer']
    - name: is_anonymous
      value: {{ is_anonymous }}
      description: |
        For anonymous call
    - name: playback_audio_file_dialplan
      value: "{{ playback_audio_file_dialplan }}"
      description: |
        Name of the audioFile (if needed) with extention. This audio file must have been upload previously
    - name: timeout
      value: {{ timeout }}
      description: |
        Timeout (in seconds). Default is 20 seconds
    - name: tts_text_dialplan
      value: "{{ tts_text_dialplan }}"
      description: |
        Text to read if TTS on dialplan selected
`}</CodeBlock>

</TabItem>
</Tabs>
