# Code Style Rules

## File Organization
- Many small files over few large files
- HTML pages: semantic structure with clear section landmarks
- SASS: modular architecture (base, components, layout, libs)
- JS: separate concerns (main logic, performance, utilities)

## Naming
- CSS classes: kebab-case (e.g., `tech-tag`, `project-card`)
- SASS variables: kebab-case with `$` prefix
- JS variables/functions: camelCase
- File naming: kebab-case for HTML/CSS/JS files
- Image files: snake_case (existing convention)

## Comments
- Self-documenting code preferred over comments
- Comments explain WHY, not WHAT
- No commented-out code — use git history
- SASS: comment each section/component purpose

## HTML Standards
- Semantic elements: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Always include `alt` on images
- Always include `aria-label` on icon-only links
- Use `rel="noopener"` on external links with `target="_blank"`
- No inline styles — use CSS classes

## CSS/SASS Standards
- No `!important` unless overriding third-party styles
- Use SASS variables for colors, fonts, spacing — never hardcode
- Mobile-first responsive design
- Use existing breakpoint mixins from `_breakpoints.scss`

## Error Handling
- JS: never swallow errors silently
- Always log errors with context
- Graceful degradation for missing resources (images, fonts)

## Formatting
- HTML: 1 tab indentation (existing convention)
- SASS: 1 tab indentation
- JS: 1 tab indentation
- Newline at end of file
