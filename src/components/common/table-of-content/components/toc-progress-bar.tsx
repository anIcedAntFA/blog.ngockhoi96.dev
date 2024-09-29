import { equal } from '@/utils/equal';

import { DEFAULT_OFFSET_TOP, MAX_DEPTH } from '../toc.config';
import { getItemIdsWithDepth } from '../toc.helper';
import useActiveItemId from '../toc.hook';
import styles from '../toc.module.css';
import type { TocEntry } from '../toc.type';

type TocProgressBarProps = {
  toc: TocEntry[];
};

function TocProgressBar({ toc }: TocProgressBarProps) {
  const itemIdsWithDepth = getItemIdsWithDepth(toc, MAX_DEPTH);
  const itemIds = itemIdsWithDepth.map(({ id }) => id);
  const activeId = useActiveItemId(itemIds, DEFAULT_OFFSET_TOP);

  return (
    <div className={styles['progress-bar']}>
      {itemIdsWithDepth.map(({ id, depth }) => (
        <div
          key={id}
          className={styles['progress-bar-item']}
          data-depth={depth}
          data-active={equal(id, activeId)}
        />
      ))}
    </div>
  );
}

export default TocProgressBar;
