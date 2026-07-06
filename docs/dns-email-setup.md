# DNS & Email Setup Checklist

**Domain:** smoothlyoperatingnursery.com (registrar: Namecheap, BasicDNS)
**Roles:** Vercel = website · Migadu = receiving/forwarding email · Resend = sending the website form

> All DNS records go in **Namecheap → Domain List → Manage → Advanced DNS**.
> Values marked **(copy from dashboard)** are generated per-account — copy them exactly from Migadu/Resend; don't type from memory.

---

## 1. Website — Vercel (already done, just confirm)

| Type | Host | Value | Priority | TTL |
|---|---|---|---|---|
| A | `@` | `76.76.21.21` | — | Automatic |
| CNAME | `www` | `cname.vercel-dns.com` | — | Automatic |

---

## 2. Receiving email — Migadu (MX + auth)

First: in **Migadu → Domains**, add `smoothlyoperatingnursery.com`. Migadu will show the exact records to add. They are:

| Type | Host | Value | Priority |
|---|---|---|---|
| MX | `@` | `aspmx1.migadu.com` | 10 |
| MX | `@` | `aspmx2.migadu.com` | 20 |
| TXT (SPF) | `@` | `v=spf1 include:spf.migadu.com -all` | — |
| CNAME | `key1._domainkey` | `key1.smoothlyoperatingnursery.com._domainkey.migadu.com` | — |
| CNAME | `key2._domainkey` | `key2.smoothlyoperatingnursery.com._domainkey.migadu.com` | — |
| CNAME | `key3._domainkey` | `key3.smoothlyoperatingnursery.com._domainkey.migadu.com` | — |
| TXT (verify) | `@` | `hosted-email-verify=…` **(copy from dashboard)** | — |

**Namecheap MX note:** set **Mail Settings → Custom MX** first, then add the two MX rows. **Delete** any default Namecheap “Email Forwarding” / parking MX rows and any “URL Redirect Record”.

---

## 3. Sending the website form — Resend

In **Resend → Domains → Add Domain** → `smoothlyoperatingnursery.com`. Resend shows ~3 records — **copy them exactly**. They look like:

| Type | Host | Value |
|---|---|---|
| MX | `send` | `feedback-smtp.<region>.amazonses.com` (priority 10) **(copy from dashboard)** |
| TXT (SPF) | `send` | `v=spf1 include:amazonses.com ~all` |
| TXT (DKIM) | `resend._domainkey` | `p=…` long key **(copy from dashboard)** |

**Do not merge Resend’s SPF into the root `@` SPF.** Resend’s SPF lives on the `send` host; Migadu owns the root `@` SPF. They don’t conflict.

---

## 4. DMARC (one record for the whole domain)

| Type | Host | Value |
|---|---|---|
| TXT | `_dmarc` | `v=DMARC1; p=none; rua=mailto:marzena@smoothlyoperatingnursery.com; adkim=r; aspf=r` |

Start with `p=none` (monitor only). After ~2 weeks with mail passing, tighten to `p=quarantine`.

---

## 5. Forwarding aliases (in Migadu, NOT Resend, NOT DNS)

In **Migadu → Aliases**, create four aliases, each forwarding to `marzenamonit@gmail.com`:

- `marzena@smoothlyoperatingnursery.com` → marzenamonit@gmail.com
- `info@smoothlyoperatingnursery.com` → marzenamonit@gmail.com
- `enquiries@smoothlyoperatingnursery.com` → marzenamonit@gmail.com
- `hello@smoothlyoperatingnursery.com` → marzenamonit@gmail.com  _(shown publicly on the site; the enquiry form delivers here)_

Migadu aliases can forward to an external address; no mailbox is required. Migadu applies SRS so forwarding to Gmail passes SPF.

---

## 6. Website form key — Vercel (not DNS)

```bash
vercel env add RESEND_API_KEY production   # paste your Resend key
vercel deploy --prod                        # redeploy to pick it up
```

Optional env vars: `ENQUIRY_TO` (where enquiries land) and `ENQUIRY_FROM` (must be on the Resend-verified domain).

---

## Order of operations

1. Add **Migadu** records → verify domain in Migadu → create the 3 aliases.
2. Add **Resend** records → verify domain in Resend.
3. Add the **DMARC** record.
4. Add **RESEND_API_KEY** in Vercel → redeploy.
5. Test: send yourself an email to each alias; submit the website form.

## Quick sanity checks
- Only **one** `v=spf1` TXT on the root `@` (Migadu). Resend’s SPF is on `send`.
- `www` CNAME and the Vercel `@` A record stay untouched.
- TTL “Automatic” everywhere; DNS can take minutes–hours to propagate.
