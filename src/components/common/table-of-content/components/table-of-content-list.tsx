import { motion } from 'framer-motion';

import Link from '@/components/common/link';
import { equal } from '@/utils/equal';

import { MAX_DEPTH } from '../table-of-content.config';
import {
  getMotionAnimateBgIndicator,
  getIdFromUrl,
} from '../table-of-content.helper';
import styles from '../table-of-content.module.css';
import type { TableOfContentListProps } from '../table-of-content.type';

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
        const hasNestedTocList = items.length > 0 && depth <= MAX_DEPTH;

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
                animate={getMotionAnimateBgIndicator(isActiveId)}
                className={styles['bg-indicator']}
              />
              {title}
            </Link>
            {hasNestedTocList && (
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
