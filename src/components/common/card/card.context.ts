import { createContext } from 'react';

import type { CardContextState } from './card.type';

export const CardContext = createContext<CardContextState | null>(null);

export const CardProvider = CardContext.Provider;
