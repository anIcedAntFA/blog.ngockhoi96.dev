import { type ComponentProps } from 'react';

import Link from '../common/link';

import MdxCopyLinkBtn from './mdx-copy-link-button';

export const htmlComponents = {
  a: Link,
  h1: ({ children, ...headingProps }: ComponentProps<'h1'>) => (
    <h1 {...headingProps}>
      {children}
      <MdxCopyLinkBtn size="large" />
    </h1>
  ),
  h2: ({ children, ...headingProps }: ComponentProps<'h2'>) => (
    <h2 {...headingProps}>
      {children}
      <MdxCopyLinkBtn size="large" />
    </h2>
  ),
  h3: ({ children, ...headingProps }: ComponentProps<'h3'>) => (
    <h3 {...headingProps}>
      {children}
      <MdxCopyLinkBtn size="medium" />
    </h3>
  ),
  h4: ({ children, ...headingProps }: ComponentProps<'h4'>) => (
    <h4 {...headingProps}>
      {children}
      <MdxCopyLinkBtn size="small" />
    </h4>
  ),
};
