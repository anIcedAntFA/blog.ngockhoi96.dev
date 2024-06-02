import { Link as LocalizedLink } from '@/i18n/navigation';
import type { Pathname } from '@/types/locales';

import type { LinkProps } from './link.type';

function Link<TPathname extends Pathname>({
  children,
  href,
  to,
  ...restProps
}: LinkProps<TPathname>) {
  if (!href || to) {
    return (
      <a href={to} {...restProps}>
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

export default Link;
