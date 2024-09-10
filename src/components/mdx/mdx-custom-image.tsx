'use client';

import type { ImageProps as NextImageProps } from 'next/image';
import { useState } from 'react';

import useBoolean from '@/hooks/use-boolean';
import type { ImageUrl } from '@/types/common';

import CustomImage from '../common/custom-image';
import MediaLightbox from '../common/media-lightbox';

type MdxCustomImageProps = NextImageProps & {
  caption?: string;
  showMaximizeBtn?: boolean;
  onZoomInImage?: VoidFunction;
};

type ImageProps = {
  url: ImageUrl;
  alt: string;
};

function MdxCustomImage(customImageProps: MdxCustomImageProps) {
  const [image, setImage] = useState<ImageProps | null>(null);

  const showLightbox = useBoolean(false);

  const handleZoomIn = ({ url, alt }: ImageProps) => {
    setImage({ url, alt });
    showLightbox.on();
  };

  const handleCloseLightbox = () => {
    showLightbox.off();
  };

  return (
    <>
      <CustomImage
        showZoomInBtn
        onZoomInImage={handleZoomIn}
        {...customImageProps}
        data-src={customImageProps.src}
      />
      <MediaLightbox
        isOpened={showLightbox.value}
        initialMedia={image}
        onCloseModal={handleCloseLightbox}
      />
    </>
  );
}

export default MdxCustomImage;
