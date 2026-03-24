# Task 01 Report — Fix Image Paths in projects.html

**Date:** 2026-03-24
**Status:** Complete

## Steps Completed
- [x] Read `projects.html` completely
- [x] Listed all files in `media/covers/` to confirm what exists
- [x] Found every `src=` or `href=` referencing `images/` in projects.html
- [x] Replaced all `images/` references with correct paths (`media/covers/` for images, `media/videos/` for videos)
- [x] Cross-checked that every referenced filename actually exists in its target directory
- [x] Grepped the full repo for any remaining `images/` references in other files

## Changes Made
| Line(s) | Old Path | New Path |
|---------|----------|----------|
| 64, 65 | `images/earthquake_cover.png` | `media/covers/earthquake_cover.png` |
| 88 | `images/sports_retail.mp4` | `media/videos/sports_retail.mp4` |
| 115 | `images/mental_health.mp4` | `media/videos/mental_health.mp4` |
| 143 | `images/spotify_cover.jpg` | `media/covers/spotify_cover.jpg` |
| 167 (x2) | `images/lego_cover.jpg` | `media/covers/lego_cover.jpg` |
| 185 (x2) | `images/london_cover.jpg` | `media/covers/london_cover.jpg` |

**Note:** Videos were mapped to `media/videos/` (not `media/covers/`) since that is where the `.mp4` files actually reside.

## Other Files with `images/` References
| File | Line(s) | Path Referenced |
|------|---------|-----------------|
| `retail-analytics-sql.html` | 75, 76 | `images/retail_sql_cover.jpg` |
| `earthquake-azure-data-pipeline.html` | 87, 88 | `images/earthquake_cover.png` |
| `index.html` | 207 | `images/lego_cover.jpg` |
| `index.html` | 225 | `images/london_cover.jpg` |

These were **not modified** per task constraints (only `projects.html` was in scope).

## Additional Finding
- The `images/` directory does not exist at the repo root. All media files live under `media/covers/` (images) and `media/videos/` (videos).

## Validation
- [x] `grep "images/" projects.html` returns zero matches
- [x] All image files exist in `media/covers/`: earthquake_cover.png, spotify_cover.jpg, lego_cover.jpg, london_cover.jpg
- [x] All video files exist in `media/videos/`: sports_retail.mp4, mental_health.mp4
