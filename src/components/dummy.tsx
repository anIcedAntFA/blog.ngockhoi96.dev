'use client';

import { useTheme } from 'next-themes';
import { useState } from 'react';

import { themes } from '@/configs/themes';

import Button from './common/button';
import Link from './common/link';
import Pagination from './common/pagination';
import ArrowUpIcon from './icons/arrow-up-icon';

function Dummy() {
  const [currentPage, setCurrentPage] = useState(1);

  const { setTheme, resolvedTheme } = useTheme();

  const handleToggleTheme = () => {
    const isDarkMode = resolvedTheme === themes.DARK;

    setTheme(isDarkMode ? themes.LIGHT : themes.DARK);
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
          // onClick={handleToggleTheme}
        >
          click me
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
