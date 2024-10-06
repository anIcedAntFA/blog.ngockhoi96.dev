'use client';

import CustomTooltip from '@/components/common/custom-tooltip';
import IconButton from '@/components/common/icon-button';
import {
  MenuIcon,
  MenuItem,
  MenuLabel,
  MenuList,
  MenuTrigger,
} from '@/components/common/menu';
import Menu from '@/components/common/menu/components/menu';
import FacebookIcon from '@/components/icons/facebook-icon';
import LinkIcon from '@/components/icons/link-icon';
import LinkedInIcon from '@/components/icons/linked-in-icon';
import ShareIcon from '@/components/icons/share-icon';
import useBoolean from '@/hooks/use-boolean';

import styles from './article-share-button.module.css';

const shareOptions = [
  {
    title: 'Copy link',
    value: 'copy-link',
    icon: <LinkIcon />,
    separator: true,
  },
  { title: 'Share to LinkedIn', value: 'linkedin', icon: <LinkedInIcon /> },
  { title: 'Share to Facebook', value: 'facebook', icon: <FacebookIcon /> },
  { title: 'Share to Twitter', value: 'twitter', icon: <FacebookIcon /> },
];

function ArticleShareButton() {
  const showShareOptions = useBoolean(false);

  return (
    <>
      <Menu
        opened={showShareOptions.value}
        onOpen={showShareOptions.on}
        onClose={showShareOptions.off}
        offset={12}
        color='primary'
      >
        <MenuTrigger
          aria-label='Share this article'
          onClick={showShareOptions.toggle}
        >
          <CustomTooltip label='Share' hasArrow>
            <IconButton as='span' color='base' rounded>
              <ShareIcon />
            </IconButton>
          </CustomTooltip>
        </MenuTrigger>

        <MenuList
          initial={{ opacity: 0.5, y: -12 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { ease: 'easeOut', duration: 0.3 },
          }}
          exit={{
            opacity: 0,
            y: -12,
            transition: { ease: 'easeIn', duration: 0.3, delay: 0.1 },
          }}
          className={styles['menu-list']}
        >
          {shareOptions.map((item, index) => (
            <MenuItem
              key={item.value}
              initial={{ opacity: 0, scale: 0.2, x: -200 }}
              animate={{
                opacity: 1,
                scale: 1,
                x: 0,
                transition: {
                  ease: 'easeInOut',
                  duration: 0.3,
                  delay: 0.08 * index,
                },
              }}
              exit={{
                opacity: 0,
                scale: 0,
                x: 200,
                transition: {
                  ease: 'easeInOut',
                  duration: 0.2,
                  delay: 0.08 * (shareOptions.length - index),
                },
              }}
              onClick={() => {
                console.log(
                  `Share this article on ${item.title.toLowerCase()}`,
                );
              }}
            >
              <MenuIcon>{item.icon}</MenuIcon>
              <MenuLabel>{item.title}</MenuLabel>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
}

export default ArticleShareButton;
