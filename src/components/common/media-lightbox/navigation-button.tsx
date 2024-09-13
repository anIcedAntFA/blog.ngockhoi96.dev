import ChevronLeftIcon from '@/components/icons/chervon-left-icon';
import ChevronRightIcon from '@/components/icons/chervon-right-icon';

import styles from './media-lightbox.module.css';

type NavigationButtonProps = {
  type: 'prev' | 'next';
  onNavigate: () => void;
};

const typeWithProps = {
  prev: {
    title: 'Previous',
    ariaLabel: 'Previous image',
    styles: styles['previous-btn'],
    icon: <ChevronLeftIcon />,
    iconStyles: styles['previous-icon'],
  },
  next: {
    title: 'Next',
    ariaLabel: 'Next image',
    styles: styles['next-btn'],
    icon: <ChevronRightIcon />,
    iconStyles: styles['next-icon'],
  },
};

function NavigationButton({ type, onNavigate }: NavigationButtonProps) {
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
