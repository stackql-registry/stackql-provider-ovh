--- 
title: locations
hide_title: false
hide_table_of_contents: false
keywords:
  - locations
  - location
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

Creates, updates, deletes, gets or lists a <code>locations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="locations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.location.locations" /></td></tr>
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
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name of the region</td>
</tr>
<tr>
    <td><CopyableCode code="city_name" /></td>
    <td><code>string</code></td>
    <td>Full name of the city (wire: cityName)</td>
</tr>
<tr>
    <td><CopyableCode code="country_name" /></td>
    <td><code>string</code></td>
    <td>Full name of the country (wire: countryName)</td>
</tr>
<tr>
    <td><CopyableCode code="geography_name" /></td>
    <td><code>string</code></td>
    <td>Name of the geographical area (wire: geographyName)</td>
</tr>
<tr>
    <td><CopyableCode code="availability_zone_datacenters" /></td>
    <td><code>object</code></td>
    <td>List of datacenters by availability zone (wire: availabilityZoneDatacenters)</td>
</tr>
<tr>
    <td><CopyableCode code="availability_zones" /></td>
    <td><code>array</code></td>
    <td>List of availability zones for the region (wire: availabilityZones)</td>
</tr>
<tr>
    <td><CopyableCode code="cardinal_point" /></td>
    <td><code>string</code></td>
    <td>Localized cardinal direction where the region is located. The value depends on the language query parameter. (wire: cardinalPoint)</td>
</tr>
<tr>
    <td><CopyableCode code="city_code" /></td>
    <td><code>string</code></td>
    <td>ISO code of the city (wire: cityCode)</td>
</tr>
<tr>
    <td><CopyableCode code="city_latitude" /></td>
    <td><code>number</code></td>
    <td>Geographical latitude of the city (wire: cityLatitude)</td>
</tr>
<tr>
    <td><CopyableCode code="city_longitude" /></td>
    <td><code>number</code></td>
    <td>Geographical longitude of the city (wire: cityLongitude)</td>
</tr>
<tr>
    <td><CopyableCode code="code" /></td>
    <td><code>string</code></td>
    <td>Region's short code</td>
</tr>
<tr>
    <td><CopyableCode code="country_code" /></td>
    <td><code>string</code></td>
    <td>ISO code of the country (wire: countryCode)</td>
</tr>
<tr>
    <td><CopyableCode code="geography_code" /></td>
    <td><code>string</code></td>
    <td>Short code representing the geographical area (wire: geographyCode)</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>string</code></td>
    <td>Location of the region</td>
</tr>
<tr>
    <td><CopyableCode code="opening_year" /></td>
    <td><code>integer</code></td>
    <td>Year the region was opened (wire: openingYear)</td>
</tr>
<tr>
    <td><CopyableCode code="services" /></td>
    <td><code>array</code></td>
    <td>List of services available in the region</td>
</tr>
<tr>
    <td><CopyableCode code="specific_type" /></td>
    <td><code>string</code></td>
    <td>Specific typology of the region (BACKUP, LZ, SNC, STANDARD) (wire: specificType)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Operational status of the region (NON_OPERATIONAL, OPERATIONAL)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>General typology of the region (LOCAL-ZONE, REGION-1-AZ, REGION-3-AZ)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Region and its availability zones

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
    <td>Name of the region</td>
</tr>
<tr>
    <td><CopyableCode code="city_name" /></td>
    <td><code>string</code></td>
    <td>Full name of the city (wire: cityName)</td>
</tr>
<tr>
    <td><CopyableCode code="country_name" /></td>
    <td><code>string</code></td>
    <td>Full name of the country (wire: countryName)</td>
</tr>
<tr>
    <td><CopyableCode code="geography_name" /></td>
    <td><code>string</code></td>
    <td>Name of the geographical area (wire: geographyName)</td>
</tr>
<tr>
    <td><CopyableCode code="availability_zone_datacenters" /></td>
    <td><code>object</code></td>
    <td>List of datacenters by availability zone (wire: availabilityZoneDatacenters)</td>
</tr>
<tr>
    <td><CopyableCode code="availability_zones" /></td>
    <td><code>array</code></td>
    <td>List of availability zones for the region (wire: availabilityZones)</td>
</tr>
<tr>
    <td><CopyableCode code="cardinal_point" /></td>
    <td><code>string</code></td>
    <td>Localized cardinal direction where the region is located. The value depends on the language query parameter. (wire: cardinalPoint)</td>
</tr>
<tr>
    <td><CopyableCode code="city_code" /></td>
    <td><code>string</code></td>
    <td>ISO code of the city (wire: cityCode)</td>
</tr>
<tr>
    <td><CopyableCode code="city_latitude" /></td>
    <td><code>number</code></td>
    <td>Geographical latitude of the city (wire: cityLatitude)</td>
</tr>
<tr>
    <td><CopyableCode code="city_longitude" /></td>
    <td><code>number</code></td>
    <td>Geographical longitude of the city (wire: cityLongitude)</td>
</tr>
<tr>
    <td><CopyableCode code="code" /></td>
    <td><code>string</code></td>
    <td>Region's short code</td>
</tr>
<tr>
    <td><CopyableCode code="country_code" /></td>
    <td><code>string</code></td>
    <td>ISO code of the country (wire: countryCode)</td>
</tr>
<tr>
    <td><CopyableCode code="geography_code" /></td>
    <td><code>string</code></td>
    <td>Short code representing the geographical area (wire: geographyCode)</td>
</tr>
<tr>
    <td><CopyableCode code="location" /></td>
    <td><code>string</code></td>
    <td>Location of the region</td>
</tr>
<tr>
    <td><CopyableCode code="opening_year" /></td>
    <td><code>integer</code></td>
    <td>Year the region was opened (wire: openingYear)</td>
</tr>
<tr>
    <td><CopyableCode code="services" /></td>
    <td><code>array</code></td>
    <td>List of services available in the region</td>
</tr>
<tr>
    <td><CopyableCode code="specific_type" /></td>
    <td><code>string</code></td>
    <td>Specific typology of the region (BACKUP, LZ, SNC, STANDARD) (wire: specificType)</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Operational status of the region (NON_OPERATIONAL, OPERATIONAL)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>General typology of the region (LOCAL-ZONE, REGION-1-AZ, REGION-3-AZ)</td>
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
    <td><a href="#parameter-name"><code>name</code></a></td>
    <td></td>
    <td>Get available region and its availability zones</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-x_pagination_cursor"><code>x_pagination_cursor</code></a>, <a href="#parameter-x_pagination_size"><code>x_pagination_size</code></a>, <a href="#parameter-availability_zone"><code>availability_zone</code></a>, <a href="#parameter-city_code"><code>city_code</code></a>, <a href="#parameter-city_name"><code>city_name</code></a>, <a href="#parameter-code"><code>code</code></a>, <a href="#parameter-country_code"><code>country_code</code></a>, <a href="#parameter-country_name"><code>country_name</code></a>, <a href="#parameter-datacenter"><code>datacenter</code></a>, <a href="#parameter-geography_code"><code>geography_code</code></a>, <a href="#parameter-geography_name"><code>geography_name</code></a>, <a href="#parameter-ids"><code>ids</code></a>, <a href="#parameter-language"><code>language</code></a>, <a href="#parameter-location"><code>location</code></a>, <a href="#parameter-name"><code>name</code></a>, <a href="#parameter-services"><code>services</code></a>, <a href="#parameter-specific_type"><code>specific_type</code></a>, <a href="#parameter-status"><code>status</code></a>, <a href="#parameter-type"><code>type</code></a>, <a href="#parameter-with_non_operational"><code>with_non_operational</code></a></td>
    <td>List available regions and their availability zones</td>
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
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Name</td>
</tr>
<tr id="parameter-availability_zone">
    <td><CopyableCode code="availability_zone" /></td>
    <td><code>string</code></td>
    <td>Filter by availability zone. Returns locations having this availability zone. (wire: availabilityZone)</td>
</tr>
<tr id="parameter-city_code">
    <td><CopyableCode code="city_code" /></td>
    <td><code>string</code></td>
    <td>Filter by city ISO code (wire: cityCode)</td>
</tr>
<tr id="parameter-city_name">
    <td><CopyableCode code="city_name" /></td>
    <td><code>string</code></td>
    <td>Filter by city name (wire: cityName)</td>
</tr>
<tr id="parameter-code">
    <td><CopyableCode code="code" /></td>
    <td><code>string</code></td>
    <td>Filter by region code</td>
</tr>
<tr id="parameter-country_code">
    <td><CopyableCode code="country_code" /></td>
    <td><code>string</code></td>
    <td>Filter by country ISO code (wire: countryCode)</td>
</tr>
<tr id="parameter-country_name">
    <td><CopyableCode code="country_name" /></td>
    <td><code>string</code></td>
    <td>Filter by country name (wire: countryName)</td>
</tr>
<tr id="parameter-datacenter">
    <td><CopyableCode code="datacenter" /></td>
    <td><code>string</code></td>
    <td>Filter by datacenter</td>
</tr>
<tr id="parameter-geography_code">
    <td><CopyableCode code="geography_code" /></td>
    <td><code>string</code></td>
    <td>Filter by geography code (wire: geographyCode)</td>
</tr>
<tr id="parameter-geography_name">
    <td><CopyableCode code="geography_name" /></td>
    <td><code>string</code></td>
    <td>Filter by geography name (wire: geographyName)</td>
</tr>
<tr id="parameter-ids">
    <td><CopyableCode code="ids" /></td>
    <td><code>array</code></td>
    <td>Filter by region IDs</td>
</tr>
<tr id="parameter-language">
    <td><CopyableCode code="language" /></td>
    <td><code>string</code></td>
    <td>Locale name for translation</td>
</tr>
<tr id="parameter-location">
    <td><CopyableCode code="location" /></td>
    <td><code>string</code></td>
    <td>Filter by region location</td>
</tr>
<tr id="parameter-name">
    <td><CopyableCode code="name" /></td>
    <td><code>string</code></td>
    <td>Filter by region name</td>
</tr>
<tr id="parameter-services">
    <td><CopyableCode code="services" /></td>
    <td><code>string</code></td>
    <td>Filter by services. Returns locations having at least one of the services in the list.</td>
</tr>
<tr id="parameter-specific_type">
    <td><CopyableCode code="specific_type" /></td>
    <td><code>string</code></td>
    <td>Filter by specific region type (wire: specificType)</td>
</tr>
<tr id="parameter-status">
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>Filter by status</td>
</tr>
<tr id="parameter-type">
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Filter by general region type</td>
</tr>
<tr id="parameter-with_non_operational">
    <td><CopyableCode code="with_non_operational" /></td>
    <td><code>boolean</code></td>
    <td>also return NON_OPERATIONAL regions that are planned (wire: withNonOperational)</td>
</tr>
<tr id="parameter-x_pagination_cursor">
    <td><CopyableCode code="x_pagination_cursor" /></td>
    <td><code>string</code></td>
    <td>Pagination cursor (wire: X-Pagination-Cursor)</td>
</tr>
<tr id="parameter-x_pagination_size">
    <td><CopyableCode code="x_pagination_size" /></td>
    <td><code>integer</code></td>
    <td>Pagination size (wire: X-Pagination-Size)</td>
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

Get available region and its availability zones

```sql
SELECT
name,
city_name,
country_name,
geography_name,
availability_zone_datacenters,
availability_zones,
cardinal_point,
city_code,
city_latitude,
city_longitude,
code,
country_code,
geography_code,
location,
opening_year,
services,
specific_type,
status,
type
FROM ovh.location.locations
WHERE name = '{{ name }}' -- required
;
```
</TabItem>
<TabItem value="list">

List available regions and their availability zones

```sql
SELECT
name,
city_name,
country_name,
geography_name,
availability_zone_datacenters,
availability_zones,
cardinal_point,
city_code,
city_latitude,
city_longitude,
code,
country_code,
geography_code,
location,
opening_year,
services,
specific_type,
status,
type
FROM ovh.location.locations
WHERE x_pagination_cursor = '{{ x_pagination_cursor }}'
AND x_pagination_size = '{{ x_pagination_size }}'
AND availability_zone = '{{ availability_zone }}'
AND city_code = '{{ city_code }}'
AND city_name = '{{ city_name }}'
AND code = '{{ code }}'
AND country_code = '{{ country_code }}'
AND country_name = '{{ country_name }}'
AND datacenter = '{{ datacenter }}'
AND geography_code = '{{ geography_code }}'
AND geography_name = '{{ geography_name }}'
AND ids = '{{ ids }}'
AND language = '{{ language }}'
AND location = '{{ location }}'
AND name = '{{ name }}'
AND services = '{{ services }}'
AND specific_type = '{{ specific_type }}'
AND status = '{{ status }}'
AND type = '{{ type }}'
AND with_non_operational = '{{ with_non_operational }}'
;
```
</TabItem>
</Tabs>
