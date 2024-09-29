'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import type { ElementRef } from 'react';
import { useRef } from 'react';

import Portal from '@/components/common/portal';
import TableOfContent from '@/components/common/table-of-content';
import TocProgressBar from '@/components/common/table-of-content/components/toc-progress-bar';
import useBoolean from '@/hooks/use-boolean';
import useOutsideClick from '@/hooks/use-outside-click';

import styles from './article-toc.module.css';

type TocEntry = {
  items: TocEntry[];
  title: string;
  url: string;
};

type ArticleTocProps = {
  toc: TocEntry[];
};

function ArticleToc({ toc }: ArticleTocProps) {
  const btnRef = useRef<ElementRef<'button'>>(null);
  const tocWrapperRef = useRef<ElementRef<'div'>>(null);

  const t = useTranslations('articles.components.tableOfContents');

  const showToc = useBoolean(false);

  useOutsideClick({
    ref: btnRef,
    handler: (event) => {
      const target = event.target as HTMLElement;
      if (showToc.value && !tocWrapperRef.current?.contains(target)) {
        showToc.off();
      }
    },
  });

  return (
    <>
      <button
        ref={btnRef}
        type='button'
        className={styles['progress-bar-btn']}
        onClick={showToc.toggle}
      >
        <TocProgressBar toc={toc} />
      </button>

      <AnimatePresence>
        {showToc.value && (
          <Portal>
            <motion.div
              ref={tocWrapperRef}
              initial={{ opacity: 0, scale: 0.5, translateY: '-50%' }}
              animate={{ opacity: 1, scale: 1, translateY: '-50%' }}
              exit={{ opacity: 0, scale: 0, translateY: '-50%' }}
              className={styles.wrapper}
              style={{
                top: '50%',
                right: `calc(${btnRef.current?.getBoundingClientRect().width}px + 24px)`,
              }}
            >
              <TableOfContent
                id='toc-in-this-article'
                title={t('title')}
                toc={toc}
              />
            </motion.div>
          </Portal>
        )}
      </AnimatePresence>
    </>
  );
}

export default ArticleToc;
