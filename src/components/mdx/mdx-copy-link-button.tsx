'use client';

import type { Size } from '@/types/constants';

import CustomTooltip from '../common/custom-tooltip';
import IconButton from '../common/icon-button';
import LinkIcon from '../icons/link-icon';

type MdxCopyLinkButtonProps = {
  size: Size;
};

const MdxCopyLinkButton = ({ size }: MdxCopyLinkButtonProps) => {
  const handleCopy = () => {
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => {
        console.log('URL copied to clipboard');
      })
      .catch((err) => {
        console.error('Failed to copy URL: ', err);
      });
  };

  return (
    <CustomTooltip label="Copy URL link" placement="right" hasArrow>
      <span className={'md-copy-link-btn'}>
        <IconButton aria-label="Copy URL link" size={size} onClick={handleCopy}>
          <LinkIcon />
        </IconButton>
      </span>
    </CustomTooltip>
  );
};

export default MdxCopyLinkButton;
