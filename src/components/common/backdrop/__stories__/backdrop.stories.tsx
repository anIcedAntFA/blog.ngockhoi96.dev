import { Meta, StoryObj } from '@storybook/react';

import Backdrop from '../backdrop';

const meta = {
  title: 'Common/Backdrop',
  component: Backdrop,
  parameters: {
    layout: 'centered',
  },
} satisfies Meta<typeof Backdrop>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
