import type { Metadata } from 'next';

import { articles as allArticles, author as allAuthors } from '#site/content';
import ScrollProgressBar from '@/components/common/scroll-progress-bar';
import MDXContent from '@/components/mdx';

import ArticleHeader from '../_components/article-header';
import ArticleToc from '../_components/article-toc';

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

  if (!article) return <div>Article not found</div>;

  const authors = article.authors
    .map((author) =>
      allAuthors.find(({ slug }) => slug === `authors/${author}`),
    )
    .filter((item) => item !== undefined);

  return (
    <>
      <ScrollProgressBar />
      <main className={styles.wrapper}>
        <article className={styles.content}>
          <ArticleHeader
            heading={article.title}
            authors={authors}
            modifiedDate={new Date(article.date).toDateString()}
            readingTime={`${article.metadata.readingTime} min read`}
            wordCount={article.metadata.wordCount}
          />

          <MDXContent code={article.body} />
        </article>
        <ArticleToc toc={article.toc} />
      </main>
    </>
  );
}

export default ArticlesPage;
