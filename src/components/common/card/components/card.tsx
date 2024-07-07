import cx from 'clsx';

import { orientations } from '@/configs/constants';

import { CardProvider } from '../card.context';
import styles from '../card.module.css';
import type { CardProps } from '../card.type';

function Card({
  orientation = orientations.VERTICAL,
  className,
  children,
  ...articleProps
}: CardProps) {
  const contextValue = {
    orientation,
  };

  return (
    <CardProvider value={contextValue}>
      <article
        className={cx(styles.root, className)}
        data-orientation={orientation}
        {...articleProps}
      >
        {children}
      </article>
    </CardProvider>
  );
}

export default Card;
