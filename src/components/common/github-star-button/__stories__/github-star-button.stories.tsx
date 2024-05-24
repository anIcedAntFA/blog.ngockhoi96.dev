import { Meta, StoryObj } from '@storybook/react';

import GithubStarButton from '../github-star-button';

const meta = {
  title: 'Common/GithubStarButton',
  component: GithubStarButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    href: {
      name: 'Href',
      description: 'Github repository URL',
      defaultValue: '',
      control: 'text',
    },
    count: {
      name: 'Count',
      description: 'Github repository star count',
      defaultValue: 1,
      control: 'number',
    },
  },
} satisfies Meta<typeof GithubStarButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    href: 'https://github.com/anIcedAntFA/blog.ngockhoi96.dev',
    count: 10,
  },
};
