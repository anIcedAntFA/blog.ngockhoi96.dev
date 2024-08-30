import { useEffect, useRef, type ElementRef } from 'react';
import invariant from 'tiny-invariant';

import { equal } from '@/utils/equal';

import Link from '../link';

import { getIdFromUrl } from './table-of-content.helper';
import styles from './table-of-content.module.css';
import type { TableOfContentListProps } from './table-of-content.type';

function TableOfContentList({
  data,
  level,
  activeId,
  passedIds,
}: TableOfContentListProps) {
  const wrapperRef = useRef<ElementRef<'ul'>>(null);
  const activeItemRef = useRef<ElementRef<'a'>>(null);

  useEffect(() => {
    const handleScrollIntoItem = () => {
      if (!activeItemRef.current) return;

      const parent = document.querySelector<HTMLDivElement>(
        '[data-id="toc-wrapper"]',
      );
      invariant(parent, 'Parent element is not found');

      const item = activeItemRef.current;
      const parentHeight = window.getComputedStyle(parent).height;
      const itemOffsetTop = item.offsetTop;

      parent.scrollTo({
        top: itemOffsetTop - parseFloat(parentHeight) / 2,
        behavior: 'smooth',
      });
    };

    handleScrollIntoItem();
  }, [activeId]);

  return (
    <ul ref={wrapperRef} className={styles.list}>
      {data.map((item) => {
        const isPassedId = passedIds.includes(getIdFromUrl(item.url));
        const isActive = equal(getIdFromUrl(item.url), activeId);
        return (
          <li key={item.url}>
            <Link
              to={item.url}
              ref={isActive ? activeItemRef : null}
              aria-current={equal(getIdFromUrl(item.url), activeId)}
              data-passed-link={isPassedId || undefined}
              className={styles.item}
            >
              {item.title}
            </Link>
            {item.items.length > 0 && (
              <TableOfContentList
                data={item.items}
                level={level + 1}
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
