import { motion } from 'framer-motion';

import { equal } from '@/utils/equal';

import Link from '../link';

import { getIdFromUrl } from './table-of-content.helper';
import styles from './table-of-content.module.css';
import type { TableOfContentListProps } from './table-of-content.type';

const bgIndicatorMotions = {
  initial: { width: 0, opacity: 0 },
  animate: (isActive: boolean) => ({
    width: isActive ? '100%' : 0,
    opacity: isActive ? 1 : 0,
    transition: { delay: 0.05 },
  }),
};

const MAX_DEPTH = 6;

function TableOfContentList({
  data,
  depth,
  activeId,
  passedIds,
}: TableOfContentListProps) {
  return (
    <ul className={styles.list}>
      {data.map(({ items, title, url }) => {
        const itemId = getIdFromUrl(url);
        const isPassedId = passedIds.includes(itemId);
        const isActiveId = equal(itemId, activeId);
        return (
          <li key={url}>
            <Link
              to={url}
              aria-current={isActiveId}
              className={styles.item}
              data-depth={depth}
              data-passed-link={isPassedId || undefined}
            >
              <motion.span
                initial={bgIndicatorMotions.initial}
                animate={bgIndicatorMotions.animate(isActiveId)}
                className={styles['bg-indicator']}
              />
              {title}
            </Link>
            {items.length > 0 && depth <= MAX_DEPTH && (
              <TableOfContentList
                data={items}
                depth={depth + 1}
                activeId={activeId}
                passedIds={passedIds}
              />
            )}
          </li>
        );
      })}
    </ul>
  );
}

export default TableOfContentList;
