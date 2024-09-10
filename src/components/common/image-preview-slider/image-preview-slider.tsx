'use client';

import styles from './image-preview-slider.module.css';

type ImagePreviewSliderProps = {
  imageUrls: string[];
};

function ImagePreviewSlider({ imageUrls }: ImagePreviewSliderProps) {
  console.log({ imageUrls });

  return <div className={styles.wrapper}>ImagePreviewSlider</div>;
}

export default ImagePreviewSlider;
