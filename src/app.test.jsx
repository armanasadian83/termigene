import { act } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';
import { services } from './content';
import { businessExperience, businessServices } from './business-content';

globalThis.IS_REACT_ACT_ENVIRONMENT = true;
let host, root;
beforeEach(() => {
  window.localStorage.clear();
  window.scrollTo = jest.fn();
  window.matchMedia = jest.fn(() => ({ matches: true }));
  host = document.createElement('div'); document.body.append(host);
  root = createRoot(host);
});
afterEach(() => { act(() => root.unmount()); host.remove(); });
function render(path) { window.history.replaceState({}, '', path); act(() => root.render(<App/>)); }
function setField(name, value) {
  const element = host.querySelector(`[name="${name}"]`);
  const prototype = element.tagName === 'SELECT' ? HTMLSelectElement.prototype : element.tagName === 'TEXTAREA' ? HTMLTextAreaElement.prototype : HTMLInputElement.prototype;
  act(() => { Object.getOwnPropertyDescriptor(prototype, 'value').set.call(element, value); element.dispatchEvent(new Event(element.tagName === 'SELECT' ? 'change' : 'input', { bubbles: true })); });
}

test('services dropdown opens without navigation and ends with the directory link', () => {
  render('/');
  const trigger = host.querySelector('.services-trigger');
  expect(trigger.getAttribute('aria-expanded')).toBe('false');
  act(() => trigger.click());
  expect(window.location.pathname).toBe('/');
  const links = [...host.querySelectorAll('.services-dropdown-list a')];
  expect(links.map(a => a.getAttribute('href'))).toEqual([...services.map(s => `/service/${s.id}`), '/service']);
  expect(links[services.length].textContent).toContain('بیشتر بدانید');
  act(() => links[services.length].click());
  expect(window.location.pathname).toBe('/service');
  expect(host.querySelector('.services-dropdown-list')).toBeNull();
});

test('services dropdown dismisses on Escape, outside click and service navigation', () => {
  render('/');
  const trigger = host.querySelector('.services-trigger');
  act(() => trigger.click());
  const link = host.querySelector('.services-dropdown-list a');
  act(() => { link.focus(); link.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true })); });
  expect(host.querySelector('.services-dropdown-list')).toBeNull();
  expect(document.activeElement).toBe(trigger);
  act(() => trigger.click());
  act(() => document.body.dispatchEvent(new Event('pointerdown', { bubbles: true })));
  expect(host.querySelector('.services-dropdown-list')).toBeNull();
  act(() => trigger.click());
  act(() => host.querySelector('.services-dropdown-list a[href="/service/seo"]').click());
  expect(window.location.pathname).toBe('/service/seo');
  expect(host.querySelector('.services-dropdown-list')).toBeNull();
});

test.each(services)('service $id exposes its scope and preselected project request', service => {
  render(`/service/${service.id}`);
  expect(host.querySelector('h1').textContent).toBe(service.title);
  expect(host.querySelectorAll('.deliverables article').length).toBe(4);
  expect(host.querySelector(`a[href="/contact?service=${service.id}"]`)).not.toBeNull();
  expect(host.querySelector('.delivery-note').textContent).toContain(service.output);
  if (service.id === 'web') {
    expect(host.querySelectorAll('.custom-web-grid article').length).toBe(8);
    expect(host.querySelector('#custom-development a[href="/portfolio/ogenetech"]')).not.toBeNull();
    expect(host.querySelector('#custom-development a[href="/portfolio/nutrinext"]')).not.toBeNull();
    expect(host.querySelector('#custom-development a[href="#wordpress"]')).not.toBeNull();
    expect(host.querySelector('#wordpress').textContent).toContain('فروشگاه اینترنتی با ووکامرس');
    expect(host.querySelectorAll('.wordpress-grid article').length).toBe(6);
    expect(host.querySelector('#wordpress a[href="/contact?service=web"]')).not.toBeNull();
  } else expect(host.querySelector('#wordpress')).toBeNull();
});
test('original hero sentences and working destinations are preserved', () => {
  render('/');
  const slides = [...host.querySelectorAll('.banner-quest')];
  expect(slides.length).toBe(4);
  expect(slides[0].textContent).toContain('کسب و کار خود را رشد دهید');
  expect(slides[1].textContent).toContain('کامل ترین طراحی وبسایت');
  expect(slides[2].textContent).toContain('ساخت وبسایت برای تمامی کارها');
  expect(slides[3].getAttribute('aria-hidden')).toBe('true');
  expect(slides[3].querySelector('a').tabIndex).toBe(-1);
  expect(host.querySelectorAll('.service-card').length).toBe(services.length);
});
test('invalid request cannot be saved and focuses first invalid input', () => {
  render('/contact');
  act(() => host.querySelector('form').dispatchEvent(new Event('submit', { bubbles: true, cancelable: true })));
  expect(localStorage.getItem('termigene-project-draft')).toBeNull();
  expect(host.querySelectorAll('.field-error').length).toBe(4);
  expect(document.activeElement.id).toBe('name');
});
test('request accepts Persian phone digits without saving data or claiming delivery', () => {
  render('/contact?service=instagram');
  expect(host.querySelector('#service').value).toBe('instagram');
  expect(host.querySelector('.form-secondary')).toBeNull();
  expect(host.querySelector('.privacy-note')).toBeNull();
  setField('name', 'کاربر آزمایشی'); setField('phone', '۰۹۱۲۳۴۵۶۷۸۹'); setField('description', 'تولید محتوای آموزشی برای صفحه اینستاگرام');
  act(() => host.querySelector('form').dispatchEvent(new Event('submit', { bubbles: true, cancelable: true })));
  expect(host.querySelectorAll('.field-error').length).toBe(0);
  expect(localStorage.getItem('termigene-project-draft')).toBeNull();
  expect(host.querySelector('[role="alert"]').textContent).toContain('ارسال انجام نشد');
  expect(host.querySelector('#name').value).toBe('کاربر آزمایشی');
});
test('mobile menu closes with Escape and navigation works', () => {
  render('/');
  const menu = host.querySelector('.menu-toggle');
  act(() => menu.click()); expect(menu.getAttribute('aria-expanded')).toBe('true');
  act(() => window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }))); expect(menu.getAttribute('aria-expanded')).toBe('false');
  act(() => host.querySelector('a[href="/service"]').click());
  expect(window.location.pathname).toBe('/service');
  expect(host.querySelectorAll('.service-card').length).toBe(services.length);
});
test('unknown paths provide a return route', () => {
  render('/service/missing');
  expect(host.querySelector('.not-found')).not.toBeNull();
  expect(host.querySelector('.not-found a').getAttribute('href')).toBe('/');
});

test('homepage offers a concise project teaser and the portfolio navigation', () => {
  render('/');
  expect(host.querySelector('#main-nav a[href="/portfolio"]').textContent).toBe('نمونه‌کارهای ما');
  const teaser = host.querySelector('.portfolio-teaser');
  expect(teaser).not.toBeNull();
  expect(teaser.querySelector('a').getAttribute('href')).toBe('/portfolio/ogenetech');
  expect(host.querySelector('.case-story')).toBeNull();
  act(() => host.querySelector('#main-nav a[href="/portfolio"]').click());
  expect(host.querySelector('.portfolio-project-card')).not.toBeNull();
  expect(document.title).toContain('نمونه‌کارها و سوابق تخصصی تیم');
});

test('case study exposes the full project, working anchors and accurate project metadata', () => {
  render('/portfolio/ogenetech');
  expect(host.querySelectorAll('h1').length).toBe(1);
  expect(host.querySelector('h1').textContent).toContain('آموزشگاه اوژن');
  expect(host.querySelectorAll('.case-feature-grid section').length).toBe(6);
  for (const link of host.querySelectorAll('.case-contents a')) {
    expect(host.querySelector(link.getAttribute('href'))).not.toBeNull();
  }
  expect(host.querySelector('a[href="https://ogenetech.com/"]').rel).toContain('noopener');
  expect(host.querySelector('.case-story').textContent).toContain('اسنپ‌پی');
  expect(host.querySelector('a[href="/contact?service=web"]')).not.toBeNull();
  expect(document.querySelector('meta[name="description"]').content).toContain('اوژن');
  const schema = JSON.parse(document.getElementById('portfolio-project-schema').textContent);
  expect(schema['@type']).toBe('CreativeWork');
  expect(schema.creator.name).toBe('Termigene');
  expect(schema.review).toBeUndefined();
});

test('leaving the case study clears project-only metadata and keeps service title working', () => {
  render('/portfolio/ogenetech');
  act(() => host.querySelector('a[href="/service/web"]').click());
  expect(document.getElementById('portfolio-project-schema')).toBeNull();
  expect(document.title).toBe('طراحی و توسعه وب‌سایت | ترمیژن');
  expect(document.querySelector('meta[property="og:type"]').content).toBe('website');
});

test.each([
  ['/about', 'تا لبه جهان، و فراتر از آن.', '.info-brand-story'],
  ['/process', 'از اولین گفت‌وگو تا قدم بعد از تحویل.', '.process-detail-list'],
  ['/faq', 'پیش از شروع، روشن‌تر تصمیم بگیرید.', '.faq-page'],
])('navigation opens dedicated %s content and closes the mobile menu', (path, heading, content) => {
  render('/');
  act(() => host.querySelector('.menu-toggle').click());
  act(() => host.querySelector(`#main-nav a[href="${path}"]`).click());
  expect(window.location.pathname).toBe(path);
  expect(host.querySelectorAll('h1').length).toBe(1);
  expect(host.querySelector('h1').textContent).toBe(heading);
  expect(host.querySelector(content)).not.toBeNull();
  expect(host.querySelector('#main-nav a[aria-current="page"]').getAttribute('href')).toBe(path);
  expect(host.querySelector('.menu-toggle').getAttribute('aria-expanded')).toBe('false');
  expect(document.title).not.toBe('ترمیژن | طراحی، توسعه و رشد دیجیتال');
});

test('home has concise introductions linking to full pages', () => {
  render('/');
  expect(host.querySelector('#about a').getAttribute('href')).toBe('/about');
  expect(host.querySelector('#process a').getAttribute('href')).toBe('/process');
  expect(host.querySelector('#faq a').getAttribute('href')).toBe('/faq');
  expect(host.querySelectorAll('#faq details').length).toBe(2);
  expect(host.querySelector('.info-brand-story')).toBeNull();
  expect([...host.querySelectorAll('#main-nav a')].every(a => !a.getAttribute('href').includes('#'))).toBe(true);
});

test('Nutrinext portfolio card leads to a distinct case study and live screenshot link', () => {
  render('/portfolio');
  expect(host.querySelectorAll('.portfolio-list .portfolio-project-card').length).toBe(2);
  act(() => host.querySelector('.nutrinext-card a[href="/portfolio/nutrinext"]').click());
  expect(host.querySelectorAll('h1').length).toBe(1);
  expect(host.querySelector('h1').textContent).toContain('نوترینکست');
  expect(host.querySelector('#nutrinext-development').textContent).toContain('در مرحله توسعه');
  const screenshot = host.querySelector('.project-screenshot');
  expect(screenshot.href).toBe('https://nutrinext.ir/');
  expect(screenshot.target).toBe('_blank');
  expect(screenshot.rel).toContain('noopener');
  expect(screenshot.querySelector('img').getAttribute('src')).toBe('/projects/nutrinext/homepage.png');
  for (const link of host.querySelectorAll('.case-contents a')) expect(host.querySelector(link.getAttribute('href'))).not.toBeNull();
  const schema = JSON.parse(document.getElementById('portfolio-project-schema').textContent);
  expect(schema.about.url).toBe('https://nutrinext.ir/');
  expect(schema.name).toContain('نوترینکست');
  expect(document.title).toContain('نوترینکست');
});

test.each(businessExperience)('team experience $id has a distinct page without education or tenure', item => {
  render('/portfolio');
  const card = host.querySelector(`.experience-card a[href="/portfolio/experience/${item.id}"]`);
  expect(card).not.toBeNull();
  act(() => card.click());
  expect(host.querySelector('h1').textContent).toBe(item.title);
  expect(host.querySelector('main').textContent).toContain('سابقه تخصصی تیم');
  expect(host.querySelector('main').textContent).not.toMatch(/(?:۲۶|26)\\s*سال|دکترا|تحصیلات/);
  for (const anchor of host.querySelectorAll('.case-contents a')) expect(host.querySelector(anchor.getAttribute('href'))).not.toBeNull();
  expect(host.querySelector(`a[href="/contact?service=${item.service}"]`)).not.toBeNull();
  expect(document.title).toBe(`${item.title} | ترمیژن`);
});

test.each(businessServices)('business service $id is selectable in contact and services navigation', service => {
  render(`/contact?service=${service.id}`);
  expect(host.querySelector('#service').value).toBe(service.id);
  act(() => host.querySelector('.services-trigger').click());
  expect(host.querySelector(`#services-dropdown-list a[href="/service/${service.id}"]`)).not.toBeNull();
});

test('about page omits education and tenure while retaining professional experience', () => {
  render('/about');
  expect(host.querySelector('main').textContent).toContain('پشتوانه اجرایی و آموزشی تیم');
  expect(host.querySelector('main').textContent).not.toMatch(/(?:۲۶|26)\\s*سال|دکترا|تحصیلات/);
});

test('service categories cover each service once and keep bots last in cards and form', () => {
  render('/service');
  expect(host.querySelectorAll('.service-group')).toHaveLength(4);
  const cards = [...host.querySelectorAll('.service-card')].map(card => card.getAttribute('href'));
  expect(new Set(cards).size).toBe(services.length);
  expect(cards.slice(-2)).toEqual(['/service/telegram', '/service/bale']);
});
test('contact selector groups bot services last', () => {
  render('/contact');
  const groups = host.querySelectorAll('#service optgroup');
  expect(groups).toHaveLength(4);
  expect([...groups[3].querySelectorAll('option')].map(option => option.value)).toEqual(['telegram', 'bale']);
});
