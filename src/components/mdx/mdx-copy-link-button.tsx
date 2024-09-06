'use client';

import { toast } from 'sonner';

import CustomTooltip from '@/components/common/custom-tooltip';
import IconButton from '@/components/common/icon-button';
import LinkIcon from '@/components/icons/link-icon';
import useCopyToClipboard from '@/hooks/use-copy-to-clipboard';
import type { Size } from '@/types/constants';

import styles from './mdx.module.css';

type MdxCopyLinkButtonProps = {
  size: Size;
  headingId?: string;
};

const getUrlFromId = (id?: string) => {
  if (!id) return '';

  const { origin, pathname } = window.location;
  return `${origin}${pathname}#${id}`;
};

const MdxCopyLinkButton = ({ size, headingId }: MdxCopyLinkButtonProps) => {
  const { copyText, hasCopied } = useCopyToClipboard();

  const handleCopyUrl = () => {
    if (hasCopied) return;

    const url = getUrlFromId(headingId);

    copyText(url)
      .then(() => {
        toast.success('Copied link to clipboard', {
          icon: <LinkIcon />,
        });
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <CustomTooltip label="Copy URL link" placement="right" hasArrow>
      <span className={styles['copy-link-btn']}>
        <IconButton
          aria-label="Copy URL link"
          size={size}
          onClick={handleCopyUrl}
        >
          <LinkIcon />
        </IconButton>
      </span>
    </CustomTooltip>
  );
};

export default MdxCopyLinkButton;
