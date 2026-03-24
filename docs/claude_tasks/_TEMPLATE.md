# Task Spec Template

Copy as: docs/claude_tasks/NN_task_name.md

---

## Task NN — TASK_NAME

**Phase:** N
**Priority:** High / Medium / Low
**Depends on:** Task XX (or "None")

---

## Guardrails

Activate based on task scope. See `.claude/CLAUDE.md` > Code Health Guardrails for full details.

| Guardrail | Active | Notes |
|-----------|--------|-------|
| **Scout** (blast radius) | yes / no | Required if modifying >2 files |
| **search-first** (read before edit) | yes / no | Always yes for existing files |
| **dependency-governance** (justify deps) | yes / no | Required if adding/updating dependencies |
| **Mimir** (update docs post-task) | yes / no | Required for milestone tasks |
| **Parallelism** (subagents) | yes / no | If >2 phases with non-overlapping file sets |

---

## Context

Why this task exists. What gap does it fill.

{{CONTEXT}}

---

## Objective

Single sentence: what this task must accomplish.

{{OBJECTIVE}}

---

## Inputs

| Input | Type | Location |
|-------|------|----------|
| {{INPUT_NAME}} | HTML / CSS / JS / asset | {{INPUT_PATH}} |

---

## Required Outputs

| Output | Type | Location |
|--------|------|----------|
| Task report | md | docs/claude_tasks/reports/YYYY-MM-DD_NN_slug_report.md |
| {{OUTPUT_NAME}} | HTML / CSS / asset | {{OUTPUT_PATH}} |

---

## Steps

1. {{STEP_1}}
2. {{STEP_2}}
3. {{STEP_3}}

---

## Validation

- [ ] {{VALIDATION_CHECK_1}}
- [ ] {{VALIDATION_CHECK_2}}

---

## Constraints

- Static files only — no server-side code
- Do NOT modify TODO.md
- Deliver task_report.md in `docs/claude_tasks/reports/`
- Persist key findings to MCP memory after task completion
- Test all affected pages in browser after changes

---

*Spec written by: Claude Desktop | Date: {{DATE}}*
