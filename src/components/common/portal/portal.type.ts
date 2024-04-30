import { ReactNode } from 'react';

export type PortalProps = {
  container?: Element | DocumentFragment;
  children: ReactNode;
};
