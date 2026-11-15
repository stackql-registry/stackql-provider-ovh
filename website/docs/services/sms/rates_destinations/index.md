--- 
title: rates_destinations
hide_title: false
hide_table_of_contents: false
keywords:
  - rates_destinations
  - sms
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

Creates, updates, deletes, gets or lists a <code>rates_destinations</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="rates_destinations" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.sms.rates_destinations" /></td></tr>
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
    <td><CopyableCode code="country" /></td>
    <td><code>string</code></td>
    <td>The country full name</td>
</tr>
<tr>
    <td><CopyableCode code="country_code" /></td>
    <td><code>string</code></td>
    <td>The country 2-letters code (ad, ae, af, ag, ai, al, all, am, an, ao, ar, at, au, aw, az, ba, bb, bd, be, bf, bg, bh, bi, bj, bm, bn, bo, br, bs, bt, bw, by, bz, ca, cd, cf, cg, ch, ci, ck, cl, cm, cn, co, cr, cu, cv, cy, cz, de, dk, dm, dz, ec, ee, eg, es, et, fi, fj, fk, fo, fr, ga, gb, gd, ge, gf, gh, gi, gl, gm, gn, gp, gq, gr, gt, gu, gw, gy, hk, hn, hr, ht, hu, id, ie, il, in, io, iq, ir, is, it, jm, jo, jp, ke, kg, kh, km, kn, kr, kw, ky, kz, la, lb, lc, li, lk, lr, ls, lt, lu, lv, ly, ma, md, me, mg, mk, ml, mn, mo, mq, mr, ms, mt, mu, mv, mw, mx, my, mz, na, nc, ne, ng, ni, nl, no, np, nz, om, pa, pe, pf, pg, ph, pk, pl, ps, pt, py, qa, re, ro, rs, ru, rw, sa, sb, sc, sd, se, sg, si, sk, sl, sm, sn, so, sr, st, sv, sy, sz, tc, td, tg, th, tj, tl, tm, tn, to, tr, tt, tw, tz, ua, ug, us, uy, uz, vc, ve, vg, vi, vn, vu, ws, ye, yt, za, zm, zw) (wire: countryCode)</td>
</tr>
<tr>
    <td><CopyableCode code="credit" /></td>
    <td><code>number</code></td>
    <td>Credits consumed by sending one SMS towards the given destination</td>
</tr>
<tr>
    <td><CopyableCode code="price" /></td>
    <td><code>object</code></td>
    <td>Price of one SMS sent towards the given destination</td>
</tr>
<tr>
    <td><CopyableCode code="vat_rate" /></td>
    <td><code>number</code></td>
    <td>The VAT rate applied from the provided billing country. (wire: vatRate)</td>
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
    <td><a href="#parameter-country"><code>country</code></a></td>
    <td><a href="#parameter-billing_country"><code>billing_country</code></a></td>
    <td>Get rates for a country. Returns the credits consumed and the price of one SMS sent to a country, for credits bought in the billing country, with the VAT rate.</td>
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
<tr id="parameter-country">
    <td><CopyableCode code="country" /></td>
    <td><code>string</code></td>
    <td>Country where you send SMS</td>
</tr>
<tr id="parameter-billing_country">
    <td><CopyableCode code="billing_country" /></td>
    <td><code>string</code></td>
    <td>Country where you buy credits (wire: billingCountry)</td>
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

Get rates for a country. Returns the credits consumed and the price of one SMS sent to a country, for credits bought in the billing country, with the VAT rate.

```sql
SELECT
country,
country_code,
credit,
price,
vat_rate
FROM ovh.sms.rates_destinations
WHERE country = '{{ country }}' -- required
AND billing_country = '{{ billing_country }}'
;
```
</TabItem>
</Tabs>
