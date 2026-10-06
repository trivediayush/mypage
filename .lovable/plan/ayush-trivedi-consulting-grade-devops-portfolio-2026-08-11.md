# Ayush Trivedi — Consulting-Grade DevOps Portfolio

A single-page, SEO-first portfolio built like a consulting deliverable: numbered sections, wide margins, ledger-style records instead of card grids, and restrained motion. Warm paper (#f6f4ef), deep ink (#1c1b19), oxblood accent (#7b2d26). JetBrains Mono for headings/labels, Work Sans for body.

## Visual language

- **Paper, not glass.** Flat warm-paper background, 1px hairline rules, no blur, no glassmorphism, no drop-shadow cards.
- **Numbered sections.** Each section opens with a mono index (`01 / EXPERIENCE`), a serif-weight sans headline, and a one-line abstract in the left margin — like a report chapter.
- **Rules over boxes.** Content separated by hairlines and generous whitespace; oxblood used only for accents, section indices, active states, and one CTA.
- **Motion.** Restrained only: hairlines draw in on scroll, section indices fade up, hover reveals row detail. No parallax, no bouncing, no fade-in on every element.
- **Icons.** Small, uniform line icons for tools and contact — no icon soup, no logos-as-badges.

## Navbar (non-generic)

Fixed top bar: mono wordmark left, and a **section progress rail** right — the current section's index and name displayed as `03 / PROJECTS` with a thin oxblood bar tracking scroll depth. Clicking the rail expands a full-width index overlay listing all sections with their numbers, plus "Get in touch". On mobile the rail collapses to `03/07` and taps open the same overlay.

## Sections

1. **Header / Intro** — Name, role line, one-paragraph positioning statement in report-abstract style. Right column: a fact ledger (Location, Focus, Availability, Current role) as label/value rows. Two text-link CTAs (View work, Get in touch), not two loud buttons.
2. **Experience** — A vertical **timeline ledger**: each role is a row with dates in the left margin (mono), title + company, and a short outcome line. Current role marked with an oxblood rule and "Current" label. Hover/tap expands the detail bullets inline. No cards.
3. **Technical Expertise** — A **capability matrix**: category names as mono row labels down the left, tools as inline text chips separated by hairlines. Grouped exactly as your current content (Cloud, Containerization, CI/CD, IaC, Monitoring, Security, Programming). **No progress bars, no percentages, no skill levels.**
4. **Projects** — Full-width **case-study entries**, numbered, each with a title, stack line in mono, problem/approach/result in 3 short labelled paragraphs, and a text link to GitHub. Stacked, edge-to-edge, separated by rules.
5. **Education & Certifications** — Degree as a ledger row; certifications as a compact mono list with issuer and status — plain rows, no badge cards.
6. **Freelance Services** — A **rate sheet / price table**: service name, scope description, and starting price aligned in a right-hand price column, hairline separated. Reads like a professional engagement sheet. Ends with a single "Start onboarding" CTA.
7. **Writing** — A **numbered article index** (not a slider, not a carousel): each post is a row with an index, title, one-line summary, and "Read on Medium" link. Ends with a link to your Medium profile. New posts are added by appending to one data file.
8. **Contact** — Split composition: left is a short direct statement plus a **contact ledger** (email, two phone numbers, LinkedIn, GitHub, Medium) as label/value rows with copy-on-click. Right is an inset oxblood panel for the freelance onboarding CTA. Footer is a single hairline row: name, role, links, copyright. No multi-column link farm, no contact form.

## SEO & long-term structure

- Unique `<title>`, meta description, canonical, `og:*` and `twitter:*` tags; single H1 (your name + role), correct H2/H3 nesting per section.
- JSON-LD: `Person` (name, jobTitle, address, sameAs → LinkedIn/GitHub/Medium), `WebSite`, and `Service` entries for the freelance offerings.
- Semantic HTML: `<header>`, `<nav>`, `<main>`, `<section aria-labelledby>`, `<footer>`; descriptive link text; no "click here".
- `robots.txt` and `sitemap.xml` generated for the route.
- Responsive by construction: margins collapse to a single column on mobile, ledgers reflow to stacked label/value pairs, the price table becomes stacked rows, the nav rail becomes a compact index.

## Content management

All content — roles, skills, projects, certifications, services, articles — lives in one typed content file (`src/content/portfolio.ts`). Adding a job, project, service, or article is a single object append; no layout edits needed. Writing entries link out to your Medium posts as requested, with the Medium profile link at the section end.

## Technical notes

- Rewrite `src/routes/index.tsx` as the portfolio page, composed of small section components under `src/components/portfolio/`.
- Add the palette and font tokens to `src/styles.css` `@theme inline` / `:root` in oklch; fonts loaded via `<link>` in `src/routes/__root.tsx`. No hardcoded color classes in components.
- Scroll-spy for the nav rail via `IntersectionObserver`; reveal animations via a small CSS-driven observer hook, respecting `prefers-reduced-motion`.
- Route-level `head()` for metadata and JSON-LD; root keeps only sitewide defaults.
- No backend needed for this build.
