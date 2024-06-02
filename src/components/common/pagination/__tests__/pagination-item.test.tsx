import { render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import PaginationItem from '../pagination-item';
import type { PaginationItemProps } from '../pagination.type';

const renderPaginationItem = (props: PaginationItemProps) => {
  render(<PaginationItem {...props} />);
};

describe('PaginationItem', () => {
  it('should render the page item correctly, including the corresponding ARIA attributes', () => {
    renderPaginationItem({
      totalPages: 10,
      pageNumber: 1,
      isSelected: false,
    });

    const paginationItem = screen.getByRole('listitem');
    const button = within(paginationItem).getByRole('button');

    expect(paginationItem).toBeVisible();
    expect(paginationItem).toHaveAttribute('aria-setsize', '10');
    expect(paginationItem).toHaveAttribute('aria-posinset', '1');
    expect(button).toHaveTextContent('1');
    expect(button).toHaveAttribute('aria-label', 'go to page 1');
    expect(button).not.toHaveAttribute('aria-current');
    expect(button).not.toHaveAttribute('data-active');
    expect(button).toHaveAttribute('data-color', 'base');
  });

  it('should render the selected page item correctly, including the corresponding ARIA attributes', () => {
    renderPaginationItem({
      color: 'primary',
      totalPages: 10,
      pageNumber: 2,
      isSelected: true,
    });

    const paginationItem = screen.getByRole('listitem');
    const button = within(paginationItem).getByRole('button');

    expect(button).toHaveAttribute('aria-label', 'page 2');
    expect(button).toHaveAttribute('aria-current', 'true');
    expect(button).toHaveAttribute('data-color', 'primary');
    expect(button).toHaveAttribute('data-active', 'true');
  });
});
