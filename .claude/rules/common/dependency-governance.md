# Dependency Governance Rule

## Before adding ANY new library/plugin:

1. **Check if it's already in the project** — don't add duplicates
2. **Can this be done with vanilla CSS/JS?** — prefer native solutions over new dependencies
3. **Verify the dependency** — manually check:
   - Last publish date (reject if >1 year stale)
   - Source repo for open security issues
   - Download/usage metrics
4. **Justify the dependency** — document why it's needed in the task report
5. **Pin the version** — use exact version in any package config

## Before updating an existing dependency:

1. Read the CHANGELOG for breaking changes
2. Check target version for vulnerabilities
3. Test all pages after updating

## Hard rules:
- NEVER add a dependency without explaining WHY in the task report
- Prefer CSS solutions over JS solutions (animations, transitions, scroll behavior)
- Prefer vanilla JS over jQuery for new functionality
- Document new dependencies in the task report
- CDN URLs must point to specific versions, not `latest`
