import { useEffect, useRef } from 'react';

import { keyboardCommands, keys } from '@/configs/constants';
import type { KeyboardCommand } from '@/types/constants';
import { equal } from '@/utils/equal';

export type KeyboardCommandCallback = (key: KeyboardCommand) => void;

export type UseKeyboardCommandsProps = {
  callback: KeyboardCommandCallback;
  enabled?: boolean | (() => boolean);
};

export type CallbackRef = {
  callback: KeyboardCommandCallback;
};

function useKeyboardCommands({
  callback,
  enabled = true,
}: UseKeyboardCommandsProps) {
  const callbackRef = useRef<CallbackRef>({ callback });

  //* We store these values as refs so that we don't re-run the effect when they change.
  //* Also, as we're using a ref, whenever 'eventHandler' fires
  //* it will always have access to the latest values
  useEffect(() => {
    callbackRef.current.callback = callback;
  }, [callback]);

  useEffect(() => {
    if (!enabled || (typeof enabled === 'function' && !enabled())) return;

    const keysMapCommands: Record<string, KeyboardCommand> = {
      [keys.ESCAPE]: keyboardCommands.ESCAPE,
      [keys.ARROW_DOWN]: keyboardCommands.DOWN,
      [keys.ARROW_UP]: keyboardCommands.UP,
      [keys.ENTER]: keyboardCommands.ENTER,
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      //* Detect ⌘ + k on Mac, Ctrl + k on Windows
      if ((event.metaKey || event.ctrlKey) && equal(event.key, keys.K)) {
        event.preventDefault();
        callbackRef.current.callback(keyboardCommands.CMD_K);
      }

      if (keysMapCommands[event.key]) {
        callbackRef.current.callback(keysMapCommands[event.key]);
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [enabled]);
}

export default useKeyboardCommands;
