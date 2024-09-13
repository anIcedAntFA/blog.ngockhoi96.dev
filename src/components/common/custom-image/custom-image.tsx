'use client';

import type { ImageProps } from 'next/image';
import NextImage from 'next/image';
import { useTranslations } from 'next-intl';
import { useCallback } from 'react';

import MaximizeIcon from '@/components/icons/maximize-icon';

import CustomTooltip from '../custom-tooltip';

import styles from './custom-image.module.css';

export type CustomImageProps = ImageProps & {
  caption?: string;
  showZoomInBtn?: boolean;
  onZoomInImage?: VoidFunction;
};

function CustomImage({
  src: url,
  alt,
  caption = '',
  onZoomInImage,
  showZoomInBtn = false,
  ...imageProps
}: CustomImageProps) {
  const t = useTranslations('components.common.customImage');

  const renderImage = useCallback(
    () => (
      <NextImage
        src={url}
        alt={alt}
        className={styles.image}
        onClick={onZoomInImage}
        {...imageProps}
      />
    ),
    [alt, imageProps, onZoomInImage, url],
  );

  return (
    <div className={styles.wrapper}>
      {caption ? (
        <figure className={styles.figure}>
          {renderImage()}
          <figcaption className={styles.caption}>{caption}</figcaption>
        </figure>
      ) : (
        renderImage()
      )}
      {showZoomInBtn && (
        <CustomTooltip label={t('tooltipLabel')} placement="right" hasArrow>
          <button
            type="button"
            aria-label={t('ariaLabel')}
            className={styles['maximize-btn']}
            onClick={onZoomInImage}
          >
            <span className={styles['maximize-icon']}>
              <MaximizeIcon />
            </span>
          </button>
        </CustomTooltip>
      )}
    </div>
  );
}

export default CustomImage;
