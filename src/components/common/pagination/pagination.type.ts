import type { ComponentProps } from 'react';

import type { Color } from '@/types/constants';

export type PaginationProps = {
  color?: Color;
  totalCount: number;
  pageSize: number;
  currentPage: number;
  siblingCount: number;
  onPageChange: (page: number) => void;
};

export type PaginationItemProps = ComponentProps<'button'> & {
  color?: PaginationProps['color'];
  totalPages: PaginationProps['totalCount'];
  pageNumber: PaginationProps['pageSize'];
  isSelected: boolean;
};

export type EllipsisProps = {
  color?: PaginationProps['color'];
};
