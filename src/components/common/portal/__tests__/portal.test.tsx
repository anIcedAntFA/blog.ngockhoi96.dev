import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Portal from '../portal';

describe('Portal', () => {
  it('should render children with portal container', () => {
    render(
      <Portal>
        <div>content</div>
      </Portal>,
    );

    const portal = screen.getByTestId('app-portal');
    const content = screen.getByText('content');

    expect(portal).toBeInTheDocument();
    expect(portal).toContainElement(content);
  });

  it('should render children with custom container', () => {
    const customContainer = document.createElement('div');
    document.body.appendChild(customContainer);

    render(
      <Portal container={customContainer}>
        <span>custom content</span>
      </Portal>,
    );

    const customContent = screen.getByText('custom content');

    expect(customContainer).toContainElement(customContent);

    document.body.removeChild(customContainer);
  });
});
