import type { Metadata } from 'next';
import { getT } from '@/i18n/translations';
import { pageMetadata } from '@/lib/siteUrl';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  return pageMetadata(locale, '/contact/');
}
import Breadcrumb from '@/components/sections/Breadcrumb';
import ContactForm from '@/components/sections/ContactForm';
import ScrollRevealWrapper from '@/components/ScrollRevealWrapper';
import styles from './contact.module.css';

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = getT(locale);
  const cp = t.contact_page;

  const infos = [
    { icon: '📍', label: cp.address, value: cp.addressVal },
    { icon: '📞', label: cp.phone, value: cp.phoneVal },
    { icon: '✉️', label: cp.email, value: cp.emailVal },
  ];

  return (
    <ScrollRevealWrapper>
      <Breadcrumb
        title={cp.breadcrumbContact}
        items={[{ text: cp.breadcrumbHome, href: `/${locale}` }, { text: cp.breadcrumbContact }]}
      />
      <section className="section-padding">
        <div className="container">
          <div className={styles.grid}>
            <div className={styles.info}>
              <div className="section-title">
                <span>{locale === 'en' ? 'Get in Touch' : '联系我们'}</span>
                <h2>{locale === 'en' ? 'We\'d love to hear from you' : '期待您的来信'}</h2>
              </div>
              {infos.map((info) => (
                <div key={info.label} className={styles.infoItem}>
                  <div className={styles.infoIcon} style={{ fontSize: 20 }}>{info.icon}</div>
                  <div>
                    <h5>{info.label}</h5>
                    <p>{info.value}</p>
                  </div>
                </div>
              ))}
            </div>
            <ContactForm t={t.contactForm} />
          </div>
        </div>
      </section>
    </ScrollRevealWrapper>
  );
}
