import { isValidElement, type ComponentProps } from 'react';

import { Link } from '@/i18n/routing';

import ExternalLinkIcon from '../icons/external-link-icon';

import styles from './mdx.module.css';

type MdxLinkProps = ComponentProps<'a'>;

const EXTERNAL_HREF_REGEX = /https?:\/\/|www\./;

function MdxLink({ href, children, ...props }: MdxLinkProps) {
  const text = isValidElement(children) ? children.props.children : children;

  const isExternal = EXTERNAL_HREF_REGEX.test(href ?? '');

  return (
    <Link
      aria-label={`Read more about ${text}`}
      href={href ?? '/404'}
      {...(isExternal && { target: '_blank', rel: 'noreferrer' })}
      className={styles.link}
      {...props}
    >
      {children}
      {isExternal && (
        <span className={styles['external-link-icon']}>
          <ExternalLinkIcon />
        </span>
      )}
    </Link>
  );
}

export default MdxLink;
