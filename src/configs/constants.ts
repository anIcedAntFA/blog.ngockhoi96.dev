export const sizes = {
  SMALL: 'small',
  MEDIUM: 'medium',
  LARGE: 'large',
} as const;

export const orientations = {
  HORIZONTAL: 'horizontal',
  VERTICAL: 'vertical',
} as const;

export const directions = {
  FORWARD: 'forward',
  BACK: 'back',
  UP: 'up',
  DOWN: 'down',
} as const;

export const placements = {
  TOP: 'top',
  RIGHT: 'right',
  BOTTOM: 'bottom',
  LEFT: 'left',
  TOP_START: 'top-start',
  RIGHT_START: 'right-start',
  BOTTOM_START: 'bottom-start',
  LEFT_START: 'left-start',
  TOP_END: 'top-end',
  RIGHT_END: 'right-end',
  BOTTOM_END: 'bottom-end',
  LEFT_END: 'left-end',
} as const;

export const viewLayouts = {
  LIST: 'list',
  GRID: 'grid',
} as const;

export const colors = {
  BASE: 'base',
  PRIMARY: 'primary',
  WARNING: 'warning',
  ERROR: 'error',
} as const;

export const keyboardCommands = {
  CMD_K: 'cmd-k',
  ESCAPE: 'escape',
  DOWN: 'down',
  UP: 'up',
  ENTER: 'enter',
} as const;

/**
 * Keyboard event keys
 * @see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values
 */
export const keys = {
  ESCAPE: 'Escape',
  ARROW_DOWN: 'ArrowDown',
  ARROW_UP: 'ArrowUp',
  ENTER: 'Enter',
  K: 'k',
} as const;

export const HEADER_HEIGHT = 60;
