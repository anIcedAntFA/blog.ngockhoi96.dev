'use client';

import cx from 'clsx';
import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';

import { themes } from '@/configs/themes';
import { equal } from '@/utils/equal';

import CustomTooltip from '../custom-tooltip';

import styles from './theme-switcher.module.css';
import type { ThemeSwitcherProps } from './theme-switcher.type';

function ThemeSwitcher(inputProps: ThemeSwitcherProps) {
  const { setTheme, resolvedTheme } = useTheme();

  const t = useTranslations('components.common.themeSwitcher');

  const isDarkMode = equal(resolvedTheme, themes.DARK);
  const checkboxValue = isDarkMode ? themes.DARK : themes.LIGHT;
  const tooltipLabel = isDarkMode
    ? t('tooltipLabel.light')
    : t('tooltipLabel.dark');

  const handleToggleTheme = () => {
    setTheme(isDarkMode ? themes.LIGHT : themes.DARK);
  };

  return (
    <CustomTooltip label={tooltipLabel} hasArrow>
      <label htmlFor="switch" className={styles.root}>
        <input
          type="checkbox"
          id="switch"
          checked={isDarkMode}
          value={checkboxValue}
          hidden
          aria-label={t('ariaLabel')}
          data-testid="theme-switcher-input"
          onChange={handleToggleTheme}
          {...inputProps}
        />
        <div className={styles.sky}>
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
        </div>
      </label>
    </CustomTooltip>
  );
}

export default ThemeSwitcher;
