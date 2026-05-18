'use client';

import { useEffect, useState } from 'react';

const DISMISSED_KEY = 'geo-banner-dismissed';
const CN_SITE = 'https://www.jinqitrip.com.cn';

export default function GeoBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(DISMISSED_KEY)) return;

    fetch('https://ipapi.co/country/')
      .then((r) => r.text())
      .then((country) => {
        if (country.trim() === 'CN') setShow(true);
      })
      .catch(() => {});
  }, []);

  function dismiss() {
    localStorage.setItem(DISMISSED_KEY, '1');
    setShow(false);
  }

  if (!show) return null;

  return (
    <div style={{
      position: 'fixed', bottom: 0, left: 0, right: 0, zIndex: 9999,
      background: '#1669C1', color: '#fff',
      padding: '12px 20px',
      display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 16,
      fontSize: 14, flexWrap: 'wrap',
    }}>
      <span>您似乎在中国大陆访问，前往国内站点体验更流畅 👉</span>
      <a
        href={CN_SITE}
        style={{
          background: '#fff', color: '#1669C1',
          padding: '4px 14px', borderRadius: 4,
          fontWeight: 600, textDecoration: 'none', whiteSpace: 'nowrap',
        }}
      >
        www.jinqitrip.com.cn
      </a>
      <button
        onClick={dismiss}
        aria-label="关闭"
        style={{
          background: 'transparent', border: 'none',
          color: 'rgba(255,255,255,0.7)', fontSize: 20,
          cursor: 'pointer', lineHeight: 1, padding: 0,
        }}
      >
        ×
      </button>
    </div>
  );
}
