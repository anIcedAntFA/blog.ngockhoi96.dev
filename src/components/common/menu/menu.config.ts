import { directions } from '@/configs/constants';

import type { MenuDirection } from './menu.type';

export const MenuDirectionMapValue: {
  [key in MenuDirection]: number;
} = {
  [directions.DOWN]: 1,
  [directions.UP]: -1,
};

export const DEFAULT_MENU_OFFSET = 8;
