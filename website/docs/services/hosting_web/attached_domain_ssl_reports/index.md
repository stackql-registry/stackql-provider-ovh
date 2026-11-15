--- 
title: attached_domain_ssl_reports
hide_title: false
hide_table_of_contents: false
keywords:
  - attached_domain_ssl_reports
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

Creates, updates, deletes, gets or lists an <code>attached_domain_ssl_reports</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="attached_domain_ssl_reports" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.hosting_web.attached_domain_ssl_reports" /></td></tr>
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
    <td><CopyableCode code="provider_order_id" /></td>
    <td><code>string</code></td>
    <td>The order ID from given hostedssl provider (wire: providerOrderId)</td>
</tr>
<tr>
    <td><CopyableCode code="certificate_signing_request_status" /></td>
    <td><code>string</code></td>
    <td>"Certificate signing request" test status done by certification authority (completed, in-progress, non-completed, non-required, not-applicable, not-provided) (wire: certificateSigningRequestStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="domain_control_validation_status" /></td>
    <td><code>string</code></td>
    <td>"Domain control validation" test status done by certification authority (completed, in-progress, non-completed, non-required, not-applicable, not-provided) (wire: domainControlValidationStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="organization_validation_status" /></td>
    <td><code>string</code></td>
    <td>Applicant's legal status obtained or verified directly with registration agency (completed, in-progress, non-completed, non-required, not-applicable, not-provided) (wire: organizationValidationStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="phone_call_approval_status" /></td>
    <td><code>string</code></td>
    <td>Approval verified through a phone call to the contract signer (completed, in-progress, non-completed, non-required, not-applicable, not-provided) (wire: phoneCallApprovalStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="terms_and_conditions_acceptance_status" /></td>
    <td><code>string</code></td>
    <td>Terms and conditions agreements acceptance (completed, in-progress, non-completed, non-required, not-applicable, not-provided) (wire: termsAndConditionsAcceptanceStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="trade_name_verification_status" /></td>
    <td><code>string</code></td>
    <td>Trade name verified directly with registration agency or through a verified third party (completed, in-progress, non-completed, non-required, not-applicable, not-provided) (wire: tradeNameVerificationStatus)</td>
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
    <td>Returns the status of each validation check run by the certification authority for the certificate of the attached domain.</td>
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
    <td>Domain</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>Service name (wire: serviceName)</td>
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

Returns the status of each validation check run by the certification authority for the certificate of the attached domain.

```sql
SELECT
provider_order_id,
certificate_signing_request_status,
domain_control_validation_status,
organization_validation_status,
phone_call_approval_status,
terms_and_conditions_acceptance_status,
trade_name_verification_status
FROM ovh.hosting_web.attached_domain_ssl_reports
WHERE domain = '{{ domain }}' -- required
AND service_name = '{{ service_name }}' -- required
;
```
</TabItem>
</Tabs>
