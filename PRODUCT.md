# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary users are a mix of three visitor types, none prioritized over the others: recruiters and hiring managers evaluating Facundo for a senior/staff software engineering role; technical peers and engineers/CTOs assessing depth of technical craft; and founders or potential clients considering him for freelance/consulting work or product collaboration. The current top priority behind the site is an active job search for a Sr./Staff Software Engineer role, so the design should make it easy and fast for a recruiter or hiring manager to get convinced and reach out, while still holding up under technical scrutiny from engineering peers.

## Product Purpose

A personal portfolio site for Facundo Pérez Brizuela, a Sr. Software Engineer, that establishes credibility fast and drives contact. Success = a visitor (recruiter, peer, or potential client) leaves convinced of his seniority and craft, and takes action (email, LinkedIn, GitHub).

## Positioning

Not a generic "list of projects" portfolio. The differentiator is the combination of (1) senior fintech engineering credibility — years building a strategic banking platform (Terminal Universal, Banco Patagonia) inside the Galileo/SoFi ecosystem, used daily by thousands of people — with (2) self-directed AI product builder outside of work hours (agentic career tools, a native macOS utility shipped from a real personal need). The "fintech by day, AI builder by night" duality is the core claim a generic frontend-dev portfolio could not truthfully copy.

## Operating Context

- Single-page, bilingual (ES/EN) site built with Next.js 16 App Router, React 19, TypeScript, Tailwind v4.
- Locale-prefixed routes (`/es`, `/en`) with middleware-based redirect; root `/` redirects to a resolved locale.
- Sections today: Hero, Projects (featured + others + legacy links), About (bio + work experience + stack tags), Contact, Footer, fixed NavBar with language toggle and mobile menu.
- Deployed on Vercel, no environment variables, automatic deploy from `main`.
- Content (project descriptions, work experience, bios) lives in bilingual dictionaries and a typed constants file — copy is structured data, not prose baked into components.

## Capabilities and Constraints

- Bilingual ES/EN is a hard requirement for this redesign — every visible string must exist in both locales, mirrored in `src/i18n/dictionaries/{es,en}.ts`.
- Only real content, data, and evidence may be shown. No fabricated metrics, testimonials, client logos, or case studies that don't exist. The redesign has full creative freedom on the visual system, but zero freedom to invent facts.
- Three real projects exist today, at different maturity levels: one released and shipped (native macOS tool), two in development (an agentic AI career companion, an AI resume-improvement tool). Status must stay visually honest — "in development" must not be dressed up as shipped.
- Two legacy/older projects exist as lower-priority links (an e-commerce clone practice project, a UX case study on Behance) — kept as supporting evidence, not primary showcase items.
- Three real work experiences exist: Sr. Software Engineer at Galileo (SoFi ecosystem), React Native Developer at Sistémica, mentor role at Henry (a coding bootcamp).
- Real contact channels: email, LinkedIn, GitHub. No other contact method exists (no phone, no contact form/backend currently).
- No CMS — all content changes go through code (constants + dictionaries), so the design should stay comfortably maintainable by editing those files directly.

## Brand Commitments

- Name: Facundo Pérez Brizuela. Location: Mendoza, Argentina (stated fact, used in copy/footer).
- Existing initials mark "FPBR" used as a wordmark in the nav — not a confirmed binding identity element, open to reconsideration in the redesign.
- No existing logo, brand guideline, or color system mandated by the user beyond what the current implementation shows (that implementation is evidence/anti-reference for this redesign, not a binding constraint).

## Evidence on Hand

- Real, current project data and descriptions: `src/constants/portfolioData.ts` (projects, legacy projects, work experience, stack tags, contact links).
- Real bilingual copy for hero, about, contact, meta: `src/i18n/dictionaries/es.ts` and `en.ts`.
- No screenshots, product demo videos, case-study write-ups, download counts, star counts, or user testimonials exist for any project — do not fabricate or imply their existence (e.g. no fake "1000+ users" style claims beyond the one true fact already stated: Terminal Universal is used daily by thousands of people at Banco Patagonia, which is real and may be kept).
- No professional photo/headshot confirmed available — do not assume one exists; ask before designing a layout that hard-requires one.

## Product Principles

1. Recruiter-speed clarity first: a non-technical recruiter must grasp who Facundo is, what he's senior at, and how to reach him within seconds of landing, without sacrificing depth for the technical audience that scrolls further.
2. Honesty over polish theater: project maturity (released vs. in development vs. private), real employer names, and real dates are load-bearing trust signals — never blur or inflate them for visual effect.
3. The duality is the pitch: fintech-by-day / AI-builder-by-night is the one differentiating narrative thread; the redesign should make this legible as a throughline, not just a tagline.
4. Bilingual by construction, not by afterthought: ES and EN must feel equally native, with layouts that don't break when string lengths differ between locales.
5. Low-maintenance by a solo developer: the visual system must stay easy for Facundo alone to extend (new project, new job entry) by editing data files, without needing new bespoke layout code each time.

## Accessibility & Inclusion

No formally required standard was specified beyond what the current implementation already does (focus-visible states, aria-labels/expanded on interactive controls, semantic landmarks). Maintain at least this level of care in the redesign; no explicit accessibility target beyond good baseline practice was set by the user.
