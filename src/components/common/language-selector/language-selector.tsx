'use client';

import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';
import { useTransition } from 'react';

import useBoolean from '@/hooks/use-boolean';
import { usePathname, useRouter } from '@/i18n/routing';
import type { Locale } from '@/types/locales';

import CustomTooltip from '../custom-tooltip';
import { Menu, MenuItem, MenuLabel, MenuList, MenuTrigger } from '../menu';

import {
  languageOptions,
  languageOptionsMap,
} from './language-selector.config';
import styles from './language-selector.module.css';

function LanguageSelector() {
  const [isPending, startTransition] = useTransition();

  const currentLocale = useLocale();

  const t = useTranslations('components.common.languageSelector');

  const router = useRouter();
  const pathname = usePathname();
  const showLanguageDropdown = useBoolean();

  const onSelectLanguage = (nextLocale: Locale) => {
    showLanguageDropdown.off();
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <Menu
      opened={showLanguageDropdown.value}
      placement="bottom-end"
      color="primary"
      offset={12}
      hasClosedOnSelect={false}
      onOpen={showLanguageDropdown.on}
      onClose={showLanguageDropdown.off}
    >
      <CustomTooltip label={t('tooltipLabel')} hasArrow>
        <div>
          <MenuTrigger
            className={styles['toggle-btn']}
            disabled={isPending}
            onClick={showLanguageDropdown.toggle}
          >
            <Image
              src={languageOptionsMap[currentLocale].image}
              alt={languageOptionsMap[currentLocale].alt}
              width={24}
              height={24}
              priority
              className={styles['trigger-image']}
            />
            <span className={styles['trigger-label']}>
              {languageOptionsMap[currentLocale].value}
            </span>
          </MenuTrigger>
        </div>
      </CustomTooltip>

      <MenuList
        initial={{ width: 86, height: 54, opacity: 0.5 }}
        animate={{
          width: 172,
          height: 108,
          opacity: 1,
          transition: { ease: 'easeOut', duration: 0.3 },
        }}
        exit={{
          width: 0,
          height: 0,
          opacity: 0,
          transition: { ease: 'easeIn', delay: 0.1, duration: 0.3 },
        }}
      >
        {languageOptions.map((item, index) => (
          <MenuItem
            key={item.value}
            initial={{ opacity: 0, scale: 0.2, x: '-200px' }}
            animate={{
              opacity: 1,
              scale: 1,
              x: 0,
              transition: {
                ease: 'easeInOut',
                duration: 0.3,
                delay: 0.1 * index,
              },
            }}
            exit={{
              opacity: 0,
              scale: 0,
              x: '200px',
              transition: {
                ease: 'easeInOut',
                duration: 0.3,
                delay: 0.1 * (languageOptions.length - index),
              },
            }}
            transition={{
              ease: 'easeInOut',
              duration: 0.3,
              delay: 0.1 * index,
            }}
            onClick={() => onSelectLanguage(item.value as Locale)}
          >
            <Image src={item.image} alt={item.alt} width={28} height={28} />
            <MenuLabel>{item.title}</MenuLabel>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default LanguageSelector;
