/* eslint-disable jsx-a11y/alt-text */
import type { ImageProps } from 'next/image';
import NextImage from 'next/image';

import MaximizeIcon from '@/components/icons/maximize-icon';
import type { ImageUrl } from '@/types/common';

import CustomTooltip from '../custom-tooltip';

import styles from './custom-image.module.css';

type ImgProps = {
  url: ImageUrl;
  alt: string;
};

type CustomImageProps = ImageProps & {
  caption?: string;
  showZoomInBtn?: boolean;
  onZoomInImage?: (imgUrl: ImgProps) => void;
};

function CustomImage({
  src: url,
  alt,
  caption = '',
  showZoomInBtn = false,
  onZoomInImage,
  ...imageProps
}: CustomImageProps) {
  const Image = () => (
    <NextImage
      src={url}
      alt={alt}
      className={styles.image}
      onClick={() => onZoomInImage?.({ url, alt })}
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
        <CustomTooltip
          label="View image in full screen"
          placement="right"
          hasArrow
        >
          <button
            type="button"
            aria-label="Zoom in image"
            className={styles['maximize-btn']}
            onClick={() => onZoomInImage?.({ url, alt })}
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
