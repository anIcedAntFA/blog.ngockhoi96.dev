'use client';

import { ElementRef, useRef } from 'react';

import SearchIcon from '@/components/icons/search-icon';
import useBoolean from '@/hooks/use-boolean';
import useOutsideClick from '@/hooks/use-outside-click';

import Flex from '../flex';
import Kbd from '../kbd';

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
            <Kbd>
              <abbr title="control">Ctrl</abbr>
            </Kbd>
            <Kbd>K</Kbd>
          </Flex>
        </Flex>
      </button>

      {openSearchBox.value ? <SearchBox /> : null}
    </>
  );
}

export default SearchButton;
