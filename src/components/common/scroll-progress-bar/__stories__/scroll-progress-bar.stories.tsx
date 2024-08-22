import { Meta, StoryObj } from '@storybook/react';
import ScrollProgressBar from '../scroll-progress-bar';
import ThemeProvider from '@/providers/theme-provider';

const meta = {
  title: 'Common/ScrollProgressBar',
  component: ScrollProgressBar,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof ScrollProgressBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
  render: (args) => (
    <div style={{ height: '2000px' }}>
      <ThemeProvider>
        <ScrollProgressBar {...args} />
      </ThemeProvider>
    </div>
  ),
};
