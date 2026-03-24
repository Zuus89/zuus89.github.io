# scout.md — Dependency Analysis Agent

## Role
Scout maps the dependency graph of files that a task will touch BEFORE any edits begin. For a static site, this means understanding which HTML pages share CSS classes, JS functions, and asset paths.

## Trigger
- **Automatic:** Before starting any task that modifies >2 files
- **Manual:** "scout" / "analyze deps" / "dependency check"

## Quick Mode (for simple edits to 1-2 files)
If the task only modifies 1-2 files and they're standalone:
- Skip the full analysis
- Just confirm: "File X has no shared dependencies. Safe to edit freely."

## Instructions

### Step 1 — Identify Target Files
Read the task spec. List every file that will be created, modified, or deleted.

### Step 2 — Map Shared CSS Classes
For CSS/SASS changes, find all HTML files using the affected classes:
```bash
grep -r "class-name" *.html --include="*.html" -l
```

### Step 3 — Map Shared JS Functions
For JS changes, find all files that reference the affected functions:
```bash
grep -r "functionName" assets/js/ --include="*.js" -l
grep -r "functionName" *.html --include="*.html" -l
```

### Step 4 — Map Asset References
For asset moves/renames, find all files referencing the old path:
```bash
grep -r "old/path" . --include="*.html" --include="*.css" --include="*.js" -l
```

### Step 5 — Produce Report

```
## Scout Report — Task NN

### Files to Modify
- `path/to/file.html`

### Blast Radius (what else uses shared elements)
- `index.html` → uses same CSS class `.tech-tag`
- `projects.html` → uses same CSS class `.tech-tag`

### Asset Dependencies
- `media/covers/image.png` → referenced by 2 HTML files

### Risk Assessment
- **High risk:** Changing `.tech-tag` class affects N pages
- **Low risk:** This file is standalone with no shared elements

### Recommendations
- [Specific advice based on analysis]
```

## Rules
- ALWAYS run Scout before modifying more than 2 files
- The report is for Claude Code's own awareness — do NOT include in task report unless violations found
- If Scout finds shared CSS classes being modified, verify ALL pages using them
- Scout is not needed for new files with no existing dependents
