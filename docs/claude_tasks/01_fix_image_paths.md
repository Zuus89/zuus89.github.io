# Task 01 — Fix Broken Image Paths in projects.html

**Phase:** 1
**Priority:** Critical
**Depends on:** None
**Parallelism group:** Wave 1 (runs parallel with Task 02 and Task 05)

---

## Guardrails

| Guardrail | Active | Notes |
|-----------|--------|-------|
| **Scout** (blast radius) | no | Single file edit |
| **search-first** (read before edit) | yes | Must read projects.html fully before editing |
| **dependency-governance** (justify deps) | no | No new dependencies |
| **Mimir** (update docs post-task) | no | Not a milestone |
| **Parallelism** (subagents) | yes | This task is part of Wave 1 — runs as independent subagent |

---

## Context

The code review identified that `projects.html` references images using `images/` as the directory, but the actual directory is `media/covers/`. This causes 404 errors for all project cover images on the projects page.

---

## Objective

Replace all broken `images/` references in `projects.html` with the correct `media/covers/` path so all project thumbnails load correctly.

---

## Inputs

| Input | Type | Location |
|-------|------|----------|
| Projects page | HTML | `projects.html` |
| Actual image directory | assets | `media/covers/` |

---

## Required Outputs

| Output | Type | Location |
|--------|------|----------|
| Fixed projects page | HTML | `projects.html` |
| Task report | md | `docs/claude_tasks/reports/YYYY-MM-DD_01_fix_image_paths_report.md` |

---

## Steps

1. Read `projects.html` completely
2. List all `src=` and `href=` attributes referencing `images/`
3. Cross-check each filename against actual files in `media/covers/` — confirm every referenced image exists
4. Replace all `images/` references with `media/covers/`
5. Verify no other files reference the `images/` path (grep the full repo)
6. If an `images/` directory exists, note it for cleanup

---

## Validation

- [ ] `grep -r "images/" projects.html` returns zero matches
- [ ] Every `<img>` `src` in projects.html points to an existing file in `media/covers/`
- [ ] Page loads in browser with all images visible (no 404s in console)

---

## Constraints

- Only modify `projects.html` — do not touch index.html (that's Task 03/04 scope)
- Do NOT modify TODO.md
- Deliver task report
- Persist path corrections to MCP memory

---

*Spec written by: Claude Desktop | Date: 2026-03-24*
