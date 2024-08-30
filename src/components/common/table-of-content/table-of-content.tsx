'use client';

import TableOfContentList from './table-of-content-list';
import { getItemIds, getPassedIds } from './table-of-content.helper';
import useActiveItemId from './table-of-content.hook';
import styles from './table-of-content.module.css';
import type { TableOfContentProps } from './table-of-content.type';

function TableOfContent({ toc }: TableOfContentProps) {
  const itemIds = getItemIds(toc, 6);

  const activeId = useActiveItemId(itemIds);

  const passedIds = getPassedIds(itemIds, activeId);

  return (
    <div className={styles.wrapper} data-id="toc-wrapper">
      <aside className={styles.aside}>
        <nav>
          <section className={styles.section}>
            <header>
              <h2 className={styles.heading}>In this article</h2>
            </header>
            <TableOfContentList
              data={toc}
              level={1}
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
