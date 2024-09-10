'use client';

import type { ImageProps } from 'next/image';
import { useState } from 'react';

import useBoolean from '@/hooks/use-boolean';

import Backdrop from '../common/backdrop';
import CustomImage from '../common/custom-image';
import { Dialog, DialogContent } from '../common/dialog';
import ImagePreviewSlider from '../common/image-preview-slider';

type MdxCustomImageProps = ImageProps & {
  caption?: string;
  showMaximizeBtn?: boolean;
  onZoomInImage?: VoidFunction;
};

function MdxCustomImage(customImageProps: MdxCustomImageProps) {
  const [imgUrls, setImgUrls] = useState<string[]>([]);

  const showDialog = useBoolean(false);

  const handleZoomIn = () => {
    const images = document.querySelectorAll('img[data-src]');
    const imageSources = Array.from(images).map((img) =>
      img.getAttribute('data-src'),
    );

    setImgUrls(imageSources.filter((src): src is string => src !== null));
    showDialog.on();

    // console.log('Zoom in', imageSources);
  };

  return (
    <>
      <CustomImage
        showZoomInBtn
        onZoomInImage={handleZoomIn}
        {...customImageProps}
        data-src={customImageProps.src}
      />

      <Dialog opened={showDialog.value} onClose={showDialog.off}>
        <Backdrop />

        <DialogContent>
          <ImagePreviewSlider imageUrls={imgUrls} />
        </DialogContent>
      </Dialog>
    </>
  );
}

export default MdxCustomImage;
