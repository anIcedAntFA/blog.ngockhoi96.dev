import { Meta, StoryObj } from '@storybook/react';

import Flex from '@/components/common/flex';
import Kbd from '../kbd';

const meta = {
  title: 'Common/Kbd',
  component: Kbd,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    color: {
      name: 'Color',
      description: 'Kbd color',
      defaultValue: 'base',
      control: 'inline-radio',
      options: ['base', 'primary'],
    },
    children: {
      name: 'Children',
      description: 'Kbd children',
      defaultValue: null,
      control: 'text',
    },
  },
} satisfies Meta<typeof Kbd>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    color: 'base',
    children: 'Ctrl',
  },
};

export const WithColor: Story = {
  args: {
    ...Default.args,
  },
  render: (args) => (
    <Flex spacing={24}>
      <Kbd {...args}>Enter</Kbd>
      <Kbd {...args} color='primary' />
    </Flex>
  ),
};

export const Multiple: Story = {
  args: {
    ...Default.args,
  },
  render: (args) => (
    <Flex spacing={8}>
      <Kbd {...args}>
        <abbr title='control'>Cmd</abbr>
      </Kbd>
      <p>+</p>
      <Kbd {...args}>K</Kbd>
    </Flex>
  ),
};
