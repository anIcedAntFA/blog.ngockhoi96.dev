import { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Pagination from '../pagination';
import { PaginationProps } from '../pagination.type';
import { useState } from 'react';

const meta = {
  title: 'Common/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    color: {
      name: 'Color',
      description: 'Pagination color',
      defaultValue: 'base',
      control: 'inline-radio',
      options: ['primary', 'base'],
    },
    totalCount: {
      name: 'Total Count',
      description: 'Total count of items',
      defaultValue: 100,
      control: 'number',
    },
    pageSize: {
      name: 'Page Size',
      description: 'Page size',
      defaultValue: 10,
      control: 'number',
    },
    currentPage: {
      name: 'Current Page',
      description: 'Current page',
      defaultValue: 1,
      control: 'number',
    },
    siblingCount: {
      name: 'Sibling Count',
      description: 'Sibling count',
      defaultValue: 1,
      control: 'number',
    },
    onPageChange: {
      name: 'On Page Change',
      description: 'On page change callback',
      action: 'onPageChange',
    },
  },
} satisfies Meta<typeof Pagination>;

export default meta;

type Story = StoryObj<typeof meta>;

const RenderedPagination = ({
  currentPage: pageNumber,
  onPageChange,
  ...restProps
}: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState<number>(pageNumber);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  return (
    <Pagination
      currentPage={currentPage}
      onPageChange={handlePageChange}
      {...restProps}
    />
  );
};

export const FirstPage: Story = {
  args: {
    totalCount: 50,
    pageSize: 10,
    currentPage: 1,
    siblingCount: 1,
    onPageChange: action('onPageChange'),
  },
  render: RenderedPagination,
};

export const LastPage: Story = {
  args: {
    totalCount: 50,
    pageSize: 10,
    currentPage: 5,
    siblingCount: 1,
    onPageChange: action('onPageChange'),
  },
  render: RenderedPagination,
};

export const LeftEllipsis: Story = {
  args: {
    totalCount: 100,
    pageSize: 10,
    currentPage: 3,
    siblingCount: 1,
    onPageChange: action('onPageChange'),
  },
  render: RenderedPagination,
};

export const RightEllipsis: Story = {
  args: {
    totalCount: 100,
    pageSize: 10,
    currentPage: 8,
    siblingCount: 1,
    onPageChange: action('onPageChange'),
  },
  render: RenderedPagination,
};

export const TwoEllipsis: Story = {
  args: {
    totalCount: 100,
    pageSize: 10,
    currentPage: 6,
    siblingCount: 1,
    onPageChange: action('onPageChange'),
  },
  render: RenderedPagination,
};
