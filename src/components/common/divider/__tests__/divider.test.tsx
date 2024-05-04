import { render, screen } from '@testing-library/react';
import { it, describe, expect } from 'vitest';

import Divider from '../divider';

describe('Divider', () => {
  it('should render with default props', () => {
    render(<Divider />);
    const divider = screen.getByRole('separator');

    expect(divider).toBeVisible();
    expect(divider).toHaveAttribute('data-orientation', 'horizontal');
    expect(divider).toHaveAttribute('data-variant', 'solid');
    expect(divider).toHaveAttribute('data-thickness', 'thin');
    expect(divider).toHaveAttribute('data-color', 'base');
    expect(divider).toHaveStyle({ width: '100%', height: '1px' });
    expect(divider).toHaveStyle({ borderWidth: '0 0 1px' });
  });

  it('should render with custom props', () => {
    render(
      <Divider
        orientation="vertical"
        variant="dotted"
        thickness="thick"
        color="primary"
        height="40px"
      />,
    );
    const divider = screen.getByRole('separator');

    expect(divider).toBeVisible();
    expect(divider).toHaveAttribute('data-orientation', 'vertical');
    expect(divider).toHaveAttribute('data-variant', 'dotted');
    expect(divider).toHaveAttribute('data-thickness', 'thick');
    expect(divider).toHaveAttribute('data-color', 'primary');
    expect(divider).toHaveStyle({ height: '40px', width: '1px' });
    expect(divider).toHaveStyle({ borderWidth: '0 3px 0 0' });
  });
});
