/* eslint-disable jsx-a11y/alt-text */
import type { ImageProps } from 'next/image';
import NextImage from 'next/image';

import MaximizeIcon from '@/components/icons/maximize-icon';

import styles from './custom-image.module.css';

type CustomImageProps = ImageProps & {
  caption?: string;
  showZoomInBtn?: boolean;
  onZoomInImage?: VoidFunction;
};

function CustomImage({
  caption = '',
  showZoomInBtn = false,
  onZoomInImage,
  ...imageProps
}: CustomImageProps) {
  const Image = () => (
    <NextImage
      className={styles.image}
      onClick={onZoomInImage}
      {...imageProps}
    />
  );

  return (
    <div className={styles.wrapper}>
      {caption ? (
        <figure className={styles.figure}>
          <Image />
          <figcaption className={styles.caption}>{caption}</figcaption>
        </figure>
      ) : (
        <Image />
      )}
      {showZoomInBtn && (
        <button
          type="button"
          aria-label="Zoom in image"
          className={styles['maximize-btn']}
          onClick={onZoomInImage}
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
