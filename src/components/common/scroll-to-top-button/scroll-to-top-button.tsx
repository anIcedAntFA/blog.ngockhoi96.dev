'use client';

import type { MotionProps } from 'framer-motion';
import type { ComponentProps, ElementRef } from 'react';
import { useEffect, useRef } from 'react';

import ArrowUpIcon from '@/components/icons/arrow-up-icon';
import useBoolean from '@/hooks/use-boolean';

import styles from './scroll-to-top-button.module.css';

const TOP_POSITION = 200;

type ScrollToTopButtonProps = ComponentProps<'button'> &
  MotionProps &
  Partial<{
    top: number;
    isSmooth: boolean;
  }>;

function scrollToTop(isSmooth: boolean) {
  if (!isSmooth) document.documentElement.scrollTop = 0;

  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

function ScrollToTopButton({
  top = TOP_POSITION,
  isSmooth = true,
  ...passProps
}: ScrollToTopButtonProps) {
  const btnRef = useRef<ElementRef<'button'>>(null);

  const isVisible = useBoolean(false);

  // const updateScrollToTopPosition = () => {
  //   const footer = document.querySelector<HTMLDivElement>('footer');

  //   if (!footer || !btnRef.current) return;

  //   const footerTop = footer.getBoundingClientRect().top;

  //   if (footerTop > window.innerHeight) {
  //     btnRef.current.style.position = 'fixed';
  //   } else {
  //     btnRef.current.style.position = 'absolute';
  //   }
  // };

  useEffect(() => {
    const handleScroll = () => {
      const isTopPosition = document.documentElement.scrollTop >= top;
      isVisible.setValue(isTopPosition);
      // updateScrollToTopPosition();
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
    <button
      ref={btnRef}
      type="button"
      className={styles.root}
      data-active={isVisible.value || undefined}
      onClick={handleScrollToTop}
      {...passProps}
    >
      <span className={styles.icon}>
        <ArrowUpIcon />
      </span>
    </button>
  );
}

export default ScrollToTopButton;
