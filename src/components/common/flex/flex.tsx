import cx from 'clsx';

import { styleProps } from './flex.config';
import styles from './flex.module.css';
import type { FlexProps } from './flex.type';

function Flex({
  direction = 'row',
  align = 'flex-start',
  justify = 'flex-start',
  wrap = 'no-wrap',
  spacing,
  className,
  style,
  children,
  ...restProps
}: FlexProps) {
  const styleMap = {
    direction: styles[direction],
    align: styles[`align-${align}`],
    justify: styles[`justify-${justify}`],
    wrap: styles[wrap],
  };

  console.log(justify, styleMap.justify);

  return (
    <div
      className={cx(
        styles.root,
        ...styleProps.map((prop) => {
          console.log(styleMap[prop]);
          return styleMap[prop];
        }),
        className,
      )}
      style={{ gap: spacing, ...style }}
      {...restProps}
    >
      {children}
    </div>
  );
}

export default Flex;
