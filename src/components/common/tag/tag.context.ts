'use client';

import { createContext } from 'react';

import type { TagContextState } from './tag.type';

export const TagContext = createContext<TagContextState | undefined>(undefined);

export const TagProvider = TagContext.Provider;
