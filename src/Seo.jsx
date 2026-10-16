import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { services } from './content';
import pages from './portfolio-metadata.json';

const defaultDescription = 'ترمیژن؛ طراحی و توسعه وب‌سایت، نرم‌افزار ویندوز، اپلیکیشن iOS و اندروید، سئو و محتوا، مشاوره بازاریابی و فروش، تحلیل کسب‌وکار، CRM و آموزش سازمانی.';
export default function Seo() {
  const { pathname } = useLocation();
  useEffect(() => {
    const route = pathname.replace(/\/$/, '') || '/';
    const service = services.find(item => route === `/service/${item.id}`);
    const page = pages[route] || {
      title: service ? `${service.title} | ترمیژن` : route === '/contact' ? 'شروع پروژه | ترمیژن' : route === '/service' ? 'خدمات | ترمیژن' : 'ترمیژن | طراحی، توسعه و رشد دیجیتال',
      description: service?.summary || defaultDescription,
    };
    document.title = page.title;
    const added = [];
    const upsert = (key, value, property = false) => {
      const attr = property ? 'property' : 'name';
      let element = document.head.querySelector(`meta[${attr}="${key}"]`);
      if (!element) { element = document.createElement('meta'); element.setAttribute(attr, key); document.head.append(element); added.push(element); }
      element.content = value;
    };
    upsert('description', page.description);
    upsert('og:title', page.title, true);
    upsert('og:description', page.description, true);
    upsert('og:type', (route === '/portfolio/ogenetech' || route === '/portfolio/nutrinext') ? 'article' : 'website', true);
    upsert('og:locale', 'fa_IR', true);
    upsert('twitter:card', 'summary');
    upsert('twitter:title', page.title);
    upsert('twitter:description', page.description);
    let schema;
    if ((route === '/portfolio/ogenetech' || route === '/portfolio/nutrinext')) {
      schema = document.getElementById('portfolio-project-schema');
      if (!schema) { schema = document.createElement('script'); schema.type = 'application/ld+json'; schema.id = 'portfolio-project-schema'; document.head.append(schema); }
      schema.textContent = JSON.stringify({ '@context': 'https://schema.org', '@type': 'CreativeWork', name: page.projectName || 'طراحی سایت اختصاصی آموزشگاه اوژن', description: page.description, inLanguage: 'fa-IR', creator: { '@type': 'Organization', name: 'Termigene', alternateName: 'ترمیژن' }, about: { '@type': page.clientUrl ? 'Organization' : 'EducationalOrganization', name: page.clientName || 'آموزشگاه نانوزیست‌فناوری اوژن', url: page.clientUrl || 'https://ogenetech.com/' } });
    }
    return () => { added.forEach(element => element.remove()); schema?.remove(); };
  }, [pathname]);
  return null;
}
