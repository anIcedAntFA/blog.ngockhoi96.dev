import { ComponentProps } from 'react';

export type PaginationProps = {
  totalCount: number;
  pageSize: number;
  currentPage: number;
  siblingCount: number;
  onPageChange: (page: number) => void;
};

export type PaginationItemProps = ComponentProps<'button'> & {
  totalPages: PaginationProps['totalCount'];
  pageNumber: PaginationProps['pageSize'];
  isSelected: boolean;
};
