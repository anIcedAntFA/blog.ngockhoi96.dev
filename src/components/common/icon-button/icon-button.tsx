'use client';

import cx from 'clsx';
import { ElementRef, ForwardedRef, forwardRef, useId } from 'react';

import { colors, sizes } from '@/configs/constants';

import { buttonVariants } from '../button';

import styles from './icon-button.module.css';
import { IconButtonProps } from './icon-button.type';

function IconButton(
  {
    id,
    type = 'button',
    variant = buttonVariants.CONTAINED,
    size = sizes.MEDIUM,
    color = colors.BASE,
    label,
    rounded = false,
    disabled = false,
    className,
    children,
    ...passProps
  }: IconButtonProps,
  ref: ForwardedRef<ElementRef<'button'>>,
) {
  const internalID = useId();

  return (
    <button
      ref={ref}
      id={id || `icon-button-${internalID}`}
      type={type}
      data-variant={variant}
      data-size={size}
      data-color={color}
      aria-label={label}
      data-rounded={rounded || undefined}
      aria-disabled={disabled}
      disabled={disabled}
      className={cx(styles.root, className)}
      {...passProps}
    >
      {children}
    </button>
  );
}

export default forwardRef(IconButton);
