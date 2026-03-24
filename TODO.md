# TODO.md — Portfolio Website

> Last updated: 2026-03-24
> Maintained by user request.

---

## Current Status

**Phase:** 2 — Complete Redesign (Complete)
**Last completed:** Phase 2D — Polish, scroll animations, legacy cleanup.
**Next action:** Phase 3 — Enhancement (JSON-LD, dark/light toggle, analytics, accessibility).
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

## Phase 1: Migration to Next.js 15 (Complete)

> Goal: Migrate from static HTML to Next.js 15 + TypeScript + React 19.

- [x] Initialize Next.js 15 project with App Router + TypeScript
- [x] Migrate HTML pages to React components
- [x] Create data layer (`src/data/projects.ts`) with typed project definitions
- [x] Implement dynamic routes (`/projects/[slug]`) with `generateStaticParams`
- [x] Set up markdown rendering (react-markdown + rehype-pretty-code + shiki)
- [x] Migrate layout components (Header, Nav, Footer, Intro, PageWrapper)
- [x] Migrate project components (ProjectCard, ProjectGrid, TechTags, VideoThumbnail, ProjectTabs)
- [x] Port SASS architecture to `src/styles/`
- [x] Configure static export (`output: "export"`) for GitHub Pages

### Definition of Done
- [x] `next build` succeeds with 0 errors
- [x] All 7 pages generate statically
- [x] All project detail pages render markdown + SQL code blocks

---

## Phase 2: Complete Redesign — "Technical Dark" Theme

> Goal: Replace legacy HTML5 UP template design with a custom, professional "Technical Dark" design system using Tailwind CSS.
> Design toolkit: Generated via Gemini, documented in conversation history.

### Phase 2A: Foundation (Complete)

- [x] Install Tailwind CSS v4 + `@tailwindcss/postcss` + `@tailwindcss/typography`
- [x] Create `postcss.config.mjs`
- [x] Create `src/styles/globals.css` with `@theme` design tokens (colors, typography, spacing, radii, animations)
- [x] Set up Inter + JetBrains Mono via `next/font/google` in `layout.tsx`
- [x] Update `layout.tsx` to import Tailwind globals instead of SASS
- [x] Remove `sassOptions` from `next.config.ts`
- [x] Verify build passes (0 errors, 7 static pages)

### Phase 2B: Core Components (Complete)

> Build reusable UI components with Tailwind classes.

- [x] `<Button>` — Primary, secondary, ghost variants + 3 sizes + Link/anchor support
- [x] `<TechTag>` / `<TechTags>` — Mono font, zinc bg, flex-wrap container
- [x] `<ProjectCard>` — Surface card with media, title, tags, hover border + scale transition
- [x] `<FeaturedProject>` — Split-pane layout (media + content), dual CTA buttons
- [x] `<Header>` — Sticky glassmorphism nav bar (backdrop-blur), mobile full-screen overlay
- [x] `<Footer>` — Minimalist with social icons, CV download, border-t
- [x] `<SiteLayout>` — Flex min-h-screen shell with max-w-6xl
- [x] `<VideoThumbnail>` — IntersectionObserver autoplay, rounded, Tailwind classes
- [x] `<ProjectTabs>` — Underline tabs with accent border (replaced SCSS module)
- [x] `<MarkdownRenderer>` — Updated with `prose prose-invert` styling
- [x] `<SqlCodeBlock>` — Styled with surface bg, border, mono font

### Phase 2C: Page Compositions (Complete)

> Assemble pages using new components.

- [x] Homepage — Hero + FeaturedProject (data-driven) + 3-project grid + CTA
- [x] Projects page — Title + full responsive 3-col grid
- [x] Project detail — Breadcrumbs + header + media + tech tags + tabs

### Phase 2D: Polish (Complete)

- [x] CSS hover transitions (border-hover on cards, scale-105 on media)
- [x] `<ScrollReveal>` component — IntersectionObserver fade-in/slide-up with configurable delay
- [x] Scroll animations applied to all homepage sections
- [x] Deleted 12 legacy files (6 layout, 6 project components, 4 hooks)
- [x] Deleted entire SASS architecture (`src/styles/global/`, `src/styles/modules/`)
- [x] Removed `sass` dependency from package.json
- [x] WCAG AA contrast audit — all text passes 4.5:1. Added `accent-light` (#60a5fa, 7.83:1) for link hover text; `accent-hover` (#2563eb) reserved for button backgrounds with white text (5.17:1)

---

## Phase 3: Enhancement

> Goal: Add features, SEO, and accessibility improvements.

- [ ] JSON-LD structured data for SEO
- [ ] Dark/light theme toggle (Tailwind `darkMode: "class"` ready)
- [ ] Analytics integration
- [ ] Accessibility audit and fixes (WCAG 2.1 AA)
- [ ] Optional: Tag filtering on Projects page

---

## Open Questions

| # | Question | Status | Impact |
|---|----------|--------|--------|
| Q1 | ~~Should we migrate to a static site generator?~~ | Resolved | Migrated to Next.js 15 |
| Q2 | ~~Should jQuery be fully removed?~~ | Resolved | jQuery removed — vanilla React now |
| Q3 | ~~Keep `ProjectTabs.module.scss` or migrate to Tailwind?~~ | Resolved | Migrated to Tailwind, SCSS deleted |

---

## Decision Log

| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-03-24 | Project initialized using standard framework v2.0 | Consistency with other projects |
| 2026-03-24 | Migrated to Next.js 15 + TypeScript + React 19 | Solves template duplication, enables SSG, modern DX |
| 2026-03-24 | Adopted "Technical Dark" design system | Professional data-engineering aesthetic, replacing generic HTML5 UP template |
| 2026-03-24 | Migrated from SASS to Tailwind CSS v4 | Native Next.js integration, zero unused CSS, utility-first with `@theme` tokens |
| 2026-03-24 | Chose Inter + JetBrains Mono fonts | Clean SaaS typography (Inter) + authentic code feel (JetBrains Mono) |
| 2026-03-24 | Static export for GitHub Pages | `output: "export"` in next.config.ts, no server required |
| 2026-03-24 | Deleted all legacy SASS + HTML5 UP components | Full migration to Tailwind + new component library complete |
| 2026-03-24 | New component architecture: `ui/`, `layout/`, `content/` | Clean separation — 20 source files total |
| 2026-03-24 | Added `accent-light` (#60a5fa) token for link hover text | WCAG AA fix — `accent-hover` (#2563eb) was 3.85:1 as text, new token is 7.83:1 |

---

## Tech Stack (Current)

| Technology | Version | Purpose |
|-----------|---------|---------|
| Next.js | 16.2.1 | Framework (App Router, SSG) |
| React | 19.2.4 | UI library |
| TypeScript | 5.x | Type safety |
| Tailwind CSS | 4.2.2 | Utility-first styling + `@theme` design tokens |
| @tailwindcss/typography | latest | Prose styling for markdown content |
| @tailwindcss/postcss | latest | PostCSS integration |
| react-markdown | 10.x | Markdown rendering |
| rehype-pretty-code + shiki | latest | Syntax highlighting |
| Inter | next/font/google | UI/body font (zero layout shift) |
| JetBrains Mono | next/font/google | Code/technical font |
| Font Awesome | 6.x | Icons (static CSS) |

---

*Reference: `docs/site_architecture.md` (SSOT)*
