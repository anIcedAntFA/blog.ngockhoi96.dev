import { LinkProps } from 'next/link';

export type GithubStarButtonProps = {
  href: LinkProps['href'];
  count: number;
};
