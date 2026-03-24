# Task 05 Report — Compress Videos

**Date:** 2026-03-24
**Status:** Blocked

## Steps Completed
- [x] Checked current file sizes
- [x] Read `dev/scripts/compress_videos.sh` (uses ffmpeg with CRF 28, preset medium)
- [x] Read `dev/scripts/movie_compressed.py` (uses moviepy with libx264, 1000k bitrate)
- [x] Checked if ffmpeg is installed — NOT found
- [x] Checked if moviepy is installed — NOT found
- [ ] Back up originals — skipped (blocker)
- [ ] Compress videos — skipped (blocker)
- [ ] Verify compressed files — skipped (blocker)

## File Sizes
| File | Before | After | Reduction |
|------|--------|-------|-----------|
| mental_health.mp4 | 39MB | N/A | N/A |
| sports_retail.mp4 | 14MB | N/A | N/A |

## Method Used
Blocked — ffmpeg is not installed on the system and moviepy Python package is not available either. Per task constraints, no software was installed without approval.

## Blocker Details
- `ffmpeg` is not found in PATH, Chocolatey, Scoop, or any common Windows install location.
- `moviepy` Python package is not installed.
- **Action required:** Install ffmpeg (recommended via `winget install Gyan.FFmpeg` or download from https://ffmpeg.org/download.html) and re-run this task.

## Recommended Compression Command (once ffmpeg is available)
```bash
ffmpeg -i mental_health.mp4 -c:v libx264 -crf 30 -preset slow -c:a aac -b:a 128k -movflags +faststart mental_health_compressed.mp4
ffmpeg -i sports_retail.mp4 -c:v libx264 -crf 30 -preset slow -c:a aac -b:a 128k -movflags +faststart sports_retail_compressed.mp4
```

## Validation
- [ ] mental_health.mp4 < 10MB
- [ ] sports_retail.mp4 < 10MB
- [ ] Videos play correctly
