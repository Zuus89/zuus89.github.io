# Testing Rules

## Test Priority (what to verify first)
1. All pages load without console errors
2. All links resolve (no 404s)
3. All images and media load correctly
4. Responsive layout at all breakpoints
5. Navigation works on mobile and desktop
6. Interactive elements (tabs, menus, scroll effects)
7. Service Worker caching behavior

## Manual Testing Checklist
- [ ] Open each HTML page in browser
- [ ] Check browser console for errors
- [ ] Test at mobile, tablet, and desktop widths
- [ ] Test all navigation links
- [ ] Test project card links (internal + external)
- [ ] Test tab switching on project detail pages
- [ ] Test contact links (email, WhatsApp, LinkedIn)
- [ ] Verify lazy loading triggers on scroll

## Automated Checks (when build tools are added)
- HTML validation (W3C validator)
- CSS validation
- Lighthouse audit (Performance, Accessibility, SEO, Best Practices)
- Link checker for broken URLs

## What NOT to Test
- Third-party library internals (jQuery, Font Awesome)
- Exact pixel-perfect styling across browsers
- Browser-specific quirks that don't affect usability
