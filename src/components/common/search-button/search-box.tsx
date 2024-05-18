import { motionVariants } from '@/configs/motion-variants';

import Backdrop from '../backdrop';
import { Dialog, DialogBody, DialogContent } from '../dialog';

import { SearchBoxProps } from './search-button.type';

function SearchBox({ openedSearchBox, onCloseSearchBox }: SearchBoxProps) {
  return (
    <Dialog
      motionPreset={motionVariants.FLIP}
      isCentered
      // hasCloseOnEsc={false}
      opened={openedSearchBox}
      onClose={onCloseSearchBox}
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
  );
}

export default SearchBox;
