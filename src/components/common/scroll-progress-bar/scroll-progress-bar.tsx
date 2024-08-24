'use client';

import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import { useLayoutEffect } from 'react';

import { themes } from '@/configs/themes';
import useBoolean from '@/hooks/use-boolean';

import {
  inputRanges,
  themeWithOutputRanges,
} from './scroll-progress-bar.config';
import styles from './scroll-progress-bar.module.css';

function ScrollProgressBar() {
  const t = useTranslations('components.common.scrollProgressBar');

  const { resolvedTheme } = useTheme();

  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 80,
    damping: 20,
    restDelta: 0.0002,
  });

  const backgroundColor = useTransform(
    scrollYProgress,
    inputRanges,
    themeWithOutputRanges[resolvedTheme ?? themes.LIGHT],
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
      aria-label={t('ariaLabel')}
      className={styles.root}
      style={{ scaleX, backgroundColor }}
    />
  );
}

export default ScrollProgressBar;
