import { useEffect, useRef, useState } from 'react';
import { BrowserRouter, Link, Route, Routes, useLocation, useParams } from 'react-router-dom';
import { services, serviceGroups, steps } from './content';
import './Css files/home.css';
import { PortfolioTeaser, PortfolioIndex, OgeneCaseStudy } from './PortfolioPages';
import Seo from './Seo';
import { getBreadcrumbs } from './page-seo';
import { getServiceFaq } from './service-faq';
import ContactNumbers from './ContactNumbers';
import { BusinessExpertise, ExperienceDetail } from './BusinessExperiencePages';
import WordPressService from './WordPressService';
import CustomWebService from './CustomWebService';
import { NutrinextTeaser, NutrinextCaseStudy } from './NutrinextPages';
import { AboutPage, ProcessPage, QuestionsPage, HomeAbout, MoreLink } from './InfoPages';

function Icon({ type, size = 24 }) {
  if (type === 'telegram' || type === 'bale') return <img className="platform-logo" src={`/platforms/${type}.svg`} alt="" aria-hidden="true" style={{ width: type === 'bale' ? size * 1.6 : size, height: size, objectFit: 'contain', flexShrink: 0 }} />;
  const paths = {
    web: <><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M7 6.5h.01M10 6.5h.01m-1 7-3 2 3 2m6-4 3 2-3 2"/></>,
    windows: <path d="m3 5 8-1v7H3Zm10-1 8-1v8h-8ZM3 13h8v7l-8-1Zm10 0h8v8l-8-1Z"/>,
    ios: <><rect x="6" y="2" width="12" height="20" rx="3"/><path d="M10 5h4m-3 14h2"/></>,
    android: <><rect x="4" y="8" width="16" height="12" rx="3"/><path d="m7 8-2-4m12 4 2-4M8 12h.01M16 12h.01M8 20v2m8-2v2M1 11v6m22-6v6"/></>,
    seo: <path d="M4 20V12m6 8V8m6 12V4M3 7l6-4 6 1 6-3m-4 0h4v4"/>,
    instagram: <><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><path d="M17 7h.01"/></>,
    marketing: <><path d="M3 12h5l11-6v12L8 12M5 13l2 7h4l-2-7"/><path d="M21 10v4"/></>, business: <><rect x="3" y="7" width="18" height="14" rx="2"/><path d="M8 7V3h8v4M3 12h18M10 12v3h4v-3"/></>, crm: <><circle cx="9" cy="8" r="3"/><path d="M3 20v-2a6 6 0 0 1 12 0v2M17 5a3 3 0 0 1 0 6m1 3a5 5 0 0 1 3 4v2"/></>, training: <><path d="m2 8 10-5 10 5-10 5ZM6 10v7q6 5 12 0v-7M22 8v9"/></>, chevronDown: <path d="m7 10 5 5 5-5"/>, arrow: <path d="M19 12H5m6-6-6 6 6 6"/>, check: <path d="m5 12 4 4L19 6"/>, menu: <path d="M4 7h16M4 12h16M4 17h16"/>, close: <path d="m6 6 12 12M6 18 18 6"/>, spark: <path d="m12 2 2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5Z"/>,
  };
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[type] || paths.spark}</svg>;
}
function Brand() { return <Link className="brand" to="/" aria-label="ترمیژن، صفحه اصلی"><img className="brand-wordmark" src="/brand/wordmark.svg" alt="Termigene" width="210" height="46"/><span className="sr-only">ترمیژن، استودیوی طراحی و توسعه</span></Link>; }
function SentenceSlider() {
 const [focusedSlide, setFocusedSlide] = useState(null);
 const sentences = [
  ['کسب و کار خود را رشد دهید', 'بیشتر بدانید', '/#about'],
  ['کامل ترین طراحی وبسایت', 'شروع کنید', '/service/web'],
  ['ساخت وبسایت برای تمامی کارها', 'سفارش دهید', '/contact?service=web'],
 ];
 return <div className="text-slider" aria-label="معرفی خدمات"><div className="slider-track" data-focused={focusedSlide === null ? undefined : 'true'} style={{ '--focused-slide': focusedSlide || 0 }}>{[...sentences, sentences[0]].map(([text, cta, url], i) => <p className="banner-quest" key={i} aria-hidden={i === 3 ? true : undefined}>{text}<Link to={url} tabIndex={i === 3 ? -1 : undefined} onFocus={() => setFocusedSlide(i)} onBlur={() => setFocusedSlide(null)}>{cta}</Link></p>)}</div></div>;
}
function ServicesDropdown({ navigationOpen }) {
  const [expanded, setExpanded] = useState(false);
  const wrapper = useRef(null);
  const trigger = useRef(null);
  const location = useLocation();
  useEffect(() => setExpanded(false), [location, navigationOpen]);
  useEffect(() => {
    if (!expanded) return;
    const dismiss = event => { if (!wrapper.current?.contains(event.target)) setExpanded(false); };
    document.addEventListener('pointerdown', dismiss);
    return () => document.removeEventListener('pointerdown', dismiss);
  }, [expanded]);
  return <div className="services-dropdown" ref={wrapper}
    onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setExpanded(false); }}
    onKeyDown={event => { if (event.key === 'Escape' && expanded) { event.stopPropagation(); setExpanded(false); trigger.current?.focus(); } }}>
    <button type="button" ref={trigger} className={`services-trigger${location.pathname.startsWith('/service') ? ' active' : ''}`} aria-expanded={expanded} aria-controls="services-dropdown-list" onClick={() => setExpanded(value => !value)}>خدمات ما <span className="nav-chevron"><Icon type="chevronDown" size={18}/></span></button>
    {expanded && <ul id="services-dropdown-list" className="services-dropdown-list" aria-label="خدمات ترمیژن">
      {serviceGroups.map(group => <li key={group.id} className="services-menu-group"><span className="services-menu-heading">{group.title}</span><ul>{group.services.map(service => <li key={service.id}><Link to={`/service/${service.id}`} aria-current={location.pathname === `/service/${service.id}` ? 'page' : undefined}><Icon type={service.id} size={20}/><span>{service.title}</span></Link></li>)}</ul></li>)}
      <li className="services-dropdown-more"><Link to="/service">بیشتر بدانید <Icon type="arrow" size={18}/></Link></li>
    </ul>}
  </div>;
}
function Header() {
  const [open, setOpen] = useState(false); const location = useLocation();
  useEffect(() => setOpen(false), [location]);
  useEffect(() => { const close = e => { if (e.key === 'Escape') setOpen(false); }; window.addEventListener('keydown', close); return () => window.removeEventListener('keydown', close); }, []);
  return <header className="site-header"><div className="shell header-inner"><Brand/><button className="menu-toggle" aria-label={open ? 'بستن منو' : 'باز کردن منو'} aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen(!open)}><Icon type={open ? 'close' : 'menu'}/></button><nav id="main-nav" className={open ? 'main-nav is-open' : 'main-nav'} aria-label="منوی اصلی"><ServicesDropdown navigationOpen={open}/><Link className={location.pathname.startsWith("/portfolio") ? "active" : ""} to="/portfolio">نمونه‌کارهای ما</Link><Link className={location.pathname === '/process' ? 'active' : ''} aria-current={location.pathname === '/process' ? 'page' : undefined} to="/process">مسیر همکاری</Link><Link className={location.pathname === '/about' ? 'active' : ''} aria-current={location.pathname === '/about' ? 'page' : undefined} to="/about">درباره ترمیژن</Link><Link className={location.pathname === '/faq' ? 'active' : ''} aria-current={location.pathname === '/faq' ? 'page' : undefined} to="/faq">پرسش‌های شما</Link><Link className="button nav-cta" to="/contact">شروع پروژه <Icon type="arrow" size={18}/></Link></nav></div></header>;
}
function UniverseEdge() {
 return <div className="portal-art universe-edge" aria-hidden="true"><div className="portal-stars">✦<span>✧</span><i>✦</i></div><svg className="portal-svg" viewBox="0 0 600 600"><defs><radialGradient id="edge-aura"><stop offset=".55" stopColor="#07060b"/><stop offset=".7" stopColor="#4e207d" stopOpacity=".7"/><stop offset=".82" stopColor="#8038c5" stopOpacity=".2"/><stop offset="1" stopColor="#09080d" stopOpacity="0"/></radialGradient><radialGradient id="edge-interior" cx=".65" cy=".25"><stop stopColor="#271039"/><stop offset=".6" stopColor="#08060d"/><stop offset="1" stopColor="#020204"/></radialGradient><filter id="edge-glow"><feGaussianBlur stdDeviation="13"/></filter></defs><circle cx="300" cy="290" r="265" fill="url(#edge-aura)"/><circle cx="300" cy="290" r="191" fill="none" stroke="#aa58f6" strokeWidth="14" opacity=".5" filter="url(#edge-glow)"/><circle cx="300" cy="290" r="190" fill="url(#edge-interior)"/><circle className="universe-boundary" cx="300" cy="290" r="190" fill="none" stroke="#fff" strokeWidth="5"/><g fill="#dcc4f3" opacity=".8"><circle cx="86" cy="134" r="1.3"/><circle cx="471" cy="62" r="1.7"/><circle cx="508" cy="434" r="1.4"/><circle cx="181" cy="518" r="1.1"/><circle cx="536" cy="241" r="1.3"/><circle cx="333" cy="38" r="1"/><circle cx="62" cy="390" r="1"/></g><path d="M215 537h170" stroke="#785595" opacity=".5"/><text x="300" y="563" textAnchor="middle" fill="#aa86c5" fontFamily="Georgia,serif" fontSize="10" letterSpacing="4">BEYOND THE OBSERVABLE</text></svg><span className="art-caption" dir="ltr">AT THE EDGE OF POSSIBILITY</span></div>;
}
function SupportNote() { return <aside className="support-note"><Icon type="check" size={24}/><div><strong>پشتیبانی ۲۴ ساعته، ۷ روز هفته</strong><p>در تمام روزهای هفته همراه شما هستیم؛ پشتیبانی بخشی از خدمات ترمیژن است.</p></div></aside>; }
function ServiceCards() { return <div className="service-groups">{serviceGroups.map(group => <section className="service-group" key={group.id} aria-labelledby={`group-${group.id}`}><h3 className="service-group-title" id={`group-${group.id}`}>{group.title}</h3><div className="service-grid">{group.services.map((s) => <Link to={`/service/${s.id}`} className="service-card" key={s.id}><div className="card-top"><span className="icon-box"><Icon type={s.id} size={27}/></span></div><h4>{s.title}</h4><p>{s.summary}</p><div className="card-bottom"><span dir="ltr">{s.tag}</span><span className="card-link">بیشتر بدانید <Icon type="arrow" size={18}/></span></div></Link>)}</div></section>)}</div>; }
function SectionTitle({ label, title, children }) { return <div className="section-heading"><div><span className="eyebrow">✦ {label}</span><h2>{title}</h2></div>{children && <p>{children}</p>}</div>; }
function Process() { return <section className="section process-section" id="process"><div className="shell"><SectionTitle label="مسیر همکاری" title="از اولین جرقه تا آخرین جزئیات.">هر پروژه یک مسیر روشن دارد؛ شما در هر قدم می‌دانید چه چیزی ساخته می‌شود و مرحله بعد چیست.</SectionTitle><div className="steps">{steps.map((s, i) => <article key={s.title}><div className="step-heading"><span className="step-number">{["۱", "۲", "۳", "۴"][i]}</span>{i < steps.length - 1 && <span className="step-connector" aria-hidden="true"><svg viewBox="0 0 160 24" fill="none" preserveAspectRatio="none"><path d="M155 12H5" stroke="currentColor" strokeWidth="1.5"/><path d="m13 5-8 7 8 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg></span>}</div><h3>{s.title}</h3><p>{s.text}</p></article>)}</div><MoreLink to="/process">جزئیات مسیر همکاری</MoreLink></div></section>; }
const faqs = [
 ['چطور بفهمم به سایت نیاز دارم یا اپلیکیشن؟', 'اگر هدف شما معرفی کسب‌وکار، فروش آنلاین یا جذب مشتری از جستجوست، وب‌سایت معمولاً نقطه شروع مناسبی است. اپلیکیشن برای تعامل مکرر، امکانات دستگاه و تجربه اختصاصی کاربرد دارد. در بررسی اولیه، نیاز و بودجه شما را کنار هم می‌گذاریم.'],
 ['هزینه و زمان اجرای پروژه چطور مشخص می‌شود؟', 'پس از مشخص شدن امکانات، تعداد صفحات یا بخش‌ها، پلتفرم‌ها و نیازهای فنی، محدوده کار، هزینه و زمان‌بندی پیشنهاد می‌شود. قابلیت جدید یا تغییر در محدوده کار، قبل از اجرا با شما هماهنگ خواهد شد.'],
 ['بعد از تحویل، پشتیبانی هم دارید؟', 'بله، پشتیبانی ۲۴ ساعته، ۷ روز هفته ارائه می‌دهیم. شیوه تحویل، آموزش استفاده و محدوده پشتیبانی در توافق پروژه مشخص می‌شود. نگهداری، رفع مشکلات و توسعه قابلیت‌های بعدی را می‌توان در یک برنامه جداگانه تعریف کرد.'],
 ['آیا رتبه اول گوگل یا رشد قطعی اینستاگرام تضمین می‌شود؟', 'خیر. نتیجه به رقابت، وضعیت فعلی کسب‌وکار و رفتار کاربران هم وابسته است. در سئو و محتوا، روی اقدامات قابل اندازه‌گیری، گزارش شفاف و بهبود مستمر تمرکز می‌کنیم.'],
 ['آیا می‌توانم با یک خدمت شروع کنم؟', 'بله. می‌توانید طراحی سایت، اپلیکیشن، سئو، محتوا، مشاوره یا آموزش را به‌صورت مستقل انتخاب کنید. خدمات متناسب با نیاز شما قابل ترکیب هستند.'],
];
function FAQ() { return <section className="section" id="faq"><div className="shell faq-layout"><div><span className="eyebrow">✦ پیش از شروع</span><h2>شاید سؤال شما<br/>هم همین باشد.</h2><p className="muted">تصمیم خوب، از شفافیت شروع می‌شود.</p><MoreLink to="/faq">همه پرسش‌ها و پاسخ‌ها</MoreLink></div><div className="faq-list">{faqs.slice(0, 2).map(([q, a]) => <details key={q}><summary>{q}<span>+</span></summary><p>{a}</p></details>)}</div></div></section>; }
function CTA() { return <section className="shell closing-cta"><div><span className="eyebrow">✦ فصل بعدی کسب‌وکار شما</span><h2>ایده‌تان را از سایه<br/>به دنیای واقعی بیاورید.</h2><p>از یک فکر اولیه تا یک محصول قابل استفاده، مسیر را با هم می‌سازیم.</p><ContactNumbers/></div><Link className="button" to="/contact">بیایید شروع کنیم <Icon type="arrow" size={20}/></Link><img className="cta-symbol" src="/brand/symbol.svg" alt="" aria-hidden="true" width="270" height="270"/></section>; }
function Home() {
 return <><section className="hero"><div className="shell hero-layout"><div className="hero-copy"><span className="eyebrow hero-eyebrow"><span className="status-dot"/> برای ایده‌هایی فراتر از مرزهای آشنا</span><h1>تا لبه خیال،<br/><span>و فراتر از آن.</span></h1><p>ما ترمیژن هستیم؛ از طراحی سایت و اپلیکیشن تا بازاریابی، فروش و ارتباط با مشتری، برای ساخت و رشد کسب‌وکارتان همراه شما هستیم.</p><SentenceSlider/><div className="hero-buttons"><Link to="/contact" className="button">پروژه‌ات را شروع کن <Icon type="arrow" size={20}/></Link><Link to="/#services" className="button button-ghost">خدمات ما</Link></div><div className="hero-note"><span className="mini-star">✦</span><span>طراحی با هویت. توسعه با دقت. رشد با هدف.</span></div></div><UniverseEdge/></div><div className="shell hero-footer"><span dir="ltr">DESIGN. DEVELOP. GROW.</span><Link to="/#services">داستان از اینجا شروع می‌شود <span>↓</span></Link><span className="edition" dir="ltr">THE TERMIGENE STUDIO</span></div></section><div className="platform-strip"><div className="shell"><span>یک ایده. امکان‌های بی‌شمار.</span><span dir="ltr">WEB</span><i>✦</i><span dir="ltr">WINDOWS</span><i>✦</i><span dir="ltr">iOS</span><i>✦</i><span dir="ltr">ANDROID</span><i>✦</i><span dir="ltr">SEO & CONTENT</span></div></div><section className="section services-section" id="services"><div className="shell"><SectionTitle label="چه کاری انجام می‌دهیم؟" title="برای هر ایده، یک مسیر ساخت.">از طراحی و توسعه تا حضور مؤثر در فضای دیجیتال؛ خدماتی که با نیاز کسب‌وکار شما شکل می‌گیرند.</SectionTitle><ServiceCards/><SupportNote/><MoreLink to="/service">همه خدمات ترمیژن</MoreLink></div></section><PortfolioTeaser/><NutrinextTeaser/><BusinessExpertise compact/><HomeAbout/><Process/><FAQ/><CTA/></>;
}
function Services() { return <><section className="page-intro shell"><span className="eyebrow">✦ خدمات ترمیژن</span><h1>ایده شما،<span className="purple-text"> تخصص ما.</span></h1><p>یک خدمت یا ترکیبی از چند مسیر؛ آنچه برای ساخت و رشد کسب‌وکار شما لازم است.</p></section><section className="shell service-directory"><ServiceCards/><SupportNote/></section><Process/><FAQ/><CTA/></>; }
function ServiceQuestions({ service }) {
 return <section className="shell service-questions" aria-labelledby="service-questions-title"><h2 id="service-questions-title">پرسش‌های متداول درباره {service.short}</h2><div className="faq-list">{getServiceFaq(service).map(([question, answer]) => <details key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></section>;
}
function Breadcrumbs() {
 const { pathname } = useLocation();
 const trail = getBreadcrumbs(pathname);
 if (!trail.length) return null;
 return <nav className="shell page-breadcrumbs" aria-label="مسیر صفحه"><ol>{trail.map((crumb, i) => <li key={crumb.path}>{i === trail.length - 1 ? <span aria-current="page">{crumb.name}</span> : <Link to={crumb.path}>{crumb.name}</Link>}</li>)}</ol></nav>;
}
function ServiceDetail() {
 const { id } = useParams(); const s = services.find(item => item.id === id); if (!s) return <NotFound/>;
 return <><section className="shell detail-intro"><div className="detail-layout"><div><span className="eyebrow" dir="ltr">{s.tag}</span><h1>{s.title}</h1><p>{s.description}</p><Link className="button" to={`/contact?service=${s.id}`}>درخواست {s.short} <Icon type="arrow" size={20}/></Link></div><div className="detail-symbol" aria-hidden="true"><Icon type={s.id} size={120}/><span dir="ltr">{s.tag}</span></div></div></section><section className="section shell detail-content"><SectionTitle label="محدوده خدمت" title="دقیقاً چه کاری انجام می‌دهیم؟"/><div className="deliverables">{s.work.map(([title, text], i) => <article key={title}><span>{(i+1).toLocaleString('fa-IR')}</span><h3>{title}</h3><p>{text}</p></article>)}</div><div className="delivery-note"><Icon type="spark"/><div><h3>در پایان، چه چیزی دریافت می‌کنید؟</h3><p>{s.output}</p><p className="purple-text"><strong>پشتیبانی ۲۴ ساعته، ۷ روز هفته</strong></p><small>امکانات نهایی، زمان‌بندی و شرایط تحویل در پیشنهاد اختصاصی پروژه مشخص می‌شوند.</small></div></div></section>{id === 'web' && <><CustomWebService/><WordPressService/></>}<ServiceQuestions service={s}/><Process/><section className="shell related"><SectionTitle label="یک قدم فراتر" title="مسیرهای مرتبط"/><div className="related-links">{services.filter(item => item.id !== id).map(item => <Link key={item.id} to={`/service/${item.id}`}><Icon type={item.id}/>{item.title}<Icon type="arrow" size={18}/></Link>)}</div></section><CTA/></>;
}
const emptyForm = { name: '', company: '', phone: '', email: '', service: '', budget: '', description: '' };
function Contact() {
 const location = useLocation(); const initialService = new URLSearchParams(location.search).get('service');
 const [form, setForm] = useState({ ...emptyForm });
 useEffect(() => { if (services.some(s => s.id === initialService)) setForm(current => ({ ...current, service: initialService })); }, [initialService]);
 const [errors, setErrors] = useState({}); const [sendError, setSendError] = useState(false); const feedback = useRef(null);
 const change = e => { setForm({ ...form, [e.target.name]: e.target.value }); setSendError(false); setErrors({ ...errors, [e.target.name]: '' }); };
 const normalizePhone = text => text.replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d)).replace(/[٠-٩]/g, d => '٠١٢٣٤٥٦٧٨٩'.indexOf(d)).replace(/[\s()-]/g, '');
 const submit = e => {
  e.preventDefault(); const next = {};
  if (!form.name.trim()) next.name = 'نام خود را وارد کنید.';
  if (!/^(09\d{9}|\+989\d{9})$/.test(normalizePhone(form.phone))) next.phone = 'شماره موبایل معتبر مانند 09123456789 وارد کنید.';
  if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'آدرس ایمیل معتبر وارد کنید.';
  if (!form.service) next.service = 'خدمت مورد نیاز را انتخاب کنید.';
  if (form.description.trim().length < 10) next.description = 'ایده خود را در حداقل ۱۰ کاراکتر توضیح دهید.';
  setErrors(next); if (Object.keys(next).length) { document.getElementById(Object.keys(next)[0])?.focus(); return; }
  setSendError(true); setTimeout(() => feedback.current?.focus(), 0);
 };
 const field = (name, label, props = {}) => <div className="field"><label htmlFor={name}>{label}{props.required && <span> *</span>}</label><input id={name} name={name} value={form[name]} onChange={change} aria-invalid={!!errors[name]} aria-describedby={errors[name] ? `${name}-error` : undefined} {...props}/>{errors[name] && <small className="field-error" id={`${name}-error`}>{errors[name]}</small>}</div>;
 return <section className="shell contact-layout"><div className="contact-copy"><span className="eyebrow">✦ آغاز یک همکاری</span><h1>هر جهان تازه،<br/>با <span className="purple-text">یک ایده</span> شروع می‌شود.</h1><p>از هدف، مخاطب و چیزی که می‌خواهید بسازید بگویید. حتی اگر هنوز همه جزئیات روشن نیست، از همین‌جا شروع کنید.</p><ContactNumbers/></div><form className="project-form" noValidate onSubmit={submit}><h2>درباره پروژه‌تان بگویید</h2><p className="muted">اطلاعات پروژه و راه تماس با خودتان را تکمیل کنید.</p><div className="form-grid">{field('name', 'نام و نام خانوادگی', { required: true, autoComplete: 'name', maxLength: 80, placeholder: 'نام شما' })}{field('company', 'نام کسب‌وکار', { autoComplete: 'organization', maxLength: 100, placeholder: 'اختیاری' })}{field('phone', 'شماره موبایل', { required: true, type: 'tel', autoComplete: 'tel', placeholder: '09123456789', dir: 'ltr', maxLength: 25 })}{field('email', 'ایمیل', { type: 'email', autoComplete: 'email', placeholder: 'you@example.com', dir: 'ltr', maxLength: 150 })}<div className="field"><label htmlFor="service">خدمت مورد نیاز <span>*</span></label><select id="service" name="service" value={form.service} onChange={change} required aria-invalid={!!errors.service} aria-describedby={errors.service ? 'service-error' : undefined}><option value="">انتخاب کنید</option>{serviceGroups.map(group => <optgroup key={group.id} label={group.title}>{group.services.map(s => <option key={s.id} value={s.id}>{s.title}</option>)}</optgroup>)}<option value="consultation">چند خدمت / نیاز به مشاوره</option></select>{errors.service && <small className="field-error" id="service-error">{errors.service}</small>}</div><div className="field"><label htmlFor="budget">بودجه تقریبی</label><select id="budget" name="budget" value={form.budget} onChange={change}><option value="">هنوز مشخص نیست</option><option>کمتر از ۳۰ میلیون تومان</option><option>۳۰ تا ۷۰ میلیون تومان</option><option>۷۰ تا ۱۵۰ میلیون تومان</option><option>بیشتر از ۱۵۰ میلیون تومان</option></select></div><div className="field full-width"><label htmlFor="description">کمی از ایده‌تان بگویید <span>*</span></label><textarea id="description" name="description" rows="5" value={form.description} onChange={change} maxLength={2000} required placeholder="چه چیزی می‌خواهید بسازید؟ چه مخاطبی دارید و چه امکاناتی برایتان مهم است؟" aria-invalid={!!errors.description} aria-describedby={errors.description ? 'description-error' : undefined}/>{errors.description && <small className="field-error" id="description-error">{errors.description}</small>}</div></div><button type="submit" className="button form-submit">ارسال درخواست <Icon type="arrow" size={20}/></button>{sendError && <div className="form-feedback" role="alert" tabIndex="-1" ref={feedback}>ارسال انجام نشد؛ برای ثبت درخواست با شماره‌های بالا تماس بگیرید.</div>}</form></section>;
}
function Footer() { return <footer className="site-footer"><div className="shell footer-main"><div className="footer-brand"><Brand/><p>تا لبه جهان، و فراتر از آن.<br/>طراحی، توسعه و رشد کسب‌وکار.</p></div><div><h3>طراحی و توسعه</h3>{services.slice(0, 4).map(s => <Link key={s.id} to={`/service/${s.id}`}>{s.title}</Link>)}</div><div><h3>بازاریابی و رشد</h3>{services.slice(4).map(s => <Link key={s.id} to={`/service/${s.id}`}>{s.title}</Link>)}<Link to="/process">مسیر همکاری</Link><Link to="/faq">پرسش‌های متداول</Link></div><div><h3>یک ایده در ذهن دارید؟</h3><p>بیایید برای آن یک مسیر بسازیم.</p><ContactNumbers/><Link className="text-link" to="/contact">شروع پروژه <Icon type="arrow" size={18}/></Link><Link to="/portfolio">نمونه‌کارهای ما</Link><Link to="/about">درباره ترمیژن</Link></div></div><div className="shell footer-bottom"><span>© {new Date().getFullYear().toLocaleString('fa-IR', { useGrouping: false })} ترمیژن. همه حقوق محفوظ است.</span><span dir="ltr">MADE OF IDEAS. BUILT WITH PURPOSE.</span></div></footer>; }
function NotFound() { return <section className="shell not-found"><span className="eyebrow">۴۰۴</span><h1>این مسیر هنوز ساخته نشده.</h1><p>برای پیدا کردن مسیر درست، به صفحه اصلی یا خدمات برگردید.</p><Link className="button" to="/">بازگشت به خانه <Icon type="arrow"/></Link></section>; }
function ScrollToLocation() {
 const location = useLocation();
 useEffect(() => {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)) return;
  const elements = Array.from(document.querySelectorAll('.service-card, .section-heading, .about-layout, .steps article, .faq-layout, .closing-cta, .deliverables article, .portfolio-teaser, .portfolio-project-card, .case-section'));
  document.documentElement.classList.add('reveal-enabled');
  const observer = new IntersectionObserver(entries => { entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); } }); }, { threshold: .08 });
  elements.forEach(element => { element.classList.add('reveal'); observer.observe(element); });
  return () => { observer.disconnect(); elements.forEach(element => element.classList.remove('reveal', 'is-visible')); document.documentElement.classList.remove('reveal-enabled'); };
 }, [location.pathname]);
 useEffect(() => { if (location.hash) requestAnimationFrame(() => document.getElementById(location.hash.slice(1))?.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' })); else window.scrollTo(0, 0); }, [location]);
 return null;
}
export function AppContent() { return <><ScrollToLocation/><Seo/><a className="skip-link" href="#main">رفتن به محتوای اصلی</a><Header/><main id="main"><Breadcrumbs/><Routes><Route path="/" element={<Home/>}/><Route path="/service" element={<Services/>}/><Route path="/service/:id" element={<ServiceDetail/>}/><Route path="/portfolio" element={<PortfolioIndex/>}/><Route path="/portfolio/ogenetech" element={<OgeneCaseStudy/>}/><Route path="/portfolio/nutrinext" element={<NutrinextCaseStudy/>}/><Route path="/portfolio/experience/:experienceId" element={<ExperienceDetail/>}/><Route path="/about" element={<AboutPage/>}/><Route path="/process" element={<ProcessPage/>}/><Route path="/faq" element={<QuestionsPage/>}/><Route path="/contact" element={<Contact/>}/><Route path="*" element={<NotFound/>}/></Routes></main><Footer/></>; }
export default function Root() { return <BrowserRouter><AppContent/></BrowserRouter>; }
