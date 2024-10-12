'use client';

import useBoolean from '@/hooks/use-boolean';

import {
  Details,
  DetailsContent,
  DetailsDivider,
  DetailsSummary,
  DetailsSummaryIcon,
} from '../common/details';

import styles from './mdx.module.css';

type MdxDetailsProps = {
  title: string;
  children: string;
};

function MdxDetails({ title, children }: MdxDetailsProps) {
  const isOpened = useBoolean(false);

  return (
    <Details
      isOpened={isOpened.value}
      className={styles.details}
      onToggle={isOpened.toggle}
    >
      <DetailsSummary>
        <DetailsSummaryIcon />
        <span className={styles['details-summary-title']}>{title}</span>
      </DetailsSummary>
      <DetailsDivider />
      <DetailsContent>{children}</DetailsContent>
    </Details>
  );
}

export default MdxDetails;
