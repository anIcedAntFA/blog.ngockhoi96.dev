import { type ComponentProps } from 'react';

import Link from '../common/link';

import MdxCopyLinkBtn from './mdx-copy-link-button';

export const htmlComponents = {
  a: Link,
  h1: ({ id, children, ...headingProps }: ComponentProps<'h1'>) => (
    <h1 id={id} {...headingProps}>
      {children}
      <MdxCopyLinkBtn size="large" headingId={id} />
    </h1>
  ),
  h2: ({ id, children, ...headingProps }: ComponentProps<'h2'>) => (
    <h2 id={id} {...headingProps}>
      {children}
      <MdxCopyLinkBtn size="large" headingId={id} />
    </h2>
  ),
  h3: ({ id, children, ...headingProps }: ComponentProps<'h3'>) => (
    <h3 id={id} {...headingProps}>
      {children}
      <MdxCopyLinkBtn size="medium" headingId={id} />
    </h3>
  ),
  h4: ({ id, children, ...headingProps }: ComponentProps<'h4'>) => (
    <h4 id={id} {...headingProps}>
      {children}
      <MdxCopyLinkBtn size="small" headingId={id} />
    </h4>
  ),
};
