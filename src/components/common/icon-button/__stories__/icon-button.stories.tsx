import { Meta, StoryObj } from '@storybook/react';

import IconButton from '../icon-button';
import ArrowUpIcon from '@/components/icons/arrow-up-icon';
import { removeObjectProperties } from '@/utils/remove-object-properties';
import SearchIcon from '@/components/icons/search-icon';
import Flex from '../../flex';
import ArrowLeftIcon from '@/components/icons/arrow-left-icon';
import ArrowRightIcon from '@/components/icons/arrow-right-icon';

const meta = {
  title: 'Common/IconButton',
  component: IconButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      name: 'Variant',
      description: 'Button variant',
      defaultValue: 'contained',
      control: 'inline-radio',
      options: ['contained', 'outlined'],
    },
    size: {
      name: 'Size',
      description: 'Button size',
      defaultValue: 'medium',
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    color: {
      name: 'Color',
      description: 'Button color',
      defaultValue: 'primary',
      control: 'inline-radio',
      options: ['primary', 'base'],
    },
    label: {
      name: 'Label',
      description: 'Button aria label',
      defaultValue: '',
      control: 'text',
    },
    rounded: {
      name: 'Rounded',
      description: 'Rounded button',
      defaultValue: false,
      control: 'boolean',
    },
    children: {
      name: 'Label',
      description: 'Button contents',
      defaultValue: 'Click me',
      control: 'text',
    },
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'button',
    variant: 'contained',
    size: 'medium',
    color: 'primary',
    label: 'search',
    children: <SearchIcon />,
  },
};

export const Variants: Story = {
  name: 'Icon Button Variants',
  args: {
    ...Default.args,
  },
  render: (args) => (
    <Flex spacing={24}>
      <IconButton {...args} variant='contained' label='turn left'>
        <ArrowLeftIcon />
      </IconButton>
      <IconButton {...args} variant='outlined' label='turn right'>
        <ArrowRightIcon />
      </IconButton>
    </Flex>
  ),
};

export const Sizes: Story = {
  name: 'Icon Button Sizes',
  args: {
    ...Default.args,
  },
  render: (args) => (
    <Flex spacing={24}>
      <IconButton {...args} size='small' label='go up'>
        <ArrowUpIcon />
      </IconButton>
      <IconButton {...args} size='medium' label='go up'>
        <ArrowUpIcon />
      </IconButton>
      <IconButton {...args} size='large' label='go up'>
        <ArrowUpIcon />
      </IconButton>
    </Flex>
  ),
};

export const Colors: Story = {
  name: 'Icon Button Colors',
  args: {
    ...Default.args,
  },
  render: (args) => (
    <Flex spacing={24}>
      <IconButton {...args} color='primary' label='go up'>
        <ArrowUpIcon />
      </IconButton>
      <IconButton {...args} color='base' label='go up'>
        <ArrowUpIcon />
      </IconButton>
    </Flex>
  ),
};

export const Rounded: Story = {
  name: 'Rounded Icon Button',
  args: {
    ...Default.args,
    rounded: true,
  },
  render: (args) => (
    <Flex spacing={24}>
      <IconButton {...args} label='go up'>
        <ArrowUpIcon />
      </IconButton>
      <IconButton {...args} variant='outlined' label='go up'>
        <ArrowUpIcon />
      </IconButton>
    </Flex>
  ),
};

export const Disabled: Story = {
  name: 'Disabled Icon Button',
  args: {
    ...Default.args,
    disabled: true,
  },
  render: (args) => (
    <Flex spacing={24}>
      <IconButton {...args} label='up'>
        <ArrowUpIcon />
      </IconButton>
      <IconButton {...args} variant='outlined' label='up'>
        <ArrowUpIcon />
      </IconButton>
    </Flex>
  ),
};
