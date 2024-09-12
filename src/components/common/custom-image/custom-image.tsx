/* eslint-disable jsx-a11y/alt-text */
import type { ImageProps } from 'next/image';
import NextImage from 'next/image';
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
  showZoomInBtn = false,
  onZoomInImage,
  ...imageProps
}: CustomImageProps) {
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
        <CustomTooltip label="Zoom in on this image" placement="right" hasArrow>
          <button
            type="button"
            aria-label="Zoom in on this image"
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
