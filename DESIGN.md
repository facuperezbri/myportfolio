---
name: Facundo Pérez Brizuela — Portfolio
description: A bank reconciliation slip, not a hacker terminal — every project and role a real ledger line.
colors:
  ledger-paper: "#F4F0E4"
  ledger-paper-night: "#E7ECED"
  hairline-rule: "#D6CDAF"
  hairline-rule-night: "#C4D0D2"
  ink-navy: "#17233C"
  muted-slate: "#4B5468"
  brass-accent: "#835310"
  stamp-green: "#1E5C3C"
  stamp-amber: "#8C5A16"
typography:
  display:
    fontFamily: "var(--font-fraunces), Fraunces, ui-serif, serif"
    fontSize: "3rem"
    fontWeight: 600
    lineHeight: 0.95
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "var(--font-fraunces), Fraunces, ui-serif, serif"
    fontSize: "1.875rem"
    fontWeight: 600
    letterSpacing: "-0.025em"
  title:
    fontFamily: "var(--font-fraunces), Fraunces, ui-serif, serif"
    fontSize: "1.125rem"
    fontWeight: 600
    letterSpacing: "-0.025em"
  body:
    fontFamily: "var(--font-space-grotesk), Space Grotesk, ui-sans-serif, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.625
  label:
    fontFamily: "var(--font-space-mono), Space Mono, ui-monospace, monospace"
    fontSize: "0.75rem"
    fontWeight: 400
    letterSpacing: "0.025em"
    fontFeature: "tabular-nums"
rounded:
  none: "0px"
spacing:
  inline: "1.5rem"
  row: "1.5rem"
  heading-gap: "2.5rem"
  section: "5rem"
components:
  button-primary:
    backgroundColor: "transparent"
    textColor: "{colors.brass-accent}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.625rem 1.25rem"
  button-primary-hover:
    backgroundColor: "{colors.brass-accent}"
    textColor: "{colors.ledger-paper}"
  chip-tag:
    backgroundColor: "transparent"
    textColor: "{colors.muted-slate}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.125rem 0.375rem"
  status-stamp-released:
    backgroundColor: "color-mix(in srgb, {colors.stamp-green} 7%, transparent)"
    textColor: "{colors.stamp-green}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.125rem 0.5rem"
  status-stamp-pending:
    backgroundColor: "color-mix(in srgb, {colors.stamp-amber} 7%, transparent)"
    textColor: "{colors.stamp-amber}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.125rem 0.5rem"
  status-stamp-restricted:
    backgroundColor: "color-mix(in srgb, {colors.muted-slate} 7%, transparent)"
    textColor: "{colors.muted-slate}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.125rem 0.5rem"
  nav-locale-chip-active:
    backgroundColor: "transparent"
    textColor: "{colors.ink-navy}"
    typography: "{typography.label}"
    rounded: "{rounded.none}"
    padding: "0.125rem 0.375rem"
---

# Design System: Facundo Pérez Brizuela — Portfolio

## Overview

**Creative North Star: "The Daily Close"**

The portfolio reads as a bank reconciliation slip, not a hacker terminal: a real financial document a recruiter, peer, or founder can trust on sight. Every project and every job is a numbered ledger line that opens, moves, and closes — a real reference number, a real date, an honest status stamp — never a decorative card or a hero-metric tile. The system is built from cream ledger paper, ink-navy type, exactly one brass accent, and a three-tone green/amber/slate stamp vocabulary that only ever reports the truth of a status enum. It is deliberately flat: no shadow and no rounded corner ships anywhere in the codebase, and separation between elements is always a hairline rule or a shift in paper tone, never a cast shadow.

The type system carries four distinct voices instead of the two the original direction called for: Fraunces (self-hosted via `next/font/google`) was added during the finish-review fix round as the display face for every heading-equivalent (Hero H1, `SectionHeading` H2, `LedgerRow` H3 titles, the Contact lede), while Space Grotesk narrowed to prose, labels, and nav chrome, and Space Mono stayed reserved for tabular data. `--color-p-accent` and `--color-p-amber` were also retuned in that same fix round; both now clear 4.5:1 contrast against both paper tones. This file documents that shipped state, not the two-typeface direction contract that preceded it.

Confirmed visual rejections: no hacker-terminal/dark-mode-first aesthetic, no card grids, no eyebrow/kicker labels, no decorative section numbering, no drop shadows, no rounded corners.

**Key Characteristics:**
- Flat ledger-paper surface: zero `box-shadow`, zero `border-radius`, anywhere in the shipped code.
- Two-tone day/night paper system, switched per `Section` (day is the default; night is reserved for Projects).
- One brass accent, spent only on actionable and iconographic elements, never on body text or a resting fill.
- A three-tone honest status-stamp vocabulary (green / amber / slate) mapped 1:1 to the real `ProjectStatus` enum.
- A four-voice type system: Fraunces carries every heading-equivalent, Space Grotesk carries prose/labels/nav, Space Mono carries every tabular figure, date, and status code.
- `LedgerRow` + hairline section rules substitute for cards everywhere content would otherwise be boxed.

## Colors

A cream ledger palette with a single warm accent and a semantic, never-decorative status trio.

### Primary
- **Brass Accent** (`#835310`): The one accent color. Spent on the Hero CTA (border, label, and hover fill), the Sun tagline glyph, and the icon + link color for demo links, company links, and the Contact channel icons. Never used for body copy or as a resting fill — only borders, icons, links, and the CTA's hover state. Retuned during the finish-review fix round to clear 4.5:1+ contrast on both paper tones.

### Tertiary — Status Stamps
- **Stamp Green** (`#1E5C3C`): `released` status only ("Reconciled" / "Reconciliado"). Text + border color at a 7% background tint.
- **Stamp Amber** (`#8C5A16`): `in_development` status only ("Pending" / "Pendiente"). Retuned alongside the brass accent for contrast.
- **Muted Slate** (`#4B5468`): `private` status ("Restricted" / "Restringido") — reuses the same hex as the neutral muted-text color below, so a "Restricted" line reads as quiet/neutral rather than alarmed.

### Neutral
- **Ledger Paper** (`#F4F0E4`): Day-ledger background — Hero, About, Contact, Footer, and the page body default.
- **Ledger Paper Night** (`#E7ECED`): Night-ledger background — Projects only, applied via `Section`'s `tone="night"` prop.
- **Ink Navy** (`#17233C`): Primary text color for all headings and primary body copy. Also the `::selection` background (paired with Ledger Paper as the selected-text color) and the active-locale nav chip's border/text.
- **Muted Slate** (`#4B5468`): Secondary text — mono labels, dates, descriptions' supporting line, tag chips, footer, and inactive nav.
- **Hairline Rule** (`#D6CDAF`): Day-ledger dividers, tag borders, and underline decoration in day sections.
- **Hairline Rule Night** (`#C4D0D2`): Night-ledger (Projects) dividers and tag borders.

### Named Rules
**The One Accent Rule.** Brass Accent is the only accent color in the system. It appears exclusively on actionable or iconographic elements (the CTA, external-link icons, demo/company links) — never on body text, never as a resting fill, and never doubled with a second accent hue.

**The Honest Stamp Rule.** The green/amber/slate trio maps 1:1 to the real `ProjectStatus` enum (`released` / `in_development` / `private`) and is used nowhere else in the system. A stamp's tone is never chosen for visual variety.

## Typography

**Display Font:** Fraunces (self-hosted via `next/font/google`, weights 500/600, `--font-fraunces` / `font-display`)
**Body Font:** Space Grotesk (weights 400–700, `--font-space-grotesk` / `font-sans`, the default body face)
**Label/Mono Font:** Space Mono (weights 400/700, `--font-space-mono` / `font-mono`)

**Character:** A ledger-paper formality meeting a plain modern grotesque and a mechanical mono — Fraunces gives every heading and title the gravity of a printed statement, Space Grotesk carries prose and UI chrome at a conversational register, and Space Mono renders every date, index, tag, and status code with genuine tabular alignment (`font-variant-numeric: tabular-nums lining-nums`).

### Hierarchy
- **Display** (600, `3rem` → `4.5rem` (sm) → `6rem` (md), line-height 0.95, tracking -0.025em): Hero H1 only — the statement's title.
- **Headline** (600, `1.875rem` → `2.25rem` (sm); Contact lede variant `1.5rem` → `1.875rem` (sm), tracking -0.025em): `SectionHeading` H2s and the Contact lede ("Let's talk.").
- **Title** (600, `1.125rem` default, `1.25rem` → `1.5rem` (sm) when featured, tracking -0.025em): `LedgerRow` H3 titles — project titles and job roles.
- **Body** (400, `1rem`, line-height 1.625): bio paragraphs, project/role descriptions, Contact subheading. Constrained to a `max-w-xl`/`max-w-md`/`max-w-2xl` measure per context (roughly 45–75ch).
- **Label** (400, `0.75rem` default / `0.6875rem` for tags and stamps, tracking 0.025em, tabular-nums): dates, ledger index numbers, tags, status-stamp text (uppercase, tracking-wide), nav links (lowercase, untracked), and the "FPBR" wordmark (700, tracking-widest).

### Named Rules
**The Four-Voice Rule.** Fraunces is the only face allowed on the Hero H1, `SectionHeading` H2s, `LedgerRow` H3 titles, and the Contact lede. Space Grotesk never carries a heading. Space Mono never carries prose — it is reserved for genuinely tabular or discrete content (dates, indices, tags, status codes, nav chrome), which is why this world's use of monospace is a real tabulation and not a "technical" costume.

## Layout

A single narrow reading column, not a dashboard grid: `Container` caps at `max-w-3xl` (48rem), centered, with `1.5rem` horizontal padding at every breakpoint — the width of a printed statement, held constant from Hero through Footer.

`Section` sets the page's vertical rhythm: `5rem` vertical padding on mobile, `7rem` (`sm:`) above, separated from the previous section by a 1px top rule — suppressed only on the section immediately after Hero (`noBorder`). A section's `tone` prop (default vs `"night"`) swaps both its background and its rule color together as one decision; Projects is the only section that opts into night tone.

`LedgerRow` sets the row rhythm inside Projects and About: a two-column grid (a `1.75rem`/`2.25rem` (sm) index column, tabular-numbered and zero-padded, plus a flexible content column), `1.5rem` vertical padding per row, and a 1px top rule between rows (suppressed on the first row via `first`). `SectionHeading` reserves `2.5rem`/`3.5rem` (sm) below itself before content starts, and is built with no eyebrow/kicker above it — the heading carries its own weight.

## Elevation & Depth

No shadows exist anywhere in the shipped code. Depth and separation are conveyed entirely by hairline (1px) rule lines and by the day/night paper-tone shift between sections — a flat, printed-document model rather than a lifted-surface one. The one exception is functional, not decorative: the fixed `NavBar` gains a translucent paper background (`bg-p-bg/90`) with `backdrop-blur-md` only once the page has scrolled (or the mobile menu is open), so nav chrome stays legible over content passing beneath it.

### Named Rules
**The Flat Ledger Rule.** No `box-shadow` ships anywhere in this system. Separation is always a rule line or a paper-tone change.

## Shapes

Every border in the system is square-cornered — no `border-radius` is used anywhere, from the Hero CTA to tag chips to status stamps to the mobile-menu panel. Borders are hairline (1px) by default for dividers, tag chips, status stamps, and nav chips. The Hero CTA is the one exception: a 2px border, the system's single heavier stroke, marking the primary call-to-action as the statement's one "stamped" instrument.

### Named Rules
**The One Heavy Stroke Rule.** 2px borders are reserved for the Hero CTA alone. Every other bordered element — tags, stamps, nav chips, dividers — stays hairline.

## Components

### Buttons
- **Shape:** square corners (`{rounded.none}`), 2px border (the system's one heavy stroke).
- **Primary (Hero CTA):** transparent background at rest, Brass Accent border and label text, mono label typography, `0.625rem 1.25rem` padding. On hover, fills solid Brass Accent with Ledger Paper text (`hover:bg-p-accent hover:text-p-bg`). Plays the `stamp-down-tilt` keyframe once on load (translateY -8px scale 1.2 → settle at rotate(-1deg), 0.55s, `cubic-bezier(0.16,1,0.3,1)`) — the system's one deliberate tilt gesture.
- **No secondary/ghost/tertiary button variant exists in the shipped surfaces** — only the one primary CTA.

### Chips (Tags)
- **Style:** hairline border tone-matched to its section (day rule in About, night rule in Projects), no background fill, muted-slate mono text, `0.6875rem` size, `0.125rem 0.375rem` padding. Used for stack/tech tags in Projects and About; casing is preserved as authored (not forced uppercase).

### Status Stamp (signature component)
A small bordered mono chip: uppercase, tracking-wide, `0.6875rem`, `0.125rem 0.5rem` padding, square corners. Background is always a 7% tint of its own tone color (never a solid fill); border sits at ~35% tone opacity. Exactly three tones exist — green (`released`), amber (`in_development`), slate (`private`) — each mapped 1:1 to the real status enum via `STATUS_TONE`, never chosen for variety. Animates in exactly once, the first time it scrolls into view (`IntersectionObserver`, threshold 0.6): `stamp-down` keyframe, translateY(-8px) scale(1.2) → settle at rest (no rotation — the tilt is reserved for the Hero CTA). Respects `prefers-reduced-motion`.

### Navigation
Fixed to the viewport top; transparent over Hero, gaining a translucent Ledger Paper background, blur, and a hairline bottom rule once scrolled past `24px` or while the mobile menu is open. The "FPBR" wordmark is a bordered mono chip (700 weight, tracking-widest). Desktop links are plain lowercase mono labels with an underline that grows in on hover (`decoration-transparent` → rule-colored). The locale toggle is two bordered chips (ES/EN): the active locale gets a solid Ink Navy border + text and `aria-current="true"`; the inactive locale is a `Link` with a transparent border that reveals the hairline rule on hover. Mobile collapses the links behind a 3-line CSS hamburger that morphs into an X, sliding a link panel open via a `max-height`/`opacity` transition; `Escape` closes it and returns focus to the toggle.

## Do's and Don'ts

### Do:
- **Do** reserve Fraunces for the four heading-equivalent roles (Hero H1, `SectionHeading` H2, `LedgerRow` H3 titles, Contact lede); keep every other text run in Space Grotesk or Space Mono.
- **Do** use Space Mono only for genuinely tabular or discrete content — dates, entry numbers, status codes, tags, nav chrome. This world earns monospace deliberately; it is not a "technical" costume, so don't shy away from it for real tabular data.
- **Do** keep every border square (`{rounded.none}`) and every depth cue a rule line or a paper-tone shift — never a shadow.
- **Do** tint status-stamp backgrounds to a 7% wash of their own tone color and keep the three tones mapped 1:1 to real status values.
- **Do** switch a `Section`'s paper tone (day → night) only as a whole-section decision via the `tone` prop — never as a background override on a smaller element inside a day section.

### Don't:
- **Don't** add a card, an icon-plus-heading-plus-text tile, or any boxed/shadowed container — `LedgerRow` plus `Section` rules are this system's only content-grouping device.
- **Don't** put a kicker or eyebrow above a heading — `SectionHeading` is deliberately built without one; the heading carries its own weight.
- **Don't** reuse the Hero CTA's `stamp-down-tilt` keyframe (the -1° tilt) elsewhere; it is a one-time, one-element gesture. Other stamped/animated elements use the untilted `stamp-down` keyframe.
- **Don't** introduce a second accent color. Brass Accent is the only accent, reserved for actionable elements and their icons — never body text, never a resting fill.
- **Don't** round a corner or add a `box-shadow` anywhere in this system; it has shipped with zero of either, and that is the point, not an oversight.
