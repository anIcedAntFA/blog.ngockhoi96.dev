'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

import CloseIcon from '@/components/icons/close-icon';
import DownloadIcon from '@/components/icons/download-icon';
import { motionPresets } from '@/configs/motion-variants';
import { downloadImage } from '@/utils/download-image';

import Backdrop from '../backdrop';
import { Dialog, DialogContent, DialogFooter } from '../dialog';
import IconButton from '../icon-button';

import styles from './image-lightbox.module.css';
import type { ImageLightboxProps, ImageProps } from './image-lightbox.type';
import NavigationButton from './navigation-button';

const DEFAULT_INDEX = 0;

function ImageLightbox({
  isOpened,
  initialImage,
  onCloseModal,
  showCloseBtn = true,
  showDownloadBtn = false,
}: ImageLightboxProps) {
  const [imageList, setImageList] = useState<ImageProps[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(DEFAULT_INDEX);

  const t = useTranslations('components.common.imageLightbox');

  useEffect(() => {
    const images = document.querySelectorAll('img[data-src]');
    const imageSources = Array.from(images)
      .map((img) => ({
        url: img.getAttribute('data-src'),
        alt: img.getAttribute('alt'),
      }))
      .filter(
        (img): img is { url: string; alt: string } =>
          img.url !== null && img.alt !== null,
      );

    setImageList(imageSources);
    setCurrentIndex(
      initialImage?.url
        ? imageSources.findIndex((img) => img.url === initialImage.url)
        : DEFAULT_INDEX,
    );
  }, [initialImage]);

  const imageUrls = imageList.map((img) => img.url);
  const imageAlts = imageList.map((img) => img.alt);

  return (
    <Dialog
      opened={isOpened}
      isCentered
      motionPreset={motionPresets.ZOOM_IN}
      className={styles.wrapper}
      onClose={onCloseModal}
    >
      <Backdrop />

      <DialogContent className={styles.content}>
        <div className={styles.image}>
          <Image
            src={imageUrls[currentIndex]}
            alt={imageAlts[currentIndex]}
            title={t('previewImage.title')}
            sizes="100vw"
            width={0}
            height={0}
            onClick={onCloseModal}
          />
        </div>

        <DialogFooter className={styles.footer}>
          <ul className={styles['preview-list']}>
            {imageList.map(({ url, alt }, index) => (
              <li key={String(url)}>
                <Image
                  src={url}
                  alt={alt}
                  title={alt}
                  width={60}
                  height={60}
                  className={styles['preview-item']}
                  data-active={currentIndex === index}
                  onClick={() => setCurrentIndex(index)}
                />
              </li>
            ))}
          </ul>
        </DialogFooter>

        {showDownloadBtn && (
          <div className={styles['download-btn']}>
            <IconButton
              size="large"
              label={t('downloadButton.label')}
              title={t('downloadButton.title')}
              onClick={() =>
                downloadImage(
                  imageUrls[currentIndex] as string,
                  imageAlts[currentIndex],
                  true,
                )
              }
            >
              <DownloadIcon />
            </IconButton>
          </div>
        )}

        {showCloseBtn && (
          <div className={styles['close-btn']}>
            <IconButton
              size="large"
              label={t('closeButton.label')}
              title={t('closeButton.title')}
              onClick={onCloseModal}
            >
              <CloseIcon />
            </IconButton>
          </div>
        )}

        {currentIndex > 0 && (
          <NavigationButton
            type="prev"
            onNavigate={() => setCurrentIndex(currentIndex - 1)}
          />
        )}

        {currentIndex < imageList.length - 1 && (
          <NavigationButton
            type="next"
            onNavigate={() => setCurrentIndex(currentIndex + 1)}
          />
        )}
      </DialogContent>
    </Dialog>
  );
}

export default ImageLightbox;
