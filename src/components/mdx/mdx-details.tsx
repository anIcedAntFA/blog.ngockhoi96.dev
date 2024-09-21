'use client';

import useBoolean from '@/hooks/use-boolean';

import Details from '../common/details';

import styles from './mdx.module.css';

type MdxDetailsProps = {
  title: string;
  children: string;
};

function MdxDetails({ title, children }: MdxDetailsProps) {
  const isOpened = useBoolean(false);

  return (
    <Details
      title={title}
      isOpened={isOpened.value}
      className={styles.details}
      onToggle={isOpened.toggle}
    >
      {children}
    </Details>
  );
}

export default MdxDetails;
