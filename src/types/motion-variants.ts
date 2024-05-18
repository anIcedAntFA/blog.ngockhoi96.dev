import { motionPresets, motionVariants } from '@/configs/motion-variants';

export type MotionPresetKey = keyof typeof motionPresets;
export type MotionPreset = (typeof motionPresets)[MotionPresetKey];

export type MotionVariantKey = keyof typeof motionVariants;
export type MotionVariant = (typeof motionVariants)[MotionVariantKey];
