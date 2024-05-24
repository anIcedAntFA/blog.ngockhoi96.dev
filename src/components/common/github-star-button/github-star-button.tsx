import Link, { LinkProps } from 'next/link';

import StarIcon from '@/components/icons/star-icon';

import Divider from '../divider';
import Flex from '../flex';

import styles from './github-star-button.module.css';

export type GithubStarButtonProps = {
  href: LinkProps['href'];
  count: number;
};

function GithubStarButton({ href, count }: GithubStarButtonProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener"
      aria-label="Star button"
      className={styles.root}
    >
      <Flex align="center" spacing="8px">
        <span className={styles.icon}>
          <StarIcon />
        </span>
        <span className={styles.star}>Star</span>
      </Flex>
      <Divider
        orientation="vertical"
        thickness="medium"
        color="primary"
        height="44px"
      />
      <span className={styles.count}>{count}</span>
    </Link>
  );
}

export default GithubStarButton;
