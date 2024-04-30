import { ELLIPSIS } from './pagination.config';
import styles from './pagination.module.css';

function Ellipsis() {
  return (
    <span aria-hidden="true" className={styles.ellipsis}>
      {ELLIPSIS}
    </span>
  );
}

export default Ellipsis;
