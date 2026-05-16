'use client';

import Link from 'next/link';
import { RightOutlined } from '@ant-design/icons';
import styles from './Breadcrumb.module.css';

interface BreadcrumbItem { text: string; href?: string; }

interface Props {
  title: string;
  items: BreadcrumbItem[];
  background?: string;
}

export default function Breadcrumb({ title, items, background = '/assets/img/breadcrumb.jpg' }: Props) {
  return (
    <div className={`${styles.wrap} bg-cover`} style={{ backgroundImage: `url('${background}')` }}>
      <div className={styles.overlay} />
      <div className="container">
        <div className={styles.content}>
          <h1 className={styles.title}>{title}</h1>
          <nav className={styles.crumbs}>
            {items.map((item, i) => (
              <span key={i} className={styles.crumbItem}>
                {item.href ? <Link href={item.href}>{item.text}</Link> : <span>{item.text}</span>}
                {i < items.length - 1 && <RightOutlined className={styles.sep} />}
              </span>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
