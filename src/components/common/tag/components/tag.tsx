'use client';

import cx from 'clsx';
import type { KeyboardEvent } from 'react';

import { colors, sizes } from '@/configs/constants';

import { tagVariants } from '../tag.config';
import { TagProvider } from '../tag.context';
import styles from '../tag.module.css';
import type { TagProps } from '../tag.type';

function Tag({
  variant = tagVariants.SUBTLE,
  size = sizes.MEDIUM,
  color = colors.PRIMARY,
  className,
  children,
  onClick,
  onKeyDown,
  ...divProps
}: TagProps) {
  const contextValue = {
    variant,
    size,
    color,
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    event.stopPropagation();

    if (onKeyDown && event.key === 'Enter') {
      onKeyDown(event);
    }
  };

  return (
    <TagProvider value={contextValue}>
      <div
        role={onClick ? 'button' : undefined}
        tabIndex={onClick ? 0 : undefined}
        data-variant={variant}
        data-size={size}
        data-color={color}
        data-clickable={!!onClick || undefined}
        data-testid='tag'
        className={cx(styles.root, className)}
        onClick={onClick}
        onKeyDown={handleKeyDown}
        {...divProps}
      >
        {children}
      </div>
    </TagProvider>
  );
}

export default Tag;
