import cx from 'clsx';
import type { ComponentProps } from 'react';

import Collapse from '../../collapse';
import useDetailsContext from '../details.hook';
import styles from '../details.module.css';

type DetailsContentProps = ComponentProps<'div'>;

function DetailsContent({
  className,
  children,
  ...divProps
}: DetailsContentProps) {
  const { isOpened } = useDetailsContext();

  return (
    <Collapse isOpened={isOpened}>
      <div className={cx(styles.content, className)} {...divProps}>
        {children}
      </div>
    </Collapse>
  );
}

export default DetailsContent;
