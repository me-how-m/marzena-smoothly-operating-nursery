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

## Integration placeholders

These are wired with placeholders and should be replaced before go-live:

- **Booking:** `https://calendly.com/YOUR-LINK/free-nursery-operations-call` (Calendly)
- **Form:** the contact form is a static demo; swap in a Tally embed (`TALLY_FORM_EMBED_CODE_HERE`) or point the form at a backend
- **Email:** `hello@smoothlyoperatingnursery.com`

## Develop

It's a static site — open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

## Deploy

Deployed on Vercel as a static site (zero config — `index.html` at the repo root).
