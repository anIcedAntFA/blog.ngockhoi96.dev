import type { themes } from '@/configs/themes';

export type ThemeKey = keyof typeof themes;

export type Theme = (typeof themes)[ThemeKey];
