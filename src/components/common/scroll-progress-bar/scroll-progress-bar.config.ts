import { themes } from '@/configs/themes';

export const inputRanges = [0, 0.25, 0.5, 0.75, 1];

export const themeWithOutputRanges: Record<string, string[]> = {
  [themes.LIGHT]: ['#85efac', '#36d399', '#10b77f', '#059669', '#047857'],
  [themes.DARK]: ['#a7f3d0', '#85efac', '#36d399', '#10b77f', '#059669'],
};
