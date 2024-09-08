import { useTranslations } from 'next-intl';
import { type ComponentProps, type ElementType } from 'react';

import Link from '@/components/common/link';
import VisuallyHidden from '@/components/common/visually-hidden';
import HashIcon from '@/components/icons/hash-icon';
import type { Size } from '@/types/constants';

import MdxCopyLinkButton from './mdx-copy-link-button';
import styles from './mdx.module.css';

type HeadingElement = Extract<ElementType, 'h1' | 'h2' | 'h3' | 'h4'>;

export type MdxHeadingProps = ComponentProps<'h2'> & {
  as: HeadingElement;
};

const getStringFromId = (id?: string) => {
  if (!id) return '';
  return id.replace(/-/g, ' ');
};

function MdxHeading({ as, children, ...headingProps }: MdxHeadingProps) {
  const t = useTranslations('components.markdown.mdxHeading');

  const Element = as || 'h2';

  const { id } = headingProps;
  const idString = getStringFromId(id);

  const headingWithSizes: Record<HeadingElement, Size> = {
    h1: 'large',
    h2: 'large',
    h3: 'medium',
    h4: 'medium',
  };

  return (
    <Element className={styles.heading} data-heading={as} {...headingProps}>
      <Link
        to={`#${id}`}
        aria-label={`${t('ariaLabel')} ${idString}`}
        aria-hidden
        tabIndex={-1}
      >
        <VisuallyHidden>
          {t('visuallyHidden', { id: `"${idString}"` })}
        </VisuallyHidden>
        <span className={styles['heading-hash-icon']}>
          <HashIcon />
        </span>
      </Link>
      {children}
      <MdxCopyLinkButton size={headingWithSizes[as]} headingId={id} />
    </Element>
  );
}

export default MdxHeading;
