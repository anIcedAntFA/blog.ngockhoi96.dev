import { renderHook } from '@testing-library/react';
import type { UserEvent } from '@testing-library/user-event';
import userEvent from '@testing-library/user-event';
import type { Mock } from 'vitest';
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';

import { keyboardCommands, keys } from '@/configs/constants';

import type { UseKeyboardCommandsProps } from '../use-keyboard-commands';
import useKeyboardCommands from '../use-keyboard-commands';

describe('useKeyboardCommands', () => {
  let callback: Mock<string[], void>;
  let user: UserEvent;

  beforeEach(() => {
    callback = vi.fn();
    user = userEvent.setup();
  });

  afterEach(() => {
    callback.mockClear();
  });

  const renderUseKeyboardCommands = (props: UseKeyboardCommandsProps) => {
    return renderHook(() => useKeyboardCommands(props), {
      initialProps: props,
    });
  };

  it('should call the callback function with the CMD_K command when ⌘ + k / Ctrl + k is pressed', async () => {
    renderUseKeyboardCommands({ callback });

    await user.keyboard('{Control>}k');

    expect(callback).toHaveBeenCalledOnce();
    expect(callback).toHaveBeenCalledWith(keyboardCommands.CMD_K);
  });

  describe.each([
    [keys.ARROW_DOWN, keyboardCommands.DOWN],
    [keys.ARROW_UP, keyboardCommands.UP],
    [keys.ENTER, keyboardCommands.ENTER],
    [keys.ESCAPE, keyboardCommands.ESCAPE],
  ])('with key %s', (testKey, expectedCommand) => {
    beforeEach(() => {
      renderUseKeyboardCommands({ callback });
    });

    it(`should call the callback function with the correct command ${expectedCommand}`, async () => {
      await user.keyboard(`[${testKey}]`);
      expect(callback).toHaveBeenCalledWith(expectedCommand);
    });
  });

  describe('when the hook is disabled', () => {
    beforeEach(() => {
      renderUseKeyboardCommands({ callback, enabled: false });
    });

    it('should not call the callback', async () => {
      await user.keyboard(`[${keys.ARROW_DOWN}]`);

      expect(callback).not.toHaveBeenCalled();
    });
  });

  describe('when an unknown key is pressed', () => {
    beforeEach(() => {
      renderUseKeyboardCommands({ callback });
    });

    it('should not call the callback', async () => {
      await user.keyboard(`[a]`);
      expect(callback).not.toHaveBeenCalled();
    });
  });

  it('should update the callback when the callback prop changes', async () => {
    const { rerender } = renderHook(
      (props: UseKeyboardCommandsProps) => useKeyboardCommands(props),
      {
        initialProps: { callback },
      },
    );

    const newCallback = vi.fn();
    rerender({ callback: newCallback });

    await user.keyboard(`[${keys.ARROW_DOWN}]`);
    expect(newCallback).toHaveBeenCalledWith(keyboardCommands.DOWN);
  });
});
