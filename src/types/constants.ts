import {
  directions,
  orientations,
  placements,
  sizes,
} from '@/configs/constants';

export type SizeKey = keyof typeof sizes;
export type Size = (typeof sizes)[SizeKey];

export type OrientationKey = keyof typeof orientations;
export type Orientation = (typeof orientations)[OrientationKey];

export type DirectionKey = keyof typeof directions;
export type Direction = (typeof directions)[DirectionKey];

export type PlacementKey = keyof typeof placements;
export type Placement = (typeof placements)[PlacementKey];
