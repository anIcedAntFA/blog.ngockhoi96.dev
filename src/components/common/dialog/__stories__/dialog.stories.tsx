import { Meta, StoryObj } from '@storybook/react';

import Backdrop from '@/components/common/backdrop';
import Button from '@/components/common/button';
import Flex from '@/components/common/flex';
import useBoolean from '@/hooks/use-boolean';

import Dialog from '../components/dialog';
import DialogBody from '../components/dialog-body';
import DialogCloseTrigger from '../components/dialog-close-trigger';
import DialogContent from '../components/dialog-content';
import DialogHeader from '../components/dialog-header';

const meta = {
  title: 'Common/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    opened: {
      name: 'Opened',
      description: 'Dialog opened',
      defaultValue: false,
      control: 'boolean',
    },
    hasBlockScroll: {
      name: 'Block Scroll',
      description: 'Block scroll',
      defaultValue: true,
      control: 'boolean',
    },
    isCentered: {
      name: 'Centered',
      description: 'Centered dialog',
      defaultValue: false,
      control: 'boolean',
    },
    hasClosedOutsideClick: {
      name: 'Close on outside click',
      description: 'Close dialog on outside click',
      defaultValue: true,
      control: 'boolean',
    },
    hasCloseOnEscKey: {
      name: 'Close on ESC key',
      description: 'Close dialog on ESC key',
      defaultValue: true,
      control: 'boolean',
    },
    scrollBehavior: {
      name: 'Scroll Behavior',
      description: 'Scroll behavior',
      defaultValue: 'inside',
      control: 'inline-radio',
      options: ['inside', 'outside'],
    },
    motionPreset: {
      name: 'Motion Preset',
      description: 'Motion preset',
      defaultValue: 'drop-in',
      control: 'inline-radio',
      options: ['drop-in', 'flip'],
    },
    onClose: {
      name: 'On Close',
      description: 'On close handler',
      action: 'closed',
    },
  },
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

const BasicDialog = () => {
  const openedDialog = useBoolean(false);

  return (
    <Flex>
      <Button onClick={openedDialog.on}>Open Dialog</Button>
      <Dialog opened={openedDialog.value} onClose={openedDialog.off}>
        <Backdrop />
        <DialogContent>
          <DialogHeader>
            <h4>MK Blog Login</h4>
          </DialogHeader>
          <DialogCloseTrigger label="close" />
          <DialogBody>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
            quibusdam quaerat quasi dolorum laboriosam facilis debitis quidem
            perferendis ad accusantium qui, expedita repellendus in dolore
            numquam, exercitationem, culpa sint. Nam.
          </DialogBody>
        </DialogContent>
      </Dialog>
    </Flex>
  );
};

export const Basic: Story = {
  render: BasicDialog,
};
