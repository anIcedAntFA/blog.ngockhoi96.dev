import cx from 'clsx';

import { orientations } from '@/configs/constants';

import {
  dividerSizeStyleMap,
  dividerThicknesses,
  dividerVariants,
} from './divider.config';
import styles from './divider.module.css';
import { DividerProps } from './divider.type';

function Divider({
  orientation = orientations.HORIZONTAL,
  // variant = dividerVariants.SOLID,
  // thickness = dividerThicknesses.THIN,
  width = '100%',
  height = '100%',
  className,
  ...passProps
}: DividerProps) {
  return (
    <hr
      className={cx(
        styles.divider,
        // dividerOrientationStyleMap(styles)[orientation],
        // dividerVariantStyleMap(styles)[variant],
        // dividerThicknessStyleMap(styles)[thickness],
        className,
      )}
      // style={dividerSizeStyleMap(width, height)[orientation]}
      {...passProps}
    />
  );
}

export default Divider;
