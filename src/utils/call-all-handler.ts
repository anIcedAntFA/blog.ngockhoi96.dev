import type { Todo } from '@/types/common';

function callAllHandlers<T extends (event: Todo) => void>(
  ...fns: (T | undefined)[]
) {
  return function func(event: Parameters<T>[0]) {
    fns.some((fn) => {
      fn?.(event);
      return event?.defaultPrevented;
    });
  };
}

export default callAllHandlers;
