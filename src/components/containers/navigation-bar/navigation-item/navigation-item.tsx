'use client';

import cx from 'clsx';
import { useSelectedLayoutSegment } from 'next/navigation';
import type { ElementRef, ReactElement } from 'react';
import { useRef } from 'react';

import DropdownIcon from '@/components/common/dropdown-icon';
import useBoolean from '@/hooks/use-boolean';
import useOutsideClick from '@/hooks/use-outside-click';
import { Link } from '@/i18n/routing';
import type { Pathname } from '@/types/locales';
import { equal } from '@/utils/equal';

import styles from './navigation-item.module.css';

type NavigationItemProps = {
  type: 'link' | 'button';
  title: string;
  icon: ReactElement;
  href: Pathname;
};

function NavigationItem({ type, title, href, icon }: NavigationItemProps) {
  const btnRef = useRef<ElementRef<'button'>>(null);

  const selectedLayoutSegment = useSelectedLayoutSegment();

  const openMenu = useBoolean(false);

  useOutsideClick({
    ref: btnRef,
    handler: openMenu.off,
  });

  const pathname = selectedLayoutSegment ? `/${selectedLayoutSegment}` : '/';

  const isActive = equal(pathname, href);

  if (equal(type, 'link')) {
    return (
      <Link
        href={href}
        className={cx(styles.wrapper, {
          [styles.active]: isActive,
        })}
      >
        <span className={styles.icon}>{icon}</span>
        <span className={styles.title}>{title}</span>
        {isActive && <div className={styles['shiny-glass']} />}
      </Link>
    );
  }

  return (
    <button
      ref={btnRef}
      className={cx(styles.wrapper, {
        [styles.active]: openMenu.value,
        [styles.opened]: openMenu.value,
      })}
      onClick={openMenu.toggle}
    >
      <span className={styles.icon}>{icon}</span>
      <span className={styles.title}>{title}</span>
      <DropdownIcon
        type='close'
        active={openMenu.value}
        className={styles['dropdown-icon']}
      />
    </button>
  );
}

export default NavigationItem;
