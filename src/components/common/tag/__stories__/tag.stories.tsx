import { Meta, StoryObj } from '@storybook/react';

import Tag from '../components/tag';
import TagLabel from '../components/tag-label';
import Flex from '@/components/common/flex';
import TagIcon from '../components/tag-icon';
import ContactIcon from '@/components/icons/contact-icon';
import TagCloseTrigger from '../components/tag-close-trigger';
import PackageIcon from '@/components/icons/package-icon';

const meta = {
  title: 'Common/Tag',
  component: Tag,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      name: 'Variant',
      description: 'Tag variant',
      defaultValue: 'subtle',
      control: 'select',
      options: ['solid', 'subtle', 'outlined'],
    },
    size: {
      name: 'Size',
      description: 'Tag size',
      defaultValue: 'medium',
      control: 'select',
      options: ['small', 'medium', 'large'],
    },
    color: {
      name: 'Color',
      description: 'Tag color',
      defaultValue: 'primary',
      control: 'inline-radio',
      options: ['primary', 'base'],
    },
  },
} satisfies Meta<typeof Tag>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Variant: Story = {
  name: 'Tag with variants',
  render: (args) => (
    <Flex spacing={24}>
      <Tag variant="solid" {...args}>
        <TagLabel>#typescript</TagLabel>
      </Tag>
      <Tag variant="outlined" {...args}>
        <TagLabel>#golang</TagLabel>
      </Tag>
      <Tag variant="subtle" {...args}>
        <TagLabel>#reactjs</TagLabel>
      </Tag>
    </Flex>
  ),
};

export const Size: Story = {
  name: 'Tag with sizes',
  render: (args) => (
    <Flex spacing={24}>
      <Tag size="small" {...args}>
        <TagLabel>#markdown</TagLabel>
      </Tag>
      <Tag size="medium" {...args}>
        <TagLabel>#vanilla</TagLabel>
      </Tag>
      <Tag size="large" {...args}>
        <TagLabel>#vuejs</TagLabel>
      </Tag>
    </Flex>
  ),
};

export const Color: Story = {
  name: 'Tag with colors',
  render: (args) => (
    <Flex spacing={24}>
      <Tag color="primary" {...args}>
        <TagLabel>#javascript</TagLabel>
      </Tag>
      <Tag color="base" {...args}>
        <TagLabel>#github</TagLabel>
      </Tag>
    </Flex>
  ),
};

export const Clickable: Story = {
  name: 'Tag with onClick function',
  render: (args) => (
    <Tag onClick={() => 'clicked'} {...args}>
      <TagLabel>#rust</TagLabel>
    </Tag>
  ),
};

export const WithIcon: Story = {
  name: 'Tag with icons',
  render: (args) => (
    <Flex spacing={24}>
      <Tag {...args}>
        <TagIcon>
          <ContactIcon />
        </TagIcon>
        <TagLabel>#golang</TagLabel>
      </Tag>
      <Tag {...args}>
        <TagLabel>#postgres</TagLabel>
        <TagIcon>
          <PackageIcon />
        </TagIcon>
      </Tag>
    </Flex>
  ),
};

export const WithCloseTrigger: Story = {
  name: 'Tag with close trigger',
  render: (args) => (
    <Tag {...args}>
      <TagLabel>#docker</TagLabel>
      <TagCloseTrigger />
    </Tag>
  ),
};
