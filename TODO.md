# TODO.md — Portfolio Website

> Last updated: 2026-03-24
> Claude Desktop exclusive. Claude Code must NOT modify this file.

---

## Current Status

**Phase:** 1 — Bug Fixes & Cleanup
**Last completed:** Framework v2.0 applied to portfolio project.
**Next action:** Fix critical path inconsistencies and broken references.
**Blocked on:** Nothing.

---

## Phase 0: Repo Setup (Complete)

- [x] Apply project framework v2.0 to portfolio
- [x] Configure `.mcp.json` with portfolio_website slug
- [x] Create docs structure (strategy, architecture, chronicle, tasks)
- [x] Add web-specific rules to `.claude/rules/`
- [x] Adapt agents for web development context
- [x] Write `docs/site_architecture.md`
- [x] Write `docs/strategy.md`
- [x] Initialize `docs/project_chronicle.md`

---

## Phase 1: Bug Fixes & Cleanup

> Goal: Fix all broken paths, typos, and inconsistencies identified in the code review.

- [ ] Task 01 — Fix broken image paths in projects.html (`images/` → `media/covers/`)
- [ ] Task 02 — Fix fetch URL typos (`proyect_scripts/` → `resources/project-files/`)
- [ ] Task 03 — Extract inline styles from tech tags into CSS classes
- [ ] Task 04 — Remove HTML duplication between index.html and projects.html
- [ ] Task 05 — Compress videos using existing dev/scripts tools

### Definition of Done
- [ ] All pages load without 404 errors in browser console
- [ ] No inline styles remain on tech tags
- [ ] Videos under 10MB each
- [ ] All links and references verified

---

## Phase 2: Modernization

> Goal: Replace legacy dependencies, add build tooling, improve performance.

- [ ] Task 06 — Add package.json and SASS build configuration
- [ ] Task 07 — Replace jQuery plugins with modern CSS/JS equivalents
- [ ] Task 08 — Implement proper component/template system
- [ ] Task 09 — Update Service Worker with stale-while-revalidate strategy
- [ ] Task 10 — Remove IE compatibility code

---

## Phase 3: Enhancement

> Goal: Add new features and improve SEO/accessibility.

- [ ] Task 11 — Add JSON-LD structured data for SEO
- [ ] Task 12 — Implement dark/light theme toggle
- [ ] Task 13 — Add analytics integration
- [ ] Task 14 — Accessibility audit and fixes (WCAG 2.1 AA)

---

## Open Questions

| # | Question | Status | Impact |
|---|----------|--------|--------|
| Q1 | Should we migrate to a static site generator (Hugo/11ty)? | Open | High — would solve template duplication |
| Q2 | Should jQuery be fully removed or kept for compatibility? | Open | Medium — affects JS rewrite scope |

---

## Decision Log

| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-03-24 | Project initialized using standard framework v2.0 | Consistency with other projects |
| 2026-03-24 | Keep static HTML approach for now | GitHub Pages native, no build step needed for deployment |

---

*Reference: `docs/site_architecture.md` (SSOT)*
