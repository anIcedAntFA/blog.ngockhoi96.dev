'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import type { ElementRef } from 'react';
import { useEffect, useRef } from 'react';

import ArrowUpIcon from '@/components/icons/arrow-up-icon';
import useBoolean from '@/hooks/use-boolean';

import CustomTooltip from '../custom-tooltip';

import { motionVariant, TOP_POSITION } from './scroll-to-top-button.config';
import { scrollToTop } from './scroll-to-top-button.helper';
import styles from './scroll-to-top-button.module.css';
import type { ScrollToTopButtonProps } from './scroll-to-top-button.type';

function ScrollToTopButton({
  top = TOP_POSITION,
  isSmooth = true,
  ...buttonProps
}: ScrollToTopButtonProps) {
  const btnRef = useRef<ElementRef<'button'>>(null);

  const t = useTranslations('components.common.scrollToTopButton');

  const isVisible = useBoolean(false);

  useEffect(() => {
    const handleScroll = () => {
      const isTopPosition = document.documentElement.scrollTop >= top;
      isVisible.setValue(isTopPosition);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isVisible, top]);

  const handleScrollToTop = () => {
    scrollToTop(isSmooth);
    isVisible.off();
  };

  return (
    <AnimatePresence>
      {isVisible.value && (
        <CustomTooltip label={t('tooltipLabel')} placement='auto' hasArrow>
          <motion.button
            ref={btnRef}
            type='button'
            aria-label={t('ariaLabel')}
            tabIndex={0}
            className={styles.root}
            variants={motionVariant}
            initial='initial'
            animate='animate'
            exit='exit'
            transition={{ ease: 'easeInOut' }}
            onClick={handleScrollToTop}
            {...buttonProps}
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
