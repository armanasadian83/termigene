# Termigene / ترمیژن

Persian RTL studio website for web development, Windows, iOS, Android, SEO and Instagram content.

## Development

Existing dependencies use Yarn 1.22.22 and the tracked yarn.lock.

```powershell
node node_modules/react-scripts/scripts/start.js
```

## Build

```powershell
$env:CI='true'
node node_modules/react-scripts/scripts/build.js
```

Output: `build/`. Static hosting must provide SPA fallback to `index.html` for direct links.
For the current workspace, `node ../preview.cjs` serves that build at http://127.0.0.1:3000.

## Tests

```powershell
$env:CI='true'
node node_modules/react-scripts/scripts/test.js --watchAll=false --runInBand --cacheDirectory=node_modules/.cache/termigene-jest --no-cache
```

Jest mappings in package.json support the project's existing React Router 7 with CRA's older Jest resolver. setupTests.js supplies TextEncoder/TextDecoder in jsdom.

## Routes

- `/`: introduction, services, about, process, FAQ
- `/service`: service directory
- `/service/web`, `/service/windows`, `/service/ios`, `/service/android`, `/service/seo`, `/service/instagram`: full service scopes and deliverables
- `/contact?service=web` (or any other service id): project request with service selection

## Request delivery

Click-to-call contacts: 09197522136 and 09228372654. The form validates input but delivery is not connected. Valid submission reports an accurate delivery error. Draft storage, restore and download controls have been removed; input stays only in React state while this form is mounted. Connect a real receiving channel when the owner supplies it.

## Continuation and approval

Read `PROGRESS.md` and `AGENTS.md` before further work. The owner explicitly approved publishing the reviewed redesign on 2026-10-16. For subsequent redesigns, obtain preview approval before publication. Preserve the existing hosting project identity when publishing.

## Portfolio pages and metadata

The case study is at `/portfolio/ogenetech`, with an index at `/portfolio` and a short teaser on the homepage. Content lives in `src/portfolio.js`, page components in `src/PortfolioPages.jsx`, route SEO metadata in `src/portfolio-metadata.json`.

`yarn build` runs the `postbuild` metadata generator automatically. If calling CRA directly with `node node_modules/react-scripts/scripts/build.js`, run `node scripts/build-page-metadata.cjs` immediately afterwards. This writes title/description/share tags and project JSON-LD into the HTML of both portfolio routes; React still renders the body in the browser.

The outer `preview.cjs` serves directory index files for those routes and SPA fallback for other URLs. Review evidence and limitations: `../qa/ogenetech-analysis-fa.md`. No private admin access or live purchase was performed. Canonical URLs should be finalized only when the deployment hostname is confirmed.

Nutrinext case study: /portfolio/nutrinext, implemented in src/NutrinextPages.jsx. Its screenshot is supplied by the owner; completed website and ongoing platform development are described separately. Route metadata and CreativeWork schema are generated alongside the other pages.


Business services: /service/marketing, /service/business, /service/crm, /service/training. Content: src/business-content.js. Team experience pages: /portfolio/experience/isiran-training, /portfolio/experience/parsana-consulting, /portfolio/experience/telecom-experience. These are attributed as team professional experience, distinct from studio development projects. Public copy must omit personal name, education and years of experience per owner instructions.

## Bot development and catalogue

- `/service/telegram` and `/service/bale`: bot development, scope, delivery and preselected contact requests.
- Platform logos and attribution: `public/platforms/`.
- Current six-page Persian sales catalogue: [Download PDF](docs/Termigene-Catalogue.pdf). Includes services, project examples, team experience and both clickable contact numbers on every page.
