import { Meta, StoryObj } from '@storybook/react';

import Ellipsis from '../ellipsis';

const meta = {
  title: 'Common/Pagination/Ellipsis',
  component: Ellipsis,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    color: {
      name: 'Color',
      description: 'Ellipsis color',
      defaultValue: 'base',
      control: 'inline-radio',
      options: ['primary', 'base'],
    },
  },
} satisfies Meta<typeof Ellipsis>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: 'base',
  },
};

export const Primary: Story = {
  args: {
    color: 'primary',
  },
};
