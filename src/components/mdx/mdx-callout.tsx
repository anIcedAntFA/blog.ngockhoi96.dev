'use client';

import type { ReactNode } from 'react';
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
  icon?: ReactNode;
  emoji?: string;
  code?: string;
  title?: string;
  children: ReactNode;
};

function MdxCallout({
  variant = 'subtle',
  status = 'info',
  icon,
  emoji,
  code,
  title,
  children,
}: MdxCalloutProps) {
  const Content = title ? 'div' : Fragment;

  return (
    <Callout
      variant={variant}
      status={status}
      icon={icon}
      emoji={emoji}
      code={code}
      className={styles.callout}
    >
      <CalloutIcon />
      <Content>
        {title && (
          <CalloutTitle className={styles['callout-title']}>
            {title}
          </CalloutTitle>
        )}
        <CalloutDescription className={styles['callout-description']}>
          {children}
        </CalloutDescription>
      </Content>
    </Callout>
  );
}

export default MdxCallout;
