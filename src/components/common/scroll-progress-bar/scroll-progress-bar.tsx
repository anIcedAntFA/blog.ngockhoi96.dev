'use client';

import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from 'framer-motion';
import { useTheme } from 'next-themes';
import { useLayoutEffect, useState } from 'react';
import invariant from 'tiny-invariant';

import useBoolean from '@/hooks/use-boolean';

import {
  inputRanges,
  themeWithOutputRanges,
} from './scroll-progress-bar.config';
import styles from './scroll-progress-bar.module.css';

function ScrollProgressBar() {
  const [scrollPercentage, setScrollPercentage] = useState<number>(0);

  const { resolvedTheme } = useTheme();

  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    restDelta: 0.0002,
  });

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const percentage = latest * 100;
    setScrollPercentage(percentage);
  });

  invariant(resolvedTheme, 'resolvedTheme is undefined');

  const backgroundColor = useTransform(
    scrollYProgress,
    inputRanges,
    themeWithOutputRanges[resolvedTheme],
  );

  const isScrollable = useBoolean(false);

  useLayoutEffect(() => {
    const handleResize = () => {
      isScrollable.setValue(
        document.documentElement.scrollHeight > window.innerHeight,
      );
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(document.documentElement);

    //* initial check
    handleResize();

    return () => {
      resizeObserver.disconnect();
    };
  }, [isScrollable]);

  if (!isScrollable.value) return null;

  return (
    <motion.div
      role="progressbar"
      aria-label="Scroll progress bar"
      aria-valuenow={scrollPercentage}
      className={styles.root}
      style={{ scaleX, backgroundColor }}
    />
  );
}

export default ScrollProgressBar;
