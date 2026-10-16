const numbers = [
  { label: '۰۹۱۹۷۵۲۲۱۳۶', href: 'tel:+989197522136' },
  { label: '۰۹۲۲۸۳۷۲۶۵۴', href: 'tel:+989228372654' },
];

export default function ContactNumbers() {
  return <div className="contact-numbers" aria-label="شماره‌های تماس ترمیژن">{numbers.map(number => <a key={number.href} href={number.href} aria-label={`تماس با ${number.label}`}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m7 3 3 5-3 3c2 3 3 4 6 6l3-3 5 3c0 3-2 5-5 4C8 19 5 16 3 8 2 5 4 3 7 3Z"/></svg><span dir="ltr">{number.label}</span></a>)}</div>;
}
