import type { Meta, StoryObj } from '@storybook/react';
import Details from '../components/details';
import useBoolean from '@/hooks/use-boolean';
import DetailsSummaryIcon from '../components/details-summary-icon';
import DetailsSummary from '../components/details-summary';
import DetailsContent from '../components/details-content';
import DetailsDivider from '../components/details-divider';

const meta: Meta = {
  title: 'Common/Details',
  component: Details,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    isOpened: {
      name: 'Is Opened',
      description: 'Is details opened',
      defaultValue: false,
      control: 'boolean',
    },
  },
} satisfies Meta<typeof Details>;

export default meta;

type Story = StoryObj<typeof Details>;

export const Default: Story = {
  render: () => {
    const expanded = useBoolean(false);

    return (
      <Details
        isOpened={expanded.value}
        style={{ width: 600 }}
        onToggle={expanded.toggle}
      >
        <DetailsSummary>
          <DetailsSummaryIcon />
          <h4 style={{ marginLeft: 8 }}>Lorem isum</h4>
        </DetailsSummary>
        <DetailsDivider />
        <DetailsContent style={{ paddingBlock: 8 }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          sapiente temporibus a expedita hic perspiciatis animi culpa quisquam
          debitis doloremque possimus corporis accusantium voluptate, facilis
          veritatis illum cumque nihil cupiditate?
        </DetailsContent>
      </Details>
    );
  },
};
