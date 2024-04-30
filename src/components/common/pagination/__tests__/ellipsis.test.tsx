import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Ellipsis from '../ellipsis';
import { ELLIPSIS } from '../pagination.config';

describe('Ellipsis', () => {
  it('should render ellipsis', () => {
    render(<Ellipsis />);

    const ellipsis = screen.getByText(ELLIPSIS);

    expect(ellipsis).toHaveAttribute('aria-hidden', 'true');
  });
});
