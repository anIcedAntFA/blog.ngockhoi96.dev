import type { HTMLAttributeAnchorTarget, PropsWithChildren } from 'react';

import ArrowUpRightIcon from '@/components/icons/arrow-up-right-icon';
import type { Pathname } from '@/types/locales';

import type { LinkProps } from '../link';
import Link from '../link';

import styles from './nav-item.module.css';

type NavItemProps = PropsWithChildren<{
  variant?: 'line' | 'bg' | 'icon';
  color?: 'base' | 'info';
  href?: LinkProps<Pathname>['href'];
  to?: string;
  target?: HTMLAttributeAnchorTarget;
}>;

function NavItem({
  variant = 'line',
  color = 'base',
  href,
  to,
  target,
  children,
}: NavItemProps) {
  return (
    <Link
      href={href}
      to={to}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      data-variant={variant}
      className={styles.wrapper}
    >
      <span
        data-variant={variant}
        data-color={color}
        className={variant === 'icon' ? styles.icon : styles.label}
      >
        {children}
      </span>
      {target === '_blank' && (
        <span
          data-variant={variant}
          data-color={color}
          className={styles['nav-icon']}
        >
          <ArrowUpRightIcon />
        </span>
      )}
    </Link>
  );
}

export default NavItem;
