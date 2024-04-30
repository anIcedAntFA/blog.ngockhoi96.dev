import { ReactNode } from 'react';

type TRootLayoutProps = {
  children: ReactNode;
};

// Since we have a `not-found.tsx` page on the root, a layout file
// is required, even if it's just passing children through.
export default function RootLayout({ children }: TRootLayoutProps) {
  return children;
}
