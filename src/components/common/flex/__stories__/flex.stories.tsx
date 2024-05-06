import { Meta, StoryObj } from '@storybook/react';

import Flex from '../flex';
import { PropsWithChildren } from 'react';

const meta = {
  title: 'Common/Flex',
  component: Flex,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    direction: {
      name: 'Direction',
      description: 'The direction of the flex container.',
      defaultValue: 'row',
      control: 'select',
      options: ['row', 'row-reverse', 'column', 'column-reverse'],
    },
    align: {
      name: 'Align',
      description: 'The alignment of the flex container.',
      defaultValue: 'flex-start',
      control: 'select',
      options: ['center', 'flex-start', 'flex-end', 'baseline', 'stretch'],
    },
    justify: {
      name: 'Justify',
      description: 'The justification of the flex container.',
      defaultValue: 'flex-start',
      control: 'select',
      options: [
        'center',
        'flex-start',
        'flex-end',
        'space-between',
        'space-around',
        'space-evenly',
      ],
    },
    wrap: {
      name: 'Wrap',
      description: 'The wrapping of the flex container.',
      defaultValue: 'no-wrap',
      control: 'select',
      options: ['no-wrap', 'wrap', 'wrap-reverse'],
    },
    spacing: {
      name: 'Spacing',
      description: 'The spacing between flex items.',
      defaultValue: 0,
      control: 'number',
    },
  },
} satisfies Meta<typeof Flex>;

export default meta;

type Story = StoryObj<typeof meta>;

const DecorativeBox = ({ children }: PropsWithChildren) => (
  <div
    style={{
      border: '1px solid #000',
      borderRadius: '4px',
      padding: '16px',
    }}
  >
    {children}
  </div>
);

export const Horizontal: Story = {
  args: {},
  render: () => (
    <Flex spacing={16}>
      <DecorativeBox>Flex</DecorativeBox>
      <DecorativeBox>Flex</DecorativeBox>
      <DecorativeBox>Flex</DecorativeBox>
    </Flex>
  ),
};

export const Vertical: Story = {
  args: {},
  render: () => (
    <Flex direction="column" spacing={12}>
      <DecorativeBox>Flex</DecorativeBox>
      <DecorativeBox>Flex</DecorativeBox>
      <DecorativeBox>Flex</DecorativeBox>
    </Flex>
  ),
};

export const Center: Story = {
  args: {},
  render: () => (
    <Flex
      justify="center"
      align="center"
      spacing={8}
      style={{ width: 800, backgroundColor: 'orange' }}
    >
      <DecorativeBox>Flex</DecorativeBox>
      <DecorativeBox>Flex</DecorativeBox>
      <DecorativeBox>Flex</DecorativeBox>
    </Flex>
  ),
};

export const Wrap: Story = {
  args: {},
  render: () => (
    <Flex wrap="wrap" spacing={8} style={{ width: 400 }}>
      <DecorativeBox>Flex</DecorativeBox>
      <DecorativeBox>Flex</DecorativeBox>
      <DecorativeBox>Flex</DecorativeBox>
      <DecorativeBox>Flex</DecorativeBox>
      <DecorativeBox>Flex</DecorativeBox>
      <DecorativeBox>Flex</DecorativeBox>
      <DecorativeBox>Flex</DecorativeBox>
      <DecorativeBox>Flex</DecorativeBox>
    </Flex>
  ),
};
