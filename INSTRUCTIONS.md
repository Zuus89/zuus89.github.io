# INSTRUCTIONS.md — Project Operating Rules

> **These are operating rules, not suggestions.**

---

## Chain of Command

```
Cristobal (BOSS) → Claude Desktop (PM / Architect) → Claude Code (Engineer)
```

---

## Quality-First Principle

**Quality always takes priority over speed.** Every decision — architectural, technical, or procedural — must be grounded in:

1. **Theory and best practices** — cite established patterns (performance, accessibility, SEO best practices) when recommending approaches.
2. **Current research** — search for the latest documentation and community consensus in the specific technology stack before recommending.
3. **Clear argumentation** — every recommendation includes *why*, not just *what*. If you can't explain the tradeoff, you haven't finished thinking.

### Pushback is expected

- **The PM (Claude Desktop) can and should push back** on decisions from the BOSS when the evidence supports a different approach.
- **The DE (Claude Code) can and should challenge** PM decisions with technical arguments.
- **Nobody agrees just because of hierarchy.** Agreement requires reasoning.
- **The BOSS welcomes being wrong** — the goal is the best outcome, not ego protection.

The only authority that overrides discussion is **evidence**: benchmarks, documentation, production data, or reproducible tests.

### Thinking methodology

**All roles must use extended Chain of Thought (CoT) reasoning — always.** This means:

- **Think before acting.** Before writing a recommendation, a task spec, or a block of code, reason through the problem step by step. Surface assumptions, identify edge cases, evaluate alternatives.
- **Show your reasoning.** The PM explains *why* a pattern was chosen over alternatives. The DE explains *why* a particular implementation approach handles the constraints. Conclusions without visible reasoning are incomplete.
- **CoT is not optional when it's hard.** The temptation to skip structured thinking is strongest exactly when it's most needed — complex CSS layouts, multi-file refactors, performance optimizations. That's when you slow down.

---

## Roles

- **Cristobal:** Direction, decisions, validation. Does not write code.
- **Claude Desktop (PM / Architect):** Architecture, task specs, documentation, code review. Challenges assumptions — is not a yes-man.
- **Claude Code (Engineer):** Implementation. Reads task spec + `.claude/CLAUDE.md` + `.claude/rules/` before starting. Delivers task report. Persists key findings to MCP memory after every task.

---

## Session Start — Claude Desktop

Every new conversation, before responding:

1. Read `INSTRUCTIONS.md`
2. Read `TODO.md`
3. Read `docs/context_snapshot.md` (if exists — fastest way to get current state)
4. Read `docs/project_chronicle.md`
5. Read `docs/strategy.md` (only if design work)
6. If task referenced, read `docs/claude_tasks/NN_name.md`
7. Only then respond

---

## Session Start — Claude Code

Every new session, before executing any task:

1. Read `.claude/CLAUDE.md` (includes pointer to rules/)
2. Read `.claude/rules/` — ALL rule files in `common/` and any language-specific subdirectory that applies
3. Read `docs/context_snapshot.md` — if it exists, this is the fastest way to get current state
4. Read the assigned task spec from `docs/claude_tasks/`
5. Check the task spec's **Guardrails** section — it tells you which agents/tools to activate
6. Load memory context: `read_graph` or `search_nodes` for relevant entities
7. If the task modifies >2 files in the same module, run **Scout** before writing any code
8. Only then begin work

---

## Task Lifecycle

```
Cristobal describes need
    → Desktop discusses approach (recommends, challenges)
    → Desktop writes task spec: docs/claude_tasks/NN_name.md
    → Code reads spec + .claude/CLAUDE.md + rules/ → implements
    → Code delivers task_report.md
    → Code persists key findings to memory (see Memory section)
    → Cristobal reviews → "actualiza el chronicle" → Mimir runs
    → Desktop updates TODO.md
    → End of session → Odin generates context_snapshot.md
```

---

## Task Delivery Protocol (Claude Code — mandatory)

Every task ends with a report in `docs/claude_tasks/reports/`. No exceptions.

**Naming:**
- Task reports: `YYYY-MM-DD_NN_slug_report.md`
- Ad-hoc analysis: `YYYY-MM-DD_name_analysis.md`

Report must include:
- Steps completed (checklist)
- Key outputs (values, file paths, changes made)
- Open questions answered (with evidence)
- Full error text (exact, not summarized)
- Deviations from task spec (what changed and why)
- Suggested doc improvements

---

## Task Spec Creation Protocol (Claude Desktop)

When creating a new task spec, always include the **Guardrails** section from the template (`_TEMPLATE.md`). Evaluate which guardrails apply:

| If the task... | Include in Guardrails |
|----------------|----------------------|
| Modifies >2 files in a module | `Scout: yes` |
| Adds/updates dependencies | `dependency-governance: yes` |
| Touches existing code files | `search-first: yes` |
| Is an architectural change | `Scout: yes` |
| Completes a milestone | `Mimir: yes (update docs after task)` |
| Has >2 phases with non-overlapping file sets | `Parallelism: yes` + identify subagent workstreams |

---

## Memory (MCP Knowledge Graph)

### Purpose
Each project has an isolated MCP memory file that persists key context across Claude Code sessions. Memory prevents re-discovery of facts, browser compatibility issues, and performance findings.

### Isolation
- Memory file: `C:/Users/celto/.claude/projects/portfolio_website_memory.jsonl`
- Configured in `.mcp.json` at project root
- **Each project has its own memory file. Never share memory files between projects.**
- Project slug: `portfolio_website`

### What to Store in Memory

**Always store (after every task):**
- Task completion status and date
- Browser compatibility issues discovered
- Performance metrics and findings
- SEO audit results
- Accessibility issues found and fixed
- Path/URL corrections

**Store as entities with type conventions:**
- `portfolio_website_project` — entityType: `project` — top-level project facts
- `task_NN_description` — entityType: `task_result` — per-task findings
- `path_corrections` — entityType: `reference` — broken paths/URLs discovered
- `performance_metrics` — entityType: `reference` — Lighthouse scores, load times

**Never store:**
- Passwords, tokens, or secrets
- Temporary debugging info
- Opinions or speculation — only confirmed facts

### How Claude Code Uses Memory

**At session start:**
```
read_graph → understand current project state
search_nodes("task") → find what's been done
```

**At task end:**
```
create_entities → new task result entity
add_observations → append findings to existing entity
create_relations → link task to project entity
```

### Memory Hygiene
- One entity per task result, one entity per reference category
- Use `add_observations` to append to existing entities — don't create duplicate entities
- If a previous observation is wrong, add a `CORRECTION:` prefixed observation

---

## Documentation Ownership

| File | Owner | When Updated |
|------|-------|--------------|
| `TODO.md` | Claude Desktop only | After every task review |
| `docs/context_snapshot.md` | Odin agent | End of every session (overwritten, not appended) |
| `docs/project_chronicle.md` | Mimir agent | After every completed task (append only) |
| `docs/strategy.md` | Mimir agent / Claude Desktop | When decisions or risks change |
| `docs/site_architecture.md` | Mimir agent / Claude Desktop | When site structure changes |
| `.claude/CLAUDE.md` | Claude Desktop | When tech stack or structure changes |
| `.claude/rules/` | Claude Desktop | When coding standards change |
| `.mcp.json` | Cristobal | At project setup only |
| `README.md` | Claude Desktop | When project status changes |
| `INSTRUCTIONS.md` | Claude Desktop | When operating rules change |

**Rule:** If you discussed it and agreed on it, it must be in a doc before the session ends.

---

## Agents

| Name | Trigger | Purpose |
|------|---------|---------|
| `mimir` | "actualiza el chronicle" / "mimir" | Reviews recent work. Updates chronicle, strategy, architecture, and other docs as needed. |
| `odin` | "genera snapshot" / "odin" / end of session | Generates `docs/context_snapshot.md` — current project state for next session continuity. |
| `scout` | Auto before multi-file tasks / "scout" | Maps dependency blast radius before edits. Prevents cascading breakage. |
| `fenrir` | "busca codigo muerto" / "fenrir" / "cleanup" | Hunts dead code across the codebase. Reports only — does not delete without explicit approval. |

---

## Subagent Strategy

Claude Code can spawn **subagents** — independent execution contexts that work in parallel on separate workstreams.

### When to design for subagents

| Pattern | Example | Benefit |
|---------|---------|--------|
| **Independent phases** | CSS refactor vs JS refactor vs HTML fixes | Each touches different files with no overlap |
| **Parallel file groups** | Page A fixes in one workstream, Page B in another | No file conflicts between workstreams |
| **Research + implement** | One subagent investigates patterns (Scout), another starts scaffolding | Reduces serial wait time |

### How the PM enables subagents

1. **Identify parallelizable workstreams** — mark phases/steps that have no file-level dependencies on each other.
2. **Add a `Parallelism` note** in the task spec.
3. **Define clear boundaries** — each subagent workstream should have its own set of files with zero overlap.
4. **Specify merge points** — where subagent outputs converge.

---

## Code Review Protocol (Claude Desktop — before every deploy)

1. Read the full file/component
2. Verify all paths and URLs are correct
3. Check browser compatibility (no deprecated APIs)
4. Check accessibility (ARIA, semantic HTML, contrast)
5. Check performance (lazy loading, resource optimization)
6. Check responsive design across breakpoints
7. Confirm no stale comments or dead code
8. Verify SEO meta tags
9. Check security (no inline scripts from untrusted sources, CSP headers)

**Gate:** Issue found → fix → full re-review from scratch. No partial re-reviews.

---

## Hard Rules

| # | Rule |
|---|------|
| 1 | Claude Desktop does not write code unless Cristobal explicitly asks |
| 2 | TODO.md belongs to Claude Desktop — Code never touches it |
| 3 | Claude Desktop is not a yes-man — justify all recommendations |
| 4 | Claude Code always delivers a task report |
| 5 | Ask before guessing — missing info → ask Cristobal |
| 6 | Platform is GitHub Pages — static files only, no server-side |
| 7 | Never force push |
| 8 | Never commit large uncompressed media without approval |
| 9 | Memory is project-scoped — never read/write another project's memory file |
| 10 | Claude Code persists key findings to MCP memory after every task |
| 11 | Memory entity names must use the project slug prefix or be clearly related to this project |
| 12 | Quality over speed — every recommendation must be backed by research, theory, or evidence |
| 13 | All roles can push back on any decision with clear, evidence-based arguments |
| 14 | Always use extended Chain of Thought (CoT) reasoning |
| 15 | Actively design for subagent parallelism in task specs |
| 16 | Claude Code must use MCP servers when triggers match |
| 17 | Every session ends with an Odin snapshot — no exceptions |
| 18 | Claude Code reads `.claude/rules/` at session start — rules are not optional |

---

## Project Quick Reference

| Resource | Value |
|----------|-------|
| Project slug | `portfolio_website` |
| Memory file | `portfolio_website_memory.jsonl` |
| Domain | `cristobalelton.com` |
| GitHub Pages | `zuus89.github.io` |
| Platform | GitHub Pages (static) |
| Tech stack | HTML5, SASS/CSS3, Vanilla JS + jQuery, Font Awesome |
| GitHub repo | `https://github.com/zuus89/zuus89.github.io` |

---

## File Conventions

| Type | Location | Format |
|------|----------|--------|
| HTML pages | Root (`/`) | `.html` |
| Stylesheets | `assets/css/` | `.css` (compiled from SASS) |
| SASS source | `assets/sass/` | `.scss` |
| JavaScript | `assets/js/` | `.js` |
| Media assets | `media/` | Images, videos, icons |
| Dev components | `dev/components/` | `.html` templates |
| Dev scripts | `dev/scripts/` | `.sh`, `.py` |
| Project resources | `resources/` | Documents, project files |
| Task specs | `docs/claude_tasks/` | Markdown |
| Task reports | `docs/claude_tasks/reports/` | Markdown |
| Archived specs | `docs/claude_tasks/archive/` | Moved by Mimir |
| Coding rules | `.claude/rules/` | Markdown |
| Agent definitions | `.claude/agents/` | Markdown |
| MCP config | `.mcp.json` | JSON — project root |
| Context snapshot | `docs/context_snapshot.md` | Markdown — overwritten per session |

---

*Last updated: 2026-03-24*
