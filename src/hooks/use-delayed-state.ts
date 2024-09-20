import { useEffect, useRef, useState } from 'react';

const TIMEOUT_DELAY = 300;

function useDelayedState(
  condition: boolean,
  timeout: number = TIMEOUT_DELAY,
): boolean {
  const [isDelayed, setIsDelayed] = useState(condition);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (condition) {
      setIsDelayed(true);
    } else {
      timeoutRef.current = window.setTimeout(() => {
        requestAnimationFrame(() => setIsDelayed(condition));
      }, timeout);
    }

    return () => {
      if (!timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [condition, timeout]);

  return isDelayed;
}

export default useDelayedState;
