import { render, screen, within } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import Pagination from '../pagination';
import { PaginationProps } from '../pagination.type';

const renderPagination = ({ currentPage, ...props }: PaginationProps) => {
  render(<Pagination currentPage={currentPage} {...props} />);

  return {
    currentPage,
  };
};

describe('Pagination', () => {
  describe('Rendering', () => {
    it('should render the pagination component correctly', () => {
      const onPageChange = vi.fn();

      renderPagination({
        totalCount: 100,
        pageSize: 10,
        currentPage: 1,
        siblingCount: 1,
        onPageChange,
      });

      const pagination = screen.getByRole('navigation', { name: 'pagination' });
      expect(pagination).toBeVisible();

      const previousButton = within(pagination).getByRole('button', {
        name: 'previous page',
      });
      expect(previousButton).toBeVisible();

      const nextButton = within(pagination).getByRole('button', {
        name: 'next page',
      });
      expect(nextButton).toBeVisible();

      const paginationListItems = within(pagination).getByRole('list');
      expect(paginationListItems).toBeVisible();

      const paginationItems =
        within(paginationListItems).getAllByRole('button');

      //* 1 2 3 4 5 ... 10
      expect(paginationItems).toHaveLength(6);
    });

    it('should not render pagination if the currentPage is equal to 0', () => {
      const onPageChange = vi.fn();

      renderPagination({
        totalCount: 100,
        pageSize: 10,
        currentPage: 0,
        siblingCount: 1,
        onPageChange,
      });

      expect(screen.queryByRole('navigation')).not.toBeInTheDocument();
    });

    it('should not render pagination if the pageRange length is less than 2', () => {
      const onPageChange = vi.fn();

      renderPagination({
        totalCount: 10,
        pageSize: 10,
        currentPage: 1,
        siblingCount: 1,
        onPageChange,
      });

      expect(screen.queryByRole('navigation')).not.toBeInTheDocument();
    });
  });

  describe('Navigation buttons', () => {
    it('should disables `Previous` button when the currentPage is equal to the first page', () => {
      const onPageChange = vi.fn();

      renderPagination({
        totalCount: 100,
        pageSize: 10,
        currentPage: 1,
        siblingCount: 1,
        onPageChange,
      });

      const previousButton = screen.getByRole('button', {
        name: 'previous page',
      });
      expect(previousButton).toBeDisabled();
      expect(previousButton).toHaveAttribute('aria-disabled', 'true');
    });

    it('should disable `Next` button when the currentPage is equal to last page', () => {
      const onPageChange = vi.fn();

      renderPagination({
        totalCount: 100,
        pageSize: 10,
        currentPage: 10,
        siblingCount: 1,
        onPageChange,
      });

      const nextButton = screen.getByRole('button', {
        name: 'next page',
      });
      expect(nextButton).toBeDisabled();
      expect(nextButton).toHaveAttribute('aria-disabled', 'true');
    });
  });

  describe('Ellipsis behavior', () => {
    it('should render the pagination component without ellipsis', () => {
      const onPageChange = vi.fn();

      renderPagination({
        totalCount: 40,
        pageSize: 10,
        currentPage: 1,
        siblingCount: 1,
        onPageChange,
      });

      const paginationItems = within(screen.getByRole('list')).getAllByRole(
        'button',
      );
      //* 1 2 3 4
      expect(paginationItems).toHaveLength(4);
      expect(paginationItems.map((item) => item.textContent)).toEqual([
        '1',
        '2',
        '3',
        '4',
      ]);

      const ellipsis = screen.queryByText('...');
      expect(ellipsis).not.toBeInTheDocument();
    });

    it('should render only right ellipsis', () => {
      const onPageChange = vi.fn();

      renderPagination({
        totalCount: 100,
        pageSize: 10,
        currentPage: 2,
        siblingCount: 1,
        onPageChange,
      });

      const paginationItems = within(screen.getByRole('list')).getAllByRole(
        'button',
      );
      //* 1 2 3 4 5 ... 10
      expect(paginationItems).toHaveLength(6);
      expect(paginationItems.map((item) => item.textContent)).toEqual([
        '1',
        '2',
        '3',
        '4',
        '5',
        '10',
      ]);

      const ellipsis = screen.getByText('...');
      expect(ellipsis).toBeVisible();
    });

    it('should render only left ellipsis', () => {
      const onPageChange = vi.fn();

      renderPagination({
        totalCount: 100,
        pageSize: 10,
        currentPage: 8,
        siblingCount: 1,
        onPageChange,
      });

      const paginationItems = within(screen.getByRole('list')).getAllByRole(
        'button',
      );
      //* 1 ... 6 7 8 9 10
      expect(paginationItems).toHaveLength(6);
      expect(paginationItems.map((item) => item.textContent)).toEqual([
        '1',
        '6',
        '7',
        '8',
        '9',
        '10',
      ]);

      const ellipsis = screen.getByText('...');
      expect(ellipsis).toBeVisible();
    });

    it('should render both left and right ellipsis', () => {
      const onPageChange = vi.fn();

      renderPagination({
        totalCount: 100,
        pageSize: 10,
        currentPage: 5,
        siblingCount: 1,
        onPageChange,
      });

      const paginationItems = within(screen.getByRole('list')).getAllByRole(
        'button',
      );
      //* 1 ... 4 5 6 ... 10
      expect(paginationItems).toHaveLength(5);
      expect(paginationItems.map((item) => item.textContent)).toEqual([
        '1',
        '4',
        '5',
        '6',
        '10',
      ]);

      const ellipsis = screen.getAllByText('...');
      expect(ellipsis).toHaveLength(2);
    });
  });
});
