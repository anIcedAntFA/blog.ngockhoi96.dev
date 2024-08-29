'use client';

import TableOfContentItem from './table-of-content-item';
import { getItemIds } from './table-of-content.helper';
import useActiveItemId from './table-of-content.hook';
import styles from './table-of-content.module.css';
import type { TableOfContentProps } from './table-of-content.type';

function TableOfContent({ toc }: TableOfContentProps) {
  const itemIds = getItemIds(toc, 6);

  const activeHeading = useActiveItemId(itemIds);

  return (
    <div className={styles.wrapper}>
      <aside>
        <nav>
          <section>
            <header>
              <h2>In this article</h2>
            </header>
            <TableOfContentItem data={toc} level={1} activeId={activeHeading} />
          </section>
        </nav>
      </aside>
    </div>
  );
}

export default TableOfContent;
