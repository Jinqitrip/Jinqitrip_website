'use client';

import { useEffect, useState } from 'react';

const DISMISSED_KEY = 'geo-banner-dismissed';
const CN_SITE = 'https://www.jinqitrip.com.cn';

export default function GeoBanner() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(DISMISSED_KEY)) return;

    fetch('https://ip-api.com/json/?fields=countryCode')
      .then((r) => r.json())
      .then((data) => {
        if (data.countryCode === 'CN') setShow(true);
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
      <span>检测到您可能在中国大陆，推荐访问备案域名以获得最佳体验</span>
      <a
        href={CN_SITE}
        style={{
          background: '#fff', color: '#1669C1',
          padding: '4px 14px', borderRadius: 4,
          fontWeight: 600, textDecoration: 'none', whiteSpace: 'nowrap',
        }}
      >
        访问 jinqitrip.com.cn
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
