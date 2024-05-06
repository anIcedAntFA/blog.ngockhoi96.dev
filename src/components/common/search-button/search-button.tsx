'use client';

import { ElementRef, useRef } from 'react';

import SearchIcon from '@/components/icons/search-icon';
import useBoolean from '@/hooks/use-boolean';
import useOutsideClick from '@/hooks/use-outside-click';

import Flex from '../flex';
import Kbd from '../kbd';
import VisuallyHidden from '../visually-hidden';

import SearchBox from './search-box';
import styles from './search-button.module.css';
import { SearchButtonProps } from './search-button.type';

function SearchButton({ placeholder }: SearchButtonProps) {
  const searchBtnRef = useRef<ElementRef<'button'>>(null);

  const openSearchBox = useBoolean(false);

  useOutsideClick({
    ref: searchBtnRef,
    handler: openSearchBox.off,
  });

  return (
    <>
      <button
        ref={searchBtnRef}
        type="button"
        aria-label={placeholder}
        data-active={openSearchBox.value}
        className={styles.root}
        onClick={openSearchBox.on}
      >
        <span className={styles.icon}>
          <SearchIcon />
        </span>
        <Flex className={styles['text-and-kbd']}>
          <p className={styles.text}>{placeholder}</p>
          <Flex align="center" spacing={4}>
            <VisuallyHidden>Press</VisuallyHidden>
            <Kbd>
              <abbr title="Control">Ctrl</abbr>
            </Kbd>
            <VisuallyHidden>and</VisuallyHidden>
            <Kbd>K</Kbd>
            <VisuallyHidden>to-search</VisuallyHidden>
          </Flex>
        </Flex>
      </button>

      {openSearchBox.value ? <SearchBox /> : null}
    </>
  );
}

export default SearchButton;
