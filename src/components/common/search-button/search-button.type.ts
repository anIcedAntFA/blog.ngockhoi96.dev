import { ElementRef, RefObject } from 'react';

export type SearchButtonProps = {
  placeholder: string;
};

export type SearchBoxProps = {
  searchBtnRef?: RefObject<ElementRef<'button'>>;
  openedSearchBox: boolean;
  onCloseSearchBox: VoidFunction;
};
