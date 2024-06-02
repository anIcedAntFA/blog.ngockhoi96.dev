import type { ComponentProps } from 'react';

import type { Link as LocalizedLink } from '@/i18n/navigation';
import type { OverrideProps } from '@/types/common';
import type { Pathname } from '@/types/locales';

export type LinkProps<TPathname extends Pathname> = OverrideProps<
  ComponentProps<typeof LocalizedLink<TPathname>>,
  {
    href?: ComponentProps<typeof LocalizedLink<Pathname>>['href'];
  }
> & {
  to?: string;
};
