'use client';

import Image from 'next/image';
import type { ElementRef } from 'react';
import { useEffect, useRef, useState } from 'react';

import ChevronLeftIcon from '@/components/icons/chervon-left-icon';
import ChevronRightIcon from '@/components/icons/chervon-right-icon';
import CloseIcon from '@/components/icons/close-icon';
import DownloadIcon from '@/components/icons/download-icon';
import type { ImageUrl } from '@/types/common';

import Backdrop from '../backdrop';
import Button from '../button';
import { Dialog, DialogContent, DialogFooter } from '../dialog';
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
  showCloseBtn?: boolean;
  showDownloadBtn?: boolean;
};

function MediaLightbox({
  isOpened,
  initialMedia,
  onCloseModal,
  showCloseBtn = true,
  showDownloadBtn = false,
}: MediaLightboxProps) {
  const [mediaList, setMediaList] = useState<ImageProps[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const nextBtnRef = useRef<ElementRef<'button'>>(null);
  const prevBtnRef = useRef<ElementRef<'button'>>(null);

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

  const mediaUrls = mediaList.map((img) => img.url);
  const mediaAlts = mediaList.map((img) => img.alt);

  const goPreviousMedia = () => {
    if (currentIndex === 0) {
      onCloseModal();
      return;
    }

    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      return;
    }
  };

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
      motionPreset="zoom-in"
      className={styles.dialog}
      onClose={() => {
        onCloseModal();
      }}
    >
      <Backdrop />

      <DialogContent className={styles['content']}>
        <div className={styles.image}>
          <Image
            src={mediaUrls[currentIndex]}
            alt={mediaAlts[currentIndex]}
            title="Zoom out on this image"
            fill
            onClick={onCloseModal}
          />
        </div>

        <DialogFooter className={styles['lightbox-footer']}>
          <div>information</div>
          <ul className={styles['list']}>
            {mediaList.map(({ url, alt }, index) => (
              <li key={String(url)}>
                <Image
                  src={url}
                  alt={alt}
                  title={alt}
                  width={80}
                  height={80}
                  className={styles['list-item']}
                  data-active={currentIndex === index}
                  onClick={() => setCurrentIndex(index)}
                />
              </li>
            ))}
          </ul>
          {showDownloadBtn && (
            <Button
              size="large"
              icon={{
                children: <DownloadIcon />,
                position: 'left',
                animation: 'shake-y',
              }}
            >
              Download
            </Button>
          )}
        </DialogFooter>

        {showCloseBtn && (
          <div className={styles['close-btn']}>
            <IconButton
              size="x-large"
              label="Close lightbox"
              title="Close"
              onClick={onCloseModal}
            >
              <CloseIcon />
            </IconButton>
          </div>
        )}

        {currentIndex > 0 && (
          <button
            ref={prevBtnRef}
            type="button"
            title="Previous"
            aria-label="Previous image"
            className={styles['previous-btn']}
            onClick={goPreviousMedia}
          >
            <span className={styles['previous-icon']}>
              <ChevronLeftIcon />
            </span>
          </button>
        )}

        {currentIndex < mediaList.length - 1 && (
          <button
            ref={nextBtnRef}
            type="button"
            title="Next"
            aria-label="Next image"
            className={styles['next-btn']}
            onClick={goNextMedia}
          >
            <span className={styles['next-icon']}>
              <ChevronRightIcon />
            </span>
          </button>
        )}
      </DialogContent>
    </Dialog>
  );
}

export default MediaLightbox;
