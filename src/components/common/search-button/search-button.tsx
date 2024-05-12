'use client';

import { ElementRef, useRef } from 'react';

import SearchIcon from '@/components/icons/search-icon';
import { keyboardCommands } from '@/configs/constants';
import { motionVariants } from '@/configs/motion-variants';
import useBoolean from '@/hooks/use-boolean';
import useKeyboardCommands from '@/hooks/use-keyboard-commands';

import Backdrop from '../backdrop';
import { Dialog, DialogBody, DialogContent } from '../dialog';
import Flex from '../flex';
import Kbd from '../kbd';
import VisuallyHidden from '../visually-hidden';

import styles from './search-button.module.css';
import { SearchButtonProps } from './search-button.type';

function SearchButton({ placeholder }: SearchButtonProps) {
  const searchBtnRef = useRef<ElementRef<'button'>>(null);

  const openSearchBox = useBoolean(false);

  useKeyboardCommands({
    callback: (key) => {
      if (key === keyboardCommands.CMD_K) {
        openSearchBox.on;
      } else if (key === keyboardCommands.ESCAPE) {
        openSearchBox.off;
      }
    },
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

      <Dialog
        motionPreset={motionVariants.FLIP}
        isCentered
        opened={openSearchBox.value}
        onClose={openSearchBox.off}
      >
        <Backdrop />
        <DialogContent>
          <DialogBody>
            <input type="text" />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
            quibusdam quaerat quasi dolorum laboriosam facilis debitis quidem
            perferendis ad accusantium qui, expedita repellendus in dolore
            numquam, exercitationem, culpa sint. Nam.
          </DialogBody>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default SearchButton;
