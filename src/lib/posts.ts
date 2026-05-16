import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  tags: string[];
  locale: string;
}

export interface Post extends PostMeta {
  content: string;
}

const contentDir = path.join(process.cwd(), 'content/posts');

function getPostsDir(locale: string) {
  return path.join(contentDir, locale);
}

export function getAllSlugs(locale: string): string[] {
  const dir = getPostsDir(locale);
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir)
    .filter((f) => f.endsWith('.md'))
    .map((f) => f.replace(/\.md$/, ''));
}

export function getAllPosts(locale: string): PostMeta[] {
  const slugs = getAllSlugs(locale);
  return slugs
    .map((slug) => {
      const file = path.join(getPostsDir(locale), `${slug}.md`);
      const raw = fs.readFileSync(file, 'utf-8');
      const { data } = matter(raw);
      return {
        slug,
        locale,
        title: data.title ?? slug,
        date: data.date instanceof Date ? data.date.toISOString().slice(0, 10) : (data.date ?? ''),
        excerpt: data.excerpt ?? data.description ?? '',
        tags: data.tags ?? [],
      };
    })
    .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export async function getPost(slug: string, locale: string): Promise<Post | null> {
  const file = path.join(getPostsDir(locale), `${slug}.md`);
  if (!fs.existsSync(file)) return null;
  const raw = fs.readFileSync(file, 'utf-8');
  const { data, content } = matter(raw);
  const processed = await remark().use(html).process(content);
  return {
    slug,
    locale,
    title: data.title ?? slug,
    date: data.date instanceof Date ? data.date.toISOString().slice(0, 10) : (data.date ?? ''),
    excerpt: data.excerpt ?? data.description ?? '',
    tags: data.tags ?? [],
    content: processed.toString(),
  };
}
