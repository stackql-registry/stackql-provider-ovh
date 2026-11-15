--- 
title: local_seo_visibility_check_results
hide_title: false
hide_table_of_contents: false
keywords:
  - local_seo_visibility_check_results
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

Creates, updates, deletes, gets or lists a <code>local_seo_visibility_check_results</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="local_seo_visibility_check_results" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.hosting_web.local_seo_visibility_check_results" /></td></tr>
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

Struct describing a visibility check result

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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>The location's name used for this listing</td>
</tr>
<tr>
    <td><CopyableCode code="listing_id" /></td>
    <td><code>string</code></td>
    <td>The listing id in the directory database (wire: listingId)</td>
</tr>
<tr>
    <td><CopyableCode code="city" /></td>
    <td><code>string</code></td>
    <td>City of the location</td>
</tr>
<tr>
    <td><CopyableCode code="city_status" /></td>
    <td><code>string</code></td>
    <td>City of the location (sync status) (MATCH, MISMATCH, MISSING, NOT_APPLICABLE, PRESENT) (wire: cityStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="country" /></td>
    <td><code>string</code></td>
    <td>Country of the location</td>
</tr>
<tr>
    <td><CopyableCode code="country_status" /></td>
    <td><code>string</code></td>
    <td>Country of the location (sync status) (MATCH, MISMATCH, MISSING, NOT_APPLICABLE, PRESENT) (wire: countryStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="date_created" /></td>
    <td><code>string (date-time)</code></td>
    <td>The date and time the listing was created in database (wire: dateCreated)</td>
</tr>
<tr>
    <td><CopyableCode code="directory_type" /></td>
    <td><code>string</code></td>
    <td>The directory where this listing appears (wire: directoryType)</td>
</tr>
<tr>
    <td><CopyableCode code="email" /></td>
    <td><code>string</code></td>
    <td>A contact email for the location</td>
</tr>
<tr>
    <td><CopyableCode code="email_status" /></td>
    <td><code>string</code></td>
    <td>A contact email for the location (sync status) (MATCH, MISMATCH, MISSING, NOT_APPLICABLE, PRESENT) (wire: emailStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="flow_status" /></td>
    <td><code>string</code></td>
    <td>The status of the current listing (ALL_INFORMATION_SUBMITTED, DONT_REMOVE, INACTIVE, MANUALLY_DEACTIVATED, NEEDS_REVIEW, NOT_SUPPORTED, NO_ACTION_NEEDED, REMOVAL_NEEDED, REMOVAL_REVIEW_NEEDED, REMOVAL_SUBMITTED, REMOVED, SUBMISSION_NEEDED, WAITING_DIRECTORY_ACTION, WAITING_USER_ACTION) (wire: flowStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="listing_url" /></td>
    <td><code>string</code></td>
    <td>The listing url on the directory website (wire: listingUrl)</td>
</tr>
<tr>
    <td><CopyableCode code="name_status" /></td>
    <td><code>string</code></td>
    <td>The location's name used for this listing (sync status) (MATCH, MISMATCH, MISSING, NOT_APPLICABLE, PRESENT) (wire: nameStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="phone" /></td>
    <td><code>string</code></td>
    <td>The location's contact phone number</td>
</tr>
<tr>
    <td><CopyableCode code="phone_status" /></td>
    <td><code>string</code></td>
    <td>The location's contact phone number (sync status) (MATCH, MISMATCH, MISSING, NOT_APPLICABLE, PRESENT) (wire: phoneStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="province" /></td>
    <td><code>string</code></td>
    <td>Province of the location</td>
</tr>
<tr>
    <td><CopyableCode code="province_status" /></td>
    <td><code>string</code></td>
    <td>Province of the location (sync status) (MATCH, MISMATCH, MISSING, NOT_APPLICABLE, PRESENT) (wire: provinceStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="street" /></td>
    <td><code>string</code></td>
    <td>The location's street address</td>
</tr>
<tr>
    <td><CopyableCode code="street_and_no" /></td>
    <td><code>string</code></td>
    <td>A localized combination of street and streetNo (wire: streetAndNo)</td>
</tr>
<tr>
    <td><CopyableCode code="street_and_no_status" /></td>
    <td><code>string</code></td>
    <td>A localized combination of street and streetNo (sync status) (MATCH, MISMATCH, MISSING, NOT_APPLICABLE, PRESENT) (wire: streetAndNoStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="street_no" /></td>
    <td><code>string</code></td>
    <td>The location's street number (wire: streetNo)</td>
</tr>
<tr>
    <td><CopyableCode code="street_no_status" /></td>
    <td><code>string</code></td>
    <td>The location's street number (sync status) (MATCH, MISMATCH, MISSING, NOT_APPLICABLE, PRESENT) (wire: streetNoStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="street_status" /></td>
    <td><code>string</code></td>
    <td>The location's street address (sync status) (MATCH, MISMATCH, MISSING, NOT_APPLICABLE, PRESENT) (wire: streetStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="street_type" /></td>
    <td><code>string</code></td>
    <td>The street type for Spain (wire: streetType)</td>
</tr>
<tr>
    <td><CopyableCode code="street_type_status" /></td>
    <td><code>string</code></td>
    <td>The street type for Spain (sync status) (MATCH, MISMATCH, MISSING, NOT_APPLICABLE, PRESENT) (wire: streetTypeStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="sync_status" /></td>
    <td><code>string</code></td>
    <td>The sync status of the listing (IN_SYNC, NOT_FOUND, NOT_IN_SYNC, NOT_SUPPORTED, NO_ONLINE_LISTING, TECHNICAL_PROBLEMS) (wire: syncStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="website" /></td>
    <td><code>string</code></td>
    <td>A valid url for the location's website</td>
</tr>
<tr>
    <td><CopyableCode code="website_status" /></td>
    <td><code>string</code></td>
    <td>A valid url for the location's website (sync status) (MATCH, MISMATCH, MISSING, NOT_APPLICABLE, PRESENT) (wire: websiteStatus)</td>
</tr>
<tr>
    <td><CopyableCode code="zip" /></td>
    <td><code>string</code></td>
    <td>Zipcode of the location</td>
</tr>
<tr>
    <td><CopyableCode code="zip_status" /></td>
    <td><code>string</code></td>
    <td>Zipcode of the location (sync status) (MATCH, MISMATCH, MISSING, NOT_APPLICABLE, PRESENT) (wire: zipStatus)</td>
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
    <td><a href="#parameter-directory"><code>directory</code></a>, <a href="#parameter-id"><code>id</code></a>, <a href="#parameter-token"><code>token</code></a></td>
    <td></td>
    <td>Get visibility check results. Returns the listings found for the location in each directory, with the sync status of each field.</td>
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
<tr id="parameter-directory">
    <td><CopyableCode code="directory" /></td>
    <td><code>string</code></td>
    <td>Get the result only for one directory</td>
</tr>
<tr id="parameter-id">
    <td><CopyableCode code="id" /></td>
    <td><code>integer</code></td>
    <td>Id of the check</td>
</tr>
<tr id="parameter-token">
    <td><CopyableCode code="token" /></td>
    <td><code>string</code></td>
    <td>Token received when requesting the check</td>
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

Get visibility check results. Returns the listings found for the location in each directory, with the sync status of each field.

```sql
SELECT
name,
listing_id,
city,
city_status,
country,
country_status,
date_created,
directory_type,
email,
email_status,
flow_status,
listing_url,
name_status,
phone,
phone_status,
province,
province_status,
street,
street_and_no,
street_and_no_status,
street_no,
street_no_status,
street_status,
street_type,
street_type_status,
sync_status,
website,
website_status,
zip,
zip_status
FROM ovh.hosting_web.local_seo_visibility_check_results
WHERE directory = '{{ directory }}' -- required
AND id = '{{ id }}' -- required
AND token = '{{ token }}' -- required
;
```
</TabItem>
</Tabs>
