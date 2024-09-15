import type { ComponentProps } from 'react';

import type { Link as LocalizedLink } from '@/i18n/routing';
import type { OverrideProps } from '@/types/common';

export type LinkProps = OverrideProps<
  ComponentProps<typeof LocalizedLink>,
  {
    href?: ComponentProps<typeof LocalizedLink>['href'];
  }
> & {
  to?: string;
};
