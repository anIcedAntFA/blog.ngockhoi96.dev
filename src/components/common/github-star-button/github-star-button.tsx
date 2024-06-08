import Link from 'next/link';
import { useTranslations } from 'next-intl';

import StarIcon from '@/components/icons/star-icon';

import CustomTooltip from '../custom-tooltip';
import Divider from '../divider';
import Flex from '../flex';

import styles from './github-star-button.module.css';
import type { GithubStarButtonProps } from './github-star-button.type';

function GithubStarButton({ href, count }: GithubStarButtonProps) {
  const t = useTranslations('components.common.githubStarButton');

  return (
    <CustomTooltip label={t('tooltip')} hasArrow>
      <Link
        href={href}
        target="_blank"
        rel="noopener"
        aria-label={t('label')}
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
          height="40px"
        />
        <span className={styles.count}>{count}</span>
      </Link>
    </CustomTooltip>
  );
}

export default GithubStarButton;
