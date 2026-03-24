# Task 04 — Remove HTML Duplication Between index.html and projects.html

**Phase:** 1
**Priority:** High
**Depends on:** Task 01, Task 03 (paths fixed, inline styles extracted)
**Parallelism group:** Wave 3 (runs after Wave 2 completes)

---

## Guardrails

| Guardrail | Active | Notes |
|-----------|--------|-------|
| **Scout** (blast radius) | yes | Major restructuring of two core pages — map all shared elements |
| **search-first** (read before edit) | yes | Read both pages fully, understand shared vs unique content |
| **dependency-governance** (justify deps) | no | No new dependencies |
| **Mimir** (update docs post-task) | yes | Milestone — site structure is changing. Update site_architecture.md |
| **Parallelism** (subagents) | no | Both files are interdependent — must be serial |

---

## Context

`index.html` and `projects.html` contain nearly identical project card sections. When a new project is added or a card is updated, both files must be edited manually — a maintenance burden and source of inconsistencies. Since we don't have a build tool yet (Phase 2), we need a pragmatic approach within the static HTML constraint.

---

## Objective

Eliminate content duplication between index.html and projects.html by giving each page a distinct purpose, so that no project card HTML is copy-pasted between files.

---

## Inputs

| Input | Type | Location |
|-------|------|----------|
| Homepage | HTML | `index.html` |
| Projects page | HTML | `projects.html` |
| Dev components | HTML | `dev/components/` (reference only) |

---

## Required Outputs

| Output | Type | Location |
|--------|------|----------|
| Restructured homepage | HTML | `index.html` |
| Restructured projects page | HTML | `projects.html` |
| Task report | md | `docs/claude_tasks/reports/YYYY-MM-DD_04_deduplicate_html_report.md` |

---

## Steps

1. **Scout:** Read both files completely. Diff the project card sections. Identify:
   - Which cards appear in BOTH files (duplicates)
   - Which cards are unique to one file
   - Which sections (nav, footer, head) are duplicated
2. **Propose a strategy** — present to Cristobal before executing. Options:
   - **Option A:** `index.html` shows top 3-4 featured projects + "View All" link to `projects.html` which has the complete list
   - **Option B:** `index.html` keeps all 8 cards, `projects.html` becomes a categorized/filtered view
   - **Option C:** Merge into single page with sections
3. After Cristobal approves a strategy, implement it
4. Ensure navigation links still work correctly
5. Verify all project links (internal + external) are preserved
6. Update `dev/components/` templates if they exist for these sections

---

## Validation

- [ ] No project card HTML is duplicated between the two files
- [ ] All project links still work (internal pages + external GitHub)
- [ ] Navigation between pages works correctly
- [ ] Both pages render correctly at all breakpoints
- [ ] SEO meta tags are correct on both pages
- [ ] No content is lost — every project is accessible from at least one page

---

## Constraints

- **STOP and ask Cristobal** before implementing — present the strategy options first
- Static HTML only — no templating engines (that's Phase 2)
- Preserve all existing project links and external URLs
- Do NOT modify TODO.md
- Deliver task report
- Trigger Mimir after completion to update site_architecture.md
- Persist decisions to MCP memory

---

*Spec written by: Claude Desktop | Date: 2026-03-24*
