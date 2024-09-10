import { type ComponentProps } from 'react';

import NavItem from '../common/nav-item';

import type { MdxCodeBlockProps } from './mdx-code-block';
import MdxCodeBlock from './mdx-code-block';
import MdxCustomImage from './mdx-custom-image';
import MdxHeading from './mdx-heading';
import MdxImage from './mdx-image';
import styles from './mdx.module.css';

//* A list of wired HTML elements into custom React Components
export const htmlComponents = {
  h1: ({ children, ...props }: ComponentProps<'h1'>) => (
    <MdxHeading as="h1" {...props}>
      {children}
    </MdxHeading>
  ),
  h2: ({ children, ...props }: ComponentProps<'h2'>) => (
    <MdxHeading as="h2" {...props}>
      {children}
    </MdxHeading>
  ),
  h3: ({ children, ...props }: ComponentProps<'h3'>) => (
    <MdxHeading as="h3" {...props}>
      {children}
    </MdxHeading>
  ),
  h4: ({ children, ...props }: ComponentProps<'h4'>) => (
    <MdxHeading as="h4" {...props}>
      {children}
    </MdxHeading>
  ),
  p: (props: ComponentProps<'p'>) => (
    <p className={styles.paragraph} {...props} />
  ),
  a: (props: ComponentProps<'a'>) => (
    <a aria-label="link" className={styles.link} {...props} />
  ),
  code: (props: ComponentProps<'code'>) => (
    <code className={styles.code} {...props} />
  ),
  pre: (props: MdxCodeBlockProps) => (
    <MdxCodeBlock showLanguage showCopyButton {...props} />
  ),
  blockquote: (props: ComponentProps<'blockquote'>) => (
    <blockquote className={styles.blockquote} {...props} />
  ),
  strong: (props: ComponentProps<'strong'>) => (
    <strong className={styles.strong} {...props} />
  ),
  em: (props: ComponentProps<'em'>) => <em className={styles.em} {...props} />,
  ul: (props: ComponentProps<'ul'>) => <ul className={styles.ul} {...props} />,
  ol: (props: ComponentProps<'ol'>) => <ol className={styles.ol} {...props} />,
  hr: (props: ComponentProps<'hr'>) => <hr className={styles.hr} {...props} />,
  br: (props: ComponentProps<'br'>) => <br className={styles.br} {...props} />,
  img: MdxImage,
};

//* A list of React Components that we want to pass through to MDX
export const mdxComponents = {
  NavItem,
  Image: MdxCustomImage,
};
