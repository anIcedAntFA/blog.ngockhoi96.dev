import { directions } from '@/configs/constants';

import type { TabDirection } from './tabs.type';

export const DEFAULT_ACTIVE_INDEX = 0;

export const directionMapValue: {
  [key in TabDirection]: number;
} = {
  [directions.FORWARD]: 1,
  [directions.BACK]: -1,
};
