import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Ellipsis from '../ellipsis';
import { ELLIPSIS } from '../pagination.config';

describe('Ellipsis', () => {
  it('should render ellipsis width default props', () => {
    render(<Ellipsis />);

    const ellipsis = screen.getByText(ELLIPSIS);

    expect(ellipsis).toHaveAttribute('aria-hidden', 'true');
    expect(ellipsis).toHaveAttribute('data-color', 'base');
  });

  it('should render ellipsis width primary color', () => {
    render(<Ellipsis color='primary' />);

    const ellipsis = screen.getByText(ELLIPSIS);

    expect(ellipsis).toHaveAttribute('data-color', 'primary');
  });
});
