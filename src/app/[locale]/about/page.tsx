import { getT } from '@/i18n/translations';
import Breadcrumb from '@/components/sections/Breadcrumb';
import ManageItSection from '@/components/sections/ManageItSection';
import AboutSection from '@/components/sections/AboutSection';
import ScrollRevealWrapper from '@/components/ScrollRevealWrapper';

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = getT(locale);

  return (
    <ScrollRevealWrapper>
      <Breadcrumb
        title={t.about_page.breadcrumbAbout}
        items={[
          { text: t.about_page.breadcrumbHome, href: `/${locale}` },
          { text: t.about_page.breadcrumbAbout },
        ]}
      />
      <AboutSection t={t.about} locale={locale} />
      <ManageItSection t={t.manageIt} />
    </ScrollRevealWrapper>
  );
}
