import { useTranslations } from 'next-intl';

import ChevronLeftIcon from '@/components/icons/chervon-left-icon';
import ChevronRightIcon from '@/components/icons/chervon-right-icon';

import styles from './media-lightbox.module.css';

type NavigationButtonProps = {
  type: 'prev' | 'next';
  onNavigate: () => void;
};

function NavigationButton({ type, onNavigate }: NavigationButtonProps) {
  const t = useTranslations('components.common.mediaLightbox');

  const typeWithProps = {
    prev: {
      title: t('previousButton.title'),
      ariaLabel: t('previousButton.ariaLabel'),
      styles: styles['previous-btn'],
      icon: <ChevronLeftIcon />,
      iconStyles: styles['previous-icon'],
    },
    next: {
      title: t('nextButton.title'),
      ariaLabel: t('nextButton.ariaLabel'),
      styles: styles['next-btn'],
      icon: <ChevronRightIcon />,
      iconStyles: styles['next-icon'],
    },
  };

  return (
    <button
      type="button"
      title={typeWithProps[type].title}
      aria-label={typeWithProps[type].ariaLabel}
      className={typeWithProps[type].styles}
      onClick={onNavigate}
    >
      <span className={typeWithProps[type].iconStyles}>
        {typeWithProps[type].icon}
      </span>
    </button>
  );
}

export default NavigationButton;
