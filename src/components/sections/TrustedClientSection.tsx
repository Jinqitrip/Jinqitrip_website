'use client';

import { useState } from 'react';
import { CheckOutlined } from '@ant-design/icons';
import type { Translations } from '@/i18n/translations';
import styles from './TrustedClientSection.module.css';

export default function TrustedClientSection({ t }: { t: Translations['trustedClient'] }) {
  const [active, setActive] = useState(t.tabs[0].key);

  return (
    <section className={`${styles.section} section-padding`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-5">
            <div className={`${styles.imageWrap} bg-cover`} style={{ backgroundImage: "url('/assets/img/feature/trusted.jpg')" }}>
              <div className="counter-main-area">
                <div className="counter-area">
                  <div className="counter-items">
                    <h2>35+</h2>
                    <h3>{t.tabs[1]?.label}</h3>
                  </div>
                  <div className="counter-items">
                    <h2>5+</h2>
                    <h3>{t.tabs[2]?.label}</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-7 mt-5 mt-xl-0">
            <div className={styles.content}>
              <div className="section-title">
                <span className="reveal">{t.tagline}</span>
                <h2 className="reveal">{t.title}</h2>
              </div>
              <p className="reveal">{t.desc}</p>
              <div className={styles.tabs}>
                <div className={styles.tabNav}>
                  {t.tabs.map((tab) => (
                    <button
                      key={tab.key}
                      className={`${styles.tabBtn} ${active === tab.key ? styles.tabActive : ''}`}
                      onClick={() => setActive(tab.key)}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>
                <ul className={styles.tabContent}>
                  {t.tabContent[active]?.map((item, i) => (
                    <li key={i}>
                      <CheckOutlined className={styles.check} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
