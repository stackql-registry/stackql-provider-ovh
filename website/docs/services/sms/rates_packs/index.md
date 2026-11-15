--- 
title: rates_packs
hide_title: false
hide_table_of_contents: false
keywords:
  - rates_packs
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

Creates, updates, deletes, gets or lists a <code>rates_packs</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="rates_packs" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.sms.rates_packs" /></td></tr>
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

Details about a SMS pack

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
    <td><CopyableCode code="country_code" /></td>
    <td><code>string</code></td>
    <td>Destination country code (ad, ae, af, ag, ai, al, all, am, an, ao, ar, at, au, aw, az, ba, bb, bd, be, bf, bg, bh, bi, bj, bm, bn, bo, br, bs, bt, bw, by, bz, ca, cd, cf, cg, ch, ci, ck, cl, cm, cn, co, cr, cu, cv, cy, cz, de, dk, dm, dz, ec, ee, eg, es, et, fi, fj, fk, fo, fr, ga, gb, gd, ge, gf, gh, gi, gl, gm, gn, gp, gq, gr, gt, gu, gw, gy, hk, hn, hr, ht, hu, id, ie, il, in, io, iq, ir, is, it, jm, jo, jp, ke, kg, kh, km, kn, kr, kw, ky, kz, la, lb, lc, li, lk, lr, ls, lt, lu, lv, ly, ma, md, me, mg, mk, ml, mn, mo, mq, mr, ms, mt, mu, mv, mw, mx, my, mz, na, nc, ne, ng, ni, nl, no, np, nz, om, pa, pe, pf, pg, ph, pk, pl, ps, pt, py, qa, re, ro, rs, ru, rw, sa, sb, sc, sd, se, sg, si, sk, sl, sm, sn, so, sr, st, sv, sy, sz, tc, td, tg, th, tj, tl, tm, tn, to, tr, tt, tw, tz, ua, ug, us, uy, uz, vc, ve, vg, vi, vn, vu, ws, ye, yt, za, zm, zw) (wire: countryCode)</td>
</tr>
<tr>
    <td><CopyableCode code="credit" /></td>
    <td><code>number</code></td>
    <td>Credits consumed by sending one SMS towards the given destination</td>
</tr>
<tr>
    <td><CopyableCode code="credit_price" /></td>
    <td><code>object</code></td>
    <td>Price of one credit, including pack's promotion (wire: creditPrice)</td>
</tr>
<tr>
    <td><CopyableCode code="credit_quantity_max" /></td>
    <td><code>integer</code></td>
    <td>Maximum quantity (excluded) of credit to order to have this price (wire: creditQuantityMax)</td>
</tr>
<tr>
    <td><CopyableCode code="credit_quantity_min" /></td>
    <td><code>integer</code></td>
    <td>Minimum quantity (included) of credit to order to have this price (wire: creditQuantityMin)</td>
</tr>
<tr>
    <td><CopyableCode code="discount_credit_price" /></td>
    <td><code>object</code></td>
    <td>Price of one credit, during a promotional event (wire: discountCreditPrice)</td>
</tr>
<tr>
    <td><CopyableCode code="discount_percentage" /></td>
    <td><code>integer</code></td>
    <td>Percentage applied as part of a promotional event (wire: discountPercentage)</td>
</tr>
<tr>
    <td><CopyableCode code="discount_sms_price" /></td>
    <td><code>object</code></td>
    <td>Price of one SMS, during a promotional event (wire: discountSmsPrice)</td>
</tr>
<tr>
    <td><CopyableCode code="sms_price" /></td>
    <td><code>object</code></td>
    <td>Price of one SMS sent towards the given destination, including pack's promotion (wire: smsPrice)</td>
</tr>
<tr>
    <td><CopyableCode code="sms_quantity_max" /></td>
    <td><code>integer</code></td>
    <td>Maximum quantity (excluded) of SMS you can obtain with this pack (wire: smsQuantityMax)</td>
</tr>
<tr>
    <td><CopyableCode code="sms_quantity_min" /></td>
    <td><code>integer</code></td>
    <td>Minimum quantity (included) of SMS you can obtain with this pack (wire: smsQuantityMin)</td>
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
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td><a href="#parameter-country"><code>country</code></a></td>
    <td><a href="#parameter-billing_country"><code>billing_country</code></a></td>
    <td>List SMS pack prices. Returns the SMS packs that can be bought for a destination country: credit and SMS quantities, prices, discount and VAT rate.</td>
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
    defaultValue="list"
    values={[
        { label: 'list', value: 'list' }
    ]}
>
<TabItem value="list">

List SMS pack prices. Returns the SMS packs that can be bought for a destination country: credit and SMS quantities, prices, discount and VAT rate.

```sql
SELECT
country_code,
credit,
credit_price,
credit_quantity_max,
credit_quantity_min,
discount_credit_price,
discount_percentage,
discount_sms_price,
sms_price,
sms_quantity_max,
sms_quantity_min,
vat_rate
FROM ovh.sms.rates_packs
WHERE country = '{{ country }}' -- required
AND billing_country = '{{ billing_country }}'
;
```
</TabItem>
</Tabs>
