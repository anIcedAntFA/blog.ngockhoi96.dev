'use client';

import { Fragment } from 'react';

import {
  Callout,
  CalloutDescription,
  CalloutIcon,
  CalloutTitle,
} from '../common/callout';

import styles from './mdx.module.css';

type MdxCalloutProps = {
  variant?: 'subtle' | 'solid';
  status?: 'info' | 'warning' | 'error' | 'success';
  title?: string;
  children: string;
};

function MdxCallout({
  variant = 'subtle',
  status = 'info',
  title,
  children,
}: MdxCalloutProps) {
  const Content = title ? 'div' : Fragment;

  return (
    <Callout variant={variant} status={status} className={styles.callout}>
      <CalloutIcon />
      <Content>
        {title && (
          <CalloutTitle className={styles['callout-title']}>
            {title}
          </CalloutTitle>
        )}
        <CalloutDescription>{children}</CalloutDescription>
      </Content>
    </Callout>
  );
}

export default MdxCallout;
