'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

import CloseIcon from '@/components/icons/close-icon';
import DownloadIcon from '@/components/icons/download-icon';
import { motionPresets } from '@/configs/motion-variants';
import type { ImageUrl } from '@/types/common';

import Backdrop from '../backdrop';
import { Dialog, DialogContent, DialogFooter } from '../dialog';
import IconButton from '../icon-button';

import styles from './media-lightbox.module.css';
import NavigationButton from './navigation-button';

type ImageProps = {
  url: ImageUrl;
  alt: string;
};

type MediaLightboxProps = {
  isOpened: boolean;
  initialMedia: ImageProps | null;
  onCloseModal: VoidFunction;
  showCloseBtn?: boolean;
  showDownloadBtn?: boolean;
};

const DEFAULT_INDEX = 0;

function MediaLightbox({
  isOpened,
  initialMedia,
  onCloseModal,
  showCloseBtn = true,
  showDownloadBtn = false,
}: MediaLightboxProps) {
  const [mediaList, setMediaList] = useState<ImageProps[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(DEFAULT_INDEX);

  const t = useTranslations('components.common.mediaLightbox');

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

    setMediaList(imageSources);

    setCurrentIndex(
      initialMedia?.url
        ? imageSources.findIndex((img) => img.url === initialMedia.url)
        : DEFAULT_INDEX,
    );
  }, [initialMedia]);

  const mediaUrls = mediaList.map((img) => img.url);
  const mediaAlts = mediaList.map((img) => img.alt);

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
            src={mediaUrls[currentIndex]}
            alt={mediaAlts[currentIndex]}
            title={t('previewImage.title')}
            sizes="100vw"
            width={0}
            height={0}
            onClick={onCloseModal}
          />
        </div>

        <DialogFooter className={styles.footer}>
          <ul className={styles.list}>
            {mediaList.map(({ url, alt }, index) => (
              <li key={String(url)}>
                <Image
                  src={url}
                  alt={alt}
                  title={alt}
                  width={60}
                  height={60}
                  className={styles['list-item']}
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

        {currentIndex < mediaList.length - 1 && (
          <NavigationButton
            type="next"
            onNavigate={() => setCurrentIndex(currentIndex + 1)}
          />
        )}
      </DialogContent>
    </Dialog>
  );
}

export default MediaLightbox;
