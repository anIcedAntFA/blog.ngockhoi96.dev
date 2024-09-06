import type { ComponentProps, ElementType } from 'react';

import Link from '@/components/common/link';
import VisuallyHidden from '@/components/common/visually-hidden';
import HashIcon from '@/components/icons/hash-icon';

import styles from './mdx.module.css';

type HeadingElement = Extract<
  ElementType,
  'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
>;

type MdxHeadingProps = ComponentProps<'h2'> & {
  as: HeadingElement;
  headingId?: string;
};

const getStringFromId = (id?: string) => {
  if (!id) return '';
  return id.replace(/-/g, ' ');
};

function MdxHeading({ as, children, ...headingProps }: MdxHeadingProps) {
  const Element = as || 'h2';

  const { id } = headingProps;
  const idString = getStringFromId(id);

  return (
    <Element className={styles.heading} data-heading={as} {...headingProps}>
      <Link
        to={`#${id}`}
        aria-label={`Permalink: ${idString}`}
        aria-hidden
        tabIndex={-1}
      >
        <VisuallyHidden>{`Read the "${idString}" section`}</VisuallyHidden>
        <span className={styles['heading-hash-icon']}>
          <HashIcon />
        </span>
      </Link>
      {children}
    </Element>
  );
}

export default MdxHeading;
