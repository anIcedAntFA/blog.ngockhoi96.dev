'use client';

import {
  HorizontalCardPost,
  VerticalCardPost,
} from '@/components/common/card-post';
import type { CardPost } from '@/components/common/card-post/card-post.type';
import ScrollProgressBar from '@/components/common/scroll-progress-bar';
import { viewLayouts } from '@/configs/constants';

import { useArticleViewLayout } from '../../_store/article.store';

import styles from './article-view-list.module.css';

type ArticleViewListProps = {
  data: CardPost[];
  isLoading?: boolean;
};

function ArticleViewList({ data }: ArticleViewListProps) {
  const viewLayout = useArticleViewLayout();

  return (
    <>
      <ScrollProgressBar />
      <div className={styles.wrapper}>
        {data.map((post) =>
          viewLayout === viewLayouts.LIST ? (
            <HorizontalCardPost key={post.id} data={post} />
          ) : (
            <VerticalCardPost key={post.id} data={post} />
          ),
        )}
      </div>
    </>
  );
}

export default ArticleViewList;
