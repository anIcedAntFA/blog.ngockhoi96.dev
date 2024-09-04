'use client';

import { motion } from 'framer-motion';
import { useId } from 'react';

import {
  DEFAULT_OFFSET_TOP,
  ITEM_HEIGHT,
  MAX_DEPTH,
} from '../table-of-content.config';
import {
  getItemIds,
  getMotionAnimateMarker,
  getPassedIds,
} from '../table-of-content.helper';
import useActiveItemId from '../table-of-content.hook';
import styles from '../table-of-content.module.css';
import type { TableOfContentProps } from '../table-of-content.type';

import TableOfContentList from './table-of-content-list';

function TableOfContent({ title, toc, id }: TableOfContentProps) {
  const internalId = useId();

  const itemIds = getItemIds(toc, MAX_DEPTH);
  const activeId = useActiveItemId(itemIds, DEFAULT_OFFSET_TOP);
  const passedIds = getPassedIds(itemIds, activeId);

  return (
    <div className={styles.wrapper} data-id="toc-wrapper">
      <aside className={styles.aside}>
        <nav aria-labelledby={id || `toc-${internalId}`}>
          <section className={styles.section}>
            <header>
              <h2 id={id || `toc-${internalId}`} className={styles.heading}>
                {title}
              </h2>
            </header>
            <motion.div
              animate={getMotionAnimateMarker(
                !!activeId,
                ITEM_HEIGHT,
                passedIds.length + 1,
              )}
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
