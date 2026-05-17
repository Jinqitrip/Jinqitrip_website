import { getT } from '@/i18n/translations';
import HeroSlider from '@/components/sections/HeroSlider';
import FeatureHighlights from '@/components/sections/FeatureHighlights';
import SeeMenuSection from '@/components/sections/SeeMenuSection';
import AboutSection from '@/components/sections/AboutSection';
import ServiceCarousel from '@/components/sections/ServiceCarousel';
import TrustedClientSection from '@/components/sections/TrustedClientSection';
import CaseStudies from '@/components/sections/CaseStudies';
import ServiceCounterSection from '@/components/sections/ServiceCounterSection';
import TestimonialSection from '@/components/sections/TestimonialSection';
import ScrollRevealWrapper from '@/components/ScrollRevealWrapper';
import Link from 'next/link';

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = getT(locale);
  const contactHref = `/${locale}/contact`;

  return (
    <>
      <HeroSlider slides={t.heroSlides} contactText={t.heroContact} contactHref={contactHref} />
      <ScrollRevealWrapper>
        <FeatureHighlights features={t.features} />
        <SeeMenuSection t={t.seeMenu} />
        <AboutSection t={t.about} locale={locale} />
        <ServiceCarousel t={t.serviceCarousel} />
        <TrustedClientSection t={t.trustedClient} />
        <CaseStudies t={t.caseStudies} />
        <ServiceCounterSection t={t.serviceCounter} contactHref={contactHref} />
        <TestimonialSection t={t.testimonial} />

        {/* CTA Chat */}
        <section className="section-padding" style={{ paddingTop: 0 }}>
          <div className="container">
            <div className="cta-chat-wrapper">
              <div className="chat-items">
                <div className="icon" style={{ fontSize: 28 }}>💬</div>
                <div className="content">
                  <h3>{locale === 'en' ? 'Contact us for attentive service.' : '联系我们，享受贴心服务。'}</h3>
                  <p>{locale === 'en' ? 'A new travel choice — Jinqitrip delivers.' : '旅行新选择，锦麒行不负所托。'}</p>
                </div>
              </div>
              <Link href={contactHref} className="theme-btn bg-white">
                <span>{t.heroContact}</span>
              </Link>
            </div>
          </div>
        </section>
      </ScrollRevealWrapper>
    </>
  );
}
