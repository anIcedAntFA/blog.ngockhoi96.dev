import { Meta, StoryObj } from '@storybook/react';

import Flex from '@/components/common/flex';
import Kbd from '@/components/common/kbd';
import VisuallyHidden from '../visually-hidden';

const meta = {
  title: 'Common/VisuallyHidden',
  component: VisuallyHidden,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof VisuallyHidden>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Title',
  },
};

export const WithSearch: Story = {
  args: {},
  render: () => (
    <Flex align='center' spacing={4}>
      <VisuallyHidden>Press</VisuallyHidden>
      <Kbd>Ctrl</Kbd>
      <VisuallyHidden>and</VisuallyHidden>
      <Kbd>K</Kbd>
      <VisuallyHidden>to-search</VisuallyHidden>
    </Flex>
  ),
};
