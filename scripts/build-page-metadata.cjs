const fs = require('node:fs');
const path = require('node:path');
require('./load-source.cjs');
const React = require('react');
const { renderToString } = require('react-dom/server');
const { StaticRouter } = require('react-router-dom');
const { AppContent } = require('../src/app.jsx');
const { allRoutes, getPageSeo, projectSchema, structuredData } = require('../src/page-seo.js');
const site = require('../src/site-config.json');
const build = path.join(__dirname, '../build');
const { JSDOM } = require('jsdom');
// Strip previous generated output so rerunning postbuild is safe as well.
const documentTemplate = new JSDOM(fs.readFileSync(path.join(build, 'index.html'), 'utf8'));
const document = documentTemplate.window.document;
document.getElementById('root').innerHTML = '';
for (const element of document.querySelectorAll('meta[name="description"],meta[name="robots"],meta[property^="og:"],meta[name^="twitter:"],link[rel="canonical"],#site-seo-schema,#portfolio-project-schema,noscript')) element.remove();
const template = documentTemplate.serialize();
const escape = s => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const jsonScript = (id, data) => data ? `<script id="${id}" type="application/ld+json">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>` : '';
function documentFor(route) {
 const page = getPageSeo(route);
 let html = template.replace(/<title>.*?<\/title>/s, `<title>${escape(page.title)}</title>`).replace(/<meta\s+name="description"\s+content="[^"]*"\s*\/?\s*>/, '');
 const metadata = {
  description: page.description, robots: page.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large',
  'og:title': page.title, 'og:description': page.description, 'og:type': projectSchema(page) ? 'article' : 'website', 'og:url': page.canonical,
  'og:locale': 'fa_IR', 'og:site_name': site.name, 'og:image': page.image, 'og:image:width': '1200', 'og:image:height': '630', 'og:image:alt': 'ترمیژن؛ طراحی، توسعه و مشاوره کسب‌وکار',
  'twitter:card': 'summary_large_image', 'twitter:title': page.title, 'twitter:description': page.description, 'twitter:image': page.image, 'twitter:image:alt': site.name,
 };
 const tags = Object.entries(metadata).map(([key, value]) => `<meta ${key.startsWith('og:') ? 'property' : 'name'}="${key}" content="${escape(value)}"/>`).join('');
 const head = tags + (page.noindex ? '' : `<link rel="canonical" href="${page.canonical}"/>`) + jsonScript('site-seo-schema', page.noindex ? null : structuredData(page)) + jsonScript('portfolio-project-schema', projectSchema(page));
 const body = renderToString(React.createElement(StaticRouter, { location: route }, React.createElement(AppContent)));
 html = html.replace('</head>', head + '</head>').replace('<div id="root"></div>', `<div id="root">${body}</div>`).replace(/<noscript>.*?<\/noscript>/s, '');
 return html;
}
// Render all pages from the same components used by the browser.
const documents = allRoutes.map(route => [route, documentFor(route)]);
for (const [route, html] of documents) {
 const directory = path.join(build, route.slice(1));
 fs.mkdirSync(directory, { recursive: true });
 fs.writeFileSync(path.join(directory, 'index.html'), html);
}
fs.writeFileSync(path.join(build, '404.html'), documentFor('/404'));
const urls = allRoutes.map(route => getPageSeo(route).canonical);
fs.writeFileSync(path.join(build, 'sitemap.xml'), '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' + urls.map(url => `<url><loc>${escape(url)}</loc></url>`).join('\n') + '\n</urlset>\n');
fs.writeFileSync(path.join(build, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${site.origin}/sitemap.xml\n`);
fs.writeFileSync(path.join(build, '_headers'), '/sitemap.xml\n  Content-Type: application/xml; charset=utf-8\n/robots.txt\n  Content-Type: text/plain; charset=utf-8\n/static/*\n  Cache-Control: public, max-age=31536000, immutable\n');
console.log(`Prerendered ${documents.length} complete HTML pages, sitemap, robots.txt and 404 page.`);
