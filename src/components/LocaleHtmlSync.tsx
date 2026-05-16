'use client';

import { useEffect } from 'react';

export default function LocaleHtmlSync({ locale }: { locale: string }) {
  useEffect(() => {
    document.documentElement.lang = locale === 'en' ? 'en' : 'zh-CN';
  }, [locale]);
  return null;
}
