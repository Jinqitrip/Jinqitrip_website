const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.jinqitrip.com').replace(/\/$/, '');

export const isCnSite = SITE_URL.includes('.com.cn');

export function pageMetadata(locale: string, path: string, title?: string, description?: string) {
  const canonical = `${SITE_URL}/${locale}${path}`;
  const zhUrl = `${SITE_URL}/zh${path}`;
  const enUrl = `${SITE_URL}/en${path}`;
  return {
    ...(title && { title }),
    ...(description && { description }),
    alternates: {
      canonical,
      languages: { zh: zhUrl, en: enUrl, 'x-default': zhUrl },
    },
  };
}
