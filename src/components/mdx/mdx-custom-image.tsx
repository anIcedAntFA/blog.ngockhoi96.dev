'use client';

import type { ImageProps as NextImageProps } from 'next/image';
import { useTranslations } from 'next-intl';

import useBoolean from '@/hooks/use-boolean';

import CustomImage from '../common/custom-image';
import ImageLightbox from '../common/image-lightbox';

import styles from './mdx.module.css';

type MdxCustomImageProps = NextImageProps & {
  caption?: string;
  showMaximizeBtn?: boolean;
  onZoomInImage?: VoidFunction;
};

function MdxCustomImage({
  src,
  alt,
  width,
  height,
  ...customImageProps
}: MdxCustomImageProps) {
  const t = useTranslations('components.markdown.mdxCustomImage');

  const showLightbox = useBoolean(false);

  const hasWidthHeight = width && height;

  return (
    <>
      <CustomImage
        src={src}
        alt={alt}
        title={t('title')}
        {...(!hasWidthHeight && {
          width: 0,
          height: 0,
          sizes: '100vw',
          style: { width: '100%', height: 'auto' },
        })}
        showZoomInBtn
        data-src={src}
        onZoomInImage={showLightbox.on}
        classWrapper={styles['custom-image-wrapper']}
        className={styles['custom-image']}
        {...customImageProps}
      />

      <ImageLightbox
        isOpened={showLightbox.value}
        initialImage={{ url: src, alt }}
        showDownloadBtn
        onCloseModal={showLightbox.off}
      />
    </>
  );
}

export default MdxCustomImage;
