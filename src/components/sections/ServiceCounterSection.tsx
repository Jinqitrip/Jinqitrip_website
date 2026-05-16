'use client';

import Link from 'next/link';
import { GlobalOutlined, FileTextOutlined, RiseOutlined, MessageOutlined } from '@ant-design/icons';
import { useCounterAnimation } from '@/hooks/useCounterAnimation';
import type { Translations } from '@/i18n/translations';
import styles from './ServiceCounterSection.module.css';

const iconMap: Record<string, React.ReactNode> = {
  global: <GlobalOutlined />,
  'file-text': <FileTextOutlined />,
  rise: <RiseOutlined />,
  message: <MessageOutlined />,
};

function CounterItem({ item }: { item: Translations['serviceCounter']['counters'][0] }) {
  const ref = useCounterAnimation(item.target);
  return (
    <div className={`${styles.item} ${item.active ? styles.active : ''}`}>
      <div className={styles.icon}>{iconMap[item.icon] ?? <GlobalOutlined />}</div>
      <div className={styles.num}>
        <span ref={ref as React.RefObject<HTMLSpanElement>}>0</span>{item.suffix}
      </div>
      <p className={styles.label}>{item.label}</p>
    </div>
  );
}

export default function ServiceCounterSection({ t, contactHref }: { t: Translations['serviceCounter']; contactHref: string }) {
  return (
    <section className={`${styles.section} section-padding section-bg-dark`}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className={styles.heading}>
            <div className="section-title">
              <span>{t.tagline}</span>
              <h2 className={styles.white}>{t.title}</h2>
              <h2 className={styles.white}>{t.subtitle}</h2>
            </div>
            <Link href={contactHref} className="theme-btn">
              <span>{t.contact}</span>
            </Link>
          </div>
          <div className={styles.counters}>
            {t.counters.map((c, i) => <CounterItem key={i} item={c} />)}
          </div>
        </div>
      </div>
    </section>
  );
}
