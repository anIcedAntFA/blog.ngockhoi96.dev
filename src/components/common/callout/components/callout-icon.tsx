import { Fragment } from 'react';

import { statusWithIcons } from '../callout.config';
import { getCustomIcon } from '../callout.helper';
import useCalloutContext from '../callout.hook';
import styles from '../callout.module.css';
import type { CalloutIconProps } from '../callout.type';

function CalloutIcon(props: CalloutIconProps) {
  const { variant, status, icon, emoji, code } = useCalloutContext();

  const DefaultIcon =
    typeof status === 'string' && statusWithIcons[status]
      ? statusWithIcons[status]
      : Fragment;

  const customIcon = getCustomIcon(emoji || code || icon);

  return (
    <span
      className={styles.icon}
      data-variant={variant}
      data-status={status}
      {...props}
    >
      {customIcon ? customIcon : <DefaultIcon />}
    </span>
  );
}

export default CalloutIcon;
