import cx from 'clsx';
import type { ComponentProps } from 'react';

import useDelayedState from '@/hooks/use-delayed-state';

import { DetailsProvider } from '../details.context';
import styles from '../details.module.css';

type DetailsProps = ComponentProps<'details'> & {
  isOpened: boolean;
  onToggle: VoidFunction;
};

const TIMEOUT_DELAY = 300;

function Details({
  isOpened,
  className,
  children,
  onToggle,
  ...detailsProps
}: DetailsProps) {
  //* To animate the close animation we have to delay the DOM node state here.
  const isDelayedOpen = useDelayedState(isOpened, TIMEOUT_DELAY);

  const contextValue = {
    isOpened,
    onToggle,
  };

  return (
    <DetailsProvider value={contextValue}>
      <details
        open={isDelayedOpen}
        className={cx(styles.wrapper, className)}
        data-expanded={isOpened}
        {...detailsProps}
      >
        {children}
      </details>
    </DetailsProvider>
  );
}

export default Details;
