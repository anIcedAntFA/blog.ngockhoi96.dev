import { ComponentProps } from 'react';

import { Link as LocalizedLink } from '@/i18n/navigation';
import { OverrideProps } from '@/types/common';
import { Pathname } from '@/types/locales';

export type LinkProps<TPathname extends Pathname> = OverrideProps<
  ComponentProps<typeof LocalizedLink<TPathname>>,
  {
    href?: ComponentProps<typeof LocalizedLink<Pathname>>['href'];
  }
> & {
  to?: string;
};
