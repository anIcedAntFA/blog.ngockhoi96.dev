'use client';

import { useTranslations } from 'next-intl';

import CustomTooltip from '@/components/common/custom-tooltip';
import IconButton from '@/components/common/icon-button';
import GridLayoutIcon from '@/components/icons/grid-layout-icon';
import ListIcon from '@/components/icons/list-icon';
import { viewLayouts } from '@/configs/constants';

import {
  useArticleActions,
  useArticleViewLayout,
} from '../../_store/article.store';

import styles from './article-view-layouts.module.css';

function ArticleViewLayouts() {
  const t = useTranslations('articles.components.articleViewLayouts');

  const viewLayout = useArticleViewLayout();
  const { setViewType } = useArticleActions();

  return (
    <div className={styles.group}>
      <CustomTooltip label={t('list.tooltipLabel')} hasArrow>
        <IconButton
          label={t('list.iconButtonLabel')}
          isActive={viewLayout === viewLayouts.LIST}
          onClick={() => setViewType('list')}
        >
          <ListIcon />
        </IconButton>
      </CustomTooltip>
      <CustomTooltip label={t('grid.tooltipLabel')} hasArrow>
        <IconButton
          label={t('grid.iconButtonLabel')}
          isActive={viewLayout === viewLayouts.GRID}
          onClick={() => setViewType('grid')}
        >
          <GridLayoutIcon />
        </IconButton>
      </CustomTooltip>
    </div>
  );
}

export default ArticleViewLayouts;
