const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const { JSDOM } = require('jsdom');
require('./load-source.cjs');
const { allRoutes, getPageSeo, canonicalUrl } = require('../src/page-seo.js');
const build = path.resolve(__dirname, '../build');
const titles = new Set();
let checkedLinks = 0;
for (const route of allRoutes) {
 const html = fs.readFileSync(path.join(build, route.slice(1), 'index.html'), 'utf8');
 const { document } = new JSDOM(html).window;
 assert.equal(document.documentElement.lang, 'fa');
 assert.equal(document.querySelectorAll('h1').length, 1, route + ': one visible page heading');
 assert.ok(document.querySelector('#root main').textContent.length > 350, route + ': full HTML without executing JS');
 assert.equal(document.querySelectorAll('link[rel="canonical"]').length, 1, route);
 assert.equal(document.querySelector('link[rel="canonical"]').href, canonicalUrl(route), route);
 assert.equal(document.title, getPageSeo(route).title, route);
 assert.ok(!titles.has(document.title), route + ': unique title'); titles.add(document.title);
 assert.equal(document.querySelectorAll('meta[name="description"]').length, 1, route);
 assert.ok(!document.querySelector('meta[name="robots"]').content.includes('noindex'), route);
 for (const script of document.querySelectorAll('script[type="application/ld+json"]')) JSON.parse(script.textContent);
 for (const link of document.querySelectorAll('a[href^="/"]')) {
  const target = new URL(link.getAttribute('href'), 'https://example.com');
  const clean = target.pathname.replace(/\/+$/, '') || '/';
  assert.ok(allRoutes.includes(clean), route + ': broken internal path ' + clean);
  checkedLinks++;
 }
 for (const image of document.querySelectorAll('img')) {
  assert.ok(image.hasAttribute('alt'), route + ': missing image alt');
  assert.ok(fs.existsSync(path.join(build, image.getAttribute('src'))), route + ': missing image');
 }
 const service = getPageSeo(route).service;
 if (service) {
  assert.equal(document.querySelectorAll('.service-questions details').length, 3, route);
  const graph = JSON.parse(document.querySelector('#site-seo-schema').textContent)['@graph'];
  for (const item of graph.find(item => item['@type'] === 'FAQPage').mainEntity) assert.ok(document.querySelector('#main').textContent.includes(item.acceptedAnswer.text), route + ': schema must match visible FAQ');
 }
}
const sitemap = fs.readFileSync(path.join(build, 'sitemap.xml'), 'utf8');
assert.equal((sitemap.match(/<loc>/g) || []).length, allRoutes.length);
for (const route of allRoutes) assert.ok(sitemap.includes(canonicalUrl(route)));
for (const match of sitemap.matchAll(/<loc>(.*?)<\/loc>/g)) assert.equal(new URL(match[1]).search, '', 'sitemap must not contain query variants');
assert.ok(fs.readFileSync(path.join(build, 'robots.txt'), 'utf8').includes('Sitemap:'));
const errorPage = new JSDOM(fs.readFileSync(path.join(build, '404.html'), 'utf8')).window.document;
assert.ok(errorPage.querySelector('meta[name="robots"]').content.includes('noindex'));
assert.equal(errorPage.querySelector('link[rel="canonical"]'), null);
assert.equal(errorPage.querySelectorAll('h1').length, 1);
assert.ok(fs.statSync(path.join(build, 'brand/share-card.png')).size > 1000);
console.log(`SEO verification passed: ${allRoutes.length} complete pages, ${checkedLinks} internal links, unique metadata, schemas, sitemap and noindex 404.`);
