# MCP Usage — When and How to Use Each Server

## Available MCP Servers

Configured in `.mcp.json` at project root.

### 1. Memory (Knowledge Graph) — REQUIRED

**When:** Every session start and end. After every completed task.

**Session start:**
```
read_graph                           → understand current project state
search_nodes("task")                 → find what's been done
search_nodes("path_corrections")     → avoid repeating path mistakes
search_nodes("performance")          → recall Lighthouse findings
```

**After completing a task:**
```
create_entities → new task_result entity with findings
add_observations → append discoveries to existing entities
create_relations → link task to project entity
```

**What to store:**
- Task completion status + date + key findings
- Path corrections (wrong URLs, broken references)
- Performance metrics discovered during testing
- Browser compatibility issues
- SEO and accessibility findings

**What NOT to store:**
- Passwords, tokens, secrets
- Speculation or assumptions
- Duplicate information already in task reports

**Entity naming convention:**
- `portfolio_website_project` — top-level project facts
- `task_NN_description` — per-task findings
- `path_corrections` — living document of path/URL fixes
- `performance_metrics` — Lighthouse scores, load times

---

## Rule: Don't Ignore MCPs

If a task matches an MCP trigger above and you skip it, explain why in the task report. The MCPs exist to prevent specific failure modes:

- Skipping Memory → next session re-discovers the same broken path
