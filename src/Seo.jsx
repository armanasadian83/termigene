import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { getPageSeo, projectSchema, structuredData } from './page-seo';

export default function Seo() {
 const { pathname } = useLocation();
 useEffect(() => {
  const page = getPageSeo(pathname);
  document.title = page.title;
  const upsert = (attribute, key, value) => {
   let element = document.head.querySelector(`meta[${attribute}="${key}"]`);
   if (!element) { element = document.createElement('meta'); element.setAttribute(attribute, key); document.head.append(element); }
   element.content = value;
  };
  upsert('name', 'description', page.description);
  upsert('name', 'robots', page.noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large');
  for (const [key, value] of Object.entries({ 'og:title': page.title, 'og:description': page.description, 'og:type': projectSchema(page) ? 'article' : 'website', 'og:url': page.canonical, 'og:locale': 'fa_IR', 'og:site_name': 'Termigene', 'og:image': page.image, 'og:image:width': '1200', 'og:image:height': '630', 'og:image:alt': 'Termigene — طراحی، توسعه و مشاوره کسب‌وکار' })) upsert('property', key, value);
  for (const [key, value] of Object.entries({ 'twitter:card': 'summary_large_image', 'twitter:title': page.title, 'twitter:description': page.description, 'twitter:image': page.image, 'twitter:image:alt': 'Termigene' })) upsert('name', key, value);
  let canonical = document.head.querySelector('link[rel="canonical"]');
  if (!canonical) { canonical = document.createElement('link'); canonical.rel = 'canonical'; document.head.append(canonical); }
  if (page.noindex) canonical.remove();
  else canonical.href = page.canonical;
  const script = (id, data) => {
   let element = document.getElementById(id);
   if (!data) { element?.remove(); return; }
   if (!element) { element = document.createElement('script'); element.id = id; element.type = 'application/ld+json'; document.head.append(element); }
   element.textContent = JSON.stringify(data).replace(/</g, '\\u003c');
  };
  script('site-seo-schema', page.noindex ? null : structuredData(page));
  script('portfolio-project-schema', projectSchema(page));
 }, [pathname]);
 return null;
}
