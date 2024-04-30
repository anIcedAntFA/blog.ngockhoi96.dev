import { Meta, StoryObj } from '@storybook/react';

import Ellipsis from '../ellipsis';

const meta = {
  title: 'Common/Pagination/Ellipsis',
  component: Ellipsis,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Ellipsis>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
};
