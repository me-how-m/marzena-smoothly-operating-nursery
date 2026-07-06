# Smoothly Operating Nursery

Conversion-focused single-page landing site for **Smoothly Operating Nursery** — practical nursery operations support, templates and improvement plans created by Marzena Monit.

Built as a static site (plain HTML/CSS/JS) from the Claude Design handoff bundle.

## Structure

- `index.html` — the complete landing page (header, hero, problem, promise, services, about, how-it-works, lead CTA, FAQ, contact form, footer)
- `assets/` — portrait and headshot images

## Interactive behaviour

- Sticky header with a mobile hamburger menu (`< 900px`)
- FAQ accordion (one item open at a time)
- Enquiry form with client-side validation and a thank-you confirmation state

## Integrations

- **Booking:** Calendly — `https://calendly.com/marzenamonit/smoothly_operating_nursery_20m_discovery_call` (wired on all "Book a call" buttons).
- **Enquiry form:** native Vercel Function at `api/enquiry.js` that emails submissions via [Resend](https://resend.com). No third-party form provider.
- **Email:** enquiries are sent to `hello@smoothlyoperatingnursery.com`.

### Enquiry form — required setup

The function needs environment variables in the Vercel project:

| Variable | Required | Default | Notes |
|---|---|---|---|
| `RESEND_API_KEY` | ✅ | — | From resend.com → API Keys |
| `ENQUIRY_TO` | optional | `hello@smoothlyoperatingnursery.com` | Where enquiries are delivered |
| `ENQUIRY_FROM` | optional | `Smoothly Operating Nursery <enquiries@smoothlyoperatingnursery.com>` | Must be a **Resend-verified** sender/domain |

Add the key (never commit it):

```bash
vercel env add RESEND_API_KEY production
```

Then verify the sending domain in Resend (add the DNS records Resend provides) and redeploy.

## Develop

Static pages open directly in a browser. To exercise the `api/` function locally, use the Vercel CLI:

```bash
vercel dev
```

## Deploy

Deployed on Vercel. Static pages are served directly; files under `api/` run as serverless functions.
