const fs = require('node:fs');
const path = require('node:path');
const pages = require('../src/portfolio-metadata.json');
const build = path.join(__dirname, '..', 'build');
const template = fs.readFileSync(path.join(build, 'index.html'), 'utf8');
const escape = value => value.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
for (const [route, page] of Object.entries(pages)) {
  const project = (route === '/portfolio/ogenetech' || route === '/portfolio/nutrinext');
  const tags = [
    ['property', 'og:title', page.title], ['property', 'og:description', page.description],
    ['property', 'og:type', project ? 'article' : 'website'], ['property', 'og:locale', 'fa_IR'],
    ['name', 'twitter:card', 'summary'], ['name', 'twitter:title', page.title], ['name', 'twitter:description', page.description],
  ].map(([attr, key, value]) => `<meta ${attr}="${key}" content="${escape(value)}"/>`).join('');
  const schema = project ? `<script id="portfolio-project-schema" type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@type': 'CreativeWork', name: page.projectName || 'طراحی سایت اختصاصی آموزشگاه اوژن', description: page.description, inLanguage: 'fa-IR', creator: { '@type': 'Organization', name: 'Termigene', alternateName: 'ترمیژن' }, about: { '@type': page.clientUrl ? 'Organization' : 'EducationalOrganization', name: page.clientName || 'آموزشگاه نانوزیست‌فناوری اوژن', url: page.clientUrl || 'https://ogenetech.com/' } }).replace(/</g, '\\u003c')}</script>` : '';
  const html = template.replace(/<title>.*?<\/title>/s, `<title>${escape(page.title)}</title>`)
    .replace(/<meta\s+name="description"\s+content="[^"]*"\s*\/?\s*>/, `<meta name="description" content="${escape(page.description)}"/>`)
    .replace('</head>', `${tags}${schema}</head>`);
  const directory = path.join(build, route.slice(1));
  fs.mkdirSync(directory, { recursive: true });
  fs.writeFileSync(path.join(directory, 'index.html'), html);
}
console.log(`Prepared metadata HTML for ${Object.keys(pages).length} page routes.`);
