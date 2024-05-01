'use client';

import cx from 'clsx';
import { useTheme } from 'next-themes';

import { themes } from '@/configs/themes';
import { equal } from '@/utils/equal';

import styles from './theme-switcher.module.css';
import { ThemeSwitcherProps } from './theme-switcher.type';

function ThemeSwitcher({ label, ...restProps }: ThemeSwitcherProps) {
  const { setTheme, resolvedTheme } = useTheme();

  const isDarkMode = equal(resolvedTheme, themes.DARK);

  const handleToggleTheme = () => {
    setTheme(isDarkMode ? themes.LIGHT : themes.DARK);
  };

  return (
    <div className={styles.root} data-testid="theme-switcher">
      <input
        type="checkbox"
        id="switch"
        checked={isDarkMode}
        hidden
        aria-label={label}
        data-testid="theme-switcher"
        onChange={handleToggleTheme}
        {...restProps}
      />
      <label htmlFor="switch" className={styles.sky}>
        <ul className={styles.sun}>
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
        </ul>

        <div className={styles['cloud-01']} data-testid="cloud-01">
          <div />
          <div />
          <div />
        </div>

        <div className={styles['cloud-02']} data-testid="cloud-02">
          <div />
          <div />
          <div />
        </div>

        <div
          className={cx([styles.star, styles['star-01']])}
          data-testid="star-01"
        />
        <div
          className={cx([styles.star, styles['star-02']])}
          data-testid="star-02"
        />
        <div
          className={cx([styles.star, styles['star-03']])}
          data-testid="star-03"
        />
        <div
          className={cx([styles.star, styles['star-04']])}
          data-testid="star-04"
        />
      </label>
    </div>
  );
}

export default ThemeSwitcher;
