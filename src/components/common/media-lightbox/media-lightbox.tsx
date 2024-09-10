'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

import CloseIcon from '@/components/icons/close-icon';
import type { ImageUrl } from '@/types/common';

import Backdrop from '../backdrop';
import { Dialog, DialogContent } from '../dialog';
import IconButton from '../icon-button';

import styles from './media-lightbox.module.css';

type ImageProps = {
  url: ImageUrl;
  alt: string;
};

type MediaLightboxProps = {
  isOpened: boolean;
  initialMedia: ImageProps | null;
  onCloseModal: VoidFunction;
};

function MediaLightbox({
  isOpened,
  initialMedia,
  onCloseModal,
}: MediaLightboxProps) {
  const [mediaList, setMediaList] = useState<ImageProps[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const mediaUrls = mediaList.map((img) => img.url);
  const mediaAlts = mediaList.map((img) => img.alt);

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
        : 0,
    );
  }, [initialMedia]);

  const goNextMedia = () => {
    if (currentIndex === mediaList.length - 1) {
      onCloseModal();
      return;
    }

    if (currentIndex < mediaList.length - 1) {
      setCurrentIndex(currentIndex + 1);
      return;
    }
  };

  console.log({ initialMedia, currentIndex, mediaList });

  return (
    <Dialog
      opened={isOpened}
      isCentered
      onClose={() => {
        onCloseModal();
      }}
    >
      <Backdrop />

      <DialogContent>
        <div className={styles.image}>
          <Image
            src={mediaUrls[currentIndex]}
            alt={mediaAlts[currentIndex]}
            width={800}
            height={600}
          />
        </div>
        <div className={styles['close-btn']}>
          <IconButton size="large" onClick={onCloseModal}>
            <CloseIcon />
          </IconButton>
        </div>
        <button onClick={goNextMedia}>next</button>
      </DialogContent>
    </Dialog>
  );
}

export default MediaLightbox;
