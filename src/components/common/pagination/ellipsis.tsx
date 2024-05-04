import { ELLIPSIS } from './pagination.config';
import styles from './pagination.module.css';
import { EllipsisProps } from './pagination.type';

function Ellipsis({ color = 'base' }: EllipsisProps) {
  return (
    <span aria-hidden="true" data-color={color} className={styles.ellipsis}>
      {ELLIPSIS}
    </span>
  );
}

export default Ellipsis;
