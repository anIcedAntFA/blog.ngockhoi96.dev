import type { Metadata } from 'next';

import { posts } from '@/__mocks__';

import ArticleViewLayouts from './_components/article-view-layouts';
import ArticleViewList from './_components/article-view-list';
import styles from './page.module.css';

export const runtime = 'edge';

export const metadata: Metadata = {
  title: 'Article',
  description: 'Article page',
};

async function ArticlePage() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.control}>
        <div>tab filter</div>
        <ArticleViewLayouts />
      </div>

      <ArticleViewList data={posts} isLoading={false} />
    </div>
  );
}

export default ArticlePage;
