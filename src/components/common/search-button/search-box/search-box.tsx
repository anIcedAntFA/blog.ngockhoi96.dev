import { ChangeEvent, ElementRef, useRef, useState } from 'react';

import Backdrop from '@/components/common/backdrop';
import {
  Dialog,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
} from '@/components/common/dialog';
import Divider from '@/components/common/divider';
import Flex from '@/components/common/flex';
import IconButton from '@/components/common/icon-button';
import Kbd from '@/components/common/kbd';
import VisuallyHidden from '@/components/common/visually-hidden';
import CancelIcon from '@/components/icons/cancel-icon';
import SearchIcon from '@/components/icons/search-icon';
import { motionPresets } from '@/configs/motion-variants';

import { SearchBoxProps } from '../search-button.type';

import styles from './search-box.module.css';

function SearchBox({
  searchBtnRef,
  openedSearchBox,
  onCloseSearchBox,
}: SearchBoxProps) {
  const [searchText, setSearchText] = useState<string>('');

  const inputRef = useRef<ElementRef<'input'>>(null);

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const handleSearchClear = () => {
    setSearchText('');
  };

  const handleCloseSearchBox = () => {
    setSearchText('');
    onCloseSearchBox();
  };

  return (
    <Dialog
      motionPreset={motionPresets.DROP_IN}
      initialFocusRef={inputRef}
      finalFocusRef={searchBtnRef}
      isCentered
      opened={openedSearchBox}
      onClose={handleCloseSearchBox}
    >
      <Backdrop />

      <DialogContent>
        <DialogHeader>
          <form className={styles['search-form']}>
            <label htmlFor="search">
              <span className={styles['search-icon']}>
                <SearchIcon />
              </span>
              <VisuallyHidden>Search</VisuallyHidden>
            </label>
            <input
              ref={inputRef}
              id="search"
              type="search"
              placeholder="What are you looking for?"
              value={searchText}
              className={styles.input}
              onChange={handleSearchChange}
            />
            {!!searchText && (
              <IconButton
                size="small"
                label="Clear text"
                onClick={handleSearchClear}
              >
                <CancelIcon />
              </IconButton>
            )}
          </form>
        </DialogHeader>
        <DialogCloseTrigger label="Close dialog" color="primary" />
        <Divider className={styles.divider} />
        <DialogBody>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
          quibusdam quaerat quasi dolorum laboriosam facilis debitis quidem
          perferendis ad accusantium qui, expedita repellendus in dolore
          numquam, exercitationem, culpa sint. Nam.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nam
          ipsam, atque odio ad quisquam nostrum laborum explicabo obcaecati
          maxime aliquid soluta ut inventore hic nisi libero quae minima qui.
        </DialogBody>
        <Divider className={styles.divider} />
        <DialogFooter className={styles.footer}>
          <Flex spacing={16}>
            <Flex align="center" spacing={8}>
              <VisuallyHidden>Press</VisuallyHidden>
              <Kbd color="primary">
                <abbr title="Enter">↵</abbr>
              </Kbd>
              <p>to select</p>
            </Flex>

            <Flex align="center" spacing={8}>
              <VisuallyHidden>Press</VisuallyHidden>
              <Kbd color="primary">
                <abbr title="Down">↓</abbr>
              </Kbd>
              <Kbd color="primary">
                <abbr title="Up">↑</abbr>
              </Kbd>
              <p>to navigate</p>
            </Flex>

            <Flex align="center" spacing={8}>
              <VisuallyHidden>Press</VisuallyHidden>
              <Kbd color="primary">
                <abbr title="Escape">Esc</abbr>
              </Kbd>
              <p>to close</p>
            </Flex>
          </Flex>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default SearchBox;
