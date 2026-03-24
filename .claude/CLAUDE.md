# .claude/CLAUDE.md — Technical Reference for Claude Code

> Read this file at the start of every task. Maintained by Claude Desktop.

---

## Session Start Protocol

1. Read this file (`.claude/CLAUDE.md`)
2. Read ALL rule files in `.claude/rules/common/`
3. Read `docs/context_snapshot.md` if it exists — fastest way to get current state
4. Read the assigned task spec from `docs/claude_tasks/`
5. Check the task spec's **Guardrails** section
6. Load memory context: `read_graph` or `search_nodes` for relevant entities
7. If modifying >2 files in a module, run Scout before writing code
8. Begin work

---

## Code Health Guardrails

These guardrails are activated per-task in the task spec's **Guardrails** table. Rules in `.claude/rules/` are always active — guardrails are additional checks.

| Guardrail | When Required | What It Does |
|-----------|--------------|--------------|
| **Scout** | Modifying >2 files in a module | Maps blast radius before edits (`.claude/agents/scout.md`) |
| **search-first** | Editing any existing code file | Read before edit (`.claude/rules/common/search-first.md`) |
| **dependency-governance** | Adding/updating dependencies | Justify + verify (`.claude/rules/common/dependency-governance.md`) |
| **Mimir** | Milestone tasks | Update docs post-task (`.claude/agents/mimir.md`) |

---

## Rules Reference

All coding rules live in `.claude/rules/`. Read them at session start.

```
.claude/rules/
├── common/              ← Apply to all code in the project
│   ├── code-style.md
│   ├── dependency-governance.md
│   ├── git-workflow.md
│   ├── mcp-usage.md
│   ├── search-first.md
│   ├── security.md
│   └── testing.md
```

---

## Memory (MCP Knowledge Graph)

**This project uses isolated MCP memory.** All memory is scoped to this project only.

- Project slug: `portfolio_website`
- Memory file: `C:/Users/celto/.claude/projects/portfolio_website_memory.jsonl`
- Main entity: `portfolio_website_project` (entityType: `project`)

### After Every Task
Persist key findings using MCP memory tools:
- `create_entities` — for new task results (entityType: `task_result`)
- `add_observations` — to append findings to existing entities
- `create_relations` — to link task results to `portfolio_website_project` with `belongs_to`

### What to Persist
- Task completion status + date
- Browser compatibility issues found
- Performance metrics (Lighthouse scores, load times)
- Broken paths/URLs discovered and fixed
- SEO findings
- Accessibility issues

### What NOT to Persist
- Passwords, tokens, API keys
- Temporary debugging info
- Opinions — only confirmed facts

---

## Tech Stack

| Technology | Version/Details | Purpose |
|-----------|----------------|---------|
| HTML5 | Semantic markup | Page structure |
| SASS/SCSS | Modular architecture | Styling source |
| CSS3 | Compiled from SASS | Deployed styles |
| JavaScript | Vanilla + jQuery | Interactivity |
| Font Awesome | 6.x | Icons |
| Marked.js | CDN | Markdown rendering in project pages |
| Prism.js | CDN | Syntax highlighting |
| Service Worker | v1.2 | PWA caching |

---

## Site Structure

| Page | Path | Purpose |
|------|------|---------|
| Homepage | `index.html` | Landing + featured projects grid |
| Projects | `projects.html` | Extended project showcase |
| Earthquake Pipeline | `earthquake-azure-data-pipeline.html` | Project detail (tabs: README) |
| Retail Analytics | `retail-analytics-sql.html` | Project detail (tabs: README + SQL) |

---

## Asset Organization

| Type | Location | Notes |
|------|----------|-------|
| Compiled CSS | `assets/css/` | `main.css`, `performance.css`, `noscript.css` |
| SASS source | `assets/sass/` | Modular: base/, components/, layout/, libs/ |
| JavaScript | `assets/js/` | `main.js`, `performance.js`, jQuery plugins |
| Fonts | `assets/webfonts/` | Font Awesome icon fonts |
| Cover images | `media/covers/` | Project thumbnails |
| Backgrounds | `media/backgrounds/` | Site background, overlay |
| Videos | `media/videos/` | Project demo videos |
| Favicon | `media/icons/` | `favicon.ico` |
| Documents | `resources/documents/` | CV PDF |
| Project files | `resources/project-files/` | READMEs, SQL files |

---

## SASS Architecture

```
assets/sass/
├── main.scss              ← Main import file
├── base/                  ← Reset, page, typography
├── components/            ← Buttons, forms, icons, images, lists, rows, sections, tables
├── layout/                ← Header, nav, footer, intro, wrapper
├── libs/                  ← Variables, mixins, functions, breakpoints, grids
└── noscript.scss          ← No-JS fallback styles
```

### Key Variables (`_vars.scss`)
- Accent color: `#18bfef` (cyan)
- Background: `#1e252d` (dark)
- Content: `#ffffff` (white)
- Body font: Merriweather (serif)
- Heading font: Source Sans Pro (sans-serif)

### Breakpoints
| Name | Range |
|------|-------|
| xxsmall | ≤360px |
| xsmall | 361-480px |
| small | 481-736px |
| medium | 737-980px |
| large | 981-1280px |
| xlarge | 1281-1680px |
| default | >1681px |

---

## Known Issues (as of 2026-03-24)

| Issue | Severity | Location |
|-------|----------|----------|
| `projects.html` references `images/` instead of `media/covers/` | Critical | Multiple lines |
| Fetch URLs use `proyect_scripts/` (typo) | Critical | earthquake + retail detail pages |
| Inline styles on tech tags | High | index.html, projects.html |
| HTML duplication between index.html and projects.html | High | Entire project card sections |
| Videos uncompressed (~52MB total) | Medium | media/videos/ |
| Service Worker cache-first too aggressive | Medium | service-worker.js |

---

## Deployment

- **Host:** GitHub Pages
- **Domain:** `cristobalelton.com` (via CNAME file)
- **Branch:** `main` (auto-deploy)
- **Build:** No build step — static files served directly
- **SASS:** Compiled externally (no build config in repo)

---

## GitHub

**Repo:** `https://github.com/zuus89/zuus89.github.io`
**Default branch:** main
**Never force push.**

---

## Path Corrections

*(Track corrections discovered during development. Also persist in MCP memory under `path_corrections` entity.)*

| Wrong | Correct | File |
|-------|---------|------|
| `images/` | `media/covers/` | projects.html |
| `proyect_scripts/` | `resources/project-files/` | earthquake + retail detail pages |

---

*Last updated: 2026-03-24*
