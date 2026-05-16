'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MenuOutlined, CloseOutlined, GlobalOutlined } from '@ant-design/icons';
import styles from './NavBar.module.css';

interface NavProps {
  locale: string;
  nav: { home: string; posts: string; about: string; contact: string };
}

export default function NavBar({ locale, nav }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const base = locale === 'en' ? '/en' : '/zh';
  const altLocale = locale === 'en' ? 'zh' : 'en';
  const altBase = altLocale === 'en' ? '/en' : '/zh';

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const links = [
    { href: `${base}`, label: nav.home },
    { href: `${base}/posts`, label: nav.posts },
    { href: `${base}/about`, label: nav.about },
    { href: `${base}/contact`, label: nav.contact },
  ];

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <Link href={`${base}`} className={styles.logo}>
          <Image src="/assets/img/logo/logo.png" alt="锦麒行" width={140} height={40} priority />
        </Link>

        <nav className={`${styles.nav} ${menuOpen ? styles.open : ''}`}>
          {links.map((l) => (
            <Link key={l.href} href={l.href} className={styles.navLink} onClick={() => setMenuOpen(false)}>
              {l.label}
            </Link>
          ))}
          <Link href={altBase} className={styles.langBtn}>
            <GlobalOutlined />
            <span>{locale === 'en' ? '中文' : 'EN'}</span>
          </Link>
        </nav>

        <button className={styles.menuToggle} onClick={() => setMenuOpen(!menuOpen)} aria-label="menu">
          {menuOpen ? <CloseOutlined /> : <MenuOutlined />}
        </button>
      </div>
    </header>
  );
}
