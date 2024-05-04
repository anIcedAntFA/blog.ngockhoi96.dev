import { Meta, StoryObj } from '@storybook/react';

import Divider from '../divider';

const meta = {
  title: 'Common/Divider',
  component: Divider,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    orientation: {
      name: 'Orientation',
      description: 'Divider orientation',
      defaultValue: 'horizontal',
      control: 'inline-radio',
      options: ['horizontal', 'vertical'],
    },
    variant: {
      name: 'Variant',
      description: 'Divider variant',
      defaultValue: 'solid',
      control: 'select',
      options: ['solid', 'dashed', 'dotted'],
    },
    thickness: {
      name: 'Thickness',
      description: 'Divider thickness',
      defaultValue: 'thin',
      control: 'select',
      options: ['thin', 'medium', 'thick'],
    },
    color: {
      name: 'Color',
      description: 'Divider color',
      defaultValue: 'base',
      control: 'select',
      options: ['base', 'primary'],
    },
    width: {
      name: 'Width',
      description: 'Divider width',
      defaultValue: '100%',
      control: 'text',
    },
    height: {
      name: 'Height',
      description: 'Divider height',
      defaultValue: '100%',
      control: 'text',
    },
  },
} satisfies Meta<typeof Divider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    orientation: 'horizontal',
    variant: 'solid',
    thickness: 'thin',
    color: 'base',
    width: '100%',
    height: '100%',
  },
  render: (args) => (
    <div style={{ width: 400 }}>
      <Divider {...args} />
    </div>
  ),
};

export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
    variant: 'dashed',
    thickness: 'medium',
    color: 'primary',
    width: '200px',
  },
};

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
    variant: 'dotted',
    thickness: 'thick',
    color: 'primary',
    height: '80px',
  },
};
