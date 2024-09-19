import { Fragment } from 'react';

import { statusWithIcons } from '../callout.config';
import useCalloutContext from '../callout.hook';
import styles from '../callout.module.css';
import type { CalloutIconProps } from '../callout.type';

function CalloutIcon(props: CalloutIconProps) {
  const { variant, status } = useCalloutContext();

  const Icon =
    typeof status === 'string' && statusWithIcons[status]
      ? statusWithIcons[status]
      : Fragment;

  return (
    <span
      className={styles.icon}
      data-variant={variant}
      data-status={status}
      {...props}
    >
      {<Icon />}
    </span>
  );
}

export default CalloutIcon;
