'use client';

import type { ImageProps } from 'next/image';
import NextImage from 'next/image';

import MaximizeIcon from '@/components/icons/maximize-icon';

import styles from './custom-image.module.css';

type CustomImageProps = ImageProps & {
  caption?: string;
  showMaximizeBtn?: boolean;
};

function CustomImage({
  caption = '',
  showMaximizeBtn = false,
  ...imageProps
}: CustomImageProps) {
  const handleZoomIn = () => {
    console.log('zoom in');
  };

  return (
    <div className={styles.wrapper}>
      {caption ? (
        <figure className={styles.figure}>
          <NextImage
            className={styles.image}
            onClick={handleZoomIn}
            {...imageProps}
          />
          <figcaption className={styles.caption}>{caption}</figcaption>
        </figure>
      ) : (
        <NextImage
          className={styles.image}
          onClick={handleZoomIn}
          {...imageProps}
        />
      )}
      {showMaximizeBtn && (
        <button
          type="button"
          aria-label="Maximize image"
          className={styles['maximize-btn']}
          onClick={handleZoomIn}
        >
          <span className={styles['maximize-icon']}>
            <MaximizeIcon />
          </span>
        </button>
      )}
    </div>
  );
}

export default CustomImage;
