'use client';

import { useTranslations } from 'next-intl';
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
  const t = useTranslations('components.markdown.copyHeadingUrlButton');

  const { copyText, hasCopied } = useCopyToClipboard();

  const handleCopyUrl = () => {
    if (hasCopied) return;

    const url = getUrlFromId(headingId);

    copyText(url)
      .then(() => {
        toast.success(t('toastMessage.success'), {
          icon: <LinkIcon />,
        });
      })
      .catch(() => toast.error(t('toastMessage.fail')));
  };

  return (
    <CustomTooltip label={t('tooltipLabel')} placement="right" hasArrow>
      <span className={styles['copy-link-btn']}>
        <IconButton
          aria-label={t('ariaLabel')}
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
