import type { Metadata } from 'next';
import Script from 'next/script';
import '@/styles/globals.css';
import { isCnSite } from '@/lib/siteUrl';

export const metadata: Metadata = {
  title: '锦麒行旅游 — 您的一站式出行专家',
  description: '锦麒行旅游官方网站 - 您的一站式出行专家',
  icons: { icon: '/assets/img/logo/logo_sqr.png' },
};

const cfToken = process.env.NEXT_PUBLIC_CF_ANALYTICS_TOKEN;

const FONT_HOSTS = isCnSite
  ? { css: 'https://fonts.loli.net', gstatic: 'https://gstatic.loli.net' }
  : { css: 'https://fonts.googleapis.com', gstatic: 'https://fonts.gstatic.com' };

const LATIN_UNICODE = 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD';

const fontFaces = `
  @font-face {
    font-family: 'MaShanZheng-Latin';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url(${FONT_HOSTS.gstatic}/s/mashanzheng/v17/NaPecZTRCLxvwo41b4gvzkXadMPmDaZRbrw.woff2) format('woff2');
    unicode-range: ${LATIN_UNICODE};
  }
  @font-face {
    font-family: 'NotoSerifSC-Latin';
    font-style: normal;
    font-weight: 100 900;
    font-display: swap;
    src: url(${FONT_HOSTS.gstatic}/s/notoserifsc/v35/H4chBXePl9DZ0Xe7gG9cyOj7kqGWbhppHtk.woff2) format('woff2');
    unicode-range: ${LATIN_UNICODE};
  }
`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <head>
        <link rel="preconnect" href={FONT_HOSTS.css} />
        <link rel="preconnect" href={FONT_HOSTS.gstatic} crossOrigin="" />
        <link
          rel="stylesheet"
          href={`${FONT_HOSTS.css}/css2?family=Noto+Sans+SC:wght@300;400;500;700;900&display=swap`}
        />
        <style dangerouslySetInnerHTML={{ __html: fontFaces }} />
      </head>
      <body>
        {children}
        {cfToken && (
          <Script
            defer
            src="https://static.cloudflareinsights.com/beacon.min.js"
            data-cf-beacon={`{"token": "${cfToken}"}`}
            strategy="afterInteractive"
          />
        )}
      </body>
    </html>
  );
}
