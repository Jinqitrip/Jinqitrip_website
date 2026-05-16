import Link from 'next/link';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <div className={styles.wrap}>
      <h1 className={styles.code}>404</h1>
      <h2 className={styles.title}>页面未找到</h2>
      <p className={styles.desc}>您访问的页面不存在或已被移动。</p>
      <Link href="/zh" className="theme-btn">
        <span>返回首页</span>
      </Link>
    </div>
  );
}
