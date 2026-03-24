# Git Workflow Rules

## Commit Messages
- Use conventional commits: `feat:`, `fix:`, `refactor:`, `docs:`, `test:`, `chore:`
- Scope in parentheses: `fix(projects): correct image paths`
- Present tense, imperative mood: "add feature" not "added feature"
- Reference task number when applicable: `fix(projects): correct image paths (Task 01)`

## What to Commit
- Working code only — every commit should leave the site functional
- One logical change per commit — don't mix features with refactors
- Include related CSS changes in the same commit as the HTML change

## What NOT to Commit
- `.env` files or any file containing secrets
- `node_modules/`, `__pycache__/`, `dist/`
- IDE-specific files (`.vscode/settings.json`)
- OS files (`.DS_Store`, `Thumbs.db`)
- Uncompressed video files (>20MB each)
- Context snapshots (`docs/context_snapshot.md`)

## Branching (when applicable)
- `main` — stable, auto-deploys to GitHub Pages
- `feat/task-NN-description` — feature branches per task
- `fix/description` — bug fixes

## Never
- Force push
- Commit directly to main without review (for multi-person projects)
- Leave merge conflicts unresolved
