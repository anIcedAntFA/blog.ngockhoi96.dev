import type { MessageKeys } from 'next-intl';

import type { ImageUrl } from '@/types/common';

export type ImageProps = {
  url: ImageUrl;
  alt: string;
};

export type ImageLightboxProps = {
  isOpened: boolean;
  initialImage: ImageProps | null;
  onCloseModal: VoidFunction;
  showCloseBtn?: boolean;
  showDownloadBtn?: boolean;
};

export type DownloadButtonProps = {
  onDownload: VoidFunction;
};

export type NavigationButtonProps = {
  type: 'prev' | 'next';
  onNavigate: VoidFunction;
};

export type TypeWithPropsKeys = MessageKeys<
  {
    previousButton: { title: string; ariaLabel: string };
    nextButton: { title: string; ariaLabel: string };
  },
  | 'previousButton.title'
  | 'previousButton.ariaLabel'
  | 'nextButton.title'
  | 'nextButton.ariaLabel'
>;
