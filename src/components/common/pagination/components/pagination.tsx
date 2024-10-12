import { useTranslations } from 'next-intl';

import ArrowLeftIcon from '@/components/icons/arrow-left-icon';
import ArrowRightIcon from '@/components/icons/arrow-right-icon';
import { colors } from '@/configs/constants';
import { equal } from '@/utils/equal';

import Button from '../../button';
import { DEFAULT_SIBLING_COUNT, FIRST_PAGE_INDEX } from '../pagination.config';
import useGetPageRange from '../pagination.hook';
import styles from '../pagination.module.css';
import type { PaginationProps } from '../pagination.type';

import Ellipsis from './ellipsis';
import PaginationItem from './pagination-item';

function Pagination({
  totalCount,
  pageSize,
  currentPage = FIRST_PAGE_INDEX,
  siblingCount = DEFAULT_SIBLING_COUNT,
  color = colors.BASE,
  onPageChange,
}: PaginationProps) {
  const t = useTranslations('components.common.pagination');

  const totalPages = Math.ceil(totalCount / pageSize);

  const pageRange = useGetPageRange({
    totalPages,
    currentPage,
    siblingCount,
  });

  if (equal(currentPage, 0) || pageRange.length < 2) return null;

  const lastPage = pageRange[pageRange.length - 1];

  return (
    <nav aria-label={t('ariaLabel')} className={styles.root}>
      <Button
        aria-label={t('previousButton.ariaLabel')}
        color={color}
        variant='text'
        icon={{
          position: 'left',
          children: <ArrowLeftIcon />,
          animation: 'shake-x',
        }}
        disabled={equal(currentPage, FIRST_PAGE_INDEX)}
        onClick={() => onPageChange(currentPage - 1)}
      >
        {t('previousButton.label')}
      </Button>

      <ol className={styles.list}>
        {pageRange.map((pageNumber) =>
          pageNumber < 0 ? (
            <Ellipsis key={pageNumber} color={color} />
          ) : (
            <PaginationItem
              key={pageNumber}
              color={color}
              totalPages={totalPages}
              pageNumber={pageNumber}
              isSelected={equal(pageNumber, currentPage)}
              onClick={() => onPageChange(pageNumber)}
            />
          ),
        )}
      </ol>

      <Button
        aria-label={t('nextButton.ariaLabel')}
        color={color}
        variant='text'
        icon={{
          position: 'right',
          children: <ArrowRightIcon />,
          animation: 'shake-x',
        }}
        disabled={equal(currentPage, lastPage)}
        onClick={() => onPageChange(currentPage + 1)}
      >
        {t('nextButton.label')}
      </Button>
    </nav>
  );
}

export default Pagination;
