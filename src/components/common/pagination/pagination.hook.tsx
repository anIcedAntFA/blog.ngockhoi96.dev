import type { ComponentProps } from 'react';
import { useMemo } from 'react';

import type Pagination from './pagination';
import {
  FIRST_PAGE_INDEX,
  LEFT_ELLIPSIS_PAGE_INDEX,
  MAXIMUM_AMOUNT_OF_ELLIPSES,
  MINIMUM_AMOUNT_OF_ELEMENTS,
  MINIMUM_AMOUNT_OF_ELEMENTS_REPLACED_WITH_ELLIPSIS,
  RIGHT_ELLIPSIS_PAGE_INDEX,
} from './pagination.config';
import { range } from './pagination.helper';

type UseGetPageRangeProps = {
  totalPages: ComponentProps<typeof Pagination>['totalCount'];
  currentPage: ComponentProps<typeof Pagination>['currentPage'];
  siblingCount: ComponentProps<typeof Pagination>['siblingCount'];
};

/**
 * @remarks `useGetPageRange`is a custom hook to get the range of pages to display in the pagination component.
 * It calculates the range based on the total pages, current page, and sibling count.
 * It also handles the display of ellipsis for large number of pages.
 *
 * @param {UseGetPageRangeProps} props - The properties to calculate page range.
 *
 * @returns {number[]} - An array of page numbers and ellipsis to be displayed.
 *
 * @example
 * ```ts
 * const pageRange = useGetPageRange({
 *  totalPages: 10,
 *  currentPage: 5,
 *  siblingCount: 1,
 * });
 * // Prints: [1, -1, 4, 5, 6, -2, 10] // meaning: 1 ... 4 5 6 ... 10
 * console.log(pageRange);
 * ```
 */

function useGetPageRange({
  totalPages,
  currentPage,
  siblingCount,
}: UseGetPageRangeProps): number[] {
  const pageRange = useMemo(() => {
    //* 1 ... 5 6 7 ... 10 => 2 siblings on each side of the current page (6)
    const totalSiblingCount = siblingCount * 2;
    const lastPageIndex = totalPages;

    const visiblePages =
      MINIMUM_AMOUNT_OF_ELEMENTS +
      MAXIMUM_AMOUNT_OF_ELLIPSES +
      totalSiblingCount;

    //* 1 2 3 4 5
    if (totalPages <= visiblePages) {
      return range(FIRST_PAGE_INDEX, lastPageIndex);
    }

    //* 2 = firstPageIndex + currentEllipsisIndex
    const hasLeftEllipsis =
      currentPage - siblingCount - 2 >=
      MINIMUM_AMOUNT_OF_ELEMENTS_REPLACED_WITH_ELLIPSIS;

    //* 2 = currentEllipsisIndex + lastPageIndex
    const hasRightEllipsis = currentPage + siblingCount + 2 < totalPages;

    //* 1 2 3 4 5 ... 10
    if (!hasLeftEllipsis && hasRightEllipsis) {
      const leftPagesLastIndex = MINIMUM_AMOUNT_OF_ELEMENTS + totalSiblingCount;
      const leftPages = range(FIRST_PAGE_INDEX, leftPagesLastIndex);

      return [...leftPages, RIGHT_ELLIPSIS_PAGE_INDEX, lastPageIndex];
    }

    //* 1 ... 6 7 8 9 10
    if (hasLeftEllipsis && !hasRightEllipsis) {
      const rightPagesFirstIndex =
        MINIMUM_AMOUNT_OF_ELEMENTS + totalSiblingCount;
      const rightPages = range(
        totalPages - rightPagesFirstIndex + 1,
        lastPageIndex,
      );

      return [FIRST_PAGE_INDEX, LEFT_ELLIPSIS_PAGE_INDEX, ...rightPages];
    }

    //* 1 ... 5 6 7 ... 10
    if (hasLeftEllipsis && hasRightEllipsis) {
      const middlePageRange = range(
        currentPage - siblingCount,
        currentPage + siblingCount,
      );

      return [
        FIRST_PAGE_INDEX,
        LEFT_ELLIPSIS_PAGE_INDEX,
        ...middlePageRange,
        RIGHT_ELLIPSIS_PAGE_INDEX,
        lastPageIndex,
      ];
    }

    return [];
  }, [totalPages, currentPage, siblingCount]);

  return pageRange;
}

export default useGetPageRange;
