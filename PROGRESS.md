# Termigene — progress and continuation

Last updated: 2026-10-15 (Asia/Tehran)

## Current scope and approval boundary
- Redesign the existing single Termigene website incrementally, keeping its Persian RTL identity and the introduction/services/request structure.
- Brand approved by user: English **Termigene**, Persian **ترمیژن**. Logo: plain white circle, symbolizing the edge of the observable universe and the aspiration to reach it and go beyond. Wordmark: light Termigene text followed by the circle on its right, as in the supplied Fugen reference.
- Palette: black and purple; dark fantasy atmosphere.
- Preserve the original three rotating hero sentences; soften timing. Add subtle animations.
- User requires a reviewable preview BEFORE publishing. Do not commit/push/deploy until user approves the design.
- GitHub destination: https://github.com/armanasadian83/termigene
- The user's latest general instruction refers to three websites, but the current concrete brief identifies only Termigene. No additional websites have been created.
- Before new work, read this file and inspect the relevant code. Update this file after each meaningful stage.

## Latest review change (2026-10-10)
- User requested replacing all service-card CTA text with «بیشتر بدانید».
- Shared ServiceCards component updated; applies to the home page and service directory, all six services.
- Production rebuild succeeded; local static preview now serves the updated copy. JavaScript artifact: main.7edc3533.js. No commit/push/deployment performed.
- Missing logo diagnosed and fixed: local preview returned SVG as application/octet-stream; added image/svg+xml and no-store response headers. Preview initially restarted in session 53835; it later stopped. Recovered as a hidden background Node process (PID 8764). Both symbol and wordmark endpoints verified HTTP 200 with image/svg+xml. CTA symbol opacity increased from 0.07 to 0.24 and placed on layer 0 behind content layer 1; pointer events disabled. Production rebuild succeeded (CSS main.01ad855c.css). Browser visual confirmation awaits user refresh; no browser-policy workaround attempted.

## Completed work
- Inspected original React app, services, nav, footer and request form.
- Confirmed real Git checkout is `source/` (the outer directory is a separate repository).
- Verified source/origin points to the requested GitHub repository.
- Built redesigned source in `source/src/app.jsx`, `content.js`, and `Css files/home.css`.
- Created all six service detail routes: website, Windows, iOS, Android, SEO, Instagram content.
- Added service-specific request links and clear scope/deliverable copy.
- Added About, cooperation process, FAQ, useful footer links and 404 handling.
- Changed active brand and page metadata to Termigene / ترمیژن.
- Restored the original rotating hero sentences with an 18-second eased loop, hover/focus pause and reduced-motion support.
- Added cosmic boundary glow, subtle stars, card hover and IntersectionObserver entrance effects. Replaced the earlier T/star draft mark and gothic portal with the approved circular identity.
- Replaced false form submission success with validated local draft save, restore, delete and text download.

## Partially completed
- Final brand-aligned production build succeeded. All 11 regression tests passed after the logo/worldview changes. Latest build artifacts: main.34ec8df7.js and main.97ff8c0f.css. Latest tests: 14 passed after the Ogenetech portfolio feature.
- Local preview server running at http://127.0.0.1:3000 (hidden background Node process PID 21228 (latest 2026-10-15 snapshot)); HTTP 200 verified with network access.
- Latest automated functional tests passed: 14/14. Browser visual verification of the updated local site remains unconfirmed under the prior browser access restriction; user preview review is pending.

## Remaining tasks
1. Await user review/approval of the running local preview; final rebuild and regression tests are complete.
2. User must review desktop/mobile visuals. Six service routes and their request destinations passed automated tests.
3. Invalid form, valid Persian-digit phone, storage, restoration and deletion passed automated tests. Download logic is implemented; browser download is not yet verified.
4. Menu toggle, Escape and navigation passed tests. FAQ/anchors/reduced-motion implementation awaits real browser visual review.
5. Show running local preview to user. New screenshots cannot be captured because browser access is blocked; historical qa images show the old version only.
6. After explicit design approval: synchronize approved source with VS Code, Git and the specified GitHub repository; deploy the existing Site if authorized in that follow-up.
7. Connect real request delivery only after the user supplies contact details or chooses a receiving service.

## Important decisions
- Kept the existing React/Create React App setup and existing Persian font; did not migrate frameworks.
- Removed active Bootstrap imports to avoid overriding the new design; legacy components/assets remain preserved but unused by the new app.
- Cosmic dark fantasy visual uses code-native SVG/CSS and the approved white circular boundary. The original JPEG references are preserved unchanged in source/public/brand/references; SVG symbol and renamed wordmark live in source/public/brand. No T/star monogram. Hero and About copy reflect the edge of the observable universe and going beyond it.
- No invented testimonials, clients, portfolio cases, statistics or guaranteed SEO outcomes.
- Contact details are deferred at the user's request. Form explicitly says data stays in this browser and is NOT sent.
- Existing hosting identity: `appgprj_6ac7c872d79481918fb9e5d5f00c192f`; preserve identity and audience on eventual publication.
- Existing Site info in `qa/verification-fa.md` is historical and must be refreshed before publication.

## Known bugs/issues and verification limits
- Sandbox socket access was resolved by starting the preview server with approved network access. HTTP readiness is verified. Browser getTab action was blocked by browser security policy; do not bypass this restriction through alternate browser automation.
- Build succeeds. Non-fatal tooling warnings remain: old caniuse data, CRA Babel dependency warning, Node fs.F_OK deprecation. Final tests exited successfully but emitted a delayed-exit/open-handles warning; no test failures.
- Animated sentence loop uses a non-focusable, aria-hidden duplicate for a smooth wrap. Keyboard focus selects the relevant slide; reduced-motion displays the three unique sentences statically.
- Real delivery and customer contact are pending user-provided details, by design.

## Run/test this website
Only one website exists in the current scope.

From `C:/Users/Admin/Documents/ChatGPT/Termigene/source`:
- Dependencies already exist in `node_modules`; lockfile is `yarn.lock`.
- Production build: `node node_modules/react-scripts/scripts/build.js` with `CI=true`.
- Development: `node node_modules/react-scripts/scripts/start.js`.
- Tests: `node node_modules/react-scripts/scripts/test.js --watchAll=false --runInBand --cacheDirectory=node_modules/.cache/termigene-jest --no-cache` with `CI=true`.
- Static preview, from the outer workspace: `node preview.cjs` serves `source/build` at http://127.0.0.1:3000, with SPA fallback for direct routes.
- Important URLs: `/`, `/service`, `/service/web`, `/service/windows`, `/service/ios`, `/service/android`, `/service/seo`, `/service/instagram`, `/contact?service=web`.
- Pending real browser checks: desktop 1280px, mobile 390px and narrow 320px; horizontal overflow; FAQ/anchor scroll/download/visual motion/reload. Automated DOM tests are not visual browser QA.

## Continuation snapshot
Analysis report: `qa/redesign-analysis-fa.md`. Project continuity rules saved in both AGENTS.md files. README updated. No publish, push or commit has been performed. Read this document and `source/src/app.jsx` before continuing. Keep the preview approval boundary intact. Local preview serves the latest build; user should refresh the existing tab. User-requested continuity and brand rules were also saved as a small memory extension note for future sessions.


## Preview recovery (2026-10-10)
- User reported ERR_CONNECTION_REFUSED. Previous retained preview process had stopped.
- Launched preview.cjs via Start-Process with -WindowStyle Hidden and network access; PID 8764. This avoids depending on a retained command session.
- Verified homepage and wordmark asset each return HTTP 200. User should reload the existing browser tab, rather than opening more duplicate tabs.
- Logs: qa/preview-server.log and qa/preview-server-error.log. Re-check listener and process on the next session; PID is a snapshot, not a permanent identifier.
- No source redesign changes, build, commit, push or deployment in this recovery.


## Cooperation-step review (2026-10-10)
- User requested Persian numbers without leading zeros and arrows connecting stages 1 to 4.
- Shared Process component now uses ۱، ۲، ۳، ۴ in circular purple number badges, with three decorative SVG arrow connectors.
- Desktop follows RTL with left-pointing arrows. At <=850px, stages use one column and arrows point downward to keep the sequence clear.
- Original hero sentence animation and approved circular brand are preserved. Production build succeeded; preview uses main.74361b2e.js and main.460de59d.css. Source diff check passed. Visual review awaits user refresh; no commit/push/deploy.


## Navigation-chevron review (2026-10-10)
- Replaced the font-dependent ⌄ character next to خدمات ما with a 14px rounded SVG chevron using the shared icon system.
- Added inline-flex centering and a 1px optical vertical adjustment to match the neighboring Persian label.
- This remains the existing link to /service. Production rebuild succeeded; preview uses main.d6cdbab3.js and main.e1e55e28.css. No commit/push/deploy.

## Ogenetech portfolio feature (2026-10-15) — implemented, awaiting preview approval
- User requested full public-site analysis of https://ogenetech.com and a real portfolio section in Termigene.
- Add a top-nav portfolio link, a concise middle-of-home teaser, a portfolio index and a dedicated project case study. Keep detailed explanations off the homepage.
- User-confirmed project scope: custom programmed public site, a separate management website/panel, payment gateway and SnappPay setup, ongoing support availability as the client's original need, strong management satisfaction. No invented metrics or testimonial quotations.
- Live public evidence saved under qa/og-*: homepage HTML, public bundle, extracted routes/content, sitemap. 59 sitemap entries (46 course pages, six specialty pages, seven main pages); private/personal routes are excluded from active inspection.
- Research completed for public section templates, route inventory and public catalogs, with selected native Edge observations. Full authenticated flows and private/admin/payment behavior were not tested. See qa/ogenetech-analysis-fa.md for precise coverage.
- Implementation, SEO metadata, route tests, build and local preview update are complete. Remaining: user visual review/approval; final canonical/publication configuration after approval. Original circular identity, hero sentence animation and approval-before-publish boundary preserved.

### Ogenetech feature implementation checkpoint
- Public-site analysis completed and documented in qa/ogenetech-analysis-fa.md. Public source, sitemap and catalogs were inspected; native Edge observations cover home, services, shop and course listing. Private account/admin/payment transactions were not tested. Some public template sections were reviewed from public source rather than visually executed.
- Added PortfolioPages.jsx (teaser, index and case study), portfolio.js content, portfolio-metadata.json and Seo.jsx. Added nav/footer links and placed only the short teaser on the homepage after services.
- Detailed case study covers client challenge, custom site, public sections, independent admin site, support, payment/SnappPay and satisfaction without fabricated quotes/metrics.
- SEO: route title/description, OG/Twitter tags, CreativeWork JSON-LD, semantic headings and internal links; scripts/build-page-metadata.cjs emits metadata HTML for direct portfolio URLs. package.json postbuild runs it. Direct build.js invocations must run that script afterwards.
- Updated preview.cjs to serve directory/index.html before SPA fallback.
- Caught and repaired a Windows case-insensitive resolution collision: component file is PortfolioPages.jsx, content file is portfolio.js. Do not rename component to Portfolio.jsx while content file is portfolio.js.
- All 14 automated tests passed (11 previous + 3 portfolio/metadata/navigation tests). Production build and metadata generation succeeded. qa/check-portfolio-build.cjs verified both route HTML documents, descriptions/share metadata/project schema and logo. Homepage, /portfolio, /portfolio/ogenetech and project logo returned HTTP 200. Preview is a hidden background process PID 21228 (snapshot only). Current assets main.34ec8df7.js and main.97ff8c0f.css. Canonical deferred until final publishing hostname is confirmed; no SSR or search-ranking guarantee claimed.

### Final handoff for Ogenetech feature
- Preview: http://127.0.0.1:3000/portfolio/ogenetech (direct case study), /portfolio (index), / (teaser after service grid).
- Evidence and coverage: qa/ogenetech-analysis-fa.md. Test log: qa/portfolio-tests.log. Build verifier: node qa/check-portfolio-build.cjs from the outer workspace.
- Body content remains client-rendered; per-route HTML metadata is generated at build time. No canonical hostname or review/rating data has been invented.
- Local visual/mobile inspection of the new Termigene pages is not claimed; automated DOM tests, asset checks and HTTP readiness passed. Do not bypass the recorded browser restriction with another automation surface.
- No Git commit, push, deployment or edits to the Ogenetech live website were performed. Continue with user feedback or explicit approval.

## Service-card number removal (2026-10-16)
- Removed numeric labels from all six service cards in the shared ServiceCards component (homepage and service directory), and removed unused card-number styling and map index.
- Production build succeeded; regenerated portfolio route metadata. Preview assets: main.1dd0d701.js and main.e913b808.css. User can refresh the existing preview.
- No commit, push or deployment. Existing run/test instructions and pending visual approval still apply.

## Single-line service labels (2026-10-16)
- English labels on all service cards now use nowrap with no width cap. The card footer can wrap whole items on narrow screens, keeping each label and CTA intact without overlap.
- Production build succeeded; regenerated portfolio metadata. Preview CSS: main.f0ae4e25.css. Visual review remains with the user; refresh the current preview.
- No commit, push or deployment. Run/test instructions above still apply.

## Link-arrow spacing (2026-10-16)
- Reduced shared text-link arrow gap from 17px to 8px, including portfolio, FAQ and case-study links. Service-card links also use 8px; shared buttons use 10px with the mobile hero override aligned.
- Production build succeeded; portfolio metadata regenerated. Preview CSS: main.00425d0a.css. User should refresh for visual review.
- No commit/push/deployment. Existing run/test and approval requirements remain.

## Dedicated navigation pages (2026-10-16) — implementation checkpoint
- Added /about, /process and /faq with brand story, four detailed collaboration stages and 11 grouped FAQs. Existing /service, /portfolio and /contact remain dedicated destinations.
- Main navigation and footer now link to full pages. Homepage retains concise about/process/FAQ previews and onward links; original rotating hero remains intact.
- Header CTA had its own 23px gap override; reduced it to 6px.
- Added responsive information-page styles and page metadata for all navigation destinations. Verification and preview rebuild in progress; no publication authorized.

### Dedicated navigation pages — verified handoff
- Completed: /about, /process, /faq, summary sections on homepage, direct header/footer links, and 6px header CTA arrow gap. Existing service/portfolio/contact pages retained.
- 18 automated tests passed, including navigation, mobile-menu close behavior, headings, metadata and homepage summaries. Production build and metadata verification passed for 7 route documents; HTTP 200 verified for /, /about, /process and /faq with network permission.
- Current preview assets: main.22838ee1.js, main.ec83621e.css. Refresh http://127.0.0.1:3000/; new pages can be opened directly at /about, /process and /faq.
- Run: build from source with node node_modules/react-scripts/scripts/build.js, then node scripts/build-page-metadata.cjs. From outer workspace run node qa/check-portfolio-build.cjs. Test command remains in Run/test above.
- No new known functional issues. Nonfatal CRA/Browserslist warnings remain. Local visual/mobile QA is not claimed; existing browser restriction remains in force. User preview approval and real contact details remain pending; no commit/push/deploy.

## Ogenetech ongoing SEO (2026-10-16)
- User confirmed Termigene also provides SEO for Ogenetech. Added a dedicated SEO section with an in-page contents link and link to /service/seo, plus SEO mentions in homepage teaser, portfolio card, project tags/scope and descriptions used for metadata.
- No specific SEO tasks, rankings or measured results were invented. Production build and generated route metadata validation passed; preview JS main.e2c2fe80.js.
- Publication approval was withdrawn immediately after the prior approval message. Keep all changes local until a new explicit publication instruction. No commit, push or deployment occurred.
- Existing run/test instructions apply; user can refresh /portfolio/ogenetech to review. Contact details remain pending.

## Persian numbering convention (2026-10-16)
- User requires displayed section/step numbering in Persian without leading zeros. Apply this convention in future additions.
- Updated deliverable numbering across all six service detail pages and the contact guide to ۱، ۲، ۳…; adjusted their font to inherit the Persian UI font. Existing process/case-study numbering already conforms. Footer year and not-found code also use Persian digits (meaningful zeros retained).
- Build and route metadata generation succeeded. Local preview assets main.1a81189d.js and main.90d2fa74.css. No publication; existing run/test instructions and pending contact details still apply.

## Services dropdown and chevron (2026-10-16)
- Header Services now toggles a list of six service links. Last item is بیشتر بدانید linking to /service; clicking the trigger does not navigate.
- Accessible disclosure button with expanded state; closes on navigation, outside pointer, focus leaving, Escape (returns focus), and mobile nav toggle. Desktop popover and mobile inline list with bounded navigation scrolling.
- Follow-up request: chevron increased from 14px to 18px; gap reduced to 3px.
- All 20 tests passed, including dropdown destinations/dismissal/focus. Final build and 7-route metadata validation passed. Preview assets main.bec246c1.js and main.8ae008cb.css. Refresh existing preview for visual review; browser visual QA remains unverified.
- Existing run/test instructions apply. No commit/push/deploy; publication remains paused at user's request.

## Fully rounded buttons (2026-10-16)
- User requested pill-shaped buttons throughout. Applied 9999px radius to shared CTA buttons, rotating-sentence CTA links, mobile menu toggle, service trigger and form action buttons at all breakpoints.
- Production build succeeded; regenerated page metadata. Preview CSS main.21870975.css. Refresh existing preview for review; no new functional tests required for this styling-only change.
- No commit/push/deploy. Existing run/test instructions and publication hold remain applicable.

## Hero emphasis and contact presentation (2026-10-16)
- Enlarged original rotating sentences and CTA within a subtle purple panel. Shared --sentence-height drives slide sizes and animation offsets (72px desktop, 100px <=850px), retaining original text, 18s timing, focus/hover pause and reduced-motion fallback.
- Removed the temporary contact notice; guide now ends with reviewing/sending the request, and primary button says ارسال درخواست. Retained draft utilities and accurate storage privacy text.
- Delivery is still NOT connected: valid submissions save a local fallback draft and explicitly report that sending did not occur, never a false success. User-facing static notice removed; real destination/backend remains pending owner details.
- All 20 tests passed, including truthful submit feedback; production build and page metadata regenerated. Preview assets main.8ec6f08a.js and main.678fb79d.css. Visual/mobile review remains with user.
- No commit/push/deploy. Existing run/test instructions apply; publication hold remains.

## Contact form simplification (2026-10-16)
- Removed the privacy/draft note, download and restore controls as requested, including download inside feedback. Removed draft-saving/export/restore code rather than leaving hidden persistent storage. Inputs stay in component state only; prior browser drafts are not accessed or automatically deleted.
- Form retains validation, Persian-phone normalization and accurate delivery failure feedback until a real receiving channel is configured. No false success state.
- All 20 tests passed; production build and route metadata generation succeeded. Preview JS main.a8277d13.js. README updated. Existing run/test instructions apply; no commit/push/deploy.

## Preview recovery (2026-10-16)
- User reported ERR_CONNECTION_REFUSED; port 3000 had no listener. Existing build was present.
- Restarted preview.cjs as a hidden background Node process with network permission (PID 9460, snapshot only). Verified HTTP 200 for /, /contact and /brand/wordmark.svg.
- Logs remain qa/preview-server.log and qa/preview-server-error.log. Run node preview.cjs from the outer workspace to serve source/build; recheck process/listener before restarting.
- No source changes, rebuild, commit, push or deployment. Refresh existing browser tab.

## Round-the-clock service support (2026-10-16)
- Owner confirmed support is available 24 hours, seven days a week. Added prominent Persian support messaging beneath services on home/directory, in all six service-detail delivery sections, the collaboration page and FAQ copy.
- No response-time SLA or extra scope promises added. Build verification underway; publication remains on hold. Existing run/test commands apply.
- Verification complete: production build and seven-route metadata checks passed. Preview assets main.66b3bc76.js and main.364076a3.css. Refresh the preview for review; no commit/push/deploy.

## Ogenetech homepage screenshot (2026-10-16)
- Copied the user-supplied screenshot unchanged to public/projects/ogentech/ogen-homepage.png. Added a responsive, uncropped screenshot link in the homepage project teaser, portfolio card and full case study.
- Clicking opens https://ogenetech.com/ in a new tab with noopener/noreferrer; accessible label identifies the destination/new tab. Existing project-details links remain intact.
- Production build and route metadata verification passed; screenshot exists in build. Preview assets main.bbcf135b.js and main.42398b58.css. User refresh needed for visual review. Existing run/test instructions apply; no commit/push/deploy.

## Nutrinext portfolio (2026-10-16) — implementation checkpoint
- Owner supplied screenshot and project facts: custom website completed for two young founders, idea combines nutrition and computation to optimize employee food cost/value; other platforms are in development.
- Added NutrinextPages.jsx: index card, concise home teaser and /portfolio/nutrinext case study. Screenshot links to https://nutrinext.ir/ in a new tab. Image copied unchanged to public/projects/nutrinext/homepage.png.
- Added route metadata and project-specific CreativeWork schema in runtime and build generator. Copy distinguishes completed website from ongoing platform development; no measured savings, health guarantees or completed algorithm claims.
- Verification in progress; publication remains on hold.

### Nutrinext verified handoff
- All 21 tests passed, including navigation from the two-project index, live screenshot destination, in-page anchors, ongoing-development wording and Nutrinext-specific metadata/schema.
- Production build succeeded; eight route metadata documents generated and verified, including distinct Nutrinext schema and screenshot asset. Preview JS main.9d6add91.js, CSS main.c7cc132f.css.
- Review /portfolio/nutrinext and /portfolio; homepage has a concise additional teaser. Screenshot and project facts come from the user; no independent live-site or private platform audit claimed.
- Existing build/test instructions apply. Visual QA remains user review. No commit/push/deploy; contact delivery remains unconnected and publication hold remains.

## Nutrinext homepage card correction (2026-10-16)
- Replaced the plain Nutrinext homepage strip with the same portfolio-teaser structure/styles as Ogenetech: split copy/visual layout, full CTA, screenshot, tags and domain. Removed obsolete strip styles.
- Retrieved original logo assets from the public site bundle; inspected both. Full wordmark used in homepage and portfolio card: https://nutrinext.ir/static/media/improvedLogo.672811b6a52ee8ae9d97.png saved as public/projects/nutrinext/wordmark.png. Unmodified source mark also saved as logo.png.
- Production build and route metadata generation succeeded. Preview assets main.0c037b6a.js, main.88bb3ea6.css. Refresh homepage for user visual review. No commit/push/deploy; existing run/test instructions and publication hold apply.

## WordPress service expansion (2026-10-16)
- Added full WordPressService section to /service/web#wordpress only. Covers corporate/content sites, WooCommerce, responsive design, content/plugin setup, performance/security/basic SEO, training and 24/7 support; includes WordPress vs custom scope, licensing/hosting responsibilities and request CTA.
- Updated shared web-service card summary to explicitly mention WordPress and custom development. Existing custom-site offering and six-service navigation retained.
- All 21 tests passed, including WordPress content visibility only on web service and its request link. Production build and metadata generation succeeded. Preview assets main.def9cafb.js and main.6d098a52.css. Existing run/test instructions apply; user visual review pending, no commit/push/deploy.

## Dedicated custom website offering (2026-10-16)
- Expanded /service/web with CustomWebService before the WordPress section at #custom-development. Eight capability cards cover discovery/architecture, UX, frontend/backend, admin/roles, custom workflows, integrations, quality/security and SEO/extensibility.
- Added project fit, phased delivery, handover and 24/7 support explanations plus links to Ogenetech, Nutrinext and a web request. Updated the web-service introduction; WordPress content retained.
- All 21 tests passed, including custom offering cards and portfolio links. Production build succeeded; eight metadata routes regenerated and verified. Preview assets main.262bb6c3.js and main.c00f77d4.css.
- Review /service/web#custom-development. Existing run/test instructions apply. No commit/push/deploy; publication hold and pending contact delivery remain.

## Preview recovery and resilience (2026-10-16)
- Port 3000 was not listening after another connection-refused report. Error log was empty; exact shutdown cause is unconfirmed.
- Hardened preview.cjs against malformed URL decoding and file/read-stream failures (including files disappearing during a CRA rebuild). Missing build/read failures return 503 instead of unhandled stream errors killing the process; client disconnect closes the file stream.
- Restarted hidden background preview (PID 8028, snapshot only). HTTP 200 verified for /, /service/web, /portfolio/nutrinext and wordmark. Malformed URL returned 400, followed by healthy homepage 200.
- Run node preview.cjs from workspace root; logs qa/preview-server.log and qa/preview-server-error.log. Process cannot survive machine shutdown; recheck listener before relaunch. No app rebuild/commit/push/deploy.

## Business consulting, CRM and training (2026-10-16) — implementation checkpoint
- Added four service entries: marketing/sales, business analysis/consulting, CRM and organizational training. Shared directory, dropdown, footer and contact selector use the expanded service list.
- Added three individually routed team-experience entries for Isiran training, Pars-Ana consulting and telecom operations. These are explicitly professional team experience, not retroactively claimed Termigene client projects; no results, dates or logos invented.
- Homepage/about copy connects development and business services; homepage expertise teaser links to dedicated service and experience pages. Added seven route metadata records.
- User corrections: do not show the individual's name, education or years of experience. Education and tenure were removed from all new public copy before validation. Keep this constraint in later edits.
- Tests/build pending; publication remains on hold and contact delivery remains unconnected.

### Business services verified handoff
- All 33 automated tests passed: ten service scopes, new contact selections/navigation, all three experience routes and anchors, and absence of education/tenure in public about/experience copy. An existing test expectation was updated for the expanded portfolio title.
- Production build succeeded; 15 static route metadata documents regenerated and verified. Preview assets main.dce76fd1.js and main.dcde5afc.css.
- Review /service and /portfolio#team-experience; dedicated routes and content files documented in README. Visual/mobile review remains user review. Existing build/test commands apply; no commit/push/deploy.
- Pending: actual contact delivery channel and explicit publication instruction. User exclusion of name, education and years of activity remains binding.

## Click-to-call contact numbers (2026-10-16)
- Owner supplied 09197522136 and 09228372654. Added reusable ContactNumbers component in global footer, contact page and shared contact CTA sections throughout the site.
- Persian labels retain their leading phone zero; dial targets are tel:+989197522136 and tel:+989228372654. Accessible labels and minimum 44px link height; LTR number direction in RTL layout.
- Form delivery remains unconnected; valid-submit error now directs users to the available phone numbers. Adding phone links does not connect form delivery or WhatsApp.
- Production build and route metadata verification passed. Preview JS main.6c32f8ee.js, CSS main.f33331ef.css. Mobile OS dialer launch is user-device behavior, not locally verified. Existing run/test instructions apply. No commit/push/deploy.

## Contact guide removal (2026-10-16)
- Removed the three numbered instructions from /contact and their unused CSS. Contact introduction, clickable phone numbers and request form remain.
- Production build and route metadata generation succeeded. Preview assets main.c8c9955e.js and main.64682bb8.css. No new tests for this copy removal. Existing run/test instructions apply; no commit/push/deploy.

## Approved release (2026-10-16) — in progress
- Owner explicitly instructed publication to Sites, desktop VS Code, Git and GitHub armanasadian83/termigene. This supersedes the earlier publication hold for the current reviewed version.
- Existing Site appgprj_6ac7c872d79481918fb9e5d5f00c192f confirmed; owner-private audience must be preserved. GitHub main fetched; local baseline is one commit ahead with no remote divergence.
- Desktop VS Code launch requested for source/; bridge currently has no connected windows, so editor diagnostics are not verified yet.
- Sites source helper first open failed with an empty server reply; retry in progress. Continue successful release work without losing source changes.
- Contact form has no receiving backend; displayed click-to-call numbers are functional links. Do not claim actual form delivery.

### Approved release verification checkpoint
- Full final suite: 33/33 tests passed. Tightened the no-tenure test to match years rather than a substring of a real phone number. Whitespace checks pass after trimming trailing blank lines.
- VS Code bridge connected to source/ (window 063377d2-39c2-44b5-aaf9-0853ffe39929), app.jsx open and saved. No errors/warnings; two informational hints about missing React declaration types only.
- Sites source open failed three times with Empty reply from server at git.chatgpt-team.site, also reproduced without authentication. HTTP/1.1 retry did not help; temporary config removed. Existing hosted version remains unchanged, owner-private.
- Prepared Yarn 1.22.22 under outer qa/release-tools (outside application source) for the official build helper. Final build underway; GitHub source release will proceed independently of the blocked Sites transport.

## Approved release outcome (2026-10-16) — external blockers
- Completed locally: owner-approved redesign committed on main; final 33 tests pass, official Sites build helper succeeds with Yarn 1.22.22, metadata checker passes for all 15 documents. Output main.c8c9955e.js and main.64682bb8.css matches the reviewed app source.
- VS Code: source/ open in desktop; bridge confirms saved app.jsx. Diagnostics: no errors or warnings, only two React declaration hints.
- GitHub publication FAILED: git push origin main returned HTTP 403, permission denied to authenticated account chatgptbynoori-creator for armanasadian83/termigene. Remote origin/main remains unchanged. Do not claim synchronization. Need write permission for that account or user-authenticated access as an authorized account; do not change identity/permissions without user action.
- Sites publication FAILED before packaging: three official source-helper open attempts and an unauthenticated connectivity probe all returned Empty reply from server for git.chatgpt-team.site. No save/deploy was attempted with unverified source. Existing Site appgprj_6ac7c872d79481918fb9e5d5f00c192f remains version 1 at https://termigene.tangy-mars-7643.chatgpt.site with owner-private access.
- No credentials were saved to workspace files. Temporary HTTP/1.1 Git setting was removed. Yarn tools are only in outer qa/release-tools, not tracked app source.
- Resume: inspect git status/log and this report, verify GitHub write access then normal push main (no force); verify Sites Git transport recovery, request fresh source credential and run site-workflow open then package using existing identity. Build/source inputs are already validated; rerun only after changes or when publication provenance requires it. Keep the owner-private audience.
- Publication is explicitly authorized for this release; no fresh preview approval is needed merely to resume these blocked steps. Contact form delivery remains unconnected; click-to-call numbers are available.

## Hosted connection incident (2026-10-16)
- User reported `ERR_CONNECTION_CLOSED` at the hosted Site URL.
- Current Sites API confirms the existing project is active, not disabled, and still at version 1. The version-1 deployment reports succeeded; this is not confirmation that the user's current connection can load it.
- Independent Windows HTTP HEAD probe started before browser inspection returned curl 52, Empty reply from server. The restricted-shell DNS failure was not treated as a public DNS outage.
- Network snapshot: system proxy disabled; no listener found on the previously used Happ port 10809; happd service is running, but no active Happ/TUN adapter appeared in Get-NetAdapter. This suggests checking the actual Happ connection; service presence alone does not establish an active VPN.
- Browser inspection of the current failed tab was rejected by URL security policy. No alternate browser, raw automation, or content-fetch workaround was attempted after that rejection. Browser visual verification remains unavailable.
- No application code, network settings, sharing rules, commits or deployments changed during this incident. The approved redesign remains local; GitHub write access and Sites source transport blockers from the release section remain unresolved.
- Continue after user reconnects Happ or provides another working network: verify reachability using permitted methods, then resume the separately authorized release only with verified source provenance. Preserve owner-private access.

## Sales catalogue PDF (2026-10-16)
- User deferred fixing GitHub access and requested a clean, professional, modern catalogue for prospects contacted by phone. No GitHub/Sites release retry in this task.
- Created output/pdf/Termigene-Catalogue.pdf: six Persian pages (brand, digital services, consulting/training, Ogenetech, Nutrinext, cooperation/contact), black/purple identity with unchanged white circular symbol.
- Content omits personal name, education and tenure; ongoing Nutrinext platforms are identified as in development. Professional experience is attributed to team expertise. No invented measured business results.
- Both project screenshots link to the public client sites; phone numbers link to tel:+989197522136 and tel:+989228372654. All four PDF link annotations verified, six pages, approximately 1.77 MB.
- Rendered every page via Poppler and inspected the page contact sheet. Repaired unsupported separator glyphs, rerendered final PDF and inspected changed pages. Text layout checks report no overflow.
- Rebuild: bundled Python qa/create_catalogue.py. Local Persian shaping dependencies are under tmp/pdfs/lib; renders under tmp/pdfs/. Source script is retained for revisions. No application source, Git commit, push or hosted deployment changed.
- User also reported hosted ERR_CONNECTION_CLOSED again. Sites API still active/version 1; no live connection recovery claimed. Local preview HTTP 200 verified and local URL handed off; browser opening queued.

## Concise catalogue revision (2026-10-16)
- User requested less clutter, shorter useful content, no slogans and both phone numbers clearly shown on every page.
- Replaced delivered PDF with a four-page edition: direct introduction, digital services, business consulting/training, and two project examples. Removed slogans, large decorative cover art, extended process/explanation pages and repeated text.
- Added a prominent consistent contact band on all four pages with both Persian phone labels and verified tel links. Project screenshots remain linked; no unsupported results or personal education/tenure claims.
- New authoring script: qa/create_compact_catalogue.py. Final artifact remains output/pdf/Termigene-Catalogue.pdf (~1.75 MB). Earlier edition saved only as tmp/pdfs/catalogue-previous.pdf for reference; use compact script for future edits.
- All four final pages rendered and visually inspected via tmp/pdfs/compact-review.jpg. No overflow reported; phone links verified on each page. No site source change, Git commit, push or deployment.

## Catalogue row alignment (2026-10-16)
- User flagged disharmony between purple markers, headings, descriptions and separators. Reduced marker height and aligned its center with the heading; heading/description share the same right edge, and separators now end at that text edge.
- Separator vertical positions are computed from actual paragraph height and next-row spacing, balancing whitespace for one- and two-line descriptions across pages 1-3.
- Regenerated final four-page PDF, rendered all four pages and inspected aligned-review.jpg. No overflow; both phone links remain verified on each page. Rebuild with qa/create_compact_catalogue.py. No website or publishing changes.

## Catalogue cover, contents and remaining experience (2026-10-16)
- Owner clarified brand remains Termigene, using the light Fugen reference style. Added a simple cover with the original circular mark, a direct catalogue title and one short slogan; internal copy stays concise.
- Expanded to six pages: cover, clickable contents, digital services, consulting/training, Ogenetech and Nutrinext, and team professional experience (Isiran, Pars-Ana, telecom). Experience remains correctly attributed to the team, without personal name, education, tenure or invented results.
- Both clickable phone numbers remain on all six pages. Verified six pages, twelve telephone links and four internal contents destinations. Project screenshots retain external links.
- Rendered all six pages with Poppler and visually inspected expanded-review.jpg; no overflow or clipping. Rebuild using bundled Python qa/create_compact_catalogue.py; final output/pdf/Termigene-Catalogue.pdf. No website, Git or deployment changes.

## Telegram and Bale bot services (2026-10-17)
- Added two full services (/service/telegram, /service/bale) with four scope steps, delivery details, 24/7 support, automatically included in cards, navigation, related links and contact selection. Metadata generated for both routes (17 total).
- Added platform SVG logos: Bale official download and Telegram Simple Icons after official Telegram download was unreachable. Sources in source/public/platforms/SOURCES.md. Logos identify supported platforms without partnership claims.
- Updated six-page PDF digital-services page and contents with bot development, vector logos and concise scope. Both phone links remain on every page. All six pages rendered; bots-review.jpg and full changed page visually checked without overflow. Rebuild qa/create_compact_catalogue.py; svglib added under tmp/pdfs/lib.
- Production build passed (main.a447731a.js); 35 tests passed with --cacheDirectory=../tmp/jest-bots after sandbox temp-cache EPERM on first attempt. Browser visual QA not performed; preview requested for user review.
- No commit, push or hosted deployment. Existing GitHub access and Sites transport blockers remain unverified; user preview approval required for new changes.

## GitHub main update authorized (2026-10-17)
- Owner explicitly approved publishing the current update as the new main version after obtaining write access.
- Added Telegram/Bale service routes, logos, metadata and the reviewed six-page catalogue at docs/Termigene-Catalogue.pdf; README updated.
- Latest application validation: 35 tests passed; production build passed and 17 metadata route documents generated. Only documentation and a copy of the verified PDF added after those checks.
- GitHub origin fetched successfully; publishing with normal push, preserving remote history. Push outcome will be verified against origin/main.
- This request is for GitHub; hosted Sites deployment is not part of this update. Contact form backend remains unconnected.

### GitHub publication confirmed (2026-10-17)
- Main update commit: 443c493 (Add Telegram and Bale bot services and updated sales catalogue).
- Normal push succeeded: origin/main advanced from 53d1bf6 to 443c493, including the previously blocked redesign commits. GitHub write access is now working.
- Catalogue is tracked at docs/Termigene-Catalogue.pdf. Source and catalogue published to GitHub; hosted Sites version was not changed.
- Final step: publish this outcome note, then verify local HEAD equals remote main and working tree is clean.

## Sites publication retry (2026-10-17)
- Owner explicitly requested publishing the current GitHub main version to the existing Site. Current release SHA is e128f074a6d0aed2e918f87b96bc90c048c1a7f2.
- get_site confirmed active and owner-private (one owner viewer, no groups). Fresh short-lived credential passed only through hidden helper stdin; no credential written to disk.
- Official site-workflow open failed again: Empty reply from server from git.chatgpt-team.site. No verified source-open result, so no archive save or deployment attempted; hosted version remains unchanged.
- Resume with a working connection to Sites Git host, fresh credential, successful official open then package and deploy using the existing project ID. GitHub access is resolved and is unrelated to this transport failure.
- Later retry at owner request on 2026-10-17: refreshed owner-private access and fresh credential, but official source open again failed with Empty reply from server. No save/deploy occurred; connection remains blocked before source synchronization.

## Sites retry: source reads recovered, push still blocked (2026-10-17)
- Official source open succeeded twice; connection is intermittent rather than wholly unavailable.
- Official build succeeded: main.a447731a.js, 17 metadata pages. Helper committed existing progress notes as dfcf15f1b45b61e43507b8564cee8b01a31537ea; app content unchanged from approved GitHub version.
- First source push failed HTTP 403; a fresh credential and successful reopen were followed by a second push failure, Empty reply from server. No successful packaging result, saved version or deployment. Never report this as published.
- Latest helper commit is local, not verified pushed to Sites or GitHub. Current notes also remain uncommitted. Resume by reconciling both remotes, then official open/package with fresh credentials. Existing owner-private audience confirmed and preserved.
- Latest owner-requested retry (2026-10-17): official source open succeeded; package/push failed with curl 55 Send failure: Connection was reset and unexpected disconnect. No verified package result or deployment. Existing validated build retained; helper may have committed progress notes locally. Reconcile source HEAD/remotes before resume.
- Hosted browser ERR_CONNECTION_RESET reported again (2026-10-17). Sites API remains active/version 1; error-only Worker log query for last 180 minutes returned no events (does not establish cause or reachability). Started local preview and verified HTTP 200; requested local browser opening. Hosted problem remains unresolved, no deploy or network setting changes.

## Bot service ordering (2026-10-17)
- Owner requested Telegram and Bale at the end of service cards and lists, and explicitly authorized publication to existing Git/GitHub and desktop VS Code.
- Moved both entries after businessServices in the shared services array; order is Telegram then Bale. Cards, navigation, related services and contact options inherit this order. Catalogue already places bots last on its digital services page.
- Verified array order. VS Code CLI successfully requested opening source/ and src/content.js; bridge returned no connected windows, so editor visibility/diagnostics could not be verified.
- Production build validation underway before normal main push. Previously validated application tests: 35 passing. No test added for this data ordering edit.
- Sites publication remains a separate unresolved transport issue; no hosted deployment claimed.

## Categorized services and approved GitHub update (2026-10-17)
- Added four shared categories: website/app/software development; SEO/content; business consulting/training; bot development. Cards use labelled category sections, dropdown uses grouped nested lists and contact selector uses optgroup. Telegram/Bale remain last, in that order.
- Production build passed: main.9cef112c.js and main.e1868713.css; 17 route metadata documents generated. All 37 tests passed, including category completeness, bot ordering and grouped contact options. No browser visual review claimed.
- Desktop VS Code bridge connected to source/; opened saved src/content.js at line 13, dirty=false. User explicitly authorized normal main commit/push for this revision.
- Publishing to existing GitHub main; preserving prior local Sites-helper progress-note commits. Sites hosting remains unchanged because source transport has not been resolved.
- Confirmed normal GitHub push succeeded for 3dce0af4959e4d76ba1ea7f375c87395b5cf6f4a; local/remote main divergence 0/0 and source working tree clean immediately after push. This outcome note is committed separately; no application inputs changed after successful validation.

## Wide services menu (2026-10-17)
- Owner requested nearly full-page width for the services dropdown, with Git/GitHub and VS Code publication authorized.
- Desktop panel anchored to sticky header, centered at width min(1280px, viewport minus 48px), with four category columns and a full-width final directory row. Two columns on tablet; mobile retains one column. Viewport height limit remains for small screens.
- CSS-only change retains disclosure keyboard/dismissal behavior and bot-last ordering. Production build succeeded: main.9cef112c.js, main.67ef013d.css, 17 metadata routes. Existing 37 passing behavior tests were not rerun for CSS-only sizing. Visual browser review remains unverified.
- VS Code bridge confirms saved home.css open at line 123. Normal main commit/push requested by owner; Sites deployment remains unchanged.

## New_Termigene separate Site (2026-10-17)
- Owner explicitly requested a separate new Site to test whether a new project fixes publication. Created New_Termigene once: appgprj_6ad36cc5f0e88191b004daf07283c711, slug new-termigene, expected URL https://new-termigene.tangy-mars-7643.chatgpt.site. Old project remains intact.
- Dedicated checkout new-termigene/ contains the validated latest static build copied to dist/ (index hash verified equal to source/build). Independent .openai/hosting.json stores the new project ID with static directory dist. Original source/ retains its old Site ID and GitHub repository.
- Official source open succeeded. Source push/package failed Connection was reset. Retried with fresh credential plus process-only HTTP/1.1 and 10MB postBuffer; same connection-reset failure. No permanent Git/network configuration changes and no credentials persisted.
- No verified package, saved version or deployment. New card exists but publication is incomplete. Resume the same new project ID (do not create duplicates), reconcile its Git state through official helper, then package/save/deploy privately after verified source push. Full React source remains in source/ and GitHub; new checkout is a static release snapshot, so refresh dist from validated build for future updates.

## New_Termigene published successfully (2026-10-19)
- Official source synchronization and packaging completed successfully. Exact pushed static source SHA: e67e65bc5480333c72a1cbdbfba1a4e36d6d60e2. Archive: new-termigene.tar.gz.
- Portable Windows packaging required process-only PATH prefix C:/Program Files/Git/bin and TAR_OPTIONS=--force-local. This resolves missing Bash and GNU tar misinterpreting the C: drive as a remote host. No permanent tool/config changes.
- save_version_and_deploy_private returned succeeded for project appgprj_6ad36cc5f0e88191b004daf07283c711, version appgprj_6ad36cc5f0e88191b004daf07283c711~appgver_4618b7dc28fc8191884bfacd261ced22, deployment appgdep_6ad5de1dae0c819193c6c837d5b0b7d5.
- Production URL: https://new-termigene.tangy-mars-7643.chatgpt.site. Owner-private audience retained. Native success confirms publication; browser reachability and visual QA are not independently verified. Opening requested in Codex.
- Original Termigene Site is unchanged. Full React development checkout remains source/; new-termigene/ is the static release snapshot. For future deployment refresh from validated source/build, then official source workflow with the new ID and above temporary Windows env settings. Credential discarded after completion.

## Hero services button label (2026-10-19)
- Applied browser annotation to the owning homepage Link in src/app.jsx: خدمات ما را ببین -> خدمات ما. Same label at all breakpoints; destination and layout unchanged.
- Production build passed (main.5455f0bc.js; CSS main.67ef013d.css), 17 route metadata documents generated. No new test for a one-label change.
- Refreshed new-termigene/dist from validated source/build. Official source/package succeeded for static source cd695d92b7f6bd326ef163fae4e15d453d10b9bb.
- Private publish succeeded: deployment appgdep_6ad5e078dd1c81919348bb8acf92e8ba, version appgprj_6ad36cc5f0e88191b004daf07283c711~appgver_7a7cd1d9ab308191a19b32635af3c8f0, URL https://new-termigene.tangy-mars-7643.chatgpt.site. Native success confirms deployment; browser visual QA unverified.
- Syncing React source and progress notes to GitHub under the owner's standing authorization. VS Code bridge had no connected windows during this revision.
