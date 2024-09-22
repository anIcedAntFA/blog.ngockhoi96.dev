import cx from 'clsx';
import type { ComponentProps } from 'react';

import type { OverrideProps } from '@/types/common';
import type { Size } from '@/types/constants';

import styles from './code.module.css';

type CodeProps = OverrideProps<
  ComponentProps<'code'>,
  {
    variant?: 'plain' | 'subtle' | 'surface';
    size?: Size;
    color?: 'base' | 'primary';
  }
>;

function Code({
  variant = 'plain',
  size = 'small',
  color = 'base',
  className,
  children,
  ...codeProps
}: CodeProps) {
  return (
    <code
      className={cx(styles.root, className)}
      {...codeProps}
      data-variant={variant}
      data-size={size}
      data-color={color}
    >
      {children}
    </code>
  );
}

export default Code;
