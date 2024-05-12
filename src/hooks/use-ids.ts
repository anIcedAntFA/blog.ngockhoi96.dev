import { useId, useMemo } from 'react';

function useIds(idProp?: string, ...prefixes: string[]) {
  const reactId = useId();

  const id = idProp || reactId;

  return useMemo(() => {
    return prefixes.map((prefix) => `${prefix}-${id}`);
  }, [id, prefixes]);
}

export default useIds;
