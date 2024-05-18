import { render, screen, within } from '@testing-library/react';
import userEvent, { UserEvent } from '@testing-library/user-event';
import { afterEach, beforeEach, describe, expect, it, Mock, vi } from 'vitest';

import Backdrop from '@/components/common/backdrop';

import Dialog from '../components/dialog';
import DialogBody from '../components/dialog-body';
import DialogCloseTrigger from '../components/dialog-close-trigger';
import DialogContent from '../components/dialog-content';
import DialogHeader from '../components/dialog-header';
import { DialogProps } from '../dialog.type';

const RenderedDialog = (dialogProps: DialogProps) => {
  return (
    <Dialog {...dialogProps}>
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
  );
};

describe('Dialog', () => {
  let onClose: Mock<string[], void>;
  let user: UserEvent;

  beforeEach(() => {
    onClose = vi.fn();
    user = userEvent.setup();
  });

  afterEach(() => {
    onClose.mockClear();
  });

  it('should render dialog', () => {
    render(RenderedDialog({ id: 'test', opened: true }));

    const dialog = screen.getByRole('dialog');

    expect(dialog).toBeInTheDocument();
    expect(dialog).not.toBeVisible();
    expect(dialog).toHaveAttribute('aria-modal', 'true');
    expect(dialog).toHaveAttribute('aria-labelledby', 'dialog-header-test');
    expect(dialog).toHaveAttribute('aria-describedby', 'dialog-body-test');
  });

  it('should close dialog when close trigger is clicked', async () => {
    render(
      RenderedDialog({
        opened: true,
        onClose,
      }),
    );

    const dialog = screen.getByRole('dialog');
    const closeTrigger = within(dialog).getByRole('button');

    await user.click(closeTrigger);

    expect(onClose).toHaveBeenCalledOnce();
  });

  it('should close dialog on outside click (backdrop)', async () => {
    render(
      RenderedDialog({
        opened: true,
        onClose,
      }),
    );

    const backdrop = screen.getByTestId('backdrop');

    await user.click(backdrop);

    expect(onClose).toHaveBeenCalledOnce();
  });

  it('should close dialog on escape key press', async () => {
    render(
      RenderedDialog({
        opened: true,
        onClose,
      }),
    );

    await user.keyboard('[Escape]');

    expect(onClose).toHaveBeenCalledOnce();
  });
});
