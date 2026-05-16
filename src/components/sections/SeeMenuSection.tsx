'use client';

import { CheckCircleOutlined, RightOutlined } from '@ant-design/icons';
import type { Translations } from '@/i18n/translations';
import styles from './SeeMenuSection.module.css';

const STACK = ['React Native', 'Fastify', 'Gemini 2.5'];

export default function SeeMenuSection({ t }: { t: Translations['seeMenu'] }) {
  return (
    <section className={`${styles.section} fix section-padding`}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className="row align-items-center g-5">

            {/* ── 左侧：手机 Mockup ── */}
            <div className="col-lg-5">
              <div className={`${styles.phoneWrap} reveal-left`}>
                {/* Badge */}
                <div className={styles.badge}>
                  <span className={styles.badgeDot} />
                  <span>{t.badge}</span>
                </div>

                {/* Phone body */}
                <div className={styles.phone}>
                  <div className={styles.notch} />
                  <div className={styles.screen}>
                    {/* Status bar */}
                    <div className={styles.screenHeader}>
                      <span className={styles.time}>9:41</span>
                      <span className={styles.appName}>SeeMenu</span>
                      <span className={styles.signal}>●●●</span>
                    </div>

                    {/* Menu photo with hot zones */}
                    <div className={styles.photo}>
                      <span className={styles.photoLabel}>{t.mockPhotoLabel}</span>
                      <div className={`${styles.hotZone} ${styles.hz1}`}>①</div>
                      <div className={`${styles.hotZone} ${styles.hz2} ${styles.hzActive}`}>②</div>
                      <div className={`${styles.hotZone} ${styles.hz3}`}>③</div>
                    </div>

                    {/* Dish card */}
                    <div className={styles.dishCard}>
                      <div className={styles.dishRow}>
                        <div>
                          <div className={styles.dishEn}>{t.mockDishEn}</div>
                          <div className={styles.dishCn}>{t.mockDishCn}</div>
                        </div>
                        <div className={styles.price}>€18</div>
                      </div>
                      <div className={styles.tags}>
                        <span className={`${styles.tag} ${styles.tagOk}`}>{t.mockTagOk}</span>
                        <span className={`${styles.tag} ${styles.tagWarn}`}>{t.mockTagWarn}</span>
                        <span className={styles.tag}>{t.mockTagNeutral}</span>
                      </div>
                    </div>

                    {/* Cart bar */}
                    <div className={styles.cartBar}>
                      <span>{t.mockCart}</span>
                      <span className={styles.cartCta}>{t.mockCartCta}</span>
                    </div>
                  </div>
                </div>

                {/* Deco rings */}
                <div className={`${styles.decoRing} ${styles.ring1}`} />
                <div className={`${styles.decoRing} ${styles.ring2}`} />
              </div>
            </div>

            {/* ── 右侧：文字内容 ── */}
            <div className="col-lg-7 mt-5 mt-lg-0">
              <div className={styles.content}>
                <div className="section-title">
                  <span className="reveal">{t.tagline}</span>
                  <h2 className="reveal">
                    {t.title}
                    <span className={styles.subtitle}>{t.subtitle}</span>
                  </h2>
                </div>
                <p className={`reveal ${styles.desc}`}>{t.desc}</p>

                <ul className={styles.featList}>
                  {t.features.map((f, i) => (
                    <li key={i} className="reveal">
                      <CheckCircleOutlined className={styles.check} />
                      <span><strong>{f.title}</strong> — {f.desc}</span>
                    </li>
                  ))}
                </ul>

                <div className={`reveal ${styles.stack}`}>
                  <span className={styles.stackLabel}>{t.stackLabel}</span>
                  {STACK.map((s) => <span key={s} className={styles.stackTag}>{s}</span>)}
                </div>

                <div className="reveal" style={{ marginTop: 28 }}>
                  <a
                    href="https://github.com/siruizou2005/SeeMenu"
                    target="_blank"
                    rel="noreferrer"
                    className="theme-btn"
                  >
                    <span>{t.cta} <RightOutlined style={{ fontSize: 12 }} /></span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
