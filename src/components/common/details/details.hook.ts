import { useContext } from 'react';

import { DetailsContext } from './details.context';

function useDetailsContext() {
  const context = useContext(DetailsContext);

  if (!context) {
    throw new Error('useDetailsContext must be used within a DetailsProvider');
  }

  return context;
}

export default useDetailsContext;
