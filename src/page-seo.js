import { services } from './content';
import pages from './portfolio-metadata.json';
import site from './site-config.json';
import { getServiceFaq } from './service-faq';
import { faqGroups } from './InfoPages';

export const normalizeRoute = path => path.split(/[?#]/)[0].replace(/\/+$/, '') || '/';
export const canonicalUrl = path => site.origin + (normalizeRoute(path) === '/' ? '/' : normalizeRoute(path) + '/');
const extraPages = {
 '/': { title: 'ترمیژن | طراحی سایت اختصاصی، اپلیکیشن و مشاوره کسب‌وکار', description: 'طراحی سایت اختصاصی و وردپرسی، اپلیکیشن، بات تلگرام و بله، سئو و مشاوره بازاریابی و CRM در ترمیژن؛ نمونه‌کارهای واقعی و پشتیبانی ۲۴ ساعته، ۷ روز هفته.' },
 '/service/web': { title: 'طراحی سایت اختصاصی و وردپرسی | ترمیژن', description: 'طراحی و برنامه‌نویسی سایت اختصاصی، سایت شرکتی و فروشگاه وردپرسی با ووکامرس؛ پنل مدیریت، اتصال به سرویس‌ها، آموزش و پشتیبانی شبانه‌روزی در ترمیژن.' },
 '/service/windows': { title: 'طراحی و ساخت نرم‌افزار اختصاصی ویندوز | ترمیژن', description: 'توسعه نرم‌افزار ویندوز برای مدیریت اطلاعات، گزارش‌گیری و خودکارسازی فرایندها؛ اتصال به پایگاه داده و سرویس‌ها، بسته نصب و آموزش استفاده.' },
 '/service/ios': { title: 'طراحی و توسعه اپلیکیشن آیفون و iOS | ترمیژن', description: 'طراحی اپلیکیشن برای آیفون و آیپد؛ تحلیل امکانات، رابط کاربری، اتصال به سرور، آزمون و آماده‌سازی نسخه مناسب مسیر انتشار توافق‌شده.' },
 '/service/android': { title: 'طراحی و ساخت اپلیکیشن اندروید | ترمیژن', description: 'توسعه اپلیکیشن اندروید برای خدمات، فروش و فرایندهای اختصاصی؛ طراحی صفحات، اتصال به سرور و آماده‌سازی خروجی نصب یا انتشار.' },
 '/service/seo': { title: 'خدمات سئو فنی، محتوا و بهینه‌سازی سایت | ترمیژن', description: 'ممیزی فنی سایت، تحقیق کلمات کلیدی، بهینه‌سازی صفحات و محتوا و پایش عملکرد جستجو؛ برنامه اجرایی و گزارش اقدامات بدون تضمین رتبه ساختگی.' },
 '/service/instagram': { title: 'تولید محتوای اینستاگرام، ریلز، پست و استوری | ترمیژن', description: 'طراحی تقویم محتوای اینستاگرام، سناریو، پست و استوری، تدوین ریلز و کپشن متناسب با هویت برند و مخاطب؛ با برنامه بازبینی و انتشار توافق‌شده.' },
};
export const allRoutes = [...new Set(['/', ...Object.keys(pages), ...services.map(s => '/service/' + s.id)])];
export function getPageSeo(pathname) {
 const route = normalizeRoute(pathname);
 const service = services.find(s => route === '/service/' + s.id);
 const known = allRoutes.includes(route);
 const data = extraPages[route] || pages[route] || (service ? { title: service.title + ' | ترمیژن', description: service.summary } : { title: 'صفحه پیدا نشد | ترمیژن', description: 'این صفحه در سایت ترمیژن موجود نیست؛ خدمات و نمونه‌کارها را در مسیرهای اصلی ببینید.' });
 return { ...data, route, service, canonical: canonicalUrl(route), image: site.origin + site.shareImage, noindex: !known };
}
export function getBreadcrumbs(pathname) {
 const page = getPageSeo(pathname);
 if (page.route === '/' || page.noindex) return [];
 const trail = [{ name: 'صفحه اصلی', path: '/' }];
 if (page.route.startsWith('/service/')) trail.push({ name: 'خدمات', path: '/service' });
 if (page.route.startsWith('/portfolio/')) trail.push({ name: 'نمونه‌کارها', path: '/portfolio' });
 trail.push({ name: page.service?.title || page.title.split(' | ')[0], path: page.route });
 return trail;
}
export function projectSchema(page) {
 if (!['/portfolio/ogenetech', '/portfolio/nutrinext'].includes(page.route)) return null;
 return { '@context': 'https://schema.org', '@type': 'CreativeWork', '@id': page.canonical + '#project', name: page.projectName || 'طراحی سایت اختصاصی آموزشگاه اوژن', description: page.description, url: page.canonical, inLanguage: site.language, creator: { '@type': 'Organization', '@id': site.origin + '/#organization', name: site.name }, about: { '@type': page.clientUrl ? 'Organization' : 'EducationalOrganization', name: page.clientName || 'آموزشگاه نانوزیست‌فناوری اوژن', url: page.clientUrl || 'https://ogenetech.com/' } };
}
export function structuredData(page) {
 const organization = { '@type': 'Organization', '@id': site.origin + '/#organization', name: site.name, alternateName: site.alternateName, url: site.origin + '/', logo: { '@type': 'ImageObject', url: site.origin + '/brand/wordmark.svg' }, contactPoint: site.phones.map(telephone => ({ '@type': 'ContactPoint', telephone, contactType: 'customer support', availableLanguage: 'Persian' })) };
 const graph = [organization, { '@type': 'WebSite', '@id': site.origin + '/#website', name: site.name, alternateName: site.alternateName, url: site.origin + '/', inLanguage: site.language, publisher: { '@id': organization['@id'] } }, { '@type': page.route === '/about' ? 'AboutPage' : page.route === '/contact' ? 'ContactPage' : 'WebPage', '@id': page.canonical + '#webpage', name: page.title, description: page.description, url: page.canonical, inLanguage: site.language, isPartOf: { '@id': site.origin + '/#website' } }];
 const crumbs = getBreadcrumbs(page.route);
 if (crumbs.length) graph.push({ '@type': 'BreadcrumbList', '@id': page.canonical + '#breadcrumbs', itemListElement: crumbs.map((crumb, i) => ({ '@type': 'ListItem', position: i + 1, name: crumb.name, item: canonicalUrl(crumb.path) })) });
 if (page.service) {
  graph.push({ '@type': 'Service', '@id': page.canonical + '#service', name: page.service.title, serviceType: page.service.short, description: page.service.description, url: page.canonical, provider: { '@id': organization['@id'] } });
  graph.push({ '@type': 'FAQPage', '@id': page.canonical + '#faq', mainEntity: getServiceFaq(page.service).map(([name, text]) => ({ '@type': 'Question', name, acceptedAnswer: { '@type': 'Answer', text } })) });
 }
 if (page.route === '/faq') graph.push({ '@type': 'FAQPage', '@id': page.canonical + '#faq', mainEntity: faqGroups.flatMap(group => group.items).map(([name, text]) => ({ '@type': 'Question', name, acceptedAnswer: { '@type': 'Answer', text } })) });
 return { '@context': 'https://schema.org', '@graph': graph };
}
