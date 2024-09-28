import type { Metadata } from 'next';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

import { articles as allArticles } from '#site/content';
import ScrollProgressBar from '@/components/common/scroll-progress-bar';
import TableOfContent from '@/components/common/table-of-content';
import MDXContent from '@/components/mdx';

import styles from './page.module.css';

export const runtime = 'edge';

type ArticlesProps = {
  params: {
    locale: string;
    slug: string;
  };
};

function getArticleBySlug(slug: string, locale: string) {
  return allArticles.find(
    (article) => article.slug === slug && article.language === locale,
  );
}

export async function generateMetadata({
  params: { locale, slug },
}: ArticlesProps): Promise<Metadata> {
  const article = getArticleBySlug(slug, locale);

  if (!article) return {};

  return {
    title: article.title,
    description: article.description,
    alternates: {
      canonical: `${locale}/articles/${article.slug}`,
      languages: {
        'en-US': '/en-US',
        'vi-VN': '/vi-VN',
      },
    },
  };
}

function ArticlesPage({ params: { locale, slug } }: ArticlesProps) {
  const article = getArticleBySlug(slug, locale);

  const t = useTranslations('articles.components.tableOfContents');

  if (!article) return <div>Article not found</div>;

  return (
    <>
      <ScrollProgressBar />
      <main className={styles.wrapper}>
        <article className={styles.content}>
          {article.cover && (
            <Image
              src={article.cover}
              alt={article.title}
              width={626}
              height={348}
              quality={80}
              placeholder='blur'
              blurDataURL='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkAAIAAAoAAv/lxKUAAAAASUVORK5CYII='
            />
          )}

          <h1 className={styles.heading}>{article.title}</h1>

          <p className='mt-0 text-xl text-slate-700 dark:text-slate-200'>
            {article.description}
          </p>

          <MDXContent code={article.body} />
        </article>
        <div>
          <TableOfContent
            title={t('title')}
            toc={article.toc}
            id='toc-in-this-article'
          />
        </div>
      </main>
    </>
  );
}

export default ArticlesPage;
