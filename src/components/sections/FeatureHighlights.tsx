'use client';

import {
  BulbOutlined, CompassOutlined, CustomerServiceOutlined,
} from '@ant-design/icons';
import type { Feature } from '@/i18n/translations';
import styles from './FeatureHighlights.module.css';

const ICON_MAP: Record<string, React.ReactNode> = {
  BulbOutlined:           <BulbOutlined />,
  CompassOutlined:        <CompassOutlined />,
  CustomerServiceOutlined: <CustomerServiceOutlined />,
};

export default function FeatureHighlights({ features }: { features: Feature[] }) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.grid}>
          {features.map((f, i) => (
            <div key={i} className={`${styles.card} ${f.active ? styles.active : ''} reveal`}>
              <div className={styles.icon}>
                {ICON_MAP[f.icon] ?? null}
              </div>
              <div className={styles.text}>
                <span className={styles.category}>{f.category}</span>
                <h4>{f.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
