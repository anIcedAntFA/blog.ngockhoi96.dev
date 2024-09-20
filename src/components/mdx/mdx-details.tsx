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
      isOpened={isOpened.value}
      title={title}
      className={styles.details}
      onExpand={isOpened.toggle}
    >
      {children}
    </Details>
  );
}

export default MdxDetails;
