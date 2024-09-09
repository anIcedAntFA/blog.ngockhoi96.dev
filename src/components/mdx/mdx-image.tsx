import type { ImageProps } from 'next/image';
import NextImage from 'next/image';

import styles from './mdx.module.css';

type MdxImageProps = Omit<ImageProps, 'width' | 'height'>;

//* Since `width` and `height` are not provided in the Markdown image format,
//* we provide the height and width automatically.
//* @see https://nextjs.org/docs/pages/building-your-application/optimizing/images
function MdxImage({ alt, ...nextImageProps }: MdxImageProps) {
  return (
    <NextImage
      {...nextImageProps}
      alt={alt}
      width={0}
      height={0}
      sizes="(min-width: 768px) 200vw, 500vw"
      className={styles.image}
    />
  );
}

export default MdxImage;
