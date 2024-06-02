import { createPortal } from 'react-dom';

import type { PortalProps } from './portal.type';

function Portal({ container, children }: PortalProps) {
  if (container) {
    return createPortal(children, container);
  }

  return createPortal(
    <div id="app-portal" data-testid="app-portal">
      {children}
    </div>,
    document.body,
  );
}

export default Portal;
