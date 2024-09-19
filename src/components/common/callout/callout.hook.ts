import { useContext } from 'react';

import { CalloutContext } from './callout.context';

function useCalloutContext() {
  const calloutContext = useContext(CalloutContext);

  if (!calloutContext) {
    throw new Error('CalloutContext must be used within a TagProvider');
  }

  return calloutContext;
}

export default useCalloutContext;
