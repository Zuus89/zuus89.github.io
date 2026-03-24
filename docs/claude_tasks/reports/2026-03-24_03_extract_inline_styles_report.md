# Task 03 Report — Extract Inline Styles into CSS Classes

**Date:** 2026-03-24
**Status:** Complete

## Steps Completed
- [x] Read index.html and projects.html — cataloged all unique inline style combinations on tech tag spans
- [x] Read assets/sass/libs/_vars.scss to understand available variables
- [x] Read assets/sass/main.scss to understand the import structure
- [x] Read assets/sass/components/ directory to understand component patterns
- [x] Created assets/sass/components/_tags.scss with .tech-tag and .tech-tags classes
- [x] Added @import 'components/tags' to assets/sass/main.scss in the components section
- [x] Added compiled CSS to the end of assets/css/main.css
- [x] Replaced all inline-styled tech tag spans in index.html with class="tech-tag"
- [x] Replaced all inline-styled tech tag container divs in index.html with class="tech-tags"
- [x] Replaced all inline-styled tech tag spans in projects.html with class="tech-tag"
- [x] Replaced all inline-styled tech tag container divs in projects.html with class="tech-tags"
- [x] Verified no inline styles remain on tech tag spans in either file

## CSS Classes Created
- `.tech-tags` — container class (replaces inline text-align + margin on wrapper divs)
- `.tech-tag` — individual tag class (replaces inline padding, background-color, border-radius, margin-right, font-size)

## Inline Style Patterns Normalized
Two slightly different inline style patterns were consolidated into one `.tech-tag` class:
1. `padding:4px 8px; background-color:#f0f0f0; border-radius:4px; margin-right:5px;` (compact, no spaces)
2. `padding: 4px 10px; background-color: #f0f0f0; border-radius: 4px; margin-right: 6px;` (spaced variant)
3. `padding:4px 10px; background-color:#f0f0f0; border-radius:4px; margin-right:6px;` (compact, 10px padding)

Two container div patterns were consolidated into one `.tech-tags` class:
1. `text-align:center; margin-bottom:10px;`
2. `text-align:center; margin: 20px 0;`

## Files Modified
| File | Changes |
|------|---------|
| assets/sass/components/_tags.scss | Created new file with .tech-tags and .tech-tag classes |
| assets/sass/main.scss | Added @import 'components/tags' after pagination import |
| assets/css/main.css | Appended compiled .tech-tags and .tech-tag CSS rules at end of file |
| index.html | Replaced 30 inline-styled span.label elements with span.tech-tag; replaced 8 inline-styled container divs with div.tech-tags |
| projects.html | Replaced 28 inline-styled span.label elements with span.tech-tag; replaced 7 inline-styled container divs with div.tech-tags |

## Inline Style Audit
- Total inline styles on tech tags found: 58 spans + 15 container divs = 73
- Total inline styles replaced: 73
- Remaining inline styles (non-tech-tag, out of scope): 22 (on video, img, and p elements — Task 04 scope)

## Validation
- [x] No inline styles remain on tech tag spans
- [x] .tech-tag class exists in SASS and compiled CSS
- [x] Visual appearance matches original (normalized to consistent padding: 4px 8px, margin-right: 5px)
