import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import Backdrop from '../backdrop';

describe('Backdrop', () => {
  it('should render the backdrop', () => {
    render(<Backdrop />);
    const backdrop = screen.getByTestId('backdrop');

    expect(backdrop).toBeInTheDocument();
    //* By default, the backdrop should be invisible
    expect(backdrop).not.toBeVisible();
    expect(backdrop).toHaveAttribute('aria-hidden', 'true');
  });
});
