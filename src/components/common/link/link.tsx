import { forwardRef, type ForwardedRef } from 'react';

import { Link as LocalizedLink } from '@/i18n/routing';

import type { LinkProps } from './link.type';

function Link(
  { children, href, to, ...restProps }: LinkProps,
  ref: ForwardedRef<HTMLAnchorElement>,
) {
  if (!href || to) {
    return (
      <a ref={ref} href={to} {...restProps}>
        {children}
      </a>
    );
  }

  return (
    <LocalizedLink href={href} {...restProps}>
      {children}
    </LocalizedLink>
  );
}

export default forwardRef(Link);
