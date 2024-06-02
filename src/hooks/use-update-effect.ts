// https://github.com/chakra-ui/chakra-ui/blob/main/packages/hooks/src/use-update-effect.ts

import type { DependencyList, EffectCallback } from 'react';
import { useEffect, useRef } from 'react';

/**
 * React effect hook that invokes only on update.
 * It doesn't invoke on mount
 */
function useUpdateEffect(effect: EffectCallback, deps: DependencyList) {
  //* Track whether the component has mounted
  const renderCycleRef = useRef(false);
  //* Track whether the effect should run at least once
  const effectCycleRef = useRef(false);

  //* Checks if the component is mounted and if the effect has run at least once
  useEffect(() => {
    const isMounted = renderCycleRef.current;
    const shouldRun = isMounted && effectCycleRef.current;

    if (shouldRun) {
      return effect();
    }
    //* indicate that the effect is ready to run on the next render.
    effectCycleRef.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  //* runs once when the component mounts
  useEffect(() => {
    //*  indicate that the component has mounted
    renderCycleRef.current = true;

    return () => {
      renderCycleRef.current = false;
    };
  }, []);
}

export default useUpdateEffect;
