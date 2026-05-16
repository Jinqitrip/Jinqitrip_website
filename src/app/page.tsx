'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    const lang = (navigator.language || (navigator.languages && navigator.languages[0]) || 'zh').toLowerCase();
    const locale = lang.startsWith('zh') ? 'zh' : 'en';
    router.replace(`/${locale}`);
  }, [router]);

  return null;
}
