import type { Metadata } from 'next';
import { getT } from '@/i18n/translations';
import AntdProvider from '@/components/AntdProvider';
import LocaleHtmlSync from '@/components/LocaleHtmlSync';
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';

export async function generateStaticParams() {
  return [{ locale: 'zh' }, { locale: 'en' }];
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const isEn = locale === 'en';
  return {
    title: isEn ? 'Jinqitrip' : '锦麒行旅游',
    description: isEn
      ? 'Jinqitrip Travel & Consulting — Your One-Stop Travel Expert'
      : '锦麒行旅游官方网站 - 您的一站式出行专家',
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = getT(locale);

  return (
    <AntdProvider locale={locale}>
      <LocaleHtmlSync locale={locale} />
      <NavBar locale={locale} nav={t.nav} />
      <main>{children}</main>
      <Footer locale={locale} footer={t.footer} />
    </AntdProvider>
  );
}
