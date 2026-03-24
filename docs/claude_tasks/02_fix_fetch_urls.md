# Task 02 — Fix Fetch URL Typos in Project Detail Pages

**Phase:** 1
**Priority:** Critical
**Depends on:** None
**Parallelism group:** Wave 1 (runs parallel with Task 01 and Task 05)

---

## Guardrails

| Guardrail | Active | Notes |
|-----------|--------|-------|
| **Scout** (blast radius) | no | Each detail page is independent |
| **search-first** (read before edit) | yes | Read both detail pages + verify target files exist |
| **dependency-governance** (justify deps) | no | No new dependencies |
| **Mimir** (update docs post-task) | no | Not a milestone |
| **Parallelism** (subagents) | yes | This task is part of Wave 1 — runs as independent subagent |

---

## Context

The project detail pages (`earthquake-azure-data-pipeline.html` and `retail-analytics-sql.html`) use JavaScript `fetch()` to load README.md and SQL files for tab content. The fetch URLs contain a typo: `proyect_scripts/` instead of `resources/project-files/`. This causes the tab content to fail loading silently.

---

## Objective

Fix all `fetch()` URL paths in both project detail pages so that README and SQL content loads correctly in the tabbed interface.

---

## Inputs

| Input | Type | Location |
|-------|------|----------|
| Earthquake detail page | HTML | `earthquake-azure-data-pipeline.html` |
| Retail analytics detail page | HTML | `retail-analytics-sql.html` |
| Actual project files | md, sql | `resources/project-files/earthquake-azure/` and `resources/project-files/retail-analytics-sql/` |

---

## Required Outputs

| Output | Type | Location |
|--------|------|----------|
| Fixed earthquake page | HTML | `earthquake-azure-data-pipeline.html` |
| Fixed retail page | HTML | `retail-analytics-sql.html` |
| Task report | md | `docs/claude_tasks/reports/YYYY-MM-DD_02_fix_fetch_urls_report.md` |

---

## Steps

1. Read `earthquake-azure-data-pipeline.html` — find all `fetch()` calls
2. Read `retail-analytics-sql.html` — find all `fetch()` calls
3. List all files in `resources/project-files/` to confirm correct paths and filenames
4. Replace `proyect_scripts/` (and any other wrong path variants) with `resources/project-files/`
5. Verify the exact filenames match (README.md, commercial_queries.sql, etc.)
6. Grep the full repo for any remaining `proyect_scripts` references

---

## Validation

- [ ] `grep -r "proyect_scripts" .` returns zero matches across entire repo
- [ ] Each `fetch()` URL points to an existing file under `resources/project-files/`
- [ ] Earthquake page: README tab loads markdown content
- [ ] Retail page: README tab loads markdown, SQL tab loads code with syntax highlighting

---

## Constraints

- Only modify the two detail HTML pages
- Do NOT modify TODO.md
- Deliver task report
- Persist path corrections to MCP memory

---

*Spec written by: Claude Desktop | Date: 2026-03-24*
