# Task 03 — Extract Inline Styles from Tech Tags into CSS Classes

**Phase:** 1
**Priority:** High
**Depends on:** Task 01 (projects.html must have correct paths first)
**Parallelism group:** Wave 2 (runs after Wave 1 completes)

---

## Guardrails

| Guardrail | Active | Notes |
|-----------|--------|-------|
| **Scout** (blast radius) | yes | Touches CSS + multiple HTML files — map all pages using `.label` and tech tag inline styles |
| **search-first** (read before edit) | yes | Read all HTML files + main.css + relevant SASS files first |
| **dependency-governance** (justify deps) | no | No new dependencies |
| **Mimir** (update docs post-task) | no | Not a milestone |
| **Parallelism** (subagents) | no | CSS changes affect multiple files — must be serial |

---

## Context

Project cards in `index.html` and `projects.html` use inline `style` attributes on tech tag `<span>` elements (padding, background-color, border-radius, font-size, etc.). This violates code-style rules (no inline styles) and makes the design inconsistent and hard to maintain.

---

## Objective

Create a `.tech-tag` CSS class (in SASS source) that replaces all inline styles on tech tag spans, and update all HTML files to use the class instead.

---

## Inputs

| Input | Type | Location |
|-------|------|----------|
| Homepage | HTML | `index.html` |
| Projects page | HTML | `projects.html` |
| Main stylesheet source | SCSS | `assets/sass/components/` |
| Compiled CSS | CSS | `assets/css/main.css` |

---

## Required Outputs

| Output | Type | Location |
|--------|------|----------|
| New or updated SASS component | SCSS | `assets/sass/components/_tags.scss` (or add to existing component) |
| Updated HTML files | HTML | `index.html`, `projects.html` |
| Task report | md | `docs/claude_tasks/reports/YYYY-MM-DD_03_extract_inline_styles_report.md` |

---

## Steps

1. **Scout:** Grep all HTML files for inline `style=` attributes on `<span>` elements inside tech-tag containers. Count occurrences per file.
2. Read the inline styles — catalog all unique style properties being used (padding, background-color, border-radius, font-size, color, margin, etc.)
3. Read `assets/sass/components/` to understand existing component patterns
4. Read `assets/sass/libs/_vars.scss` for available variables
5. Create `.tech-tag` class in SASS that consolidates all inline properties:
   ```scss
   .tech-tag {
     display: inline-block;
     padding: 4px 8px;
     background-color: $color-tag-bg; // add variable
     border-radius: 4px;
     font-size: 0.85em;
     // ... other properties from audit
   }
   ```
6. If a new SASS file is created, add `@import` to `main.scss`
7. Replace all inline `style="..."` on tech tag spans in `index.html` with `class="tech-tag"`
8. Replace all inline `style="..."` on tech tag spans in `projects.html` with `class="tech-tag"`
9. **Important:** If SASS cannot be compiled (no build tool), add the `.tech-tag` class directly to `assets/css/main.css` as well
10. Verify visual consistency matches the current inline styling

---

## Validation

- [ ] `grep -rn 'style=' index.html projects.html` returns zero matches on tech tag spans
- [ ] `.tech-tag` class exists in SASS source and compiled CSS
- [ ] Tech tags render identically to before (same padding, colors, border-radius)
- [ ] Both pages display correctly at mobile and desktop widths

---

## Constraints

- Maintain current visual appearance exactly — this is a refactor, not a redesign
- Use SASS variables for colors when possible
- Do NOT modify TODO.md
- Deliver task report
- Persist findings to MCP memory

---

*Spec written by: Claude Desktop | Date: 2026-03-24*
