import { motionVariants } from '@/configs/motion-variants';

export type MotionVariantKey = keyof typeof motionVariants;
export type MotionVariantValue = (typeof motionVariants)[MotionVariantKey];
