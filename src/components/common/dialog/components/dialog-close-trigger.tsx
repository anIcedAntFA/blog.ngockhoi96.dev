'use client';

import cx from 'clsx';

import IconButton from '@/components/common/icon-button';
import CloseIcon from '@/components/icons/close-icon';
import callAllHandlers from '@/utils/call-all-handler';

import { useInternalDialog } from '../dialog.hook';
import styles from '../dialog.module.css';
import type { DialogCloseTriggerProps } from '../dialog.type';

function DialogCloseTrigger({
  className,
  onClick,
  ...passProps
}: DialogCloseTriggerProps) {
  const { onClose } = useInternalDialog();

  return (
    <IconButton
      color="primary"
      className={cx(styles['close-btn'], className)}
      {...passProps}
      label="close dialog"
      onClick={callAllHandlers(onClose, onClick)}
    >
      <CloseIcon />
    </IconButton>
  );
}

export default DialogCloseTrigger;
