import { render, screen, waitFor, within } from '@testing-library/react';
import type { UserEvent } from '@testing-library/user-event';
import userEvent from '@testing-library/user-event';
import type { ElementRef } from 'react';
import { useRef } from 'react';
import type { Mock } from 'vitest';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import Backdrop from '@/components/common/backdrop';
import useBoolean from '@/hooks/use-boolean';

import Dialog from '../components/dialog';
import DialogBody from '../components/dialog-body';
import DialogCloseTrigger from '../components/dialog-close-trigger';
import DialogContent from '../components/dialog-content';
import DialogHeader from '../components/dialog-header';
import type { DialogProps } from '../dialog.type';

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

  it('should focus initial element when dialog is opened', async () => {
    const DialogHasInput = () => {
      const openedDialog = useBoolean(false);
      const inputRef = useRef<ElementRef<'input'>>(null);

      return (
        <>
          <button type="button" onClick={openedDialog.on}>
            open dialog
          </button>
          <Dialog
            opened={openedDialog.value}
            initialFocusRef={inputRef}
            onClose={onClose}
          >
            <Backdrop />
            <DialogContent>
              <DialogBody>
                <input />
                <input />
                <input ref={inputRef} type="text" data-testid="input" />
              </DialogBody>
            </DialogContent>
          </Dialog>
        </>
      );
    };

    render(<DialogHasInput />);

    await user.click(screen.getByRole('button'));
    expect(screen.getByTestId('input')).toHaveFocus();
  });

  it('should return focus to button when dialog is closed', async () => {
    const DialogHasInput = () => {
      const openedDialog = useBoolean(false);
      const btnRef = useRef<ElementRef<'button'>>(null);

      return (
        <>
          <button
            ref={btnRef}
            type="button"
            aria-label="open dialog"
            onClick={openedDialog.on}
          >
            open dialog
          </button>
          <Dialog
            opened={openedDialog.value}
            finalFocusRef={btnRef}
            onClose={onClose}
          >
            <Backdrop />
            <DialogContent>
              <DialogBody>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Possimus tenetur labore inventore, veritatis consequatur, qui
                tempore aspernatur magni reprehenderit quibusdam porro sapiente
                explicabo maxime ipsum deleniti tempora nihil cum ad!
              </DialogBody>
            </DialogContent>
          </Dialog>
        </>
      );
    };

    render(<DialogHasInput />);

    const button = screen.getByRole('button', { name: 'open dialog' });

    expect(button).not.toHaveFocus();

    await user.click(button);
    await user.keyboard('[Escape]');

    await waitFor(() => expect(button).toHaveFocus());
  });
});
