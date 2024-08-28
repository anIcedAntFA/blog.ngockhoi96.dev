import Link from '../link';

import styles from './table-of-content.module.css';
import type { TableOfContentItemProps } from './table-of-content.type';

function TableOfContentItem({
  data,
  level,
  activeId,
}: TableOfContentItemProps) {
  return (
    <ul className={styles['item-wrapper']}>
      {data.map((item) => (
        <li key={item.url}>
          <Link to={item.url}>{item.title}</Link>
          {item.items.length > 0 && (
            <TableOfContentItem
              data={item.items}
              level={level + 1}
              activeId={activeId}
            />
          )}
        </li>
      ))}
    </ul>
  );
}

export default TableOfContentItem;
