--- 
title: licenses
hide_title: false
hide_table_of_contents: false
keywords:
  - licenses
  - license_office_prepaid
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

Creates, updates, deletes, gets or lists a <code>licenses</code> resource.

## Overview
<table><tbody>
<tr><td><b>Name</b></td><td><CopyableCode code="licenses" /></td></tr>
<tr><td><b>Type</b></td><td>Resource</td></tr>
<tr><td><b>Id</b></td><td><CopyableCode code="ovh.license_office_prepaid.licenses" /></td></tr>
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
    <td><CopyableCode code="task_pending_id" /></td>
    <td><code>integer</code></td>
    <td>Pending task id (wire: taskPendingId)</td>
</tr>
<tr>
    <td><CopyableCode code="first_name" /></td>
    <td><code>string</code></td>
    <td>User's first name (wire: firstName)</td>
</tr>
<tr>
    <td><CopyableCode code="last_name" /></td>
    <td><code>string</code></td>
    <td>User's last name (wire: lastName)</td>
</tr>
<tr>
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>User service name, used in invoices (wire: serviceName)</td>
</tr>
<tr>
    <td><CopyableCode code="tenant_service_name" /></td>
    <td><code>string</code></td>
    <td>User's tenant service name, used in invoices (wire: tenantServiceName)</td>
</tr>
<tr>
    <td><CopyableCode code="activation_email" /></td>
    <td><code>string</code></td>
    <td>Email used to activate Microsoft Office (wire: activationEmail)</td>
</tr>
<tr>
    <td><CopyableCode code="iam" /></td>
    <td><code>object</code></td>
    <td>IAM resource metadata</td>
</tr>
<tr>
    <td><CopyableCode code="is_virtual" /></td>
    <td><code>boolean</code></td>
    <td>Specify if the user is actually a user slot (configureme) or a real user (wire: isVirtual)</td>
</tr>
<tr>
    <td><CopyableCode code="licences" /></td>
    <td><code>array</code></td>
    <td>Licenses attributed to the user</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>User state (creating, deleting, ok, suspended, unspending)</td>
</tr>
<tr>
    <td><CopyableCode code="usage_location" /></td>
    <td><code>string</code></td>
    <td>ISO 3166-1 alpha-2 country code where the user is using Office365 services (ac, ad, ae, af, ag, ai, al, am, an, ao, aq, ar, as, at, au, aw, ax, az, ba, bb, bd, be, bf, bg, bh, bi, bj, bl, bm, bn, bo, bq, br, bs, bt, bv, bw, by, bz, ca, cc, cd, cf, cg, ch, ci, ck, cl, cm, cn, co, cr, cs, cu, cv, cw, cx, cy, cz, de, dj, dk, dm, do, dz, ec, ee, eg, eh, er, es, et, fc, fd, fi, fj, fk, fm, fo, fr, fx, ga, gb, gd, ge, gf, gg, gh, gi, gl, gm, gn, gp, gq, gr, gs, gt, gu, gw, gy, hk, hm, hn, hr, ht, hu, id, ie, il, im, in, io, iq, ir, is, it, je, jm, jo, jp, ke, kg, kh, ki, km, kn, kp, kr, kw, ky, kz, la, lb, lc, li, lk, lr, ls, lt, lu, lv, ly, ma, mc, md, me, mf, mg, mh, mk, ml, mm, mn, mo, mp, mq, mr, ms, mt, mu, mv, mw, mx, my, mz, na, nc, ne, nf, ng, ni, nl, no, np, nr, nu, nz, om, pa, pe, pf, pg, ph, pk, pl, pm, pn, pr, ps, pt, pw, py, qa, qc, re, ro, rs, ru, rw, sa, sb, sc, sd, se, sg, sh, si, sj, sk, sl, sm, sn, so, sr, ss, st, sv, sx, sy, sz, tc, td, tf, tg, th, tj, tk, tl, tm, tn, to, tp, tr, tt, tv, tw, tz, ua, ug, uk, um, us, uy, uz, va, vc, ve, vg, vi, vn, vu, we, wf, ws, ye, yt, yu, za, zm, zw) (wire: usageLocation)</td>
</tr>
</tbody>
</table>
</TabItem>
<TabItem value="list">

Office tenant

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
    <td><CopyableCode code="task_pending_id" /></td>
    <td><code>integer</code></td>
    <td>Pending task id (wire: taskPendingId)</td>
</tr>
<tr>
    <td><CopyableCode code="first_name" /></td>
    <td><code>string</code></td>
    <td>User's first name (wire: firstName)</td>
</tr>
<tr>
    <td><CopyableCode code="last_name" /></td>
    <td><code>string</code></td>
    <td>User's last name (wire: lastName)</td>
</tr>
<tr>
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>User service name, used in invoices (wire: serviceName)</td>
</tr>
<tr>
    <td><CopyableCode code="tenant_service_name" /></td>
    <td><code>string</code></td>
    <td>User's tenant service name, used in invoices (wire: tenantServiceName)</td>
</tr>
<tr>
    <td><CopyableCode code="activation_email" /></td>
    <td><code>string</code></td>
    <td>Email used to activate Microsoft Office (wire: activationEmail)</td>
</tr>
<tr>
    <td><CopyableCode code="iam" /></td>
    <td><code>object</code></td>
    <td>IAM resource metadata</td>
</tr>
<tr>
    <td><CopyableCode code="is_virtual" /></td>
    <td><code>boolean</code></td>
    <td>Specify if the user is actually a user slot (configureme) or a real user (wire: isVirtual)</td>
</tr>
<tr>
    <td><CopyableCode code="licences" /></td>
    <td><code>array</code></td>
    <td>Licenses attributed to the user</td>
</tr>
<tr>
    <td><CopyableCode code="status" /></td>
    <td><code>string</code></td>
    <td>User state (creating, deleting, ok, suspended, unspending)</td>
</tr>
<tr>
    <td><CopyableCode code="usage_location" /></td>
    <td><code>string</code></td>
    <td>ISO 3166-1 alpha-2 country code where the user is using Office365 services (ac, ad, ae, af, ag, ai, al, am, an, ao, aq, ar, as, at, au, aw, ax, az, ba, bb, bd, be, bf, bg, bh, bi, bj, bl, bm, bn, bo, bq, br, bs, bt, bv, bw, by, bz, ca, cc, cd, cf, cg, ch, ci, ck, cl, cm, cn, co, cr, cs, cu, cv, cw, cx, cy, cz, de, dj, dk, dm, do, dz, ec, ee, eg, eh, er, es, et, fc, fd, fi, fj, fk, fm, fo, fr, fx, ga, gb, gd, ge, gf, gg, gh, gi, gl, gm, gn, gp, gq, gr, gs, gt, gu, gw, gy, hk, hm, hn, hr, ht, hu, id, ie, il, im, in, io, iq, ir, is, it, je, jm, jo, jp, ke, kg, kh, ki, km, kn, kp, kr, kw, ky, kz, la, lb, lc, li, lk, lr, ls, lt, lu, lv, ly, ma, mc, md, me, mf, mg, mh, mk, ml, mm, mn, mo, mp, mq, mr, ms, mt, mu, mv, mw, mx, my, mz, na, nc, ne, nf, ng, ni, nl, no, np, nr, nu, nz, om, pa, pe, pf, pg, ph, pk, pl, pm, pn, pr, ps, pt, pw, py, qa, qc, re, ro, rs, ru, rw, sa, sb, sc, sd, se, sg, sh, si, sj, sk, sl, sm, sn, so, sr, ss, st, sv, sx, sy, sz, tc, td, tf, tg, th, tj, tk, tl, tm, tn, to, tp, tr, tt, tv, tw, tz, ua, ug, uk, um, us, uy, uz, va, vc, ve, vg, vi, vn, vu, we, wf, ws, ye, yt, yu, za, zm, zw) (wire: usageLocation)</td>
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
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Returns the names, activation email, licenses and state of the prepaid user, and the service names of the user and of its tenant. `isVirtual` tells whether it is a user slot or a real user. (Alpha version)</td>
</tr>
<tr>
    <td><a href="#list"><CopyableCode code="list" /></a></td>
    <td><CopyableCode code="select" /></td>
    <td></td>
    <td><a href="#parameter-iam_tags"><code>iam_tags</code></a>, <a href="#parameter-x_pagination_mode"><code>x_pagination_mode</code></a></td>
    <td>Returns the service names of the prepaid users. (Alpha version)</td>
</tr>
<tr>
    <td><a href="#update"><CopyableCode code="update" /></a></td>
    <td><CopyableCode code="update" /></td>
    <td><a href="#parameter-service_name"><code>service_name</code></a></td>
    <td></td>
    <td>Updates the first name, last name and activation email of the prepaid user. (Alpha version)</td>
</tr>
<tr>
    <td><a href="#change_password"><CopyableCode code="change_password" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-shouldSendMail"><code>shouldSendMail</code></a></td>
    <td></td>
    <td>Changes the password of the prepaid user and returns the task. Leave `password` empty to receive a generated password by email. Set `shouldSendMail` to send the new password to `notifyEmail`, the admin contact email by default. (Alpha version)</td>
</tr>
<tr>
    <td><a href="#confirm_termination"><CopyableCode code="confirm_termination" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a>, <a href="#parameter-token"><code>token</code></a></td>
    <td></td>
    <td>Confirm service termination. Terminates the service with the token sent by email to the admin contact. A reason, a future use and a comment can be given. (Beta version)</td>
</tr>
<tr>
    <td><a href="#terminate"><CopyableCode code="terminate" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Request service termination. Starts the termination of the service. The admin contact receives a token by email, to confirm with the `confirmTermination` call. (Beta version)</td>
</tr>
<tr>
    <td><a href="#unconfigure"><CopyableCode code="unconfigure" /></a></td>
    <td><CopyableCode code="exec" /></td>
    <td><a href="#parameter-serviceName"><code>serviceName</code></a></td>
    <td></td>
    <td>Removes the configuration of the prepaid user and turns it back into an unassigned license slot, and returns the task. The prepaid license is kept.</td>
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
<tr id="parameter-serviceName">
    <td><CopyableCode code="serviceName" /></td>
    <td><code>string</code></td>
    <td>Service name</td>
</tr>
<tr id="parameter-service_name">
    <td><CopyableCode code="service_name" /></td>
    <td><code>string</code></td>
    <td>Service name (wire: serviceName)</td>
</tr>
<tr id="parameter-iam_tags">
    <td><CopyableCode code="iam_tags" /></td>
    <td><code>object</code></td>
    <td>Filter resources on IAM tags (wire: iamTags)</td>
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

Returns the names, activation email, licenses and state of the prepaid user, and the service names of the user and of its tenant. `isVirtual` tells whether it is a user slot or a real user. (Alpha version)

```sql
SELECT
task_pending_id,
first_name,
last_name,
service_name,
tenant_service_name,
activation_email,
iam,
is_virtual,
licences,
status,
usage_location
FROM ovh.license_office_prepaid.licenses
WHERE service_name = '{{ service_name }}' -- required
;
```
</TabItem>
<TabItem value="list">

Returns the service names of the prepaid users. (Alpha version)

```sql
SELECT
task_pending_id,
first_name,
last_name,
service_name,
tenant_service_name,
activation_email,
iam,
is_virtual,
licences,
status,
usage_location
FROM ovh.license_office_prepaid.licenses
WHERE iam_tags = '{{ iam_tags }}'
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

Updates the first name, last name and activation email of the prepaid user. (Alpha version)

```sql
UPDATE ovh.license_office_prepaid.licenses
SET 
activation_email = '{{ activation_email }}',
first_name = '{{ first_name }}',
last_name = '{{ last_name }}',
usage_location = '{{ usage_location }}'
WHERE 
service_name = '{{ service_name }}' --required;
```
</TabItem>
</Tabs>


## Lifecycle Methods

EXEC variables use wire (API) names.

<Tabs
    defaultValue="change_password"
    values={[
        { label: 'change_password', value: 'change_password' },
        { label: 'confirm_termination', value: 'confirm_termination' },
        { label: 'terminate', value: 'terminate' },
        { label: 'unconfigure', value: 'unconfigure' }
    ]}
>
<TabItem value="change_password">

Changes the password of the prepaid user and returns the task. Leave `password` empty to receive a generated password by email. Set `shouldSendMail` to send the new password to `notifyEmail`, the admin contact email by default. (Alpha version)

```sql
EXEC ovh.license_office_prepaid.licenses.change_password 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"notifyEmail": "{{ notifyEmail }}", 
"password": "{{ password }}", 
"shouldSendMail": {{ shouldSendMail }}
}'
;
```
</TabItem>
<TabItem value="confirm_termination">

Confirm service termination. Terminates the service with the token sent by email to the admin contact. A reason, a future use and a comment can be given. (Beta version)

```sql
EXEC ovh.license_office_prepaid.licenses.confirm_termination 
@serviceName='{{ serviceName }}' --required 
@@json=
'{
"commentary": "{{ commentary }}", 
"futureUse": "{{ futureUse }}", 
"reason": "{{ reason }}", 
"token": "{{ token }}"
}'
;
```
</TabItem>
<TabItem value="terminate">

Request service termination. Starts the termination of the service. The admin contact receives a token by email, to confirm with the `confirmTermination` call. (Beta version)

```sql
EXEC ovh.license_office_prepaid.licenses.terminate 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
<TabItem value="unconfigure">

Removes the configuration of the prepaid user and turns it back into an unassigned license slot, and returns the task. The prepaid license is kept.

```sql
EXEC ovh.license_office_prepaid.licenses.unconfigure 
@serviceName='{{ serviceName }}' --required
;
```
</TabItem>
</Tabs>
