--- 
title: ips
hide_title: false
hide_table_of_contents: false
keywords:
  - ips
  - ip
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

Creates, updates, deletes, gets or lists an <code>ips</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="ips" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.ip.ips" /></td></tr>
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
    <td><CopyableCode code="organisation_id" /></td>
    <td><code>string</code></td>
    <td>IP block organisation Id (wire: organisationId)</td>
</tr>
<tr>
    <td><CopyableCode code="bring_your_own_ip" /></td>
    <td><code>boolean</code></td>
    <td>Is this IP part of the Bring your own IP program (alpha) (wire: bringYourOwnIp)</td>
</tr>
<tr>
    <td><CopyableCode code="campus" /></td>
    <td><code>string</code></td>
    <td>Where is the IP used/usable (alpha)</td>
</tr>
<tr>
    <td><CopyableCode code="can_be_terminated" /></td>
    <td><code>boolean</code></td>
    <td>Is this IP can be terminated (wire: canBeTerminated)</td>
</tr>
<tr>
    <td><CopyableCode code="country" /></td>
    <td><code>string</code></td>
    <td>IP country (ac, ad, ae, af, ag, ai, al, am, an, ao, aq, ar, as, at, au, aw, ax, az, ba, bb, bd, be, bf, bg, bh, bi, bj, bl, bm, bn, bo, bq, br, bs, bt, bv, bw, by, bz, ca, cc, cd, cf, cg, ch, ci, ck, cl, cm, cn, co, cr, cs, cu, cv, cw, cx, cy, cz, de, dj, dk, dm, do, dz, ec, ee, eg, eh, er, es, et, fc, fd, fi, fj, fk, fm, fo, fr, fx, ga, gb, gd, ge, gf, gg, gh, gi, gl, gm, gn, gp, gq, gr, gs, gt, gu, gw, gy, hk, hm, hn, hr, ht, hu, id, ie, il, im, in, io, iq, ir, is, it, je, jm, jo, jp, ke, kg, kh, ki, km, kn, kp, kr, kw, ky, kz, la, lb, lc, li, lk, lr, ls, lt, lu, lv, ly, ma, mc, md, me, mf, mg, mh, mk, ml, mm, mn, mo, mp, mq, mr, ms, mt, mu, mv, mw, mx, my, mz, na, nc, ne, nf, ng, ni, nl, no, np, nr, nu, nz, om, pa, pe, pf, pg, ph, pk, pl, pm, pn, pr, ps, pt, pw, py, qa, qc, re, ro, rs, ru, rw, sa, sb, sc, sd, se, sg, sh, si, sj, sk, sl, sm, sn, so, sr, ss, st, sv, sx, sy, sz, tc, td, tf, tg, th, tj, tk, tl, tm, tn, to, tp, tr, tt, tv, tw, tz, ua, ug, uk, um, us, uy, uz, va, vc, ve, vg, vi, vn, vu, we, wf, ws, ye, yt, yu, za, zm, zw)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Custom description on your ip</td>
</tr>
<tr>
    <td><CopyableCode code="iam" /></td>
    <td><code>object</code></td>
    <td>IAM resource metadata</td>
</tr>
<tr>
    <td><CopyableCode code="ip" /></td>
    <td><code>string (ip-block)</code></td>
    <td>IP (v4 or v6) CIDR notation (e.g., 192.0.2.0/24) (example: 192.0.2.0/24)</td>
</tr>
<tr>
    <td><CopyableCode code="is_additional_ip" /></td>
    <td><code>boolean</code></td>
    <td>Is this IP an Additional IP (alpha) (wire: isAdditionalIp)</td>
</tr>
<tr>
    <td><CopyableCode code="regions" /></td>
    <td><code>array</code></td>
    <td>Where is the IP used/usable, in the form of region codenames (alpha)</td>
</tr>
<tr>
    <td><CopyableCode code="rir" /></td>
    <td><code>string</code></td>
    <td>Regional Internet Registry of the IP (alpha)</td>
</tr>
<tr>
    <td><CopyableCode code="routed_to" /></td>
    <td><code>object</code></td>
    <td>Routage information (wire: routedTo)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Possible values for ip type (cdn, cloud, dedicated, failover, hosted_ssl, housing, loadBalancing, mail, overthebox, pcc, pci, private, vpn, vps, vrack, xdsl)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>integer</code></td>
    <td>Version of the IP (alpha) (4, 6)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Your IP

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
    <td><CopyableCode code="organisation_id" /></td>
    <td><code>string</code></td>
    <td>IP block organisation Id (wire: organisationId)</td>
</tr>
<tr>
    <td><CopyableCode code="bring_your_own_ip" /></td>
    <td><code>boolean</code></td>
    <td>Is this IP part of the Bring your own IP program (alpha) (wire: bringYourOwnIp)</td>
</tr>
<tr>
    <td><CopyableCode code="campus" /></td>
    <td><code>string</code></td>
    <td>Where is the IP used/usable (alpha)</td>
</tr>
<tr>
    <td><CopyableCode code="can_be_terminated" /></td>
    <td><code>boolean</code></td>
    <td>Is this IP can be terminated (wire: canBeTerminated)</td>
</tr>
<tr>
    <td><CopyableCode code="country" /></td>
    <td><code>string</code></td>
    <td>IP country (ac, ad, ae, af, ag, ai, al, am, an, ao, aq, ar, as, at, au, aw, ax, az, ba, bb, bd, be, bf, bg, bh, bi, bj, bl, bm, bn, bo, bq, br, bs, bt, bv, bw, by, bz, ca, cc, cd, cf, cg, ch, ci, ck, cl, cm, cn, co, cr, cs, cu, cv, cw, cx, cy, cz, de, dj, dk, dm, do, dz, ec, ee, eg, eh, er, es, et, fc, fd, fi, fj, fk, fm, fo, fr, fx, ga, gb, gd, ge, gf, gg, gh, gi, gl, gm, gn, gp, gq, gr, gs, gt, gu, gw, gy, hk, hm, hn, hr, ht, hu, id, ie, il, im, in, io, iq, ir, is, it, je, jm, jo, jp, ke, kg, kh, ki, km, kn, kp, kr, kw, ky, kz, la, lb, lc, li, lk, lr, ls, lt, lu, lv, ly, ma, mc, md, me, mf, mg, mh, mk, ml, mm, mn, mo, mp, mq, mr, ms, mt, mu, mv, mw, mx, my, mz, na, nc, ne, nf, ng, ni, nl, no, np, nr, nu, nz, om, pa, pe, pf, pg, ph, pk, pl, pm, pn, pr, ps, pt, pw, py, qa, qc, re, ro, rs, ru, rw, sa, sb, sc, sd, se, sg, sh, si, sj, sk, sl, sm, sn, so, sr, ss, st, sv, sx, sy, sz, tc, td, tf, tg, th, tj, tk, tl, tm, tn, to, tp, tr, tt, tv, tw, tz, ua, ug, uk, um, us, uy, uz, va, vc, ve, vg, vi, vn, vu, we, wf, ws, ye, yt, yu, za, zm, zw)</td>
</tr>
<tr>
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Custom description on your ip</td>
</tr>
<tr>
    <td><CopyableCode code="iam" /></td>
    <td><code>object</code></td>
    <td>IAM resource metadata</td>
</tr>
<tr>
    <td><CopyableCode code="ip" /></td>
    <td><code>string (ip-block)</code></td>
    <td>IP (v4 or v6) CIDR notation (e.g., 192.0.2.0/24) (example: 192.0.2.0/24)</td>
</tr>
<tr>
    <td><CopyableCode code="is_additional_ip" /></td>
    <td><code>boolean</code></td>
    <td>Is this IP an Additional IP (alpha) (wire: isAdditionalIp)</td>
</tr>
<tr>
    <td><CopyableCode code="regions" /></td>
    <td><code>array</code></td>
    <td>Where is the IP used/usable, in the form of region codenames (alpha)</td>
</tr>
<tr>
    <td><CopyableCode code="rir" /></td>
    <td><code>string</code></td>
    <td>Regional Internet Registry of the IP (alpha)</td>
</tr>
<tr>
    <td><CopyableCode code="routed_to" /></td>
    <td><code>object</code></td>
    <td>Routage information (wire: routedTo)</td>
</tr>
<tr>
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Possible values for ip type (cdn, cloud, dedicated, failover, hosted_ssl, housing, loadBalancing, mail, overthebox, pcc, pci, private, vpn, vps, vrack, xdsl)</td>
</tr>
<tr>
    <td><CopyableCode code="version" /></td>
    <td><code>integer</code></td>
    <td>Version of the IP (alpha) (4, 6)</td>
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
    <td><a href="#parameter-ip"><code>ip</code></a></td>
    <td></td>
    <td>Get an IP. Returns the block's type, routed service, regions, RIR, organization, and BYOIP / Additional IP flags.</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-campus"><code>campus</code></a>, <a href="#parameter-description"><code>description</code></a>, <a href="#parameter-iam_tags"><code>iam_tags</code></a>, <a href="#parameter-ip"><code>ip</code></a>, <a href="#parameter-is_additional_ip"><code>is_additional_ip</code></a>, <a href="#parameter-routed_to.service_name"><code>routed_to.service_name</code></a>, <a href="#parameter-type"><code>type</code></a>, <a href="#parameter-version"><code>version</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>List IPs. Returns your IP blocks, filterable by routed service, type, version, campus, Additional IP or IAM tags.</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-ip"><code>ip</code></a></td>
    <td></td>
    <td>Update the IP description. Changes the block's free-text description, its only editable field. List IPs can filter on this description.</td>
</tr>
<tr>
    <td><a href="#change_org"><CopyableCode code="change_org" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-ip"><code>ip</code></a>, <a href="#parameter-organisation"><code>organisation</code></a></td>
    <td></td>
    <td>Change the organization. Sets the RIR organization (from /me/ipOrganisation) on the block's registry record (async task).</td>
</tr>
<tr>
    <td><a href="#park"><CopyableCode code="park" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-ip"><code>ip</code></a></td>
    <td></td>
    <td>Park an IP. Detaches the IP from its service and keeps it on your account, unrouted. Returns the task that applies the change.</td>
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
<tr id="parameter-ip">
    <td><CopyableCode code="ip" /></td>
    <td><code>string (ip-block)</code></td>
    <td></td>
</tr>
<tr id="parameter-campus">
    <td><CopyableCode code="campus" /></td>
    <td><code>string</code></td>
    <td>Filter the value of campus property (ilike) (alpha)</td>
</tr>
<tr id="parameter-description">
    <td><CopyableCode code="description" /></td>
    <td><code>string</code></td>
    <td>Filter the value of description property (like)</td>
</tr>
<tr id="parameter-iam_tags">
    <td><CopyableCode code="iam_tags" /></td>
    <td><code>object</code></td>
    <td>Filter resources on IAM tags (wire: iamTags)</td>
</tr>
<tr id="parameter-ip">
    <td><CopyableCode code="ip" /></td>
    <td><code>string (ip-block)</code></td>
    <td>Filter the value of ip property (contains or equals)</td>
</tr>
<tr id="parameter-is_additional_ip">
    <td><CopyableCode code="is_additional_ip" /></td>
    <td><code>boolean</code></td>
    <td>Filter the value of isAdditionalIp property (=) (alpha) (wire: isAdditionalIp)</td>
</tr>
<tr id="parameter-routed_to.service_name">
    <td><CopyableCode code="routed_to.service_name" /></td>
    <td><code>string</code></td>
    <td>Filter the value of routedTo.serviceName property (like) (wire: routedTo.serviceName)</td>
</tr>
<tr id="parameter-type">
    <td><CopyableCode code="type" /></td>
    <td><code>string</code></td>
    <td>Filter the value of type property (=)</td>
</tr>
<tr id="parameter-version">
    <td><CopyableCode code="version" /></td>
    <td><code>integer</code></td>
    <td>Filter the value of version property (=) (alpha)</td>
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

Get an IP. Returns the block's type, routed service, regions, RIR, organization, and BYOIP / Additional IP flags.

```sql
SELECT
organisation_id,
bring_your_own_ip,
campus,
can_be_terminated,
country,
description,
iam,
ip,
is_additional_ip,
regions,
rir,
routed_to,
type,
version
FROM ovh.ip.ips
WHERE ip = '{{ ip }}' -- required
;
```
</TabItem>
<TabItem value="list">

List IPs. Returns your IP blocks, filterable by routed service, type, version, campus, Additional IP or IAM tags.

```sql
SELECT
organisation_id,
bring_your_own_ip,
campus,
can_be_terminated,
country,
description,
iam,
ip,
is_additional_ip,
regions,
rir,
routed_to,
type,
version
FROM ovh.ip.ips
WHERE campus = '{{ campus }}'
AND description = '{{ description }}'
AND iam_tags = '{{ iam_tags }}'
AND ip = '{{ ip }}'
AND is_additional_ip = '{{ is_additional_ip }}'
AND routed_to.service_name = '{{ routed_to.service_name }}'
AND type = '{{ type }}'
AND version = '{{ version }}'
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

Update the IP description. Changes the block's free-text description, its only editable field. List IPs can filter on this description.

```sql
UPDATE ovh.ip.ips
SET 
description = '{{ description }}'
WHERE 
ip = '{{ ip }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="change_org"
    values={[
        { label: 'change_org', value: 'change_org' },
        { label: 'park', value: 'park' }
    ]}
>
<TabItem value="change_org">

Change the organization. Sets the RIR organization (from /me/ipOrganisation) on the block's registry record (async task).

```sql
EXEC ovh.ip.ips.change_org 
@ip='{{ ip }}' --required 
@@json=
'{
"organisation": "{{ organisation }}"
}'
;
```
</TabItem>
<TabItem value="park">

Park an IP. Detaches the IP from its service and keeps it on your account, unrouted. Returns the task that applies the change.

```sql
EXEC ovh.ip.ips.park 
@ip='{{ ip }}' --required
;
```
</TabItem>
</Tabs>
