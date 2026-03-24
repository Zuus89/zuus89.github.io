# Task 04 Report — Deduplicate HTML

**Date:** 2026-03-24
**Status:** Complete

## Strategy
Option A: index.html shows featured + top 3 grid projects, projects.html has all 8.

## Changes Made
### index.html
- Removed from grid: Spotify 2023 Power BI Dashboard, LEGO Data Analysis, London Underground Analysis, HR Analytics Power BI Dashboard
- Added: "View All Projects" button (`<a href="projects.html" class="button large">`) after the `</section>` closing tag
- Updated nav link text: "Others" changed to "All Projects"

### projects.html
- Added: page header with `<header class="major"><h2>All Projects</h2>...</header>`
- Added: Retail Analytics SQL project (was missing from projects.html)
- Updated: page title from "Otros Proyectos" to "All Projects"
- Updated: nav active state moved from "Home" to "All Projects"
- Updated: nav link text from "Others" to "All Projects"

## Project Inventory
| # | Project | index.html | projects.html |
|---|---------|------------|---------------|
| 1 | Mental Health Power BI Dashboard | Featured (video) | Grid card (video) |
| 2 | Earthquake Azure Data Pipeline | Grid card | Grid card |
| 3 | Sporting Goods Data Pipeline & Power BI | Grid card (video) | Grid card (video) |
| 4 | Retail Analytics SQL | Grid card | Grid card |
| 5 | Spotify 2023 Power BI Dashboard | -- | Grid card |
| 6 | LEGO Data Analysis | -- | Grid card |
| 7 | London Underground Analysis | -- | Grid card |
| 8 | HR Analytics Power BI Dashboard | -- | Grid card |

## Validation
- [x] index.html: 1 featured + 3 grid = 4 projects shown
- [x] projects.html: all 8 projects present
- [x] "View All Projects" button links correctly to projects.html
- [x] All external links preserved (GitHub repos, Power BI embeds)
- [x] Navigation works between pages (nav updated on both files)
- [x] Nav link renamed from "Others" to "All Projects" on both pages
- [x] Active nav state correct: "Home" on index.html, "All Projects" on projects.html
