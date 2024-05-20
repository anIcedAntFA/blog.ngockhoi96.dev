import { ElementRef, RefObject } from 'react';

export type SearchBoxProps = {
  searchBtnRef?: RefObject<ElementRef<'button'>>;
  openedSearchBox: boolean;
  onCloseSearchBox: VoidFunction;
};
