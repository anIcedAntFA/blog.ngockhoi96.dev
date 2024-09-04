'use client';

import useCopyToClipboard from '@/hooks/use-copy-to-clipboard';
import type { Size } from '@/types/constants';

import CustomTooltip from '../common/custom-tooltip';
import IconButton from '../common/icon-button';
import LinkIcon from '../icons/link-icon';

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
  const { copyText } = useCopyToClipboard();

  const handleCopyUrl = () => {
    const url = getUrlFromId(headingId);

    copyText(url)
      .then(() => {
        //TODO Handle success toast message
        console.log('URL copied to clipboard: 📋', url);
      })
      .catch((error) => {
        //TODO Handle error toast message
        console.error('Failed to copy URL to clipboard: ❌', error);
      });
  };

  return (
    <>
      <CustomTooltip label="Copy URL link" placement="right" hasArrow>
        <span className={'md-copy-link-btn'}>
          <IconButton
            aria-label="Copy URL link"
            size={size}
            onClick={handleCopyUrl}
          >
            <LinkIcon />
          </IconButton>
        </span>
      </CustomTooltip>
    </>
  );
};

export default MdxCopyLinkButton;
