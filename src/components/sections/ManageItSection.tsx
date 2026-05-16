'use client';

import { useState } from 'react';
import type { Translations } from '@/i18n/translations';
import styles from './ManageItSection.module.css';

export default function ManageItSection({ t }: { t: Translations['manageIt'] }) {
  const [active, setActive] = useState(t.tabs[0].key);

  return (
    <section className={`${styles.section} section-padding fix`}>
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-6">
            <div className={styles.content}>
              <div className="section-title">
                <span className="reveal">{t.tagline}</span>
                <h2 className="reveal">{t.title}</h2>
              </div>
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
                <div className={styles.tabContent}>
                  <p>{t.tabContent[active]}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-5 mt-5 mt-lg-0">
            <div
              className={`${styles.image} bg-cover`}
              style={{ backgroundImage: "url('/assets/img/about/about-7.jpg')" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
