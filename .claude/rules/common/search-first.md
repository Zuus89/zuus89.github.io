# Search-First Rule

Before editing any existing file, you MUST:

1. **Read the file first** — understand its current state, structure, and purpose
2. **Check who references it** — find all files that link to, import, or include this one
3. **Check what it depends on** — understand its dependencies (CSS classes, JS functions, assets)
4. **Check related files** — if editing `index.html`, also check `projects.html` for consistency

### When this applies:
- ANY edit to an existing HTML, CSS, JS, or SASS file
- ANY file rename or move operation
- ANY change to CSS classes used across multiple files
- ANY change to shared JS functions or SASS variables

### When this does NOT apply:
- Creating brand new files with no existing dependents
- Editing documentation (`.md` files)
- Editing config files (`.json`)

### Rationale:
Understanding what depends on a file before editing prevents cascading breakage.
A 30-second read saves 30 minutes of debugging broken pages.
