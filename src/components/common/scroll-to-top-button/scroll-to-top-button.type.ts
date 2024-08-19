import type { MotionProps } from 'framer-motion';
import type { ComponentProps } from 'react';

export type ScrollToTopButtonProps = ComponentProps<'button'> &
  MotionProps &
  Partial<{
    top: number;
    isSmooth: boolean;
  }>;
