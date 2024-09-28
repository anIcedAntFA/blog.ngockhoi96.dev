'use client';

import type { ElementRef } from 'react';
import { useRef } from 'react';
import { useTranslations } from 'use-intl';

import SearchIcon from '@/components/icons/search-icon';
import { keyboardCommands } from '@/configs/constants';
import useBoolean from '@/hooks/use-boolean';
import useKeyboardCommands from '@/hooks/use-keyboard-commands';
import { equal } from '@/utils/equal';

import Flex from '../flex';
import Kbd from '../kbd';
import VisuallyHidden from '../visually-hidden';

import SearchBox from './search-box/search-box';
import styles from './search-button.module.css';

function SearchButton() {
  const searchBtnRef = useRef<ElementRef<'button'>>(null);

  const t = useTranslations('components.search.searchButton');

  const openSearchBox = useBoolean(false);

  useKeyboardCommands({
    callback: (key) => {
      if (equal(key, keyboardCommands.CMD_K)) {
        openSearchBox.on();
      } else if (equal(key, keyboardCommands.ESCAPE)) {
        openSearchBox.off();
      }
    },
  });

  return (
    <>
      <button
        ref={searchBtnRef}
        type='button'
        aria-label={t('placeholder')}
        data-active={openSearchBox.value}
        className={styles.root}
        onClick={openSearchBox.on}
      >
        <span className={styles.icon}>
          <SearchIcon />
        </span>
        <Flex className={styles['text-and-kbd']}>
          <p className={styles.text}>{t('placeholder')}</p>
          <Flex align='center' spacing={4}>
            <VisuallyHidden>{t('press')}</VisuallyHidden>
            <Kbd>
              <abbr title='Control'>Ctrl</abbr>
            </Kbd>
            <VisuallyHidden>{t('and')}</VisuallyHidden>
            <Kbd>K</Kbd>
            <VisuallyHidden>{t('toSearch')}</VisuallyHidden>
          </Flex>
        </Flex>
      </button>

      <SearchBox
        searchBtnRef={searchBtnRef}
        openedSearchBox={openSearchBox.value}
        onCloseSearchBox={openSearchBox.off}
      />
    </>
  );
}

export default SearchButton;
