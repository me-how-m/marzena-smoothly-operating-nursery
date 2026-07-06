# SEO, LLM Optimization & Content Plan

**For:** Smoothly Operating Nursery (smoothlyoperatingnursery.com)
**Prepared:** 5 July 2026
**Goal:** Get the site found by (a) nursery owners/managers searching Google and (b) people asking AI assistants (ChatGPT, Perplexity, Google AI Overviews, Claude) "who can help me run my nursery better" — and convert them into free-call bookings and template enquiries.

---

## 0. What's already been built (foundations shipped)

These are live now, so the plan below builds on them rather than starting from zero:

- **Clean, fast, mobile-first single page** with semantic headings, unique `<title>` and meta description, canonical URLs.
- **Structured data (JSON-LD)** on the homepage: `ProfessionalService`, `Person` (Marzena, with credentials), `WebSite`, and a full `FAQPage`. This is the single biggest lever for AI answer engines — it tells machines exactly who she is, what she offers, prices, area served, and answers to common questions.
- **`robots.txt`** — allows Google/Bing *and* explicitly welcomes AI crawlers (GPTBot, PerplexityBot, ClaudeBot, Google-Extended, Applebot-Extended, etc.).
- **`sitemap.xml`** — lists all pages, referenced from robots.txt.
- **Open Graph / social tags** for clean link previews.
- **`Articles` section** (currently "Coming soon") ready to host the content below.

**Your first three external actions** (can't be done from code):
1. Verify the site in **Google Search Console** and **Bing Webmaster Tools**; submit `sitemap.xml` in both.
2. Create a **Google Business Profile** (even service-area, no shopfront) — huge for local/UK discovery and trust.
3. Add a privacy-friendly analytics tool (**Plausible** or **Fathom**, ~£9/mo, GDPR-friendly, no cookie banner needed) so you can measure what's working.

---

## 1. SEO plan

### 1.1 Technical SEO (mostly done — keep it healthy)
- ✅ HTTPS, fast static hosting (Vercel), mobile responsive, sitemap, robots, canonical tags.
- **To do as content grows:** keep each new page's `<title>` and meta description unique; keep URLs short and readable (e.g. `/articles/nursery-rota-template`); add breadcrumb schema once there's a real article hierarchy; compress images (WebP) and add descriptive `alt` text.
- **Core Web Vitals:** already strong on a static site — just avoid heavy scripts/embeds. If you embed a live Tally form or Calendly, load it lazily.

### 1.2 Keyword strategy
Target **buyer-intent** and **problem-aware** phrases the audience actually types. Group into three intents:

**Commercial / "ready to hire" (few, high value):**
- nursery operations consultant / support
- nursery management consultant UK
- Early Years operations consultant
- 1-day nursery operational review

**Problem-aware / "I'm struggling" (the sweet spot for articles):**
- nursery rota problems / staff cover template
- how to prepare a nursery for Ofsted
- nursery paperwork organisation
- parent showaround checklist / nursery show around tips
- how to run a nursery smoothly
- starting a nursery UK checklist

**Resource / lead-magnet queries:**
- nursery rota template / free
- daily nursery opening checklist
- Ofsted readiness checklist Early Years

> Tactic: **one page per primary keyword.** The homepage owns the commercial terms; each article owns one problem-aware term.

### 1.3 On-page SEO (per page)
- Primary keyword in the `<title>`, `<h1>`, first 100 words, and one `<h2>`.
- One clear `<h1>` per page; logical `<h2>`/`<h3>` structure.
- Descriptive internal links (articles → services → contact); every article links to the free call.
- Meta description that reads like ad copy (it drives clicks even when it's not a ranking factor).
- Image `alt` text describing the content.

### 1.4 Local & trust signals (E-E-A-T)
Google heavily rewards **Experience, Expertise, Authority, Trust** — which is Marzena's real edge.
- **Google Business Profile** (service-area business covering your region).
- Consistent **NAP** (Name, Address, Phone) wherever listed.
- An **About/credentials** section (already on-page) — reinforce with the M.A., EYTS, 15+ years.
- Collect **testimonials/case studies** from early clients (with permission) — add `Review`/`AggregateRating` schema later.
- Get listed in relevant **Early Years / childcare directories** and, over time, earn mentions/links from sector blogs, local business networks, and any guest posts.

### 1.5 Off-page / authority (slow but compounding)
- Guest articles on Early Years sector sites; comment usefully in nursery-manager communities/forums and Facebook groups (value first, link second).
- A simple **LinkedIn** presence for Marzena posting the same tips — drives referral traffic and builds author authority.
- Encourage happy clients to link/mention.

### 1.6 Measurement (review monthly)
- **Search Console:** impressions, clicks, average position, which queries surface you, indexing status.
- **Analytics (Plausible/Fathom):** top pages, sources, and conversions (call bookings, form submits).
- **KPIs:** free-call bookings and template enquiries first; rankings/traffic second (they're the means, not the goal).

---

## 2. LLM / answer-engine optimization (GEO / AEO)

People increasingly *ask* rather than *search*. When someone asks ChatGPT or Perplexity "how do I make my nursery run more smoothly?" or "who helps nurseries with operations in the UK?", you want to be quoted or cited. This is **Generative Engine Optimization (GEO)** / **Answer Engine Optimization (AEO)**.

### 2.1 Why the foundations already help
- **Structured data** = machine-readable facts. LLMs and AI search grounding love clean `ProfessionalService`/`Person`/`FAQPage` schema — it's the easiest way for them to state who you are, what you charge, and where you operate.
- **`robots.txt` welcomes AI crawlers**, so GPTBot/PerplexityBot/ClaudeBot can read and cite the site.
- **The FAQ** is written as direct question→answer pairs — exactly the format answer engines extract.

### 2.2 How to write so AI quotes you
- **Answer first, then explain.** Start each section with a 1–2 sentence direct answer, then the detail. AI extracts the lead sentence.
- **Question-shaped headings** (`How do I fix last-minute rota changes?`) that mirror how people ask.
- **Self-contained facts and definitions** — short, quotable, standalone sentences (don't rely on the previous paragraph for meaning).
- **Lists, steps and small tables** — highly extractable and often lifted verbatim into AI answers.
- **Add a "Key takeaways / TL;DR"** box near the top of every article.
- **Cite specifics** (numbers, checklists, named steps) — concreteness gets quoted over vague advice.
- **State entity facts plainly** somewhere on each page: "Smoothly Operating Nursery is a UK nursery operations consultancy founded by Marzena Monit…" so models learn the association.

### 2.3 Consistency = entity strength
Say the same core facts (name, founder, what you do, area served, credentials) the **same way** across the homepage, About, LinkedIn, Google Business Profile and any directory. Consistency is how models and search engines become *confident* about the entity and start recommending it.

### 2.4 Track it
Periodically ask ChatGPT, Perplexity, Google (AI Overviews) and Claude your target questions ("nursery operations consultant UK", "how to prepare a nursery for Ofsted") and note whether/where you appear. That's your GEO scoreboard.

---

## 3. Content plan

Content is the engine for **both** SEO and GEO: every good article is a new page that can rank *and* a new source AI can cite. It also feeds the email list and demonstrates expertise before the sale.

### 3.1 Structure: pillars + clusters
Organise around a few **pillar** topics (broad, evergreen) each supported by focused **cluster** articles that link up to the pillar and across to services.

| Pillar | Cluster articles (one keyword each) |
|---|---|
| **Rotas & staffing** | Fixing last-minute rota changes · Staff cover without the morning scramble · Ratios/TOIL/overtime explained simply · A rota template that survives real weeks |
| **Ofsted readiness** | Making Ofsted readiness part of daily practice · An everyday Ofsted readiness checklist · What inspectors notice about your systems |
| **Parent showarounds** | A parent showaround checklist that converts · Making every showaround consistent · Following up after a visit |
| **Paperwork & systems** | Giving every policy/record a home · Simple compliance file structure · Reducing the "everything in one person's head" problem |
| **Recruitment & onboarding** | A repeatable first-week onboarding routine · Onboarding checklist for new practitioners · Reducing early leavers |
| **Starting / running a nursery** | The operational checklist for opening a nursery · Daily opening & closing routines · Funding & admin routines that don't pile up |

### 3.2 First 10 articles (priority order)
Chosen for search demand × ease × conversion pull:

1. **The nursery rota problem — and a template that actually holds up** *(kw: nursery rota template)* → links to Templates.
2. **A daily nursery opening checklist** *(kw: daily nursery opening checklist)* → **lead magnet**.
3. **How to prepare your nursery for Ofsted — without the panic** *(kw: how to prepare a nursery for Ofsted)*.
4. **The parent showaround checklist that fills places** *(kw: parent showaround checklist)* → **lead magnet**.
5. **Where should all your nursery paperwork live?** *(kw: nursery paperwork organisation)*.
6. **Staff cover without losing your whole morning** *(kw: nursery staff cover)*.
7. **Onboarding a new practitioner: a first-week routine** *(kw: nursery staff onboarding)*.
8. **Opening a nursery: the operational checklist** *(kw: starting a nursery UK checklist)*.
9. **10 things that make nursery operations feel messy (and the fix)** *(kw: how to run a nursery smoothly)* — great GEO/listicle.
10. **Ofsted readiness checklist for Early Years** *(kw: Ofsted readiness checklist)* → **lead magnet**.

### 3.3 Repeatable article template (SEO + GEO optimized)
Use this skeleton for every article:
1. **H1** = the question/keyword.
2. **TL;DR box** — 2–4 bullet key takeaways (extractable by AI, skimmable by humans).
3. **Direct answer** — first paragraph answers the core question in 2–3 sentences.
4. **Body** — `H2` question-shaped sub-sections; short paragraphs; at least one **numbered checklist** or **small table**.
5. **A downloadable** (the matching template/checklist) in exchange for an email — the conversion moment.
6. **Mini-FAQ** (3–5 Q&As) at the end → add `FAQPage` schema.
7. **CTA** — book the free call / request templates.
8. **Internal links** — to the relevant service and 2–3 related articles.
9. **Author line** — "By Marzena Monit, Early Years operations consultant (15+ years)" for E-E-A-T + `Article`/`author` schema.

### 3.4 Cadence
- Realistic solo pace: **2 articles/month** for the first quarter (start with the 4 lead-magnet pieces), then 1–2/month.
- **Refresh** older posts every 6–12 months (update the date, add new sections) — refreshing is often higher-ROI than net-new.

### 3.5 Lead magnets (capture emails from content)
From the brief, launch in this order — each pairs with an article above:
1. **Daily Nursery Opening Checklist** (first — simple, immediately useful)
2. **Parent Showaround Checklist**
3. **Ofsted Readiness Mini Checklist**
4. **Rota Pressure Quick Audit**

### 3.6 Distribution (don't just publish — circulate)
- Email the list when each article/template lands (ties to the opt-in on the enquiry form).
- Post the key takeaway as a LinkedIn post linking back.
- Share in nursery-manager Facebook groups/forums where it's genuinely helpful.
- Repurpose checklists into carousel/infographic posts.

---

## 4. 90-day roadmap

**Weeks 1–2 — Setup & measurement**
- [ ] Search Console + Bing Webmaster verified; submit sitemap in both.
- [ ] Google Business Profile created.
- [ ] Plausible/Fathom analytics installed; define "booking" and "enquiry" as goals.
- [ ] LinkedIn profile for Marzena aligned with the site's wording.

**Weeks 3–6 — First content + first lead magnet**
- [ ] Publish articles #1 (rota template) and #2 (daily opening checklist).
- [ ] Ship the **Daily Opening Checklist** lead magnet + email capture.
- [ ] Convert the Articles page from "Coming soon" to a real article index (I can do this when the first posts exist).

**Weeks 7–12 — Momentum + authority**
- [ ] Publish articles #3–#6.
- [ ] Add 2 more lead magnets (Showaround, Ofsted).
- [ ] Gather 2–3 testimonials; add `Review` schema.
- [ ] First guest post / directory listings for backlinks.
- [ ] Review Search Console + analytics; double down on what's ranking/converting.

**Ongoing**
- 1–2 articles/month, refresh old ones, keep entity facts consistent everywhere, and re-test the AI-assistant questions quarterly.

---

## 5. Tooling summary

| Need | Recommended | Notes |
|---|---|---|
| Search visibility data | Google Search Console + Bing Webmaster | Free; submit sitemap |
| Analytics | Plausible or Fathom | GDPR-friendly, no cookie banner needed |
| Local presence | Google Business Profile | Free; strong trust/local signal |
| Keyword research | Google autocomplete, "People also ask", Search Console queries, Ahrefs/Ubersuggest (paid, optional) | Start free |
| GEO tracking | Manually ask ChatGPT / Perplexity / Google AI / Claude your target questions | Quarterly |

---

*When you're ready to write, I can turn any article in section 3.2 into a finished, schema-marked page and swap the Articles "Coming soon" for a live index. This plan intentionally favours a few high-quality, genuinely useful pieces over volume — that's what ranks, what earns AI citations, and what converts nursery managers who are tired of thin advice.*
