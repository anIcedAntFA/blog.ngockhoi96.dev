import { useTranslations } from 'next-intl';

import ChevronLeftIcon from '@/components/icons/chervon-left-icon';
import ChevronRightIcon from '@/components/icons/chervon-right-icon';

import styles from './image-lightbox.module.css';
import type {
  NavigationButtonProps,
  TypeWithPropsKeys,
} from './image-lightbox.type';

const getTypeWithProps = (t: (key: TypeWithPropsKeys) => string) => ({
  prev: {
    title: t('previousButton.title'),
    ariaLabel: t('previousButton.ariaLabel'),
    btnStyles: styles['previous-btn'],
    icon: <ChevronLeftIcon />,
    iconStyles: styles['previous-icon'],
  },
  next: {
    title: t('nextButton.title'),
    ariaLabel: t('nextButton.ariaLabel'),
    btnStyles: styles['next-btn'],
    icon: <ChevronRightIcon />,
    iconStyles: styles['next-icon'],
  },
});

function NavigationButton({ type, onNavigate }: NavigationButtonProps) {
  const t = useTranslations('components.common.imageLightbox');

  const { title, ariaLabel, btnStyles, icon, iconStyles } =
    getTypeWithProps(t)[type];

  return (
    <button
      type='button'
      title={title}
      aria-label={ariaLabel}
      className={btnStyles}
      onClick={onNavigate}
    >
      <span className={iconStyles}>{icon}</span>
    </button>
  );
}

export default NavigationButton;
