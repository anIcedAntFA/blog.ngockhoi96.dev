import { Meta, StoryObj } from '@storybook/react';

import Button from '../button';
import ArrowUpIcon from '@/components/icons/arrow-up-icon';
import { removeObjectProperties } from '@/utils/remove-object-properties';
import Flex from '../../flex';

const meta = {
  title: 'Common/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: {
      name: 'Type',
      description: 'Button type',
      defaultValue: 'button',
      control: 'inline-radio',
      options: ['button', 'submit', 'reset'],
    },
    variant: {
      name: 'Variant',
      description: 'Button variant',
      defaultValue: 'contained',
      control: 'select',
      options: ['contained', 'outlined', 'text', 'link'],
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
    children: {
      name: 'Label',
      description: 'Button contents',
      defaultValue: 'Click me',
      control: 'text',
    },
    rounded: {
      name: 'Rounded',
      description: 'Rounded button',
      defaultValue: false,
      control: 'boolean',
    },
    uppercase: {
      name: 'Uppercase',
      description: 'Uppercase button label',
      defaultValue: false,
      control: 'boolean',
    },
    disabled: {
      name: 'Disabled',
      description: 'Disabled button',
      defaultValue: false,
      control: 'boolean',
    },
    icon: {
      name: 'Icon',
      description: 'Button icon',
      defaultValue: null,
      control: 'object',
    },
    loading: {
      name: 'Loading',
      description: 'Loading state',
      defaultValue: null,
      control: 'object',
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'button',
    variant: 'contained',
    size: 'medium',
    color: 'primary',
    children: 'Click me',
  },
};

const defaultArgs = Default.args || {};

export const Variant: Story = {
  name: 'Button Variant',
  args: removeObjectProperties(defaultArgs, ['variant']),
  render: (args) => (
    <Flex spacing={24}>
      <Button variant='contained' {...args}>
        Contained
      </Button>
      <Button variant='outlined' {...args}>
        Outlined
      </Button>
      <Button variant='text' {...args}>
        Text
      </Button>
      <Button variant='link' {...args}>
        Link
      </Button>
    </Flex>
  ),
};

export const Size: Story = {
  name: 'Button Size',
  args: removeObjectProperties(defaultArgs, ['size']),
  render: (args) => (
    <Flex spacing={24}>
      <Button size='small' {...args}>
        Small
      </Button>
      <Button size='medium' {...args}>
        Medium
      </Button>
      <Button size='large' {...args}>
        Large
      </Button>
    </Flex>
  ),
};

export const Color: Story = {
  name: 'Button Color',
  args: removeObjectProperties(defaultArgs, ['color']),
  render: (args) => (
    <Flex spacing={24}>
      <Button color='primary' {...args}>
        Primary
      </Button>
      <Button color='base' {...args}>
        Base
      </Button>
    </Flex>
  ),
};

export const Rounded: Story = {
  name: 'Button Rounded',
  args: {
    ...Default.args,
  },
  render: (args) => (
    <Button rounded {...args}>
      Rounded
    </Button>
  ),
};

export const Uppercase: Story = {
  name: 'Button Label Uppercase',
  args: {
    ...Default.args,
  },
  render: (args) => (
    <Button uppercase {...args}>
      Uppercase
    </Button>
  ),
};

export const Disabled: Story = {
  name: 'Button Disabled',
  args: {
    ...Default.args,
    disabled: true,
  },
  render: (args) => (
    <Flex spacing={24}>
      <Button {...args}>Disabled</Button>
      <Button {...args} variant='outlined'>
        Disabled
      </Button>
      <Button {...args} variant='text'>
        Disabled
      </Button>
      <Button {...args} variant='link'>
        Disabled
      </Button>
    </Flex>
  ),
};

export const Icon: Story = {
  name: 'Button With Icon',
  args: removeObjectProperties(defaultArgs, ['icon']),
  render: (args = {}) => (
    <Flex spacing={24}>
      <Button
        icon={{
          position: 'left',
          children: <ArrowUpIcon />,
        }}
        {...args}
      >
        Left Icon
      </Button>
      <Button
        icon={{
          position: 'right',
          children: <ArrowUpIcon />,
        }}
        {...args}
      >
        Right Icon
      </Button>
      <Button
        icon={{
          position: 'left',
          children: <ArrowUpIcon />,
          animation: 'shake-x',
        }}
        {...args}
      >
        Left Icon
      </Button>
      <Button
        icon={{
          position: 'left',
          children: <ArrowUpIcon />,
          hidden: true,
        }}
        style={{ width: '136px' }}
        {...args}
      >
        Left Icon
      </Button>
      <Button
        icon={{
          position: 'right',
          children: <ArrowUpIcon />,
          animation: 'shake-y',
          hidden: true,
        }}
        style={{ width: '150px' }}
        {...args}
      >
        Right Icon
      </Button>
    </Flex>
  ),
};

export const Loading: Story = {
  name: 'Button Loading',
  args: removeObjectProperties(defaultArgs, ['loading', 'icon']),
  render: (args = {}) => (
    <Flex spacing={24}>
      <Button
        loading={{
          enabled: true,
          position: 'left',
        }}
        {...args}
      >
        Click me
      </Button>
      <Button
        loading={{
          enabled: true,
          position: 'right',
          text: 'loading...',
        }}
        {...args}
      >
        Click me
      </Button>
      <Button
        loading={{
          enabled: true,
          position: 'left',
          icon: <ArrowUpIcon data-testid='custom-loading-icon-left' />,
        }}
        {...args}
      >
        Click me
      </Button>
      <Button
        icon={{
          position: 'right',
          children: <ArrowUpIcon />,
        }}
        loading={{
          enabled: true,
          position: 'right',
        }}
        {...args}
      >
        Click me
      </Button>
      <Button
        icon={{
          position: 'right',
          children: <ArrowUpIcon />,
        }}
        loading={{
          enabled: false,
          position: 'right',
        }}
        {...args}
      >
        Click me
      </Button>
    </Flex>
  ),
};
