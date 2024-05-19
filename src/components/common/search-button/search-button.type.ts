import { MessageKeys } from 'next-intl';
import { ElementRef, RefObject } from 'react';

import { Todo } from '@/types/common';

export type SearchButtonProps = {
  placeholder: Todo;
};

export type SearchBoxProps = {
  searchBtnRef?: RefObject<ElementRef<'button'>>;
  openedSearchBox: boolean;
  onCloseSearchBox: VoidFunction;
};
