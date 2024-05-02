import { Meta, StoryObj } from '@storybook/react';

import ThemeProvider from '@/providers/theme-provider';
import ThemeSwitcher from '../theme-switcher';

const meta = {
  title: 'Common/ThemeSwitcher',
  component: ThemeSwitcher,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    label: {
      control: 'text',
    },
  },
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;

type Story = StoryObj<typeof meta>;

const RenderedThemeSwitcher = () => {
  return (
    <ThemeProvider>
      <ThemeSwitcher />
    </ThemeProvider>
  );
};

export const Default: Story = {
  args: {
    label: 'Theme Switcher',
  },
  render: RenderedThemeSwitcher,
};
