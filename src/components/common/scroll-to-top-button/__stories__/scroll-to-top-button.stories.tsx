import { Meta, StoryObj } from '@storybook/react';
import ScrollToTopButton from '../scroll-to-top-button';

const meta = {
  title: 'Common/ScrollToTopButton',
  component: ScrollToTopButton,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    top: {
      name: 'Top',
      description: 'The top position to show the button',
      defaultValue: 400,
      control: 'number',
    },
    isSmooth: {
      name: 'Smooth scroll',
      description: 'Enable smooth scroll',
      defaultValue: true,
      control: 'boolean',
    },
  },
} satisfies Meta<typeof ScrollToTopButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  name: 'Default',
  render: (args) => (
    <div style={{ height: '2000px' }}>
      <ScrollToTopButton {...args} />
    </div>
  ),
};
