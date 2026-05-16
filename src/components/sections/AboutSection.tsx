'use client';

import Image from 'next/image';
import Link from 'next/link';
import { CheckOutlined } from '@ant-design/icons';
import type { Translations } from '@/i18n/translations';
import styles from './AboutSection.module.css';

interface Props {
  t: Translations['about'];
  locale: string;
}

export default function AboutSection({ t, locale }: Props) {
  return (
    <section className={`${styles.section} section-padding`}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className={styles.images}>
              <div className={`${styles.mainImg} bg-cover`} style={{ backgroundImage: "url('/assets/img/about/about.jpg')" }}>
                <div className={styles.insetImg}>
                  <Image src="/assets/img/about/about-2.jpg" alt="about" width={220} height={180} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mt-5 mt-lg-0">
            <div className={styles.content}>
              <div className="section-title">
                <span className="reveal">{t.tagline}</span>
                <h2 className="reveal">{t.title}</h2>
              </div>
              <p className="reveal">{t.desc}</p>
              <h5 className={styles.marketTitle}>{t.marketTitle}</h5>
              <ul className="about-list">
                {t.marketItems.map((item, i) => (
                  <li key={i} className="reveal">
                    <CheckOutlined className="anticon" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href={`/${locale}/about`} className={`theme-btn ${styles.cta}`}>
                <span>{locale === 'en' ? 'Learn More' : '探索更多'}</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
