'use client';

import { Fragment, PropsWithChildren } from 'react';

import DialogProvider from './dialog-provider';
import ThemeProvider from './theme-provider';

function AppProvider({ children }: PropsWithChildren) {
  return (
    <Fragment>
      <DialogProvider />
      <ThemeProvider>{children}</ThemeProvider>
    </Fragment>
  );
}

export default AppProvider;
