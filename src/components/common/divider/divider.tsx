import cx from 'clsx';

import { colors, orientations } from '@/configs/constants';

import {
  dividerSizeStyleMap,
  dividerThicknesses,
  dividerVariants,
} from './divider.config';
import styles from './divider.module.css';
import type { DividerProps } from './divider.type';

function Divider({
  orientation = orientations.HORIZONTAL,
  variant = dividerVariants.SOLID,
  thickness = dividerThicknesses.THIN,
  color = colors.BASE,
  width = '100%',
  height = '100%',
  isCentered = false,
  className,
  ...passProps
}: DividerProps) {
  return (
    <hr
      data-orientation={orientation}
      data-variant={variant}
      data-thickness={thickness}
      data-color={color}
      className={cx(
        styles.root,
        {
          [styles.centered]: isCentered,
        },
        className,
      )}
      style={dividerSizeStyleMap(width, height)[orientation]}
      {...passProps}
    />
  );
}

export default Divider;
