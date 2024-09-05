'use client';

import { useTheme } from 'next-themes';
import type { ToasterProps } from 'sonner';
import { Toaster as RootToaster } from 'sonner';

import DangerIcon from '@/components/icons/danger-icon';
import InfoIcon from '@/components/icons/info-icon';
import SuccessIcon from '@/components/icons/success-icon';
import WarningIcon from '@/components/icons/warning-icon';
import type { Theme } from '@/types/themes';

import styles from './toast.module.css';

function Toaster(toasterProps: ToasterProps) {
  const { resolvedTheme } = useTheme();

  return (
    <RootToaster
      position="bottom-right"
      gap={16}
      duration={4000}
      visibleToasts={8}
      theme={resolvedTheme as Theme}
      closeButton
      toastOptions={{
        className: styles.root,
        classNames: {
          info: styles.info,
          success: styles.success,
          warning: styles.warning,
          error: styles.error,
          icon: styles.icon,
          title: styles.title,
          closeButton: styles['close-btn'],
        },
      }}
      icons={{
        info: <InfoIcon />,
        success: <SuccessIcon />,
        warning: <WarningIcon />,
        error: <DangerIcon />,
      }}
      {...toasterProps}
    />
  );
}

export default Toaster;
