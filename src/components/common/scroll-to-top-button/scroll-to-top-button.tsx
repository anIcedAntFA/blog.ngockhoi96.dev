'use client';

import { AnimatePresence, motion } from 'framer-motion';
import type { ElementRef } from 'react';
import { useEffect, useRef } from 'react';

import ArrowUpIcon from '@/components/icons/arrow-up-icon';
import useBoolean from '@/hooks/use-boolean';

import CustomTooltip from '../custom-tooltip';

import { TOP_POSITION } from './scroll-to-top-button.config';
import { scrollToTop } from './scroll-to-top-button.helper';
import styles from './scroll-to-top-button.module.css';
import type { ScrollToTopButtonProps } from './scroll-to-top-button.type';

function ScrollToTopButton({
  top = TOP_POSITION,
  isSmooth = true,
  ...passProps
}: ScrollToTopButtonProps) {
  const btnRef = useRef<ElementRef<'button'>>(null);

  const isVisible = useBoolean(false);

  useEffect(() => {
    const handleScroll = () => {
      const isTopPosition = document.documentElement.scrollTop >= top;
      isVisible.setValue(isTopPosition);
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible, top]);

  const handleScrollToTop = () => {
    scrollToTop(isSmooth);
    isVisible.off();
  };

  return (
    <AnimatePresence>
      {isVisible.value && (
        <CustomTooltip label="Scroll to top" placement="auto" hasArrow>
          <motion.button
            ref={btnRef}
            type="button"
            aria-label="Scroll back to top"
            tabIndex={0}
            className={styles.root}
            initial={{ opacity: 0, scale: 0.5, visibility: 'hidden' }}
            animate={{ opacity: 1, scale: 1, visibility: 'visible' }}
            onClick={handleScrollToTop}
            {...passProps}
          >
            <span className={styles.icon}>
              <ArrowUpIcon />
            </span>
          </motion.button>
        </CustomTooltip>
      )}
    </AnimatePresence>
  );
}

export default ScrollToTopButton;
