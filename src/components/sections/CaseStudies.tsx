'use client';

import type { Translations } from '@/i18n/translations';
import styles from './CaseStudies.module.css';

export default function CaseStudies({ t }: { t: Translations['caseStudies'] }) {
  return (
    <section className={`${styles.section} section-padding section-bg-dark`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className={styles.content}>
              <div className="section-title">
                <span className="reveal">{t.tagline}</span>
                <h2 className={`reveal ${styles.whiteH2}`}>{t.title}</h2>
                <p className={`reveal ${styles.desc}`}>{t.desc}</p>
              </div>
              <div className="reveal">
                <p className={styles.label}>{t.demandLabel}</p>
                <p className={styles.text}>{t.demandText}</p>
              </div>
              <div className={`reveal ${styles.process}`}>
                <p className={styles.label}>{t.processLabel}</p>
                {t.processLines.map((line, i) => (
                  <p key={i} className={styles.processItem}>{line}</p>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-5 mt-lg-0">
            <div
              className={`${styles.image} bg-cover reveal`}
              style={{ backgroundImage: "url('/assets/img/project/01.jpg')" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
