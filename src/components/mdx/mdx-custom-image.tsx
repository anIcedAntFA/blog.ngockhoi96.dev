'use client';

import type { ImageProps as NextImageProps } from 'next/image';
import { useTranslations } from 'next-intl';

import useBoolean from '@/hooks/use-boolean';

import CustomImage from '../common/custom-image';
import MediaLightbox from '../common/media-lightbox';

type MdxCustomImageProps = NextImageProps & {
  caption?: string;
  showMaximizeBtn?: boolean;
  onZoomInImage?: VoidFunction;
};

function MdxCustomImage({
  src,
  alt,
  ...customImageProps
}: MdxCustomImageProps) {
  const t = useTranslations('components.markdown.mdxCustomImage');

  const showLightbox = useBoolean(false);

  return (
    <>
      <CustomImage
        src={src}
        alt={alt}
        title={t('title')}
        showZoomInBtn
        data-src={src}
        onZoomInImage={showLightbox.on}
        {...customImageProps}
      />

      <MediaLightbox
        isOpened={showLightbox.value}
        initialMedia={{ url: src, alt }}
        showDownloadBtn
        onCloseModal={showLightbox.off}
      />
    </>
  );
}

export default MdxCustomImage;
