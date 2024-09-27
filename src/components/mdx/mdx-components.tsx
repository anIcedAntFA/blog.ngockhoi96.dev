import { type ComponentProps } from 'react';

import Kbd from '../common/kbd';
import NavItem from '../common/nav-item';

import MdxCallout from './mdx-callout';
import MdxCodeBlock from './mdx-code-block';
import MdxCustomImage from './mdx-custom-image';
import MdxDetails from './mdx-details';
import MdxHeading from './mdx-heading';
import MdxImage from './mdx-image';
import MdxInlinedCode from './mdx-inlined-code';
import MdxLink from './mdx-link';
import styles from './mdx.module.css';

//* A list of wired HTML elements into custom React Components
export const htmlComponents = {
  h1: (props: ComponentProps<'h1'>) => <MdxHeading as='h1' {...props} />,
  h2: (props: ComponentProps<'h2'>) => <MdxHeading as='h2' {...props} />,
  h3: (props: ComponentProps<'h3'>) => <MdxHeading as='h3' {...props} />,
  h4: (props: ComponentProps<'h4'>) => <MdxHeading as='h4' {...props} />,
  p: (props: ComponentProps<'p'>) => (
    <p className={styles.paragraph} {...props} />
  ),
  mark: (props: ComponentProps<'mark'>) => (
    <mark className={styles.highlight} {...props} />
  ),
  blockquote: (props: ComponentProps<'blockquote'>) => (
    <blockquote className={styles.blockquote} {...props} />
  ),
  strong: (props: ComponentProps<'strong'>) => (
    <strong className={styles.strong} {...props} />
  ),
  em: (props: ComponentProps<'em'>) => (
    <em className={styles.emphasized} {...props} />
  ),
  ul: (props: ComponentProps<'ul'>) => (
    <ul className={styles['unordered-list']} {...props} />
  ),
  ol: (props: ComponentProps<'ol'>) => (
    <ol className={styles['ordered-list']} {...props} />
  ),
  li: (props: ComponentProps<'li'>) => (
    <li className={styles['list-item']} {...props} />
  ),
  hr: (props: ComponentProps<'hr'>) => (
    <hr className={styles.divider} {...props} />
  ),
  br: (props: ComponentProps<'br'>) => (
    <br className={styles.break} {...props} />
  ),
  table: (props: ComponentProps<'table'>) => (
    <table className={styles.table} {...props} />
  ),
  thead: (props: ComponentProps<'thead'>) => (
    <thead className={styles['table-head']} {...props} />
  ),
  th: (props: ComponentProps<'th'>) => (
    <th className={styles['table-head-cell']} {...props} />
  ),
  td: (props: ComponentProps<'td'>) => (
    <td className={styles['table-data-cell']} {...props} />
  ),
  a: MdxLink,
  img: MdxImage,
  code: MdxInlinedCode,
  pre: MdxCodeBlock,
};

//* A list of React Components that we want to pass through to MDX
export const mdxComponents = {
  Kbd,
  NavItem,
  Image: MdxCustomImage,
  Callout: MdxCallout,
  Details: MdxDetails,
};
