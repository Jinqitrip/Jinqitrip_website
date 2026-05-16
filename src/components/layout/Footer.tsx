'use client';

import Link from 'next/link';
import Image from 'next/image';
import { GithubOutlined } from '@ant-design/icons';
import styles from './Footer.module.css';

interface FooterProps {
  locale: string;
  footer: { copyright: string; github: string; company: string };
}

export default function Footer({ locale, footer }: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <Image src="/assets/img/logo/logo.png" alt="锦麒行" width={120} height={34} />
          <p className={styles.tagline}>{locale === 'en' ? 'Your One-Stop Travel Expert' : '您的一站式出行专家'}</p>
        </div>
        <div className={styles.bottom}>
          <Link href="https://github.com/Jinqitrip" target="_blank" className={styles.github}>
            <GithubOutlined />
            <span>{footer.github}</span>
          </Link>
          <span className={styles.sep}>|</span>
          <span className={styles.company}>{footer.company}</span>
          <span className={styles.sep}>|</span>
          <span>{footer.copyright}</span>
        </div>
      </div>
    </footer>
  );
}
