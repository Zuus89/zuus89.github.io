# Strategy — Portfolio Website

> Updated by Mimir agent / Claude Desktop. Updated when architecture or design decisions change.

---

## Project Overview

**Goal:** Professional data analytics & engineering portfolio showcasing Cristobal Elton's projects and skills.
**Platform:** GitHub Pages (static site)
**Domain:** cristobalelton.com
**Target audience:** Recruiters, hiring managers, potential clients in the data/analytics space.

---

## Architecture Principles

1. **Static-first** — no server-side dependencies. Everything runs on GitHub Pages.
2. **Performance matters** — lazy loading, compressed assets, Service Worker caching. First impression is speed.
3. **Mobile-first responsive** — designed for mobile, enhanced for desktop. 7-tier breakpoint system.
4. **Semantic HTML** — proper heading hierarchy, landmark elements, ARIA labels. Accessibility is not optional.
5. **SASS modularity** — styles organized by concern (base, components, layout, libs). No monolithic CSS.
6. **Progressive enhancement** — site works without JS (noscript.css fallback). JS enhances, doesn't gate.
7. **SEO-conscious** — meta tags, Open Graph, structured data. The portfolio must be discoverable.
8. **Quality over speed** — every change backed by evidence. No cowboy coding.

---

## Design Decisions

| # | Decision | Rationale | Date |
|---|----------|-----------|------|
| D1 | Project initialized with standard framework v2.0 | Consistency with other projects | 2026-03-24 |
| D2 | Keep static HTML approach (no SSG) for now | GitHub Pages native, no build step needed, simpler deployment | 2026-03-24 |
| D3 | Maintain jQuery until full modernization phase | Breaking change risk too high for incremental fixes | 2026-03-24 |
| D4 | Use `media/` directory for all assets | Consolidate from mixed `images/` and `media/` paths | 2026-03-24 |

---

## Risk Register

| # | Risk | Likelihood | Impact | Mitigation |
|---|------|-----------|--------|------------|
| R1 | HTML duplication causes inconsistencies between pages | High | Medium | Phase 2: implement template system or SSG |
| R2 | Uncompressed videos slow page load | Medium | High | Phase 1: compress using existing scripts |
| R3 | Service Worker serves stale content | Medium | Medium | Phase 2: switch to stale-while-revalidate |
| R4 | jQuery dependency becomes security risk | Low | Medium | Phase 2: gradual replacement with vanilla JS |

---

## Phase Approach

### Phase 1 — Bug Fixes & Cleanup
Goal: Fix all broken paths, typos, inline styles, and compress media. Get the site to a clean baseline.

### Phase 2 — Modernization
Goal: Add build tooling, replace jQuery, implement templates, update Service Worker.

### Phase 3 — Enhancement
Goal: Add structured data, theme toggle, analytics, accessibility audit.

---

*Last updated: 2026-03-24*
