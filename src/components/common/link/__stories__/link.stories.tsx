import { Meta, StoryObj } from '@storybook/react';
import Link from '../link';

const meta = {
  title: 'Common/Link',
  component: Link,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {},
} satisfies Meta<typeof Link>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Internal: Story = {
  args: {
    href: '/about',
    children: 'about page',
  },
};

export const External: Story = {
  args: {
    to: 'https://google.com',
    target: '_blank',
    rel: 'noopener noreferrer',
    children: 'Google',
  },
};
