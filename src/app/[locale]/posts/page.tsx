import { getT } from '@/i18n/translations';
import { getAllPosts } from '@/lib/posts';
import Breadcrumb from '@/components/sections/Breadcrumb';
import Link from 'next/link';
import styles from './posts.module.css';

export default async function PostsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = getT(locale);
  const posts = getAllPosts(locale);

  return (
    <>
      <Breadcrumb
        title={t.posts.title}
        items={[
          { text: locale === 'en' ? 'Home' : '首页', href: `/${locale}` },
          { text: t.posts.title },
        ]}
      />
      <section className="section-padding">
        <div className="container">
          {posts.length === 0 ? (
            <p className={styles.empty}>{t.posts.noPosts}</p>
          ) : (
            <div className={styles.grid}>
              {posts.map((post) => (
                <Link key={post.slug} href={`/${locale}/posts/${post.slug}`} className={styles.card}>
                  <div className={styles.meta}>
                    <span>📅 {post.date}</span>
                    {post.tags.length > 0 && (
                      <span>🏷 {post.tags.join(', ')}</span>
                    )}
                  </div>
                  <h3 className={styles.title}>{post.title}</h3>
                  {post.excerpt && <p className={styles.excerpt}>{post.excerpt}</p>}
                  <span className={styles.readMore}>{t.posts.readMore} →</span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
