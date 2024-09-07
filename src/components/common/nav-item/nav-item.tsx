import cx from 'clsx';
import type {
  ComponentProps,
  HTMLAttributeAnchorTarget,
  PropsWithChildren,
} from 'react';

import ArrowUpRightIcon from '@/components/icons/arrow-up-right-icon';
import type { Pathname } from '@/types/locales';

import type { LinkProps } from '../link';
import Link from '../link';

import styles from './nav-item.module.css';

type NavItemProps = PropsWithChildren<
  Partial<{
    variant: 'line' | 'bg' | 'icon';
    color: 'base' | 'info';
    href: LinkProps<Pathname>['href'];
    to: string;
    target: HTMLAttributeAnchorTarget;
    className: ComponentProps<'a'>['className'];
    classChildren: ComponentProps<'span'>['className'];
  }>
>;

function NavItem({
  variant = 'line',
  color = 'base',
  href,
  to,
  target,
  className,
  classChildren,
  children,
  ...linkProps
}: NavItemProps) {
  return (
    <Link
      href={href}
      to={to}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      data-variant={variant}
      data-color={color}
      className={cx(styles.wrapper, className)}
      {...linkProps}
    >
      <span
        className={cx(
          variant === 'icon' ? styles.icon : styles.label,
          classChildren,
        )}
      >
        {children}
      </span>
      {target === '_blank' && (
        <span className={styles['nav-icon']}>
          <ArrowUpRightIcon />
        </span>
      )}
    </Link>
  );
}

export default NavItem;
