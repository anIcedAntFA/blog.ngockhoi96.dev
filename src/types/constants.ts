import type {
  colors,
  directions,
  keyboardCommands,
  keys,
  orientations,
  placements,
  sizes,
} from '@/configs/constants';

import type { ValueType } from './common';

export type Size = ValueType<typeof sizes>;
export type Orientation = ValueType<typeof orientations>;
export type Direction = ValueType<typeof directions>;
export type Placement = ValueType<typeof placements>;
export type Color = ValueType<typeof colors>;

export type KeyboardCommand = ValueType<typeof keyboardCommands>;
export type Keyboard = ValueType<typeof keys>;
