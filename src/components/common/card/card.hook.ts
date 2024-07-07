import { useContext } from 'react';

import { CardContext } from './card.context';

function useCardContext() {
  const context = useContext(CardContext);

  if (!context) {
    throw new Error('useCardContext must be used within a CardProvider');
  }

  return context;
}

export default useCardContext;
