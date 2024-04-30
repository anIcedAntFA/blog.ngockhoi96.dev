import Button from '../button';

import styles from './pagination.module.css';
import { PaginationItemProps } from './pagination.type';

function PaginationItem({
  totalPages,
  pageNumber,
  isSelected,
  onClick,
}: PaginationItemProps) {
  return (
    <li key={pageNumber} aria-setsize={totalPages} aria-posinset={pageNumber}>
      <Button
        variant="text"
        aria-label={
          isSelected ? `page ${pageNumber}` : `go to page ${pageNumber}`
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
