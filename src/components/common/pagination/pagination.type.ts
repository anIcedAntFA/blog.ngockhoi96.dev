import type { ComponentProps } from 'react';

import type { Color } from '@/types/constants';

export type PaginationProps = {
  totalCount: number;
  pageSize: number;
  currentPage: number;
  onPageChange: (page: number) => void;
  siblingCount?: number;
  color?: Color;
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
