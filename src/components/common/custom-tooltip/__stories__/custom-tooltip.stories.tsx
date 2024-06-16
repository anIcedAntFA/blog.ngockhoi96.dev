import { Meta, StoryObj } from '@storybook/react';

import CustomTooltip from '../custom-tooltip';

const meta = {
  title: 'Common/CustomTooltip',
  component: CustomTooltip,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    label: {
      name: 'Label',
      description: 'Tooltip label',
      defaultValue: 'Tooltip',
      control: 'text',
    },
    hasArrow: {
      name: 'Has arrow',
      description: 'Tooltip has arrow',
      defaultValue: false,
      control: 'boolean',
    },
    children: {
      name: 'Children',
      description: 'Tooltip children',
      defaultValue: <></>,
      control: 'text',
    },
  },
} satisfies Meta<typeof CustomTooltip>;

export default meta;

type Story = StoryObj<typeof CustomTooltip>;

export const Default: Story = {
  name: 'Default tooltip',
  args: {
    label: 'Tooltip label',
    hasArrow: true,
    children: 'Hover me',
  },
};
