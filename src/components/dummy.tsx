'use client';

import { useTheme } from 'next-themes';
import { useState } from 'react';

import { motionVariants } from '@/configs/motion-variants';
import { themes } from '@/configs/themes';

import Backdrop from './common/backdrop';
import Button from './common/button';
import {
  Dialog,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogHeader,
  useDialogActions,
} from './common/dialog';
import IconButton from './common/icon-button';
import Link from './common/link';
import Pagination from './common/pagination';
import ArrowUpIcon from './icons/arrow-up-icon';

function Dummy() {
  const [currentPage, setCurrentPage] = useState(1);

  const { setTheme, resolvedTheme } = useTheme();

  const { showDialog, hideDialog } = useDialogActions();

  const handleToggleTheme = () => {
    const isDarkMode = resolvedTheme === themes.DARK;

    setTheme(isDarkMode ? themes.LIGHT : themes.DARK);
  };

  const showAuthModal = () => {
    showDialog(
      <Dialog
        motionPreset={motionVariants.FLIP}
        isCentered
        onClose={hideDialog}
      >
        <Backdrop />
        <DialogContent>
          <DialogHeader>
            <h4>MK Blog Login</h4>
          </DialogHeader>
          <DialogCloseTrigger
            label="close"
            // onClick={() => console.log('close')}
          />
          <DialogBody>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
            quibusdam quaerat quasi dolorum laboriosam facilis debitis quidem
            perferendis ad accusantium qui, expedita repellendus in dolore
            numquam, exercitationem, culpa sint. Nam.
          </DialogBody>
          <button onClick={showAuthModal1}>hello modal</button>
        </DialogContent>
      </Dialog>,
    );
  };

  const showAuthModal1 = () => {
    showDialog(
      <Dialog
        motionPreset={motionVariants.FLIP}
        isCentered
        onClose={hideDialog}
      >
        <Backdrop />
        <DialogContent>
          <DialogHeader>
            <h4>MK Blog Login</h4>
          </DialogHeader>
          <DialogBody>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
            quibusdam quaerat quasi dolorum laboriosam facilis debitis quidem
            perferendis ad accusantium qui, expedita repellendus in dolore
            numquam, exercitationem, culpa sint. Nam.
          </DialogBody>
          <button
            onClick={() => showDialog(<div onClick={hideDialog}>hello</div>)}
          >
            hello modal
          </button>
        </DialogContent>
      </Dialog>,
    );
  };

  return (
    <div>
      <div style={{ display: 'flex', gap: 24, margin: '48px' }}>
        <Button
          variant="contained"
          size="small"
          icon={{
            position: 'right',
            children: <ArrowUpIcon />,
            animation: 'shake-x',
          }}
          // rounded
          uppercase
          onClick={handleToggleTheme}
        >
          click me
        </Button>

        <Link href="/about">
          <Button
            variant="contained"
            size="medium"
            icon={{
              position: 'right',
              children: <ArrowUpIcon />,
              animation: 'shake-x',
            }}
            rounded
            loading={{
              enabled: false,
              position: 'left',
              // icon: <ArrowUpIcon data-testid="custom-loading-icon-left" />,
            }}
            // uppercase
            // disabled
            // onClick={handleToggleTheme}
          >
            click me
          </Button>
        </Link>

        <Button
          variant="contained"
          size="large"
          icon={{
            position: 'right',
            children: <ArrowUpIcon />,
            // animation: "shake-x",
            hidden: true,
          }}
          // rounded
          uppercase
          loading={{
            enabled: false,
            position: 'right',
          }}
          style={{ width: '170px' }}
          onClick={showAuthModal}
        >
          show me
        </Button>

        <Button
          variant="outlined"
          size="small"
          // icon={{
          //   position: "right",
          //   children: <ArrowUpIcon />,
          //   animation: "shake-x",
          // }}
          loading={{
            enabled: true,
            position: 'left',
            text: 'loading...',
          }}
          // rounded
          uppercase
          onClick={handleToggleTheme}
        >
          click me
        </Button>

        <Button
          variant="outlined"
          size="medium"
          icon={{
            position: 'left',
            children: <ArrowUpIcon />,
            animation: 'shake-y',
            // hidden: true,
          }}
          // rounded
          uppercase
          style={{ width: '136px' }}
          onClick={handleToggleTheme}
        >
          click me
        </Button>

        <Button
          variant="outlined"
          size="large"
          icon={{
            position: 'right',
            children: <ArrowUpIcon />,
            animation: 'shake-y',
            hidden: true,
          }}
          // rounded
          uppercase
          onClick={handleToggleTheme}
        >
          click me
        </Button>

        <Button
          variant="text"
          size="small"
          icon={{
            position: 'right',
            children: <ArrowUpIcon />,
            animation: 'shake-x',
          }}
          // rounded
          uppercase
          onClick={handleToggleTheme}
        >
          click me
        </Button>

        <Button
          variant="text"
          size="medium"
          icon={{
            position: 'right',
            children: <ArrowUpIcon />,
            animation: 'shake-x',
          }}
          loading={{
            enabled: true,
            text: 'loading...',
          }}
          // rounded
          uppercase
          onClick={handleToggleTheme}
        >
          click me
        </Button>

        <Button
          variant="text"
          size="large"
          icon={{
            position: 'right',
            children: <ArrowUpIcon />,
            // animation: "shake-x",
            hidden: true,
          }}
          // rounded
          uppercase
          style={{ width: '170px' }}
          onClick={handleToggleTheme}
        >
          click me
        </Button>

        <Button
          variant="link"
          size="small"
          // icon={{
          //   position: "right",
          //   children: <ArrowUpIcon />,
          //   // animation: "shake-x",
          //   hidden: true,
          // }}
          // rounded
          uppercase
        >
          click me
        </Button>
        <Button
          variant="link"
          size="medium"
          icon={{
            position: 'right',
            children: <ArrowUpIcon />,
            // animation: "shake-x",
            hidden: true,
          }}
          // rounded
          uppercase
          onClick={handleToggleTheme}
        >
          click me
        </Button>
        <Button
          variant="link"
          size="large"
          icon={{
            position: 'right',
            children: <ArrowUpIcon />,
            animation: 'shake-x',
            hidden: true,
          }}
          // rounded
          uppercase
          style={{ width: '170px' }}
          onClick={handleToggleTheme}
        >
          click me
        </Button>
      </div>

      <div style={{ display: 'flex', gap: 24, margin: '48px' }}>
        <IconButton variant="contained" size="small" color="base" label="hehe">
          <ArrowUpIcon />
        </IconButton>
        <IconButton
          variant="contained"
          size="medium"
          color="primary"
          label="hehe"
        >
          <ArrowUpIcon />
        </IconButton>
        <IconButton variant="contained" size="large" color="base" label="hehe">
          <ArrowUpIcon />
        </IconButton>
        <IconButton
          variant="contained"
          size="large"
          color="base"
          label="hehe"
          rounded
        >
          <ArrowUpIcon />
        </IconButton>

        <IconButton variant="outlined" size="small" color="base" label="hehe">
          <ArrowUpIcon />
        </IconButton>
        <IconButton
          variant="outlined"
          size="medium"
          color="primary"
          label="hehe"
        >
          <ArrowUpIcon />
        </IconButton>
        <IconButton variant="outlined" size="large" color="base" label="hehe">
          <ArrowUpIcon />
        </IconButton>
        <IconButton
          variant="outlined"
          size="large"
          color="primary"
          label="hehe"
          rounded
        >
          <ArrowUpIcon />
        </IconButton>
      </div>

      <div style={{ display: 'flex', margin: '48px' }}>
        <Pagination
          totalCount={80}
          pageSize={10}
          currentPage={currentPage}
          siblingCount={1}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
}

export default Dummy;
