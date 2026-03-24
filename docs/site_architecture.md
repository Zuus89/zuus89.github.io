# Site Architecture — Portfolio Website

> SSOT for site structure. Updated by Mimir agent / Claude Desktop.
> Updated when pages, navigation, or asset organization changes.

---

## Site Map

```
cristobalelton.com/
├── index.html                          ← Homepage (landing + project grid)
├── projects.html                       ← Extended projects showcase
├── earthquake-azure-data-pipeline.html ← Project detail (tabbed: README)
└── retail-analytics-sql.html           ← Project detail (tabbed: README + SQL)
```

---

## Page Definitions

| Page | File | Status | Purpose |
|------|------|--------|---------|
| Homepage | `index.html` | Live | Full-screen intro + 8 project cards + contact footer |
| Projects | `projects.html` | Live (has bugs) | Extended project showcase (duplicates index cards) |
| Earthquake Pipeline | `earthquake-azure-data-pipeline.html` | Live (has bugs) | Project detail with Markdown README rendering |
| Retail Analytics | `retail-analytics-sql.html` | Live (has bugs) | Project detail with README + SQL code tabs |

---

## Navigation Structure

```
Header (sticky on scroll)
├── Logo → index.html
├── Home → index.html
├── Mental Health Dashboard → GitHub (external)
├── Earthquake Data Pipeline → earthquake-azure-data-pipeline.html
├── Sporting Goods Pipeline → GitHub (external)
├── Retail Analytics SQL → GitHub (external)
├── Others → projects.html
└── Social Icons: LinkedIn, GitHub, WhatsApp, Email

Mobile: Right-side slide panel with same links
```

---

## Asset Organization

```
media/
├── covers/              ← Project thumbnail images
│   ├── earthquake_cover.png
│   ├── retail_sql_cover.jpg
│   ├── spotify_cover.jpg
│   ├── skinautica_cover.jpg
│   ├── london_cover.jpg
│   ├── lego_cover.jpg
│   ├── overview_page.png
│   └── preview_card.jpg (social media OG image)
├── videos/              ← Project demo videos
│   ├── mental_health.mp4
│   └── sports_retail.mp4
├── backgrounds/         ← Site background assets
│   ├── bg.jpg
│   └── overlay.png
└── icons/
    └── favicon.ico

assets/
├── css/                 ← Compiled stylesheets
│   ├── main.css
│   ├── performance.css
│   ├── noscript.css
│   └── fontawesome-all.min.css
├── sass/                ← SASS source
│   ├── main.scss
│   ├── base/ (reset, page, typography)
│   ├── components/ (actions, button, form, icon, image, list, row, section, table)
│   ├── layout/ (header, nav, footer, intro, wrapper)
│   └── libs/ (vars, mixins, functions, breakpoints, grids)
├── js/                  ← JavaScript
│   ├── main.js
│   ├── performance.js
│   ├── jquery.min.js
│   ├── jquery.scrollex.min.js
│   ├── jquery.scrolly.min.js
│   ├── browser.min.js
│   ├── breakpoints.min.js
│   └── util.js
└── webfonts/            ← Font Awesome icon fonts

resources/
├── documents/
│   └── Cristobal_Elton_CV.pdf
└── project-files/
    ├── earthquake-azure/
    │   └── README.md
    └── retail-analytics-sql/
        ├── README.md
        └── commercial_queries.sql
```

---

## Project Card Pattern

Each project is displayed as an article card:

```html
<article>
  <header><h3><a href="...">Project Title</a></h3></header>
  <div class="image fit"><!-- image, video, or embed --></div>
  <div class="tech-tags">
    <span class="label">Tech 1</span>
    <span class="label">Tech 2</span>
  </div>
  <p>Description</p>
  <ul class="actions special">
    <li><a href="..." class="button">View Project</a></li>
  </ul>
</article>
```

---

## Responsive Breakpoints

| Name | Range | Layout |
|------|-------|--------|
| xxsmall | ≤360px | Single column, compact |
| xsmall | 361-480px | Single column |
| small | 481-736px | Single column, larger text |
| medium | 737-980px | Two columns |
| large | 981-1280px | Multi-column grid |
| xlarge | 1281-1680px | Full grid |
| default | >1681px | Max-width container |

---

## Performance Features

| Feature | Implementation | File |
|---------|---------------|------|
| Lazy loading | IntersectionObserver | `assets/js/performance.js` |
| Service Worker | Cache-first (v1.2) | `service-worker.js` |
| Critical CSS | Separate performance.css | `assets/css/performance.css` |
| Font optimization | Preload + display:swap | `<head>` in HTML files |
| Reduced motion | `prefers-reduced-motion` query | `assets/css/main.css` |

---

## Known Path Issues

| Wrong Path | Correct Path | Affected Files |
|-----------|-------------|----------------|
| `images/` | `media/covers/` | projects.html |
| `proyect_scripts/earthquake-azure/` | `resources/project-files/earthquake-azure/` | earthquake detail page |
| `proyect_scripts/retail-analytics-sql/` | `resources/project-files/retail-analytics-sql/` | retail detail page |

---

*Last updated: 2026-03-24*
