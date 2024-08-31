'use client';

import { motion } from 'framer-motion';

import TableOfContentList from './table-of-content-list';
import { getItemIds, getPassedIds } from './table-of-content.helper';
import useActiveItemId from './table-of-content.hook';
import styles from './table-of-content.module.css';
import type { TableOfContentProps } from './table-of-content.type';

const ITEM_HEIGHT = 40;

const markerMotions = {
  initial: { top: 0 },
  animate: (passedIdsCount: number) => ({
    top: `calc(${ITEM_HEIGHT}px * ${passedIdsCount})`,
  }),
};

function TableOfContent({ toc }: TableOfContentProps) {
  const itemIds = getItemIds(toc, 6);
  const activeId = useActiveItemId(itemIds);
  const passedIds = getPassedIds(itemIds, activeId);

  return (
    <div className={styles.wrapper} data-id="toc-wrapper">
      <aside className={styles.aside}>
        <nav aria-labelledby="toc-in-this-article">
          <section className={styles.section}>
            <header>
              <h2 id="toc-in-this-article" className={styles.heading}>
                In this article
              </h2>
            </header>
            <motion.div
              initial={markerMotions.initial}
              animate={markerMotions.animate(passedIds.length + 1)}
              className={styles.marker}
            />
            <TableOfContentList
              data={toc}
              depth={1}
              activeId={activeId}
              passedIds={passedIds}
            />
          </section>
        </nav>
      </aside>
    </div>
  );
}

export default TableOfContent;
