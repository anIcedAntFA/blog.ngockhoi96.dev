'use client';

import { useTranslations } from 'next-intl';

import Button from '../../button';
import styles from '../pagination.module.css';
import type { PaginationItemProps } from '../pagination.type';

function PaginationItem({
  color = 'base',
  totalPages,
  pageNumber,
  isSelected,
  onClick,
}: PaginationItemProps) {
  const t = useTranslations(
    'components.common.pagination.paginationItem.ariaLabel',
  );

  return (
    <li key={pageNumber} aria-setsize={totalPages} aria-posinset={pageNumber}>
      <Button
        variant='text'
        color={color}
        aria-label={
          isSelected
            ? `${t('page')} ${pageNumber}`
            : `${t('goToPage')} ${pageNumber}`
        }
        aria-current={isSelected ? 'true' : undefined}
        data-active={isSelected || undefined}
        className={styles.item}
        onClick={onClick}
      >
        {pageNumber}
      </Button>
    </li>
  );
}

export default PaginationItem;
