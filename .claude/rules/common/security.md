# Security Rules

## Content Security
- No inline JavaScript in HTML attributes (no `onclick`, `onload`, etc.)
- External scripts loaded from trusted CDNs only
- Always use `rel="noopener noreferrer"` on external links with `target="_blank"`
- No user-generated content rendered without sanitization

## Asset Integrity
- CDN resources should use Subresource Integrity (SRI) hashes when available
- Never load scripts from untrusted third-party sources

## Secrets Management
- NEVER hardcode API keys, tokens, or credentials in source code
- No sensitive data in HTML comments
- `.env` files must be in `.gitignore`

## Input Handling
- If forms are added: validate all inputs client-side AND server-side
- Sanitize any user input before rendering in DOM
- Use `textContent` instead of `innerHTML` when inserting user-provided text

## Service Worker
- Cache versioning prevents serving stale/compromised assets indefinitely
- Review cached resources on each version bump
