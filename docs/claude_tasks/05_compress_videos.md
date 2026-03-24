# Task 05 — Compress Videos

**Phase:** 1
**Priority:** Medium
**Depends on:** None
**Parallelism group:** Wave 1 (runs parallel with Task 01 and Task 02)

---

## Guardrails

| Guardrail | Active | Notes |
|-----------|--------|-------|
| **Scout** (blast radius) | no | Only touches media files, no code changes |
| **search-first** (read before edit) | no | Binary assets, not code |
| **dependency-governance** (justify deps) | yes | May need ffmpeg — verify it's installed |
| **Mimir** (update docs post-task) | no | Not a milestone |
| **Parallelism** (subagents) | yes | This task is part of Wave 1 — runs as independent subagent |

---

## Context

The portfolio includes two demo videos totaling ~52MB uncompressed. This significantly impacts page load time. Compression scripts already exist in `dev/scripts/` but haven't been executed. Target: each video under 10MB while maintaining acceptable visual quality.

---

## Objective

Compress both video files in `media/videos/` to under 10MB each using the existing compression tools or ffmpeg directly.

---

## Inputs

| Input | Type | Location |
|-------|------|----------|
| Mental health demo video | mp4 | `media/videos/mental_health.mp4` (~38MB) |
| Sports retail demo video | mp4 | `media/videos/sports_retail.mp4` (~14MB) |
| Compression bash script | sh | `dev/scripts/compress_videos.sh` |
| Compression python script | py | `dev/scripts/movie_compressed.py` |

---

## Required Outputs

| Output | Type | Location |
|--------|------|----------|
| Compressed mental_health video | mp4 | `media/videos/mental_health.mp4` |
| Compressed sports_retail video | mp4 | `media/videos/sports_retail.mp4` |
| Task report | md | `docs/claude_tasks/reports/YYYY-MM-DD_05_compress_videos_report.md` |

---

## Steps

1. Check current file sizes: `ls -lh media/videos/`
2. Read `dev/scripts/compress_videos.sh` to understand existing compression approach
3. Check if `ffmpeg` is installed: `ffmpeg -version`
4. If ffmpeg available: compress using H.264 with CRF 28-32, target <10MB each
   ```bash
   ffmpeg -i input.mp4 -c:v libx264 -crf 30 -preset slow -c:a aac -b:a 128k output.mp4
   ```
5. If ffmpeg not available: try the Python script, or report blocker
6. Back up originals before overwriting (rename to `.mp4.bak`)
7. Verify compressed files play correctly
8. Report before/after sizes

---

## Validation

- [ ] `mental_health.mp4` < 10MB
- [ ] `sports_retail.mp4` < 10MB
- [ ] Both videos play correctly in browser
- [ ] Visual quality is acceptable (no extreme artifacts)
- [ ] Original backups exist as `.mp4.bak` until Cristobal approves

---

## Constraints

- Do NOT commit the `.mp4.bak` backup files
- Do NOT modify TODO.md
- Deliver task report with before/after file sizes
- If ffmpeg is not available, report as blocker — do NOT install without approval
- Persist compression metrics to MCP memory

---

*Spec written by: Claude Desktop | Date: 2026-03-24*
