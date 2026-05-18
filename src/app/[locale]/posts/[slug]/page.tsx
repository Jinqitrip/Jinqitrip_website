import type { Metadata } from 'next';
import { getT } from '@/i18n/translations';
import { getPost, getAllSlugs } from '@/lib/posts';
import { pageMetadata } from '@/lib/siteUrl';

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  const post = await getPost(slug, locale);
  return pageMetadata(locale, `/posts/${slug}/`, post?.title);
}
import Breadcrumb from '@/components/sections/Breadcrumb';
import { notFound } from 'next/navigation';
import styles from './post.module.css';

export async function generateStaticParams() {
  const locales = ['zh', 'en'];
  const params: { locale: string; slug: string }[] = [];
  for (const locale of locales) {
    const slugs = getAllSlugs(locale);
    slugs.forEach((slug) => params.push({ locale, slug }));
  }
  return params;
}

export default async function PostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  const t = getT(locale);
  const post = await getPost(slug, locale);
  if (!post) notFound();

  return (
    <>
      <Breadcrumb
        title={post.title}
        items={[
          { text: locale === 'en' ? 'Home' : '首页', href: `/${locale}` },
          { text: t.posts.title, href: `/${locale}/posts` },
          { text: post.title },
        ]}
      />
      <section className="section-padding">
        <div className="container">
          <article className={styles.article}>
            <div className={styles.meta}>
              <span>📅 {post.date}</span>
              {post.tags.length > 0 && (
                <span>🏷 {post.tags.join(', ')}</span>
              )}
            </div>
            <div
              className={styles.body}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>
        </div>
      </section>
    </>
  );
}
