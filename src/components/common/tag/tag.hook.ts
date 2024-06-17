import { useContext } from 'react';

import { TagContext } from './tag.context';

function useTagContext() {
  const tagContext = useContext(TagContext);
  if (!tagContext) {
    throw new Error('useTagContext must be used within a TagProvider');
  }

  return tagContext;
}

export default useTagContext;
