# SEO maintenance

The public site is https://new-termigene.tangy-mars-7643.chatgpt.site/ (display name: Termigene). Public access was explicitly approved by the owner on 2026-10-23.

## Build and verify

Run `yarn build` then `yarn verify:seo`. When invoking CRA directly, follow with `node scripts/build-page-metadata.cjs` and `node scripts/verify-seo.cjs`.

- `src/site-config.json`: canonical origin, language, real contact numbers and social image. If a custom domain is connected later, update this origin and redirect the previous origin at the hosting layer. Do not publish mixed-domain canonicals.
- `src/page-seo.js`: shared metadata, route inventory, breadcrumbs and structured data. All known public routes are prerendered from the actual React components; unknown paths use a noindex 404 page.
- `src/service-faq.js`: visible service questions, also used by FAQ structured data. Do not add invented prices, delivery times, reviews or performance claims.
- `scripts/load-source.cjs`: uses the Babel toolchain already included in react-scripts to render JSX at build time; no separate duplicate HTML application.
- `scripts/build-page-metadata.cjs`: complete initial HTML for 24 routes plus sitemap.xml, robots.txt, social tags and schema. It is safe to rerun. No fabricated lastmod dates or keyword metadata.
- `src/index.js`: hydrates existing HTML, or mounts normally in development. Contact query preselection is applied after hydration to prevent mismatches.
- `scripts/verify-seo.cjs`: checks all page headings, canonical uniqueness, title uniqueness, descriptions, schemas, internal link destinations, image assets, sitemap and noindex 404.
- `src/seo-hydration.test.jsx`: confirms the server HTML hydrates without replacement or recoverable errors, including query-prefilled contact.

## Hosting

The active release checkout is `../new-termigene/`, project `appgprj_6ad36cc5f0e88191b004daf07283c711`. The original development checkout hosting manifest retains the older Site identity; do not deploy it accidentally. Refresh the active release's dist from validated build output, retain its manifest, and use the official Sites source/package workflow. Static not_found_handling must be 404-page. On this Windows host use process-only Git Bash PATH and TAR_OPTIONS=--force-local.

## Tasks requiring the owner's Google/domain access

1. Add the current public URL-prefix property in Google Search Console, or the domain property after a domain is owned and connected.
2. Verify ownership using the method supplied by Google. No verification token has been provided, so no verification tag is fabricated.
3. Submit /sitemap.xml and inspect the homepage, a service and a project using URL Inspection.
4. Follow Page Indexing, search queries, clicks and conversions. Indexing and rankings are not guaranteed by technical readiness.
5. Collect real Core Web Vitals field data after public traffic exists. No Lighthouse or field scores have been invented.

Structured data identifies the actual organization, supported services, visible FAQs and breadcrumbs. It does not assert LocalBusiness premises, certifications, prices, ratings, partnerships or guaranteed rich results. Education, personal name and tenure exclusions remain in force.
