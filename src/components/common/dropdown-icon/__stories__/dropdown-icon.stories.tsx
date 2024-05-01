import { Meta, StoryObj } from '@storybook/react';

import DropdownIcon from '../dropdown-icon';

const meta = {
  title: 'Common/DropdownIcon',
  component: DropdownIcon,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: {
      name: 'Type',
      description: 'Dropdown icon type',
      defaultValue: 'rotate',
      control: {
        type: 'select',
        options: ['rotate', 'close'],
      },
    },
    active: {
      name: 'Active',
      description: 'Is the dropdown icon active',
      defaultValue: false,
      control: 'boolean',
    },
  },
} satisfies Meta<typeof DropdownIcon>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Rotate: Story = {
  args: {
    type: 'rotate',
    active: false,
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: '48px' }}>
      <DropdownIcon {...args} />
      <DropdownIcon {...args} active={true} />
    </div>
  ),
};

export const Close: Story = {
  args: {
    type: 'close',
    active: false,
  },
  render: (args) => (
    <div style={{ display: 'flex', gap: '48px' }}>
      <button style={{ position: 'relative' }}>
        <DropdownIcon {...args} />
      </button>
      <button style={{ position: 'relative' }}>
        <DropdownIcon {...args} active={true} />
      </button>
    </div>
  ),
};
